import React from "react";
import { useState, useEffect } from "react";

const RandomWord = (props) => {
  useEffect(() => {
    // props && console.log(props);
    // props.definition.map((i) => {
    //   console.log(i);
    // });
  }, []);

  return (
    <div className="container">
      <h2>Palavra do Dia</h2>
      <h4 className="word">{props.word}</h4>
      {props.definition &&
        props.definition.map((def, i) => {
          console.log(def);
          return (
            <div className="definition" key={i}>
              <p>
                <span className="class">{def.class}</span> -- {def.meanings[0]}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default RandomWord;
