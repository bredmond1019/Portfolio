from fala import db, ma




class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)

    users = db.relationship("User", backref='role')

    def __repr__(self):
        return f'<Role {self.name}>'


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String(64), unique=True, index=True)


    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))

    def __repr__(self):
        return f"<User {self.email}>"


class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'email')




class Words(db.Model):
    __tablename__ = 'words'
    id = db.Column(db.Integer, primary_key=True)
    expression = db.Column(db.String(100), unique = True)
    url = db.Column(db.String(200))
    translation = db.Column(db.String(100))

    def __repr__(self):
        return f"<Word: expression: {self.expression}, translation: {self.translation}, url: {self.url} >"
    

class WordSchema(ma.Schema):
    class Meta:
        fields = ('id', 'word', 'url', 'translation')