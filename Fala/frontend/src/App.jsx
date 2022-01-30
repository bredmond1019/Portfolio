import { Routes, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./components/Home";
import Lessons from "./components/Lessons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Scss/App.scss";
import Review from "./components/Review";

function App() {
  return (
    <div className="app">
      <Navigation />

      <Routes>
        {/* <Route path="/lessons" element={<Lessons />} />
        <Route path="/review" element={<Review />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
