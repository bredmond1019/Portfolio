import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Scss/App";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(false);

  return (
    <div className="app">
      <Navigation token={token} />

      <Switch>
        <div className="App-Body">
          <Route path="/home" component={Home} />
          {!token ? (
            <Route
              path="/login"
              render={(props) => <Login {...props} setToken={setToken} />}
            />
          ) : (
            <>
              {console.log(token)}
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={Profile} />
            </>
          )}
        </div>
      </Switch>
    </div>
  );
}

export default App;
