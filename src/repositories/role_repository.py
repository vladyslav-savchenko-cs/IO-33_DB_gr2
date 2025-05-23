from db import db_query

class RoleRepository:
    @staticmethod
    def find_by_name(name):
        result = db_query("SELECT * FROM roles WHERE name = %s", (name,))
        return result[0] if result else None

    @staticmethod
    def get_permissions_by_role_id(role_id):
        result = db_query("""
            SELECT p.name 
            FROM role_permissions rp
            JOIN permissions p ON rp.permission_id = p.id
            WHERE rp.role_id = %s
        """, (role_id,))
        return [row["name"] for row in result]

    @staticmethod
    def get_role_by_id(role_id):
        result = db_query("SELECT * FROM roles WHERE id = %s", (role_id,))
        return result[0] if result else None