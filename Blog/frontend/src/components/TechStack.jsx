import React from "react";

import Python from "./../images/tech_stack/Python.svg";
import JS from "./../images/tech_stack/JS.svg";
import Flask from "./../images/tech_stack/Flask.svg";
import React_Img from "./../images/tech_stack/React.svg";

function TechStack() {
  return (
    <div className="tech-stack">
      <div className="tech-stack-header">
        <h1 className="tech-stack-title">My Tech Stack</h1>
      </div>
      <div className="description">
        <h4>These are the technologies I use most often</h4>
      </div>

      <div className="python icon-container">
        <div className="icon-title">
          <h3>Python</h3>
        </div>
        <div className="icon-img-container">
          <img src={Python} className="python-img icon-img" alt="" />
        </div>
      </div>

      <div className="flask icon-container">
        <div className="icon-title">
          <h3>Flask</h3>
        </div>
        <div className="icon-img-container">
          <img src={Flask} className="flask-img icon-img" alt="" />
        </div>
      </div>

      <div className="react icon-container">
        <div className="icon-title">
          <h3>React</h3>
        </div>
        <div className="icon-img-container">
          <img src={React_Img} className="react-img icon-img" alt="" />
        </div>
      </div>

      <div className="javascript icon-container">
        <div className="icon-title">
          <h3>JavaScript</h3>
        </div>
        <div className="icon-img-container">
          <img src={JS} className="javascript-img icon-img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default TechStack;
