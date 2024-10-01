import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css"; // Import Swiper styles
// import "../../node_modules/swiper/css/navigation"; // Import Swiper navigation styles
// import "../../node_modules/swiper/css/pagination"; // Import Swiper pagination styles

import banner1 from "../../assets/banner1.jpg";
import googleLogo from "../../assets/google.png";
import travellerImg from "../../assets/traveller4.jpg";

const TestimonialCard = () => {
  return (
    // <div className="flex justify-center items-center h-screen bg-slate-500 text-center ">
    <div
      className="w-[80%] sm:w-[400px] h-[280px] mx-auto bg-slate-100 rounded-md overflow-hidden flex flex-col justify-between pb-5 relative"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 4px 6px, rgba(0, 0, 0, 0.2) 0px 1px 28px",
      }}
    >
      <div className="h-1/5 flex justify-start items-center gap-3 mt-4 py-5 px-4">
        <img
          src={travellerImg}
          className="max-w-14 h-14 rounded-full object-cover object-center"
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
    <div className="bg-slate-500 pb-20 h-[80vh]">
      <div className="text-center bg-slate-600 text-white py-10 text-xl font-bold">
        Testimonials
      </div>
      <div className="flex  justify-center items-center py-5">
        <Swiper
          spaceBetween={10}
          modules={[Pagination, Autoplay]}
          // pagination={{
          //   clickable: true,
          // }}
          // TODO stopped navigation
          navigation={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          id="commercial"
          // TODO made some changes to the  breakpoints for mobile viewinG
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide className="z-10 m-3 my-10 mx-auto">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="m-3 my-10 mx-auto">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="m-3 my-10 mx-auto">
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide className="m-3 my-10 mx-auto">
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;
