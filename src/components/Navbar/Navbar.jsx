import { useState } from "react";
import React from "react";

import "./navbar.css";
import navBarLogo from "../../assets/cm-logo.png";

import { IoClose } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { CiUser } from "react-icons/ci";

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
      {navbarProps.Logo.type === "text" ? (
        <span className="font-bold">{navbarProps.Logo.text}</span>
      ) : (
        <img src={navBarLogo} alt="logo" />
      )}
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

  const toggleDropown = () => {
    console.log("mouse-event");
    setIsDropdownVisible(!isDropDownVisible);
  };
  const handleDropdown = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="flex flex-col">
      <div className="h-8 w-full bg-white flex justify-between  items-center text-center px-2 border-b-2 border-gray-200 text-xs cursor-pointer font-inter font-semibold">
        <div className="hidden lg:flex gap-2">
          <div className="hover:text-blue-500 transition-all duration-300 delay-150 ease-in-out">
            address
          </div>
          <div className="text-gray-400">|</div>
          <div className="hover:text-blue-500 transition-all duration-300 delay-150 ease-in-out">
            opening time
          </div>
        </div>
        <div className="flex gap-2 tracking-wider justify-center items-center ml-auto mr-5 lg:ml-0 lg:mr-0">
          <div className="hover:text-blue-500 transition-all duration-300 delay-150 ease-in-out">
            Ph no.
          </div>
          <div className="text-gray-400">|</div>
          <div className="hover:text-blue-500 transition-all duration-300 delay-150 ease-in-out">
            FAQ
          </div>
          <div className="text-gray-400">|</div>
          <div className="hover:text-blue-500 transition-all duration-300 delay-150 ease-in-out">
            support
          </div>
          <div className="text-gray-400">|</div>
          <div className="flex flex-row justify-center items-center">
            <div className="hover:text-blue-500 transition-all duration-300 delay-150 ease-in-out">
              Sign in/Register
            </div>
            <CiUser className="flex items-center justify-center w-4 h-4" />
          </div>
        </div>
      </div>
      <div
        className="z-50 font-fredoka font-normal text-sm nav-wrapper w-full h-[75px] flex justify-between items-center py-2 bg-gray-50"
        onClick={() => setIsDropdownVisible(false)}
      >
        <div className="nav-logo flex justify-center items-center px-2 font-bold text-xl ">
          <Logo />
        </div>
        {/* for small devices DRAWER */}
        <div className="">
          <div
            className={`menu-wrapper bg-gray-100 top-0 z-50 w-[70%] sm:w-[50%] fixed md:hidden  transition-all duration-700 delay-300 md:transform-none ${
              show ? "left-0 h-full" : "h-0 left-[-2000px]"
            } md:h-full md:bottom-auto `}
          >
            <div className="relative flex justify-center items-center py-5 bg-blue-100">
              <Logo />
              <button
                className="absolute top-1 right-1 flex items-center justify-center bg-black bg-opacity-80 text-white rounded-full h-5 w-5 text-xs z-40"
                onClick={() => setShow(!show)}
              >
                <IoClose />
              </button>
            </div>
            <ul
              className={`menu flex flex-col md:flex-row w-[80%] mx-auto transition-all duration-500 md:transform-none md:delay-0 md:duration-0 ${
                show ? "h-screen " : "h-0 "
              } md:h-full md:space-x-4  md:pt-0 md:pl-auto text-left text-lg overflow-y-scroll`}
            >
              <li className="md:text-[#0A1D56] cursor-pointer pt-4 pb-1 transition-all duration-500 ease-in-out">
                <div
                  className="w-full flex justify-between items-center pb-1"
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

              <li className="pt-4 pb-1 md:h-full  text-[#0A1D56]  justify-start items-center flex cursor-pointer">
                Home
              </li>
              <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />
              <li className="pt-4 pb-1 md:h-full  text-[#0A1D56]  justify-start items-center flex cursor-pointer">
                About Us
              </li>
              <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />
              <li className="pt-4 pb-1 md:h-full  text-[#0A1D56]  justify-start items-center flex cursor-pointer">
                Contact
              </li>
              <div className="w-full mx-auto border-[1px] h-0 bg-gray-400" />
              <li className="pt-4 pb-1 md:h-full  text-[#0A1D56]  justify-start items-center flex cursor-pointer">
                Blogs
              </li>
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
        <div className="mx-auto hidden md:flex px-4 text-lg h-full">
          <ul className="type-none flex  md:space-x-5 h-full mr-5">
            <div className="group flex items-center navlink group relative h-full cursor-pointer">
              <div className="absolute inset-x-0 bottom-[15px] border-b-2 border-transparent transition-colors duration-3000 group-hover:border-black"></div>
              <p>Home</p>
            </div>

            <div className="group flex items-center navlink group relative h-full cursor-pointer">
              <div className="absolute inset-x-0 bottom-[15px] border-b-2 border-transparent transition-colors duration-3000 group-hover:border-black"></div>
              <p>About Us</p>
            </div>

            <div
              className="navlink relative h-full cursor-pointer"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <div className="flex group items-center gap-1  h-full ">
                <p className="">Treks</p>
                <div className="absolute inset-x-0 bottom-[15px] border-b-2 border-transparent transition-colors duration-300 group-hover:border-black"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3  group-hover:rotate-180 transition-transform duration-500 ease-in-out"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>

                {isDropDownVisible && (
                  <div
                    className="absolute top-full left-0 bg-white  shadow-md rounded  w-[200%] text-sm font-light tracking-wide z-50"
                    onMouseLeave={() => setIsDropdownVisible(false)}
                  >
                    <ul>
                      <li className="p-2 hover:bg-gray-100">
                        Uttarakhand-treks
                      </li>
                      <li className="p-2 hover:bg-gray-100">Himachal-treks</li>
                      <li className="p-2 hover:bg-gray-100">
                        Jammu & Kashmir-treks
                      </li>
                      <li className="p-2 hover:bg-gray-100">Leh-treks</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="group flex items-center navlink group relative h-full cursor-pointer">
              <div className="absolute inset-x-0 bottom-[15px] border-b-2 border-transparent transition-colors duration-3000 group-hover:border-black"></div>
              <p>Contact</p>
            </div>

            <div className="group flex items-center navlink group relative h-full cursor-pointer">
              <div className="absolute inset-x-0 bottom-[15px] border-b-2 border-transparent transition-colors duration-3000 group-hover:border-black"></div>
              <p>Blogs</p>
            </div>
          </ul>
        </div>
        <div className="hidden md:flex bg-black text-white px-6 py-2 rounded-[32px] relative hover:bg-opacity-80 cursor-pointer mr-1">
          Book Now
        </div>
        <MenuToggleButton show={show} setShow={setShow} />
      </div>
    </div>
  );
}
