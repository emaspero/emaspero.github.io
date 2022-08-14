import React, { useState } from "react";
import "./ContactForm.css";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/39498380-1a48-11ed-9d73-8fc992e1fd24"; // TODO - fill on the later step

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div className="thankyou-message">
        <h2>Thank you!</h2>
        <div>I'll be in touch as soon as possible.</div>
      </div>
    );
  }

  return (
    <div className="contact-container">
      <div className="contact-left">
        <div>
        <img className="contact-icon" src="https://dummyimage.com/50x50" alt="placeholder" />
        <p>Reading, United Kingdom</p> <br/>
        </div>
        <div className="email-left">
        <img className="contact-icon" src="https://dummyimage.com/50x50" alt="placeholder" />
        <p>masperoelisabetta@gmail.com</p>
        </div>
      </div>
      <div className="contact-right">
        <form
          action={FORM_ENDPOINT}
          onSubmit={handleSubmit}
          method="POST"
          target="_blank"
        >
          <div>
            <input type="text" placeholder="Your name" name="name" required />
          </div>
          <div>
            <input type="email" placeholder="Email" name="email" required />
          </div>
          <div>
            <textarea placeholder="Your message" name="message" required />
          </div>
          <div>
            <button type="submit"> Submit </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
