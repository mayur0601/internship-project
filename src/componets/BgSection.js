import React from "react";
import { Button } from "./Button";
import "./bgSection.css";

function BgSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <img
        src="https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80"
        className="video"
        alt=""
      />
      <h1 className="text-center">ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Explore Lessons
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          Success Story
          {/* <i className="far fa-play-circle" /> */}
        </Button>
      </div>
    </div>
  );
}

export default BgSection;
