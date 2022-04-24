import React from "react";
import CV from "./CTA";
import myself from "../../assets/main.jpg";
import HeaderSocial from "./HeaderSocial";
import './header.css'

const Header = () => {
  return (
    <header>
      <section className="container header__container">
        <h5> I am</h5>
        <h1>Matthew Smith</h1>
        <h5 className="text__light">a React Developer</h5>
        <CV />
        <HeaderSocial />
        <div >
          <img src={myself} alt="myself" className="me"/>
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
       
      </section>
    </header>
  );
};

export default Header;
