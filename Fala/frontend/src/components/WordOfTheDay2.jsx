import React from "react";

const WordOfTheDay = (props) => {
  /* props = {word : "alguma_palavara", 
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
    <div className="Component-Body container ">
      <h1 className="title"></h1>

      <div className="WordOfDay container">
        <h2 className="title">
          Palavra do Dia --{" "}
          <span className="word">
            <strong>{word}</strong>
          </span>
        </h2>

        <div className="definition">
          {definition &&
            definition.map((def, i) => {
              return (
                <p key={i} className="meaning">
                  {def.meanings[0]}
                </p>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default WordOfTheDay;
