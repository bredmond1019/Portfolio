import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { PROFILE_INFO } from "../../queries";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Bio from "./Bio";
import HomeCragCard from "./HomeCragCard";

// import { useUser } from "../Auth/UserProvider";

function ProfilePage() {
  // const { token } = useUser();
  const { profileId } = useSelector((state) => state.authToken);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };

  const myState = useSelector((state) => state.authToken);

  // May need to adjust this and see if it still works after a period of time
  useEffect(() => {
    if (data?.profiles.__typename === "AuthInfoField") {
      routeChange();
    }
  }, [data?.profiles.__typename]);

  // const { profileId } = useUser();
  // const profileId = 1;

  const { loading, error, data } = useQuery(PROFILE_INFO, {
    variables: { profileId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {console.log(error)}</p>;

  const userData = data?.profiles;

  return (
    <div className="profile-wrapper">
      {profileId ? (
        <>
          <Bio userData={userData} />
          {console.log(userData)}

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
