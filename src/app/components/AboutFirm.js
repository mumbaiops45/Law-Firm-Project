// "use client";

// import Image from "next/image";
// import laws2 from "../../../public/laws2.jpg";
// import { motion } from "framer-motion";

// export default function AboutFirm() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     <section className="py-20 px-6 bg-[#111111] text-white">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//         {/* Left: Text */}
//         <motion.div
//           className="space-y-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#C9A24D] mb-4">
//             About S Jain Attorneys
//           </h2>

//           <p className="text-gray-300 text-lg">
//             With years of experience, S Jain Attorneys provides professional legal guidance tailored to individuals and businesses across India.
//           </p>
//           <p className="text-gray-300 text-lg">
//             Our firm is committed to an ethical and client-first approach, ensuring confidentiality and transparency in every legal matter we handle.
//           </p>
//           <p className="text-gray-300 text-lg">
//             We focus exclusively on India-centric legal practices, offering practical solutions and strategic advice to meet your legal needs.
//           </p>

//           {/* Bullet highlights */}
//           <ul className="list-disc list-inside text-[#C9A24D] space-y-2 text-lg">
//             <li>Experienced legal professionals</li>
//             <li>Confidential & transparent handling</li>
//             <li>Practical legal solutions</li>
//           </ul>
//         </motion.div>

//         {/* Right: Image */}
//         <motion.div
//           className="w-full h-100 md:h-125 relative rounded-none overflow-hidden shadow-lg"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
//           viewport={{ once: true, amount: 0.2 }}
//           whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
//         >
//           <Image
//             src={laws2}
//             alt="Founder Image"
//             fill
//             className="object-cover"
//             style={{ borderRadius: 0 }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import laws2 from "../../../public/laws2.jpg";
// import founder1 from "../../../public/founder1.jpg"
// import { motion } from "framer-motion";

// export default function AboutFirm() {

//   /* Animation */
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (

//     // <section className="py-20 px-6 bg-[#111111] text-white ">
//     <section className="py-24 md:py-28 bg-[#111111] text-white">


//       {/* <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center "> */}
//       <div className="
//   relative z-20 max-w-7xl mx-auto w-full
//   px-6 md:px-12 lg:px-16

//   grid grid-cols-1 md:grid-cols-2 gap-12 items-center
// ">


//         {/* LEFT — TEXT */}
//         <motion.div
//           className="space-y-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeInUp}
//         >

//           {/* Heading */}
//           <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#C9A24D]">
//             About S Jain Attorneys
//           </h2>
// <div className="w-20 h-[2px] bg-[#C9A24D] mt-4"></div>


//           {/* Paragraph 1 */}
//           <p className="text-gray-300
// text-base md:text-lg
// leading-relaxed
// tracking-wide
// ">
//           {/* "text-gray-300 text-lg leading-relaxed"> */}
//             With years of experience, S Jain Attorneys provides professional legal guidance tailored to individuals and businesses across India.
//           </p>


//           {/* Paragraph 2 */}
//           <p className="text-gray-300 text-lg leading-relaxed">
//             Our firm follows an ethical, client-first approach, ensuring confidentiality, transparency, and dedicated representation in every legal matter.
//           </p>


//           {/* Paragraph 3 */}
//           <p className="text-gray-300 text-lg leading-relaxed">
//             We focus exclusively on India-centric legal practice, offering practical legal solutions and strategic advice aligned with your specific needs.
//           </p>


//           {/* Bullet Highlights */}
//           <ul className="space-y-3 pt-2">

//             <li className="flex items-center gap-3">
//               <span className="w-2 h-2 bg-[#C9A24D]"></span>
//               <span className="text-gray-300 text-lg">
//                 Experienced legal professionals
//               </span>
//             </li>

//             <li className="flex items-center gap-3">
//               {/* <span className="w-2 h-2 bg-[#C9A24D]"></span> */}
//               <span className="w-2 h-2 rounded-full bg-[#C9A24D] mt-2"></span>

//               <span className="text-gray-300 text-lg">
//                 Confidential & transparent handling
//               </span>
//             </li>

//             <li className="flex items-center gap-3">
//               <span className="w-2 h-2 bg-[#C9A24D]"></span>
//               <span className="text-gray-300 text-lg">
//                 Practical legal solutions
//               </span>
//             </li>

//           </ul>

//         </motion.div>



//         {/* RIGHT — IMAGE */}
//         <motion.div
//           className="relative w-full h-[420px] md:h-[500px] rounded-xl
// overflow-hidden
// shadow-[0_25px_70px_rgba(0,0,0,0.6)]
// border border-[#C9A24D]/20
// "
//           initial={{ opacity: 0, scale: 0.96 }}
//           whileInView={{
//             opacity: 1,
//             scale: 1,
//             transition: { duration: 0.7 }
//           }}
//           viewport={{ once: true }}
//           whileHover={{
//             scale: 1.02,
//             transition: { duration: 0.3 }
//           }}
//         >
//           <Image
//             src={founder1}
//             alt="S Jain Attorneys Founder"
//             fill
//             priority
//             className="object-cover"
//           />
//         </motion.div>


//       </div>

//     </section>

//   );

// }


// "use client";

// import Image from "next/image";
// import founder1 from "../../../public/founder2.jpg";
// import { motion } from "framer-motion";

// export default function AboutFirm() {

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.7,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (

//     <section className="py-24 md:py-28 bg-[#111111] text-white">

//       <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

//         {/* ================= LEFT CONTENT ================= */}
//         <motion.div
//           className="space-y-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeInUp}
//         >

//           {/* Small Subtitle */}
//           {/* <p className="uppercase text-xs tracking-[3px] text-gray-400">
//             Our Firm
//           </p> */}

//           {/* Heading */}
//           <h2 className="
//             text-3xl sm:text-4xl md:text-5xl
//             font-medium
//             tracking-tight
//             text-[#C9A24D]
//             ">
//             About S Jain Attorneys
//           </h2>

//           {/* Golden Line */}
//           <div className="w-20 h-[2px] bg-[#C9A24D]"></div>

//           {/* Paragraphs */}
//           <p className="
//             text-gray-300
//             text-base md:text-lg
//             leading-relaxed
//             tracking-wide
//           ">
//             With years of experience, S Jain Attorneys provides professional legal guidance tailored to individuals and businesses across India.
//           </p>

//           <p className="
//             text-gray-300
//             text-base md:text-lg
//             leading-relaxed
//             tracking-wide
//           ">
//             Our firm follows an ethical, client-first approach, ensuring confidentiality, transparency, and dedicated representation in every legal matter.
//           </p>

//           <p className="
//             text-gray-300
//             text-base md:text-lg
//             leading-relaxed
//             tracking-wide
//           ">
//             We focus exclusively on India-centric legal practice, offering practical legal solutions and strategic advice aligned with your specific needs.
//           </p>

//           {/* Bullet Points */}
//           <ul className="space-y-4 pt-2">

//             <li className="flex items-start gap-3">
//               <span className="w-2 h-2 rounded-full bg-[#C9A24D] mt-2"></span>
//               <span className="text-gray-300 text-base md:text-lg">
//                 Experienced legal professionals
//               </span>
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="w-2 h-2 rounded-full bg-[#C9A24D] mt-2"></span>
//               <span className="text-gray-300 text-base md:text-lg">
//                 Confidential & transparent handling
//               </span>
//             </li>

//             <li className="flex items-start gap-3">
//               <span className="w-2 h-2 rounded-full bg-[#C9A24D] mt-2"></span>
//               <span className="text-gray-300 text-base md:text-lg">
//                 Practical legal solutions
//               </span>
//             </li>

//           </ul>

//         </motion.div>


//         {/* ================= RIGHT IMAGE ================= */}
//         <motion.div
//           className="
//             relative
//             w-full
//             h-[380px] md:h-[460px]
//             rounded-xl
//             overflow-hidden
//             shadow-[0_25px_70px_rgba(0,0,0,0.6)]
//             border border-[#C9A24D]/20
//           "
//           initial={{ opacity: 0, scale: 0.96 }}
//           whileInView={{
//             opacity: 1,
//             scale: 1,
//             transition: { duration: 0.7 }
//           }}
//           viewport={{ once: true }}
//           whileHover={{
//             scale: 1.02,
//             transition: { duration: 0.3 }
//           }}
//         >

//           {/* Soft Golden Glow */}
//           <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A24D]/20 to-transparent blur-xl opacity-40"></div>

//           <Image
//             src={founder1}
//             alt="S Jain Attorneys Founder"
//             fill
//             priority
//             className="object-cover relative z-10"
//           />

//         </motion.div>

//       </div>

//     </section>

//   );

// }


"use client";

import Image from "next/image";
import founder1 from "../../../public/founder2.jpg";
import { motion } from "framer-motion";

export default function AboutFirm() {

  // Container for staggered animation
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Fade in + up motion for elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 md:py-28 bg-[#111111] text-white">

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className="space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* Heading */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#C9A24D]"
          >
            About S Jain Attorneys
          </motion.h2>

          {/* Golden Line */}
          <motion.div
            variants={fadeInUp}
            className="w-20 h-[2px] bg-[#C9A24D]"
          />

          {/* Paragraphs */}
          <motion.p variants={fadeInUp} className="text-gray-300 text-base md:text-lg leading-relaxed tracking-wide">
            With years of experience, S Jain Attorneys provides professional legal guidance tailored to individuals and businesses across India.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-gray-300 text-base md:text-lg leading-relaxed tracking-wide">
            Our firm follows an ethical, client-first approach, ensuring confidentiality, transparency, and dedicated representation in every legal matter.
          </motion.p>

          <motion.p variants={fadeInUp} className="text-gray-300 text-base md:text-lg leading-relaxed tracking-wide">
            We focus exclusively on India-centric legal practice, offering practical legal solutions and strategic advice aligned with your specific needs.
          </motion.p>

          {/* Bullet Points */}
          <motion.ul className="space-y-4 pt-2">
            {[
              "Experienced legal professionals",
              "Confidential & transparent handling",
              "Practical legal solutions",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fadeInUp}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#C9A24D] mt-2"></span>
                <span className="text-gray-300 text-base md:text-lg">
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>

        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          className="relative w-full h-[380px] md:h-[460px] rounded-xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.6)] border border-[#C9A24D]/20"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.7 } }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >

          {/* Soft Golden Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#C9A24D]/20 to-transparent blur-xl opacity-40"></div>

          <Image
            src={founder1}
            alt="S Jain Attorneys Founder"
            fill
            priority
            className="object-cover relative z-10"
          />

        </motion.div>

      </div>

    </section>
  );
}