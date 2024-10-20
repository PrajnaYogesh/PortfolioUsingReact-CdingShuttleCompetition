import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("message sent successfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="ContactForm">
      <h2>Contact Form</h2>
      <form className="cf" ref={form} onSubmit={sendEmail}>
        <div className="half left cf">
          <input type="text" placeholder="Name" name="from_name" required={true}/>
          <input type="email" placeholder="Email address" name="from_email" required={true}/>
        </div>
        <div className="half right cf">
          <textarea name="message" type="text" placeholder="Message" required={true}></textarea>
        </div>
        <input type="submit" value="Submit" id="input-submit" />
      </form>
    </div>
  );
}

export default ContactForm;
