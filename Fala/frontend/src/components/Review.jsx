import React, { useState } from "react";
import Form from "./Form";
import Words from "./Words";

export default function Review() {
  const [words, setWords] = useState([]);
  const [editedWord, setEditedWord] = useState(null);

  const openForm = () => {
    setEditedWord({ word: "" });
  };

  const insertWord = (word) => {
    const new_words = [...words, word];
    setWords(new_words);
  };

  return (
    <div className="review">
      <h1 className="title">Vocab Review</h1>
      <button className="btn-success btn insert-btn" onClick={openForm}>
        Add New Word
      </button>

      {editedWord ? <Form word={editedWord} insertWord={insertWord} /> : null}

      <Words words={words} />
    </div>
  );
}
