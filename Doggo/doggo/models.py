from doggo import db, ma
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from . import login_manager
import datetime
import jwt
from flask import current_app


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


"""
Type of Role each User can have
    
    Administrator | User

"""


class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    users = db.relationship("User", backref='role')

    def __repr__(self):
        return f'<Role {self.name}>'


"""
Individual User Role


"""


class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(64), unique=True, index=True, nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    registered_on = db.Column(
        db.DateTime, nullable=False, default=datetime.datetime.now())
    password_hash = db.Column(db.String(128), nullable=False)
    confirmed = db.Column(db.Boolean, default=False)

    #
    # HASH the password
    #

    @property
    def password(self):
        raise AttributeError(
            'password is not a readable attribute')

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(
            password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    #
    # ENCODE Auth Token
    #

    def encode_auth_token(self, user_id, new_user=False):
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(
                    days=0,
                    seconds=3600 if new_user else 5
                ),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(
                payload,
                current_app.config.get(
                    'SECRET_KEY'),
                algorithm='HS256'
            )
        except Exception as e:
            return e

    #
    # DECODE auth token
    #

    @staticmethod
    def decode_auth_token(auth_token):
        try:
            payload = jwt.decode(
                auth_token,
                current_app.config.get(
                    'SECRET_KEY'),
                algorithms="HS256"
            )
            return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'

    def __repr__(self):
        return f"<User {self.email}>"


"""
User Role Schema
"""


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'email')


# To import these into the flask shell:
# from app import User, Role
