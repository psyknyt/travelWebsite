import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../../assets/banner1.jpg";
import googleLogo from "../../assets/google.png";
import travellerImg from "../../assets/traveller4.jpg";
import bgLineImage from "../../assets/background/line-pattern2.png";

const TestimonialCard = () => {
  return (
    // <div className="flex justify-center items-center h-screen bg-slate-500 text-center ">
    <div
      className="w-[80%] md:w-[400px] hover:scale-105 transition-all duration-300 delay-100 ease-in-out  h-[280px] mx-auto bg-slate-100 rounded-md overflow-hidden flex flex-col justify-between pb-5 relative"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 4px 6px, rgba(0, 0, 0, 0.2) 0px 1px 28px",
      }}
    >
      <div className="h-1/5 flex justify-start items-center gap-3 mt-4 py-5 px-4 ">
        <img
          src={travellerImg}
          className="w-14 h-14 rounded-full object-cover object-center"
        />
        <div className="flex flex-col text-sm font-semibold">
          <div>Name:</div>
          <div>Status</div>
        </div>
        <div className="ml-auto absolute top-2 right-2">
          <img src={googleLogo} className="max-w-5 h-5 place-content-start" />
        </div>
      </div>
      <div className="px-4 text-left">⭐⭐⭐⭐⭐</div>
      <div className="px-4">
        <div className="h-[120px] rounded-b-md overflow-y-auto place-content-end">
          <span className="w-[80%] mx-auto text-left py-2 rounded-b-md overflow-hidden">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            corporis optio ullam praesentium eum! Nihil soluta sequi
            perspiciatis, facere incidunt possimus animi, ipsa quaerat cumque
            consectetur architecto impedit eum quo! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Doloribus, porro aliquam? Sapiente,
            sunt veniam? Eius deserunt quisquam veniam inventore nisi nesciunt
            ipsam quis laboriosam sint eligendi esse, accusamus optio!
            Asperiores!
          </span>
        </div>
      </div>
    </div>

    // </div>
  );
};

const TestimonialSection = () => {
  return (
    <div
      className="pb-20 h-[80vh] "
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4 text-center">
          Testimonial
        </div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl text-center font-semibold tracking-wide flex justify-center items-center text-nowrap">
          What client say about us
        </div>
      </div>
      <div
        className="flex w-full  justify-center items-center py-5 lg:w-[90%] mx-auto"
        id="reviews"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          navigation={false}
          autoplay={{
            delay: 50000,
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
          className="w-full"
        >
          <SwiperSlide className="z-10 my-10 mx-auto bg-gray-500 flex justify-center items-center">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="my-10 mx-auto">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="my-10 mx-auto">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className=" my-10  mx-auto">
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
