import React from "react";

export default function Words(props) {
  return (
    <div className="word-tiles">
      {props.words &&
        props.words.map((word, i) => {
          return (
            <div className="word-tile" key={i}>
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
            </div>
          );
        })}
    </div>
  );
}
