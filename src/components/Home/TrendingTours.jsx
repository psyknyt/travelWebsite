import React from "react";

import bgLineImage from "../../assets/background/line-pattern2.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

import { MdOutlineSell } from "react-icons/md";
import bgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";
import { MdArrowForward } from "react-icons/md";
import { GoClock } from "react-icons/go";
import starImg from "../../assets/starImg.png";
import { FaArrowRight } from "react-icons/fa";

const TrendingTourLocation = () => {
  const cardShadow = {
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
  };
  return (
    <div
      className={`relative tracking-wider font-inter bg-black shadow-xl flex flex-col group rounded-lg w-[95%] h-[400px] group overflow-hidden`}
      data-aos="fade-up"
    >
      <div className="relative w-full h-full img overflow-hidden rounded-t-lg max-h-[400px]">
        <img
          src={bgImage}
          alt="card image"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
        />
      </div>
      <div className="absolute bg-black px-4 py-6 bg-opacity-50 text-white flex flex-col gap-4 justify-start items-start w-full h-[130px] bottom-0 transition-all duration-300 delay-150">
        <div className="flex flex-col justify-start items-start text-xl font-semibold">
          Kedarkantha Trek
        </div>
        <div className="flex justify-between items-center w-full ">
          <div>Uttarkashi</div>
          <div className="flex bg-transparent text-white px-4 py-2 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-white border-[1.5px] group-hover:border-transparent group-hover:border-[0px]  transition-all duration-700 delay-500 ease-in-out">
            <span className="relative z-10 flex items-center justify-center gap-2 transition-all duration-500 delay-300 ease-in-out">
              <div>View Details</div>
              {/* <FaArrowRight /> */}
            </span>
            <div className="absolute inset-0 bg-transparent">
              <div className="mask absolute inset-0 bg-lemonYellow transition-all duration-700 delay-150 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0 "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TrendingTours = () => {
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
          Trending Treks
        </div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Upcoming Winter Treks
        </div>
      </div>
      <div className="flex  justify-center items-center py-5 w-full lg:w-[90%] mx-auto">
        <Swiper
          spaceBetween={10}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          loop={false}
          id="commercial"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="trending-swiper"
        >
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TrendingTourLocation />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingTours;
