import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";

import LoginCard from "./LoginCard";

function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-title-container">
        <h1 className="login-title">Welcome to Climbr</h1>
      </div>
      <LoginCard />
    </div>
  );
}

export default LoginPage;
