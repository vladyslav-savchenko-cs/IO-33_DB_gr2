from db import db_query, db_execute

class UserRepository:
    @staticmethod
    def create_user(username, password, role_id):
        return db_execute("INSERT INTO users (username, password, role_id) VALUES (%s, %s, %s)", (username, password, role_id))

    @staticmethod
    def find_by_username(username):
        result = db_query("SELECT * FROM users WHERE username = %s", (username,))
        return result[0] if result else None

    @staticmethod
    def get_user_by_id(user_id):
        result = db_query("SELECT * FROM users WHERE id = %s", (user_id,))
        return result[0] if result else None

    @staticmethod
    def get_all_users():
        return db_query("SELECT * FROM users")

    @staticmethod
    def update_user(user_id, fields):
        if not fields:
            return False
        set_clause = ", ".join([f"{k} = %s" for k in fields.keys()])
        values = list(fields.values()) + [user_id]
        db_execute(f"UPDATE users SET {set_clause} WHERE id = %s", values)
        return True

    @staticmethod
    def delete_user(user_id):
        db_execute("DELETE FROM users WHERE id = %s", (user_id,))
        return True