import React from "react";
import img1 from "/src/assets/goldbar-2.png";
import img2 from "/src/assets/hover_img.jpg";
import img3 from "/src/assets/section2.jpg";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8">
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-2xl font-bold">Three Decades of Peace of Mind Engineering</h2>
        <div className="border-l-4 border-gray-300 pl-4">
          <h3 className="text-3xl font-bold text-blue-900">100</h3>
          <p className="font-semibold">Billion Dollars</p>
          <p>Over 100 billion dollars has been invested in the projects we have been involved in for the last 30 years by governments, organizations, and private clients across the country and beyond.</p>
        </div>
        <div className="border-l-4 border-gray-300 pl-4">
          <h3 className="text-3xl font-bold text-blue-900">300</h3>
          <p className="font-semibold">Projects Completed</p>
          <p>As a construction company headquartered in Lagos, we have worked on over 300 projects, ranging from building construction, civil engineering, real estate, and facility management.</p>
        </div>
        <div className="border-l-4 border-gray-300 pl-4">
          <h3 className="text-3xl font-bold text-blue-900">9500</h3>
          <p className="font-semibold">Jobs Created</p>
          <p>We have created and retained over ten thousand jobs for hardworking professionals across multiple fields, from construction to support services.</p>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-[90%] mt-9 flex flex-col items-center space-y-4">
        {/* <img src={img1} alt="Construction Plans" className="w-2/3 rounded-lg shadow-lg" /> */}
        <img src={img3} alt="Engineer at Work" className="w-2/3 rounded-lg shadow-lg" />
        {/* <img src={img3} alt="Construction Site" className="w-2/3 rounded-lg shadow-lg" /> */}
      </div>
    </div>
  );
};

export default Services;
