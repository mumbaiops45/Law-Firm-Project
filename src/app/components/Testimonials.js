// "use client";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       quote: "S Jain Attorneys guided us through a complex corporate merger with professionalism and expertise.",
//       client: "Rohit Sharma",
//       practice: "Corporate & Commercial Law",
//     },
//     {
//       quote: "Their team handled our civil litigation case efficiently, keeping us informed at every step.",
//       client: "Anita Verma",
//       practice: "Civil Litigation",
//     },
//     {
//       quote: "Highly ethical and result-oriented legal advice. Truly client-first in approach.",
//       client: "Vikram Singh",
//       practice: "Criminal Defense & Prosecution",
//     },
//   ];

//   return (
//     <section className="py-20 px-6 bg-white text-center">
//       {/* Section Title */}
//       <h2 className="text-3xl font-serif font-semibold text-[#0B1C2D] mb-2">
//         Client Testimonials
//       </h2>
//       <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto mb-12"></div>

//       {/* Testimonial Cards */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {testimonials.map((t, index) => (
//           <div
//             key={index}
//             className="p-6 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-lg transition"
//           >
//             {/* Quote */}
//             <p className="text-gray-700 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
            
//             {/* Client Name */}
//             <h3 className="text-lg font-semibold text-[#0B1C2D]">{t.client}</h3>
            
//             {/* Practice Area (optional) */}
//             {t.practice && (
//               <p className="text-gray-500 text-sm mt-1">{t.practice}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       quote: "S Jain Attorneys guided us through a complex corporate merger with professionalism and expertise.",
//       client: "Rohit Sharma",
//       practice: "Corporate & Commercial Law",
//       avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       quote: "Their team handled our civil litigation case efficiently, keeping us informed at every step.",
//       client: "Anita Verma",
//       practice: "Civil Litigation",
//       avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       quote: "Highly ethical and result-oriented legal advice. Truly client-first in approach.",
//       client: "Vikram Singh",
//       practice: "Criminal Defense & Prosecution",
//       avatar: "https://randomuser.me/api/portraits/men/56.jpg",
//     },
//   ];

//   return (
//     <section className="py-20 px-6 bg-white text-center">
//       {/* Section Title */}
//       <h2 className="text-3xl font-serif font-semibold text-[#0B1C2D] mb-2">
//         Client Testimonials
//       </h2>
//       <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto mb-12"></div>

//       {/* Testimonial Cards */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {testimonials.map((t, index) => (
//           <div
//             key={index}
//             className="p-6 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-lg transition flex flex-col items-center"
//           >
//             {/* Avatar */}
//             <div className="w-16 h-16 mb-4 relative">
//               <Image
//                 src={t.avatar}
//                 alt={t.client}
//                 fill
//                 className="rounded-full object-cover"
//               />
//             </div>

//             {/* Quote */}
//             <p className="text-gray-700 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
            
//             {/* Client Name */}
//             <h3 className="text-lg font-semibold text-[#0B1C2D]">{t.client}</h3>
            
//             {/* Practice Area */}
//             {t.practice && (
//               <p className="text-gray-500 text-sm mt-1">{t.practice}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       quote: "S Jain Attorneys guided us through a complex corporate merger with professionalism and expertise.",
//       client: "Rohit Sharma",
//       practice: "Corporate & Commercial Law",
//       avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//     },
//     {
//       quote: "Their team handled our civil litigation case efficiently, keeping us informed at every step.",
//       client: "Anita Verma",
//       practice: "Civil Litigation",
//       avatar: "https://randomuser.me/api/portraits/women/44.jpg",
//     },
//     {
//       quote: "Highly ethical and result-oriented legal advice. Truly client-first in approach.",
//       client: "Vikram Singh",
//       practice: "Criminal Defense & Prosecution",
//       avatar: "https://randomuser.me/api/portraits/men/56.jpg",
//     },
//   ];

//   // Motion variants
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
//     <section className="py-20 px-6 bg-[#111111] text-center text-white">
//       {/* Section Title */}
//       <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#F5F5F5] mb-2">
//         Client Testimonials
//       </h2>
//       <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto mb-12"></div>

//       {/* Testimonial Cards */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {testimonials.map((t, index) => (
//           <motion.div
//             key={index}
//             className="p-6 bg-[#0B1C2D] border border-[#C9A24D] rounded-md shadow-sm hover:shadow-lg flex flex-col items-center relative overflow-hidden"
//             variants={cardVariants}
//             initial="hidden"
//             whileInView="visible"
//             whileHover="hover"
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{ delay: index * 0.1 }}
//           >
//             {/* Hover border glow */}
//             <motion.div 
//               className="absolute inset-0 rounded-md border border-[#C9A24D] opacity-0 pointer-events-none"
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             ></motion.div>

//             {/* Avatar */}
//             <div className="w-16 h-16 mb-4 relative">
//               <Image
//                 src={t.avatar}
//                 alt={t.client}
//                 fill
//                 className="rounded-full object-cover"
//               />
//             </div>

//             {/* Quote */}
//             <p className="text-[#F5F5F5] italic mb-4">&ldquo;{t.quote}&rdquo;</p>

//             {/* Client Name */}
//             <h3 className="text-lg font-semibold text-[#C9A24D]">{t.client}</h3>

//             {/* Practice Area */}
//             {t.practice && (
//               <p className="text-gray-300 text-sm mt-1">{t.practice}</p>
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import { motion } from "framer-motion";

// export default function Testimonials() {

//   const testimonials = [
//     {
//       quote:
//         "S Jain Attorneys guided us through a complex corporate matter with professionalism and clarity.",
//       client: "Corporate Client",
//       practice: "Corporate & Commercial Law",
//     },
//     {
//       quote:
//         "Their legal advice was precise, ethical, and focused on achieving the best possible outcome.",
//       client: "Individual Client",
//       practice: "Civil Litigation",
//     },
//     {
//       quote:
//         "We appreciated their transparent approach and commitment to protecting our interests.",
//       client: "Business Client",
//       practice: "Legal Advisory",
//     },
//   ];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 25 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   // ===== GLOBAL SAME STYLES =====

//   const container =
//     "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28";

//   const sectionTitle =
//     "text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#111111] text-center";

//   const underline =
//     "w-24 h-[2px] bg-[#C9A24D] mx-auto mt-4 mb-14";


//   return (

//     <section className="bg-[#f4efef]">

//       <div className={container}>

//         {/* Section Title */}
//         <div className="text-center">
//           <h2 className={sectionTitle}>
//             Client Testimonials
//           </h2>
//           <div className={underline}></div>
//         </div>


//         {/* Testimonials Grid */}
//         <div className="grid md:grid-cols-3 gap-8">

//           {testimonials.map((t, index) => (

//             <motion.div
//               key={index}
//               variants={cardVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//               whileHover={{ y: -4 }}
//               className="
//                 bg-[#1A1A1A]
//                 border border-gray-800
//                 rounded-md
//                 p-6
//                 text-center
//                 transition-all duration-300
//                 hover:border-[#C9A24D]
//                 hover:shadow-md
//               "
//             >

//               {/* Quote */}
//               <p className="
//                 text-gray-300
//                 italic
//                 leading-relaxed
//                 mb-6
//                 text-base
//               ">
//                 “{t.quote}”
//               </p>

//               {/* Client Name */}
//               <h3 className="text-[#C9A24D] font-semibold text-base">
//                 {t.client}
//               </h3>

//               {/* Practice Area */}
//               {t.practice && (
//                 <p className="text-gray-500 text-sm mt-1">
//                   {t.practice}
//                 </p>
//               )}

//             </motion.div>

//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {

  const testimonials = [
    {
      quote:
        "S Jain Attorneys provided exceptional legal guidance for our corporate restructuring. Their professionalism and clarity were outstanding.",
      client: "Corporate Client",
      practice: "Corporate & Commercial Law",
      initial: "C",
    },
    {
      quote:
        "Their litigation expertise and strategic approach helped resolve our dispute efficiently and successfully.",
      client: "Individual Client",
      practice: "Civil Litigation",
      initial: "I",
    },
    {
      quote:
        "Highly professional, confidential, and responsive. We trust them for all our legal advisory needs.",
      client: "Business Client",
      practice: "Legal Advisory",
      initial: "B",
    },
    {
      quote:
        "Their legal team demonstrated deep expertise and provided practical solutions tailored to our situation.",
      client: "Private Client",
      practice: "Property Law",
      initial: "P",
    },
    {
      quote:
        "Transparent communication, ethical practice, and excellent legal representation throughout our case.",
      client: "Startup Client",
      practice: "Corporate Law",
      initial: "S",
    },
    {
      quote:
        "We highly recommend S Jain Attorneys for their professionalism, dedication, and legal excellence.",
      client: "International Client",
      practice: "Legal Advisory",
      initial: "I",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (

    <section className="bg-[#F4F4F4] py-16 sm:py-20 lg:py-24">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#111111]">
            Client Testimonials
          </h2>

          <div className="w-24 h-[2px] bg-[#C9A24D] mx-auto mt-5 mb-5"></div>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by individuals, businesses, and corporate clients for reliable legal representation.
          </p>

        </div>


        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >

          {testimonials.map((t, index) => (

            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="
                bg-white
                rounded-lg
                p-8
                shadow-sm
                border border-gray-200
                transition-all duration-300
                hover:shadow-xl
                hover:border-[#C9A24D]
              "
            >

              {/* Quote Icon */}
              <FaQuoteLeft className="text-[#C9A24D] text-xl mb-4" />


              {/* Quote */}
              <p className="text-gray-600 italic leading-relaxed mb-6">
                “{t.quote}”
              </p>


              {/* Client Info */}
              <div className="flex items-center gap-4">

                {/* Initial Circle */}
                <div className="
                  w-12 h-12
                  rounded-full
                  bg-[#C9A24D]
                  text-white
                  flex items-center justify-center
                  font-semibold
                ">
                  {t.initial}
                </div>

                <div>

                  <h4 className="font-semibold text-[#111111]">
                    {t.client}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {t.practice}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>

  );
}