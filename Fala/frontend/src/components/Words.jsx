import React from "react";

export default function Words(props) {
  return (
    <div className="word-tiles">
      {props.words &&
        props.words.map((word) => {
          return (
            <div className="word-tile" key={word.id}>
              <h2 className="expression">
                {word.expression}
              </h2>
              <h3 className="translation">
                {word.translation}
              </h3>
              <img
                src={word.url}
                alt=""
                className="expression-image"
              />
              <div className="word-btn-container">
                <button
                  className="btn-danger btn word-btn"
                  onClick={() => props.deleteWord(word)}
                >
                  <strong>x</strong>
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
