import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../css/swiperCard.css";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import bestAutumnTreks from "../../assets/best-autumn-treks.jpg";
import spitiValley from "../../assets/Spiti_Valley_Road_Trip_thumb.jpg";

import bgLineImage from "../../assets/background/line-pattern2.png";

function SwiperCards() {
  return (
    <div
      className="swiper-cards-container pt-5"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4">
          Top Destinations
        </div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Popular Destinations
        </div>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src={bestAutumnTreks}
            alt="slide_image"
            loading="lazy"
            className="object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bestAutumnTreks}
            alt="slide_image"
            loading="lazy"
            className="object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bestAutumnTreks}
            alt="slide_image"
            loading="lazy"
            className="object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bestAutumnTreks}
            alt="slide_image"
            loading="lazy"
            className="object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bestAutumnTreks}
            alt="slide_image"
            loading="lazy"
            className="object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bestAutumnTreks}
            alt="slide_image"
            loading="lazy"
            className="object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={bestAutumnTreks}
            alt="slide_image"
            loading="lazy"
            className="object-cover object-center"
          />
        </SwiperSlide>

        {/* <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div> */}
      </Swiper>
    </div>
  );
}

export default SwiperCards;
