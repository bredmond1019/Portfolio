import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const TokenContext = createContext();
export const useToken = () => useContext(TokenContext);

export default function TokenProvider({ children }) {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem(
      "token",
      JSON.stringify(userToken)
    );
    setToken(userToken.token);
  };
  return (
    <TokenContext.Provider
      value={{ token, saveToken, setToken }}
    >
      {children}
    </TokenContext.Provider>
  );
}
