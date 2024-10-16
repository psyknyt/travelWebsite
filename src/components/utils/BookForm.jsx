import React, { useState } from "react";
import { TiLocationOutline } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { AiOutlineWechatWork } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
import formBgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";
import { FaPlay } from "react-icons/fa";

const BookForm = () => {
  const [isOpenselect, setIsOpenSelect] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tourType: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(() => {
      formData[name] = value;
    });
  };
  return (
    <div
      className="bg-white py-[4rem] overflow-hidden relative flex flex-col md:flex-row justify-start items-center"
      style={{
        backgroundImage: `url(${formBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full px-4 md:px-[5rem] mt-[10rem] md:my-[4rem] overflow-auto relative">
        <form className="contact-form style2 bg-white px-4 w-full md:w-[50%] rounded-lg py-5 text-black">
          <h3 className="sec-title mb-30 text-capitalize font-inter text-[22px] font-semibold my-3">
            Book a tour
          </h3>
          <div className="flex flex-col gap-4">
            <div className="w-[95%] mx-auto border-[2px] border-gray-200 rounded-md flex flex-row mb-2 form-group relative text-[14px] font-inter">
              <input
                type="text"
                className="w-full px-4 rounded-md form-control outline-lemonYellow outline-[1px] h-[50px] placeholder:text-[14px] placeholder:font-inter"
                name="name"
                id="name3"
                placeholder="First Name"
              />
              <CiUser className="w-6 h-6 absolute top-[17px] right-[18px] flex justify-center items-center" />
            </div>
            <div className="w-[95%] mx-auto border-[2px] border-gray-200 rounded-md flex flex-row mb-2 form-group relative text-[14px] font-inter">
              <input
                type="email"
                className="w-full px-4 rounded-md  form-control outline-lemonYellow outline-[1px] h-[50px] placeholder:text-[14px] placeholder:font-inter"
                name="email"
                id="email3"
                placeholder="Your Mail"
              />
              <CiMail className="w-6 h-6 absolute top-[17px] right-[18px] flex justify-center items-center" />
            </div>
            <div
              className="w-[95%] mx-auto border-[2px] border-gray-200 rounded-md flex flex-row mb-2 form-group relative text-[14px] font-inter "
              onClick={() => setIsOpenSelect(!isOpenselect)}
            >
              <select
                name="tourType"
                id="subject"
                className={`bg-white form-select outline-lemonYellow outline-[1px] h-[50px] placeholder:text-[14px] placeholder:font-inter w-full px-4 pr-10`}
              >
                <option value="" selected>
                  Select Tour Type
                </option>
                <option value="Africa Adventure">Africa Adventure</option>
                <option value="Africa Wild">Africa Wild</option>
                <option value="Asia">Asia</option>
                <option value="Scandinavia">Scandinavia</option>
                <option value="Western Europe">Western Europe</option>
              </select>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`w-4 h-4 absolute top-[17px] right-[22px] transition-all duration-500 ease-in-out flex justify-center items-center ${
                  isOpenselect ? "rotate-180" : "rotate-0"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>

            <div className="w-[95%] mx-auto border-[2px] border-gray-200 rounded-md flex flex-row mb-2 form-group relative text-[14px] font-inter ">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="3"
                className="w-full px-4 py-4 rounded-md  outline-lemonYellow outline-[1px] h-[50px] placeholder:text-[14px]"
                placeholder="Your Message "
              ></textarea>
              <AiOutlineWechatWork className="w-6 h-6 absolute top-[17px] right-[18px] flex justify-center items-center " />
            </div>
            <div className="group w-[210px]  text-sm font-inter text-nowrap flex bg-lemonYellow text-white px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none">
              <span className="relative z-10 flex items-center justify-center gap-4">
                <button type="submit" className="th-btn style3">
                  Send message
                </button>
                <BsSendFill className="w-4 h-4 group-hover:scale-110 transition-all duration-500  ease-in-out" />
              </span>
              <div className="absolute inset-0 bg-lemonYellow group-hover:bg-transparent border-transparent">
                <div className="mask absolute inset-0 bg-black transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
              </div>
            </div>
          </div>
          <p className="form-messages mb-0 mt-3"></p>
        </form>
      </div>
      <div className="mt-[2rem] md:mt-0 absolute play-button z-10 top-[5%] md:right-[10%] md:top-[50%] w-20 h-20 p-2 rounded-full bg-lemonYellow flex justify-center items-center">
        <FaPlay className="w-8 h-8 text-white flex justify-center items-center" />
      </div>
    </div>
  );
};

export default BookForm;
