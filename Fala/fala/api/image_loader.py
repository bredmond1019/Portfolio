import os
from flask import jsonify, Flask, request
from . import api
import requests


clientID = os.environ.get(
    "UNSPLASH_ACCESS_KEY")


@api.route('/image/<term>',
           methods=['GET'])
def get_unsplash_image(term):
    url_prefix = "https://api.unsplash.com/search/photos?"

    params = {
        "page": 1,
        "query": term,
        "per_page": 1,
        "client_id": clientID
    }

    for k, v in params.items():
        url_prefix += f"{k}={v}&"

    print(url_prefix)
    print(url_prefix[:-1])

    response = requests.get(
        url_prefix[:-1])

    print(response.json())

    return response.json()[
        'results'][0]['urls']['small']


# f"https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${clientID}"


'''
This is how to send JSON back and forth
'''

# @api.route('/test', methods=['POST'])
# def test():
#     print(request.get_json())

#     return {"Hello": "World"}
