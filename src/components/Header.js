import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import { menuDate } from "../constants/constants";
import Logo from "../assets/images/Ad-logo.png";

function Header() {
  const [toggle, setToggle] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const isClickOut = (e) => {
      if (toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("click", isClickOut);
    return () => {
      document.removeEventListener("click", isClickOut);
    };
  }, [toggle]);

  return (
    <div className="header">
      <div className="container">
        <div className="header__left">
          <img src={Logo} alt="logo" />
          <h1>{`<Portfolio />`}</h1>
        </div>
        <div className="header__right">
          <div
            onClick={() => setToggle(!toggle)}
            className={toggle ? `menuMobile show` : "menuMobile"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div
            ref={ref}
            className={toggle ? `header__mene show` : `header__mene`}
          >
            {menuDate.map((menu, index) => (
              <a onClick={() => setToggle(false)} key={index} href={menu.hRef}>
                {menu.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
