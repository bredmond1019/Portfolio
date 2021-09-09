import { Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Home from "./components/Home";
import Lessons from "./components/Lessons";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <div className="image">Bem-vindo a Fala!</div>
      <Switch>
        <div className="App-Body">
          <Route path="/lessons" component={Lessons} />
          <Route path="/" component={Home} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
