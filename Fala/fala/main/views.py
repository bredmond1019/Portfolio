from flask import render_template, url_for, Flask, jsonify, request
from . import main
from ..models import User, Role, UserSchema

user_schema = UserSchema()
users_schema = UserSchema(many=True)



@main.route('/', methods = ['GET'])
def get_users():
    all_users = User.query.all()
    print(all_users)
    results = users_schema.dump(all_users)

    return jsonify({"all_users": results})
    
    
