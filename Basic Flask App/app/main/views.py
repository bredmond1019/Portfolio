from flask import render_template, url_for
from . import main
from ..models import User

@main.route('/')
def index():
    User.query.all()
    return render_template('main/index.html')