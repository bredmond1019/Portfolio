import React from "react";
import { useState } from "react";
import { Redirect } from "react-router";

// Need this import to use async functions with babel
import regeneratorRuntime from "regenerator-runtime";
import { useToken } from "./TokenProvider";
import { Button, Card, Nav } from "react-bootstrap";

async function loginUser(request, credentials) {
  return fetch(`http://localhost:5000/auth/${request}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login(props) {
  const { saveToken } = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [request, setRequest] = useState("login");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (request === "register" && password !== password2) {
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
        saveToken(response);
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
              {request === "register" ? (
                <label>
                  <p>Please Enter your Password again:</p>
                  <input
                    type="password"
                    onChange={(e) =>
                      setPassword2(e.target.value)
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
