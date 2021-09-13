import os
from flask import jsonify, Flask, request
from . import api
import requests


clientID = os.environ.get(
    "UNSPLASH_ACCESS_KEY")


# def get_unsplash_image(term)

# f"https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${clientID}"

@api.route('/test', methods=['POST'])
def test():
    print(request.get_json())

    return {"Hello": "World"}
