import React from "react";
import { useState, useEffect } from "react";
import WordOfTheDay from "./WordOfTheDay";

const Home = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/v1/", {
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
    <div className="Component-Body container ">
      <h1 className="title"></h1>
      <WordOfTheDay word={word} definition={definition} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro
        maiores voluptate atque maxime, voluptas quis, nostrum earum neque
        laboriosam id et recusandae repudiandae consequatur omnis eligendi eaque
        fugiat molestiae.
      </p>
    </div>
  );
};

export default Home;
