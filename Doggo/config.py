import os
# from variables import DEV_DATABASE_URL


class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.getenv(
        "SECRET_KEY", 'does not exist')
    MAIL_SERVER = os.environ.get(
        "MAIL_SERVER", 'smtp.gmail.com')
    MAIL_PORT = int(
        os.environ.get('MAIL_PORT', '465'))
    MAIL_USE_TLS = os.environ.get(
        'MAIL_USE_TLS', 'false')
    MAIL_USE_SSL = os.environ.get(
        "MAIL_USE_SSL", 'true')
    MAIL_USERNAME = os.environ.get(
        "MAIL_USERNAME")
    MAIL_PASSWORD = os.environ.get(
        'MAIL_PASSWORD')
    DOGGO_MAIL_SUBJECT_PREFIX = '[Doggo]'
    DOGGO_MAIL_SENDER = 'Doggo Admin <bj.redmond19@gmail.com>'
    DOGGO = os.environ.get('DOGGO_ADMIN')

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
