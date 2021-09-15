from flask import jsonify, Flask
from .. import api
from .variables import GCS_DEVELOPER_KEY, GCS_CX, PROJECT

from google.cloud import translate


client = translate.TranslationServiceClient()


@api.route("/translate/<word>",
           methods=["GET"])
def translate(word):

    location = "global"

    parent = f"projects/{PROJECT}/locations/{location}"

    # Detail on supported types can be found here:
    # https://cloud.google.com/translate/docs/supported-formats
    response = client.translate_text(
        request={
            "parent": parent,
            "contents": [word],
            # mime types: text/plain,
            # text/html
            "mime_type": "text/plain",
            "source_language_code": "pt",
            "target_language_code": "en-US",
        }
    )

    translated = response.translations[0].translated_text

    return {"expression": word,
            "translation": translated
            }

    # # Display the translation for each input text provided
    # for translation in response.translations:
    #     print("Translated text: {}".format(translation.translated_text))
