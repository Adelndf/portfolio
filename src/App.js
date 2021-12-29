import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState({});

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const newStyle = {
        transform: "scale(2.5)",
        opacity: 0,
      };
      setStyle(newStyle);
      setTimeout(() => {
        setLoading(false);
      }, 350);
    }, 1000);
  }, []);

  return (
    <div className="app">
      {loading && <LoadingScreen style={style} />}
      <Home />
    </div>
  );
}

export default App;
