import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import ProfilePage from "../ProfilePage/ProfilePage";

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <div className="home-wrapper">
      <div className="title-container">
        <h3 className="home-title">Welcome to </h3>
        <h1 className="climbr-title">Climbr</h1>
      </div>

      <h3 className="home-sub-title ">Where's your next adventure?</h3>
      <Button className="home-btn" variant="primary" onClick={routeChange}>
        LOGIN
      </Button>
    </div>
  );
}

export default Home;
