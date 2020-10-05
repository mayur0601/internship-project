import React from "react";
import "../../App.css";
// import Cards from '../Cards';
import BgSection from "../HomeComponets/BgSection";
// import Footer from '../Footer';
import About from "../HomeComponets/About";
import Review from "../HomeComponets/Review";
import SuccessStories from "../HomeComponets/SuccessStories";
import Break from "../Break";
function Home() {
  return (
    <>
      <BgSection />
      <About />
      <Break />
      <Review />
      <SuccessStories />
    </>
  );
}

export default Home;
