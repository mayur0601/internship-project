import React from "react";
import "../../App.css";
// import Cards from '../Cards';
import BgSection from "../BgSection";
// import Footer from '../Footer';
import About from "../About";
import Review from "../Review";
import SuccessStories from "../SuccessStories";
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
