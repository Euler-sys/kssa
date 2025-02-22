import React from "react";
import useToggle from "../services/useToggle";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";

const SideBar = () => {
  const { open, setOpen } = useToggle();

  return (
    <>
      <div
        className={`md:hidden w-[90%] h-[100vh] border-r-4 border-[#E9BA2B] top-0 bottom-0 bg-white fixed overflow-y-auto z-50 transition-all duration-[0.5s] translate-x-[-500px] ${
          open ? "translate-x-[0]" : "translate-x-[-500px]"
        }`}
      >
        <div className="h-[70px] flex items-center justify-end px-5 text-[40px]">
          <RiCloseLargeFill className="p-1" onClick={() => setOpen()} />
        </div>
        <div className="w-[90%] my-0 mx-auto pb-7">
          <ul className="border-b-2 border-black">
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Refinery</span>
              <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3">Gas Pipe</li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Road Engineer</span> <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Pipelines</span> <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Oil Wells</span> <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Storage Tanks</span> <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Equipment</span> <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Workers</span> <FaAngleRight className="text-[16px]" />
            </li>
          </ul>
          <ul className="py-7 border-b-2 border-black">
            <li className="mb-4 font-serif">Safety & Regulations</li>
            <li className="mb-4 font-serif">Industry Standards</li>
            <li className="mb-4 font-serif">About Us</li>
            <li className="mb-4 font-serif">Support</li>
            <li className="mb-4 font-serif">Join Now</li>
          </ul>
          <div className="py-5">
            <p className="font-extrabold text-[1.3em]">
              DISCOVER all things Energy—AND MORE.
            </p>
            <p className="font-serif mt-3">
              One account to access industry insights, latest technologies, and
              safety guidelines. Stay ahead with exclusive updates and premium
              resources.
            </p>
            <button className="w-full py-3 bg-[#E9BA2B] font-bold my-5">
              SIGN IN
            </button>
            <a href="#">
              New to the Industry?{" "}
              <span className="underline">Create Account</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
