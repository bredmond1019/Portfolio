import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
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
								FALA!
							</Navbar.Brand>
							<Nav className="me-auto">
								<Nav.Link as={Link} to="/">
									Home
								</Nav.Link>
								<Nav.Link as={Link} to="/about">
									About Me
								</Nav.Link>
								<Nav.Link as={Link} to="/contact">
									Contact
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
