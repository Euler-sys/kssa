import React from "react";
import footerimg from "../assets/logo.jpg";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-1 py-10 gap-5 lg:flex lg:space-x-4 w-[90%] my-0 mx-auto border-b border-black ">
        <div className="mb-3 md:w-fit">
          <p className="font-bold text-xl">Support</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0 ">
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Project Logistics
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Pipeline Maintenance
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Safety & Compliance
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Environmental Impact
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Engineering FAQs
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Contact ScottWel
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-fit ">
          <p className="font-bold text-xl">Services</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0">
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Refinery Construction
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Roadway Development
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Gas Pipeline Installation
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-fit">
          <p className="font-bold text-xl">Resources</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0">
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Equipment Safety
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Road Construction Guidelines
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Pipeline Inspections
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Engineering Insights
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Supplier Standards
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Career Opportunities
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-fit">
          <p className="font-bold text-xl">About ScottWel</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0">
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Our Vision
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Sustainability Goals
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Infrastructure Commitments
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Materials & Innovation
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Industry Recognition
              </a>
            </li>
            <li>
              <a className="font-serif text-[0.9em]" href="#">
                Join Our Team
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block">
          <p className="mb-3 flex items-center space-x-1 font-semibold">
            <span>
              <CiLocationOn />
            </span>
            Find a ScottWel Location
          </p>
          <img
            className="w-[250px] h-fit  object-contain"
            src={footerimg}
            alt="ScottWel Location"
          />
        </div>
      </div>
      <div className="md:hidden px-4 mt-8 ">
        <p className="mb-3 flex items-center space-x-1 font-semibold">
          <span>
            <CiLocationOn />
          </span>
          Find a ScottWel Location
        </p>
        <img
          className="w-[400px] my-0 mx-auto h-fit  object-contain"
          src={footerimg}
          alt="ScottWel Location"
        />
      </div>
      <div className="md:px-16 py-5">
        <p className="text-center lg:text-start mb-2">JOIN OUR NETWORK</p>
        <div className="flex items-center flex-col lg:flex-row">
          <p className="w-[350px] text-[0.7em] mb-3 md:mb-0">
            Become part of the ScottWel Engineering Network and gain access to exclusive projects, industry news, and professional insights.
          </p>
          <button className="border px-3 py-3 border-black hover:bg-black hover:text-white transition-all duration-[0.3s]">
            JOIN NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
