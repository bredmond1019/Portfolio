import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import AboutPage from "./components/AboutPage";
import Blog from "./components/Blog";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
