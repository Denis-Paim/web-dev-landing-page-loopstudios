import React from "react";
import "./styles.css";
import imgEarth from "../assets/image-deep-earth.jpg";
import imgNight from "../assets/image-night-arcade.jpg";
import imgSoccer from "../assets/image-soccer-team.jpg";
import imgGrid from "../assets/image-grid.jpg";
import imgFromUp from "../assets/image-from-above.jpg";
import imgPocket from "../assets/image-pocket-borealis.jpg";
import imgCuriosity from "../assets/image-curiosity.jpg";
import imgFisheye from "../assets/image-fisheye.jpg";

const OurCreations = () => {
  let contents = [
    {
      text: "DEEP EARTH",
      img: imgEarth,
    },
    { text: "NIGHT ARCADE", img: imgNight },
    { text: "SOCCER TEAM VR", img: imgSoccer },
    { text: "THE GRID", img: imgGrid },
    { text: "FROM UP ABOVE VR", img: imgFromUp },
    { text: "POCKET BOREALIS", img: imgPocket },
    { text: "THE CURIOSITY", img: imgCuriosity },
    { text: "MAKE IT FISHEYE", img: imgFisheye },
  ];

  return (
    <div className="our-creations-section">
      <div className="our-header">
        <h1>OUR CREATIONS</h1>
        <p>SEE ALL</p>
      </div>

      <div className="imgs-section">
        {contents.map((content, id) => {
          return (
            <div
              key={id}
              className="img-field"
              style={{ backgroundImage: `url(${content.img})` }}
            >
              {id === 0 || id === 3 ? (
                <h2 key={id} style={{ wordSpacing: "60px" }}>
                  {content.text}
                </h2>
              ) : (
                <h2 key={id}>{content.text}</h2>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurCreations;
