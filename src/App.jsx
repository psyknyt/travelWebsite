import { useState, useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Nav from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Welcome from "./components/Home/Welcome";
import TrendingTreks from "./components/Home/TrendingTreks";
import TestimonialSection from "./components/Home/Reviews";
import SwiperCards from "./components/Home/SwiperCards";
import FeaturedDestination from "./components/Home/FeaturedDestination";
import Navbar from "./components/Navbar/NewNavbar";
import GlowingCircle from "./components/utils/GlowingCircles";
import AnalyticData from "./components/Home/AnalyticData";
import PopularTours from "./components/Home/PopularTours";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  let content = (
    <div className="flex flex-col">
      <HeroSection />
      <FeaturedDestination />
      {/* <PopularTours /> */}
      {/* <Welcome /> */}
      {/* <TrendingTreks /> */}
      <SwiperCards />
      <AnalyticData />
      <Footer />
    </div>
  );

  return (
    <div className="w-full">
      <Nav />
      <Routes>
        <Route path="/" element={content} />
      </Routes>
    </div>
  );
}

export default App;
