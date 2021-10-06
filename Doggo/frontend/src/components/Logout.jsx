import React from "react";
import { Redirect } from "react-router";
import { useState, useEffect } from "react";

// Need this import to use async functions with babel
import regeneratorRuntime from "regenerator-runtime";
import { useToken } from "./TokenProvider";

export default function Logout() {
  const { isLoggedIn, tokenExpirationTime, token, logout } = useToken();

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
