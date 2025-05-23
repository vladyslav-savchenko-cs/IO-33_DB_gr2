from functools import wraps
from flask import g

def audit_log(entity: str, id_param: str = "id"):
    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            entity_id = kwargs.get(id_param)
            if entity_id is not None:
                g.audit_entity = {
                    "entity": entity,
                    "entity_id": entity_id
                }
            return fn(*args, **kwargs)
        return wrapper
    return decorator