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

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  let content = (
    <>
      <HeroSection />
      <Welcome />
      <TrendingTreks />
      <TestimonialSection />
      <Footer />
    </>
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
