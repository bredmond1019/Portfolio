import React from "react";
import Header from "./components/Header";

// import "./css/Navbar.css";
// import "./css/App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Lessons from "./components/Lessons";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

// import forest from "./css/images/Forest.png";

import "./css/App.scss";

// console.log(forest);

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <div className="image">Bem-vindo a Fala!</div>
      <Switch>
        <div className="App-Body">
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/lessons" component={Lessons} />
          <Route path="/" component={Home} />
        </div>
      </Switch>
      {/* <img src={forest} alt="" /> */}
    </div>
  );
};

export default App;
