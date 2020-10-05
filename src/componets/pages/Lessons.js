import React from "react";
import LessonHeader from "../LessonsComponets/LessonHeader";
import LessonSection from "../LessonsComponets/LessonSection";
import LessonSectionRight from "../LessonsComponets/LessonSectionRight";
import LessonSection3 from "../LessonsComponets/LessonSection3";
import LessonSection4 from "../LessonsComponets/LessonSection4";
import Syllabus from "../LessonsComponets/Syllabus";
import SyllabusSection2 from "../LessonsComponets/SyllabusSection2";
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
