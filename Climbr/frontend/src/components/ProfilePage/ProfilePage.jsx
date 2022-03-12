import React from "react";

import Bio from "./Bio";
import HomeCragCard from "./HomeCragCard";

import { useUser } from "../Auth/UserProvider";

function ProfilePage() {
  const { profileId } = useUser();
  return (
    <div className="profile-wrapper">
      {profileId ? (
        <>
          <Bio />

          <div className="profile-home-crag-wrapper">
            <HomeCragCard />
            <HomeCragCard />
          </div>
        </>
      ) : (
        //   TODO: CREATE PROFILE FORM
        <></>
      )}
    </div>
  );
}

export default ProfilePage;
