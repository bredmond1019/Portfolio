import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useToken } from "./TokenProvider";

const Navigation = (props) => {
  const { token } = useToken();

  return (
    <div id="navbar-container">
      <div className="container" id="navbar">
        <Navbar
          collapseOnSelect
          sticky="top"
          expand="sm"
          bg="primary"
          variant="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Navbar.Brand as={Link} to="/home">
                Doggo
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>

                {!token ? (
                  <>
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/profile">
                      Profile
                    </Nav.Link>

                    <Nav.Link as={Link} to="/dashboard">
                      Dashboard
                    </Nav.Link>
                    <Nav.Link as={Link} to="/logout">
                      Log Out
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
