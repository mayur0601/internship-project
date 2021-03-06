import React from "react";
import { Button } from "../Button";
import "../../assets/css/bgSection.css";
import { Link } from "react-router-dom";
import "../Button.css";

function BgSection() {
  return (
    <div className="hero-container">
      {/* <img
        src="https://images.unsplash.com/photo-1518544897598-d3c0040f1089?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
        className="bg"
        alt=""
      /> */}

      <img
        src="https://images.unsplash.com/photo-1548695151-ac40f371b3f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        className="bg"
        alt=""
      />
      <h1 className="text-center">LA CRESCENDO</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Link to="/lessons">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Explore Lessons
          </Button>
        </Link>

        <Link to="/achivements">
          <button
            className="successBtn"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Success Story
            <i className="far fa-play-circle" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BgSection;
