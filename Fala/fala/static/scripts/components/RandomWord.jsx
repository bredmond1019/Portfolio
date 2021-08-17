import React from "react";
import { useState, useEffect } from "react";

const RandomWord = () => {
  const [word, setWord] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v1/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setWord(resp))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h1>Random Word</h1>
    </div>
  );
};

export default RandomWord;
