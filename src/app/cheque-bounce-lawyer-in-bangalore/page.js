// // // "use client";

// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";

// // // export default function ChequeBounceNICasesPage() {

// // //   const fadeUp = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.8,
// // //         ease: "easeOut"
// // //       }
// // //     }
// // //   };

// // //   const fadeImage = {
// // //     hidden: { opacity: 0, scale: 1.05 },
// // //     visible: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       transition: {
// // //         duration: 1.2
// // //       }
// // //     }
// // //   };

// // //   const stagger = {
// // //     visible: {
// // //       transition: {
// // //         staggerChildren: 0.2
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <main className="bg-white overflow-hidden">

// // //         {/* ================= HERO ================= */}

// // //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// // //           <motion.div
// // //             variants={stagger}
// // //             initial="hidden"
// // //             animate="visible"
// // //             className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center"
// // //           >

// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-400 text-sm mb-6"
// // //             >
// // //               Home <span className="mx-2">›</span>
// // //               <span className="text-[#C9A24D]">
// // //                 Cheque Bounce / NI Act Cases
// // //               </span>
// // //             </motion.p>


// // //             <motion.h1
// // //               variants={fadeUp}
// // //               className="
// // //                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
// // //                 font-semibold
// // //                 text-white
// // //                 mb-6
// // //                 tracking-tight
// // //               "
// // //             >
// // //               Cheque Bounce / NI Act Cases
// // //             </motion.h1>


// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="
// // //                 text-gray-400
// // //                 text-base sm:text-lg md:text-xl
// // //                 max-w-3xl mx-auto
// // //                 leading-relaxed
// // //               "
// // //             >
// // //               Professional legal assistance for cheque bounce cases under
// // //               the Negotiable Instruments Act, ensuring recovery of dues and
// // //               strong legal representation in court.
// // //             </motion.p>

// // //           </motion.div>



// // //           {/* FLOATING IMAGE */}

// // //           <motion.div
// // //             variants={fadeImage}
// // //             initial="hidden"
// // //             animate="visible"
// // //             className="
// // //               absolute
// // //               left-1/2
// // //               -translate-x-1/2
// // //               translate-y-1/2
// // //               bottom-0
// // //               w-full
// // //               max-w-6xl
// // //               px-6
// // //               z-20
// // //             "
// // //           >

// // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">

// // //               <Image
// // //                 src="/cheque-bounce.jpg"
// // //                 alt="Cheque Bounce NI Act Cases"
// // //                 width={1400}
// // //                 height={800}
// // //                 className="w-full h-[400px] md:h-[500px] object-cover"
// // //                 priority
// // //               />

// // //             </div>

// // //           </motion.div>

// // //         </section>



// // //         {/* SPACING */}

// // //         <div className="h-40 md:h-60"></div>



// // //         {/* ================= OVERVIEW ================= */}

// // //         <motion.section
// // //           initial="hidden"
// // //           whileInView="visible"
// // //           viewport={{ once: true }}
// // //           variants={stagger}
// // //         >

// // //           <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-24">


// // //             <motion.h2
// // //               variants={fadeUp}
// // //               className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight"
// // //             >
// // //               Overview
// // //             </motion.h2>


// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
// // //             >
// // //               Cheque bounce cases fall under Section 138 of the Negotiable
// // //               Instruments Act. These cases involve dishonor of cheques due to
// // //               insufficient funds or other legal reasons. Our legal team provides
// // //               expert assistance in filing, defending, and resolving cheque bounce
// // //               cases efficiently.
// // //             </motion.p>



// // //             {/* ================= SERVICES ================= */}

// // //             <motion.h3
// // //               variants={fadeUp}
// // //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// // //             >
// // //               Our Cheque Bounce Legal Services
// // //             </motion.h3>


// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
// // //             >
// // //               We provide complete legal support for individuals, businesses,
// // //               and financial institutions in cheque bounce matters.
// // //             </motion.p>



// // //             <motion.ul
// // //               variants={fadeUp}
// // //               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
// // //             >

// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Filing Cheque Bounce Cases:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Legal assistance in filing cases under Section 138 of the NI Act.
// // //                 </p>
// // //               </li>


// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Legal Notice Drafting:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Drafting and sending statutory legal notices to defaulters.
// // //                 </p>
// // //               </li>


// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Court Representation:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Professional representation in court proceedings.
// // //                 </p>
// // //               </li>


// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Defense Against False Cases:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Legal defense for individuals falsely accused in cheque bounce cases.
// // //                 </p>
// // //               </li>


// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Settlement & Recovery Assistance:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Negotiation and legal assistance for financial recovery.
// // //                 </p>
// // //               </li>


// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Business & Corporate Cheque Cases:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Handling cheque dishonor cases for companies and business transactions.
// // //                 </p>
// // //               </li>

// // //             </motion.ul>



// // //             {/* IMAGE */}

// // //             <motion.div variants={fadeUp} className="mb-16">

// // //               <Image
// // //                 src="/cheque.png"
// // //                 alt="Cheque Bounce Legal Consultation"
// // //                 width={1200}
// // //                 height={600}
// // //                 className="w-full rounded-xl shadow-lg"
// // //               />

// // //             </motion.div>



// // //             {/* WHY CHOOSE */}

// // //             <motion.h3
// // //               variants={fadeUp}
// // //               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
// // //             >
// // //               Why Choose Us for Cheque Bounce Cases
// // //             </motion.h3>


// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// // //             >
// // //               Our experienced legal team ensures fast, efficient, and professional
// // //               handling of cheque bounce matters. We focus on protecting your financial
// // //               rights, recovering dues, and providing strong legal representation.
// // //             </motion.p>

// // //           </div>

// // //         </motion.section>



// // //         {/* ================= CTA ================= */}

// // //         <motion.section
// // //           initial={{ opacity: 0 }}
// // //           whileInView={{ opacity: 1 }}
// // //           transition={{ duration: 1 }}
// // //           className="relative py-28 mt-20 overflow-hidden"
// // //         >

// // //           <div className="absolute inset-0">

// // //             <Image
// // //               src="/discussion.png"
// // //               alt="Cheque Bounce Legal Support"
// // //               fill
// // //               className="object-cover"
// // //             />

// // //             <div className="absolute inset-0 bg-black/70"></div>

// // //           </div>


// // //           <motion.div
// // //             initial={{ opacity: 0, y: 60 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             className="relative max-w-5xl mx-auto px-6 text-center"
// // //           >

// // //             <p className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4">
// // //               Expert NI Act Legal Support
// // //             </p>


// // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // //               Recover Your Financial Dues Legally
// // //             </h2>


// // //             <p className="text-gray-300 text-base md:text-lg mb-10">
// // //               Get professional legal assistance for cheque bounce and NI Act cases.
// // //             </p>

// // //             <Link href="/contact">
// // //             <button className="
// // //               bg-[#C9A24D]
// // //               text-black
// // //               px-8 py-4
// // //               rounded-lg
// // //               font-semibold
// // //               hover:scale-105
// // //               transition
// // //             ">
// // //               Book Consultation
// // //             </button>
// // //             </Link>

// // //           </motion.div>

// // //         </motion.section>


// // //       </main>

// // //       <Footer />

// // //     </>
// // //   );
// // // }


// // "use client";

// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import Link from "next/link";

// // export default function ChequeBouncePage() {
// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.8, ease: "easeOut" },
// //     },
// //   };

// //   const stagger = {
// //     visible: { transition: { staggerChildren: 0.2 } },
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <main className="bg-white overflow-hidden">

// //         {/* ================= HERO ================= */}

// //         <section className="relative bg-[#0B0F14] pt-32 pb-36 text-center">

// //           <motion.div
// //             variants={stagger}
// //             initial="hidden"
// //             animate="visible"
// //             className="max-w-6xl mx-auto px-6"
// //           >
// //             <motion.h1
// //               variants={fadeUp}
// //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// //             >
// //               Experienced Cheque Bounce Lawyer in Bangalore for Section 138 NI Act Cases
// //             </motion.h1>

// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-6"
// //             >
// //               Our firm provides strategic legal representation as a
// //               <strong> Cheque Bounce Lawyer in Bangalore</strong>,
// //               assisting clients in cheque bounce cases under the
// //               Negotiable Instruments Act. We handle both prosecution
// //               and defense matters with precision and strong courtroom advocacy.
// //             </motion.p>

// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-400 max-w-3xl mx-auto mb-6"
// //             >
// //               We ensure strict compliance with statutory timelines and build
// //               legally sound strategies to protect your financial interests.
// //               <br />
// //               <span className="text-[#C9A24D] font-semibold">
// //                 Response within 24 hours guaranteed.
// //               </span>
// //             </motion.p>

// //             <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap">
// //               <Link
// //                 href="/legal-consultation-in-bangalore"
// //                 className="bg-[#C9A24D] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
// //               >
// //                 Book Confidential Consultation
// //               </Link>

// //               <a
// //                 href="tel:+919000000000"
// //                 className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
// //               >
// //                 Call Now
// //               </a>
// //             </motion.div>
// //           </motion.div>
// //         </section>

// //         {/* HERO IMAGE */}

// //         <div className="relative w-full h-[350px] md:h-[500px]">
// //           <Image
// //             src="/cheque-bounce.jpg"
// //             alt="Cheque Bounce Lawyer in Bangalore"
// //             fill
// //             className="object-cover"
// //             priority
// //           />
// //         </div>

// //         {/* ================= LEGAL SUPPORT ================= */}

// //         <section className="py-20 max-w-6xl mx-auto px-6">

// //           <h2 className="text-3xl md:text-4xl font-semibold mb-6">
// //             Legal Support for Cheque Bounce & NI Act Matters
// //           </h2>

// //           <p className="text-gray-600 leading-relaxed mb-10">
// //             Cheque dishonour cases require timely legal action and strict
// //             compliance with statutory timelines. As experienced Section 138 NI Act
// //             lawyers, we assist clients in initiating and defending cheque bounce
// //             proceedings under the Negotiable Instruments Act.
// //           </p>

// //           <h3 className="text-2xl font-semibold mb-6">
// //             Our Cheque Bounce Services Include
// //           </h3>

// //           <ul className="grid md:grid-cols-2 gap-6 text-gray-700 mb-16">
// //             <li>▪ Section 138 NI Act Cases</li>
// //             <li>▪ Legal Notice Drafting & Reply</li>
// //             <li>▪ Filing of Criminal Complaints</li>
// //             <li>▪ Defense in False Cheque Bounce Cases</li>
// //             <li>▪ Recovery Proceedings</li>
// //             <li>▪ Trial & Appellate Representation</li>
// //           </ul>

// //           {/* IMAGE */}

// //           <div className="relative w-full h-[300px] md:h-[400px] mb-16">
// //             <Image
// //               src="/cheque.png"
// //               alt="Section 138 NI Act Legal Services"
// //               fill
// //               className="object-cover rounded-xl shadow-xl"
// //             />
// //           </div>

// //           {/* ================= APPROACH ================= */}

// //           <h2 className="text-3xl md:text-4xl font-semibold mb-10">
// //             Our Approach / How We Work
// //           </h2>

// //           <div className="space-y-8 text-gray-700 mb-20">
// //             <div>
// //               <h4 className="font-semibold">
// //                 Step 1: Case Review & Document Verification
// //               </h4>
// //               <p>
// //                 Examination of cheque, bank memo, and transaction details.
// //               </p>
// //             </div>

// //             <div>
// //               <h4 className="font-semibold">
// //                 Step 2: Legal Notice & Compliance Strategy
// //               </h4>
// //               <p>
// //                 Issuing or responding to statutory notice within prescribed timelines.
// //               </p>
// //             </div>

// //             <div>
// //               <h4 className="font-semibold">
// //                 Step 3: Filing Complaint / Defense Preparation
// //               </h4>
// //               <p>
// //                 Preparation of pleadings and documentation for NI Act proceedings.
// //               </p>
// //             </div>

// //             <div>
// //               <h4 className="font-semibold">
// //                 Step 4: Court Representation & Resolution
// //               </h4>
// //               <p>
// //                 Strong representation before trial and appellate courts.
// //               </p>
// //             </div>
// //           </div>

// //           {/* ================= WHY CHOOSE ================= */}

// //           <h2 className="text-3xl md:text-4xl font-semibold mb-8">
// //             Why Choose Our Firm
// //           </h2>

// //           <ul className="grid md:grid-cols-2 gap-6 text-gray-700 mb-20">
// //             <li>✓ Experienced Negotiable Instruments Act lawyers</li>
// //             <li>✓ Strategic handling of cheque bounce cases</li>
// //             <li>✓ Strong courtroom representation in Bangalore</li>
// //             <li>✓ Clear guidance on statutory timelines and compliance</li>
// //           </ul>

// //           {/* ================= FAQ ================= */}

// //           <h2 className="text-3xl md:text-4xl font-semibold mb-10">
// //             Frequently Asked Questions
// //           </h2>

// //           <div className="space-y-8 text-gray-700">
// //             <div>
// //               <h4 className="font-semibold">
// //                 Q1: What is Section 138 of the NI Act?
// //               </h4>
// //               <p>
// //                 Section 138 deals with penalties for cheque dishonour due to insufficient funds.
// //               </p>
// //             </div>

// //             <div>
// //               <h4 className="font-semibold">
// //                 Q2: What is the time limit for filing a cheque bounce case?
// //               </h4>
// //               <p>
// //                 Legal notice must be sent within 30 days of dishonour.
// //               </p>
// //             </div>

// //             <div>
// //               <h4 className="font-semibold">
// //                 Q3: Can a cheque bounce case result in imprisonment?
// //               </h4>
// //               <p>
// //                 Yes, penalties may include fine and imprisonment.
// //               </p>
// //             </div>

// //             <div>
// //               <h4 className="font-semibold">
// //                 Q4: Is settlement possible?
// //               </h4>
// //               <p>
// //                 Yes, many matters can be resolved through settlement or compounding.
// //               </p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ================= FINAL CTA ================= */}

// //         <section className="bg-black text-white py-20 text-center px-6">
// //           <h2 className="text-3xl md:text-4xl font-semibold mb-6">
// //             Get Immediate Legal Help from a Cheque Bounce Lawyer in Bangalore
// //           </h2>

// //           <p className="text-gray-300 mb-8">
// //             Consult an experienced Cheque Bounce Lawyer in Bangalore today
// //             for strategic legal guidance and effective court representation.
// //           </p>

// //           <div className="flex justify-center gap-6 flex-wrap">
// //             <Link
// //               href="/legal-consultation-in-bangalore"
// //               className="bg-[#C9A24D] text-black px-6 py-3 rounded-md font-semibold"
// //             >
// //               Book Confidential Consultation
// //             </Link>

// //             <Link
// //               href="/legal-consultation-in-bangalore"
// //               className="border border-white px-6 py-3 rounded-md font-semibold"
// //             >
// //               Request Call Back
// //             </Link>
// //           </div>

// //           <p className="mt-8 text-gray-400 text-sm">
// //             All matters handled with complete confidentiality and professional discretion.
// //           </p>
// //         </section>

// //       </main>

// //       <Footer />
// //     </>
// //   );
// // }

// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";
// export default function ChequeBounceNICasesPage() {
//   const [openIndex, setOpenIndex] = useState(null);

// const toggleFAQ = (index) => {
//   setOpenIndex(openIndex === index ? null : index);
// };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const fadeImage = {
//     hidden: { opacity: 0, scale: 1.05 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 1.2
//       }
//     }
//   };

//   const stagger = {
//     visible: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <main className="bg-white overflow-hidden">

//         {/* ================= HERO ================= */}

//         <section className="relative bg-[#0B0F14] pt-32 pb-40">

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//             className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center"
//           >

//             {/* <motion.p
//               variants={fadeUp}
//               className="text-gray-400 text-sm mb-6"
//             >
//               Home <span className="mx-2">›</span>
//               <span className="text-[#C9A24D]">
//                 Cheque Bounce Lawyer in Bangalore
//               </span>
//             </motion.p> */}

//             <motion.h1
//               variants={fadeUp}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight"
//             >
//               Experienced Cheque Bounce Lawyer in Bangalore for Section 138 NI Act Cases
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
//             >
//               Our firm provides strategic legal representation as a Cheque Bounce Lawyer in Bangalore,
//               assisting clients in cheque bounce cases under the Negotiable Instruments Act.
//               We handle both prosecution and defense matters with precision and strong courtroom advocacy.
//               <br /><br />
//               We ensure strict compliance with statutory timelines and build legally sound strategies
//               to protect your financial interests.
//               <br />
//               <span className="text-[#C9A24D] font-semibold">
//                 Response within 24 hours guaranteed.
//               </span>
//             </motion.p>

//             <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-6 flex-wrap">
//               <Link href="/legal-consultation-in-bangalore">
//                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
//                   Book Confidential Consultation
//                 </button>
//               </Link>

//               <a href="tel:+919000000000">
//                 <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
//                   Call Now
//                 </button>
//               </a>
//             </motion.div>

//           </motion.div>

//           {/* FLOATING IMAGE (NOT REMOVED) */}

//           <motion.div
//             variants={fadeImage}
//             initial="hidden"
//             animate="visible"
//             className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20"
//           >
//             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
//               <Image
//                 src="/cheque-bounce.jpg"
//                 alt="Cheque Bounce NI Act Cases"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[400px] md:h-[500px] object-cover"
//                 priority
//               />
//             </div>
//           </motion.div>

//         </section>

//         <div className="h-40 md:h-60"></div>

//         {/* ================= LEGAL SUPPORT ================= */}

//         <section className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-24">

//           <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
//             Legal Support for Cheque Bounce & NI Act Matters
//           </h2>

//           <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
//             Cheque dishonour cases require timely legal action and strict compliance with statutory timelines.
//             As experienced Section 138 NI Act lawyers, we assist clients in initiating and defending cheque bounce proceedings.
//             Our team ensures proper notice drafting, complaint filing, and effective representation before the appropriate courts in Bangalore.
//           </p>

//           <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
//             Our Cheque Bounce Services Include
//           </h3>

//           <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-16">
//             <li>Section 138 NI Act Cases</li>
//             <li>Legal Notice Drafting & Reply</li>
//             <li>Filing of Criminal Complaints</li>
//             <li>Defense in False Cheque Bounce Cases</li>
//             <li>Recovery Proceedings</li>
//             <li>Trial & Appellate Representation</li>
//           </ul>

//           {/* IMAGE NOT REMOVED */}

//           <div className="mb-16">
//             <Image
//               src="/cheque.png"
//               alt="Cheque Bounce Legal Consultation"
//               width={1200}
//               height={600}
//               className="w-full rounded-xl shadow-lg"
//             />
//           </div>

//           {/* ================= APPROACH ================= */}

//           <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
//             Our Approach / How We Work
//           </h3>

//           <div className="space-y-6 text-gray-700 mb-16">
//             <p><strong>Step 1:</strong> Case Review & Document Verification</p>
//             <p><strong>Step 2:</strong> Legal Notice & Compliance Strategy</p>
//             <p><strong>Step 3:</strong> Filing Complaint / Defense Preparation</p>
//             <p><strong>Step 4:</strong> Court Representation & Resolution</p>
//           </div>

//           {/* ================= WHY CHOOSE ================= */}

//           <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
//             Why Choose Our Firm
//           </h3>

//           <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-16">
//             <li>Experienced Negotiable Instruments Act lawyers</li>
//             <li>Strategic handling of cheque bounce cases</li>
//             <li>Strong courtroom representation in Bangalore</li>
//             <li>Clear guidance on statutory timelines and compliance</li>
//           </ul>

//           {/* ================= FAQ ================= */}

//           <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
//             Frequently Asked Questions
//           </h3>

//           <div className="space-y-4">
//   {[
//     {
//       question: "What is Section 138 of the NI Act?",
//       answer:
//         "Section 138 deals with penalties for cheque dishonour due to insufficient funds.",
//     },
//     {
//       question: "What is the time limit for filing?",
//       answer:
//         "Legal notice must be sent within 30 days of dishonour.",
//     },
//     {
//       question: "Can imprisonment occur?",
//       answer:
//         "Yes, penalties may include fine and imprisonment.",
//     },
//     {
//       question: "Can cases be settled?",
//       answer:
//         "Yes, many matters can be resolved through settlement or compounding.",
//     },
//   ].map((faq, index) => (
//     <div
//       key={index}
//       className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
//     >
//       <button
//         onClick={() => toggleFAQ(index)}
//         className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
//       >
//         <span className="font-semibold text-lg text-black">
//           {faq.question}
//         </span>

//         <span className="text-[#C9A24D] text-2xl font-bold">
//           {openIndex === index ? "−" : "+"}
//         </span>
//       </button>

//       {openIndex === index && (
//         <div className="px-6 py-4 text-gray-600 bg-gray-50">
//           {faq.answer}
//         </div>
//       )}
//     </div>
//   ))}
// </div>

//         </section>

//         {/* ================= FINAL CTA ================= */}

//         <section className="relative py-28 mt-20 overflow-hidden">

//           <div className="absolute inset-0">
//             <Image
//               src="/discussion.png"
//               alt="Cheque Bounce Legal Support"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-black/70"></div>
//           </div>

//           <div className="relative max-w-5xl mx-auto px-6 text-center">

//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Get Immediate Legal Help from a Cheque Bounce Lawyer in Bangalore
//             </h2>

//             <p className="text-gray-300 text-base md:text-lg mb-10">
//               Consult an experienced Cheque Bounce Lawyer in Bangalore today for strategic legal guidance and effective court representation.
//             </p>

//             <Link href="/legal-consultation-in-bangalore">
//               <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
//                 Book Confidential Consultation
//               </button>
//             </Link>

//             <p className="mt-8 text-gray-400 text-sm">
//               All matters handled with complete confidentiality and professional discretion.
//             </p>

//           </div>

//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }





"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

/* ================= SEO METADATA ================= */


export default function ChequeBounceNICasesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeImage = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2 },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* ================= HERO ================= */}

        <section className="relative bg-[#0B0F14] pt-32 pb-40">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="relative z-10 max-w-7xl mx-auto px-6 text-center"
          >
            <motion.h1
              variants={fadeUp}
                            // className="text-4xl md:text-6xl font-semibold text-white mb-6"

              className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight"
            >
              Experienced Cheque Bounce Lawyer in Bangalore for Section 138 NI Act Cases
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Our firm provides strategic legal representation as a Cheque Bounce Lawyer in Bangalore,
              assisting clients in cheque bounce cases under the Negotiable Instruments Act.
              We handle both prosecution and defense matters with precision and strong courtroom advocacy.
              <br /><br />
              We ensure strict compliance with statutory timelines and build legally sound strategies
              to protect your financial interests.
              <br />
              <span className="text-[#C9A24D] font-semibold">
                Response within 24 hours guaranteed.
              </span>
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-6 flex-wrap">
              <Link href="/legal-consultation-in-bangalore">
                <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
                  Book Confidential Consultation
                </button>
              </Link>

              <a href="tel:+919000000000">
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
                  Call Now
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* FLOATING IMAGE */}

          <motion.div
            variants={fadeImage}
            initial="hidden"
            animate="visible"
            className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-0 pointer-events-none"
          >
            <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
              <Image
                src="/cheque-bounce.jpg"
                alt="Cheque Bounce NI Act Cases"
                width={1400}
                height={800}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />
            </div>
          </motion.div>

        </section>

        <div className="h-40 md:h-60"></div>

        {/* ================= LEGAL SUPPORT ================= */}

        <section className="max-w-6xl mx-auto px-6 py-16 mt-24">

          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
            Legal Support for Cheque Bounce & NI Act Matters
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-12">
            Cheque dishonour cases require timely legal action and strict compliance with statutory timelines.
            As experienced Section 138 NI Act lawyers, we assist clients in initiating and defending cheque bounce proceedings under the Negotiable Instruments Act.
            Our team ensures proper notice drafting, complaint filing, and effective representation before the appropriate courts in Bangalore.
          </p>

          <h3 className="text-3xl font-semibold text-black mb-6">
            Our Cheque Bounce Services Include
          </h3>

          <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-16">
            <li>Section 138 NI Act Cases</li>
            <li>Legal Notice Drafting & Reply</li>
            <li>Filing of Criminal Complaints</li>
            <li>Defense in False Cheque Bounce Cases</li>
            <li>Recovery Proceedings</li>
            <li>Trial & Appellate Representation</li>
          </ul>

          <div className="mb-16">
            <Image
              src="/cheque.png"
              alt="Cheque Bounce Legal Consultation"
              width={1200}
              height={600}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* ================= APPROACH ================= */}

          <h3 className="text-3xl font-semibold text-black mb-6">
            Our Approach / How We Work
          </h3>

          <div className="space-y-6 text-gray-700 mb-16">
            <p>
              <strong>Step 1: Case Review & Document Verification</strong><br />
              We examine the cheque, bank memo, and transaction details to assess legal validity.
            </p>

            <p>
              <strong>Step 2: Legal Notice & Compliance Strategy</strong><br />
              Issuing or responding to statutory notice within prescribed timelines.
            </p>

            <p>
              <strong>Step 3: Filing Complaint / Defense Preparation</strong><br />
              Preparation of pleadings and documentation for NI Act case proceedings.
            </p>

            <p>
              <strong>Step 4: Court Representation & Resolution</strong><br />
              Strong representation as an NI Act case lawyer before trial and appellate courts.
            </p>
          </div>

          {/* ================= WHY CHOOSE ================= */}

          <h3 className="text-3xl font-semibold text-black mb-6">
            Why Choose Our Firm
          </h3>

          <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-16">
            <li>Experienced Negotiable Instruments Act lawyers</li>
            <li>Strategic handling of cheque bounce cases</li>
            <li>Strong courtroom representation in Bangalore</li>
            <li>Clear guidance on statutory timelines and compliance</li>
          </ul>

          {/* ================= FAQ ================= */}

          <h3 className="text-3xl font-semibold text-black mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {[
              {
                question: "What is Section 138 of the NI Act?",
                answer:
                  "Section 138 of the Negotiable Instruments Act deals with penalties and legal consequences for cheque dishonour due to insufficient funds.",
              },
              {
                question: "What is the time limit for filing a cheque bounce case?",
                answer:
                  "A legal notice must be sent within 30 days of cheque dishonour, and the complaint must be filed within the statutory limitation period.",
              },
              {
                question: "Can a cheque bounce case result in imprisonment?",
                answer:
                  "Yes, under Section 138 NI Act, penalties may include fine and imprisonment, subject to court decision.",
              },
              {
                question: "What documents are required to file a cheque bounce case?",
                answer:
                  "Original cheque, bank return memo, legal notice copy, postal proof, and supporting transaction documents.",
              },
              {
                question: "Can you defend against false cheque bounce allegations?",
                answer:
                  "Yes, we represent clients in defending false or misused cheque cases by challenging liability, examining documentation, and presenting strong legal arguments before the court.",
              },
              {
                question: "Is it possible to settle a cheque bounce case out of court?",
                answer:
                  "Yes, many cheque bounce matters can be resolved through settlement or compounding, subject to mutual agreement and court approval under the Negotiable Instruments Act.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-lg text-black">
                    {faq.question}
                  </span>

                  <span className="text-[#C9A24D] text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 text-gray-600 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="relative py-28 mt-20 overflow-hidden">

          <div className="absolute inset-0">
            <Image
              src="/discussion.png"
              alt="Cheque Bounce Legal Support"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Get Immediate Legal Help from a Cheque Bounce Lawyer in Bangalore
            </h2>

            <p className="text-gray-300 text-lg mb-10">
              Consult an experienced Cheque Bounce Lawyer in Bangalore today for strategic legal guidance and effective court representation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/legal-consultation-in-bangalore">
                <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
                  Book Confidential Consultation
                </button>
              </Link>

              <Link href="/contact">
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
                  Request Call Back
                </button>
              </Link>
            </div>

            <p className="mt-8 text-gray-400 text-sm">
              All matters handled with complete confidentiality and professional discretion.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}