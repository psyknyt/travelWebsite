import React from "react";

import { MdOutlineSell } from "react-icons/md";
import bgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";
import { MdArrowForward } from "react-icons/md";
import { GoClock } from "react-icons/go";
import starImg from "../../assets/starImg.png";

const PopularLocation = () => {
  const cardShadow = {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  };
  // max-w-[400px] min-w-[200px] min-h-[500px]
  return (
    <div
      className={`relative bg-black shadow-xl flex flex-col group rounded-lg w-[95%]`}
      data-aos="fade-up"
    >
      <div className="img overflow-hidden rounded-t-lg">
        <img
          src={bgImage}
          alt="card image"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
        />
      </div>
      <div className="h-[200px] flex flex-col px-4 py-2 bg-gray-100 ">
        <p className="font-normal font-inter tracking-wider text-md  py-2">
          Kedarkantha
        </p>
        <div className="py-2 flex items-center gap-3">
          <div className="flex flex-row gap-[4px]">
            <img src={starImg} className="w-4 h-4" />
            <img src={starImg} className="w-4 h-4" />
            <img src={starImg} className="w-4 h-4" />
            <img src={starImg} className="w-4 h-4" />
          </div>
          <div className="flex justify-center items-center font-inter text-xs">
            (4.8 rating)
          </div>
        </div>
        <div className="py-2 flex flex-row gap-0 items-center justify-start tracking-wider font-inter">
          <div className="flex text-xl font-normal">₹2000</div>
          <div className="flex text-xs font-light">/Person</div>
        </div>
      </div>
      <div className="w-full flex flex-row text-md justify-between items-center absolute bottom-4 ">
        <div className="rounded-full px-4 py-2 flex items-center justify-center gap-2 font-light font-inter">
          <GoClock className="w-5 h-5" />
          <div className="font-light">7 Days</div>
        </div>
        <div className="flex bg-white text-black group-hover:text-white hover:font-normal px-4 py-2 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none">
          <span className="relative z-10 flex items-center justify-center gap-2">
            <div>Book Now</div>
            <MdArrowForward />
          </span>
          <div className="absolute inset-0 bg-white border-transparent">
            <div className="mask absolute inset-0 bg-[#1CA8CB] transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularLocation;
