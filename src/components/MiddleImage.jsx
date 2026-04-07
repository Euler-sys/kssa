import React, { useState, useEffect } from "react";
import img1 from "../assets/main1.jpg";
import img2 from "../assets/main.jpg";

const slides = [
  {
    src: img1,
    text: "We bring structure, clarity, and efficiency to your business processes.",
  },
  {
    src: img2,
    text: "Professional administrative and project coordination you can rely on.",
  },
];

const MiddleImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[450px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <img
        src={slides[currentIndex].src}
        alt="Business operations support"
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C2C]/80 via-[#0B1C2C]/50 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-6 pb-10">
        <p className="text-white text-lg md:text-xl font-medium max-w-2xl">
          {slides[currentIndex].text}
        </p>

     
      </div>
    </section>
  );
};

export default MiddleImage;