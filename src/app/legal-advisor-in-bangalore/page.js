// // // // "use client";

// // // // import Navbar from "../components/Navbar";
// // // // import Footer from "../components/Footer";
// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";
// // // // import Link from "next/link";

// // // // export default function LegalAdvisoryRegulatoryCompliancePage() {

// // // //   const fadeUp = {
// // // //     hidden: { opacity: 0, y: 40 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: {
// // // //         duration: 0.8,
// // // //         ease: "easeOut"
// // // //       }
// // // //     }
// // // //   };

// // // //   const fadeImage = {
// // // //     hidden: { opacity: 0, scale: 1.05 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       scale: 1,
// // // //       transition: {
// // // //         duration: 1.2
// // // //       }
// // // //     }
// // // //   };

// // // //   const stagger = {
// // // //     visible: {
// // // //       transition: {
// // // //         staggerChildren: 0.2
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       <main className="bg-white overflow-hidden">

// // // //         {/* ================= HERO ================= */}

// // // //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// // // //           <motion.div
// // // //             variants={stagger}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center"
// // // //           >

// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-400 text-sm mb-6"
// // // //             >
// // // //               Home <span className="mx-2">›</span>
// // // //               <span className="text-[#C9A24D]">
// // // //                 Legal Advisory & Regulatory Compliance
// // // //               </span>
// // // //             </motion.p>


// // // //             <motion.h1
// // // //               variants={fadeUp}
// // // //               className="
// // // //                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
// // // //                 font-semibold
// // // //                 text-white
// // // //                 mb-6
// // // //                 tracking-tight
// // // //               "
// // // //             >
// // // //               Legal Advisory & Regulatory Compliance
// // // //             </motion.h1>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="
// // // //                 text-gray-400
// // // //                 text-base sm:text-lg md:text-xl
// // // //                 max-w-3xl mx-auto
// // // //                 leading-relaxed
// // // //               "
// // // //             >
// // // //               Expert legal advisory services ensuring your business complies
// // // //               with all regulatory requirements while minimizing risk and
// // // //               ensuring smooth operational governance.
// // // //             </motion.p>

// // // //           </motion.div>



// // // //           {/* FLOATING IMAGE */}

// // // //           <motion.div
// // // //             variants={fadeImage}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             className="
// // // //               absolute
// // // //               left-1/2
// // // //               -translate-x-1/2
// // // //               translate-y-1/2
// // // //               bottom-0
// // // //               w-full
// // // //               max-w-6xl
// // // //               px-6
// // // //               z-20
// // // //             "
// // // //           >

// // // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">

// // // //               <Image
// // // //                 src="/legal-advisory.png"
// // // //                 alt="Legal Advisory Regulatory Compliance"
// // // //                 width={1400}
// // // //                 height={800}
// // // //                 className="w-full h-[400px] md:h-[500px] object-cover"
// // // //                 priority
// // // //               />

// // // //             </div>

// // // //           </motion.div>

// // // //         </section>



// // // //         {/* SPACING */}

// // // //         <div className="h-40 md:h-60"></div>



// // // //         {/* ================= OVERVIEW ================= */}

// // // //         <motion.section
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true }}
// // // //           variants={stagger}
// // // //         >

// // // //           <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-24">


// // // //             <motion.h2
// // // //               variants={fadeUp}
// // // //               className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight"
// // // //             >
// // // //               Overview
// // // //             </motion.h2>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
// // // //             >
// // // //               Legal advisory and regulatory compliance services help businesses
// // // //               operate within legal frameworks while minimizing risks. Our legal
// // // //               experts provide strategic guidance, compliance management, and
// // // //               regulatory support to ensure smooth and legally compliant operations.
// // // //             </motion.p>



// // // //             {/* ================= SERVICES ================= */}

// // // //             <motion.h3
// // // //               variants={fadeUp}
// // // //               className="text-3xl md:text-4xl font-semibold text-black mb-6"
// // // //             >
// // // //               Our Legal Advisory Services
// // // //             </motion.h3>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
// // // //             >
// // // //               We provide professional legal advisory and compliance solutions
// // // //               tailored to businesses, startups, and corporate organizations.
// // // //             </motion.p>



// // // //             <motion.ul
// // // //               variants={fadeUp}
// // // //               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
// // // //             >

// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Corporate Legal Advisory:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Ongoing legal support for business operations and decision making.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Regulatory Compliance Management:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Ensuring compliance with government laws and regulatory authorities.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Contract Review & Drafting:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Drafting and reviewing legal contracts to protect business interests.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Risk Assessment & Legal Audits:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Identifying legal risks and ensuring regulatory compliance.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Licensing & Regulatory Approvals:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Assistance with licenses, registrations, and regulatory approvals.
// // // //                 </p>
// // // //               </li>


// // // //               <li>
// // // //                 <span className="font-semibold text-black">
// // // //                   Business Compliance Advisory:
// // // //                 </span>
// // // //                 <p className="mt-2 text-base md:text-lg leading-relaxed">
// // // //                   Ensuring ongoing compliance with corporate and government regulations.
// // // //                 </p>
// // // //               </li>

// // // //             </motion.ul>



// // // //             {/* IMAGE */}

// // // //             <motion.div variants={fadeUp} className="mb-16">

// // // //               <Image
// // // //                 src="/legal-compliance.png"
// // // //                 alt="Legal Compliance Consultation"
// // // //                 width={1200}
// // // //                 height={600}
// // // //                 className="w-full rounded-xl shadow-lg"
// // // //               />

// // // //             </motion.div>



// // // //             {/* WHY CHOOSE */}

// // // //             <motion.h3
// // // //               variants={fadeUp}
// // // //               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
// // // //             >
// // // //               Why Choose Us for Legal Advisory
// // // //             </motion.h3>


// // // //             <motion.p
// // // //               variants={fadeUp}
// // // //               className="text-gray-600 text-base md:text-lg leading-relaxed"
// // // //             >
// // // //               Our legal experts provide strategic advisory, regulatory compliance,
// // // //               and risk management services. We help businesses stay compliant,
// // // //               reduce legal risks, and operate confidently within the legal framework.
// // // //             </motion.p>

// // // //           </div>

// // // //         </motion.section>



// // // //         {/* ================= CTA ================= */}

// // // //         <motion.section
// // // //           initial={{ opacity: 0 }}
// // // //           whileInView={{ opacity: 1 }}
// // // //           transition={{ duration: 1 }}
// // // //           className="relative py-28 mt-20 overflow-hidden"
// // // //         >

// // // //           <div className="absolute inset-0">

// // // //             <Image
// // // //               src="/discussion.png"
// // // //               alt="Legal Consultation"
// // // //               fill
// // // //               className="object-cover"
// // // //             />

// // // //             <div className="absolute inset-0 bg-black/70"></div>

// // // //           </div>


// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 60 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //             className="relative max-w-5xl mx-auto px-6 text-center"
// // // //           >

// // // //             <p className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4">
// // // //               Legal Compliance Experts
// // // //             </p>


// // // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // // //               Ensure Your Business is Legally Compliant
// // // //             </h2>


// // // //             <p className="text-gray-300 text-base md:text-lg mb-10">
// // // //               Get expert legal advisory and regulatory compliance support today.
// // // //             </p>

// // // //            <Link href="/contact">
// // // //             <button className="
// // // //               bg-[#C9A24D]
// // // //               text-black
// // // //               px-8 py-4
// // // //               rounded-lg
// // // //               font-semibold
// // // //               hover:scale-105
// // // //               transition
// // // //             ">
// // // //               Book Consultation
// // // //             </button>
// // // //             </Link>

// // // //           </motion.div>

// // // //         </motion.section>


// // // //       </main>

// // // //       <Footer />

// // // //     </>
// // // //   );
// // // // }



// // // "use client";

// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";

// // // export default function LegalAdvisorPage() {

// // //   const fadeUp = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { duration: 0.8, ease: "easeOut" }
// // //     }
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <main className="bg-white overflow-hidden">

// // //         {/* ================= HERO ================= */}

// // //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// // //           <div className="max-w-7xl mx-auto px-6 text-center">

// // //             <motion.h1
// // //               variants={fadeUp}
// // //               initial="hidden"
// // //               animate="visible"
// // //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// // //             >
// // //               Expert Legal Advisor in Bangalore for Strategic Advisory & Regulatory Compliance
// // //             </motion.h1>

// // //             <motion.p
// // //               variants={fadeUp}
// // //               initial="hidden"
// // //               animate="visible"
// // //               className="text-gray-300 max-w-3xl mx-auto mb-6"
// // //             >
// // //               Our firm provides structured legal advisory and compliance solutions for businesses in Bangalore, helping minimize regulatory risk and strengthen governance.
// // //             </motion.p>

// // //             <motion.p
// // //               variants={fadeUp}
// // //               initial="hidden"
// // //               animate="visible"
// // //               className="text-[#C9A24D] font-semibold mb-8"
// // //             >
// // //               Response within 24 hours guaranteed.
// // //             </motion.p>

// // //             <div className="flex justify-center gap-4 flex-wrap">
// // //               <Link
// // //                 href="/legal-consultation-in-bangalore"
// // //                 className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
// // //               >
// // //                 Book Confidential Consultation
// // //               </Link>

// // //               <a
// // //                 href="tel:+919000000000"
// // //                 className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// // //               >
// // //                 Call Now
// // //               </a>
// // //             </div>

// // //           </div>

// // //           {/* HERO IMAGE (NOT REMOVED) */}
// // //           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20">
// // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
// // //               <Image
// // //                 src="/legal-advisory.png"
// // //                 alt="Legal Advisor in Bangalore"
// // //                 width={1400}
// // //                 height={800}
// // //                 className="w-full h-[400px] md:h-[500px] object-cover"
// // //                 priority
// // //               />
// // //             </div>
// // //           </div>

// // //         </section>

// // //         <div className="h-40 md:h-60"></div>

// // //         {/* ================= CONTENT ================= */}

// // //         <section className="max-w-6xl mx-auto px-6 py-16 mt-24">

// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             Strategic Legal Advisory & Compliance Support
// // //           </h2>

// // //           <p className="text-gray-600 mb-12">
// // //             As a trusted Legal Advisor in Bangalore, we assist businesses with regulatory compliance, contract drafting, governance structuring, and risk mitigation strategies.
// // //           </p>

// // //           <h3 className="text-3xl font-semibold mb-6">
// // //             Our Legal Advisory Services Include
// // //           </h3>

// // //           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
// // //             <li>▪ Corporate Legal Advisory</li>
// // //             <li>▪ Regulatory Compliance Review</li>
// // //             <li>▪ Contract Drafting & Vetting</li>
// // //             <li>▪ Risk Assessment & Governance Support</li>
// // //             <li>▪ Company Law Advisory</li>
// // //             <li>▪ Legal Retainership Services</li>
// // //           </ul>

// // //           {/* SECOND IMAGE (NOT REMOVED) */}
// // //           <div className="mb-16">
// // //             <Image
// // //               src="/legal-compliance.png"
// // //               alt="Legal Compliance Consultation"
// // //               width={1200}
// // //               height={600}
// // //               className="w-full rounded-xl shadow-lg"
// // //             />
// // //           </div>

// // //         </section>

// // //         {/* ================= FAQ ================= */}

// // //         <section className="bg-[#F4F4F4] py-20">
// // //           <div className="max-w-6xl mx-auto px-6">
// // //             <h3 className="text-4xl font-bold mb-12">
// // //               Frequently Asked Questions
// // //             </h3>

// // //             <div className="space-y-10 text-gray-800">

// // //               <div>
// // //                 <h4 className="font-semibold text-lg">
// // //                   What does a legal advisor do for businesses?
// // //                 </h4>
// // //                 <p className="mt-2 text-gray-700">
// // //                   A legal advisor provides strategic guidance on compliance, contracts, governance, and risk management.
// // //                 </p>
// // //               </div>

// // //               <div>
// // //                 <h4 className="font-semibold text-lg">
// // //                   Why is regulatory compliance important?
// // //                 </h4>
// // //                 <p className="mt-2 text-gray-700">
// // //                   Compliance helps prevent penalties, litigation, and reputational risk.
// // //                 </p>
// // //               </div>

// // //               <div>
// // //                 <h4 className="font-semibold text-lg">
// // //                   Do you provide ongoing legal support?
// // //                 </h4>
// // //                 <p className="mt-2 text-gray-700">
// // //                   Yes, we offer retainership and long-term advisory services.
// // //                 </p>
// // //               </div>

// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ================= FINAL CTA ================= */}

// // //         <section className="relative py-28 overflow-hidden">
// // //           <div className="absolute inset-0">
// // //             <Image
// // //               src="/discussion.png"
// // //               alt="Legal Consultation"
// // //               fill
// // //               className="object-cover"
// // //             />
// // //             <div className="absolute inset-0 bg-black/70"></div>
// // //           </div>

// // //           <div className="relative max-w-5xl mx-auto px-6 text-center">
// // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // //               Get Immediate Legal Help Today
// // //             </h2>

// // //             <p className="text-gray-300 mb-10">
// // //               Consult our experienced legal advisory experts in Bangalore.
// // //             </p>

// // //             <Link href="/legal-consultation-in-bangalore">
// // //               <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // //                 Book Confidential Consultation
// // //               </button>
// // //             </Link>
// // //           </div>
// // //         </section>

// // //       </main>

// // //       <Footer />
// // //     </>
// // //   );
// // // }


// // "use client";


// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Image from "next/image";
// // import Link from "next/link";

// // export default function LegalAdvisorPage() {
// //   return (
// //     <>
// //       <Navbar />

// //       <main className="bg-white overflow-hidden">

// //         {/* ================= HERO ================= */}

// //         <section className="relative bg-[#0B0F14] pt-32 pb-40 text-center">

// //           <div className="max-w-6xl mx-auto px-6">

// //             <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
// //               Expert Legal Advisor in Bangalore for Strategic Advisory & Regulatory Compliance
// //             </h1>

// //             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
// //               Our firm provides strategic guidance as a Legal Advisor in Bangalore, assisting businesses with regulatory compliance, governance, and risk management. Our experienced attorneys deliver structured advisory services tailored to corporate and commercial requirements.
// //             </p>

// //             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
// //               Our goal is to strengthen your legal framework, prevent regulatory exposure, and support sustainable business growth through proactive legal planning.
// //             </p>

// //             <p className="text-[#C9A24D] font-semibold mb-8">
// //               Response within 24 hours guaranteed.
// //             </p>

// //             {/* BUTTONS FIXED */}

// //             <div className="flex justify-center gap-4 flex-wrap">

// //               <Link
// //                 href="/legal-consultation-in-bangalore"
// //                 className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
// //               >
// //                 Book Confidential Consultation
// //               </Link>

// //               <a
// //                 href="tel:+919000000000"
// //                 className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// //               >
// //                 Call Now
// //               </a>

// //             </div>

// //           </div>

// //           {/* HERO IMAGE (NOT REMOVED) */}

// //           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20">
// //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
// //               <Image
// //                 src="/legal-advisory.png"
// //                 alt="Legal Advisor in Bangalore"
// //                 width={1400}
// //                 height={800}
// //                 className="w-full h-[400px] md:h-[500px] object-cover"
// //                 priority
// //               />
// //             </div>
// //           </div>

// //         </section>

// //         <div className="h-48 md:h-64"></div>

// //         {/* ================= CONTENT ================= */}

// //         <section className="max-w-6xl mx-auto px-6 py-16 mt-44">

// //           <h2 className="text-4xl font-semibold mb-6">
// //             Strategic Legal Advisory & Compliance Support
// //           </h2>

// //           <p className="text-gray-700 mb-12">
// //             Businesses operate in a dynamic regulatory environment where legal oversight is essential. As a trusted Business Legal Advisor and Regulatory Compliance Lawyer, we assist companies in maintaining statutory compliance and minimizing legal risk.
// //             Our Corporate Compliance Lawyer team provides practical legal solutions, ensuring your organization operates within applicable laws while protecting its long-term interests.
// //           </p>

// //           <h3 className="text-3xl font-semibold mb-6">
// //             OUR LEGAL ADVISORY & COMPLIANCE SERVICES INCLUDE
// //           </h3>

// //           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
// //             <li>▪ Corporate Legal Advisory</li>
// //             <li>▪ Regulatory Compliance Review</li>
// //             <li>▪ Contract Drafting & Vetting</li>
// //             <li>▪ Risk Assessment & Governance Support</li>
// //             <li>▪ Company Law & Corporate Structuring</li>
// //             <li>▪ Ongoing Legal Retainership Services</li>
// //             <li>▪ Legal Audits & Compliance Health Checks</li>
// //           </ul>

// //           <h3 className="text-3xl font-semibold mb-6">
// //             OUR APPROACH / HOW WE WORK
// //           </h3>

// //           <div className="space-y-6 text-gray-700 mb-16">

// //             <p><strong>Step 1: Business Assessment & Legal Review</strong><br />
// //               Understanding your company’s operational and regulatory framework.
// //             </p>

// //             <p><strong>Step 2: Compliance Gap Analysis</strong><br />
// //               Identifying potential compliance risks and legal exposure areas.
// //             </p>

// //             <p>
// //               We clearly explain regulatory risks, possible legal consequences, and corrective measures before implementation.
// //             </p>

// //             <p><strong>Step 3: Strategic Advisory & Documentation</strong><br />
// //               Drafting policies, agreements, and internal governance documents.
// //             </p>

// //             <p><strong>Step 4: Continuous Monitoring & Support</strong><br />
// //               Providing ongoing guidance as a Legal Compliance Consultant to ensure regulatory alignment.
// //             </p>

// //           </div>

// //           <h3 className="text-3xl font-semibold mb-6">
// //             WHY CHOOSE OUR FIRM
// //           </h3>

// //           <ul className="space-y-3 text-gray-700 mb-20">
// //             <li>✓ Experienced Corporate Compliance Lawyers</li>
// //             <li>✓ Business-focused legal advisory approach</li>
// //             <li>✓ Proactive risk management strategies</li>
// //             <li>✓ Structured documentation and governance expertise</li>
// //             <li>✓ Transparent and strategic legal guidance</li>
// //           </ul>

// //         </section>

// //         {/* ================= FAQ ================= */}

// //         <section className="bg-[#F4F4F4] py-20">
// //           <div className="max-w-6xl mx-auto px-6">

// //             <h3 className="text-4xl font-bold mb-12">
// //               Frequently Asked Questions
// //             </h3>

// //             <div className="space-y-10 text-gray-800">

// //               <div>
// //                 <h4 className="font-semibold text-lg">Q1: What does a legal advisor do for businesses?</h4>
// //                 <p className="mt-2">A legal advisor provides strategic guidance on compliance, contracts, governance, and risk management to protect business interests.</p>
// //               </div>

// //               <div>
// //                 <h4 className="font-semibold text-lg">Q2: Why is regulatory compliance important?</h4>
// //                 <p className="mt-2">Compliance helps avoid penalties, litigation, and reputational risk while ensuring smooth business operations.</p>
// //               </div>

// //               <div>
// //                 <h4 className="font-semibold text-lg">Q3: Do you provide ongoing legal support for companies?</h4>
// //                 <p className="mt-2">Yes, we offer retainership and continuous advisory services tailored to business needs.</p>
// //               </div>

// //               <div>
// //                 <h4 className="font-semibold text-lg">Q4: Can startups benefit from legal advisory services?</h4>
// //                 <p className="mt-2">Yes, startups benefit from structured legal frameworks, compliance planning, and contract management from early stages.</p>
// //               </div>

// //               <div>
// //                 <h4 className="font-semibold text-lg">Q5: Do you assist with internal policy drafting and corporate governance frameworks?</h4>
// //                 <p className="mt-2">Yes, we draft and review internal policies, compliance manuals, governance frameworks, and corporate documentation to strengthen legal structure and regulatory alignment.</p>
// //               </div>

// //               <div>
// //                 <h4 className="font-semibold text-lg">Q6: Can you conduct legal audits and compliance health checks?</h4>
// //                 <p className="mt-2">Yes, we perform structured legal audits and compliance assessments to identify risk areas and provide actionable recommendations.</p>
// //               </div>

// //             </div>
// //           </div>
// //         </section>

// //         {/* ================= FINAL CTA ================= */}

// //         <section className="relative py-28 overflow-hidden">
// //           <div className="absolute inset-0">
// //             <Image
// //               src="/discussion.png"
// //               alt="Legal Consultation"
// //               fill
// //               className="object-cover"
// //             />
// //             <div className="absolute inset-0 bg-black/70"></div>
// //           </div>

// //           <div className="relative max-w-5xl mx-auto px-6 text-center">

// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Get Immediate Legal Help from a Legal Advisor in Bangalore
// //             </h2>

// //             <p className="text-gray-300 mb-10">
// //               Consult our experienced legal advisory and compliance experts today.
// //             </p>

// //             <div className="flex justify-center gap-4 flex-wrap">

// //               <Link
// //                 href="/legal-consultation-in-bangalore"
// //                 className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
// //               >
// //                 Book Confidential Consultation
// //               </Link>

// //               <Link
// //                 href="/contact"
// //                 className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
// //               >
// //                 Request Call Back
// //               </Link>

// //             </div>

// //             <p className="text-gray-400 mt-8 text-sm">
// //               All matters handled with complete confidentiality and legal discretion.
// //             </p>

// //           </div>
// //         </section>

// //       </main>

// //       <Footer />
// //     </>
// //   );
// // }



// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";

// export default function LegalAdvisorPage() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };
//   return (
//     <>
//       <Navbar />

//       <main className="bg-white overflow-hidden">

//         {/* ================= HERO ================= */}

//         <section className="bg-[#0B0F14] pt-32 pb-20 text-center">

//           <div className="max-w-6xl mx-auto px-6">

//             <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
//               Expert Legal Advisor in Bangalore for Strategic Advisory & Regulatory Compliance
//             </h1>

//             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
//               Our firm provides strategic guidance as a Legal Advisor in Bangalore, assisting businesses with regulatory compliance, governance, and risk management. Our experienced attorneys deliver structured advisory services tailored to corporate and commercial requirements.
//             </p>

//             <p className="text-gray-300 max-w-3xl mx-auto mb-6">
//               Our goal is to strengthen your legal framework, prevent regulatory exposure, and support sustainable business growth through proactive legal planning.
//             </p>

//             <p className="text-[#C9A24D] font-semibold mb-8">
//               Response within 24 hours guaranteed.
//             </p>

//             <div className="flex justify-center gap-4 flex-wrap mb-16">

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

//             </div>

//           </div>

//           {/* HERO IMAGE - NO OVERLAP */}

//           <div className="max-w-6xl mx-auto px-6 pb-16">
//             <div className="rounded-xl overflow-hidden shadow-2xl">
//               <Image
//                 src="/legal-advisory.png"
//                 alt="Legal Advisor in Bangalore"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[400px] md:h-[500px] object-cover"
//                 priority
//               />
//             </div>
//           </div>

//         </section>

//         {/* ================= CONTENT ================= */}

//         <section className="max-w-6xl mx-auto px-6 py-16">

//           <h2 className="text-4xl font-semibold mb-6">
//             Strategic Legal Advisory & Compliance Support
//           </h2>

//           <p className="text-gray-700 mb-12">
//             Businesses operate in a dynamic regulatory environment where legal oversight is essential. As a trusted Business Legal Advisor and Regulatory Compliance Lawyer, we assist companies in maintaining statutory compliance and minimizing legal risk.
//             Our Corporate Compliance Lawyer team provides practical legal solutions, ensuring your organization operates within applicable laws while protecting its long-term interests.
//           </p>

//           <h3 className="text-3xl font-semibold mb-6">
//             OUR LEGAL ADVISORY & COMPLIANCE SERVICES INCLUDE
//           </h3>

//           <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
//             <li>▪ Corporate Legal Advisory</li>
//             <li>▪ Regulatory Compliance Review</li>
//             <li>▪ Contract Drafting & Vetting</li>
//             <li>▪ Risk Assessment & Governance Support</li>
//             <li>▪ Company Law & Corporate Structuring</li>
//             <li>▪ Ongoing Legal Retainership Services</li>
//             <li>▪ Legal Audits & Compliance Health Checks</li>
//           </ul>

//           <h3 className="text-3xl font-semibold mb-6">
//             OUR APPROACH / HOW WE WORK
//           </h3>

//           <div className="space-y-6 text-gray-700 mb-16">

//             <p>
//               <strong>Step 1: Business Assessment & Legal Review</strong><br />
//               Understanding your company’s operational and regulatory framework.
//             </p>

//             <p>
//               <strong>Step 2: Compliance Gap Analysis</strong><br />
//               Identifying potential compliance risks and legal exposure areas.
//             </p>

//             <p>
//               We clearly explain regulatory risks, possible legal consequences, and corrective measures before implementation.
//             </p>

//             <p>
//               <strong>Step 3: Strategic Advisory & Documentation</strong><br />
//               Drafting policies, agreements, and internal governance documents.
//             </p>

//             <p>
//               <strong>Step 4: Continuous Monitoring & Support</strong><br />
//               Providing ongoing guidance as a Legal Compliance Consultant to ensure regulatory alignment.
//             </p>

//           </div>

//           <h3 className="text-3xl font-semibold mb-6">
//             WHY CHOOSE OUR FIRM
//           </h3>

//           <ul className="space-y-3 text-gray-700 mb-20">
//             <li>✓ Experienced Corporate Compliance Lawyers</li>
//             <li>✓ Business-focused legal advisory approach</li>
//             <li>✓ Proactive risk management strategies</li>
//             <li>✓ Structured documentation and governance expertise</li>
//             <li>✓ Transparent and strategic legal guidance</li>
//           </ul>

//         </section>

//         {/* ================= FAQ ================= */}

//         <section className="bg-[#F4F4F4] py-20">
//           <div className="max-w-6xl mx-auto px-6">

//             <h3 className="text-4xl font-bold mb-12">
//               Frequently Asked Questions
//             </h3>

//             <div className="space-y-6 text-gray-800">

//               {[
//                 {
//                   q: "Q1: What does a legal advisor do for businesses?",
//                   a: "A legal advisor provides strategic guidance on compliance, contracts, governance, and risk management to protect business interests."
//                 },
//                 {
//                   q: "Q2: Why is regulatory compliance important?",
//                   a: "Compliance helps avoid penalties, litigation, and reputational risk while ensuring smooth business operations."
//                 },
//                 {
//                   q: "Q3: Do you provide ongoing legal support for companies?",
//                   a: "Yes, we offer retainership and continuous advisory services tailored to business needs."
//                 },
//                 {
//                   q: "Q4: Can startups benefit from legal advisory services?",
//                   a: "Yes, startups benefit from structured legal frameworks, compliance planning, and contract management from early stages."
//                 },
//                 {
//                   q: "Q5: Do you assist with internal policy drafting and corporate governance frameworks?",
//                   a: "Yes, we draft and review internal policies, compliance manuals, governance frameworks, and corporate documentation to strengthen legal structure and regulatory alignment."
//                 },
//                 {
//                   q: "Q6: Can you conduct legal audits and compliance health checks?",
//                   a: "Yes, we perform structured legal audits and compliance assessments to identify risk areas and provide actionable recommendations."
//                 }
//               ].map((faq, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 cursor-pointer transition"
//                   onClick={() => toggleFAQ(index)}
//                 >
//                   <div className="flex justify-between items-center">
//                     <h4 className="font-semibold text-lg">
//                       {faq.q}
//                     </h4>
//                     <span className="text-2xl font-bold text-[#C9A24D]">
//                       {openIndex === index ? "−" : "+"}
//                     </span>
//                   </div>

//                   {openIndex === index && (
//                     <p className="mt-4 text-gray-700">
//                       {faq.a}
//                     </p>
//                   )}
//                 </div>
//               ))}

//             </div>
//           </div>
//         </section>

//         {/* ================= FINAL CTA ================= */}

//         <section className="bg-[#0B0F14] py-28 text-center text-white">

//           <div className="max-w-5xl mx-auto px-6">

//             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
//               Get Immediate Legal Help from a Legal Advisor in Bangalore
//             </h2>

//             <p className="text-gray-300 mb-10">
//               Consult our experienced legal advisory and compliance experts today.
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

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const services = [
  "Corporate Legal Advisory",
  "Regulatory Compliance Review",
  "Contract Drafting & Vetting",
  "Risk Assessment & Governance Support",
  "Company Law & Corporate Structuring",
  "Ongoing Legal Retainership Services",
  "Legal Audits & Compliance Health Checks",
];

const steps = [
  {
    number: "01",
    title: "Business Assessment & Legal Review",
    body: "Our process begins with a detailed consultation to understand your company's structure, operations, and regulatory obligations. As experienced Corporate Compliance Lawyers, we review your business model and identify the laws and regulations that apply to your industry. This helps us create a strong legal foundation for your organization.",
  },
  {
    number: "02",
    title: "Compliance Gap Analysis",
    body: "Once we understand your business framework, we conduct a comprehensive compliance review to identify potential legal risks or gaps in regulatory adherence. Our Regulatory Compliance Lawyers carefully assess your existing processes and policies to detect areas that may expose your company to legal or financial risk. We also explain possible consequences and recommend corrective actions in a clear and practical manner.",
  },
  {
    number: "03",
    title: "Strategic Advisory & Documentation",
    body: "Based on our analysis, we provide structured legal guidance to help your business maintain regulatory compliance. Our team assists in drafting essential documents such as internal policies, commercial agreements, governance frameworks, and compliance protocols. As trusted Business Legal Advisors, we ensure that all documentation aligns with applicable laws while supporting your long-term business objectives.",
  },
  {
    number: "04",
    title: "Continuous Monitoring & Support",
    body: "Compliance is an ongoing process. Our firm provides continuous legal guidance to help your business stay aligned with evolving regulatory requirements. Acting as your Legal Compliance Consultant, we assist with updates, reviews, and advisory support so your organization can operate confidently while minimizing legal risks.",
  },
];

const whyChoose = [
  {
    icon: "⚖",
    title: "Experienced Corporate Compliance Lawyers",
    body: "Our team brings extensive experience in handling complex regulatory and compliance matters across multiple industries.",
  },
  {
    icon: "📈",
    title: "Business-Focused Legal Advisory",
    body: "We combine legal expertise with practical business insight to deliver solutions that support operational growth and regulatory stability.",
  },
  {
    icon: "🛡",
    title: "Proactive Risk Management",
    body: "Our approach focuses on identifying potential legal risks early and implementing strategies that protect your organization from future disputes or penalties.",
  },
  {
    icon: "📋",
    title: "Structured Documentation & Governance Expertise",
    body: "From compliance frameworks to internal policies, we ensure your documentation meets legal standards and supports strong corporate governance.",
  },
  {
    icon: "🔍",
    title: "Transparent and Strategic Legal Guidance",
    body: "We believe in clear communication, practical advice, and long-term legal strategies that help businesses operate with confidence and compliance.",
  },
];

const faqs = [
  {
    q: "What does a legal advisor do for businesses?",
    a: "A legal advisor provides strategic guidance on compliance, contracts, governance, and risk management to protect business interests.",
  },
  {
    q: "Why is regulatory compliance important?",
    a: "Compliance helps avoid penalties, litigation, and reputational risk while ensuring smooth business operations.",
  },
  {
    q: "Do you provide ongoing legal support for companies?",
    a: "Yes, we offer retainership and continuous advisory services tailored to business needs.",
  },
  {
    q: "Can startups benefit from legal advisory services?",
    a: "Yes, startups benefit from structured legal frameworks, compliance planning, and contract management from early stages.",
  },
  {
    q: "Do you assist with internal policy drafting and corporate governance frameworks?",
    a: "Yes, we draft and review internal policies, compliance manuals, governance frameworks, and corporate documentation to strengthen legal structure and regulatory alignment.",
  },
  {
    q: "Can you conduct legal audits and compliance health checks?",
    a: "Yes, we perform structured legal audits and compliance assessments to identify risk areas and provide actionable recommendations.",
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

export default function LegalAdvisorPage() {
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
              Expert Legal Advisor in Bangalore{" "}
              <span className="text-[#C9A24D]">for Strategic Advisory &amp; Regulatory Compliance</span>
            </motion.h1>

            {/* Intro para 1 */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Our firm provides strategic guidance as a Legal Advisor in Bangalore, assisting
              businesses with regulatory compliance, governance, and risk management. Our
              experienced attorneys deliver structured advisory services tailored to corporate
              and commercial requirements.
            </motion.p>

            {/* Intro para 2 */}
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              Our goal is to strengthen your legal framework, prevent regulatory exposure, and
              support sustainable business growth through proactive legal planning.
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
                src="/legal-advisory.png"
                alt="Legal Advisor in Bangalore"
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

        {/* ═══════════════ STRATEGIC LEGAL ADVISORY & COMPLIANCE SUPPORT ════════════ */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          {/* animated right vertical rule */}
          <motion.div
            initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
          />

          <div className="max-w-6xl mx-auto">
            <SectionHeading>Strategic Legal Advisory &amp; Compliance Support</SectionHeading>

            {/* All 3 paragraphs from brief */}
            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-lg leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                In today&apos;s fast-changing business environment, staying compliant with legal and
                regulatory requirements is not just important — it&apos;s essential for sustainable
                growth. Businesses must regularly adapt to evolving laws, policies, and industry
                standards, and having the right legal guidance can make all the difference.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.4}>
                Our team of Corporate Compliance Lawyers provides clear, practical legal solutions
                tailored to your business structure and industry. From reviewing regulatory
                requirements to advising on risk management and corporate governance, we help
                safeguard your business interests and support long-term stability.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.8}>
                With a proactive legal approach, we ensure your company remains compliant,
                protected, and well-prepared for future regulatory challenges.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ OUR LEGAL ADVISORY & COMPLIANCE SERVICES ════════════════ */}
        <section className="py-28 px-6 bg-[#f8f6f1] relative">
          <GoldDivider />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <div className="max-w-6xl mx-auto">
            {/* H3 sub-heading from brief */}
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
            >
              Our Legal Advisory &amp; Compliance Services Include
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
              className="grid md:grid-cols-2 gap-6"
            >
              {whyChoose.map((item, i) => (
                <motion.div key={i} variants={scaleIn} custom={i * 0.15}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
                  className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 relative group overflow-hidden transition-colors duration-300"
                >
                  <motion.span
                    initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
                    className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
                    style={{ transition: "transform 0.3s ease" }}
                  />
                  <span className="text-3xl mb-4 block">{item.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{item.body}</p>
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
          <Image src="/discussion.png" alt="Legal Advisor Consultation" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/80" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

          {/* animated rings */}
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
            {/* bordered content box */}
            <div className="border border-[#C9A24D]/30 rounded-2xl px-10 py-16 relative">
              {/* corner marks */}
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
                S Jain &amp; Attorneys · Legal Advisory &amp; Compliance
              </motion.p>

              {/* H2 — exact text from brief */}
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                className="text-3xl md:text-5xl font-bold mb-10 leading-tight"
              >
                Get immediate legal guidance from an experienced Legal Advisor in Bangalore.
              </motion.h2>

              {/* Single CTA — brief specifies only [ Request Call Back ] */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <Link href="/contact"
                    className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
                  >
                    Request Call Back
                  </Link>
                </motion.div>
              </motion.div>

              {/* confidentiality note */}
              <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
                className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
              >
                <span className="inline-block w-4 h-px bg-gray-600" />
                All matters handled with complete confidentiality and legal discretion.
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