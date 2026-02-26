// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// export default function PropertyRealEstateLawPage() {

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
//                 Property & Real Estate Law
//               </span>
//             </motion.p>


//             <motion.h1
//               variants={fadeUp}
//               className="
//                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
//                 font-semibold
//                 text-white
//                 mb-6
//               "
//             >
//               Property & Real Estate Law
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
//               Professional legal assistance for property disputes, real estate
//               transactions, ownership issues, and protection of your property rights.
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

//             <div className="rounded-xl overflow-hidden shadow-2xl bg-white mt-99">

//               <Image
//                 src="/property.png"
//                 alt="Property Real Estate Law"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[450px] md:h-[550px] object-cover"
//                 priority
//               />

              

//             </div>

//           </motion.div>

//         </section>



//         {/* SPACING */}

//         <div className="h-64 md:h-80"></div>



//         {/* ================= OVERVIEW ================= */}

//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//         >

//           <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-34">


//             <motion.h2
//               variants={fadeUp}
//               className="text-4xl md:text-5xl font-semibold text-black mb-6"
//             >
//               Overview
//             </motion.h2>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
//             >
//               Property and real estate law involves legal matters related to property
//               ownership, transactions, disputes, and legal documentation. Our experienced
//               lawyers provide professional guidance to ensure secure and legally compliant
//               property dealings.
//             </motion.p>



//             {/* SERVICES */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl font-semibold text-black mb-6"
//             >
//               Our Property Law Services
//             </motion.h3>


//             <motion.ul
//               variants={fadeUp}
//               className="list-disc pl-6 space-y-6 text-gray-700 mb-16"
//             >

//               <li>Property Dispute Resolution</li>
//               <li>Title Verification and Legal Due Diligence</li>
//               <li>Sale Deed and Agreement Drafting</li>
//               <li>Property Registration Support</li>
//               <li>Real Estate Transaction Legal Support</li>
//               <li>Ownership and Possession Disputes</li>

//             </motion.ul>



//             {/* IMAGE */}

//             <motion.div variants={fadeUp} className="mb-16">

//               <Image
//                 src="/property1.png"
//                 alt="Property Consultation"
//                 width={1200}
//                 height={600}
//                 className="w-full rounded-xl shadow-lg"
//               />

//             </motion.div>



//             {/* WHY CHOOSE */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl font-semibold text-black mb-6"
//             >
//               Why Choose Our Property Lawyers
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed"
//             >
//               We provide reliable, professional, and strategic legal support to protect
//               your property rights and ensure safe real estate transactions with complete
//               legal compliance.
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
//               alt="Property Consultation"
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
//               Property Legal Assistance
//             </p>


//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Protect Your Property Rights Today
//             </h2>


//             <p className="text-gray-300 mb-10">
//               Get professional legal support for property disputes and real estate transactions.
//             </p>

//              <Link href="/contact">
//             <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
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

export default function PropertyRealEstateLawPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
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
              Leading Property & Real Estate Lawyers in Bangalore for Transactions and Disputes
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed"
            >
              Our firm provides strategic legal support in Property & Real Estate Law matters,
              assisting individuals, businesses, and NRIs with secure transactions and dispute resolution.
              Our experienced property lawyer and real estate lawyer team ensures legally sound
              documentation and strong representation in Bangalore.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#C9A24D] mt-6 font-medium"
            >
              Response within 24 hours guaranteed.
            </motion.p>

            {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"> */}
            <div className="relative z-20 mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
         <div className="max-w-6xl mx-auto px-6 mt-16">
  <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
    <Image
      src="/property.png"
      alt="Property & Real Estate Lawyer in Bangalore"
      width={1000}
      height={500}
      className="w-full h-[450px] md:h-[550px] object-cover"
      priority
    />
  </div>
</div>
        </section>

        {/* <div className="h-64 md:h-80"></div> */}

        {/* ================= CONTENT ================= */}

        <section className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-4xl font-semibold mb-6">
            Trusted Legal Support for Property Matters
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Property transactions and disputes require precision and legal clarity.
            Our attorneys handle complex real estate matters with structured due diligence
            and risk assessment. As experienced property lawyers in Bangalore, we guide
            clients through documentation, negotiations, and litigation with transparency
            and professionalism.
          </p>

          {/* SERVICES */}
          <h3 className="text-3xl font-semibold mb-6">
            Our Property & Real Estate Services Include
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
            <li>▪ Property Due Diligence</li>
            <li>▪ Sale Deed & Agreement Drafting</li>
            <li>▪ Land & Title Verification</li>
            <li>▪ Property Disputes & Litigation</li>
            <li>▪ Builder & Real Estate Disputes</li>
            <li>▪ Partition & Inheritance Matters</li>
            <li>▪ Registration & Documentation Support</li>
          </ul>

          {/* SECOND IMAGE */}
          <Image
            src="/property1.png"
            alt="Property Legal Consultation Bangalore"
            width={1200}
            height={600}
            className="w-full rounded-xl shadow-lg mb-16"
          />

          {/* HOW WE WORK */}
          <h3 className="text-3xl font-semibold mb-6">
            Our Approach / How We Work
          </h3>

          <div className="space-y-6 text-gray-700">
            <p><strong>Step 1: Legal Consultation</strong><br />
              Understanding your transaction or dispute in detail.
            </p>

            <p><strong>Step 2: Document Review & Risk Assessment</strong><br />
              Comprehensive verification of title, ownership, and compliance.
              We clearly explain legal risks, possible outcomes, and ownership implications before proceeding.
            </p>

            <p><strong>Step 3: Strategy & Legal Action</strong><br />
              Structured legal planning based on your objectives.
            </p>

            <p><strong>Step 4: Court / Tribunal Representation</strong><br />
              Strong representation before courts and relevant authorities.
            </p>
          </div>

          {/* WHY CHOOSE */}
          <h3 className="text-3xl font-semibold mt-16 mb-6">
            Why Choose Our Firm
          </h3>

          <ul className="space-y-4 text-gray-700">
            <li>✓ Experienced property lawyer and real estate lawyer team</li>
            <li>✓ Practical legal advice tailored to Bangalore property laws</li>
            <li>✓ Strong litigation and documentation expertise</li>
            <li>✓ Transparent process with clear communication</li>
          </ul>
        </section>

        {/* ================= FAQ ================= */}

        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-4xl font-semibold mb-10 text-center">
              Frequently Asked Questions
            </h3>

            <div className="space-y-8 text-gray-700">
              <p><strong>Q1: Why is property due diligence important?</strong><br />
                It helps identify ownership issues, encumbrances, zoning restrictions, and legal risks before purchase.
              </p>

              <p><strong>Q2: What documents are required for property verification?</strong><br />
                Title deed, encumbrance certificate, tax receipts, layout approvals, identity proof, and previous ownership records.
              </p>

              <p><strong>Q3: How long does a property dispute case take?</strong><br />
                Timelines depend on complexity, court proceedings, documentation, and evidence review.
              </p>

              <p><strong>Q4: Do you handle builder disputes?</strong><br />
                Yes, we assist in resolving builder delays, agreement breaches, and RERA-related matters.
              </p>

              <p><strong>Q5: How do I verify clear property title?</strong><br />
                Through legal title verification, encumbrance search, document review, and verification of ownership records.
              </p>

              <p><strong>Q6: Can NRIs buy or sell property through legal representation?</strong><br />
                Yes, transactions can be handled through legal authorization, Power of Attorney documentation, and structured legal oversight.
              </p>
            </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="relative py-28 overflow-hidden">
          <Image
            src="/discussion.png"
            alt="Property Lawyer Consultation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Get Immediate Legal Help from a Property Lawyer in Bangalore
            </h2>

            <p className="text-gray-400 mb-10">
              Schedule a consultation with our experienced attorneys today.
              All matters handled with complete confidentiality and legal discretion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/legal-consultation-in-bangalore">
                <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold">
                  Book Confidential Consultation
                </button>
              </Link>

              <Link href="tel:+919000000000">
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