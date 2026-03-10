// // // // "use client";

// // // // import Navbar from "../../components/Navbar";
// // // // import Footer from "../../components/Footer";
// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";
// // // // import Link from "next/link";

// // // // export default function HighCourtSupremeCourtPracticePage() {

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
// // // //                 High Court & Supreme Court Practice
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
// // // //               High Court & Supreme Court Practice
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
// // // //               Expert legal representation in High Courts and the Supreme Court
// // // //               of India, providing strong advocacy, strategic litigation, and
// // // //               effective legal solutions for complex matters.
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
// // // //                 src="/highcourt-supreme.jpg"
// // // //                 alt="High Court Supreme Court Practice"
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
// // // //               We provide professional legal representation in High Courts and
// // // //               the Supreme Court of India. Our experienced advocates handle complex
// // // //               litigation, appeals, writ petitions, and constitutional matters with
// // // //               strategic expertise and strong courtroom advocacy.
// // // //             </motion.p>



// // // //             {/* ================= SERVICES ================= */}

// // // //             <motion.h3
// // // //               variants={fadeUp}
// // // //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// // // //             >
// // // //               Our Court Practice Services
// // // //             </motion.h3>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
// // // //             >
// // // //               We provide comprehensive legal support and representation at the
// // // //               highest levels of the judicial system.
// // // //             </motion.p>



// // // //             <motion.ul
// // // //               variants={fadeUp}
// // // //               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
// // // //             >

// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Writ Petitions:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Filing and defending writ petitions for protection of legal and constitutional rights.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Civil & Criminal Appeals:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Representation in appeals before High Courts and the Supreme Court.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Special Leave Petitions (SLP):
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Filing and arguing SLPs before the Supreme Court of India.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Constitutional Matters:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Handling complex constitutional and fundamental rights cases.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Public Interest Litigation (PIL):
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Filing and defending PILs for public and social justice matters.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Legal Opinions & Case Strategy:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Providing expert legal opinions and strategic litigation advice.
// // // //                 </p>
// // // //               </li>

// // // //             </motion.ul>



// // // //             {/* IMAGE */}

// // // //             <motion.div
// // // //   variants={fadeUp}
// // // //   className="mb-16 max-w-3xl mx-auto"
// // // // >
// // // //   <Image
// // // //     src="/high.png"
// // // //     alt="Court Legal Consultation"
// // // //     width={800}
// // // //     height={400}
// // // //     className="
// // // //       w-full
// // // //       h-[340px] md:h-[580px]
// // // //       object-cover
// // // //       rounded-xl
// // // //       shadow-lg
// // // //     "
// // // //     sizes="(max-width: 768px) 100vw, 700px"
// // // //   />
// // // // </motion.div>



// // // //             {/* WHY CHOOSE */}

// // // //             <motion.h3
// // // //               variants={fadeUp}
// // // //               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
// // // //             >
// // // //               Why Choose Us for Court Representation
// // // //             </motion.h3>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// // // //             >
// // // //               Our experienced legal team provides professional advocacy and strategic
// // // //               representation in High Courts and the Supreme Court. We focus on achieving
// // // //               favorable outcomes through thorough preparation, strong legal arguments,
// // // //               and dedicated client support.
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
// // // //               alt="Court Legal Support"
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
// // // //               Supreme Court & High Court Experts
// // // //             </p>


// // // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // // //               Get Expert Representation in Higher Courts
// // // //             </h2>


// // // //             <p className="text-gray-300 text-base md:text-lg mb-10">
// // // //               Our experienced advocates are ready to represent you in High Courts
// // // //               and the Supreme Court of India.
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
// // // import { useState } from "react";

// // // export default function HighCourtLawyerPage() {
// // //   const [openIndex, setOpenIndex] = useState(null);

// // //   const toggleFAQ = (index) => {
// // //     setOpenIndex(openIndex === index ? null : index);
// // //   };

// // //   const fadeUp = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { duration: 0.8, ease: "easeOut" }
// // //     }
// // //   };

// // //   const stagger = {
// // //     visible: { transition: { staggerChildren: 0.2 } }
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
// // //             className="max-w-7xl mx-auto px-6 text-center"
// // //           >

// // //             <motion.h1
// // //               variants={fadeUp}
// // //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// // //             >
// // //               Experienced High Court & Supreme Court Lawyers in Bangalore for Appeals & Writ Petitions
// // //             </motion.h1>

// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-300 max-w-3xl mx-auto mb-8"
// // //             >
// // //               Our firm provides experienced representation as a High Court Lawyer in Bangalore, handling complex appellate and constitutional matters with precision. We appear before the High Court and Supreme Court, offering strategic legal advocacy in appeals, writ petitions, and special leave petitions.
// // //               <span className="block mt-3 font-semibold text-[#C9A24D]">
// // //                 Response within 24 hours guaranteed.
// // //               </span>
// // //             </motion.p>

// // //             <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap">

// // //               <Link
// // //                 href="/legal-consultation-in-bangalore"
// // //                 className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition inline-block"
// // //               >
// // //                 Book Confidential Consultation
// // //               </Link>

// // //               <a
// // //                 href="tel:+919000000000"
// // //                 className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
// // //               >
// // //                 Call Now
// // //               </a>

// // //             </motion.div>

// // //           </motion.div>

// // //           {/* HERO IMAGE (NOT REMOVED) */}
// // //           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-0 pointer-events-none">
// // //             {/* <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20"> */}
// // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
// // //               <Image
// // //                 src="/highcourt-supreme.jpg"
// // //                 alt="High Court Lawyer in Bangalore"
// // //                 width={1400}
// // //                 height={800}
// // //                 className="w-full h-[400px] md:h-[500px] object-cover"
// // //                 priority
// // //               />
// // //             </div>
// // //           </div>

// // //         </section>

// // //         <div className="h-40 md:h-60"></div>

// // //         {/* ================= CONTENT ================= */}

// // //         <section className="max-w-6xl mx-auto px-6 py-16 mt-24">

// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             Appellate & Constitutional Court Representation
// // //           </h2>

// // //           <p className="text-gray-600 mb-10">
// // //             Appellate litigation demands detailed legal analysis and strong drafting. As a trusted Appeal Lawyer in Bangalore and Supreme Court Lawyer team, we represent clients in civil and criminal appeals, writ petitions, and constitutional matters.
// // //             Our attorneys ensure every case is prepared with clear grounds, proper documentation, and effective court presentation before higher judicial forums.
// // //           </p>

// // //           <h3 className="text-2xl font-semibold mb-6">
// // //             OUR HIGH COURT & SUPREME COURT SERVICES INCLUDE
// // //           </h3>

// // //           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
// // //             <li>▪ Writ Petitions</li>
// // //             <li>▪ Civil & Criminal Appeals</li>
// // //             <li>▪ Special Leave Petitions (SLP)</li>
// // //             <li>▪ Revision & Review Petitions</li>
// // //             <li>▪ Constitutional Matters</li>
// // //             <li>▪ Interim Applications & Stay Orders</li>
// // //           </ul>

// // //           {/* SECOND IMAGE (NOT REMOVED) */}
// // //           <div className="mb-16 max-w-3xl mx-auto">
// // //             <Image
// // //               src="/high.png"
// // //               alt="High Court Legal Consultation"
// // //               width={800}
// // //               height={400}
// // //               className="w-full h-[340px] md:h-[580px] object-cover rounded-xl shadow-lg"
// // //             />
// // //           </div>

// // //           <h3 className="text-3xl font-semibold mb-6">
// // //             OUR APPROACH / HOW WE WORK
// // //           </h3>

// // //           <div className="space-y-6 text-gray-700 mb-16">
// // //             <p><strong>Step 1:</strong> Case Evaluation & Order Review – Detailed analysis of trial court judgments and legal grounds for appeal.</p>
// // //             <p><strong>Step 2:</strong> Legal Strategy & Grounds of Appeal – Identifying procedural and substantive errors to build a strong appellate case.</p>
// // //             <p><strong>Step 3:</strong> Drafting & Filing Before Appellate Courts – Precise preparation of petitions, affidavits, and supporting documentation.</p>
// // //             <p><strong>Step 4:</strong> Final Hearing & Representation – Strong courtroom advocacy before High Court and Supreme Court benches.</p>
// // //           </div>

// // //           <h3 className="text-3xl font-semibold mb-6">
// // //             WHY CHOOSE OUR FIRM
// // //           </h3>

// // //           <ul className="space-y-3 text-gray-700 mb-16">
// // //             <li>✓ Experienced High Court and Supreme Court lawyers</li>
// // //             <li>✓ Skilled Writ Petition Lawyer representation</li>
// // //             <li>✓ Strategic appellate advocacy</li>
// // //             <li>✓ Transparent legal advice at every stage</li>
// // //           </ul>

// // //         </section>
// // //         {/* ================= FAQ SECTION ================= */}

// // //         <section className="pt-8 pb-20 -mt-10">
// // //           <div className="max-w-6xl mx-auto px-6">

// // //             <h3 className="text-5xl font-bold text-black mb-12">
// // //               Frequently Asked Questions
// // //             </h3>

// // //             <div className="space-y-6 text-lg text-gray-800">

// // //               {[
// // //                 {
// // //                   q: "Q1: What types of cases can be filed in the High Court?",
// // //                   a: "Writ petitions, appeals, revisions, and constitutional matters can be filed before the High Court."
// // //                 },
// // //                 {
// // //                   q: "Q2: What is a Special Leave Petition (SLP)?",
// // //                   a: "An SLP is filed before the Supreme Court to challenge High Court judgments."
// // //                 },
// // //                 {
// // //                   q: "Q3: Can High Court decisions be challenged?",
// // //                   a: "Yes, decisions can be challenged before the Supreme Court through appropriate legal remedies."
// // //                 },
// // //                 {
// // //                   q: "Q4: How long does an appeal process take?",
// // //                   a: "The timeline depends on the nature of the case and court schedule."
// // //                 },
// // //                 {
// // //                   q: "Q5: Do you handle urgent stay and interim relief matters?",
// // //                   a: "Yes, we file and argue urgent interim applications, stay petitions, and injunction matters to protect clients’ rights during appellate proceedings."
// // //                 },
// // //                 {
// // //                   q: "Q6: Can you represent clients from other cities or states?",
// // //                   a: "Yes, we represent clients across India in appellate and constitutional matters, including coordination, drafting, and court appearances."
// // //                 }
// // //               ].map((faq, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="border border-gray-200 rounded-lg p-6 cursor-pointer transition"
// // //                   onClick={() => toggleFAQ(index)}
// // //                 >
// // //                   <div className="flex justify-between items-center">
// // //                     <p className="font-semibold">{faq.q}</p>
// // //                     <span className="text-xl text-[#C9A24D]">
// // //                       {openIndex === index ? "−" : "+"}
// // //                     </span>
// // //                   </div>

// // //                   {openIndex === index && (
// // //                     <p className="mt-4 text-gray-700">
// // //                       {faq.a}
// // //                     </p>
// // //                   )}
// // //                 </div>
// // //               ))}

// // //             </div>

// // //           </div>
// // //         </section>

// // //         {/* ================= FINAL CTA ================= */}

// // //         <section className="relative py-28 mt-18 overflow-hidden">

// // //           <div className="absolute inset-0">
// // //             <Image
// // //               src="/discussion.png"
// // //               alt="High Court Lawyer Consultation"
// // //               fill
// // //               className="object-cover"
// // //             />
// // //             <div className="absolute inset-0 bg-black/70"></div>
// // //           </div>

// // //           <div className="relative max-w-5xl mx-auto px-6 text-center">

// // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // //               Get Immediate Legal Help from a High Court & Supreme Court Lawyer
// // //             </h2>

// // //             <p className="text-gray-300 mb-10">
// // //               Consult our experienced High Court Lawyer in Bangalore today. All matters handled with complete confidentiality and professional discretion.
// // //             </p>

// // //             <div className="flex justify-center gap-4 flex-wrap">
// // //               <Link href="/legal-consultation-in-bangalore">
// // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // //                   Book Confidential Consultation
// // //                 </button>
// // //               </Link>

// // //               <Link href="tel:+919000000000">
// // //                 <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
// // //                   Request Call Back
// // //                 </button>
// // //               </Link>
// // //             </div>

// // //           </div>

// // //         </section>

// // //       </main>

// // //       <Footer />
// // //     </>
// // //   );
// // // }


// // // "use client";

// // // import { useState, useRef } from "react";
// // // import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { ChevronDown } from "lucide-react";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";

// // // // ─── DATA ─────────────────────────────────────────────────────────────────────

// // // const services = [
// // //   "Writ Petitions",
// // //   "Civil & Criminal Appeals",
// // //   "Special Leave Petitions (SLP)",
// // //   "Revision & Review Petitions",
// // //   "Constitutional Matters",
// // //   "Interim Applications & Stay Orders",
// // // ];

// // // const steps = [
// // //   {
// // //     number: "01",
// // //     title: "Case Evaluation & Order Review",
// // //     body: "Detailed analysis of trial court judgments and legal grounds for appeal.",
// // //   },
// // //   {
// // //     number: "02",
// // //     title: "Legal Strategy & Grounds of Appeal",
// // //     body: "Identifying procedural and substantive errors to build a strong appellate case.",
// // //   },
// // //   {
// // //     number: "03",
// // //     title: "Drafting & Filing Before Appellate Courts",
// // //     body: "Precise preparation of petitions, affidavits, and supporting documentation.",
// // //   },
// // //   {
// // //     number: "04",
// // //     title: "Final Hearing & Representation",
// // //     body: "Strong courtroom advocacy as an appellate advocate before High Court and Supreme Court benches.",
// // //   },
// // // ];

// // // const whyChoose = [
// // //   "Experienced High Court and Supreme Court lawyers",
// // //   "Skilled Writ Petition Lawyer representation",
// // //   "Strategic appellate advocacy",
// // //   "Transparent legal advice at every stage",
// // // ];

// // // const faqs = [
// // //   {
// // //     q: "What types of cases can be filed in the High Court?",
// // //     a: "Writ petitions, appeals, revisions, and constitutional matters can be filed before the High Court.",
// // //   },
// // //   {
// // //     q: "What is a Special Leave Petition (SLP)?",
// // //     a: "An SLP is filed before the Supreme Court to challenge High Court judgments.",
// // //   },
// // //   {
// // //     q: "Can High Court decisions be challenged?",
// // //     a: "Yes, decisions can be challenged before the Supreme Court through appropriate legal remedies.",
// // //   },
// // //   {
// // //     q: "How long does an appeal process take?",
// // //     a: "The timeline depends on the nature of the case and court schedule.",
// // //   },
// // //   {
// // //     q: "Do you handle urgent stay and interim relief matters in the High Court?",
// // //     a: "Yes, we file and argue urgent interim applications, stay petitions, and injunction matters to protect clients' rights during ongoing appellate or constitutional proceedings.",
// // //   },
// // //   {
// // //     q: "Can you represent clients from other cities or states before the High Court or Supreme Court?",
// // //     a: "Yes, we represent clients across India in appellate and constitutional matters, including coordination, drafting, and appearance before the High Court and Supreme Court.",
// // //   },
// // // ];

// // // // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 40 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, y: 0,
// // //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const fadeLeft = {
// // //   hidden: { opacity: 0, x: -40 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, x: 0,
// // //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const scaleIn = {
// // //   hidden: { opacity: 0, scale: 0.93 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, scale: 1,
// // //     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const stagger = {
// // //   hidden: {},
// // //   show: { transition: { staggerChildren: 0.12 } },
// // // };

// // // // ─── HELPERS ──────────────────────────────────────────────────────────────────

// // // function GoldDivider() {
// // //   return (
// // //     <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
// // //   );
// // // }

// // // function SectionHeading({ children, light = false }) {
// // //   return (
// // //     <motion.div
// // //       variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //       className="mb-10"
// // //     >
// // //       <motion.span
// // //         initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
// // //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
// // //         className="block h-[3px] bg-[#C9A24D] mb-5"
// // //       />
// // //       <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
// // //         {children}
// // //       </h2>
// // //     </motion.div>
// // //   );
// // // }

// // // // ─── PAGE ─────────────────────────────────────────────────────────────────────

// // // export default function HighCourtLawyerPage() {
// // //   const [openIndex, setOpenIndex] = useState(null);
// // //   const heroRef = useRef(null);
// // //   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
// // //   const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
// // //   const heroOpa = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <main className="bg-white overflow-hidden">

// // //         {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
// // //         <section ref={heroRef} className="relative bg-[#0B0F14] overflow-hidden">

// // //           {/* top gold border */}
// // //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />

// // //           {/* animated corner brackets */}
// // //           {/* {[
// // //             "top-8 left-8 border-t-2 border-l-2",
// // //             "top-8 right-8 border-t-2 border-r-2",
// // //           ].map((cls, i) => (
// // //             <motion.div key={i}
// // //               initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
// // //               transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
// // //               className={`absolute w-12 h-12 border-[#C9A24D] z-10 ${cls}`}
// // //             />
// // //           ))} */}

// // //           {/* subtle gold grid */}
// // //           <div className="absolute inset-0 opacity-[0.04] z-0" style={{
// // //             backgroundImage:
// // //               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
// // //               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
// // //           }} />

// // //           <motion.div style={{ y: heroY, opacity: heroOpa }}
// // //             className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-16 text-center"
// // //           >
// // //             {/* eyebrow */}
// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
// // //               className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
// // //             >
// // //               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
// // //               S Jain &amp; Attorneys · Bangalore
// // //               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
// // //             </motion.p>

// // //             {/* H1 */}
// // //             <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
// // //               className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8"
// // //             >
// // //               Experienced High Court &amp; Supreme Court Lawyers in Bangalore{" "}
// // //               <span className="text-[#C9A24D]">for Appeals &amp; Writ Petitions</span>
// // //             </motion.h1>

// // //             {/* Intro para — from brief */}
// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
// // //               className="text-gray-300 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
// // //             >
// // //               Our firm provides experienced representation as a High Court Lawyer in Bangalore,
// // //               handling complex appellate and constitutional matters with precision. We appear before
// // //               the High Court and Supreme Court, offering strategic legal advocacy in appeals, writ
// // //               petitions, and special leave petitions.
// // //             </motion.p>

// // //             {/* 24-hour guarantee */}
// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
// // //               className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
// // //             >
// // //               Response within 24 hours guaranteed.
// // //             </motion.p>

// // //             {/* CTAs */}
// // //             <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
// // //               className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
// // //             >
// // //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// // //                 <Link href="/legal-consultation-in-bangalore"
// // //                   className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200"
// // //                 >
// // //                   Book Confidential Consultation
// // //                 </Link>
// // //               </motion.div>
// // //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// // //                 <Link href="tel:+919000000000"
// // //                   className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
// // //                 >
// // //                   Call Now
// // //                 </Link>
// // //               </motion.div>
// // //             </motion.div>
// // //           </motion.div>

// // //           {/* Hero image */}
// // //           <motion.div
// // //             variants={scaleIn} initial="hidden" animate="show"
// // //             className="relative z-10 max-w-6xl mx-auto px-6 pb-16"
// // //           >
// // //             <div className="rounded-xl overflow-hidden border border-[#C9A24D]/30 shadow-2xl">
// // //               <Image
// // //                 src="/highcourt-supreme.jpg"
// // //                 alt="High Court Lawyer in Bangalore"
// // //                 width={1400} height={700}
// // //                 className="w-full h-[400px] md:h-[520px] object-cover"
// // //                 priority
// // //               />
// // //             </div>
// // //           </motion.div>

// // //           {/* scroll indicator */}
// // //           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
// // //             className="relative z-10 pb-8 flex justify-center"
// // //           >
// // //             {/* <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
// // //               className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
// // //             /> */}
// // //           </motion.div>
// // //         </section>

// // //         {/* ═══════════════ APPELLATE & CONSTITUTIONAL COURT REPRESENTATION ══════════ */}
// // //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// // //           {/* animated right vertical rule */}
// // //           <motion.div
// // //             initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
// // //             transition={{ duration: 1.2, delay: 0.3 }}
// // //             className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
// // //           />

// // //           <div className="max-w-6xl mx-auto">
// // //             <SectionHeading>Appellate &amp; Constitutional Court Representation</SectionHeading>

// // //             {/* Both full paragraphs from brief */}
// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="space-y-6 text-gray-600 text-lg leading-relaxed"
// // //             >
// // //               <motion.p variants={fadeUp}>
// // //                 Appellate litigation demands detailed legal analysis and strong drafting. As a
// // //                 trusted Appeal Lawyer in Bangalore and Supreme Court Lawyer team, we represent
// // //                 clients in civil and criminal appeals, writ petitions, and constitutional matters.
// // //               </motion.p>
// // //               <motion.p variants={fadeUp} custom={0.5}>
// // //                 Our attorneys ensure every case is prepared with clear grounds, proper
// // //                 documentation, and effective court presentation before higher judicial forums.
// // //               </motion.p>
// // //             </motion.div>
// // //           </div>
// // //         </section>

// // //         {/* ════════════════════ OUR HIGH COURT & SUPREME COURT SERVICES ═══════════════ */}
// // //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
// // //           <GoldDivider />
// // //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// // //           <div className="max-w-6xl mx-auto">
// // //             {/* H3 sub-heading from brief */}
// // //             <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
// // //             >
// // //               Our High Court &amp; Supreme Court Services Include
// // //             </motion.h3>

// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="grid md:grid-cols-2 gap-5"
// // //             >
// // //               {services.map((item, i) => (
// // //                 <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
// // //                   whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
// // //                   className="bg-white border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
// // //                 >
// // //                   <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">
// // //                     {String(i + 1).padStart(2, "0")}
// // //                   </span>
// // //                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
// // //                     <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
// // //                       {item}
// // //                     </p>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </section>

// // //         {/* ════════════════════════════ OUR APPROACH ════════════════════════════ */}
// // //         <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
// // //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // //           {/* decorative watermark */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 0.04, x: 0 }}
// // //             viewport={{ once: true }} transition={{ duration: 1.2 }}
// // //             className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[22rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
// // //           >
// // //             4
// // //           </motion.div>

// // //           <div className="max-w-6xl mx-auto relative">
// // //             <SectionHeading light>Our Approach – How We Work</SectionHeading>

// // //             <div className="space-y-8">
// // //               {steps.map((step, i) => (
// // //                 <motion.div key={step.number}
// // //                   variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.2}
// // //                   className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-8 relative group transition-colors duration-300"
// // //                 >
// // //                   {/* corner ornaments */}
// // //                   <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />
// // //                   <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />

// // //                   <div className="flex gap-6 items-start">
// // //                     <span className="text-[#C9A24D] font-black text-3xl shrink-0 leading-none">{step.number}</span>
// // //                     <div className="border-l border-[#C9A24D]/30 pl-6">
// // //                       <h3 className="text-xl font-bold text-white mb-3">
// // //                         Step {i + 1}: {step.title}
// // //                       </h3>
// // //                       <p className="text-gray-400 leading-relaxed">{step.body}</p>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ════════════════════════════ WHY CHOOSE ══════════════════════════════ */}
// // //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// // //           <GoldDivider />
// // //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// // //           <div className="max-w-6xl mx-auto">
// // //             <SectionHeading>Why Choose Our Firm</SectionHeading>

// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="grid md:grid-cols-2 gap-5"
// // //             >
// // //               {whyChoose.map((item, i) => (
// // //                 <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
// // //                   whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
// // //                   className="bg-[#f8f6f1] border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
// // //                 >
// // //                   <span className="text-[#C9A24D] font-black text-xl shrink-0 mt-0.5">✓</span>
// // //                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
// // //                     <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
// // //                       {item}
// // //                     </p>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </section>

// // //         {/* ══════════════════════════════ FAQ ═══════════════════════════════════ */}
// // //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
// // //           <GoldDivider />

// // //           <div className="max-w-4xl mx-auto">
// // //             <SectionHeading>Frequently Asked Questions</SectionHeading>

// // //             <div className="space-y-4">
// // //               {faqs.map((faq, index) => (
// // //                 <motion.div key={index}
// // //                   variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.1}
// // //                   className={`rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-sm ${
// // //                     openIndex === index
// // //                       ? "border-[#C9A24D] bg-[#fdf9f3] shadow-[0_4px_24px_rgba(201,162,77,0.15)]"
// // //                       : "border-gray-200 bg-white hover:border-[#C9A24D]/60 hover:shadow-md"
// // //                   }`}
// // //                 >
// // //                   <button
// // //                     onClick={() => setOpenIndex(openIndex === index ? null : index)}
// // //                     className="w-full flex justify-between items-start p-7 text-left gap-4 group"
// // //                     aria-expanded={openIndex === index}
// // //                   >
// // //                     <div className="flex items-start gap-4 flex-1">
// // //                       <span className={`shrink-0 mt-1 w-1 self-stretch rounded-full transition-colors duration-300 ${
// // //                         openIndex === index ? "bg-[#C9A24D]" : "bg-gray-200 group-hover:bg-[#C9A24D]/50"
// // //                       }`} />
// // //                       <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
// // //                         openIndex === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"
// // //                       }`}>
// // //                         Q{index + 1}: {faq.q}
// // //                       </span>
// // //                     </div>
// // //                     <motion.div
// // //                       animate={{ rotate: openIndex === index ? 180 : 0 }}
// // //                       transition={{ duration: 0.25 }}
// // //                       className="shrink-0 mt-1"
// // //                     >
// // //                       <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
// // //                     </motion.div>
// // //                   </button>

// // //                   <AnimatePresence>
// // //                     {openIndex === index && (
// // //                       <motion.div
// // //                         initial={{ height: 0, opacity: 0 }}
// // //                         animate={{ height: "auto", opacity: 1 }}
// // //                         exit={{ height: 0, opacity: 0 }}
// // //                         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
// // //                         className="overflow-hidden"
// // //                       >
// // //                         <div className="px-7 pb-7 border-t-2 border-[#C9A24D]/20 ml-7">
// // //                           <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
// // //                         </div>
// // //                       </motion.div>
// // //                     )}
// // //                   </AnimatePresence>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ══════════════════════════ FINAL CTA ═════════════════════════════════ */}
// // //          <section className="relative py-28 overflow-hidden">

// // //           <div className="absolute inset-0">
// // //             <Image
// // //               src="/discussion.png"
// // //               alt="Consultation"
// // //               fill
// // //               className="object-cover"
// // //             />
// // //             <div className="absolute inset-0 bg-black/70"></div>
// // //           </div>

// // //           <div className="relative max-w-5xl mx-auto px-6 text-center">

// // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // //               Consult an experienced Cheque Bounce Lawyer in Bangalore today for strategic legal guidance and effective court representation.
// // //             </h2>

// // //             <Link href="/international-lawyer-in-bangalore/consultation">
// // //               <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // //                 Request Call Back
// // //               </button>
// // //             </Link>

// // //             <p className="text-gray-400 text-sm mt-8">
// // //               All matters handled with complete confidentiality and legal discretion.
// // //             </p>

// // //           </div>

// // //         </section>

// // //       </main>

// // //       <Footer />
// // //     </>
// // //   );
// // // }




// // "use client";

// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { ChevronDown } from "lucide-react";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // // ─── DATA ─────────────────────────────
// // const services = [
// //   "Writ Petitions",
// //   "Civil & Criminal Appeals",
// //   "Special Leave Petitions (SLP)",
// //   "Revision & Review Petitions",
// //   "Constitutional Matters",
// //   "Interim Applications & Stay Orders",
// // ];

// // const steps = [
// //   { number: "01", title: "Case Evaluation & Order Review", body: "Detailed analysis of trial court judgments and legal grounds for appeal." },
// //   { number: "02", title: "Legal Strategy & Grounds of Appeal", body: "Identifying procedural and substantive errors to build a strong appellate case." },
// //   { number: "03", title: "Drafting & Filing Before Appellate Courts", body: "Precise preparation of petitions, affidavits, and supporting documentation." },
// //   { number: "04", title: "Final Hearing & Representation", body: "Strong courtroom advocacy as an appellate advocate before High Court and Supreme Court benches." },
// // ];

// // const whyChoose = [
// //   "Experienced High Court and Supreme Court lawyers",
// //   "Skilled Writ Petition Lawyer representation",
// //   "Strategic appellate advocacy",
// //   "Transparent legal advice at every stage",
// // ];

// // const faqs = [
// //   { q: "What types of cases can be filed in the High Court?", a: "Writ petitions, appeals, revisions, and constitutional matters can be filed before the High Court." },
// //   { q: "What is a Special Leave Petition (SLP)?", a: "An SLP is filed before the Supreme Court to challenge High Court judgments." },
// //   { q: "Can High Court decisions be challenged?", a: "Yes, decisions can be challenged before the Supreme Court through appropriate legal remedies." },
// //   { q: "How long does an appeal process take?", a: "The timeline depends on the nature of the case and court schedule." },
// //   { q: "Do you handle urgent stay and interim relief matters in the High Court?", a: "Yes, we file and argue urgent interim applications, stay petitions, and injunction matters to protect clients' rights during ongoing appellate or constitutional proceedings." },
// //   { q: "Can you represent clients from other cities or states before the High Court or Supreme Court?", a: "Yes, we represent clients across India in appellate and constitutional matters, including coordination, drafting, and appearance before the High Court and Supreme Court." },
// // ];

// // // ─── ANIMATION ─────────────────────────
// // const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
// // const fadeLeft = { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

// // // ─── COMPONENTS ───────────────────────
// // function SectionHeading({ children }) {
// //   return (
// //     <div className="mb-8">
// //       <h2 className="text-3xl md:text-4xl font-bold">{children}</h2>
// //     </div>
// //   );
// // }

// // // ─── PAGE ─────────────────────────────
// // export default function HighCourtLawyerPage() {
// //   const [openIndex, setOpenIndex] = useState(null);

// //   return (
// //     <>
// //       <Navbar />
// //       <main className="bg-white">

// //         {/* HERO */}
// //         <section className="bg-[#0B0F14] text-white text-center py-24 px-6">
// //           <p className="text-[#C9A24D] text-xs tracking-widest mb-4">S Jain & Attorneys · Bangalore</p>
// //           <h1 className="text-4xl md:text-5xl font-bold mb-6">
// //             Experienced High Court & Supreme Court Lawyers in Bangalore <span className="text-[#C9A24D]">for Appeals & Writ Petitions</span>
// //           </h1>
// //           <p className="max-w-2xl mx-auto mb-6">Our firm provides experienced representation as a High Court Lawyer in Bangalore, handling complex appellate and constitutional matters with precision. We appear before the High Court and Supreme Court, offering strategic legal advocacy in appeals, writ petitions, and special leave petitions.</p>
// //           <p className="text-[#C9A24D] font-semibold mb-6">Response within 24 hours guaranteed.</p>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             <Link href="/legal-consultation-in-bangalore" className="bg-[#C9A24D] text-black px-6 py-3 font-semibold hover:bg-[#b8913d] transition">Book Consultation</Link>
// //             <Link href="tel:+919000000000" className="border-2 border-[#C9A24D] text-[#C9A24D] px-6 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition">Call Now</Link>
// //           </div>
// //           <div className="mt-10 max-w-4xl mx-auto">
// //             <Image src="/highcourt-supreme.jpg" width={1400} height={700} alt="High Court Lawyer in Bangalore" className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"/>
// //           </div>
// //         </section>

// //         {/* COURT REPRESENTATION */}
// //         <section className="py-20 px-6 max-w-6xl mx-auto">
// //           <SectionHeading>Appellate & Constitutional Court Representation</SectionHeading>
// //           <p className="text-gray-700 mb-4">Appellate litigation demands detailed legal analysis and strong drafting. As a trusted Appeal Lawyer in Bangalore and Supreme Court Lawyer team, we represent clients in civil and criminal appeals, writ petitions, and constitutional matters.</p>
// //           <p className="text-gray-700">Our attorneys ensure every case is prepared with clear grounds, proper documentation, and effective court presentation before higher judicial forums.</p>
// //         </section>

// //         {/* SERVICES */}
// //         <section className="py-20 px-6 max-w-6xl mx-auto">
// //           <SectionHeading>Our High Court & Supreme Court Services</SectionHeading>
// //           <div className="grid md:grid-cols-2 gap-6">
// //             {services.map((service, i) => (
// //               <motion.div key={i} variants={fadeLeft} initial="hidden" whileInView="show" className="p-6 border rounded-lg hover:shadow-md transition cursor-pointer">
// //                 <span className="font-bold text-xl text-[#C9A24D]">{String(i+1).padStart(2,"0")}</span>
// //                 <p className="mt-2 font-semibold">{service}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* OUR APPROACH */}
// //         <section className="py-20 px-6 max-w-6xl mx-auto bg-gray-100 rounded-lg">
// //           <SectionHeading>Our Approach – How We Work</SectionHeading>
// //           <div className="space-y-6">
// //             {steps.map((step, i) => (
// //               <motion.div key={i} variants={fadeLeft} initial="hidden" whileInView="show" className="p-6 border rounded-lg">
// //                 <h3 className="font-bold text-lg mb-2">Step {i+1}: {step.title}</h3>
// //                 <p className="text-gray-700">{step.body}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* WHY CHOOSE */}
// //         <section className="py-20 px-6 max-w-6xl mx-auto">
// //           <SectionHeading>Why Choose Our Firm</SectionHeading>
// //           <div className="grid md:grid-cols-2 gap-6">
// //             {whyChoose.map((item, i) => (
// //               <motion.div key={i} variants={fadeLeft} initial="hidden" whileInView="show" className="p-6 border rounded-lg flex items-start gap-3">
// //                 <span className="text-green-600 font-bold text-xl">✓</span>
// //                 <p className="font-semibold">{item}</p>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* FAQ */}
// //         <section className="py-20 px-6 max-w-4xl mx-auto">
// //           <SectionHeading>Frequently Asked Questions</SectionHeading>
// //           <div className="space-y-4">
// //             {faqs.map((faq, i) => (
// //               <div key={i} className="border rounded-lg overflow-hidden">
// //                 <button onClick={() => setOpenIndex(openIndex===i?null:i)} className="w-full p-4 text-left flex justify-between items-center">
// //                   <span>{faq.q}</span>
// //                   <ChevronDown className={`${openIndex===i?'rotate-180':''} transition-transform`} />
// //                 </button>
// //                 <AnimatePresence>
// //                   {openIndex===i && (
// //                     <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} className="p-4 text-gray-700">
// //                       {faq.a}
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* FINAL CTA */}
// //         <section className="py-20 px-6 bg-[#0B0F14] text-white text-center">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-6">Consult an Expert High Court Lawyer Today</h2>
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">
// //             <Link href="/legal-consultation-in-bangalore" className="bg-[#C9A24D] text-black px-6 py-3 font-semibold hover:bg-[#b8913d] transition">Request Call Back</Link>
// //             <Link href="tel:+919000000000" className="border-2 border-[#C9A24D] px-6 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition">Call Now</Link>
// //           </div>
// //           <p className="text-gray-400 mt-6">All matters handled with complete confidentiality and discretion.</p>
// //         </section>

// //       </main>
// //       <Footer />
// //     </>
// //   );
// // }


// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Head from "next/head";

// // ─── DATA ─────────────────────────────────────────────
// const services = [
//   "Writ Petitions",
//   "Civil & Criminal Appeals",
//   "Special Leave Petitions (SLP)",
//   "Revision & Review Petitions",
//   "Constitutional Matters",
//   "Interim Applications & Stay Orders",
// ];

// const steps = [
//   { number: "01", title: "Case Evaluation & Order Review", body: "Detailed analysis of trial court judgments and legal grounds for appeal." },
//   { number: "02", title: "Legal Strategy & Grounds of Appeal", body: "Identifying procedural and substantive errors to build a strong appellate case." },
//   { number: "03", title: "Drafting & Filing Before Appellate Courts", body: "Precise preparation of petitions, affidavits, and supporting documentation." },
//   { number: "04", title: "Final Hearing & Representation", body: "Strong courtroom advocacy as an appellate advocate before High Court and Supreme Court benches." },
// ];

// const whyChoose = [
//   "Experienced High Court and Supreme Court lawyers",
//   "Skilled Writ Petition Lawyer representation",
//   "Strategic appellate advocacy",
//   "Transparent legal advice at every stage",
// ];

// const faqs = [
//   { q: "What types of cases can be filed in the High Court?", a: "Writ petitions, appeals, revisions, and constitutional matters can be filed before the High Court." },
//   { q: "What is a Special Leave Petition (SLP)?", a: "An SLP is filed before the Supreme Court to challenge High Court judgments." },
//   { q: "Can High Court decisions be challenged?", a: "Yes, decisions can be challenged before the Supreme Court through appropriate legal remedies." },
//   { q: "How long does an appeal process take?", a: "The timeline depends on the nature of the case and court schedule." },
//   { q: "Do you handle urgent stay and interim relief matters in the High Court?", a: "Yes, we file and argue urgent interim applications, stay petitions, and injunction matters to protect clients’ rights during ongoing appellate or constitutional proceedings." },
//   { q: "Can you represent clients from other cities or states before the High Court or Supreme Court?", a: "Yes, we represent clients across India in appellate and constitutional matters, including coordination, drafting, and appearance before the High Court and Supreme Court." },
// ];

// // ─── ANIMATION ─────────────────────────
// const fadeLeft = {
//   hidden: { opacity: 0, x: -40 },
//   show: (i = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
// };

// // ─── SECTION HEADING ─────────────────────────────────
// function SectionHeading({ children, light = false }) {
//   return (
//     <motion.div
//       variants={fadeLeft}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       className="mb-10"
//     >
//       <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
//         {children}
//       </h2>
//     </motion.div>
//   );
// }

// // ─── PAGE ────────────────────────────────────────────
// export default function HighCourtLawyerPage() {
//   const [openIndex, setOpenIndex] = useState(null);

//   return (
//     <>
//       <Head>
//         <title>High Court Lawyer in Bangalore | S Jain & Attorneys</title>
//         <meta name="description" content="Experienced High Court Lawyer in Bangalore providing Supreme Court representation, appeals, writ petitions, SLP filings, and strong appellate advocacy." />
//         <link rel="canonical" href="https://www.yourdomain.com/high-court-lawyer-in-bangalore" />
//       </Head>

//       <Navbar />

//       <main className="bg-white overflow-hidden">

//         {/* HERO */}
//         <section className="relative bg-[#0B0F14] overflow-hidden">
//           <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-8 text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8">
//               Experienced High Court & Supreme Court Lawyers in Bangalore for Appeals & Writ Petitions
//             </h1>

//             <p className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed">
//               Our firm provides experienced representation as a High Court Lawyer in Bangalore, handling complex appellate and constitutional matters with precision. We appear before the High Court and Supreme Court, offering strategic legal advocacy in appeals, writ petitions, and special leave petitions.
//             </p>

//             <p className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed">
//               Response within 24 hours guaranteed.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
//               <Link href="/legal-consultation-in-bangalore" className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200 text-center">
//                 Book Confidential Consultation
//               </Link>

//               <a href="tel:+919000000000" className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300 text-center">
//                 Call Now
//               </a>
//             </div>
//           </div>

//           {/* Hero Image */}
//           <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 ">
//             <div className="rounded-xl overflow-hidden border border-[#C9A24D]/30 shadow-2xl">
//               <Image src="/highcourt.jpg" alt="High Court Lawyer Bangalore" width={1400} height={800} className="w-full h-[400px] md:h-[500px] object-cover" priority />
//             </div>
//           </div>
//         </section>

//         {/* SERVICES */}
//         <section className="py-28 px-6 bg-[#f8f6f1]">
//           <div className="max-w-6xl mx-auto">
//             <SectionHeading>Our High Court & Supreme Court Services Include</SectionHeading>

//             <div className="grid md:grid-cols-2 gap-5 mb-16">
//               {services.map((item, i) => (
//                 <div key={i} className="bg-white border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 transition-all duration-300">
//                   <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
//                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
//                     <p className="text-base font-semibold text-gray-800">{item}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* APPROACH */}
//         <section className="py-28 px-6 bg-black text-white">
//           <div className="max-w-6xl mx-auto">
//             <SectionHeading light>Our Approach / How We Work</SectionHeading>

//             <div className="space-y-8">
//               {steps.map((step, i) => (
//                 <div key={i} className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-8 transition-colors duration-300">
//                   <div className="flex gap-6 items-start">
//                     <span className="text-[#C9A24D] font-black text-3xl shrink-0 leading-none">{step.number}</span>
//                     <div className="border-l border-[#C9A24D]/30 pl-6">
//                       <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
//                       <p className="text-gray-400 leading-relaxed">{step.body}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* WHY CHOOSE */}
//         <section className="py-28 px-6 bg-white">
//           <div className="max-w-6xl mx-auto">
//             <SectionHeading>Why Choose Our Firm</SectionHeading>

//             <div className="grid md:grid-cols-2 gap-6">
//               {whyChoose.map((item, i) => (
//                 <div key={i} className="p-6 border rounded-lg flex items-start gap-3">
//                   <span className="text-green-600 font-bold text-xl">✓</span>
//                   <p className="font-semibold">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FAQ */}
//         <section className="py-28 px-6 bg-[#f8f6f1]">
//           <div className="max-w-4xl mx-auto">
//             <SectionHeading>Frequently Asked Questions</SectionHeading>

//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="rounded-xl overflow-hidden border-2 border-gray-200 bg-white hover:border-[#C9A24D]/60 hover:shadow-md transition-all duration-300">
//                   <button
//                     onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                     className="w-full flex justify-between items-start p-7 text-left gap-4"
//                   >
//                     <div className="flex items-start gap-4 flex-1">
//                       <span className={`shrink-0 mt-1 w-1 self-stretch rounded-full ${openIndex === index ? "bg-[#C9A24D]" : "bg-gray-200"}`} />
//                       <span className={`text-base md:text-lg font-semibold ${openIndex === index ? "text-[#8a6a20]" : "text-gray-800"}`}>
//                         Q{index + 1}: {faq.q}
//                       </span>
//                     </div>
//                     <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 mt-1">
//                       <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {openIndex === index && (
//                       <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}>
//                         <div className="px-7 pb-7 border-t-2 border-[#C9A24D]/20 ml-7">
//                           <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FINAL CTA */}
//         <section className="relative py-24 overflow-hidden">
//           <div className="absolute inset-0">
//             <Image src="/discussion.png" alt="Legal Support" fill className="object-cover" />
//             <div className="absolute inset-0 bg-black/70"></div>
//           </div>

//           <div className="relative max-w-5xl mx-auto px-6 text-center">
//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Seek urgent legal help from a skilled High Court & Supreme Court litigation lawyer
//             </h2>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
//               <Link href="/contact" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition inline-block text-center">
//                 Request Call Back
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

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

// ─── DATA ─────────────────────────────────────────────
const services = [
  "Writ Petitions",
  "Civil & Criminal Appeals",
  "Special Leave Petitions (SLP)",
  "Revision & Review Petitions",
  "Constitutional Matters",
  "Interim Applications & Stay Orders",
];

const steps = [
  { number: "01", title: "Case Evaluation & Order Review", body: "Detailed analysis of trial court judgments and legal grounds for appeal." },
  { number: "02", title: "Legal Strategy & Grounds of Appeal", body: "Identifying procedural and substantive errors to build a strong appellate case." },
  { number: "03", title: "Drafting & Filing Before Appellate Courts", body: "Precise preparation of petitions, affidavits, and supporting documentation." },
  { number: "04", title: "Final Hearing & Representation", body: "Strong courtroom advocacy as an appellate advocate before High Court and Supreme Court benches." },
];

const whyChoose = [
  "Experienced High Court and Supreme Court lawyers",
  "Skilled Writ Petition Lawyer representation",
  "Strategic appellate advocacy",
  "Transparent legal advice at every stage",
];

const faqs = [
  { q: "What types of cases can be filed in the High Court?", a: "Writ petitions, appeals, revisions, and constitutional matters can be filed before the High Court." },
  { q: "What is a Special Leave Petition (SLP)?", a: "An SLP is filed before the Supreme Court to challenge High Court judgments." },
  { q: "Can High Court decisions be challenged?", a: "Yes, decisions can be challenged before the Supreme Court through appropriate legal remedies." },
  { q: "How long does an appeal process take?", a: "The timeline depends on the nature of the case and court schedule." },
  { q: "Do you handle urgent stay and interim relief matters in the High Court?", a: "Yes, we file and argue urgent interim applications, stay petitions, and injunction matters to protect clients’ rights during ongoing appellate or constitutional proceedings." },
  { q: "Can you represent clients from other cities or states before the High Court or Supreme Court?", a: "Yes, we represent clients across India in appellate and constitutional matters, including coordination, drafting, and appearance before the High Court and Supreme Court." },
];

// ─── ANIMATION ─────────────────────────
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: (i = 0) => ({ opacity: 1, x: 0, transition: { duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] } }),
};

// ─── SECTION HEADING ─────────────────────────────────
function SectionHeading({ children, light = false }) {
  return (
    <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
        {children}
      </h2>
    </motion.div>
  );
}

// ─── PAGE ────────────────────────────────────────────
export default function HighCourtLawyerPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Head>
        <title>High Court Lawyer in Bangalore | S Jain & Attorneys</title>
        <meta name="description" content="Experienced High Court Lawyer in Bangalore providing Supreme Court representation, appeals, writ petitions, SLP filings, and strong appellate advocacy." />
        <link rel="canonical" href="https://www.yourdomain.com/high-court-lawyer-in-bangalore" />
      </Head>

      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* HERO */}
        <section className="relative bg-[#0B0F14] overflow-hidden">
          <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-8 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Experienced High Court & Supreme Court Lawyers in Bangalore for Appeals & Writ Petitions
            </motion.h1>

            <motion.p
              className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our firm provides experienced representation as a High Court Lawyer in Bangalore, handling complex appellate and constitutional matters with precision. We appear before the High Court and Supreme Court, offering strategic legal advocacy in appeals, writ petitions, and special leave petitions.
            </motion.p>

            <motion.p
              className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Response within 24 hours guaranteed.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/legal-consultation-in-bangalore" className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200 text-center">
                Book Confidential Consultation
              </Link>

              <a href="tel:+919000000000" className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300 text-center">
                Call Now
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
              <div className="rounded-xl overflow-hidden border border-[#C9A24D]/30 shadow-2xl">
                <Image src="/highcourt-supreme.jpg" alt="High Court Lawyer Bangalore" width={1400} height={800} className="w-full h-[400px] md:h-[500px] object-cover" priority />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-28 px-6 bg-[#f8f6f1]">
          <div className="max-w-6xl mx-auto">
            <SectionHeading>Our High Court & Supreme Court Services Include</SectionHeading>

            <div className="grid md:grid-cols-2 gap-5 mb-2">
              {services.map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 transition-all duration-300"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                  <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
                    <p className="text-base font-semibold text-gray-800">{item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="py-28 px-6 bg-black text-white ">
          <div className="max-w-6xl mx-auto">
            <SectionHeading light>Our Approach / How We Work</SectionHeading>

            <div className="space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-8 transition-colors duration-300"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <div className="flex gap-6 items-start">
                    <span className="text-[#C9A24D] font-black text-3xl shrink-0 leading-none">{step.number}</span>
                    <div className="border-l border-[#C9A24D]/30 pl-6">
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="py-28 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionHeading>Why Choose Our Firm</SectionHeading>

            <div className="grid md:grid-cols-2 gap-6">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  className="p-6 border rounded-lg flex items-start gap-3"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  custom={i}
                >
                  <span className="text-green-600 font-bold text-xl">✓</span>
                  <p className="font-semibold">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 px-6 bg-[#f8f6f1]">
          <div className="max-w-4xl mx-auto">
            <SectionHeading>Frequently Asked Questions</SectionHeading>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-xl overflow-hidden border-2 border-gray-200 bg-white hover:border-[#C9A24D]/60 hover:shadow-md transition-all duration-300">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-start p-7 text-left gap-4"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <span className={`shrink-0 mt-1 w-1 self-stretch rounded-full ${openIndex === index ? "bg-[#C9A24D]" : "bg-gray-200"}`} />
                      <span className={`text-base md:text-lg font-semibold ${openIndex === index ? "text-[#8a6a20]" : "text-gray-800"}`}>
                        Q{index + 1}: {faq.q}
                      </span>
                    </div>
                    <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 mt-1">
                      <ChevronDown className={`w-5 h-5 ${openIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}>
                        <div className="px-7 pb-7 border-t-2 border-[#C9A24D]/20 ml-7">
                          <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/discussion.png" alt="Legal Support" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-semibold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Seek urgent legal help from a skilled High Court & Supreme Court litigation lawyer
            </motion.h2>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <Link href="/contact" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition inline-block text-center">
                Request Call Back
              </Link>
            </motion.div>

            <motion.p className="mt-8 text-gray-400 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }}>
              All matters handled with complete confidentiality and professional discretion.
            </motion.p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}