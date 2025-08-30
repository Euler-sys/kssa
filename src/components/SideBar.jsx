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
          <RiCloseLargeFill className="p-1 cursor-pointer" onClick={() => setOpen()} />
        </div>
        <div className="w-[90%] my-0 mx-auto pb-7">
          {/* Categories */}
          <ul className="border-b-2 border-black">
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Men</span>
              <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Women</span>
              <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Outdoor Gear</span>
              <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Footwear</span>
              <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Accessories</span>
              <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>New Arrivals</span>
              <FaAngleRight className="text-[16px]" />
            </li>
            <li className="font-bold text-xl mb-3 flex justify-between items-center">
              <span>Sale</span>
              <FaAngleRight className="text-[16px]" />
            </li>
          </ul>

          {/* Info Links */}
          <ul className="py-7 border-b-2 border-black">
            <li className="mb-4 font-serif">About Daveclothingoutdoor</li>
            <li className="mb-4 font-serif">Sustainability</li>
            <li className="mb-4 font-serif">Lookbook</li>
            <li className="mb-4 font-serif">Customer Support</li>
            <li className="mb-4 font-serif">Join Our Community</li>
          </ul>

          {/* Promo Section */}
          <div className="py-5">
            <p className="font-extrabold text-[1.3em]">
              DISCOVER style, comfort & adventure with Daveclothingoutdoor.
            </p>
            <p className="font-serif mt-3">
              One account unlocks exclusive collections, early access to sales,
              and outdoor lifestyle inspiration. Be part of the movement.
            </p>
            <button className="w-full py-3 bg-[#E9BA2B] font-bold my-5">
              SIGN IN
            </button>
            <a href="#">
              New to Daveclothingoutdoor?{" "}
              <span className="underline">Create Account</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
