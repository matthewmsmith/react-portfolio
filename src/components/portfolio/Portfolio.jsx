import React from "react";
import note from "../../assets/note.jpg";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <h3>NotePad</h3>
            <img src={note} alt="note image" />
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/matthewmsmith/react-note-app"
                className="btn"
                target="_blank"
              >
                Github
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
