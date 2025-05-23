from db import db_query, db_execute
from repositories.attachments_repository import AttachmentsRepository

class PostRepository:
    @staticmethod
    def create_post(title, content, user_id):
        return db_execute("INSERT INTO posts (title, content, user_id) VALUES (%s, %s, %s)", (title, content, user_id))

    @staticmethod
    def get_post_by_id(post_id):
        result = db_query("SELECT * FROM posts WHERE id = %s", (post_id,))
        if not result:
            return None
        post = result[0]
        post["attachments"] = AttachmentsRepository.get_attachments_by_post_id(post_id)
        return post

    @staticmethod
    def get_all_posts():
        posts = db_query("SELECT * FROM posts")
        for post in posts:
            post["attachments"] = AttachmentsRepository.get_attachments_by_post_id(post["id"])
        return posts

    @staticmethod
    def update_post(post_id, title, content):
        db_execute("UPDATE posts SET title = %s, content = %s WHERE id = %s", (title, content, post_id))
        return True

    @staticmethod
    def delete_post(post_id):
        db_execute("DELETE FROM posts WHERE id = %s", (post_id,))
        return True