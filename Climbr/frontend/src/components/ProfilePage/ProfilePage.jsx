import React from "react";

import Bio from "./Bio";
import HomeCragCard from "./HomeCragCard";

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
