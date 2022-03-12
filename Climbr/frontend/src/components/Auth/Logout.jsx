import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Need this import to use async functions with babel
import regeneratorRuntime from "regenerator-runtime";
import { useUser } from "./UserProvider";

export default function Logout() {
  const { isLoggedIn, tokenExpirationTime, token, logout } = useUser();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };

  if (isLoggedIn) {
    return (
      <div>
        <h2>Press LOG OUT to completely log out.</h2>
        <button onClick={logout}>LOG OUT</button>
      </div>
    );
  }

  return routeChange();
}
