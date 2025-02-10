import React from "react";
import "./Portfolio.css"; // Import CSS
import ecommerceImg from "./Ecommerce.jpeg"; // Correct Import
import businessImg from "./Business.jpeg";
import shoppingImg from "./Shopping.jpeg";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      image: ecommerceImg, // Use Imported Image
      description: "A fully functional online shopping platform with secure payments and product management.",
    },
    {
      title: "Business Dashboard",
      image: businessImg,
      description: "An analytics dashboard with real-time data visualization for business insights.",
    },
    {
      title: "Shopping Website",
      image: shoppingImg,
      description: "A shopping platform featuring categories like Home Appliances, Jewelry, Mobile Phones, Accessories, Beauty, and Health Care.",
    },
  ];

  return (
    <div className="portfolio-container">
      <h2 className="portfolio-title">Our Portfolio</h2>
      <p className="portfolio-description">
        Explore some of our latest projects that showcase our expertise and creativity.
      </p>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-card">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
