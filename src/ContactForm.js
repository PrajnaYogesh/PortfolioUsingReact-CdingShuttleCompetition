import "./ContactForm.css";
import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sent");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit} className="formsize">
      <div className="section">
        <label className="inputName" htmlFor="name">
          Name:
        </label>
        <input className="inputSize" type="text" id="name" required />
      </div>
      <div className="section">
        <label className="inputName" htmlFor="email">
          Email:
        </label>
        <input className="inputSize" type="email" id="email" required />
      </div>
      <div className="section">
        <label className="inputName" htmlFor="message">
          Message:
        </label>
        <textarea className="inputSizeMessage1" id="message" required />
      </div>
      <button className="submit" type="submit">
        {status}
      </button>
<div className="my-contact">
      <p>Contact Number : +1 000-000-000 </p>
      <p>Email : prajna.yogish4@gmail.com </p>
      
</div>

      
    </form>

  );
};

export default ContactForm;
