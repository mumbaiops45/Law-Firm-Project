// // import Link from "next/link";
// // import Image from "next/image";

// // export default function EmploymentLawyerPage() {
// //   return (
// //     <div className="pt-32 bg-white">

// //       {/* ================= HERO SECTION ================= */}

// //       <section className="relative bg-black text-white py-20 px-6">
// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

// //           <div>
// //             <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
// //               Experienced Employment Lawyer in Bangalore for Workplace & Labour Disputes
// //             </h1>

// //             <p className="text-gray-300 leading-relaxed mb-6">
// //               Our firm provides strategic representation as an Employment Lawyer in Bangalore,
// //               assisting employers and employees in resolving workplace disputes and ensuring
// //               regulatory compliance.
// //             </p>

// //             <p className="text-gray-300 leading-relaxed mb-6">
// //               We focus on protecting employee rights while safeguarding business interests
// //               through preventive compliance and strong dispute resolution strategy.
// //             </p>

// //             <p className="text-[#C9A24D] font-medium mb-8">
// //               Response within 24 hours guaranteed.
// //             </p>

// //             <div className="flex flex-wrap gap-4">
// //               <Link
// //                 href="/legal-consultation-in-bangalore"
// //                 className="bg-[#C9A24D] text-black px-6 py-3 font-semibold hover:bg-[#b8963e] transition"
// //               >
// //                 Book Confidential Consultation
// //               </Link>

// //               <a
// //                 href="tel:+919000000000"
// //                 className="border border-[#C9A24D] px-6 py-3 hover:bg-[#C9A24D] hover:text-black transition"
// //               >
// //                 Call Now
// //               </a>
// //             </div>
// //           </div>

// //           <div>
// //             <Image
// //               src="/employment-law.jpg"
// //               alt="Employment Lawyer in Bangalore"
// //               width={600}
// //               height={500}
// //               className="rounded-lg shadow-xl"
// //             />
// //           </div>

// //         </div>
// //       </section>


// //       {/* ================= SERVICES SECTION ================= */}

// //       <section className="py-20 px-6">
// //         <div className="max-w-6xl mx-auto">

// //           <h2 className="text-3xl font-semibold mb-10 text-center">
// //             Comprehensive Employment & Labour Law Services
// //           </h2>

// //           <div className="grid md:grid-cols-2 gap-8 text-gray-700">

// //             {[
// //               "Employment Contract Drafting & HR Policy Advisory",
// //               "Wrongful Termination & Disciplinary Proceedings",
// //               "Labour Court & Industrial Tribunal Representation",
// //               "Workplace Harassment & POSH Compliance",
// //               "Wage, Bonus & Salary Disputes",
// //               "Retrenchment & Layoff Advisory",
// //               "Employee Grievance & Settlement Negotiation",
// //               "Labour Law Compliance & Risk Assessment",
// //             ].map((service, i) => (
// //               <div key={i} className="border p-6 rounded-md hover:shadow-lg transition">
// //                 {service}
// //               </div>
// //             ))}

// //           </div>

// //         </div>
// //       </section>


// //       {/* ================= REPRESENTATION SECTION ================= */}

// //       <section className="bg-gray-50 py-20 px-6">
// //         <div className="max-w-6xl mx-auto space-y-10">

// //           <div>
// //             <h3 className="text-2xl font-semibold mb-4">
// //               Labour Court & Industrial Representation
// //             </h3>
// //             <p className="text-gray-700 leading-relaxed">
// //               As a trusted Labour Court Lawyer in Bangalore, we represent clients
// //               in employment disputes involving termination, unpaid wages, service
// //               conditions, and industrial conflicts.
// //             </p>
// //           </div>

// //           <div>
// //             <h3 className="text-2xl font-semibold mb-4">
// //               Wrongful Termination & Employee Rights Protection
// //             </h3>
// //             <p className="text-gray-700 leading-relaxed">
// //               If you are facing unlawful dismissal, we help challenge illegal termination
// //               and pursue appropriate remedies under applicable labour laws.
// //             </p>
// //           </div>

// //           <div>
// //             <h3 className="text-2xl font-semibold mb-4">
// //               HR Compliance & Corporate Advisory
// //             </h3>
// //             <p className="text-gray-700 leading-relaxed">
// //               We assist companies in drafting compliant employment agreements,
// //               conducting legal audits, and ensuring adherence to statutory labour regulations.
// //             </p>
// //           </div>

// //         </div>
// //       </section>


// //       {/* ================= FAQ SECTION ================= */}

// //       <section className="py-20 px-6">
// //         <div className="max-w-4xl mx-auto">

// //           <h2 className="text-3xl font-semibold mb-10 text-center">
// //             Frequently Asked Questions
// //           </h2>

// //           <div className="space-y-6">

// //             {[
// //               {
// //                 q: "What types of employment disputes do you handle?",
// //                 a: "We handle wrongful termination, wage disputes, workplace harassment, disciplinary proceedings, and labour court litigation matters.",
// //               },
// //               {
// //                 q: "Can an employee challenge unlawful termination?",
// //                 a: "Yes, employees can challenge illegal dismissal before labour authorities.",
// //               },
// //               {
// //                 q: "Do you represent clients in labour court proceedings?",
// //                 a: "Yes, we represent both employers and employees in industrial disputes.",
// //               },
// //               {
// //                 q: "Do companies need HR compliance advisory?",
// //                 a: "Yes, structured compliance reduces penalties and litigation risks.",
// //               },
// //             ].map((item, i) => (
// //               <div key={i} className="border p-6 rounded-md">
// //                 <h4 className="font-semibold mb-2">{item.q}</h4>
// //                 <p className="text-gray-600">{item.a}</p>
// //               </div>
// //             ))}

// //           </div>

// //         </div>
// //       </section>


// //       {/* ================= FINAL CTA ================= */}

// //       <section className="bg-black text-white py-16 text-center px-6">
// //         <h2 className="text-3xl font-semibold mb-6">
// //           Get Trusted Legal Help for Employment & Labour Matters
// //         </h2>

// //         <div className="flex justify-center gap-6 flex-wrap">

// //           <Link
// //             href="/legal-consultation-in-bangalore"
// //             className="bg-[#C9A24D] text-black px-8 py-3 font-semibold hover:bg-[#b8963e] transition"
// //           >
// //             Book Confidential Consultation
// //           </Link>

// //           <Link
// //             href="/contact"
// //             className="border border-[#C9A24D] px-8 py-3 hover:bg-[#C9A24D] hover:text-black transition"
// //           >
// //             Request Call Back
// //           </Link>

// //         </div>

// //         <p className="mt-6 text-gray-400 text-sm">
// //           All matters handled with strict confidentiality and professional discretion.
// //         </p>
// //       </section>

// //     </div>
// //   );
// // }



// "use client";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";


// // /* ================= SEO META ================= */

// // export const metadata = {
// //   title: "Employment Lawyer in Bangalore | S Jain & Attorneys",
// //   description:
// //     "Experienced Employment Lawyer in Bangalore handling workplace disputes, labour court cases, wrongful termination, and HR compliance advisory services.",
// //   alternates: {
// //     canonical: "https://yourdomain.com/employment-lawyer-in-bangalore",
// //   },
// // };

// export default function EmploymentLawyerPage() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <>
//       <Navbar />

//       <main className="bg-white overflow-hidden">

//         {/* ================= HERO SECTION ================= */}

//         <section className="relative bg-[#0B0F14] pt-32 pb-28 text-white">
//           <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

//             <div>
//               <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
//                 Experienced Employment Lawyer in Bangalore for Workplace & Labour Disputes
//               </h1>

//               <p className="text-gray-300 leading-relaxed mb-6">
//                 Our firm provides strategic representation as an Employment Lawyer in Bangalore,
//                 assisting employers and employees in resolving workplace disputes and ensuring
//                 regulatory compliance. As an experienced Labour Lawyer in Bangalore, we handle
//                 complex service matters, disciplinary proceedings, and industrial disputes
//                 with structured legal solutions.
//               </p>

//               <p className="text-gray-300 leading-relaxed mb-6">
//                 We focus on protecting employee rights while safeguarding business interests
//                 through preventive compliance and strong dispute resolution strategy.
//               </p>

//               <p className="text-[#C9A24D] font-medium mb-8">
//                 Response within 24 hours guaranteed.
//               </p>

//               <div className="flex flex-col md:flex-row gap-4">
//                 <Link
//                   href="/legal-consultation-in-bangalore"
//                   className="bg-[#C9A24D] text-black w-full md:w-auto px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-center hover:scale-105 transition"
//                 >
//                   Book Confidential Consultation
//                 </Link>

//                 <a
//                   href="tel:+919000000000"
//                   className="border border-[#C9A24D] text-[#C9A24D] w-full md:w-auto px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-center hover:bg-[#C9A24D] hover:text-black transition"
//                 >
//                   Call Now
//                 </a>
//               </div>
//             </div>

//             <div className="relative w-full h-[420px] md:h-[500px]">
//               <Image
//                 src="/employment.jpg"
//                 alt="Employment Lawyer in Bangalore"
//                 fill
//                 className="object-cover rounded-xl shadow-2xl"
//                 priority
//               />
//             </div>

//           </div>
//         </section>

//         {/* ================= SERVICES SECTION ================= */}

//         <section className="py-20 px-6">
//           <div className="max-w-6xl mx-auto">

//             <h2 className="text-4xl font-semibold mb-6 text-center">
//               Comprehensive Employment & Labour Law Services
//             </h2>

//             <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
//               Workplace disputes require timely intervention and strong legal strategy.
//               Our team represents clients before labour authorities and industrial tribunals
//               while providing preventive compliance advisory for businesses.
//             </p>

//             <h3 className="text-2xl font-semibold mb-8 text-center">
//               OUR EMPLOYMENT & LABOUR LAW SERVICES INCLUDE
//             </h3>

//             <div className="grid md:grid-cols-2 gap-6 text-gray-700">

//               {[
//                 "Employment Contract Drafting & HR Policy Advisory",
//                 "Wrongful Termination & Disciplinary Proceedings",
//                 "Labour Court & Industrial Tribunal Representation",
//                 "Workplace Harassment & POSH Compliance",
//                 "Wage, Bonus & Salary Disputes",
//                 "Retrenchment & Layoff Advisory",
//                 "Employee Grievance & Settlement Negotiation",
//                 "Labour Law Compliance & Risk Assessment",
//               ].map((service, i) => (
//                 <div
//                   key={i}
//                   className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
//                 >
//                   ▪ {service}
//                 </div>
//               ))}

//             </div>
//           </div>
//         </section>

//         {/* ================= DETAIL SECTIONS ================= */}

//         <section className="bg-gray-50 py-20 px-6">
//           <div className="max-w-6xl mx-auto space-y-12 text-gray-700">

//             <div>
//               <h3 className="text-2xl font-semibold mb-4">
//                 Labour Court & Industrial Representation
//               </h3>
//               <p>
//                 As a trusted Labour Court Lawyer in Bangalore, we represent clients
//                 in employment disputes involving termination, unpaid wages, service
//                 conditions, and industrial conflicts. Our structured approach ensures
//                 strong documentation and effective advocacy before labour courts and tribunals.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-semibold mb-4">
//                 Wrongful Termination & Employee Rights Protection
//               </h3>
//               <p>
//                 If you are facing unlawful dismissal, our team acts as a Wrongful
//                 Termination Lawyer in Bangalore, helping challenge illegal termination
//                 and pursue appropriate remedies under applicable labour laws.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-2xl font-semibold mb-4">
//                 HR Compliance & Corporate Advisory
//               </h3>
//               <p>
//                 As an experienced HR Compliance Lawyer Bangalore businesses rely on,
//                 we assist companies in drafting compliant employment agreements,
//                 conducting legal audits, and ensuring adherence to statutory labour
//                 regulations to minimize litigation risk.
//               </p>
//             </div>

//           </div>
//         </section>

//         {/* ================= OUR APPROACH ================= */}

//         <section className="py-20 px-6">
//           <div className="max-w-5xl mx-auto text-gray-700 space-y-8">

//             <h2 className="text-4xl font-semibold text-center mb-12">
//               OUR APPROACH / HOW WE WORK
//             </h2>

//             <div>
//               <strong>Step 1: Case Evaluation & Legal Consultation</strong>
//               <p>Understanding employment terms, documentation, and applicable labour regulations.</p>
//             </div>

//             <div>
//               <strong>Step 2: Compliance Review or Dispute Strategy Development</strong>
//               <p>
//                 Designing a structured compliance advisory plan or dispute resolution strategy.
//                 We clearly explain legal risks, documentation requirements, and potential remedies
//                 before initiating proceedings.
//               </p>
//             </div>

//             <div>
//               <strong>Step 3: Documentation & Legal Action</strong>
//               <p>Drafting notices, replies, complaints, and preparing required filings.</p>
//             </div>

//             <div>
//               <strong>Step 4: Labour Court / Tribunal Representation & Resolution</strong>
//               <p>
//                 Strong representation before labour courts, industrial tribunals, and authorities
//                 to pursue structured resolution.
//               </p>
//             </div>

//           </div>
//         </section>

//         {/* ================= WHY CHOOSE US ================= */}

//         <section className="bg-gray-50 py-20 px-6">
//           <div className="max-w-4xl mx-auto text-gray-700">

//             <h2 className="text-4xl font-semibold text-center mb-10">
//               WHY CHOOSE OUR EMPLOYMENT LAW TEAM
//             </h2>

//             <ul className="space-y-4">
//               <li>✓ Experienced Employment Lawyer in Bangalore</li>
//               <li>✓ Strong labour court litigation expertise</li>
//               <li>✓ Strategic compliance-focused advisory</li>
//               <li>✓ Practical and business-oriented solutions</li>
//               <li>✓ Transparent legal guidance at every stage</li>
//             </ul>

//           </div>
//         </section>

//         {/* ================= FAQ ================= */}

//         <section className="py-20 px-6">
//           <div className="max-w-4xl mx-auto space-y-6">

//             <h2 className="text-4xl font-semibold text-center mb-12">
//               Frequently Asked Questions
//             </h2>

//             {[
//               ["What types of employment disputes do you handle?",
//                 "We handle wrongful termination, wage disputes, workplace harassment, disciplinary proceedings, industrial disputes, and labour court litigation matters."],
//               ["Can an employee challenge unlawful termination?",
//                 "Yes, an employee can challenge illegal dismissal before appropriate labour authorities."],
//               ["Do you represent clients in labour court proceedings?",
//                 "Yes, we represent both employers and employees in industrial and service-related disputes."],
//               ["Do companies need HR compliance advisory?",
//                 "Yes, businesses benefit from structured guidance to avoid penalties and litigation risks."],
//               ["What remedies are available in wrongful termination cases?",
//                 "Remedies may include reinstatement, compensation, back wages, or structured settlement depending on the facts."],
//               ["Do you provide ongoing legal retainership services?",
//                 "Yes, we offer continuous employment law advisory, compliance audits, and dispute management support."],
//             ].map(([q, a], i) => (
//               <div
//                 key={i}
//                 className="bg-gray-50 rounded-xl shadow transition-all duration-300"
//               >
//                 <button
//                   onClick={() => toggleFAQ(i)}
//                   className="w-full text-left p-6 font-semibold flex justify-between items-center"
//                 >
//                   {q}
//                   <span className="text-[#C9A24D] text-xl">
//                     {openIndex === i ? "−" : "+"}
//                   </span>
//                 </button>

//                 {openIndex === i && (
//                   <div className="px-6 pb-6 text-gray-700">
//                     {a}
//                   </div>
//                 )}
//               </div>
//             ))}

//           </div>
//         </section>

//         {/* ================= FINAL CTA ================= */}

//         <section className="bg-[#0B0F14] py-24 text-center text-white px-6">
//           <h2 className="text-4xl font-semibold mb-6">
//             Get Trusted Legal Help for Employment & Labour Matters
//           </h2>

//           <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
//             Consult our experienced Employment Lawyer in Bangalore today for strategic
//             and dependable legal support.
//           </p>

//           <div className="flex flex-col md:flex-row gap-4 justify-center">
//             <Link
//               href="/legal-consultation-in-bangalore"
//               className="bg-[#C9A24D] text-black w-full md:w-auto px-4 py-2 md:px-8 md:py-4 rounded-lg font-semibold text-center hover:scale-105 transition"
//             >
//               Book Confidential Consultation
//             </Link>

//             <Link
//               href="/contact"
//               className="border border-[#C9A24D] text-[#C9A24D] w-full md:w-auto px-4 py-2 md:px-8 md:py-4 rounded-lg font-semibold text-center hover:bg-[#C9A24D] hover:text-black transition"
//             >
//               Request Call Back
//             </Link>
//           </div>

//           <p className="text-gray-400 text-sm mt-8">
//             All matters handled with strict confidentiality and professional discretion.
//           </p>
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
  "Employment Contract Drafting & HR Policy Advisory",
  "Wrongful Termination & Disciplinary Proceedings",
  "Labour Court & Industrial Tribunal Representation",
  "Workplace Harassment & POSH Compliance",
  "Wage, Bonus & Salary Disputes",
  "Retrenchment & Layoff Advisory",
  "Employee Grievance & Settlement Negotiation",
  "Labour Law Compliance & Risk Assessment",
];

const details = [
  {
    title: "Labour Court & Industrial Representation",
    body: "As a trusted Labour Court Lawyer in Bangalore, we represent clients in employment disputes involving termination, unpaid wages, service conditions, and industrial conflicts. Our structured approach ensures strong documentation and effective advocacy before labour courts and tribunals.",
  },
  {
    title: "Wrongful Termination & Employee Rights Protection",
    body: "If you are facing unlawful dismissal, our team acts as a Wrongful Termination Lawyer in Bangalore, helping challenge illegal termination and pursue appropriate remedies under applicable labour laws.",
  },
  {
    title: "HR Compliance & Corporate Advisory",
    body: "As an experienced HR Compliance Lawyer Bangalore businesses rely on, we assist companies in drafting compliant employment agreements, conducting legal audits, and ensuring adherence to statutory labour regulations to minimize litigation risk.",
  },
];

const steps = [
  {
    number: "01",
    title: "Case Evaluation & Legal Consultation",
    body: "Understanding employment terms, documentation, and applicable labour regulations to assess legal validity and strategic options for your matter.",
  },
  {
    number: "02",
    title: "Compliance Review or Dispute Strategy Development",
    body: "Designing a structured compliance advisory plan or dispute resolution strategy. We clearly explain legal risks, documentation requirements, and potential remedies before initiating proceedings.",
  },
  {
    number: "03",
    title: "Documentation & Legal Action",
    body: "Drafting notices, replies, complaints, and preparing required filings with precision to ensure your matter is presented with full legal strength.",
  },
  {
    number: "04",
    title: "Labour Court / Tribunal Representation & Resolution",
    body: "Strong representation before labour courts, industrial tribunals, and authorities to pursue structured resolution and protect your rights at every stage.",
  },
];

const whyChoose = [
  "Experienced Employment Lawyer in Bangalore",
  "Strong labour court litigation expertise",
  "Strategic compliance-focused advisory",
  "Practical and business-oriented solutions",
  "Transparent legal guidance at every stage",
];

const faqs = [
  {
    q: "What types of employment disputes do you handle?",
    a: "We handle wrongful termination, wage disputes, workplace harassment, disciplinary proceedings, industrial disputes, and labour court litigation matters.",
  },
  {
    q: "Can an employee challenge unlawful termination?",
    a: "Yes, an employee can challenge illegal dismissal before appropriate labour authorities with support from a Labour Lawyer in Bangalore.",
  },
  {
    q: "Do you represent clients in labour court proceedings?",
    a: "Yes, as a Labour Court Lawyer in Bangalore, we represent both employers and employees in industrial and service-related disputes.",
  },
  {
    q: "Do companies need HR compliance advisory?",
    a: "Yes, businesses benefit from structured guidance from an HR Compliance Lawyer Bangalore to avoid penalties, inspections, and litigation risks.",
  },
  {
    q: "What remedies are available in wrongful termination cases?",
    a: "Remedies may include reinstatement, compensation, back wages, or structured settlement depending on the facts and legal framework.",
  },
  {
    q: "Do you provide ongoing legal retainership services?",
    a: "Yes, we offer continuous employment law advisory, contract drafting, compliance audits, and dispute management support for organizations.",
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

export default function EmploymentLawyerPage() {
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
              Experienced Employment Lawyer in Bangalore{" "}
              <span className="text-[#C9A24D]">for Workplace &amp; Labour Disputes</span>
            </motion.h1>

            {/* Intro para 1 */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Our firm provides strategic representation as an Employment Lawyer in Bangalore,
              assisting employers and employees in resolving workplace disputes and ensuring
              regulatory compliance. As an experienced Labour Lawyer in Bangalore, we handle
              complex service matters, disciplinary proceedings, and industrial disputes with
              structured legal solutions.
            </motion.p>

            {/* Intro para 2 */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              We focus on protecting employee rights while safeguarding business interests
              through preventive compliance and strong dispute resolution strategy.
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
                src="/employment.jpg"
                alt="Employment Lawyer in Bangalore"
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

        {/* ═══════════════ COMPREHENSIVE EMPLOYMENT & LABOUR LAW ════════════════ */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          <motion.div
            initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
          />

          <div className="max-w-6xl mx-auto">
            <SectionHeading>Comprehensive Employment &amp; Labour Law Services</SectionHeading>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-lg leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                Workplace disputes require timely intervention and strong legal strategy. Our team
                represents clients before labour authorities and industrial tribunals while
                providing preventive compliance advisory for businesses.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ════════════════════════════ SERVICES ════════════════════════════════ */}
        <section className="py-28 px-6 bg-[#f8f6f1] relative">
          <GoldDivider />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <div className="max-w-6xl mx-auto">
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
            >
              Our Employment &amp; Labour Law Services Include
            </motion.h3>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-5"
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
          </div>
        </section>

        {/* ═══════════════════════ DETAIL SECTIONS ══════════════════════════════ */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          <GoldDivider />

          <div className="max-w-6xl mx-auto">
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {details.map((item, i) => (
                <motion.div key={i} variants={fadeUp} custom={i * 0.15}
                  whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(201,162,77,0.12)" }}
                  className="bg-[#f8f6f1] border border-gray-100 hover:border-[#C9A24D] rounded-xl p-8 group transition-all duration-300 relative overflow-hidden"
                >
                  {/* gold accent top bar */}
                  <motion.span
                    initial={{ width: 0 }} whileInView={{ width: 40 }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                    className="block h-[3px] bg-[#C9A24D] mb-6"
                  />
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#8a6a20] mb-4 transition-colors duration-200 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                  {/* corner ornament */}
                  <span className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#C9A24D]/20 group-hover:border-[#C9A24D]/60 transition-colors duration-300" />
                </motion.div>
              ))}
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
            <SectionHeading>Why Choose Our Employment Law Team</SectionHeading>

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
        <section className="relative py-28 text-center text-white overflow-hidden">
          <Image src="/discussion.png" alt="Employment Legal Support Bangalore" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

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
            <div className="border border-[#C9A24D]/30 rounded-2xl px-10 py-16 relative">
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
                S Jain &amp; Attorneys · Employment &amp; Labour Law
              </motion.p>

              <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                className="text-3xl md:text-5xl font-bold mb-10 leading-tight"
              >
                Protect your workplace rights with experienced labour law support.
              </motion.h2>

              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link href="/contact"
                    className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
                  >
                    Request Call Back
                  </Link>
                </motion.div>
              </motion.div>

              <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
                className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
              >
                <span className="inline-block w-4 h-px bg-gray-600" />
                All matters handled with strict confidentiality and professional discretion.
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