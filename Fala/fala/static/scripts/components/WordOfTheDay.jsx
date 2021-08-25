import React from "react";
import "../css/WordOfDay";

const WordOfTheDay = (props) => {
  /* props = {word : "alguma_palavara", 
      definition: 
        0: 
          class : type of word, 
          etymology: some etymology
          meaning :
            0: meaning_0 , 
        
        1:
          class :
          ety:
          meaning:  
      }
  */

  return (
    <div className="WordOfDay container">
      <h2 className="title">Palavra do Dia</h2>
      <h4 className="word">
        <strong>{props.word}</strong>
      </h4>
      {props.definition &&
        props.definition.map((def, i) => {
          return (
            <div className="definition" key={i}>
              <p className="meaning">{def.meanings[0]}</p>
            </div>
          );
        })}
    </div>
  );
};

export default WordOfTheDay;
