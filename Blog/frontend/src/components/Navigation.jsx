import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Navigation = (props) => {
  const location = useLocation();

  return (
    <div id="navbar-container">
      <div id="navbar">
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

              <Nav className="justify-content-end" activeKey={location}>
                <Nav.Link as={NavHashLink} to="/#landing-wrapper">
                  Home
                </Nav.Link>

                <Nav.Link as={NavHashLink} to="/about#about-wrapper">
                  About
                </Nav.Link>

                <Nav.Link as={NavHashLink} to="/blog">
                  Blog
                </Nav.Link>

                <Nav.Link as={NavHashLink} to="/projects">
                  Projects
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
