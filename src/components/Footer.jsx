import React from "react";
import footerLogo from "../assets/logoo.png"; // Your company logo
import { CiLocationOn } from "react-icons/ci";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">

        {/* Services */}
        <div>
          <h3 className="font-bold text-lg mb-4">Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Administrative Support</a></li>
            <li><a href="#" className="hover:underline">Project Coordination</a></li>
            <li><a href="#" className="hover:underline">Workflow Optimization</a></li>
            <li><a href="#" className="hover:underline">Documentation Management</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Case Studies</a></li>
            <li><a href="#" className="hover:underline">Templates & Tools</a></li>
            <li><a href="#" className="hover:underline">Guides</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MdEmail className="mr-2 text-[#E9BA2B]" />
              <a href="mailto:Kathyressler@outlook.com" className="hover:underline">
                Kathyressler@outlook.com
              </a>
            </li>
            <li className="flex items-center">
              <MdPhone className="mr-2 text-[#E9BA2B]" />
              <a href="tel:+13053026854" className="hover:underline">
                +1 305 302 6854
              </a>
            </li>
            <li className="flex items-center">
              <CiLocationOn className="mr-2 text-[#0B1C2C]" />
              <span>San Diego, CA, USA</span>
            </li>
          </ul>
        </div>

        {/* Logo & Newsletter */}
        <div className="flex flex-col items-start md:items-end">
          <img src={footerLogo} alt="Kathy Structured Solutions" className="w-32 mb-4" />
          <p className="text-sm mb-2 font-semibold">Subscribe to Our Updates</p>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-gray-300 rounded-md w-full sm:w-auto"
            />
            <button className="bg-[#E9BA2B] text-white px-4 py-2 rounded-md hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Kathy Structured Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;