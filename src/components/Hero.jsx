import React, { useState, useEffect } from "react";
import heroImg_1 from "../assets/gold-1.jpg";
import heroImg_2 from "../assets/gold-2.jpg";
import heroImg_3 from "../assets/gold-3.jpg";
import heroImg_4 from "../assets/gold-4.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const images = [heroImg_1, heroImg_2, heroImg_3, heroImg_4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
const [openIndex, setOpenIndex] = useState(null);
  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

const toggleAccordion = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};

  return (
    <>
      {/* 🔷 HERO SECTION */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Background Image */}
        <img
          src={images[currentIndex]}
          alt="Business Operations"
          className="absolute w-full h-full object-cover transition-all duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0B1C2C]/70" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-5">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
            Bringing Structure to Your Business Operations
          </h1>

          <p className="mt-4 text-gray-200 max-w-2xl text-sm md:text-lg">
            Kathy Structured Solutions helps businesses streamline administrative
            processes, manage documentation, and coordinate projects efficiently
            — so you can focus on growth.
          </p>

          {/* <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-[#E9BA2B] font-semibold rounded-lg hover:opacity-90 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-[#0B1C2C] transition">
              Learn More
            </button>
          </div> */}
        </div>
      </section>

      {/* 🔷 SERVICE HIGHLIGHTS (replaces accordion meaningfully) */}
      <section className="py-12 px-5 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0B1C2C] mb-8">
          What We Do
        </h2>

        {[
          {
            title: "Administrative Support",
            content:
              "We handle documentation, data organization, and daily administrative tasks to keep your business running smoothly."
          },
          {
            title: "Project Coordination",
            content:
              "From planning to execution, we ensure tasks, teams, and timelines stay aligned for successful project delivery."
          },
          {
            title: "Operations & Workflow Management",
            content:
              "We help structure and optimize your internal processes to improve efficiency and productivity."
          }
        ].map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="flex justify-between items-center w-full py-4 text-left font-semibold text-[#0B1C2C]"
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-[200px] pb-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Hero;