import React from "react";
// import "src/assets/css/About.css";
import "../../assets/css/About.css";
import teacher from "../../assets/images/teacher.jpg";
// import Break from "../Break";

// const styles = {
//   aboutHeading: {
//     // fontFamily: "",
//     fontSize: "50px",
//     marginBottom: "0",
//   },
// };

function About() {
  return (
    <div className="about_bg">
      <div className="container">
        <p className="text-center aboutPara mt-5">
          La Crescendo Academy of Music is founded with the objective of
          promoting Piano based Music Education to students and to actively
          develop their music skills through interactive music sessions. Our
          course syllabus is structured on the platform of International
          Institutions like Trinity College of Music, London School of Music,
          Berklee College of Music and a few others. Our sessions are strictly
          one to one i.e one student per teacher which aids in proper
          understanding for the students and helps promote their growth faster.
          Our teacher specialises in Western Classical Music and holds a degree
          from Trinity College of Music, London. Under her tutelage, her
          students have been performing outstandingly well in their music career
          and Trinity examinations.
        </p>
        <p className="text-center aboutPara mt-5">
          We are also proud to have our students across the globe and have
          celebrities like Kangana Ranaut and other talented students studying
          music under us
        </p>
        <h3 className="text-center">INSTRUCTOR</h3>
        <div className="teacher_info">
          <div className="portfolio-image-container">
            <img
              src={teacher}
              alt="Teacherimage"
              className="teacher_img teaher_image_mobo"
            />
            <div className="portfolio-details">
              <p>Miss. Aishwarya Ravindra Mohol</p>
              <p>Grade pianist from Trinity college of music London</p>
            </div>
          </div>
          <p>
            <strong>
              <h6> Miss. Aishwarya Ravindra Mohol </h6>
            </strong>
            Aishwarya Ravindra Mohol holds a Grade 6 degree in Piano from
            Trinity College of Music, London and is currently pursuing her
            higher degree in Music. She started her Music Journey in 1998 under
            the tutelage of Sir Rajesh Prabhu.<br></br> Her father Mr. Ravindra
            Mohol, one day saw a board outside their house about the tutor (Mr.
            Rajesh Prabhu) teaching piano and keyboard to children, Trinity
            Syllabus. Mr. Ravindra Mohol being an aficionado of classical music
            came home and asked his daughter if she would like to learn the
            piano. She yes and they have begun their music journey since then.
            <br></br>
            Her mother Mrs. Sharmila Ravindra Mohol has also been instrumental
            in pushing her for the lessons as a child. Being a passionate home
            maker, she has always encouraged her children to pursue their
            studies and career well. Miss. Aishwarya Mohol has also learnt under
            other well-known teachers like Ms. Nadine Crasto (LTCL from
            Trinity), and is learning under Mrs. Charmis Braganza (LTCL From
            Trinity) and Mr. Vijay Venkatesh (Fellow Laureate at the Library of
            Congress) from Los Angeles, USA. Apart from this, she is also
            academically well qualified and holds a Bachelor of Engineering
            degree and an MBA in Finance. This Academy is founded with the
            objective of promoting quality Music Education to students willing
            to learn the Piano.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

// #885d1df5
