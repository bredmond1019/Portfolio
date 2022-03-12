import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";

import LoginCard from "./LoginCard";
import Logout from "./Logout";

import { useUser } from "./UserProvider";

function LoginPage() {
  const { isLoggedIn } = useUser();

  return (
    <div className="login-wrapper">
      <div className="login-title-container">
        <h1 className="login-title">Welcome to Climbr</h1>
      </div>
      {isLoggedIn ? <Logout /> : <LoginCard />}
    </div>
  );
}

export default LoginPage;
