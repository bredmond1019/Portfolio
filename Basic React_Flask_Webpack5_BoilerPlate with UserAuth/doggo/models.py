from doggo import db, ma
from flask import current_app, url_for
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from . import login_manager

from datetime import datetime, timedelta
import jwt
import os
import base64


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


class PaginatedAPIMixin(object):
    @staticmethod
    def to_collection_dict(query, page, per_page, endpoint, **kwargs):
        resources = query.paginate(page, per_page, False)
        data = {
            'items': [item.to_dict() for item in resources.items],
            '_meta': {
                'page': page,
                'per_page': per_page,
                'total_pages': resources.pages,
                'total_items': resources.total
            },
            '_links': {
                'self': url_for(endpoint, page=page, per_page=per_page, **kwargs),
                'next': url_for(endpoint, page=page + 1, per_page=per_page, **kwargs) if resources.has_next else None,
                'prev': url_for(endpoint, page=page - 1, per_page=per_page, **kwargs) if resources.has_prev else None
            }
        }
        return data


"""
Individual User Role


"""


class User(PaginatedAPIMixin, UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(
        db.String(64), unique=True, index=True, nullable=False)
    role_id = db.Column(
        db.Integer, db.ForeignKey('roles.id'))
    registered_on = db.Column(
        db.DateTime, nullable=False, default=datetime.now())
    password_hash = db.Column(
        db.String(128), nullable=False)
    confirmed = db.Column(db.Boolean, default=False)
    token = db.Column(
        db.String(140), index=True, unique=True)
    token_exp = db.Column(db.DateTime)

    def __repr__(self):
        return f"<User {self.email}>"

    def set_password(self, password):
        self.password_hash = generate_password_hash(
            password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    #
    # JSONIFY USER INFO
    #

    def to_dict(self):
        data = {
            'id': self.id,
            'email': self.email,
            '_links': {
                'self': url_for('api.get_user', id=self.id),
            }
        }
        return data

    def from_dict(self, data, new_user=False):
        for field in ['email', 'token', 'token_exp']:
            if field in data:
                setattr(self, field, data[field])
            if new_user and 'password' in data:
                self.set_password(data['password'])

    #
    # HANDLE AUTH TOKENS
    #

    def get_token(self, expires_in=3600):
        now = datetime.utcnow()
        if self.token and self.token_exp > now + timedelta(seconds=60):
            return self.token
        self.token = base64.b64encode(
            os.urandom(24)).decode('utf-8')
        self.token_exp = now + timedelta(seconds=expires_in)

        db.session.add(self)
        return self.token

    def revoke_token(self):
        self.token_exp = datetime.utcnow() - timedelta(second=1)

    @staticmethod
    def check_token(token):
        user = User.query.filter_by(token=token).first()
        if user is None or user.token_exp < datetime.utcnow():
            return None
        return user

    #
    # ENCODE Auth Token -- STOPED USING
    #

    # def encode_auth_token(self, user_id, expires_in=3600):
    #     now = datetime.utcnow()
    #     try:
    #         payload = {

    #             'exp': now + timedelta(  # Expiration of token
    #                 days=0,
    #                 seconds=expires_in
    #             ),
    #             'iat': now,  # Time token is generated
    #             'sub': user_id   # User the token is for
    #         }
    #         self.token = jwt.encode(
    #             payload,
    #             current_app.config.get(
    #                 'SECRET_KEY'),
    #             algorithm='HS256'
    #         )

    #         return self.token
    #     except Exception as e:
    #         return e

    # #
    # # DECODE auth token
    # #

    # @staticmethod
    # def decode_auth_token(auth_token):
    #     try:
    #         payload = jwt.decode(
    #             auth_token,
    #             current_app.config.get(
    #                 'SECRET_KEY'),
    #             algorithms="HS256"
    #         )
    #         return payload['sub']
    #     except jwt.ExpiredSignatureError:
    #         return 'Signature expired. Please log in again.'
    #     except jwt.InvalidTokenError:
    #         return 'Invalid token. Please log in again.'

     #
    # HASH the password
    #

    # @property
    # def password(self):
    #     raise AttributeError(
    #         'password is not a readable attribute')

    # @password.setter


"""
User Role Schema
"""


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'email')


# To import these into the flask shell:
# from app import User, Role, UserSchema
