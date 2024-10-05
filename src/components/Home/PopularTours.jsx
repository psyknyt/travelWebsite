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
import PopularLocation from "../utils/PopularLocation";

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
      <div className="flex  justify-center items-center py-5">
        <Swiper
          spaceBetween={10}
          modules={[Pagination, Autoplay]}
          navigation={false}
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
        >
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
          <SwiperSlide
            className="flex justify-center items-center z-10 my-10 mx-auto"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PopularLocation />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularTours;
