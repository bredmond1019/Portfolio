import React from "react";

export default function Words(props) {
  return (
    <div className="word-tiles">
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
