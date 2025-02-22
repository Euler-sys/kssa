import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";
import { topHeader } from ".";

const TopHeader = () => {
  const words = [
    "Expert solutions in refineries, road construction, and gas pipelines worldwide.",
    "From refineries to roads, we deliver quality, precision, and innovation.",
    'Leading the way in refinery development, gas pipelines, and road construction.'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedList, setSelectedList] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change index every 10 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [words.length]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      setIsTransitioning(false);
    }, 500); // Wait for the transition duration before changing index
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + words.length) % words.length
      );
      setIsTransitioning(false);
    }, 500); // Wait for the transition duration before changing index
  };

  return (
    <div className="bg-[#E9BA2B]   py-3 px-5">
      <div className="flex items-center justify-between lg:hidden">
        <button onClick={handlePrev} className="text-gray-400">
          <FaAngleLeft />
        </button>

        <p
          className={`text-black text-[13px] font-semibold text-center transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {words[currentIndex]}
        </p>

        <button onClick={handleNext} className="text-gray-400">
          <FaAngleRight />
        </button>
      </div>

      <div className="hidden lg:flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={handlePrev} className="text-gray-400">
            <FaAngleLeft />
          </button>
          <button onClick={handleNext} className="text-gray-400">
            <FaAngleRight />
          </button>
          <p
            className={`text-black text-[14px] transition-opacity duration-500  ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {words[currentIndex]}
          </p>
        </div>

        <ul className="hidden text-black lg:flex items-center text-[14px] space-x-10 font-semibold relative ">
          {topHeader.map((tp, index) => (
            <li
              onClick={() => setSelectedList(index)}
              key={tp.id}
              className={`text-black cursor-pointer ${
                selectedList === index ? "underline" : ""
              }`}
            >
              {tp.title}
            </li>
          ))}

          <div className="flex items-center space-x-5">
            <a className="flex items-center" href="#">
              {<RiGlobalLine />}(US$)
            </a>
            <a className=" underline font-semibold block" href="#">
              Enable accessibility
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
