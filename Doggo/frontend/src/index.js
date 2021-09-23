import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import TokenProvider from "./components/TokenProvider";

ReactDOM.render(
  <TokenProvider>
    <Router>
      <App />
    </Router>
  </TokenProvider>,
  document.getElementById("root")
);
