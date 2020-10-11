import React from "react";
import "../../assets/css/lessons.css";
function LessonHeader() {
  return (
    <div className="lessonImage">
      <img
        src="https://images.unsplash.com/photo-1548695151-ac40f371b3f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        className="bg"
        alt=""
      />
      <h1 className="text-center header_about ">
        &nbsp; ONLINE PIANO LESSONS &nbsp;
      </h1>
      <br></br>
      <p className="text-center lesson1_para">
        Now you can learn the piano at the comfort of your home without the
        hassle of commuting far away for your lessons. Stay in the comfort of
        your home and learn the instrument in your familiar environment.
        Technology has made it possible to save time, get the expertise of the
        teacher of your choice at your doorstep.
      </p>
    </div>
  );
}

export default LessonHeader;
