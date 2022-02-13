
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import config
from flask_marshmallow import Marshmallow
# from flask_cors import CORS

from flask_graphql import GraphQLView


db = SQLAlchemy()
ma = Marshmallow()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)
    app.config.from_pyfile("../config.py")

    db.init_app(app)
    ma.init_app(app)

    from .schema import schema

    app.add_url_rule(
        '/graphql',
        view_func=GraphQLView.as_view(
            'graphql',
            schema=schema,
            graphiql=True  # for having the GraphiQL interface
        )
    )

    # CORS(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    from .api import api as api_blueprint
    app.register_blueprint(
        api_blueprint, url_prefix='/api/v1/')

    return app
