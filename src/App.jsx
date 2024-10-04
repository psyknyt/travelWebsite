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
      <Welcome />
      <TrendingTreks />
      <SwiperCards />
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
