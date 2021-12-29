import React, { useEffect } from "react";
import "./Blob.css";
import KUTE from "kute.js";

function Blob() {
  useEffect(() => {
    const Tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    Tween.start();
  }, []);

  return (
    <div className="blob">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="800"
        height="500"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(446.51039305590643 250.17990222021658)">
          <path
            id="blob1"
            d="M150 -148C177 -123 169.5 -61.5 173.2 3.7C176.8 68.8 191.7 137.7 164.7 187.7C137.7 237.7 68.8 268.8 7 261.9C-54.9 254.9 -109.8 209.8 -140.3 159.8C-170.8 109.8 -176.9 54.9 -172.1 4.8C-167.3 -45.3 -151.5 -90.5 -121 -115.5C-90.5 -140.5 -45.3 -145.3 8.1 -153.4C61.5 -161.5 123 -173 150 -148"
            fill="#7689c9"
          ></path>
        </g>
        <g transform="translate(439.9934328331403 304.8657954634954)">
          <path
            id="blob2"
            visibility="hidden"
            d="M147.9 -147.1C181.2 -114.6 190.6 -57.3 197.3 6.7C204 70.7 208.1 141.4 174.8 166.4C141.4 191.4 70.7 170.7 1.1 169.7C-68.6 168.6 -137.2 187.2 -164.8 162.2C-192.5 137.2 -179.3 68.6 -174.7 4.6C-170.1 -59.4 -174.1 -118.8 -146.5 -151.3C-118.8 -183.8 -59.4 -189.4 -1.1 -188.3C57.3 -187.3 114.6 -179.6 147.9 -147.1"
            fill="#7689c9"
          ></path>
        </g>
      </svg>
    </div>
  );
}

export default Blob;
