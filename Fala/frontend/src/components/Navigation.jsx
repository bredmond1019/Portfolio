import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <div id="navbar-container">
      <div className="container" id="navbar">
        <Navbar
          collapseOnSelect
          fixed="top"
          expand="sm"
          // bg="primary"
          // variant="dark"
        >
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Navbar.Brand as={Link} to="/"></Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>

                <Nav.Link as={NavHashLink} to="/#review">
                  Review
                </Nav.Link>

                <Nav.Link as={Link} to="/lessons">
                  Lessons
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Navigation;
