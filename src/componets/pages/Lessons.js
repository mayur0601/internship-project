import React from "react";
import LessonHeader from "../LessonHeader";
import LessonSection from "../LessonSection";
import LessonSectionRight from "../LessonSectionRight";
import LessonSection3 from "../LessonSection3";
import LessonSection4 from "../LessonSection4";
import Syllabus from "../Syllabus";
import SyllabusSection2 from "../SyllabusSection2";
function Lessons() {
  return (
    <div className="lessons">
      <LessonHeader />
      <LessonSection />
      <LessonSectionRight />
      <LessonSection3 />
      <LessonSection4 />
      <Syllabus />
      <br></br>
      <SyllabusSection2 />
    </div>
  );
}

export default Lessons;
