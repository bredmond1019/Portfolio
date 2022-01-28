import Timeline from "./Timeline";
import Timeline2 from "./Timeline2";

import Brandon from "./../images/Brandon2.jpeg";

function About() {
  return (
    <div className="about-wrapper">
      <div className="about-section">
        <div className="about">
          <div className="about-img-container">
            <img src={Brandon} className="about-img" alt="" />
          </div>
          <div className="about-info">
            <h1 className="about-info-title">About Me</h1>
            <p className="about-info-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              quo, facere iure asperiores saepe doloremque aspernatur soluta
              voluptas quos nisi, facilis dolor dicta labore fugiat neque
              similique iusto voluptate at.
            </p>
            <p className="about-info-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              quo, facere iure asperiores saepe doloremque aspernatur soluta
              voluptas quos nisi, facilis dolor dicta labore fugiat neque
              similique iusto voluptate at.
            </p>
            <p className="about-info-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              quo, facere iure asperiores saepe doloremque aspernatur soluta
              voluptas quos nisi, facilis dolor dicta labore fugiat neque
              similique iusto voluptate at.
            </p>
          </div>
        </div>

        {/* <Timeline /> */}
      </div>

      <Timeline2 />
    </div>
  );
}

export default About;
