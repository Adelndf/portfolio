import React, { useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import "./Home.css";
import Arrow from "../assets/images/arrow.png";

function Home() {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 1200) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  return (
    <div className="home">
      <Header />
      <Main />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <a href="/#" className={show ? `goUpBtn show` : `goUpBtn`}>
        <img src={Arrow} alt="arrow" />
      </a>
    </div>
  );
}

export default Home;
