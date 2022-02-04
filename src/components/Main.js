import React from "react";
import BgAnimation from "./BgAnimation";
import "./Main.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="main__text">
          <h1>
            Welcome To <br />
            My Personal Portfolio
          </h1>
          <p>
            All started with a simple <span className="yellow">console</span>.
            <span className="blue">log</span>("
            <span className="green">Hello World</span>") <br />
            My plan is to make my development skills better and reach new level
            every day with coding to build awesome apps.
          </p>
          <div className="main__icons">
            <a
              target="_blank"
              href="https://www.instagram.com/x.3dx/"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              href="https://github.com/Adelndf"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/adel-naddaf-727859214/"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="main__svg">
          <BgAnimation />
        </div>
      </div>
    </div>
  );
}

export default Main;
