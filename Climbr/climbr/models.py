
from climbr import db, ma


class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)

    users = db.relationship(
        "User", backref='role', lazy='dynamic')

    def __repr__(self):
        return f'<Role {self.name} >'


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(
        db.String(64), unique=True, index=True)

    role_id = db.Column(
        db.Integer, db.ForeignKey('roles.id'))
    profile_id = db.Column(
        db.Integer, db.ForeignKey('profiles.id'))
    profile = db.relationship(
        "Profile", backref='profile')

    def __repr__(self):
        return f"<User {self.email} >"


class Profile(db.Model):
    __tablename__ = 'profiles'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))

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
