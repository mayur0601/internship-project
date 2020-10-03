import React from "react";
import BgSection from "../BgSection";
import Aboutheader from "../Aboutheader";
import About1 from "../About_1";
import Break from "../Break";
import About1_bottom from "../About1_bottom";

function MainAbout() {
  return (
    <div className="main_about">
      <Aboutheader />
      <About1 />
      <div className="break1"></div>
      <About1_bottom />
    </div>
  );
}

export default MainAbout;
