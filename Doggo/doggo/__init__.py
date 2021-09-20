
from flask import Flask, render_template
from flask_mail import Mail
from flask_sqlalchemy import SQLAlchemy
from config import config
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_login import LoginManager

db = SQLAlchemy()
ma = Marshmallow()
mail = Mail()
login_manager = LoginManager()
login_manager.login_view = 'auth.login'


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    app.config.from_pyfile("../config.py")

    db.init_app(app)
    ma.init_app(app)
    mail.init_app(app)
    login_manager.init_app(app)

    CORS(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .api import api as api_blueprint
    app.register_blueprint(
        api_blueprint, url_prefix='/api/v1/')

    from .auth import auth as auth_bluerint
    app.register_blueprint(
        auth_bluerint, url_prefix='/auth')

    return app
