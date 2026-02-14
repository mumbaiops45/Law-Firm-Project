// // "use client";

// // import { motion } from "framer-motion";

// // export default function ServiceOverview() {
// //   const highlights = [
// //     "Experienced legal counsel",
// //     "End-to-end handling",
// //     "Confidential approach",
// //     "India-focused expertise",
// //   ];

// //   const fadeInUp = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// //   };

// //   return (
// //     <section className="py-20 px-6 bg-white">
// //       <div className="max-w-7xl mx-auto grid md:grid-cols-10 gap-8 items-start">
// //         {/* Left Text (70%) */}
// //         <motion.div
// //           className="md:col-span-7"
// //           variants={fadeInUp}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //         >
// //           <h2 className="text-3xl font-serif font-semibold text-[#0B1C2D] mb-6">
// //             Overview
// //           </h2>
// //           <p className="text-gray-700 mb-4">
// //             Our legal services are designed to provide comprehensive guidance for businesses and individuals navigating complex legal matters. Whether you are setting up a new enterprise or managing legal disputes, our team ensures clarity and precision at every step.
// //           </p>
// //           <p className="text-gray-700 mb-4">
// //             This service is ideal for those seeking professional advice on corporate, civil, family, or property-related legal issues. We step in whenever legal support is required, ensuring timely and effective solutions.
// //           </p>
// //           <p className="text-gray-700">
// //             We specialize in the Indian legal context, keeping you informed of local regulations, compliance requirements, and best practices to mitigate risks and protect your interests.
// //           </p>
// //         </motion.div>

// //         {/* Right Highlights Box (30%) */}
// //         <motion.div
// //           className="md:col-span-3 bg-[#0B1C2D] border border-[#C9A24D] rounded-md shadow-lg p-6 text-white"
// //           variants={fadeInUp}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //         >
// //           <h3 className="text-xl font-semibold text-[#C9A24D] mb-4">Key Highlights</h3>
// //           <ul className="space-y-3">
// //             {highlights.map((item, index) => (
// //               <li key={index} className="flex items-center">
// //                 <span className="text-[#C9A24D] mr-2 font-bold">✓</span>
// //                 {item}
// //               </li>
// //             ))}
// //           </ul>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";

// export default function ServiceOverview() {

//   const highlights = [
//     "Experienced legal counsel",
//     "End-to-end handling",
//     "Confidential approach",
//     "India-focused expertise",
//   ];

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   return (
//     <section className="py-20 px-6 bg-white">

//       <div className="max-w-7xl mx-auto grid md:grid-cols-10 gap-10 items-start">


//         {/* ================= Left Content (70%) ================= */}

//         <motion.div
//           className="md:col-span-7"
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >

//           {/* Section Title */}

//           <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#0B1C2D] mb-6">
//             Overview
//           </h2>


//           {/* Paragraph 1 — What the service is */}

//           <p className="text-gray-700 text-lg leading-relaxed mb-5">
//             Our legal services provide structured and professional guidance to individuals,
//             businesses, and organizations navigating complex legal matters. We assist in
//             ensuring compliance, protecting rights, and delivering clear legal direction
//             across a wide range of legal situations.
//           </p>


//           {/* Paragraph 2 — Who it is for & when legal support is required */}

//           <p className="text-gray-700 text-lg leading-relaxed mb-5">
//             Whether you are a business owner, corporate entity, or individual, our services
//             are designed to support you when legal expertise is required — from preventive
//             advisory and documentation to dispute resolution and representation.
//           </p>


//           {/* Paragraph 3 — Indian legal context */}

//           <p className="text-gray-700 text-lg leading-relaxed">
//             With strong expertise in the Indian legal system, we ensure every matter is
//             handled with accuracy, confidentiality, and adherence to applicable laws,
//             helping clients make informed decisions while minimizing legal risks.
//           </p>

//         </motion.div>



//         {/* ================= Right Highlights Box (30%) ================= */}

//         <motion.div
//           className="
//             md:col-span-3
//             bg-[#0B1C2D]
//             border border-[#C9A24D]
//             rounded-md
//             shadow-lg
//             p-7
//             text-white
//           "
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >

//           {/* Box Title */}

//           <h3 className="text-xl font-semibold text-[#C9A24D] mb-5">
//             Key Highlights
//           </h3>


//           {/* Highlights List */}

//           <ul className="space-y-4">

//             {highlights.map((item, index) => (

//               <li key={index} className="flex items-center text-sm md:text-base">

//                 <span className="text-[#C9A24D] mr-3 text-lg">
//                   ✓
//                 </span>

//                 <span className="text-gray-200">
//                   {item}
//                 </span>

//               </li>

//             ))}

//           </ul>

//         </motion.div>


//       </div>

//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";

export default function ServiceOverview() {

  const highlights = [
    "Experienced legal counsel",
    "End-to-end handling",
    "Confidential approach",
    "India-focused expertise",
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-10 gap-10 items-start">

        {/* ================= Left Content (70%) ================= */}
        <motion.div
          className="md:col-span-7"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#0B1C2D] mb-6">
            Overview
          </h2>

          {/* Paragraph 1 — What the service is */}
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Our legal services provide structured and reliable guidance to individuals,
            businesses, and organizations dealing with legal matters. We help clients
            understand their rights, fulfill legal obligations, and navigate legal
            processes with clarity and confidence.
          </p>

          {/* Paragraph 2 — Who it is for & when support is required */}
          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Whether you are a business owner, corporate entity, startup, or individual,
            our services support you at every stage — from preventive legal advisory,
            drafting and reviewing documents, to managing disputes and legal proceedings
            when professional representation becomes necessary.
          </p>

          {/* Paragraph 3 — Indian legal context */}
          <p className="text-gray-700 text-lg leading-relaxed">
            With strong expertise in the Indian legal framework, we ensure every matter
            is handled with precision, confidentiality, and full compliance with
            applicable laws. Our approach focuses on protecting your interests while
            minimizing legal risks and enabling informed decision-making.
          </p>

        </motion.div>


        {/* ================= Right Highlights Box (30%) ================= */}
        <motion.div
          className="
            md:col-span-3
            bg-[#0B1C2D]
            border border-[#C9A24D]
            rounded-md
            shadow-lg
            p-7
            text-white
          "
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* Box Title */}
          <h3 className="text-xl font-semibold text-[#C9A24D] mb-5">
            Key Highlights
          </h3>

          {/* Highlights List */}
          <ul className="space-y-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-center text-sm md:text-base">
                <span className="text-[#C9A24D] mr-3 text-lg">✓</span>
                <span className="text-gray-200">{item}</span>
              </li>
            ))}
          </ul>

        </motion.div>

      </div>

    </section>
  );
}
