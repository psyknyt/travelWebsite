import { useState } from "react";
import React from "react";

import "./navbar.css";
import navBarLogo from "../../assets/cm-logo.png";

import Dropdown from "./Dropdown";

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
  const [show, setShow] = React.useState(true);
  const [hover, setHover] = React.useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isDropDownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropown = () => {
    console.log("mouse-event");
    setIsDropdownVisible(!isDropDownVisible);
  };
  const handleDropdown = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div
      className="z-50 font-fredoka font-normal text-sm nav-wrapper w-full h-[75px] flex justify-between items-center py-2 bg-gray-100"
      onClick={() => setIsDropdownVisible(false)}
    >
      <div className="nav-logo flex justify-center items-center px-2 font-bold text-xl ">
        <Logo />
      </div>
      {/* for small devices */}
      <div
        className={`menu-wrapper z-50 w-full overflow-y-hidden absolute md:hidden top-[75px] md:top-auto left-0 ${
          show ? "bottom-0" : "h-0"
        } md:h-full md:bottom-auto `}
      >
        <ul
          className={`ml-auto menu flex flex-col md:flex-row w-full overflow-y-hidden transition-all duration-500 md:transform-none md:delay-0 md:duration-0 ${
            show ? "h-full pt-4 px-2" : "h-0"
          } md:h-full md:space-x-4  space-y-4 md:space-y-0 md:pt-0 md:pl-auto`}
        >
          <li className="navdrop md:h-full  text-[#0A1D56]  text-xl cursor-pointer">
            <div
              className="navdrop-navlink h-16 w-full flex justify-center items-center"
              onClick={handleDropdown}
            >
              Treks
            </div>
            <div
              className={`sub-dropWrapper overflow-hidden ${
                isVisible ? "" : "h-0"
              }`}
            >
              <ul className={`bg-pink shadow-inner overflow-hidden  border-2 `}>
                <li className="navlink h-16 md:h-full justify-center items-center flex border-b-2 ">
                  Uttarakhand-treks
                </li>
                <li className="navlink h-16 md:h-full justify-center items-center flex border-b-2 ">
                  Himanchal-treks
                </li>
                <li className="navlink h-16 md:h-full justify-center items-center flex border-b-2 ">
                  Jammu & kahsmir-treks
                </li>
                <li className="navlink h-16 md:h-full justify-center items-center flex ">
                  Leh-treks
                </li>
              </ul>
            </div>
          </li>
          <li className="navlink h-16 md:h-full  text-[#0A1D56]  text-xl justify-center items-center flex cursor-pointer">
            Home
          </li>
          <li className="navlink h-16 md:h-full  text-[#0A1D56]  text-xl justify-center items-center flex cursor-pointer">
            About Us
          </li>
          <li className="navlink h-16 md:h-full  text-[#0A1D56]  text-xl justify-center items-center flex cursor-pointer">
            Contact
          </li>
          <li className="navlink h-16 md:h-full  text-[#0A1D56]  text-xl justify-center items-center flex cursor-pointer">
            Blogs
          </li>
        </ul>
      </div>
      {/* for bigger screen */}
      <div className="menu-wrapper-md ">
        <ul className="type-none flex  md:space-x-10 h-full">
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
                    <li className="p-2 hover:bg-gray-100">Uttarakhand-treks</li>
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
      <MenuToggleButton show={show} setShow={setShow} />
    </div>
  );
}
