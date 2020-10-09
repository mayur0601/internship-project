import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Card from "./Card";
import "../../assets/css/Card.css";
import axios from "axios";

function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("/reviews")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const reviewMarkup = reviews.map((review) => (
    <Carousel.Item key={review.reviewId} interval={500}>
      <Card review={review} />
    </Carousel.Item>
  ));
  return (
    <div className="backgroundImg">
      <div className="header">
        <h1 className="text-center">REVIEWS</h1>
      </div>
      <div class="testimonial-section" id="testimonials">
        <div class="inner-width">
          <Carousel pause="hover">{reviewMarkup}</Carousel>
        </div>
      </div>
    </div>
  );
}

export default Review;
