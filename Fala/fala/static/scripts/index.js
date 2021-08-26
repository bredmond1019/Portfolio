import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/App.scss";
// import "./css/Header.css";
// import "./css/Navbar.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("react-root")
);
