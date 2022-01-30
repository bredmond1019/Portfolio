import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import WordOfDayProvider from "./components/WordOfDayProvider";
import App from "./App";

ReactDOM.render(
  <WordOfDayProvider>
    <Router>
      <App />
    </Router>
  </WordOfDayProvider>,
  document.getElementById("root")
);
