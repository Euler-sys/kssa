import React from "react";
import img3 from "../assets/section2.jpg";

const Services = () => {
  const stats = [
    {
      number: "10+",
      title: "Projects Supported",
      desc: "We’ve successfully assisted businesses with administrative processes, documentation, and coordination across various projects.",
    },
    {
      number: "100%",
      title: "Client-Focused Approach",
      desc: "Every service we provide is tailored to meet the unique needs and structure of each business we work with.",
    },
    {
      number: "Reliable",
      title: "Operational Support",
      desc: "We ensure your workflows, documentation, and coordination processes run smoothly and efficiently.",
    },
  ];

  return (
    <section className="py-16 px-5 md:px-10 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* 🔷 TEXT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1C2C] mb-6">
            Why Choose Kathy Structured Solutions
          </h2>

          <p className="text-gray-600 mb-8">
            We provide structured administrative and operational support that
            helps businesses stay organized, efficient, and focused on growth.
          </p>

          <div className="space-y-6">
            {stats.map((item, index) => (
              <div key={index} className="border-l-4 border-[#E9BA2B] pl-4">
                <h3 className="text-2xl font-bold text-[#0B1C2C]">
                  {item.number}
                </h3>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔷 IMAGE */}
        <div className="flex justify-center">
          <img
            src={img3}
            alt="Business support and coordination"
            className="w-full max-w-md h-[350px] object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;