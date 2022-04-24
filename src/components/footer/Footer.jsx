import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import './footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">| MATTHEW SMITH | </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
         </ul>
          <div className="footer__socials">
            <a href="https://facebook.com">
              {" "}
              <FaFacebookF />
            </a>
            <a href="https://instagram.com">
              <AiFillInstagram />
            </a>
            <a href="https://twitter.com">
              <BsTwitter />
            </a>
          </div>
        
          <div className="footer__copyright">
            <small>
              &copy; Matthew Smith. All rights reserved.
            </small>
          </div>
    </footer>
  );
};

export default Footer;
