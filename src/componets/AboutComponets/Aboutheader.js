import React from "react";
import "../../assets/css/About.css";
// import "./bgSection.css";

function Aboutheader() {
  return (
    <div className="aboutImage" id="aboutTop">
      <img
        src="https://images.unsplash.com/photo-1548695151-ac40f371b3f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        className="bg"
        alt=""
      />
      <h1 className="text-center header_about ">&nbsp;ABOUT US &nbsp;</h1>
    </div>
  );
}

export default Aboutheader;
