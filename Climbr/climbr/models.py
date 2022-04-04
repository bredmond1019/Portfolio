
from climbr import db, login
from flask_login import UserMixin

from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)

    users = db.relationship(
        "User", backref='role', lazy='dynamic')

    def __repr__(self):
        return f'<Role {self.name} >'


class User(UserMixin, db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    # LOGIN INFO
    email = db.Column(
        db.String(64), unique=True, index=True, nullable=False)
    password_hash = db.Column(
        db.String(128), nullable=False)

    registered_on = db.Column(
        db.DateTime, nullable=False, default=datetime.now())
    confirmed = db.Column(db.Boolean, default=False)

    # RELATIONSHIPS
    role_id = db.Column(
        db.Integer, db.ForeignKey('roles.id'))
    profile_id = db.Column(
        db.Integer, db.ForeignKey('profiles.id'))
    profile = db.relationship(
        "Profile", backref='user')

    def __repr__(self):
        return f"<User {self.email} >"

    def set_password(self, password):
        self.password_hash = generate_password_hash(
            password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)


class Profile(db.Model):
    __tablename__ = 'profiles'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    about_me = db.Column(db.String(1000))

    # Prefer Trad, Sport, or Top Rope Climbing
    preferred_style_climbing = db.Column(
        db.String(20), default="Top Rope")
    skills = db.relationship("Skill")

    # Prefer to climb: Morning, Afternoon, Evening
    preferred_time_climb = db.Column(db.String(20))

    def __repr__(self):
        return f"<Profile {self.first_name} {self.last_name}: #{self.id} >"


class Skill(db.Model):
    __tablename__ = 'skills'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), unique=True,
                     index=True, nullable=False)

    # Flag for if this skill is the user's favorite
    preferred_skill = db.Column(
        db.Boolean, server_default='false')
    # Can the user lead climb this specific skill?
    can_lead = db.Column(db.Boolean, server_default='false')

    profile_id = db.Column(
        db.Integer, db.ForeignKey('profiles.id'))

    def __repr__(self):
        return f"<Skill {self.name} of Profile: >"
