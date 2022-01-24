import React from "react";

import profile_pic from "./../images/profile_pic.png";
import github from "./../images/github.svg";
import linkedin from "./../images/linkedin.svg";
import insta from "./../images/insta.svg";
import email from "./../images/email.svg";

function Contact_Info() {
  return (
    <div className="contact-info-wrapper">
      <div className="contact-title-wrapper">
        <h2 className="contact-title">Get In Touch</h2>
        <h5 className="contact-title-subtext">
          Take a look at my git hub Or Find me on Social Media
        </h5>
        <h5 className="contact-title-subtext"></h5>
      </div>
      <div className="profile-pic-wrapper">
        <img src={profile_pic} alt="" className="profile-pic" />
      </div>
      <div className="info-icons">
        <a href="https://github.com/bredmond1019">
          <img src={github} alt="" className="info-icon" />
        </a>
        <a href="https://www.linkedin.com/in/bredmond1019/">
          <img src={linkedin} alt="" className="info-icon" />
        </a>
        <a href="https://www.instagram.com/urbanlumberjack19/">
          <img src={insta} alt="" className="info-icon" />
        </a>
        <a href="mailto:bredmond1019@gmail.com">
          <img src={email} alt="" className="info-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact_Info;
