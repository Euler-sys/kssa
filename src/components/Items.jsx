import React from "react";
import items from ".";
import mgg from '../assets/mammoet-refinery-construction-services.jpg'
const Items = () => {
  return (
    <section className=" text-black py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
          {/* Replace '/path/to/refinery.jpg' with your actual image path or URL */}
          <img
            src={mgg}
            alt="Refinery Logistics"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Optimizing the refinery logistics scope to protect schedules
          </h2>
          <p className="mb-4">
            Refinery construction projects are often subject to schedule changes, and so logistics plans
            need to be resilient and flexible to keep work moving.
          </p>
          <p className="mb-4">
            Our engineered heavy lifting and transport experts produce integrated plans to protect the
            critical path and develop engineered solutions to neutralize or mitigate delays and their
            knock-on effects.
          </p>
          <p className="mb-4">
          ScottWel provides a single point of contact across work scopes to optimize site activities and
            installation schedules—maximizing construction efficiency and safety.
          </p>
          <p className="mb-6">
            This complete overview allows site-wide lifting and transport plans to be aligned, which
            results in better utilization of equipment, less congestion and lower costs.
          </p>
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-black hover:text-white transition-colors">
            Get in contact with our specialists
          </button>
        </div>
      </div>
    </section>
  );
};

export default Items;
