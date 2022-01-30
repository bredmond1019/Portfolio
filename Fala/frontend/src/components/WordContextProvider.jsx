import React, { useEffect, useState } from "react";

import { createContext, useContext } from "react";

import APIService from "./APIService";

const WordContext = createContext();
export const useWordContext = () => useContext(WordContext);

export default function WordContextProvider({ children }) {
  // Words for the Review Cards Section
  const [words, setWords] = useState([]);

  // Gets Words from the Database
  useEffect(() => {
    APIService.GetWords()
      .then((resp) => setWords(resp))
      .catch((errors) => console.log(errors));
  }, []);

  // Insert Word from frontend to Database, Get's an Image from Spash API, Translates the Word
  const insertWord = (expression) => {
    APIService.TranslateExpression(expression)
      .then((resp) => {
        const { expression, translation } = resp;

        APIService.GetImage(translation)
          .then((resp) => {
            const url = resp.thumb;
            const new_word = {
              expression,
              translation,
              url,
            };

            APIService.InsertWord(new_word)
              .then((resp) => {
                const new_words = [...words, resp];
                setWords(new_words);
              })
              .catch((errors) => console.log(errors));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  // Delete Word from List
  const deleteWord = (word) => {
    const new_words = words.filter((my_word) => {
      if (my_word.id === word.id) {
        return false;
      }
      return true;
    });
    setWords(new_words);
    APIService.DeleteWord(word.id);
  };

  // Used to get word from Local Storage if there is one
  const getWord = () => {
    const storedData = JSON.parse(localStorage.getItem("wordOfDay"));
    return storedData;
  };

  //   Set the state, see if word for WORD OF DAY exists using getWord()

  const [wordOfDay, setWordOfDay] = useState(getWord()?.wordOfDay);
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
    if (wordExpiration === false) {
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
          setWordOfDay(resp.word);
          setDefinition(resp.definition);
          APIService.TranslateExpression(resp.word).then((resp) => {
            setWordTranslation(resp.translation);
            // setIsWord(true);
          });
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    localStorage.clear();
  }, [wordExpiration]);

  // Store Word of Day in Local Storage
  useEffect(() => {
    if (wordOfDay) {
      localStorage.setItem(
        "wordOfDay",
        JSON.stringify({
          wordOfDay,
          definition,
          wordTranslation,
          wordExpiration,
        })
      );
    }
  }, [wordOfDay, wordTranslation]);

  return (
    <WordContext.Provider
      value={{
        wordOfDay,
        setWordOfDay,
        definition,
        setDefinition,
        wordTranslation,
        setWordTranslation,
        wordExpiration,
        setWordExpiration,
        insertWord,
        deleteWord,
        words,
        setWords,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}
