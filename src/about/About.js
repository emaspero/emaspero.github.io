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

      <h3>Skills</h3>
      <hr />
      <div>
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

      <h3>Interests</h3>
      <hr />
      <div>
      <h3 className="skills-h3">Languages:</h3>
      <p>A passion of mine since I was young. I enjoy developing skills that I can put into practice and speaking different languages not only allows me to achieve that, but it also offers me the tools to approach and learn from different people and cultures. I would like to improve my Chinese and learn Portuguese next.</p>
      <br />
      <h3 className="skills-h3">Reading:</h3>
      <p>I am an avid reader. I enjoy the classics; especially Russian literature (I am currently reading The Idiot by Fyodor Dostoevsky, a masterpiece).</p>
      <br />
      <h3 className="skills-h3">Mindfulness:</h3>
      <p>This practice has an exceptional impact on one’s quality of life. I try to find time every day to meditate and you can easily find me at the gym attending Yoga and Pilates classes.</p>
      </div>
    </div>
  );
}
