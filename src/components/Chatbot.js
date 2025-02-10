import React, { useState } from "react";
import "./chatbot.css"; // Import chatbot CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  // Predefined chatbot responses
  const responses = {
    hello: "Hi there! How can I help you?",
    services: "We offer Web Development, UI/UX Design, and AI Solutions.",
    contact: "You can reach us at contact@itcompany.com.",
    default: "I'm not sure about that. Can you rephrase?",
  };

  // Handle user input and bot response
  const handleSend = () => {
    if (userInput.trim() === "") return;

    const userMessage = { text: userInput, sender: "user" };
    setMessages([...messages, userMessage]);

    const botResponse = responses[userInput.toLowerCase()] || responses["default"];
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);

    setUserInput("");
  };

  return (
    <div className="chatbot-container">
      {/* Chatbot Header */}
      <div className="chatbot-header">
        <h3>AI Chatbot</h3>
      </div>

      {/* Chat Messages Box */}
      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <span className="message-text">{msg.text}</span>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
