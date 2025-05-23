from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from dotenv import load_dotenv
import os

from controllers.auth_controller import auth_bp
from controllers.user_controller import user_bp
from controllers.post_controller import post_bp
from controllers.comment_controller import comment_bp
from controllers.dataset_controller import dataset_bp

from middlewares.audit_middleware import audit_logger

load_dotenv()

app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET")

CORS(app)
jwt = JWTManager(app)

app.register_blueprint(auth_bp, url_prefix="/api")
app.register_blueprint(user_bp, url_prefix="/api")
app.register_blueprint(post_bp, url_prefix="/api")
app.register_blueprint(comment_bp, url_prefix="/api")
app.register_blueprint(dataset_bp, url_prefix="/api")

app.after_request(audit_logger)

if __name__ == "__main__":
    app.run(port=int(os.getenv("PORT", 5000)))
