import React, { useState } from "react";

export default function Form(props) {
  const [review_word, setWord] = useState("");

  return (
    <div className="form-wrapper">
      {props.word ? (
        <div className="mb-3 form-container">
          <label htmlFor="title" className="form-label">
            Enter A Word
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Please Enter a Word"
            value={review_word}
            onChange={(e) => setWord(e.target.value)}
          />

          <button
            className="btn btn-primary mt-3"
            onClick={() => {
              props.insertWord(review_word);
              props.setIsOpen(false);
            }}
          >
            Insert
          </button>
        </div>
      ) : null}
    </div>
  );
}
