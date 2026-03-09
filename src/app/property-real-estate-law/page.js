// // "use client";

// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // export default function PropertyRealEstateLawPage() {

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
// //                 Property & Real Estate Law
// //               </span>
// //             </motion.p>


// //             <motion.h1
// //               variants={fadeUp}
// //               className="
// //                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
// //                 font-semibold
// //                 text-white
// //                 mb-6
// //               "
// //             >
// //               Property & Real Estate Law
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
// //               Professional legal assistance for property disputes, real estate
// //               transactions, ownership issues, and protection of your property rights.
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

// //             <div className="rounded-xl overflow-hidden shadow-2xl bg-white mt-99">

// //               <Image
// //                 src="/property.png"
// //                 alt="Property Real Estate Law"
// //                 width={1400}
// //                 height={800}
// //                 className="w-full h-[450px] md:h-[550px] object-cover"
// //                 priority
// //               />

              

// //             </div>

// //           </motion.div>

// //         </section>



// //         {/* SPACING */}

// //         <div className="h-64 md:h-80"></div>



// //         {/* ================= OVERVIEW ================= */}

// //         <motion.section
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={stagger}
// //         >

// //           <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-34">


// //             <motion.h2
// //               variants={fadeUp}
// //               className="text-4xl md:text-5xl font-semibold text-black mb-6"
// //             >
// //               Overview
// //             </motion.h2>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
// //             >
// //               Property and real estate law involves legal matters related to property
// //               ownership, transactions, disputes, and legal documentation. Our experienced
// //               lawyers provide professional guidance to ensure secure and legally compliant
// //               property dealings.
// //             </motion.p>



// //             {/* SERVICES */}

// //             <motion.h3
// //               variants={fadeUp}
// //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// //             >
// //               Our Property Law Services
// //             </motion.h3>


// //             <motion.ul
// //               variants={fadeUp}
// //               className="list-disc pl-6 space-y-6 text-gray-700 mb-16"
// //             >

// //               <li>Property Dispute Resolution</li>
// //               <li>Title Verification and Legal Due Diligence</li>
// //               <li>Sale Deed and Agreement Drafting</li>
// //               <li>Property Registration Support</li>
// //               <li>Real Estate Transaction Legal Support</li>
// //               <li>Ownership and Possession Disputes</li>

// //             </motion.ul>



// //             {/* IMAGE */}

// //             <motion.div variants={fadeUp} className="mb-16">

// //               <Image
// //                 src="/property1.png"
// //                 alt="Property Consultation"
// //                 width={1200}
// //                 height={600}
// //                 className="w-full rounded-xl shadow-lg"
// //               />

// //             </motion.div>



// //             {/* WHY CHOOSE */}

// //             <motion.h3
// //               variants={fadeUp}
// //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// //             >
// //               Why Choose Our Property Lawyers
// //             </motion.h3>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// //             >
// //               We provide reliable, professional, and strategic legal support to protect
// //               your property rights and ensure safe real estate transactions with complete
// //               legal compliance.
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
// //               alt="Property Consultation"
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
// //               Property Legal Assistance
// //             </p>


// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Protect Your Property Rights Today
// //             </h2>


// //             <p className="text-gray-300 mb-10">
// //               Get professional legal support for property disputes and real estate transactions.
// //             </p>

// //              <Link href="/contact">
// //             <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
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

// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function PropertyRealEstateLawPage() {
//   const [openIndex, setOpenIndex] = useState(null);

// const toggleFAQ = (index) => {
//   setOpenIndex(openIndex === index ? null : index);
// };
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const stagger = {
//     visible: { transition: { staggerChildren: 0.2 } },
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
//             className="max-w-7xl mx-auto px-6 text-center"
//           >
//             <motion.h1
//               variants={fadeUp}
//               className="text-4xl md:text-6xl font-semibold text-white mb-6"
//             >
//               Leading Property & Real Estate Lawyers in Bangalore for Transactions and Disputes
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
//             >
//               Our firm provides strategic legal support in Property & Real Estate Law matters,
//               assisting individuals, businesses, and NRIs with secure transactions and dispute resolution.
//               Our experienced property lawyer and real estate lawyer team ensures legally sound
//               documentation and strong representation in Bangalore.
//             </motion.p>

//             <motion.p
//               variants={fadeUp}
//               className="text-[#C9A24D] mt-6 font-medium"
//             >
//               Response within 24 hours guaranteed.
//             </motion.p>

//             {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"> */}
//             <div className="relative z-20 mt-8 flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/legal-consultation-in-bangalore">
//                 <button className="bg-[#C9A24D] text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
//                   Book Confidential Consultation
//                 </button>
//               </Link>
//               <Link href="tel:+919000000000">
//                 <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
//                   Call Now
//                 </button>
//               </Link>
//             </div>
//           </motion.div>

//           {/* HERO IMAGE */}
//          <div className="max-w-6xl mx-auto px-6 mt-16">
//   <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
//     <Image
//       src="/property.png"
//       alt="Property & Real Estate Lawyer in Bangalore"
//       width={1000}
//       height={500}
//       className="w-full h-[450px] md:h-[550px] object-cover"
//       priority
//     />
//   </div>
// </div>
//         </section>

//         {/* <div className="h-64 md:h-80"></div> */}

//         {/* ================= CONTENT ================= */}

//         <section className="max-w-6xl mx-auto px-6 py-16">

//           <h2 className="text-4xl font-semibold mb-6">
//             Trusted Legal Support for Property Matters
//           </h2>

//           <p className="text-gray-600 text-lg leading-relaxed mb-10">
//             Property transactions and disputes require precision and legal clarity.
//             Our attorneys handle complex real estate matters with structured due diligence
//             and risk assessment. As experienced property lawyers in Bangalore, we guide
//             clients through documentation, negotiations, and litigation with transparency
//             and professionalism.
//           </p>

//           {/* SERVICES */}
//           <h3 className="text-3xl font-semibold mb-6">
//             Our Property & Real Estate Services Include
//           </h3>

//           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
//             <li>▪ Property Due Diligence</li>
//             <li>▪ Sale Deed & Agreement Drafting</li>
//             <li>▪ Land & Title Verification</li>
//             <li>▪ Property Disputes & Litigation</li>
//             <li>▪ Builder & Real Estate Disputes</li>
//             <li>▪ Partition & Inheritance Matters</li>
//             <li>▪ Registration & Documentation Support</li>
//           </ul>

//           {/* SECOND IMAGE */}
//           <Image
//             src="/property1.png"
//             alt="Property Legal Consultation Bangalore"
//             width={1200}
//             height={600}
//             className="w-full rounded-xl shadow-lg mb-16"
//           />

//           {/* HOW WE WORK */}
//           <h3 className="text-3xl font-semibold mb-6">
//             Our Approach / How We Work
//           </h3>

//           <div className="space-y-6 text-gray-700">
//             <p><strong>Step 1: Legal Consultation</strong><br />
//               Understanding your transaction or dispute in detail.
//             </p>

//             <p><strong>Step 2: Document Review & Risk Assessment</strong><br />
//               Comprehensive verification of title, ownership, and compliance.
//               We clearly explain legal risks, possible outcomes, and ownership implications before proceeding.
//             </p>

//             <p><strong>Step 3: Strategy & Legal Action</strong><br />
//               Structured legal planning based on your objectives.
//             </p>

//             <p><strong>Step 4: Court / Tribunal Representation</strong><br />
//               Strong representation before courts and relevant authorities.
//             </p>
//           </div>

//           {/* WHY CHOOSE */}
//           <h3 className="text-3xl font-semibold mt-16 mb-6">
//             Why Choose Our Firm
//           </h3>

//           <ul className="space-y-4 text-gray-700">
//             <li>✓ Experienced property lawyer and real estate lawyer team</li>
//             <li>✓ Practical legal advice tailored to Bangalore property laws</li>
//             <li>✓ Strong litigation and documentation expertise</li>
//             <li>✓ Transparent process with clear communication</li>
//           </ul>
//         </section>

//         {/* ================= FAQ ================= */}

//         <section className="bg-gray-100 py-20">
//           <div className="max-w-6xl mx-auto px-6">
//             <h3 className="text-4xl font-semibold mb-10 text-center">
//               Frequently Asked Questions
//             </h3>

//            <div className="space-y-4">
//   {[
//     {
//       question: "Why is property due diligence important?",
//       answer:
//         "It helps identify ownership issues, encumbrances, zoning restrictions, and legal risks before purchase.",
//     },
//     {
//       question: "What documents are required for property verification?",
//       answer:
//         "Title deed, encumbrance certificate, tax receipts, layout approvals, identity proof, and previous ownership records.",
//     },
//     {
//       question: "How long does a property dispute case take?",
//       answer:
//         "Timelines depend on complexity, court proceedings, documentation, and evidence review.",
//     },
//     {
//       question: "Do you handle builder disputes?",
//       answer:
//         "Yes, we assist in resolving builder delays, agreement breaches, and RERA-related matters.",
//     },
//     {
//       question: "How do I verify clear property title?",
//       answer:
//         "Through legal title verification, encumbrance search, document review, and verification of ownership records.",
//     },
//     {
//       question: "Can NRIs buy or sell property through legal representation?",
//       answer:
//         "Yes, transactions can be handled through legal authorization, Power of Attorney documentation, and structured legal oversight.",
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
//           </div>
//         </section>

//         {/* ================= FINAL CTA ================= */}

//         <section className="relative py-28 overflow-hidden">
//           <Image
//             src="/discussion.png"
//             alt="Property Lawyer Consultation"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-black/70"></div>

//           <div className="relative max-w-4xl mx-auto text-center px-6">
//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Get Immediate Legal Help from a Property Lawyer in Bangalore
//             </h2>

//             <p className="text-gray-400 mb-10">
//               Schedule a consultation with our experienced attorneys today.
//               All matters handled with complete confidentiality and legal discretion.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/legal-consultation-in-bangalore">
//                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold">
//                   Book Confidential Consultation
//                 </button>
//               </Link>

//               <Link href="tel:+919000000000">
//                 <button className="border border-white text-white px-8 py-4 rounded-lg">
//                   Request Call Back
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }


























// "use client";

// import { useState, useRef } from "react";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // ─── DATA ─────────────────────────────────────────────────────────────────────

// const services = [
//   "Property Due Diligence",
//   "Sale Deed & Agreement Drafting",
//   "Land & Title Verification",
//   "Property Disputes & Litigation",
//   "Builder & Real Estate Disputes",
//   "Partition & Inheritance Matters",
//   "Registration & Documentation Support",
// ];

// const steps = [
//   {
//     number: "01",
//     title: "Initial Legal Consultation",
//     body: "Every matter begins with a detailed consultation where our property lawyers in Bangalore take the time to understand your transaction, dispute, or legal concern. This allows us to evaluate the situation, identify potential risks, and provide clear legal advice on the available options.",
//   },
//   {
//     number: "02",
//     title: "Document Review & Risk Assessment",
//     body: "Property matters require thorough verification of documents and ownership records. Our real estate lawyer team conducts a careful review of title deeds, ownership records, agreements, and regulatory compliance. We also identify any legal risks or discrepancies and clearly explain the potential implications before moving forward.",
//   },
//   {
//     number: "03",
//     title: "Legal Strategy & Action Plan",
//     body: "Based on the findings and your objectives, we develop a structured legal strategy. This may include drafting or reviewing property agreements, negotiating settlements, or preparing for legal action in cases involving property disputes or contractual issues.",
//   },
//   {
//     number: "04",
//     title: "Court or Tribunal Representation",
//     body: "If the matter requires legal proceedings, our lawyers provide strong representation before courts, tribunals, and relevant authorities. Our focus is on protecting your rights and pursuing a legally sound resolution in property litigation matters.",
//   },
// ];

// const whyChoose = [
//   {
//     icon: "🏛",
//     title: "Experienced Property & Real Estate Lawyer Team",
//     body: "Our legal team handles a wide range of matters including property documentation, real estate transactions, and property dispute litigation.",
//   },
//   {
//     icon: "📋",
//     title: "Practical Legal Guidance Based on Bangalore Property Laws",
//     body: "We provide legal advice tailored to the regulatory framework and real estate practices specific to Bangalore and Karnataka property laws.",
//   },
//   {
//     icon: "⚖",
//     title: "Strong Documentation and Litigation Expertise",
//     body: "From property agreements and title verification to dispute resolution and court representation, our lawyers provide comprehensive legal support.",
//   },
//   {
//     icon: "🔍",
//     title: "Transparent Process and Clear Communication",
//     body: "We believe clients should clearly understand the legal process. Our team ensures transparent communication and keeps you informed at every stage of the matter.",
//   },
// ];

// const faqs = [
//   {
//     q: "Why is property due diligence important?",
//     a: "It helps identify ownership issues, encumbrances, zoning restrictions, and legal risks before purchase.",
//   },
//   {
//     q: "What documents are required for property verification?",
//     a: "Title deed, encumbrance certificate, tax receipts, layout approvals, identity proof, and previous ownership records.",
//   },
//   {
//     q: "How long does a property dispute case take?",
//     a: "Timelines depend on complexity, court proceedings, documentation, and evidence review.",
//   },
//   {
//     q: "Do you handle builder disputes?",
//     a: "Yes, we assist in resolving builder delays, agreement breaches, and RERA-related matters.",
//   },
//   {
//     q: "How do I verify clear property title?",
//     a: "Through legal title verification, encumbrance search, document review, and verification of ownership records.",
//   },
//   {
//     q: "Can NRIs buy or sell property through legal representation?",
//     a: "Yes, transactions can be handled through legal authorization, Power of Attorney documentation, and structured legal oversight.",
//   },
// ];

// // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: (i = 0) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const fadeLeft = {
//   hidden: { opacity: 0, x: -40 },
//   show: (i = 0) => ({
//     opacity: 1, x: 0,
//     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.93 },
//   show: (i = 0) => ({
//     opacity: 1, scale: 1,
//     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } },
// };

// // ─── HELPERS ──────────────────────────────────────────────────────────────────

// function GoldDivider() {
//   return (
//     <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
//   );
// }

// function SectionHeading({ children, light = false }) {
//   return (
//     <motion.div
//       variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
//       className="mb-10"
//     >
//       <motion.span
//         initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
//         className="block h-[3px] bg-[#C9A24D] mb-5"
//       />
//       <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
//         {children}
//       </h2>
//     </motion.div>
//   );
// }

// // ─── PAGE ─────────────────────────────────────────────────────────────────────

// export default function PropertyRealEstateLawPage() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const heroOpa = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   return (
//     <>
//       <Navbar />

//       <main className="bg-white overflow-hidden">

//         {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
//         <section ref={heroRef} className="relative bg-[#0B0F14] overflow-hidden">

//           {/* top gold border */}
//           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />

//           {/* animated corner brackets */}
//           {[
//             "top-8 left-8 border-t-2 border-l-2",
//             "top-8 right-8 border-t-2 border-r-2",
//           ].map((cls, i) => (
//             <motion.div key={i}
//               initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
//               className={`absolute w-12 h-12 border-[#C9A24D] z-10 ${cls}`}
//             />
//           ))}

//           {/* subtle gold grid */}
//           <div className="absolute inset-0 opacity-[0.04] z-0" style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
//               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
//           }} />

//           <motion.div style={{ y: heroY, opacity: heroOpa }}
//             className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-16 text-center"
//           >
//             {/* eyebrow */}
//             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
//               className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
//             >
//               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
//               S Jain &amp; Attorneys · Bangalore
//               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
//             </motion.p>

//             {/* H1 */}
//             <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
//               className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8"
//             >
//               Leading Property &amp; Real Estate Lawyers in Bangalore{" "}
//               <span className="text-[#C9A24D]">for Transactions and Disputes</span>
//             </motion.h1>

//             {/* Intro para 1 */}
//             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
//               className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
//             >
//               Our firm provides strategic legal support in Property &amp; Real Estate Law matters,
//               assisting individuals, businesses, and NRIs with secure transactions and dispute
//               resolution. Our experienced property lawyer and real estate lawyer team ensures
//               legally sound documentation and strong representation in Bangalore.
//             </motion.p>

//             {/* Intro para 2 — from brief */}
//             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
//               className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
//             >
//               Our goal is to ensure legally valid ownership, prevent disputes, and protect your
//               long-term property interests.
//             </motion.p>

//             {/* 24-hour guarantee */}
//             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
//               className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
//             >
//               Response within 24 hours guaranteed.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
//               className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
//             >
//               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                 <Link href="/legal-consultation-in-bangalore"
//                   className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200"
//                 >
//                   Book Confidential Consultation
//                 </Link>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                 <Link href="tel:+919000000000"
//                   className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
//                 >
//                   Call Now
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* Hero image — inside hero section, below CTAs */}
//           <motion.div
//             variants={scaleIn} initial="hidden" animate="show"
//             className="relative z-10 max-w-6xl mx-auto px-6 pb-16"
//           >
//             <div className="rounded-xl overflow-hidden border border-[#C9A24D]/30 shadow-2xl">
//               <Image
//                 src="/property.png"
//                 alt="Property & Real Estate Lawyer in Bangalore"
//                 width={1200} height={550}
//                 className="w-full h-[450px] md:h-[550px] object-cover"
//                 priority
//               />
//             </div>
//           </motion.div>

//           {/* scroll indicator */}
//           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
//             className="relative z-10 pb-8 flex justify-center"
//           >
//             <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
//               className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
//             />
//           </motion.div>
//         </section>

//         {/* ══════════════════ TRUSTED LEGAL SUPPORT FOR PROPERTY MATTERS ══════════ */}
//         <section className="py-28 px-6 bg-white relative overflow-hidden">
//           {/* animated right vertical rule */}
//           <motion.div
//             initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
//             transition={{ duration: 1.2, delay: 0.3 }}
//             className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
//           />

//           <div className="max-w-6xl mx-auto">
//             <SectionHeading>Trusted Legal Support for Property Matters</SectionHeading>

//             {/* Both full paragraphs from brief */}
//             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="space-y-6 text-gray-600 text-lg leading-relaxed"
//             >
//               <motion.p variants={fadeUp}>
//                 Property transactions and disputes often involve significant financial and legal
//                 implications, which makes careful legal guidance essential. At S Jain Attorneys,
//                 our legal team assists individuals, businesses, and investors in handling a wide
//                 range of property-related matters with clarity, diligence, and attention to detail.
//               </motion.p>
//               <motion.p variants={fadeUp} custom={0.5}>
//                 Whether you are purchasing property, resolving a dispute, or seeking legal guidance
//                 on real estate matters, our real estate and property law team in Bangalore is
//                 committed to delivering practical legal solutions with transparency and
//                 professionalism.
//               </motion.p>
//             </motion.div>
//           </div>
//         </section>

//         {/* ════════════════════════ OUR SERVICES ════════════════════════════════ */}
//         <section className="py-28 px-6 bg-[#f8f6f1] relative">
//           <GoldDivider />
//           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//           <div className="max-w-6xl mx-auto">
//             {/* H3 sub-heading from brief */}
//             <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
//             >
//               Our Property &amp; Real Estate Services Include
//             </motion.h3>

//             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="grid md:grid-cols-2 gap-5 mb-16"
//             >
//               {services.map((item, i) => (
//                 <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
//                   whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
//                   className="bg-white border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
//                 >
//                   <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">
//                     {String(i + 1).padStart(2, "0")}
//                   </span>
//                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
//                     <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
//                       {item}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* second image */}
//             <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="rounded-xl overflow-hidden border border-gray-100 shadow-lg"
//             >
//               <Image
//                 src="/property1.png"
//                 alt="Property Legal Consultation Bangalore"
//                 width={1200} height={600}
//                 className="w-full object-cover"
//               />
//             </motion.div>
//           </div>
//         </section>

//         {/* ════════════════════════════ OUR APPROACH ════════════════════════════ */}
//         <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
//           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//           {/* decorative watermark */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 0.04, x: 0 }}
//             viewport={{ once: true }} transition={{ duration: 1.2 }}
//             className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[22rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
//           >
//             4
//           </motion.div>

//           <div className="max-w-6xl mx-auto relative">
//             <SectionHeading light>Our Approach – How We Work</SectionHeading>

//             {/* Approach intro paragraph from brief */}
//             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="text-gray-400 text-lg leading-relaxed mb-14 max-w-3xl"
//             >
//               We understand that property matters often involve significant financial investments
//               and long-term implications. Whether you are dealing with a real estate transaction or
//               a property dispute, our approach focuses on providing clear legal guidance, careful
//               documentation review, and strategic representation.
//             </motion.p>

//             <div className="space-y-8">
//               {steps.map((step, i) => (
//                 <motion.div key={step.number}
//                   variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.2}
//                   className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-8 relative group transition-colors duration-300"
//                 >
//                   {/* corner ornaments */}
//                   <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />
//                   <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />

//                   <div className="flex gap-6 items-start">
//                     <span className="text-[#C9A24D] font-black text-3xl shrink-0 leading-none">{step.number}</span>
//                     <div className="border-l border-[#C9A24D]/30 pl-6">
//                       <h3 className="text-xl font-bold text-white mb-3">
//                         Step {i + 1}: {step.title}
//                       </h3>
//                       <p className="text-gray-400 leading-relaxed">{step.body}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ════════════════════════════ WHY CHOOSE ══════════════════════════════ */}
//         <section className="py-28 px-6 bg-white relative overflow-hidden">
//           <GoldDivider />
//           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//           <div className="max-w-6xl mx-auto">
//             <SectionHeading>Why Choose Our Property Lawyers</SectionHeading>

//             {/* Intro paragraph from brief */}
//             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="text-gray-600 text-lg leading-relaxed mb-14 max-w-3xl"
//             >
//               Clients rely on us for property and real estate legal matters because of our
//               experience, practical approach, and attention to detail.
//             </motion.p>

//             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="grid md:grid-cols-2 gap-6"
//             >
//               {whyChoose.map((item, i) => (
//                 <motion.div key={i} variants={scaleIn} custom={i * 0.15}
//                   whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
//                   className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 relative group overflow-hidden transition-colors duration-300"
//                 >
//                   <motion.span
//                     initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
//                     className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
//                     style={{ transition: "transform 0.3s ease" }}
//                   />
//                   <span className="text-3xl mb-4 block">{item.icon}</span>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-500 leading-relaxed">{item.body}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ══════════════════════════════ FAQ ═══════════════════════════════════ */}
//         <section className="py-28 px-6 bg-[#f8f6f1] relative">
//           <GoldDivider />

//           <div className="max-w-4xl mx-auto">
//             <SectionHeading>Frequently Asked Questions</SectionHeading>

//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <motion.div key={index}
//                   variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.1}
//                   className={`rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-sm ${
//                     openIndex === index
//                       ? "border-[#C9A24D] bg-[#fdf9f3] shadow-[0_4px_24px_rgba(201,162,77,0.15)]"
//                       : "border-gray-200 bg-white hover:border-[#C9A24D]/60 hover:shadow-md"
//                   }`}
//                 >
//                   <button
//                     onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                     className="w-full flex justify-between items-start p-7 text-left gap-4 group"
//                     aria-expanded={openIndex === index}
//                   >
//                     <div className="flex items-start gap-4 flex-1">
//                       <span className={`shrink-0 mt-1 w-1 self-stretch rounded-full transition-colors duration-300 ${
//                         openIndex === index ? "bg-[#C9A24D]" : "bg-gray-200 group-hover:bg-[#C9A24D]/50"
//                       }`} />
//                       <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
//                         openIndex === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"
//                       }`}>
//                         Q{index + 1}: {faq.q}
//                       </span>
//                     </div>
//                     <motion.div
//                       animate={{ rotate: openIndex === index ? 180 : 0 }}
//                       transition={{ duration: 0.25 }}
//                       className="shrink-0 mt-1"
//                     >
//                       <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndex === index && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-7 pb-7 border-t-2 border-[#C9A24D]/20 ml-7">
//                           <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ══════════════════════════ FINAL CTA ═════════════════════════════════ */}
//         <section className="relative py-28 text-center text-white overflow-hidden">
//           <Image src="/discussion.png" alt="Property Lawyer Consultation" fill className="object-cover" />
//           <div className="absolute inset-0 bg-black/80" />
//           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
//           <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//           {/* animated rings */}
//           {[0, 1, 2].map((i) => (
//             <motion.div key={i}
//               initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
//               viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
//               className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
//               style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
//             />
//           ))}

//           <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
//             className="relative max-w-4xl mx-auto px-6"
//           >
//             {/* bordered content box */}
//             <div className="border border-[#C9A24D]/30 rounded-2xl px-10 py-16 relative">
//               {/* corner marks */}
//               {[
//                 "top-4 left-4 border-t-2 border-l-2",
//                 "top-4 right-4 border-t-2 border-r-2",
//                 "bottom-4 left-4 border-b-2 border-l-2",
//                 "bottom-4 right-4 border-b-2 border-r-2",
//               ].map((cls, i) => (
//                 <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
//               ))}

//               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//                 className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
//               >
//                 S Jain &amp; Attorneys · Property &amp; Real Estate Law
//               </motion.p>

//               {/* H2 — exact text from brief */}
//               <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
//                 className="text-3xl md:text-5xl font-bold mb-10 leading-tight"
//               >
//                 Secure immediate legal assistance from a leading Property Lawyer in Bangalore.
//               </motion.h2>

//               {/* Single CTA button — brief specifies only [ Request Call Back ] */}
//               <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
//                 <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
//                   <Link href="/contact"
//                     className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
//                   >
//                     Request Call Back
//                   </Link>
//                 </motion.div>
//               </motion.div>

//               {/* confidentiality note */}
//               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
//                 className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
//               >
//                 <span className="inline-block w-4 h-px bg-gray-600" />
//                 All matters handled with complete confidentiality and legal discretion.
//                 <span className="inline-block w-4 h-px bg-gray-600" />
//               </motion.p>
//             </div>
//           </motion.div>
//         </section>

//       </main>

//       <Footer />
//     </>
//   );
// }


"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

/* ================= SEO META ================= */

export default function PropertyRealEstateLawPage() {

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
            className="max-w-7xl mx-auto px-6 text-center"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-semibold text-white mb-6"
            >
              Leading Property & Real Estate Lawyers in Bangalore for Transactions and Disputes
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Our firm provides strategic legal support in Property & Real Estate Law matters, assisting individuals, businesses, and NRIs with secure transactions and dispute resolution. Our experienced property lawyer and real estate lawyer team ensures legally sound documentation and strong representation in Bangalore.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg max-w-3xl mx-auto mt-4"
            >
              Our goal is to ensure legally valid ownership, prevent disputes, and protect your long-term property interests.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#C9A24D] mt-6 font-medium"
            >
              Response within 24 hours guaranteed.
            </motion.p>

            <div className="relative z-20 mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/legal-consultation-in-bangalore">
                <button className="bg-[#C9A24D] text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
                  Book Confidential Consultation
                </button>
              </Link>

              <Link href="tel:+919000000000">
                <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                  Call Now
                </button>
              </Link>
            </div>
          </motion.div>

          {/* HERO IMAGE */}

          <div className="max-w-6xl mx-auto px-6 mt-16">
            <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
              <Image
                src="/property.png"
                alt="Property & Real Estate Lawyer in Bangalore"
                width={1000}
                height={500}
                className="w-full h-[450px] md:h-[550px] object-cover"
                priority
              />
            </div>
          </div>
        </section>


        {/* ================= CONTENT ================= */}

        <section className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-4xl font-semibold mb-6">
            Trusted Legal Support for Property Matters
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Property transactions and disputes require precision and legal clarity. Our attorneys handle complex real estate matters with structured due diligence and risk assessment.
            As experienced property lawyers in Bangalore, we guide clients through documentation, negotiations, and litigation with transparency and professionalism.
          </p>

          {/* SERVICES */}

          <h3 className="text-3xl font-semibold mb-6">
            Our Property & Real Estate Services Include
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
            <li>▪ Property Due Diligence</li>
            <li>▪ Sale Deed & Agreement Drafting</li>
            <li>▪ Land & Title Verification</li>
            <li>▪ Property Disputes & Litigation</li>
            <li>▪ Builder & Real Estate Disputes</li>
            <li>▪ Partition & Inheritance Matters</li>
            <li>▪ Registration & Documentation Support</li>
          </ul>

          <Image
            src="/property1.png"
            alt="Property Legal Consultation Bangalore"
            width={1200}
            height={600}
            className="w-full rounded-xl shadow-lg mb-16"
          />

          {/* HOW WE WORK */}

          <h3 className="text-3xl font-semibold mb-6">
            Our Approach / How We Work
          </h3>

          <div className="space-y-6 text-gray-700">

            <p>
              <strong>Step 1: Legal Consultation</strong><br />
              Understanding your transaction or dispute in detail.
            </p>

            <p>
              <strong>Step 2: Document Review & Risk Assessment</strong><br />
              Comprehensive verification of title, ownership, and compliance.
              We clearly explain legal risks, possible outcomes, and ownership implications before proceeding.
            </p>

            <p>
              <strong>Step 3: Strategy & Legal Action</strong><br />
              Structured legal planning based on your objectives.
            </p>

            <p>
              <strong>Step 4: Court / Tribunal Representation</strong><br />
              Strong representation before courts and relevant authorities.
            </p>

          </div>

          {/* WHY CHOOSE */}

          <h3 className="text-3xl font-semibold mt-16 mb-6">
            Why Choose Our Firm
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>✓ Experienced property lawyer and real estate lawyer team</li>
            <li>✓ Practical legal advice tailored to Bangalore property laws</li>
            <li>✓ Strong litigation and documentation expertise</li>
            <li>✓ Transparent process with clear communication</li>
          </ul>

        </section>


        {/* ================= FAQ ================= */}

        <section className="bg-gray-100 py-20">

          <div className="max-w-6xl mx-auto px-6">

            <h3 className="text-4xl font-semibold mb-10 text-center">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4">

              {[
                {
                  question: "Why is property due diligence important?",
                  answer:
                    "It helps identify ownership issues, encumbrances, zoning restrictions, and legal risks before purchase.",
                },
                {
                  question: "What documents are required for property verification?",
                  answer:
                    "Title deed, encumbrance certificate, tax receipts, layout approvals, identity proof, and previous ownership records.",
                },
                {
                  question: "How long does a property dispute case take?",
                  answer:
                    "Timelines depend on complexity, court proceedings, documentation, and evidence review.",
                },
                {
                  question: "Do you handle builder disputes?",
                  answer:
                    "Yes, we assist in resolving builder delays, agreement breaches, and RERA-related matters.",
                },
                {
                  question: "How do I verify clear property title?",
                  answer:
                    "Through legal title verification, encumbrance search, document review, and verification of ownership records.",
                },
                {
                  question: "Can NRIs buy or sell property through legal representation?",
                  answer:
                    "Yes, transactions can be handled through legal authorization, Power of Attorney documentation, and structured legal oversight.",
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

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="relative py-28 overflow-hidden">

          <Image
            src="/discussion.png"
            alt="Property Lawyer Consultation"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative max-w-4xl mx-auto text-center px-6">

            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Secure Immediate Legal Assistance from a Leading Property Lawyer in Bangalore
            </h2>

            <p className="text-gray-400 mb-10">
              All matters handled with complete confidentiality and legal discretion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link href="/legal-consultation-in-bangalore">
                <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold">
                  Book Confidential Consultation
                </button>
              </Link>

              <Link href="tel:+919000000000">
                <button className="border border-white text-white px-8 py-4 rounded-lg">
                  Request Call Back
                </button>
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}