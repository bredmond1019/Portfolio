from . import api
from flask import jsonify, request
from doggo.models import User


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
    pass


@api.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    pass
