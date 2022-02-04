import React, { useRef, useState } from "react";
import "./Skills.css";
import skillImg from "../assets/images/skills.png";
import Progress from "./Progress";
import { skills } from "../constants/constants";
import Fade from "react-reveal/Fade";

function Skills() {
  const [start, setStart] = useState(false);
  const secRef = useRef();

  window.addEventListener("scroll", function () {
    if (secRef.current) {
      const secTop = secRef.current.offsetTop;
      if (window.scrollY >= secTop - 400) {
        setStart(true);
      }
    }
  });

  return (
    <div className="skills" id="skills">
      <div className="container">
        <div ref={secRef} className={start ? "main-title start" : "main-title"}>
          Skills
        </div>
        <div className="skills__content">
          <div className="skills__left">
            <div className="skills__leftWrapper">
              {skills.map((skill, index) => (
                <>
                  <Fade>
                    <div className="skill__box" key={index}>
                      <div className="skill__icon">
                        <img src={skill.icon} alt="icon" />
                        <h2>{skill.skill}</h2>
                      </div>
                      <Progress progress={skill.prog} />
                    </div>
                  </Fade>
                </>
              ))}
            </div>
          </div>
          {/* <div className="skills__right">
            <Fade>
              <div className="skills__imgWrapper">
                <img src={skillImg} alt="skillImg" />
              </div>
            </Fade>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Skills;
