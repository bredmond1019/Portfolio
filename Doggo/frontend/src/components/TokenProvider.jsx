import React from "react";
import { useState } from "react";
import { createContext } from "react";
import useToken from "./useToken";

const TokenContext = createContext();

export default function TokenProvider({ children }) {
  const { token, setToken } = useToken();
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}

// Not sure if I'm going to use this or just he custom hook useToken
