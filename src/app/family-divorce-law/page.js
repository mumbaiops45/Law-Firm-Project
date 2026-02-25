// // "use client";

// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Image from "next/image";
// // import { motion } from "framer-motion";
// // import Link from "next/link";

// // export default function FamilyDivorceLawPage() {

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
// //                 Family & Divorce Law
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
// //               Family & Divorce Law
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
// //               Compassionate and professional legal support for family disputes,
// //               divorce matters, child custody, and protection of your legal rights.
// //             </motion.p>

// //           </motion.div>



// //           {/* FLOATING IMAGE CARDS */}

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

// //             <div className="grid md:grid-cols-2 gap-6 mt-70">


// //               {/* FAMILY LAW CARD */}

// //               <motion.div
// //                 variants={fadeUp}
// //                 className="rounded-xl overflow-hidden shadow-2xl bg-white"
// //               >

// //                 <Image
// //                   src="/family-law.jpg"
// //                   alt="Family Law"
// //                   width={700}
// //                   height={600}
// //                   className="w-full h-[400px] object-cover"
// //                   priority
// //                 />

// //                 <div className="p-6">

// //                   <h3 className="text-xl font-semibold text-black mb-2 text-center">
// //                     Family Law
// //                   </h3>

// //                   <p className="text-gray-600 text-sm leading-relaxed text-center">
// //                     Legal assistance for family disputes, child custody,
// //                     maintenance, and protection of your legal rights with
// //                     professional and compassionate support.
// //                   </p>

// //                 </div>

// //               </motion.div>



// //               {/* DIVORCE LAW CARD */}

// //               <motion.div
// //                 variants={fadeUp}
// //                 className="rounded-xl overflow-hidden shadow-2xl bg-white"
// //               >

// //                 <Image
// //                   src="/divorce.png"
// //                   alt="Divorce Law"
// //                   width={700}
// //                   height={600}
// //                   className="w-full h-[400px] object-cover"
// //                   priority
// //                 />

// //                 <div className="p-6">

// //                   <h3 className="text-xl font-semibold text-black mb-2 text-center">
// //                     Divorce Law
// //                   </h3>

// //                   <p className="text-gray-600 text-sm leading-relaxed text-center">
// //                     Expert legal representation for mutual and contested divorce,
// //                     ensuring fair settlements, alimony, and protection of your future.
// //                   </p>

// //                 </div>

// //               </motion.div>


// //             </div>

// //           </motion.div>

// //         </section>



// //         {/* SPACING */}

// //         <div className="h-64 md:h-80"></div>



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
// //               className="text-4xl md:text-5xl font-semibold text-black mb-6"
// //             >
// //               Overview
// //             </motion.h2>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
// //             >
// //               Family and divorce law involves sensitive legal matters that impact
// //               your personal life and future. Our experienced lawyers provide strategic,
// //               confidential, and compassionate legal representation to ensure your
// //               rights and interests are fully protected.
// //             </motion.p>



// //             {/* SERVICES */}

// //             <motion.h3
// //               variants={fadeUp}
// //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// //             >
// //               Our Family & Divorce Law Services
// //             </motion.h3>


// //             <motion.ul
// //               variants={fadeUp}
// //               className="list-disc pl-6 space-y-6 text-gray-700 mb-16"
// //             >

// //               <li>Mutual and Contested Divorce Cases</li>
// //               <li>Child Custody and Visitation Rights</li>
// //               <li>Maintenance and Alimony Claims</li>
// //               <li>Domestic Violence Protection</li>
// //               <li>Family Dispute Resolution</li>
// //               <li>Property and Asset Division</li>

// //             </motion.ul>



// //             {/* IMAGE */}

// //             <motion.div
// //               variants={fadeUp}
// //               className="mb-16 max-w-4xl mx-auto"
// //             >

// //               <Image
// //                 src="/familylaw.png"
// //                 alt="Family Law Consultation"
// //                 width={900}
// //                 height={500}
// //                 className="
// //       w-full
// //       h-[480px] md:h-[540px]
// //       object-cover
// //       rounded-xl
// //       shadow-lg
// //     "
// //                 sizes="(max-width: 768px) 100vw, 900px"
// //               />

// //             </motion.div>



// //             {/* WHY CHOOSE */}

// //             <motion.h3
// //               variants={fadeUp}
// //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// //             >
// //               Why Choose Us for Family & Divorce Law
// //             </motion.h3>


// //             <motion.p
// //               variants={fadeUp}
// //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// //             >
// //               We provide professional, confidential, and result-oriented legal
// //               services. Our goal is to resolve family disputes efficiently while
// //               protecting your rights and ensuring the best possible outcome.
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
// //               alt="Family Consultation"
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
// //               Confidential Legal Support
// //             </p>


// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Speak With Our Family Law Experts
// //             </h2>


// //             <p className="text-gray-300 mb-10">
// //               Get professional legal support for family and divorce matters.
// //             </p>

// //             <Link href="/contact">
// //               <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// //                 Book Consultation
// //               </button>
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

// export default function FamilyDivorceLawPage() {

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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
//             className="max-w-6xl mx-auto px-6 text-center"
//           >

//             <motion.h1
//               variants={fadeUp}
//               className="text-4xl md:text-6xl font-semibold text-white mb-6"
//             >
//               Trusted Family & Divorce Law Services in Bangalore Focused on Protecting Your Future
//             </motion.h1>

//             <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-4">
//               Our firm provides trusted legal representation in Family & Divorce Law matters, offering strategic guidance through sensitive matrimonial and family disputes.
//             </motion.p>

//             <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-4">
//               Our experienced Divorce Lawyer and Family Court Lawyer team ensures practical, confidential, and result-oriented solutions.
//             </motion.p>

//             <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-6">
//               Our goal is to protect your rights, secure fair settlements, and ensure long-term legal stability for you and your family.
//             </motion.p>

//             <motion.p variants={fadeUp} className="text-[#C9A24D] font-semibold mb-8">
//               Response within 24 hours guaranteed.
//             </motion.p>

//             <motion.div variants={fadeUp} className="flex justify-center gap-6 flex-wrap">

//               <Link
//                 href="/legal-consultation-in-bangalore"
//                 className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
//               >
//                 Book Confidential Consultation
//               </Link>

//               <Link
//                 href="tel:+919000000000"
//                 className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
//               >
//                 Call Now
//               </Link>

//             </motion.div>

//           </motion.div>
//         </section>


//         {/* ================= ABOUT SERVICE ================= */}

//         <section className="max-w-6xl mx-auto px-6 py-20">

//           <h2 className="text-4xl font-semibold mb-6">
//             Trusted Legal Support for Family & Divorce Matters
//           </h2>

//           <p className="text-gray-700 text-lg mb-6">
//             Family disputes require legal clarity with emotional sensitivity. Our Family & Divorce Law practice focuses on protecting your rights while guiding you through every stage of the legal process.
//           </p>

//           <p className="text-gray-700 text-lg mb-12">
//             As experienced Divorce Lawyers and Family Court Lawyers, we handle complex matrimonial litigation, custody battles, and settlement negotiations with discretion and professionalism.
//           </p>


//           {/* SERVICES LIST */}

//           <h3 className="text-2xl font-semibold mb-8">
//             OUR FAMILY & DIVORCE LEGAL SERVICES INCLUDE
//           </h3>

//           <div className="grid md:grid-cols-2 gap-6 mb-16">
//             {[
//               "Mutual Consent Divorce",
//               "Contested Divorce",
//               "Child Custody & Visitation Rights",
//               "Maintenance & Alimony",
//               "Protection under Domestic Violence Act",
//               "Matrimonial property and financial settlements",
//               "Legal notices, petitions, and settlement agreements"
//             ].map((item, index) => (
//               <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
//                 <p className="text-lg font-medium">{item}</p>
//               </div>
//             ))}
//           </div>


//           {/* ================= APPROACH ================= */}

//           <h2 className="text-4xl font-semibold mb-6">
//             OUR APPROACH / HOW WE WORK
//           </h2>

//           <div className="space-y-6 text-gray-700 text-lg mb-16">
//             <p><strong>Step 1:</strong> Confidential Consultation – We understand your situation and assess legal options.</p>
//             <p><strong>Step 2:</strong> Case Evaluation & Strategy Planning – A clear legal strategy is designed based on your objectives. We clearly explain legal risks, possible outcomes, and settlement options before proceeding.</p>
//             <p><strong>Step 3:</strong> Petition Filing & Documentation – Accurate preparation and filing of required legal documents.</p>
//             <p><strong>Step 4:</strong> Court Representation & Resolution – Strong representation before the Family Court for fair resolution.</p>
//           </div>


//           {/* ================= WHY CHOOSE ================= */}

//           <h2 className="text-4xl font-semibold mb-6">
//             WHY CHOOSE OUR FIRM
//           </h2>

//           <ul className="space-y-4 text-lg mb-16">
//             <li>✓ Experienced Family & Divorce Law Advocates</li>
//             <li>✓ Dedicated Divorce Lawyer & Family Court Lawyer Support</li>
//             <li>✓ Discreet & Confidential Case Handling</li>
//             <li>✓ Transparent Legal Guidance & Clear Communication</li>
//           </ul>


//           {/* ================= FAQ ================= */}

//           <h2 className="text-4xl font-semibold mb-6">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-6 text-gray-700 text-lg">
//             <p><strong>Q1:</strong> How long does a divorce process take?<br />The timeline depends on whether it is mutual consent or contested, and the complexity of issues involved.</p>
//             <p><strong>Q2:</strong> What documents are required for filing divorce?<br />Marriage certificate, address proof, identity documents, income details, and supporting evidence depending on the case.</p>
//             <p><strong>Q3:</strong> What is the role of a Family Court Lawyer?<br />A Family Court Lawyer represents you in family court proceedings, drafts petitions, negotiates settlements, and protects your legal rights.</p>
//             <p><strong>Q4:</strong> How is child custody decided?<br />Custody decisions are based on the child’s welfare, financial stability, parental capability, and overall best interests of the child.</p>
//             <p><strong>Q5:</strong> Can divorce be settled without a court trial?<br />Many matters can be resolved through mutual consent divorce or structured settlement negotiations.</p>
//             <p><strong>Q6:</strong> How is alimony calculated?<br />It depends on income, financial capacity, duration of marriage, standard of living, and court discretion.</p>
//           </div>

//         </section>


//         {/* ================= FINAL CTA ================= */}

//         <section className="relative py-28 text-center text-white">
//           <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
//           <div className="absolute inset-0 bg-black/75"></div>

//           <div className="relative max-w-4xl mx-auto px-6">
//             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
//               Get Immediate Legal Help from a Divorce Lawyer in Bangalore
//             </h2>

//             <p className="text-gray-300 mb-10 text-lg">
//               Speak with our experienced Divorce Lawyer and Family Court Lawyer today for confidential guidance.
//             </p>

//             <div className="flex gap-6 justify-center flex-wrap">

//               <Link
//                 href="/legal-consultation-in-bangalore"
//                 className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
//               >
//                 Book Confidential Consultation
//               </Link>

//               <Link
//                 href="/contact"
//                 className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
//               >
//                 Request Call Back
//               </Link>

//             </div>

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

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FamilyDivorceLawPage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeImage = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
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
            className="max-w-6xl mx-auto px-6 text-center"
          >

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-semibold text-white mb-6"
            >
              Trusted Family & Divorce Law Services in Bangalore Focused on Protecting Your Future
            </motion.h1>

            <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-4">
              Our firm provides trusted legal representation in Family & Divorce Law matters, offering strategic guidance through sensitive matrimonial and family disputes.
            </motion.p>

            <motion.p variants={fadeUp} className="text-gray-400 text-lg mb-6">
              Our experienced Divorce Lawyer and Family Court Lawyer team ensures practical, confidential, and result-oriented solutions.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[#C9A24D] font-semibold mb-8">
              Response within 24 hours guaranteed.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center gap-6 flex-wrap">
              <Link
                href="/legal-consultation-in-bangalore"
                className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
              >
                Book Confidential Consultation
              </Link>

              <Link
                href="tel:+919000000000"
                className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
              >
                Call Now
              </Link>
            </motion.div>
          </motion.div>

          {/* HERO IMAGE CARDS */}

          <motion.div
            variants={fadeImage}
            initial="hidden"
            animate="visible"
            className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20"
          >

            <div className="grid md:grid-cols-2 gap-6 mt-52">

              <motion.div variants={fadeUp} className="rounded-xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/family-law.jpg"
                  alt="Family Law"
                  width={700}
                  height={600}
                  className="w-full h-[400px] object-cover"
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">
                    Family Law
                  </h3>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src="/divorce.png"
                  alt="Divorce Law"
                  width={700}
                  height={600}
                  className="w-full h-[400px] object-cover"
                  priority
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2 text-center">
                    Divorce Law
                  </h3>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </section>

        <div className="h-72 md:h-96"></div>

        {/* ================= ABOUT SERVICE ================= */}

        <section className="max-w-6xl mx-auto px-6 py-20">

          <h2 className="text-4xl font-semibold mb-6">
            Trusted Legal Support for Family & Divorce Matters
          </h2>

          <p className="text-gray-700 text-lg mb-6">
            Family disputes require legal clarity with emotional sensitivity. Our Family & Divorce Law practice focuses on protecting your rights while guiding you through every stage of the legal process.
          </p>

          <p className="text-gray-700 text-lg mb-12">
            As experienced Divorce Lawyers and Family Court Lawyers, we handle complex matrimonial litigation, custody battles, and settlement negotiations with discretion and professionalism.
          </p>

          {/* SERVICES */}

          <h3 className="text-2xl font-semibold mb-8">
            OUR FAMILY & DIVORCE LEGAL SERVICES INCLUDE
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              "Mutual Consent Divorce",
              "Contested Divorce",
              "Child Custody & Visitation Rights",
              "Maintenance & Alimony",
              "Protection under Domestic Violence Act",
              "Matrimonial property and financial settlements",
              "Legal notices, petitions, and settlement agreements"
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* MID CONTENT IMAGE */}

          <div className="mb-16">
            <Image
              src="/familylaw.png"
              alt="Family Law Consultation"
              width={900}
              height={500}
              className="w-full h-[450px] object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* APPROACH */}

          <h2 className="text-4xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h2>

          <div className="space-y-6 text-gray-700 text-lg mb-16">
            <p><strong>Step 1:</strong> Confidential Consultation – We understand your situation and assess legal options.</p>
            <p><strong>Step 2:</strong> Case Evaluation & Strategy Planning – A clear legal strategy is designed based on your objectives.</p>
            <p><strong>Step 3:</strong> Petition Filing & Documentation – Accurate preparation and filing of required legal documents.</p>
            <p><strong>Step 4:</strong> Court Representation & Resolution – Strong representation before the Family Court for fair resolution.</p>
          </div>

          {/* WHY CHOOSE */}

          <h2 className="text-4xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </h2>

          <ul className="space-y-4 text-lg mb-16">
            <li>✓ Experienced Family & Divorce Law Advocates</li>
            <li>✓ Dedicated Divorce Lawyer & Family Court Lawyer Support</li>
            <li>✓ Discreet & Confidential Case Handling</li>
            <li>✓ Transparent Legal Guidance & Clear Communication</li>
          </ul>

          {/* FAQ */}

          <h2 className="text-4xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 text-gray-700 text-lg">
            <p><strong>Q1:</strong> How long does a divorce process take?<br />The timeline depends on whether it is mutual consent or contested.</p>
            <p><strong>Q2:</strong> What documents are required?<br />Marriage certificate, address proof, identity documents, and income details.</p>
            <p><strong>Q3:</strong> How is child custody decided?<br />Custody decisions are based on the welfare of the child.</p>
            <p><strong>Q4:</strong> Can divorce be settled without trial?<br />Yes, through mutual consent or structured settlement negotiations.</p>
            <p><strong>Q5:</strong> How is alimony calculated?<br />Based on income, financial capacity, and court discretion.</p>
          </div>

        </section>

        {/* FINAL CTA */}

        <section className="relative py-28 text-center text-white">
          <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/75"></div>

          <div className="relative max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Get Immediate Legal Help from a Divorce Lawyer in Bangalore
            </h2>

            <p className="text-gray-800 mb-10 text-lg">
              Speak with our experienced Divorce Lawyer and Family Court Lawyer today.
            </p>

            <div className="flex gap-6 justify-center flex-wrap">
              <Link
                href="/legal-consultation-in-bangalore"
                className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
              >
                Book Confidential Consultation
              </Link>

              <Link
                href="/contact"
                className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
              >
                Request Call Back
              </Link>
            </div>

            <p className="text-gray-800 text-sm mt-8">
              All matters handled with complete confidentiality and legal discretion.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}