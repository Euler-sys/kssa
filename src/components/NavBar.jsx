import React from "react";
import { navBarList } from ".";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { CiHeart } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import useToggle from "../services/useToggle";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  const { open, setOpen } = useToggle();
  return (
    <>
      <div className="px-4 md:px-10 py-4 flex items-center justify-between border-b border-black">
        <div className="flex items-center space-x-10">
          <div className="flex items-center space-x-4 md:space-x-0  w-[60vw] md:w-fit justify-between md:justify-start ">
            <RxHamburgerMenu
              onClick={() => setOpen()}
              className=" text-2xl md:hidden"
            />
            <div className="text-center ">
              <div className=" w-[200px] h-[200px] overflow-hidden my-0 mx-auto">
                <img className="w-full object-contain" src={logo} alt="" />
              </div>
              
            </div>
          </div>
          {/* <ul className="hidden lg:flex items-center text-[16px] font-medium text-gray-900 space-x-10 cursor-pointer">
            {navBarList.map((list) => (
              <li key={list.id}>{list.title}</li>
            ))}
          </ul> */}
        </div>
        <div className="hidden md:flex items-center text-2xl space-x-3 lg:space-x-8">
          <CiSearch />
          <AiOutlineUser className="hidden lg:block" />
          <CiHeart />
          <LiaShoppingBagSolid />
        </div>
      </div>
    </>
  );
};

export default NavBar;
