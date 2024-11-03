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
import WorkingOffice from "../About-us/WorkingOffice";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-start bg-gray-400">
      <TopCard title={"Contact Us"} bgImage={banner1} />
      <div className="bg-white pt-5 overflow-hidden">
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
        <div className="w-[90%] flex flex-col gap-4 mx-auto rounded-md hover:-translate-y-2 transition-all duration-300 ease-in-out py-5">
          <div className="flex flex-col items-center justify-center gap-2 py-4">
            <div className="font-montez text-4xl leading-6 pt-4">Locate us</div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54676.95935754655!2d78.192037!3d31.073304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908a7e1544cf3b5%3A0x922e86b38b6a55c0!2sThe%20Crazy%20Mountaineers!5e0!3m2!1sen!2sus!4v1730604603460!5m2!1sen!2sus"
            className="w-full h-[500px] rounded-md"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <WorkingOffice />
        <BookForm />
      </div>
    </div>
  );
};

export default ContactUs;
