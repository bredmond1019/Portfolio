from flask import render_template, jsonify, request
from . import auth
from flask_login import logout_user, login_required, login_user
from doggo.models import User


@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email = data['email']).first()
    if user is not None and user.verify_password(data['password']):
        login_user(user)
        auth_token = user.encode_auth_token(user.id)

        return {"token" : auth_token}
    
    return jsonify({"error": "Invalid email address or password"})


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({"logout": True})
