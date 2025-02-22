import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { products } from ".";
import { CiHeart } from "react-icons/ci";

const Products = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  return (
    <>
      <div className="mt-10">
        <div className="flex justify-between my-6 font-semibold">
          <a className="underline" href="#">
            ALL FILTER
          </a>
          <a href="#" className="flex items-center space-x-1">
            <span>SORT: ALL MATCH</span>
            <FaAngleDown />
          </a>
        </div>

        <div>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {products.map((item) => (
              <li key={item.id} className="relative flex flex-col mb-5  w-fit">
                <div className="w-full max-w-[300px] h-[161px] overflow-hidden">
                  <img
                    className="w-full transition-transform duration-500 ease-in-out"
                    src={hoveredImage === item.id ? item.hover : item.img}
                    alt={item.title}
                    onMouseEnter={() => setHoveredImage(item.id)} // Set the hovered image
                    onMouseLeave={() => setHoveredImage(null)} // Reset on mouse leave
                  />
                </div>
                <p className="font-semibold pt-3  text-[14px]">{item.title}</p>
                <p className=" text-[14px]">${item.price}</p>
                <span className="absolute border left-0 text-[12px] top-0 p-2 bg-gray-100">
                  {item.other}
                </span>
                <span className="absolute  right-0 text-[12px] top-0 p-2 ">
                  <CiHeart className="text-2xl" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;
