import React from "react";

import Header from "./Header";
import Review from "./Review";
import WordOfTheDay from "./WordOfTheDay";

import two_people from "./../images/two_people.jpg";

function Home(props) {
  return (
    <div className="app-body">
      <div className="home-wrapper">
        <Header />
        <div className="home-title-section">
          <div className="home-title-wrapper">
            <h1 className="home-title">Welcome to Fala!</h1>
            <h3 className="home-subtitle">
              Here you can practice your portugeuse and review vocabulary
            </h3>
          </div>
          <div className="home-image-wrapper">
            <img src={two_people} alt="" className="home-image" />
          </div>
        </div>
      </div>
      <div className="word-of-the-day-wrapper">
        <WordOfTheDay word={props.word} definition={props.definition} />
      </div>
      <div id="review" className="review-wrapper">
        <Review />
      </div>
    </div>
  );
}

export default Home;
