import "./Scss/app.scss";

import { Routes, Route } from "react-router-dom";

import Home from "./components/LandingPage/Home";
import Navigation from "./components/NavBar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Users from "./components/UsersPage/Users";

function App() {
  return (
    <div className="app-wrapper">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile-page" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
