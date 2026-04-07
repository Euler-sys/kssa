import React from "react";
import useToggle from "../services/useToggle";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";

const SideBar = () => {
  const { open, setOpen } = useToggle();

  const navLinks = [
    { title: "Home" },
    { title: "About Us" },
    { title: "Services" },
    { title: "Projects" },
    { title: "Contact" },
  ];

  const supportLinks = [
    { title: "Client Support" },
    { title: "FAQs" },
    { title: "Privacy Policy" },
  ];

  return (
    <>
      {/* 🔹 Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* 🔹 Sidebar */}
      <div
        className={`md:hidden w-[85%] max-w-[320px] h-screen top-0 left-0 bg-white fixed z-50 shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-[70px] flex items-center justify-between px-5 border-b">
          <h2 className="font-bold text-lg text-[#0B1C2C]">
            Kathy Structured Solutions
          </h2>
          <RiCloseLargeFill
            className="text-2xl cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <div className="px-5 py-6 flex flex-col justify-between h-[calc(100%-70px)]">
          <div>
            {/* 🔹 Navigation */}
            <ul className="space-y-4 border-b pb-6">
              {navLinks.map((link, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-[16px] font-medium text-gray-700 cursor-pointer hover:text-[#E9BA2B]"
                >
                  <span>{link.title}</span>
                  <FaAngleRight className="text-sm" />
                </li>
              ))}
            </ul>

            {/* 🔹 Support Links */}
            <ul className="py-6 border-b space-y-3 text-sm text-gray-600">
              {supportLinks.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#0B1C2C]"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>

          {/* 🔹 CTA Section */}
          <div className="pt-6">
            <p className="font-semibold text-[15px] text-[#0B1C2C]">
              Need help organizing your business operations?
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Let us handle your administrative processes and project
              coordination while you focus on growth.
            </p>

            <button className="w-full mt-5 py-3 bg-[#E9BA2B] font-semibold rounded-lg hover:opacity-90 transition">
              Get Started
            </button>

            <p className="text-sm mt-3 text-center">
              Or{" "}
              <span className="underline cursor-pointer">
                Contact Us
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;