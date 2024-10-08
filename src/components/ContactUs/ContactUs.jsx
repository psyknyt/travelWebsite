import React, { useState } from "react";
import TopCard from "../utils/TopCard";

import banner1 from "../../assets/slide_02.png";
import { TiLocationOutline } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { AiOutlineWechatWork } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
import formBgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";

const ContactUs = () => {
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
    <div className="flex flex-col justify-start bg-gray-400">
      <TopCard title={"Contact Us"} bgImage={banner1} />
      <div className="bg-white py-5 overflow-hidden">
        <div className="flex flex-col justify-center items-center mb-5  pt-[2rem] pb-[1rem]">
          <div className="flex justify-center items-center font-montez text-[40px]">
            Get In Touch
          </div>
          <div className="flex justify-center items-center font-inter text-[25px] sm:text-[35px] md:text-[48px] font-semibold">
            Our Contact Information
          </div>
        </div>
        <div className="row gy-4 justify-content-center pb-[2rem]">
          <div className="col-xl-4 col-lg-6 group">
            <div className="about-contact-grid style2 gap-2 items-center justify-center">
              <div className="about-contact-icon flex items-center justify-center  group-hover:bg-blueisGray text-white rounded-full p-4 bg-black ">
                <TiLocationOutline className="w-5 h-5 flex items-center justify-center " />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title text-[20px]">Our Address</h6>
                <p className="about-contact-details-text">
                  2690 Hiltona Street Victoria
                </p>
                <p className="about-contact-details-text">
                  Road, New York, Canada
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 group">
            <div className="about-contact-grid style2 gap-2 items-center justify-center">
              <div className="about-contact-icon flex items-center justify-center  group-hover:bg-blueisGray text-white rounded-full p-4 bg-black ">
                <MdOutlineWifiCalling3 className="w-5 h-5 flex items-center justify-center " />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title text-[20px]">Phone Number</h6>
                <p className="about-contact-details-text">
                  <a href="tel:01234567890">+01 234 567 890</a>
                </p>
                <p className="about-contact-details-text">
                  <a href="tel:01234567890">+09 876 543 210</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 group mb-[5rem]">
            <div className="about-contact-grid style2 gap-2 items-center justify-center">
              <div className="about-contact-icon flex items-center justify-center  group-hover:bg-blueisGray text-white rounded-full p-4 bg-black ">
                <CiMail className="w-5 h-5 flex items-center justify-center " />
              </div>
              <div className="about-contact-details">
                <h6 className="box-title font-inter text-[20px]">
                  Email Address
                </h6>
                <p className="about-contact-details-text">
                  <a href="mailto:mailinfo00@tourm.com">mailinfo00@gmail.com</a>
                </p>
                <p className="about-contact-details-text">
                  <a href="mailto:support24@tourm.com">support24@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full px-4 md:px-[5rem] py-[4rem] overflow-auto"
          style={{
            backgroundImage: `url(${formBgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <form className="contact-form style2 bg-white px-4 w-full md:w-[50%] rounded-lg py-5 text-blueisGray">
            <h3 className="sec-title mb-30 text-capitalize font-inter text-[22px] font-semibold my-3">
              Book a tour
            </h3>
            <div className="flex flex-col gap-4">
              <div className="w-[95%] mx-auto border-[2px] border-gray-200 rounded-md flex flex-row mb-2 form-group relative text-[14px] font-inter">
                <input
                  type="text"
                  className="w-full px-4 rounded-md form-control outline-blueisGray outline-[1px] h-[50px] placeholder:text-[14px] placeholder:font-inter"
                  name="name"
                  id="name3"
                  placeholder="First Name"
                />
                <CiUser className="w-6 h-6 absolute top-[17px] right-[18px] flex justify-center items-center" />
              </div>
              <div className="w-[95%] mx-auto border-[2px] border-gray-200 rounded-md flex flex-row mb-2 form-group relative text-[14px] font-inter">
                <input
                  type="email"
                  className="w-full px-4 rounded-md  form-control outline-blueisGray outline-[1px] h-[50px] placeholder:text-[14px] placeholder:font-inter"
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
                  className={`bg-white form-select outline-blueisGray outline-[1px] h-[50px] placeholder:text-[14px] placeholder:font-inter w-full px-4 pr-10`}
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
                  className="w-full px-4 py-4 rounded-md  outline-blueisGray outline-[1px] h-[50px] placeholder:text-[14px]"
                  placeholder="Your Message "
                ></textarea>
                <AiOutlineWechatWork className="w-6 h-6 absolute top-[17px] right-[18px] flex justify-center items-center " />
              </div>
              <div className="group w-[210px]  text-sm font-inter text-nowrap flex bg-black text-white px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none">
                <span className="relative z-10 flex items-center justify-center gap-4">
                  <button type="submit" className="th-btn style3">
                    Send message
                  </button>
                  <BsSendFill className="w-4 h-4 group-hover:scale-110 transition-all duration-500  ease-in-out" />
                </span>
                <div className="absolute inset-0 bg-black border-transparent">
                  <div className="mask absolute inset-0 bg-[#1CA8CB] transition-all duration-500 transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                </div>
              </div>
            </div>
            <p className="form-messages mb-0 mt-3"></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
