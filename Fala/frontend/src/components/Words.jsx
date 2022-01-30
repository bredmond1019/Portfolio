import React from "react";

export default function Words(props) {
  return (
    <div className="word-tiles">
      {props.words &&
        props.words.map((word) => {
          return (
            <div className="word-tile" key={word.id}>
              <div className="word-tile-title">
                <h2 className="word-tile-expression">{word.expression}</h2>
                <button
                  className="btn-danger btn word-btn"
                  onClick={() => props.deleteWord(word)}
                >
                  {" "}
                  <strong className="word-tile-delete-btn">x</strong>
                </button>
              </div>
              <h3 className="word-tile-translation">{word.translation}</h3>
              <div className="word-tile-img-wrapper">
                <img src={word.url} alt="" className="expression-image" />
              </div>
            </div>
          );
        })}
    </div>
  );
}
