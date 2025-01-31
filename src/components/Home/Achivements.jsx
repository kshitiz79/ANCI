"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [

  {
    value: "2+",
    numericValue: 2, // Used for animation
    label: "Decades of Experience",
  },
  

  {
    value: "54+",
    numericValue: 54, // Used for animation
    label: "Projects Completed",
  },
  {
    value: "2M+",
    numericValue: 2000000, // Used for animation
    label: "Sqft of Projects",
  },
];

const AnimatedCounter = ({ finalValue, displayValue }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // Animation duration in ms
      const increment = Math.ceil(finalValue / (duration / 50));

      const counter = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
          setCount(finalValue);
          clearInterval(counter);
        } else {
          setCount(start);
        }
      }, 50);
    }
  }, [isInView, finalValue]);

  return (
    <span ref={ref}>
      {finalValue >= 1000000
        ? `${Math.round(count / 1000000)}M+`
        : `${count}+`}
    </span>
  );
};

const OurAchievements = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-sans font-thin text-gray-800 mb-6"
        >
          Proven Track Record of Success
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
            >
              <motion.span
                className="text-4xl font-medium text-red-800 mb-2"
                animate={{
                  scale: [1, 1.02, 1],
                  transition: { duration: 1, repeat: Infinity },
                }}
              >
                <AnimatedCounter
                  finalValue={stat.numericValue}
                  displayValue={stat.value}
                />
              </motion.span>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
