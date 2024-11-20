import { useState, useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

import Nav from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import HeroSection from "./components/Home/HeroSection";
import Welcome from "./components/Home/Welcome";
import TrendingTreks from "./components/Home/TrendingTreks";
import TestimonialSection from "./components/Home/Reviews";
import SwiperCards from "./components/Home/SwiperCards";
import FeaturedDestination from "./components/Home/FeaturedDestination";
import Navbar from "./components/Navbar/NewNavbar";
import GlowingCircle from "./components/utils/GlowingCircles";
import AnalyticData from "./components/Home/AnalyticData";
import PopularTours from "./components/Home/PopularTours";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/About-us/AboutUs";
import HomeGallery from "./components/Home/Gallery";
import LetsGoTogether from "./components/Home/LetsGoTogether";
import RotatingSwiper from "./components/Home/RotatingSwiper";
import WhyUs from "./components/Home/WhyUs";
import TopSpot from "./components/Home/TopSpot";
import BookForm from "./components/utils/BookForm";
import TrendingTours from "./components/Home/TrendingTours";
import ChooseTrek from "./components/Home/ChooseTrek";
import ServicePage from "./components/Services/ServicePage";
import YoutubeVideos from "./components/Home/YoutubeVideos";
import Gallery from "./components/Gallery/Gallery";
import LoginPage from "./components/utils/LoginPage";
import SignUpPage from "./components/utils/SignUpPage";
import { useTrek } from "./Context/SelectedServiceContext";

function App() {
  const { selectedTrek, setSelectedTrek } = useTrek();

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  let homeContent = (
    <div className="flex flex-col overflow-hidden">
      <HeroSection />
      <ChooseTrek />
      <TrendingTours />
      <FeaturedDestination />
      <PopularTours />
      <TopSpot />
      <WhyUs />
      <HomeGallery />
      <AnalyticData />
      <YoutubeVideos />
      <TestimonialSection />
      <BookForm />
    </div>
  );

  return (
    <div className="w-full">
      <Nav />
      <Routes>
        <Route path="/" element={homeContent} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
