// // "use client";

// // import Navbar from "../../components/Navbar";
// // import Footer from "../../components/Footer";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import Head from "next/head";

// // export default function CorporateLaw() {

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.8, ease: "easeOut" }
// //     }
// //   };

// //   const fadeImage = {
// //     hidden: { opacity: 0, scale: 1.05 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       transition: { duration: 1.2 }
// //     }
// //   };

// //   const stagger = {
// //     visible: { transition: { staggerChildren: 0.2 } }
// //   };

// //   return (
// //     <>
// //       {/* ================= SEO ================= */}
// //       <Head>
// //         <title>Corporate Lawyer in Bangalore | S Jain & Attorneys</title>
// //         <meta
// //           name="description"
// //           content="Corporate & Commercial Law Firm in Bangalore offering corporate law services, commercial contract drafting, M&A advisory, and business legal compliance support."
// //         />
// //         <link
// //           rel="canonical"
// //           href="https://yourdomain.com/corporate-commercial-law-firm"
// //         />
// //       </Head>

// //       <Navbar />

// //       <main className="bg-white overflow-hidden">

// //         {/* ================= HERO ================= */}

// //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// //           <motion.div
// //             variants={stagger}
// //             initial="hidden"
// //             animate="visible"
// //             className="max-w-7xl mx-auto px-6 text-center"
// //           >

// //             <motion.h1
// //               variants={fadeUp}
// //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// //             >
// //               Corporate & Commercial Law Firm in Bangalore for Businesses & Startups
// //             </motion.h1>

// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-400 max-w-3xl mx-auto text-lg"
// //             >
// //               In today’s competitive business environment, companies require proactive legal guidance to operate efficiently and mitigate risks.
// //             </motion.p>

// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-400 max-w-3xl mx-auto text-lg mt-4"
// //             >
// //               We deliver strategic legal solutions, structured transaction support, and strong contractual protection to help businesses grow while maintaining regulatory compliance.
// //             </motion.p>

// //             <motion.p
// //               variants={fadeUp}
// //               className="text-[#C9A24D] font-semibold mt-6"
// //             >
// //               Response within 24 hours guaranteed.
// //             </motion.p>

// //             <motion.div variants={fadeUp} className="flex justify-center gap-6 mt-10 flex-wrap">
// //               <Link href="/contact">
// //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// //                   Book Confidential Consultation
// //                 </button>
// //               </Link>

// //               <Link href="tel:+919000000000">
// //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// //                   Call Now
// //                 </button>
// //               </Link>
// //             </motion.div>

// //           </motion.div>

// //           {/* HERO IMAGE */}
// //           <motion.div
// //             variants={fadeImage}
// //             initial="hidden"
// //             animate="visible"
// //             className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20"
// //           >
// //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
// //               <Image
// //                 src="/consultation.png"
// //                 alt="Corporate Law Consultation"
// //                 width={1400}
// //                 height={800}
// //                 className="w-full h-[400px] md:h-[500px] object-cover"
// //                 priority
// //               />
// //             </div>
// //           </motion.div>

// //         </section>

// //         <div className="h-40 md:h-60"></div>

// //         {/* ================= SERVICES ================= */}

// //         <motion.section
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={stagger}
// //           className="max-w-6xl mx-auto px-6 py-20"
// //         >

// //           <motion.h2 variants={fadeUp} className="text-4xl font-semibold mb-6">
// //             Comprehensive Corporate Law Services
// //           </motion.h2>

// //           <motion.ul variants={fadeUp} className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg mb-16">
// //             <li>▪ Company Incorporation & Structuring</li>
// //             <li>▪ Shareholder Agreements & Joint Ventures</li>
// //             <li>▪ Mergers & Acquisitions (M&A)</li>
// //             <li>▪ Corporate Governance & Compliance</li>
// //             <li>▪ Due Diligence & Risk Assessment</li>
// //             <li>▪ Regulatory Advisory & Licensing</li>
// //             <li>▪ Commercial Transactions & Business Structuring</li>
// //           </motion.ul>

// //           <motion.div variants={fadeUp} className="mb-16">
// //             <Image
// //               src="/corporatelaw.png"
// //               alt="Corporate Legal Advisory"
// //               width={1200}
// //               height={600}
// //               className="w-full rounded-xl shadow-lg"
// //             />
// //           </motion.div>

// //           <motion.h2 variants={fadeUp} className="text-4xl font-semibold mb-6">
// //             Why Choose Our Corporate & Commercial Law Firm
// //           </motion.h2>

// //           <motion.ul variants={fadeUp} className="space-y-4 text-gray-700 text-lg mb-16">
// //             <li>Experienced corporate attorneys</li>
// //             <li>Strong commercial drafting expertise</li>
// //             <li>Business-focused legal solutions</li>
// //             <li>Transparent communication</li>
// //             <li>Long-term legal partnership approach</li>
// //           </motion.ul>

// //         </motion.section>

// //         {/* ================= CTA ================= */}

// //         <section className="relative py-28 overflow-hidden">

// //           <div className="absolute inset-0">
// //             <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
// //             <div className="absolute inset-0 bg-black/70"></div>
// //           </div>

// //           <div className="relative max-w-5xl mx-auto px-6 text-center">
// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Get Immediate Legal Help from a Corporate Lawyer in Bangalore
// //             </h2>

// //             <p className="text-gray-300 mb-10 text-lg">
// //               Consult our experienced Corporate & Commercial Law Firm today.
// //             </p>

// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Link href="/contact">
// //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// //                   Book Confidential Consultation
// //                 </button>
// //               </Link>

// //               <Link href="tel:+919000000000">
// //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// //                   Call Now
// //                 </button>
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

// // "use client";

// // import Navbar from "../../components/Navbar";
// // import Footer from "../../components/Footer";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import Head from "next/head";

// // export default function CorporateLaw() {

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.8, ease: "easeOut" }
// //     }
// //   };

// //   const stagger = {
// //     visible: { transition: { staggerChildren: 0.2 } }
// //   };

// //   return (
// //     <>
// //       {/* ================= SEO ================= */}
// //       <Head>
// //         <title>Corporate Lawyer in Bangalore | S Jain & Attorneys</title>
// //         <meta
// //           name="description"
// //           content="Corporate & Commercial Law Firm in Bangalore offering corporate law services, commercial contract drafting, M&A advisory, and business legal compliance support."
// //         />
// //         <link
// //           rel="canonical"
// //           href="https://yourdomain.com/corporate-commercial-law-firm"
// //         />
// //       </Head>

// //       <Navbar />

// //       <main className="bg-white overflow-hidden">

// //         {/* ================= HERO ================= */}

// //         <section className="relative bg-[#0B0F14] pt-32 pb-40 text-center">

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
// //               Corporate & Commercial Law Firm in Bangalore for Businesses & Startups
// //             </motion.h1>

// //             <motion.p variants={fadeUp} className="text-gray-400 max-w-4xl mx-auto text-lg">
// //               In today’s competitive business environment, companies require proactive legal guidance to operate efficiently and mitigate risks. Our Corporate & Commercial Law Firm provides comprehensive Corporate Law Services and Business Legal Advisory Services to startups, SMEs, and established enterprises.
// //             </motion.p>

// //             <motion.p variants={fadeUp} className="text-gray-400 max-w-4xl mx-auto text-lg mt-4">
// //               We deliver strategic legal solutions, structured transaction support, and strong contractual protection to help businesses grow while maintaining regulatory compliance.
// //             </motion.p>

// //             <motion.p variants={fadeUp} className="text-gray-400 max-w-4xl mx-auto text-lg mt-4">
// //               Our goal is to protect your business interests, ensure regulatory compliance, and minimize commercial risk through strategic legal structuring.
// //             </motion.p>

// //             <motion.p variants={fadeUp} className="text-[#C9A24D] font-semibold mt-6">
// //               Response within 24 hours guaranteed.
// //             </motion.p>

// //             <motion.div variants={fadeUp} className="flex justify-center gap-6 mt-10 flex-wrap">
// //               <Link href="/legal-consultation-in-bangalore">
// //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// //                   Book Confidential Consultation
// //                 </button>
// //               </Link>

// //               <Link href="tel:+919000000000">
// //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// //                   Call Now
// //                 </button>
// //               </Link>
// //             </motion.div>
// //           </motion.div>

// //           {/* HERO IMAGE */}
// //           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20">
// //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
// //               <Image
// //                 src="/consultation.png"
// //                 alt="Corporate Law Consultation"
// //                 width={1400}
// //                 height={800}
// //                 className="w-full h-[400px] md:h-[500px] object-cover"
// //                 priority
// //               />
// //             </div>
// //           </div>

// //         </section>

// //         <div className="h-40 md:h-60"></div>

// //         {/* ================= CORPORATE SERVICES ================= */}

// //         <section className="max-w-6xl mx-auto px-6 py-20 mt-14">

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Comprehensive Corporate Law Services
// //           </h2>

// //           <p className="text-gray-700 text-lg mb-10">
// //             Our firm supports businesses at every stage—from incorporation and structuring to expansion, restructuring, and dispute resolution.
// //           </p>

// //           <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg mb-16">
// //             <li>▪ Company Incorporation & Structuring</li>
// //             <li>▪ Shareholder Agreements & Joint Ventures</li>
// //             <li>▪ Mergers & Acquisitions (M&A)</li>
// //             <li>▪ Corporate Governance & Compliance</li>
// //             <li>▪ Due Diligence & Risk Assessment</li>
// //             <li>▪ Regulatory Advisory & Licensing</li>
// //             <li>▪ Commercial Transactions & Business Structuring</li>
// //           </ul>

// //           <Image
// //             src="/corporatelaw.png"
// //             alt="Corporate Legal Advisory"
// //             width={1200}
// //             height={600}
// //             className="w-full rounded-xl shadow-lg mb-16"
// //           />

// //           {/* ================= CONTRACT SECTION ================= */}

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Commercial Contract Drafting & Negotiation
// //           </h2>

// //           <p className="text-gray-700 text-lg mb-16">
// //             Our experienced Commercial Contract Lawyer team drafts, reviews, and negotiates vendor agreements, service agreements, partnership contracts, franchise agreements, employment contracts, and NDAs to ensure enforceability and risk protection.
// //           </p>

// //           {/* ================= ADVISORY ================= */}

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Business Legal Advisory Services
// //           </h2>

// //           <p className="text-gray-700 text-lg mb-16">
// //             We provide ongoing Business Legal Advisory Services including corporate restructuring, compliance reviews, legal audits, policy drafting, and risk mitigation strategies.
// //           </p>

// //           {/* ================= PROCESS ================= */}

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Our Approach / How We Work
// //           </h2>

// //           <div className="space-y-6 text-gray-700 text-lg mb-16">
// //             <p><strong>Step 1:</strong> Business Assessment & Legal Consultation</p>
// //             <p><strong>Step 2:</strong> Legal Structuring & Documentation – We clearly explain legal risks, possible outcomes, and compliance implications before proceeding.</p>
// //             <p><strong>Step 3:</strong> Negotiation & Regulatory Support</p>
// //             <p><strong>Step 4:</strong> Ongoing Advisory & Risk Management</p>
// //           </div>

// //           {/* ================= WHY CHOOSE US ================= */}

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Why Choose Our Corporate & Commercial Law Firm
// //           </h2>

// //           <ul className="space-y-4 text-gray-700 text-lg mb-16">
// //             <li>Experienced corporate attorneys</li>
// //             <li>Strong commercial drafting expertise</li>
// //             <li>Business-focused legal solutions</li>
// //             <li>Transparent communication</li>
// //             <li>Long-term legal partnership approach</li>
// //           </ul>

// //           {/* ================= FAQ ================= */}

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Frequently Asked Questions
// //           </h2>

// //           <div className="space-y-6 text-gray-700 text-lg">
// //             <p><strong>Q1:</strong> Do you assist startups and SMEs?<br/>Yes, we provide tailored Corporate Law Services for businesses of all sizes.</p>
// //             <p><strong>Q2:</strong> Can you draft customized commercial contracts?<br/>Yes, our Commercial Contract Lawyer team drafts agreements aligned with your business goals.</p>
// //             <p><strong>Q3:</strong> Do you offer ongoing advisory support?<br/>Yes, we provide structured Business Legal Advisory Services for long-term compliance and growth.</p>
// //             <p><strong>Q4:</strong> Do you assist with mergers and acquisitions?<br/>Yes, we handle due diligence, structuring, and transaction documentation.</p>
// //             <p><strong>Q5:</strong> Do you assist with corporate due diligence and risk assessment?<br/>Yes, we conduct comprehensive due diligence, compliance reviews, and risk assessments to identify legal exposures.</p>
// //             <p><strong>Q6:</strong> Can you help with regulatory approvals and licensing?<br/>Yes, our firm assists businesses in obtaining regulatory approvals and licenses.</p>
// //           </div>

// //         </section>

// //         {/* ================= FINAL CTA ================= */}

// //         <section className="relative py-28 overflow-hidden">

// //           <div className="absolute inset-0">
// //             <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
// //             <div className="absolute inset-0 bg-black/70"></div>
// //           </div>

// //           <div className="relative max-w-5xl mx-auto px-6 text-center">
// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Get Immediate Legal Help from a Corporate Lawyer in Bangalore
// //             </h2>

// //             <p className="text-gray-300 mb-10 text-lg">
// //               Consult our experienced Corporate & Commercial Law Firm today.
// //             </p>

// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Link href="/legal-consultation-in-bangalore">
// //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// //                   Book Confidential Consultation
// //                 </button>
// //               </Link>

// //               <Link href="tel:+919000000000">
// //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// //                   Call Now
// //                 </button>
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

// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Head from "next/head";

// export default function CorporateLaw() {

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8 }
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Corporate Lawyer in Bangalore | S Jain & Attorneys</title>
//         <meta
//           name="description"
//           content="Corporate & Commercial Law Firm in Bangalore offering corporate law services, commercial contract drafting, M&A advisory, and business legal compliance support."
//         />
//         <link
//           rel="canonical"
//           href="https://yourdomain.com/corporate-commercial-law-firm"
//         />
//       </Head>

//       <Navbar />

//       <main className="bg-[#F9F9F9] overflow-hidden">

//         {/* ================= HERO ================= */}

//         <section className="relative bg-[#0B0F14] pt-36 pb-44 text-center">

//           <div className="absolute inset-0">
//             <Image
//               src="/consultation.png"
//               alt="Corporate Law Consultation"
//               fill
//               className="object-cover opacity-20"
//               priority
//             />
//           </div>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="visible"
//             className="relative max-w-5xl mx-auto px-6"
//           >
//             <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
//               Corporate & Commercial Law Firm in Bangalore for Businesses & Startups
//             </h1>

//             <p className="text-gray-300 text-lg leading-relaxed mb-4">
//               In today’s competitive business environment, companies require proactive legal guidance to operate efficiently and mitigate risks.
//             </p>

//             <p className="text-gray-400 text-lg leading-relaxed mb-4">
//               Our Corporate & Commercial Law Firm provides comprehensive Corporate Law Services and Business Legal Advisory Services to startups, SMEs, and established enterprises.
//             </p>

//             <p className="text-gray-400 text-lg leading-relaxed mb-6">
//               We deliver strategic legal solutions, structured transaction support, and strong contractual protection to help businesses grow while maintaining regulatory compliance.
//             </p>

//             <p className="text-[#C9A24D] font-semibold mb-8">
//               Response within 24 hours guaranteed.
//             </p>

//             <div className="flex justify-center gap-6 flex-wrap">
//               <Link href="/legal-consultation-in-bangalore">
//                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
//                   Book Confidential Consultation
//                 </button>
//               </Link>

//               <Link href="tel:+919000000000">
//                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
//                   Call Now
//                 </button>
//               </Link>
//             </div>
//           </motion.div>
//         </section>

//         {/* ================= SERVICES ================= */}

//         <section className="max-w-6xl mx-auto px-6 py-24">

//           <h2 className="text-4xl font-semibold mb-12 text-center">
//             Comprehensive Corporate Law Services
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">

//             {[
//               "Company Incorporation & Structuring",
//               "Shareholder Agreements & Joint Ventures",
//               "Mergers & Acquisitions (M&A)",
//               "Corporate Governance & Compliance",
//               "Due Diligence & Risk Assessment",
//               "Regulatory Advisory & Licensing",
//               "Commercial Transactions & Business Structuring"
//             ].map((item, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
//                 <p className="text-lg font-medium text-gray-800">{item}</p>
//               </div>
//             ))}

//           </div>

//           <div className="mt-16">
//             <Image
//               src="/corporatelaw.png"
//               alt="Corporate Legal Advisory"
//               width={1200}
//               height={600}
//               className="w-full rounded-xl shadow-lg"
//             />
//           </div>

//         </section>

//         {/* ================= PROCESS ================= */}

//         <section className="bg-white py-24">

//           <div className="max-w-5xl mx-auto px-6">

//             <h2 className="text-4xl font-semibold mb-16 text-center">
//               Our Approach / How We Work
//             </h2>

//             <div className="space-y-10 border-l-4 border-[#C9A24D] pl-8">

//               <div>
//                 <h3 className="font-semibold text-xl">Step 1</h3>
//                 <p className="text-gray-600">Business Assessment & Legal Consultation</p>
//               </div>

//               <div>
//                 <h3 className="font-semibold text-xl">Step 2</h3>
//                 <p className="text-gray-600">
//                   Legal Structuring & Documentation – We clearly explain legal risks, possible outcomes, and compliance implications.
//                 </p>
//               </div>

//               <div>
//                 <h3 className="font-semibold text-xl">Step 3</h3>
//                 <p className="text-gray-600">Negotiation & Regulatory Support</p>
//               </div>

//               <div>
//                 <h3 className="font-semibold text-xl">Step 4</h3>
//                 <p className="text-gray-600">Ongoing Advisory & Risk Management</p>
//               </div>

//             </div>
//           </div>
//         </section>

//         {/* ================= FAQ ================= */}

//         <section className="bg-[#F4F4F4] py-24">

//           <div className="max-w-4xl mx-auto px-6">

//             <h2 className="text-4xl font-semibold mb-12 text-center">
//               Frequently Asked Questions
//             </h2>

//             <div className="space-y-6">

//               {[
//                 "Do you assist startups and SMEs?",
//                 "Can you draft customized commercial contracts?",
//                 "Do you offer ongoing advisory support?",
//                 "Do you assist with mergers and acquisitions?",
//                 "Do you assist with corporate due diligence?",
//                 "Can you help with regulatory approvals?"
//               ].map((q, i) => (
//                 <div key={i} className="bg-white p-6 rounded-xl shadow-md">
//                   <p className="font-semibold text-lg">{q}</p>
//                 </div>
//               ))}

//             </div>

//           </div>
//         </section>

//         {/* ================= FINAL CTA ================= */}

//         <section className="relative py-28 text-center text-white">

//           <Image
//             src="/discussion.png"
//             alt="Consultation"
//             fill
//             className="object-cover"
//           />

//           <div className="absolute inset-0 bg-black/75"></div>

//           <div className="relative max-w-4xl mx-auto px-6">

//             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
//               Get Immediate Legal Help from a Corporate Lawyer in Bangalore
//             </h2>

//             <p className="text-gray-300 mb-10 text-lg">
//               Consult our experienced Corporate & Commercial Law Firm today.
//             </p>

//             <div className="flex gap-6 justify-center flex-wrap">
//               <Link href="/legal-consultation-in-bangalore">
//                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
//                   Book Confidential Consultation
//                 </button>
//               </Link>

//               <Link href="tel:+919000000000">
//                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
//                   Call Now
//                 </button>
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
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { ChevronDown } from "lucide-react";
export default function CorporateLaw() {
  const [activeIndex, setActiveIndex] = useState(null);

const toggleFAQ = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <>
    

      <Navbar />

      <main className="bg-[#F9F9F9] overflow-hidden">

        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-[#0B0F14] pt-36 pb-40 text-center">

          <div className="absolute inset-0">
            <Image
              src="/consultation.png"
              alt="Corporate & Commercial Law Firm in Bangalore"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative max-w-5xl mx-auto px-6"
          >
            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Corporate & Commercial Law Firm in Bangalore for Businesses & Startups
            </h1>

            <p className="text-gray-300 text-lg mb-4">
              In today’s competitive business environment, companies require proactive legal guidance to operate efficiently and mitigate risks. Our Corporate & Commercial Law Firm provides comprehensive Corporate Law Services and Business Legal Advisory Services to startups, SMEs, and established enterprises.
            </p>

            <p className="text-gray-400 text-lg mb-4">
              We deliver strategic legal solutions, structured transaction support, and strong contractual protection to help businesses grow while maintaining regulatory compliance.
            </p>

            <p className="text-gray-400 text-lg mb-6">
              Our goal is to protect your business interests, ensure regulatory compliance, and minimize commercial risk through strategic legal structuring.
            </p>

            <p className="text-[#C9A24D] font-semibold mb-8">
              Response within 24 hours guaranteed.
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <Link href="/legal-consultation-in-bangalore">
                <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
                  Book Confidential Consultation
                </button>
              </Link>

              <Link href="tel:+919000000000">
                <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
                  Call Now
                </button>
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="max-w-6xl mx-auto px-6 py-24">

          <h2 className="text-4xl font-semibold mb-6">
            Comprehensive Corporate Law Services
          </h2>

          <p className="text-gray-700 text-lg mb-8">
            Our firm supports businesses at every stage—from incorporation and structuring to expansion, restructuring, and dispute resolution.
          </p>

          <h3 className="text-2xl font-semibold mb-8">
            OUR CORPORATE & COMMERCIAL LAW SERVICES INCLUDE
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              "Company Incorporation & Structuring",
              "Shareholder Agreements & Joint Ventures",
              "Mergers & Acquisitions (M&A)",
              "Corporate Governance & Compliance",
              "Due Diligence & Risk Assessment",
              "Regulatory Advisory & Licensing",
              "Commercial Transactions & Business Structuring"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
                <p className="text-lg font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>

          <Image
            src="/corporatelaw.png"
            alt="Corporate Legal Advisory"
            width={1200}
            height={600}
            className="w-full rounded-xl shadow-lg mb-16"
          />

          {/* ================= CONTRACT ================= */}
          <h2 className="text-4xl font-semibold mb-6">
            Commercial Contract Drafting & Negotiation
          </h2>

          <p className="text-gray-700 text-lg mb-16">
            Our experienced Commercial Contract Lawyer team drafts, reviews, and negotiates vendor agreements, service agreements, partnership contracts, franchise agreements, employment contracts, and NDAs to ensure enforceability and risk protection.
          </p>

          {/* ================= ADVISORY ================= */}
          <h2 className="text-4xl font-semibold mb-6">
            Business Legal Advisory Services
          </h2>

          <p className="text-gray-700 text-lg mb-16">
            We provide ongoing Business Legal Advisory Services including corporate restructuring, compliance reviews, legal audits, policy drafting, and risk mitigation strategies.
          </p>

          {/* ================= PROCESS ================= */}
          <h2 className="text-4xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h2>

          <div className="space-y-6 text-gray-700 text-lg mb-16">
            <p><strong>Step 1:</strong> Business Assessment & Legal Consultation</p>
            <p><strong>Step 2:</strong> Legal Structuring & Documentation – We clearly explain legal risks, possible outcomes, and compliance implications before proceeding.</p>
            <p><strong>Step 3:</strong> Negotiation & Regulatory Support</p>
            <p><strong>Step 4:</strong> Ongoing Advisory & Risk Management</p>
          </div>

          {/* ================= WHY CHOOSE US ================= */}
          <h2 className="text-4xl font-semibold mb-6">
            WHY CHOOSE OUR CORPORATE & COMMERCIAL LAW FIRM
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg mb-16">
            <li>Experienced corporate attorneys</li>
            <li>Strong commercial drafting expertise</li>
            <li>Business-focused legal solutions</li>
            <li>Transparent communication</li>
            <li>Long-term legal partnership approach</li>
          </ul>

          {/* ================= FAQ ================= */}
          <h2 className="text-4xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
  {[
    {
      question: "Do you assist startups and SMEs?",
      answer:
        "Yes, we provide tailored Corporate Law Services for businesses of all sizes."
    },
    {
      question: "Can you draft customized commercial contracts?",
      answer:
        "Yes, our Commercial Contract Lawyer team drafts agreements aligned with your business goals."
    },
    {
      question: "Do you offer ongoing advisory support?",
      answer:
        "Yes, we provide structured Business Legal Advisory Services for long-term compliance and growth."
    },
    {
      question: "Do you assist with mergers and acquisitions?",
      answer:
        "Yes, we handle due diligence, structuring, and transaction documentation."
    },
    {
      question:
        "Do you assist with corporate due diligence and risk assessment?",
      answer:
        "Yes, we conduct comprehensive due diligence, compliance reviews, and risk assessments to identify legal exposures and ensure secure business transactions."
    },
    {
      question:
        "Can you help with regulatory approvals and licensing?",
      answer:
        "Yes, our Corporate & Commercial Law Firm assists businesses in obtaining regulatory approvals, licenses, and ensuring ongoing compliance with applicable laws and authorities."
    }
  ].map((faq, index) => (
    <div key={index} className="bg-white rounded-xl shadow-md">
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <span className="font-semibold text-gray-800">
          {faq.question}
        </span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            activeIndex === index ? "rotate-180 text-[#C9A24D]" : ""
          }`}
        />
      </button>

      {activeIndex === index && (
        <div className="px-6 pb-6 text-gray-700">
          {faq.answer}
        </div>
      )}
    </div>
  ))}
</div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="relative py-28 text-center text-white">

          <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/75"></div>

          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Get Immediate Legal Help from a Corporate Lawyer in Bangalore
            </h2>

            <p className="text-gray-400 mb-10 text-lg">
              Consult our experienced Corporate & Commercial Law Firm today.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link href="/legal-consultation-in-bangalore">
                <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
                  Book Confidential Consultation
                </button>
              </Link>

              <Link href="tel:+919000000000">
                <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
                  Call Now
                </button>
              </Link>
            </div>

            <p className="text-gray-400 text-sm mt-8">
              All matters handled with complete confidentiality and legal discretion.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}