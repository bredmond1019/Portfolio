class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    @staticmethod
    def init_app(app):
        pass


class DevelopmentConfig(Config):
    DEBUG = True
    SQLALCHEMY_DATABASE_URI = 'postgresql://brandon:*****@localhost:5432/flaskql'


config = {
    'development': DevelopmentConfig,
    # 'testing': TestingConfig,

    'default': DevelopmentConfig}
