from doggo.api.errors import bad_request
from . import api
from flask import json, jsonify, request, url_for
from doggo.models import User
from doggo.emails import send_email
from app import db


@api.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    return jsonify(User.query.get_or_404(id).to_dict())


@api.route('/users', methods=['GET'])
def get_users():
    page = request.args.get('page', 1, type=int)
    per_page = min(request.args.get('per_page', 10, type=int), 100)
    data = User.to_collection_dict(User.query, page, per_page, 'api.get_users')
    return jsonify(data)


@api.route('/register', methods=['POST'])
def register():
    data = request.get_json() or {}
    if 'email' not in data or 'password' not in data:
        return bad_request('must include email and password fields')
    if User.query.filter_by(email=data['email']).first():
        return bad_request('Please use a different email address')
    user = User()
    user.from_dict(data, new_user=True)
    db.session.add(user)
    db.session.commit()

    user = User.query.filter_by(
        email=data['email']).first()

    auth_token = user.get_token(confirmation=True)

    send_email(
        user.email,
        "Confirm Your Account",
        'email_confirm',
        user=user,
        token=auth_token
    )

    response = jsonify(user.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_user', id=user.id)
    return response


@api.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get_or_404(id)
    data = request.get_json() or {}
    print(data)
    if 'email' in data and data['email'] != user.email and User.query.filter_by(email=data['email']).first():
        return bad_request('Please use a different email address')
    user.from_dict(data, new_user=False)
    db.session.commit()
    return jsonify(user.to_dict())


@api.route('/users/delete/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = User.query.filter_by(id=id).first()
    db.session.delete(user)
    db.session.commit()
    return jsonify({"message": "User has been deleted"})
