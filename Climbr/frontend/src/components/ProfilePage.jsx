import React from "react";
import { Container, Card } from "react-bootstrap";

import logo2 from "./../images/logo2.jpeg";
import cliffs_lic from "./../images/logos/the_cliffs_lic.jpg";

function ProfilePage() {
  return (
    <div className="profile-wrapper">
      <div className="profile-bio-wrapper">
        <div className="profile-pic-wrapper">
          <img className="profile-pic" src={logo2} alt="" />
        </div>

        <div className="bio-wrapper">
          <h1 className="profile-name">Brandon</h1>
          <h3 className="profile-style-title">Preferred Style:</h3>
          <h5 className="profile-style-climbing">Sport / Outdoors</h5>
        </div>
      </div>

      <div className="profile-home-crag-wrapper">
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
      </div>
    </div>
  );
}

export default ProfilePage;
