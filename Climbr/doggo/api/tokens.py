from flask import jsonify
from flask import request
from app import db
from doggo.api import api
from doggo.api.auth import basic_auth


@api.route('/tokens', methods=['POST'])
@basic_auth.login_required
def get_token():
    data = request.get_json()
    if 'google' in data and data['google']:
        print('Im inside google')
    token = basic_auth.current_user().get_token()
    db.session.commit()
    print(token)
    return jsonify({'token': token})
