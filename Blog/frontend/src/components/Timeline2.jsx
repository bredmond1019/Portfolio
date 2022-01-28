import React from "react";

import puppy from "./../images/puppy.jpeg";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-header">
        <h1 className="heading">Education and Experience</h1>
        <h3>My Professional Story</h3>
      </div>

      <div className="timeline-items">
        <div className="timeline-item">
          <div className="memory-image">
            <div className="image-container">
              <img src={puppy} alt="" className="image-style" />
            </div>
          </div>

          <div className="tile ">
            <div className="tile-body">
              <div className="tile-grow">
                <h1 className="tile-title">2006 - 2010 </h1>
                <p className="tile-detail">
                  Dual Bachelor's Degree: Mathematics & Education
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="memory-image">
            <div className="image-container">
              <img src={puppy} alt="" className="image-style" />{" "}
            </div>
          </div>

          <div className="tile">
            <div className="tile-body">
              <div className="tile-grow">
                <h1 className="tile-title">2011 - 2013</h1>
                <p className="tile-detail">High School Mathematics Teacher</p>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="memory-image">
            <div className="image-container">
              <img src={puppy} alt="" className="image-style" />{" "}
            </div>
          </div>

          <div className="tile">
            <div className="tile-body">
              <div className="tile-grow">
                <h1 className="tile-title">2013 - 2014</h1>
                <p className="tile-detail">
                  Uber Technologies - Operations: Driver Side
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="memory-image">
            <div className="image-container">
              <img src={puppy} alt="" className="image-style" />{" "}
            </div>
          </div>

          <div className="tile">
            <div className="tile-body">
              <div className="tile-grow">
                <h1 className="tile-title">2014 - 2020</h1>
                <p className="tile-detail">
                  High School Computer Science & Mathematics Teacher
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="memory-image">
            <div className="image-container">
              <img src={puppy} alt="" className="image-style" />{" "}
            </div>
          </div>

          <div className="tile">
            <div className="tile-body">
              <div className="tile-grow">
                <h1 className="tile-title">2015 - 2017</h1>
                <p className="tile-detail">Master's Degree in Mathematics</p>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="memory-image">
            <div className="image-container">
              <img src={puppy} alt="" className="image-style" />{" "}
            </div>
          </div>

          <div className="tile">
            <div className="tile-body">
              <div className="tile-grow">
                <h1 className="tile-title">2020 - Present</h1>
                <p className="tile-detail">Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
