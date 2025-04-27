// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// const features = [
//   {
//     title: "Finest Materials",
//     description: "We ensure every project uses only the best materials for unmatched quality.",
//   },
//   {
//     title: "Client-Focused Collaboration",
//     description: "Our approach revolves around understanding and exceeding client expectations.",
//   },
//   {
//     title: "Superior Craftsmanship",
//     description: "Exceptional attention to detail ensures top-notch execution.",
//   },
//   {
//     title: "On-Time Delivery",
//     description: "We pride ourselves on delivering projects within the agreed timelines.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-gray-100 py-12 px-6" id="why-choose-us">
//       <div className="max-w-7xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl font-sans font-thin text-gray-800 mb-6"
//         >
//           Delivering Quality, Innovation, and Trust
//         </motion.h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="bg-white shadow-md rounded-lg p-6 text-center"
//             >
//               <h3 className="text-xl font-thin font-sans  text-gray-700 mb-2">{feature.title}</h3>
//               <p className="text-gray-600 text-sm font-thin font-sans">{feature.description}</p>
//             </motion.div>
//           ))}
//         </div>
       
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;


"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Finest Materials",
    description: "We ensure every project uses only the best materials for unmatched quality.",
    icon: "🌟", // Add an emoji or icon for visual appeal
  },
  {
    title: "Client-Focused Collaboration",
    description: "Our approach revolves around understanding and exceeding client expectations.",
    icon: "🤝",
  },
  {
    title: "Superior Craftsmanship",
    description: "Exceptional attention to detail ensures top-notch execution.",
    icon: "🔧",
  },
  {
    title: "On-Time Delivery",
    description: "We pride ourselves on delivering projects within the agreed timelines.",
    icon: "⏱️",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gradient-to-r bg-gray-50 py-16 px-6" id="why-choose-us">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-sans font-thin text-gray-800 mb-8"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-sans font-thin"
        >
          We are committed to delivering quality, innovation, and trust in every project we undertake.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-sans font-thin text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm  font-sans font-thin">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;