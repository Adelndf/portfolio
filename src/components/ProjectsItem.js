import React from "react";
import "./ProjectsItem.css";

function ProjectsItem({ img, link, noLive }) {
  return (
    <div className="ProjectsItem">
      <div className="projects__box">
        <div className="browser">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="projects__boxImg">
          <img src={img} alt="projectImg" />
        </div>
        <div className="projects__boxText">
          {noLive ? (
            <a href="#">No Live..</a>
          ) : (
            <a target="_blank" href={link} rel="noreferrer">
              Visit
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsItem;
