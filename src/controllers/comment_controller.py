from flask import Blueprint, request, jsonify, g
from flask_jwt_extended import jwt_required, get_jwt_identity
from repositories.comment_repository import CommentRepository
from repositories.role_repository import RoleRepository
from repositories.post_repository import PostRepository
from utils.audit_decorator import audit_log
from utils.role_decorator import has_permission

comment_bp = Blueprint("comments", __name__)

@comment_bp.route("/post/<int:post_id>/comment", methods=["POST"])
@jwt_required()
def create_comment(post_id):
    content = request.json.get("content")
    user_id = get_jwt_identity()["id"]

    if not content:
        return jsonify(message="Content and post ID are required"), 400
    
    if not PostRepository.get_post_by_id(post_id):
      return jsonify(message="Post not found"), 404

    comment_id = CommentRepository.create_comment(content, user_id, post_id)

    g.audit_entity = {
        "entity": "comment",
        "entity_id": comment_id
    }

    return jsonify(message="Comment created successfully", commentId=comment_id)

@comment_bp.route("/post/<int:post_id>/comment", methods=["GET"])
def get_comments(post_id):
    return jsonify(CommentRepository.get_comments_by_post(post_id))

@comment_bp.route("/comment/<int:comment_id>", methods=["DELETE"])
@jwt_required()
@has_permission(["delete_any_comment", "delete_own_comment"])
@audit_log(entity="comment", id_param="comment_id")
def delete_comment(comment_id):
    user = get_jwt_identity()
    comment = CommentRepository.get_comment_by_id(comment_id)
    if not comment:
        return jsonify(message="Comment not found"), 404

    role_permissions = RoleRepository.get_permissions_by_role_id(user["role_id"])
    is_owner = comment["user_id"] == user["id"]
    is_admin = "delete_any_comment" in role_permissions
    if not is_admin and not (is_owner and "delete_own_comment" in role_permissions):
        return jsonify(message="Unauthorized"), 403

    CommentRepository.delete_comment(comment_id)
    return jsonify(message="Comment deleted successfully")
