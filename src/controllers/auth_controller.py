from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from repositories.user_repository import UserRepository
from repositories.role_repository import RoleRepository

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/auth/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify(message="Username and password are required"), 400

    if UserRepository.find_by_username(username):
        return jsonify(message="Username is already taken"), 409

    hashed_password = generate_password_hash(password)
    role = RoleRepository.find_by_name("user")
    if not role:
        return jsonify(message="Default user role not found"), 500

    user_id = UserRepository.create_user(username, hashed_password, role["id"])
    return jsonify(message="User registered successfully!", userId=user_id), 201

@auth_bp.route("/auth/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = UserRepository.find_by_username(username)
    if not user or not check_password_hash(user["password"], password):
        return jsonify(message="Invalid credentials"), 401

    token = create_access_token(identity={"id": user["id"], "role_id": user["role_id"]})
    return jsonify(token=token)
