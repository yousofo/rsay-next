"use client";
import ScreenWrapper from "@/components/shared/ScreenWrapper";
import { useTranslations } from "next-intl";
import React from "react";
import Marquee from "react-fast-marquee";
import { useSelector } from "react-redux";

const About = () => {
  const swiper = useSelector((store) => store.swiper.swiper);
  function handleLinkClick(i) {
    swiper.slideTo(i);
  }
  const translateCourses = useTranslations("courses");
  const translateAbout = useTranslations("about");
  const images = [
    "/images/placeholders/softwareengineering.jpeg",
    "/images/placeholders/ai-training.webp",
    "/images/placeholders/cloud-computing-900x600.jpg",
    "/images/placeholders/quality-management.webp",
    "/images/placeholders/Digital-transformation-for-organisations-1080x609.jpg",
    "/images/placeholders/cybersecurity.jpg",
    "/images/placeholders/risk-management.jpg",
  ];
  return (
    <section className="flex-1 flex-col bg-white">
      {/* first section */}
      <div className="w-full  h-[400px] mx-auto 2x l:rounded-2xl overflow-hidden relative">
        <div className="w-full h-full absolute top-0 left-0 z-20 bg-black opacity-60"></div>
        {/* <div className="w-full h-full absolute top-0 left-0 z-20 bg-slate-200 opacity-5"></div> */}
        <img
          className="w-full blur-sm h-full object-cover absolute z-10"
          src="/images/background/about-bg.webp"
          alt=""
        />
        <ScreenWrapper className="relative z-30 flex flex-col h-full gap-4 items-center justify-center">
          <h2 className="text-5xl font-bold text-white uppercase">
            {translateAbout("title")}
          </h2>
          <p className="text-2xl text-white font-semibold text-center">
            {translateAbout("message").split("**")[0]}{" "}
            <span
              style={{ animationDuration: "3s" }}
              className="font-bold animate-pulse underline italic pe-1 uppercase"
            >
              {translateAbout("name")}
            </span>{" "}
            {translateAbout("message").split("**")[1]}
          </p>
        </ScreenWrapper>
      </div>
      <ScreenWrapper className="flex flex-col gap-2 items-center pt-8 text-rsayBlack text-center  px-8">
        <h2 className="text-3xl font-bold w-full pb-3 border-b-2 border-gray-300 max-w-60">
          {translateAbout("section1.first")}
        </h2>
        <p className="text-xl font-semibold pt-2 flex flex-col gap-4 list-disc">
          {translateAbout("section1.info1")}
        </p>
      </ScreenWrapper>
      {/* courses cards */}
      <div dir="ltr" className="w-full">
        <Marquee>
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <div
                img={images[index]}
                key={`first-${index}`}
                className="w-[300px] h-[200px] bg-white rounded-lg py-4 px-2 overflow-hidden relative group cursor-pointer"
                onClick={() => handleLinkClick(2)}
              >
                <div className="w-full h-full top-0 left-0 z-10 relative  rounded-lg overflow-hidden">
                  <div className="w-full h-full absolute top-0 left-0 z-20 bg-black opacity-40 p-4"></div>
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                    src={images[index]}
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 z-20 left-0 h-[40%] w-full flex items-start p-7 text-white">
                  <h4 className="font-bold text-lg">
                    {translateCourses(`course${index + 1}.title`)}
                  </h4>
                </div>
              </div>
            ))}
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <div
                img={images[index]}
                key={`second-${index}`}
                className="w-[300px] h-[200px] bg-white rounded-lg py-4 px-2 overflow-hidden relative group cursor-pointer"
                onClick={() => handleLinkClick(2)}
              >
                <div className="w-full h-full top-0 left-0 z-10 relative  rounded-lg overflow-hidden">
                  <div className="w-full h-full absolute top-0 left-0 z-20 bg-black opacity-40 p-4"></div>
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                    src={images[index]}
                    alt=""
                  />
                </div>
                <div className="absolute bottom-0 z-20 left-0 h-[40%] w-full flex items-start p-7 text-white">
                  <h4 className="font-bold text-lg">
                    {translateCourses(`course${index + 1}.title`)}
                  </h4>
                </div>
              </div>
            ))}
        </Marquee>
      </div>
      {/* about */}
      <ScreenWrapper className="flex flex-col gap-2 items-start py-8 mb-8 text-rsayBlack text-start  px-8">
        <h2 className="text-3xl font-bold w-full pb-3 border-b-2 border-gray-300 max-w-60">
          {translateAbout("section2.first")}
        </h2>
        <ul className="text-xl font-semibold pt-2 flex flex-col gap-4 list-disc">
          <li>{translateAbout("section2.info1")}</li>
          <li>{translateAbout("section2.info2")}</li>
          <li>{translateAbout("section2.info3")}</li>
          <li>{translateAbout("section2.info4")}</li>
          <li>{translateAbout("section2.info5")}</li>
        </ul>
      </ScreenWrapper>
      {/* <hr className="w-full my-12" /> */}
      <div className="flex flex-col justify-between gap-4 items-center bg-[#f1f4f6] w-full">
        <ScreenWrapper className="flex justify-between gap-4 py-0">
          <section className="flex flex-col gap-4 items-start justify-start p-4">
            <h2 className="text-3xl font-bold w-full pb-3 border-b-2 border-gray-300 max-w-60">
              {translateAbout("section3.first")}
            </h2>
            <p className="text-xl font-semibold pt-2 flex flex-col gap-4 list-disc">
              {translateAbout("section3.info1")}
            </p>
          </section>
          <div className="hidden lg:block w-full aspect-video relative">
            <img
              className="abosulte w-full h-full object-cover"
              src="/images/placeholders/about-vision.jpg"
              alt=""
            />
          </div>
        </ScreenWrapper>
      </div>
      <div className="flex flex-col justify-between gap-4  items-center bg-[#f3efec] w-full">
        <ScreenWrapper className="flex justify-between gap-4 py-0">
          <section className="flex order-2 flex-col gap-4 items-start justify-start p-4">
            <h2 className="text-3xl font-bold w-full pb-3 border-b-2 border-gray-300 max-w-60">
              {translateAbout("section4.first")}
            </h2>
            <p className="text-xl font-semibold pt-2 flex flex-col gap-4 list-disc">
              {translateAbout("section4.info1")}
            </p>
          </section>
          <div className="hidden lg:block w-full aspect-video relative">
            <img
              className="abosulte w-full h-full object-cover"
              src="/images/placeholders/about-mission-800x380.jpg"
              alt=""
            />
          </div>
        </ScreenWrapper>
      </div>
    </section>
  );
};

export default About;
