import React, { useEffect, useState } from "react";
import Form from "./Form";
import Words from "./Words";
import APIService from "./APIService";
import { useWordContext } from "./WordContextProvider";

export default function Review() {
  const { words, insertWord, deleteWord } = useWordContext();

  const [editedWord, setEditedWord] = useState(null);

  const openForm = () => {
    setEditedWord({ word: "" });
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
      <Words words={words} deleteWord={deleteWord} />
    </div>
  );
}
