import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Nav } from "react-bootstrap";

// Need this import to use async functions with babel
import regeneratorRuntime from "regenerator-runtime";

function LoginCard() {
  const [isRegister, setIsRegister] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputInfo = [
    { title: "Email", useHook: setEmail },
    { title: "Password", useHook: setPassword },
    { title: "Confirm Password", useHook: setConfirmPassword },
  ];

  const [loginState, setLoginState] = useState(inputInfo);
  console.log(inputInfo);
  useEffect(() => {
    if (isRegister) {
      setLoginState(inputInfo);
    } else {
      setLoginState(inputInfo.slice(0, 2));
    }
  }, [isRegister]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response;
    const credentials = {
      email,
      password,
    };
  };

  return (
    <Card className="login-info-wrapper">
      <Card.Header>
        <Nav
          variant="tabs"
          defaultActiveKey="login"
          onSelect={() => {
            setIsRegister(!isRegister);
          }}
        >
          <Nav.Item>
            <Nav.Link eventKey="tokens">Log In</Nav.Link>
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
              {loginState.map(({ title }) => (
                <label className="input">
                  <p className="input-title">{title}</p>
                  <input type="text" />
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
