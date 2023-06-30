import React from "react";
import Interactive from "../interactive/interactive";
import OurCreations from "../ourCreations/ourCreations";
import "./styles.css";

const Main = () => {
  return (
    <div className="main-section">
      <Interactive />
      <OurCreations />
    </div>
  );
};

export default Main;
