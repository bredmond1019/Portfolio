import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import { useWordContext } from "./WordContextProvider";

export default function Words() {
  const { words, deleteWord } = useWordContext();

  const [currentWord, setCurrentWord] = useState("");
  const [tileNumber, setTileNumber] = useState(1);

  useEffect(() => {
    words && setCurrentWord(words[0]?.expression);
  }, [words]);

  // useEffect(() => {

  // }, [tileNumber]);

  const cycleTiles = () => {
    let max = words.length;
    setTileNumber((tileNumber + 1) % max);
    setCurrentWord(words[tileNumber]?.expression);
    console.log(tileNumber);
  };

  return (
    <div className="word-tile-wrapper">
      <button onClick={cycleTiles}>+</button>
      <div className="word-tile">
        <div className="word-tile-title">
          <h2 className="word-tile-expression">{currentWord}</h2>
        </div>
      </div>
    </div>
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
