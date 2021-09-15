import React, { useEffect, useState } from "react";
import Form from "./Form";
import Words from "./Words";
import APIService from "./APIService";

export default function Review() {
  const [words, setWords] = useState([]);
  const [editedWord, setEditedWord] = useState(null);

  useEffect(() => {
    APIService.GetWords()
      .then((resp) => setWords(resp))
      .catch((errors) => console.log(errors));
  }, []);

  const openForm = () => {
    setEditedWord({ word: "" });
  };

  const insertWord = (expression) => {
    APIService.TranslateExpression(expression)
      .then((resp) => {
        const { expression, translation } = resp;

        APIService.GetImage(translation)
          .then((resp) => {
            const url = resp.thumb;
            const new_word = {
              expression,
              translation,
              url,
            };

            APIService.InsertWord(new_word)
              .then((resp) => {
                const new_words = [...words, resp];
                setWords(new_words);
              })
              .catch((errors) => console.log(errors));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const deleteWord = (word) => {
    const new_words = words.filter((my_word) => {
      if (my_word.id === word.id) {
        return false;
      }
      return true;
    });
    setWords(new_words);
    APIService.DeleteWord(word.id);
  };

  return (
    <div className="review-container">
      <div className="review">
        <h1 className="title">Vocab Review</h1>
        <button
          className="btn-success btn insert-btn"
          onClick={openForm}
        >
          Add New Word
        </button>

        {editedWord ? (
          <Form word={editedWord} insertWord={insertWord} />
        ) : null}
      </div>
      <Words words={words} deleteWord={deleteWord} />
    </div>
  );
}
