// // // "use client";

// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";

// // // export default function FamilyDivorceLawPage() {

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
// // //                 Family & Divorce Law
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
// // //               Family & Divorce Law
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
// // //               Compassionate and professional legal support for family disputes,
// // //               divorce matters, child custody, and protection of your legal rights.
// // //             </motion.p>

// // //           </motion.div>



// // //           {/* FLOATING IMAGE CARDS */}

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

// // //             <div className="grid md:grid-cols-2 gap-6 mt-70">


// // //               {/* FAMILY LAW CARD */}

// // //               <motion.div
// // //                 variants={fadeUp}
// // //                 className="rounded-xl overflow-hidden shadow-2xl bg-white"
// // //               >

// // //                 <Image
// // //                   src="/family-law.jpg"
// // //                   alt="Family Law"
// // //                   width={700}
// // //                   height={600}
// // //                   className="w-full h-[400px] object-cover"
// // //                   priority
// // //                 />

// // //                 <div className="p-6">

// // //                   <h3 className="text-xl font-semibold text-black mb-2 text-center">
// // //                     Family Law
// // //                   </h3>

// // //                   <p className="text-gray-600 text-sm leading-relaxed text-center">
// // //                     Legal assistance for family disputes, child custody,
// // //                     maintenance, and protection of your legal rights with
// // //                     professional and compassionate support.
// // //                   </p>

// // //                 </div>

// // //               </motion.div>



// // //               {/* DIVORCE LAW CARD */}

// // //               <motion.div
// // //                 variants={fadeUp}
// // //                 className="rounded-xl overflow-hidden shadow-2xl bg-white"
// // //               >

// // //                 <Image
// // //                   src="/divorce.png"
// // //                   alt="Divorce Law"
// // //                   width={700}
// // //                   height={600}
// // //                   className="w-full h-[400px] object-cover"
// // //                   priority
// // //                 />

// // //                 <div className="p-6">

// // //                   <h3 className="text-xl font-semibold text-black mb-2 text-center">
// // //                     Divorce Law
// // //                   </h3>

// // //                   <p className="text-gray-600 text-sm leading-relaxed text-center">
// // //                     Expert legal representation for mutual and contested divorce,
// // //                     ensuring fair settlements, alimony, and protection of your future.
// // //                   </p>

// // //                 </div>

// // //               </motion.div>


// // //             </div>

// // //           </motion.div>

// // //         </section>



// // //         {/* SPACING */}

// // //         <div className="h-64 md:h-80"></div>



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
// // //               className="text-4xl md:text-5xl font-semibold text-black mb-6"
// // //             >
// // //               Overview
// // //             </motion.h2>


// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
// // //             >
// // //               Family and divorce law involves sensitive legal matters that impact
// // //               your personal life and future. Our experienced lawyers provide strategic,
// // //               confidential, and compassionate legal representation to ensure your
// // //               rights and interests are fully protected.
// // //             </motion.p>



// // //             {/* SERVICES */}

// // //             <motion.h3
// // //               variants={fadeUp}
// // //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// // //             >
// // //               Our Family & Divorce Law Services
// // //             </motion.h3>


// // //             <motion.ul
// // //               variants={fadeUp}
// // //               className="list-disc pl-6 space-y-6 text-gray-700 mb-16"
// // //             >

// // //               <li>Mutual and Contested Divorce Cases</li>
// // //               <li>Child Custody and Visitation Rights</li>
// // //               <li>Maintenance and Alimony Claims</li>
// // //               <li>Domestic Violence Protection</li>
// // //               <li>Family Dispute Resolution</li>
// // //               <li>Property and Asset Division</li>

// // //             </motion.ul>



// // //             {/* IMAGE */}

// // //             <motion.div
// // //               variants={fadeUp}
// // //               className="mb-16 max-w-4xl mx-auto"
// // //             >

// // //               <Image
// // //                 src="/familylaw.png"
// // //                 alt="Family Law Consultation"
// // //                 width={900}
// // //                 height={500}
// // //                 className="
// // //       w-full
// // //       h-[480px] md:h-[540px]
// // //       object-cover
// // //       rounded-xl
// // //       shadow-lg
// // //     "
// // //                 sizes="(max-width: 768px) 100vw, 900px"
// // //               />

// // //             </motion.div>



// // //             {/* WHY CHOOSE */}

// // //             <motion.h3
// // //               variants={fadeUp}
// // //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// // //             >
// // //               Why Choose Us for Family & Divorce Law
// // //             </motion.h3>


// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// // //             >
// // //               We provide professional, confidential, and result-oriented legal
// // //               services. Our goal is to resolve family disputes efficiently while
// // //               protecting your rights and ensuring the best possible outcome.
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
// // //               alt="Family Consultation"
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
// // //               Confidential Legal Support
// // //             </p>


// // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // //               Speak With Our Family Law Experts
// // //             </h2>


// // //             <p className="text-gray-300 mb-10">
// // //               Get professional legal support for family and divorce matters.
// // //             </p>

// // //             <Link href="/contact">
// // //               <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // //                 Book Consultation
// // //               </button>
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

// // export default function FamilyDivorceLawPage() {

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// //   };

// //   const stagger = {
// //     visible: { transition: { staggerChildren: 0.2 } }
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <main className="bg-white overflow-hidden">

// //         {/* ================= HERO ================= */}

// //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// //           <motion.div
// //             variants={stagger}
// //             initial="hidden"
// //             animate="visible"
// //             className="max-w-6xl mx-auto px-6 text-center"
// //           >

// //             <motion.h1
// //               variants={fadeUp}
// //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// //             >
// //               Trusted Family & Divorce Law Services in Bangalore Focused on Protecting Your Future
// //             </motion.h1>

// //             <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-4">
// //               Our firm provides trusted legal representation in Family & Divorce Law matters, offering strategic guidance through sensitive matrimonial and family disputes.
// //             </motion.p>

// //             <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-4">
// //               Our experienced Divorce Lawyer and Family Court Lawyer team ensures practical, confidential, and result-oriented solutions.
// //             </motion.p>

// //             <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-6">
// //               Our goal is to protect your rights, secure fair settlements, and ensure long-term legal stability for you and your family.
// //             </motion.p>

// //             <motion.p variants={fadeUp} className="text-[#C9A24D] font-semibold mb-8">
// //               Response within 24 hours guaranteed.
// //             </motion.p>

// //             <motion.div variants={fadeUp} className="flex justify-center gap-6 flex-wrap">

// //               <Link
// //                 href="/legal-consultation-in-bangalore"
// //                 className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
// //               >
// //                 Book Confidential Consultation
// //               </Link>

// //               <Link
// //                 href="tel:+919000000000"
// //                 className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
// //               >
// //                 Call Now
// //               </Link>

// //             </motion.div>

// //           </motion.div>
// //         </section>


// //         {/* ================= ABOUT SERVICE ================= */}

// //         <section className="max-w-6xl mx-auto px-6 py-20">

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Trusted Legal Support for Family & Divorce Matters
// //           </h2>

// //           <p className="text-gray-700 text-lg mb-6">
// //             Family disputes require legal clarity with emotional sensitivity. Our Family & Divorce Law practice focuses on protecting your rights while guiding you through every stage of the legal process.
// //           </p>

// //           <p className="text-gray-700 text-lg mb-12">
// //             As experienced Divorce Lawyers and Family Court Lawyers, we handle complex matrimonial litigation, custody battles, and settlement negotiations with discretion and professionalism.
// //           </p>


// //           {/* SERVICES LIST */}

// //           <h3 className="text-2xl font-semibold mb-8">
// //             OUR FAMILY & DIVORCE LEGAL SERVICES INCLUDE
// //           </h3>

// //           <div className="grid md:grid-cols-2 gap-6 mb-16">
// //             {[
// //               "Mutual Consent Divorce",
// //               "Contested Divorce",
// //               "Child Custody & Visitation Rights",
// //               "Maintenance & Alimony",
// //               "Protection under Domestic Violence Act",
// //               "Matrimonial property and financial settlements",
// //               "Legal notices, petitions, and settlement agreements"
// //             ].map((item, index) => (
// //               <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
// //                 <p className="text-lg font-medium">{item}</p>
// //               </div>
// //             ))}
// //           </div>


// //           {/* ================= APPROACH ================= */}

// //           <h2 className="text-4xl font-semibold mb-6">
// //             OUR APPROACH / HOW WE WORK
// //           </h2>

// //           <div className="space-y-6 text-gray-700 text-lg mb-16">
// //             <p><strong>Step 1:</strong> Confidential Consultation – We understand your situation and assess legal options.</p>
// //             <p><strong>Step 2:</strong> Case Evaluation & Strategy Planning – A clear legal strategy is designed based on your objectives. We clearly explain legal risks, possible outcomes, and settlement options before proceeding.</p>
// //             <p><strong>Step 3:</strong> Petition Filing & Documentation – Accurate preparation and filing of required legal documents.</p>
// //             <p><strong>Step 4:</strong> Court Representation & Resolution – Strong representation before the Family Court for fair resolution.</p>
// //           </div>


// //           {/* ================= WHY CHOOSE ================= */}

// //           <h2 className="text-4xl font-semibold mb-6">
// //             WHY CHOOSE OUR FIRM
// //           </h2>

// //           <ul className="space-y-4 text-lg mb-16">
// //             <li>✓ Experienced Family & Divorce Law Advocates</li>
// //             <li>✓ Dedicated Divorce Lawyer & Family Court Lawyer Support</li>
// //             <li>✓ Discreet & Confidential Case Handling</li>
// //             <li>✓ Transparent Legal Guidance & Clear Communication</li>
// //           </ul>


// //           {/* ================= FAQ ================= */}

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Frequently Asked Questions
// //           </h2>

// //           <div className="space-y-6 text-gray-700 text-lg">
// //             <p><strong>Q1:</strong> How long does a divorce process take?<br />The timeline depends on whether it is mutual consent or contested, and the complexity of issues involved.</p>
// //             <p><strong>Q2:</strong> What documents are required for filing divorce?<br />Marriage certificate, address proof, identity documents, income details, and supporting evidence depending on the case.</p>
// //             <p><strong>Q3:</strong> What is the role of a Family Court Lawyer?<br />A Family Court Lawyer represents you in family court proceedings, drafts petitions, negotiates settlements, and protects your legal rights.</p>
// //             <p><strong>Q4:</strong> How is child custody decided?<br />Custody decisions are based on the child’s welfare, financial stability, parental capability, and overall best interests of the child.</p>
// //             <p><strong>Q5:</strong> Can divorce be settled without a court trial?<br />Many matters can be resolved through mutual consent divorce or structured settlement negotiations.</p>
// //             <p><strong>Q6:</strong> How is alimony calculated?<br />It depends on income, financial capacity, duration of marriage, standard of living, and court discretion.</p>
// //           </div>

// //         </section>


// //         {/* ================= FINAL CTA ================= */}

// //         <section className="relative py-28 text-center text-white">
// //           <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
// //           <div className="absolute inset-0 bg-black/75"></div>

// //           <div className="relative max-w-4xl mx-auto px-6">
// //             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// //               Get Immediate Legal Help from a Divorce Lawyer in Bangalore
// //             </h2>

// //             <p className="text-gray-300 mb-10 text-lg">
// //               Speak with our experienced Divorce Lawyer and Family Court Lawyer today for confidential guidance.
// //             </p>

// //             <div className="flex gap-6 justify-center flex-wrap">

// //               <Link
// //                 href="/legal-consultation-in-bangalore"
// //                 className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
// //               >
// //                 Book Confidential Consultation
// //               </Link>

// //               <Link
// //                 href="/contact"
// //                 className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
// //               >
// //                 Request Call Back
// //               </Link>

// //             </div>

// //             <p className="text-gray-400 text-sm mt-8">
// //               All matters handled with complete confidentiality and legal discretion.
// //             </p>
// //           </div>
// //         </section>

// //       </main>

// //       <Footer />
// //     </>
// //   );
// // }



// "use client";

// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function FamilyDivorceLawPage() {
//   const [openIndex, setOpenIndex] = useState(null);

// const toggleFAQ = (index) => {
//   setOpenIndex(openIndex === index ? null : index);
// };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
//   };

//   const fadeImage = {
//     hidden: { opacity: 0, scale: 1.05 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
//   };

//   const stagger = {
//     visible: { transition: { staggerChildren: 0.2 } }
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
//             className="max-w-6xl mx-auto px-6 text-center"
//           >

//             <motion.h1
//               variants={fadeUp}
//               className="text-4xl md:text-6xl font-semibold text-white mb-6"
//             >
//               Trusted Family & Divorce Law Services in Bangalore Focused on Protecting Your Future
//             </motion.h1>

//             <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-4">
//               Our firm provides trusted legal representation in Family & Divorce Law matters, offering strategic guidance through sensitive matrimonial and family disputes.
//             </motion.p>

//             <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-6">
//               Our experienced Divorce Lawyer and Family Court Lawyer team ensures practical, confidential, and result-oriented solutions.
//             </motion.p>

//             <motion.p variants={fadeUp} className="text-[#C9A24D] font-semibold mb-8">
//               Response within 24 hours guaranteed.
//             </motion.p>

//             <motion.div variants={fadeUp} className="flex justify-center gap-6 flex-wrap">
//               <Link
//                 href="/legal-consultation-in-bangalore"
//                 className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
//               >
//                 Book Confidential Consultation
//               </Link>

//               <Link
//                 href="tel:+919000000000"
//                 className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
//               >
//                 Call Now
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* HERO IMAGE CARDS */}

//           <motion.div
//             variants={fadeImage}
//             initial="hidden"
//             animate="visible"
//             className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20"
//           >

//             <div className="grid md:grid-cols-2 gap-6 mt-52">

//               <motion.div variants={fadeUp} className="rounded-xl overflow-hidden shadow-2xl bg-white">
//                 <Image
//                   src="/family-law.jpg"
//                   alt="Family Law"
//                   width={700}
//                   height={600}
//                   className="w-full h-[400px] object-cover"
//                   priority
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-black mb-2 text-center">
//                     Family Law
//                   </h3>
//                 </div>
//               </motion.div>

//               <motion.div variants={fadeUp} className="rounded-xl overflow-hidden shadow-2xl bg-white">
//                 <Image
//                   src="/divorce.png"
//                   alt="Divorce Law"
//                   width={700}
//                   height={600}
//                   className="w-full h-[400px] object-cover"
//                   priority
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-black mb-2 text-center">
//                     Divorce Law
//                   </h3>
//                 </div>
//               </motion.div>

//             </div>
//           </motion.div>
//         </section>

//         <div className="h-72 md:h-96"></div>

//         {/* ================= ABOUT SERVICE ================= */}

//         <section className="max-w-6xl mx-auto px-6 py-20">

//           <h2 className="text-4xl font-semibold mb-6">
//             Trusted Legal Support for Family & Divorce Matters
//           </h2>

//           <p className="text-gray-700 text-lg mb-6">
//             Family disputes require legal clarity with emotional sensitivity. Our Family & Divorce Law practice focuses on protecting your rights while guiding you through every stage of the legal process.
//           </p>

//           <p className="text-gray-700 text-lg mb-12">
//             As experienced Divorce Lawyers and Family Court Lawyers, we handle complex matrimonial litigation, custody battles, and settlement negotiations with discretion and professionalism.
//           </p>

//           {/* SERVICES */}

//           <h3 className="text-2xl font-semibold mb-8">
//             OUR FAMILY & DIVORCE LEGAL SERVICES INCLUDE
//           </h3>

//           <div className="grid md:grid-cols-2 gap-6 mb-16">
//             {[
//               "Mutual Consent Divorce",
//               "Contested Divorce",
//               "Child Custody & Visitation Rights",
//               "Maintenance & Alimony",
//               "Protection under Domestic Violence Act",
//               "Matrimonial property and financial settlements",
//               "Legal notices, petitions, and settlement agreements"
//             ].map((item, index) => (
//               <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//                 <p className="text-lg font-medium">{item}</p>
//               </div>
//             ))}
//           </div>

//           {/* MID CONTENT IMAGE */}

//           <div className="mb-16">
//             <Image
//               src="/familylaw.png"
//               alt="Family Law Consultation"
//               width={900}
//               height={500}
//               className="w-full h-[450px] object-cover rounded-xl shadow-lg"
//             />
//           </div>

//           {/* APPROACH */}

//           <h2 className="text-4xl font-semibold mb-6">
//             OUR APPROACH / HOW WE WORK
//           </h2>

//           <div className="space-y-6 text-gray-700 text-lg mb-16">
//             <p><strong>Step 1:</strong> Confidential Consultation – We understand your situation and assess legal options.</p>
//             <p><strong>Step 2:</strong> Case Evaluation & Strategy Planning – A clear legal strategy is designed based on your objectives.</p>
//             <p><strong>Step 3:</strong> Petition Filing & Documentation – Accurate preparation and filing of required legal documents.</p>
//             <p><strong>Step 4:</strong> Court Representation & Resolution – Strong representation before the Family Court for fair resolution.</p>
//           </div>

//           {/* WHY CHOOSE */}

//           <h2 className="text-4xl font-semibold mb-6">
//             WHY CHOOSE OUR FIRM
//           </h2>

//           <ul className="space-y-4 text-lg mb-16">
//             <li>✓ Experienced Family & Divorce Law Advocates</li>
//             <li>✓ Dedicated Divorce Lawyer & Family Court Lawyer Support</li>
//             <li>✓ Discreet & Confidential Case Handling</li>
//             <li>✓ Transparent Legal Guidance & Clear Communication</li>
//           </ul>

//           {/* FAQ */}

//           <h2 className="text-4xl font-semibold mb-6">
//             Frequently Asked Questions
//           </h2>

//          <div className="space-y-4">
//   {[
//     {
//       question: "How long does a divorce process take?",
//       answer: "The timeline depends on whether it is mutual consent or contested."
//     },
//     {
//       question: "What documents are required?",
//       answer: "Marriage certificate, address proof, identity documents, and income details."
//     },
//     {
//       question: "How is child custody decided?",
//       answer: "Custody decisions are based on the welfare of the child."
//     },
//     {
//       question: "Can divorce be settled without trial?",
//       answer: "Yes, through mutual consent or structured settlement negotiations."
//     },
//     {
//       question: "How is alimony calculated?",
//       answer: "Based on income, financial capacity, and court discretion."
//     }
//   ].map((faq, index) => (
//     <div
//       key={index}
//       className="border border-gray-200 rounded-xl overflow-hidden"
//     >
//       <button
//         onClick={() => toggleFAQ(index)}
//         className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
//       >
//         <span className="font-semibold text-lg">{faq.question}</span>
//         <span className="text-[#C9A24D] text-xl">
//           {openIndex === index ? "−" : "+"}
//         </span>
//       </button>

//       {openIndex === index && (
//         <div className="px-6 py-4 text-gray-700 bg-white">
//           {faq.answer}
//         </div>
//       )}
//     </div>
//   ))}
// </div>

//         </section>

//         {/* FINAL CTA */}

//         <section className="relative py-28 text-center text-white">
//           <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
//           <div className="absolute inset-0 bg-black/75"></div>

//           <div className="relative max-w-4xl mx-auto px-6">
//             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
//               Get Immediate Legal Help from a Divorce Lawyer in Bangalore
//             </h2>

//             <p className="text-gray-400 mb-10 text-lg">
//               Speak with our experienced Divorce Lawyer and Family Court Lawyer today.
//             </p>

//             <div className="flex gap-6 justify-center flex-wrap">
//               <Link
//                 href="/legal-consultation-in-bangalore"
//                 className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
//               >
//                 Book Confidential Consultation
//               </Link>

//               <Link
//                 href="/contact"
//                 className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
//               >
//                 Request Call Back
//               </Link>
//             </div>

//             <p className="text-gray-400 text-sm mt-8">
//               All matters handled with complete confidentiality and legal discretion.
//             </p>
//           </div>
//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }


"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const services = [
  "Mutual Consent Divorce",
  "Contested Divorce",
  "Child Custody & Visitation Rights",
  "Maintenance & Alimony",
  "Protection under Domestic Violence Act",
  "Matrimonial Property and Financial Settlements",
  "Legal Notices, Petitions, and Settlement Agreements",
];

const steps = [
  {
    number: "01",
    title: "Confidential Consultation",
    body: "Every case begins with a private and confidential consultation. During this discussion, our divorce lawyers and family court advocates take the time to understand your situation, the concerns you may be facing, and the legal options available to you. This step helps us provide initial guidance and determine the most appropriate legal path forward.",
  },
  {
    number: "02",
    title: "Case Evaluation & Legal Strategy",
    body: "Once we understand the details of the matter, our legal team carefully evaluates the case and develops a structured legal strategy. We explain your rights, potential legal risks, and possible outcomes so that you can make informed decisions. Wherever possible, we also discuss settlement or mutual resolution options that may help resolve the matter more efficiently.",
  },
  {
    number: "03",
    title: "Petition Preparation & Legal Documentation",
    body: "Our team prepares and reviews all required legal documents, petitions, and supporting evidence needed for the case. Proper documentation is essential in family court proceedings, and we ensure that every filing is accurate, legally sound, and submitted within the required timelines.",
  },
  {
    number: "04",
    title: "Family Court Representation & Resolution",
    body: "Our experienced family court lawyers represent clients during hearings and court proceedings, presenting strong legal arguments while protecting their rights and interests. Whether the matter involves divorce, child custody, maintenance, or other family law issues, we work toward a fair and legally sound resolution.",
  },
];

const whyChoose = [
  {
    icon: "⚖",
    title: "Experienced Family & Divorce Law Advocates",
    body: "Our lawyers have experience handling a wide range of matrimonial disputes and family court cases.",
  },
  {
    icon: "🤝",
    title: "Dedicated Divorce Lawyer & Family Court Support",
    body: "Each client receives focused legal support from lawyers who understand the complexities of family law proceedings.",
  },
  {
    icon: "🔒",
    title: "Confidential and Respectful Case Handling",
    body: "We recognize the sensitive nature of family disputes and ensure that every matter is handled with discretion and professionalism.",
  },
  {
    icon: "📋",
    title: "Clear Legal Guidance & Transparent Communication",
    body: "Our lawyers explain each stage of the legal process so that clients fully understand their options, rights, and possible outcomes.",
  },
];

const faqs = [
  {
    q: "How long does the divorce process usually take?",
    a: "The time required for a divorce depends on the type of case and the issues involved. A mutual consent divorce may generally take a few months, provided both parties agree on matters such as child custody, maintenance, and property division.",
  },
  {
    q: "What documents are required for filing divorce?",
    a: "The documents required for filing a divorce may vary depending on the circumstances of the case. Commonly required documents include the marriage certificate, identity proof, address proof, photographs, and details of income or financial records.",
  },
  {
    q: "What does a Family Court Lawyer do?",
    a: "A Family Court Lawyer represents clients in legal matters related to family disputes such as divorce, child custody, maintenance, and property division. The lawyer prepares legal petitions, provides legal advice, represents clients during court hearings, and negotiates settlements where possible.",
  },
  {
    q: "How is child custody decided?",
    a: "Child custody decisions are primarily based on the best interests and welfare of the child. Courts consider several factors, including the child's age, emotional needs, living environment, financial stability of the parents, and the ability of each parent to provide proper care and support.",
  },
  {
    q: "Can a divorce be settled without going through a lengthy court trial?",
    a: "Yes, many divorce cases can be resolved without a prolonged court trial. Couples may opt for mutual consent divorce or reach an agreement through negotiation or mediation. When both parties agree on key matters such as custody, maintenance, and asset division, the process becomes faster and less stressful.",
  },
  {
    q: "How is alimony or spousal maintenance determined?",
    a: "Alimony or spousal maintenance is decided based on several factors, including the income and financial capacity of both spouses, the duration of the marriage, the standard of living during the marriage, and the responsibilities of each party.",
  },
];

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: (i = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.93 },
  show: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function GoldDivider() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
  );
}

function SectionHeading({ children, light = false }) {
  return (
    <motion.div
      variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="mb-10"
    >
      <motion.span
        initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="block h-[3px] bg-[#C9A24D] mb-5"
      />
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
        {children}
      </h2>
    </motion.div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function FamilyDivorceLawPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpa = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
        <section ref={heroRef} className="relative bg-[#0B0F14] min-h-[92vh] flex items-center overflow-hidden">

          {/* top gold border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

          {/* animated corner brackets */}
          {[
            "top-8 left-8 border-t-2 border-l-2",
            "top-8 right-8 border-t-2 border-r-2",
            "bottom-8 left-8 border-b-2 border-l-2",
            "bottom-8 right-8 border-b-2 border-r-2",
          ].map((cls, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              className={`absolute w-12 h-12 border-[#C9A24D] ${cls}`}
            />
          ))}

          {/* subtle gold grid */}
          <div className="absolute inset-0 opacity-[0.04]" style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
              "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
          }} />

          <motion.div style={{ y: heroY, opacity: heroOpa }}
            className="relative max-w-5xl mx-auto px-6 py-32 md:py-44 w-full text-center"
          >
            {/* eyebrow */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
            >
              <span className="inline-block w-6 h-px bg-[#C9A24D]" />
              S Jain &amp; Attorneys · Bangalore
              <span className="inline-block w-6 h-px bg-[#C9A24D]" />
            </motion.p>

            {/* H1 */}
            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8"
            >
              Trusted Family &amp; Divorce Law Services in Bangalore{" "}
              <span className="text-[#C9A24D]">Focused on Protecting Your Future</span>
            </motion.h1>

            {/* Intro para 1 */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Our firm provides trusted legal representation in Family &amp; Divorce Law matters,
              offering strategic guidance through sensitive matrimonial and family disputes. Our
              experienced Divorce Lawyer and Family Court Lawyer team ensures practical,
              confidential, and result-oriented solutions.
            </motion.p>

            {/* Intro para 2 — from brief */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              Our goal is to protect your rights, secure fair settlements, and ensure long-term
              legal stability for you and your family.
            </motion.p>

            {/* 24-hour guarantee */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
            >
              Response within 24 hours guaranteed.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/legal-consultation-in-bangalore"
                  className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200"
                >
                  Book Confidential Consultation
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="tel:+919000000000"
                  className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
                >
                  Call Now
                </Link>
              </motion.div>
            </motion.div>

            {/* scroll indicator */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
              className="mt-16 flex justify-center"
            >
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
                className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
              />
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
        </section>

        {/* hero image cards */}
        <section className="bg-[#0B0F14] pb-0">
          <motion.div
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-2 gap-6"
          >
            {[
              { src: "/family-law.jpg",  alt: "Family Law",  label: "Family Law"  },
              { src: "/divorce.png",     alt: "Divorce Law", label: "Divorce Law" },
            ].map((img, i) => (
              <motion.div key={i} variants={scaleIn} custom={i * 0.2}
                className="rounded-xl overflow-hidden border border-[#C9A24D]/30 shadow-2xl bg-[#111]"
              >
                <div className="relative h-[360px]">
                  <Image src={img.src} alt={img.alt} fill className="object-cover opacity-90" />
                </div>
                <div className="px-6 py-5 border-t border-[#C9A24D]/20">
                  <h3 className="text-lg font-bold text-[#C9A24D] text-center">{img.label}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ═══════════════════════════ ABOUT THE SERVICE ════════════════════════ */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          {/* animated right vertical rule */}
          <motion.div
            initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
          />

          <div className="max-w-6xl mx-auto">
            <SectionHeading>Trusted Legal Support for Family &amp; Divorce Matters</SectionHeading>

            {/* All 3 paragraphs from brief "About the Service" */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-lg leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                Family disputes are often deeply personal and emotionally challenging. During such
                times, it is important to have clear legal guidance and reliable support. At S Jain
                Attorneys, our Family and Divorce Law practice is dedicated to helping individuals
                navigate sensitive legal matters with care, professionalism, and discretion.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.4}>
                Our team of experienced divorce lawyers and family court lawyers represents clients
                in a wide range of matrimonial and family law matters. We understand that every
                situation is unique, which is why we take the time to listen, assess the
                circumstances, and provide legal solutions that protect our clients' rights and
                long-term interests.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.8}>
                From divorce proceedings and custody disputes to settlement negotiations and family
                court litigation, we guide our clients through every stage of the legal process
                with clarity and confidence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════ OUR SERVICES ══════════════════════════════ */}
        <section className="py-28 px-6 bg-[#f8f6f1] relative">
          <GoldDivider />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <div className="max-w-6xl mx-auto">
            {/* H3 sub-heading from brief */}
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
            >
              Our Family &amp; Divorce Legal Services Include
            </motion.h3>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-5 mb-14"
            >
              {services.map((item, i) => (
                <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
                  whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
                  className="bg-white border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
                >
                  <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
                    <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* mid-content image */}
            <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-gray-100 shadow-lg"
            >
              <div className="relative w-full h-[450px]">
                <Image src="/familylaw.png" alt="Family Law Consultation" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════ OUR APPROACH ════════════════════════════ */}
        <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

          {/* decorative watermark */}
          <motion.div
            initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 0.04, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 1.2 }}
            className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[22rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
          >
            4
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            <SectionHeading light>Our Approach – How We Work</SectionHeading>

            {/* Approach intro paragraph from brief */}
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed mb-14 max-w-3xl"
            >
              We understand that family disputes are not just legal matters — they are deeply
              personal situations that require both legal expertise and careful handling. Our
              approach focuses on providing clear guidance, protecting your rights, and helping
              you move forward with confidence.
            </motion.p>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div key={step.number}
                  variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.2}
                  className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-8 relative group transition-colors duration-300"
                >
                  {/* corner ornaments */}
                  <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />
                  <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />

                  <div className="flex gap-6 items-start">
                    <span className="text-[#C9A24D] font-black text-3xl shrink-0 leading-none">{step.number}</span>
                    <div className="border-l border-[#C9A24D]/30 pl-6">
                      <h3 className="text-xl font-bold text-white mb-3">
                        Step {i + 1}: {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════ WHY CHOOSE ══════════════════════════════ */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          <GoldDivider />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <div className="max-w-6xl mx-auto">
            <SectionHeading>Why Choose Our Family &amp; Divorce Law Firm</SectionHeading>

            {/* Intro paragraph from brief */}
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed mb-14 max-w-3xl"
            >
              Clients rely on us for sensitive family law matters because of our professional
              approach, legal expertise, and commitment to protecting our clients' interests.
            </motion.p>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-6"
            >
              {whyChoose.map((item, i) => (
                <motion.div key={i} variants={scaleIn} custom={i * 0.15}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
                  className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 relative group overflow-hidden transition-colors duration-300"
                >
                  <motion.span
                    initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
                    className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
                    style={{ transition: "transform 0.3s ease" }}
                  />
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════ FAQ ═══════════════════════════════════ */}
        <section className="py-28 px-6 bg-[#f8f6f1] relative">
          <GoldDivider />

          <div className="max-w-4xl mx-auto">
            <SectionHeading>Frequently Asked Questions</SectionHeading>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div key={index}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.1}
                  className={`rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-sm ${
                    openIndex === index
                      ? "border-[#C9A24D] bg-[#fdf9f3] shadow-[0_4px_24px_rgba(201,162,77,0.15)]"
                      : "border-gray-200 bg-white hover:border-[#C9A24D]/60 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-start p-7 text-left gap-4 group"
                    aria-expanded={openIndex === index}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <span className={`shrink-0 mt-1 w-1 self-stretch rounded-full transition-colors duration-300 ${
                        openIndex === index ? "bg-[#C9A24D]" : "bg-gray-200 group-hover:bg-[#C9A24D]/50"
                      }`} />
                      <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
                        openIndex === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"
                      }`}>
                        Q{index + 1}: {faq.q}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 mt-1"
                    >
                      <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-7 border-t-2 border-[#C9A24D]/20 ml-7">
                          <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════ FINAL CTA ═════════════════════════════════ */}
        <section className="relative py-28 text-center text-white overflow-hidden">
          <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

          {/* animated rings */}
          {[0, 1, 2].map((i) => (
            <motion.div key={i}
              initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
              className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
              style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            />
          ))}

          <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="relative max-w-4xl mx-auto px-6"
          >
            {/* bordered content box */}
            <div className="border border-[#C9A24D]/30 rounded-2xl px-10 py-16 relative">
              {/* corner marks */}
              {[
                "top-4 left-4 border-t-2 border-l-2",
                "top-4 right-4 border-t-2 border-r-2",
                "bottom-4 left-4 border-b-2 border-l-2",
                "bottom-4 right-4 border-b-2 border-r-2",
              ].map((cls, i) => (
                <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
              ))}

              <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
              >
                S Jain &amp; Attorneys · Family &amp; Divorce Law
              </motion.p>

              {/* H2 — exact text from brief */}
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                className="text-3xl md:text-5xl font-bold mb-10 leading-tight"
              >
                Get trusted legal guidance from our skilled Divorce and Family Court Lawyers.
              </motion.h2>

              {/* Single CTA button — brief specifies only [ Request Call Back ] */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link href="/contact"
                    className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
                  >
                    Request Call Back
                  </Link>
                </motion.div>
              </motion.div>

              {/* confidentiality note */}
              <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
                className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
              >
                <span className="inline-block w-4 h-px bg-gray-600" />
                All matters handled with complete confidentiality and legal discretion.
                <span className="inline-block w-4 h-px bg-gray-600" />
              </motion.p>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  );
}