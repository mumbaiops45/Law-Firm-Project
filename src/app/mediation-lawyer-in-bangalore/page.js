// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function MediationADRPage() {

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
//                 Mediation & ADR
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
//               Mediation & ADR
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
//               Efficient and confidential dispute resolution through mediation,
//               arbitration, and alternative dispute resolution mechanisms —
//               helping clients resolve conflicts without prolonged litigation.
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
//                 src="/mediation-adr.jpg"
//                 alt="Mediation and ADR"
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
//               Alternative Dispute Resolution (ADR) provides faster, cost-effective,
//               and confidential solutions to legal disputes. Our firm assists clients
//               in resolving commercial, civil, and family disputes through mediation,
//               arbitration, and negotiation — reducing the need for lengthy court battles.
//             </motion.p>



//             {/* ================= SERVICES ================= */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl font-semibold text-black mb-6"
//             >
//               Our Mediation & ADR Services
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
//             >
//               We offer strategic dispute resolution services tailored to each client’s needs.
//             </motion.p>



//             <motion.ul
//               variants={fadeUp}
//               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
//             >

//               <li>
//                 <span className="font-semibold text-black">
//                   Mediation Services:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Facilitating negotiations to achieve mutually acceptable settlements.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Arbitration Representation:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Representing clients in domestic and international arbitration proceedings.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Commercial Dispute Resolution:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Resolving business and contractual disputes efficiently.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Family Dispute Mediation:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Assisting in amicable settlements in matrimonial and family matters.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Settlement Negotiation:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Strategic negotiation to protect client interests and avoid litigation.
//                 </p>
//               </li>

//             </motion.ul>



//             {/* IMAGE */}

//             <motion.div variants={fadeUp} className="mb-16">

//               <Image
//                 src="/mediation1.jpg"
//                 alt="ADR Consultation"
//                 width={1400}
//                 height={400}
//                 className="w-full rounded-2xl shadow-lg"
//               />

//             </motion.div>

            



//             {/* WHY CHOOSE */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
//             >
//               Why Choose Us for Mediation & ADR
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed"
//             >
//               We focus on efficient, confidential, and result-oriented dispute resolution.
//               Our strategic approach ensures minimal disruption, reduced costs, and
//               faster settlements while protecting our clients' legal rights and business interests.
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
//               alt="Mediation Consultation"
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
//               Efficient Dispute Resolution
//             </p>


//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Resolve Disputes Without Lengthy Litigation
//             </h2>


//             <p className="text-gray-300 text-base md:text-lg mb-10">
//               Contact us today for strategic mediation and arbitration support.
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
import Link from "next/link";
import { useState } from "react";

export default function MediationLawyerPage() {
  const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};
  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* ================= HERO ================= */}

        <section className="bg-[#0B0F14] pt-32 pb-20 text-center">

          <div className="max-w-6xl mx-auto px-6">

            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Strategic Mediation & ADR Lawyers in Bangalore for Effective Dispute Resolution
            </h1>

            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Our firm provides structured and confidential dispute resolution support as a Mediation Lawyer in Bangalore. We assist individuals and businesses in resolving conflicts efficiently through Alternative Dispute Resolution Services, reducing the need for prolonged court litigation.
            </p>

            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Our goal is to achieve timely, cost-effective, and legally enforceable settlements while preserving professional and personal relationships wherever possible.
            </p>

            <p className="text-[#C9A24D] font-semibold mb-8">
              Response within 24 hours guaranteed.
            </p>

            <div className="flex justify-center gap-4 flex-wrap mb-16">

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

            </div>

          </div>

          {/* HERO IMAGE - NO OVERLAP */}

          <div className="max-w-6xl mx-auto px-6 pb-16">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/mediation-adr.jpg"
                alt="Mediation Lawyer in Bangalore"
                width={1400}
                height={800}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />
            </div>
          </div>

        </section>

        {/* ================= CONTENT ================= */}

        <section className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-4xl font-semibold mb-6">
            Efficient Alternatives to Lengthy Court Litigation
          </h2>

          <p className="text-gray-700 mb-12">
            Court proceedings can be time-consuming and costly. As an experienced ADR Lawyer and Dispute Resolution Lawyer, we guide clients through mediation, arbitration, and conciliation processes designed for quicker and cost-effective outcomes.
            Our attorneys act as skilled Arbitration Lawyers and negotiation facilitators, helping parties reach structured and legally sound settlements.
          </p>

          <h3 className="text-3xl font-semibold mb-6">
            OUR ADR SERVICES INCLUDE
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
            <li>▪ Pre-Litigation Mediation</li>
            <li>▪ Commercial Arbitration</li>
            <li>▪ Contractual Dispute Resolution</li>
            <li>▪ Family & Matrimonial Mediation</li>
            <li>▪ Conciliation Proceedings</li>
            <li>▪ Settlement Negotiations</li>
            <li>▪ Arbitration Representation & Enforcement</li>
          </ul>

          <h3 className="text-3xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h3>

          <div className="space-y-6 text-gray-700 mb-16">

            <p>
              <strong>Step 1: Dispute Assessment & Legal Review</strong><br />
              Understanding the dispute, contractual obligations, and legal framework.
            </p>

            <p>
              <strong>Step 2: Mediation / Arbitration Strategy</strong><br />
              Designing a structured ADR approach tailored to the dispute.
            </p>

            <p>
              We clearly explain legal risks, possible outcomes, enforceability aspects, and strategic options before proceeding.
            </p>

            <p>
              <strong>Step 3: Negotiation & Structured Proceedings</strong><br />
              Facilitating discussions or representing clients during arbitration hearings.
            </p>

            <p>
              <strong>Step 4: Settlement Drafting & Closure</strong><br />
              Preparing legally enforceable settlement agreements.
            </p>

          </div>

          <h3 className="text-3xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </h3>

          <ul className="space-y-3 text-gray-700 mb-20">
            <li>✓ Experienced Mediation Lawyers and ADR Lawyers</li>
            <li>✓ Skilled Arbitration Lawyer representation</li>
            <li>✓ Confidential and time-efficient dispute resolution</li>
            <li>✓ Cost-effective and structured legal strategies</li>
            <li>✓ Strong settlement drafting and enforcement support</li>
          </ul>

        </section>

        {/* ================= FAQ ================= */}

        <section className="bg-[#F4F4F4] py-20">
          <div className="max-w-6xl mx-auto px-6">

            <h3 className="text-4xl font-bold mb-12">
              Frequently Asked Questions
            </h3>

           <div className="space-y-6 text-gray-800">

  {[
    {
      q: "Q1: What is mediation and how does it work?",
      a: "Mediation is a structured negotiation process where a neutral mediator helps parties reach a mutually acceptable settlement."
    },
    {
      q: "Q2: How is arbitration different from litigation?",
      a: "Arbitration is a private dispute resolution process, often faster and more flexible than court litigation."
    },
    {
      q: "Q3: Is ADR legally binding?",
      a: "Yes, arbitration awards and properly executed settlement agreements are legally enforceable."
    },
    {
      q: "Q4: Can disputes be resolved without going to court?",
      a: "Yes, many disputes can be effectively resolved through mediation or arbitration."
    },
    {
      q: "Q5: Can mediation be used in ongoing court cases?",
      a: "Yes, courts often refer matters to mediation during pending litigation, and we represent clients in court-referred mediation."
    },
    {
      q: "Q6: Do you assist in drafting and enforcing settlement agreements?",
      a: "Yes, we draft legally enforceable settlement agreements and consent terms to ensure compliance and clarity."
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

        <section className="bg-[#0B0F14] py-28 text-center text-white">

          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Get Immediate Legal Help from a Mediation Lawyer in Bangalore
            </h2>

            <p className="text-gray-300 mb-10">
              Consult our experienced ADR and arbitration lawyers today for structured and effective dispute resolution.
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