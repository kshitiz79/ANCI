"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Hero = () => {
  const sliderImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative h-auto bg-[#7c0c2b]">
      <Slider {...settings} className="h-full">
        {sliderImages.map((image, index) => (
          <div key={index} className="h-full">
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full lg:h-[86vh] h-[50vh] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Overlay for Text */}
      <div className="bg-black bg-opacity-55 absolute inset-0 flex items-center lg:h-[86vh]  ">
        <div className="max-w-[1400px] mx-auto px-6 md:px-14 w-full">
          <div className="w-full lg:w-1/2">
            <h1 className="lg:text-6xl md:text-4xl text-2xl text-white mb-4 font-sans font-thin">
              Transforming Spaces, <br /> Inspiring Excellence
            </h1>
            <h2 className="text-sm md:text-xl text-white mb-6 font-sans font-thin leading-relaxed">
              Your trusted partner in Design & Build, Civil, and Interiors
              <br />
              since 2006.
            </h2>
            <button className="bg-[#7c0c2b] text-white lg:px-6 lg:py-3 px-4 py-2 rounded-md hover:bg-red-900 font-sans font-thin transition">
              Explore Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
