from google_images_search import GoogleImagesSearch
from flask import jsonify, Flask
from . import api
import requests

import os

# gis = GoogleImagesSearch(
#     os.environ.get("GCS_DEVELOPER_KEY"),
#     os.environ.get("GCS_CX"),
# )

GCS_DEVELOPER_KEY = "AIzaSyAJ5jrgwgAZ7wrwm8a5F0ZLsZ1DM1bQrZc"
GCS_CX = "b693edbf3dc61b523"

gis = GoogleImagesSearch(
    GCS_DEVELOPER_KEY,
    GCS_CX,
)


@api.route("/<word>", methods=["GET"])
def search_word(word):
    _search_params = {
        "q": f"{word}",
        "num": 1,
        # "imgSize": "SMALL",
    }

    result = gis.search(
        search_params=_search_params,
        width=300,
        height=300)
    print(result)

    return jsonify(result)
