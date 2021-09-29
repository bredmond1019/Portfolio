from flask.json import jsonify
from . import api
from flask import request, jsonify
from werkzeug.http import HTTP_STATUS_CODES


@api.app_errorhandler(404)
def page_not_found(e):
    if request.accept_mimetypes.accept_json and \
            not request.accept_mimetypes.accept_html:
        response = jsonify({'error': 'not found'})
        response.status_code = 404
        return response
    return print(e, request.accept_mimetypes)


def error_response(status_code, message=None):
    payload = {
        'error': HTTP_STATUS_CODES.get(status_code, 'Unknown Error')
    }
    if message:
        payload['message'] = message
    response = jsonify(payload)
    response.status_code = status_code
    return response


def bad_request(message):
    return error_response(400, message)
