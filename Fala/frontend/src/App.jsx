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
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v1/word_of_the_day", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        setWord(resp.word);
        setDefinition(resp.definition);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="app">
      <Navigation />

      <Routes>
        {/* <Route path="/lessons" element={<Lessons />} />
        <Route path="/review" element={<Review />} /> */}
        <Route
          path="/"
          element={<Home word={word} definition={definition} />}
        />
      </Routes>
    </div>
  );
}

export default App;
