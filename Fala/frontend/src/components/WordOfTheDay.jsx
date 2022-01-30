import React from "react";

import { useWordOfDay } from "./WordOfDayProvider";

function WordOfTheDay(props) {
  const { word, definition, wordTranslation, wordExpiration } = useWordOfDay();
  return (
    <div>
      <h1>{word}</h1>
      <h2>{wordTranslation}</h2>
      <h3>{wordExpiration}</h3>
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
