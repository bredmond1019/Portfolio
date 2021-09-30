import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const TokenContext = createContext();
export const useToken = () => useContext(TokenContext);

export default function TokenProvider({ children }) {
  const getToken = () => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    return storedData;
  };

  const [token, setToken] = useState(getToken()?.token);
  const [tokenExpirationTime, setTokenExpirationTime] = useState(
    getToken()?.expirationTime &&
      new Date(getToken().expirationTime) > new Date()
      ? new Date(getToken().expirationTime)
      : null
  );

  const saveToken = (userToken) => {
    const expiration = new Date(new Date().getTime() + 1000 * 60 * 60);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        userToken,
        expirationTime: expiration.toISOString(),
      })
    );
    setToken(userToken.token);

    setTokenExpirationTime(expiration);
  };

  return (
    <TokenContext.Provider
      value={{
        token,
        saveToken,
        setToken,
        isLoggedIn: !!token,
        setTokenExpirationTime,
        tokenExpirationTime,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}

// Not sure if I'm going to use this or just he custom hook useToken
