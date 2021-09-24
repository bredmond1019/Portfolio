import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";

// Need this import to use async functions with babel
import regeneratorRuntime from "regenerator-runtime";
import { useToken } from "./TokenProvider";
import { Button, Card, Nav } from "react-bootstrap";
import { APIService } from "./APIService";

async function loginUser(request, credentials) {
  APIService.SignIn(request, credentials);
}

export default function Login() {
  const { saveToken } = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const [request, setRequest] = useState("login");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      request === "register" &&
      password !== confirmPassword
    ) {
      alert("Please make sure your passwords match");
    } else {
      const response = await loginUser(request, {
        email,
        password,
      });

      if (request === "register") {
        alert(response.message);
        return <Redirect to="/" push={true} />;
      } else {
        response.token
          ? saveToken(response)
          : alert(response.error);
      }
    }
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
              <Nav.Link eventKey="login">Log In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="register">
                Register
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            {request === "register" ? (
              <>
                <span>
                  Please Enter a valid Email Address and
                  Create a Password.
                </span>
              </>
            ) : (
              <>
                <span>
                  Please Enter your Username and Password.
                </span>
              </>
            )}
          </Card.Title>
          <Card.Text>
            <form onSubmit={handleSubmit}>
              <label>
                <p>Email:</p>
                <input
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label>
                <p>Password:</p>
                <input
                  type="password"
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />
              </label>

              {/* CHECK IF REGISTERING OR LOGGING IN */}
              {request === "register" ? (
                <label>
                  <p>Confirm Password:</p>
                  <input
                    type="password"
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                  />
                </label>
              ) : null}

              <Button variant="primary" type="submit">
                SUBMIT
              </Button>
            </form>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
