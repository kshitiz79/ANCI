"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    numericValue: 2, // Used for animation
    label: "Experience",
    suffix: "+ Decade ",
  },
  {
    numericValue: 54,
    label: "Projects",
    suffix: "+",
  },
  {
    numericValue: 2000000,
    label: "Sqft of Work",
    suffix: " Million",
    format: (num) => (num / 1000000), // Convert to Million
  },
];



const AnimatedCounter = ({ finalValue, suffix = "", format }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = finalValue / (duration / 10);

      const interval = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
          clearInterval(interval);
          setCount(finalValue);
        } else {
          setCount(start);
        }
      }, 10);
    }
  }, [isInView, finalValue]);

  return (
    <motion.div ref={ref}>
      {format ? format(count) : Math.round(count)}
      {suffix}
    </motion.div>
  );
};


const OurAchievements = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
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
                className="text-4xl font-medium text-gray-700 mb-2"
                animate={{
                  scale: [1, 1.02, 1],
                  transition: { duration: 1, repeat: Infinity },
                }}
              >
                <AnimatedCounter
    key={index}
    finalValue={stat.numericValue}
    suffix={stat.suffix}
    format={stat.format}
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
