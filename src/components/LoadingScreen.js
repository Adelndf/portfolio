import React from "react";
import "./LoadingScreen.css";
import LoadingImg from "../assets/images/loading.gif";

function LoadingScreen({ style }) {
  return (
    <div className="loadingScreen" style={style}>
      <img src={LoadingImg} alt="Loading.." />
    </div>
  );
}

export default LoadingScreen;
