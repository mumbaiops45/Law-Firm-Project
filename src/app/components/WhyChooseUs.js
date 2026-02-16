// "use client";

// import { 
//   FaGavel, FaBalanceScale, FaUserSecret, FaBullseye 
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function WhyChooseUs() {
//   const trustCards = [
//     { 
//       title: "Proven Legal Expertise", 
//       description: "Decades of experience across multiple legal domains.", 
//       icon: <FaGavel size={28} className="text-[#C9A24D]" /> 
//     },
//     { 
//       title: "Ethical Practice", 
//       description: "Committed to honesty, integrity, and professional ethics.", 
//       icon: <FaBalanceScale size={28} className="text-[#C9A24D]" /> 
//     },
//     { 
//       title: "Client Confidentiality", 
//       description: "All matters handled with utmost privacy and discretion.", 
//       icon: <FaUserSecret size={28} className="text-[#C9A24D]" /> 
//     },
//     { 
//       title: "Result-Oriented Approach", 
//       description: "Focused on delivering practical and favorable outcomes.", 
//       icon: <FaBullseye size={28} className="text-[#C9A24D]" /> 
//     },
//   ];

//   // Motion variants for fade + slide up
//   const cardVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1, 
//       transition: { duration: 0.6, ease: "easeOut" } 
//     },
//     hover: {
//       scale: 1.05,
//       y: -5,
//       transition: { duration: 0.3, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="py-20 px-6 bg-white text-center mt-9">
//       {/* Section Title */}
//       <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#0B1C2D] mb-2">
//         Why Clients Trust Us
//       </h2>
//       <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto mb-12"></div>

//       {/* Cards Grid */}
//       <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
//         {trustCards.map((card, index) => (
//           <motion.div 
//             key={index} 
//             className="p-6 bg-white border border-[#C9A24D] rounded-md shadow-sm relative overflow-hidden"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             whileHover="hover"
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             {/* Animated Border Glow */}
//             <motion.div 
//               className="absolute inset-0 rounded-md border border-[#C9A24D] opacity-0 pointer-events-none"
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             ></motion.div>

//             {/* Icon */}
//             <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full border border-[#C9A24D]">
//               {card.icon}
//             </div>
            
//             {/* Title */}
//             <h3 className="text-xl font-semibold text-[#0B1C2D] mb-2">{card.title}</h3>
            
//             {/* Description */}
//             <p className="text-gray-700 text-sm">{card.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import {
  FaGavel,
  FaBalanceScale,
  FaUserSecret,
  FaBullseye,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseUs() {

  const trustCards = [
    {
      title: "Proven Legal Expertise",
      description: "Decades of experience across multiple legal domains.",
      icon: <FaGavel size={22} />,
    },
    {
      title: "Ethical Practice",
      description: "Committed to honesty, integrity, and professional ethics.",
      icon: <FaBalanceScale size={22} />,
    },
    {
      title: "Client Confidentiality",
      description: "All matters handled with utmost privacy and discretion.",
      icon: <FaUserSecret size={22} />,
    },
    {
      title: "Result-Oriented Approach",
      description: "Focused on delivering practical and favorable outcomes.",
      icon: <FaBullseye size={22} />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-white">

      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-sans font-semibold text-[#111111]">

          Why Clients Trust Us
        </h2>
        <div className="w-24 h-[2px] bg-[#C9A24D] mx-auto mt-4"></div>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {trustCards.map((card, index) => (

          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="
              bg-white
              border
              border-gray-200
              rounded-md
              p-8
              text-center
              hover:shadow-md
              transition-all
              duration-300
            "
          >

            {/* Icon */}
            <div className="
              w-12
              h-12
              mx-auto
              mb-4
              flex
              items-center
              justify-center
              rounded-full
              border
              border-[#C9A24D]
              text-[#C9A24D]
            ">
              {card.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#111111] mb-2">
              {card.title}
            </h3>

            {/* One-line Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {card.description}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}
