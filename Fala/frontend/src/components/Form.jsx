import React, { useState } from "react";

export default function Form(props) {
  const [review_word, setWord] = useState("");

  return (
    <div>
      {props.word ? (
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Vocab Word
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Please Enter a Word"
            value={review_word}
            onChange={(e) => setWord(e.target.value)}
          />
        </div>
      ) : null}
    </div>
  );
}
