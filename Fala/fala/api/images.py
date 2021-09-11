from google_images_search import GoogleImagesSearch
from flask import jsonify, Flask
from . import api
from googleapiclient.discovery import build


import requests

import os

# gis = GoogleImagesSearch(
#     os.environ.get("GCS_DEVELOPER_KEY"),
#     os.environ.get("GCS_CX"),
# )

GCS_DEVELOPER_KEY = "AIzaSyAJ5jrgwgAZ7wrwm8a5F0ZLsZ1DM1bQrZc"
GCS_CX = "b693edbf3dc61b523"

# gis = GoogleImagesSearch(
#     GCS_DEVELOPER_KEY,
#     GCS_CX,
# )


@api.route("/<word>", methods=["GET"])
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
