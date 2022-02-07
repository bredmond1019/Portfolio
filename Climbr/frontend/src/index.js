import pup from "./images/puppy.jpeg";
import "./Scss/style.scss";
import App from "./App";
import square from "../vendor";

import { render } from "react-dom";

render(<App />, document.getElementById("root"));

console.log(square(7));
