import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Scss/App";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { useToken } from "./components/TokenProvider";
import Logout from "./components/Logout";

function App() {
  const { token, setToken } = useToken();

  return (
    <div className="app">
      <Navigation />

      <Switch>
        <div className="App-Body">
          <Route path="/home" component={Home} />
          {!token ? (
            <Route
              path="/login"
              component={Login}
              // render={(props) => (
              //   <Login {...props} setToken={setToken} />)}
            />
          ) : (
            <>
              {console.log(token)}
              <Route
                path="/dashboard"
                component={Dashboard}
              />
              <Route path="/profile" component={Profile} />
              <Route path="/logout" component={Logout} />
            </>
          )}
        </div>
      </Switch>
    </div>
  );
}

export default App;
