"use client";
import React from "react";

const OurWorksSection = () => {
  const logos = [
    { src: "/client/client21.jpeg", alt: "Logo 2" },
    { src: "/client/client23.jpeg", alt: "Logo 2" },
    { src: "/client/client4.png", alt: "Logo 2" },
    { src: "/client/client18.png", alt: "Logo 2" },
    { src: "/client/client11.png", alt: "Logo 2" },
    
    { src: "/client/client1.png", alt: "Logo 1" },
    { src: "/client/client2.png", alt: "Logo 2" },
    { src: "/client/client3.png", alt: "Logo 2" },
    { src: "/client/client5.png", alt: "Logo 2" },
    { src: "/client/client6.png", alt: "Logo 2" },
    { src: "/client/client7.png", alt: "Logo 2" },
    { src: "/client/client8.png", alt: "Logo 2" },
    { src: "/client/client19.png", alt: "Logo 2" },
    { src: "/client/client9.png", alt: "Logo 2" },
    { src: "/client/client10.png", alt: "Logo 2" },
    { src: "/client/client12.png", alt: "Logo 2" },
    { src: "/client/client13.png", alt: "Logo 2" },
    { src: "/client/client15.png", alt: "Logo 2" },
    { src: "/client/client16.png", alt: "Logo 2" },
    { src: "/client/client17.png", alt: "Logo 2" },
    { src: "/client/client20.jpeg", alt: "Logo 2" },
    { src: "/client/client22.jpeg", alt: "Logo 2" },
    { src: "/client/client14.png", alt: "Logo 2" },
  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-gray-800 font-sans font-thin text-center mb-12">
          Our Clients
        </h2>

        {/* First Row - 5 Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
          {logos.slice(0, 5).map((logo, index) => (
            <div
              key={index}
              className="lg:w-full w-60 mx-auto h-36  lg:h-32 bg-white shadow-lg rounded-lg flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full p-4"
              />
            </div>
          ))}
        </div>

        {/* Second Row - 6 Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-8">
          {logos.slice(5, 11).map((logo, index) => (
            <div
              key={index}
              className="w-full  h-36 lg:h-32 bg-white shadow-lg rounded-lg flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full p-4"
              />
            </div>
          ))}
        </div>

        {/* Third Row - 6 Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-8">
          {logos.slice(11, 17).map((logo, index) => (
            <div
              key={index}
              className="w-full  h-36 lg:h-32 bg-white shadow-lg rounded-lg flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full p-4"
              />
            </div>
          ))}
        </div>

        {/* Fourth Row - Remaining Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {logos.slice(17, 23).map((logo, index) => (
            <div
              key={index}
              className="w-full  h-36 lg:h-32 bg-white shadow-lg rounded-lg flex items-center justify-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-full h-full p-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorksSection;
