import React from "react";
import "../../assets/css/About.css";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
const styles = {
  aboutHeading: {
    // fontFamily: "",
    fontSize: "50px",
    marginBottom: "0",
  },
};

function About() {
  return (
    <div className="about_bg">
      <div className="container">
        <div className="text-center">
          <p style={styles.aboutHeading}>About Us</p>
          <svg
            width="300"
            height="47"
            viewBox="0 0 857 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.71698 15.217C19.3836 31.8836 36.0503 31.8836 52.717 15.217C69.3836 -1.44969 86.0503 -1.44969 102.717 15.217C119.384 31.8836 136.05 31.8836 152.717 15.217"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M103 15.217C119.667 31.8836 136.333 31.8836 153 15.217C169.667 -1.44969 186.333 -1.44969 203 15.217C219.667 31.8836 236.333 31.8836 253 15.217"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M203.283 15.217C219.95 31.8836 236.616 31.8836 253.283 15.217C269.95 -1.44969 286.616 -1.44969 303.283 15.217C319.95 31.8836 336.616 31.8836 353.283 15.217"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M303.566 15.217C320.233 31.8836 336.899 31.8836 353.566 15.217C370.233 -1.44969 386.899 -1.44969 403.566 15.217C420.233 31.8836 436.899 31.8836 453.566 15.217"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M403.849 15.217C420.516 31.8836 437.182 31.8836 453.849 15.217C470.516 -1.44969 487.182 -1.44969 503.849 15.217C520.516 31.8836 537.182 31.8836 553.849 15.217"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M504.132 15.217C520.799 31.8836 537.465 31.8836 554.132 15.217C570.799 -1.44969 587.465 -1.44969 604.132 15.217C620.799 31.8836 637.465 31.8836 654.132 15.217"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M604.415 15.217C621.082 31.8836 637.748 31.8836 654.415 15.217C671.082 -1.44969 687.748 -1.44969 704.415 15.217C721.082 31.8836 737.748 31.8836 754.415 15.217"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M704.698 15.217C721.365 31.8836 738.031 31.8836 754.698 15.217C771.365 -1.44969 788.031 -1.44969 804.698 15.217C821.365 31.8836 838.031 31.8836 854.698 15.217"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M3 31.5C19.6667 48.1667 36.3333 48.1667 53 31.5C69.6667 14.8333 86.3333 14.8333 103 31.5C119.667 48.1667 136.333 48.1667 153 31.5"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M103.283 31.5C119.95 48.1667 136.616 48.1667 153.283 31.5C169.95 14.8333 186.616 14.8333 203.283 31.5C219.95 48.1667 236.616 48.1667 253.283 31.5"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M203.566 31.5C220.233 48.1667 236.899 48.1667 253.566 31.5C270.233 14.8333 286.899 14.8333 303.566 31.5C320.233 48.1667 336.899 48.1667 353.566 31.5"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M303.849 31.5C320.516 48.1667 337.182 48.1667 353.849 31.5C370.516 14.8333 387.182 14.8333 403.849 31.5C420.516 48.1667 437.182 48.1667 453.849 31.5"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M404.132 31.5C420.799 48.1667 437.465 48.1667 454.132 31.5C470.799 14.8333 487.465 14.8333 504.132 31.5C520.799 48.1667 537.465 48.1667 554.132 31.5"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M504.415 31.5C521.082 48.1667 537.748 48.1667 554.415 31.5C571.082 14.8333 587.748 14.8333 604.415 31.5C621.082 48.1667 637.748 48.1667 654.415 31.5"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M604.698 31.5C621.365 48.1667 638.031 48.1667 654.698 31.5C671.365 14.8333 688.031 14.8333 704.698 31.5C721.365 48.1667 738.031 48.1667 754.698 31.5"
              stroke="#CA7628"
              stroke-width="5"
            />
            <path
              d="M704.981 31.5C721.648 48.1667 738.314 48.1667 754.981 31.5C771.648 14.8333 788.314 14.8333 804.981 31.5C821.648 48.1667 838.314 48.1667 854.981 31.5"
              stroke="#CA7628"
              stroke-width="5"
            />
          </svg>
        </div>
        <p className="text-center aboutPara">
          We are a State-of-the-Art Music Institute located in India
          specializing in the field of Piano. Our teachers have a vast
          experience of more than 20 years in this stream of music and have been
          teaching for 15 years. Our students are located across the globe and
          are learning the Piano through online platforms in our Academy. We
          teach the Piano - Western Classical Music and have been training our
          students them well for their Trinity Grade Exams across all levels;
          Initial, Intermediate and Advance over the past years. Our students
          have also been learning with a keen interest and have proved their
          mettle in music by their outstanding performances and successfully
          coming out with flying colors. Our teaching methods are designed such
          that the overall experience of learning is filled with practical
          lessons, activities for children, pictorial representation with
          various videos and above all are very interactive. We give equal focus
          on the theoretical fundamentals and the practical lessons where the
          student learns through a combination of both. Other areas also covered
          by us are popular music songs which the student wishes to learn,
          Hindustani or Hindi Songs, popular pieces from Wester Classical or
          Hindi songs for performances, Nursery Rhymes for toddlers, Bollywood
          and Hollywood popular songs and so on. Our Comprehensive syllabus
          covers technical skills, Reading sheet music, Aural Skills, Sight
          reading, Music Knowledge, Improvisation, Exercises for tone, Balance
          and stability, hand co- ordination, finger and wrist strength and
          stability and so on. Our students regularly participate in various
          competitions and have been performing well in repertoire and pieces.
          Come join us and make your musical journey melodious!!
          <Link to="/about" style={{ textDecoration: "none" }}>
            Read more...
          </Link>
        </p>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Read More...
        </Button> */}
      </div>
    </div>
  );
}

export default About;
