from flask_jwt_extended import verify_jwt_in_request, get_jwt_identity
from functools import wraps
from flask import jsonify
from repositories.role_repository import RoleRepository

def jwt_required_custom():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            try:
                verify_jwt_in_request()
            except Exception:
                return jsonify(message="Unauthorized: Invalid or expired token"), 401
            return fn(*args, **kwargs)
        return decorator
    return wrapper

def has_permission(required_permissions):
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            try:
                verify_jwt_in_request()
                user = get_jwt_identity()
                permissions = RoleRepository.get_permissions_by_role_id(user["role_id"])

                if isinstance(required_permissions, str):
                    required = [required_permissions]
                else:
                    required = required_permissions

                if not any(p in permissions for p in required):
                    return jsonify(message="Forbidden: Insufficient permissions"), 403

                return fn(*args, **kwargs)
            except Exception:
                return jsonify(message="Unauthorized"), 401
        return decorator
    return wrapper
