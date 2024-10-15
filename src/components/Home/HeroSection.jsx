import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css"; // Import Swiper styles\

import banner1 from "../../assets/slide_01.png";
import banner2 from "../../assets/slide_02.png";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative z-20">
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
            <div className="relative w-full h-full object-cover object-center">
              <img
                data-aos="zoom-in-up"
                src={banner1}
                alt="Hero Section"
                loading="lazy"
                className="relative w-full h-full m-auto object-cover object-center overflow-x-hidden  "
              />
              <div
                className="absolute inset-0 object-cover object-center
               bg-black text-white  bg-opacity-20 flex justify-start items-center w-full h-full px-5"
              >
                <div className="w-full md:w-[80%] mx-auto flex flex-col justify-center items-center md:items-start md:justify-start gap-2 py-4  ">
                  <div className="font-montez text-[40px] leading-4 pt-4 font-normal animate__animated animate__fadeInUp animate__delay-1s">
                    Top Destinations
                  </div>
                  <div className="w-[90%] lg:w-[50%] pt-2  font-inter text-center md:text-left text-[45px] md:text-[50px] lg:text-[70px] leading-normal  font-bold flex justify-center items-center md:justify-start md:items-start text-wrap animate__animated animate__fadeInUp animate__delay-1s">
                    Our Featured Destinations
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="flex bg-[#1CA8CB] text-white px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none  transition-all duration-500 delay-500 ease-in-out">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <div>Explore Tours</div>
                        <FaArrowRight />
                      </span>
                      <div className="absolute inset-0 bg-[#1CA8CB] border-transparent">
                        <div className="mask absolute inset-0 bg-black  transition-all duration-700 delay-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                      </div>
                    </div>
                    <div className="flex bg-transparent text-white px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-white border-[1.5px] group-hover:border-transparent group-hover:border-[0px]  transition-all duration-700 delay-500 ease-in-out">
                      <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-all duration-500 delay-300 ease-in-out">
                        <div>Our Services</div>
                        <FaArrowRight />
                      </span>
                      <div className="absolute inset-0 bg-transparent">
                        <div className="mask absolute inset-0 bg-white transition-all duration-700 delay-150 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0 "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="transition duration-300 ease-in-out">
            <div className="relative w-full h-full object-cover object-center">
              <img
                data-aos="zoom-in-up"
                src={banner2}
                alt="Hero Section"
                loading="lazy"
                className="relative w-full h-full m-auto object-cover object-center overflow-x-hidden  "
              />
              <div
                className="absolute inset-0 object-cover object-center
               bg-black text-white  bg-opacity-20 flex justify-start items-center w-full h-full px-5"
              >
                <div className="w-full md:w-[80%] mx-auto flex flex-col justify-center items-center md:items-start md:justify-start gap-2 py-4  ">
                  <div className="font-montez text-[40px] leading-4 pt-4 font-normal animate__animated animate__fadeInUp animate__delay-1s">
                    Top Destinations
                  </div>
                  <div className="w-[90%] lg:w-[50%] pt-2  font-inter text-center md:text-left text-[45px] md:text-[50px] lg:text-[70px] leading-normal  font-bold flex justify-center items-center md:justify-start md:items-start text-wrap animate__animated animate__fadeInUp animate__delay-1s">
                    Our Featured Destinations
                  </div>
                  <div className="flex flex-col md:flex-row gap-2 animate__animated animate__fadeInUp animate__delay-2s">
                    <div className="flex bg-[#1CA8CB] text-white px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none  transition-all duration-500 delay-500 ease-in-out">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <div>Explore Tours</div>
                        <FaArrowRight />
                      </span>
                      <div className="absolute inset-0 bg-[#1CA8CB] border-transparent">
                        <div className="mask absolute inset-0 bg-black  transition-all duration-700 delay-300 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0 border-transparent"></div>
                      </div>
                    </div>
                    <div className="flex bg-transparent text-white px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-white border-[1.5px] group-hover:border-transparent group-hover:border-[0px]  transition-all duration-700 delay-500 ease-in-out">
                      <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-black transition-all duration-500 delay-300 ease-in-out">
                        <div>Our Services</div>
                        <FaArrowRight />
                      </span>
                      <div className="absolute inset-0 bg-transparent">
                        <div className="mask absolute inset-0 bg-white transition-all duration-700 delay-150 ease-in-out transform translate-x-[-100%] group-hover:translate-x-0 "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSection;
