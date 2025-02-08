import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  
  const responses = {
    "hello": "Hi there! How can I help you?",
    "services": "We offer Web Development, UI/UX Design, and AI Solutions.",
    "contact": "You can reach us at contact@itcompany.com.",
    "default": "I'm not sure about that. Can you rephrase?",
  };

 
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
    <div className="fixed bottom-5 right-5 bg-white p-4 shadow-lg rounded-lg w-72 border">
      <div className="h-56 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 ${msg.sender === "bot" ? "text-left" : "text-right"}`}>
            <span className={`px-3 py-1 rounded-lg ${msg.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white"}`}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          className="border p-2 flex-grow rounded-l-md"
          placeholder="Type a message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-3 py-2 rounded-r-md">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
