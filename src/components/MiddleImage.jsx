import React, { useState, useEffect } from "react";
import carosel from "../assets/main1.jpg";   // replace with fashion/outdoor images
import carosel2 from "../assets/main.jpg";
import { LiaShoppingBagSolid } from "react-icons/lia";

const images = [
  { src: carosel, text: "Outdoor style that moves with you" },
  { src: carosel2, text: "Daveclothingoutdoor – fashion built for adventure" }
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
      <img
        className="w-full h-full object-cover"
        src={images[currentIndex].src}
        alt="Daveclothingoutdoor Fashion"
      />
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded flex items-center space-x-2">
        <span>{images[currentIndex].text}</span>
        <LiaShoppingBagSolid className="text-xl" />
      </div>
    </div>
  );
};

export default MiddleImage;
