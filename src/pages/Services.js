import React from "react";
import "./Services.css"; // Import CSS
import webDevImg from "./web-development.jpg"; // Import service images
import mobileAppImg from "./mob-app.png";
import cloudImg from "./cloud.jpg";
import securityImg from "./cyber.jpg";

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description: "We build modern and responsive websites with the latest technologies.",
      image: webDevImg,
    },
    {
      title: "Mobile App Development",
      description: "Creating powerful and user-friendly mobile applications.",
      image: mobileAppImg,
    },
    {
      title: "Cloud Computing",
      description: "Secure and scalable cloud solutions for businesses.",
      image: cloudImg,
    },
    {
      title: "Cyber Security",
      description: "Protecting your data and applications from cyber threats.",
      image: securityImg,
    },
  ];

  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
