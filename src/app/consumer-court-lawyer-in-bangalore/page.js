// // "use client";

// // import Navbar from "../../components/Navbar";
// // import Footer from "../../components/Footer";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import Link from "next/link";

// // export default function ConsumerProtectionLawPage() {

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
// //                 Consumer Protection Law
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
// //               Consumer Protection Law
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
// //               Protecting consumers against unfair trade practices, defective
// //               products, and service deficiencies through effective legal action
// //               and professional representation.
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
// //                 src="/consumer-law.jpg"
// //                 alt="Consumer Protection Law"
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
// //               Consumer protection law ensures that consumers are safeguarded
// //               against unfair business practices, defective products, and
// //               deficient services. We provide comprehensive legal assistance
// //               to help consumers assert their rights and seek compensation.
// //             </motion.p>



// //             {/* ================= SERVICES ================= */}

// //             <motion.h3
// //               variants={fadeUp}
// //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// //             >
// //               Our Consumer Protection Services
// //             </motion.h3>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
// //             >
// //               We provide complete legal assistance to individuals and businesses
// //               involved in consumer disputes.
// //             </motion.p>



// //             <motion.ul
// //               variants={fadeUp}
// //               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
// //             >

// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Consumer Complaint Filing:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Filing complaints before District, State, and National Consumer Commissions.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Defective Product Claims:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Legal action against manufacturers and sellers for defective goods.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Service Deficiency Cases:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Representation in disputes involving poor or negligent services.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Refund & Compensation Claims:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Assisting clients in recovering refunds and compensation.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Real Estate Consumer Disputes:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Handling disputes with builders and real estate developers.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Legal Representation:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Professional representation before consumer courts.
// //                 </p>
// //               </li>

// //             </motion.ul>



// //             {/* IMAGE */}

// //             <motion.div variants={fadeUp} className="mb-16">

// //               <Image
// //                 src="/consumer.png"
// //                 alt="Consumer Protection Consultation"
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
// //               Why Choose Us for Consumer Protection Cases
// //             </motion.h3>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// //             >
// //               Our firm provides strategic legal solutions, strong representation,
// //               and efficient case handling to ensure consumer rights are protected
// //               and fair compensation is achieved.
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
// //               alt="Consumer Legal Consultation"
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
// //               Consumer Legal Support
// //             </p>


// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Protect Your Consumer Rights Today
// //             </h2>


// //             <p className="text-gray-300 text-base md:text-lg mb-10">
// //               Get trusted legal assistance for consumer disputes and claims.
// //             </p>

// //             <Link href="/contact">
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
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useState } from "react";

// export default function ConsumerCourtLawyerPage() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" }
//     }
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
//             className="relative z-30 max-w-7xl mx-auto px-6 text-center"
//           >

//             <motion.h1
//               variants={fadeUp}
//               className="text-4xl md:text-6xl font-semibold text-white mb-6"
//             >
//               Experienced Consumer Court Lawyer in Bangalore for Consumer Complaints & Compensation Claims
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="text-gray-300 max-w-3xl mx-auto mb-6"
//             >
//               Our firm provides dedicated representation as a Consumer Court Lawyer in Bangalore, assisting individuals and businesses in resolving consumer disputes efficiently. Our experienced attorneys handle complaints related to defective products, deficiency of service, and unfair trade practices with strong legal strategy.
//             </motion.p>

//             <motion.p
//               variants={fadeUp}
//               className="text-gray-300 max-w-3xl mx-auto mb-6"
//             >
//               Our goal is to secure fair compensation, enforce consumer rights, and ensure timely legal action before the appropriate Consumer Commission.
//             </motion.p>

//             <motion.p
//               variants={fadeUp}
//               className="text-[#C9A24D] font-semibold mb-8"
//             >
//               Response within 24 hours guaranteed.
//             </motion.p>

//             <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap">

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

//             </motion.div>

//           </motion.div>

//           {/* Floating Image */}
//           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-0 pointer-events-none">
//             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
//               <Image
//                 src="/consumer-law.jpg"
//                 alt="Consumer Court Lawyer in Bangalore"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[400px] md:h-[500px] object-cover"
//                 priority
//               />
//             </div>
//           </div>

//         </section>

//         <div className="h-40 md:h-60"></div>

//         {/* ================= CONTENT ================= */}

//         <section className="max-w-6xl mx-auto px-6 py-16 mt-24">

//           <h2 className="text-4xl font-semibold mb-6">
//             Legal Support for Consumer Protection & Disputes
//           </h2>

//           <p className="text-gray-600 mb-10">
//             Consumer rights are protected under law, and timely action is crucial. As an experienced Consumer Protection Lawyer and Consumer Forum Advocate, we guide clients through filing complaints and seeking compensation before appropriate consumer commissions.
//             Whether you are facing service deficiencies, product issues, e-commerce fraud, or contractual disputes, our Consumer Dispute Lawyer team ensures structured legal support and effective representation.
//           </p>

//           <h3 className="text-2xl font-semibold mb-6">
//             OUR CONSUMER LAW SERVICES INCLUDE
//           </h3>

//           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
//             <li>▪ Filing Consumer Complaints</li>
//             <li>▪ Deficiency of Service Cases</li>
//             <li>▪ Product Liability Claims</li>
//             <li>▪ E-commerce & Online Fraud Complaints</li>
//             <li>▪ Builder & Real Estate Consumer Disputes</li>
//             <li>▪ Appeals Before Consumer Commissions</li>
//             <li>▪ Compensation & Refund Claims</li>
//           </ul>

//           <Image
//             src="/consumer.png"
//             alt="Consumer Court Consultation"
//             width={1200}
//             height={600}
//             className="w-full rounded-xl shadow-lg mb-16"
//           />

//           <h3 className="text-3xl font-semibold mb-6">
//             OUR APPROACH / HOW WE WORK
//           </h3>

//           <div className="space-y-6 text-gray-700 mb-16">
//             <p><strong>Step 1:</strong> Case Assessment & Documentation Review – Evaluation of purchase records, agreements, invoices, and supporting evidence.</p>
//             <p><strong>Step 2:</strong> Legal Notice & Complaint Drafting – Preparation of formal complaint and compliance with statutory requirements. We clearly explain legal options, possible compensation, and procedural steps before filing.</p>
//             <p><strong>Step 3:</strong> Filing Before Consumer Forum – Submission before District, State, or National Consumer Commission.</p>
//             <p><strong>Step 4:</strong> Hearing & Resolution – Representation during hearings and pursuit of fair compensation and corrective relief.</p>
//           </div>

//           <h3 className="text-3xl font-semibold mb-6">
//             WHY CHOOSE OUR FIRM
//           </h3>

//           <ul className="space-y-3 text-gray-700 mb-16">
//             <li>✓ Experienced Consumer Protection Lawyers</li>
//             <li>✓ Skilled Consumer Complaint Lawyer representation</li>
//             <li>✓ Strong advocacy before consumer forums</li>
//             <li>✓ Strategic and time-sensitive case handling</li>
//             <li>✓ Transparent and client-focused legal approach</li>
//           </ul>

//         </section>

//         {/* ================= FAQ ================= */}

//         <section className="pt-8 pb-20 -mt-10 bg-[#F4F4F4]">
//           <div className="max-w-6xl mx-auto px-6">

//             <h3 className="text-4xl font-bold mb-12">
//               Frequently Asked Questions
//             </h3>

//             <div className="space-y-6">

//               {[
//                 {
//                   q: "Q1: What cases can be filed in Consumer Court?",
//                   a: "Cases involving defective goods, service deficiencies, unfair trade practices, misleading advertisements, and e-commerce disputes."
//                 },
//                 {
//                   q: "Q2: How long does a consumer complaint take?",
//                   a: "Timelines vary depending on case complexity, documentation, and forum schedule."
//                 },
//                 {
//                   q: "Q3: Can I claim compensation for mental harassment?",
//                   a: "Yes, compensation can be sought for financial loss and mental agony, subject to evaluation by the Consumer Commission."
//                 },
//                 {
//                   q: "Q4: Can businesses also file consumer cases?",
//                   a: "In certain situations, small businesses may qualify as consumers under applicable law."
//                 },
//                 {
//                   q: "Q5: Is it mandatory to send a legal notice before filing a consumer complaint?",
//                   a: "While not always mandatory, sending a legal notice is advisable as it gives the opposite party an opportunity to resolve the dispute and strengthens your case."
//                 },
//                 {
//                   q: "Q6: Can consumer court orders be appealed?",
//                   a: "Yes, orders passed by the District Consumer Commission can be appealed before the State Commission, and further appeals can be made before the National Commission within statutory timelines."
//                 }
//               ].map((faq, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-lg p-6 shadow-sm cursor-pointer border border-gray-200 transition"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <h4 className="text-xl font-semibold text-black">
//                       {faq.q}
//                     </h4>
//                     <span className="text-2xl font-bold text-[#C9A24D]">
//                       {openIndex === index ? "−" : "+"}
//                     </span>
//                   </div>

//                   {openIndex === index && (
//                     <p className="mt-4 text-gray-700 leading-relaxed">
//                       {faq.a}
//                     </p>
//                   )}
//                 </div>
//               ))}

//             </div>

//           </div>
//         </section>


//         {/* ================= CTA ================= */}

//         <section className="relative py-28 mt-20 overflow-hidden">
//           <div className="absolute inset-0">
//             <Image
//               src="/discussion.png"
//               alt="Consumer Court Legal Help"
//               fill
//               className="object-cover"
//             />
//             <div className="absolute inset-0 bg-black/70"></div>
//           </div>

//           <div className="relative max-w-5xl mx-auto px-6 text-center">
//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Get Immediate Legal Help from a Consumer Court Lawyer in Bangalore
//             </h2>

//             <p className="text-gray-300 mb-10">
//               Consult our experienced consumer protection attorneys today.
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

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const services = [
  "Filing Consumer Complaints",
  "Deficiency of Service Cases",
  "Product Liability Claims",
  "E-commerce & Online Fraud Complaints",
  "Builder & Real Estate Consumer Disputes",
  "Appeals Before Consumer Commissions",
  "Compensation & Refund Claims",
];

const steps = [
  {
    number: "01",
    title: "Case Assessment & Documentation Review",
    body: "Evaluation of purchase records, agreements, invoices, and supporting evidence.",
  },
  {
    number: "02",
    title: "Legal Notice & Complaint Drafting",
    body: "Preparation of formal complaint and compliance with statutory requirements. We clearly explain legal options, possible compensation, and procedural steps before filing.",
  },
  {
    number: "03",
    title: "Filing Before Consumer Forum",
    body: "Submission of complaint before the appropriate District, State, or National Consumer Commission.",
  },
  {
    number: "04",
    title: "Hearing & Resolution",
    body: "Representation during hearings and pursuit of fair compensation and corrective relief.",
  },
];

const whyChoose = [
  "Experienced Consumer Protection Lawyers",
  "Skilled Consumer Complaint Lawyer representation",
  "Strong advocacy before consumer forums",
  "Strategic and time-sensitive case handling",
  "Transparent and client-focused legal approach",
];

const faqs = [
  {
    q: "What cases can be filed in Consumer Court?",
    a: "Cases involving defective goods, service deficiencies, unfair trade practices, misleading advertisements, and e-commerce disputes.",
  },
  {
    q: "How long does a consumer complaint take?",
    a: "Timelines vary depending on case complexity, documentation, and forum schedule.",
  },
  {
    q: "Can I claim compensation for mental harassment?",
    a: "Yes, compensation can be sought for financial loss and mental agony, subject to evaluation by the Consumer Commission.",
  },
  {
    q: "Can businesses also file consumer cases?",
    a: "In certain situations, small businesses may qualify as consumers under applicable law.",
  },
  {
    q: "Is it mandatory to send a legal notice before filing a consumer complaint?",
    a: "While not always mandatory, sending a legal notice is advisable as it gives the opposite party an opportunity to resolve the dispute and strengthens your case.",
  },
  {
    q: "Can consumer court orders be appealed?",
    a: "Yes, orders passed by the District Consumer Commission can be appealed before the State Commission, and further appeals can be made before the National Commission within statutory timelines.",
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

export default function ConsumerCourtLawyerPage() {
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
          {/* {[
            "top-8 left-8 border-t-2 border-l-2",
            "top-8 right-8 border-t-2 border-r-2",
          ].map((cls, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              className={`absolute w-12 h-12 border-[#C9A24D] z-10 ${cls}`}
            />
          ))} */}

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
              Experienced Consumer Court Lawyer in Bangalore{" "}
              <span className="text-[#C9A24D]">for Consumer Complaints &amp; Compensation Claims</span>
            </motion.h1>

            {/* Intro para 1 */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Our firm provides dedicated representation as a Consumer Court Lawyer in Bangalore,
              assisting individuals and businesses in resolving consumer disputes efficiently. Our
              experienced attorneys handle complaints related to defective products, deficiency of
              service, and unfair trade practices with strong legal strategy.
            </motion.p>

            {/* Intro para 2 */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              Our goal is to secure fair compensation, enforce consumer rights, and ensure timely
              legal action before the appropriate Consumer Commission.
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
                src="/consumer-law.jpg"
                alt="Consumer Court Lawyer in Bangalore"
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
            {/* <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
              className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
            /> */}
          </motion.div>
        </section>

        {/* ═════════════════ LEGAL SUPPORT FOR CONSUMER PROTECTION ════════════════ */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          {/* animated right vertical rule */}
          <motion.div
            initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
          />

          <div className="max-w-6xl mx-auto">
            <SectionHeading>Legal Support for Consumer Protection &amp; Disputes</SectionHeading>

            {/* Both full paragraphs from brief */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-lg leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                Consumer rights are protected under law, and timely action is crucial. As an
                experienced Consumer Protection Lawyer and Consumer Forum Advocate, we guide clients
                through filing complaints and seeking compensation before appropriate consumer
                commissions.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.5}>
                Whether you are facing service deficiencies, product issues, e-commerce fraud, or
                contractual disputes, our Consumer Dispute Lawyer team ensures structured legal
                support and effective representation.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ OUR CONSUMER LAW SERVICES ══════════════════════ */}
        <section className="py-28 px-6 bg-[#f8f6f1] relative">
          <GoldDivider />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <div className="max-w-6xl mx-auto">
            {/* H3 sub-heading from brief */}
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
            >
              Our Consumer Law Services Include
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
                src="/consumer.png"
                alt="Consumer Court Consultation"
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
  <section className="relative py-24  overflow-hidden">

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
                                     Protect your consumer rights with trusted legal representation in Bangalore.

            </h2>

            

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