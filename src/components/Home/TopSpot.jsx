import React from "react";

import bestAutumnTreks from "../../assets/background/destination_bg_1.png";
import TestimonialSection from "./Reviews";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import travellerImg from "../../assets/traveller4.jpg";
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

const TopSpotCard = ({ props }) => {
  return (
    <div className="destination-box   w-[90%] sm:w-[80%]  md:w-full group transition-all duration-300 delay-100 ease-in-out h-[500px]  max-h-[500px] mx-auto rounded-xl overflow-hidden flex flex-col justify-between relative">
      <img
        src={props.img}
        className="w-full z-10 h-full rounded-xl box-img object-cover group-hover:scale-110 transition-all duration-500 delay-100 ease-in-out relative"
      />
      <div className="bg-black bg-opacity-10 h-full w-full z-20 absolute top-0" />
      <div className="absolute z-30  px-4 py-6 text-white  flex flex-col gap-4 justify-start items-start w-full bottom-0 transition-all duration-300 delay-150 tracking-wider">
        <div className="flex flex-col justify-start items-start text-xl font-bold">
          {props.name}
        </div>
        <div className="flex justify-between items-center w-full font-normal">
          10 Listings
        </div>
      </div>
    </div>
  );
};

const TopSpot = () => {
  return (
    <div
      className="flex flex-col justify-center items-center relative pt-[120px]"
      style={{
        backgroundImage: `url(${bestAutumnTreks})`,
        backgroundSize: "auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
      }}
    >
      <div className="flex flex-col text-lemonYellow items-center justify-center gap-2 py-4 relative">
        <div className="font-montez text-4xl leading-6 pt-4">Top Spot</div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Discover Our Destinations
        </div>
      </div>
      <div
        className="flex w-full md:w-[80%] justify-center items-center py-5 relative"
        id="reviews"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={false}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          loop={true}
          id="commercial"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="w-full flex justify-center items-center"
        >
          {trekListings.map((el) => (
            <SwiperSlide
              key={el.listing}
              className="z-10 my-10 mx-auto w-full md:px-4 hover:-translate-y-3 transition-all duration-500 delay-100 ease-in-out"
            >
              <TopSpotCard props={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopSpot;
