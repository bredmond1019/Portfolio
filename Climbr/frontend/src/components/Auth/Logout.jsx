import React from "react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Need this import to use async functions with babel
import regeneratorRuntime from "regenerator-runtime";
import { logOut } from "../../modAuth/slices";
// import { useUser } from "./UserProvider";

export default function Logout() {
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };

  const logout = () => {
    console.log(logOut);
    dispatch(logout());
  };

  return (
    <div>
      <h2>Press LOG OUT to completely log out.</h2>
      <button onClick={() => dispatch(logOut())}>LOG OUT</button>
    </div>
  );

  return routeChange();
}
