from flask import jsonify
from . import api
from random import choice
import requests


def get_random_word():
    with api.open_resource("verbs.txt", "r") as file:
        all_text = file.read()
        words = list(map( str, all_text.split()))

        word = choice(words)

    file.close()

    return word


def get_definition(word):
    url_prefix = "https://significado.herokuapp.com/"
    response = requests.get(url_prefix + word)
    return response.json()



@api.route('/', methods = ['GET'])
def get_word():
    # word = get_random_word()
    # definition = get_definition(word)
    # print(definition)
    # print(type(definition[0]))



    # return jsonify({"word": word, "definition" : definition})

    return jsonify({"Hello": "World"})