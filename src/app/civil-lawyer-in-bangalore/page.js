// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";


// export default function CivilLitigation() {

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
//               className="text-gray-400 text-sm mb-6 font-normal"
//             >
//               Home <span className="mx-2">›</span>
//               <span className="text-[#C9A24D]">Civil Litigation</span>
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
//               Civil Litigation
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
//               Professional legal representation in civil disputes,
//               protecting your rights and resolving conflicts through
//               strategic litigation and effective legal solutions.
//             </motion.p>

//           </motion.div>



//           {/* IMAGE */}

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

//             <div className="rounded-xl overflow-hidden shadow-2xl mt-54">

//               <Image
//                 src="/CivilLitigation1.jpg"
//                 alt="Civil Litigation"
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
//               Civil litigation involves resolving disputes between individuals,
//               businesses, or organizations through negotiation, arbitration,
//               mediation, or court proceedings. Our experienced litigation team
//               provides strong legal representation to protect your rights and
//               achieve favorable outcomes.
//             </motion.p>



//             {/* ================= SERVICES ================= */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl font-semibold text-black mb-6"
//             >
//               Our Civil Litigation Services
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
//             >
//               We provide comprehensive litigation services to individuals and
//               businesses, ensuring effective dispute resolution and strong
//               courtroom representation.
//             </motion.p>



//             <motion.ul
//               variants={fadeUp}
//               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
//             >

//               <li>
//                 <span className="font-semibold text-black">
//                   Contract Disputes:
//                 </span>

//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Representation in disputes involving breach of contract,
//                   enforcement, and legal remedies.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Property Disputes:
//                 </span>

//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Legal assistance in ownership disputes, possession claims,
//                   and real estate conflicts.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Recovery Suits:
//                 </span>

//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Helping clients recover outstanding payments, debts,
//                   and financial claims legally.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Injunctions and Legal Notices:
//                 </span>

//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Obtaining court injunctions and issuing legal notices to
//                   protect client interests.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Commercial Litigation:
//                 </span>

//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Handling business disputes, partnership conflicts,
//                   and commercial legal matters.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Arbitration and Dispute Resolution:
//                 </span>

//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Alternative dispute resolution methods for faster and
//                   cost-effective settlements.
//                 </p>
//               </li>

//             </motion.ul>



//             {/* IMAGE */}

//            <motion.div
//   variants={fadeUp}
//   className="mb-20 flex justify-center"
// >
//   <div className="
//     w-full max-w-5xl
//     rounded-xl
//     overflow-hidden
//     shadow-2xl
//   ">

//     <Image
//       src="/civilLitigation2.png"
//       alt="Civil Litigation Legal Services"
//       width={1100}
//       height={500}
//       className="w-full h-[500px] object-cover"
//     />

//   </div>
// </motion.div>




//             {/* WHY CHOOSE */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
//             >
//               Why Choose Us for Civil Litigation
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed"
//             >
//               Our litigation team provides strategic, professional, and
//               result-oriented legal representation. We focus on protecting
//               client interests, minimizing risk, and achieving favorable
//               legal outcomes through expert courtroom advocacy and
//               efficient dispute resolution.
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
//               alt="Consultation"
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
//               Get Expert Legal Support
//             </p>


//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Let’s Discuss Your Legal Needs
//             </h2>


//             <p className="text-gray-300 text-base md:text-lg mb-10">
//               Our experienced civil litigation team is ready to help
//               resolve your legal disputes efficiently and professionally.
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

export default function CivilLitigation() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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
              Strategic Civil Litigation Lawyer in Bangalore for Property and Commercial Disputes
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 text-lg max-w-4xl mx-auto mb-4"
            >
              Our firm provides dedicated representation as a Civil Lawyer in Bangalore, handling complex disputes with strategic planning and strong courtroom advocacy. Our experienced attorneys manage civil litigation matters with clarity and precision.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg max-w-4xl mx-auto mb-6"
            >
              Our goal is to protect your legal rights, secure enforceable remedies, and resolve disputes efficiently through structured litigation strategy.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#C9A24D] font-semibold mb-8"
            >
              Response within 24 hours guaranteed.
            </motion.p>

            {/* <motion.div variants={fadeUp} className="flex justify-center gap-6 flex-wrap"> */}
            <motion.div
  variants={fadeUp}
  className="relative z-30 flex justify-center gap-6 flex-wrap"
>
              <Link
                href="/legal-consultation-in-bangalore"
                className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
              >
                Book Confidential Consultation
              </Link>

              <Link href="tel:+919000000000">
                <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
                  Call Now
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* HERO IMAGE */}
          <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-8 z-3 0">
            <div className="rounded-xl overflow-hidden shadow-2xl mt-54">
              <Image
                src="/CivilLitigation1.jpg"
                alt="Civil Lawyer in Bangalore"
                width={1400}
                height={500}
                className="w-full h-[450px] object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <div className="h-40 md:h-60"></div>

        {/* ================= SERVICES ================= */}

        <section className="max-w-6xl mx-auto px-6 py-20 mt-14">

          <h2 className="text-4xl font-semibold mb-6">
            Strategic Civil Litigation Representation
          </h2>

          <p className="text-gray-700 text-lg mb-10">
            Civil disputes require structured legal action and timely intervention. As a trusted Civil Litigation Lawyer team, we represent individuals and businesses in a wide range of civil matters before trial and appellate courts.
            Our attorneys focus on protecting your rights while pursuing effective and legally sound outcomes.
          </p>

          <h3 className="text-2xl font-semibold mb-8">
            OUR CIVIL LITIGATION SERVICES INCLUDE
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              "Property & Land Disputes",
              "Contractual Disputes",
              "Recovery Suits",
              "Injunction & Stay Matters",
              "Partition & Inheritance Cases",
              "Commercial Civil Disputes",
              "Appeals & Revisions"
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* <Image
            src="/civilLitigation2.png"
            alt="Civil Litigation Services"
            width={900}
            height={400}
            className="w-full rounded-xl shadow-lg mb-16"
          /> */}
          <div className="relative w-full h-[400px] mb-16">
            <Image
              src="/civilLitigation2.png"
              alt="Civil Litigation Services"
              fill
              className="object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* ================= APPROACH ================= */}

          <h2 className="text-4xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h2>

          <div className="space-y-6 text-gray-700 text-lg mb-16">
            <p><strong>Step 1:</strong> Case Evaluation & Legal Consultation – Understanding the dispute and assessing legal remedies.</p>
            <p><strong>Step 2:</strong> Documentation & Evidence Review – Careful analysis of contracts, records, and supporting documents. We clearly explain legal risks, possible outcomes, and available remedies before proceeding.</p>
            <p><strong>Step 3:</strong> Filing & Court Proceedings – Preparation of pleadings and representation before court.</p>
            <p><strong>Step 4:</strong> Trial Representation & Resolution – Strong advocacy aimed at efficient dispute resolution.</p>
          </div>

          {/* ================= WHY CHOOSE ================= */}

          <h2 className="text-4xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </h2>

          <ul className="space-y-4 text-lg mb-16">
            <li>✓ Experienced Civil Litigation Lawyers</li>
            <li>✓ Strong and strategic courtroom representation</li>
            <li>✓ Clear legal guidance at every stage</li>
            <li>✓ Practical, result-focused approach</li>
          </ul>

          {/* ================= FAQ ================= */}

          <h2 className="text-4xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-gray-700 text-lg">
            <p><strong>Q1:</strong> What types of civil cases do you handle?<br />We handle property disputes, contract matters, recovery suits, injunctions, partition cases, and commercial civil litigation.</p>
            <p><strong>Q2:</strong> How long does a civil case take?<br />Timelines vary depending on case complexity, court workload, evidence review, and procedural stages.</p>
            <p><strong>Q3:</strong> Can civil disputes be settled outside court?<br />Yes, many disputes can be resolved through negotiation, mediation, or structured settlement discussions.</p>
            <p><strong>Q4:</strong> What documents are required for filing a civil suit?<br />Relevant contracts, title documents, correspondence, financial records, and supporting evidence are typically required.</p>
            <p><strong>Q5:</strong> Do you handle appeals in civil matters?<br />Yes, our Civil Litigation Lawyer team represents clients in appeals and revisions before appellate courts.</p>
            <p><strong>Q6:</strong> Can you assist with urgent injunction or stay orders?<br />Yes, we handle urgent injunction and stay applications to protect your legal rights and prevent further loss or damage.</p>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="relative py-28 text-center text-white">
          <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/75"></div>

          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Get Immediate Legal Help from a Civil Lawyer in Bangalore
            </h2>

            <p className="text-gray-400 mb-10 text-lg">
              Speak with our experienced civil litigation attorneys today.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link
                href="/legal-consultation-in-bangalore"
                className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
              >
                Book Confidential Consultation
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