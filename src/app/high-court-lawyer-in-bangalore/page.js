// "use client";

// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function HighCourtSupremeCourtPracticePage() {

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const fadeImage = {
//     hidden: { opacity: 0, scale: 1.05 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 1.2
//       }
//     }
//   };

//   const stagger = {
//     visible: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
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
//             className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center"
//           >

//             <motion.p
//               variants={fadeUp}
//               className="text-gray-400 text-sm mb-6"
//             >
//               Home <span className="mx-2">›</span>
//               <span className="text-[#C9A24D]">
//                 High Court & Supreme Court Practice
//               </span>
//             </motion.p>


//             <motion.h1
//               variants={fadeUp}
//               className="
//                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
//                 font-semibold
//                 text-white
//                 mb-6
//                 tracking-tight
//               "
//             >
//               High Court & Supreme Court Practice
//             </motion.h1>


//             <motion.p
//               variants={fadeUp}
//               className="
//                 text-gray-400
//                 text-base sm:text-lg md:text-xl
//                 max-w-3xl mx-auto
//                 leading-relaxed
//               "
//             >
//               Expert legal representation in High Courts and the Supreme Court
//               of India, providing strong advocacy, strategic litigation, and
//               effective legal solutions for complex matters.
//             </motion.p>

//           </motion.div>



//           {/* FLOATING IMAGE */}

//           <motion.div
//             variants={fadeImage}
//             initial="hidden"
//             animate="visible"
//             className="
//               absolute
//               left-1/2
//               -translate-x-1/2
//               translate-y-1/2
//               bottom-0
//               w-full
//               max-w-6xl
//               px-6
//               z-20
//             "
//           >

//             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">

//               <Image
//                 src="/highcourt-supreme.jpg"
//                 alt="High Court Supreme Court Practice"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[400px] md:h-[500px] object-cover"
//                 priority
//               />

//             </div>

//           </motion.div>

//         </section>



//         {/* SPACING */}

//         <div className="h-40 md:h-60"></div>



//         {/* ================= OVERVIEW ================= */}

//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//         >

//           <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-24">


//             <motion.h2
//               variants={fadeUp}
//               className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight"
//             >
//               Overview
//             </motion.h2>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
//             >
//               We provide professional legal representation in High Courts and
//               the Supreme Court of India. Our experienced advocates handle complex
//               litigation, appeals, writ petitions, and constitutional matters with
//               strategic expertise and strong courtroom advocacy.
//             </motion.p>



//             {/* ================= SERVICES ================= */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl font-semibold text-black mb-6"
//             >
//               Our Court Practice Services
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
//             >
//               We provide comprehensive legal support and representation at the
//               highest levels of the judicial system.
//             </motion.p>



//             <motion.ul
//               variants={fadeUp}
//               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
//             >

//               <li>
//                 <span className="font-semibold text-black">
//                   Writ Petitions:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Filing and defending writ petitions for protection of legal and constitutional rights.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Civil & Criminal Appeals:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Representation in appeals before High Courts and the Supreme Court.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Special Leave Petitions (SLP):
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Filing and arguing SLPs before the Supreme Court of India.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Constitutional Matters:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Handling complex constitutional and fundamental rights cases.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Public Interest Litigation (PIL):
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Filing and defending PILs for public and social justice matters.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Legal Opinions & Case Strategy:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Providing expert legal opinions and strategic litigation advice.
//                 </p>
//               </li>

//             </motion.ul>



//             {/* IMAGE */}

//             <motion.div
//   variants={fadeUp}
//   className="mb-16 max-w-3xl mx-auto"
// >
//   <Image
//     src="/high.png"
//     alt="Court Legal Consultation"
//     width={800}
//     height={400}
//     className="
//       w-full
//       h-[340px] md:h-[580px]
//       object-cover
//       rounded-xl
//       shadow-lg
//     "
//     sizes="(max-width: 768px) 100vw, 700px"
//   />
// </motion.div>



//             {/* WHY CHOOSE */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
//             >
//               Why Choose Us for Court Representation
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed"
//             >
//               Our experienced legal team provides professional advocacy and strategic
//               representation in High Courts and the Supreme Court. We focus on achieving
//               favorable outcomes through thorough preparation, strong legal arguments,
//               and dedicated client support.
//             </motion.p>

//           </div>

//         </motion.section>



//         {/* ================= CTA ================= */}

//         <motion.section
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="relative py-28 mt-20 overflow-hidden"
//         >

//           <div className="absolute inset-0">

//             <Image
//               src="/discussion.png"
//               alt="Court Legal Support"
//               fill
//               className="object-cover"
//             />

//             <div className="absolute inset-0 bg-black/70"></div>

//           </div>


//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative max-w-5xl mx-auto px-6 text-center"
//           >

//             <p className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4">
//               Supreme Court & High Court Experts
//             </p>


//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Get Expert Representation in Higher Courts
//             </h2>


//             <p className="text-gray-300 text-base md:text-lg mb-10">
//               Our experienced advocates are ready to represent you in High Courts
//               and the Supreme Court of India.
//             </p>

//             <Link href="/contact">
//             <button className="
//               bg-[#C9A24D]
//               text-black
//               px-8 py-4
//               rounded-lg
//               font-semibold
//               hover:scale-105
//               transition
//             ">
//               Book Consultation
//             </button>
//             </Link>

//           </motion.div>

//         </motion.section>


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

export default function HighCourtLawyerPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
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
              Experienced High Court & Supreme Court Lawyers in Bangalore for Appeals & Writ Petitions
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 max-w-3xl mx-auto mb-8"
            >
              Our firm provides experienced representation as a High Court Lawyer in Bangalore, handling complex appellate and constitutional matters with precision. We appear before the High Court and Supreme Court, offering strategic legal advocacy in appeals, writ petitions, and special leave petitions.
              <span className="block mt-3 font-semibold text-[#C9A24D]">
                Response within 24 hours guaranteed.
              </span>
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap">

              <Link
                href="/legal-consultation-in-bangalore"
                className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition inline-block"
              >
                Book Confidential Consultation
              </Link>

              <a
                href="tel:+919000000000"
                className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
              >
                Call Now
              </a>

            </motion.div>

          </motion.div>

          {/* HERO IMAGE (NOT REMOVED) */}
          <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-0 pointer-events-none">
            {/* <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20"> */}
            <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
              <Image
                src="/highcourt-supreme.jpg"
                alt="High Court Lawyer in Bangalore"
                width={1400}
                height={800}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />
            </div>
          </div>

        </section>

        <div className="h-40 md:h-60"></div>

        {/* ================= CONTENT ================= */}

        <section className="max-w-6xl mx-auto px-6 py-16 mt-24">

          <h2 className="text-4xl font-semibold mb-6">
            Appellate & Constitutional Court Representation
          </h2>

          <p className="text-gray-600 mb-10">
            Appellate litigation demands detailed legal analysis and strong drafting. As a trusted Appeal Lawyer in Bangalore and Supreme Court Lawyer team, we represent clients in civil and criminal appeals, writ petitions, and constitutional matters.
            Our attorneys ensure every case is prepared with clear grounds, proper documentation, and effective court presentation before higher judicial forums.
          </p>

          <h3 className="text-2xl font-semibold mb-6">
            OUR HIGH COURT & SUPREME COURT SERVICES INCLUDE
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
            <li>▪ Writ Petitions</li>
            <li>▪ Civil & Criminal Appeals</li>
            <li>▪ Special Leave Petitions (SLP)</li>
            <li>▪ Revision & Review Petitions</li>
            <li>▪ Constitutional Matters</li>
            <li>▪ Interim Applications & Stay Orders</li>
          </ul>

          {/* SECOND IMAGE (NOT REMOVED) */}
          <div className="mb-16 max-w-3xl mx-auto">
            <Image
              src="/high.png"
              alt="High Court Legal Consultation"
              width={800}
              height={400}
              className="w-full h-[340px] md:h-[580px] object-cover rounded-xl shadow-lg"
            />
          </div>

          <h3 className="text-3xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h3>

          <div className="space-y-6 text-gray-700 mb-16">
            <p><strong>Step 1:</strong> Case Evaluation & Order Review – Detailed analysis of trial court judgments and legal grounds for appeal.</p>
            <p><strong>Step 2:</strong> Legal Strategy & Grounds of Appeal – Identifying procedural and substantive errors to build a strong appellate case.</p>
            <p><strong>Step 3:</strong> Drafting & Filing Before Appellate Courts – Precise preparation of petitions, affidavits, and supporting documentation.</p>
            <p><strong>Step 4:</strong> Final Hearing & Representation – Strong courtroom advocacy before High Court and Supreme Court benches.</p>
          </div>

          <h3 className="text-3xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </h3>

          <ul className="space-y-3 text-gray-700 mb-16">
            <li>✓ Experienced High Court and Supreme Court lawyers</li>
            <li>✓ Skilled Writ Petition Lawyer representation</li>
            <li>✓ Strategic appellate advocacy</li>
            <li>✓ Transparent legal advice at every stage</li>
          </ul>

        </section>
        {/* ================= FAQ SECTION ================= */}

        <section className="pt-8 pb-20 -mt-10">
          <div className="max-w-6xl mx-auto px-6">

            <h3 className="text-5xl font-bold text-black mb-12">
              Frequently Asked Questions
            </h3>

            <div className="space-y-6 text-lg text-gray-800">

              {[
                {
                  q: "Q1: What types of cases can be filed in the High Court?",
                  a: "Writ petitions, appeals, revisions, and constitutional matters can be filed before the High Court."
                },
                {
                  q: "Q2: What is a Special Leave Petition (SLP)?",
                  a: "An SLP is filed before the Supreme Court to challenge High Court judgments."
                },
                {
                  q: "Q3: Can High Court decisions be challenged?",
                  a: "Yes, decisions can be challenged before the Supreme Court through appropriate legal remedies."
                },
                {
                  q: "Q4: How long does an appeal process take?",
                  a: "The timeline depends on the nature of the case and court schedule."
                },
                {
                  q: "Q5: Do you handle urgent stay and interim relief matters?",
                  a: "Yes, we file and argue urgent interim applications, stay petitions, and injunction matters to protect clients’ rights during appellate proceedings."
                },
                {
                  q: "Q6: Can you represent clients from other cities or states?",
                  a: "Yes, we represent clients across India in appellate and constitutional matters, including coordination, drafting, and court appearances."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-6 cursor-pointer transition"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-semibold">{faq.q}</p>
                    <span className="text-xl text-[#C9A24D]">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </div>

                  {openIndex === index && (
                    <p className="mt-4 text-gray-700">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="relative py-28 mt-18 overflow-hidden">

          <div className="absolute inset-0">
            <Image
              src="/discussion.png"
              alt="High Court Lawyer Consultation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Get Immediate Legal Help from a High Court & Supreme Court Lawyer
            </h2>

            <p className="text-gray-300 mb-10">
              Consult our experienced High Court Lawyer in Bangalore today. All matters handled with complete confidentiality and professional discretion.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/legal-consultation-in-bangalore">
                <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
                  Book Confidential Consultation
                </button>
              </Link>

              <Link href="tel:+919000000000">
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition">
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
