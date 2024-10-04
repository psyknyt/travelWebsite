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
      className="swiper-cards-container py-5"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="font-montez text-4xl leading-6 pt-4 flex justify-center items-center">
        Flower Gallery
      </h1>
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
