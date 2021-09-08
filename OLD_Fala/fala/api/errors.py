from flask.json import jsonify
from . import api
from flask import request, jsonify

@api.app_errorhandler(404)
def page_not_found(e):
    if request.accept_mimetypes.accept_json and \
        not request.accept_mimetypes.accept_html:
        response = jsonify({'error': 'not found'})
        response.status_code = 404
        return response
    return print(e, request.accept_mimetypes)