import React, { useState } from "react";
import Form from "./Form";

export default function Review() {
  const [words, setWords] = useState([]);
  const [editedWord, setEditedWord] = useState(null);

  const openForm = () => {
    setEditedWord({ word: "" });
  };

  return (
    <div className="review">
      <h1 className="title">Vocab Review</h1>
      <button className="btn-success btn insert-btn" onClick={openForm}>
        Insert Word
      </button>

      {editedWord ? <Form word={editedWord} /> : null}
    </div>
  );
}
