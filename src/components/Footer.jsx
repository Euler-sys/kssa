import React from "react";
import footerimg from "../assets/logoo.png";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-1 py-10 gap-5 lg:flex lg:space-x-4 w-[90%] my-0 mx-auto border-b border-black ">
        {/* Support */}
        <div className="mb-3 md:w-fit">
          <p className="font-bold text-xl">Support</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0 ">
            <li><a className="font-serif text-[0.9em]" href="#">Customer Care</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Shipping & Delivery</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Returns & Exchanges</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Size Guide</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">FAQs</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div className="md:w-fit ">
          <p className="font-bold text-xl">Shop</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0">
            <li><a className="font-serif text-[0.9em]" href="#">Men’s Collection</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Women’s Collection</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Outdoor Gear</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">New Arrivals</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Sale</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:w-fit">
          <p className="font-bold text-xl">Resources</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0">
            <li><a className="font-serif text-[0.9em]" href="#">Care Instructions</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Style Guides</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Sustainability</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Lookbooks</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Gift Cards</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Careers</a></li>
          </ul>
        </div>

        {/* About */}
        <div className="md:w-fit">
          <p className="font-bold text-xl">About Daveclothingoutdoor</p>
          <ul className="mt-2 flex flex-col gap-3 lg:gap-0">
            <li><a className="font-serif text-[0.9em]" href="#">Our Story</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Brand Values</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Community</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Press & Media</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Collaborations</a></li>
            <li><a className="font-serif text-[0.9em]" href="#">Join Our Team</a></li>
          </ul>
        </div>

        {/* Location (Desktop) */}
        <div className="hidden md:block">
          <p className="mb-3 flex items-center space-x-1 font-semibold">
            <span><CiLocationOn /></span>
            Find a Daveclothingoutdoor Store
          </p>
          <img
            className="w-[250px] h-fit object-contain"
            src={footerimg}
            alt="Daveclothingoutdoor Store"
          />
        </div>
      </div>

      {/* Location (Mobile) */}
      <div className="md:hidden px-4 mt-8 ">
        <p className="mb-3 flex items-center space-x-1 font-semibold">
          <span><CiLocationOn /></span>
          Find a Daveclothingoutdoor Store
        </p>
        <img
          className="w-[400px] my-0 mx-auto h-fit object-contain"
          src={footerimg}
          alt="Daveclothingoutdoor Store"
        />
      </div>

      {/* Newsletter */}
      <div className="md:px-16 py-5">
        <p className="text-center lg:text-start mb-2">JOIN OUR STYLE CLUB</p>
        <div className="flex items-center flex-col lg:flex-row">
          <p className="w-[350px] text-[0.7em] mb-3 md:mb-0">
            Be part of the Daveclothingoutdoor family and get early access to new collections,
            exclusive offers, and style inspiration delivered to your inbox.
          </p>
          <button className="border px-3 py-3 border-black hover:bg-black hover:text-white transition-all duration-[0.3s]">
            SIGN UP
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
