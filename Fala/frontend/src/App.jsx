import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./components/Home";
import Lessons from "./components/Lessons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Scss/App.scss";
import Review from "./components/Review";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />

      <Switch>
        <div className="App-Body">
          <Route path="/lessons" component={Lessons} />
          <Route path="/review" component={Review} />
          <Route path="/" component={Home} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
