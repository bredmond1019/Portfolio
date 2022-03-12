import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import { reduxStoreMain } from "../redux/storeMain";

import logo2 from "../images/logo2.jpeg";

const Navigation = (props) => {
  const authTokenState = reduxStoreMain.getState().authToken;
  const token = authTokenState.token;

  const location = useLocation();

  return (
    <div id="navbar-container">
      <div id="navbar">
        <Navbar collapseOnSelect sticky="top" expand="sm">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Navbar.Brand as={Link} to="/">
                {/* <img className="img-brand" src={logo2} alt="" /> */}
              </Navbar.Brand>

              <Nav className="justify-content-end color-nav" activeKey={location}>
                <Nav.Link as={NavHashLink} to="/">
                  Home
                </Nav.Link>
                {!token ? (
                  <Nav.Link as={NavHashLink} to="/login">
                    LOGIN
                  </Nav.Link>
                ) : (
                  <>
                    <Nav.Link as={NavHashLink} to="/profile-page">
                      Profile
                    </Nav.Link>

                    <Nav.Link as={NavHashLink} to="/users">
                      Users
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
