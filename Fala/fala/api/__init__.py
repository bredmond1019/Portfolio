from flask import Blueprint
api = Blueprint('api', __name__)
from . import dictionary, errors, translate, search_google
