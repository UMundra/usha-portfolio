import React from "react";
import { FaFileAlt } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="section home">
      <div className="intro">
        <h1>Hi, I'm Usha Mundra</h1>
        <p className="tagline">Front-End Developer crafting seamless and scalable UI solutions</p>
        <div className="home-buttons">
          <a href="#contact" className="cta-button">Let's Connect</a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
            title="View Resume"
          >
            <FaFileAlt className="resume-icon-only" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;