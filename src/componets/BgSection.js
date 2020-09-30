import React from "react";
import { Button } from "./Button";
import "./bgSection.css";
import { Link } from "react-router-dom";
function BgSection() {
  return (
    <div className="hero-container">
      <img
        src="https://images.unsplash.com/photo-1565879629766-30adf38aac56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        className="video"
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
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            Success Story
            <i className="far fa-play-circle" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default BgSection;
