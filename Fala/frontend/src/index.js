import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./Scss/style";

// ReactDOM.render(<h1>OH HEY!</h1>, document.getElementById("root"));

import pup from "./images/puppy.jpeg";

console.log("Interesting");

class Game {
  name = "Violin Charades";
}
const myGame = new Game(); // Create paragraph node
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;
// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";

// Append SVG and heading nodes to the DOM
const app = document.querySelector("#root");
app.append(heading, p);

console.log(pup);
