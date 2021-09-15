from flask import jsonify, Flask
from .. import api
from .variables import GCS_CX, GCS_DEVELOPER_KEY

from googleapiclient.discovery import build


def search_word(word):
    service = build(
        "customsearch",
        "v1",
        developerKey=GCS_DEVELOPER_KEY)

    res = service.cse().list(
        q=word,
        cx=GCS_CX,
        num=10,
        searchType="image",
        lr="lang_pt"
    ).execute()

    return jsonify(res)
