import React from "react";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="about-container">
      <img
          src="/imgs/about-selfie.JPG"
          alt="placeholder"
          className="about-pic"
        />
        <p>
          I have 3 years experience in managing sales and international clients
          in the UK’s New Homes industry and a bachelor degree in Languages. My
          interest in coding has been lingering since my early teenage years
          where I used to run a blog and play around with basic HTML/CSS skills.
          I believe that languages and programming languages have a lot in
          common. The problem-solving, analytical world of programming, with its
          endless learning possibilities, perfectly chimes with my attitude and
          my strong desire to develop and widen my knowledge.
        </p>
      </div>

      <h3>My Skills</h3>
      <hr />
      <div>
        {/* <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
            width="36"
            height="36"
            alt="JavaScript"
          />
        </a>
        <a href="https://www.python.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
            width="36"
            height="36"
            alt="Python"
          />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
            width="36"
            height="36"
            alt="HTML5"
          />
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
            width="36"
            height="36"
            alt="React"
          />
        </a>
        <a href="https://jquery.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg"
            width="36"
            height="36"
            alt="JQuery"
          />
        </a>
        <a
          href="https://www.w3.org/TR/CSS/#css"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
            width="36"
            height="36"
            alt="CSS3"
          />
        </a>
        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
            width="36"
            height="36"
            alt="Bootstrap"
          />
        </a>
        <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
            width="36"
            height="36"
            alt="NodeJS"
          />
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg"
            width="36"
            height="36"
            alt="Express"
          />
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
            width="36"
            height="36"
            alt="MongoDB"
          />
        </a>
        <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg"
            width="36"
            height="36"
            alt="PostgreSQL"
          />
        </a>
        <a href="https://www.heroku.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg"
            width="36"
            height="36"
            alt="Heroku"
          />
        </a>
        <a
          href="https://www.djangoproject.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg"
            width="36"
            height="36"
            alt="Django"
          />
        </a>
        <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
            width="36"
            height="36"
            alt="Figma"
          />
        </a> */}

        <h3 className="skills-h3">Front-end:</h3>
        <p>HTML, CSS & CSS Libraries (Bootstrap, Materialize, Tailwind), JavaScript, jQuery, React</p> <br/>
        <h3 className="skills-h3">Back-end:</h3>
        <p>Express, Node, Mongoose, Python, Django</p> <br/>
        <h3 className="skills-h3">Other:</h3>
        <p>MongoDB, PostgreSQL, pgAdmin4, npm, pip, Git, GitHub, Heroku, authentication/authorization</p> <br/>
        <h3 className="skills-h3">Methodologies:</h3>
        <p>Object Oriented Programming, RESTful APIs, AJAX, MVC/MVT, pair-programming</p> <br/>
        <h3 className="skills-h3">Languages:</h3>
        <p>Italian (native), English and Spanish (Fluent), French (intermediate), Chinese (beginner)</p> <br/>
        <h3 className="skills-h3">Soft:</h3>
        <p>Time management, Communication, Teamwork, Adaptability, Listening, Positive attitude, Problem solving, Eagerness to learn, Customer service, Intercultural competence</p>
      </div>
    </div>
  );
}
