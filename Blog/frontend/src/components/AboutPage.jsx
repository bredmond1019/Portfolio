import About from "./About";
import Timeline from "./Timeline";
import TechStack from "./TechStack";

function AboutPage() {
  return (
    <div id="about-wrapper" className="about-wrapper">
      <About />
      <TechStack />
      <Timeline />
    </div>
  );
}

export default AboutPage;
