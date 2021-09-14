import React from "react";

export default function Words(props) {
  return (
    <div className="word-tiles">
      {props.words &&
        props.words.map((word, i) => {
          return (
            <div className="word-tile" key={i}>
              <h2>{word.word}</h2>
              <h3>{word.translation}</h3>
              <img src={word.image} alt="" />
            </div>
          );
        })}
    </div>
  );
}
