import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="card" style={{ maxWidth: "700px" }}>
      <div className="testimonial">
        <div className="test-info">
          <img className="test-pic" src="piano recitals.jpg" alt="" />
          <div className="test-name">
            <span>Sunil Narane</span>
            @client5
          </div>
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default Card;
