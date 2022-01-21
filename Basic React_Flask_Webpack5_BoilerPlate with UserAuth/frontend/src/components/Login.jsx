import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";

// Need this import to use async functions with babel
import regeneratorRuntime from "regenerator-runtime";
import { useToken } from "./TokenProvider";
import { Button, Card, Nav } from "react-bootstrap";
import { APIService } from "./APIService";
import GoogleAuthLogin from "./GoogleAuthLogin";

export default function Login() {
  const { saveToken } = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [request, setRequest] = useState("login");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response;
    const credentials = {
      email,
      password,
    };

    if (request === "register") {
      if (password !== confirmPassword) {
        return alert("Please make sure your passwords match");
      }
      response = await APIService.SignUp(credentials);
      alert(
        response.message || "A confirmation email has been sent to your account"
      );
      return <Redirect to="/" push={true} />;
    }
    response = await APIService.LogIn(credentials);
    response.token
      ? saveToken(response.token)
      : alert("Invalid Email or Password");
  };

  return (
    <div className="login-wrapper">
      <h2>Login Page</h2>

      <Card>
        <Card.Header>
          <Nav
            variant="tabs"
            defaultActiveKey="login"
            onSelect={(selectedItem) => {
              setRequest(selectedItem);
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
            <span>Please Enter your Username and Password.</span>
          </Card.Title>
          <Card.Text>
            <form onSubmit={handleSubmit}>
              <div className="form-wrapper">
                <label className="input">
                  <p className="input-title">Email:</p>
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label className="input">
                  <p className="input-title">Password:</p>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>

                {/* CHECK IF REGISTERING OR LOGGING IN */}
                {request === "register" ? (
                  <label className="input">
                    <p className="input-title">Confirm Password:</p>
                    <input
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </label>
                ) : null}

                <Button variant="primary" type="submit">
                  SUBMIT
                </Button>
              </div>
            </form>
            <hr />
            {/* HERE IS THE GOOGLE AUTH LOGIN COMPONENT */}
            <div className="google-auth-wrapper">
              <GoogleAuthLogin handleSubmit={handleSubmit} />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
