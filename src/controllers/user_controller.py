from flask import Blueprint, request, jsonify, g
from flask_jwt_extended import jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash
from pymysql.err import IntegrityError
from repositories.user_repository import UserRepository
from repositories.role_repository import RoleRepository
from utils.audit_decorator import audit_log
from utils.role_decorator import has_permission

user_bp = Blueprint("users", __name__)

@user_bp.route("/user", methods=["GET"])
def get_users():
    users = UserRepository.get_all_users()
    return jsonify([{k: v for k, v in user.items() if k != "password"} for user in users])

@user_bp.route("/user/<int:id>", methods=["GET"])
def get_user(id):
    user = UserRepository.get_user_by_id(id)
    if not user:
        return jsonify(message="User not found"), 404
    return jsonify({k: v for k, v in user.items() if k != "password"})

@user_bp.route("/user", methods=["POST"])
@jwt_required()
@has_permission("create_user")
@audit_log(entity="user", id_param="user_id")
def create_user():
    data = request.get_json()
    username, password, role = data.get("username"), data.get("password"), data.get("role", "user")

    role_rec = RoleRepository.find_by_name(role)
    if not role_rec:
        return jsonify(message="Invalid role"), 400

    hashed_password = generate_password_hash(password)

    try:
      user_id = UserRepository.create_user(username, hashed_password, role_rec["id"])
    except IntegrityError as e:
        if "Duplicate entry" in str(e):
            return jsonify(message="Username already exists"), 409
        raise

    g.audit_entity = {
        "entity": "user",
        "entity_id": user_id
    }

    return jsonify(message="User created successfully")

@user_bp.route("/user/<int:id>", methods=["PUT"])
@jwt_required()
@has_permission(["modify_any_user", "modify_own_user"])
@audit_log(entity="user", id_param="id")
def update_user(id):
    data = request.get_json()
    user = get_jwt_identity()
    target = UserRepository.get_user_by_id(id)
    if not target:
        return jsonify(message="User not found"), 404

    permissions = RoleRepository.get_permissions_by_role_id(user["role_id"])
    is_admin = "modify_any_user" in permissions
    is_self = target["id"] == user["id"]

    if not is_admin and not (is_self and "modify_own_user" in permissions):
        return jsonify(message="Forbidden"), 403

    if is_self and data.get("role"):
        return jsonify(message="You cannot change your own role"), 403

    if is_admin and not is_self:
        if RoleRepository.get_role_by_id(target["role_id"])["name"] == "admin":
            return jsonify(message="Cannot modify other admins"), 403

    fields = {}

    new_username = data.get("username")
    if new_username:
        existing = UserRepository.find_by_username(new_username)
        if existing and existing["id"] != target["id"]:
            return jsonify(message="Username is already taken"), 409
        fields["username"] = new_username

    if data.get("password"):
        fields["password"] = generate_password_hash(data["password"])

    if data.get("role") and is_admin and not is_self:
        role_rec = RoleRepository.find_by_name(data["role"])
        if not role_rec:
            return jsonify(message="Invalid role"), 400
        fields["role_id"] = role_rec["id"]

    updated = UserRepository.update_user(id, fields)
    return jsonify(message="User updated successfully" if updated else "Update failed")

@user_bp.route("/user/<int:id>", methods=["DELETE"])
@jwt_required()
@has_permission(["modify_any_user", "modify_own_user"])
@audit_log(entity="user", id_param="id")
def delete_user(id):
    user = get_jwt_identity()
    target = UserRepository.get_user_by_id(id)
    if not target:
        return jsonify(message="User not found"), 404

    permissions = RoleRepository.get_permissions_by_role_id(user["role_id"])
    is_admin = "modify_any_user" in permissions
    is_self = target["id"] == user["id"]

    if not is_admin and not (is_self and "modify_own_user" in permissions):
        return jsonify(message="Forbidden"), 403

    if is_admin and RoleRepository.get_role_by_id(target["role_id"])["name"] == "admin":
        return jsonify(message="Cannot delete other admins"), 403

    deleted = UserRepository.delete_user(id)
    return jsonify(message="User deleted successfully" if deleted else "Delete failed")
