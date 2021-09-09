import React from "react";

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
      <h2 className="title">
        Palavra do Dia --{" "}
        <span className="word">
          <strong>{props.word}</strong>
        </span>
      </h2>

      <div className="definition">
        {props.definition &&
          props.definition.map((def, i) => {
            return (
              <p key={i} className="meaning">
                {def.meanings[0]}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default WordOfTheDay;
