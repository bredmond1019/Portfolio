import React, { useEffect, useState } from "react";

import Form from "./Form";
import Words from "./Words";
import APIService from "./APIService";
import { useWordContext } from "./WordContextProvider";

import Modal from "./Modal";

export default function Review() {
  const { words, insertWord, deleteWord } = useWordContext();

  const [editedWord, setEditedWord] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showWordTile, setShowWordTile] = useState(false);

  const openModal = () => {
    setEditedWord({ word: "" });
    setIsOpen(true);
  };

  return (
    <div className="review-container">
      <div className="review-header-container">
        <div className="review-header">
          <div className="review-title-wrapper">
            <h1 className="review-title">Vocab Review</h1>
            <h2 className="review-subtitle">
              Here's Where You Can Review Your Vocab Words
            </h2>
          </div>
          <div className="review-image-wrapper"></div>
        </div>
      </div>

      <div className="word-tiles-wrapper">
        <div className="word-tiles-menu">
          <h1 className="word-tiles-menu-title">What would you like to do?</h1>
          <button
            className="modal-btn btn-primary btn insert-btn-review"
            onClick={openModal}
          >
            Add New Word
          </button>
          <button
            className="btn-primary btn insert-btn-review"
            onClick={(f) => f}
          >
            Review List of Words
          </button>
          <button
            className="btn-primary btn insert-btn-review"
            onClick={() => setShowWordTile(!showWordTile)}
          >
            {showWordTile ? "Close" : "Show"} Word Tiles
          </button>
        </div>

        <Words showWordTile={showWordTile} setShowWordTile={setShowWordTile} />
      </div>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <Form word={editedWord} insertWord={insertWord} setIsOpen={setIsOpen} />
      </Modal>
    </div>
  );
}
