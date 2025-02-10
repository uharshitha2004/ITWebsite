import { useState, useEffect } from "react";

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
    <div
      className="h-screen w-full flex items-center justify-center text-white transition-all duration-1000 relative"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[index]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 1, 
          transition: "opacity 1s ease-in-out"
        }}
      />

      
      <div className="relative z-10 bg-black/50 p-8 rounded-lg text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Company.</h1>
        <p className="text-lg mt-2">We provide Business and IT Solutions</p>
      </div>
    </div>
  );
};

export default Home;
