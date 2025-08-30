import React, { useState } from "react";
import heroImg_1 from "../assets/gold-1.jpg";
import heroImg_2 from "../assets/gold-2.jpg";
import heroImg_3 from "../assets/gold-3.jpg";
import heroImg_4 from "../assets/gold-4.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const images = [heroImg_1, heroImg_2, heroImg_3, heroImg_4];
const captions = [
  "Outdoor Lifestyle",
  "Streetwear in Motion",
  "Adventure Ready Apparel",
  "Daveclothingoutdoor Collection"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [openIndex, setOpenIndex] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="py-3">
        <a className="text-[14px] text-[#d3ae3e] font-bold" href="#">
          Home | Fashion | Daveclothingoutdoor
        </a>
      </div>

      {/* Title & Description */}
      <div className="py-5 text-center">
        <h1 className="text-[20px] sm:text-3xl font-bold uppercase mb-3 text-[#423615] md:text-4xl">
          Daveclothingoutdoor
        </h1>
        <p className="text-[14px] md:text-[18px] mb-4">
          Daveclothingoutdoor blends outdoor adventure with urban style. Our
          collections are designed for comfort, durability, and individuality—
          empowering you to explore the world in fashion-forward gear.
        </p>
      </div>
      
      {/* Image Slider */}
      <div className="relative w-full max-w-lg mx-auto">
        <img
          className="w-full h-[300px] object-cover"
          src={images[currentIndex]}
          alt="Daveclothingoutdoor Collection"
        />
        <p className="text-center font-bold py-2 text-gray-700 font-serif">
          {captions[currentIndex]}
        </p>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-2"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-2"
        >
          ▶
        </button>
      </div>

      {/* Accordion Section */}
      <div className="mt-8 max-w-lg mx-auto">
        {[
          {
            title: "Our Style",
            content:
              "We design clothing that connects city life with the great outdoors. From bold streetwear to rugged outdoor essentials, our pieces are made to move with you."
          },
          {
            title: "Our Promise",
            content:
              "Every collection is built with premium fabrics and attention to detail, ensuring comfort, durability, and timeless design you can trust."
          },
          {
            title: "Join the Community",
            content:
              "Be part of the Daveclothingoutdoor family. Sign up for early access to drops, exclusive offers, and style inspiration for your next adventure."
          }
        ].map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="flex justify-between w-full py-3 text-left font-bold"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {openIndex === index && (
              <p className="py-2 text-gray-600">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
