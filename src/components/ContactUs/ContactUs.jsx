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

import BookForm from "../utils/BookForm";

const ContactUs = () => {
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
        <div className="row gy-4 justify-content-center pb-[2rem] w-[90%] mx-auto">
          <div className="col-xl-4 col-lg-6 group hover:text-lemonYellow">
            <div className="about-contact-grid style2 gap-2 items-center justify-center">
              <div className="about-contact-icon flex items-center justify-center  group-hover:bg-lemonYellow text-white rounded-full p-4 bg-black ">
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
          <div className="col-xl-4 col-lg-6 group hover:text-lemonYellow">
            <div className="about-contact-grid style2 gap-2 items-center justify-center">
              <div className="about-contact-icon flex items-center justify-center  group-hover:bg-lemonYellow text-white rounded-full p-4 bg-black ">
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
          <div className="col-xl-4 col-lg-6 group hover:text-lemonYellow mb-[5rem]">
            <div className="about-contact-grid style2 gap-2 items-center justify-center">
              <div className="about-contact-icon flex items-center justify-center  group-hover:bg-lemonYellow text-white rounded-full p-4 bg-black ">
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
        <BookForm />
      </div>
    </div>
  );
};

export default ContactUs;
