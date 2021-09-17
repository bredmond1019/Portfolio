import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Scss/App";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <div className="App-Body">
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/home" component={Home} />
        </div>
      </Switch>
    </div>
  );
}

export default App;