import React, { useEffect, useState } from "react";
import Form from "./Form";
import Words from "./Words";
import APIService from "./APIService";
import { useWordContext } from "./WordContextProvider";

export default function Review() {
  const { words, insertWord, deleteWord } = useWordContext();

  const [editedWord, setEditedWord] = useState(null);
  const [addWord, setAddWord] = useState(false);

  const openForm = () => {
    setAddWord(true);
    setEditedWord({ word: "" });
  };

  return (
    <div className="review-container">
      <div className="review-header">
        <div className="review-title-wrapper">
          <h1 className="review-title">Vocab Review</h1>
          <h2 className="review-subtitle">
            Here's Where You Can Review Your Vocab Words
          </h2>

          {/* {addWord ? (
            <Form
              word={editedWord}
              insertWord={insertWord}
              setAddWord={setAddWord}
            />
          ) : (
            <button
              className="btn-primary btn insert-btn-review"
              onClick={openForm}
            >
              Add New Word
            </button>
          )} */}
        </div>
        <div className="review-image-wrapper"></div>
      </div>
      <div className="word-tiles-wrapper">
        <Words words={words} deleteWord={deleteWord} />
      </div>
    </div>
  );
}
