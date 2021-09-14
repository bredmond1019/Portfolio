import React, { useState } from "react";
import Form from "./Form";
import Words from "./Words";

export default function Review() {
  const [words, setWords] = useState([]);
  const [editedWord, setEditedWord] = useState(null);

  const openForm = () => {
    setEditedWord({ word: "" });
  };

  const insertWord = (expression) => {
    
    fetch(`http://127.0.0.1:5000/api/v1/translate/${expression}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
    },
  })
  .then(resp => (resp.json()))
  .then(resp => {
    const { word, translation } = resp
    

    fetch(`http://127.0.0.1:5000/api/v1/image/${translation}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
    },
    })
    .then(resp => resp.json())
    .then(resp => {
      const image = resp.thumb
      console.log(image)
      const new_words = [...words, {word, translation, image}];
      setWords(new_words);

    })
    .catch(error => console.log(error))
  })
  .catch(error => console.log(error))

  
    
  };

  return (
    <div className="review-container">
      <div className="review">
        <h1 className="title">Vocab Review</h1>
        <button className="btn-success btn insert-btn" onClick={openForm}>
          Add New Word
        </button>

        {editedWord ? <Form word={editedWord} insertWord={insertWord} /> : null}
      </div>
      <Words words={words} />
    </div>
  );
}
