import React from "react";
import ceoImg from "../assets/job.jpg"; // Replace with actual image path
import { MdEmail, MdPhone } from "react-icons/md";


const EngineeringMarquee = () => {
  const messages = [
    { id: 0, title: "24/7 SAFETY MONITORING" },
    { id: 1, title: "HIGH-PRESSURE PIPELINE SOLUTIONS" },
    { id: 2, title: "OVER 500 KM OF PIPELINES INSTALLED" },
    { id: 3, title: "ADVANCED REFINERY TECHNOLOGIES" },
  ];

  const repeatedMessages = [...messages, ...messages];

  return (
    <>
      <div className="overflow-hidden whitespace-nowrap my-10 border border-black py-3">
        <ul className="flex animate-marquee">
          {repeatedMessages.map((msg, index) => (
            <li
              className="flex-shrink-0 min-w-fit mx-5 text-gray-950 font-mono"
              key={index}
            >
              {msg.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 py-7 border-b border-black">
        <p className="text-center w-fit px-4 md:px-0 text-balance md:w-[400px] lg:w-[700px] my-0 mx-auto text-[0.8em] font-mono">
          Explore our cutting-edge refinery and pipeline engineering solutions. 
          From high-efficiency refining processes to advanced pipeline 
          infrastructure, we ensure safety, durability, and optimal energy 
          transport across all projects.
        </p>
      </div>

      <div className="max-w-sm  mt-8 mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 p-4">
      <img
        src={ceoImg}
        alt="CEO"
        className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-gray-300"
      />
      <div className="text-center mt-9">
        <h2 className="text-xl font-semibold">Scott Welson         </h2>
        <p className="text-gray-500 text-sm">Chief Executive Officer</p>
        <div className="mt-3 space-y-2">
          <p className="flex items-center justify-center text-sm text-gray-700">
            <MdEmail className="mr-2 text-blue-600" /> scottboob27@gmail.com
          </p>
          <p className="flex items-center justify-center text-sm text-gray-700">
            <MdPhone className="mr-2 text-green-600" /> +1 (575) 223-8938
          </p>
        </div>
      </div>
    </div>


    </>
  );
};

export default EngineeringMarquee;
