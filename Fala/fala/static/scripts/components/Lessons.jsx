import React from "react";
import { useState, useEffect } from "react";
import RandomWord from "./RandomWord";

const Lessons = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState();
  /* word = {word : "alguma_palavara", 
      definition: 
        0: 
          class : type of word, 
          etymology: some etymology
          meaning :
            0: meaning_0 , 
        
        1:
          class :
          ety:
          meaning:  
      }
  */

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
    <div className="container">
      <h1 className="title">Lessons</h1>
      <RandomWord word={word} definition={definition} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi porro
        maiores voluptate atque maxime, voluptas quis, nostrum earum neque
        laboriosam id et recusandae repudiandae consequatur omnis eligendi eaque
        fugiat molestiae.
      </p>
    </div>
  );
};

export default Lessons;
