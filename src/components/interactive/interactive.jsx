import React from "react";
import imgInteractive from "../assets/image-interactive.jpg";
import "./styles.css";

const Interactive = () => {
  const text =
    "Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed business through digital experiences that bind to their brand.";

  return (
    <div id="interative-section" className="vr-section">
      <div className="img">
        <img src={imgInteractive} alt="vr-img" />
      </div>
      <div className="text">
        <h1>
          THE LEADER IN
          <br />
          INTERACTIVE VR
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Interactive;
