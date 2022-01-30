import React, { useEffect, useState } from "react";

import { createContext, useContext } from "react";

import APIService from "./APIService";

const WordContext = createContext();
export const useWordOfDay = () => useContext(WordContext);

export default function WordOfDayProvider({ children }) {
  // Used to get word from Local Storage if there is one
  const getWord = () => {
    const storedData = JSON.parse(localStorage.getItem("wordOfDay"));
    return storedData;
  };

  //   Set the state, see if word exists using getWord()
  const [isWord, setIsWord] = useState(getWord()?.word ? true : false);
  const [word, setWord] = useState(getWord()?.word);
  const [definition, setDefinition] = useState(getWord()?.definition);
  const [wordTranslation, setWordTranslation] = useState(
    getWord()?.wordTranslation
  );
  const [wordExpiration, setWordExpiration] = useState(
    getWord()?.wordExpiration &&
      new Date(getWord().wordExpiration).toDateString() ===
        new Date().toDateString()
      ? new Date(getWord().wordExpiration).toDateString()
      : false
  );

  //   Fetch the words from the API and set them in state
  useEffect(() => {
    if (isWord === false || wordExpiration === false) {
      const expiration = new Date();
      console.log(expiration);
      setWordExpiration(expiration.toDateString());
      fetch("http://127.0.0.1:5000/api/v1/word_of_the_day", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => {
          setWord(resp.word);
          setDefinition(resp.definition);
          APIService.TranslateExpression(resp.word).then((resp) => {
            setWordTranslation(resp.translation);
            setIsWord(true);
          });
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    if (isWord) {
      localStorage.setItem(
        "wordOfDay",
        JSON.stringify({
          word,
          definition,
          wordTranslation,
          wordExpiration,
        })
      );
    }
  }, [isWord]);

  return (
    <WordContext.Provider
      value={{
        word,
        setWord,
        definition,
        setDefinition,
        wordTranslation,
        setWordTranslation,
        wordExpiration,
        setWordExpiration,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}
