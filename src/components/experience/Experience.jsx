import React from "react";
import "./experience.css";

import { BsPatchCheck } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Experience</h5>
      <h2>Knowledge</h2>
      <div className="container experience__container">
        <div className=" experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon" />
              <h4>HTML</h4>
              <small>Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon" />
              <h4>CSS</h4>
              <small>Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon" />
              <h4>Material-UI</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon" />
              <h4>JavaScript</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon" />
              <h4>React</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon" />
              <h4>BootStrap</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon" />
              <h4>Git</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheck className="experience__details-icon" />
              <h4>Sketch</h4>
              <small>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
