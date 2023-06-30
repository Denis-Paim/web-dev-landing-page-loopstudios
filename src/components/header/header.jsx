import React from "react";
import "./styles.css";
import imgLogo from "../assets/logo.svg";
import imgBurger from "../assets/icon-hamburger.svg";
import imgClosed from "../assets/icon-close.svg";

const NavBar = () => {
  function toggleMenu() {
    const nav = document.getElementById("change");
    nav.classList.toggle("active");
  }

  return (
    <div id="change" className="header-container">
      <div className="container">
        <div className="nav-container">
          <div className="nav-image">
            <img className="nav-logo" src={imgLogo} alt={"logo"} />
          </div>
          <div id="nav">
            <ul id="menu" className="nav-list">
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Events</a>
              </li>
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Support</a>
              </li>
            </ul>
            <img
              onClick={toggleMenu}
              id="burger"
              className="img-burger"
              src={imgBurger}
              alt="burger"
            />
            <img
              onClick={toggleMenu}
              id="burger-closed"
              className="img-close"
              src={imgClosed}
              alt="close"
            />
          </div>
        </div>

        <div className="text-box">
          <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
