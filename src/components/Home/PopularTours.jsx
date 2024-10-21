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
import kedarkanthaTrek from "../../assets/Kedarkantha_Trek_thumb.jpg";
import dyaraBuyalTrek from "../../assets/Dayara_Bugyal_Trek_thumb.jpg";
import jammuKashmir from "../../assets/jammu-kashmir.jpg";
import himachalPradesh from "../../assets/himachal-pradesh.jpg";
import DeoriTalTrek from "../../assets/Deoria_Tal_Chopta_Chandrashila_Trek_thumb.jpg";
import kedarnathTrek from "../../assets/Kedarnath_Yatra_thumb.jpg";
import harKiDunTrek from "../../assets/Har_Ki_Dun_Trek_thumb.jpg";
import gaumukhTapovanTrek from "../../assets/Gaumukh_Tapovan_thumb.jpg";

const trekListings = [
  {
    name: "Kedarkantha Trek",
    listing: 1,
    img: kedarkanthaTrek,
  },
  {
    name: "Har Ki Dun Trek",
    listing: 2,
    img: harKiDunTrek,
  },
  {
    name: "Gaumukh Tapovan",
    listing: 3,
    img: gaumukhTapovanTrek,
  },
  {
    name: "Dayara Bugyal Trek",
    listing: 5,
    img: dyaraBuyalTrek,
  },
  {
    name: "Kedarnath Trek",
    listing: 7,
    img: kedarnathTrek,
  },
  {
    name: "Deoria Tal Chopta Chandrashila Trek",
    listing: 9,
    img: DeoriTalTrek,
  },
];

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
      <div className="flex justify-center items-center py-5 w-full lg:w-[90%] mx-auto">
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
          className="w-full mx-auto"
        >
          {trekListings.map((el) => {
            return (
              <SwiperSlide
                className="flex justify-center items-center z-10 my-10 mx-auto hover:-translate-y-2 transition-all duration-500 delay-100 ease-in-out"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <PopularLocation props={el} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularTours;
