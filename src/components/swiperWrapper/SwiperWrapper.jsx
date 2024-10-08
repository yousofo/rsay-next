"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import CyberSecurityServices from "../pages/cyberSecurityServices/CyberSecurityServices";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import { useDispatch } from "react-redux";
import { setSwiper } from "@/state/features/swiper/SwiperSlice";
const SwiperWrapper = () => {
  const dispatch = useDispatch();
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => dispatch(setSwiper(swiper))}
      className="w-full h-min flex-1 "
      autoHeight={true}  // Enable autoHeight
      modules={[EffectFade]}
      effect="fade"
    >
      {/* 0 */}
      <SwiperSlide>
        <Home />
      </SwiperSlide>
      {/* 1 */}
      <SwiperSlide>
        <About />
      </SwiperSlide>
      {/* 2 */}
      <SwiperSlide>
        <Services />
      </SwiperSlide>
      {/* 3 */}
      <SwiperSlide>
        <CyberSecurityServices />
      </SwiperSlide>
      {/* 4 */}
      <SwiperSlide>
        <Contact />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperWrapper;
