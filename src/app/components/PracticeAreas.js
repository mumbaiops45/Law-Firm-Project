// // "use client";

// // import { 
// //   FaBuilding, FaGavel, FaShieldAlt, FaUsers, FaHome, 
// //   FaFileContract, FaGlobe, FaMoneyCheck, FaBalanceScale, 
// //   FaUserFriends, FaHandshake, FaPassport 
// // } from "react-icons/fa";
// // import { motion } from "framer-motion";

// // export default function PracticeAreas() {
// //   const services = [
// //     { name: "Corporate & Commercial Law", icon: <FaBuilding size={28} className="text-[#C9A24D]" /> },
// //     { name: "Civil Litigation", icon: <FaGavel size={28} className="text-[#C9A24D]" /> },
// //     { name: "Criminal Defense & Prosecution", icon: <FaShieldAlt size={28} className="text-[#C9A24D]" /> },
// //     { name: "Family & Divorce Law", icon: <FaUsers size={28} className="text-[#C9A24D]" /> },
// //     { name: "Property & Real Estate Law", icon: <FaHome size={28} className="text-[#C9A24D]" /> },
// //     { name: "Legal Advisory & Regulatory Compliance", icon: <FaFileContract size={28} className="text-[#C9A24D]" /> },
// //     { name: "NRI Legal Services", icon: <FaGlobe size={28} className="text-[#C9A24D]" /> },
// //     { name: "Cheque Bounce & Negotiable Instruments Cases", icon: <FaMoneyCheck size={28} className="text-[#C9A24D]" /> },
// //     { name: "High Court & Supreme Court Practice", icon: <FaBalanceScale size={28} className="text-[#C9A24D]" /> },
// //     { name: "Consumer Protection Law", icon: <FaUserFriends size={28} className="text-[#C9A24D]" /> },
// //     { name: "Mediation, Counselling & ADR", icon: <FaHandshake size={28} className="text-[#C9A24D]" /> },
// //     { name: "International Private Law", icon: <FaPassport size={28} className="text-[#C9A24D]" /> },
// //   ];

// //   // Card entrance animation
// //   const cardVariants = {
// //     hidden: { opacity: 0, y: 20, scale: 0.95 },
// //     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
// //   };

// //   return (
// //     <section className="py-20 px-6 bg-[#F5F5F5] text-center mt-7">
// //       {/* Section Title */}
// //       <h2 className="text-3xl font-serif font-semibold text-[#111111] mb-2">
// //         Our Practice Areas
// //       </h2>
// //       <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto mb-12"></div>

// //       {/* Grid layout */}
// //       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //         {services.map((service, index) => (
// //           <motion.div
// //             key={index}
// //             className="p-6 bg-white border border-[#C9A24D] rounded-md shadow-sm relative overflow-hidden cursor-pointer"
// //             variants={cardVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.2 }}
// //             transition={{ delay: index * 0.1 }}
// //             whileHover={{
// //               y: -10, // lift up
// //               boxShadow: "0 20px 40px rgba(0,0,0,0.15)", // larger shadow
// //               transition: { duration: 0.3, ease: "easeOut" },
// //             }}
// //           >
// //             {/* Animated Border Glow */}
// //             <motion.div
// //               className="absolute inset-0 rounded-md border border-[#C9A24D] opacity-0 pointer-events-none"
// //               whileHover={{ opacity: 1 }}
// //               transition={{ duration: 0.3 }}
// //             ></motion.div>

// //             {/* Icon with hover animation */}
// //             <motion.div
// //               className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full border border-[#C9A24D]"
// //               whileHover={{ scale: 1.2, rotate: 10 }}
// //               transition={{ duration: 0.3 }}
// //             >
// //               {service.icon}
// //             </motion.div>

// //             {/* Title */}
// //             <h3 className="text-xl font-semibold text-[#111111] mb-2">{service.name}</h3>

// //             {/* One-line description */}
// //             <p className="text-gray-700 text-sm mb-4 truncate">
// //               Expert legal guidance tailored to your needs.
// //             </p>

// //             {/* Learn more link */}
// //             <a href="#" className="text-[#C9A24D] font-medium hover:underline">
// //               Learn More
// //             </a>
// //           </motion.div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }


// // "use client";

// // import {
// //   FaBuilding,
// //   FaGavel,
// //   FaShieldAlt,
// //   FaUsers,
// //   FaHome,
// //   FaFileContract,
// // } from "react-icons/fa";

// // import { motion } from "framer-motion";

// // export default function PracticeAreas() {

// //   const services = [
// //     {
// //       name: "Corporate & Commercial Law",
// //       description: "Legal solutions for businesses and corporate entities.",
// //       icon: <FaBuilding size={26} />,
// //     },
// //     {
// //       name: "Civil Litigation",
// //       description: "Representation in civil disputes and legal proceedings.",
// //       icon: <FaGavel size={26} />,
// //     },
// //     {
// //       name: "Criminal Defense",
// //       description: "Strong defense and legal protection in criminal cases.",
// //       icon: <FaShieldAlt size={26} />,
// //     },
// //     {
// //       name: "Family & Divorce Law",
// //       description: "Professional handling of family and matrimonial matters.",
// //       icon: <FaUsers size={26} />,
// //     },
// //     {
// //       name: "Property & Real Estate",
// //       description: "Legal assistance in property and real estate matters.",
// //       icon: <FaHome size={26} />,
// //     },
// //     {
// //       name: "Legal Advisory",
// //       description: "Reliable advisory and regulatory legal services.",
// //       icon: <FaFileContract size={26} />,
// //     },
// //   ];

// //   /* Container animation */
// //   const container = {
// //     hidden: {},
// //     visible: {
// //       transition: {
// //         staggerChildren: 0.15,
// //       },
// //     },
// //   };

// //   /* Card animation */
// //   const card = {
// //     hidden: {
// //       opacity: 0,
// //       y: 40,
// //     },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //         ease: "easeOut",
// //       },
// //     },
// //   };

// //   return (

// //     // <section className="bg-[#F4F4F4] py-20 px-6 mt-9">
// //     <section
// //   className="
// //     bg-[#F4F4F4]
// //     mt-9
// //     py-16 sm:py-20 md:py-24 lg:py-28
// //     px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
// //   "
// // >


// //       {/* Section Title */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         whileInView={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.6 }}
// //         viewport={{ once: true }}
// //         className="text-center mb-16"
// //       >

// //         <h2 className="text-3xl md:text-4xl font-sans font-semibold text-[#111111]">
// //           Our Practice Areas
// //         </h2>

// //         {/* Gold divider */}
// //         <div className="w-20 h-[2px] bg-[#C9A24D] mx-auto mt-4"></div>

// //       </motion.div>


// //       {/* Grid */}
// //       <motion.div
// //         variants={container}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true }}
// //         className="
// //           max-w-6xl
// //           mx-auto
// //           grid
// //           grid-cols-1
// //           sm:grid-cols-2
// //           md:grid-cols-3
// //           gap-8
// //         "
// //       >

// //         {services.map((service, index) => (

// //           <motion.div
// //             key={index}
// //             variants={card}

// //             whileHover={{
// //               y: -10,
// //               scale: 1.03,
// //             }}

// //             className="
// //               bg-white
// //               border
// //               border-gray-200
// //               rounded-md
// //               p-10
// //               text-center
// //               hover:border-[#C9A24D]
// //               hover:shadow-lg
// //               transition-all
// //               duration-300
// //               cursor-pointer
// //               group
// //             "
// //           >

// //             {/* Icon */}
// //             <div className="flex justify-center mb-6">

// //               <div className="
// //                 w-14
// //                 h-14
// //                 flex
// //                 items-center
// //                 justify-center
// //                 border
// //                 border-[#C9A24D]
// //                 rounded-full
// //                 text-[#C9A24D]
// //                 group-hover:bg-[#C9A24D]
// //                 group-hover:text-white
// //                 transition-all
// //                 duration-300
// //               ">
// //                 {service.icon}
// //               </div>

// //             </div>


// //             {/* Title */}
// //             <h3 className="
// //               text-xl
// //               font-sans
// //               font-semibold
// //               text-[#111111]
// //               mb-3
// //               group-hover:text-[#C9A24D]
// //               transition-colors
// //               duration-300
// //             ">
// //               {service.name}
// //             </h3>


// //             {/* Description */}
// //             <p className="
// //               text-gray-600
// //               text-sm
// //               leading-relaxed
// //               mb-4
// //               max-w-[260px]
// //               mx-auto
// //             ">
// //               {service.description}
// //             </p>


// //             {/* Learn More */}
// //             <span className="
// //               text-[#C9A24D]
// //               text-sm
// //               font-medium
// //               hover:underline
// //               transition
// //             ">
// //               Learn More →
// //             </span>

// //           </motion.div>

// //         ))}

// //       </motion.div>

// //     </section>

// //   );

// // }



// // "use client";

// // import {
// //   FaBuilding,
// //   FaGavel,
// //   FaShieldAlt,
// //   FaUsers,
// //   FaHome,
// //   FaFileContract,
// // } from "react-icons/fa";

// // import { motion } from "framer-motion";

// // export default function PracticeAreas() {

// //   /* ================= SERVICES ================= */

// //   const services = [
// //     {
// //       name: "Corporate & Commercial Law",
// //       description: "Legal solutions for businesses and corporate entities.",
// //       icon: <FaBuilding size={26} />,
// //     },
// //     {
// //       name: "Civil Litigation",
// //       description: "Representation in civil disputes and legal proceedings.",
// //       icon: <FaGavel size={26} />,
// //     },
// //     {
// //       name: "Criminal Defense",
// //       description: "Strong defense and legal protection in criminal cases.",
// //       icon: <FaShieldAlt size={26} />,
// //     },
// //     {
// //       name: "Family & Divorce Law",
// //       description: "Professional handling of family and matrimonial matters.",
// //       icon: <FaUsers size={26} />,
// //     },
// //     {
// //       name: "Property & Real Estate",
// //       description: "Legal assistance in property and real estate matters.",
// //       icon: <FaHome size={26} />,
// //     },
// //     {
// //       name: "Legal Advisory",
// //       description: "Reliable advisory and regulatory legal services.",
// //       icon: <FaFileContract size={26} />,
// //     },
// //   ];


// //   /* ================= ANIMATION ================= */

// //   const container = {
// //     hidden: {},
// //     visible: {
// //       transition: {
// //         staggerChildren: 0.15,
// //       },
// //     },
// //   };

// //   const card = {
// //     hidden: {
// //       opacity: 0,
// //       y: 40,
// //     },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.6,
// //         ease: "easeOut",
// //       },
// //     },
// //   };


// //   /* ================= COMPONENT ================= */

// //   return (

// //     <section className="bg-[#F4F4F4] py-24 px-6">

// //       {/* CONTAINER */}
// //       <div className="max-w-7xl mx-auto">


// //         {/* ================= HEADING ================= */}

// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.7 }}
// //           viewport={{ once: true }}
// //           className="text-center mb-20"
// //         >

// //           <h2 className="
// //             text-4xl
// //             md:text-5xl
// //             font-semibold
// //             text-[#111111]
// //           ">
// //             Our Practice Areas
// //           </h2>

// //           <div className="w-20 h-[3px] bg-[#C9A24D] mx-auto mt-6"></div>

// //         </motion.div>



// //         {/* ================= GRID ================= */}

// //         <motion.div
// //           variants={container}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="
// //             grid
// //             grid-cols-1
// //             sm:grid-cols-2
// //             md:grid-cols-3
// //             gap-10
// //           "
// //         >

// //           {services.map((service, index) => (

// //             <motion.div
// //               key={index}
// //               variants={card}

// //               whileHover={{
// //                 y: -10,
// //                 scale: 1.03,
// //               }}

// //               className="
// //                 bg-white
// //                 border border-gray-200
// //                 rounded-lg
// //                 p-10
// //                 text-center
// //                 hover:border-[#C9A24D]
// //                 hover:shadow-xl
// //                 transition-all duration-300
// //                 cursor-pointer
// //                 group
// //               "
// //             >


// //               {/* ICON */}

// //               <div className="flex justify-center mb-6">

// //                 <div className="
// //                   w-14 h-14
// //                   flex items-center justify-center
// //                   border border-[#C9A24D]
// //                   rounded-full
// //                   text-[#C9A24D]
// //                   group-hover:bg-[#C9A24D]
// //                   group-hover:text-white
// //                   transition-all duration-300
// //                 ">
// //                   {service.icon}
// //                 </div>

// //               </div>



// //               {/* TITLE */}

// //               <h3 className="
// //                 text-xl
// //                 font-semibold
// //                 text-[#111111]
// //                 mb-3
// //                 group-hover:text-[#C9A24D]
// //                 transition-colors duration-300
// //               ">
// //                 {service.name}
// //               </h3>



// //               {/* DESCRIPTION */}

// //               <p className="
// //                 text-gray-600
// //                 text-base
// //                 leading-relaxed
// //                 mb-4
// //                 max-w-[260px]
// //                 mx-auto
// //               ">
// //                 {service.description}
// //               </p>



// //               {/* LINK */}

// //               <span className="
// //                 text-[#C9A24D]
// //                 text-sm
// //                 font-medium
// //                 hover:underline
// //                 transition
// //               ">
// //                 Learn More →
// //               </span>


// //             </motion.div>

// //           ))}

// //         </motion.div>


// //       </div>

// //     </section>

// //   );

// // }


// "use client";

// import Link from "next/link";

// import {
//   FaBuilding,
//   FaGavel,
//   FaShieldAlt,
//   FaUsers,
//   FaHome,
//   FaFileContract,
// } from "react-icons/fa";

// import { motion } from "framer-motion";

// export default function PracticeAreas() {

//   /* ================= SERVICES ================= */

//   const services = [
//     {
//       name: "Corporate & Commercial Law",
//       description: "Legal solutions for businesses and corporate entities.",
//       icon: <FaBuilding size={26} />,
//       link: "/services/corporate-law",
//     },
//     {
//       name: "Civil Litigation",
//       description: "Representation in civil disputes and legal proceedings.",
//       icon: <FaGavel size={26} />,
//       link: "/services/civil-litigation",
//     },
//     {
//       name: "Criminal Defense",
//       description: "Strong defense and legal protection in criminal cases.",
//       icon: <FaShieldAlt size={26} />,
//       link: "/services/criminal-defense",
//     },
//     {
//       name: "Family & Divorce Law",
//       description: "Professional handling of family and matrimonial matters.",
//       icon: <FaUsers size={26} />,
//       link: "/services/family-divorce-law",
//     },
//     {
//       name: "Property & Real Estate",
//       description: "Legal assistance in property and real estate matters.",
//       icon: <FaHome size={26} />,
//       link: "/services/property-real-estate-law",
//     },
//     {
//       name: "Legal Advisory",
//       description: "Reliable advisory and regulatory legal services.",
//       icon: <FaFileContract size={26} />,
//       link: "/services/legal-advisory-regulatory-compliance",
//     },
//   ];


//   /* ================= ANIMATION ================= */

//   const container = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const card = {
//     hidden: {
//       opacity: 0,
//       y: 40,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     },
//   };


//   /* ================= COMPONENT ================= */

//   return (

//     <section className="bg-[#F4F4F4] py-24 px-6">

//       <div className="max-w-7xl mx-auto">

//         {/* HEADING */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >

//           <h2 className="text-4xl md:text-5xl font-semibold text-[#111111]">
//             Our Practice Areas
//           </h2>

//           <div className="w-20 h-[3px] bg-[#C9A24D] mx-auto mt-6"></div>

//         </motion.div>


//         {/* GRID */}

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
//         >

//           {services.map((service, index) => (

//             <Link href={service.link} key={index}>

//               <motion.div
//                 variants={card}
//                 whileHover={{
//                   y: -10,
//                   scale: 1.03,
//                 }}
//                 className="
//                   bg-white
//                   border border-gray-200
//                   rounded-lg
//                   p-10
//                   text-center
//                   hover:border-[#C9A24D]
//                   hover:shadow-xl
//                   transition-all duration-300
//                   cursor-pointer
//                   group
//                   h-full
//                 "
//               >

//                 {/* ICON */}

//                 <div className="flex justify-center mb-6">

//                   <div className="
//                     w-14 h-14
//                     flex items-center justify-center
//                     border border-[#C9A24D]
//                     rounded-full
//                     text-[#C9A24D]
//                     group-hover:bg-[#C9A24D]
//                     group-hover:text-white
//                     transition-all duration-300
//                   ">
//                     {service.icon}
//                   </div>

//                 </div>


//                 {/* TITLE */}

//                 <h3 className="
//                   text-xl
//                   font-semibold
//                   text-[#111111]
//                   mb-3
//                   group-hover:text-[#C9A24D]
//                   transition-colors duration-300
//                 ">
//                   {service.name}
//                 </h3>


//                 {/* DESCRIPTION */}

//                 <p className="
//                   text-gray-600
//                   text-base
//                   leading-relaxed
//                   mb-4
//                   max-w-[260px]
//                   mx-auto
//                 ">
//                   {service.description}
//                 </p>


//                 {/* LEARN MORE */}

//                 <span className="
//                   text-[#C9A24D]
//                   text-sm
//                   font-medium
//                   group-hover:underline
//                 ">
//                   Learn More →
//                 </span>

//               </motion.div>

//             </Link>

//           ))}

//         </motion.div>

//       </div>

//     </section>

//   );

// }

// "use client";

// import Link from "next/link";

// import {
//   FaBuilding,
//   FaGavel,
//   FaUsers,
//   FaHome,
//   FaShieldAlt,
//   FaBriefcase,
// } from "react-icons/fa";

// import { motion } from "framer-motion";

// export default function PracticeAreas() {

//   /* ================= SERVICES (CLIENT REQUIRED ORDER) ================= */

//   const services = [
//     {
//       name: "Corporate & Commercial Law",
//       description:
//         "Strategic legal advisory, contracts, compliance, and dispute resolution for startups, businesses, and multinational companies.",
//       icon: <FaBuilding size={26} />,
//       link: "/services/corporate-law",
//     },
//     {
//       name: "Civil Litigation",
//       description:
//         "Expert representation in civil disputes, recovery suits, injunction matters, and complex litigation before courts.",
//       icon: <FaGavel size={26} />,
//       link: "/services/civil-litigation",
//     },
//     {
//       name: "Family & Divorce Law",
//       description:
//         "Confidential legal support in divorce, child custody, alimony, and matrimonial dispute resolution.",
//       icon: <FaUsers size={26} />,
//       link: "/services/family-divorce-law",
//     },
//     {
//       name: "Property & Real Estate Law",
//       description:
//         "Legal assistance in property transactions, disputes, title verification, due diligence, and documentation.",
//       icon: <FaHome size={26} />,
//       link: "/services/property-real-estate-law",
//     },
//     {
//       name: "Criminal Defense",
//       description:
//         "Strong legal defense in criminal cases including bail, trial representation, and criminal litigation.",
//       icon: <FaShieldAlt size={26} />,
//       link: "/services/criminal-defense",
//     },
//     {
//       name: "Employment & Labour Law",
//       description:
//         "Advisory and representation in employment disputes, workplace compliance, wrongful termination, and labour matters.",
//       icon: <FaBriefcase size={26} />,
//       link: "/services/employment-labour-law",
//     },
//   ];


//   /* ================= ANIMATION ================= */

//   const container = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.15,
//       },
//     },
//   };

//   const card = {
//     hidden: {
//       opacity: 0,
//       y: 40,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//       },
//     },
//   };


//   /* ================= COMPONENT ================= */

//   return (

//     <section className="bg-[#F4F4F4] py-24 px-6">

//       <div className="max-w-7xl mx-auto">


//         {/* HEADING */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >

//           <h2 className="text-4xl md:text-5xl font-semibold text-[#111111]">
//             Legal Services We Offer in Bangalore
//           </h2>

//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Comprehensive legal representation across corporate, civil, criminal, family, and property matters with complete confidentiality.
//           </p>

//           <div className="w-20 h-[3px] bg-[#C9A24D] mx-auto mt-6"></div>

//         </motion.div>


//         {/* GRID */}

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
//         >

//           {services.map((service, index) => (

//             <Link href={service.link} key={index}>

//               <motion.div
//                 variants={card}
//                 whileHover={{ y: -10, scale: 1.03 }}
//                 className="
//                   bg-white
//                   border border-gray-200
//                   rounded-lg
//                   p-10
//                   text-center
//                   hover:border-[#C9A24D]
//                   hover:shadow-xl
//                   transition-all duration-300
//                   cursor-pointer
//                   group
//                   h-full
//                 "
//               >

//                 {/* ICON */}

//                 <div className="flex justify-center mb-6">

//                   <div className="
//                     w-14 h-14
//                     flex items-center justify-center
//                     border border-[#C9A24D]
//                     rounded-full
//                     text-[#C9A24D]
//                     group-hover:bg-[#C9A24D]
//                     group-hover:text-white
//                     transition-all duration-300
//                   ">
//                     {service.icon}
//                   </div>

//                 </div>


//                 {/* TITLE */}

//                 <h3 className="
//                   text-xl
//                   font-semibold
//                   text-[#111111]
//                   mb-3
//                   group-hover:text-[#C9A24D]
//                 ">
//                   {service.name}
//                 </h3>


//                 {/* DESCRIPTION */}

//                 <p className="
//                   text-gray-600
//                   text-base
//                   leading-relaxed
//                   mb-4
//                 ">
//                   {service.description}
//                 </p>


//                 {/* LEARN MORE */}

//                 <span className="
//                   text-[#C9A24D]
//                   text-sm
//                   font-medium
//                   group-hover:underline
//                 ">
//                   Learn More →
//                 </span>

//               </motion.div>

//             </Link>

//           ))}

//         </motion.div>

//       </div>

//     </section>

//   );

// }



"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaGavel,
  FaUsers,
  FaHome,
  FaShieldAlt,
  FaBriefcase,
} from "react-icons/fa";

/* ================= SEO META ================= */

export const metadata = {
  title: "Comprehensive Legal Services in Bangalore | S Jain & Attorneys",
  description:
    "Comprehensive legal services in Bangalore for corporate, civil, criminal, family and property matters. Get strategic legal guidance and book a confidential consultation today.",
};

/* ================= COMPONENT ================= */

export default function LegalServicesPage() {
  const services = [
    {
      name: "Corporate & Commercial Law",
      description:
        "Strategic legal advisory, contracts, compliance, due diligence, and dispute resolution for startups, corporates, and multinational businesses.",
      icon: <FaBuilding size={26} />,
      link: "/corporate-commercial-law-firm",
    },
    {
      name: "Civil Litigation",
      description:
        "Expert representation in civil disputes, recovery suits, injunction matters, property conflicts, and complex litigation before courts.",
      icon: <FaGavel size={26} />,
      link: "/civil-lawyer-in-bangalore",
    },
    {
      name: "Family & Divorce Law",
      description:
        "Confidential legal assistance in divorce, child custody, alimony, matrimonial property and financial settlements.",
      icon: <FaUsers size={26} />,
      link: "/family-divorce-law",
    },
    {
      name: "Property & Real Estate Law",
      description:
        "Trusted legal support in property transactions, disputes, title verification, documentation, and real estate due diligence.",
      icon: <FaHome size={26} />,
      link: "/property-real-estate-law",
    },
    {
      name: "Criminal Defense",
      description:
        "Strong legal defense in criminal cases including bail applications, trial representation, white-collar crimes, and criminal litigation.",
      icon: <FaShieldAlt size={26} />,
      link: "/criminal-lawyer-in-bangalore",
    },
    {
      name: "Employment & Labour Law",
      description:
        "Advisory and representation in employment disputes, workplace compliance, wrongful termination, and labour law matters.",
      icon: <FaBriefcase size={26} />,
      link: "/employment-lawyer-in-bangalore",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-[#F4F4F4] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-semibold text-[#111111]">
            Comprehensive Legal Services in Bangalore
          </h1>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
            S Jain & Attorneys provides full-service legal representation across litigation, advisory, and regulatory matters. We represent individuals, startups, corporates, and NRIs with strategic precision and strict confidentiality.
          </p>

          <div className="w-20 h-[3px] bg-[#C9A24D] mx-auto mt-6"></div>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          {services.map((service, index) => (
            <Link href={service.link} key={index}>
              <motion.div
                variants={card}
                whileHover={{ y: -10, scale: 1.03 }}
                className="
                  bg-white
                  border border-gray-200
                  rounded-lg
                  p-10
                  text-center
                  hover:border-[#C9A24D]
                  hover:shadow-xl
                  transition-all duration-300
                  cursor-pointer
                  group
                  h-full
                "
              >
                {/* ICON */}
                <div className="flex justify-center mb-6">
                  <div
                    className="
                      w-14 h-14
                      flex items-center justify-center
                      border border-[#C9A24D]
                      rounded-full
                      text-[#C9A24D]
                      group-hover:bg-[#C9A24D]
                      group-hover:text-white
                      transition-all duration-300
                    "
                  >
                    {service.icon}
                  </div>
                </div>

                {/* TITLE */}
                <h2
                  className="
                    text-xl
                    font-semibold
                    text-[#111111]
                    mb-3
                    group-hover:text-[#C9A24D]
                  "
                >
                  {service.name}
                </h2>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-gray-600
                    text-base
                    leading-relaxed
                    mb-4
                  "
                >
                  {service.description}
                </p>

                {/* LEARN MORE */}
                <span
                  className="
                    text-[#C9A24D]
                    text-sm
                    font-medium
                    group-hover:underline
                  "
                >
                  Learn More →
                </span>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* ================= TRUST LINE ================= */}

        <div className="text-center mt-24">
          <p className="text-gray-700 text-lg font-medium">
            All matters handled with complete confidentiality and legal discretion.
          </p>
        </div>
      </div>
    </section>
  );
}