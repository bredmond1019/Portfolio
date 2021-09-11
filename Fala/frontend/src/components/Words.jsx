import React from "react";

export default function Words(props) {
  return (
    <div className="words">
      {props.words &&
        props.words.map((word) => {
          return (
            <div className="word-tile">
              <h2>{word}</h2>
            </div>
          );
        })}
    </div>
  );
}
