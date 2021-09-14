from flask import Flask, jsonify
from flask import request
from fala import db
from fala.models import User, Role, Words, WordSchema, UserSchema
from . import api



word_schema = WordSchema()
words_schema = WordSchema(many = True)

@api.route('/word/get', methods = ['GET'])
def get_words():
    all_words = Words.query.all()
    results = words_schema.dump(all_words)
    return jsonify(results)


@api.route('/word/add', methods = ["POST"])
def add_word():
    expression = request.json['expression']
    translation = request.json['translation']
    url = request.json['url']

    word = Words(expression, url, translation)
    db.session.add(word)
    db.session.commit()
    return word_schema.jsonify(word)

