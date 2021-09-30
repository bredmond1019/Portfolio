import React from "react";
import { Redirect } from "react-router";
import { useState, useEffect } from "react";

// Need this import to use async functions with babel
import regeneratorRuntime from "regenerator-runtime";
import { useToken } from "./TokenProvider";

export default function Logout() {
  const {
    isLoggedIn,
    setToken,
    setTokenExpirationTime,
    tokenExpirationTime,
    token,
  } = useToken();

  const logout = () => {
    localStorage.clear("userData");
    setToken(false);
    setTokenExpirationTime(null);
  };

  // useEffect hook to set the timer if
  // the expiration time is in future otherwise
  // we clear the timer here
  useEffect(() => {
    if (token && tokenExpirationTime) {
      const remainingTime =
        tokenExpirationTime.getTime() - new Date().getTime();
      const logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationTime]);

  if (isLoggedIn) {
    return (
      <div>
        <h2>Press LOG OUT to completely log out.</h2>
        <button onClick={logout}>LOG OUT</button>
      </div>
    );
  }

  return <Redirect to="/" push={true} />;
}
