import React from "react";
import Chatbot from "../components/Chatbot";

const Contact = () => {
  return (
    <div class="bg-blue-300 min-h-screen ">
    <div className=" p-8"
    style={{ backgroundImage: "url('/assets/b3.jpg')" }}
    >
      
     
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>Email: contact@EinfratechSystem.com</p>
      <p>Phone: +1 234 567 890</p>

      
      <Chatbot />
    </div>
    </div>
    
  );
};

export default Contact;
