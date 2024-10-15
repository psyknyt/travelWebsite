import { useState } from "react";
import React from "react";

import "./navbar.css";
import navBarLogo from "../../assets/cm-logo.png";

import { IoClose } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { CiUser } from "react-icons/ci";
import { LuClock } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import logoBgMask from "../../assets/background/logo_bg_mask.png";
import { useNavigate } from "react-router-dom";

import bgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";

const navbarProps = {
  Logo: { type: "img", text: "LOGO GOES HERE !", img: "/vite.svg" },
  Nav: {
    "navlink 1": {
      type: "dropdown",
      dropdown: {
        "item-1": { type: "link", link: "#item-1" },
        "item-2": { type: "link", link: "#item-2" },
        "item-3": { type: "link", link: "#item-3" },
        "item-4": { type: "link", link: "#item-4" },
        "item-5": { type: "link", link: "#item-5" },
      },
    },
    // "Smartphone": { type: "link", link: "#Smartphone" },
    "navlink 2": { type: "link", link: "#navlink2" },
    "navlink 3": { type: "link", link: "#navlink3" },
    "navlink 4": { type: "link", link: "#navlink4" },
    "navlink 5": { type: "link", link: "#navlink5" },
    "navlink 6": { type: "link", link: "#navlink6" },
    "navlink 7": { type: "link", link: "#navlink7" },
    "navlink 8": { type: "link", link: "#navlink8" },
  },
};

const Logo = () => {
  return (
    <a
      href="https://thecrazymountaineers.com/"
      className="logo wrapper min-w-16 max-w-48 flex items-center justify-center px-2"
    >
      <img src={navBarLogo} alt="logo" />
    </a>
  );
};

const MenuToggleButton = ({ show, setShow }) => {
  return (
    <div
      className="menu_toggle_btn wrapper flex md:hidden items-center justify-center w-16 h-full  ml-auto"
      onClick={() => setShow(!show)}
    >
      <div className="relative  w-full h-full flex flex-col gap-y-4 justify-center items-center">
        <div
          className={`bg-black w-8 h-1 rounded-md ${
            show ? "opacity-0 duration-300" : "opacity-100 duration-1000"
          }`}
        ></div>
        <div
          className={`bg-black w-8 h-1 rounded-md ${
            show ? "opacity-0 duration-300" : "opacity-100 duration-1000"
          }`}
        ></div>
        <div
          className={`bg-black w-8 h-1 rounded-md transform absolute top-[47%] left-[25%] transition-transform duration-500 ${
            show ? "rotate-45 " : "rotate-0"
          }`}
        ></div>
        <div
          className={`bg-black w-8 h-1 rounded-md transform absolute top-[47%] left-[25%] transition-transform duration-500 ${
            show ? "-rotate-45" : "rotate-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default function Nav() {
  const [show, setShow] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [isVisible, setIsVisible] = useState(false); // isvisible right now working for Treks only small screen to make it work for more items just change the isVisible to other names like isVisibleTreks and same for others where you want to do it...
  const [isDropDownVisible, setIsDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropown = () => {
    console.log("mouse-event");
    setIsDropdownVisible(!isDropDownVisible);
  };
  const handleDropdown = () => {
    setIsVisible(!isVisible);
  };

  console.log("is dropdown: ", isDropDownVisible);

  return (
    <div className="flex flex-col font-inter text-[16px] font-normal leading-[26px] ">
      <div className="h-8 w-full mx-auto bg-white flex justify-between  items-center text-center px-2 border-b-2 border-gray-200 cursor-pointer font-inter pl-5 text-[11px] sm:text-[13px]  font-normal">
        <div className="hidden lg:flex gap-2">
          <div className="hover:text-white transition-all duration-300 delay-150 ease-in-out flex justify-between items-center gap-2 font-inter tracking-wide">
            <IoLocationOutline className="w-4 h-4 font-semibold" />
            <div>Clock Tower, Dehardun</div>
          </div>
          <div className="text-gray-400">|</div>
          <div className="hover:text-white transition-all duration-300 delay-150 ease-in-out flex justify-between items-center gap-2 tracking-wide">
            <GoClock className="w-4 h-4 " />
            <div>Sun to Friday: 8.00 am - 7.00 pm</div>
          </div>
        </div>
        <div className="flex gap-2 tracking-wider justify-center items-center w-[98%] md:w-fit mx-auto md:ml-auto md:mr-5 lg:ml-0 lg:mr-0">
          <div className="hover:text-white transition-all duration-300 delay-150 ease-in-out">
            Ph no.
          </div>
          <div className="text-gray-400">|</div>
          <div className="hover:text-white transition-all duration-300 delay-150 ease-in-out">
            FAQ
          </div>
          <div className="text-gray-400">|</div>
          <div className="hover:text-white transition-all duration-300 delay-150 ease-in-out">
            Support
          </div>
          <div className="text-gray-400">|</div>
          <div className="flex flex-row justify-center items-center hover:text-white">
            <div className="transition-all duration-300 delay-150 ease-in-out">
              Sign in/Register
            </div>
            <CiUser className="flex items-center justify-center w-4 h-4" />
          </div>
        </div>
      </div>
      <div
        className="z-50 font-fredoka font-normal text-sm nav-wrapper w-[90%] mx-auto h-[85px] flex justify-between items-center py-2 bg-[#FBD149]"
        onClick={() => setIsDropdownVisible(false)}
      >
        <div className="nav-logo flex justify-center items-center px-2 font-bold text-xs ">
          <Logo />
        </div>
        {/* for small devices DRAWER */}
        <div className="">
          <div
            className={`menu-wrapper bg-white top-0 z-50 w-[70%] sm:w-[50%] fixed md:hidden  transition-all duration-700 delay-300 md:transform-none ${
              show ? "left-0 h-full" : "h-0 left-[-2000px]"
            } md:h-full md:bottom-auto `}
          >
            <div className="relative flex justify-center items-center py-5 bg-blue-100">
              <Logo />
              <button
                className="absolute top-1 right-1 flex items-center justify-center bg-black bg-opacity-80 text-white rounded-full h-5 w-5 text-[16px] z-40"
                onClick={() => setShow(!show)}
              >
                <IoClose />
              </button>
            </div>
            <ul
              className={`font-inter menu flex flex-col md:flex-row w-[80%] mx-auto transition-all duration-500 md:transform-none md:delay-0 md:duration-0 ${
                show ? "h-screen " : "h-0 "
              } md:h-full md:space-x-4  md:pt-0 md:pl-auto text-left font-normal text-[16px]`}
            >
              <li className="md:text-[#0A1D56] cursor-pointer pt-4 pb-1 transition-all duration-500 ease-in-out text-[16px]">
                <div
                  className="w-full flex justify-between items-center pb-1 "
                  onClick={handleDropdown}
                >
                  <div
                    className={`flex justify-start items-center ${
                      isVisible ? "text-blue-500" : ""
                    } transition-colors duration-300 delay-150 ease-in-out`}
                  >
                    Treks
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-3 h-3  ${
                      isVisible ? "rotate-180 " : "rotate-0 "
                    } transition-transform duration-500 ease-in-out`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                <div className="w-full mx-auto border-[1px] bg-gray-400" />
                <div
                  className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isVisible ? "max-h-96" : "max-h-0"
                  }`}
                  style={{ maxHeight: isVisible ? "400px" : "0" }}
                >
                  <ul className="bg-pink overflow-hidden w-full mx-auto">
                    <li className="justify-start items-center flex pt-4 pb-1">
                      Uttarakhand-treks
                    </li>
                    <div className="w-full mx-auto border-[1px] bg-gray-400" />
                    <li className="justify-start items-center flex pt-4 pb-1">
                      Himanchal-treks
                    </li>
                    <div className="w-full mx-auto border-[1px] bg-gray-400" />
                    <li className="justify-start items-center flex pt-4 pb-1">
                      Jammu & Kashmir-treks
                    </li>
                    <div className="w-full mx-auto border-[1px] bg-gray-400" />
                    <li className="justify-start items-center flex pt-4 pb-1">
                      Leh-treks
                    </li>
                    <div className="w-full mx-auto border-[1px] bg-gray-400" />
                  </ul>
                </div>
              </li>

              <li
                className="pt-4 pb-1 md:h-full  text-[#0A1D56]  justify-start items-center flex cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </li>
              <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />
              <li
                className="pt-4 pb-1 md:h-full  text-[#0A1D56]  justify-start items-center flex cursor-pointer"
                onClick={() => navigate("/aboutus")}
              >
                About Us
              </li>
              <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />
              <li
                className="pt-4 pb-1 md:h-full  text-[#0A1D56]  justify-start items-center flex cursor-pointer"
                onClick={() => navigate("/contact")}
              >
                Contact
              </li>
              <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />
              <li className="pt-4 pb-1 md:h-full  text-[#0A1D56]  justify-start items-center flex cursor-pointer">
                Blogs
              </li>
              <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />
              <li className="pt-4 pb-1 md:h-full  text-[#0A1D56]  justify-start items-center flex cursor-pointer">
                Gallery
              </li>
              {/* <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />
              <li className="pt-4 pb-1 md:h-full  text-[#0A1D56]  justify-start items-center flex cursor-pointer">
                Tours
              </li> */}
              <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />
            </ul>
          </div>
          <div
            className={`fixed inset-0 bg-black bg-opacity-70 z-[30] ${
              show ? "flex" : "hidden"
            }`}
            onClick={() => setShow(!show)}
          />
        </div>
        {/* for bigger screen */}
        <div className="mx-auto hidden md:flex px-4 text-[16px] font-normal font-inter h-full tracking-wider">
          <ul className="type-none flex  md:space-x-5 h-full mr-5 ">
            <div
              className="navlink relative h-full cursor-pointer"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <div className="relative flex group items-center gap-1 h-full ">
                <p className="group-hover:text-white">Treks</p>

                {/* Bottom border animation */}
                <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black group-hover:bg-[#1CA8CB] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>

                {/* Rotating arrow icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-3 h-3 transition-transform duration-500 ease-in-out group-hover:hover:bg-[#1CA8CB] ${
                    isDropDownVisible ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>

                {/* {isDropDownVisible && ( */}
                {/* Dropdown menu */}
                <div
                  className={`absolute top-[100%] z-[40] bg-white hover:bg-lemonYellow hover:bg-opacity-90 shadow-md rounded md:w-[80vw] lg:w-[850px] h-[450px] mx-auto text-sm font-light tracking-wide transition-all duration-1000 delay-0 ease-in-out transform ${
                    isDropDownVisible
                      ? "translate-y-0 opacity-100 md:left-[-200%] xl:left-[-50%]"
                      : "-translate-y-4 opacity-100  left-[5000%]"
                  } flex flex-row justify-between items-start`}
                  style={{
                    transformOrigin: "top",
                  }}
                  onMouseLeave={() => setIsDropdownVisible(false)}
                >
                  <ul className="w-[20%] flex justify-start items-start flex-col">
                    <div className="p-2 text-nowrap hover:text-white font-normal w-full">
                      Treks
                    </div>
                    <li className="p-2 text-nowrap hover:text-white w-full">
                      Uttarakhand-treks
                    </li>
                    <li className="p-2 text-nowrap hover:text-white w-full">
                      Himachal-treks
                    </li>
                    <li className="p-2 text-nowrap hover:text-white w-full">
                      Jammu & Kashmir-treks
                    </li>
                    <li className="p-2 text-nowrap hover:text-white w-full">
                      Leh-treks
                    </li>
                  </ul>

                  <ul className="w-[20%] flex justify-start items-start flex-col">
                    <div className="p-2 text-nowrap hover:text-white font-normal">
                      Activities
                    </div>
                    <li className="p-2 text-nowrap hover:text-white">
                      Uttarakhand-treks
                    </li>
                    <li className="p-2 text-nowrap hover:text-white">
                      Himachal-treks
                    </li>
                    <li className="p-2 text-nowrap hover:text-white">
                      Jammu & Kashmir-treks
                    </li>
                    <li className="p-2 text-nowrap hover:text-white">
                      Leh-treks
                    </li>
                  </ul>
                  <div className="w-[50%] h-full flex flex-col justify-center items-center px-2 py-4 gap-2">
                    <img
                      src={bgImage}
                      className="object-cover object-center w-full h-[50%] rounded-md"
                    />
                    <img
                      src={bgImage}
                      className="object-cover object-center w-full h-[50%] rounded-md"
                    />
                  </div>
                </div>
                {/* )} */}
              </div>
            </div>
            <div
              className="group flex items-center navlink relative h-full cursor-pointer"
              onClick={() => navigate("/")}
            >
              <p className="group-hover:text-white">Home</p>
              <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black group-hover:bg-[#1CA8CB] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>

            <div
              className="group flex items-center navlink relative h-full cursor-pointer"
              onClick={() => navigate("/aboutus")}
            >
              <p className="group-hover:text-white">About Us</p>
              <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black group-hover:bg-[#1CA8CB] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>

            <div
              className="group flex items-center navlink relative h-full cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              <p className="group-hover:text-white">Contact</p>
              <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black group-hover:bg-[#1CA8CB] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>

            <div className="group flex items-center navlink relative h-full cursor-pointer">
              <p className="group-hover:text-white">Blogs</p>
              <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black group-hover:bg-[#1CA8CB] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>

            <div className="group flex items-center navlink relative h-full cursor-pointer">
              <p className="group-hover:text-white">Gallery</p>
              <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black group-hover:bg-[#1CA8CB] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div>
            {/* <div className="group flex items-center navlink relative h-full cursor-pointer">
              <p className="group-hover:text-white">Tours</p>
              <div className="absolute inset-x-0 bottom-[15px] h-[1px] rounded-xl bg-black group-hover:bg-[#1CA8CB] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></div>
            </div> */}
          </ul>
        </div>
        <div className="hidden md:flex bg-black text-white px-8 py-3 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none">
          <span className="relative z-10 flex items-center justify-center gap-2">
            <div>Book Now</div>
            <FaArrowRight />
          </span>
          <div className="absolute inset-0 bg-black border-transparent">
            <div className="mask absolute inset-0 bg-[#1CA8CB] transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
          </div>
        </div>

        <MenuToggleButton show={show} setShow={setShow} />
      </div>
    </div>
  );
}
