import React from "react";
import "./about.css";

// ASSETS
import about from "../../assets/about.jpg";

import { MdOutlineSchool } from "react-icons/md";
import { DiReact } from "react-icons/di";
import { GiCobweb } from "react-icons/gi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={about} alt="about image " />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiCobweb />
              <h5>Web Development</h5>
              <small>2+ years experience</small>
            </article>
            <article className="about__card">
              <MdOutlineSchool />
              <h5>Education</h5>
              <small>4 years experience</small>
            </article>
            <article className="about__card">
              <DiReact />
              <h5>React.js</h5>
              <small>1+ years experience</small>
            </article>
          </div>
          <p>
            I am a senior at Western Governors University majoring in Software
            Development. The program concentrates on Java development. However,
            my passion lies in Frontend React development. I am interested in
            remote work within the React echo system. I am open to internship
            and training opportunities.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
