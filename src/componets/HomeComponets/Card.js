import React from "react";

import "../../assets/css/Card.css";

function Card(props) {
  const { imageUrl, ratings, studentName, body } = props.review;
  return (
    <div>
      <div className="card" style={{ maxWidth: "700px" }}>
        <div className="testimonial">
          <div className="test-info">
            <img className="test-pic" src={imageUrl} alt="" />
            <div className="test-name">
              <span>{studentName}</span>
              <div className="product_rating">
                {Array(parseInt(ratings, 10))
                  .fill()
                  .map((_, i) => (
                    <span>⭐</span>
                  ))}
              </div>
            </div>
          </div>
          <br></br>
          <p>
            <i class="fas fa-quote-left"></i> {body}{" "}
            <i class="fas fa-quote-right"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
