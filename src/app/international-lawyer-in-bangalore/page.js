// // "use client";

// // import Navbar from "../../components/Navbar";
// // import Footer from "../../components/Footer";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import Link from "next/link";

// // export default function InternationalPrivateLawPage() {

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
// //                 International Private Law
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
// //               International Private Law
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
// //               Expert legal assistance in cross-border disputes, international
// //               contracts, jurisdictional conflicts, and enforcement of foreign
// //               judgments with strategic global legal insight.
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

// //             <div className="rounded-xl overflow-hidden shadow-2xl mt-82">

// //               <Image
// //                 src="/international-law.png"
// //                 alt="International Private Law"
// //                 width={1400}
// //                 height={800}
// //                 className="w-full h-[400px] md:h-[600px] object-cover"
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

// //           <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-54">


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
// //               International Private Law governs cross-border legal disputes
// //               involving individuals and corporations from different countries.
// //               Our firm provides strategic guidance in jurisdictional matters,
// //               international contracts, foreign investments, and enforcement of
// //               international judgments.
// //             </motion.p>



// //             {/* ================= SERVICES ================= */}

// //             <motion.h3
// //               variants={fadeUp}
// //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// //             >
// //               Our International Legal Services
// //             </motion.h3>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
// //             >
// //               We offer comprehensive support for cross-border legal matters
// //               affecting individuals and businesses.
// //             </motion.p>



// //             <motion.ul
// //               variants={fadeUp}
// //               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
// //             >

// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Cross-Border Dispute Resolution:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Handling disputes involving parties from multiple jurisdictions.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   International Contract Advisory:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Drafting and reviewing cross-border agreements and contracts.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Enforcement of Foreign Judgments:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Assisting with recognition and enforcement of foreign court decisions in India.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   International Arbitration:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Representation in global arbitration proceedings.
// //                 </p>
// //               </li>


// //               <li>
// //                 <span className="font-semibold text-black">
// //                   Foreign Investment & Compliance:
// //                 </span>
// //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// //                   Legal guidance on international investments and regulatory compliance.
// //                 </p>
// //               </li>

// //             </motion.ul>



// //             {/* IMAGE */}

// //             <motion.div variants={fadeUp} className="mb-16">

// //               <Image
// //                 src="/International-Law1.jpg"
// //                 alt="International Legal Consultation"
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
// //               Why Choose Us for International Legal Matters
// //             </motion.h3>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// //             >
// //               Our team provides strategic cross-border legal solutions backed by
// //               strong research, global perspective, and practical experience.
// //               We ensure compliance with international legal standards while
// //               protecting our clients’ interests.
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
// //               alt="International Legal Consultation"
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
// //               Cross-Border Legal Expertise
// //             </p>


// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Navigate International Legal Matters with Confidence
// //             </h2>


// //             <p className="text-gray-300 text-base md:text-lg mb-10">
// //               Get professional guidance for cross-border disputes and global legal challenges.
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

// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function InternationalLawyerPage() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8 }
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

//         <section className="bg-[#0B0F14] pt-32 pb-24 text-center">

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//             className="max-w-7xl mx-auto px-6"
//           >

//             <motion.h1
//               variants={fadeUp}
//               className="text-4xl md:text-6xl font-semibold text-white mb-6"
//             >
//               International Lawyer in Bangalore for Cross-Border Disputes
//             </motion.h1>

//             <motion.p
//               variants={fadeUp}
//               className="text-gray-300 max-w-3xl mx-auto mb-6"
//             >
//               Our firm provides strategic representation as an International Lawyer in Bangalore, assisting clients in complex cross-border disputes, arbitration proceedings, and jurisdictional matters. We offer structured legal solutions for international commercial and personal legal conflicts.
//             </motion.p>

//             <motion.p
//               variants={fadeUp}
//               className="text-gray-300 max-w-3xl mx-auto mb-6"
//             >
//               Our goal is to minimize jurisdictional risk, ensure enforceability across borders, and protect your legal and commercial interests in international matters.
//             </motion.p>

//             <motion.p
//               variants={fadeUp}
//               className="text-[#C9A24D] font-semibold mb-8"
//             >
//               Response within 24 hours guaranteed.
//             </motion.p>

//             <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap mb-12">

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

//           {/* HERO IMAGE (NO OVERLAP) */}

//           <div className="max-w-7xl mx-auto px-6">
//             <div className="rounded-xl overflow-hidden shadow-2xl">
//               <Image
//                 src="/international-law.png"
//                 alt="International Lawyer in Bangalore"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[400px] md:h-[550px] object-cover"
//                 priority
//               />
//             </div>
//           </div>

//         </section>


//         {/* ================= MAIN CONTENT ================= */}

//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//           className="max-w-7xl mx-auto px-6 py-20"
//         >

//           <motion.h2
//             variants={fadeUp}
//             className="text-4xl font-semibold mb-6"
//           >
//             International Private Law & Cross-Border Legal Representation
//           </motion.h2>

//           <motion.p
//             variants={fadeUp}
//             className="text-gray-700 mb-12"
//           >
//             International disputes often involve multiple jurisdictions, foreign contracts, and enforcement complexities. As an experienced Cross Border Dispute Lawyer and Private International Law Lawyer, we guide clients through legal challenges involving foreign parties and international transactions.
//             Our attorneys act as International Litigation Lawyers and International Arbitration Lawyers, ensuring effective representation before appropriate courts and arbitral tribunals.
//           </motion.p>


//           {/* SERVICES */}

//           <motion.h3 variants={fadeUp} className="text-3xl font-semibold mb-6">
//             OUR INTERNATIONAL LAW SERVICES INCLUDE
//           </motion.h3>

//           <motion.ul
//             variants={fadeUp}
//             className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16"
//           >
//             <li>▪ Cross-Border Commercial Disputes</li>
//             <li>▪ International Arbitration Proceedings</li>
//             <li>▪ Foreign Judgment Enforcement</li>
//             <li>▪ Cross-Border Contract Disputes</li>
//             <li>▪ International Family & Matrimonial Matters</li>
//             <li>▪ Jurisdiction & Conflict of Law Issues</li>
//             <li>▪ Drafting & Review of International Commercial Contracts</li>
//           </motion.ul>


//           {/* APPROACH */}

//           <motion.h3 variants={fadeUp} className="text-3xl font-semibold mb-6">
//             OUR APPROACH / HOW WE WORK
//           </motion.h3>

//           <motion.div variants={fadeUp} className="space-y-6 text-gray-700 mb-16">

//             <p>
//               <strong>Step 1: Jurisdiction & Legal Risk Assessment</strong><br />
//               Analyzing applicable laws, jurisdiction, and enforcement challenges.
//             </p>

//             <p>
//               <strong>Step 2: Strategy for Cross-Border Resolution</strong><br />
//               Developing a tailored dispute resolution or arbitration strategy.
//             </p>

//             <p>
//               We clearly explain jurisdictional risks, enforcement challenges, and strategic legal options before initiating proceedings.
//             </p>

//             <p>
//               <strong>Step 3: Filing & Representation in Appropriate Forums</strong><br />
//               Representing clients before courts, tribunals, or arbitral institutions.
//             </p>

//             <p>
//               <strong>Step 4: Enforcement & Ongoing Legal Support</strong><br />
//               Ensuring compliance with judgments, awards, and settlements.
//             </p>

//           </motion.div>


//           {/* WHY CHOOSE */}

//           <motion.h3 variants={fadeUp} className="text-3xl font-semibold mb-6">
//             WHY CHOOSE OUR FIRM
//           </motion.h3>

//           <motion.ul variants={fadeUp} className="space-y-3 text-gray-700 mb-20">
//             <li>✓ Experienced International Litigation Lawyers</li>
//             <li>✓ Skilled International Arbitration Lawyer representation</li>
//             <li>✓ Strategic cross-border legal planning</li>
//             <li>✓ Strong documentation and enforcement expertise</li>
//             <li>✓ Clear and coordinated communication across jurisdictions</li>
//           </motion.ul>

//         </motion.section>


//         {/* ================= FAQ ================= */}

//         <section className="bg-[#F4F4F4] py-20">

//           <div className="max-w-7xl mx-auto px-6">

//             <h3 className="text-4xl font-semibold mb-12">
//               Frequently Asked Questions
//             </h3>

//             <div className="space-y-8 text-gray-800">

//               <div>
//                 <h4 className="font-semibold text-lg">
//                   Q1: What is international private law?
//                 </h4>
//                 <p className="mt-2">
//                   It governs disputes involving foreign parties, cross-border transactions, and jurisdictional conflicts.
//                 </p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg">
//                   Q2: How are cross-border disputes resolved?
//                 </h4>
//                 <p className="mt-2">
//                   Through litigation, international arbitration, mediation, or negotiated settlements depending on contractual terms.
//                 </p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg">
//                   Q3: Can foreign judgments be enforced in India?
//                 </h4>
//                 <p className="mt-2">
//                   Yes, subject to recognition and enforcement procedures under applicable Indian laws and reciprocal arrangements.
//                 </p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg">
//                   Q4: Do you handle international arbitration matters?
//                 </h4>
//                 <p className="mt-2">
//                   Yes, we represent clients in domestic and international arbitration proceedings before appropriate tribunals.
//                 </p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg">
//                   Q5: How do you determine the correct jurisdiction in a cross-border dispute?
//                 </h4>
//                 <p className="mt-2">
//                   We analyze contractual clauses, governing law provisions, place of cause of action, and applicable international conventions to determine the appropriate forum.
//                 </p>
//               </div>

//               <div>
//                 <h4 className="font-semibold text-lg">
//                   Q6: Can you assist with drafting international commercial contracts?
//                 </h4>
//                 <p className="mt-2">
//                   Yes, we draft and review cross-border agreements with clear jurisdiction, governing law, dispute resolution, and enforcement clauses.
//                 </p>
//               </div>

//             </div>

//           </div>

//         </section>


//         {/* ================= FINAL CTA ================= */}

//         <section className="bg-[#0B0F14] py-28 text-center text-white">

//           <div className="max-w-5xl mx-auto px-6">

//             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
//               Get Immediate Legal Help from an International Lawyer in Bangalore
//             </h2>

//             <p className="text-gray-300 mb-10">
//               Consult our experienced international dispute resolution team today for strategic and reliable representation.
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


"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function InternationalLawyerPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* ================= HERO ================= */}

        <section className="bg-[#0B0F14] pt-32 pb-24 text-center">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto px-6"
          >

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-semibold text-white mb-6"
            >
              International Lawyer in Bangalore for Cross-Border Disputes
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 max-w-3xl mx-auto mb-6"
            >
              Our firm provides strategic representation as an International Lawyer in Bangalore, assisting clients in complex cross-border disputes, arbitration proceedings, and jurisdictional matters. We offer structured legal solutions for international commercial and personal legal conflicts.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 max-w-3xl mx-auto mb-6"
            >
              Our goal is to minimize jurisdictional risk, ensure enforceability across borders, and protect your legal and commercial interests in international matters.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#C9A24D] font-semibold mb-8"
            >
              Response within 24 hours guaranteed.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap mb-12">

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

            </motion.div>

          </motion.div>

          {/* HERO IMAGE (NO OVERLAP) */}

          <div className="max-w-7xl mx-auto px-6">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/international-law.png"
                alt="International Lawyer in Bangalore"
                width={1400}
                height={800}
                className="w-full h-[400px] md:h-[550px] object-cover"
                priority
              />
            </div>
          </div>

        </section>


        {/* ================= MAIN CONTENT ================= */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-6 py-20"
        >

          <motion.h2
            variants={fadeUp}
            className="text-4xl font-semibold mb-6"
          >
            International Private Law & Cross-Border Legal Representation
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-700 mb-12"
          >
            International disputes often involve multiple jurisdictions, foreign contracts, and enforcement complexities. As an experienced Cross Border Dispute Lawyer and Private International Law Lawyer, we guide clients through legal challenges involving foreign parties and international transactions.
            Our attorneys act as International Litigation Lawyers and International Arbitration Lawyers, ensuring effective representation before appropriate courts and arbitral tribunals.
          </motion.p>


          {/* SERVICES */}

          <motion.h3 variants={fadeUp} className="text-3xl font-semibold mb-6">
            OUR INTERNATIONAL LAW SERVICES INCLUDE
          </motion.h3>

          <motion.ul
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16"
          >
            <li>▪ Cross-Border Commercial Disputes</li>
            <li>▪ International Arbitration Proceedings</li>
            <li>▪ Foreign Judgment Enforcement</li>
            <li>▪ Cross-Border Contract Disputes</li>
            <li>▪ International Family & Matrimonial Matters</li>
            <li>▪ Jurisdiction & Conflict of Law Issues</li>
            <li>▪ Drafting & Review of International Commercial Contracts</li>
          </motion.ul>


          {/* APPROACH */}

          <motion.h3 variants={fadeUp} className="text-3xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </motion.h3>

          <motion.div variants={fadeUp} className="space-y-6 text-gray-700 mb-16">

            <p>
              <strong>Step 1: Jurisdiction & Legal Risk Assessment</strong><br />
              Analyzing applicable laws, jurisdiction, and enforcement challenges.
            </p>

            <p>
              <strong>Step 2: Strategy for Cross-Border Resolution</strong><br />
              Developing a tailored dispute resolution or arbitration strategy.
            </p>

            <p>
              We clearly explain jurisdictional risks, enforcement challenges, and strategic legal options before initiating proceedings.
            </p>

            <p>
              <strong>Step 3: Filing & Representation in Appropriate Forums</strong><br />
              Representing clients before courts, tribunals, or arbitral institutions.
            </p>

            <p>
              <strong>Step 4: Enforcement & Ongoing Legal Support</strong><br />
              Ensuring compliance with judgments, awards, and settlements.
            </p>

          </motion.div>


          {/* WHY CHOOSE */}

          <motion.h3 variants={fadeUp} className="text-3xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </motion.h3>

          <motion.ul variants={fadeUp} className="space-y-3 text-gray-700 mb-20">
            <li>✓ Experienced International Litigation Lawyers</li>
            <li>✓ Skilled International Arbitration Lawyer representation</li>
            <li>✓ Strategic cross-border legal planning</li>
            <li>✓ Strong documentation and enforcement expertise</li>
            <li>✓ Clear and coordinated communication across jurisdictions</li>
          </motion.ul>

        </motion.section>


        {/* ================= FAQ ================= */}

        <section className="bg-[#F4F4F4] py-20">

          <div className="max-w-7xl mx-auto px-6">

            <h3 className="text-4xl font-semibold mb-12">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6 text-gray-800">

              {[
                {
                  q: "Q1: What is international private law?",
                  a: "It governs disputes involving foreign parties, cross-border transactions, and jurisdictional conflicts."
                },
                {
                  q: "Q2: How are cross-border disputes resolved?",
                  a: "Through litigation, international arbitration, mediation, or negotiated settlements depending on contractual terms."
                },
                {
                  q: "Q3: Can foreign judgments be enforced in India?",
                  a: "Yes, subject to recognition and enforcement procedures under applicable Indian laws and reciprocal arrangements."
                },
                {
                  q: "Q4: Do you handle international arbitration matters?",
                  a: "Yes, we represent clients in domestic and international arbitration proceedings before appropriate tribunals."
                },
                {
                  q: "Q5: How do you determine the correct jurisdiction in a cross-border dispute?",
                  a: "We analyze contractual clauses, governing law provisions, place of cause of action, and applicable international conventions to determine the appropriate forum."
                },
                {
                  q: "Q6: Can you assist with drafting international commercial contracts?",
                  a: "Yes, we draft and review cross-border agreements with clear jurisdiction, governing law, dispute resolution, and enforcement clauses."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 cursor-pointer transition"
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

                  <motion.div
                    initial={false}
                    animate={{
                      height: openIndex === index ? "auto" : 0,
                      opacity: openIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-700">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              ))}

            </div>

          </div>

        </section>


        {/* ================= FINAL CTA ================= */}

        <section className="bg-[#0B0F14] py-28 text-center text-white">

          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Get Immediate Legal Help from an International Lawyer in Bangalore
            </h2>

            <p className="text-gray-300 mb-10">
              Consult our experienced international dispute resolution team today for strategic and reliable representation.
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