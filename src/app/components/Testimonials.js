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


"use client";

import { motion } from "framer-motion";

export default function Testimonials() {

  const testimonials = [
    {
      quote:
        "S Jain Attorneys guided us through a complex corporate matter with professionalism and clarity.",
      client: "Corporate Client",
      practice: "Corporate & Commercial Law",
    },
    {
      quote:
        "Their legal advice was precise, ethical, and focused on achieving the best possible outcome.",
      client: "Individual Client",
      practice: "Civil Litigation",
    },
    {
      quote:
        "We appreciated their transparent approach and commitment to protecting our interests.",
      client: "Business Client",
      practice: "Legal Advisory",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-[#111111]">

      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#F5F5F5]">
          Client Testimonials
        </h2>

        <div className="w-24 h-[2px] bg-[#C9A24D] mx-auto mt-4"></div>
      </div>


      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {testimonials.map((t, index) => (

          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -4 }}
            className="
              bg-[#1A1A1A]
              border
              border-gray-800
              rounded-md
              p-8
              text-center
              transition-all
              duration-300
              hover:border-[#C9A24D]
            "
          >

            {/* Quote */}
            <p className="
              text-gray-300
              italic
              leading-relaxed
              mb-6
              text-sm
            ">
              “{t.quote}”
            </p>


            {/* Client Name */}
            <h3 className="text-[#C9A24D] font-semibold text-base">
              {t.client}
            </h3>


            {/* Practice Area */}
            {t.practice && (
              <p className="text-gray-500 text-sm mt-1">
                {t.practice}
              </p>
            )}

          </motion.div>

        ))}

      </div>

    </section>
  );
}
