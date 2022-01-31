import React, { useEffect, useState } from "react";

import { useWordContext } from "./WordContextProvider";

import coffee_shop from "./../images/coffee_shop.jpg";

function WordOfTheDay(props) {
  const { wordOfDay, wordTranslation } = useWordContext();
  const [seeTranslation, setSeeTranslation] = useState(false);

  const openTranslation = () => {
    setSeeTranslation(true);
  };

  return (
    <div className="word-of-day-container">
      <div className="word-of-day-image-wrapper">
        <img src={coffee_shop} alt="" className="word-of-day-image" />
      </div>

      <div className="word-of-day-title-wrapper">
        <h1 className="word-of-day-title">Palavra Do Dia</h1>

        <h1 className="word-of-day">{wordOfDay}</h1>
        <div className="word-of-day-translation-wrapper">
          <h1 className="translation-title">Do You Know It?</h1>
          {seeTranslation ? (
            <h1
              className={`word-of-day-translation word-of-day ${
                seeTranslation ? "grow" : ""
              } `}
            >
              {wordTranslation}
            </h1>
          ) : (
            <button
              className="btn-primary btn insert-btn-word-day translation-btn"
              onClick={openTranslation}
            >
              See Translation
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default WordOfTheDay;

{
  /* <h2>{wordTranslation}</h2>
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
      </div> */
}
