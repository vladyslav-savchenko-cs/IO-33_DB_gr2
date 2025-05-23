from db import db_query, db_execute

class AttachmentsRepository:
    @staticmethod
    def create_attachment(filename, path, post_id):
        return db_execute("INSERT INTO attachments (filename, path, post_id) VALUES (%s, %s, %s)", (filename, path, post_id))

    @staticmethod
    def get_attachments_by_post_id(post_id):
        return db_query("SELECT id, filename, path, created_at FROM attachments WHERE post_id = %s", (post_id,))

    @staticmethod
    def get_attachment_by_id(attachment_id):
        result = db_query("SELECT * FROM attachments WHERE id = %s", (attachment_id,))
        return result[0] if result else None

    @staticmethod
    def delete_attachment(attachment_id):
        db_execute("DELETE FROM attachments WHERE id = %s", (attachment_id,))
        return True
