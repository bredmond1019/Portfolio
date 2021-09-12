import os
from variables import DEV_DATABASE_URL

class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    @staticmethod
    def init_app(app):
        pass

class DevelopmentConfig(Config):
    DEBUG=True
    # SQLALCHEMY_DATABASE_URI = os.environ.get("DEV_DATABASE_URL")
    SQLALCHEMY_DATABASE_URI = DEV_DATABASE_URL


config = {'development' : DevelopmentConfig}