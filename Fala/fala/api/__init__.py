from flask import Blueprint
api = Blueprint('api', __name__)
from .scripts import dictionary, translate, search_google, image_loader
from . import errors, views