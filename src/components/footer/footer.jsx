import React from "react";
import imgLogo from "../assets/logo.svg";
import "./styles.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  let date = new Date();

  return (
    <div id="footer" className="footer-section">
      <div className="footer-container">
        <div className="img-logo one">
          <img src={imgLogo} alt="logo-img" />
        </div>
        <div className="two">
          <ul className="footer-icons">
            <li>
              <a href="/">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="/">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <FaPinterest />
              </a>
            </li>
            <li>
              <a href="/">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="three">
          <ul className="footer-list">
            <li>
              <a href="#interative-section">About</a>
            </li>
            <li>
              <a href="#creation-section">Careers</a>
            </li>
            <li>
              <a href="#creation-section">Events</a>
            </li>
            <li>
              <a href="#creation-section">Products</a>
            </li>
            <li>
              <a href="#footer">Support</a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright four">
          <p>Ⓒ {date.getFullYear()} Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
