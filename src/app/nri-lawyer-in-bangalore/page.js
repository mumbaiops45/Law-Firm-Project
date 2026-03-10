// // "use client";

// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import Link from "next/link";

// // export default function NRILegalServicesPage() {

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: {
// //         duration: 0.8,
// //         ease: "easeOut"
// //       }
// //     }
// //   };

// //   const fadeImage = {
// //     hidden: { opacity: 0, scale: 1.05 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       transition: {
// //         duration: 1.2
// //       }
// //     }
// //   };

// //   const stagger = {
// //     visible: {
// //       transition: {
// //         staggerChildren: 0.2
// //       }
// //     }
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
// //             className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center"
// //           >

// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-400 text-sm mb-6"
// //             >
// //               Home <span className="mx-2">›</span>
// //               <span className="text-[#C9A24D]">
// //                 NRI Legal Services
// //               </span>
// //             </motion.p>


// //             <motion.h1
// //               variants={fadeUp}
// //               className="
// //                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
// //                 font-semibold
// //                 text-white
// //                 mb-6
// //                 tracking-tight
// //               "
// //             >
// //               NRI Legal Services
// //             </motion.h1>


// //             <motion.p
// //               variants={fadeUp}
// //               className="
// //                 text-gray-400
// //                 text-base sm:text-lg md:text-xl
// //                 max-w-3xl mx-auto
// //                 leading-relaxed
// //               "
// //             >
// //               Comprehensive legal support for Non-Resident Indians in property,
// //               family, corporate, and litigation matters across India — managed
// //               efficiently without the need for frequent travel.
// //             </motion.p>

// //           </motion.div>



// //           {/* FLOATING IMAGE */}

// //           <motion.div
// //             variants={fadeImage}
// //             initial="hidden"
// //             animate="visible"
// //             className="
// //               absolute
// //               left-1/2
// //               -translate-x-1/2
// //               translate-y-1/2
// //               bottom-0
// //               w-full
// //               max-w-6xl
// //               px-6
// //               z-20
// //             "
// //           >

// //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">

// //               <Image
// //                 src="/nri-legal.png"
// //                 alt="NRI Legal Services"
// //                 width={1400}
// //                 height={800}
// //                 className="w-full h-[400px] md:h-[500px] object-cover"
// //                 priority
// //               />

// //             </div>

// //           </motion.div>

// //         </section>



// //         {/* SPACING */}

// //         <div className="h-40 md:h-60"></div>



// //         {/* ================= OVERVIEW ================= */}

// //         <motion.section
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={stagger}
// //         >

// //           <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-24">


// //             <motion.h2
// //               variants={fadeUp}
// //               className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight"
// //             >
// //               Overview
// //             </motion.h2>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
// //             >
// //               Our NRI legal services are designed to provide seamless legal
// //               assistance to clients residing abroad. From property management
// //               and dispute resolution to family law and corporate matters, we
// //               offer reliable representation and end-to-end legal support in India.
// //             </motion.p>



// //             {/* ================= SERVICES ================= */}

// //             <motion.h3
// //               variants={fadeUp}
// //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// //             >
// //               Our NRI Legal Services
// //             </motion.h3>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
// //             >
// //               We provide dedicated legal assistance tailored to the needs of
// //               NRIs handling legal matters in India.
// //             </motion.p>



// //             <motion.ul
// //               variants={fadeUp}
// //               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
// //             >

// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Property Management & Disputes:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Handling property transactions, documentation, and disputes on behalf of NRIs.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Power of Attorney Assistance:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Drafting and managing power of attorney for smooth legal representation.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Family & Matrimonial Matters:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Legal assistance in divorce, custody, and family disputes.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Inheritance & Succession:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Assistance with wills, succession certificates, and inheritance claims.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Court Representation:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Representation in Indian courts without requiring frequent travel.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Corporate & Investment Advisory:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Legal guidance for business investments and compliance in India.
// //                 </p>
// //               </li>

// //             </motion.ul>



// //             {/* IMAGE */}

// //             <motion.div variants={fadeUp} className="mb-16">

// //               <Image
// //                 src="/nri.png"
// //                 alt="NRI Legal Consultation"
// //                 width={1200}
// //                 height={600}
// //                 className="w-full rounded-xl shadow-lg"
// //               />

// //             </motion.div>



// //             {/* WHY CHOOSE */}

// //             <motion.h3
// //               variants={fadeUp}
// //               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
// //             >
// //               Why Choose Us for NRI Legal Services
// //             </motion.h3>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// //             >
// //               We provide transparent communication, efficient case handling,
// //               and trusted representation for NRIs across various legal matters.
// //               Our goal is to ensure peace of mind while protecting your legal
// //               rights and investments in India.
// //             </motion.p>

// //           </div>

// //         </motion.section>



// //         {/* ================= CTA ================= */}

// //         <motion.section
// //           initial={{ opacity: 0 }}
// //           whileInView={{ opacity: 1 }}
// //           transition={{ duration: 1 }}
// //           className="relative py-28 mt-20 overflow-hidden"
// //         >

// //           <div className="absolute inset-0">

// //             <Image
// //               src="/discussion.png"
// //               alt="NRI Legal Consultation"
// //               fill
// //               className="object-cover"
// //             />

// //             <div className="absolute inset-0 bg-black/70"></div>

// //           </div>


// //           <motion.div
// //             initial={{ opacity: 0, y: 60 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className="relative max-w-5xl mx-auto px-6 text-center"
// //           >

// //             <p className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4">
// //               Dedicated NRI Legal Support
// //             </p>


// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Manage Your Legal Matters in India with Confidence
// //             </h2>


// //             <p className="text-gray-300 text-base md:text-lg mb-10">
// //               Get professional and reliable legal assistance tailored for NRIs.
// //             </p>

// //              <Link href="/contact">
// //             <button className="
// //               bg-[#C9A24D]
// //               text-black
// //               px-8 py-4
// //               rounded-lg
// //               font-semibold
// //               hover:scale-105
// //               transition
// //             ">
// //               Book Consultation
// //             </button>
// //             </Link>

// //           </motion.div>

// //         </motion.section>


// //       </main>

// //       <Footer />

// //     </>
// //   );
// // }


// "use client";


// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// export default function NRILawyerPage() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <>
//       <Navbar />

//       <main className="bg-white overflow-hidden">

//         {/* ================= HERO SECTION ================= */}

//         <section className="bg-[#0B0F14] pt-32 pb-20">

//           <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">

//             <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
//               Trusted NRI Lawyers in Bangalore for Cross-Border Legal Matters
//             </h1>

//             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
//               Our firm provides dedicated legal support as an NRI Lawyer in Bangalore, assisting Non-Resident Indians with property, family, and litigation matters in India. We offer structured legal solutions while ensuring seamless coordination for clients residing abroad.
//             </p>

//             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
//               Our goal is to protect your legal rights in India, minimize cross-border risks, and manage proceedings efficiently without requiring frequent travel.
//             </p>

//             <p className="text-[#C9A24D] font-semibold mb-8">
//               Response within 24 hours guaranteed.
//             </p>

//             <div className="flex justify-center gap-4 flex-wrap mb-16">

//               <Link
//                 href="/legal-consultation-in-bangalore"
//                 className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
//               >
//                 Book Confidential Consultation
//               </Link>

//               <a
//                 href="tel:+919000000000"
//                 className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition"
//               >
//                 Call Now
//               </a>

//             </div>

//           </div>

//           {/* HERO IMAGE */}

//           <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
//             <div className="rounded-xl overflow-hidden shadow-2xl">
//               <Image
//                 src="/nri-legal.png"
//                 alt="NRI Lawyer in Bangalore"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[400px] md:h-[500px] object-cover"
//                 priority
//               />
//             </div>
//           </div>

//         </section>


//         {/* ================= MAIN CONTENT ================= */}

//         <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">

//           <h2 className="text-4xl font-semibold mb-6">
//             Dedicated Legal Services for Non-Resident Indians
//           </h2>

//           <p className="text-gray-700 mb-12">
//             Non-Resident Indians often face legal challenges that require representation in India while living overseas. As experienced NRI Legal Advisors and NRI Litigation Lawyers, we handle complex cross-border legal matters with clarity and efficiency.
//             Our attorneys provide reliable legal services for NRIs, ensuring timely updates, proper documentation, and strong court representation in Bangalore.
//           </p>


//           {/* SERVICES LIST */}

//           <h3 className="text-3xl font-semibold mb-6">
//             OUR NRI LEGAL SERVICES INCLUDE
//           </h3>

//           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
//             <li>▪ NRI Property Disputes & Due Diligence</li>
//             <li>▪ Power of Attorney Drafting & Execution</li>
//             <li>▪ NRI Family & Divorce Matters</li>
//             <li>▪ Inheritance & Succession Issues</li>
//             <li>▪ Court Representation & Litigation</li>
//             <li>▪ Legal Advisory & Documentation Support</li>
//             <li>▪ Title Verification & Transaction Management</li>
//           </ul>


//           {/* HOW WE WORK */}

//           <h3 className="text-3xl font-semibold mb-6">
//             OUR APPROACH / HOW WE WORK
//           </h3>

//           <div className="space-y-6 text-gray-700 mb-16">

//             <p>
//               <strong>Step 1: Case Review & Remote Consultation</strong><br />
//               Understanding your legal concerns through virtual consultation.
//             </p>

//             <p>
//               <strong>Step 2: Documentation & Authorization (POA)</strong><br />
//               Guidance on executing Power of Attorney and required legal documents.
//             </p>

//             <p>
//               We clearly explain legal risks, documentation requirements, and cross-border compliance aspects before proceeding.
//             </p>

//             <p>
//               <strong>Step 3: Legal Strategy & Filing</strong><br />
//               Preparation and filing of petitions, notices, or complaints as required.
//             </p>

//             <p>
//               <strong>Step 4: Court Representation & Ongoing Updates</strong><br />
//               Strong representation before courts while keeping you informed at every stage.
//             </p>

//           </div>


//           {/* WHY CHOOSE US */}

//           <h3 className="text-3xl font-semibold mb-6">
//             WHY CHOOSE OUR FIRM
//           </h3>

//           <ul className="space-y-3 text-gray-700 mb-20">
//             <li>✓ Experienced NRI Property Lawyers</li>
//             <li>✓ Skilled NRI Litigation Lawyer representation</li>
//             <li>✓ Clear and consistent communication for overseas clients</li>
//             <li>✓ Efficient case handling without frequent travel</li>
//             <li>✓ Structured cross-border legal coordination</li>
//           </ul>

//         </section>


//         {/* ================= FAQ SECTION ================= */}

//         <section className="bg-[#F4F4F4] py-20">

//           <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

//             <h3 className="text-4xl font-semibold mb-12">
//               Frequently Asked Questions
//             </h3>

//             <div className="space-y-6 text-gray-800">

//               {[
//                 {
//                   q: "Q1: Can NRIs handle property disputes without travelling to India?",
//                   a: "Yes, through a valid Power of Attorney, legal proceedings can be managed by your appointed representative."
//                 },
//                 {
//                   q: "Q2: How is Power of Attorney used for NRIs?",
//                   a: "It authorizes a trusted person in India to act on your behalf for legal, property, and litigation matters."
//                 },
//                 {
//                   q: "Q3: Do you represent NRIs in family court matters?",
//                   a: "Yes, we handle divorce, custody, maintenance, and matrimonial disputes for Non-Resident Indians."
//                 },
//                 {
//                   q: "Q4: What documents are required for NRI legal cases?",
//                   a: "Passport copies, overseas address proof, property documents, agreements, and case-related records depending on the matter."
//                 },
//                 {
//                   q: "Q5: How do I verify clear property title?",
//                   a: "Through legal title verification, encumbrance search, and detailed document review conducted by our property lawyers."
//                 },
//                 {
//                   q: "Q6: Can NRIs buy or sell property through legal representation?",
//                   a: "Yes, transactions can be managed through legally executed Power of Attorney and structured documentation support."
//                 }
//               ].map((faq, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 cursor-pointer transition"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <h4 className="font-semibold text-lg">
//                       {faq.q}
//                     </h4>
//                     <span className="text-2xl font-bold text-[#C9A24D]">
//                       {openIndex === index ? "−" : "+"}
//                     </span>
//                   </div>

//                   {openIndex === index && (
//                     <p className="mt-4 text-gray-700">
//                       {faq.a}
//                     </p>
//                   )}
//                 </div>
//               ))}

//             </div>

//           </div>

//         </section>


//         {/* ================= FINAL CTA ================= */}

//         <section className="bg-[#0B0F14] py-28 text-center text-white">

//           <div className="max-w-5xl mx-auto px-6">

//             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
//               Get Immediate Legal Help from an NRI Lawyer in Bangalore
//             </h2>

//             <p className="text-gray-300 mb-10">
//               Consult our experienced NRI legal services team today for structured and dependable legal assistance.
//             </p>

//             <div className="flex justify-center gap-4 flex-wrap">

//               <Link
//                 href="/legal-consultation-in-bangalore"
//                 className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
//               >
//                 Book Confidential Consultation
//               </Link>

//               <Link
//                 href="/contact"
//                 className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
//               >
//                 Request Call Back
//               </Link>

//             </div>

//             <p className="text-gray-400 mt-8 text-sm">
//               All matters handled with complete confidentiality and legal discretion.
//             </p>

//           </div>

//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }
















//   // "use client";

//   // import { useState, useRef } from "react";
//   // import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
//   // import Link from "next/link";
//   // import Image from "next/image";
//   // import { ChevronDown } from "lucide-react";
//   // import Navbar from "../components/Navbar";
//   // import Footer from "../components/Footer";

//   // // ─── DATA ─────────────────────────────────────────────────────────────────────

//   // const services = [
//   //   "NRI Property Disputes & Due Diligence",
//   //   "Power of Attorney Drafting & Execution",
//   //   "NRI Family & Divorce Matters",
//   //   "Inheritance & Succession Issues",
//   //   "Court Representation & Litigation",
//   //   "Legal Advisory & Documentation Support",
//   //   "Title Verification & Transaction Management",
//   // ];

//   // const steps = [
//   //   {
//   //     number: "01",
//   //     title: "Case Review & Remote Consultation",
//   //     body: "We begin by understanding your legal concern through a secure virtual consultation, making it easy for NRIs to discuss their case without traveling to India. During this stage, our NRI legal advisors in Bangalore review the situation, identify possible legal options, and guide you on the best course of action.",
//   //   },
//   //   {
//   //     number: "02",
//   //     title: "Documentation & Power of Attorney (POA) Support",
//   //     body: "Handling legal matters from abroad often requires proper authorization and documentation. Our team guides you through the process of executing a Power of Attorney (POA) and preparing the necessary legal documents. We also explain the legal implications, documentation requirements, and cross-border compliance procedures so you can proceed with complete clarity.",
//   //   },
//   //   {
//   //     number: "03",
//   //     title: "Legal Strategy & Case Filing",
//   //     body: "Once the documentation is in place, our NRI litigation lawyers develop a clear legal strategy based on your objectives. This may include drafting and filing petitions, issuing legal notices, or initiating court proceedings where required.",
//   //   },
//   //   {
//   //     number: "04",
//   //     title: "Court Representation & Regular Updates",
//   //     body: "Our legal team represents you before the appropriate courts and authorities in Bangalore. Throughout the process, we keep overseas clients informed with timely updates, transparent communication, and clear explanations of every stage of the case.",
//   //   },
//   // ];

//   // const whyChoose = [
//   //   "Experienced NRI Property Lawyers in Bangalore handling complex property and legal disputes",
//   //   "Skilled NRI Litigation Lawyer representation across civil, family, and property matters",
//   //   "Clear and consistent communication tailored for overseas clients",
//   //   "Efficient legal handling that reduces the need for frequent travel to India",
//   //   "Structured coordination for cross-border legal matters and documentation",
//   // ];

//   // const faqs = [
//   //   {
//   //     q: "Can NRIs handle property disputes without travelling to India?",
//   //     a: "Yes, through a valid Power of Attorney, legal proceedings can be managed by your appointed representative.",
//   //   },
//   //   {
//   //     q: "How is Power of Attorney used for NRIs?",
//   //     a: "It authorizes a trusted person in India to act on your behalf for legal, property, and litigation matters.",
//   //   },
//   //   {
//   //     q: "Do you represent NRIs in family court matters?",
//   //     a: "Yes, we handle divorce, custody, maintenance, and matrimonial disputes for Non-Resident Indians.",
//   //   },
//   //   {
//   //     q: "What documents are required for NRI legal cases?",
//   //     a: "Passport copies, overseas address proof, property documents, agreements, and case-related records depending on the matter.",
//   //   },
//   //   {
//   //     q: "How do I verify clear property title?",
//   //     a: "Through legal title verification, encumbrance search, and detailed document review conducted by our property lawyers.",
//   //   },
//   //   {
//   //     q: "Can NRIs buy or sell property through legal representation?",
//   //     a: "Yes, transactions can be managed through legally executed Power of Attorney and structured documentation support.",
//   //   },
//   // ];

//   // // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

//   // const fadeUp = {
//   //   hidden: { opacity: 0, y: 40 },
//   //   show: (i = 0) => ({
//   //     opacity: 1, y: 0,
//   //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   //   }),
//   // };

//   // const fadeLeft = {
//   //   hidden: { opacity: 0, x: -40 },
//   //   show: (i = 0) => ({
//   //     opacity: 1, x: 0,
//   //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   //   }),
//   // };

//   // const scaleIn = {
//   //   hidden: { opacity: 0, scale: 0.93 },
//   //   show: (i = 0) => ({
//   //     opacity: 1, scale: 1,
//   //     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   //   }),
//   // };

//   // const stagger = {
//   //   hidden: {},
//   //   show: { transition: { staggerChildren: 0.12 } },
//   // };

//   // // ─── HELPERS ──────────────────────────────────────────────────────────────────

//   // function GoldDivider() {
//   //   return (
//   //     <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
//   //   );
//   // }

//   // function SectionHeading({ children, light = false }) {
//   //   return (
//   //     <motion.div
//   //       variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
//   //       className="mb-10"
//   //     >
//   //       <motion.span
//   //         initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
//   //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
//   //         className="block h-[3px] bg-[#C9A24D] mb-5"
//   //       />
//   //       <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
//   //         {children}
//   //       </h2>
//   //     </motion.div>
//   //   );
//   // }

//   // // ─── PAGE ─────────────────────────────────────────────────────────────────────

//   // export default function NRILawyerPage() {
//   //   const [openIndex, setOpenIndex] = useState(null);
//   //   const heroRef = useRef(null);
//   //   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   //   const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   //   const heroOpa = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   //   return (
//   //     <>
//   //       <Navbar />

//   //       <main className="bg-white overflow-hidden">

//   //         {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
//   //         <section ref={heroRef} className="relative bg-[#0B0F14] overflow-hidden">

//   //           {/* top gold border */}
//   //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />

//   //           {/* animated corner brackets */}
//   //           {[
//   //             "top-8 left-8 border-t-2 border-l-2",
//   //             "top-8 right-8 border-t-2 border-r-2",
//   //           ].map((cls, i) => (
//   //             <motion.div key={i}
//   //               initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
//   //               transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
//   //               className={`absolute w-12 h-12 border-[#C9A24D] z-10 ${cls}`}
//   //             />
//   //           ))}

//   //           {/* subtle gold grid */}
//   //           <div className="absolute inset-0 opacity-[0.04] z-0" style={{
//   //             backgroundImage:
//   //               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
//   //               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
//   //           }} />

//   //           <motion.div style={{ y: heroY, opacity: heroOpa }}
//   //             className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-16 text-center"
//   //           >
//   //             {/* eyebrow */}
//   //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
//   //               className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
//   //             >
//   //               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
//   //               S Jain &amp; Attorneys · Bangalore
//   //               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
//   //             </motion.p>

//   //             {/* H1 */}
//   //             <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
//   //               className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8"
//   //             >
//   //               Trusted NRI Lawyers in Bangalore{" "}
//   //               <span className="text-[#C9A24D]">for Cross-Border Legal Matters</span>
//   //             </motion.h1>

//   //             {/* Intro para 1 */}
//   //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
//   //               className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
//   //             >
//   //               Our firm provides dedicated legal support as an NRI Lawyer in Bangalore, assisting
//   //               Non-Resident Indians with property, family, and litigation matters in India. We offer
//   //               structured legal solutions while ensuring seamless coordination for clients residing
//   //               abroad.
//   //             </motion.p>

//   //             {/* Intro para 2 */}
//   //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
//   //               className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
//   //             >
//   //               Our goal is to protect your legal rights in India, minimize cross-border risks, and
//   //               manage proceedings efficiently without requiring frequent travel.
//   //             </motion.p>

//   //             {/* 24-hour guarantee */}
//   //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
//   //               className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
//   //             >
//   //               Response within 24 hours guaranteed.
//   //             </motion.p>

//   //             {/* CTAs */}
//   //             <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
//   //               className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
//   //             >
//   //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//   //                 <Link href="/legal-consultation-in-bangalore"
//   //                   className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200"
//   //                 >
//   //                   Book Confidential Consultation
//   //                 </Link>
//   //               </motion.div>
//   //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//   //                 <Link href="tel:+919000000000"
//   //                   className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
//   //                 >
//   //                   Call Now
//   //                 </Link>
//   //               </motion.div>
//   //             </motion.div>
//   //           </motion.div>

//   //           {/* Hero image */}
//   //           <motion.div
//   //             variants={scaleIn} initial="hidden" animate="show"
//   //             className="relative z-10 max-w-6xl mx-auto px-6 pb-16"
//   //           >
//   //             <div className="rounded-xl overflow-hidden border border-[#C9A24D]/30 shadow-2xl">
//   //               <Image
//   //                 src="/nri-legal.png"
//   //                 alt="NRI Lawyer in Bangalore"
//   //                 width={1400} height={800}
//   //                 className="w-full h-[400px] md:h-[500px] object-cover"
//   //                 priority
//   //               />
//   //             </div>
//   //           </motion.div>

//   //           {/* scroll indicator */}
//   //           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
//   //             className="relative z-10 pb-8 flex justify-center"
//   //           >
//   //             <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
//   //               className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
//   //             />
//   //           </motion.div>
//   //         </section>

//   //         {/* ══════════════════ DEDICATED LEGAL SERVICES FOR NRIs ══════════════════ */}
//   //         <section className="py-28 px-6 bg-white relative overflow-hidden">
//   //           {/* animated right vertical rule */}
//   //           <motion.div
//   //             initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
//   //             transition={{ duration: 1.2, delay: 0.3 }}
//   //             className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
//   //           />

//   //           <div className="max-w-6xl mx-auto">
//   //             <SectionHeading>Dedicated Legal Services for Non-Resident Indians</SectionHeading>

//   //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//   //               className="space-y-6 text-gray-600 text-lg leading-relaxed"
//   //             >
//   //               <motion.p variants={fadeUp}>
//   //                 For many Non-Resident Indians (NRIs), managing legal matters in India while living
//   //                 abroad can be challenging and time-sensitive. Whether it involves property disputes,
//   //                 family matters, documentation, or court proceedings, having reliable legal
//   //                 representation in India is essential.
//   //               </motion.p>
//   //               <motion.p variants={fadeUp} custom={0.5}>
//   //                 We provide comprehensive legal services for NRIs, including case representation,
//   //                 documentation support, legal consultations, and coordination with courts and
//   //                 authorities. Our goal is to simplify the legal process for clients living abroad by
//   //                 providing timely updates, structured legal strategies, and dependable representation
//   //                 in Bangalore courts.
//   //               </motion.p>
//   //             </motion.div>
//   //           </div>
//   //         </section>

//   //         {/* ══════════════════════ OUR NRI LEGAL SERVICES ═════════════════════════ */}
//   //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
//   //           <GoldDivider />
//   //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//   //           <div className="max-w-6xl mx-auto">
//   //             <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//   //               className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
//   //             >
//   //               Our NRI Legal Services Include
//   //             </motion.h3>

//   //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//   //               className="grid md:grid-cols-2 gap-5 mb-16"
//   //             >
//   //               {services.map((item, i) => (
//   //                 <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
//   //                   whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
//   //                   className="bg-white border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
//   //                 >
//   //                   <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">
//   //                     {String(i + 1).padStart(2, "0")}
//   //                   </span>
//   //                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
//   //                     <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
//   //                       {item}
//   //                     </p>
//   //                   </div>
//   //                 </motion.div>
//   //               ))}
//   //             </motion.div>

//   //             {/* second image */}
//   //             <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
//   //               className="rounded-xl overflow-hidden border border-gray-100 shadow-lg"
//   //             >
//   //               <Image
//   //                 src="/nri.png"
//   //                 alt="NRI Legal Services in Bangalore"
//   //                 width={1200} height={600}
//   //                 className="w-full object-cover"
//   //               />
//   //             </motion.div>
//   //           </div>
//   //         </section>

//   //         {/* ════════════════════════════ OUR APPROACH ════════════════════════════ */}
//   //         <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
//   //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//   //           {/* decorative watermark */}
//   //           <motion.div
//   //             initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 0.04, x: 0 }}
//   //             viewport={{ once: true }} transition={{ duration: 1.2 }}
//   //             className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[22rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
//   //           >
//   //             4
//   //           </motion.div>

//   //           <div className="max-w-6xl mx-auto relative">
//   //             <SectionHeading light>Our Approach – How We Work</SectionHeading>

//   //             <div className="space-y-8">
//   //               {steps.map((step, i) => (
//   //                 <motion.div key={step.number}
//   //                   variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.2}
//   //                   className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-8 relative group transition-colors duration-300"
//   //                 >
//   //                   {/* corner ornaments */}
//   //                   <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />
//   //                   <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />

//   //                   <div className="flex gap-6 items-start">
//   //                     <span className="text-[#C9A24D] font-black text-3xl shrink-0 leading-none">{step.number}</span>
//   //                     <div className="border-l border-[#C9A24D]/30 pl-6">
//   //                       <h3 className="text-xl font-bold text-white mb-3">
//   //                         Step {i + 1}: {step.title}
//   //                       </h3>
//   //                       <p className="text-gray-400 leading-relaxed">{step.body}</p>
//   //                     </div>
//   //                   </div>
//   //                 </motion.div>
//   //               ))}
//   //             </div>
//   //           </div>
//   //         </section>

//   //         {/* ════════════════════════════ WHY CHOOSE ══════════════════════════════ */}
//   //         <section className="py-28 px-6 bg-white relative overflow-hidden">
//   //           <GoldDivider />
//   //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//   //           <div className="max-w-6xl mx-auto">
//   //             <SectionHeading>Why Choose Our Firm</SectionHeading>

//   //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//   //               className="grid md:grid-cols-2 gap-5"
//   //             >
//   //               {whyChoose.map((item, i) => (
//   //                 <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
//   //                   whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
//   //                   className="bg-[#f8f6f1] border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
//   //                 >
//   //                   <span className="text-[#C9A24D] font-black text-xl shrink-0 mt-0.5">✓</span>
//   //                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
//   //                     <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
//   //                       {item}
//   //                     </p>
//   //                   </div>
//   //                 </motion.div>
//   //               ))}
//   //             </motion.div>
//   //           </div>
//   //         </section>

//   //         {/* ══════════════════════════════ FAQ ═══════════════════════════════════ */}
//   //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
//   //           <GoldDivider />

//   //           <div className="max-w-4xl mx-auto">
//   //             <SectionHeading>Frequently Asked Questions</SectionHeading>

//   //             <div className="space-y-4">
//   //               {faqs.map((faq, index) => (
//   //                 <motion.div key={index}
//   //                   variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.1}
//   //                   className={`rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-sm ${
//   //                     openIndex === index
//   //                       ? "border-[#C9A24D] bg-[#fdf9f3] shadow-[0_4px_24px_rgba(201,162,77,0.15)]"
//   //                       : "border-gray-200 bg-white hover:border-[#C9A24D]/60 hover:shadow-md"
//   //                   }`}
//   //                 >
//   //                   <button
//   //                     onClick={() => setOpenIndex(openIndex === index ? null : index)}
//   //                     className="w-full flex justify-between items-start p-7 text-left gap-4 group"
//   //                     aria-expanded={openIndex === index}
//   //                   >
//   //                     <div className="flex items-start gap-4 flex-1">
//   //                       <span className={`shrink-0 mt-1 w-1 self-stretch rounded-full transition-colors duration-300 ${
//   //                         openIndex === index ? "bg-[#C9A24D]" : "bg-gray-200 group-hover:bg-[#C9A24D]/50"
//   //                       }`} />
//   //                       <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
//   //                         openIndex === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"
//   //                       }`}>
//   //                         Q{index + 1}: {faq.q}
//   //                       </span>
//   //                     </div>
//   //                     <motion.div
//   //                       animate={{ rotate: openIndex === index ? 180 : 0 }}
//   //                       transition={{ duration: 0.25 }}
//   //                       className="shrink-0 mt-1"
//   //                     >
//   //                       <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
//   //                     </motion.div>
//   //                   </button>

//   //                   <AnimatePresence>
//   //                     {openIndex === index && (
//   //                       <motion.div
//   //                         initial={{ height: 0, opacity: 0 }}
//   //                         animate={{ height: "auto", opacity: 1 }}
//   //                         exit={{ height: 0, opacity: 0 }}
//   //                         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//   //                         className="overflow-hidden"
//   //                       >
//   //                         <div className="px-7 pb-7 border-t-2 border-[#C9A24D]/20 ml-7">
//   //                           <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
//   //                         </div>
//   //                       </motion.div>
//   //                     )}
//   //                   </AnimatePresence>
//   //                 </motion.div>
//   //               ))}
//   //             </div>
//   //           </div>
//   //         </section>

//   //         {/* ══════════════════════════ FINAL CTA ═════════════════════════════════ */}
//   //         <section className="relative py-28 text-center text-white overflow-hidden">
//   //           <Image src="/discussion.png" alt="NRI Legal Support Bangalore" fill className="object-cover" />
//   //           <div className="absolute inset-0 bg-black/80" />
//   //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
//   //           <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//   //           {/* animated rings */}
//   //           {[0, 1, 2].map((i) => (
//   //             <motion.div key={i}
//   //               initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
//   //               viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
//   //               className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
//   //               style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
//   //             />
//   //           ))}

//   //           <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
//   //             className="relative max-w-4xl mx-auto px-6"
//   //           >
//   //             {/* bordered content box */}
//   //             <div className="border border-[#C9A24D]/30 rounded-2xl px-10 py-16 relative">
//   //               {/* corner marks */}
//   //               {[
//   //                 "top-4 left-4 border-t-2 border-l-2",
//   //                 "top-4 right-4 border-t-2 border-r-2",
//   //                 "bottom-4 left-4 border-b-2 border-l-2",
//   //                 "bottom-4 right-4 border-b-2 border-r-2",
//   //               ].map((cls, i) => (
//   //                 <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
//   //               ))}

//   //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//   //                 className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
//   //               >
//   //                 S Jain &amp; Attorneys · NRI Legal Services
//   //               </motion.p>

//   //               <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
//   //                 className="text-3xl md:text-5xl font-bold mb-10 leading-tight"
//   //               >
//   //                 Protect your interests in India with expert support from an NRI Lawyer in Bangalore.
//   //               </motion.h2>

//   //               <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
//   //                 <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
//   //                   <Link href="/contact"
//   //                     className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
//   //                   >
//   //                     Request Call Back
//   //                   </Link>
//   //                 </motion.div>
//   //               </motion.div>

//   //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
//   //                 className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
//   //               >
//   //                 <span className="inline-block w-4 h-px bg-gray-600" />
//   //                 All matters handled with complete confidentiality and legal discretion.
//   //                 <span className="inline-block w-4 h-px bg-gray-600" />
//   //               </motion.p>
//   //             </div>
//   //           </motion.div>
//   //         </section>

//   //       </main>

//   //       <Footer />
//   //     </>
//   //   );
//   // }



"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";



export default function NRILawyerPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* HERO SECTION */}

        <section className="bg-[#0B0F14] pt-10 pb-8">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">

            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Trusted NRI Lawyers in Bangalore for Cross-Border Legal Matters
            </h1>

            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Our firm provides dedicated legal support as an NRI Lawyer in Bangalore, assisting Non-Resident Indians with property, family, and litigation matters in India.
            </p>

            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              We offer structured legal solutions while ensuring seamless coordination for clients residing abroad. Our goal is to protect your legal rights in India while minimizing cross-border risks.
            </p>

            <p className="text-[#C9A24D] font-semibold mb-8">
              Response within 24 hours guaranteed.
            </p>

            <div className="flex justify-center gap-4 flex-wrap mb-16">

              <Link
                href="/legal-consultation-in-bangalore"
                className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Book Confidential Consultation
              </Link>

              <a
                href="tel:+919000000000"
                className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition"
              >
                Call Now
              </a>

            </div>
          </div>

          {/* HERO IMAGE */}

          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/nri-legal.png"
                alt="NRI Lawyer in Bangalore"
                width={1400}
                height={800}
                className="w-full h-[420px] md:h-[520px] object-cover"
                priority
              />
            </div>
          </div>
        </section>


        {/* MAIN CONTENT */}

        <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">

          <h2 className="text-4xl font-semibold mb-6">
            Dedicated Legal Services for Non-Resident Indians
          </h2>

          <p className="text-gray-700 mb-12 max-w-4xl">
            Non-Resident Indians often face legal challenges that require representation in India while living overseas. As experienced NRI Legal Advisors and NRI Litigation Lawyers, we handle complex cross-border legal matters with clarity and efficiency.
            Our attorneys provide reliable legal services for NRIs, ensuring timely updates, proper documentation, and strong court representation in Bangalore.
          </p>


          {/* SERVICES */}

          <h3 className="text-3xl font-semibold mb-6">
            OUR NRI LEGAL SERVICES INCLUDE
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
            <li>▪ NRI Property Disputes & Due Diligence</li>
            <li>▪ Power of Attorney Drafting & Execution</li>
            <li>▪ NRI Family & Divorce Matters</li>
            <li>▪ Inheritance & Succession Issues</li>
            <li>▪ Court Representation & Litigation</li>
            <li>▪ Legal Advisory & Documentation Support</li>
            <li>▪ Title Verification & Transaction Management</li>
          </ul>


          {/* HOW WE WORK */}

          <h3 className="text-3xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h3>

          <div className="space-y-6 text-gray-700 mb-16 max-w-4xl">

            <p>
              <strong>Step 1: Case Review & Remote Consultation</strong><br />
              Understanding your legal concerns through virtual consultation.
            </p>

            <p>
              <strong>Step 2: Documentation & Authorization (POA)</strong><br />
              Guidance on executing Power of Attorney and required legal documents.
            </p>

            <p>
              We clearly explain legal risks, documentation requirements, and cross-border compliance aspects before proceeding.
            </p>

            <p>
              <strong>Step 3: Legal Strategy & Filing</strong><br />
              Preparation and filing of petitions, notices, or complaints as required.
            </p>

            <p>
              <strong>Step 4: Court Representation & Ongoing Updates</strong><br />
              Strong representation before courts while keeping you informed at every stage.
            </p>

          </div>


          {/* WHY CHOOSE */}

          <h3 className="text-3xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </h3>

          <ul className="space-y-3 text-gray-700 mb-20">
            <li>✓ Experienced NRI Property Lawyers</li>
            <li>✓ Skilled NRI Litigation Lawyer representation</li>
            <li>✓ Clear communication for overseas clients</li>
            <li>✓ Efficient case handling without frequent travel</li>
            <li>✓ Structured cross-border legal coordination</li>
          </ul>

        </section>


        {/* FAQ */}

        <section className="bg-[#F4F4F4] py-20">

          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

            <h3 className="text-4xl font-semibold mb-12">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6 text-gray-800">

              {[
                {
                  q: "Can NRIs handle property disputes without travelling to India?",
                  a: "Yes, through a valid Power of Attorney, legal proceedings can be managed by your appointed representative."
                },
                {
                  q: "How is Power of Attorney used for NRIs?",
                  a: "It authorizes a trusted person in India to act on your behalf for legal, property, and litigation matters."
                },
                {
                  q: "Do you represent NRIs in family court matters?",
                  a: "Yes, we handle divorce, custody, maintenance, and matrimonial disputes for Non-Resident Indians."
                },
                {
                  q: "What documents are required for NRI legal cases?",
                  a: "Passport copies, overseas address proof, property documents, agreements, and other relevant records."
                },
                {
                  q: "How do I verify clear property title?",
                  a: "Through legal title verification, encumbrance search, and detailed document review."
                },
                {
                  q: "Can NRIs buy or sell property through legal representation?",
                  a: "Yes, transactions can be managed through legally executed Power of Attorney and proper documentation."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >

                  <div className="flex justify-between items-center">

                    <h4 className="font-semibold text-lg">
                      {faq.q}
                    </h4>

                    <span className="text-2xl font-bold text-[#C9A24D]">
                      {openIndex === index ? "−" : "+"}
                    </span>

                  </div>

                  {openIndex === index && (
                    <p className="mt-4 text-gray-700">
                      {faq.a}
                    </p>
                  )}

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* FINAL CTA */}

        <section className="bg-[#0B0F14] py-28 text-center text-white">

          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Protect your interests in India with expert support from an NRI Lawyer in Bangalore
            </h2>

            <div className="flex justify-center gap-4 flex-wrap mt-10">

              <Link
                href="/contact"
                className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
              >
                Request Call Back
              </Link>

              <Link
                href="/legal-consultation-in-bangalore"
                className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Book Consultation
              </Link>

            </div>

            <p className="text-gray-400 mt-8 text-sm">
              All matters handled with complete confidentiality and legal discretion.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}