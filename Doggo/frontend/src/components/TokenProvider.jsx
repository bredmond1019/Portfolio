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

  const [token, setToken] = useState(getToken()?.userToken);
  const [tokenExpirationTime, setTokenExpirationTime] = useState(
    getToken()?.expirationTime &&
      new Date(getToken().expirationTime) > new Date()
      ? new Date(getToken().expirationTime)
      : null
  );

  const saveToken = (userToken, expirationTime) => {
    const expiration =
      expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60);
    setToken(userToken);
    setTokenExpirationTime(expiration);

    localStorage.setItem(
      "userData",
      JSON.stringify({
        userToken,
        expirationTime: expiration.toISOString(),
      })
    );
  };

  const logout = () => {
    localStorage.clear("userData");
    setToken(false);
    setTokenExpirationTime(null);
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
        logout,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}

// Not sure if I'm going to use this or just he custom hook useToken
