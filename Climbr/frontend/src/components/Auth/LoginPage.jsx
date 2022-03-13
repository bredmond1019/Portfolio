import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";

import LoginCard from "./LoginCard";
import Logout from "./Logout";

import { reduxStoreMain } from "../../redux/storeMain";
import { useSelector } from "react-redux";

function LoginPage() {
  const token = useSelector((state) => state.authToken.token);

  return (
    <div className="login-wrapper">
      <div className="login-title-container">
        <h1 className="login-title">Welcome to Climbr</h1>
      </div>

      {/* {!token ? <LoginCard /> : <Logout />} */}

      <LoginCard />
      <Logout />
    </div>
  );
}

export default LoginPage;
