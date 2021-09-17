from flask import render_template, jsonify, request
from . import auth
from flask_login import logout_user, login_required


@auth.route('/login', methods=['POST'])
def login():
    return jsonify({"token": "SecretCodeGoesHere"})


@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return jsonify({"logout": True})
