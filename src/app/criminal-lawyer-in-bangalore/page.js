// // // // "use client";

// // // // import Navbar from "../components/Navbar";
// // // // import Footer from "../components/Footer";
// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";
// // // // import Link from "next/link";

// // // // export default function CriminalDefensePage() {

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
// // // //                 Criminal Defense & Prosecution
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
// // // //               Criminal Defense & Prosecution
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
// // // //               Expert criminal defense and prosecution services ensuring your
// // // //               rights are protected with strategic legal representation and
// // // //               experienced courtroom advocacy.
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
// // // //                 src="/criminal-law.png"
// // // //                 alt="Criminal Defense"
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
// // // //               Criminal law involves defending individuals and organizations
// // // //               accused of criminal offenses while ensuring justice and legal
// // // //               rights are protected. Our experienced criminal lawyers provide
// // // //               strong defense strategies and professional prosecution services
// // // //               across a wide range of criminal matters.
// // // //             </motion.p>



// // // //             {/* ================= SERVICES ================= */}

// // // //             <motion.h3
// // // //               variants={fadeUp}
// // // //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// // // //             >
// // // //               Our Criminal Defense Services
// // // //             </motion.h3>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
// // // //             >
// // // //               We provide comprehensive criminal law services ensuring strong
// // // //               representation and effective legal protection at every stage.
// // // //             </motion.p>



// // // //             <motion.ul
// // // //               variants={fadeUp}
// // // //               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
// // // //             >

// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Criminal Trial Representation:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Professional courtroom representation for all criminal cases.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Bail & Anticipatory Bail:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Assistance in securing bail and protecting client freedom.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   White Collar Crime Defense:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Defense in financial fraud, corruption, and economic offences.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   FIR Quashing:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Legal remedies for wrongful FIR and criminal allegations.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Cyber Crime Defense:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Defense against cyber fraud, online crime, and digital offenses.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Criminal Appeals:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Filing appeals and revisions for justice and legal protection.
// // // //                 </p>
// // // //               </li>

// // // //             </motion.ul>



// // // //             {/* IMAGE */}

// // // //             <motion.div variants={fadeUp} className="mb-16">

// // // //               <Image
// // // //                 src="/lagel.png"
// // // //                 alt="Criminal Legal Services"
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
// // // //               Why Choose Us for Criminal Defense
// // // //             </motion.h3>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// // // //             >
// // // //               Our criminal defense team provides strategic, confidential,
// // // //               and professional legal services. We focus on protecting client
// // // //               rights, building strong defense strategies, and achieving the
// // // //               best possible legal outcomes.
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
// // // //               alt="Consultation"
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
// // // //               Get Expert Criminal Defense
// // // //             </p>


// // // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // // //               Let’s Discuss Your Case
// // // //             </h2>


// // // //             <p className="text-gray-300 text-base md:text-lg mb-10">
// // // //               Our experienced criminal lawyers are ready to protect your rights
// // // //               and provide strong legal defense.
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

// // // export default function CriminalDefensePage() {
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
// // //               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight"
// // //             >
// // //               Criminal Defense & Prosecution Lawyers in Bangalore for Bail, Trial & Appeals
// // //             </motion.h1>

// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
// // //             >
// // //               Our firm provides strong and strategic representation as a Criminal Lawyer in Bangalore,
// // //               handling serious allegations with precision and confidentiality.
// // //               Our experienced attorneys manage Criminal Defense & Prosecution matters
// // //               with a results-driven approach.
// // //               <br />
// // //               <br />
// // //               Our goal is to protect your legal rights, minimize risk exposure, and build a strong defense strategy
// // //               from the earliest stage of proceedings.
// // //             </motion.p>

// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-[#C9A24D] mt-6 font-medium"
// // //             >
// // //               Response within 24 hours guaranteed.
// // //             </motion.p>

// // //             <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
// // //               <Link href="/legal-consultation-in-bangalore">
// // //                 <button className="bg-[#C9A24D] text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
// // //                   Book Confidential Consultation
// // //                 </button>
// // //               </Link>
// // //               <Link href="tel:+919000000000">
// // //                 <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
// // //                   Call Now
// // //                 </button>
// // //               </Link>
// // //             </div>

// // //           </motion.div>

// // //           {/* HERO IMAGE */}
// // //           {/* <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20"> */}
// // //           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-0">
// // //             <div className="rounded-xl overflow-hidden shadow-xl mt-64">
              
// // //               <Image
// // //                 src="/criminal-law.png"
// // //                 alt="Criminal Lawyer in Bangalore"
// // //                 width={1400}
// // //                 height={800}
// // //                 className="w-full h-[300px] md:h-[500px] object-cover"
// // //                 priority
// // //               />
// // //             </div>
// // //           </div>

// // //         </section>

// // //         <div className="h-40 md:h-60"></div>

// // //         {/* ================= STRATEGIC SUPPORT ================= */}

// // //         <section className="max-w-6xl mx-auto px-6 py-16 mt-24">

// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             Strategic Criminal Defense & Prosecution Support
// // //           </h2>

// // //           <p className="text-gray-600 text-lg leading-relaxed mb-10">
// // //             Criminal cases demand immediate legal action and careful planning.
// // //             Our team represents clients in complex criminal matters,
// // //             ensuring their rights are protected at every stage.
// // //             With extensive courtroom experience, our attorneys handle investigations,
// // //             bail proceedings, trials, and appeals with structured legal strategy
// // //             and clear communication.
// // //           </p>

// // //           {/* SERVICES */}
// // //           <h3 className="text-3xl font-semibold mb-6">
// // //             Our Criminal Law Services Include
// // //           </h3>

// // //           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
// // //             <li>▪ Bail Applications (Regular & Anticipatory)</li>
// // //             <li>▪ FIR registration, quashing, and complaint defense</li>
// // //             <li>▪ Sessions court and magistrate court trials</li>
// // //             <li>▪ White Collar Crimes</li>
// // //             <li>▪ Cyber Crime Cases</li>
// // //             <li>▪ Domestic Violence & Assault Cases</li>
// // //             <li>▪ Criminal appeals and revision petitions</li>
// // //           </ul>

// // //           {/* SECOND IMAGE */}
// // //           <Image
// // //             src="/lagel.png"
// // //             alt="Criminal Defense Legal Services"
// // //             width={600}
// // //             height={400}
// // //             className="w-full rounded-xl shadow-lg mb-16"
// // //           />

// // //           {/* APPROACH */}
// // //           <h3 className="text-3xl font-semibold mb-6">
// // //             Our Approach / How We Work
// // //           </h3>

// // //           <div className="space-y-6 text-gray-700 mb-16">
// // //             <p><strong>Step 1: Case Assessment & Legal Consultation</strong><br />
// // //               Detailed review of allegations and available evidence.
// // //             </p>

// // //             <p><strong>Step 2: Evidence Review & Defense Strategy</strong><br />
// // //               Developing a strong defense or prosecution strategy.
// // //               We clearly explain legal risks, possible outcomes,
// // //               and defense options before proceeding.
// // //             </p>

// // //             <p><strong>Step 3: Filing & Court Proceedings</strong><br />
// // //               Handling petitions, documentation, and hearings.
// // //             </p>

// // //             <p><strong>Step 4: Trial Representation & Resolution</strong><br />
// // //               Effective representation before courts to achieve fair outcomes.
// // //             </p>
// // //           </div>

// // //           {/* WHY CHOOSE */}
// // //           <h3 className="text-3xl font-semibold mb-6">
// // //             Why Choose Our Firm
// // //           </h3>

// // //           <ul className="space-y-4 text-gray-700">
// // //             <li>✓ Experienced Criminal Law Attorneys</li>
// // //             <li>✓ Strong courtroom advocacy</li>
// // //             <li>✓ Confidential and strategic case handling</li>
// // //             <li>✓ Transparent legal guidance throughout the process</li>
// // //           </ul>

// // //         </section>

// // //         {/* FAQ */}
// // //         <section className="bg-gray-100 py-20">
// // //           <div className="max-w-6xl mx-auto px-6">
// // //             <h3 className="text-4xl font-semibold mb-10 text-center">
// // //               Frequently Asked Questions
// // //             </h3>

// // //             <div className="space-y-4">
// // //               {[
// // //                 {
// // //                   question: "How soon should I contact a criminal lawyer?",
// // //                   answer:
// // //                     "Immediately after receiving notice, FIR, arrest, or police inquiry.",
// // //                 },
// // //                 {
// // //                   question: "Can you help with bail matters?",
// // //                   answer:
// // //                     "Yes, we handle regular and anticipatory bail applications.",
// // //                 },
// // //                 {
// // //                   question: "Do you handle both defense and prosecution cases?",
// // //                   answer:
// // //                     "Yes, we provide Criminal Defense & Prosecution services.",
// // //                 },
// // //                 {
// // //                   question: "What documents should I bring?",
// // //                   answer:
// // //                     "FIR copy, notice, charge sheet, arrest memo and relevant documents.",
// // //                 },
// // //                 {
// // //                   question: "Can a criminal case be settled?",
// // //                   answer:
// // //                     "Some cases may be legally compoundable depending on the offence.",
// // //                 },
// // //                 {
// // //                   question: "What happens after an FIR is filed?",
// // //                   answer:
// // //                     "Police investigation begins followed by court proceedings.",
// // //                 },
// // //               ].map((faq, index) => (
// // //                 <div
// // //                   key={index}
// // //                   className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
// // //                 >
// // //                   <button
// // //                     onClick={() => toggleFAQ(index)}
// // //                     className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
// // //                   >
// // //                     <span className="font-semibold text-lg text-black">
// // //                       {faq.question}
// // //                     </span>

// // //                     <span className="text-[#C9A24D] text-2xl font-bold">
// // //                       {openIndex === index ? "−" : "+"}
// // //                     </span>
// // //                   </button>

// // //                   {openIndex === index && (
// // //                     <div className="px-6 py-4 text-gray-600 bg-gray-50">
// // //                       {faq.answer}
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* FINAL CTA */}
// // //         <section className="relative py-28 overflow-hidden">
// // //           <Image
// // //             src="/discussion.png"
// // //             alt="Criminal Lawyer Consultation"
// // //             fill
// // //             className="object-cover"
// // //           />
// // //           <div className="absolute inset-0 bg-black/70"></div>

// // //           <div className="relative max-w-4xl mx-auto text-center px-6">
// // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // //               Get Immediate Legal Help from a Criminal Lawyer in Bangalore
// // //             </h2>

// // //             <p className="text-gray-300 mb-10">
// // //               Consult our experienced criminal defense attorneys today.
// // //               All matters handled with complete confidentiality and legal discretion.
// // //             </p>

// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // //               <Link href="/contact">
// // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold">
// // //                   Book Confidential Consultation
// // //                 </button>
// // //               </Link>

// // //               <Link href="/contact">
// // //                 <button className="border border-white text-white px-8 py-4 rounded-lg">
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
// // //   "Bail Applications (Regular & Anticipatory)",
// // //   "FIR Registration, Quashing, and Complaint Defense",
// // //   "Sessions Court and Magistrate Court Trials",
// // //   "White Collar Crimes",
// // //   "Cyber Crime Cases",
// // //   "Domestic Violence & Assault Cases",
// // //   "Criminal Appeals and Revision Petitions",
// // // ];

// // // const steps = [
// // //   {
// // //     number: "01",
// // //     title: "Case Assessment & Legal Consultation",
// // //     body: "Every criminal matter begins with a thorough consultation. Our attorneys carefully review the allegations, examine the available evidence, and understand the full context of the case. This initial assessment helps us determine the most effective legal direction and provide honest guidance from the start.",
// // //   },
// // //   {
// // //     number: "02",
// // //     title: "Evidence Review & Defense Strategy",
// // //     body: "Once we understand the case, our legal team conducts a detailed analysis of all evidence and develops a strategic approach. Whether it involves building a strong defense or preparing for prosecution procedures, we explain the legal risks, possible outcomes, and available options clearly so clients can make informed decisions.",
// // //   },
// // //   {
// // //     number: "03",
// // //     title: "Legal Filing & Court Proceedings",
// // //     body: "Our team handles all necessary legal documentation, filings, petitions, and court procedures with precision. We represent our clients during hearings and ensure every procedural requirement is properly addressed to strengthen the case.",
// // //   },
// // //   {
// // //     number: "04",
// // //     title: "Trial Representation & Case Resolution",
// // //     body: "When the case proceeds to trial, our attorneys provide confident and effective courtroom representation. We present arguments strategically, protect our clients' rights, and work toward achieving the most fair and favorable resolution possible.",
// // //   },
// // // ];

// // // const whyChoose = [
// // //   {
// // //     icon: "⚖",
// // //     title: "Experienced Criminal Law Attorneys",
// // //     body: "Our legal team has extensive experience handling complex criminal cases and navigating challenging legal situations.",
// // //   },
// // //   {
// // //     icon: "🏛",
// // //     title: "Strong Courtroom Representation",
// // //     body: "We provide confident advocacy in court, presenting well-prepared arguments and evidence to support our clients' cases.",
// // //   },
// // //   {
// // //     icon: "🔒",
// // //     title: "Confidential & Strategic Case Handling",
// // //     body: "Every case is handled with the highest level of confidentiality, professionalism, and thoughtful legal strategy.",
// // //   },
// // //   {
// // //     icon: "📋",
// // //     title: "Transparent Legal Guidance",
// // //     body: "We believe in clear communication. Clients are informed about every stage of the legal process so they can move forward with clarity and confidence.",
// // //   },
// // // ];

// // // const faqs = [
// // //   {
// // //     q: "How soon should I contact a criminal lawyer?",
// // //     a: "Immediately after receiving notice, FIR, arrest, or police inquiry to protect your legal rights.",
// // //   },
// // //   {
// // //     q: "Can you help with bail matters?",
// // //     a: "Yes, we handle regular bail, anticipatory bail, and urgent bail applications before appropriate courts.",
// // //   },
// // //   {
// // //     q: "Do you handle both defense and prosecution cases?",
// // //     a: "Yes, we provide Criminal Defense & Prosecution services depending on the case requirements.",
// // //   },
// // //   {
// // //     q: "What documents should I bring for consultation?",
// // //     a: "FIR copy, notice, charge sheet, arrest memo, and any relevant communication or supporting evidence.",
// // //   },
// // //   {
// // //     q: "Can a criminal case be settled or withdrawn?",
// // //     a: "Some cases may be compoundable or resolved legally depending on the nature of the offence.",
// // //   },
// // //   {
// // //     q: "What happens after an FIR is filed?",
// // //     a: "Police investigation begins, followed by charge sheet filing and court proceedings if evidence supports prosecution.",
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

// // // export default function CriminalDefensePage() {
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
// // //           {[
// // //             "top-8 left-8 border-t-2 border-l-2",
// // //             "top-8 right-8 border-t-2 border-r-2",
// // //           ].map((cls, i) => (
// // //             <motion.div key={i}
// // //               initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
// // //               transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
// // //               className={`absolute w-12 h-12 border-[#C9A24D] z-10 ${cls}`}
// // //             />
// // //           ))}

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
// // //               Criminal Defense &amp; Prosecution Lawyers in Bangalore{" "}
// // //               <span className="text-[#C9A24D]">for Bail, Trial &amp; Appeals</span>
// // //             </motion.h1>

// // //             {/* Intro para 1 */}
// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
// // //               className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
// // //             >
// // //               Our firm provides strong and strategic representation as a Criminal Lawyer in
// // //               Bangalore, handling serious allegations with precision and confidentiality. Our
// // //               experienced attorneys manage Criminal Defense &amp; Prosecution matters with a
// // //               results-driven approach.
// // //             </motion.p>

// // //             {/* Intro para 2 — from brief */}
// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
// // //               className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
// // //             >
// // //               Our goal is to protect your legal rights, minimize risk exposure, and build a strong
// // //               defense strategy from the earliest stage of proceedings.
// // //             </motion.p>

// // //             {/* 24-hour guarantee */}
// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
// // //               className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
// // //             >
// // //               Response within 24 hours guaranteed.
// // //             </motion.p>

// // //             {/* CTAs */}
// // //             <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
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
// // //                 src="/criminal-law.png"
// // //                 alt="Criminal Lawyer in Bangalore"
// // //                 width={1400} height={800}
// // //                 className="w-full h-[300px] md:h-[500px] object-cover"
// // //                 priority
// // //               />
// // //             </div>
// // //           </motion.div>

// // //           {/* scroll indicator */}
// // //           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
// // //             className="relative z-10 pb-8 flex justify-center"
// // //           >
// // //             <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
// // //               className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
// // //             />
// // //           </motion.div>
// // //         </section>

// // //         {/* ════════════ STRATEGIC CRIMINAL DEFENSE & PROSECUTION SUPPORT ══════════ */}
// // //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// // //           {/* animated right vertical rule */}
// // //           <motion.div
// // //             initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
// // //             transition={{ duration: 1.2, delay: 0.3 }}
// // //             className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
// // //           />

// // //           <div className="max-w-6xl mx-auto">
// // //             <SectionHeading>Strategic Criminal Defense &amp; Prosecution Support</SectionHeading>

// // //             {/* Both full paragraphs from brief */}
// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="space-y-6 text-gray-600 text-lg leading-relaxed"
// // //             >
// // //               <motion.p variants={fadeUp}>
// // //                 Criminal cases require swift action, careful legal planning, and strong
// // //                 representation. Our legal team is committed to protecting the rights of individuals
// // //                 facing criminal charges and guiding them through every stage of the legal process.
// // //               </motion.p>
// // //               <motion.p variants={fadeUp} custom={0.5}>
// // //                 Our goal is to provide strong defense, strategic legal advice, and dedicated
// // //                 representation to help clients navigate complex criminal cases with confidence.
// // //               </motion.p>
// // //             </motion.div>
// // //           </div>
// // //         </section>

// // //         {/* ════════════════════════ OUR CRIMINAL LAW SERVICES ══════════════════════ */}
// // //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
// // //           <GoldDivider />
// // //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// // //           <div className="max-w-6xl mx-auto">
// // //             {/* H3 sub-heading from brief */}
// // //             <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
// // //             >
// // //               Our Criminal Law Services Include
// // //             </motion.h3>

// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="grid md:grid-cols-2 gap-5 mb-16"
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

// // //             {/* second image */}
// // //             <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="rounded-xl overflow-hidden border border-gray-100 shadow-lg"
// // //             >
// // //               <Image
// // //                 src="/lagel.png"
// // //                 alt="Criminal Defense Legal Services"
// // //                 width={1200} height={600}
// // //                 className="w-full object-cover"
// // //               />
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

// // //             {/* No explicit intro paragraph in brief for this section — cards go directly */}
// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="grid md:grid-cols-2 gap-6"
// // //             >
// // //               {whyChoose.map((item, i) => (
// // //                 <motion.div key={i} variants={scaleIn} custom={i * 0.15}
// // //                   whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
// // //                   className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 relative group overflow-hidden transition-colors duration-300"
// // //                 >
// // //                   <motion.span
// // //                     initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
// // //                     className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
// // //                     style={{ transition: "transform 0.3s ease" }}
// // //                   />
// // //                   <span className="text-3xl mb-4 block">{item.icon}</span>
// // //                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
// // //                     {item.title}
// // //                   </h3>
// // //                   <p className="text-gray-500 leading-relaxed">{item.body}</p>
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
// // //         <section className="relative py-28 text-center text-white overflow-hidden">
// // //           <Image src="/discussion.png" alt="Criminal Lawyer Consultation" fill className="object-cover" />
// // //           <div className="absolute inset-0 bg-black/80" />
// // //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
// // //           <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // //           {/* animated rings */}
// // //           {[0, 1, 2].map((i) => (
// // //             <motion.div key={i}
// // //               initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
// // //               viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
// // //               className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
// // //               style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
// // //             />
// // //           ))}

// // //           <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //             className="relative max-w-4xl mx-auto px-6"
// // //           >
// // //             {/* bordered content box */}
// // //             <div className="border border-[#C9A24D]/30 rounded-2xl px-10 py-16 relative">
// // //               {/* corner marks */}
// // //               {[
// // //                 "top-4 left-4 border-t-2 border-l-2",
// // //                 "top-4 right-4 border-t-2 border-r-2",
// // //                 "bottom-4 left-4 border-b-2 border-l-2",
// // //                 "bottom-4 right-4 border-b-2 border-r-2",
// // //               ].map((cls, i) => (
// // //                 <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
// // //               ))}

// // //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //                 className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
// // //               >
// // //                 S Jain &amp; Attorneys · Criminal Defense &amp; Prosecution
// // //               </motion.p>

// // //               {/* H2 — exact text from brief */}
// // //               <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
// // //                 className="text-3xl md:text-5xl font-bold mb-10 leading-tight"
// // //               >
// // //                 Get expert criminal defense guidance from a leading Lawyer in Bangalore.
// // //               </motion.h2>

// // //               {/* Two CTA buttons — brief specifies [ Book Confidential Consultation ] + [ Request Call Back ] */}
// // //               <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
// // //                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
// // //               >
// // //                 <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
// // //                   <Link href="/legal-consultation-in-bangalore"
// // //                     className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
// // //                   >
// // //                     Book Confidential Consultation
// // //                   </Link>
// // //                 </motion.div>
// // //                 <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
// // //                   <Link href="/contact"
// // //                     className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
// // //                   >
// // //                     Request Call Back
// // //                   </Link>
// // //                 </motion.div>
// // //               </motion.div>

// // //               {/* confidentiality note */}
// // //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
// // //                 className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
// // //               >
// // //                 <span className="inline-block w-4 h-px bg-gray-600" />
// // //                 All matters handled with complete confidentiality and legal discretion.
// // //                 <span className="inline-block w-4 h-px bg-gray-600" />
// // //               </motion.p>
// // //             </div>
// // //           </motion.div>
// // //         </section>

// // //       </main>

// // //       <Footer />
// // //     </>
// // //   );
// // // }



// // "use client";

// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { useState } from "react";

// // export default function CriminalDefensePage() {

// // const [openIndex, setOpenIndex] = useState(null);

// // const toggleFAQ = (index) => {
// // setOpenIndex(openIndex === index ? null : index);
// // };

// // return (
// // <>
// // <Navbar />

// // <main className="bg-white overflow-hidden">

// // {/* HERO SECTION */}

// // <section className="bg-[#0B0F14] pt-18 pb-20">

// // <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">

// // <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
// // Criminal Defense & Prosecution Lawyers in Bangalore
// // </h1>

// // <p className="text-gray-300 max-w-3xl mx-auto mb-6">
// // Our firm provides strategic representation as a Criminal Lawyer in Bangalore,
// // handling serious allegations with precision and confidentiality.
// // </p>

// // <p className="text-gray-300 max-w-3xl mx-auto mb-6">
// // Our experienced attorneys manage criminal defense and prosecution matters,
// // including bail proceedings, trials, and appeals.
// // </p>

// // <p className="text-[#C9A24D] font-semibold mb-8">
// // Response within 24 hours guaranteed.
// // </p>

// // <div className="flex justify-center gap-4 flex-wrap mb-16">

// // <Link
// // href="/legal-consultation-in-bangalore"
// // className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
// // >
// // Book Confidential Consultation
// // </Link>

// // <a
// // href="tel:+919000000000"
// // className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// // >
// // Call Now
// // </a>

// // </div>

// // </div>

// // {/* HERO IMAGE */}

// // <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

// // <div className="rounded-xl overflow-hidden shadow-2xl">

// // <Image
// // src="/criminal-law.png"
// // alt="Criminal Lawyer in Bangalore"
// // width={1400}
// // height={800}
// // className="w-full h-[420px] md:h-[520px] object-cover"
// // priority
// // />

// // </div>

// // </div>

// // </section>


// // {/* MAIN CONTENT */}

// // <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">

// // <h2 className="text-4xl font-semibold mb-6">
// // Strategic Criminal Defense & Prosecution Support
// // </h2>

// // <p className="text-gray-700 mb-12 max-w-4xl">
// // Criminal cases require immediate legal action and careful defense planning.
// // Our lawyers represent individuals and organizations in complex criminal
// // proceedings while protecting their legal rights at every stage.
// // </p>


// // {/* SERVICES */}

// // <h3 className="text-3xl font-semibold mb-6">
// // OUR CRIMINAL LAW SERVICES INCLUDE
// // </h3>

// // <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">

// // <li>▪ Bail Applications (Regular & Anticipatory)</li>
// // <li>▪ FIR Registration & Quashing</li>
// // <li>▪ Sessions Court & Magistrate Trials</li>
// // <li>▪ White Collar Crime Defense</li>
// // <li>▪ Cyber Crime Cases</li>
// // <li>▪ Domestic Violence & Assault Cases</li>
// // <li>▪ Criminal Appeals & Revision Petitions</li>

// // </ul>


// // {/* HOW WE WORK */}

// // <h3 className="text-3xl font-semibold mb-6">
// // OUR APPROACH / HOW WE WORK
// // </h3>

// // <div className="space-y-6 text-gray-700 mb-16 max-w-4xl">

// // <p>
// // <strong>Step 1: Case Review & Consultation</strong><br/>
// // Understanding allegations and reviewing available legal documents.
// // </p>

// // <p>
// // <strong>Step 2: Evidence Review & Legal Strategy</strong><br/>
// // Developing a strong defense strategy based on facts and applicable laws.
// // </p>

// // <p>
// // We clearly explain legal risks, potential outcomes,
// // and defense options before proceeding.
// // </p>

// // <p>
// // <strong>Step 3: Filing & Court Proceedings</strong><br/>
// // Preparation and filing of bail applications, petitions, and legal responses.
// // </p>

// // <p>
// // <strong>Step 4: Trial Representation</strong><br/>
// // Effective courtroom advocacy and strategic representation.
// // </p>

// // </div>


// // {/* WHY CHOOSE */}

// // <h3 className="text-3xl font-semibold mb-6">
// // WHY CHOOSE OUR FIRM
// // </h3>

// // <ul className="space-y-3 text-gray-700 mb-20">

// // <li>✓ Experienced Criminal Defense Lawyers</li>
// // <li>✓ Strong courtroom advocacy</li>
// // <li>✓ Confidential legal representation</li>
// // <li>✓ Transparent communication throughout proceedings</li>
// // <li>✓ Strategic case planning and legal protection</li>

// // </ul>

// // </section>


// // {/* FAQ */}

// // <section className="bg-[#F4F4F4] py-20">

// // <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

// // <h3 className="text-4xl font-semibold mb-12">
// // Frequently Asked Questions
// // </h3>

// // <div className="space-y-6 text-gray-800">

// // {[
// // {
// // q:"How soon should I contact a criminal lawyer?",
// // a:"Immediately after receiving an FIR notice, arrest notice, or police inquiry."
// // },
// // {
// // q:"Can you help with bail applications?",
// // a:"Yes, we handle anticipatory bail, regular bail, and urgent bail matters."
// // },
// // {
// // q:"Do you represent clients in trial courts?",
// // a:"Yes, we represent clients before magistrate courts, sessions courts, and appellate courts."
// // },
// // {
// // q:"What documents are required for consultation?",
// // a:"FIR copy, notice, charge sheet, legal documents, and related communication."
// // },
// // {
// // q:"Can criminal cases be resolved without trial?",
// // a:"Some matters may be compounded or legally settled depending on the offence."
// // },
// // {
// // q:"Do you handle criminal appeals?",
// // a:"Yes, we represent clients in criminal appeals and revision petitions."
// // }

// // ].map((faq,index)=>(

// // <div
// // key={index}
// // className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 cursor-pointer"
// // onClick={()=>toggleFAQ(index)}
// // >

// // <div className="flex justify-between items-center">

// // <h4 className="font-semibold text-lg">
// // {faq.q}
// // </h4>

// // <span className="text-2xl font-bold text-[#C9A24D]">
// // {openIndex===index ? "−" : "+"}
// // </span>

// // </div>

// // {openIndex===index && (
// // <p className="mt-4 text-gray-700">
// // {faq.a}
// // </p>
// // )}

// // </div>

// // ))}

// // </div>

// // </div>

// // </section>


// // {/* CTA */}

// // <section className="bg-[#0B0F14] py-28 text-center text-white">

// // <div className="max-w-5xl mx-auto px-6">

// // <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// // Get expert criminal defense support from experienced lawyers in Bangalore
// // </h2>

// // <div className="flex justify-center gap-4 flex-wrap mt-10">

// // <Link
// // href="/contact"
// // className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
// // >
// // Request Call Back
// // </Link>

// // <Link
// // href="/legal-consultation-in-bangalore"
// // className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
// // >
// // Book Consultation
// // </Link>

// // </div>

// // <p className="text-gray-400 mt-8 text-sm">
// // All matters handled with complete confidentiality and legal discretion.
// // </p>

// // </div>

// // </section>

// // </main>

// // <Footer />
// // </>
// // );
// // }


// // "use client";

// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { useState } from "react";

// // export default function CriminalDefensePage() {

// // const [openIndex, setOpenIndex] = useState(null);

// // const toggleFAQ = (index) => {
// // setOpenIndex(openIndex === index ? null : index);
// // };

// // return (
// // <>
// // <Navbar />

// // <main className="bg-white overflow-hidden">

// // {/* HERO */}

// // <section className="bg-[#0B0F14] pt-18 pb-20">

// // <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">

// // <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
// // Criminal Defense & Prosecution Lawyers in Bangalore for Bail, Trial & Appeals
// // </h1>

// // <p className="text-gray-300 max-w-3xl mx-auto mb-6">
// // Our firm provides strong and strategic representation as a Criminal Lawyer in Bangalore, handling serious allegations with precision and confidentiality. Our experienced attorneys manage Criminal Defense & Prosecution matters with a results-driven approach.
// // </p>

// // <p className="text-gray-300 max-w-3xl mx-auto mb-6">
// // Our goal is to protect your legal rights, minimize risk exposure, and build a strong defense strategy from the earliest stage of proceedings.
// // </p>

// // <p className="text-[#C9A24D] font-semibold mb-8">
// // Response within 24 hours guaranteed.
// // </p>

// // <div className="flex justify-center gap-4 flex-wrap mb-16">

// // <Link
// // href="/legal-consultation-in-bangalore"
// // className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
// // >
// // Book Confidential Consultation
// // </Link>

// // <a
// // href="tel:+919000000000"
// // className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// // >
// // Call Now
// // </a>

// // </div>

// // </div>


// // {/* HERO IMAGE */}

// // <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

// // <div className="rounded-xl overflow-hidden shadow-2xl">

// // <Image
// // src="/criminal-law.png"
// // alt="Criminal Lawyer in Bangalore"
// // width={1400}
// // height={800}
// // className="w-full h-[420px] md:h-[520px] object-cover"
// // priority
// // />

// // </div>

// // </div>

// // </section>


// // {/* MAIN CONTENT */}

// // <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">

// // <h2 className="text-4xl font-semibold mb-6">
// // Strategic Criminal Defense & Prosecution Support
// // </h2>

// // <p className="text-gray-700 mb-12 max-w-4xl">
// // Criminal cases demand immediate legal action and careful planning. Our team represents clients in complex criminal matters, ensuring their rights are protected at every stage.
// // With extensive courtroom experience, our attorneys handle investigations, bail proceedings, trials, and appeals with structured legal strategy and clear communication.
// // </p>


// // {/* SERVICES */}

// // <h3 className="text-3xl font-semibold mb-6">
// // OUR CRIMINAL LAW SERVICES INCLUDE
// // </h3>

// // <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">

// // <li>▪ Bail Applications (Regular & Anticipatory)</li>
// // <li>▪ FIR registration, quashing, and complaint defense</li>
// // <li>▪ Sessions court and magistrate court trials</li>
// // <li>▪ White Collar Crimes</li>
// // <li>▪ Cyber Crime Cases</li>
// // <li>▪ Domestic Violence & Assault Cases</li>
// // <li>▪ Criminal appeals and revision petitions</li>

// // </ul>


// // {/* PROCESS */}

// // <h3 className="text-3xl font-semibold mb-6">
// // OUR APPROACH / HOW WE WORK
// // </h3>

// // <div className="space-y-6 text-gray-700 mb-16 max-w-4xl">

// // <p>
// // <strong>Step 1: Case Assessment & Legal Consultation</strong><br/>
// // Detailed review of allegations and available evidence.
// // </p>

// // <p>
// // <strong>Step 2: Evidence Review & Defense Strategy</strong><br/>
// // Developing a strong defense or prosecution strategy.
// // </p>

// // <p>
// // We clearly explain legal risks, possible outcomes, and defense options before proceeding.
// // </p>

// // <p>
// // <strong>Step 3: Filing & Court Proceedings</strong><br/>
// // Handling petitions, documentation, and hearings.
// // </p>

// // <p>
// // <strong>Step 4: Trial Representation & Resolution</strong><br/>
// // Effective representation before courts to achieve fair outcomes.
// // </p>

// // </div>


// // {/* WHY CHOOSE */}

// // <h3 className="text-3xl font-semibold mb-6">
// // WHY CHOOSE OUR FIRM
// // </h3>

// // <ul className="space-y-3 text-gray-700 mb-20">

// // <li>✓ Experienced Criminal Law Attorneys</li>
// // <li>✓ Strong courtroom advocacy</li>
// // <li>✓ Confidential and strategic case handling</li>
// // <li>✓ Transparent legal guidance throughout the process</li>

// // </ul>

// // </section>


// // {/* FAQ */}

// // <section className="bg-[#F4F4F4] py-20">

// // <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

// // <h3 className="text-4xl font-semibold mb-12">
// // Frequently Asked Questions
// // </h3>

// // <div className="space-y-6 text-gray-800">

// // {[
// // {
// // q:"How soon should I contact a criminal lawyer?",
// // a:"Immediately after receiving notice, FIR, arrest, or police inquiry to protect your legal rights."
// // },
// // {
// // q:"Can you help with bail matters?",
// // a:"Yes, we handle regular bail, anticipatory bail, and urgent bail applications before appropriate courts."
// // },
// // {
// // q:"Do you handle both defense and prosecution cases?",
// // a:"Yes, we provide Criminal Defense & Prosecution services depending on the case requirements."
// // },
// // {
// // q:"What documents should I bring for consultation?",
// // a:"FIR copy, notice, charge sheet, arrest memo, and any relevant communication or supporting evidence."
// // },
// // {
// // q:"Can a criminal case be settled or withdrawn?",
// // a:"Some cases may be compoundable or resolved legally depending on the nature of the offence."
// // },
// // {
// // q:"What happens after an FIR is filed?",
// // a:"Police investigation begins, followed by charge sheet filing and court proceedings if evidence supports prosecution."
// // }

// // ].map((faq,index)=>(

// // <div
// // key={index}
// // className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 cursor-pointer"
// // onClick={()=>toggleFAQ(index)}
// // >

// // <div className="flex justify-between items-center">

// // <h4 className="font-semibold text-lg">
// // {faq.q}
// // </h4>

// // <span className="text-2xl font-bold text-[#C9A24D]">
// // {openIndex===index ? "−" : "+"}
// // </span>

// // </div>

// // {openIndex===index && (
// // <p className="mt-4 text-gray-700">
// // {faq.a}
// // </p>
// // )}

// // </div>

// // ))}

// // </div>

// // </div>

// // </section>


// // {/* CTA */}

// // <section className="bg-[#0B0F14] py-28 text-center text-white">

// // <div className="max-w-5xl mx-auto px-6">
// // <Image src="/discussion.png" alt="Consultation" fill className="object-cover"/>
// //             <div className="absolute inset-0 bg-black/70"></div>
// // <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// // Get expert criminal defense guidance from a leading Lawyer in Bangalore
// // </h2>

// // <div className="flex justify-center gap-4 flex-wrap mt-10">

// // <Link
// // href="/legal-consultation-in-bangalore"
// // className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
// // >
// // Book Confidential Consultation
// // </Link>

// // <Link
// // href="/contact"
// // className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
// // >
// // Request Call Back
// // </Link>

// // </div>

// // <p className="text-gray-400 mt-8 text-sm">
// // All matters handled with complete confidentiality and legal discretion.
// // </p>

// // </div>

// // </section>

// // </main>

// // <Footer />
// // </>
// // );
// // }


// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";

// /* ---------------- SEO METADATA ---------------- */


// export default function CriminalDefensePage() {

//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <>
//       <Navbar />

//       <main className="bg-white overflow-hidden">

//         {/* HERO SECTION */}

//         <section className="relative bg-[#0B0F14] pt-8 pb-48 text-center">

//           <div className="max-w-6xl mx-auto px-6 text-center">

//             <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
//               Criminal Defense & Prosecution Lawyers in Bangalore for Bail, Trial & Appeals
//             </h1>

//             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
//               Our firm provides strong and strategic representation as a
//               <strong> Criminal Lawyer in Bangalore</strong>, handling serious
//               allegations with precision and confidentiality. Our experienced
//               attorneys manage Criminal Defense & Prosecution matters with a
//               results-driven approach.
//             </p>

//             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
//               Our goal is to protect your legal rights, minimize risk exposure,
//               and build a strong defense strategy from the earliest stage of
//               proceedings.
//             </p>

//             <p className="text-[#C9A24D] font-semibold mb-8">
//               Response within 24 hours guaranteed.
//             </p>

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

//           {/* HERO IMAGE */}

//           <div className="max-w-7xl mx-auto px-6 mt-16">

//             <div className="rounded-xl overflow-hidden shadow-2xl">

//               <Image
//                 src="/criminal-law.png"
//                 alt="Experienced Criminal Lawyer in Bangalore handling bail, trial and appeals"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[420px] md:h-[520px] object-cover"
//                 priority
//               />

//             </div>

//           </div>

//         </section>


//         {/* MAIN CONTENT */}

//         <section className="max-w-7xl mx-auto px-6 py-20">

//           <h2 className="text-4xl font-semibold mb-6">
//             Strategic Criminal Defense & Prosecution Support
//           </h2>

//           <p className="text-gray-700 mb-12 max-w-4xl">
//             Criminal cases demand immediate legal action and careful planning.
//             Our team represents clients in complex criminal matters, ensuring
//             their rights are protected at every stage. With extensive courtroom
//             experience, our attorneys handle investigations, bail proceedings,
//             trials, and appeals with structured legal strategy and clear
//             communication.
//           </p>


//           {/* SERVICES */}

//           <h3 className="text-3xl font-semibold mb-6">
//             Our Criminal Law Services Include
//           </h3>

//           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">

//             <li>▪ Bail Applications (Regular & Anticipatory)</li>
//             <li>▪ FIR registration, quashing, and complaint defense</li>
//             <li>▪ Sessions court and magistrate court trials</li>
//             <li>▪ White Collar Crimes</li>
//             <li>▪ Cyber Crime Cases</li>
//             <li>▪ Domestic Violence & Assault Cases</li>
//             <li>▪ Criminal appeals and revision petitions</li>

//           </ul>


//           {/* PROCESS */}

//           <h3 className="text-3xl font-semibold mb-6">
//             Our Approach / How We Work
//           </h3>

//           <div className="space-y-6 text-gray-700 mb-16 max-w-4xl">

//             <p>
//               <strong>Step 1: Case Assessment & Legal Consultation</strong>
//               <br />
//               Detailed review of allegations and available evidence.
//             </p>

//             <p>
//               <strong>Step 2: Evidence Review & Defense Strategy</strong>
//               <br />
//               Developing a strong defense or prosecution strategy. We clearly
//               explain legal risks, possible outcomes, and defense options before
//               proceeding.
//             </p>

//             <p>
//               <strong>Step 3: Filing & Court Proceedings</strong>
//               <br />
//               Handling petitions, documentation, and hearings.
//             </p>

//             <p>
//               <strong>Step 4: Trial Representation & Resolution</strong>
//               <br />
//               Effective representation before courts to achieve fair outcomes.
//             </p>

//           </div>


//           {/* WHY CHOOSE */}

//           <h3 className="text-3xl font-semibold mb-6">
//             Why Choose Our Firm
//           </h3>

//           <ul className="space-y-3 text-gray-700 mb-20">

//             <li>✓ Experienced Criminal Law Attorneys</li>
//             <li>✓ Strong courtroom advocacy</li>
//             <li>✓ Confidential and strategic case handling</li>
//             <li>✓ Transparent legal guidance throughout the process</li>

//           </ul>

//         </section>


//         {/* FAQ */}

//         <section className="bg-[#F4F4F4] py-20">

//           <div className="max-w-7xl mx-auto px-6">

//             <h3 className="text-4xl font-semibold mb-12">
//               Frequently Asked Questions
//             </h3>

//             <div className="space-y-6">

//               {[
//                 {
//                   q: "How soon should I contact a criminal lawyer?",
//                   a: "Immediately after receiving notice, FIR, arrest, or police inquiry to protect your legal rights.",
//                 },
//                 {
//                   q: "Can you help with bail matters?",
//                   a: "Yes, we handle regular bail, anticipatory bail, and urgent bail applications before appropriate courts.",
//                 },
//                 {
//                   q: "Do you handle both defense and prosecution cases?",
//                   a: "Yes, we provide Criminal Defense & Prosecution services depending on the case requirements.",
//                 },
//                 {
//                   q: "What documents should I bring for consultation?",
//                   a: "FIR copy, notice, charge sheet, arrest memo, and any relevant communication or supporting evidence.",
//                 },
//                 {
//                   q: "Can a criminal case be settled or withdrawn?",
//                   a: "Some cases may be compoundable or resolved legally depending on the nature of the offence.",
//                 },
//                 {
//                   q: "What happens after an FIR is filed?",
//                   a: "Police investigation begins, followed by charge sheet filing and court proceedings if evidence supports prosecution.",
//                 },
//               ].map((faq, index) => (

//                 <div
//                   key={index}
//                   className="bg-white rounded-lg p-6 shadow-sm border cursor-pointer"
//                   onClick={() => toggleFAQ(index)}
//                 >

//                   <div className="flex justify-between items-center">

//                     <h4 className="font-semibold text-lg">{faq.q}</h4>

//                     <span className="text-2xl text-[#C9A24D]">
//                       {openIndex === index ? "−" : "+"}
//                     </span>

//                   </div>

//                   {openIndex === index && (
//                     <p className="mt-4 text-gray-700">{faq.a}</p>
//                   )}

//                 </div>

//               ))}

//             </div>

//           </div>

//         </section>


//         {/* CTA */}

//         <section className="relative py-28 text-center text-white">

//           <Image
//             src="/discussion.png"
//             alt="Legal consultation with criminal lawyer"
//             fill
//             className="object-cover"
//           />

//           <div className="absolute inset-0 bg-black/70"></div>

//           <div className="relative max-w-5xl mx-auto px-6">

//             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
//               Get expert criminal defense guidance from a leading Lawyer in Bangalore
//             </h2>

//             <div className="flex justify-center gap-4 flex-wrap mt-10">

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



// "use client";

// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function CriminalLaw() {

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
//   };

//   const [openFAQ, setOpenFAQ] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index);
//   };

//   const faqData = [
//     {
//       question: "How soon should I contact a criminal lawyer?",
//       answer: "Immediately after receiving notice, FIR, arrest, or police inquiry to protect your legal rights."
//     },
//     {
//       question: "Can you help with bail matters?",
//       answer: "Yes, we handle regular bail, anticipatory bail, and urgent bail applications before appropriate courts."
//     },
//     {
//       question: "Do you handle both defense and prosecution cases?",
//       answer: "Yes, we provide Criminal Defense & Prosecution services depending on the case requirements."
//     },
//     {
//       question: "What documents should I bring for consultation?",
//       answer: "FIR copy, notice, charge sheet, arrest memo, and any relevant communication or supporting evidence."
//     },
//     {
//       question: "Can a criminal case be settled or withdrawn?",
//       answer: "Some cases may be compoundable or resolved legally depending on the nature of the offence."
//     },
//     {
//       question: "What happens after an FIR is filed?",
//       answer: "Police investigation begins, followed by charge sheet filing and court proceedings if evidence supports prosecution."
//     }
//   ];

//   return (
//     <>
//       <Navbar />

//       <main className="bg-white overflow-hidden">

//         {/* HERO */}

//         <section className="relative bg-[#0B0F14] pt-8 pb-48 text-center">

//           <div className="max-w-6xl mx-auto px-6">

//             <motion.h1
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               className="text-4xl md:text-6xl font-semibold text-white mb-6"
//             >
//               Criminal Defense & Prosecution Lawyers in Bangalore for Bail, Trial & Appeals
//             </motion.h1>

//             <p className="text-gray-400 text-lg max-w-4xl mx-auto">
//               Our firm provides strong and strategic representation as a
//               <strong> Criminal Lawyer in Bangalore</strong>, handling serious allegations with precision and confidentiality.
//               Our experienced attorneys manage Criminal Defense & Prosecution matters with a results-driven approach.
//             </p>

//             <p className="text-gray-400 text-lg max-w-4xl mx-auto mt-4">
//               Our goal is to protect your legal rights, minimize risk exposure, and build a strong defense strategy from the earliest stage of proceedings.
//             </p>

//             <p className="text-[#C9A24D] font-semibold mt-6">
//               Response within 24 hours guaranteed.
//             </p>

//             <div className="flex justify-center gap-6 mt-10 flex-wrap">

//               <Link href="/legal-consultation-in-bangalore">
//                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
//                   Book Confidential Consultation
//                 </button>
//               </Link>

//               <Link href="tel:+919000000000">
//                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
//                   Call Now
//                 </button>
//               </Link>

//             </div>

//           </div>

//           {/* HERO IMAGE */}

//           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6">

//             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">

//               <Image
//                 src="/criminal-law.png"
//                 alt="Criminal Lawyer in Bangalore"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[450px] object-cover"
//               />

//             </div>

//           </div>

//         </section>

//         <div className="h-48"></div>

//         {/* CONTENT */}

//         <section className="max-w-6xl mx-auto px-6 py-20 mt-24">

//           <h2 className="text-4xl font-semibold mb-6">
//             Strategic Criminal Defense & Prosecution Support
//           </h2>

//           <p className="text-gray-700 text-lg mb-10">
//             Criminal cases demand immediate legal action and careful planning. Our team represents clients in complex criminal matters, ensuring their rights are protected at every stage.
//             With extensive courtroom experience, our attorneys handle investigations, bail proceedings, trials, and appeals with structured legal strategy and clear communication.
//           </p>

//           {/* SERVICES */}

//           <h3 className="text-2xl font-semibold mb-6">
//             OUR CRIMINAL LAW SERVICES INCLUDE
//           </h3>

//           <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700 mb-16">

//             <li>▪ Bail Applications (Regular & Anticipatory)</li>
//             <li>▪ FIR registration, quashing, and complaint defense</li>
//             <li>▪ Sessions court and magistrate court trials</li>
//             <li>▪ White Collar Crimes</li>
//             <li>▪ Cyber Crime Cases</li>
//             <li>▪ Domestic Violence & Assault Cases</li>
//             <li>▪ Criminal appeals and revision petitions</li>

//           </ul>

//           {/* APPROACH */}

//           <h2 className="text-4xl font-semibold mb-6">
//             OUR APPROACH / HOW WE WORK
//           </h2>

//           <div className="space-y-4 text-lg text-gray-700 mb-16">

//             <p>
//               <strong>Step 1:</strong> Case Assessment & Legal Consultation — Detailed review of allegations and available evidence.
//             </p>

//             <p>
//               <strong>Step 2:</strong> Evidence Review & Defense Strategy — Developing a strong defense or prosecution strategy.
//             </p>

//             <p>
//               <strong>Step 3:</strong> Filing & Court Proceedings — Handling petitions, documentation, and hearings.
//             </p>

//             <p>
//               <strong>Step 4:</strong> Trial Representation & Resolution — Effective representation before courts to achieve fair outcomes.
//             </p>

//           </div>

//           {/* WHY CHOOSE */}

//           <h2 className="text-4xl font-semibold mb-6">
//             WHY CHOOSE OUR FIRM
//           </h2>

//           <ul className="space-y-4 text-lg text-gray-700 mb-16">

//             <li>✓ Experienced Criminal Law Attorneys</li>
//             <li>✓ Strong courtroom advocacy</li>
//             <li>✓ Confidential and strategic case handling</li>
//             <li>✓ Transparent legal guidance throughout the process</li>

//           </ul>

//           {/* FAQ */}

//           <h2 className="text-4xl font-semibold text-center mb-12">
//             Frequently Asked Questions
//           </h2>

//           <div className="max-w-4xl mx-auto space-y-4">

//             {faqData.map((faq, index) => (

//               <div key={index} className="border border-[#C9A24D] rounded-lg overflow-hidden">

//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg bg-white hover:bg-[#C9A24D]/10 transition"
//                 >
//                   {faq.question}

//                   <span className="text-[#C9A24D] text-2xl font-bold">
//                     {openFAQ === index ? "−" : "+"}
//                   </span>

//                 </button>

//                 {openFAQ === index && (
//                   <div className="px-6 pb-6 text-gray-700 border-t border-[#C9A24D]/40 pt-4">
//                     {faq.answer}
//                   </div>
//                 )}

//               </div>

//             ))}

//           </div>

//         </section>

//         {/* CTA */}

//         <section className="relative py-28 overflow-hidden">

//           <div className="absolute inset-0">
//             <Image src="/discussion.png" alt="Consultation" fill className="object-cover"/>
//             <div className="absolute inset-0 bg-black/70"></div>
//           </div>

//           <div className="relative max-w-5xl mx-auto px-6 text-center">

//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Get expert criminal defense guidance from a leading Lawyer in Bangalore
//             </h2>

//             <Link href="/legal-consultation-in-bangalore">
//               <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
//                 Request Call Back
//               </button>
//             </Link>

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

export default function CriminalLaw() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const [openFAQ, setOpenFAQ] = useState(null);
  const toggleFAQ = (index) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

  const faqData = [
    {
      question: "How soon should I contact a criminal lawyer?",
      answer: "Immediately after receiving notice, FIR, arrest, or police inquiry to protect your legal rights."
    },
    {
      question: "Can you help with bail matters?",
      answer: "Yes, we handle regular bail, anticipatory bail, and urgent bail applications before appropriate courts."
    },
    {
      question: "Do you handle both defense and prosecution cases?",
      answer: "Yes, we provide Criminal Defense & Prosecution services depending on the case requirements."
    },
    {
      question: "What documents should I bring for consultation?",
      answer: "FIR copy, notice, charge sheet, arrest memo, and any relevant communication or supporting evidence."
    },
    {
      question: "Can a criminal case be settled or withdrawn?",
      answer: "Some cases may be compoundable or resolved legally depending on the nature of the offence."
    },
    {
      question: "What happens after an FIR is filed?",
      answer: "Police investigation begins, followed by charge sheet filing and court proceedings if evidence supports prosecution."
    }
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* HERO */}
        <section className="relative bg-[#0B0F14] pt-8 pb-48 text-center">
          <div className="max-w-6xl mx-auto px-6">

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-semibold text-white mb-6"
            >
              Criminal Defense & Prosecution Lawyers in Bangalore for Bail, Trial & Appeals
            </motion.h1>

            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Our firm provides strong and strategic representation as a
              <strong> Criminal Lawyer in Bangalore</strong>, handling serious allegations with precision and confidentiality.
              Our experienced attorneys manage Criminal Defense & Prosecution matters with a results-driven approach.
            </p>

            <p className="text-gray-400 text-lg max-w-4xl mx-auto mt-4">
              Our goal is to protect your legal rights, minimize risk exposure, and build a strong defense strategy from the earliest stage of proceedings.
            </p>

            <p className="text-[#C9A24D] font-semibold mt-6">
              Response within 24 hours guaranteed.
            </p>

            <div className="flex justify-center gap-6 mt-10 flex-wrap">

              {/* Navigation Button */}
              <Link
                href="/legal-consultation-in-bangalore"
                className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold inline-block text-center hover:scale-105 transition"
              >
                Book Confidential Consultation
              </Link>

              {/* Phone Link */}
              <a
                href="tel:+919000000000"
                className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold inline-block text-center hover:bg-[#C9A24D] hover:text-black transition"
              >
                Call Now
              </a>

            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6">
            <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
              <Image
                src="/criminal-law.png"
                alt="Criminal Lawyer in Bangalore"
                width={1400}
                height={800}
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </section>

        <div className="h-48"></div>

        {/* CONTENT */}
        <section className="max-w-6xl mx-auto px-6 py-20 mt-24">

          <h2 className="text-4xl font-semibold mb-6">
            Strategic Criminal Defense & Prosecution Support
          </h2>

          <p className="text-gray-700 text-lg mb-10">
            Criminal cases demand immediate legal action and careful planning. Our team represents clients in complex criminal matters, ensuring their rights are protected at every stage.
            With extensive courtroom experience, our attorneys handle investigations, bail proceedings, trials, and appeals with structured legal strategy and clear communication.
          </p>

          {/* SERVICES */}
          <h3 className="text-2xl font-semibold mb-6">
            OUR CRIMINAL LAW SERVICES INCLUDE
          </h3>

          <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700 mb-16">
            <li>▪ Bail Applications (Regular & Anticipatory)</li>
            <li>▪ FIR registration, quashing, and complaint defense</li>
            <li>▪ Sessions court and magistrate court trials</li>
            <li>▪ White Collar Crimes</li>
            <li>▪ Cyber Crime Cases</li>
            <li>▪ Domestic Violence & Assault Cases</li>
            <li>▪ Criminal appeals and revision petitions</li>
          </ul>

          {/* APPROACH */}
          <h2 className="text-4xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h2>

          <div className="space-y-4 text-lg text-gray-700 mb-16">
            <p><strong>Step 1:</strong> Case Assessment & Legal Consultation — Detailed review of allegations and available evidence.</p>
            <p><strong>Step 2:</strong> Evidence Review & Defense Strategy — Developing a strong defense or prosecution strategy.</p>
            <p><strong>Step 3:</strong> Filing & Court Proceedings — Handling petitions, documentation, and hearings.</p>
            <p><strong>Step 4:</strong> Trial Representation & Resolution — Effective representation before courts to achieve fair outcomes.</p>
          </div>

          {/* WHY CHOOSE */}
          <h2 className="text-4xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </h2>

          <ul className="space-y-4 text-lg text-gray-700 mb-16">
            <li>✓ Experienced Criminal Law Attorneys</li>
            <li>✓ Strong courtroom advocacy</li>
            <li>✓ Confidential and strategic case handling</li>
            <li>✓ Transparent legal guidance throughout the process</li>
          </ul>

          {/* FAQ */}
          <h2 className="text-4xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="border border-[#C9A24D] rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg bg-white hover:bg-[#C9A24D]/10 transition"
                >
                  {faq.question}
                  <span className="text-[#C9A24D] text-2xl font-bold">
                    {openFAQ === index ? "−" : "+"}
                  </span>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-[#C9A24D]/40 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-28 overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/discussion.png" alt="Consultation" fill className="object-cover"/>
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Get expert criminal defense guidance from a leading Lawyer in Bangalore
            </h2>

            <Link
              href="/legal-consultation-in-bangalore"
              className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold inline-block text-center hover:scale-105 transition"
            >
              Request Call Back
            </Link>

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