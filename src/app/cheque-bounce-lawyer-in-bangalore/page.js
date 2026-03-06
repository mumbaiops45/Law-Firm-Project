// // // // "use client";

// // // // import Navbar from "../components/Navbar";
// // // // import Footer from "../components/Footer";
// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";
// // // // import Link from "next/link";

// // // // export default function ChequeBounceNICasesPage() {

// // // //   const fadeUp = {
// // // //     hidden: { opacity: 0, y: 40 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: {
// // // //         duration: 0.8,
// // // //         ease: "easeOut"
// // // //       }
// // // //     }
// // // //   };

// // // //   const fadeImage = {
// // // //     hidden: { opacity: 0, scale: 1.05 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       scale: 1,
// // // //       transition: {
// // // //         duration: 1.2
// // // //       }
// // // //     }
// // // //   };

// // // //   const stagger = {
// // // //     visible: {
// // // //       transition: {
// // // //         staggerChildren: 0.2
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       <main className="bg-white overflow-hidden">

// // // //         {/* ================= HERO ================= */}

// // // //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// // // //           <motion.div
// // // //             variants={stagger}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center"
// // // //           >

// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-400 text-sm mb-6"
// // // //             >
// // // //               Home <span className="mx-2">›</span>
// // // //               <span className="text-[#C9A24D]">
// // // //                 Cheque Bounce / NI Act Cases
// // // //               </span>
// // // //             </motion.p>


// // // //             <motion.h1
// // // //               variants={fadeUp}
// // // //               className="
// // // //                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
// // // //                 font-semibold
// // // //                 text-white
// // // //                 mb-6
// // // //                 tracking-tight
// // // //               "
// // // //             >
// // // //               Cheque Bounce / NI Act Cases
// // // //             </motion.h1>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="
// // // //                 text-gray-400
// // // //                 text-base sm:text-lg md:text-xl
// // // //                 max-w-3xl mx-auto
// // // //                 leading-relaxed
// // // //               "
// // // //             >
// // // //               Professional legal assistance for cheque bounce cases under
// // // //               the Negotiable Instruments Act, ensuring recovery of dues and
// // // //               strong legal representation in court.
// // // //             </motion.p>

// // // //           </motion.div>



// // // //           {/* FLOATING IMAGE */}

// // // //           <motion.div
// // // //             variants={fadeImage}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             className="
// // // //               absolute
// // // //               left-1/2
// // // //               -translate-x-1/2
// // // //               translate-y-1/2
// // // //               bottom-0
// // // //               w-full
// // // //               max-w-6xl
// // // //               px-6
// // // //               z-20
// // // //             "
// // // //           >

// // // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">

// // // //               <Image
// // // //                 src="/cheque-bounce.jpg"
// // // //                 alt="Cheque Bounce NI Act Cases"
// // // //                 width={1400}
// // // //                 height={800}
// // // //                 className="w-full h-[400px] md:h-[500px] object-cover"
// // // //                 priority
// // // //               />

// // // //             </div>

// // // //           </motion.div>

// // // //         </section>



// // // //         {/* SPACING */}

// // // //         <div className="h-40 md:h-60"></div>



// // // //         {/* ================= OVERVIEW ================= */}

// // // //         <motion.section
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true }}
// // // //           variants={stagger}
// // // //         >

// // // //           <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-24">


// // // //             <motion.h2
// // // //               variants={fadeUp}
// // // //               className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight"
// // // //             >
// // // //               Overview
// // // //             </motion.h2>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
// // // //             >
// // // //               Cheque bounce cases fall under Section 138 of the Negotiable
// // // //               Instruments Act. These cases involve dishonor of cheques due to
// // // //               insufficient funds or other legal reasons. Our legal team provides
// // // //               expert assistance in filing, defending, and resolving cheque bounce
// // // //               cases efficiently.
// // // //             </motion.p>



// // // //             {/* ================= SERVICES ================= */}

// // // //             <motion.h3
// // // //               variants={fadeUp}
// // // //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// // // //             >
// // // //               Our Cheque Bounce Legal Services
// // // //             </motion.h3>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
// // // //             >
// // // //               We provide complete legal support for individuals, businesses,
// // // //               and financial institutions in cheque bounce matters.
// // // //             </motion.p>



// // // //             <motion.ul
// // // //               variants={fadeUp}
// // // //               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
// // // //             >

// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Filing Cheque Bounce Cases:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Legal assistance in filing cases under Section 138 of the NI Act.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Legal Notice Drafting:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Drafting and sending statutory legal notices to defaulters.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Court Representation:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Professional representation in court proceedings.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Defense Against False Cases:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Legal defense for individuals falsely accused in cheque bounce cases.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Settlement & Recovery Assistance:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Negotiation and legal assistance for financial recovery.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Business & Corporate Cheque Cases:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Handling cheque dishonor cases for companies and business transactions.
// // // //                 </p>
// // // //               </li>

// // // //             </motion.ul>



// // // //             {/* IMAGE */}

// // // //             <motion.div variants={fadeUp} className="mb-16">

// // // //               <Image
// // // //                 src="/cheque.png"
// // // //                 alt="Cheque Bounce Legal Consultation"
// // // //                 width={1200}
// // // //                 height={600}
// // // //                 className="w-full rounded-xl shadow-lg"
// // // //               />

// // // //             </motion.div>



// // // //             {/* WHY CHOOSE */}

// // // //             <motion.h3
// // // //               variants={fadeUp}
// // // //               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
// // // //             >
// // // //               Why Choose Us for Cheque Bounce Cases
// // // //             </motion.h3>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// // // //             >
// // // //               Our experienced legal team ensures fast, efficient, and professional
// // // //               handling of cheque bounce matters. We focus on protecting your financial
// // // //               rights, recovering dues, and providing strong legal representation.
// // // //             </motion.p>

// // // //           </div>

// // // //         </motion.section>



// // // //         {/* ================= CTA ================= */}

// // // //         <motion.section
// // // //           initial={{ opacity: 0 }}
// // // //           whileInView={{ opacity: 1 }}
// // // //           transition={{ duration: 1 }}
// // // //           className="relative py-28 mt-20 overflow-hidden"
// // // //         >

// // // //           <div className="absolute inset-0">

// // // //             <Image
// // // //               src="/discussion.png"
// // // //               alt="Cheque Bounce Legal Support"
// // // //               fill
// // // //               className="object-cover"
// // // //             />

// // // //             <div className="absolute inset-0 bg-black/70"></div>

// // // //           </div>


// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 60 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //             className="relative max-w-5xl mx-auto px-6 text-center"
// // // //           >

// // // //             <p className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4">
// // // //               Expert NI Act Legal Support
// // // //             </p>


// // // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // // //               Recover Your Financial Dues Legally
// // // //             </h2>


// // // //             <p className="text-gray-300 text-base md:text-lg mb-10">
// // // //               Get professional legal assistance for cheque bounce and NI Act cases.
// // // //             </p>

// // // //             <Link href="/contact">
// // // //             <button className="
// // // //               bg-[#C9A24D]
// // // //               text-black
// // // //               px-8 py-4
// // // //               rounded-lg
// // // //               font-semibold
// // // //               hover:scale-105
// // // //               transition
// // // //             ">
// // // //               Book Consultation
// // // //             </button>
// // // //             </Link>

// // // //           </motion.div>

// // // //         </motion.section>


// // // //       </main>

// // // //       <Footer />

// // // //     </>
// // // //   );
// // // // }


// // // "use client";

// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";

// // // export default function ChequeBouncePage() {
// // //   const fadeUp = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { duration: 0.8, ease: "easeOut" },
// // //     },
// // //   };

// // //   const stagger = {
// // //     visible: { transition: { staggerChildren: 0.2 } },
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <main className="bg-white overflow-hidden">

// // //         {/* ================= HERO ================= */}

// // //         <section className="relative bg-[#0B0F14] pt-32 pb-36 text-center">

// // //           <motion.div
// // //             variants={stagger}
// // //             initial="hidden"
// // //             animate="visible"
// // //             className="max-w-6xl mx-auto px-6"
// // //           >
// // //             <motion.h1
// // //               variants={fadeUp}
// // //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// // //             >
// // //               Experienced Cheque Bounce Lawyer in Bangalore for Section 138 NI Act Cases
// // //             </motion.h1>

// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed mb-6"
// // //             >
// // //               Our firm provides strategic legal representation as a
// // //               <strong> Cheque Bounce Lawyer in Bangalore</strong>,
// // //               assisting clients in cheque bounce cases under the
// // //               Negotiable Instruments Act. We handle both prosecution
// // //               and defense matters with precision and strong courtroom advocacy.
// // //             </motion.p>

// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-400 max-w-3xl mx-auto mb-6"
// // //             >
// // //               We ensure strict compliance with statutory timelines and build
// // //               legally sound strategies to protect your financial interests.
// // //               <br />
// // //               <span className="text-[#C9A24D] font-semibold">
// // //                 Response within 24 hours guaranteed.
// // //               </span>
// // //             </motion.p>

// // //             <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap">
// // //               <Link
// // //                 href="/legal-consultation-in-bangalore"
// // //                 className="bg-[#C9A24D] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
// // //               >
// // //                 Book Confidential Consultation
// // //               </Link>

// // //               <a
// // //                 href="tel:+919000000000"
// // //                 className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
// // //               >
// // //                 Call Now
// // //               </a>
// // //             </motion.div>
// // //           </motion.div>
// // //         </section>

// // //         {/* HERO IMAGE */}

// // //         <div className="relative w-full h-[350px] md:h-[500px]">
// // //           <Image
// // //             src="/cheque-bounce.jpg"
// // //             alt="Cheque Bounce Lawyer in Bangalore"
// // //             fill
// // //             className="object-cover"
// // //             priority
// // //           />
// // //         </div>

// // //         {/* ================= LEGAL SUPPORT ================= */}

// // //         <section className="py-20 max-w-6xl mx-auto px-6">

// // //           <h2 className="text-3xl md:text-4xl font-semibold mb-6">
// // //             Legal Support for Cheque Bounce & NI Act Matters
// // //           </h2>

// // //           <p className="text-gray-600 leading-relaxed mb-10">
// // //             Cheque dishonour cases require timely legal action and strict
// // //             compliance with statutory timelines. As experienced Section 138 NI Act
// // //             lawyers, we assist clients in initiating and defending cheque bounce
// // //             proceedings under the Negotiable Instruments Act.
// // //           </p>

// // //           <h3 className="text-2xl font-semibold mb-6">
// // //             Our Cheque Bounce Services Include
// // //           </h3>

// // //           <ul className="grid md:grid-cols-2 gap-6 text-gray-700 mb-16">
// // //             <li>▪ Section 138 NI Act Cases</li>
// // //             <li>▪ Legal Notice Drafting & Reply</li>
// // //             <li>▪ Filing of Criminal Complaints</li>
// // //             <li>▪ Defense in False Cheque Bounce Cases</li>
// // //             <li>▪ Recovery Proceedings</li>
// // //             <li>▪ Trial & Appellate Representation</li>
// // //           </ul>

// // //           {/* IMAGE */}

// // //           <div className="relative w-full h-[300px] md:h-[400px] mb-16">
// // //             <Image
// // //               src="/cheque.png"
// // //               alt="Section 138 NI Act Legal Services"
// // //               fill
// // //               className="object-cover rounded-xl shadow-xl"
// // //             />
// // //           </div>

// // //           {/* ================= APPROACH ================= */}

// // //           <h2 className="text-3xl md:text-4xl font-semibold mb-10">
// // //             Our Approach / How We Work
// // //           </h2>

// // //           <div className="space-y-8 text-gray-700 mb-20">
// // //             <div>
// // //               <h4 className="font-semibold">
// // //                 Step 1: Case Review & Document Verification
// // //               </h4>
// // //               <p>
// // //                 Examination of cheque, bank memo, and transaction details.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h4 className="font-semibold">
// // //                 Step 2: Legal Notice & Compliance Strategy
// // //               </h4>
// // //               <p>
// // //                 Issuing or responding to statutory notice within prescribed timelines.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h4 className="font-semibold">
// // //                 Step 3: Filing Complaint / Defense Preparation
// // //               </h4>
// // //               <p>
// // //                 Preparation of pleadings and documentation for NI Act proceedings.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h4 className="font-semibold">
// // //                 Step 4: Court Representation & Resolution
// // //               </h4>
// // //               <p>
// // //                 Strong representation before trial and appellate courts.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* ================= WHY CHOOSE ================= */}

// // //           <h2 className="text-3xl md:text-4xl font-semibold mb-8">
// // //             Why Choose Our Firm
// // //           </h2>

// // //           <ul className="grid md:grid-cols-2 gap-6 text-gray-700 mb-20">
// // //             <li>✓ Experienced Negotiable Instruments Act lawyers</li>
// // //             <li>✓ Strategic handling of cheque bounce cases</li>
// // //             <li>✓ Strong courtroom representation in Bangalore</li>
// // //             <li>✓ Clear guidance on statutory timelines and compliance</li>
// // //           </ul>

// // //           {/* ================= FAQ ================= */}

// // //           <h2 className="text-3xl md:text-4xl font-semibold mb-10">
// // //             Frequently Asked Questions
// // //           </h2>

// // //           <div className="space-y-8 text-gray-700">
// // //             <div>
// // //               <h4 className="font-semibold">
// // //                 Q1: What is Section 138 of the NI Act?
// // //               </h4>
// // //               <p>
// // //                 Section 138 deals with penalties for cheque dishonour due to insufficient funds.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h4 className="font-semibold">
// // //                 Q2: What is the time limit for filing a cheque bounce case?
// // //               </h4>
// // //               <p>
// // //                 Legal notice must be sent within 30 days of dishonour.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h4 className="font-semibold">
// // //                 Q3: Can a cheque bounce case result in imprisonment?
// // //               </h4>
// // //               <p>
// // //                 Yes, penalties may include fine and imprisonment.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h4 className="font-semibold">
// // //                 Q4: Is settlement possible?
// // //               </h4>
// // //               <p>
// // //                 Yes, many matters can be resolved through settlement or compounding.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ================= FINAL CTA ================= */}

// // //         <section className="bg-black text-white py-20 text-center px-6">
// // //           <h2 className="text-3xl md:text-4xl font-semibold mb-6">
// // //             Get Immediate Legal Help from a Cheque Bounce Lawyer in Bangalore
// // //           </h2>

// // //           <p className="text-gray-300 mb-8">
// // //             Consult an experienced Cheque Bounce Lawyer in Bangalore today
// // //             for strategic legal guidance and effective court representation.
// // //           </p>

// // //           <div className="flex justify-center gap-6 flex-wrap">
// // //             <Link
// // //               href="/legal-consultation-in-bangalore"
// // //               className="bg-[#C9A24D] text-black px-6 py-3 rounded-md font-semibold"
// // //             >
// // //               Book Confidential Consultation
// // //             </Link>

// // //             <Link
// // //               href="/legal-consultation-in-bangalore"
// // //               className="border border-white px-6 py-3 rounded-md font-semibold"
// // //             >
// // //               Request Call Back
// // //             </Link>
// // //           </div>

// // //           <p className="mt-8 text-gray-400 text-sm">
// // //             All matters handled with complete confidentiality and professional discretion.
// // //           </p>
// // //         </section>

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
// // import { useState } from "react";
// // export default function ChequeBounceNICasesPage() {
// //   const [openIndex, setOpenIndex] = useState(null);

// // const toggleFAQ = (index) => {
// //   setOpenIndex(openIndex === index ? null : index);
// // };

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

// //             {/* <motion.p
// //               variants={fadeUp}
// //               className="text-gray-400 text-sm mb-6"
// //             >
// //               Home <span className="mx-2">›</span>
// //               <span className="text-[#C9A24D]">
// //                 Cheque Bounce Lawyer in Bangalore
// //               </span>
// //             </motion.p> */}

// //             <motion.h1
// //               variants={fadeUp}
// //               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight"
// //             >
// //               Experienced Cheque Bounce Lawyer in Bangalore for Section 138 NI Act Cases
// //             </motion.h1>

// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
// //             >
// //               Our firm provides strategic legal representation as a Cheque Bounce Lawyer in Bangalore,
// //               assisting clients in cheque bounce cases under the Negotiable Instruments Act.
// //               We handle both prosecution and defense matters with precision and strong courtroom advocacy.
// //               <br /><br />
// //               We ensure strict compliance with statutory timelines and build legally sound strategies
// //               to protect your financial interests.
// //               <br />
// //               <span className="text-[#C9A24D] font-semibold">
// //                 Response within 24 hours guaranteed.
// //               </span>
// //             </motion.p>

// //             <motion.div variants={fadeUp} className="mt-8 flex justify-center gap-6 flex-wrap">
// //               <Link href="/legal-consultation-in-bangalore">
// //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// //                   Book Confidential Consultation
// //                 </button>
// //               </Link>

// //               <a href="tel:+919000000000">
// //                 <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
// //                   Call Now
// //                 </button>
// //               </a>
// //             </motion.div>

// //           </motion.div>

// //           {/* FLOATING IMAGE (NOT REMOVED) */}

// //           <motion.div
// //             variants={fadeImage}
// //             initial="hidden"
// //             animate="visible"
// //             className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20"
// //           >
// //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
// //               <Image
// //                 src="/cheque-bounce.jpg"
// //                 alt="Cheque Bounce NI Act Cases"
// //                 width={1400}
// //                 height={800}
// //                 className="w-full h-[400px] md:h-[500px] object-cover"
// //                 priority
// //               />
// //             </div>
// //           </motion.div>

// //         </section>

// //         <div className="h-40 md:h-60"></div>

// //         {/* ================= LEGAL SUPPORT ================= */}

// //         <section className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-24">

// //           <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
// //             Legal Support for Cheque Bounce & NI Act Matters
// //           </h2>

// //           <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
// //             Cheque dishonour cases require timely legal action and strict compliance with statutory timelines.
// //             As experienced Section 138 NI Act lawyers, we assist clients in initiating and defending cheque bounce proceedings.
// //             Our team ensures proper notice drafting, complaint filing, and effective representation before the appropriate courts in Bangalore.
// //           </p>

// //           <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
// //             Our Cheque Bounce Services Include
// //           </h3>

// //           <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-16">
// //             <li>Section 138 NI Act Cases</li>
// //             <li>Legal Notice Drafting & Reply</li>
// //             <li>Filing of Criminal Complaints</li>
// //             <li>Defense in False Cheque Bounce Cases</li>
// //             <li>Recovery Proceedings</li>
// //             <li>Trial & Appellate Representation</li>
// //           </ul>

// //           {/* IMAGE NOT REMOVED */}

// //           <div className="mb-16">
// //             <Image
// //               src="/cheque.png"
// //               alt="Cheque Bounce Legal Consultation"
// //               width={1200}
// //               height={600}
// //               className="w-full rounded-xl shadow-lg"
// //             />
// //           </div>

// //           {/* ================= APPROACH ================= */}

// //           <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
// //             Our Approach / How We Work
// //           </h3>

// //           <div className="space-y-6 text-gray-700 mb-16">
// //             <p><strong>Step 1:</strong> Case Review & Document Verification</p>
// //             <p><strong>Step 2:</strong> Legal Notice & Compliance Strategy</p>
// //             <p><strong>Step 3:</strong> Filing Complaint / Defense Preparation</p>
// //             <p><strong>Step 4:</strong> Court Representation & Resolution</p>
// //           </div>

// //           {/* ================= WHY CHOOSE ================= */}

// //           <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
// //             Why Choose Our Firm
// //           </h3>

// //           <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-16">
// //             <li>Experienced Negotiable Instruments Act lawyers</li>
// //             <li>Strategic handling of cheque bounce cases</li>
// //             <li>Strong courtroom representation in Bangalore</li>
// //             <li>Clear guidance on statutory timelines and compliance</li>
// //           </ul>

// //           {/* ================= FAQ ================= */}

// //           <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
// //             Frequently Asked Questions
// //           </h3>

// //           <div className="space-y-4">
// //   {[
// //     {
// //       question: "What is Section 138 of the NI Act?",
// //       answer:
// //         "Section 138 deals with penalties for cheque dishonour due to insufficient funds.",
// //     },
// //     {
// //       question: "What is the time limit for filing?",
// //       answer:
// //         "Legal notice must be sent within 30 days of dishonour.",
// //     },
// //     {
// //       question: "Can imprisonment occur?",
// //       answer:
// //         "Yes, penalties may include fine and imprisonment.",
// //     },
// //     {
// //       question: "Can cases be settled?",
// //       answer:
// //         "Yes, many matters can be resolved through settlement or compounding.",
// //     },
// //   ].map((faq, index) => (
// //     <div
// //       key={index}
// //       className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
// //     >
// //       <button
// //         onClick={() => toggleFAQ(index)}
// //         className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
// //       >
// //         <span className="font-semibold text-lg text-black">
// //           {faq.question}
// //         </span>

// //         <span className="text-[#C9A24D] text-2xl font-bold">
// //           {openIndex === index ? "−" : "+"}
// //         </span>
// //       </button>

// //       {openIndex === index && (
// //         <div className="px-6 py-4 text-gray-600 bg-gray-50">
// //           {faq.answer}
// //         </div>
// //       )}
// //     </div>
// //   ))}
// // </div>

// //         </section>

// //         {/* ================= FINAL CTA ================= */}

// //         <section className="relative py-28 mt-20 overflow-hidden">

// //           <div className="absolute inset-0">
// //             <Image
// //               src="/discussion.png"
// //               alt="Cheque Bounce Legal Support"
// //               fill
// //               className="object-cover"
// //             />
// //             <div className="absolute inset-0 bg-black/70"></div>
// //           </div>

// //           <div className="relative max-w-5xl mx-auto px-6 text-center">

// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Get Immediate Legal Help from a Cheque Bounce Lawyer in Bangalore
// //             </h2>

// //             <p className="text-gray-300 text-base md:text-lg mb-10">
// //               Consult an experienced Cheque Bounce Lawyer in Bangalore today for strategic legal guidance and effective court representation.
// //             </p>

// //             <Link href="/legal-consultation-in-bangalore">
// //               <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// //                 Book Confidential Consultation
// //               </button>
// //             </Link>

// //             <p className="mt-8 text-gray-400 text-sm">
// //               All matters handled with complete confidentiality and professional discretion.
// //             </p>

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
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";

// /* ================= SEO METADATA ================= */


// export default function ChequeBounceNICasesPage() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const fadeImage = {
//     hidden: { opacity: 0, scale: 1.05 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: { duration: 1.2 },
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
//             className="relative z-10 max-w-7xl mx-auto px-6 text-center"
//           >
//             <motion.h1
//               variants={fadeUp}
//                             // className="text-4xl md:text-6xl font-semibold text-white mb-6"

//               className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight"
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

//           {/* FLOATING IMAGE */}

//           <motion.div
//             variants={fadeImage}
//             initial="hidden"
//             animate="visible"
//             className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-0 pointer-events-none"
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

//         <section className="max-w-6xl mx-auto px-6 py-16 mt-24">

//           <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6">
//             Legal Support for Cheque Bounce & NI Act Matters
//           </h2>

//           <p className="text-gray-600 text-lg leading-relaxed mb-12">
//             Cheque dishonour cases require timely legal action and strict compliance with statutory timelines.
//             As experienced Section 138 NI Act lawyers, we assist clients in initiating and defending cheque bounce proceedings under the Negotiable Instruments Act.
//             Our team ensures proper notice drafting, complaint filing, and effective representation before the appropriate courts in Bangalore.
//           </p>

//           <h3 className="text-3xl font-semibold text-black mb-6">
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

//           <h3 className="text-3xl font-semibold text-black mb-6">
//             Our Approach / How We Work
//           </h3>

//           <div className="space-y-6 text-gray-700 mb-16">
//             <p>
//               <strong>Step 1: Case Review & Document Verification</strong><br />
//               We examine the cheque, bank memo, and transaction details to assess legal validity.
//             </p>

//             <p>
//               <strong>Step 2: Legal Notice & Compliance Strategy</strong><br />
//               Issuing or responding to statutory notice within prescribed timelines.
//             </p>

//             <p>
//               <strong>Step 3: Filing Complaint / Defense Preparation</strong><br />
//               Preparation of pleadings and documentation for NI Act case proceedings.
//             </p>

//             <p>
//               <strong>Step 4: Court Representation & Resolution</strong><br />
//               Strong representation as an NI Act case lawyer before trial and appellate courts.
//             </p>
//           </div>

//           {/* ================= WHY CHOOSE ================= */}

//           <h3 className="text-3xl font-semibold text-black mb-6">
//             Why Choose Our Firm
//           </h3>

//           <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-16">
//             <li>Experienced Negotiable Instruments Act lawyers</li>
//             <li>Strategic handling of cheque bounce cases</li>
//             <li>Strong courtroom representation in Bangalore</li>
//             <li>Clear guidance on statutory timelines and compliance</li>
//           </ul>

//           {/* ================= FAQ ================= */}

//           <h3 className="text-3xl font-semibold text-black mb-6">
//             Frequently Asked Questions
//           </h3>

//           <div className="space-y-4">
//             {[
//               {
//                 question: "What is Section 138 of the NI Act?",
//                 answer:
//                   "Section 138 of the Negotiable Instruments Act deals with penalties and legal consequences for cheque dishonour due to insufficient funds.",
//               },
//               {
//                 question: "What is the time limit for filing a cheque bounce case?",
//                 answer:
//                   "A legal notice must be sent within 30 days of cheque dishonour, and the complaint must be filed within the statutory limitation period.",
//               },
//               {
//                 question: "Can a cheque bounce case result in imprisonment?",
//                 answer:
//                   "Yes, under Section 138 NI Act, penalties may include fine and imprisonment, subject to court decision.",
//               },
//               {
//                 question: "What documents are required to file a cheque bounce case?",
//                 answer:
//                   "Original cheque, bank return memo, legal notice copy, postal proof, and supporting transaction documents.",
//               },
//               {
//                 question: "Can you defend against false cheque bounce allegations?",
//                 answer:
//                   "Yes, we represent clients in defending false or misused cheque cases by challenging liability, examining documentation, and presenting strong legal arguments before the court.",
//               },
//               {
//                 question: "Is it possible to settle a cheque bounce case out of court?",
//                 answer:
//                   "Yes, many cheque bounce matters can be resolved through settlement or compounding, subject to mutual agreement and court approval under the Negotiable Instruments Act.",
//               },
//             ].map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
//                 >
//                   <span className="font-semibold text-lg text-black">
//                     {faq.question}
//                   </span>

//                   <span className="text-[#C9A24D] text-2xl font-bold">
//                     {openIndex === index ? "−" : "+"}
//                   </span>
//                 </button>

//                 {openIndex === index && (
//                   <div className="px-6 py-4 text-gray-600 bg-gray-50">
//                     {faq.answer}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

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

//             <p className="text-gray-300 text-lg mb-10">
//               Consult an experienced Cheque Bounce Lawyer in Bangalore today for strategic legal guidance and effective court representation.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/legal-consultation-in-bangalore">
//                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
//                   Book Confidential Consultation
//                 </button>
//               </Link>

//               <Link href="/contact">
//                 <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
//                   Request Call Back
//                 </button>
//               </Link>
//             </div>

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

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const services = [
  "Section 138 NI Act Cases",
  "Legal Notice Drafting & Reply",
  "Filing of Criminal Complaints",
  "Defense in False Cheque Bounce Cases",
  "Recovery Proceedings",
  "Trial & Appellate Representation",
];

const steps = [
  {
    number: "01",
    title: "Case Review & Document Verification",
    body: "We examine the cheque, bank memo, and transaction details to assess legal validity.",
  },
  {
    number: "02",
    title: "Legal Notice & Compliance Strategy",
    body: "Issuing or responding to statutory notice within prescribed timelines.",
  },
  {
    number: "03",
    title: "Filing Complaint / Defense Preparation",
    body: "Preparation of pleadings and documentation for NI Act case proceedings.",
  },
  {
    number: "04",
    title: "Court Representation & Resolution",
    body: "Strong representation as an NI Act case lawyer before trial and appellate courts.",
  },
];

const whyChoose = [
  "Experienced Negotiable Instruments Act lawyers",
  "Strategic handling of cheque bounce cases",
  "Strong courtroom representation in Bangalore",
  "Clear guidance on statutory timelines and compliance",
];

const faqs = [
  {
    q: "What is Section 138 of the NI Act?",
    a: "Section 138 of the Negotiable Instruments Act deals with penalties and legal consequences for cheque dishonour due to insufficient funds.",
  },
  {
    q: "What is the time limit for filing a cheque bounce case?",
    a: "A legal notice must be sent within 30 days of cheque dishonour, and the complaint must be filed within the statutory limitation period.",
  },
  {
    q: "Can a cheque bounce case result in imprisonment?",
    a: "Yes, under Section 138 NI Act, penalties may include fine and imprisonment, subject to court decision.",
  },
  {
    q: "What documents are required to file a cheque bounce case?",
    a: "Original cheque, bank return memo, legal notice copy, postal proof, and supporting transaction documents.",
  },
  {
    q: "Can you defend against false cheque bounce allegations?",
    a: "Yes, we represent clients in defending false or misused cheque cases by challenging liability, examining documentation, and presenting strong legal arguments before the court.",
  },
  {
    q: "Is it possible to settle a cheque bounce case out of court?",
    a: "Yes, many cheque bounce matters can be resolved through settlement or compounding, subject to mutual agreement and court approval under the Negotiable Instruments Act.",
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

export default function ChequeBounceNICasesPage() {
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
        <section ref={heroRef} className="relative bg-[#0B0F14] overflow-hidden">

          {/* top gold border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />

          {/* animated corner brackets */}
          {[
            "top-8 left-8 border-t-2 border-l-2",
            "top-8 right-8 border-t-2 border-r-2",
          ].map((cls, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              className={`absolute w-12 h-12 border-[#C9A24D] z-10 ${cls}`}
            />
          ))}

          {/* subtle gold grid */}
          <div className="absolute inset-0 opacity-[0.04] z-0" style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
              "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
          }} />

          <motion.div style={{ y: heroY, opacity: heroOpa }}
            className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-16 text-center"
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
              Experienced Cheque Bounce Lawyer in Bangalore{" "}
              <span className="text-[#C9A24D]">for Section 138 NI Act Cases</span>
            </motion.h1>

            {/* Intro para 1 */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Our firm provides strategic legal representation as a Cheque Bounce Lawyer in
              Bangalore, assisting clients in cheque bounce cases under the Negotiable Instruments
              Act. We handle both prosecution and defense matters with precision and strong
              courtroom advocacy.
            </motion.p>

            {/* Intro para 2 */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              We ensure strict compliance with statutory timelines and build legally sound
              strategies to protect your financial interests.
            </motion.p>

            {/* 24-hour guarantee */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
            >
              Response within 24 hours guaranteed.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
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
          </motion.div>

          {/* Hero image */}
          <motion.div
            variants={scaleIn} initial="hidden" animate="show"
            className="relative z-10 max-w-6xl mx-auto px-6 pb-16"
          >
            <div className="rounded-xl overflow-hidden border border-[#C9A24D]/30 shadow-2xl">
              <Image
                src="/cheque-bounce.jpg"
                alt="Cheque Bounce NI Act Cases"
                width={1400} height={800}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
            className="relative z-10 pb-8 flex justify-center"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
              className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
            />
          </motion.div>
        </section>

        {/* ═════════════════ LEGAL SUPPORT FOR CHEQUE BOUNCE & NI ACT ══════════════ */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          {/* animated right vertical rule */}
          <motion.div
            initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
          />

          <div className="max-w-6xl mx-auto">
            <SectionHeading>Legal Support for Cheque Bounce &amp; NI Act Matters</SectionHeading>

            {/* Both full paragraphs from brief */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-lg leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                Cheque dishonour cases require timely legal action and strict compliance with
                statutory timelines. As experienced Section 138 NI Act lawyers, we assist clients
                in initiating and defending cheque bounce proceedings under the Negotiable
                Instruments Act.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.5}>
                Our team ensures proper notice drafting, complaint filing, and effective
                representation before the appropriate courts in Bangalore.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ OUR CHEQUE BOUNCE SERVICES ════════════════════════ */}
        <section className="py-28 px-6 bg-[#f8f6f1] relative">
          <GoldDivider />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <div className="max-w-6xl mx-auto">
            {/* H3 sub-heading from brief */}
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
            >
              Our Cheque Bounce Services Include
            </motion.h3>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-5 mb-16"
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

            {/* second image */}
            <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-gray-100 shadow-lg"
            >
              <Image
                src="/cheque.png"
                alt="Cheque Bounce Legal Consultation"
                width={1200} height={600}
                className="w-full object-cover"
              />
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
            <SectionHeading>Why Choose Our Firm</SectionHeading>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-5"
            >
              {whyChoose.map((item, i) => (
                <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
                  whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
                  className="bg-[#f8f6f1] border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
                >
                  {/* gold tick */}
                  <span className="text-[#C9A24D] font-black text-xl shrink-0 mt-0.5">✓</span>
                  <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
                    <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
                      {item}
                    </p>
                  </div>
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
          <Image src="/discussion.png" alt="Cheque Bounce Legal Support" fill className="object-cover" />
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
                S Jain &amp; Attorneys · Cheque Bounce &amp; NI Act
              </motion.p>

              {/* H2 — exact text from brief */}
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                className="text-3xl md:text-5xl font-bold mb-10 leading-tight"
              >
                Seek immediate help for cheque bounce disputes with skilled legal representation.
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
                All matters handled with complete confidentiality and professional discretion.
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