import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <form action="https://formspree.io/f/xdkwgdar" method="POST">
        <input
          type="text"
          placeholder="Enter your Name..."
          name="username"
          required
        />
        <input type="email" placeholder="Email" name="email" required />
        <textarea name="message" placeholder="Message"></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
