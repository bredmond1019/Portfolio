import React from "react";

function WordOfTheDay(props) {
  const { word, definition } = props;
  return (
    <div>
      <h1>{word}</h1>
      <div>
        {definition &&
          definition.map((def, i) => {
            return (
              <p key={i} className="meaning">
                {def.meanings[0]}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default WordOfTheDay;
