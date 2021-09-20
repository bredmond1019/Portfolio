import os
from doggo import create_app, db, ma
from doggo.models import User, Role
from flask_migrate import Migrate


app = create_app(
    os.getenv('FLASK_CONFIG') or 'default')
migrate = Migrate(app, db)


@app.shell_context_processor
def make_shell_context():
    return dict(db=db, User=User, Role=Role, ma=ma)


@app.cli.command()
def test():
    """ Run Unit Tests"""
    import unittest
    tests = unittest.TestLoader().discover('tests')
    unittest.TextTestRunner(
        verbosity=2).run(tests)
