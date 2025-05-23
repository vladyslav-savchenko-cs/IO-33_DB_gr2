from functools import wraps
from flask import jsonify
from flask_jwt_extended import get_jwt_identity
from repositories.role_repository import RoleRepository

def has_permission(required_permissions):
    if isinstance(required_permissions, str):
        required_permissions = [required_permissions]

    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            user = get_jwt_identity()
            permissions = RoleRepository.get_permissions_by_role_id(user["role_id"])

            if not any(p in permissions for p in required_permissions):
                return jsonify(message="Forbidden: Missing permission"), 403

            return fn(*args, **kwargs)
        return wrapper
    return decorator
