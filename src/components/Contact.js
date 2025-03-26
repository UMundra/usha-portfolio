import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Let's Get in Touch</h2>
      <div className="contact-icons">
        <a href="mailto:Ushamundra197@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
          <FaEnvelope size={30} />
        </a>
        <a href="https://github.com/UMundra" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/usha-mundra" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin size={30} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
