import React, { useState, useEffect } from "react";
import {
  SwitchTransition,
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";
import "animate.css";

import { useWordContext } from "./WordContextProvider";

function ListOfWords({ showVocabList, setShowVocabList }) {
  const { words, deleteWord } = useWordContext();

  return (
    <CSSTransition
      in={showVocabList}
      timeout={{ enter: 300, exit: 300 }}
      classNames="list-of-vocab-wrapper"
      unmountOnExit
    >
      <div className="list-of-vocab-wrapper">
        <h1 className="vocab-review-title">Words You've Added</h1>
        <TransitionGroup className="list-of-vocab">
          {words &&
            words.map((word) => (
              <CSSTransition
                key={word.id}
                timeout={500}
                classNames="vocab-word-wrapper"
              >
                <div className="vocab-word-wrapper">
                  <h1 className="vocab-word">{word.expression}</h1>
                  <button
                    className="btn-danger remove-btn sm"
                    onClick={() => deleteWord(word)}
                  >
                    &times;
                  </button>
                </div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    </CSSTransition>
  );
}

export default ListOfWords;

// p-3 border mb-3 shadow-sm rounded border-info d-flex justify-content-between
