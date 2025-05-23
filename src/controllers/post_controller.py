from flask import Blueprint, request, jsonify, g
from flask_jwt_extended import jwt_required, get_jwt_identity
from repositories.post_repository import PostRepository
from repositories.attachments_repository import AttachmentsRepository
from repositories.role_repository import RoleRepository
from utils.audit_decorator import audit_log
from utils.role_decorator import has_permission


post_bp = Blueprint("posts", __name__)

@post_bp.route("/post", methods=["GET"])
def get_all_posts():
    return jsonify(PostRepository.get_all_posts())

@post_bp.route("/post/<int:id>", methods=["GET"])
def get_post(id):
    post = PostRepository.get_post_by_id(id)
    if not post:
        return jsonify(message="Post not found"), 404
    return jsonify(post)

@post_bp.route("/post", methods=["POST"])
@jwt_required()
def create_post():
    data = request.get_json()
    user_id = get_jwt_identity()["id"]
    title = data.get("title")
    content = data.get("content")
    attachments = data.get("attachments", [])

    if not title or not content:
        return jsonify(message="Title and content are required"), 400

    post_id = PostRepository.create_post(title, content, user_id)

    g.audit_entity = {
        "entity": "post",
        "entity_id": post_id
    }

    for attachment in attachments:
        filename, path = attachment.get("filename"), attachment.get("path")
        if filename and path:
            AttachmentsRepository.create_attachment(filename, path, post_id)

    return jsonify(message="Post created successfully!", postId=post_id)

@post_bp.route("/post/<int:id>", methods=["PUT"])
@jwt_required()
@has_permission(["update_own_post", "update_any_post"])
@audit_log(entity="post", id_param="id")
def update_post(id):
    data = request.get_json()
    title, content = data.get("title"), data.get("content")
    user = get_jwt_identity()
    user_id = user["id"]
    permissions = RoleRepository.get_permissions_by_role_id(user["role_id"])

    post = PostRepository.get_post_by_id(id)
    if not post:
        return jsonify(message="Post not found"), 404

    is_admin = "update_any_post" in permissions
    is_owner = post["user_id"] == user_id and "update_own_post" in permissions

    if not is_admin and not is_owner:
        return jsonify(message="Forbidden"), 403

    PostRepository.update_post(id, title, content)
    return jsonify(message="Post updated successfully!")

@post_bp.route("/post/<int:id>", methods=["DELETE"])
@jwt_required()
@has_permission(["delete_own_post", "delete_any_post"])
@audit_log(entity="post", id_param="id")
def delete_post(id):
    user = get_jwt_identity()
    user_id = user["id"]
    permissions = RoleRepository.get_permissions_by_role_id(user["role_id"])

    post = PostRepository.get_post_by_id(id)
    if not post:
        return jsonify(message="Post not found"), 404

    is_admin = "delete_any_post" in permissions
    is_owner = post["user_id"] == user_id and "delete_own_post" in permissions

    if not is_admin and not is_owner:
        return jsonify(message="Forbidden"), 403

    PostRepository.delete_post(id)
    return jsonify(message="Post deleted successfully!")

@post_bp.route("/post/<int:post_id>/attachments", methods=["POST"])
@jwt_required()
@has_permission(["update_own_post", "update_any_post"])
def add_attachment(post_id):
    data = request.get_json()
    filename, path = data.get("filename"), data.get("path")
    user = get_jwt_identity()
    post = PostRepository.get_post_by_id(post_id)
    if not post:
        return jsonify(message="Post not found"), 404

    permissions = RoleRepository.get_permissions_by_role_id(user["role_id"])
    is_owner = post["user_id"] == user["id"]
    is_allowed = is_owner and "update_own_post" in permissions or "update_any_post" in permissions

    if not is_allowed:
        return jsonify(message="Insufficient permissions"), 403

    attachment_id = AttachmentsRepository.create_attachment(filename, path, post_id)

    g.audit_entity = {
        "entity": "attachment",
        "entity_id": attachment_id
    }

    return jsonify(message="Attachment added", attachmentId=attachment_id)

@post_bp.route("/attachments/<int:attachment_id>", methods=["DELETE"])
@jwt_required()
@has_permission(["update_own_post", "update_any_post"])
@audit_log(entity="attachment", id_param="attachment_id")
def delete_attachment(attachment_id):
    user = get_jwt_identity()
    permissions = RoleRepository.get_permissions_by_role_id(user["role_id"])

    attachment = AttachmentsRepository.get_attachment_by_id(attachment_id)
    if not attachment:
        return jsonify(message="Attachment not found"), 404

    post_id = attachment["post_id"]
    post = PostRepository.get_post_by_id(post_id)
    if not post:
        return jsonify(message="Related post not found"), 404

    is_owner = post["user_id"] == user["id"]
    is_allowed = is_owner and "update_own_post" in permissions or "update_any_post" in permissions

    if not is_allowed:
        return jsonify(message="Insufficient permissions"), 403

    AttachmentsRepository.delete_attachment(attachment_id)
    return jsonify(message="Attachment deleted")