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
      <div className="row">
        <div className="col">
          <h1 className="title">Vocab Review</h1>
        </div>
        <div className="row">
          <button className="btn-success btn" onClick={openForm}>
            Insert Article
          </button>
        </div>
      </div>

      {editedWord ? <Form word={editedWord} /> : null}
    </div>
  );
}
