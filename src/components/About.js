import React, { useRef, useState } from "react";
import "./About.css";
import AboutImg from "../assets/images/About-us.png";
import Blob from "./Blob";
import Fade from "react-reveal/Fade";
import CvPdf from "../assets/pdf/Adel-dev-cv.pdf";

function About() {
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
    <div className="about" id="about">
      <div className="container">
        <div ref={secRef} className={start ? "main-title start" : "main-title"}>
          About
        </div>
        <div className="about__content">
          <Fade>
            <div className="about__left">
              <img src={AboutImg} alt="" />
            </div>
          </Fade>
          <Fade>
            <div className="about__right">
              <div className="about__text">
                <h2>Get to know me more</h2>
                <p>
                  Hi , I'm Adel from Syria , 24 years old , I'm a front-end
                  developer, learned programming through self-teaching
                  (Self-Taught) and discovered that coding is my passion , my
                  goal is to be the best.
                </p>
                <a href={CvPdf} download>
                  Donwload CV
                </a>
              </div>
              <div className="blob1">
                <Blob />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default About;
