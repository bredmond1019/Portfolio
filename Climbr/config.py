import os
# from variables import DEV_DATABASE_URL


class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv(
        "SECRET_KEY", 'does not exist')

    # FLASK MAIL SETTINGS

    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_USE_TLS = False
    MAIL_USE_SSL = True

    MAIL_PORT = int(os.environ.get('MAIL_PORT'))
    MAIL_USERNAME = os.environ.get("MAIL_USERNAME")
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    DOGGO_MAIL_SUBJECT_PREFIX = '[Doggo]'
    DOGGO_MAIL_SENDER = 'Doggo Admin <bj.redmond19@gmail.com>'
    MAIL_DEBUG = True

    DOGGO_ADMIN = os.environ.get('DOGGO_ADMIN')

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DEV_DATABASE_URL")


class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "TEST_DATABASE_URL")


config = {
    'development': DevelopmentConfig,
    'testing': TestingConfig,

    'default': DevelopmentConfig}
