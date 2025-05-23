from flask import request, g
from db import db_execute

def audit_logger(response):
    try:
        if not hasattr(g, "audit_entity") or response.status_code >= 400:
            return response

        entity = g.audit_entity.get("entity")
        entity_id = g.audit_entity.get("entity_id")

        method_map = {"GET": "read", "PUT": "update", "DELETE": "delete", "POST": "create"}
        action = method_map.get(request.method)

        if entity and entity_id and action:
            db_execute(
                "INSERT INTO access_logs (action, entity, entity_id) VALUES (%s, %s, %s)",
                (action, entity, entity_id)
            )
    except Exception as e:
        print("Audit logging failed:", e)

    return response
