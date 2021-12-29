import React, { useRef, useState } from "react";
import "./Projects.css";
import { myProjects } from "../constants/constants";
import Fade from "react-reveal/Fade";
import ProjectsItem from "./ProjectsItem";

function Projects() {
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
    <div className="projects" id="projects">
      <div className="container">
        <div ref={secRef} className={start ? "main-title start" : "main-title"}>
          Projects
        </div>
        <div className="projects__content">
          {myProjects.map((project, index) => (
            <div key={index}>
              <Fade>
                <ProjectsItem
                  link={project.hRef}
                  img={project.imgUrl}
                  noLive={project.noLive}
                />
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
