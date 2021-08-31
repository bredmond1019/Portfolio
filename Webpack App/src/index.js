// import puppy from "./images/puppy.jpeg";

const Brandon = {
  name: "Brandon",
  age: 32,
  dog: "Bella",
};

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";

// Append heading node to the DOM
const app = document.querySelector("#root");
app.append(heading);

console.log(Brandon);
// console.log(puppy);
