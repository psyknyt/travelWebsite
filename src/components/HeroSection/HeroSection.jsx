import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css"; // Import Swiper styles\

import banner1 from "../../assets/slide_01.png";
import banner2 from "../../assets/slide_02.png";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* TODO Added an mask */}
      <div className="relative top-0 left-0 h-max lg:col-span-2">
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <Swiper
          spaceBetween={30}
          loop={true}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Pagination, Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 5000,
          }}
          className="h-[80vh]"
        >
          <SwiperSlide>
            <img
              data-aos="zoom-in-up"
              src={banner1}
              alt="Hero Section"
              loading="lazy"
              className="w-full h-full m-auto object-cover object-center overflow-x-hidden  "
            />
          </SwiperSlide>
          <SwiperSlide className="transition duration-300 ease-in-out">
            <img
              data-aos="zoom-in-up"
              src={banner2}
              alt="Hero Section"
              loading="lazy"
              className="w-full h-full m-auto object-cover object-center overflow-x-hidden  transition-all duration-300 ease-in-out"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
