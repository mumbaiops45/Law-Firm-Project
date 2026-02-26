// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function NRILegalServicesPage() {

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
//                 NRI Legal Services
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
//               NRI Legal Services
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
//               Comprehensive legal support for Non-Resident Indians in property,
//               family, corporate, and litigation matters across India — managed
//               efficiently without the need for frequent travel.
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
//                 src="/nri-legal.png"
//                 alt="NRI Legal Services"
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
//               Our NRI legal services are designed to provide seamless legal
//               assistance to clients residing abroad. From property management
//               and dispute resolution to family law and corporate matters, we
//               offer reliable representation and end-to-end legal support in India.
//             </motion.p>



//             {/* ================= SERVICES ================= */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl font-semibold text-black mb-6"
//             >
//               Our NRI Legal Services
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
//             >
//               We provide dedicated legal assistance tailored to the needs of
//               NRIs handling legal matters in India.
//             </motion.p>



//             <motion.ul
//               variants={fadeUp}
//               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
//             >

//               <li>
//                 <span className="font-semibold text-black">
//                   Property Management & Disputes:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Handling property transactions, documentation, and disputes on behalf of NRIs.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Power of Attorney Assistance:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Drafting and managing power of attorney for smooth legal representation.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Family & Matrimonial Matters:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Legal assistance in divorce, custody, and family disputes.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Inheritance & Succession:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Assistance with wills, succession certificates, and inheritance claims.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Court Representation:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Representation in Indian courts without requiring frequent travel.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Corporate & Investment Advisory:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Legal guidance for business investments and compliance in India.
//                 </p>
//               </li>

//             </motion.ul>



//             {/* IMAGE */}

//             <motion.div variants={fadeUp} className="mb-16">

//               <Image
//                 src="/nri.png"
//                 alt="NRI Legal Consultation"
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
//               Why Choose Us for NRI Legal Services
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed"
//             >
//               We provide transparent communication, efficient case handling,
//               and trusted representation for NRIs across various legal matters.
//               Our goal is to ensure peace of mind while protecting your legal
//               rights and investments in India.
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
//               alt="NRI Legal Consultation"
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
//               Dedicated NRI Legal Support
//             </p>


//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Manage Your Legal Matters in India with Confidence
//             </h2>


//             <p className="text-gray-300 text-base md:text-lg mb-10">
//               Get professional and reliable legal assistance tailored for NRIs.
//             </p>

//              <Link href="/contact">
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
import Link from "next/link";
import Image from "next/image";
import { Import } from "lucide-react";

export default function NRILawyerPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* ================= HERO SECTION ================= */}

        <section className="bg-[#0B0F14] pt-32 pb-20">

          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-center">

            <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
              Trusted NRI Lawyers in Bangalore for Cross-Border Legal Matters
            </h1>

            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Our firm provides dedicated legal support as an NRI Lawyer in Bangalore, assisting Non-Resident Indians with property, family, and litigation matters in India. We offer structured legal solutions while ensuring seamless coordination for clients residing abroad.
            </p>

            <p className="text-gray-300 max-w-3xl mx-auto mb-6">
              Our goal is to protect your legal rights in India, minimize cross-border risks, and manage proceedings efficiently without requiring frequent travel.
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

          {/* HERO IMAGE */}

          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/nri-legal.png"
                alt="NRI Lawyer in Bangalore"
                width={1400}
                height={800}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />
            </div>
          </div>

        </section>


        {/* ================= MAIN CONTENT ================= */}

        <section className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20">

          <h2 className="text-4xl font-semibold mb-6">
            Dedicated Legal Services for Non-Resident Indians
          </h2>

          <p className="text-gray-700 mb-12">
            Non-Resident Indians often face legal challenges that require representation in India while living overseas. As experienced NRI Legal Advisors and NRI Litigation Lawyers, we handle complex cross-border legal matters with clarity and efficiency.
            Our attorneys provide reliable legal services for NRIs, ensuring timely updates, proper documentation, and strong court representation in Bangalore.
          </p>


          {/* SERVICES LIST */}

          <h3 className="text-3xl font-semibold mb-6">
            OUR NRI LEGAL SERVICES INCLUDE
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
            <li>▪ NRI Property Disputes & Due Diligence</li>
            <li>▪ Power of Attorney Drafting & Execution</li>
            <li>▪ NRI Family & Divorce Matters</li>
            <li>▪ Inheritance & Succession Issues</li>
            <li>▪ Court Representation & Litigation</li>
            <li>▪ Legal Advisory & Documentation Support</li>
            <li>▪ Title Verification & Transaction Management</li>
          </ul>


          {/* HOW WE WORK */}

          <h3 className="text-3xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h3>

          <div className="space-y-6 text-gray-700 mb-16">

            <p>
              <strong>Step 1: Case Review & Remote Consultation</strong><br />
              Understanding your legal concerns through virtual consultation.
            </p>

            <p>
              <strong>Step 2: Documentation & Authorization (POA)</strong><br />
              Guidance on executing Power of Attorney and required legal documents.
            </p>

            <p>
              We clearly explain legal risks, documentation requirements, and cross-border compliance aspects before proceeding.
            </p>

            <p>
              <strong>Step 3: Legal Strategy & Filing</strong><br />
              Preparation and filing of petitions, notices, or complaints as required.
            </p>

            <p>
              <strong>Step 4: Court Representation & Ongoing Updates</strong><br />
              Strong representation before courts while keeping you informed at every stage.
            </p>

          </div>


          {/* WHY CHOOSE US */}

          <h3 className="text-3xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </h3>

          <ul className="space-y-3 text-gray-700 mb-20">
            <li>✓ Experienced NRI Property Lawyers</li>
            <li>✓ Skilled NRI Litigation Lawyer representation</li>
            <li>✓ Clear and consistent communication for overseas clients</li>
            <li>✓ Efficient case handling without frequent travel</li>
            <li>✓ Structured cross-border legal coordination</li>
          </ul>

        </section>


        {/* ================= FAQ SECTION ================= */}

        <section className="bg-[#F4F4F4] py-20">

          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

            <h3 className="text-4xl font-semibold mb-12">
              Frequently Asked Questions
            </h3>

            <div className="space-y-10 text-gray-800">

              <div>
                <h4 className="font-semibold text-lg">
                  Q1: Can NRIs handle property disputes without travelling to India?
                </h4>
                <p className="mt-2">
                  Yes, through a valid Power of Attorney, legal proceedings can be managed by your appointed representative.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Q2: How is Power of Attorney used for NRIs?
                </h4>
                <p className="mt-2">
                  It authorizes a trusted person in India to act on your behalf for legal, property, and litigation matters.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Q3: Do you represent NRIs in family court matters?
                </h4>
                <p className="mt-2">
                  Yes, we handle divorce, custody, maintenance, and matrimonial disputes for Non-Resident Indians.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Q4: What documents are required for NRI legal cases?
                </h4>
                <p className="mt-2">
                  Passport copies, overseas address proof, property documents, agreements, and case-related records depending on the matter.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Q5: How do I verify clear property title?
                </h4>
                <p className="mt-2">
                  Through legal title verification, encumbrance search, and detailed document review conducted by our property lawyers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Q6: Can NRIs buy or sell property through legal representation?
                </h4>
                <p className="mt-2">
                  Yes, transactions can be managed through legally executed Power of Attorney and structured documentation support.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= FINAL CTA ================= */}

        <section className="bg-[#0B0F14] py-28 text-center text-white">

          <div className="max-w-5xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Get Immediate Legal Help from an NRI Lawyer in Bangalore
            </h2>

            <p className="text-gray-300 mb-10">
              Consult our experienced NRI legal services team today for structured and dependable legal assistance.
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