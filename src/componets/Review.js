import React from "react";
import { Carousel } from "react-bootstrap";
import Card from "./Card";
import "./Card.css";

function Review() {
  return (
    <div className="backgroundImg">
      <div className="header">
        <h1 className="text-center">REVIEWS</h1>
      </div>
      <div class="testimonial-section" id="testimonials">
        <div class="inner-width">
          <Carousel pause="hover">
            <Carousel.Item interval={1000}>
              {/* <img
            className="d-block w-100 review_image"
            src="https://images.unsplash.com/photo-1491308056676-205b7c9a7dc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
              <Card />
            </Carousel.Item>

            <Carousel.Item interval={500}>
              <Card />
            </Carousel.Item>

            <Carousel.Item>
              <Card />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Review;
