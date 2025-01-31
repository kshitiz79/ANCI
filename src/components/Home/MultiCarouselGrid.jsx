"use client";

import React from "react";
import Slider from "react-slick";

const ImageCarousel = ({ images, title }) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="w-full h-80 bg-gray-100 rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="flex-1">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="w-full h-64">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className=" p-4   text-center">
        <h3 className="text-lg  font-medium   text-gray-800">{title}</h3>
      </div>
    </div>
  );
};

const MultiCarouselGrid = () => {
  const carouselData = [
    {
      images: [
        "/AIL/ali1.jpeg",
        "/AIL/ali2.jpeg",
        "/AIL/ali3.jpeg",
        "/AIL/ali4.jpeg",
      ],
      title: "AIL",
    },
    {
      images: [
        "/JSWMobilityLtd/JWSMOBILE1.png",
        "/JSWMobilityLtd/JWSMOBILE2.png",
        "/JSWMobilityLtd/JWSMOBILE3.png",
        "/JSWMobilityLtd/JWSMOBILE4.png",
      ],
      title: "JSW MOBILITY LTD",
    },
    {
      images: [
        "/RaipurHospital/raipur1.jpeg",
        "/RaipurHospital/raipur2.jpeg",
        "/RaipurHospital/raipur3.jpeg",
        "/RaipurHospital/raipur4.jpeg",
        "/RaipurHospital/raipur5.jpeg",
        "/RaipurHospital/raipur6.jpeg",
        "/RaipurHospital/raipur7.jpeg",
      ],
      title: "RAIPUR HOSPITAL",
    },
    {
      images: ["/JSWEnergyLtd/JWSE.jpeg",
        "/JSWMobilityLtd/JWSMOBILE4.png",
      ],
      title: "JSW ENERGY LTD",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {carouselData.map((data, index) => (
          <ImageCarousel key={index} images={data.images} title={data.title} />
        ))}
      </div>
    </section>
  );
};

export default MultiCarouselGrid;
