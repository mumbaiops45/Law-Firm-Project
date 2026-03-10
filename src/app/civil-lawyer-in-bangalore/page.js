// // // // // // // // // "use client";

// // // // // // // // // import Navbar from "../components/Navbar";
// // // // // // // // // import Footer from "../components/Footer";
// // // // // // // // // import Image from "next/image";
// // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // import Link from "next/link";


// // // // // // // // // export default function CivilLitigation() {

// // // // // // // // //   const fadeUp = {
// // // // // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // // // // //     visible: {
// // // // // // // // //       opacity: 1,
// // // // // // // // //       y: 0,
// // // // // // // // //       transition: {
// // // // // // // // //         duration: 0.8,
// // // // // // // // //         ease: "easeOut"
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const fadeImage = {
// // // // // // // // //     hidden: { opacity: 0, scale: 1.05 },
// // // // // // // // //     visible: {
// // // // // // // // //       opacity: 1,
// // // // // // // // //       scale: 1,
// // // // // // // // //       transition: {
// // // // // // // // //         duration: 1.2
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   };

// // // // // // // // //   const stagger = {
// // // // // // // // //     visible: {
// // // // // // // // //       transition: {
// // // // // // // // //         staggerChildren: 0.2
// // // // // // // // //       }
// // // // // // // // //     }
// // // // // // // // //   };


// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <Navbar />

// // // // // // // // //       <main className="bg-white overflow-hidden">

// // // // // // // // //         {/* ================= HERO ================= */}

// // // // // // // // //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// // // // // // // // //           <motion.div
// // // // // // // // //             variants={stagger}
// // // // // // // // //             initial="hidden"
// // // // // // // // //             animate="visible"
// // // // // // // // //             className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center"
// // // // // // // // //           >

// // // // // // // // //             <motion.p
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="text-gray-400 text-sm mb-6 font-normal"
// // // // // // // // //             >
// // // // // // // // //               Home <span className="mx-2">›</span>
// // // // // // // // //               <span className="text-[#C9A24D]">Civil Litigation</span>
// // // // // // // // //             </motion.p>


// // // // // // // // //             <motion.h1
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="
// // // // // // // // //                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
// // // // // // // // //                 font-semibold
// // // // // // // // //                 text-white
// // // // // // // // //                 mb-6
// // // // // // // // //                 tracking-tight
// // // // // // // // //               "
// // // // // // // // //             >
// // // // // // // // //               Civil Litigation
// // // // // // // // //             </motion.h1>


// // // // // // // // //             <motion.p
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="
// // // // // // // // //                 text-gray-400
// // // // // // // // //                 text-base sm:text-lg md:text-xl
// // // // // // // // //                 max-w-3xl mx-auto
// // // // // // // // //                 leading-relaxed
// // // // // // // // //               "
// // // // // // // // //             >
// // // // // // // // //               Professional legal representation in civil disputes,
// // // // // // // // //               protecting your rights and resolving conflicts through
// // // // // // // // //               strategic litigation and effective legal solutions.
// // // // // // // // //             </motion.p>

// // // // // // // // //           </motion.div>



// // // // // // // // //           {/* IMAGE */}

// // // // // // // // //           <motion.div
// // // // // // // // //             variants={fadeImage}
// // // // // // // // //             initial="hidden"
// // // // // // // // //             animate="visible"
// // // // // // // // //             className="
// // // // // // // // //               absolute
// // // // // // // // //               left-1/2
// // // // // // // // //               -translate-x-1/2
// // // // // // // // //               translate-y-1/2
// // // // // // // // //               bottom-0
// // // // // // // // //               w-full
// // // // // // // // //               max-w-6xl
// // // // // // // // //               px-6
// // // // // // // // //               z-20
// // // // // // // // //             "
// // // // // // // // //           >

// // // // // // // // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-54">

// // // // // // // // //               <Image
// // // // // // // // //                 src="/CivilLitigation1.jpg"
// // // // // // // // //                 alt="Civil Litigation"
// // // // // // // // //                 width={1400}
// // // // // // // // //                 height={800}
// // // // // // // // //                 className="w-full h-[400px] md:h-[500px] object-cover"
// // // // // // // // //                 priority
// // // // // // // // //               />

// // // // // // // // //             </div>

// // // // // // // // //           </motion.div>

// // // // // // // // //         </section>



// // // // // // // // //         {/* SPACING */}

// // // // // // // // //         <div className="h-40 md:h-60"></div>



// // // // // // // // //         {/* ================= OVERVIEW ================= */}

// // // // // // // // //         <motion.section
// // // // // // // // //           initial="hidden"
// // // // // // // // //           whileInView="visible"
// // // // // // // // //           viewport={{ once: true }}
// // // // // // // // //           variants={stagger}
// // // // // // // // //         >

// // // // // // // // //           <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-24">


// // // // // // // // //             <motion.h2
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight"
// // // // // // // // //             >
// // // // // // // // //               Overview
// // // // // // // // //             </motion.h2>


// // // // // // // // //             <motion.p
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
// // // // // // // // //             >
// // // // // // // // //               Civil litigation involves resolving disputes between individuals,
// // // // // // // // //               businesses, or organizations through negotiation, arbitration,
// // // // // // // // //               mediation, or court proceedings. Our experienced litigation team
// // // // // // // // //               provides strong legal representation to protect your rights and
// // // // // // // // //               achieve favorable outcomes.
// // // // // // // // //             </motion.p>



// // // // // // // // //             {/* ================= SERVICES ================= */}

// // // // // // // // //             <motion.h3
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// // // // // // // // //             >
// // // // // // // // //               Our Civil Litigation Services
// // // // // // // // //             </motion.h3>


// // // // // // // // //             <motion.p
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
// // // // // // // // //             >
// // // // // // // // //               We provide comprehensive litigation services to individuals and
// // // // // // // // //               businesses, ensuring effective dispute resolution and strong
// // // // // // // // //               courtroom representation.
// // // // // // // // //             </motion.p>



// // // // // // // // //             <motion.ul
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
// // // // // // // // //             >

// // // // // // // // //               <li>
// // // // // // // // //                 <span className="font-semibold text-black">
// // // // // // // // //                   Contract Disputes:
// // // // // // // // //                 </span>

// // // // // // // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // // // // // // //                   Representation in disputes involving breach of contract,
// // // // // // // // //                   enforcement, and legal remedies.
// // // // // // // // //                 </p>
// // // // // // // // //               </li>


// // // // // // // // //               <li>
// // // // // // // // //                 <span className="font-semibold text-black">
// // // // // // // // //                   Property Disputes:
// // // // // // // // //                 </span>

// // // // // // // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // // // // // // //                   Legal assistance in ownership disputes, possession claims,
// // // // // // // // //                   and real estate conflicts.
// // // // // // // // //                 </p>
// // // // // // // // //               </li>


// // // // // // // // //               <li>
// // // // // // // // //                 <span className="font-semibold text-black">
// // // // // // // // //                   Recovery Suits:
// // // // // // // // //                 </span>

// // // // // // // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // // // // // // //                   Helping clients recover outstanding payments, debts,
// // // // // // // // //                   and financial claims legally.
// // // // // // // // //                 </p>
// // // // // // // // //               </li>


// // // // // // // // //               <li>
// // // // // // // // //                 <span className="font-semibold text-black">
// // // // // // // // //                   Injunctions and Legal Notices:
// // // // // // // // //                 </span>

// // // // // // // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // // // // // // //                   Obtaining court injunctions and issuing legal notices to
// // // // // // // // //                   protect client interests.
// // // // // // // // //                 </p>
// // // // // // // // //               </li>


// // // // // // // // //               <li>
// // // // // // // // //                 <span className="font-semibold text-black">
// // // // // // // // //                   Commercial Litigation:
// // // // // // // // //                 </span>

// // // // // // // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // // // // // // //                   Handling business disputes, partnership conflicts,
// // // // // // // // //                   and commercial legal matters.
// // // // // // // // //                 </p>
// // // // // // // // //               </li>


// // // // // // // // //               <li>
// // // // // // // // //                 <span className="font-semibold text-black">
// // // // // // // // //                   Arbitration and Dispute Resolution:
// // // // // // // // //                 </span>

// // // // // // // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // // // // // // //                   Alternative dispute resolution methods for faster and
// // // // // // // // //                   cost-effective settlements.
// // // // // // // // //                 </p>
// // // // // // // // //               </li>

// // // // // // // // //             </motion.ul>



// // // // // // // // //             {/* IMAGE */}

// // // // // // // // //            <motion.div
// // // // // // // // //   variants={fadeUp}
// // // // // // // // //   className="mb-20 flex justify-center"
// // // // // // // // // >
// // // // // // // // //   <div className="
// // // // // // // // //     w-full max-w-5xl
// // // // // // // // //     rounded-xl
// // // // // // // // //     overflow-hidden
// // // // // // // // //     shadow-2xl
// // // // // // // // //   ">

// // // // // // // // //     <Image
// // // // // // // // //       src="/civilLitigation2.png"
// // // // // // // // //       alt="Civil Litigation Legal Services"
// // // // // // // // //       width={1100}
// // // // // // // // //       height={500}
// // // // // // // // //       className="w-full h-[500px] object-cover"
// // // // // // // // //     />

// // // // // // // // //   </div>
// // // // // // // // // </motion.div>




// // // // // // // // //             {/* WHY CHOOSE */}

// // // // // // // // //             <motion.h3
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
// // // // // // // // //             >
// // // // // // // // //               Why Choose Us for Civil Litigation
// // // // // // // // //             </motion.h3>


// // // // // // // // //             <motion.p
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// // // // // // // // //             >
// // // // // // // // //               Our litigation team provides strategic, professional, and
// // // // // // // // //               result-oriented legal representation. We focus on protecting
// // // // // // // // //               client interests, minimizing risk, and achieving favorable
// // // // // // // // //               legal outcomes through expert courtroom advocacy and
// // // // // // // // //               efficient dispute resolution.
// // // // // // // // //             </motion.p>

// // // // // // // // //           </div>

// // // // // // // // //         </motion.section>



// // // // // // // // //         {/* ================= CTA ================= */}

// // // // // // // // //         <motion.section
// // // // // // // // //           initial={{ opacity: 0 }}
// // // // // // // // //           whileInView={{ opacity: 1 }}
// // // // // // // // //           transition={{ duration: 1 }}
// // // // // // // // //           className="relative py-28 mt-20 overflow-hidden"
// // // // // // // // //         >

// // // // // // // // //           <div className="absolute inset-0">

// // // // // // // // //             <Image
// // // // // // // // //               src="/discussion.png"
// // // // // // // // //               alt="Consultation"
// // // // // // // // //               fill
// // // // // // // // //               className="object-cover"
// // // // // // // // //             />

// // // // // // // // //             <div className="absolute inset-0 bg-black/70"></div>

// // // // // // // // //           </div>


// // // // // // // // //           <motion.div
// // // // // // // // //             initial={{ opacity: 0, y: 60 }}
// // // // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // // // //             transition={{ duration: 0.8 }}
// // // // // // // // //             className="relative max-w-5xl mx-auto px-6 text-center"
// // // // // // // // //           >

// // // // // // // // //             <p className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4">
// // // // // // // // //               Get Expert Legal Support
// // // // // // // // //             </p>


// // // // // // // // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // // // // // // // //               Let’s Discuss Your Legal Needs
// // // // // // // // //             </h2>


// // // // // // // // //             <p className="text-gray-300 text-base md:text-lg mb-10">
// // // // // // // // //               Our experienced civil litigation team is ready to help
// // // // // // // // //               resolve your legal disputes efficiently and professionally.
// // // // // // // // //             </p>

// // // // // // // // //             <Link href="/contact">
// // // // // // // // //             <button className="
// // // // // // // // //               bg-[#C9A24D]
// // // // // // // // //               text-black
// // // // // // // // //               px-8 py-4
// // // // // // // // //               rounded-lg
// // // // // // // // //               font-semibold
// // // // // // // // //               hover:scale-105
// // // // // // // // //               transition
// // // // // // // // //             ">
// // // // // // // // //               Book Consultation
// // // // // // // // //             </button>
// // // // // // // // //             </Link>
// // // // // // // // //           </motion.div>

// // // // // // // // //         </motion.section>



// // // // // // // // //       </main>

// // // // // // // // //       <Footer />

// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }



// // // // // // // "use client";


// // // // // // // import Navbar from "../components/Navbar";
// // // // // // // import Footer from "../components/Footer";
// // // // // // // import Image from "next/image";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import Link from "next/link";
// // // // // // // import { useState } from "react";
// // // // // // // import { ChevronDown } from "lucide-react";

// // // // // // // export default function CivilLitigation() {

// // // // // // //   const [activeIndex, setActiveIndex] = useState(null);

// // // // // // //   const toggleFAQ = (index) => {
// // // // // // //     setActiveIndex(activeIndex === index ? null : index);
// // // // // // //   };
// // // // // // //   const fadeUp = {
// // // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// // // // // // //   };

// // // // // // //   const stagger = {
// // // // // // //     visible: { transition: { staggerChildren: 0.2 } }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Navbar />

// // // // // // //       <main className="bg-white overflow-hidden">

// // // // // // //         {/* ================= HERO ================= */}

// // // // // // //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// // // // // // //           <motion.div
// // // // // // //             variants={stagger}
// // // // // // //             initial="hidden"
// // // // // // //             animate="visible"
// // // // // // //             className="max-w-7xl mx-auto px-6 text-center"
// // // // // // //           >

// // // // // // //             <motion.h1
// // // // // // //               variants={fadeUp}
// // // // // // //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// // // // // // //             >
// // // // // // //               Strategic Civil Litigation Lawyer in Bangalore for Property and Commercial Disputes
// // // // // // //             </motion.h1>

// // // // // // //             <motion.p
// // // // // // //               variants={fadeUp}
// // // // // // //               className="text-gray-300 text-lg max-w-4xl mx-auto mb-4"
// // // // // // //             >
// // // // // // //               Our firm provides dedicated representation as a Civil Lawyer in Bangalore, handling complex disputes with strategic planning and strong courtroom advocacy. Our experienced attorneys manage civil litigation matters with clarity and precision.
// // // // // // //             </motion.p>

// // // // // // //             <motion.p
// // // // // // //               variants={fadeUp}
// // // // // // //               className="text-gray-400 text-lg max-w-4xl mx-auto mb-6"
// // // // // // //             >
// // // // // // //               Our goal is to protect your legal rights, secure enforceable remedies, and resolve disputes efficiently through structured litigation strategy.
// // // // // // //             </motion.p>

// // // // // // //             <motion.p
// // // // // // //               variants={fadeUp}
// // // // // // //               className="text-[#C9A24D] font-semibold mb-8"
// // // // // // //             >
// // // // // // //               Response within 24 hours guaranteed.
// // // // // // //             </motion.p>

// // // // // // //             {/* <motion.div variants={fadeUp} className="flex justify-center gap-6 flex-wrap"> */}
// // // // // // //              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">

// // // // // // //               <Link
// // // // // // //                 href="/legal-consultation-in-bangalore"
// // // // // // //                 className="w-full sm:w-auto"
// // // // // // //               >
// // // // // // //                 <button className="w-full sm:w-auto text-center bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
// // // // // // //                   Book Confidential Consultation
// // // // // // //                 </button>
// // // // // // //               </Link>

// // // // // // //               <Link
// // // // // // //                 href="tel:"
// // // // // // //                 className="w-full sm:w-auto"
// // // // // // //               >
// // // // // // //                 <button className="w-full sm:w-auto text-center border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // // // // //                   Call Now
// // // // // // //                 </button>
// // // // // // //               </Link>

// // // // // // //             </div>
// // // // // // //           </motion.div>

// // // // // // //           {/* HERO IMAGE */}
// // // // // // //           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-8 z-3 0">
// // // // // // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-54">
// // // // // // //               <Image
// // // // // // //                 src="/CivilLitigation1.jpg"
// // // // // // //                 alt="Civil Lawyer in Bangalore"
// // // // // // //                 width={1400}
// // // // // // //                 height={500}
// // // // // // //                 className="w-full h-[450px] object-cover"
// // // // // // //                 priority
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //         <div className="h-40 md:h-60"></div>

// // // // // // //         {/* ================= SERVICES ================= */}

// // // // // // //         <section className="max-w-6xl mx-auto px-6 py-20 mt-28">

// // // // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // // // //             Strategic Civil Litigation Representation
// // // // // // //           </h2>

// // // // // // //           <p className="text-gray-700 text-lg mb-10">
// // // // // // //             Civil disputes require structured legal action and timely intervention. As a trusted Civil Litigation Lawyer team, we represent individuals and businesses in a wide range of civil matters before trial and appellate courts.
// // // // // // //             Our attorneys focus on protecting your rights while pursuing effective and legally sound outcomes.
// // // // // // //           </p>

// // // // // // //           <h3 className="text-2xl font-semibold mb-8">
// // // // // // //             OUR CIVIL LITIGATION SERVICES INCLUDE
// // // // // // //           </h3>

// // // // // // //           <div className="grid md:grid-cols-2 gap-6 mb-16">
// // // // // // //             {[
// // // // // // //               "Property & Land Disputes",
// // // // // // //               "Contractual Disputes",
// // // // // // //               "Recovery Suits",
// // // // // // //               "Injunction & Stay Matters",
// // // // // // //               "Partition & Inheritance Cases",
// // // // // // //               "Commercial Civil Disputes",
// // // // // // //               "Appeals & Revisions"
// // // // // // //             ].map((item, index) => (
// // // // // // //               <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
// // // // // // //                 <p className="text-lg font-medium">{item}</p>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>

// // // // // // //           {/* <Image
// // // // // // //             src="/civilLitigation2.png"
// // // // // // //             alt="Civil Litigation Services"
// // // // // // //             width={900}
// // // // // // //             height={400}
// // // // // // //             className="w-full rounded-xl shadow-lg mb-16"
// // // // // // //           /> */}
// // // // // // //           <div className="relative w-full h-[400px] mb-16">
// // // // // // //             <Image
// // // // // // //               src="/civilLitigation2.png"
// // // // // // //               alt="Civil Litigation Services"
// // // // // // //               fill
// // // // // // //               className="object-cover rounded-xl shadow-lg"
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           {/* ================= APPROACH ================= */}

// // // // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // // // //             OUR APPROACH / HOW WE WORK
// // // // // // //           </h2>

// // // // // // //           <div className="space-y-6 text-gray-700 text-lg mb-16">
// // // // // // //             <p><strong>Step 1:</strong> Case Evaluation & Legal Consultation – Understanding the dispute and assessing legal remedies.</p>
// // // // // // //             <p><strong>Step 2:</strong> Documentation & Evidence Review – Careful analysis of contracts, records, and supporting documents. We clearly explain legal risks, possible outcomes, and available remedies before proceeding.</p>
// // // // // // //             <p><strong>Step 3:</strong> Filing & Court Proceedings – Preparation of pleadings and representation before court.</p>
// // // // // // //             <p><strong>Step 4:</strong> Trial Representation & Resolution – Strong advocacy aimed at efficient dispute resolution.</p>
// // // // // // //           </div>

// // // // // // //           {/* ================= WHY CHOOSE ================= */}

// // // // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // // // //             WHY CHOOSE OUR FIRM
// // // // // // //           </h2>

// // // // // // //           <ul className="space-y-4 text-lg mb-16">
// // // // // // //             <li>✓ Experienced Civil Litigation Lawyers</li>
// // // // // // //             <li>✓ Strong and strategic courtroom representation</li>
// // // // // // //             <li>✓ Clear legal guidance at every stage</li>
// // // // // // //             <li>✓ Practical, result-focused approach</li>
// // // // // // //           </ul>

// // // // // // //           {/* ================= FAQ ================= */}

// // // // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // // // //             Frequently Asked Questions
// // // // // // //           </h2>

// // // // // // //           <div className="space-y-4">
// // // // // // //             {[
// // // // // // //               {
// // // // // // //                 question: "What types of civil cases do you handle?",
// // // // // // //                 answer:
// // // // // // //                   "We handle property disputes, contract matters, recovery suits, injunctions, partition cases, and commercial civil litigation."
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 question: "How long does a civil case take?",
// // // // // // //                 answer:
// // // // // // //                   "Timelines vary depending on case complexity, court workload, evidence review, and procedural stages."
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 question: "Can civil disputes be settled outside court?",
// // // // // // //                 answer:
// // // // // // //                   "Yes, many disputes can be resolved through negotiation, mediation, or structured settlement discussions."
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 question: "What documents are required for filing a civil suit?",
// // // // // // //                 answer:
// // // // // // //                   "Relevant contracts, title documents, correspondence, financial records, and supporting evidence are typically required."
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 question: "Do you handle appeals in civil matters?",
// // // // // // //                 answer:
// // // // // // //                   "Yes, our Civil Litigation Lawyer team represents clients in appeals and revisions before appellate courts."
// // // // // // //               },
// // // // // // //               {
// // // // // // //                 question: "Can you assist with urgent injunction or stay orders?",
// // // // // // //                 answer:
// // // // // // //                   "Yes, we handle urgent injunction and stay applications to protect your legal rights and prevent further loss or damage."
// // // // // // //               }
// // // // // // //             ].map((faq, index) => (
// // // // // // //               <div key={index} className="bg-gray-50 rounded-xl shadow">
// // // // // // //                 <button
// // // // // // //                   onClick={() => toggleFAQ(index)}
// // // // // // //                   className="w-full flex justify-between items-center p-6 text-left"
// // // // // // //                 >
// // // // // // //                   <span className="font-semibold">
// // // // // // //                     {faq.question}
// // // // // // //                   </span>
// // // // // // //                   <ChevronDown
// // // // // // //                     className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-[#C9A24D]" : ""
// // // // // // //                       }`}
// // // // // // //                   />
// // // // // // //                 </button>

// // // // // // //                 {activeIndex === index && (
// // // // // // //                   <div className="px-6 pb-6 text-gray-700">
// // // // // // //                     {faq.answer}
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //         {/* ================= FINAL CTA ================= */}

// // // // // // //         <section className="relative py-28 text-center text-white">
// // // // // // //           <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
// // // // // // //           <div className="absolute inset-0 bg-black/75"></div>

// // // // // // //           <div className="relative max-w-4xl mx-auto px-6">
// // // // // // //             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// // // // // // //               Get Immediate Legal Help from a Civil Lawyer in Bangalore
// // // // // // //             </h2>

// // // // // // //             <p className="text-gray-400 mb-10 text-lg">
// // // // // // //               Speak with our experienced civil litigation attorneys today.
// // // // // // //             </p>

// // // // // // //            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center flex-wrap">
// // // // // // //   <Link
// // // // // // //     href="/legal-consultation-in-bangalore"
// // // // // // //     className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition w-full sm:w-auto text-center"
// // // // // // //   >
// // // // // // //     Book Confidential Consultation
// // // // // // //   </Link>
// // // // // // //   <Link href="tel:+919000000000">
// // // // // // //     <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition w-full sm:w-auto">
// // // // // // //       Call Now
// // // // // // //     </button>
// // // // // // //   </Link>
// // // // // // // </div>

// // // // // // //             <p className="text-gray-400 text-sm mt-8">
// // // // // // //               All matters handled with complete confidentiality and legal discretion.
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //       </main>

// // // // // // //       <Footer />
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }








// // // // // // // "use client";

// // // // // // // import { useState, useRef } from "react";
// // // // // // // import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// // // // // // // import Link from "next/link";
// // // // // // // import Image from "next/image";
// // // // // // // import { ChevronDown } from "lucide-react";
// // // // // // // import Navbar from "../components/Navbar";
// // // // // // // import Footer from "../components/Footer";

// // // // // // // const services = [
// // // // // // //   "Property and Land Disputes",
// // // // // // //   "Contractual and Business Disputes",
// // // // // // //   "Recovery Suits and Financial Claims",
// // // // // // //   "Injunction and Stay Applications",
// // // // // // //   "Partition and Inheritance Matters",
// // // // // // //   "Commercial Civil Disputes",
// // // // // // //   "Appeals and Revisions before Appellate Courts",
// // // // // // // ];

// // // // // // // const steps = [
// // // // // // //   {
// // // // // // //     number: "01",
// // // // // // //     title: "Evaluation of the Dispute and How it Is Resolved in Court",
// // // // // // //     body: "Through this step, we will understand all the details of the dispute; therefore we will review the circumstances surrounding the issue. We will look at what type of legal remedies are available through an analysis by one or more of our lawyers and give you preliminary advice as to what would be the best method to resolve this situation.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     number: "02",
// // // // // // //     title: "Documentation & Evidence Review",
// // // // // // //     body: "In the civil litigation process, we'll need to gather the documentation and any evidence that will be critical to proving your case. These documents include contracts, property records, correspondence, and other types of documents that can help to establish the legal basis of your claim.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     number: "03",
// // // // // // //     title: "Filing The Lawsuit And The Litigation Process",
// // // // // // //     body: "After establishing an appropriate litigation strategy, all necessary pleadings will be prepared and the case will be filed in the correct court. An attorney will act on behalf of the client at hearings, provide legal arguments, and make sure that all procedural requirements are met.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     number: "04",
// // // // // // //     title: "Representation During Trial And The Dispute Resolution Process",
// // // // // // //     body: "Our litigation team provides the best possible representation during the trial process. If it is appropriate, we will also act on behalf of the client to resolve the case through negotiation or settlement discussions while continuing to protect the client's legal rights.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // const whyChoose = [
// // // // // // //   {
// // // // // // //     icon: "⚖",
// // // // // // //     title: "Experienced Civil Litigation Attorneys",
// // // // // // //     body: "Our civil litigation attorneys have a wide range of experience in all types of civil litigation and many different types of civil legal disputes.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: "🏛",
// // // // // // //     title: "Strategic Courtroom Representation",
// // // // // // //     body: "We focus on developing a solid written case with supporting documentation and evidence as well as creating a strong legal argument.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: "📋",
// // // // // // //     title: "Definite Legal Guidance",
// // // // // // //     body: "We keep clients informed of these steps throughout the entire civil litigation process, allowing them to make informed decisions about their case.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     icon: "🎯",
// // // // // // //     title: "Practical Results-Driven Approach",
// // // // // // //     body: "Our goal is not only to represent clients in court, but also to help achieve a meaningful resolution for both parties as quickly and effectively as possible.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // const faqs = [
// // // // // // //   {
// // // // // // //     q: "What types of civil cases do you handle?",
// // // // // // //     a: "Our civil litigation lawyers represent clients in matters such as property disputes, contractual disputes, recovery suits, injunction cases, partition matters, and commercial civil litigation.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     q: "How long does a civil case usually take?",
// // // // // // //     a: "The duration of a civil case depends on several factors, including the complexity of the dispute, the number of parties involved, the availability of evidence, and the court's schedule.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     q: "Can civil disputes be resolved without going to court?",
// // // // // // //     a: "Yes. In many cases, disputes can be resolved through negotiation, mediation, or structured settlement discussions. Our lawyers evaluate whether an out-of-court resolution is possible while ensuring that your legal rights remain protected.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     q: "What documents are required to file a civil case?",
// // // // // // //     a: "The required documents depend on the nature of the dispute. Generally, they may include contracts, property documents, financial records, correspondence between parties, and any other supporting evidence relevant to the case.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     q: "Do you represent clients in civil appeals?",
// // // // // // //     a: "Yes. Our firm represents clients in appeals and revision petitions before appellate courts. We carefully review trial court decisions and prepare strong legal arguments to challenge or defend the judgment.",
// // // // // // //   },
// // // // // // //   {
// // // // // // //     q: "Can you assist with urgent injunction or stay orders?",
// // // // // // //     a: "Yes. In situations where immediate legal protection is required, we assist clients in filing injunction applications or stay petitions before the court to prevent further loss, damage, or unlawful actions while the dispute is being resolved.",
// // // // // // //   },
// // // // // // // ];

// // // // // // // const fadeUp = {
// // // // // // //   hidden: { opacity: 0, y: 40 },
// // // // // // //   show: (i = 0) => ({
// // // // // // //     opacity: 1, y: 0,
// // // // // // //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // // // // // //   }),
// // // // // // // };

// // // // // // // const fadeLeft = {
// // // // // // //   hidden: { opacity: 0, x: -40 },
// // // // // // //   show: (i = 0) => ({
// // // // // // //     opacity: 1, x: 0,
// // // // // // //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // // // // // //   }),
// // // // // // // };

// // // // // // // const scaleIn = {
// // // // // // //   hidden: { opacity: 0, scale: 0.93 },
// // // // // // //   show: (i = 0) => ({
// // // // // // //     opacity: 1, scale: 1,
// // // // // // //     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // // // // // //   }),
// // // // // // // };

// // // // // // // const stagger = {
// // // // // // //   hidden: {},
// // // // // // //   show: { transition: { staggerChildren: 0.12 } },
// // // // // // // };

// // // // // // // function GoldDivider() {
// // // // // // //   return <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />;
// // // // // // // }

// // // // // // // function SectionHeading({ children, light = false }) {
// // // // // // //   return (
// // // // // // //     <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
// // // // // // //       <motion.span
// // // // // // //         initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
// // // // // // //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
// // // // // // //         className="block h-[3px] bg-[#C9A24D] mb-5"
// // // // // // //       />
// // // // // // //       <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
// // // // // // //         {children}
// // // // // // //       </h2>
// // // // // // //     </motion.div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default function CivilLitigation() {
// // // // // // //   const [activeIndex, setActiveIndex] = useState(null);
// // // // // // //   const heroRef = useRef(null);
// // // // // // //   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
// // // // // // //   const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
// // // // // // //   const heroOpa = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Navbar />

// // // // // // //       <main className="bg-white overflow-hidden">

// // // // // // //         {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
// // // // // // //         <section ref={heroRef} className="relative bg-[#0B0F14] min-h-[90vh] flex items-center overflow-hidden">

// // // // // // //           {/* ── FIX: absolute inset-0 wrapper, unoptimized ── */}
// // // // // // //           <div className="absolute inset-0 z-0">
// // // // // // //             <Image
// // // // // // //               src="/CivilLitigation1.jpg"
// // // // // // //               alt="Civil Lawyer in Bangalore"
// // // // // // //               fill
// // // // // // //               className="object-cover opacity-20"
// // // // // // //               priority
// // // // // // //               unoptimized
// // // // // // //             />
// // // // // // //           </div>

// // // // // // //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />

// // // // // // //           {[
// // // // // // //             "top-8 left-8 border-t-2 border-l-2",
// // // // // // //             "top-8 right-8 border-t-2 border-r-2",
// // // // // // //             "bottom-8 left-8 border-b-2 border-l-2",
// // // // // // //             "bottom-8 right-8 border-b-2 border-r-2",
// // // // // // //           ].map((cls, i) => (
// // // // // // //             <motion.div key={i}
// // // // // // //               initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
// // // // // // //               transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
// // // // // // //               className={`absolute w-12 h-12 border-[#C9A24D] z-10 ${cls}`}
// // // // // // //             />
// // // // // // //           ))}

// // // // // // //           <div className="absolute inset-0 z-0 opacity-[0.04]" style={{
// // // // // // //             backgroundImage:
// // // // // // //               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
// // // // // // //               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
// // // // // // //           }} />

// // // // // // //           <motion.div style={{ y: heroY, opacity: heroOpa }}
// // // // // // //             className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-44 w-full text-center"
// // // // // // //           >
// // // // // // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
// // // // // // //               className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
// // // // // // //             >
// // // // // // //               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
// // // // // // //               S Jain &amp; Attorneys · Bangalore
// // // // // // //               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
// // // // // // //             </motion.p>

// // // // // // //             <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
// // // // // // //               className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8"
// // // // // // //             >
// // // // // // //               Strategic Civil Litigation Lawyer in Bangalore{" "}
// // // // // // //               <span className="text-[#C9A24D]">for Property and Commercial Disputes</span>
// // // // // // //             </motion.h1>

// // // // // // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
// // // // // // //               className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
// // // // // // //             >
// // // // // // //               Our firm provides dedicated representation as a Civil Lawyer in Bangalore, handling
// // // // // // //               complex disputes with strategic planning and strong courtroom advocacy. Our experienced
// // // // // // //               attorneys manage civil litigation matters with clarity and precision.
// // // // // // //             </motion.p>

// // // // // // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
// // // // // // //               className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
// // // // // // //             >
// // // // // // //               Our goal is to protect your legal rights, secure enforceable remedies, and resolve
// // // // // // //               disputes efficiently through structured litigation strategy.
// // // // // // //             </motion.p>

// // // // // // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
// // // // // // //               className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
// // // // // // //             >
// // // // // // //               Response within 24 hours guaranteed.
// // // // // // //             </motion.p>

// // // // // // //             {/* ── CTAs matching CTASection style ── */}
// // // // // // //             <motion.div variants={fadeUp} initial="hidden" animate="show" custom={5}
// // // // // // //               className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto"
// // // // // // //             >
// // // // // // //               <Link href="/legal-consultation-in-bangalore" className="w-full sm:flex-1">
// // // // // // //                 <button className="w-full py-3 text-center border border-[#C9A24D] text-[#C9A24D] font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition duration-300">
// // // // // // //                   Request Callback
// // // // // // //                 </button>
// // // // // // //               </Link>
// // // // // // //               <Link href="/legal-consultation-in-bangalore" className="w-full sm:flex-1">
// // // // // // //                 <button className="w-full py-3 text-center bg-[#C9A24D] text-black font-semibold rounded-md hover:scale-105 transition duration-300 shadow-lg">
// // // // // // //                   Book Confidential Consultation
// // // // // // //                 </button>
// // // // // // //               </Link>
// // // // // // //             </motion.div>

// // // // // // //             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
// // // // // // //               className="mt-16 flex justify-center"
// // // // // // //             >
// // // // // // //               <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
// // // // // // //                 className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
// // // // // // //               />
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>

// // // // // // //           <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none z-10" />
// // // // // // //         </section>

// // // // // // //         {/* ══════════════ STRATEGICALLY REPRESENTED ══════════════════════════════ */}
// // // // // // //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// // // // // // //           <motion.div
// // // // // // //             initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
// // // // // // //             transition={{ duration: 1.2, delay: 0.3 }}
// // // // // // //             className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
// // // // // // //           />
// // // // // // //           <div className="max-w-6xl mx-auto">
// // // // // // //             <SectionHeading>Strategically Represented in Cases of Civil Litigation</SectionHeading>
// // // // // // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // // // // //               className="space-y-6 text-gray-600 text-lg leading-relaxed"
// // // // // // //             >
// // // // // // //               <motion.p variants={fadeUp}>
// // // // // // //                 The organization and timeliness associated with the civil legal system are required
// // // // // // //                 by law. Our lawyers who specialize in the area of civil litigation can advise you on
// // // // // // //                 your civil law case before both trial and appeals. As a team of experienced civil
// // // // // // //                 litigation attorneys, we have a commitment to preserving your rights and interests
// // // // // // //                 while also assisting you in finding effective and lawful solutions that will meet
// // // // // // //                 your goals for success as a business or person.
// // // // // // //               </motion.p>
// // // // // // //             </motion.div>
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //         {/* ════════════════════════ OUR CIVIL LITIGATION SERVICES ═══════════════ */}
// // // // // // //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
// // // // // // //           <GoldDivider />
// // // // // // //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// // // // // // //           <div className="max-w-6xl mx-auto">
// // // // // // //             <SectionHeading>Our Civil Litigation Services</SectionHeading>

// // // // // // //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // // // // //               className="text-gray-600 text-lg leading-relaxed mb-4"
// // // // // // //             >
// // // // // // //               Civil disputes require structured legal action and timely intervention. As a trusted
// // // // // // //               Civil Litigation Lawyer team, we represent individuals and businesses in a wide range
// // // // // // //               of civil matters before trial and appellate courts.
// // // // // // //             </motion.p>

// // // // // // //             <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5}
// // // // // // //               className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4 mt-8"
// // // // // // //             >
// // // // // // //               Our Civil Litigation Services Include:
// // // // // // //             </motion.h3>

// // // // // // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // // // // //               className="grid md:grid-cols-2 gap-5 mb-14"
// // // // // // //             >
// // // // // // //               {services.map((item, i) => (
// // // // // // //                 <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
// // // // // // //                   whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
// // // // // // //                   className="bg-white border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
// // // // // // //                 >
// // // // // // //                   <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">
// // // // // // //                     {String(i + 1).padStart(2, "0")}
// // // // // // //                   </span>
// // // // // // //                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
// // // // // // //                     <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
// // // // // // //                       {item}
// // // // // // //                     </p>
// // // // // // //                   </div>
// // // // // // //                 </motion.div>
// // // // // // //               ))}
// // // // // // //             </motion.div>

// // // // // // //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // // // // //               className="text-gray-600 text-lg leading-relaxed"
// // // // // // //             >
// // // // // // //               Each case is handled with detailed preparation, careful analysis of facts, and a clear
// // // // // // //               litigation strategy designed to achieve the best possible outcome.
// // // // // // //             </motion.p>

// // // // // // //             {/* ── FIX: relative wrapper with explicit height ── */}
// // // // // // //             <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // // // // //               className="mt-14 rounded-xl overflow-hidden border border-gray-100 shadow-lg relative w-full h-[400px]"
// // // // // // //             >
// // // // // // //               <Image
// // // // // // //                 src="/civilLitigation2.png"
// // // // // // //                 alt="Civil Litigation Services"
// // // // // // //                 fill
// // // // // // //                 className="object-cover"
// // // // // // //                 unoptimized
// // // // // // //               />
// // // // // // //             </motion.div>
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //         {/* ════════════════════════════ OUR APPROACH ════════════════════════════ */}
// // // // // // //         <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
// // // // // // //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // // // // // //           <motion.div
// // // // // // //             initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 0.04, x: 0 }}
// // // // // // //             viewport={{ once: true }} transition={{ duration: 1.2 }}
// // // // // // //             className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[22rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
// // // // // // //           >
// // // // // // //             4
// // // // // // //           </motion.div>

// // // // // // //           <div className="max-w-6xl mx-auto relative">
// // // // // // //             <SectionHeading light>Our Approach – How We Handle Civil Litigation</SectionHeading>

// // // // // // //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // // // // //               className="text-gray-400 text-lg leading-relaxed mb-14 max-w-3xl"
// // // // // // //             >
// // // // // // //               As a dedicated civil litigation law firm, we utilize a systematic and consistent
// // // // // // //               method in handling our clients' civil litigation cases so that they can fully
// // // // // // //               understand their legal options and the status of their case.
// // // // // // //             </motion.p>

// // // // // // //             <div className="space-y-8">
// // // // // // //               {steps.map((step, i) => (
// // // // // // //                 <motion.div key={step.number}
// // // // // // //                   variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.2}
// // // // // // //                   className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-8 relative group transition-colors duration-300"
// // // // // // //                 >
// // // // // // //                   <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />
// // // // // // //                   <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />
// // // // // // //                   <div className="flex gap-6 items-start">
// // // // // // //                     <span className="text-[#C9A24D] font-black text-3xl shrink-0 leading-none">{step.number}</span>
// // // // // // //                     <div className="border-l border-[#C9A24D]/30 pl-6">
// // // // // // //                       <h3 className="text-xl font-bold text-white mb-3">Step {i + 1}: {step.title}</h3>
// // // // // // //                       <p className="text-gray-400 leading-relaxed">{step.body}</p>
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </motion.div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //         {/* ════════════════════════════ WHY CHOOSE ══════════════════════════════ */}
// // // // // // //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// // // // // // //           <GoldDivider />
// // // // // // //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// // // // // // //           <div className="max-w-6xl mx-auto">
// // // // // // //             <SectionHeading>Why Choose Our Firm</SectionHeading>

// // // // // // //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // // // // //               className="text-gray-600 text-lg leading-relaxed mb-14 max-w-3xl"
// // // // // // //             >
// // // // // // //               Clients trust our civil litigation attorneys at S Jain Attorneys because we have a
// // // // // // //               balanced approach, which combines legal knowledge with practical solutions.
// // // // // // //             </motion.p>

// // // // // // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // // // // //               className="grid md:grid-cols-2 gap-6"
// // // // // // //             >
// // // // // // //               {whyChoose.map((item, i) => (
// // // // // // //                 <motion.div key={i} variants={scaleIn} custom={i * 0.15}
// // // // // // //                   whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
// // // // // // //                   className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 relative group overflow-hidden transition-colors duration-300"
// // // // // // //                 >
// // // // // // //                   <motion.span
// // // // // // //                     initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
// // // // // // //                     className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
// // // // // // //                     style={{ transition: "transform 0.3s ease" }}
// // // // // // //                   />
// // // // // // //                   <span className="text-3xl mb-4 block">{item.icon}</span>
// // // // // // //                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
// // // // // // //                     {item.title}
// // // // // // //                   </h3>
// // // // // // //                   <p className="text-gray-500 leading-relaxed">{item.body}</p>
// // // // // // //                 </motion.div>
// // // // // // //               ))}
// // // // // // //             </motion.div>
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //         {/* ══════════════════════════════ FAQ ═══════════════════════════════════ */}
// // // // // // //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
// // // // // // //           <GoldDivider />

// // // // // // //           <div className="max-w-4xl mx-auto">
// // // // // // //             <SectionHeading>Frequently Asked Questions</SectionHeading>

// // // // // // //             <div className="space-y-4">
// // // // // // //               {faqs.map((faq, index) => (
// // // // // // //                 <motion.div key={index}
// // // // // // //                   variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.1}
// // // // // // //                   className={`rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-sm ${
// // // // // // //                     activeIndex === index
// // // // // // //                       ? "border-[#C9A24D] bg-[#fdf9f3] shadow-[0_4px_24px_rgba(201,162,77,0.15)]"
// // // // // // //                       : "border-gray-200 bg-white hover:border-[#C9A24D]/60 hover:shadow-md"
// // // // // // //                   }`}
// // // // // // //                 >
// // // // // // //                   <button
// // // // // // //                     onClick={() => setActiveIndex(activeIndex === index ? null : index)}
// // // // // // //                     className="w-full flex justify-between items-start p-7 text-left gap-4 group"
// // // // // // //                     aria-expanded={activeIndex === index}
// // // // // // //                   >
// // // // // // //                     <div className="flex items-start gap-4 flex-1">
// // // // // // //                       <span className={`shrink-0 mt-1 w-1 self-stretch rounded-full transition-colors duration-300 ${
// // // // // // //                         activeIndex === index ? "bg-[#C9A24D]" : "bg-gray-200 group-hover:bg-[#C9A24D]/50"
// // // // // // //                       }`} />
// // // // // // //                       <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
// // // // // // //                         activeIndex === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"
// // // // // // //                       }`}>
// // // // // // //                         Q{index + 1}: {faq.q}
// // // // // // //                       </span>
// // // // // // //                     </div>
// // // // // // //                     <motion.div
// // // // // // //                       animate={{ rotate: activeIndex === index ? 180 : 0 }}
// // // // // // //                       transition={{ duration: 0.25 }}
// // // // // // //                       className="shrink-0 mt-1"
// // // // // // //                     >
// // // // // // //                       <ChevronDown className={`w-5 h-5 ${activeIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
// // // // // // //                     </motion.div>
// // // // // // //                   </button>

// // // // // // //                   <AnimatePresence>
// // // // // // //                     {activeIndex === index && (
// // // // // // //                       <motion.div
// // // // // // //                         initial={{ height: 0, opacity: 0 }}
// // // // // // //                         animate={{ height: "auto", opacity: 1 }}
// // // // // // //                         exit={{ height: 0, opacity: 0 }}
// // // // // // //                         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
// // // // // // //                         className="overflow-hidden"
// // // // // // //                       >
// // // // // // //                         <div className="px-7 pb-7 border-t-2 border-[#C9A24D]/20 ml-7">
// // // // // // //                           <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
// // // // // // //                         </div>
// // // // // // //                       </motion.div>
// // // // // // //                     )}
// // // // // // //                   </AnimatePresence>
// // // // // // //                 </motion.div>
// // // // // // //               ))}
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </section>

// // // // // // //         {/* ══════════════════════════ FINAL CTA ═════════════════════════════════ */}
// // // // // // //         <section className="relative py-28 text-center text-white overflow-hidden">

// // // // // // //           {/* ── FIX: absolute inset-0 wrapper for fill image ── */}
// // // // // // //           <div className="absolute inset-0 z-0">
// // // // // // //             <Image
// // // // // // //               src="/discussion.png"
// // // // // // //               alt="Legal Consultation"
// // // // // // //               fill
// // // // // // //               className="object-cover"
// // // // // // //               unoptimized
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //           <div className="absolute inset-0 bg-black/80 z-0" />
// // // // // // //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />
// // // // // // //           <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />

// // // // // // //           {[0, 1, 2].map((i) => (
// // // // // // //             <motion.div key={i}
// // // // // // //               initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
// // // // // // //               viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
// // // // // // //               className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none z-0"
// // // // // // //               style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
// // // // // // //             />
// // // // // // //           ))}

// // // // // // //           <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // // // // //             className="relative z-10 max-w-4xl mx-auto px-6"
// // // // // // //           >
// // // // // // //             <div className="border border-[#C9A24D]/30 rounded-2xl px-10 py-16 relative">
// // // // // // //               {[
// // // // // // //                 "top-4 left-4 border-t-2 border-l-2",
// // // // // // //                 "top-4 right-4 border-t-2 border-r-2",
// // // // // // //                 "bottom-4 left-4 border-b-2 border-l-2",
// // // // // // //                 "bottom-4 right-4 border-b-2 border-r-2",
// // // // // // //               ].map((cls, i) => (
// // // // // // //                 <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
// // // // // // //               ))}

// // // // // // //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // // // // //                 className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
// // // // // // //               >
// // // // // // //                 S Jain &amp; Attorneys · Civil Litigation
// // // // // // //               </motion.p>

// // // // // // //               <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
// // // // // // //                 className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
// // // // // // //               >
// // // // // // //                 Get reliable legal support from a dedicated Civil Lawyer in Bangalore and protect
// // // // // // //                 your rights confidently.
// // // // // // //               </motion.h2>

// // // // // // //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1.5}
// // // // // // //                 className="text-[#C9A24D] text-sm font-medium mb-10"
// // // // // // //               >
// // // // // // //                 Response within 24 hours guaranteed.
// // // // // // //               </motion.p>

// // // // // // //               {/* ── CTAs matching CTASection style ── */}
// // // // // // //               <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
// // // // // // //                 className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto"
// // // // // // //               >
// // // // // // //                 <Link href="/legal-consultation-in-bangalore" className="w-full sm:flex-1">
// // // // // // //                   <button className="w-full py-3 text-center border border-[#C9A24D] text-[#C9A24D] font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition duration-300">
// // // // // // //                     Request Callback
// // // // // // //                   </button>
// // // // // // //                 </Link>
// // // // // // //                 <Link href="/legal-consultation-in-bangalore" className="w-full sm:flex-1">
// // // // // // //                   <button className="w-full py-3 text-center bg-[#C9A24D] text-black font-semibold rounded-md hover:scale-105 transition duration-300 shadow-lg">
// // // // // // //                     Book Confidential Consultation
// // // // // // //                   </button>
// // // // // // //                 </Link>
// // // // // // //               </motion.div>

// // // // // // //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
// // // // // // //                 className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
// // // // // // //               >
// // // // // // //                 <span className="inline-block w-4 h-px bg-gray-600" />
// // // // // // //                 All matters handled with complete confidentiality and legal discretion.
// // // // // // //                 <span className="inline-block w-4 h-px bg-gray-600" />
// // // // // // //               </motion.p>
// // // // // // //             </div>
// // // // // // //           </motion.div>
// // // // // // //         </section>

// // // // // // //       </main>

// // // // // // //       <Footer />
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }


// // // // // // "use client";

// // // // // // import Navbar from "../components/Navbar";
// // // // // // import Footer from "../components/Footer";
// // // // // // import Image from "next/image";
// // // // // // import { motion } from "framer-motion";
// // // // // // import Link from "next/link";
// // // // // // import { useState } from "react";
// // // // // // import { ChevronDown } from "lucide-react";

// // // // // // export default function CivilLitigation() {

// // // // // //   const [activeIndex, setActiveIndex] = useState(null);

// // // // // //   const toggleFAQ = (index) => {
// // // // // //     setActiveIndex(activeIndex === index ? null : index);
// // // // // //   };

// // // // // //   const fadeUp = {
// // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// // // // // //   };

// // // // // //   const stagger = {
// // // // // //     visible: { transition: { staggerChildren: 0.2 } }
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Navbar />

// // // // // //       <main className="bg-white overflow-hidden">

// // // // // //         {/* HERO */}

// // // // // //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// // // // // //           <motion.div
// // // // // //             variants={stagger}
// // // // // //             initial="hidden"
// // // // // //             animate="visible"
// // // // // //             className="max-w-7xl mx-auto px-6 text-center"
// // // // // //           >

// // // // // //             <motion.h1
// // // // // //               variants={fadeUp}
// // // // // //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// // // // // //             >
// // // // // //               Strategic Civil Litigation Lawyer in Bangalore for Property and Commercial Disputes
// // // // // //             </motion.h1>

// // // // // //             <motion.p
// // // // // //               variants={fadeUp}
// // // // // //               className="text-gray-300 text-lg max-w-4xl mx-auto mb-4"
// // // // // //             >
// // // // // //               Our firm provides dedicated representation as a Civil Lawyer in Bangalore, handling complex disputes with strategic planning and strong courtroom advocacy. Our experienced attorneys manage civil litigation matters with clarity and precision.
// // // // // //             </motion.p>

// // // // // //             <motion.p
// // // // // //               variants={fadeUp}
// // // // // //               className="text-gray-400 text-lg max-w-4xl mx-auto mb-6"
// // // // // //             >
// // // // // //               Our goal is to protect your legal rights, secure enforceable remedies, and resolve disputes efficiently through structured litigation strategy.
// // // // // //             </motion.p>

// // // // // //             <motion.p
// // // // // //               variants={fadeUp}
// // // // // //               className="text-[#C9A24D] font-semibold mb-8"
// // // // // //             >
// // // // // //               Response within 24 hours guaranteed.
// // // // // //             </motion.p>

// // // // // //             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">

// // // // // //               <Link href="/legal-consultation-in-bangalore">
// // // // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // // // // //                   Book Confidential Consultation
// // // // // //                 </button>
// // // // // //               </Link>

// // // // // //               <Link href="tel:+919000000000">
// // // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // // // //                   Call Now
// // // // // //                 </button>
// // // // // //               </Link>

// // // // // //             </div>

// // // // // //           </motion.div>

// // // // // //           {/* HERO IMAGE */}

// // // // // //           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6">

// // // // // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">

// // // // // //               <Image
// // // // // //                 src="/CivilLitigation1.jpg"
// // // // // //                 alt="Civil Lawyer in Bangalore"
// // // // // //                 width={1400}
// // // // // //                 height={800}
// // // // // //                 className="w-full h-[450px] object-cover"
// // // // // //                 priority
// // // // // //               />

// // // // // //             </div>

// // // // // //           </div>

// // // // // //         </section>

// // // // // //         <div className="h-48"></div>

// // // // // //         {/* SERVICES */}

// // // // // //         <section className="max-w-6xl mx-auto px-6 py-20 mt-20">

// // // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // // //             Strategic Civil Litigation Representation
// // // // // //           </h2>

// // // // // //           <p className="text-gray-700 text-lg mb-10">
// // // // // //             Civil disputes require structured legal action and timely intervention. As a trusted Civil Litigation Lawyer team, we represent individuals and businesses in a wide range of civil matters before trial and appellate courts.
// // // // // //             Our attorneys focus on protecting your rights while pursuing effective and legally sound outcomes.
// // // // // //           </p>

// // // // // //           <h3 className="text-2xl font-semibold mb-6">
// // // // // //             OUR CIVIL LITIGATION SERVICES INCLUDE
// // // // // //           </h3>

// // // // // //           <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700 mb-16">

// // // // // //             <li>▪ Property & Land Disputes</li>
// // // // // //             <li>▪ Contractual Disputes</li>
// // // // // //             <li>▪ Recovery Suits</li>
// // // // // //             <li>▪ Injunction & Stay Matters</li>
// // // // // //             <li>▪ Partition & Inheritance Cases</li>
// // // // // //             <li>▪ Commercial Civil Disputes</li>
// // // // // //             <li>▪ Appeals & Revisions</li>

// // // // // //           </ul>

// // // // // //           <Image
// // // // // //             src="/civilLitigation2.png"
// // // // // //             alt="Civil Litigation Services"
// // // // // //             width={1200}
// // // // // //             height={600}
// // // // // //             className="w-full rounded-xl shadow-lg mb-16"
// // // // // //           />

// // // // // //           {/* APPROACH */}

// // // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // // //             OUR APPROACH / HOW WE WORK
// // // // // //           </h2>

// // // // // //           <div className="space-y-6 text-gray-700 text-lg mb-16">

// // // // // //             <p>
// // // // // //               <strong>Step 1:</strong> Case Evaluation & Legal Consultation  
// // // // // //               Understanding the dispute and assessing legal remedies.
// // // // // //             </p>

// // // // // //             <p>
// // // // // //               <strong>Step 2:</strong> Documentation & Evidence Review  
// // // // // //               Careful analysis of contracts, records, and supporting documents.  
// // // // // //               We clearly explain legal risks, possible outcomes, and available remedies before proceeding.
// // // // // //             </p>

// // // // // //             <p>
// // // // // //               <strong>Step 3:</strong> Filing & Court Proceedings  
// // // // // //               Preparation of pleadings and representation before court.
// // // // // //             </p>

// // // // // //             <p>
// // // // // //               <strong>Step 4:</strong> Trial Representation & Resolution  
// // // // // //               Strong advocacy aimed at efficient dispute resolution.
// // // // // //             </p>

// // // // // //           </div>

// // // // // //           {/* WHY CHOOSE */}

// // // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // // //             WHY CHOOSE OUR FIRM
// // // // // //           </h2>

// // // // // //           <ul className="space-y-4 text-lg mb-16">

// // // // // //             <li>✓ Experienced Civil Litigation Lawyers</li>
// // // // // //             <li>✓ Strong and strategic courtroom representation</li>
// // // // // //             <li>✓ Clear legal guidance at every stage</li>
// // // // // //             <li>✓ Practical, result-focused approach</li>

// // // // // //           </ul>

// // // // // //           {/* FAQ */}

// // // // // //           <h2 className="text-4xl font-semibold text-center mb-10">
// // // // // //             Frequently Asked Questions
// // // // // //           </h2>

// // // // // //           <div className="max-w-4xl mx-auto space-y-4">

// // // // // //             {[
// // // // // //               {
// // // // // //                 question: "What types of civil cases do you handle?",
// // // // // //                 answer:
// // // // // //                   "We handle property disputes, contract matters, recovery suits, injunctions, partition cases, and commercial civil litigation."
// // // // // //               },
// // // // // //               {
// // // // // //                 question: "How long does a civil case take?",
// // // // // //                 answer:
// // // // // //                   "Timelines vary depending on case complexity, court workload, evidence review, and procedural stages."
// // // // // //               },
// // // // // //               {
// // // // // //                 question: "Can civil disputes be settled outside court?",
// // // // // //                 answer:
// // // // // //                   "Yes, many disputes can be resolved through negotiation, mediation, or structured settlement discussions."
// // // // // //               },
// // // // // //               {
// // // // // //                 question: "What documents are required for filing a civil suit?",
// // // // // //                 answer:
// // // // // //                   "Relevant contracts, title documents, correspondence, financial records, and supporting evidence are typically required."
// // // // // //               },
// // // // // //               {
// // // // // //                 question: "Do you handle appeals in civil matters?",
// // // // // //                 answer:
// // // // // //                   "Yes, our Civil Litigation Lawyer team represents clients in appeals and revisions before appellate courts, ensuring strong legal arguments and procedural compliance."
// // // // // //               },
// // // // // //               {
// // // // // //                 question: "Can you assist with urgent injunction or stay orders?",
// // // // // //                 answer:
// // // // // //                   "Yes, we handle urgent injunction and stay applications to protect your legal rights and prevent further loss or damage during ongoing disputes."
// // // // // //               }
// // // // // //             ].map((faq, index) => (

// // // // // //               <div key={index} className="border border-[#C9A24D] rounded-lg">

// // // // // //                 <button
// // // // // //                   onClick={() => toggleFAQ(index)}
// // // // // //                   className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg"
// // // // // //                 >

// // // // // //                   {faq.question}

// // // // // //                   <ChevronDown
// // // // // //                     className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-[#C9A24D]" : ""}`}
// // // // // //                   />

// // // // // //                 </button>

// // // // // //                 {activeIndex === index && (
// // // // // //                   <div className="px-6 pb-6 text-gray-700 border-t border-[#C9A24D]/40 pt-4">
// // // // // //                     {faq.answer}
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //               </div>

// // // // // //             ))}

// // // // // //           </div>

// // // // // //         </section>

// // // // // //         {/* FINAL CTA */}

// // // // // //         <section className="relative py-28 text-center text-white">

// // // // // //           <Image
// // // // // //             src="/discussion.png"
// // // // // //             alt="Consultation"
// // // // // //             fill
// // // // // //             className="object-cover"
// // // // // //           />

// // // // // //           <div className="absolute inset-0 bg-black/75"></div>

// // // // // //           <div className="relative max-w-4xl mx-auto px-6">

// // // // // //             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// // // // // //               Get reliable legal support from a dedicated Civil Lawyer in Bangalore and protect your rights confidently.
// // // // // //             </h2>

// // // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">

// // // // // //               <Link href="/legal-consultation-in-bangalore">

// // // // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // // // // //                   Book Confidential Consultation
// // // // // //                 </button>

// // // // // //               </Link>

// // // // // //               <Link href="tel:+919000000000">

// // // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // // // //                   Call Now
// // // // // //                 </button>

// // // // // //               </Link>

// // // // // //             </div>

// // // // // //             <p className="text-gray-400 text-sm mt-8">
// // // // // //               All matters handled with complete confidentiality and legal discretion.
// // // // // //             </p>

// // // // // //           </div>

// // // // // //         </section>

// // // // // //       </main>

// // // // // //       <Footer />
// // // // // //     </>
// // // // // //   );
// // // // // // }



// // // // // "use client";

// // // // // import Navbar from "../components/Navbar";
// // // // // import Footer from "../components/Footer";
// // // // // import Image from "next/image";
// // // // // import { motion } from "framer-motion";
// // // // // import Link from "next/link";
// // // // // import { useState } from "react";
// // // // // import { ChevronDown } from "lucide-react";

// // // // // export default function CivilLitigation() {

// // // // //   const [activeIndex, setActiveIndex] = useState(null);

// // // // //   const toggleFAQ = (index) => {
// // // // //     setActiveIndex(activeIndex === index ? null : index);
// // // // //   };

// // // // //   const fadeUp = {
// // // // //     hidden: { opacity: 0, y: 40 },
// // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// // // // //   };

// // // // //   const stagger = {
// // // // //     visible: { transition: { staggerChildren: 0.2 } }
// // // // //   };

// // // // //   const faqs = [
// // // // //     {
// // // // //       question: "What types of civil cases do you handle?",
// // // // //       answer:
// // // // //         "We handle property disputes, contract matters, recovery suits, injunctions, partition cases, and commercial civil litigation."
// // // // //     },
// // // // //     {
// // // // //       question: "How long does a civil case take?",
// // // // //       answer:
// // // // //         "Timelines vary depending on case complexity, court workload, evidence review, and procedural stages."
// // // // //     },
// // // // //     {
// // // // //       question: "Can civil disputes be settled outside court?",
// // // // //       answer:
// // // // //         "Yes, many disputes can be resolved through negotiation, mediation, or structured settlement discussions."
// // // // //     },
// // // // //     {
// // // // //       question: "What documents are required for filing a civil suit?",
// // // // //       answer:
// // // // //         "Relevant contracts, title documents, correspondence, financial records, and supporting evidence are typically required."
// // // // //     },
// // // // //     {
// // // // //       question: "Do you handle appeals in civil matters?",
// // // // //       answer:
// // // // //         "Yes, our Civil Litigation Lawyer team represents clients in appeals and revisions before appellate courts."
// // // // //     },
// // // // //     {
// // // // //       question: "Can you assist with urgent injunction or stay orders?",
// // // // //       answer:
// // // // //         "Yes, we handle urgent injunction and stay applications to protect your legal rights."
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />

// // // // //       <main className="bg-white overflow-hidden">

// // // // //         {/* HERO */}

// // // // //         <section className="relative bg-[#0B0F14] pt-32 pb-48">

// // // // //           <motion.div
// // // // //             variants={stagger}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             className="max-w-6xl mx-auto px-6 text-center"
// // // // //           >

// // // // //             <motion.h1
// // // // //               variants={fadeUp}
// // // // //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// // // // //             >
// // // // //               Strategic Civil Litigation Lawyer in Bangalore for Property and Commercial Disputes
// // // // //             </motion.h1>

// // // // //             <motion.p
// // // // //               variants={fadeUp}
// // // // //               className="text-gray-300 text-lg max-w-3xl mx-auto mb-4"
// // // // //             >
// // // // //               Our firm provides dedicated representation as a Civil Lawyer in Bangalore, handling complex disputes with strategic planning and strong courtroom advocacy.
// // // // //             </motion.p>

// // // // //             <motion.p
// // // // //               variants={fadeUp}
// // // // //               className="text-gray-400 text-lg max-w-3xl mx-auto mb-6"
// // // // //             >
// // // // //               Our goal is to protect your legal rights, secure enforceable remedies, and resolve disputes efficiently.
// // // // //             </motion.p>

// // // // //             <motion.p
// // // // //               variants={fadeUp}
// // // // //               className="text-[#C9A24D] font-semibold mb-8"
// // // // //             >
// // // // //               Response within 24 hours guaranteed.
// // // // //             </motion.p>

// // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">

// // // // //               <Link href="/legal-consultation-in-bangalore">
// // // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // // // //                   Book Confidential Consultation
// // // // //                 </button>
// // // // //               </Link>

// // // // //               <Link href="tel:+919000000000">
// // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // // //                   Call Now
// // // // //                 </button>
// // // // //               </Link>

// // // // //             </div>

// // // // //           </motion.div>

// // // // //           {/* HERO IMAGE */}

// // // // //           <div className="absolute left-1/2 -translate-x-1/2 bottom-[-120px] w-full max-w-5xl px-6">

// // // // //             <div className="rounded-xl overflow-hidden shadow-2xl">

// // // // //               <Image
// // // // //                 src="/CivilLitigation1.jpg"
// // // // //                 alt="Civil Lawyer in Bangalore"
// // // // //                 width={1200}
// // // // //                 height={600}
// // // // //                 className="w-full h-[360px] object-cover"
// // // // //                 priority
// // // // //               />

// // // // //             </div>

// // // // //           </div>

// // // // //         </section>

// // // // //         <div className="mt-40"></div>

// // // // //         {/* SERVICES */}

// // // // //         <section className="max-w-5xl mx-auto px-6 py-20">

// // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // //             Strategic Civil Litigation Representation
// // // // //           </h2>

// // // // //           <p className="text-gray-700 text-lg mb-10">
// // // // //             Civil disputes require structured legal action and timely intervention.
// // // // //             Our attorneys focus on protecting your rights while pursuing effective outcomes.
// // // // //           </p>

// // // // //           <h3 className="text-2xl font-semibold mb-6">
// // // // //             OUR CIVIL LITIGATION SERVICES INCLUDE
// // // // //           </h3>

// // // // //           <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700 mb-16">

// // // // //             <li>▪ Property & Land Disputes</li>
// // // // //             <li>▪ Contractual Disputes</li>
// // // // //             <li>▪ Recovery Suits</li>
// // // // //             <li>▪ Injunction & Stay Matters</li>
// // // // //             <li>▪ Partition & Inheritance Cases</li>
// // // // //             <li>▪ Commercial Civil Disputes</li>
// // // // //             <li>▪ Appeals & Revisions</li>

// // // // //           </ul>

// // // // //           {/* SECOND IMAGE */}

// // // // //           <Image
// // // // //             src="/civilLitigation2.png"
// // // // //             alt="Civil Litigation Services"
// // // // //             width={900}
// // // // //             height={450}
// // // // //             className="w-full max-w-4xl mx-auto rounded-xl shadow-lg mb-16 object-cover"
// // // // //           />

// // // // //           {/* APPROACH */}

// // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // //             OUR APPROACH / HOW WE WORK
// // // // //           </h2>

// // // // //           <div className="space-y-6 text-gray-700 text-lg mb-16">

// // // // //             <p>
// // // // //               <strong>Step 1:</strong> Case Evaluation & Legal Consultation
// // // // //             </p>

// // // // //             <p>
// // // // //               <strong>Step 2:</strong> Documentation & Evidence Review
// // // // //             </p>

// // // // //             <p>
// // // // //               <strong>Step 3:</strong> Filing & Court Proceedings
// // // // //             </p>

// // // // //             <p>
// // // // //               <strong>Step 4:</strong> Trial Representation & Resolution
// // // // //             </p>

// // // // //           </div>

// // // // //           {/* WHY CHOOSE */}

// // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // //             WHY CHOOSE OUR FIRM
// // // // //           </h2>

// // // // //           <ul className="space-y-4 text-lg mb-16">

// // // // //             <li>✓ Experienced Civil Litigation Lawyers</li>
// // // // //             <li>✓ Strategic courtroom representation</li>
// // // // //             <li>✓ Clear legal guidance</li>
// // // // //             <li>✓ Result-focused approach</li>

// // // // //           </ul>

// // // // //           {/* FAQ */}

// // // // //           <h2 className="text-4xl font-semibold text-center mb-10">
// // // // //             Frequently Asked Questions
// // // // //           </h2>

// // // // //           <div className="max-w-3xl mx-auto space-y-4">

// // // // //             {faqs.map((faq, index) => (

// // // // //               <div key={index} className="border border-[#C9A24D] rounded-lg">

// // // // //                 <button
// // // // //                   type="button"
// // // // //                   onClick={() => toggleFAQ(index)}
// // // // //                   className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg hover:bg-[#C9A24D]/10 transition"
// // // // //                 >

// // // // //                   {faq.question}

// // // // //                   <ChevronDown
// // // // //                     className={`transition-transform duration-300 ${
// // // // //                       activeIndex === index ? "rotate-180 text-[#C9A24D]" : ""
// // // // //                     }`}
// // // // //                   />

// // // // //                 </button>

// // // // //                 {activeIndex === index && (

// // // // //                   <div className="px-6 pb-6 text-gray-700 border-t border-[#C9A24D]/40 pt-4">
// // // // //                     {faq.answer}
// // // // //                   </div>

// // // // //                 )}

// // // // //               </div>

// // // // //             ))}

// // // // //           </div>

// // // // //         </section>

// // // // //         {/* FINAL CTA */}

// // // // //         <section className="relative py-28 text-center text-white">

// // // // //           <Image
// // // // //             src="/discussion.png"
// // // // //             alt="Consultation"
// // // // //             fill
// // // // //             className="object-cover"
// // // // //           />

// // // // //           <div className="absolute inset-0 bg-black/75"></div>

// // // // //           <div className="relative max-w-4xl mx-auto px-6">

// // // // //             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// // // // //               Get reliable legal support from a dedicated Civil Lawyer in Bangalore.
// // // // //             </h2>

// // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">

// // // // //               <Link href="/legal-consultation-in-bangalore">
// // // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // // // //                   Book Confidential Consultation
// // // // //                 </button>
// // // // //               </Link>

// // // // //               <Link href="tel:+919000000000">
// // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // // //                   Call Now
// // // // //                 </button>
// // // // //               </Link>

// // // // //             </div>

// // // // //             <p className="text-gray-400 text-sm mt-8">
// // // // //               All matters handled with complete confidentiality.
// // // // //             </p>

// // // // //           </div>

// // // // //         </section>

// // // // //       </main>

// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }




// // // // "use client";

// // // // import Navbar from "../components/Navbar";
// // // // import Footer from "../components/Footer";
// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";
// // // // import Link from "next/link";
// // // // import { useState } from "react";
// // // // import { ChevronDown } from "lucide-react";

// // // // export default function CivilLitigation() {

// // // //   const [activeIndex, setActiveIndex] = useState(null);

// // // //   const toggleFAQ = (index) => {
// // // //     setActiveIndex(activeIndex === index ? null : index);
// // // //   };

// // // //   const fadeUp = {
// // // //     hidden: { opacity: 0, y: 40 },
// // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// // // //   };

// // // //   const stagger = {
// // // //     visible: { transition: { staggerChildren: 0.2 } }
// // // //   };

// // // //   const faqs = [
// // // //     {
// // // //       question: "What types of civil cases do you handle?",
// // // //       answer:
// // // //         "We handle property disputes, contract matters, recovery suits, injunctions, partition cases, and commercial civil litigation."
// // // //     },
// // // //     {
// // // //       question: "How long does a civil case take?",
// // // //       answer:
// // // //         "Timelines vary depending on case complexity, court workload, evidence review, and procedural stages."
// // // //     },
// // // //     {
// // // //       question: "Can civil disputes be settled outside court?",
// // // //       answer:
// // // //         "Yes, many disputes can be resolved through negotiation, mediation, or structured settlement discussions."
// // // //     },
// // // //     {
// // // //       question: "What documents are required for filing a civil suit?",
// // // //       answer:
// // // //         "Relevant contracts, title documents, correspondence, financial records, and supporting evidence are typically required."
// // // //     },
// // // //     {
// // // //       question: "Do you handle appeals in civil matters?",
// // // //       answer:
// // // //         "Yes, our Civil Litigation Lawyer team represents clients in appeals and revisions before appellate courts."
// // // //     },
// // // //     {
// // // //       question: "Can you assist with urgent injunction or stay orders?",
// // // //       answer:
// // // //         "Yes, we handle urgent injunction and stay applications to protect your legal rights."
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       <main className="bg-white overflow-hidden">

// // // //         {/* HERO */}

// // // //         <section className="relative bg-[#0B0F14] pt-32 pb-72">

// // // //           <motion.div
// // // //             variants={stagger}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             className="max-w-7xl mx-auto px-6 text-center"
// // // //           >

// // // //             <motion.h1
// // // //               variants={fadeUp}
// // // //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// // // //             >
// // // //               Strategic Civil Litigation Lawyer in Bangalore for Property and Commercial Disputes
// // // //             </motion.h1>

// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-300 text-lg max-w-3xl mx-auto mb-4"
// // // //             >
// // // //               Our firm provides dedicated representation as a Civil Lawyer in Bangalore, handling complex disputes with strategic planning and strong courtroom advocacy.
// // // //             </motion.p>

// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-400 text-lg max-w-3xl mx-auto mb-6"
// // // //             >
// // // //               Our goal is to protect your legal rights, secure enforceable remedies, and resolve disputes efficiently.
// // // //             </motion.p>

// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-[#C9A24D] font-semibold mb-8"
// // // //             >
// // // //               Response within 24 hours guaranteed.
// // // //             </motion.p>

// // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">

// // // //               <Link href="/legal-consultation-in-bangalore">
// // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // // //                   Book Confidential Consultation
// // // //                 </button>
// // // //               </Link>

// // // //               <Link href="tel:+919000000000">
// // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // //                   Call Now
// // // //                 </button>
// // // //               </Link>

// // // //             </div>

// // // //           </motion.div>

// // // //           {/* HERO IMAGE */}

// // // //           <div className="absolute left-1/2 -translate-x-1/2 bottom-[-140px] w-full max-w-6xl px-6 ">

// // // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-14">

// // // //               <Image
// // // //                 src="/CivilLitigation1.jpg"
// // // //                 alt="Civil Lawyer in Bangalore"
// // // //                 width={1200}
// // // //                 height={600}
// // // //                 className="w-full h-[380px] object-cover"
// // // //                 priority
// // // //               />

// // // //             </div>

// // // //           </div>

// // // //         </section>

// // // //         <div className="mt-44"></div>

// // // //         {/* CONTENT */}

// // // //         <section className="max-w-7xl mx-auto px-6 py-20">

// // // //           <h2 className="text-4xl font-semibold mb-6">
// // // //             Strategic Civil Litigation Representation
// // // //           </h2>

// // // //           <p className="text-gray-700 text-lg mb-10 max-w-4xl">
// // // //             Civil disputes require structured legal action and timely intervention.
// // // //             Our attorneys focus on protecting your rights while pursuing effective outcomes.
// // // //           </p>

// // // //           <h3 className="text-2xl font-semibold mb-6">
// // // //             OUR CIVIL LITIGATION SERVICES INCLUDE
// // // //           </h3>

// // // //           <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700 mb-16 max-w-4xl">

// // // //             <li>▪ Property & Land Disputes</li>
// // // //             <li>▪ Contractual Disputes</li>
// // // //             <li>▪ Recovery Suits</li>
// // // //             <li>▪ Injunction & Stay Matters</li>
// // // //             <li>▪ Partition & Inheritance Cases</li>
// // // //             <li>▪ Commercial Civil Disputes</li>
// // // //             <li>▪ Appeals & Revisions</li>

// // // //           </ul>

// // // //           {/* IMAGE */}

// // // //           <Image
// // // //             src="/civilLitigation2.png"
// // // //             alt="Civil Litigation Services"
// // // //             width={900}
// // // //             height={450}
// // // //             className="w-full max-w-5xl mx-auto rounded-xl shadow-lg mb-20 object-cover"
// // // //           />

// // // //           {/* APPROACH */}

// // // //           <h2 className="text-4xl font-semibold mb-6">
// // // //             OUR APPROACH / HOW WE WORK
// // // //           </h2>

// // // //           <div className="space-y-6 text-gray-700 text-lg mb-16 max-w-4xl">

// // // //             <p><strong>Step 1:</strong> Case Evaluation & Legal Consultation</p>
// // // //             <p><strong>Step 2:</strong> Documentation & Evidence Review</p>
// // // //             <p><strong>Step 3:</strong> Filing & Court Proceedings</p>
// // // //             <p><strong>Step 4:</strong> Trial Representation & Resolution</p>

// // // //           </div>

// // // //           {/* WHY CHOOSE */}

// // // //           <h2 className="text-4xl font-semibold mb-6">
// // // //             WHY CHOOSE OUR FIRM
// // // //           </h2>

// // // //           <ul className="space-y-4 text-lg mb-20 max-w-4xl">

// // // //             <li>✓ Experienced Civil Litigation Lawyers</li>
// // // //             <li>✓ Strategic courtroom representation</li>
// // // //             <li>✓ Clear legal guidance</li>
// // // //             <li>✓ Result-focused approach</li>

// // // //           </ul>

// // // //           {/* FAQ */}

// // // //           <h2 className="text-4xl font-semibold text-center mb-10">
// // // //             Frequently Asked Questions
// // // //           </h2>

// // // //           <div className="max-w-4xl mx-auto space-y-4">

// // // //             {faqs.map((faq, index) => (

// // // //               <div key={index} className="border border-[#C9A24D] rounded-lg">

// // // //                 <button
// // // //                   type="button"
// // // //                   onClick={() => toggleFAQ(index)}
// // // //                   className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg hover:bg-[#C9A24D]/10 transition"
// // // //                 >

// // // //                   {faq.question}

// // // //                   <ChevronDown
// // // //                     className={`transition-transform duration-300 ${
// // // //                       activeIndex === index ? "rotate-180 text-[#C9A24D]" : ""
// // // //                     }`}
// // // //                   />

// // // //                 </button>

// // // //                 {activeIndex === index && (

// // // //                   <div className="px-6 pb-6 text-gray-700 border-t border-[#C9A24D]/40 pt-4">
// // // //                     {faq.answer}
// // // //                   </div>

// // // //                 )}

// // // //               </div>

// // // //             ))}

// // // //           </div>

// // // //         </section>

// // // //         {/* CTA */}

// // // //         <section className="relative py-32 text-center text-white overflow-hidden">

// // // //           <Image
// // // //             src="/discussion.png"
// // // //             alt="Consultation"
// // // //             fill
// // // //             className="object-cover"
// // // //           />

// // // //           <div className="absolute inset-0 bg-black/80"></div>

// // // //           <div className="relative max-w-4xl mx-auto px-6">

// // // //             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// // // //               Get reliable legal support from a dedicated Civil Lawyer in Bangalore.
// // // //             </h2>

// // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">

// // // //               <Link href="/legal-consultation-in-bangalore">
// // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // // //                   Book Confidential Consultation
// // // //                 </button>
// // // //               </Link>

// // // //               <Link href="tel:+919000000000">
// // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // //                   Call Now
// // // //                 </button>
// // // //               </Link>

// // // //             </div>

// // // //             <p className="text-gray-400 text-sm mt-8">
// // // //               All matters handled with complete confidentiality.
// // // //             </p>

// // // //           </div>

// // // //         </section>

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
// // // import { ChevronDown } from "lucide-react";

// // // export default function CivilLitigation() {

// // //   const [activeIndex, setActiveIndex] = useState(null);

// // //   const toggleFAQ = (index) => {
// // //     setActiveIndex(activeIndex === index ? null : index);
// // //   };

// // //   const fadeUp = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// // //   };

// // //   const stagger = {
// // //     visible: { transition: { staggerChildren: 0.2 } }
// // //   };

// // //   const faqs = [
// // //     {
// // //       question: "What types of civil cases do you handle?",
// // //       answer:
// // //         "We handle property disputes, contract matters, recovery suits, injunctions, partition cases, and commercial civil litigation."
// // //     },
// // //     {
// // //       question: "How long does a civil case take?",
// // //       answer:
// // //         "Timelines vary depending on case complexity, court workload, evidence review, and procedural stages."
// // //     },
// // //     {
// // //       question: "Can civil disputes be settled outside court?",
// // //       answer:
// // //         "Yes, many disputes can be resolved through negotiation, mediation, or structured settlement discussions."
// // //     },
// // //     {
// // //       question: "What documents are required for filing a civil suit?",
// // //       answer:
// // //         "Relevant contracts, title documents, correspondence, financial records, and supporting evidence are typically required."
// // //     },
// // //     {
// // //       question: "Do you handle appeals in civil matters?",
// // //       answer:
// // //         "Yes, our Civil Litigation Lawyer team represents clients in appeals and revisions before appellate courts."
// // //     },
// // //     {
// // //       question: "Can you assist with urgent injunction or stay orders?",
// // //       answer:
// // //         "Yes, we handle urgent injunction and stay applications to protect your legal rights."
// // //     }
// // //   ];

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <main className="bg-white overflow-hidden">

// // //         {/* HERO */}

// // //         <section className="relative bg-[#0B0F14] pt-32 pb-64">

// // //           <motion.div
// // //             variants={stagger}
// // //             initial="hidden"
// // //             animate="visible"
// // //             className="max-w-6xl mx-auto px-6 text-center relative z-10"
// // //           >

// // //             <motion.h1
// // //               variants={fadeUp}
// // //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// // //             >
// // //               Strategic Civil Litigation Lawyer in Bangalore for Property and Commercial Disputes
// // //             </motion.h1>

// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-300 text-lg max-w-3xl mx-auto mb-4"
// // //             >
// // //               Our firm provides dedicated representation as a Civil Lawyer in Bangalore, handling complex disputes with strategic planning and strong courtroom advocacy.
// // //             </motion.p>

// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-gray-400 text-lg max-w-3xl mx-auto mb-6"
// // //             >
// // //               Our goal is to protect your legal rights, secure enforceable remedies, and resolve disputes efficiently.
// // //             </motion.p>

// // //             <motion.p
// // //               variants={fadeUp}
// // //               className="text-[#C9A24D] font-semibold mb-8"
// // //             >
// // //               Response within 24 hours guaranteed.
// // //             </motion.p>

// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">

// // //               <Link href="/legal-consultation-in-bangalore">
// // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // //                   Book Confidential Consultation
// // //                 </button>
// // //               </Link>

// // //               <Link href="tel:+919000000000">
// // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // //                   Call Now
// // //                 </button>
// // //               </Link>

// // //             </div>

// // //           </motion.div>

// // //           {/* HERO IMAGE */}

// // //           <div className="absolute left-1/2 -translate-x-1/2 bottom-[-180px] w-full max-w-6xl px-6">

// // //             <div className="rounded-xl overflow-hidden shadow-2xl">

// // //               <Image
// // //                 src="/CivilLitigation1.jpg"
// // //                 alt="Civil Lawyer in Bangalore"
// // //                 width={1200}
// // //                 height={600}
// // //                 className="w-full h-[360px] object-cover"
// // //                 priority
// // //               />

// // //             </div>

// // //           </div>

// // //         </section>

// // //         <div className="h-48"></div>

// // //         {/* CONTENT */}

// // //         <section className="max-w-6xl mx-auto px-6 py-20">

// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             Strategic Civil Litigation Representation
// // //           </h2>

// // //           <p className="text-gray-700 text-lg mb-10 max-w-3xl">
// // //             Civil disputes require structured legal action and timely intervention.
// // //             Our attorneys focus on protecting your rights while pursuing effective outcomes.
// // //           </p>

// // //           <h3 className="text-2xl font-semibold mb-6">
// // //             OUR CIVIL LITIGATION SERVICES INCLUDE
// // //           </h3>

// // //           <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700 mb-16 max-w-3xl">

// // //             <li>▪ Property & Land Disputes</li>
// // //             <li>▪ Contractual Disputes</li>
// // //             <li>▪ Recovery Suits</li>
// // //             <li>▪ Injunction & Stay Matters</li>
// // //             <li>▪ Partition & Inheritance Cases</li>
// // //             <li>▪ Commercial Civil Disputes</li>
// // //             <li>▪ Appeals & Revisions</li>

// // //           </ul>

// // //           {/* SECOND IMAGE */}

// // //           <Image
// // //             src="/civilLitigation2.png"
// // //             alt="Civil Litigation Services"
// // //             width={900}
// // //             height={450}
// // //             className="w-full max-w-4xl mx-auto rounded-xl shadow-lg mb-20 object-cover"
// // //           />

// // //           {/* APPROACH */}

// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             OUR APPROACH / HOW WE WORK
// // //           </h2>

// // //           <div className="space-y-6 text-gray-700 text-lg mb-16 max-w-3xl">

// // //             <p><strong>Step 1:</strong> Case Evaluation & Legal Consultation</p>
// // //             <p><strong>Step 2:</strong> Documentation & Evidence Review</p>
// // //             <p><strong>Step 3:</strong> Filing & Court Proceedings</p>
// // //             <p><strong>Step 4:</strong> Trial Representation & Resolution</p>

// // //           </div>

// // //           {/* WHY CHOOSE */}

// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             WHY CHOOSE OUR FIRM
// // //           </h2>

// // //           <ul className="space-y-4 text-lg mb-20 max-w-3xl">

// // //             <li>✓ Experienced Civil Litigation Lawyers</li>
// // //             <li>✓ Strategic courtroom representation</li>
// // //             <li>✓ Clear legal guidance</li>
// // //             <li>✓ Result-focused approach</li>

// // //           </ul>

// // //           {/* FAQ */}

// // //           <h2 className="text-4xl font-semibold text-center mb-10">
// // //             Frequently Asked Questions
// // //           </h2>

// // //           <div className="max-w-4xl mx-auto space-y-4">

// // //             {faqs.map((faq, index) => (

// // //               <div key={index} className="border border-[#C9A24D] rounded-lg">

// // //                 <button
// // //                   type="button"
// // //                   onClick={() => toggleFAQ(index)}
// // //                   className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg hover:bg-[#C9A24D]/10 transition"
// // //                 >

// // //                   {faq.question}

// // //                   <ChevronDown
// // //                     className={`transition-transform duration-300 ${
// // //                       activeIndex === index ? "rotate-180 text-[#C9A24D]" : ""
// // //                     }`}
// // //                   />

// // //                 </button>

// // //                 {activeIndex === index && (

// // //                   <div className="px-6 pb-6 text-gray-700 border-t border-[#C9A24D]/40 pt-4">
// // //                     {faq.answer}
// // //                   </div>

// // //                 )}

// // //               </div>

// // //             ))}

// // //           </div>

// // //         </section>

// // //         {/* CTA */}

// // //         <section className="relative py-32 text-center text-white overflow-hidden">

// // //           <Image
// // //             src="/discussion.png"
// // //             alt="Consultation"
// // //             fill
// // //             className="object-cover"
// // //           />

// // //           <div className="absolute inset-0 bg-black/80"></div>

// // //           <div className="relative max-w-4xl mx-auto px-6">

// // //             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// // //               Get reliable legal support from a dedicated Civil Lawyer in Bangalore.
// // //             </h2>

// // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">

// // //               <Link href="/legal-consultation-in-bangalore">
// // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // //                   Book Confidential Consultation
// // //                 </button>
// // //               </Link>

// // //               <Link href="tel:+919000000000">
// // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // //                   Call Now
// // //                 </button>
// // //               </Link>

// // //             </div>

// // //             <p className="text-gray-400 text-sm mt-8">
// // //               All matters handled with complete confidentiality.
// // //             </p>

// // //           </div>

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
// // import Link from "next/link";
// // import { useState } from "react";
// // import { ChevronDown } from "lucide-react";

// // export default function CivilLawyerBangalore() {

// //   const [activeIndex, setActiveIndex] = useState(null);

// //   const toggleFAQ = (index) => {
// //     setActiveIndex(activeIndex === index ? null : index);
// //   };

// //   const faqs = [
// //     {
// //       q: "What types of civil cases do you handle?",
// //       a: "We handle property disputes, contract matters, recovery suits, injunctions, partition cases, and commercial civil litigation."
// //     },
// //     {
// //       q: "How long does a civil case take?",
// //       a: "Timelines vary depending on case complexity, court workload, evidence review, and procedural stages."
// //     },
// //     {
// //       q: "Can civil disputes be settled outside court?",
// //       a: "Yes, many disputes can be resolved through negotiation, mediation, or structured settlement discussions."
// //     },
// //     {
// //       q: "What documents are required for filing a civil suit?",
// //       a: "Relevant contracts, title documents, correspondence, financial records, and supporting evidence are typically required."
// //     },
// //     {
// //       q: "Do you handle appeals in civil matters?",
// //       a: "Yes, our Civil Litigation Lawyer team represents clients in appeals and revisions before appellate courts, ensuring strong legal arguments and procedural compliance."
// //     },
// //     {
// //       q: "Can you assist with urgent injunction or stay orders?",
// //       a: "Yes, we handle urgent injunction and stay applications to protect your legal rights and prevent further loss or damage during ongoing disputes."
// //     }
// //   ];

// //   return (
// //     <>
// //       <Navbar />

// //       <main className="bg-white">

// //         {/* HERO SECTION */}

// //         <section className="relative bg-[#0B0F14] pt-32 pb-56 text-center">

// //           <div className="max-w-6xl mx-auto px-6">

// //             <h1 className="text-4xl md:text-6xl text-white font-semibold mb-6">
// //               Strategic Civil Litigation Lawyer in Bangalore for Property and Commercial Disputes
// //             </h1>

// //             <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
// //               Our firm provides dedicated representation as a Civil Lawyer in Bangalore, handling complex disputes with strategic planning and strong courtroom advocacy.
// //             </p>

// //             <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-6">
// //               Our experienced attorneys manage civil litigation matters with clarity and precision.
// //             </p>

// //             <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
// //               Our goal is to protect your legal rights, secure enforceable remedies, and resolve disputes efficiently through structured litigation strategy.
// //             </p>

// //             <p className="text-[#C9A24D] font-semibold mb-10">
// //               Response within 24 hours guaranteed.
// //             </p>

// //             <div className="flex flex-col sm:flex-row justify-center gap-4">

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

// //           </div>

// //           {/* HERO IMAGE */}

// //           <div className="absolute left-1/2 -translate-x-1/2 bottom-[-170px] w-full max-w-6xl px-6">

// //             <Image
// //               src="/CivilLitigation1.jpg"
// //               alt="Civil Lawyer in Bangalore"
// //               width={1200}
// //               height={600}
// //               className="rounded-xl shadow-2xl w-full h-[360px] object-cover"
// //               priority
// //             />

// //           </div>

// //         </section>

// //         <div className="h-48"></div>

// //         {/* CONTENT */}

// //         <section className="max-w-6xl mx-auto px-6 py-20">

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Strategic Civil Litigation Representation
// //           </h2>

// //           <p className="text-gray-700 text-lg max-w-3xl mb-10">
// //             Civil disputes require structured legal action and timely intervention.
// //             As a trusted Civil Litigation Lawyer team, we represent individuals and businesses in a wide range of civil matters before trial and appellate courts.
// //           </p>

// //           <p className="text-gray-700 text-lg max-w-3xl mb-12">
// //             Our attorneys focus on protecting your rights while pursuing effective and legally sound outcomes.
// //           </p>

// //           <h3 className="text-2xl font-semibold mb-6">
// //             OUR CIVIL LITIGATION SERVICES INCLUDE
// //           </h3>

// //           <ul className="grid md:grid-cols-2 gap-5 text-lg text-gray-700 mb-20 max-w-3xl">

// //             <li>▪ Property & Land Disputes</li>
// //             <li>▪ Contractual Disputes</li>
// //             <li>▪ Recovery Suits</li>
// //             <li>▪ Injunction & Stay Matters</li>
// //             <li>▪ Partition & Inheritance Cases</li>
// //             <li>▪ Commercial Civil Disputes</li>
// //             <li>▪ Appeals & Revisions</li>

// //           </ul>

// //           <Image
// //             src="/civilLitigation2.png"
// //             alt="Civil litigation services"
// //             width={900}
// //             height={450}
// //             className="rounded-xl shadow-lg mx-auto mb-20"
// //           />

// //           {/* APPROACH */}

// //           <h2 className="text-4xl font-semibold mb-6">
// //             OUR APPROACH / HOW WE WORK
// //           </h2>

// //           <div className="space-y-6 text-gray-700 text-lg max-w-3xl mb-20">

// //             <p>
// //               <strong>Step 1: Case Evaluation & Legal Consultation</strong><br/>
// //               Understanding the dispute and assessing legal remedies.
// //             </p>

// //             <p>
// //               <strong>Step 2: Documentation & Evidence Review</strong><br/>
// //               Careful analysis of contracts, records, and supporting documents.
// //               We clearly explain legal risks, possible outcomes, and available remedies before proceeding.
// //             </p>

// //             <p>
// //               <strong>Step 3: Filing & Court Proceedings</strong><br/>
// //               Preparation of pleadings and representation before court.
// //             </p>

// //             <p>
// //               <strong>Step 4: Trial Representation & Resolution</strong><br/>
// //               Strong advocacy aimed at efficient dispute resolution.
// //             </p>

// //           </div>

// //           {/* WHY CHOOSE */}

// //           <h2 className="text-4xl font-semibold mb-6">
// //             WHY CHOOSE OUR FIRM
// //           </h2>

// //           <ul className="space-y-4 text-lg mb-20 max-w-3xl">

// //             <li>✓ Experienced Civil Litigation Lawyers</li>
// //             <li>✓ Strong and strategic courtroom representation</li>
// //             <li>✓ Clear legal guidance at every stage</li>
// //             <li>✓ Practical, result-focused approach</li>

// //           </ul>

// //           {/* FAQ */}

// //           <h2 className="text-4xl text-center font-semibold mb-10">
// //             Frequently Asked Questions
// //           </h2>

// //           <div className="max-w-4xl mx-auto space-y-4">

// //             {faqs.map((faq, i) => (

// //               <div key={i} className="border border-[#C9A24D] rounded-lg">

// //                 <button
// //                   onClick={() => toggleFAQ(i)}
// //                   className="flex justify-between items-center w-full px-6 py-5 font-semibold text-lg"
// //                 >
// //                   {faq.q}

// //                   <ChevronDown
// //                     className={`transition-transform duration-300 ${
// //                       activeIndex === i ? "rotate-180 text-[#C9A24D]" : ""
// //                     }`}
// //                   />

// //                 </button>

// //                 {activeIndex === i && (

// //                   <div className="px-6 pb-6 text-gray-700 border-t border-[#C9A24D]/40 pt-4">
// //                     {faq.a}
// //                   </div>

// //                 )}

// //               </div>

// //             ))}

// //           </div>

// //         </section>

// //         {/* CTA */}

// //         <section className="relative py-28 text-white text-center">

// //           <Image
// //             src="/discussion.png"
// //             alt="Legal consultation"
// //             fill
// //             className="object-cover"
// //           />

// //           <div className="absolute inset-0 bg-black/80"></div>

// //           <div className="relative max-w-4xl mx-auto px-6">

// //             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// //               Get reliable legal support from a dedicated Civil Lawyer in Bangalore and protect your rights confidently.
// //             </h2>

// //             <div className="flex flex-col sm:flex-row justify-center gap-4">

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

// //             <p className="text-gray-400 mt-8 text-sm">
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

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// export default function CivilLawyerBangalore() {

// const [activeIndex,setActiveIndex]=useState(null);

// const toggleFAQ=(index)=>{
// setActiveIndex(activeIndex===index?null:index);
// };

// const faqs=[
// {
// q:"What types of civil cases do you handle?",
// a:"We handle property disputes, contract matters, recovery suits, injunctions, partition cases, and commercial civil litigation."
// },
// {
// q:"How long does a civil case take?",
// a:"Timelines vary depending on case complexity, court workload, evidence review, and procedural stages."
// },
// {
// q:"Can civil disputes be settled outside court?",
// a:"Yes, many disputes can be resolved through negotiation, mediation, or structured settlement discussions."
// },
// {
// q:"What documents are required for filing a civil suit?",
// a:"Relevant contracts, title documents, correspondence, financial records, and supporting evidence are typically required."
// },
// {
// q:"Do you handle appeals in civil matters?",
// a:"Yes, our Civil Litigation Lawyer team represents clients in appeals and revisions before appellate courts, ensuring strong legal arguments and procedural compliance."
// },
// {
// q:"Can you assist with urgent injunction or stay orders?",
// a:"Yes, we handle urgent injunction and stay applications to protect your legal rights and prevent further loss or damage during ongoing disputes."
// }
// ];

// return(

// <>
// <Navbar/>

// <main className="bg-white">

// {/* HERO */}

// <section className="relative bg-[#0B0F14] pt-8 pb-56 text-center">

// <div className="max-w-6xl mx-auto px-6 relative z-10">

// <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-semibold mb-6 leading-tight">
// Strategic Civil Litigation Lawyer in Bangalore for Property and Commercial Disputes
// </h1>

// <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
// Our firm provides dedicated representation as a Civil Lawyer in Bangalore, handling complex disputes with strategic planning and strong courtroom advocacy.
// </p>

// <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
// Our experienced attorneys manage civil litigation matters with clarity and precision.
// </p>

// <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-6">
// Our goal is to protect your legal rights, secure enforceable remedies, and resolve disputes efficiently through structured litigation strategy.
// </p>

// <p className="text-[#C9A24D] font-semibold mb-10">
// Response within 24 hours guaranteed.
// </p>

// <div className="flex flex-col sm:flex-row justify-center gap-4">

// <Link
// href="/legal-consultation-in-bangalore"
// className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition text-center"
// >
// Book Confidential Consultation
// </Link>

// <a
// href="tel:+919000000000"
// className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition text-center"
// >
// Call Now
// </a>

// </div>

// </div>

// {/* HERO IMAGE */}

// <div className="absolute left-1/2 -translate-x-1/2 bottom-[-170px] w-full max-w-6xl px-6 pointer-events-none">

// <Image
// src="/CivilLitigation1.jpg"
// alt="Civil Lawyer in Bangalore"
// width={1200}
// height={600}
// className="rounded-xl shadow-2xl w-full h-[260px] md:h-[360px] object-cover"
// priority
// />

// </div>

// </section>

// <div className="h-48"></div>

// {/* CONTENT */}

// <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">

// <h2 className="text-3xl md:text-4xl font-semibold mb-6">
// Strategic Civil Litigation Representation
// </h2>

// <p className="text-gray-700 text-lg max-w-3xl mb-6">
// Civil disputes require structured legal action and timely intervention.
// As a trusted Civil Litigation Lawyer team, we represent individuals and businesses in a wide range of civil matters before trial and appellate courts.
// </p>

// <p className="text-gray-700 text-lg max-w-3xl mb-12">
// Our attorneys focus on protecting your rights while pursuing effective and legally sound outcomes.
// </p>

// <h3 className="text-2xl font-semibold mb-6">
// OUR CIVIL LITIGATION SERVICES INCLUDE
// </h3>

// <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700 mb-20 max-w-3xl">

// <li>▪ Property & Land Disputes</li>
// <li>▪ Contractual Disputes</li>
// <li>▪ Recovery Suits</li>
// <li>▪ Injunction & Stay Matters</li>
// <li>▪ Partition & Inheritance Cases</li>
// <li>▪ Commercial Civil Disputes</li>
// <li>▪ Appeals & Revisions</li>

// </ul>

// <Image
// src="/civilLitigation2.png"
// alt="Civil litigation services"
// width={900}
// height={450}
// className="rounded-xl shadow-lg mx-auto mb-20 w-full max-w-3xl"
// />

// {/* APPROACH */}

// <h2 className="text-3xl md:text-4xl font-semibold mb-6">
// OUR APPROACH / HOW WE WORK
// </h2>

// <div className="space-y-5 text-gray-700 text-lg max-w-3xl mb-20">

// <p>
// <strong>Step 1: Case Evaluation & Legal Consultation</strong><br/>
// Understanding the dispute and assessing legal remedies.
// </p>

// <p>
// <strong>Step 2: Documentation & Evidence Review</strong><br/>
// Careful analysis of contracts, records, and supporting documents.
// We clearly explain legal risks, possible outcomes, and available remedies before proceeding.
// </p>

// <p>
// <strong>Step 3: Filing & Court Proceedings</strong><br/>
// Preparation of pleadings and representation before court.
// </p>

// <p>
// <strong>Step 4: Trial Representation & Resolution</strong><br/>
// Strong advocacy aimed at efficient dispute resolution.
// </p>

// </div>

// {/* WHY CHOOSE */}

// <h2 className="text-3xl md:text-4xl font-semibold mb-6">
// WHY CHOOSE OUR FIRM
// </h2>

// <ul className="space-y-4 text-lg mb-20 max-w-3xl">

// <li>✓ Experienced Civil Litigation Lawyers</li>
// <li>✓ Strong and strategic courtroom representation</li>
// <li>✓ Clear legal guidance at every stage</li>
// <li>✓ Practical, result-focused approach</li>

// </ul>

// {/* FAQ */}

// <h2 className="text-3xl md:text-4xl text-center font-semibold mb-10">
// Frequently Asked Questions
// </h2>

// <div className="max-w-4xl mx-auto space-y-4">

// {faqs.map((faq,i)=>(

// <div key={i} className="border border-[#C9A24D] rounded-lg">

// <button
// onClick={()=>toggleFAQ(i)}
// className="flex justify-between items-center w-full px-6 py-5 font-semibold text-lg text-left"
// >

// {faq.q}

// <ChevronDown
// className={`transition-transform duration-300 ${
// activeIndex===i?"rotate-180 text-[#C9A24D]":""
// }`}
// />

// </button>

// {activeIndex===i&&(

// <div className="px-6 pb-6 text-gray-700 border-t border-[#C9A24D]/40 pt-4">
// {faq.a}
// </div>

// )}

// </div>

// ))}

// </div>

// </section>

// {/* CTA */}

// <section className="relative py-24 text-white text-center">

// <Image
// src="/discussion.png"
// alt="Legal consultation"
// fill
// className="object-cover"
// />

// <div className="absolute inset-0 bg-black/80"></div>

// <div className="relative max-w-4xl mx-auto px-6">

// <h2 className="text-3xl md:text-5xl font-semibold mb-8">
// Get reliable legal support from a dedicated Civil Lawyer in Bangalore and protect your rights confidently.
// </h2>

// <div className="flex flex-col sm:flex-row justify-center gap-4">

// <Link
// href="/legal-consultation-in-bangalore"
// className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition text-center"
// >
// Book Confidential Consultation
// </Link>

// <a
// href="tel:+919000000000"
// className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition text-center"
// >
// Call Now
// </a>

// </div>

// <p className="text-gray-400 mt-8 text-sm">
// All matters handled with complete confidentiality and legal discretion.
// </p>

// </div>

// </section>

// </main>

// <Footer/>

// </>

// );
// }



"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function CivilLawyerBangalore() {

const [activeIndex,setActiveIndex]=useState(null);

const toggleFAQ=(index)=>{
setActiveIndex(activeIndex===index?null:index);
};

const faqs=[
{
q:"What types of civil cases do you handle?",
a:"We handle property disputes, contract matters, recovery suits, injunctions, partition cases, and commercial civil litigation."
},
{
q:"How long does a civil case take?",
a:"Timelines vary depending on case complexity, court workload, evidence review, and procedural stages."
},
{
q:"Can civil disputes be settled outside court?",
a:"Yes, many disputes can be resolved through negotiation, mediation, or structured settlement discussions."
},
{
q:"What documents are required for filing a civil suit?",
a:"Relevant contracts, title documents, correspondence, financial records, and supporting evidence are typically required."
},
{
q:"Do you handle appeals in civil matters?",
a:"Yes, our Civil Litigation Lawyer team represents clients in appeals and revisions before appellate courts, ensuring strong legal arguments and procedural compliance."
},
{
q:"Can you assist with urgent injunction or stay orders?",
a:"Yes, we handle urgent injunction and stay applications to protect your legal rights and prevent further loss or damage during ongoing disputes."
}
];

return(

<>
<Navbar/>

<main className="bg-white">

{/* HERO */}

<section className="relative bg-[#0B0F14] pt-8 pb-56 text-center">

<motion.div
variants={stagger}
initial="hidden"
animate="show"
className="max-w-6xl mx-auto px-6 relative z-10"
>

<motion.h1
variants={fadeUp}
className="text-3xl md:text-5xl lg:text-6xl text-white font-semibold mb-6 leading-tight"
>
Strategic Civil Litigation Lawyer in Bangalore for Property and Commercial Disputes
</motion.h1>

<motion.p variants={fadeUp} className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
Our firm provides dedicated representation as a Civil Lawyer in Bangalore, handling complex disputes with strategic planning and strong courtroom advocacy.
</motion.p>

<motion.p variants={fadeUp} className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto mb-6">
Our experienced attorneys manage civil litigation matters with clarity and precision.
</motion.p>

<motion.p variants={fadeUp} className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto mb-6">
Our goal is to protect your legal rights, secure enforceable remedies, and resolve disputes efficiently through structured litigation strategy.
</motion.p>

<motion.p variants={fadeUp} className="text-[#C9A24D] font-semibold mb-10">
Response within 24 hours guaranteed.
</motion.p>

<motion.div
variants={fadeUp}
className="flex flex-col sm:flex-row justify-center gap-4"
>

<Link
href="/legal-consultation-in-bangalore"
className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition text-center"
>
Book Confidential Consultation
</Link>

<a
href="tel:+919000000000"
className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition text-center"
>
Call Now
</a>

</motion.div>

</motion.div>

{/* HERO IMAGE */}

<div className="absolute left-1/2 -translate-x-1/2 bottom-[-170px] w-full max-w-6xl px-6 pointer-events-none">

<Image
src="/CivilLitigation1.jpg"
alt="Civil Lawyer in Bangalore"
width={1200}
height={600}
className="rounded-xl shadow-2xl w-full h-[260px] md:h-[360px] object-cover"
priority
/>

</div>

</section>

<div className="h-48"></div>

{/* CONTENT */}

<section className="max-w-6xl mx-auto px-6 py-16 md:py-20">

<motion.h2
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
className="text-3xl md:text-4xl font-semibold mb-6"
>
Strategic Civil Litigation Representation
</motion.h2>

<p className="text-gray-700 text-lg max-w-3xl mb-6">
Civil disputes require structured legal action and timely intervention.
As a trusted Civil Litigation Lawyer team, we represent individuals and businesses in a wide range of civil matters before trial and appellate courts.
</p>

<p className="text-gray-700 text-lg max-w-3xl mb-12">
Our attorneys focus on protecting your rights while pursuing effective and legally sound outcomes.
</p>

<h3 className="text-2xl font-semibold mb-6">
OUR CIVIL LITIGATION SERVICES INCLUDE
</h3>

<ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700 mb-20 max-w-3xl">

<li>▪ Property & Land Disputes</li>
<li>▪ Contractual Disputes</li>
<li>▪ Recovery Suits</li>
<li>▪ Injunction & Stay Matters</li>
<li>▪ Partition & Inheritance Cases</li>
<li>▪ Commercial Civil Disputes</li>
<li>▪ Appeals & Revisions</li>

</ul>

<Image
src="/civilLitigation2.png"
alt="Civil litigation services"
width={900}
height={450}
className="rounded-xl shadow-lg mx-auto mb-20 w-full max-w-3xl"
/>

{/* APPROACH */}

<h2 className="text-3xl md:text-4xl font-semibold mb-6">
OUR APPROACH / HOW WE WORK
</h2>

<div className="space-y-5 text-gray-700 text-lg max-w-3xl mb-20">

<p>
<strong>Step 1: Case Evaluation & Legal Consultation</strong><br/>
Understanding the dispute and assessing legal remedies.
</p>

<p>
<strong>Step 2: Documentation & Evidence Review</strong><br/>
Careful analysis of contracts, records, and supporting documents.
We clearly explain legal risks, possible outcomes, and available remedies before proceeding.
</p>

<p>
<strong>Step 3: Filing & Court Proceedings</strong><br/>
Preparation of pleadings and representation before court.
</p>

<p>
<strong>Step 4: Trial Representation & Resolution</strong><br/>
Strong advocacy aimed at efficient dispute resolution.
</p>

</div>

{/* WHY CHOOSE */}

<h2 className="text-3xl md:text-4xl font-semibold mb-6">
WHY CHOOSE OUR FIRM
</h2>

<ul className="space-y-4 text-lg mb-20 max-w-3xl">

<li>✓ Experienced Civil Litigation Lawyers</li>
<li>✓ Strong and strategic courtroom representation</li>
<li>✓ Clear legal guidance at every stage</li>
<li>✓ Practical, result-focused approach</li>

</ul>

{/* FAQ */}

<h2 className="text-3xl md:text-4xl text-center font-semibold mb-10">
Frequently Asked Questions
</h2>

<div className="max-w-4xl mx-auto space-y-4">

{faqs.map((faq,i)=>(

<div key={i} className="border border-[#C9A24D] rounded-lg">

<button
onClick={()=>toggleFAQ(i)}
className="flex justify-between items-center w-full px-6 py-5 font-semibold text-lg text-left"
>

{faq.q}

<ChevronDown
className={`transition-transform duration-300 ${
activeIndex===i?"rotate-180 text-[#C9A24D]":""
}`}
/>

</button>

{activeIndex===i && (

<motion.div
initial={{height:0,opacity:0}}
animate={{height:"auto",opacity:1}}
transition={{duration:0.3}}
className="px-6 pb-6 text-gray-700 border-t border-[#C9A24D]/40 pt-4"
>

{faq.a}

</motion.div>

)}

</div>

))}

</div>

</section>

{/* CTA */}

<section className="relative py-24 text-white text-center">

<Image
src="/discussion.png"
alt="Legal consultation"
fill
className="object-cover"
/>

<div className="absolute inset-0 bg-black/80"></div>

<div className="relative max-w-4xl mx-auto px-6">

<h2 className="text-3xl md:text-5xl font-semibold mb-8">
Get reliable legal support from a dedicated Civil Lawyer in Bangalore and protect your rights confidently.
</h2>

<div className="flex flex-col sm:flex-row justify-center gap-4">

<Link
href="/legal-consultation-in-bangalore"
className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition text-center"
>
Book Confidential Consultation
</Link>

<a
href="tel:+919000000000"
className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition text-center"
>
Call Now
</a>

</div>

<p className="text-gray-400 mt-8 text-sm">
All matters handled with complete confidentiality and legal discretion.
</p>

</div>

</section>

</main>

<Footer/>

</>

);
}