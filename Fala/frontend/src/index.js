import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import WordContextProvider from "./components/WordContextProvider";
import App from "./App";

ReactDOM.render(
  <WordContextProvider>
    <Router>
      <App />
    </Router>
  </WordContextProvider>,
  document.getElementById("root")
);
