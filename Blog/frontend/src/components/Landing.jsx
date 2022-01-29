import React from "react";

import Contact_Info from "./Contact_Info";

export default function Landing() {
  return (
    <div>
      <div id="landing-wrapper" className="landing-wrapper">
        <div className="landing-page">
          <h1 className="title">Brandon Redmond</h1>
          <h2 className="title-description">
            Software Developer. Language Enthusiast. Dog Lover.
          </h2>
        </div>
      </div>

      <Contact_Info />
    </div>
  );
}
