import React from "react";

export class APIService {
  static InsertWord(word) {
    return fetch(
      "http://127.0.0.1:5000/api/v1/word/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(word),
      }
    ).then((resp) => resp.json());
  }

  static TranslateExpression(expression) {
    return fetch(
      `http://127.0.0.1:5000/api/v1/translate/${expression}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((resp) => resp.json());
  }

  static GetImage(translation) {
    return fetch(
      `http://127.0.0.1:5000/api/v1/image/${translation}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((resp) => resp.json());
  }
}

export default APIService;
