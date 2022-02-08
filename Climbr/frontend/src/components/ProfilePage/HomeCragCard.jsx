import React from "react";
import { Container, Card } from "react-bootstrap";

import cliffs_lic from "./../../images/logos/the_cliffs_lic.jpg";

function HomeCragCard() {
  return (
    <Container className="home-crag-wrapper">
      <Card className="home-crag">
        <div className="gym-logo-wrapper">
          <img className="gym-logo" src={cliffs_lic} />
        </div>
        <Card.Body>
          <Card.Title>The Cliffs at LIC</Card.Title>
          <Card.Subtitle>Long Island City, NY</Card.Subtitle>
          <Card.Text>Here is some info about the gym</Card.Text>
          <Card.Link href="#">Website</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HomeCragCard;
