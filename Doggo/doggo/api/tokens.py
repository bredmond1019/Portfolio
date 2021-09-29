from flask import jsonify
from app import db
from doggo.api import api
from doggo.api.auth import basic_auth


@api.route('/tokens', method=['POST'])
# @basic_auth.login_required
def get_token():
    token = basic_auth.current_user().get_token()
    db.session.commit()
    return jsonify({'token': token})
