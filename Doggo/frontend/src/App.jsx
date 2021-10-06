import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

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
	const {
		isLoggedIn,
		saveToken,
		setToken,
		setTokenExpirationTime,
		logout,
		token,
		tokenExpirationTime,
	} = useToken();

	useEffect(() => {
		const storedData = JSON.parse(localStorage.getItem("userData"));
		if (
			storedData &&
			storedData.userToken &&
			new Date(storedData.expirationTime) > new Date()
		) {
			saveToken(storedData.userToken, new Date(storedData.expirationTime));
		} else {
			localStorage.clear("userData");
			setToken(false);
			setTokenExpirationTime(null);
		}
	}, []);

	//
	// TODO: FIX THIS
	//

	// useEffect hook to set the timer if
	// the expiration time is in future otherwise
	// we clear the timer here
	useEffect(() => {
		let logoutTimer = (f) => f;
		if (token && tokenExpirationTime) {
			const remainingTime =
				tokenExpirationTime.getTime() - new Date().getTime();
			logoutTimer = setTimeout(logout, remainingTime);
			console.log(logoutTimer);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, logout, tokenExpirationTime]);

	return (
		<div className="app">
			<Navigation />

			<Switch>
				<div className="App-Body">
					<Route path="/home" component={Home} />
					{!isLoggedIn ? (
						<Route path="/login" component={Login} />
					) : (
						<>
							<Route path="/dashboard" component={Dashboard} />
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
