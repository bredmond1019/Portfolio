from doggo.api.errors import bad_request
from . import api
from flask import json, jsonify, request, url_for, abort
from doggo.models import User
from doggo.emails import send_email
from app import db
from doggo.api.auth import token_auth
from datetime import datetime, timedelta


'''
To access these routes, you must have in the headers:
        "Authorization:Bearer <token>"
'''


@api.route('/users/<int:id>', methods=['GET'])
@token_auth.login_required
def get_user(id):
    return jsonify(User.query.get_or_404(id).to_dict())


@api.route('/users', methods=['GET'])
@token_auth.login_required
def get_users():
    page = request.args.get('page', 1, type=int)
    per_page = min(request.args.get(
        'per_page', 10, type=int), 100)
    data = User.to_collection_dict(
        User.query, page, per_page, 'api.get_users')
    return jsonify(data)


@api.route('/google_login', methods=['POST'])
def google_login():
    data = request.get_json()
    if User.query.filter_by(email=data['email']).first():
        pass


@api.route('/register', methods=['POST'])
def register():
    data = request.get_json() or {}
    if 'email' not in data or 'password' not in data:
        # return bad_request('must include email and password fields')
        return jsonify('must include email and password fields')
    if User.query.filter_by(email=data['email']).first():
        # return bad_request('Please use a different email address')
        return jsonify(
            'This email address is already registered. \
                Please try a different email address.')
    if data['google']:
        data['token_exp'] = datetime.utcnow() + timedelta(seconds=3600)

    user = User()
    user.from_dict(data, new_user=True)
    db.session.add(user)
    db.session.commit()

    user = User.query.filter_by(
        email=data['email']).first()

    if data['google']:
        return jsonify({"success": True})
        # response = jsonify(user.to_dict())
        # response.status_code = 201
        # response.headers['Location'] = url_for('api.get_user', id=user.id)
        # return response

    auth_token = user.get_token()
    db.session.commit()

    send_email(
        user.email,
        "Confirm Your Account",
        'email_confirm',
        user=user,
        token=auth_token
    )

    return jsonify(
        {"message": "A confirmation email has been sent to you by email"})


@api.route('/confirm/<token>', methods=['GET'])
# @token_auth.login_required
def confirm_token(token):
    user = User.check_token(token)
    if user:
        user.confirmed = True
        db.session.commit()
        data = {"confirmed": True,
                "error": None}
        return data


@api.route('/users/<int:id>', methods=['PUT'])
@token_auth.login_required
def update_user(id):
    if token_auth.current_user().id != id:
        abort(403)
    user = User.query.get_or_404(id)
    data = request.get_json() or {}
    print(data)
    if 'email' in data and data['email'] != user.email and User.query.filter_by(email=data['email']).first():
        return bad_request('Please use a different email address')
    user.from_dict(data, new_user=False)
    db.session.commit()
    return jsonify(user.to_dict())


@api.route('/users/delete/<int:id>', methods=['DELETE'])
@token_auth.login_required
def delete_user(id):
    #
    # TODO: Make this an Administrator Only Task
    #
    if token_auth.current_user().id != id:
        abort(403)
    user = User.query.filter_by(id=id).first()
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User has been deleted"})
