import React from "react";
import ceoImg from "../assets/job.jpg";
import { MdEmail, MdPhone } from "react-icons/md";

const BrandMarquee = () => {
  const highlights = [
    "Structured Administrative Support",
    "Efficient Project Coordination",
    "Reliable Business Operations",
    "Process Optimization & Workflow Management",
  ];

  const repeated = [...highlights, ...highlights];

  return (
    <>
      {/* 🔷 Marquee (Professional Highlights) */}
      <div className="overflow-hidden whitespace-nowrap my-10 border-y border-gray-300 py-3 bg-white">
        <ul className="flex animate-marquee">
          {repeated.map((text, index) => (
            <li
              key={index}
              className="mx-6 text-[#0B1C2C] font-medium tracking-wide"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* 🔷 Mission Statement */}
      <div className="bg-gray-50 py-10 px-5">
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-sm md:text-base leading-relaxed">
          At{" "}
          <span className="font-semibold text-[#0B1C2C]">
            Kathy Structured Solutions
          </span>
          , we are committed to helping businesses operate with clarity,
          efficiency, and structure. Our mission is to simplify administrative
          processes, improve coordination, and create organized systems that
          support long-term business growth and success.
        </p>
      </div>

      {/* 🔷 Founder / Leadership */}
      <div className="max-w-sm mt-12 mx-auto bg-white shadow-xl rounded-2xl border p-6 text-center">
        {/* Image (optional) */}
        <img
          src={ceoImg}
          alt="Founder"
          className="w-28 h-28 object-cover rounded-full mx-auto border-4 border-gray-200"
        />

        <div className="mt-5">
          <h2 className="text-lg font-semibold text-[#0B1C2C]">
            Kathy Ressler
          </h2>
          <p className="text-gray-500 text-sm">
            Founder & Operations Specialist
          </p>

         <div className="mt-4 space-y-2 text-sm text-gray-600">
  <p className="flex items-center justify-center">
    <MdEmail className="mr-2 text-[#E9BA2B]" />
    <a
      href="mailto:Kathyressler@outlook.com"
      className="hover:underline"
    >
      Kathyressler@outlook.com
    </a>
  </p>

  <p className="flex items-center justify-center">
    <MdPhone className="mr-2 text-[#E9BA2B]" />
    <a
      href="sms:+13053026854"
      className="hover:underline"
    >
      +1 305 302 6854
    </a>
  </p>
</div>
        </div>
      </div>
    </>
  );
};

export default BrandMarquee;