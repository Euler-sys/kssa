import React from "react";
import img3 from "/src/assets/section2.jpg"; // replace with a fashion/brand lifestyle image

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold">
          Three Decades of Redefining Outdoor Fashion
        </h2>
        <div className="border-l-4 border-gray-300 pl-4">
          <h3 className="text-3xl font-bold text-blue-900">30+</h3>
          <p className="font-semibold">Years of Style</p>
          <p>
            For over three decades, Daveclothingoutdoor has crafted clothing
            that blends comfort, durability, and fashion for every lifestyle —
            from city streets to outdoor adventures.
          </p>
        </div>
        <div className="border-l-4 border-gray-300 pl-4">
          <h3 className="text-3xl font-bold text-blue-900">500+</h3>
          <p className="font-semibold">Collections Launched</p>
          <p>
            With hundreds of unique collections, we continue to push boundaries
            in outdoor and streetwear fashion, delivering timeless looks and
            fresh seasonal designs.
          </p>
        </div>
        <div className="border-l-4 border-gray-300 pl-4">
          <h3 className="text-3xl font-bold text-blue-900">10,000+</h3>
          <p className="font-semibold">Happy Customers</p>
          <p>
            Our brand has inspired confidence in thousands worldwide, empowering
            individuals to express themselves through bold, high-quality fashion.
          </p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-[90%] mt-9 flex flex-col items-center space-y-4">
        <img
          src={img3}
          alt="Daveclothingoutdoor Collection"
          className="w-2/3 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Services;
