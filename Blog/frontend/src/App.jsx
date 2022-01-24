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
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
