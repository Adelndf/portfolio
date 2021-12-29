import React, { useEffect, useRef, useState } from "react";
import "./Progress.css";

function Progress({ progress = "0" }) {
  const [style, setStyle] = useState({});
  const ref = useRef();

  useEffect(() => {
    const onProgressScroll = () => {
      if (ref.current) {
        const secTop = ref.current.offsetTop;
        if (window.scrollY >= secTop - 600) {
          const newStyle = {
            opacity: 1,
            width: `${progress}%`,
          };
          setStyle(newStyle);
        }
      }
    };
    window.addEventListener("scroll", onProgressScroll);
    return () => window.removeEventListener("scroll", onProgressScroll);
  }, [progress]);

  return (
    <div className="progress" ref={ref}>
      <p>{`${progress}%`}</p>
      <div className="progress__container">
        <div className="progress__inside" style={style}></div>
      </div>
    </div>
  );
}

export default Progress;
