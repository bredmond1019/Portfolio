from blog import create_app, db, ma
from blog.models import User, Role
from flask_migrate import Migrate


app = create_app('development')
migrate = Migrate(app, db)


@app.shell_context_processor
def make_shell_context():
    return dict(db=db, User=User, Role=Role, ma=ma)
