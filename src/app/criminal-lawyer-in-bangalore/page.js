// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function CriminalDefensePage() {

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
//                 Criminal Defense & Prosecution
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
//               Criminal Defense & Prosecution
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
//               Expert criminal defense and prosecution services ensuring your
//               rights are protected with strategic legal representation and
//               experienced courtroom advocacy.
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
//                 src="/criminal-law.png"
//                 alt="Criminal Defense"
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
//               Criminal law involves defending individuals and organizations
//               accused of criminal offenses while ensuring justice and legal
//               rights are protected. Our experienced criminal lawyers provide
//               strong defense strategies and professional prosecution services
//               across a wide range of criminal matters.
//             </motion.p>



//             {/* ================= SERVICES ================= */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl font-semibold text-black mb-6"
//             >
//               Our Criminal Defense Services
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
//             >
//               We provide comprehensive criminal law services ensuring strong
//               representation and effective legal protection at every stage.
//             </motion.p>



//             <motion.ul
//               variants={fadeUp}
//               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
//             >

//               <li>
//                 <span className="font-semibold text-black">
//                   Criminal Trial Representation:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Professional courtroom representation for all criminal cases.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Bail & Anticipatory Bail:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Assistance in securing bail and protecting client freedom.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   White Collar Crime Defense:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Defense in financial fraud, corruption, and economic offences.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   FIR Quashing:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Legal remedies for wrongful FIR and criminal allegations.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Cyber Crime Defense:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Defense against cyber fraud, online crime, and digital offenses.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Criminal Appeals:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Filing appeals and revisions for justice and legal protection.
//                 </p>
//               </li>

//             </motion.ul>



//             {/* IMAGE */}

//             <motion.div variants={fadeUp} className="mb-16">

//               <Image
//                 src="/lagel.png"
//                 alt="Criminal Legal Services"
//                 width={1200}
//                 height={600}
//                 className="w-full rounded-xl shadow-lg"
//               />

//             </motion.div>



//             {/* WHY CHOOSE */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
//             >
//               Why Choose Us for Criminal Defense
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed"
//             >
//               Our criminal defense team provides strategic, confidential,
//               and professional legal services. We focus on protecting client
//               rights, building strong defense strategies, and achieving the
//               best possible legal outcomes.
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
//               Get Expert Criminal Defense
//             </p>


//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Let’s Discuss Your Case
//             </h2>


//             <p className="text-gray-300 text-base md:text-lg mb-10">
//               Our experienced criminal lawyers are ready to protect your rights
//               and provide strong legal defense.
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

export default function CriminalDefensePage() {

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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 tracking-tight"
            >
              Criminal Defense & Prosecution Lawyers in Bangalore for Bail, Trial & Appeals
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Our firm provides strong and strategic representation as a Criminal Lawyer in Bangalore,
              handling serious allegations with precision and confidentiality.
              Our experienced attorneys manage Criminal Defense & Prosecution matters
              with a results-driven approach.
              <br />
              <br />
              Our goal is to protect your legal rights, minimize risk exposure, and build a strong defense strategy
              from the earliest stage of proceedings.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#C9A24D] mt-6 font-medium"
            >
              Response within 24 hours guaranteed.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/legal-consultation-in-bangalore">
                <button className="bg-[#C9A24D] text-black px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
                  Book Confidential Consultation
                </button>
              </Link>
              <Link href="tel:+919000000000">
                <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition">
                  Call Now
                </button>
              </Link>
            </div>

          </motion.div>

          {/* HERO IMAGE */}
          <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20">
            <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
              <Image
                src="/criminal-law.png"
                alt="Criminal Lawyer in Bangalore"
                width={1400}
                height={800}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />
            </div>
          </div>

        </section>

        <div className="h-40 md:h-60"></div>

        {/* ================= STRATEGIC SUPPORT ================= */}

        <section className="max-w-6xl mx-auto px-6 py-16 mt-16">

          <h2 className="text-4xl font-semibold mb-6">
            Strategic Criminal Defense & Prosecution Support
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Criminal cases demand immediate legal action and careful planning.
            Our team represents clients in complex criminal matters,
            ensuring their rights are protected at every stage.
            With extensive courtroom experience, our attorneys handle investigations,
            bail proceedings, trials, and appeals with structured legal strategy
            and clear communication.
          </p>

          {/* SERVICES */}
          <h3 className="text-3xl font-semibold mb-6">
            Our Criminal Law Services Include
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
            <li>▪ Bail Applications (Regular & Anticipatory)</li>
            <li>▪ FIR registration, quashing, and complaint defense</li>
            <li>▪ Sessions court and magistrate court trials</li>
            <li>▪ White Collar Crimes</li>
            <li>▪ Cyber Crime Cases</li>
            <li>▪ Domestic Violence & Assault Cases</li>
            <li>▪ Criminal appeals and revision petitions</li>
          </ul>

          {/* SECOND IMAGE */}
          <Image
            src="/lagel.png"
            alt="Criminal Defense Legal Services"
            width={600}
            height={400}
            className="w-full rounded-xl shadow-lg mb-16"
          />

          {/* APPROACH */}  
          <h3 className="text-3xl font-semibold mb-6">
            Our Approach / How We Work
          </h3>

          <div className="space-y-6 text-gray-700 mb-16">
            <p><strong>Step 1: Case Assessment & Legal Consultation</strong><br />
              Detailed review of allegations and available evidence.
            </p>

            <p><strong>Step 2: Evidence Review & Defense Strategy</strong><br />
              Developing a strong defense or prosecution strategy.
              We clearly explain legal risks, possible outcomes,
              and defense options before proceeding.
            </p>

            <p><strong>Step 3: Filing & Court Proceedings</strong><br />
              Handling petitions, documentation, and hearings.
            </p>

            <p><strong>Step 4: Trial Representation & Resolution</strong><br />
              Effective representation before courts to achieve fair outcomes.
            </p>
          </div>

          {/* WHY CHOOSE */}
          <h3 className="text-3xl font-semibold mb-6">
            Why Choose Our Firm
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>✓ Experienced Criminal Law Attorneys</li>
            <li>✓ Strong courtroom advocacy</li>
            <li>✓ Confidential and strategic case handling</li>
            <li>✓ Transparent legal guidance throughout the process</li>
          </ul>

        </section>

        {/* FAQ */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-4xl font-semibold mb-10 text-center">
              Frequently Asked Questions
            </h3>

            <div className="space-y-8 text-gray-700">
              <p><strong>Q1: How soon should I contact a criminal lawyer?</strong><br />
                Immediately after receiving notice, FIR, arrest, or police inquiry.
              </p>

              <p><strong>Q2: Can you help with bail matters?</strong><br />
                Yes, we handle regular and anticipatory bail applications.
              </p>

              <p><strong>Q3: Do you handle both defense and prosecution cases?</strong><br />
                Yes, we provide Criminal Defense & Prosecution services.
              </p>

              <p><strong>Q4: What documents should I bring?</strong><br />
                FIR copy, notice, charge sheet, arrest memo and relevant documents.
              </p>

              <p><strong>Q5: Can a criminal case be settled?</strong><br />
                Some cases may be legally compoundable depending on the offence.
              </p>

              <p><strong>Q6: What happens after an FIR is filed?</strong><br />
                Police investigation begins followed by court proceedings.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative py-28 overflow-hidden">
          <Image
            src="/discussion.png"
            alt="Criminal Lawyer Consultation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Get Immediate Legal Help from a Criminal Lawyer in Bangalore
            </h2>

            <p className="text-gray-300 mb-10">
              Consult our experienced criminal defense attorneys today.
              All matters handled with complete confidentiality and legal discretion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold">
                  Book Confidential Consultation
                </button>
              </Link>

              <Link href="/contact">
                <button className="border border-white text-white px-8 py-4 rounded-lg">
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