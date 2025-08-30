import React from "react";
import ceoImg from "../assets/job.jpg"; // Replace with your brand founder/CEO image
import { MdEmail, MdPhone } from "react-icons/md";

const BrandMarquee = () => {
  const messages = [
    { id: 0, title: "PREMIUM OUTDOOR WEAR" },
    { id: 1, title: "STREET STYLE WITH PURPOSE" },
    { id: 2, title: "500+ COLLECTIONS LAUNCHED" },
    { id: 3, title: "GLOBAL COMMUNITY OF TRENDSETTERS" },
  ];

  const repeatedMessages = [...messages, ...messages];

  return (
    <>
      {/* Marquee */}
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

      {/* Brand Mission */}
      <div className="bg-gray-100 py-7 border-b border-black">
        <p className="text-center w-fit px-4 md:px-0 md:w-[400px] lg:w-[700px] my-0 mx-auto text-[0.9em] font-mono">
          At <span className="font-bold">Daveclothingoutdoor</span>, we blend
          timeless design with durable materials to create clothing that inspires
          confidence, movement, and lifestyle expression. From streetwear to
          outdoor essentials, our mission is to keep you stylish anywhere life
          takes you.
        </p>
      </div>

      {/* Founder/CEO Card */}
      <div className="max-w-sm mt-8 mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 p-6">
        {/* <img
          src={ceoImg}
          alt="Founder"
          className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-gray-300"
        /> */}
        <div className="text-center mt-6">
          <h2 className="text-xl font-semibold">David Dove 
</h2>
          <p className="text-gray-500 text-sm">Founder & Creative Director</p>
          <div className="mt-3 space-y-2">
            <p className="flex items-center justify-center text-sm text-gray-700">
              <MdEmail className="mr-2 text-blue-600" /> Dovedavid332@gmail.com
            </p>
            {/* <p className="flex items-center justify-center text-sm text-gray-700">
              <MdPhone className="mr-2 text-green-600" /> +1 (234) 567-8901
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandMarquee;
