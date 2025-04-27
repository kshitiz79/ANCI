"use client";

import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 flex justify-center items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between md:items-center gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl text-gray-800 mb-4 text-left font-sans font-thin">
            Spaces That Work. Designs That Last.
          </h2>
          <p className="text-base text-gray-600 mb-6 font-sans font-thin text-left leading-relaxed">
            At   ANCI , we don’t just design offices—we craft spaces that inspire, adapt, and endure.
            Your workspace should be more than four walls; it should reflect your vision, fuel productivity, and stand the test of time.
<br/>
            We bring  precision, craftsmanship, and the finest materials  to every project, ensuring a seamless fit-out experience from concept to completion.
            Our approach? A deep understanding of your needs,  thoughtful design, and a structured execution process   that   delivers on time, every time.
        <br/>
          Future-proof. Quality-driven. Built for success
            Let’s create a workspace that works for you.
          </p>
          <a
            href="/about-page"
            className="inline-block bg-[#7c0c2b] text-white font-medium px-5 py-2 font-sans font-thin rounded hover:bg-red-800 transition text-left mt-2"
          >
            Learn More About Our Story
          </a>
        </div>
        {/* Image Content */}
        <div className="w-full md:w-1/3">
          <img src="./about.jpg" alt="About Us" className="w-full h-auto rounded" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;





// 