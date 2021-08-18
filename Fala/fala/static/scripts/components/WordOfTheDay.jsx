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
      <h2>Palavra do Dia</h2>
      <h4 className="word">{props.word}</h4>
      {props.definition &&
        props.definition.map((def, i) => {
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

export default WordOfTheDay;
