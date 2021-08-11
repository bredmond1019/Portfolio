import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";

const Navigation = () => {
  return (
    <div className="">
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
            <Navbar.Brand href="/home">FALA!</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Me</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/lessons">Lessons</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
