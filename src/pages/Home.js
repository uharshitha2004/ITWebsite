import { useState, useEffect } from "react";

const images = [
  "/assets/bg1.jpg",
  "/assets/bg2.jpg",
  "/assets/bg3.jpg"
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
      className="h-screen w-full flex items-center justify-center text-white transition-all duration-1000"
      style={{
        backgroundImage: "url('/assets/bg1.jpg')",  
        backgroundSize: "cover",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease-in-out", // Smooth Transition Effect
      }}
    >
      <div className="bg-black/50 p-8 rounded-lg text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Company.</h1>
        <p className="text-lg mt-2">We provide Business and IT Solutions</p>
      </div>
    </div>
  );
};

export default Home;
