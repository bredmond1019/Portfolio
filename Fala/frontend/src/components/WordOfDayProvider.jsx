import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const WordContext = createContext();
export const useWordOfDay = () => useContext(WordContext);

export default function WordOfDayProvider({ children }) {
  return (
    <WordContext.Provider
      value={{
        word,
        definition,
      }}
    >
      {children}
    </WordContext.Provider>
  );
}
