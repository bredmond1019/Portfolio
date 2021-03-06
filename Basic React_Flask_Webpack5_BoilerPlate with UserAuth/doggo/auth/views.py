from flask import render_template, jsonify, request, redirect, url_for, session
from . import auth
from flask_login import logout_user, login_required, login_user, current_user
from doggo.models import User
from doggo import db
from doggo.emails import send_email


@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(
        email=data['email']).first()
    if user is not None and user.verify_password(data['password']):
        # login_user(user)
        auth_token = user.encode_auth_token(
            user.id)
        return jsonify({"token": auth_token})

    return jsonify({"error": "Invalid email address or password"})


@auth.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    already_registered = User.query.filter_by(
        email=data['email']).first()

    if already_registered:
        return jsonify(
            {"message": "This email address is already registered."}
        )

    user = User(
        email=data['email'],
        password=data['password']
    )
    db.session.add(user)
    db.session.commit()

    user = User.query.filter_by(
        email=data['email']).first()

    auth_token = user.encode_auth_token(
        user.id)

    send_email(
        user.email,
        "Confirm Your Account",
        'email_confirm',
        user=user,
        token=auth_token
    )

    return jsonify(
        {"message": "A confirmation email has been sent to you by email"})


@auth.route('/confirm/<token>', methods=['GET'])
def confirm(token):

    response = User.decode_auth_token(token)
    if isinstance(response, int):
        user_id = response
        user = User.query.filter_by(id=user_id).first()
        if not user.confirmed:
            user.confirmed = True
            db.session.commit()
            data = {"confirmed": True,
                    "error": None}
        return redirect("http://localhost:8080/")
    data = {"error": response,
            "confirmed": False}

    #
    # TODO: Build out this view
    #

    return redirect(url_for('auth.errors'), data=data)


# DECIDED I DIDNT NEED FLASK TO LOGOUT, CAN HANDLE ON FRONTEND

# @auth.route('/logout', methods=['POST'])
# @login_required
# def logout():
#     # print(current_user)

#     logout_user()

#     return jsonify({"logout": True})
