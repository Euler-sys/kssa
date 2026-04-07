import React from "react";
import mgg from "../assets/mammoet-refinery-construction-services.jpg";

const Items = () => {
  return (
    <section className="py-14 px-5 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* 🔷 Image */}
        <div className="md:w-1/2">
          <img
            src={mgg}
            alt="Business operations and project coordination"
            className="w-full h-[350px] md:h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* 🔷 Content */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1C2C] mb-4 leading-snug">
            We Bring Order, Efficiency, and Structure to Your Business
          </h2>

          <p className="text-gray-600 mb-4">
            At Kathy Structured Solutions, we specialize in helping businesses
            stay organized, efficient, and focused by managing critical
            administrative and operational processes.
          </p>

          <p className="text-gray-600 mb-4">
            From handling documentation and workflows to coordinating projects
            and teams, we ensure every part of your operation runs smoothly and
            professionally.
          </p>

          <p className="text-gray-600 mb-6">
            Our goal is simple — to remove the stress of day-to-day operations so
            you can focus on scaling your business and achieving long-term
            success.
          </p>

          {/* 🔷 CTA */}
          {/* <div className="flex gap-4 flex-wrap">
            <button className="bg-[#E9BA2B] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
              Work With Us
            </button>

            <button className="border border-[#0B1C2C] text-[#0B1C2C] px-6 py-3 rounded-lg font-semibold hover:bg-[#0B1C2C] hover:text-white transition">
              Learn More
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Items;