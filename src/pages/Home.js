import { useState, useEffect } from "react";
import "./home.css"; // Import from src folder

const images = [
  "/assets/b1.jpeg",
  "/assets/b2.jpg"
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* Background Image Layer */}
      <div
        className="home-background"
        style={{ backgroundImage: `url(${images[index]})` }}
      />

      {/* Content Box */}
      <div className="home-content">
        <h1>Welcome to Our Company.</h1>
        <p>We provide Business and IT Solutions</p>
      </div>
    </div>
  );
};

export default Home;
