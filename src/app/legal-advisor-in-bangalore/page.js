// // // "use client";

// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";

// // // export default function LegalAdvisoryRegulatoryCompliancePage() {

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
// // //                 Legal Advisory & Regulatory Compliance
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
// // //               Legal Advisory & Regulatory Compliance
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
// // //               Expert legal advisory services ensuring your business complies
// // //               with all regulatory requirements while minimizing risk and
// // //               ensuring smooth operational governance.
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
// // //                 src="/legal-advisory.png"
// // //                 alt="Legal Advisory Regulatory Compliance"
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
// // //               Legal advisory and regulatory compliance services help businesses
// // //               operate within legal frameworks while minimizing risks. Our legal
// // //               experts provide strategic guidance, compliance management, and
// // //               regulatory support to ensure smooth and legally compliant operations.
// // //             </motion.p>



// // //             {/* ================= SERVICES ================= */}

// // //             <motion.h3
// // //               variants={fadeUp}
// // //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// // //             >
// // //               Our Legal Advisory Services
// // //             </motion.h3>


// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
// // //             >
// // //               We provide professional legal advisory and compliance solutions
// // //               tailored to businesses, startups, and corporate organizations.
// // //             </motion.p>



// // //             <motion.ul
// // //               variants={fadeUp}
// // //               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
// // //             >

// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Corporate Legal Advisory:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Ongoing legal support for business operations and decision making.
// // //                 </p>
// // //               </li>


// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Regulatory Compliance Management:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Ensuring compliance with government laws and regulatory authorities.
// // //                 </p>
// // //               </li>


// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Contract Review & Drafting:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Drafting and reviewing legal contracts to protect business interests.
// // //                 </p>
// // //               </li>


// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Risk Assessment & Legal Audits:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Identifying legal risks and ensuring regulatory compliance.
// // //                 </p>
// // //               </li>


// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Licensing & Regulatory Approvals:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Assistance with licenses, registrations, and regulatory approvals.
// // //                 </p>
// // //               </li>


// // //               <li>
// // //                 <span className="font-semibold text-black">
// // //                   Business Compliance Advisory:
// // //                 </span>
// // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // //                   Ensuring ongoing compliance with corporate and government regulations.
// // //                 </p>
// // //               </li>

// // //             </motion.ul>



// // //             {/* IMAGE */}

// // //             <motion.div variants={fadeUp} className="mb-16">

// // //               <Image
// // //                 src="/legal-compliance.png"
// // //                 alt="Legal Compliance Consultation"
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
// // //               Why Choose Us for Legal Advisory
// // //             </motion.h3>


// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// // //             >
// // //               Our legal experts provide strategic advisory, regulatory compliance,
// // //               and risk management services. We help businesses stay compliant,
// // //               reduce legal risks, and operate confidently within the legal framework.
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
// // //               alt="Legal Consultation"
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
// // //               Legal Compliance Experts
// // //             </p>


// // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // //               Ensure Your Business is Legally Compliant
// // //             </h2>


// // //             <p className="text-gray-300 text-base md:text-lg mb-10">
// // //               Get expert legal advisory and regulatory compliance support today.
// // //             </p>

// // //            <Link href="/contact">
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

// // export default function LegalAdvisorPage() {

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.8, ease: "easeOut" }
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       <main className="bg-white overflow-hidden">

// //         {/* ================= HERO ================= */}

// //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// //           <div className="max-w-7xl mx-auto px-6 text-center">

// //             <motion.h1
// //               variants={fadeUp}
// //               initial="hidden"
// //               animate="visible"
// //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// //             >
// //               Expert Legal Advisor in Bangalore for Strategic Advisory & Regulatory Compliance
// //             </motion.h1>

// //             <motion.p
// //               variants={fadeUp}
// //               initial="hidden"
// //               animate="visible"
// //               className="text-gray-300 max-w-3xl mx-auto mb-6"
// //             >
// //               Our firm provides structured legal advisory and compliance solutions for businesses in Bangalore, helping minimize regulatory risk and strengthen governance.
// //             </motion.p>

// //             <motion.p
// //               variants={fadeUp}
// //               initial="hidden"
// //               animate="visible"
// //               className="text-[#C9A24D] font-semibold mb-8"
// //             >
// //               Response within 24 hours guaranteed.
// //             </motion.p>

// //             <div className="flex justify-center gap-4 flex-wrap">
// //               <Link
// //                 href="/legal-consultation-in-bangalore"
// //                 className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
// //               >
// //                 Book Confidential Consultation
// //               </Link>

// //               <a
// //                 href="tel:+919000000000"
// //                 className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// //               >
// //                 Call Now
// //               </a>
// //             </div>

// //           </div>

// //           {/* HERO IMAGE (NOT REMOVED) */}
// //           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20">
// //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
// //               <Image
// //                 src="/legal-advisory.png"
// //                 alt="Legal Advisor in Bangalore"
// //                 width={1400}
// //                 height={800}
// //                 className="w-full h-[400px] md:h-[500px] object-cover"
// //                 priority
// //               />
// //             </div>
// //           </div>

// //         </section>

// //         <div className="h-40 md:h-60"></div>

// //         {/* ================= CONTENT ================= */}

// //         <section className="max-w-6xl mx-auto px-6 py-16 mt-24">

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Strategic Legal Advisory & Compliance Support
// //           </h2>

// //           <p className="text-gray-600 mb-12">
// //             As a trusted Legal Advisor in Bangalore, we assist businesses with regulatory compliance, contract drafting, governance structuring, and risk mitigation strategies.
// //           </p>

// //           <h3 className="text-3xl font-semibold mb-6">
// //             Our Legal Advisory Services Include
// //           </h3>

// //           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
// //             <li>▪ Corporate Legal Advisory</li>
// //             <li>▪ Regulatory Compliance Review</li>
// //             <li>▪ Contract Drafting & Vetting</li>
// //             <li>▪ Risk Assessment & Governance Support</li>
// //             <li>▪ Company Law Advisory</li>
// //             <li>▪ Legal Retainership Services</li>
// //           </ul>

// //           {/* SECOND IMAGE (NOT REMOVED) */}
// //           <div className="mb-16">
// //             <Image
// //               src="/legal-compliance.png"
// //               alt="Legal Compliance Consultation"
// //               width={1200}
// //               height={600}
// //               className="w-full rounded-xl shadow-lg"
// //             />
// //           </div>

// //         </section>

// //         {/* ================= FAQ ================= */}

// //         <section className="bg-[#F4F4F4] py-20">
// //           <div className="max-w-6xl mx-auto px-6">
// //             <h3 className="text-4xl font-bold mb-12">
// //               Frequently Asked Questions
// //             </h3>

// //             <div className="space-y-10 text-gray-800">

// //               <div>
// //                 <h4 className="font-semibold text-lg">
// //                   What does a legal advisor do for businesses?
// //                 </h4>
// //                 <p className="mt-2 text-gray-700">
// //                   A legal advisor provides strategic guidance on compliance, contracts, governance, and risk management.
// //                 </p>
// //               </div>

// //               <div>
// //                 <h4 className="font-semibold text-lg">
// //                   Why is regulatory compliance important?
// //                 </h4>
// //                 <p className="mt-2 text-gray-700">
// //                   Compliance helps prevent penalties, litigation, and reputational risk.
// //                 </p>
// //               </div>

// //               <div>
// //                 <h4 className="font-semibold text-lg">
// //                   Do you provide ongoing legal support?
// //                 </h4>
// //                 <p className="mt-2 text-gray-700">
// //                   Yes, we offer retainership and long-term advisory services.
// //                 </p>
// //               </div>

// //             </div>
// //           </div>
// //         </section>

// //         {/* ================= FINAL CTA ================= */}

// //         <section className="relative py-28 overflow-hidden">
// //           <div className="absolute inset-0">
// //             <Image
// //               src="/discussion.png"
// //               alt="Legal Consultation"
// //               fill
// //               className="object-cover"
// //             />
// //             <div className="absolute inset-0 bg-black/70"></div>
// //           </div>

// //           <div className="relative max-w-5xl mx-auto px-6 text-center">
// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Get Immediate Legal Help Today
// //             </h2>

// //             <p className="text-gray-300 mb-10">
// //               Consult our experienced legal advisory experts in Bangalore.
// //             </p>

// //             <Link href="/legal-consultation-in-bangalore">
// //               <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// //                 Book Confidential Consultation
// //               </button>
// //             </Link>
// //           </div>
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
// import Link from "next/link";

// export default function LegalAdvisorPage() {
//   return (
//     <>
//       <Navbar />

//       <main className="bg-white overflow-hidden">

//         {/* ================= HERO ================= */}

//         <section className="relative bg-[#0B0F14] pt-32 pb-40 text-center">

//           <div className="max-w-6xl mx-auto px-6">

//             <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
//               Expert Legal Advisor in Bangalore for Strategic Advisory & Regulatory Compliance
//             </h1>

//             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
//               Our firm provides strategic guidance as a Legal Advisor in Bangalore, assisting businesses with regulatory compliance, governance, and risk management. Our experienced attorneys deliver structured advisory services tailored to corporate and commercial requirements.
//             </p>

//             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
//               Our goal is to strengthen your legal framework, prevent regulatory exposure, and support sustainable business growth through proactive legal planning.
//             </p>

//             <p className="text-[#C9A24D] font-semibold mb-8">
//               Response within 24 hours guaranteed.
//             </p>

//             {/* BUTTONS FIXED */}

//             <div className="flex justify-center gap-4 flex-wrap">

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

//           {/* HERO IMAGE (NOT REMOVED) */}

//           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20">
//             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
//               <Image
//                 src="/legal-advisory.png"
//                 alt="Legal Advisor in Bangalore"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[400px] md:h-[500px] object-cover"
//                 priority
//               />
//             </div>
//           </div>

//         </section>

//         <div className="h-48 md:h-64"></div>

//         {/* ================= CONTENT ================= */}

//         <section className="max-w-6xl mx-auto px-6 py-16 mt-44">

//           <h2 className="text-4xl font-semibold mb-6">
//             Strategic Legal Advisory & Compliance Support
//           </h2>

//           <p className="text-gray-700 mb-12">
//             Businesses operate in a dynamic regulatory environment where legal oversight is essential. As a trusted Business Legal Advisor and Regulatory Compliance Lawyer, we assist companies in maintaining statutory compliance and minimizing legal risk.
//             Our Corporate Compliance Lawyer team provides practical legal solutions, ensuring your organization operates within applicable laws while protecting its long-term interests.
//           </p>

//           <h3 className="text-3xl font-semibold mb-6">
//             OUR LEGAL ADVISORY & COMPLIANCE SERVICES INCLUDE
//           </h3>

//           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
//             <li>▪ Corporate Legal Advisory</li>
//             <li>▪ Regulatory Compliance Review</li>
//             <li>▪ Contract Drafting & Vetting</li>
//             <li>▪ Risk Assessment & Governance Support</li>
//             <li>▪ Company Law & Corporate Structuring</li>
//             <li>▪ Ongoing Legal Retainership Services</li>
//             <li>▪ Legal Audits & Compliance Health Checks</li>
//           </ul>

//           <h3 className="text-3xl font-semibold mb-6">
//             OUR APPROACH / HOW WE WORK
//           </h3>

//           <div className="space-y-6 text-gray-700 mb-16">

//             <p><strong>Step 1: Business Assessment & Legal Review</strong><br />
//               Understanding your company’s operational and regulatory framework.
//             </p>

//             <p><strong>Step 2: Compliance Gap Analysis</strong><br />
//               Identifying potential compliance risks and legal exposure areas.
//             </p>

//             <p>
//               We clearly explain regulatory risks, possible legal consequences, and corrective measures before implementation.
//             </p>

//             <p><strong>Step 3: Strategic Advisory & Documentation</strong><br />
//               Drafting policies, agreements, and internal governance documents.
//             </p>

//             <p><strong>Step 4: Continuous Monitoring & Support</strong><br />
//               Providing ongoing guidance as a Legal Compliance Consultant to ensure regulatory alignment.
//             </p>

//           </div>

//           <h3 className="text-3xl font-semibold mb-6">
//             WHY CHOOSE OUR FIRM
//           </h3>

//           <ul className="space-y-3 text-gray-700 mb-20">
//             <li>✓ Experienced Corporate Compliance Lawyers</li>
//             <li>✓ Business-focused legal advisory approach</li>
//             <li>✓ Proactive risk management strategies</li>
//             <li>✓ Structured documentation and governance expertise</li>
//             <li>✓ Transparent and strategic legal guidance</li>
//           </ul>

//         </section>

//         {/* ================= FAQ ================= */}

//         <section className="bg-[#F4F4F4] py-20">
//           <div className="max-w-6xl mx-auto px-6">

//             <h3 className="text-4xl font-bold mb-12">
//               Frequently Asked Questions
//             </h3>

//             <div className="space-y-10 text-gray-800">

//               <div>
//                 <h4 className="font-semibold text-lg">Q1: What does a legal advisor do for businesses?</h4>
//                 <p className="mt-2">A legal advisor provides strategic guidance on compliance, contracts, governance, and risk management to protect business interests.</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg">Q2: Why is regulatory compliance important?</h4>
//                 <p className="mt-2">Compliance helps avoid penalties, litigation, and reputational risk while ensuring smooth business operations.</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg">Q3: Do you provide ongoing legal support for companies?</h4>
//                 <p className="mt-2">Yes, we offer retainership and continuous advisory services tailored to business needs.</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg">Q4: Can startups benefit from legal advisory services?</h4>
//                 <p className="mt-2">Yes, startups benefit from structured legal frameworks, compliance planning, and contract management from early stages.</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg">Q5: Do you assist with internal policy drafting and corporate governance frameworks?</h4>
//                 <p className="mt-2">Yes, we draft and review internal policies, compliance manuals, governance frameworks, and corporate documentation to strengthen legal structure and regulatory alignment.</p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg">Q6: Can you conduct legal audits and compliance health checks?</h4>
//                 <p className="mt-2">Yes, we perform structured legal audits and compliance assessments to identify risk areas and provide actionable recommendations.</p>
//               </div>

//             </div>
//           </div>
//         </section>

//         {/* ================= FINAL CTA ================= */}

//         <section className="relative py-28 overflow-hidden">
//           <div className="absolute inset-0">
//             <Image
//               src="/discussion.png"
//               alt="Legal Consultation"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-black/70"></div>
//           </div>

//           <div className="relative max-w-5xl mx-auto px-6 text-center">

//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Get Immediate Legal Help from a Legal Advisor in Bangalore
//             </h2>

//             <p className="text-gray-300 mb-10">
//               Consult our experienced legal advisory and compliance experts today.
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
//                 className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
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

"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function LegalAdvisorPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* ================= HERO ================= */}

        <section className="bg-[#0B0F14] pt-32 pb-20 text-center">

          <div className="max-w-6xl mx-auto px-6">

            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Expert Legal Advisor in Bangalore for Strategic Advisory & Regulatory Compliance
            </h1>

            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Our firm provides strategic guidance as a Legal Advisor in Bangalore, assisting businesses with regulatory compliance, governance, and risk management. Our experienced attorneys deliver structured advisory services tailored to corporate and commercial requirements.
            </p>

            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Our goal is to strengthen your legal framework, prevent regulatory exposure, and support sustainable business growth through proactive legal planning.
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

          {/* HERO IMAGE - NO OVERLAP */}

          <div className="max-w-6xl mx-auto px-6 pb-16">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/legal-advisory.png"
                alt="Legal Advisor in Bangalore"
                width={1400}
                height={800}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />
            </div>
          </div>

        </section>

        {/* ================= CONTENT ================= */}

        <section className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-4xl font-semibold mb-6">
            Strategic Legal Advisory & Compliance Support
          </h2>

          <p className="text-gray-700 mb-12">
            Businesses operate in a dynamic regulatory environment where legal oversight is essential. As a trusted Business Legal Advisor and Regulatory Compliance Lawyer, we assist companies in maintaining statutory compliance and minimizing legal risk.
            Our Corporate Compliance Lawyer team provides practical legal solutions, ensuring your organization operates within applicable laws while protecting its long-term interests.
          </p>

          <h3 className="text-3xl font-semibold mb-6">
            OUR LEGAL ADVISORY & COMPLIANCE SERVICES INCLUDE
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
            <li>▪ Corporate Legal Advisory</li>
            <li>▪ Regulatory Compliance Review</li>
            <li>▪ Contract Drafting & Vetting</li>
            <li>▪ Risk Assessment & Governance Support</li>
            <li>▪ Company Law & Corporate Structuring</li>
            <li>▪ Ongoing Legal Retainership Services</li>
            <li>▪ Legal Audits & Compliance Health Checks</li>
          </ul>

          <h3 className="text-3xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h3>

          <div className="space-y-6 text-gray-700 mb-16">

            <p>
              <strong>Step 1: Business Assessment & Legal Review</strong><br />
              Understanding your company’s operational and regulatory framework.
            </p>

            <p>
              <strong>Step 2: Compliance Gap Analysis</strong><br />
              Identifying potential compliance risks and legal exposure areas.
            </p>

            <p>
              We clearly explain regulatory risks, possible legal consequences, and corrective measures before implementation.
            </p>

            <p>
              <strong>Step 3: Strategic Advisory & Documentation</strong><br />
              Drafting policies, agreements, and internal governance documents.
            </p>

            <p>
              <strong>Step 4: Continuous Monitoring & Support</strong><br />
              Providing ongoing guidance as a Legal Compliance Consultant to ensure regulatory alignment.
            </p>

          </div>

          <h3 className="text-3xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </h3>

          <ul className="space-y-3 text-gray-700 mb-20">
            <li>✓ Experienced Corporate Compliance Lawyers</li>
            <li>✓ Business-focused legal advisory approach</li>
            <li>✓ Proactive risk management strategies</li>
            <li>✓ Structured documentation and governance expertise</li>
            <li>✓ Transparent and strategic legal guidance</li>
          </ul>

        </section>

        {/* ================= FAQ ================= */}

        <section className="bg-[#F4F4F4] py-20">
          <div className="max-w-6xl mx-auto px-6">

            <h3 className="text-4xl font-bold mb-12">
              Frequently Asked Questions
            </h3>

            <div className="space-y-10 text-gray-800">

              <div>
                <h4 className="font-semibold text-lg">
                  Q1: What does a legal advisor do for businesses?
                </h4>
                <p className="mt-2">
                  A legal advisor provides strategic guidance on compliance, contracts, governance, and risk management to protect business interests.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Q2: Why is regulatory compliance important?
                </h4>
                <p className="mt-2">
                  Compliance helps avoid penalties, litigation, and reputational risk while ensuring smooth business operations.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Q3: Do you provide ongoing legal support for companies?
                </h4>
                <p className="mt-2">
                  Yes, we offer retainership and continuous advisory services tailored to business needs.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Q4: Can startups benefit from legal advisory services?
                </h4>
                <p className="mt-2">
                  Yes, startups benefit from structured legal frameworks, compliance planning, and contract management from early stages.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Q5: Do you assist with internal policy drafting and corporate governance frameworks?
                </h4>
                <p className="mt-2">
                  Yes, we draft and review internal policies, compliance manuals, governance frameworks, and corporate documentation to strengthen legal structure and regulatory alignment.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Q6: Can you conduct legal audits and compliance health checks?
                </h4>
                <p className="mt-2">
                  Yes, we perform structured legal audits and compliance assessments to identify risk areas and provide actionable recommendations.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="bg-[#0B0F14] py-28 text-center text-white">

          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Get Immediate Legal Help from a Legal Advisor in Bangalore
            </h2>

            <p className="text-gray-300 mb-10">
              Consult our experienced legal advisory and compliance experts today.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">

              <Link
                href="/legal-consultation-in-bangalore"
                className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
              >
                Book Confidential Consultation
              </Link>

              <Link
                href="/contact"
                className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Request Call Back
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