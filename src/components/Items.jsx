import React from "react";
import mgg from "../assets/mammoet-refinery-construction-services.jpg"; // replace with your clothing/outdoor image

const Items = () => {
  return (
    <section className="text-black py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6">
          <img
            src={mgg}
            alt="Daveclothingoutdoor Collection"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Redefining outdoor fashion with style and durability
          </h2>
          <p className="mb-4">
            At Daveclothingoutdoor, we believe clothing should do more than just
            look good—it should move with you, wherever life takes you.
          </p>
          <p className="mb-4">
            Our collections are built to blend streetwear attitude with outdoor
            resilience, ensuring every piece is both stylish and adventure-ready.
          </p>
          <p className="mb-4">
            From breathable fabrics to bold designs, every detail is crafted to
            bring comfort, confidence, and individuality to your wardrobe.
          </p>
          <p className="mb-6">
            Whether you’re exploring the city streets or taking on the great
            outdoors, Daveclothingoutdoor gives you the freedom to live without
            limits.
          </p>
          <button className="bg-yellow-400 text-black py-2 px-4 rounded-md hover:bg-black hover:text-white transition-colors">
            Explore Our Collection
          </button>
        </div>
      </div>
    </section>
  );
};

export default Items;
