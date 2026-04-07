import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

const TopHeader = () => {
  const messages = [
    "Kathy Structured Solutions — Bringing clarity and structure to your business operations.",
    "We streamline paperwork, coordination, and workflows so your business runs efficiently.",
    "Professional administrative and project support tailored to your business needs.",
  ];

  const navItems = [
    { id: 1, title: "Support" },
    { id: 2, title: "Services" },
    { id: 3, title: "Contact" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [activeNav, setActiveNav] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
      setFade(false);
    }, 300);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
      setFade(false);
    }, 300);
  };

  return (
    <div className="bg-[#0B1C2C] text-white py-3 px-4">
      {/* 🔹 Mobile */}
      <div className="flex items-center justify-between lg:hidden">
        <button onClick={handlePrev}>
          <FaAngleLeft />
        </button>

        <p
          className={`text-[13px] text-center font-medium transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {messages[currentIndex]}
        </p>

        <button onClick={handleNext}>
          <FaAngleRight />
        </button>
      </div>

      {/* 🔹 Desktop */}
      <div className="hidden lg:flex items-center justify-between">
        {/* Left: Slider */}
        <div className="flex items-center space-x-4">
          <button onClick={handlePrev}>
            <FaAngleLeft />
          </button>

          <button onClick={handleNext}>
            <FaAngleRight />
          </button>

          <p
            className={`text-[14px] transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          >
            {messages[currentIndex]}
          </p>
        </div>

        {/* Right: Navigation */}
        <div className="flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveNav(index)}
              className={`transition ${
                activeNav === index
                  ? "underline text-[#E9BA2B]"
                  : "hover:text-[#E9BA2B]"
              }`}
            >
              {item.title}
            </button>
          ))}

          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 cursor-pointer">
              <RiGlobalLine />
              <span>NGN</span>
            </span>

            <a href="#" className="underline">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;