from flask import jsonify, Flask
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



@api.route('/', methods = ['GET', 'OPTIONS'])
def get_word():
    word = get_random_word()
    definition = get_definition(word)
    # print(type(definition))
    # print(definition)



    return jsonify({"word": word, "definition" : definition})



[
    {'class': 'verbo transitivo direto e pronominal', 
     'meanings': 
        ['Fazer a descrição oral ou escrita de (algo, alguém ou si próprio): o professor descrevia o livro; descrevia-se com presunção.'], 
        'etymology': ''}, 
    {'class': 'verbo transitivo direto e bitransitivo', 
     'meanings': 
        ['[Por Extensão] Realizar uma narração de maneira detalhada; narrar: ordenou ao filho que (lhe) descrevesse a festa.'],
         'etymology': ''}, 
    {'class': 'verbo transitivo direto', 'meanings': ['Fazer o desenho de; criar de maneira gráfica; desenhar: descreveu a figura geométrica.', 'Representar a trajetória de: as cargas elétricas descrevem ondas eletromagnéticas.', '[Gramática] Particípio Irregular: descrito.'], 'etymology': 'Etimologia (origem da palavra descrever). Do latim describere.'}]