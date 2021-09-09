import React from "react";

class Game {
  name = "Violin Charades";
}
const myGame = new Game();

function Extra() {
  return (
    <div>
      <h1>Hello from the Extra Component</h1>
      <p>{`I like ${myGame.name}.`}</p>
    </div>
  );
}

export default Extra;
