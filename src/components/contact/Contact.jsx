import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { useRef } from "react";
import emailjs from "emailjs-com";

import "./contact.css";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2g26107",
        "template_0xygnm8",
        form.current,
        "m9SQzYkOIq6VUL3Od"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch With Me</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>matthewmsmith1992@gmail.com</h5>
            <a href="mailto:matthewmsmith1992@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedinIn className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Business</h5>
            <a href="https://www.linkedin.com/in/matthewmsmith1992/">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type='submit' className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
