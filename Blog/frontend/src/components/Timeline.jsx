import React from "react";

function Timeline() {
  return (
    <div className="timeline-wrapper">
      <div className="timeline">
        <h1 className="heading">Education and Experience</h1>

        <div className="card ">
          <div className="card-body">
            <div className="card-grow">
              <h1 className="card-title">2006 - 2010 </h1>
              <p className="card-detail">
                Dual Bachelor's Degree: Mathematics & Education
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="card-grow">
              <h1 className="card-title">2011 - 2013</h1>
              <p className="card-detail">High School Mathematics Teacher</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="card-grow">
              <h1 className="card-title">2013 - 2014</h1>
              <p className="card-detail">
                Uber Technologies - Operations: Driver Side
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="card-grow">
              <h1 className="card-title">2014 - 2020</h1>
              <p className="card-detail">
                High School Computer Science & Mathematics Teacher
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="card-grow">
              <h1 className="card-title">2015 - 2017</h1>
              <p className="card-detail">Master's Degree in Mathematics</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="card-grow">
              <h1 className="card-title">2020 - Present</h1>
              <p className="card-detail">Software Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
