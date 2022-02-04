import React, { useState, useEffect } from "react";
import {
  SwitchTransition,
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";
import "animate.css";

import { useWordContext } from "./WordContextProvider";

export default function Words({ showWordTile, setShowWordTile }) {
  const { words, deleteWord } = useWordContext();

  const [currentWord, setCurrentWord] = useState("");
  const [tileNumber, setTileNumber] = useState(0);

  useEffect(() => {
    words && setCurrentWord(words[0]?.expression);
  }, [words]);

  useEffect(() => {
    setCurrentWord(words[tileNumber]?.expression);
    console.log(tileNumber);
  }, [tileNumber]);

  const decreaseTiles = () => {
    let max = words.length;
    setTileNumber(tileNumber - 1 >= 0 ? (tileNumber - 1) % max : max - 1);
    // setCurrentWord(words[tileNumber]?.expression);
    console.log(tileNumber);
  };
  const increaseTiles = () => {
    let max = words.length;
    setTileNumber((tileNumber + 1) % max);
    // setCurrentWord(words[tileNumber]?.expression);
    console.log(tileNumber);
  };

  return (
    <CSSTransition
      in={showWordTile}
      timeout={{ enter: 300, exit: 300 }}
      classNames="word-tile"
      unmountOnExit
    >
      <div className="words-wrapper">
        <div className="btn-tile-left-wrapper">
          <button
            className="btn-primary btn insert-btn-review"
            onClick={decreaseTiles}
          >
            {" "}
            {"<"}{" "}
          </button>
        </div>

        <div className="word-tile-wrapper">
          {console.log(showWordTile)}
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={tileNumber}
              timeout={{ enter: 300, exit: 300 }}
              classNames={{
                enterActive: "animate__bounceIn",
                exitActive: "animate__bounceOut",
              }}
            >
              <div className="word-tile">
                <div className="word-tile-title">
                  <h2 className="word-tile-expression">{currentWord}</h2>
                </div>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>

        <div className="btn-tile-left-wrapper">
          <button
            className="btn-primary btn insert-btn-review"
            onClick={increaseTiles}
          >
            {" "}
            {">"}{" "}
          </button>
        </div>
      </div>
    </CSSTransition>
  );
}

{
  /* 
// <div className="word-tiles">
//       {words &&
//         words.map((word, i) => {
//           return (
//             <div className="word-tile" key={i}>
//               <div className="word-tile-title">
//                 <h2 className="word-tile-expression">{word.expression}</h2>
//                 <button
//                   className="btn-danger btn word-btn"
//                   onClick={() => deleteWord(word)}
//                 >
//                   {" "}
//                   <strong className="word-tile-delete-btn">x</strong>
//                 </button>
//               </div>
//               <h3 className="word-tile-translation">{word.translation}</h3>
//               <div className="word-tile-img-wrapper">
//                 <img src={word.url} alt="" className="expression-image" />
//               </div>
//             </div>
//           );
//         })}
//     </div> */
}
