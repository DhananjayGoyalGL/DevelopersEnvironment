import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  });

  return (
    <>
      {" "}
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "U", "s"]}
              idx={15}
            />
          </h1>
          <p>
            Hey Coder, welcome to the Developer's Environment! There are plenty
            of students who want to pursue coding and development, but due to
            the lack of financial resources, they are unable to do so. Our
            platform aims to address this issue by providing premium quality
            online courses at affordable rates. We are currently in the starting
            stage, and we are working on designing a user-friendly interface
            that will enable teachers to manage assignments, quizzes, and course
            materials in one place.
          </p>
          <p>
            We want to ensure that students have access to high-quality
            educational content from anywhere and at any time, and that no
            student is deprived of the opportunity to learn. Our platform is
            designed to be accessible to everyone, and we are committed to
            creating a seamless experience for both educators and students.
          </p>
          <p>
            With our platform, we strive to make education more accessible,
            regardless of students' location or socioeconomic status. Join us on
            this journey of learning and growth, and let's create a better
            future together!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
