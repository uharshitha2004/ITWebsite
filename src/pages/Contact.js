import React from "react";
import Chatbot from "../components/Chatbot";
import "./contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Us</h1>
        <p>Email: contact@WebTechnology.com</p>
        <p>Phone: +1 234 567 890</p>

        {/* Chatbot Component */}
        <div className="chatbot-section">
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default Contact;
