import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import About from "./components/About";
import Blog from "./components/Blog";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/home" element={<Landing />} />
      </Routes>
      <Landing />
    </div>
  );
}

export default App;
