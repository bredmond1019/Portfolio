from flask import render_template, jsonify, request
from . import auth
from flask_login import logout_user, login_required, login_user
from doggo.models import User
from doggo import db


@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(
        email=data['email']).first()
    if user is not None and user.verify_password(data['password']):
        login_user(user)
        auth_token = user.encode_auth_token(
            user.id)

        return jsonify({"token": auth_token})

    return jsonify({"error": "Invalid email address or password"})


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({"logout": True})


@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    user = User(
        email=data['email'],
        password=data['password']
    )
    db.session.add(user)
    db.session.commit()

    auth_token = user.encode_auth_token(
        user.id, new_user=True)

    # NEED TO WRITE THIS FUNCTION STILL
    send_email(
        user.email,
        "Confirm Your Account",
        'email_confirm',
        user=user,
        token=auth_token
    )

    return jsonify(
        {"message": "A confirmation email has been sent to you by email"})


@auth.route('/confirm/<token>')
def confirm(token):
    print("Hello from Confirm")
    return jsonify({"confirmed": True})
