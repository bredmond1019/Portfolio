import React from "react";
import { Container, Card } from "react-bootstrap";

import Bio from "./Bio";
import HomeCragCard from "./HomeCragCard";

import cliffs_lic from "./../../images/logos/the_cliffs_lic.jpg";

function ProfilePage() {
  return (
    <div className="profile-wrapper">
      <Bio />

      <div className="profile-home-crag-wrapper">
        <HomeCragCard />
        <HomeCragCard />
        <HomeCragCard />
      </div>
    </div>
  );
}

export default ProfilePage;
