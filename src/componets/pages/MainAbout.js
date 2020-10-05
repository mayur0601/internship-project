import React from "react";
import Aboutheader from "../AboutComponets/Aboutheader";
import About1 from "../AboutComponets/About_1";
import About1bottom from "../AboutComponets/About1bottom";

function MainAbout() {
  return (
    <div className="main_about">
      <Aboutheader />
      <About1 />
      <div className="break1"></div>
      <About1bottom />
    </div>
  );
}

export default MainAbout;
