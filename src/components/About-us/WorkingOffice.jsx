import React from "react";

import bgLineImage from "../../assets/background/line-pattern2.png";

const WorkingOffice = () => {
  const cardShadow = {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  };
  return (
    <div
      className="flex flex-col lg:flex-row h-screen  justify-center items-center lg:justify-between lg:items-start py-[10rem] w-[95%] lg:max-w-[1200px] mx-auto text-[16px] tracking-wide gap-8 md:gap-4"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`flex w-[90%] sm:w-[80%] lg:w-1/3 h-[300px] flex-col justify-start items-center gap-4 bg-gray-100 rounded-md py-4 px-2 max-h-[300px] hover:-translate-y-2 transition-all duration-500 ease-in-out  shadow-md`}
      >
        <div className="font-normal font-montez tracking-wider text-[24px]">
          Working Head Office
        </div>
        <div className="font-normal flex flex-col justify-center items-center  gap-1 text-sm">
          <p>H.No. 26/1, Vill.- Saur, P.O- Sankri,</p>
          <p>The Mori, Dist,-Uttarkashi-249128</p>
          <p>Saur Sankri, Uttarakhand, India</p>
        </div>
      </div>
      <div
        className={`flex w-[90%] sm:w-[80%] lg:w-1/3 h-[300px] flex-col justify-start items-center gap-4 bg-gray-100 rounded-md py-4 px-2 max-h-[300px] hover:-translate-y-2 transition-all duration-500 ease-in-out  shadow-md`}
      >
        <div className="font-normal font-montez tracking-wider text-[24px]">
          Working Office
        </div>
        <div className="font-normal flex flex-col justify-center items-center gap-1 text-sm">
          <p> Gandhi Gram, Near Sadhuram School,</p>
          <p>Balli Wala Chowk</p>
          <p>Dehradun, Uttarakhand, 248001, India</p>

          <p>Ph no. +91 95 5773 9933 </p>
          <a href="mailto:info@thecrazymountaineers.com">
            info@thecrazymountaineers.com
          </a>
        </div>
      </div>
      <div
        className={`flex w-[90%] sm:w-[80%] lg:w-1/3 h-[300px] flex-col justify-start items-center gap-4 bg-gray-100 rounded-md py-4 px-2 max-h-[300px] hover:-translate-y-2 transition-all duration-500 ease-in-out  shadow-md`}
      >
        <div className="font-normal font-montez tracking-wider text-[24px]">
          For Further Information Contact:
        </div>
        <div className="font-normal flex flex-col justify-center items-center gap-1 text-sm">
          <p>Mr. Kanishk Singh Rathore(Director)(+91-9557739933) </p>
          <p> Mr. Rohitash Singh Rawat(Director)(+91-9720793617)</p>
          <div className="flex justify-start items-start gap-2">
            <p className="flex  font-normal">Email:</p>
            <a href="mailto:info@thecrazymountaineers.com">
              info@thecrazymountaineers.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingOffice;
