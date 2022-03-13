import { useMutation } from "@apollo/client";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Nav } from "react-bootstrap";

// Need this import to use async functions with babel
import regeneratorRuntime from "regenerator-runtime";
import { LOGIN } from "../../mutations";

import { authTokenActions } from "../../modAuth/actions";
// import { apolloClientMain } from "../../apollo";

function LoginCard() {
  const [isRegister, setIsRegister] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [login] = useMutation(LOGIN, {
    variables: { email, password },
    // client: apolloClientMain,
    onCompleted: ({ mutateAuth }) => {
      const expiration = new Date(new Date().getTime() + 15 * 60 * 1000).toISOString();
      const payload = { ...mutateAuth, expirationTime: expiration };
      authTokenActions.setAuthToken(payload);
    },
    onError: (error) => console.log(error),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isRegister);
    console.log(email);
    console.log(password);
    isRegister === "login" ? login() : signup();
  };

  const inputInfo = [
    { title: "Email", setProperty: setEmail, type: "text" },
    { title: "Password", setProperty: setPassword, type: "password" },
    { title: "Confirm Password", setProperty: setConfirmPassword, type: "password" },
  ];

  const [loginState, setLoginState] = useState(inputInfo);
  useEffect(() => {
    isRegister === "register" ? setLoginState(inputInfo) : setLoginState(inputInfo.slice(0, 2));
  }, [isRegister]);

  return (
    <Card className="login-info-wrapper">
      <Card.Header>
        <Nav
          variant="tabs"
          defaultActiveKey="login"
          onSelect={(eventKey) => {
            setIsRegister(eventKey);
          }}
        >
          <Nav.Item>
            <Nav.Link eventKey="login">Log In</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="register">Register</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          <h1 className="login-info-title">Please Enter your Username and Password.</h1>
        </Card.Title>

        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="form-wrapper">
              {loginState.map(({ title, type, setProperty }, i) => (
                <label className="login-input-container" key={i}>
                  <p className="login-input-title">{title}</p>
                  <input
                    className="login-input"
                    type={type}
                    onChange={(e) => setProperty(e.target.value)}
                  />
                </label>
              ))}

              <Button variant="primary" type="submit">
                SUBMIT
              </Button>
            </div>
          </form>
          <hr />
          <div className="google-auth">
            <h1 className="google-auth-title">Sign in with Google.</h1>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LoginCard;
