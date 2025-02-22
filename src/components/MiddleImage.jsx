import React, { useState, useEffect } from "react";
import carosel from "../assets/main1.jpg";
import carosel2 from "../assets/main.jpg";
import { LiaShoppingBagSolid } from "react-icons/lia";

const images = [
  { src: carosel, text: "Innovative Engineering Solutions for a Sustainable Future" },
  { src: carosel2, text: "Building Tomorrow’s Infrastructure with Precision and Expertise" }
];

const MiddleImage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <img className="w-full h-full object-cover" src={images[currentIndex].src} alt="Engineering Work" />
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
        {images[currentIndex].text}
      </div>
    </div>
  );
};

export default MiddleImage;
