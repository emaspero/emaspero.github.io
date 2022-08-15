import React from "react";
import "./App.css";
import Timeline from "./timeline/Timeline";
import ContactForm from "./contact/ContactForm";
import About from "./about/About";

export default function App() {

  return (
    <div className="home-container">
      <header id="home">
      {/* <img
          src="https://dummyimage.com/640x360"
          alt="placeholder"
          className="about-pic"
        /> */}
        <h1>
          <span>Hi, I'm </span>Elisabetta Maspero.
        </h1>
        <p>Polyglot Junior Software Engineer.</p>
        <div className="box-container">
        <div className="box fill">
          <a href="https://www.linkedin.com/in/elisabetta-maspero/" target="_blank" rel="noopener noreferrer">
            <img src="/imgs/linkedin.png" alt="linkedin" id="box-logo" />
          </a>
        </div>
        <div className="box fill">
        <a href="https://github.com/emaspero" target="_blank" rel="noopener noreferrer">
          <img src="/imgs/github.png" alt="github" id="box-logo" />
        </a>
        </div>
        </div>
        {/* <img
          src="https://dummyimage.com/640x360"
          alt="placeholder"
          className="about-pic"
        /> */}
      </header>

      <div id="about">
        <h2> About Me </h2>
        <hr /> 
        <About />
      </div>

      <div id="projects">
        <h2>My Projects</h2>
        <hr />
        <Timeline />
      </div>

      <div id="contact">
        <h2>Contact Me</h2>
        <hr />
        <ContactForm />
      </div>
    </div>
  );
}
