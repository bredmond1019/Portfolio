import React from "react";
import logo2 from "./../../images/logo2.jpeg";

import { useQuery } from "@apollo/client";
import { PROFILE_INFO } from "../../queries";

function Bio() {
  const profileId = 1;
  const { loading, error, data } = useQuery(PROFILE_INFO, {
    variables: { profileId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {console.log(error)}</p>;

  return data.profiles.map(
    ({ firstName, lastName, preferredStyleClimbing }) => (
      <div className="profile-bio-wrapper">
        <div className="profile-pic-wrapper">
          <img className="profile-pic" src={logo2} alt="" />
        </div>

        <div className="bio-wrapper">
          <h1 className="profile-name">
            {firstName} {lastName}
          </h1>
          <h3 className="profile-style-title">Preferred Style:</h3>
          <h5 className="profile-style-climbing">
            {preferredStyleClimbing} / Outdoors
          </h5>
          <h3 className="profile-style-title">About Me:</h3>
          <h5 className="profile-style-climbing">
            Here is some info about me that I think you should know
          </h5>
        </div>
      </div>
    )
  );
}

export default Bio;
