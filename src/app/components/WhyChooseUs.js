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


// "use client";

// import {
//   FaGavel,
//   FaBalanceScale,
//   FaUserSecret,
//   FaBullseye,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function WhyChooseUs() {

//   const trustCards = [
//     {
//       title: "Proven Legal Expertise",
//       description: "Decades of experience across multiple legal domains.",
//       icon: <FaGavel size={22} />,
//     },
//     {
//       title: "Ethical Practice",
//       description: "Committed to honesty, integrity, and professional ethics.",
//       icon: <FaBalanceScale size={22} />,
//     },
//     {
//       title: "Client Confidentiality",
//       description: "All matters handled with utmost privacy and discretion.",
//       icon: <FaUserSecret size={22} />,
//     },
//     {
//       title: "Result-Oriented Approach",
//       description: "Focused on delivering practical and favorable outcomes.",
//       icon: <FaBullseye size={22} />,
//     },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="py-20 px-6 bg-white">

//       {/* Section Title */}
//       <div className="text-center mb-14">
//         <h2 className="text-3xl md:text-4xl font-sans font-semibold text-[#111111]">

//           Why Clients Trust Us
//         </h2>
//         <div className="w-24 h-[2px] bg-[#C9A24D] mx-auto mt-4"></div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

//         {trustCards.map((card, index) => (

//           <motion.div
//             key={index}
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ delay: index * 0.1 }}
//             whileHover={{ y: -6 }}
//             className="
//               bg-white
//               border
//               border-gray-200
//               rounded-md
//               p-8
//               text-center
//               hover:shadow-md
//               transition-all
//               duration-300
//             "
//           >

//             {/* Icon */}
//             <div className="
//               w-12
//               h-12
//               mx-auto
//               mb-4
//               flex
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-[#C9A24D]
//               text-[#C9A24D]
//             ">
//               {card.icon}
//             </div>

//             {/* Title */}
//             <h3 className="text-lg font-semibold text-[#111111] mb-2">
//               {card.title}
//             </h3>

//             {/* One-line Description */}
//             <p className="text-gray-600 text-sm leading-relaxed">
//               {card.description}
//             </p>

//           </motion.div>

//         ))}

//       </div>

//     </section>
//   );
// }


// "use client";

// import {
//   FaGavel,
//   FaBalanceScale,
//   FaUserSecret,
//   FaBullseye,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function WhyChooseUs() {

//   const trustCards = [
//     {
//       title: "Proven Legal Expertise",
//       description: "Decades of experience across multiple legal domains.",
//       icon: <FaGavel size={22} />,
//     },
//     {
//       title: "Ethical Practice",
//       description: "Committed to honesty, integrity, and professional ethics.",
//       icon: <FaBalanceScale size={22} />,
//     },
//     {
//       title: "Client Confidentiality",
//       description: "All matters handled with utmost privacy and discretion.",
//       icon: <FaUserSecret size={22} />,
//     },
//     {
//       title: "Result-Oriented Approach",
//       description: "Focused on delivering practical and favorable outcomes.",
//       icon: <FaBullseye size={22} />,
//     },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (

//     <section className="py-16 md:py-20 lg:py-24 bg-[#F4F4F4] ">

//       {/* SAME CONTAINER AS OTHER SECTIONS */}
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">

//         {/* SECTION HEADING */}
//         <div className="text-center mb-14">

//     <h2 className="
//   text-3xl sm:text-4xl lg:text-5xl
//   font-semibold
//   text-[#111111]
//   leading-tight
// ">
//   Why Clients Trust Us
// </h2>



//           <div className="w-20 h-[2px] bg-[#C9A24D] mx-auto mt-5"></div>

//         </div>

//         {/* CARDS */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {trustCards.map((card, index) => (

//             <motion.div
//               key={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -6 }}
//               className="
//                 bg-white
//                 border border-gray-200
//                 rounded-lg
//                 p-8
//                 text-center
//                 transition-all duration-300
//                 hover:shadow-md
//                 hover:border-[#C9A24D]
//               "
//             >

//               <div className="
//                 w-14 h-14
//                 mx-auto mb-6
//                 flex items-center justify-center
//                 rounded-full
//                 border border-[#C9A24D]
//                 text-[#C9A24D]
//               ">
//                 {card.icon}
//               </div>

//               <h3 className="text-lg font-semibold text-[#111111] mb-3">
//                 {card.title}
//               </h3>

//               <p className="text-gray-600 text-base leading-relaxed">
//                 {card.description}
//               </p>

//             </motion.div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }


// "use client";

// import {
//   FaGavel,
//   FaBalanceScale,
//   FaUserSecret,
//   FaBullseye,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function WhyChooseUs() {

//   const trustCards = [
//     {
//       title: "Proven Legal Expertise",
//       description: "Decades of experience across multiple legal domains.",
//       icon: <FaGavel size={22} />,
//     },
//     {
//       title: "Ethical Practice",
//       description: "Committed to honesty, integrity, and professional ethics.",
//       icon: <FaBalanceScale size={22} />,
//     },
//     {
//       title: "Client Confidentiality",
//       description: "All matters handled with utmost privacy and discretion.",
//       icon: <FaUserSecret size={22} />,
//     },
//     {
//       title: "Result-Oriented Approach",
//       description: "Focused on delivering practical and favorable outcomes.",
//       icon: <FaBullseye size={22} />,
//     },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 },
//     },
//   };

//   return (

//     /* SECTION BACKGROUND = WHITE (previous card color) */
//     <section className="py-16 md:py-20 lg:py-24 bg-white">

//       <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">

//         {/* HEADING */}
//         <div className="text-center mb-14">

//           <h2 className="
//             text-3xl sm:text-4xl lg:text-5xl
//             font-semibold
//             text-[#111111]
//             leading-tight
//           ">
//             Why Clients Trust Us
//           </h2>

//           <div className="w-20 h-[2px] bg-[#C9A24D] mx-auto mt-5"></div>

//         </div>


//         {/* CARDS */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

//           {trustCards.map((card, index) => (

//             <motion.div
//               key={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               whileHover={{ y: -6 }}
//               className="
//                 bg-[#F4F4F4]   /* swapped */
//                 border border-transparent
//                 rounded-lg
//                 p-8
//                 text-center
//                 transition-all duration-300
//                 hover:bg-white
//                 hover:shadow-lg
//                 hover:border-[#C9A24D]
//               "
//             >

//               {/* ICON */}
//               <div className="
//                 w-14 h-14
//                 mx-auto mb-6
//                 flex items-center justify-center
//                 rounded-full
//                 border border-[#C9A24D]
//                 text-[#C9A24D]
//                 bg-white
//               ">
//                 {card.icon}
//               </div>


//               {/* TITLE */}
//               <h3 className="text-lg font-semibold text-[#111111] mb-3">
//                 {card.title}
//               </h3>


//               {/* DESCRIPTION */}
//               <p className="text-gray-600 text-base leading-relaxed">
//                 {card.description}
//               </p>

//             </motion.div>

//           ))}

//         </div>

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
  FaBuilding,
  FaGlobe,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseUs() {

  const trustCards = [
    {
      title: "Extensive Legal Experience",
      description:
        "Years of professional experience handling complex legal matters across multiple practice areas.",
      icon: <FaGavel size={22} />,
    },
    {
      title: "Complete Confidentiality",
      description:
        "All legal matters are handled with strict confidentiality and professional discretion.",
      icon: <FaUserSecret size={22} />,
    },
    {
      title: "Personalized Legal Strategy",
      description:
        "Every client receives a tailored legal strategy focused on achieving the best possible outcome.",
      icon: <FaBullseye size={22} />,
    },
    {
      title: "Transparent Legal Process",
      description:
        "We maintain clear communication, honest advice, and full transparency at every stage.",
      icon: <FaBalanceScale size={22} />,
    },
    {
      title: "Corporate & Individual Expertise",
      description:
        "Providing legal services to individuals, startups, businesses, and corporate clients.",
      icon: <FaBuilding size={22} />,
    },
    {
      title: "Trusted by Clients in India & Abroad",
      description:
        "Serving clients across India and internationally with professionalism and trust.",
      icon: <FaGlobe size={22} />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    }),
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">

        {/* HEADING */}
        <div className="text-center mb-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111111]">
            Why Choose S Jain & Attorneys
          </h2>

          <div className="w-20 h-[2px] bg-[#C9A24D] mx-auto mt-5 mb-5"></div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted legal representation with a commitment to confidentiality,
            strategic expertise, and client-focused solutions.
          </p>

        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {trustCards.map((card, index) => (

            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                bg-[#F4F4F4]
                rounded-lg
                p-8
                text-center
                transition-all duration-300
                hover:bg-white
                hover:shadow-xl
                hover:border hover:border-[#C9A24D]
              "
            >

              {/* ICON */}
              <div className="
                w-14 h-14
                mx-auto mb-6
                flex items-center justify-center
                rounded-full
                border border-[#C9A24D]
                text-[#C9A24D]
                bg-white
              ">
                {card.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold text-[#111111] mb-3">
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}