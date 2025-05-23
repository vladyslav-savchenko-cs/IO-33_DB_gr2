from db import db_query, db_execute

class CommentRepository:
    @staticmethod
    def create_comment(content, user_id, post_id):
        return db_execute("INSERT INTO comments (content, user_id, post_id) VALUES (%s, %s, %s)", (content, user_id, post_id))

    @staticmethod
    def get_comments_by_post(post_id):
        return db_query("""
            SELECT c.*, u.username 
            FROM comments c
            JOIN users u ON c.user_id = u.id
            WHERE c.post_id = %s
            ORDER BY c.created_at DESC
        """, (post_id,))

    @staticmethod
    def delete_comment(comment_id):
        db_execute("DELETE FROM comments WHERE id = %s", (comment_id,))
        return True

    @staticmethod
    def get_comment_by_id(comment_id):
        result = db_query("SELECT * FROM comments WHERE id = %s", (comment_id,))
        return result[0] if result else None