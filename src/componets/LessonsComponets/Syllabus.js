import React from "react";
import syllabusImage from "../../assets/images/syllabus.png";
import "../../assets/css/lessons.css";

function Syllabus() {
  return (
    <div className="syllabus">
      <div className="syllausRight">
        <h2 className="text-center">SYLLABUS</h2>
        <img src={syllabusImage} alt="Syllimage" className="syllabusImg" />
      </div>
      <div className="syllabusLeft">
        <p>
          Our syllabus is designed on various levels and courses. Our standard
          Trinity Syllabus consists of the three basic components which test the
          overall music skills of your child.
        </p>
      </div>
    </div>
  );
}

export default Syllabus;
