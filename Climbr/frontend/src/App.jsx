import "./Scss/app.scss";

import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/NavBar";
import ProfilePage from "./components/ProfilePage";

function App() {
	return (
		<div className="app-wrapper">
			<Navigation />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/user" element={<ProfilePage />} />
			</Routes>
		</div>
	);
}

export default App;
