import React, { useEffect, useState } from "react";
import regeneratorRuntime from "regenerator-runtime";
import { APIService } from "./APIService";

export default function Profile() {
  const [profilePhoto, setProfilePhoto] = useState("");

  useEffect(async () => {
    // setProfilePhoto(APIService.GetDogPhoto().message);
    const photoResponse = await APIService.GetDogPhoto();
    setProfilePhoto(photoResponse.message);
  }, []);

  return (
    <div className="profile-page-wrapper">
      <div className="profile-header">
        <div className="profile-pic-wrapper">
          <img src={profilePhoto} alt="" className="profile-pic" />
        </div>
        <div className="profile-names">
          <h1>Bella the Pup</h1>
          <h2>Parent(s):</h2>
          <ul>
            <li>Brandon Redmond</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
