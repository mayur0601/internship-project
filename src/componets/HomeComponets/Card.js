import React from "react";

import "../../assets/css/Card.css";

function Card() {
  return (
    <div>
      <div className="card" style={{ maxWidth: "700px" }}>
        <div className="testimonial">
          <div className="test-info">
            <img
              className="test-pic"
              src="https://images.unsplash.com/photo-1562246229-37b3aca47e18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="test-name">
              <span>David Miller</span>
            </div>
          </div>
          <p>
            <i class="fas fa-quote-left"></i> Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.{" "}
            <i class="fas fa-quote-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
