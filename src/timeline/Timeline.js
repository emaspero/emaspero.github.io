import React, { useEffect } from "react";
import "./Timeline.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Timeline() {
  const animateFromTo = (elem, direction) => {
    const offset = 1000;
    let x = 0;
    let y = direction * offset;

    direction = direction | 1;

    if (elem.classList.contains("slide_from_left")) {
      x = -offset;
      y = 0;
    } else if (elem.classList.contains("slide_from_right")) {
      x = offset;
      y = 0;
    }

    gsap.fromTo(
      elem,
      { x: x, y: y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto",
      }
    );
  };

  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".animate").forEach(function (elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFromTo(elem);
        },
        onEnterBack: function () {
          animateFromTo(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        },
      });
    });
  }, []);

  return (
    <div className="timeline">
      <ul>
        <li>
          <div className="content">
            <h3 className="animate slide_from_left">TripTips <a href="https://github.com/emaspero/GA-Project04-Frontend-Trips-Tips" target="_blank" rel="noopener noreferrer" id="project-link">(+)</a></h3>
            <p className="project-content-s-l animate slide_from_left">
              Full-stack MERN (MongoDB, Express, React, Node) single-page
              application which showcases a well-styled interactive front-end,
              the project was built using a RESTful architecture and full CRUD
              functionality. A token-based authentication has been implemented
              and navigation responds to the login status of the User.
            </p>
            <p className="project-content-m animate slide_from_left">
              MongoDB, Express, React, Node, RESTful architecture, CRUD
              functionality
            </p>
          </div>
          <div className="time animate slide_from_right">
            <h4>July 2022</h4>
          </div>
        </li>
        <li>
          <div className="content">
            <h3 className="animate slide_from_right">The Phonograph</h3>
            <p className="project-content-s-l animate slide_from_right">
              Full stack application which includes at least 2 related models,
              one being the User, implementing the major CRUD functions.It was
              built from scratch using Python, Django, PostgreSQL and we
              implemented Tailwind as a CSS library.
            </p>
            <p className="project-content-m animate slide_from_right">
              Python, Django, PostgreSQL, Tailwind, CRUD functionality
            </p>
          </div>
          <div className="time animate slide_from_left">
            <h4>June 2022</h4>
          </div>
        </li>
        <li>
          <div className="content">
            <h3 className="animate slide_from_left">WineTime</h3>
            <p className="project-content-s-l animate slide_from_left">
              Full stack application that allows a User to create a profile,
              login, change password and add different wines records and review
              wines. This web application was built from scratch using the
              Express framework. Main technologies used are: HTML, CSS,
              Bootstrap, JavaScript/jQuery, Node.js, Express, MongoDB/Mongoose.
            </p>
            <p className="project-content-m animate slide_from_left">
              Bootstrap, JavaScript, jQuery, Node.js, Express, MongoDB, Mongoose
            </p>
          </div>
          <div className="time animate slide_from_right">
            <h4>June 2022</h4>
          </div>
        </li>
        <li>
          <div className="content">
            <h3 className="animate slide_from_right">Frogger</h3>
            <p className="project-content-s-l animate slide_from_right">
              This project was my take on the popular Frogger arcade action game
              using HTML, CSS/Flexbox and Vanilla JavaScript. It features a
              countdown times and a results area which displays a response “You
              win/lose” message.
            </p>
            <p className="project-content-m animate slide_from_right">
              HTML, CSS, Flexbox, Vanilla JavaScript
            </p>
          </div>
          <div className="time animate slide_from_left">
            <h4>May 2022</h4>
          </div>
        </li>
        <div style={{ clear: "both" }}></div>
      </ul>
    </div>
  );
}
