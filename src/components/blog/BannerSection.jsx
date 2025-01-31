"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function BannerSection() {
  const textContainerRef = useRef(null);

  useEffect(() => {
    const textContainer = textContainerRef.current;
    if (!textContainer) return;

    // Clone the children for a repeated scrolling effect
    const originalChildren = Array.from(textContainer.children);
    originalChildren.forEach((child) => {
      const clone = child.cloneNode(true);
      textContainer.appendChild(clone);
    });

    // Calculate total width (now that we duplicated the children)
    const totalWidth = textContainer.scrollWidth / 2;

    // Infinite scrolling using GSA
    gsap.to(textContainer, {
      x: `-${totalWidth}px`,
      duration: 50,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative text-white">
      {/* Background Image Section */}
      

      {/* Scrolling Nav Bar */}
      <div className="bg-[#7c0c2b] lg:py-3 py-2 overflow-hidden">
        <div
          ref={textContainerRef}
          className="flex whitespace-nowrap items-center space-x-12 text-white text-xs font-medium"
        >
          <ul className="flex space-x-12 font-montserrat font-normal">
            <li >Interior Fit-Out Services</li>
            <li >Turn-Key Fit-Out Solutions</li>
            <li >Commercial Spaces</li>
            <li >High-Quality Fit-Outs</li>
            <li >Corporate Offices</li>
            <li >
            Future-Proofing Designs
            </li>
            <li >Timely Execution</li>
            <li >
            Premium materials and craftsmanship
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
