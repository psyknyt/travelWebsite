import React from "react";

import bgLineImage from "../../assets/background/line-pattern2.png";

const PopularTours = () => {
  return (
    <div
      className="flex flex-col py-5"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4">
          Best Place For You
        </div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Most Popular Tours
        </div>
      </div>
      <div className="my-5">
        <div className="flex flex-col gap-2 py-4 h-[400px]"></div>
      </div>
    </div>
  );
};

export default PopularTours;
