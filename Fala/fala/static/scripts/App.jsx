import React from "react";
import Header from "./components/Header";
import "./css/Header.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Lessons from "./components/Lessons";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/lessons" component={Lessons} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
