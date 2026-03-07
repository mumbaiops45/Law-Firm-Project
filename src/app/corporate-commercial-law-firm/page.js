// // // // // "use client";

// // // // // import Navbar from "../../components/Navbar";
// // // // // import Footer from "../../components/Footer";
// // // // // import Image from "next/image";
// // // // // import { motion } from "framer-motion";
// // // // // import Link from "next/link";
// // // // // import Head from "next/head";

// // // // // export default function CorporateLaw() {

// // // // //   const fadeUp = {
// // // // //     hidden: { opacity: 0, y: 40 },
// // // // //     visible: {
// // // // //       opacity: 1,
// // // // //       y: 0,
// // // // //       transition: { duration: 0.8, ease: "easeOut" }
// // // // //     }
// // // // //   };

// // // // //   const fadeImage = {
// // // // //     hidden: { opacity: 0, scale: 1.05 },
// // // // //     visible: {
// // // // //       opacity: 1,
// // // // //       scale: 1,
// // // // //       transition: { duration: 1.2 }
// // // // //     }
// // // // //   };

// // // // //   const stagger = {
// // // // //     visible: { transition: { staggerChildren: 0.2 } }
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       {/* ================= SEO ================= */}
// // // // //       <Head>
// // // // //         <title>Corporate Lawyer in Bangalore | S Jain & Attorneys</title>
// // // // //         <meta
// // // // //           name="description"
// // // // //           content="Corporate & Commercial Law Firm in Bangalore offering corporate law services, commercial contract drafting, M&A advisory, and business legal compliance support."
// // // // //         />
// // // // //         <link
// // // // //           rel="canonical"
// // // // //           href="https://yourdomain.com/corporate-commercial-law-firm"
// // // // //         />
// // // // //       </Head>

// // // // //       <Navbar />

// // // // //       <main className="bg-white overflow-hidden">

// // // // //         {/* ================= HERO ================= */}

// // // // //         <section className="relative bg-[#0B0F14] pt-32 pb-40">

// // // // //           <motion.div
// // // // //             variants={stagger}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             className="max-w-7xl mx-auto px-6 text-center"
// // // // //           >

// // // // //             <motion.h1
// // // // //               variants={fadeUp}
// // // // //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// // // // //             >
// // // // //               Corporate & Commercial Law Firm in Bangalore for Businesses & Startups
// // // // //             </motion.h1>

// // // // //             <motion.p
// // // // //               variants={fadeUp}
// // // // //               className="text-gray-400 max-w-3xl mx-auto text-lg"
// // // // //             >
// // // // //               In today’s competitive business environment, companies require proactive legal guidance to operate efficiently and mitigate risks.
// // // // //             </motion.p>

// // // // //             <motion.p
// // // // //               variants={fadeUp}
// // // // //               className="text-gray-400 max-w-3xl mx-auto text-lg mt-4"
// // // // //             >
// // // // //               We deliver strategic legal solutions, structured transaction support, and strong contractual protection to help businesses grow while maintaining regulatory compliance.
// // // // //             </motion.p>

// // // // //             <motion.p
// // // // //               variants={fadeUp}
// // // // //               className="text-[#C9A24D] font-semibold mt-6"
// // // // //             >
// // // // //               Response within 24 hours guaranteed.
// // // // //             </motion.p>

// // // // //             <motion.div variants={fadeUp} className="flex justify-center gap-6 mt-10 flex-wrap">
// // // // //               <Link href="/contact">
// // // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // // // //                   Book Confidential Consultation
// // // // //                 </button>
// // // // //               </Link>

// // // // //               <Link href="tel:+919000000000">
// // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // // //                   Call Now
// // // // //                 </button>
// // // // //               </Link>
// // // // //             </motion.div>

// // // // //           </motion.div>

// // // // //           {/* HERO IMAGE */}
// // // // //           <motion.div
// // // // //             variants={fadeImage}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20"
// // // // //           >
// // // // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
// // // // //               <Image
// // // // //                 src="/consultation.png"
// // // // //                 alt="Corporate Law Consultation"
// // // // //                 width={1400}
// // // // //                 height={800}
// // // // //                 className="w-full h-[400px] md:h-[500px] object-cover"
// // // // //                 priority
// // // // //               />
// // // // //             </div>
// // // // //           </motion.div>

// // // // //         </section>

// // // // //         <div className="h-40 md:h-60"></div>

// // // // //         {/* ================= SERVICES ================= */}

// // // // //         <motion.section
// // // // //           initial="hidden"
// // // // //           whileInView="visible"
// // // // //           viewport={{ once: true }}
// // // // //           variants={stagger}
// // // // //           className="max-w-6xl mx-auto px-6 py-20"
// // // // //         >

// // // // //           <motion.h2 variants={fadeUp} className="text-4xl font-semibold mb-6">
// // // // //             Comprehensive Corporate Law Services
// // // // //           </motion.h2>

// // // // //           <motion.ul variants={fadeUp} className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg mb-16">
// // // // //             <li>▪ Company Incorporation & Structuring</li>
// // // // //             <li>▪ Shareholder Agreements & Joint Ventures</li>
// // // // //             <li>▪ Mergers & Acquisitions (M&A)</li>
// // // // //             <li>▪ Corporate Governance & Compliance</li>
// // // // //             <li>▪ Due Diligence & Risk Assessment</li>
// // // // //             <li>▪ Regulatory Advisory & Licensing</li>
// // // // //             <li>▪ Commercial Transactions & Business Structuring</li>
// // // // //           </motion.ul>

// // // // //           <motion.div variants={fadeUp} className="mb-16">
// // // // //             <Image
// // // // //               src="/corporatelaw.png"
// // // // //               alt="Corporate Legal Advisory"
// // // // //               width={1200}
// // // // //               height={600}
// // // // //               className="w-full rounded-xl shadow-lg"
// // // // //             />
// // // // //           </motion.div>

// // // // //           <motion.h2 variants={fadeUp} className="text-4xl font-semibold mb-6">
// // // // //             Why Choose Our Corporate & Commercial Law Firm
// // // // //           </motion.h2>

// // // // //           <motion.ul variants={fadeUp} className="space-y-4 text-gray-700 text-lg mb-16">
// // // // //             <li>Experienced corporate attorneys</li>
// // // // //             <li>Strong commercial drafting expertise</li>
// // // // //             <li>Business-focused legal solutions</li>
// // // // //             <li>Transparent communication</li>
// // // // //             <li>Long-term legal partnership approach</li>
// // // // //           </motion.ul>

// // // // //         </motion.section>

// // // // //         {/* ================= CTA ================= */}

// // // // //         <section className="relative py-28 overflow-hidden">

// // // // //           <div className="absolute inset-0">
// // // // //             <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
// // // // //             <div className="absolute inset-0 bg-black/70"></div>
// // // // //           </div>

// // // // //           <div className="relative max-w-5xl mx-auto px-6 text-center">
// // // // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // // // //               Get Immediate Legal Help from a Corporate Lawyer in Bangalore
// // // // //             </h2>

// // // // //             <p className="text-gray-300 mb-10 text-lg">
// // // // //               Consult our experienced Corporate & Commercial Law Firm today.
// // // // //             </p>

// // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // // //               <Link href="/contact">
// // // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // // // //                   Book Confidential Consultation
// // // // //                 </button>
// // // // //               </Link>

// // // // //               <Link href="tel:+919000000000">
// // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // // //                   Call Now
// // // // //                 </button>
// // // // //               </Link>
// // // // //             </div>

// // // // //             <p className="text-gray-400 text-sm mt-8">
// // // // //               All matters handled with complete confidentiality and legal discretion.
// // // // //             </p>
// // // // //           </div>

// // // // //         </section>

// // // // //       </main>

// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // "use client";

// // // // // import Navbar from "../../components/Navbar";
// // // // // import Footer from "../../components/Footer";
// // // // // import Image from "next/image";
// // // // // import { motion } from "framer-motion";
// // // // // import Link from "next/link";
// // // // // import Head from "next/head";

// // // // // export default function CorporateLaw() {

// // // // //   const fadeUp = {
// // // // //     hidden: { opacity: 0, y: 40 },
// // // // //     visible: {
// // // // //       opacity: 1,
// // // // //       y: 0,
// // // // //       transition: { duration: 0.8, ease: "easeOut" }
// // // // //     }
// // // // //   };

// // // // //   const stagger = {
// // // // //     visible: { transition: { staggerChildren: 0.2 } }
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       {/* ================= SEO ================= */}
// // // // //       <Head>
// // // // //         <title>Corporate Lawyer in Bangalore | S Jain & Attorneys</title>
// // // // //         <meta
// // // // //           name="description"
// // // // //           content="Corporate & Commercial Law Firm in Bangalore offering corporate law services, commercial contract drafting, M&A advisory, and business legal compliance support."
// // // // //         />
// // // // //         <link
// // // // //           rel="canonical"
// // // // //           href="https://yourdomain.com/corporate-commercial-law-firm"
// // // // //         />
// // // // //       </Head>

// // // // //       <Navbar />

// // // // //       <main className="bg-white overflow-hidden">

// // // // //         {/* ================= HERO ================= */}

// // // // //         <section className="relative bg-[#0B0F14] pt-32 pb-40 text-center">

// // // // //           <motion.div
// // // // //             variants={stagger}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             className="max-w-6xl mx-auto px-6"
// // // // //           >
// // // // //             <motion.h1
// // // // //               variants={fadeUp}
// // // // //               className="text-4xl md:text-6xl font-semibold text-white mb-6"
// // // // //             >
// // // // //               Corporate & Commercial Law Firm in Bangalore for Businesses & Startups
// // // // //             </motion.h1>

// // // // //             <motion.p variants={fadeUp} className="text-gray-400 max-w-4xl mx-auto text-lg">
// // // // //               In today’s competitive business environment, companies require proactive legal guidance to operate efficiently and mitigate risks. Our Corporate & Commercial Law Firm provides comprehensive Corporate Law Services and Business Legal Advisory Services to startups, SMEs, and established enterprises.
// // // // //             </motion.p>

// // // // //             <motion.p variants={fadeUp} className="text-gray-400 max-w-4xl mx-auto text-lg mt-4">
// // // // //               We deliver strategic legal solutions, structured transaction support, and strong contractual protection to help businesses grow while maintaining regulatory compliance.
// // // // //             </motion.p>

// // // // //             <motion.p variants={fadeUp} className="text-gray-400 max-w-4xl mx-auto text-lg mt-4">
// // // // //               Our goal is to protect your business interests, ensure regulatory compliance, and minimize commercial risk through strategic legal structuring.
// // // // //             </motion.p>

// // // // //             <motion.p variants={fadeUp} className="text-[#C9A24D] font-semibold mt-6">
// // // // //               Response within 24 hours guaranteed.
// // // // //             </motion.p>

// // // // //             <motion.div variants={fadeUp} className="flex justify-center gap-6 mt-10 flex-wrap">
// // // // //               <Link href="/legal-consultation-in-bangalore">
// // // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // // // //                   Book Confidential Consultation
// // // // //                 </button>
// // // // //               </Link>

// // // // //               <Link href="tel:+919000000000">
// // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // // //                   Call Now
// // // // //                 </button>
// // // // //               </Link>
// // // // //             </motion.div>
// // // // //           </motion.div>

// // // // //           {/* HERO IMAGE */}
// // // // //           <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-20">
// // // // //             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
// // // // //               <Image
// // // // //                 src="/consultation.png"
// // // // //                 alt="Corporate Law Consultation"
// // // // //                 width={1400}
// // // // //                 height={800}
// // // // //                 className="w-full h-[400px] md:h-[500px] object-cover"
// // // // //                 priority
// // // // //               />
// // // // //             </div>
// // // // //           </div>

// // // // //         </section>

// // // // //         <div className="h-40 md:h-60"></div>

// // // // //         {/* ================= CORPORATE SERVICES ================= */}

// // // // //         <section className="max-w-6xl mx-auto px-6 py-20 mt-14">

// // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // //             Comprehensive Corporate Law Services
// // // // //           </h2>

// // // // //           <p className="text-gray-700 text-lg mb-10">
// // // // //             Our firm supports businesses at every stage—from incorporation and structuring to expansion, restructuring, and dispute resolution.
// // // // //           </p>

// // // // //           <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg mb-16">
// // // // //             <li>▪ Company Incorporation & Structuring</li>
// // // // //             <li>▪ Shareholder Agreements & Joint Ventures</li>
// // // // //             <li>▪ Mergers & Acquisitions (M&A)</li>
// // // // //             <li>▪ Corporate Governance & Compliance</li>
// // // // //             <li>▪ Due Diligence & Risk Assessment</li>
// // // // //             <li>▪ Regulatory Advisory & Licensing</li>
// // // // //             <li>▪ Commercial Transactions & Business Structuring</li>
// // // // //           </ul>

// // // // //           <Image
// // // // //             src="/corporatelaw.png"
// // // // //             alt="Corporate Legal Advisory"
// // // // //             width={1200}
// // // // //             height={600}
// // // // //             className="w-full rounded-xl shadow-lg mb-16"
// // // // //           />

// // // // //           {/* ================= CONTRACT SECTION ================= */}

// // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // //             Commercial Contract Drafting & Negotiation
// // // // //           </h2>

// // // // //           <p className="text-gray-700 text-lg mb-16">
// // // // //             Our experienced Commercial Contract Lawyer team drafts, reviews, and negotiates vendor agreements, service agreements, partnership contracts, franchise agreements, employment contracts, and NDAs to ensure enforceability and risk protection.
// // // // //           </p>

// // // // //           {/* ================= ADVISORY ================= */}

// // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // //             Business Legal Advisory Services
// // // // //           </h2>

// // // // //           <p className="text-gray-700 text-lg mb-16">
// // // // //             We provide ongoing Business Legal Advisory Services including corporate restructuring, compliance reviews, legal audits, policy drafting, and risk mitigation strategies.
// // // // //           </p>

// // // // //           {/* ================= PROCESS ================= */}

// // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // //             Our Approach / How We Work
// // // // //           </h2>

// // // // //           <div className="space-y-6 text-gray-700 text-lg mb-16">
// // // // //             <p><strong>Step 1:</strong> Business Assessment & Legal Consultation</p>
// // // // //             <p><strong>Step 2:</strong> Legal Structuring & Documentation – We clearly explain legal risks, possible outcomes, and compliance implications before proceeding.</p>
// // // // //             <p><strong>Step 3:</strong> Negotiation & Regulatory Support</p>
// // // // //             <p><strong>Step 4:</strong> Ongoing Advisory & Risk Management</p>
// // // // //           </div>

// // // // //           {/* ================= WHY CHOOSE US ================= */}

// // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // //             Why Choose Our Corporate & Commercial Law Firm
// // // // //           </h2>

// // // // //           <ul className="space-y-4 text-gray-700 text-lg mb-16">
// // // // //             <li>Experienced corporate attorneys</li>
// // // // //             <li>Strong commercial drafting expertise</li>
// // // // //             <li>Business-focused legal solutions</li>
// // // // //             <li>Transparent communication</li>
// // // // //             <li>Long-term legal partnership approach</li>
// // // // //           </ul>

// // // // //           {/* ================= FAQ ================= */}

// // // // //           <h2 className="text-4xl font-semibold mb-6">
// // // // //             Frequently Asked Questions
// // // // //           </h2>

// // // // //           <div className="space-y-6 text-gray-700 text-lg">
// // // // //             <p><strong>Q1:</strong> Do you assist startups and SMEs?<br/>Yes, we provide tailored Corporate Law Services for businesses of all sizes.</p>
// // // // //             <p><strong>Q2:</strong> Can you draft customized commercial contracts?<br/>Yes, our Commercial Contract Lawyer team drafts agreements aligned with your business goals.</p>
// // // // //             <p><strong>Q3:</strong> Do you offer ongoing advisory support?<br/>Yes, we provide structured Business Legal Advisory Services for long-term compliance and growth.</p>
// // // // //             <p><strong>Q4:</strong> Do you assist with mergers and acquisitions?<br/>Yes, we handle due diligence, structuring, and transaction documentation.</p>
// // // // //             <p><strong>Q5:</strong> Do you assist with corporate due diligence and risk assessment?<br/>Yes, we conduct comprehensive due diligence, compliance reviews, and risk assessments to identify legal exposures.</p>
// // // // //             <p><strong>Q6:</strong> Can you help with regulatory approvals and licensing?<br/>Yes, our firm assists businesses in obtaining regulatory approvals and licenses.</p>
// // // // //           </div>

// // // // //         </section>

// // // // //         {/* ================= FINAL CTA ================= */}

// // // // //         <section className="relative py-28 overflow-hidden">

// // // // //           <div className="absolute inset-0">
// // // // //             <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
// // // // //             <div className="absolute inset-0 bg-black/70"></div>
// // // // //           </div>

// // // // //           <div className="relative max-w-5xl mx-auto px-6 text-center">
// // // // //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// // // // //               Get Immediate Legal Help from a Corporate Lawyer in Bangalore
// // // // //             </h2>

// // // // //             <p className="text-gray-300 mb-10 text-lg">
// // // // //               Consult our experienced Corporate & Commercial Law Firm today.
// // // // //             </p>

// // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// // // // //               <Link href="/legal-consultation-in-bangalore">
// // // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
// // // // //                   Book Confidential Consultation
// // // // //                 </button>
// // // // //               </Link>

// // // // //               <Link href="tel:+919000000000">
// // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // // //                   Call Now
// // // // //                 </button>
// // // // //               </Link>
// // // // //             </div>

// // // // //             <p className="text-gray-400 text-sm mt-8">
// // // // //               All matters handled with complete confidentiality and legal discretion.
// // // // //             </p>
// // // // //           </div>

// // // // //         </section>

// // // // //       </main>

// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import Navbar from "../../components/Navbar";
// // // // import Footer from "../../components/Footer";
// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";
// // // // import Link from "next/link";
// // // // import Head from "next/head";

// // // // export default function CorporateLaw() {

// // // //   const fadeUp = {
// // // //     hidden: { opacity: 0, y: 40 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: { duration: 0.8 }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Head>
// // // //         <title>Corporate Lawyer in Bangalore | S Jain & Attorneys</title>
// // // //         <meta
// // // //           name="description"
// // // //           content="Corporate & Commercial Law Firm in Bangalore offering corporate law services, commercial contract drafting, M&A advisory, and business legal compliance support."
// // // //         />
// // // //         <link
// // // //           rel="canonical"
// // // //           href="https://yourdomain.com/corporate-commercial-law-firm"
// // // //         />
// // // //       </Head>

// // // //       <Navbar />

// // // //       <main className="bg-[#F9F9F9] overflow-hidden">

// // // //         {/* ================= HERO ================= */}

// // // //         <section className="relative bg-[#0B0F14] pt-36 pb-44 text-center">

// // // //           <div className="absolute inset-0">
// // // //             <Image
// // // //               src="/consultation.png"
// // // //               alt="Corporate Law Consultation"
// // // //               fill
// // // //               className="object-cover opacity-20"
// // // //               priority
// // // //             />
// // // //           </div>

// // // //           <motion.div
// // // //             variants={fadeUp}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             className="relative max-w-5xl mx-auto px-6"
// // // //           >
// // // //             <h1 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-6">
// // // //               Corporate & Commercial Law Firm in Bangalore for Businesses & Startups
// // // //             </h1>

// // // //             <p className="text-gray-300 text-lg leading-relaxed mb-4">
// // // //               In today’s competitive business environment, companies require proactive legal guidance to operate efficiently and mitigate risks.
// // // //             </p>

// // // //             <p className="text-gray-400 text-lg leading-relaxed mb-4">
// // // //               Our Corporate & Commercial Law Firm provides comprehensive Corporate Law Services and Business Legal Advisory Services to startups, SMEs, and established enterprises.
// // // //             </p>

// // // //             <p className="text-gray-400 text-lg leading-relaxed mb-6">
// // // //               We deliver strategic legal solutions, structured transaction support, and strong contractual protection to help businesses grow while maintaining regulatory compliance.
// // // //             </p>

// // // //             <p className="text-[#C9A24D] font-semibold mb-8">
// // // //               Response within 24 hours guaranteed.
// // // //             </p>

// // // //             <div className="flex justify-center gap-6 flex-wrap">
// // // //               <Link href="/legal-consultation-in-bangalore">
// // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
// // // //                   Book Confidential Consultation
// // // //                 </button>
// // // //               </Link>

// // // //               <Link href="tel:+919000000000">
// // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // //                   Call Now
// // // //                 </button>
// // // //               </Link>
// // // //             </div>
// // // //           </motion.div>
// // // //         </section>

// // // //         {/* ================= SERVICES ================= */}

// // // //         <section className="max-w-6xl mx-auto px-6 py-24">

// // // //           <h2 className="text-4xl font-semibold mb-12 text-center">
// // // //             Comprehensive Corporate Law Services
// // // //           </h2>

// // // //           <div className="grid md:grid-cols-2 gap-8">

// // // //             {[
// // // //               "Company Incorporation & Structuring",
// // // //               "Shareholder Agreements & Joint Ventures",
// // // //               "Mergers & Acquisitions (M&A)",
// // // //               "Corporate Governance & Compliance",
// // // //               "Due Diligence & Risk Assessment",
// // // //               "Regulatory Advisory & Licensing",
// // // //               "Commercial Transactions & Business Structuring"
// // // //             ].map((item, index) => (
// // // //               <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
// // // //                 <p className="text-lg font-medium text-gray-800">{item}</p>
// // // //               </div>
// // // //             ))}

// // // //           </div>

// // // //           <div className="mt-16">
// // // //             <Image
// // // //               src="/corporatelaw.png"
// // // //               alt="Corporate Legal Advisory"
// // // //               width={1200}
// // // //               height={600}
// // // //               className="w-full rounded-xl shadow-lg"
// // // //             />
// // // //           </div>

// // // //         </section>

// // // //         {/* ================= PROCESS ================= */}

// // // //         <section className="bg-white py-24">

// // // //           <div className="max-w-5xl mx-auto px-6">

// // // //             <h2 className="text-4xl font-semibold mb-16 text-center">
// // // //               Our Approach / How We Work
// // // //             </h2>

// // // //             <div className="space-y-10 border-l-4 border-[#C9A24D] pl-8">

// // // //               <div>
// // // //                 <h3 className="font-semibold text-xl">Step 1</h3>
// // // //                 <p className="text-gray-600">Business Assessment & Legal Consultation</p>
// // // //               </div>

// // // //               <div>
// // // //                 <h3 className="font-semibold text-xl">Step 2</h3>
// // // //                 <p className="text-gray-600">
// // // //                   Legal Structuring & Documentation – We clearly explain legal risks, possible outcomes, and compliance implications.
// // // //                 </p>
// // // //               </div>

// // // //               <div>
// // // //                 <h3 className="font-semibold text-xl">Step 3</h3>
// // // //                 <p className="text-gray-600">Negotiation & Regulatory Support</p>
// // // //               </div>

// // // //               <div>
// // // //                 <h3 className="font-semibold text-xl">Step 4</h3>
// // // //                 <p className="text-gray-600">Ongoing Advisory & Risk Management</p>
// // // //               </div>

// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         {/* ================= FAQ ================= */}

// // // //         <section className="bg-[#F4F4F4] py-24">

// // // //           <div className="max-w-4xl mx-auto px-6">

// // // //             <h2 className="text-4xl font-semibold mb-12 text-center">
// // // //               Frequently Asked Questions
// // // //             </h2>

// // // //             <div className="space-y-6">

// // // //               {[
// // // //                 "Do you assist startups and SMEs?",
// // // //                 "Can you draft customized commercial contracts?",
// // // //                 "Do you offer ongoing advisory support?",
// // // //                 "Do you assist with mergers and acquisitions?",
// // // //                 "Do you assist with corporate due diligence?",
// // // //                 "Can you help with regulatory approvals?"
// // // //               ].map((q, i) => (
// // // //                 <div key={i} className="bg-white p-6 rounded-xl shadow-md">
// // // //                   <p className="font-semibold text-lg">{q}</p>
// // // //                 </div>
// // // //               ))}

// // // //             </div>

// // // //           </div>
// // // //         </section>

// // // //         {/* ================= FINAL CTA ================= */}

// // // //         <section className="relative py-28 text-center text-white">

// // // //           <Image
// // // //             src="/discussion.png"
// // // //             alt="Consultation"
// // // //             fill
// // // //             className="object-cover"
// // // //           />

// // // //           <div className="absolute inset-0 bg-black/75"></div>

// // // //           <div className="relative max-w-4xl mx-auto px-6">

// // // //             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// // // //               Get Immediate Legal Help from a Corporate Lawyer in Bangalore
// // // //             </h2>

// // // //             <p className="text-gray-300 mb-10 text-lg">
// // // //               Consult our experienced Corporate & Commercial Law Firm today.
// // // //             </p>

// // // //             <div className="flex gap-6 justify-center flex-wrap">
// // // //               <Link href="/legal-consultation-in-bangalore">
// // // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
// // // //                   Book Confidential Consultation
// // // //                 </button>
// // // //               </Link>

// // // //               <Link href="tel:+919000000000">
// // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // //                   Call Now
// // // //                 </button>
// // // //               </Link>
// // // //             </div>

// // // //             <p className="text-gray-400 text-sm mt-8">
// // // //               All matters handled with complete confidentiality and legal discretion.
// // // //             </p>

// // // //           </div>
// // // //         </section>

// // // //       </main>

// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }




// // // "use client";
// // // import { useState } from "react";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";

// // // import { ChevronDown } from "lucide-react";
// // // export default function CorporateLaw() {
// // //   const [activeIndex, setActiveIndex] = useState(null);

// // //   const toggleFAQ = (index) => {
// // //     setActiveIndex(activeIndex === index ? null : index);
// // //   };

// // //   const fadeUp = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// // //   };

// // //   return (
// // //     <>


// // //       <Navbar />

// // //       <main className="bg-[#F9F9F9] overflow-hidden">

// // //         {/* ================= HERO SECTION ================= */}
// // //         <section className="relative bg-[#0B0F14] pt-36 pb-40 text-center">

// // //           <div className="absolute inset-0 -z-10 pointer-events-none">
// // //             <Image
// // //               src="/consultation.png"
// // //               alt="Corporate & Commercial Law Firm in Bangalore"
// // //               fill
// // //               className="object-cover opacity-20"
// // //               priority
// // //             />
// // //           </div>

// // //           <motion.div
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             animate="visible"
// // //             className="relative max-w-5xl mx-auto px-6"
// // //           >
// // //             <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6">
// // //               Corporate & Commercial Law Firm in Bangalore for Businesses & Startups
// // //             </h1>

// // //             <p className="text-gray-300 text-lg mb-4">
// // //               In today’s competitive business environment, companies require proactive legal guidance to operate efficiently and mitigate risks. Our Corporate & Commercial Law Firm provides comprehensive Corporate Law Services and Business Legal Advisory Services to startups, SMEs, and established enterprises.
// // //             </p>

// // //             <p className="text-gray-400 text-lg mb-4">
// // //               We deliver strategic legal solutions, structured transaction support, and strong contractual protection to help businesses grow while maintaining regulatory compliance.
// // //             </p>

// // //             <p className="text-gray-400 text-lg mb-6">
// // //               Our goal is to protect your business interests, ensure regulatory compliance, and minimize commercial risk through strategic legal structuring.
// // //             </p>

// // //             <p className="text-[#C9A24D] font-semibold mb-8">
// // //               Response within 24 hours guaranteed.
// // //             </p>

// // //             {/* <div className="flex justify-center gap-6 flex-wrap"> */}
// // //             <div className="flex flex-col md:flex-row gap-4 justify-center">
// // //             {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full max-w-md mx-auto"> */}

// // //               <Link
// // //                 href="/legal-consultation-in-bangalore"
// // //                 className="w-full sm:w-auto text-center bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
// // //               >
// // //                 Book Confidential Consultation
// // //               </Link>

// // //               <Link
// // //                 href="tel:+919000000000"
// // //                 className="w-full sm:w-auto text-center border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// // //               >
// // //                 Call Now
// // //               </Link>

// // //             </div>
// // //           </motion.div>
// // //         </section>

// // //         {/* ================= SERVICES ================= */}
// // //         <section className="max-w-6xl mx-auto px-6 py-24">

// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             Comprehensive Corporate Law Services
// // //           </h2>

// // //           <p className="text-gray-700 text-lg mb-8">
// // //             Our firm supports businesses at every stage—from incorporation and structuring to expansion, restructuring, and dispute resolution.
// // //           </p>

// // //           <h3 className="text-2xl font-semibold mb-8">
// // //             OUR CORPORATE & COMMERCIAL LAW SERVICES INCLUDE
// // //           </h3>

// // //           <div className="grid md:grid-cols-2 gap-6 mb-16">
// // //             {[
// // //               "Company Incorporation & Structuring",
// // //               "Shareholder Agreements & Joint Ventures",
// // //               "Mergers & Acquisitions (M&A)",
// // //               "Corporate Governance & Compliance",
// // //               "Due Diligence & Risk Assessment",
// // //               "Regulatory Advisory & Licensing",
// // //               "Commercial Transactions & Business Structuring"
// // //             ].map((item, index) => (
// // //               <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
// // //                 <p className="text-lg font-medium text-gray-800">{item}</p>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           <Image
// // //             src="/corporatelaw.png"
// // //             alt="Corporate Legal Advisory"
// // //             width={1200}
// // //             height={600}
// // //             className="w-full rounded-xl shadow-lg mb-16"
// // //           />

// // //           {/* ================= CONTRACT ================= */}
// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             Commercial Contract Drafting & Negotiation
// // //           </h2>

// // //           <p className="text-gray-700 text-lg mb-16">
// // //             Our experienced Commercial Contract Lawyer team drafts, reviews, and negotiates vendor agreements, service agreements, partnership contracts, franchise agreements, employment contracts, and NDAs to ensure enforceability and risk protection.
// // //           </p>

// // //           {/* ================= ADVISORY ================= */}
// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             Business Legal Advisory Services
// // //           </h2>

// // //           <p className="text-gray-700 text-lg mb-16">
// // //             We provide ongoing Business Legal Advisory Services including corporate restructuring, compliance reviews, legal audits, policy drafting, and risk mitigation strategies.
// // //           </p>

// // //           {/* ================= PROCESS ================= */}
// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             OUR APPROACH / HOW WE WORK
// // //           </h2>

// // //           <div className="space-y-6 text-gray-700 text-lg mb-16">
// // //             <p><strong>Step 1:</strong> Business Assessment & Legal Consultation</p>
// // //             <p><strong>Step 2:</strong> Legal Structuring & Documentation – We clearly explain legal risks, possible outcomes, and compliance implications before proceeding.</p>
// // //             <p><strong>Step 3:</strong> Negotiation & Regulatory Support</p>
// // //             <p><strong>Step 4:</strong> Ongoing Advisory & Risk Management</p>
// // //           </div>

// // //           {/* ================= WHY CHOOSE US ================= */}
// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             WHY CHOOSE OUR CORPORATE & COMMERCIAL LAW FIRM
// // //           </h2>

// // //           <ul className="space-y-4 text-gray-700 text-lg mb-16">
// // //             <li>Experienced corporate attorneys</li>
// // //             <li>Strong commercial drafting expertise</li>
// // //             <li>Business-focused legal solutions</li>
// // //             <li>Transparent communication</li>
// // //             <li>Long-term legal partnership approach</li>
// // //           </ul>

// // //           {/* ================= FAQ ================= */}
// // //           <h2 className="text-4xl font-semibold mb-6">
// // //             Frequently Asked Questions
// // //           </h2>

// // //           <div className="space-y-4">
// // //             {[
// // //               {
// // //                 question: "Do you assist startups and SMEs?",
// // //                 answer:
// // //                   "Yes, we provide tailored Corporate Law Services for businesses of all sizes."
// // //               },
// // //               {
// // //                 question: "Can you draft customized commercial contracts?",
// // //                 answer:
// // //                   "Yes, our Commercial Contract Lawyer team drafts agreements aligned with your business goals."
// // //               },
// // //               {
// // //                 question: "Do you offer ongoing advisory support?",
// // //                 answer:
// // //                   "Yes, we provide structured Business Legal Advisory Services for long-term compliance and growth."
// // //               },
// // //               {
// // //                 question: "Do you assist with mergers and acquisitions?",
// // //                 answer:
// // //                   "Yes, we handle due diligence, structuring, and transaction documentation."
// // //               },
// // //               {
// // //                 question:
// // //                   "Do you assist with corporate due diligence and risk assessment?",
// // //                 answer:
// // //                   "Yes, we conduct comprehensive due diligence, compliance reviews, and risk assessments to identify legal exposures and ensure secure business transactions."
// // //               },
// // //               {
// // //                 question:
// // //                   "Can you help with regulatory approvals and licensing?",
// // //                 answer:
// // //                   "Yes, our Corporate & Commercial Law Firm assists businesses in obtaining regulatory approvals, licenses, and ensuring ongoing compliance with applicable laws and authorities."
// // //               }
// // //             ].map((faq, index) => (
// // //               <div key={index} className="bg-white rounded-xl shadow-md">
// // //                 <button
// // //                   onClick={() => toggleFAQ(index)}
// // //                   className="w-full flex justify-between items-center p-6 text-left"
// // //                 >
// // //                   <span className="font-semibold text-gray-800">
// // //                     {faq.question}
// // //                   </span>
// // //                   <ChevronDown
// // //                     className={`transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-[#C9A24D]" : ""
// // //                       }`}
// // //                   />
// // //                 </button>

// // //                 {activeIndex === index && (
// // //                   <div className="px-6 pb-6 text-gray-700">
// // //                     {faq.answer}
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </section>

// // //         {/* ================= FINAL CTA ================= */}
// // //         <section className="relative py-28 text-center text-white">

// // //           <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
// // //           <div className="absolute inset-0 bg-black/75"></div>

// // //           <div className="relative max-w-4xl mx-auto px-6">
// // //             <h2 className="text-4xl md:text-5xl font-semibold mb-6">
// // //               Get Immediate Legal Help from a Corporate Lawyer in Bangalore
// // //             </h2>

// // //             <p className="text-gray-400 mb-10 text-lg">
// // //               Consult our experienced Corporate & Commercial Law Firm today.
// // //             </p>

// // //             {/* <div className="flex gap-6 justify-center flex-wrap"> */}
// // //             {/* <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"> */}
// // //             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">

// // //               {/* <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"> */}
// // //               <Link href="/legal-consultation-in-bangalore">
// // //                 <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
// // //                   Book Confidential Consultation
// // //                 </button>
// // //               </Link>

// // //               <Link href="tel:+919000000000">
// // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // //                   Call Now
// // //                 </button>
// // //               </Link>
// // //             </div>

// // //             <p className="text-gray-400 text-sm mt-8">
// // //               All matters handled with complete confidentiality and legal discretion.
// // //             </p>
// // //           </div>
// // //         </section>

// // //       </main>

// // //       <Footer />
// // //     </>
// // //   );
// // // }




// // // "use client";

// // // import { useState, useRef } from "react";
// // // import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { ChevronDown } from "lucide-react";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";

// // // // ─── DATA ─────────────────────────────────────────────────────────────────────

// // // const services = [
// // //   "Company Incorporation & Business Structures",
// // //   "Shareholder Agreements & Joint Venture Structures",
// // //   "Mergers & Acquisitions (M&A) Advisory and Regulatory Compliance",
// // //   "Corporate Governance & Regulatory Compliance Assistance",
// // //   "Legal Due Diligence & Risk Assessments",
// // //   "Regulatory Compliance, Advisory & Licensing Expertise",
// // //   "Commercial Transactions & Business Structuring",
// // // ];

// // // const steps = [
// // //   {
// // //     number: "01",
// // //     title: "Evaluate the Company and Get Legal Help",
// // //     body: "We start our process with a one-on-one consultation to gain an understanding of how your company works including its business model, operating structure and legal requirements. At this stage, the attorneys in our corporate department will investigate all aspects of your company for possible areas of legal risk, provide you with tailored strategic advice based on your company's specific needs, and make sure you fully understand your potential legal risks prior to completing any business transaction or activity.",
// // //   },
// // //   {
// // //     number: "02",
// // //     title: "Create Documents and Structure Your Business",
// // //     body: "After we identify your goals for business operations and wish to complete a business transaction, we will help you create the appropriate legal structure for the operation of your business and prepare all of the documentation necessary for you to do business. The legal team will make sure that all contracts and corporate documents prepared for you are compliant with applicable laws, created to protect your business interests, and that you fully understand the legal obligations of your business and the potential risks associated with doing business, as well as all applicable compliance requirements.",
// // //   },
// // //   {
// // //     number: "03",
// // //     title: "Negotiating Contracts and Regulatory Agencies",
// // //     body: "Our business law attorneys work for you when you negotiate with partners, investors, and other stakeholders such as vendors. We will also assist you and your associates when your company needs help with receiving regulatory approval and operating within any relevant state or federal statute, regulation, or licensing.",
// // //   },
// // //   {
// // //     number: "04",
// // //     title: "Long Term Business Legal Services and Risk Management",
// // //     body: "Beyond individual business transactions and activities, our firm provides continual business legal services to support businesses in managing risk and maintaining sound corporate governance; to provide our clients with on-going legal counsel concerning compliance with law, to help our clients avoid miscommunication that cause disputes; and to enhance and upgrade our ability to assist clients in successfully conducting business within the rapidly changing and complex legal environment.",
// // //   },
// // // ];

// // // const whyChoose = [
// // //   {
// // //     title: "Experienced Corporate Attorneys",
// // //     body: "We have experience with all types of business-related legal issues, from forming companies to regulatory compliance and complex commercial transactions.",
// // //   },
// // //   {
// // //     title: "Strong Expertise in Drafting Commercial Contracts",
// // //     body: "Having well-drafted commercial contracts is critical to protecting your business interests. Our attorneys are experts in Commercial Contract Review, Commercial Contract Drafting, and Commercial Contract Negotiation. We will draft the contract in a manner that will make it clear, enforceable, and protect the parties from liability.",
// // //   },
// // //   {
// // //     title: "Business-Focused Legal Solutions",
// // //     body: "We provide practical legal solutions that fit into your business strategy. Our goal is to help our clients operate their businesses as effectively as possible while complying with all applicable laws.",
// // //   },
// // //   {
// // //     title: "Clear Communication",
// // //     body: "We believe in clear communication and that our clients should be fully informed about their rights, obligations, and the legal options available to them throughout the course of the legal process. We strive to develop long-term relationships with our clients as they grow and evolve.",
// // //   },
// // // ];

// // // const faqs = [
// // //   {
// // //     q: "Do you assist startups and small businesses with corporate legal services?",
// // //     a: "Yes. We work with startups, entrepreneurs, and small to medium-sized businesses (SMEs) by providing practical corporate legal support at every stage of their growth. From company incorporation and business structuring to compliance and commercial agreements, our team helps businesses build a strong legal foundation from the beginning.",
// // //   },
// // //   {
// // //     q: "Can your firm draft customized commercial contracts?",
// // //     a: "Absolutely. Our commercial contract lawyers regularly draft, review, and negotiate a wide range of business agreements tailored to each client's needs. This includes vendor agreements, partnership contracts, service agreements, franchise agreements, employment contracts, and non-disclosure agreements (NDAs). Every contract is carefully structured to protect your interests and reduce potential legal risks.",
// // //   },
// // //   {
// // //     q: "Do you provide ongoing business legal advisory services?",
// // //     a: "Yes, we offer ongoing business legal advisory services for companies that require regular legal guidance. This may include compliance reviews, legal audits, corporate restructuring advice, policy drafting, and risk management strategies. Our goal is to help businesses stay compliant while making well-informed legal and commercial decisions.",
// // //   },
// // //   {
// // //     q: "Can you assist with mergers and acquisitions (M&A)?",
// // //     a: "Yes. Our firm advises businesses on mergers and acquisitions (M&A), including legal due diligence, deal structuring, negotiation support, and preparation of transaction documents. We help ensure that the process is legally sound and aligned with the strategic goals of the business.",
// // //   },
// // //   {
// // //     q: "Do you conduct corporate due diligence and risk assessments?",
// // //     a: "Yes, we provide comprehensive corporate due diligence and legal risk assessment services. This involves reviewing company records, contracts, regulatory compliance, and financial obligations to identify potential legal exposures. Our due diligence process helps businesses make informed decisions before entering transactions, investments, or partnerships.",
// // //   },
// // //   {
// // //     q: "Can your firm help with regulatory approvals and licensing?",
// // //     a: "Yes. Our corporate and commercial law team assists businesses in navigating regulatory frameworks and obtaining the necessary licenses and approvals required to operate legally. We also guide clients on maintaining ongoing compliance with applicable laws and regulatory authorities.",
// // //   },
// // // ];

// // // // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 40 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, y: 0,
// // //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const fadeLeft = {
// // //   hidden: { opacity: 0, x: -40 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, x: 0,
// // //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const scaleIn = {
// // //   hidden: { opacity: 0, scale: 0.93 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, scale: 1,
// // //     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const stagger = {
// // //   hidden: {},
// // //   show: { transition: { staggerChildren: 0.12 } },
// // // };

// // // // ─── HELPERS ──────────────────────────────────────────────────────────────────

// // // function GoldDivider() {
// // //   return (
// // //     <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
// // //   );
// // // }

// // // function SectionHeading({ children, light = false, sub }) {
// // //   return (
// // //     <motion.div
// // //       variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //       className="mb-10"
// // //     >
// // //       <motion.span
// // //         initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
// // //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
// // //         className="block h-[3px] bg-[#C9A24D] mb-5"
// // //       />
// // //       <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
// // //         {children}
// // //       </h2>
// // //       {sub && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-gray-400" : "text-gray-500"}`}>{sub}</p>}
// // //     </motion.div>
// // //   );
// // // }

// // // // ─── PAGE ─────────────────────────────────────────────────────────────────────

// // // export default function CorporateLaw() {
// // //   const [activeIndex, setActiveIndex] = useState(null);
// // //   const heroRef = useRef(null);
// // //   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
// // //   const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
// // //   const heroOpa = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <main className="bg-[#F9F9F9] overflow-hidden">

// // //         {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
// // //         <section ref={heroRef} className="relative bg-[#0B0F14] min-h-[94vh] flex items-center overflow-hidden">

// // //           {/* background image */}
// // //           <div className="absolute inset-0 -z-10">
// // //             <Image
// // //               src="/consultation.png"
// // //               alt="Corporate & Commercial Law Firm in Bangalore"
// // //               fill className="object-cover opacity-20" priority
// // //             />
// // //           </div>

// // //           {/* top gold border */}
// // //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // //           {/* animated corner brackets */}
// // //           {[
// // //             "top-8 left-8 border-t-2 border-l-2",
// // //             "top-8 right-8 border-t-2 border-r-2",
// // //             "bottom-8 left-8 border-b-2 border-l-2",
// // //             "bottom-8 right-8 border-b-2 border-r-2",
// // //           ].map((cls, i) => (
// // //             <motion.div key={i}
// // //               initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
// // //               transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
// // //               className={`absolute w-12 h-12 border-[#C9A24D] ${cls}`}
// // //             />
// // //           ))}

// // //           {/* subtle grid */}
// // //           <div className="absolute inset-0 opacity-[0.04]" style={{
// // //             backgroundImage:
// // //               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
// // //               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
// // //           }} />

// // //           <motion.div style={{ y: heroY, opacity: heroOpa }}
// // //             className="relative max-w-5xl mx-auto px-6 py-32 md:py-44 w-full text-center"
// // //           >
// // //             {/* eyebrow */}
// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
// // //               className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
// // //             >
// // //               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
// // //               S Jain &amp; Attorneys · Bangalore
// // //               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
// // //             </motion.p>

// // //             {/* H1 */}
// // //             <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
// // //               className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8"
// // //             >
// // //               Corporate &amp; Commercial Law Firm in Bangalore{" "}
// // //               <span className="text-[#C9A24D]">for Businesses &amp; Startups</span>
// // //             </motion.h1>

// // //             {/* Intro paragraphs — all 3 from brief */}
// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
// // //               className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
// // //             >
// // //               In today's competitive business environment, companies require proactive legal
// // //               guidance to operate efficiently and mitigate risks. Our Corporate &amp; Commercial
// // //               Law Firm provides comprehensive Corporate Law Services and Business Legal Advisory
// // //               Services to startups, SMEs, and established enterprises.
// // //             </motion.p>

// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
// // //               className="text-gray-400 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
// // //             >
// // //               We deliver strategic legal solutions, structured transaction support, and strong
// // //               contractual protection to help businesses grow while maintaining regulatory
// // //               compliance.
// // //             </motion.p>

// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
// // //               className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
// // //             >
// // //               Our goal is to protect your business interests, ensure regulatory compliance, and
// // //               minimize commercial risk through strategic legal structuring.
// // //             </motion.p>

// // //             {/* 24-hour guarantee */}
// // //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={5}
// // //               className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
// // //             >
// // //               Response within 24 hours guaranteed.
// // //             </motion.p>

// // //             {/* CTAs */}
// // //             <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6}
// // //               className="flex flex-col md:flex-row gap-4 justify-center"
// // //             >
// // //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// // //                 <Link href="/legal-consultation-in-bangalore"
// // //                   className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200"
// // //                 >
// // //                   Book Confidential Consultation
// // //                 </Link>
// // //               </motion.div>
// // //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// // //                 <Link href="tel:+919000000000"
// // //                   className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
// // //                 >
// // //                   Call Now
// // //                 </Link>
// // //               </motion.div>
// // //             </motion.div>

// // //             {/* scroll indicator */}
// // //             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
// // //               className="mt-16 flex justify-center"
// // //             >
// // //               <motion.div
// // //                 animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
// // //                 className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
// // //               />
// // //             </motion.div>
// // //           </motion.div>
// // //         </section>

// // //         {/* ════════════════════ COMPREHENSIVE CORPORATE LAW SERVICES ════════════ */}
// // //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// // //           {/* animated right vertical rule */}
// // //           <motion.div
// // //             initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
// // //             transition={{ duration: 1.2, delay: 0.3 }}
// // //             className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
// // //           />

// // //           <div className="max-w-6xl mx-auto">
// // //             <SectionHeading>Comprehensive Corporate Law Services</SectionHeading>

// // //             {/* Full paragraph from brief */}
// // //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="text-gray-600 text-lg leading-relaxed mb-6"
// // //             >
// // //               Our legal team offers support for businesses throughout each step of their journey,
// // //               whether you are just starting out as an entrepreneur; growing through expansion;
// // //               restructuring your existing operation(s) or dealing with complicated business law
// // //               issues.
// // //             </motion.p>
// // //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5}
// // //               className="text-gray-600 text-lg leading-relaxed mb-14"
// // //             >
// // //               By providing practical and comprehensive methods of resolution, we will assist you
// // //               in moving forward with confidence. We work collaboratively with your company in
// // //               developing structures, contracts and/or transactions that are in compliance with
// // //               the laws governing each area of operation within your business and are consistent
// // //               with your company's strategic objectives over time.
// // //             </motion.p>

// // //             {/* H3 sub-heading from brief */}
// // //             <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
// // //             >
// // //               Services Provided By Our Corporate &amp; Commercial Law Practice Include:
// // //             </motion.h3>

// // //             {/* Service cards */}
// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="grid md:grid-cols-2 gap-5 mb-16"
// // //             >
// // //               {services.map((item, i) => (
// // //                 <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
// // //                   whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
// // //                   className="bg-[#f8f6f1] border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
// // //                 >
// // //                   <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">
// // //                     {String(i + 1).padStart(2, "0")}
// // //                   </span>
// // //                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
// // //                     <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
// // //                       {item}
// // //                     </p>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>

// // //             {/* Image */}
// // //             <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="rounded-xl overflow-hidden border border-gray-100 shadow-lg mb-0"
// // //             >
// // //               <Image src="/corporatelaw.png" alt="Corporate Legal Advisory"
// // //                 width={1200} height={600} className="w-full object-cover" />
// // //             </motion.div>
// // //           </div>
// // //         </section>

// // //         {/* ══════════════════ CONTRACT DRAFTING & NEGOTIATION ════════════════════ */}
// // //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
// // //           <GoldDivider />
// // //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// // //           <div className="max-w-6xl mx-auto">
// // //             <SectionHeading>
// // //               Commercial Contract Drafting &amp; Negotiation
// // //             </SectionHeading>

// // //             {/* Full paragraph from brief */}
// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="space-y-6 text-gray-600 text-lg leading-relaxed"
// // //             >
// // //               <motion.p variants={fadeUp}>
// // //                 Properly prepared contracts are a vital means of safeguarding the rights of an
// // //                 organization. The Commercial Law Division of our business law firm will assist you
// // //                 with the preparation, negotiation, and review of a broad variety of agreements to
// // //                 ensure the most effective manner of addressing your needs, providing enforceable
// // //                 agreements, minimizing your risk exposures and clearly defining the rights,
// // //                 responsibilities, and obligations of all parties.
// // //               </motion.p>
// // //               <motion.p variants={fadeUp} custom={0.5}>
// // //                 Some of the many different forms of agreements that we prepare include Vendor
// // //                 Agreements, Service Agreements, Partnership Agreements, Franchise Agreements,
// // //                 Employment Agreements and Non-Disclosure Agreements (NDAs). Our goal is to create
// // //                 an agreement that is clearly written and defines the expectations of the parties
// // //                 while reducing their exposure to liability and/or litigation.
// // //               </motion.p>
// // //             </motion.div>

// // //             {/* contract types — bordered tags */}
// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="flex flex-wrap gap-3 mt-10"
// // //             >
// // //               {[
// // //                 "Vendor Agreements", "Service Agreements", "Partnership Agreements",
// // //                 "Franchise Agreements", "Employment Agreements", "Non-Disclosure Agreements (NDAs)",
// // //               ].map((tag, i) => (
// // //                 <motion.span key={i} variants={scaleIn} custom={i * 0.1}
// // //                   className="border border-[#C9A24D] text-[#8a6a20] bg-[#fdf9f3] px-5 py-2 text-sm font-medium rounded-full"
// // //                 >
// // //                   {tag}
// // //                 </motion.span>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </section>

// // //         {/* ══════════════════════ BUSINESS LEGAL ADVISORY ════════════════════════ */}
// // //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// // //           <motion.div
// // //             initial={{ height: 0 }} whileInView={{ height: "55%" }} viewport={{ once: true }}
// // //             transition={{ duration: 1.2, delay: 0.3 }}
// // //             className="absolute left-0 top-[22%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
// // //           />

// // //           <div className="max-w-6xl mx-auto">
// // //             <SectionHeading>Legal Consulting for Businesses</SectionHeading>

// // //             {/* Full paragraphs from brief */}
// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="space-y-6 text-gray-600 text-lg leading-relaxed"
// // //             >
// // //               <motion.p variants={fadeUp}>
// // //                 In addition to providing transactional assistance, we also offer continuous legal
// // //                 consulting services to help businesses manage their operations and comply with
// // //                 applicable laws.
// // //               </motion.p>
// // //               <motion.p variants={fadeUp} custom={0.5}>
// // //                 Examples of our legal consulting service offerings include guidance on corporate
// // //                 restructuring, regulatory compliance evaluation, conducting legal audits, drafting
// // //                 and implementing internal policies, and developing strategies to minimize risk. We
// // //                 help our clients identify potential legal challenges before they occur so that they
// // //                 can make well-educated choices and have a solid legal base for long-term success.
// // //               </motion.p>
// // //             </motion.div>

// // //             {/* consulting highlights — bordered cards */}
// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="grid md:grid-cols-3 gap-5 mt-12"
// // //             >
// // //               {[
// // //                 { t: "Corporate Restructuring", d: "Guidance through structural transitions and reorganisations." },
// // //                 { t: "Regulatory Compliance", d: "Evaluation and ongoing compliance advisory for all business activities." },
// // //                 { t: "Legal Audits", d: "Thorough review of legal standing, contracts, and obligations." },
// // //                 { t: "Policy Drafting", d: "Drafting and implementing clear internal company policies." },
// // //                 { t: "Risk Mitigation", d: "Identifying and minimising legal risks before they arise." },
// // //                 { t: "Long-Term Legal Base", d: "Building a solid legal foundation for sustained business success." },
// // //               ].map((card, i) => (
// // //                 <motion.div key={i} variants={scaleIn} custom={i * 0.1}
// // //                   whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.12)" }}
// // //                   className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-6 relative group overflow-hidden transition-colors duration-300"
// // //                 >
// // //                   <motion.span
// // //                     initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
// // //                     className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
// // //                     style={{ transition: "transform 0.3s ease" }}
// // //                   />
// // //                   <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8a6a20] transition-colors duration-200">{card.t}</h4>
// // //                   <p className="text-gray-500 text-sm leading-relaxed">{card.d}</p>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </section>

// // //         {/* ══════════════════════════ OUR APPROACH ══════════════════════════════ */}
// // //         <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
// // //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // //           {/* decorative watermark */}
// // //           <motion.div
// // //             initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 0.04, x: 0 }}
// // //             viewport={{ once: true }} transition={{ duration: 1.2 }}
// // //             className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[22rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
// // //           >
// // //             4
// // //           </motion.div>

// // //           <div className="max-w-6xl mx-auto relative">
// // //             <SectionHeading light>Our Approach – How We Work</SectionHeading>

// // //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="text-gray-400 text-lg leading-relaxed mb-14 max-w-3xl"
// // //             >
// // //               We believe that every business requires practical legal guidance that is clear,
// // //               strategic, and aligned with its goals. Our approach focuses on understanding each
// // //               client's business operations and providing legal solutions that support growth while
// // //               minimizing risks.
// // //             </motion.p>

// // //             <div className="space-y-8">
// // //               {steps.map((step, i) => (
// // //                 <motion.div key={step.number}
// // //                   variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.2}
// // //                   className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-8 relative group transition-colors duration-300"
// // //                 >
// // //                   {/* corner ornament */}
// // //                   <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />
// // //                   <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />

// // //                   <div className="flex gap-6 items-start">
// // //                     <span className="text-[#C9A24D] font-black text-3xl shrink-0 leading-none">{step.number}</span>
// // //                     <div className="border-l border-[#C9A24D]/30 pl-6">
// // //                       <h3 className="text-xl font-bold text-white mb-3">
// // //                         Step {i + 1}: {step.title}
// // //                       </h3>
// // //                       <p className="text-gray-400 leading-relaxed">{step.body}</p>
// // //                     </div>
// // //                   </div>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ═══════════════════════════ WHY CHOOSE US ════════════════════════════ */}
// // //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// // //           <GoldDivider />
// // //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// // //           <div className="max-w-6xl mx-auto">
// // //             <SectionHeading>
// // //               Why You Should Choose Our Corporate &amp; Commercial Law Firm
// // //             </SectionHeading>

// // //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="text-gray-600 text-lg leading-relaxed mb-14 max-w-3xl"
// // //             >
// // //               The right corporate law firm can make a big difference in the protection of your
// // //               business interests as well as your long-term success. The attorneys at S Jain
// // //               Attorneys have legal knowledge matched with a deep understanding of commercial
// // //               realities which allows us to provide reliable, practical legal support to businesses.
// // //             </motion.p>

// // //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //               className="grid md:grid-cols-2 gap-6"
// // //             >
// // //               {whyChoose.map((item, i) => (
// // //                 <motion.div key={i} variants={scaleIn} custom={i * 0.15}
// // //                   whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
// // //                   className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 relative group overflow-hidden transition-colors duration-300"
// // //                 >
// // //                   <motion.span
// // //                     initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
// // //                     className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
// // //                     style={{ transition: "transform 0.3s ease" }}
// // //                   />
// // //                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
// // //                     {item.title}
// // //                   </h3>
// // //                   <p className="text-gray-500 leading-relaxed">{item.body}</p>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>
// // //           </div>
// // //         </section>

// // //         {/* ══════════════════════════════ FAQ ═══════════════════════════════════ */}
// // //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
// // //           <GoldDivider />

// // //           <div className="max-w-4xl mx-auto">
// // //             <SectionHeading>Frequently Asked Questions</SectionHeading>

// // //             <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
// // //               {faqs.map((faq, index) => (
// // //                 <motion.div key={index}
// // //                   variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.1}
// // //                   className={`transition-colors duration-300 ${activeIndex === index ? "bg-[#fdf9f3]" : "bg-white hover:bg-gray-50"}`}
// // //                 >
// // //                   <button
// // //                     onClick={() => setActiveIndex(activeIndex === index ? null : index)}
// // //                     className="w-full flex justify-between items-start p-7 text-left gap-4 group"
// // //                     aria-expanded={activeIndex === index}
// // //                   >
// // //                     <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${activeIndex === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"}`}>
// // //                       Q{index + 1}: {faq.q}
// // //                     </span>
// // //                     <motion.div
// // //                       animate={{ rotate: activeIndex === index ? 180 : 0 }}
// // //                       transition={{ duration: 0.25 }}
// // //                       className="shrink-0 mt-1"
// // //                     >
// // //                       <ChevronDown className={`w-5 h-5 ${activeIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
// // //                     </motion.div>
// // //                   </button>

// // //                   <AnimatePresence>
// // //                     {activeIndex === index && (
// // //                       <motion.div
// // //                         initial={{ height: 0, opacity: 0 }}
// // //                         animate={{ height: "auto", opacity: 1 }}
// // //                         exit={{ height: 0, opacity: 0 }}
// // //                         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
// // //                         className="overflow-hidden"
// // //                       >
// // //                         <div className="px-7 pb-7 border-t border-[#C9A24D]/20">
// // //                           <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
// // //                         </div>
// // //                       </motion.div>
// // //                     )}
// // //                   </AnimatePresence>
// // //                 </motion.div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ══════════════════════════ FINAL CTA ═════════════════════════════════ */}
// // //         <section className="relative py-28 text-center text-white overflow-hidden">
// // //           <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
// // //           <div className="absolute inset-0 bg-black/80" />
// // //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
// // //           <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // //           {/* animated rings */}
// // //           {[0, 1, 2].map((i) => (
// // //             <motion.div key={i}
// // //               initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
// // //               viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
// // //               className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
// // //               style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
// // //             />
// // //           ))}

// // //           <motion.div
// // //             variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //             className="relative max-w-4xl mx-auto px-6"
// // //           >
// // //             {/* bordered content box */}
// // //             <div className="border border-[#C9A24D]/30 rounded-2xl px-10 py-16 relative">
// // //               {/* corner marks */}
// // //               {[
// // //                 "top-4 left-4 border-t-2 border-l-2",
// // //                 "top-4 right-4 border-t-2 border-r-2",
// // //                 "bottom-4 left-4 border-b-2 border-l-2",
// // //                 "bottom-4 right-4 border-b-2 border-r-2",
// // //               ].map((cls, i) => (
// // //                 <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
// // //               ))}

// // //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //                 className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
// // //               >
// // //                 S Jain &amp; Attorneys · Corporate &amp; Commercial Law
// // //               </motion.p>

// // //               {/* H2 from brief — exact text */}
// // //               <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
// // //                 className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
// // //               >
// // //                 Get Immediate Legal Help from a Corporate Lawyer in Bangalore
// // //               </motion.h2>

// // //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
// // //                 className="text-gray-400 text-lg mb-10"
// // //               >
// // //                 Consult our experienced Corporate &amp; Commercial Law Firm today.
// // //               </motion.p>

// // //               <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
// // //                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
// // //               >
// // //                 <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
// // //                   <Link href="/legal-consultation-in-bangalore"
// // //                     className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-10 py-4 font-bold text-sm tracking-wide uppercase transition-colors duration-200"
// // //                   >
// // //                     Book Confidential Consultation
// // //                   </Link>
// // //                 </motion.div>
// // //                 <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
// // //                   <Link href="tel:+919000000000"
// // //                     className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-10 py-4 font-bold text-sm tracking-wide uppercase transition-colors duration-200"
// // //                   >
// // //                     Call Now
// // //                   </Link>
// // //                 </motion.div>
// // //               </motion.div>

// // //               {/* confidentiality note from brief */}
// // //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
// // //                 className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
// // //               >
// // //                 <span className="inline-block w-4 h-px bg-gray-600" />
// // //                 All matters handled with complete confidentiality and legal discretion.
// // //                 <span className="inline-block w-4 h-px bg-gray-600" />
// // //               </motion.p>
// // //             </div>
// // //           </motion.div>
// // //         </section>

// // //       </main>

// // //       <Footer />
// // //     </>
// // //   );
// // // }




// // "use client";

// // import { useState, useRef } from "react";
// // import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { ChevronDown } from "lucide-react";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // // ─── DATA ─────────────────────────────────────────────────────────────────────

// // const services = [
// //   "Company Incorporation & Business Structures",
// //   "Shareholder Agreements & Joint Venture Structures",
// //   "Mergers & Acquisitions (M&A) Advisory and Regulatory Compliance",
// //   "Corporate Governance & Regulatory Compliance Assistance",
// //   "Legal Due Diligence & Risk Assessments",
// //   "Regulatory Compliance, Advisory & Licensing Expertise",
// //   "Commercial Transactions & Business Structuring",
// // ];

// // const steps = [
// //   {
// //     number: "01",
// //     title: "Evaluate the Company and Get Legal Help",
// //     body: "We start our process with a one-on-one consultation to gain an understanding of how your company works including its business model, operating structure and legal requirements. At this stage, the attorneys in our corporate department will investigate all aspects of your company for possible areas of legal risk, provide you with tailored strategic advice based on your company's specific needs, and make sure you fully understand your potential legal risks prior to completing any business transaction or activity.",
// //   },
// //   {
// //     number: "02",
// //     title: "Create Documents and Structure Your Business",
// //     body: "After we identify your goals for business operations and wish to complete a business transaction, we will help you create the appropriate legal structure for the operation of your business and prepare all of the documentation necessary for you to do business. The legal team will make sure that all contracts and corporate documents prepared for you are compliant with applicable laws, created to protect your business interests, and that you fully understand the legal obligations of your business and the potential risks associated with doing business, as well as all applicable compliance requirements.",
// //   },
// //   {
// //     number: "03",
// //     title: "Negotiating Contracts and Regulatory Agencies",
// //     body: "Our business law attorneys work for you when you negotiate with partners, investors, and other stakeholders such as vendors. We will also assist you and your associates when your company needs help with receiving regulatory approval and operating within any relevant state or federal statute, regulation, or licensing.",
// //   },
// //   {
// //     number: "04",
// //     title: "Long Term Business Legal Services and Risk Management",
// //     body: "Beyond individual business transactions and activities, our firm provides continual business legal services to support businesses in managing risk and maintaining sound corporate governance; to provide our clients with on-going legal counsel concerning compliance with law, to help our clients avoid miscommunication that cause disputes; and to enhance and upgrade our ability to assist clients in successfully conducting business within the rapidly changing and complex legal environment.",
// //   },
// // ];

// // const whyChoose = [
// //   {
// //     title: "Experienced Corporate Attorneys",
// //     body: "We have experience with all types of business-related legal issues, from forming companies to regulatory compliance and complex commercial transactions.",
// //   },
// //   {
// //     title: "Strong Expertise in Drafting Commercial Contracts",
// //     body: "Having well-drafted commercial contracts is critical to protecting your business interests. Our attorneys are experts in Commercial Contract Review, Commercial Contract Drafting, and Commercial Contract Negotiation. We will draft the contract in a manner that will make it clear, enforceable, and protect the parties from liability.",
// //   },
// //   {
// //     title: "Business-Focused Legal Solutions",
// //     body: "We provide practical legal solutions that fit into your business strategy. Our goal is to help our clients operate their businesses as effectively as possible while complying with all applicable laws.",
// //   },
// //   {
// //     title: "Clear Communication",
// //     body: "We believe in clear communication and that our clients should be fully informed about their rights, obligations, and the legal options available to them throughout the course of the legal process. We strive to develop long-term relationships with our clients as they grow and evolve. We provide dependable legal support throughout the lifecycle of your business.",
// //   },
// // ];

// // const faqs = [
// //   {
// //     q: "Do you assist startups and small businesses with corporate legal services?",
// //     a: "Yes. We work with startups, entrepreneurs, and small to medium-sized businesses (SMEs) by providing practical corporate legal support at every stage of their growth. From company incorporation and business structuring to compliance and commercial agreements, our team helps businesses build a strong legal foundation from the beginning.",
// //   },
// //   {
// //     q: "Can your firm draft customized commercial contracts?",
// //     a: "Absolutely. Our commercial contract lawyers regularly draft, review, and negotiate a wide range of business agreements tailored to each client's needs. This includes vendor agreements, partnership contracts, service agreements, franchise agreements, employment contracts, and non-disclosure agreements (NDAs). Every contract is carefully structured to protect your interests and reduce potential legal risks.",
// //   },
// //   {
// //     q: "Do you provide ongoing business legal advisory services?",
// //     a: "Yes, we offer ongoing business legal advisory services for companies that require regular legal guidance. This may include compliance reviews, legal audits, corporate restructuring advice, policy drafting, and risk management strategies. Our goal is to help businesses stay compliant while making well-informed legal and commercial decisions.",
// //   },
// //   {
// //     q: "Can you assist with mergers and acquisitions (M&A)?",
// //     a: "Yes. Our firm advises businesses on mergers and acquisitions (M&A), including legal due diligence, deal structuring, negotiation support, and preparation of transaction documents. We help ensure that the process is legally sound and aligned with the strategic goals of the business.",
// //   },
// //   {
// //     q: "Do you conduct corporate due diligence and risk assessments?",
// //     a: "Yes, we provide comprehensive corporate due diligence and legal risk assessment services. This involves reviewing company records, contracts, regulatory compliance, and financial obligations to identify potential legal exposures. Our due diligence process helps businesses make informed decisions before entering transactions, investments, or partnerships.",
// //   },
// //   {
// //     q: "Can your firm help with regulatory approvals and licensing?",
// //     a: "Yes. Our corporate and commercial law team assists businesses in navigating regulatory frameworks and obtaining the necessary licenses and approvals required to operate legally. We also guide clients on maintaining ongoing compliance with applicable laws and regulatory authorities.",
// //   },
// // ];

// // // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   show: (i = 0) => ({
// //     opacity: 1, y: 0,
// //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// //   }),
// // };

// // const fadeLeft = {
// //   hidden: { opacity: 0, x: -40 },
// //   show: (i = 0) => ({
// //     opacity: 1, x: 0,
// //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// //   }),
// // };

// // const scaleIn = {
// //   hidden: { opacity: 0, scale: 0.93 },
// //   show: (i = 0) => ({
// //     opacity: 1, scale: 1,
// //     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// //   }),
// // };

// // const stagger = {
// //   hidden: {},
// //   show: { transition: { staggerChildren: 0.12 } },
// // };

// // // ─── HELPERS ──────────────────────────────────────────────────────────────────

// // function GoldDivider() {
// //   return (
// //     <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
// //   );
// // }

// // function SectionHeading({ children, light = false, sub }) {
// //   return (
// //     <motion.div
// //       variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
// //       className="mb-10"
// //     >
// //       <motion.span
// //         initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
// //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
// //         className="block h-[3px] bg-[#C9A24D] mb-5"
// //       />
// //       <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
// //         {children}
// //       </h2>
// //       {sub && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-gray-400" : "text-gray-500"}`}>{sub}</p>}
// //     </motion.div>
// //   );
// // }

// // // ─── PAGE ─────────────────────────────────────────────────────────────────────

// // export default function CorporateLaw() {
// //   const [activeIndex, setActiveIndex] = useState(null);
// //   const heroRef = useRef(null);
// //   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
// //   const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
// //   const heroOpa = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// //   return (
// //     <>
// //       <Navbar />

// //       <main className="bg-[#F9F9F9] overflow-hidden">

// //         {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
// //         <section ref={heroRef} className="relative bg-[#0B0F14] min-h-[94vh] flex items-center overflow-hidden">

// //           {/* background image */}
// //           <div className="absolute inset-0 -z-10">
// //             <Image
// //               src="/consultation.png"
// //               alt="Corporate & Commercial Law Firm in Bangalore"
// //               fill className="object-cover opacity-20" priority
// //             />
// //           </div>

// //           {/* top gold border */}
// //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// //           {/* animated corner brackets */}
// //           {[
// //             "top-8 left-8 border-t-2 border-l-2",
// //             "top-8 right-8 border-t-2 border-r-2",
// //             "bottom-8 left-8 border-b-2 border-l-2",
// //             "bottom-8 right-8 border-b-2 border-r-2",
// //           ].map((cls, i) => (
// //             <motion.div key={i}
// //               initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
// //               transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
// //               className={`absolute w-12 h-12 border-[#C9A24D] ${cls}`}
// //             />
// //           ))}

// //           {/* subtle grid */}
// //           <div className="absolute inset-0 opacity-[0.04]" style={{
// //             backgroundImage:
// //               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
// //               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
// //           }} />

// //           <motion.div style={{ y: heroY, opacity: heroOpa }}
// //             className="relative max-w-5xl mx-auto px-6 py-32 md:py-44 w-full text-center"
// //           >
// //             {/* eyebrow */}
// //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
// //               className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
// //             >
// //               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
// //               S Jain &amp; Attorneys · Bangalore
// //               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
// //             </motion.p>

// //             {/* H1 */}
// //             <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
// //               className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8"
// //             >
// //               Corporate &amp; Commercial Law Firm in Bangalore{" "}
// //               <span className="text-[#C9A24D]">for Businesses &amp; Startups</span>
// //             </motion.h1>

// //             {/* Intro paragraphs — all 3 from brief */}
// //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
// //               className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
// //             >
// //               In today's competitive business environment, companies require proactive legal
// //               guidance to operate efficiently and mitigate risks. Our Corporate &amp; Commercial
// //               Law Firm provides comprehensive Corporate Law Services and Business Legal Advisory
// //               Services to startups, SMEs, and established enterprises.
// //             </motion.p>

// //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
// //               className="text-gray-400 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
// //             >
// //               We deliver strategic legal solutions, structured transaction support, and strong
// //               contractual protection to help businesses grow while maintaining regulatory
// //               compliance.
// //             </motion.p>

// //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
// //               className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
// //             >
// //               Our goal is to protect your business interests, ensure regulatory compliance, and
// //               minimize commercial risk through strategic legal structuring.
// //             </motion.p>

// //             {/* 24-hour guarantee */}
// //             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={5}
// //               className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
// //             >
// //               Response within 24 hours guaranteed.
// //             </motion.p>

// //             {/* CTAs */}
// //             <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6}
// //               className="flex flex-col md:flex-row gap-4 justify-center"
// //             >
// //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// //                 <Link href="/legal-consultation-in-bangalore"
// //                   className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200"
// //                 >
// //                   Book Confidential Consultation
// //                 </Link>
// //               </motion.div>
// //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// //                 <Link href="tel:+919000000000"
// //                   className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
// //                 >
// //                   Call Now
// //                 </Link>
// //               </motion.div>
// //             </motion.div>

// //             {/* scroll indicator */}
// //             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
// //               className="mt-16 flex justify-center"
// //             >
// //               <motion.div
// //                 animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
// //                 className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
// //               />
// //             </motion.div>
// //           </motion.div>
// //         </section>

// //         {/* ════════════════════ COMPREHENSIVE CORPORATE LAW SERVICES ════════════ */}
// //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// //           {/* animated right vertical rule */}
// //           <motion.div
// //             initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
// //             transition={{ duration: 1.2, delay: 0.3 }}
// //             className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
// //           />

// //           <div className="max-w-6xl mx-auto">
// //             <SectionHeading>Comprehensive Corporate Law Services</SectionHeading>

// //             {/* Full paragraph from brief */}
// //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="text-gray-600 text-lg leading-relaxed mb-6"
// //             >
// //               Our legal team offers support for businesses throughout each step of their journey,
// //               whether you are just starting out as an entrepreneur; growing through expansion;
// //               restructuring your existing operation(s) or dealing with complicated business law
// //               issues.
// //             </motion.p>
// //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5}
// //               className="text-gray-600 text-lg leading-relaxed mb-14"
// //             >
// //               By providing practical and comprehensive methods of resolution, we will assist you
// //               in moving forward with confidence. We work collaboratively with your company in
// //               developing structures, contracts and/or transactions that are in compliance with
// //               the laws governing each area of operation within your business and are consistent
// //               with your company's strategic objectives over time.
// //             </motion.p>

// //             {/* H3 sub-heading from brief */}
// //             <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
// //             >
// //               Services Provided By Our Corporate &amp; Commercial Law Practice Include:
// //             </motion.h3>

// //             {/* Service cards */}
// //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="grid md:grid-cols-2 gap-5 mb-16"
// //             >
// //               {services.map((item, i) => (
// //                 <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
// //                   whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
// //                   className="bg-[#f8f6f1] border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
// //                 >
// //                   <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">
// //                     {String(i + 1).padStart(2, "0")}
// //                   </span>
// //                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
// //                     <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
// //                       {item}
// //                     </p>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </motion.div>

// //             {/* Image */}
// //             <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="rounded-xl overflow-hidden border border-gray-100 shadow-lg mb-0"
// //             >
// //               <Image src="/corporatelaw.png" alt="Corporate Legal Advisory"
// //                 width={1200} height={600} className="w-full object-cover" />
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* ══════════════════ CONTRACT DRAFTING & NEGOTIATION ════════════════════ */}
// //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
// //           <GoldDivider />
// //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// //           <div className="max-w-6xl mx-auto">
// //             <SectionHeading>
// //               Commercial Contract Drafting &amp; Negotiation
// //             </SectionHeading>

// //             {/* H3 from brief */}
// //             <motion.h3
// //               variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
// //             >
// //               Forms of Business Drafting and Negotiation
// //             </motion.h3>

// //             {/* Full paragraph from brief */}
// //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="space-y-6 text-gray-600 text-lg leading-relaxed"
// //             >
// //               <motion.p variants={fadeUp}>
// //                 Properly prepared contracts are a vital means of safeguarding the rights of an
// //                 organization. The Commercial Law Division of our business law firm will assist you
// //                 with the preparation, negotiation, and review of a broad variety of agreements to
// //                 ensure the most effective manner of addressing your needs, providing enforceable
// //                 agreements, minimizing your risk exposures and clearly defining the rights,
// //                 responsibilities, and obligations of all parties.
// //               </motion.p>
// //               <motion.p variants={fadeUp} custom={0.5}>
// //                 Some of the many different forms of agreements that we prepare include Vendor
// //                 Agreements, Service Agreements, Partnership Agreements, Franchise Agreements,
// //                 Employment Agreements and Non-Disclosure Agreements (NDAs). Our goal is to create
// //                 an agreement that is clearly written and defines the expectations of the parties
// //                 while reducing their exposure to liability and/or litigation.
// //               </motion.p>
// //             </motion.div>

// //             {/* contract types — bordered tags */}
// //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="flex flex-wrap gap-3 mt-10"
// //             >
// //               {[
// //                 "Vendor Agreements", "Service Agreements", "Partnership Agreements",
// //                 "Franchise Agreements", "Employment Agreements", "Non-Disclosure Agreements (NDAs)",
// //               ].map((tag, i) => (
// //                 <motion.span key={i} variants={scaleIn} custom={i * 0.1}
// //                   className="border border-[#C9A24D] text-[#8a6a20] bg-[#fdf9f3] px-5 py-2 text-sm font-medium rounded-full"
// //                 >
// //                   {tag}
// //                 </motion.span>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* ══════════════════════ BUSINESS LEGAL ADVISORY ════════════════════════ */}
// //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// //           <motion.div
// //             initial={{ height: 0 }} whileInView={{ height: "55%" }} viewport={{ once: true }}
// //             transition={{ duration: 1.2, delay: 0.3 }}
// //             className="absolute left-0 top-[22%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
// //           />

// //           <div className="max-w-6xl mx-auto">
// //             <SectionHeading>Legal Consulting for Businesses</SectionHeading>

// //             {/* Full paragraphs from brief */}
// //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="space-y-6 text-gray-600 text-lg leading-relaxed"
// //             >
// //               <motion.p variants={fadeUp}>
// //                 In addition to providing transactional assistance, we also offer continuous legal
// //                 consulting services to help businesses manage their operations and comply with
// //                 applicable laws.
// //               </motion.p>
// //               <motion.p variants={fadeUp} custom={0.5}>
// //                 Examples of our legal consulting service offerings include guidance on corporate
// //                 restructuring, regulatory compliance evaluation, conducting legal audits, drafting
// //                 and implementing internal policies, and developing strategies to minimize risk. We
// //                 help our clients identify potential legal challenges before they occur so that they
// //                 can make well-educated choices and have a solid legal base for long-term success.
// //               </motion.p>
// //             </motion.div>

// //             {/* consulting highlights — bordered cards */}
// //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="grid md:grid-cols-3 gap-5 mt-12"
// //             >
// //               {[
// //                 { t: "Corporate Restructuring", d: "Guidance through structural transitions and reorganisations." },
// //                 { t: "Regulatory Compliance", d: "Evaluation and ongoing compliance advisory for all business activities." },
// //                 { t: "Legal Audits", d: "Thorough review of legal standing, contracts, and obligations." },
// //                 { t: "Policy Drafting", d: "Drafting and implementing clear internal company policies." },
// //                 { t: "Risk Mitigation", d: "Identifying and minimising legal risks before they arise." },
// //                 { t: "Long-Term Legal Base", d: "Building a solid legal foundation for sustained business success." },
// //               ].map((card, i) => (
// //                 <motion.div key={i} variants={scaleIn} custom={i * 0.1}
// //                   whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.12)" }}
// //                   className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-6 relative group overflow-hidden transition-colors duration-300"
// //                 >
// //                   <motion.span
// //                     initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
// //                     className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
// //                     style={{ transition: "transform 0.3s ease" }}
// //                   />
// //                   <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8a6a20] transition-colors duration-200">{card.t}</h4>
// //                   <p className="text-gray-500 text-sm leading-relaxed">{card.d}</p>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* ══════════════════════════ OUR APPROACH ══════════════════════════════ */}
// //         <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
// //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// //           {/* decorative watermark */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 0.04, x: 0 }}
// //             viewport={{ once: true }} transition={{ duration: 1.2 }}
// //             className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[22rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
// //           >
// //             4
// //           </motion.div>

// //           <div className="max-w-6xl mx-auto relative">
// //             <SectionHeading light>Our Approach – How We Work</SectionHeading>

// //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="text-gray-400 text-lg leading-relaxed mb-14 max-w-3xl"
// //             >
// //               We believe that every business requires practical legal guidance that is clear,
// //               strategic, and aligned with its goals. Our approach focuses on understanding each
// //               client's business operations and providing legal solutions that support growth while
// //               minimizing risks.
// //             </motion.p>

// //             <div className="space-y-8">
// //               {steps.map((step, i) => (
// //                 <motion.div key={step.number}
// //                   variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.2}
// //                   className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-8 relative group transition-colors duration-300"
// //                 >
// //                   {/* corner ornament */}
// //                   <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />
// //                   <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />

// //                   <div className="flex gap-6 items-start">
// //                     <span className="text-[#C9A24D] font-black text-3xl shrink-0 leading-none">{step.number}</span>
// //                     <div className="border-l border-[#C9A24D]/30 pl-6">
// //                       <h3 className="text-xl font-bold text-white mb-3">
// //                         Step {i + 1}: {step.title}
// //                       </h3>
// //                       <p className="text-gray-400 leading-relaxed">{step.body}</p>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* ═══════════════════════════ WHY CHOOSE US ════════════════════════════ */}
// //         <section className="py-28 px-6 bg-white relative overflow-hidden">
// //           <GoldDivider />
// //           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// //           <div className="max-w-6xl mx-auto">
// //             <SectionHeading>
// //               Why You Should Choose Our Corporate &amp; Commercial Law Firm
// //             </SectionHeading>

// //             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="text-gray-600 text-lg leading-relaxed mb-14 max-w-3xl"
// //             >
// //               The right corporate law firm can make a big difference in the protection of your
// //               business interests as well as your long-term success. The attorneys at S Jain
// //               Attorneys have legal knowledge matched with a deep understanding of commercial
// //               realities which allows us to provide reliable, practical legal support to businesses.
// //             </motion.p>

// //             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// //               className="grid md:grid-cols-2 gap-6"
// //             >
// //               {whyChoose.map((item, i) => (
// //                 <motion.div key={i} variants={scaleIn} custom={i * 0.15}
// //                   whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
// //                   className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 relative group overflow-hidden transition-colors duration-300"
// //                 >
// //                   <motion.span
// //                     initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
// //                     className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
// //                     style={{ transition: "transform 0.3s ease" }}
// //                   />
// //                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
// //                     {item.title}
// //                   </h3>
// //                   <p className="text-gray-500 leading-relaxed">{item.body}</p>
// //                 </motion.div>
// //               ))}
// //             </motion.div>
// //           </div>
// //         </section>

// //         {/* ══════════════════════════════ FAQ ═══════════════════════════════════ */}
// //         <section className="py-28 px-6 bg-[#f8f6f1] relative">
// //           <GoldDivider />

// //           <div className="max-w-4xl mx-auto">
// //             <SectionHeading>Frequently Asked Questions</SectionHeading>

// //             <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
// //               {faqs.map((faq, index) => (
// //                 <motion.div key={index}
// //                   variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.1}
// //                   className={`transition-colors duration-300 ${activeIndex === index ? "bg-[#fdf9f3]" : "bg-white hover:bg-gray-50"}`}
// //                 >
// //                   <button
// //                     onClick={() => setActiveIndex(activeIndex === index ? null : index)}
// //                     className="w-full flex justify-between items-start p-7 text-left gap-4 group"
// //                     aria-expanded={activeIndex === index}
// //                   >
// //                     <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${activeIndex === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"}`}>
// //                       Q{index + 1}: {faq.q}
// //                     </span>
// //                     <motion.div
// //                       animate={{ rotate: activeIndex === index ? 180 : 0 }}
// //                       transition={{ duration: 0.25 }}
// //                       className="shrink-0 mt-1"
// //                     >
// //                       <ChevronDown className={`w-5 h-5 ${activeIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
// //                     </motion.div>
// //                   </button>

// //                   <AnimatePresence>
// //                     {activeIndex === index && (
// //                       <motion.div
// //                         initial={{ height: 0, opacity: 0 }}
// //                         animate={{ height: "auto", opacity: 1 }}
// //                         exit={{ height: 0, opacity: 0 }}
// //                         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
// //                         className="overflow-hidden"
// //                       >
// //                         <div className="px-7 pb-7 border-t border-[#C9A24D]/20">
// //                           <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
// //                         </div>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* ══════════════════════════ FINAL CTA ═════════════════════════════════ */}
// //         <section className="relative py-28 text-center text-white overflow-hidden">
// //           <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
// //           <div className="absolute inset-0 bg-black/80" />
// //           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
// //           <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// //           {/* animated rings */}
// //           {[0, 1, 2].map((i) => (
// //             <motion.div key={i}
// //               initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
// //               viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
// //               className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
// //               style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
// //             />
// //           ))}

// //           <motion.div
// //             variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// //             className="relative max-w-4xl mx-auto px-6"
// //           >
// //             {/* bordered content box */}
// //             <div className="border border-[#C9A24D]/30 rounded-2xl px-10 py-16 relative">
// //               {/* corner marks */}
// //               {[
// //                 "top-4 left-4 border-t-2 border-l-2",
// //                 "top-4 right-4 border-t-2 border-r-2",
// //                 "bottom-4 left-4 border-b-2 border-l-2",
// //                 "bottom-4 right-4 border-b-2 border-r-2",
// //               ].map((cls, i) => (
// //                 <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
// //               ))}

// //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// //                 className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
// //               >
// //                 S Jain &amp; Attorneys · Corporate &amp; Commercial Law
// //               </motion.p>

// //               {/* H2 from brief — exact text */}
// //               <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
// //                 className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
// //               >
// //                 Get Immediate Legal Help from a Corporate Lawyer in Bangalore
// //               </motion.h2>

// //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
// //                 className="text-gray-400 text-lg mb-10"
// //               >
// //                 Consult our experienced Corporate &amp; Commercial Law Firm today.
// //               </motion.p>

// //               <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
// //                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
// //               >
// //                 <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
// //                   <Link href="/contact"
// //                     className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
// //                   >
// //                     Request Call Back
// //                   </Link>
// //                 </motion.div>
// //               </motion.div>

// //               {/* confidentiality note from brief */}
// //               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
// //                 className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
// //               >
// //                 <span className="inline-block w-4 h-px bg-gray-600" />
// //                 All matters handled with complete confidentiality and legal discretion.
// //                 <span className="inline-block w-4 h-px bg-gray-600" />
// //               </motion.p>
// //             </div>
// //           </motion.div>
// //         </section>

// //       </main>

// //       <Footer />
// //     </>
// //   );
// // }


// "use client";

// import { useState, useRef } from "react";
// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// import { ChevronDown } from "lucide-react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // ─── DATA ─────────────────────────────────────────────────────────────────────

// const services = [
//   "Company Incorporation & Business Structures",
//   "Shareholder Agreements & Joint Venture Structures",
//   "Mergers & Acquisitions (M&A) Advisory and Regulatory Compliance",
//   "Corporate Governance & Regulatory Compliance Assistance",
//   "Legal Due Diligence & Risk Assessments",
//   "Regulatory Compliance, Advisory & Licensing Expertise",
//   "Commercial Transactions & Business Structuring",
// ];

// const steps = [
//   {
//     number: "01",
//     title: "Evaluate the Company and Get Legal Help",
//     body: "We start our process with a one-on-one consultation to gain an understanding of how your company works including its business model, operating structure and legal requirements. At this stage, the attorneys in our corporate department will investigate all aspects of your company for possible areas of legal risk, provide you with tailored strategic advice based on your company's specific needs, and make sure you fully understand your potential legal risks prior to completing any business transaction or activity.",
//   },
//   {
//     number: "02",
//     title: "Create Documents and Structure Your Business",
//     body: "After we identify your goals for business operations and wish to complete a business transaction, we will help you create the appropriate legal structure for the operation of your business and prepare all of the documentation necessary for you to do business. The legal team will make sure that all contracts and corporate documents prepared for you are compliant with applicable laws, created to protect your business interests, and that you fully understand the legal obligations of your business and the potential risks associated with doing business, as well as all applicable compliance requirements.",
//   },
//   {
//     number: "03",
//     title: "Negotiating Contracts and Regulatory Agencies",
//     body: "Our business law attorneys work for you when you negotiate with partners, investors, and other stakeholders such as vendors. We will also assist you and your associates when your company needs help with receiving regulatory approval and operating within any relevant state or federal statute, regulation, or licensing.",
//   },
//   {
//     number: "04",
//     title: "Long Term Business Legal Services and Risk Management",
//     body: "Beyond individual business transactions and activities, our firm provides continual business legal services to support businesses in managing risk and maintaining sound corporate governance; to provide our clients with on-going legal counsel concerning compliance with law, to help our clients avoid miscommunication that cause disputes; and to enhance and upgrade our ability to assist clients in successfully conducting business within the rapidly changing and complex legal environment.",
//   },
// ];

// const whyChoose = [
//   {
//     title: "Experienced Corporate Attorneys",
//     body: "We have experience with all types of business-related legal issues, from forming companies to regulatory compliance and complex commercial transactions.",
//   },
//   {
//     title: "Strong Expertise in Drafting Commercial Contracts",
//     body: "Having well-drafted commercial contracts is critical to protecting your business interests. Our attorneys are experts in Commercial Contract Review, Commercial Contract Drafting, and Commercial Contract Negotiation. We will draft the contract in a manner that will make it clear, enforceable, and protect the parties from liability.",
//   },
//   {
//     title: "Business-Focused Legal Solutions",
//     body: "We provide practical legal solutions that fit into your business strategy. Our goal is to help our clients operate their businesses as effectively as possible while complying with all applicable laws.",
//   },
//   {
//     title: "Clear Communication",
//     body: "We believe in clear communication and that our clients should be fully informed about their rights, obligations, and the legal options available to them throughout the course of the legal process. We strive to develop long-term relationships with our clients as they grow and evolve. We provide dependable legal support throughout the lifecycle of your business.",
//   },
// ];

// const faqs = [
//   {
//     q: "Do you assist startups and small businesses with corporate legal services?",
//     a: "Yes. We work with startups, entrepreneurs, and small to medium-sized businesses (SMEs) by providing practical corporate legal support at every stage of their growth. From company incorporation and business structuring to compliance and commercial agreements, our team helps businesses build a strong legal foundation from the beginning.",
//   },
//   {
//     q: "Can your firm draft customized commercial contracts?",
//     a: "Absolutely. Our commercial contract lawyers regularly draft, review, and negotiate a wide range of business agreements tailored to each client's needs. This includes vendor agreements, partnership contracts, service agreements, franchise agreements, employment contracts, and non-disclosure agreements (NDAs). Every contract is carefully structured to protect your interests and reduce potential legal risks.",
//   },
//   {
//     q: "Do you provide ongoing business legal advisory services?",
//     a: "Yes, we offer ongoing business legal advisory services for companies that require regular legal guidance. This may include compliance reviews, legal audits, corporate restructuring advice, policy drafting, and risk management strategies. Our goal is to help businesses stay compliant while making well-informed legal and commercial decisions.",
//   },
//   {
//     q: "Can you assist with mergers and acquisitions (M&A)?",
//     a: "Yes. Our firm advises businesses on mergers and acquisitions (M&A), including legal due diligence, deal structuring, negotiation support, and preparation of transaction documents. We help ensure that the process is legally sound and aligned with the strategic goals of the business.",
//   },
//   {
//     q: "Do you conduct corporate due diligence and risk assessments?",
//     a: "Yes, we provide comprehensive corporate due diligence and legal risk assessment services. This involves reviewing company records, contracts, regulatory compliance, and financial obligations to identify potential legal exposures. Our due diligence process helps businesses make informed decisions before entering transactions, investments, or partnerships.",
//   },
//   {
//     q: "Can your firm help with regulatory approvals and licensing?",
//     a: "Yes. Our corporate and commercial law team assists businesses in navigating regulatory frameworks and obtaining the necessary licenses and approvals required to operate legally. We also guide clients on maintaining ongoing compliance with applicable laws and regulatory authorities.",
//   },
// ];

// // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: (i = 0) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const fadeLeft = {
//   hidden: { opacity: 0, x: -40 },
//   show: (i = 0) => ({
//     opacity: 1, x: 0,
//     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.93 },
//   show: (i = 0) => ({
//     opacity: 1, scale: 1,
//     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } },
// };

// // ─── HELPERS ──────────────────────────────────────────────────────────────────

// function GoldDivider() {
//   return (
//     <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
//   );
// }

// function SectionHeading({ children, light = false, sub }) {
//   return (
//     <motion.div
//       variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
//       className="mb-10"
//     >
//       <motion.span
//         initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
//         className="block h-[3px] bg-[#C9A24D] mb-5"
//       />
//       <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
//         {children}
//       </h2>
//       {sub && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-gray-400" : "text-gray-500"}`}>{sub}</p>}
//     </motion.div>
//   );
// }

// // ─── PAGE ─────────────────────────────────────────────────────────────────────

// export default function CorporateLaw() {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
//   const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const heroOpa = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

//   return (
//     <>
//       <Navbar />

//       <main className="bg-[#F9F9F9] overflow-hidden">

//         {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
//         <section ref={heroRef} className="relative bg-[#0B0F14] min-h-[94vh] flex items-center overflow-hidden">

//           {/* background image */}
//           <div className="absolute inset-0 -z-10">
//             <Image
//               src="/consultation.png"
//               alt="Corporate & Commercial Law Firm in Bangalore"
//               fill className="object-cover opacity-20" priority
//             />
//           </div>

//           {/* top gold border */}
//           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//           {/* animated corner brackets */}
//           {[
//             "top-8 left-8 border-t-2 border-l-2",
//             "top-8 right-8 border-t-2 border-r-2",
//             "bottom-8 left-8 border-b-2 border-l-2",
//             "bottom-8 right-8 border-b-2 border-r-2",
//           ].map((cls, i) => (
//             <motion.div key={i}
//               initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
//               className={`absolute w-12 h-12 border-[#C9A24D] ${cls}`}
//             />
//           ))}

//           {/* subtle grid */}
//           <div className="absolute inset-0 opacity-[0.04]" style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
//               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
//           }} />

//           <motion.div style={{ y: heroY, opacity: heroOpa }}
//             className="relative max-w-5xl mx-auto px-6 py-32 md:py-44 w-full text-center"
//           >
//             {/* eyebrow */}
//             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
//               className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
//             >
//               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
//               S Jain &amp; Attorneys · Bangalore
//               <span className="inline-block w-6 h-px bg-[#C9A24D]" />
//             </motion.p>

//             {/* H1 */}
//             <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
//               className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8"
//             >
//               Corporate &amp; Commercial Law Firm in Bangalore{" "}
//               <span className="text-[#C9A24D]">for Businesses &amp; Startups</span>
//             </motion.h1>

//             {/* Intro paragraphs — all 3 from brief */}
//             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
//               className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
//             >
//               In today's competitive business environment, companies require proactive legal
//               guidance to operate efficiently and mitigate risks. Our Corporate &amp; Commercial
//               Law Firm provides comprehensive Corporate Law Services and Business Legal Advisory
//               Services to startups, SMEs, and established enterprises.
//             </motion.p>

//             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
//               className="text-gray-400 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
//             >
//               We deliver strategic legal solutions, structured transaction support, and strong
//               contractual protection to help businesses grow while maintaining regulatory
//               compliance.
//             </motion.p>

//             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
//               className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
//             >
//               Our goal is to protect your business interests, ensure regulatory compliance, and
//               minimize commercial risk through strategic legal structuring.
//             </motion.p>

//             {/* 24-hour guarantee */}
//             <motion.p variants={fadeUp} initial="hidden" animate="show" custom={5}
//               className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
//             >
//               Response within 24 hours guaranteed.
//             </motion.p>

//             {/* CTAs */}
//             <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6}
//               className="flex flex-col md:flex-row gap-4 justify-center"
//             >
//               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                 <Link href="/legal-consultation-in-bangalore"
//                   className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200"
//                 >
//                   Book Confidential Consultation
//                 </Link>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//                 <Link href="tel:+919000000000"
//                   className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
//                 >
//                   Call Now
//                 </Link>
//               </motion.div>
//             </motion.div>

//             {/* scroll indicator */}
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
//               className="mt-16 flex justify-center"
//             >
//               <motion.div
//                 animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
//                 className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
//               />
//             </motion.div>
//           </motion.div>
//         </section>

//         {/* ════════════════════ COMPREHENSIVE CORPORATE LAW SERVICES ════════════ */}
//         <section className="py-28 px-6 bg-white relative overflow-hidden">
//           {/* animated right vertical rule */}
//           <motion.div
//             initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
//             transition={{ duration: 1.2, delay: 0.3 }}
//             className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
//           />

//           <div className="max-w-6xl mx-auto">
//             <SectionHeading>Comprehensive Corporate Law Services</SectionHeading>

//             {/* Full paragraph from brief */}
//             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="text-gray-600 text-lg leading-relaxed mb-6"
//             >
//               Our legal team offers support for businesses throughout each step of their journey,
//               whether you are just starting out as an entrepreneur; growing through expansion;
//               restructuring your existing operation(s) or dealing with complicated business law
//               issues.
//             </motion.p>
//             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5}
//               className="text-gray-600 text-lg leading-relaxed mb-14"
//             >
//               By providing practical and comprehensive methods of resolution, we will assist you
//               in moving forward with confidence. We work collaboratively with your company in
//               developing structures, contracts and/or transactions that are in compliance with
//               the laws governing each area of operation within your business and are consistent
//               with your company's strategic objectives over time.
//             </motion.p>

//             {/* H3 sub-heading from brief */}
//             <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
//             >
//               Services Provided By Our Corporate &amp; Commercial Law Practice Include:
//             </motion.h3>

//             {/* Service cards */}
//             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="grid md:grid-cols-2 gap-5 mb-16"
//             >
//               {services.map((item, i) => (
//                 <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
//                   whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
//                   className="bg-[#f8f6f1] border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
//                 >
//                   <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">
//                     {String(i + 1).padStart(2, "0")}
//                   </span>
//                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
//                     <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
//                       {item}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>

//             {/* Image */}
//             <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="rounded-xl overflow-hidden border border-gray-100 shadow-lg mb-0"
//             >
//               <Image src="/corporatelaw.png" alt="Corporate Legal Advisory"
//                 width={1200} height={600} className="w-full object-cover" />
//             </motion.div>
//           </div>
//         </section>

//         {/* ══════════════════ CONTRACT DRAFTING & NEGOTIATION ════════════════════ */}
//         <section className="py-28 px-6 bg-[#f8f6f1] relative">
//           <GoldDivider />
//           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//           <div className="max-w-6xl mx-auto">
//             <SectionHeading>
//               Commercial Contract Drafting &amp; Negotiation
//             </SectionHeading>

//             {/* H3 from brief */}
//             <motion.h3
//               variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
//             >
//               Forms of Business Drafting and Negotiation
//             </motion.h3>

//             {/* Full paragraph from brief */}
//             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="space-y-6 text-gray-600 text-lg leading-relaxed"
//             >
//               <motion.p variants={fadeUp}>
//                 Properly prepared contracts are a vital means of safeguarding the rights of an
//                 organization. The Commercial Law Division of our business law firm will assist you
//                 with the preparation, negotiation, and review of a broad variety of agreements to
//                 ensure the most effective manner of addressing your needs, providing enforceable
//                 agreements, minimizing your risk exposures and clearly defining the rights,
//                 responsibilities, and obligations of all parties.
//               </motion.p>
//               <motion.p variants={fadeUp} custom={0.5}>
//                 Some of the many different forms of agreements that we prepare include Vendor
//                 Agreements, Service Agreements, Partnership Agreements, Franchise Agreements,
//                 Employment Agreements and Non-Disclosure Agreements (NDAs). Our goal is to create
//                 an agreement that is clearly written and defines the expectations of the parties
//                 while reducing their exposure to liability and/or litigation.
//               </motion.p>
//             </motion.div>

//             {/* contract types — bordered tags */}
//             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="flex flex-wrap gap-3 mt-10"
//             >
//               {[
//                 "Vendor Agreements", "Service Agreements", "Partnership Agreements",
//                 "Franchise Agreements", "Employment Agreements", "Non-Disclosure Agreements (NDAs)",
//               ].map((tag, i) => (
//                 <motion.span key={i} variants={scaleIn} custom={i * 0.1}
//                   className="border border-[#C9A24D] text-[#8a6a20] bg-[#fdf9f3] px-5 py-2 text-sm font-medium rounded-full"
//                 >
//                   {tag}
//                 </motion.span>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ══════════════════════ BUSINESS LEGAL ADVISORY ════════════════════════ */}
//         <section className="py-28 px-6 bg-white relative overflow-hidden">
//           <motion.div
//             initial={{ height: 0 }} whileInView={{ height: "55%" }} viewport={{ once: true }}
//             transition={{ duration: 1.2, delay: 0.3 }}
//             className="absolute left-0 top-[22%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
//           />

//           <div className="max-w-6xl mx-auto">
//             <SectionHeading>Legal Consulting for Businesses</SectionHeading>

//             {/* Full paragraphs from brief */}
//             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="space-y-6 text-gray-600 text-lg leading-relaxed"
//             >
//               <motion.p variants={fadeUp}>
//                 In addition to providing transactional assistance, we also offer continuous legal
//                 consulting services to help businesses manage their operations and comply with
//                 applicable laws.
//               </motion.p>
//               <motion.p variants={fadeUp} custom={0.5}>
//                 Examples of our legal consulting service offerings include guidance on corporate
//                 restructuring, regulatory compliance evaluation, conducting legal audits, drafting
//                 and implementing internal policies, and developing strategies to minimize risk. We
//                 help our clients identify potential legal challenges before they occur so that they
//                 can make well-educated choices and have a solid legal base for long-term success.
//               </motion.p>
//             </motion.div>

//             {/* consulting highlights — bordered cards */}
//             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="grid md:grid-cols-3 gap-5 mt-12"
//             >
//               {[
//                 { t: "Corporate Restructuring", d: "Guidance through structural transitions and reorganisations." },
//                 { t: "Regulatory Compliance", d: "Evaluation and ongoing compliance advisory for all business activities." },
//                 { t: "Legal Audits", d: "Thorough review of legal standing, contracts, and obligations." },
//                 { t: "Policy Drafting", d: "Drafting and implementing clear internal company policies." },
//                 { t: "Risk Mitigation", d: "Identifying and minimising legal risks before they arise." },
//                 { t: "Long-Term Legal Base", d: "Building a solid legal foundation for sustained business success." },
//               ].map((card, i) => (
//                 <motion.div key={i} variants={scaleIn} custom={i * 0.1}
//                   whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.12)" }}
//                   className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-6 relative group overflow-hidden transition-colors duration-300"
//                 >
//                   <motion.span
//                     initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
//                     className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
//                     style={{ transition: "transform 0.3s ease" }}
//                   />
//                   <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8a6a20] transition-colors duration-200">{card.t}</h4>
//                   <p className="text-gray-500 text-sm leading-relaxed">{card.d}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ══════════════════════════ OUR APPROACH ══════════════════════════════ */}
//         <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
//           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//           {/* decorative watermark */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 0.04, x: 0 }}
//             viewport={{ once: true }} transition={{ duration: 1.2 }}
//             className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[22rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
//           >
//             4
//           </motion.div>

//           <div className="max-w-6xl mx-auto relative">
//             <SectionHeading light>Our Approach – How We Work</SectionHeading>

//             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="text-gray-400 text-lg leading-relaxed mb-14 max-w-3xl"
//             >
//               We believe that every business requires practical legal guidance that is clear,
//               strategic, and aligned with its goals. Our approach focuses on understanding each
//               client's business operations and providing legal solutions that support growth while
//               minimizing risks.
//             </motion.p>

//             <div className="space-y-8">
//               {steps.map((step, i) => (
//                 <motion.div key={step.number}
//                   variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.2}
//                   className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-8 relative group transition-colors duration-300"
//                 >
//                   {/* corner ornament */}
//                   <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />
//                   <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#C9A24D]/40 group-hover:border-[#C9A24D] transition-colors duration-300" />

//                   <div className="flex gap-6 items-start">
//                     <span className="text-[#C9A24D] font-black text-3xl shrink-0 leading-none">{step.number}</span>
//                     <div className="border-l border-[#C9A24D]/30 pl-6">
//                       <h3 className="text-xl font-bold text-white mb-3">
//                         Step {i + 1}: {step.title}
//                       </h3>
//                       <p className="text-gray-400 leading-relaxed">{step.body}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ═══════════════════════════ WHY CHOOSE US ════════════════════════════ */}
//         <section className="py-28 px-6 bg-white relative overflow-hidden">
//           <GoldDivider />
//           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//           <div className="max-w-6xl mx-auto">
//             <SectionHeading>
//               Why You Should Choose Our Corporate &amp; Commercial Law Firm
//             </SectionHeading>

//             <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="text-gray-600 text-lg leading-relaxed mb-14 max-w-3xl"
//             >
//               The right corporate law firm can make a big difference in the protection of your
//               business interests as well as your long-term success. The attorneys at S Jain
//               Attorneys have legal knowledge matched with a deep understanding of commercial
//               realities which allows us to provide reliable, practical legal support to businesses.
//             </motion.p>

//             <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
//               className="grid md:grid-cols-2 gap-6"
//             >
//               {whyChoose.map((item, i) => (
//                 <motion.div key={i} variants={scaleIn} custom={i * 0.15}
//                   whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
//                   className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 relative group overflow-hidden transition-colors duration-300"
//                 >
//                   <motion.span
//                     initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
//                     className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
//                     style={{ transition: "transform 0.3s ease" }}
//                   />
//                   <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-500 leading-relaxed">{item.body}</p>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </section>

//         {/* ══════════════════════════════ FAQ ═══════════════════════════════════ */}
//         <section className="py-28 px-6 bg-[#f8f6f1] relative">
//           <GoldDivider />

//           <div className="max-w-4xl mx-auto">
//             <SectionHeading>Frequently Asked Questions</SectionHeading>

//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <motion.div key={index}
//                   variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.1}
//                   className={`rounded-xl overflow-hidden border-2 transition-all duration-300 shadow-sm ${
//                     activeIndex === index
//                       ? "border-[#C9A24D] bg-[#fdf9f3] shadow-[0_4px_24px_rgba(201,162,77,0.15)]"
//                       : "border-gray-200 bg-white hover:border-[#C9A24D]/60 hover:shadow-md"
//                   }`}
//                 >
//                   <button
//                     onClick={() => setActiveIndex(activeIndex === index ? null : index)}
//                     className="w-full flex justify-between items-start p-7 text-left gap-4 group"
//                     aria-expanded={activeIndex === index}
//                   >
//                     {/* gold left accent bar */}
//                     <div className="flex items-start gap-4 flex-1">
//                       <span className={`shrink-0 mt-1 w-1 self-stretch rounded-full transition-colors duration-300 ${
//                         activeIndex === index ? "bg-[#C9A24D]" : "bg-gray-200 group-hover:bg-[#C9A24D]/50"
//                       }`} />
//                       <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
//                         activeIndex === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"
//                       }`}>
//                         Q{index + 1}: {faq.q}
//                       </span>
//                     </div>
//                     <motion.div
//                       animate={{ rotate: activeIndex === index ? 180 : 0 }}
//                       transition={{ duration: 0.25 }}
//                       className="shrink-0 mt-1"
//                     >
//                       <ChevronDown className={`w-5 h-5 ${activeIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
//                     </motion.div>
//                   </button>

//                   <AnimatePresence>
//                     {activeIndex === index && (
//                       <motion.div
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-7 pb-7 border-t-2 border-[#C9A24D]/20 ml-7">
//                           <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ══════════════════════════ FINAL CTA ═════════════════════════════════ */}
//         <section className="relative py-28 text-center text-white overflow-hidden">
//           <Image src="/discussion.png" alt="Consultation" fill className="object-cover" />
//           <div className="absolute inset-0 bg-black/80" />
//           <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
//           <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//           {/* animated rings */}
//           {[0, 1, 2].map((i) => (
//             <motion.div key={i}
//               initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
//               viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
//               className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
//               style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
//             />
//           ))}

//           <motion.div
//             variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
//             className="relative max-w-4xl mx-auto px-6"
//           >
//             {/* bordered content box */}
//             <div className="border border-[#C9A24D]/30 rounded-2xl px-10 py-16 relative">
//               {/* corner marks */}
//               {[
//                 "top-4 left-4 border-t-2 border-l-2",
//                 "top-4 right-4 border-t-2 border-r-2",
//                 "bottom-4 left-4 border-b-2 border-l-2",
//                 "bottom-4 right-4 border-b-2 border-r-2",
//               ].map((cls, i) => (
//                 <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
//               ))}

//               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
//                 className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
//               >
//                 S Jain &amp; Attorneys · Corporate &amp; Commercial Law
//               </motion.p>

//               {/* H2 from brief — exact text */}
//               <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
//                 className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
//               >
//                 Get Immediate Legal Help from a Corporate Lawyer in Bangalore
//               </motion.h2>

//               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
//                 className="text-gray-400 text-lg mb-10"
//               >
//                 Consult our experienced Corporate &amp; Commercial Law Firm today.
//               </motion.p>

//               <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
//                 className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//               >
//                 <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
//                   <Link href="/contact"
//                     className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
//                   >
//                     Request Call Back
//                   </Link>
//                 </motion.div>
//               </motion.div>

//               {/* confidentiality note from brief */}
//               <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
//                 className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
//               >
//                 <span className="inline-block w-4 h-px bg-gray-600" />
//                 All matters handled with complete confidentiality and legal discretion.
//                 <span className="inline-block w-4 h-px bg-gray-600" />
//               </motion.p>
//             </div>
//           </motion.div>
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
  "Company Incorporation & Business Structures",
  "Shareholder Agreements & Joint Venture Structures",
  "Mergers & Acquisitions (M&A) Advisory and Regulatory Compliance",
  "Corporate Governance & Regulatory Compliance Assistance",
  "Legal Due Diligence & Risk Assessments",
  "Regulatory Compliance, Advisory & Licensing Expertise",
  "Commercial Transactions & Business Structuring",
];

const steps = [
  {
    number: "01",
    title: "Evaluate the Company and Get Legal Help",
    body: "We start our process with a one-on-one consultation to gain an understanding of how your company works including its business model, operating structure and legal requirements. At this stage, the attorneys in our corporate department will investigate all aspects of your company for possible areas of legal risk, provide you with tailored strategic advice based on your company's specific needs, and make sure you fully understand your potential legal risks prior to completing any business transaction or activity.",
  },
  {
    number: "02",
    title: "Create Documents and Structure Your Business",
    body: "After we identify your goals for business operations and wish to complete a business transaction, we will help you create the appropriate legal structure for the operation of your business and prepare all of the documentation necessary for you to do business. The legal team will make sure that all contracts and corporate documents prepared for you are compliant with applicable laws, created to protect your business interests, and that you fully understand the legal obligations of your business and the potential risks associated with doing business, as well as all applicable compliance requirements.",
  },
  {
    number: "03",
    title: "Negotiating Contracts and Regulatory Agencies",
    body: "Our business law attorneys work for you when you negotiate with partners, investors, and other stakeholders such as vendors. We will also assist you and your associates when your company needs help with receiving regulatory approval and operating within any relevant state or federal statute, regulation, or licensing.",
  },
  {
    number: "04",
    title: "Long Term Business Legal Services and Risk Management",
    body: "Beyond individual business transactions and activities, our firm provides continual business legal services to support businesses in managing risk and maintaining sound corporate governance; to provide our clients with on-going legal counsel concerning compliance with law, to help our clients avoid miscommunication that cause disputes; and to enhance and upgrade our ability to assist clients in successfully conducting business within the rapidly changing and complex legal environment.",
  },
];

const whyChoose = [
  {
    title: "Experienced Corporate Attorneys",
    body: "We have experience with all types of business-related legal issues, from forming companies to regulatory compliance and complex commercial transactions.",
  },
  {
    title: "Strong Expertise in Drafting Commercial Contracts",
    body: "Having well-drafted commercial contracts is critical to protecting your business interests. Our attorneys are experts in Commercial Contract Review, Commercial Contract Drafting, and Commercial Contract Negotiation. We will draft the contract in a manner that will make it clear, enforceable, and protect the parties from liability.",
  },
  {
    title: "Business-Focused Legal Solutions",
    body: "We provide practical legal solutions that fit into your business strategy. Our goal is to help our clients operate their businesses as effectively as possible while complying with all applicable laws.",
  },
  {
    title: "Clear Communication",
    body: "We believe in clear communication and that our clients should be fully informed about their rights, obligations, and the legal options available to them throughout the course of the legal process. We strive to develop long-term relationships with our clients as they grow and evolve. We provide dependable legal support throughout the lifecycle of your business.",
  },
];

const faqs = [
  {
    q: "Do you assist startups and small businesses with corporate legal services?",
    a: "Yes. We work with startups, entrepreneurs, and small to medium-sized businesses (SMEs) by providing practical corporate legal support at every stage of their growth. From company incorporation and business structuring to compliance and commercial agreements, our team helps businesses build a strong legal foundation from the beginning.",
  },
  {
    q: "Can your firm draft customized commercial contracts?",
    a: "Absolutely. Our commercial contract lawyers regularly draft, review, and negotiate a wide range of business agreements tailored to each client's needs. This includes vendor agreements, partnership contracts, service agreements, franchise agreements, employment contracts, and non-disclosure agreements (NDAs). Every contract is carefully structured to protect your interests and reduce potential legal risks.",
  },
  {
    q: "Do you provide ongoing business legal advisory services?",
    a: "Yes, we offer ongoing business legal advisory services for companies that require regular legal guidance. This may include compliance reviews, legal audits, corporate restructuring advice, policy drafting, and risk management strategies. Our goal is to help businesses stay compliant while making well-informed legal and commercial decisions.",
  },
  {
    q: "Can you assist with mergers and acquisitions (M&A)?",
    a: "Yes. Our firm advises businesses on mergers and acquisitions (M&A), including legal due diligence, deal structuring, negotiation support, and preparation of transaction documents. We help ensure that the process is legally sound and aligned with the strategic goals of the business.",
  },
  {
    q: "Do you conduct corporate due diligence and risk assessments?",
    a: "Yes, we provide comprehensive corporate due diligence and legal risk assessment services. This involves reviewing company records, contracts, regulatory compliance, and financial obligations to identify potential legal exposures. Our due diligence process helps businesses make informed decisions before entering transactions, investments, or partnerships.",
  },
  {
    q: "Can your firm help with regulatory approvals and licensing?",
    a: "Yes. Our corporate and commercial law team assists businesses in navigating regulatory frameworks and obtaining the necessary licenses and approvals required to operate legally. We also guide clients on maintaining ongoing compliance with applicable laws and regulatory authorities.",
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

function SectionHeading({ children, light = false, sub }) {
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
      {sub && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-gray-400" : "text-gray-500"}`}>{sub}</p>}
    </motion.div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function CorporateLaw() {
  const [activeIndex, setActiveIndex] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpa = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      <Navbar />

      <main className="bg-[#F9F9F9] overflow-hidden">

        {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
        <section ref={heroRef} className="relative bg-[#0B0F14] min-h-[94vh] flex items-center overflow-hidden">

          {/* ── FIX: background image needs position:absolute parent with relative container ── */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/consultation.png"
              alt="Corporate & Commercial Law Firm in Bangalore"
              fill
              className="object-cover opacity-20"
              priority
              unoptimized
            />
          </div>

          {/* top gold border */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />

          {/* animated corner brackets */}
          {[
            "top-8 left-8 border-t-2 border-l-2",
            "top-8 right-8 border-t-2 border-r-2",
            "bottom-8 left-8 border-b-2 border-l-2",
            "bottom-8 right-8 border-b-2 border-r-2",
          ].map((cls, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
              className={`absolute w-12 h-12 border-[#C9A24D] z-10 ${cls}`}
            />
          ))}

          {/* subtle grid */}
          <div className="absolute inset-0 z-0 opacity-[0.04]" style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
              "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
          }} />

          <motion.div style={{ y: heroY, opacity: heroOpa }}
            className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-44 w-full text-center"
          >
            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
            >
              <span className="inline-block w-6 h-px bg-[#C9A24D]" />
              S Jain &amp; Attorneys · Bangalore
              <span className="inline-block w-6 h-px bg-[#C9A24D]" />
            </motion.p>

            <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
              className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-8"
            >
              Corporate &amp; Commercial Law Firm in Bangalore{" "}
              <span className="text-[#C9A24D]">for Businesses &amp; Startups</span>
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="text-gray-300 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              In today's competitive business environment, companies require proactive legal
              guidance to operate efficiently and mitigate risks. Our Corporate &amp; Commercial
              Law Firm provides comprehensive Corporate Law Services and Business Legal Advisory
              Services to startups, SMEs, and established enterprises.
            </motion.p>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={3}
              className="text-gray-400 text-lg mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              We deliver strategic legal solutions, structured transaction support, and strong
              contractual protection to help businesses grow while maintaining regulatory compliance.
            </motion.p>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={4}
              className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              Our goal is to protect your business interests, ensure regulatory compliance, and
              minimize commercial risk through strategic legal structuring.
            </motion.p>

            <motion.p variants={fadeUp} initial="hidden" animate="show" custom={5}
              className="text-[#C9A24D] font-bold text-base tracking-wide mb-10"
            >
              Response within 24 hours guaranteed.
            </motion.p>

            {/* ── HERO CTAs — matching CTASection style ── */}
            <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto"
            >
              <Link href="/legal-consultation-in-bangalore" className="w-full sm:flex-1">
                <button className="w-full py-3 text-center border border-[#C9A24D] text-[#C9A24D] font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition duration-300">
                  Request Callback
                </button>
              </Link>
              <Link href="/legal-consultation-in-bangalore" className="w-full sm:flex-1">
                <button className="w-full py-3 text-center bg-[#C9A24D] text-black font-semibold rounded-md hover:scale-105 transition duration-300 shadow-lg">
                  Book Confidential Consultation
                </button>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
              className="mt-16 flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
                className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ════════════════════ COMPREHENSIVE CORPORATE LAW SERVICES ════════════ */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          <motion.div
            initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
          />

          <div className="max-w-6xl mx-auto">
            <SectionHeading>Comprehensive Corporate Law Services</SectionHeading>

            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed mb-6"
            >
              Our legal team offers support for businesses throughout each step of their journey,
              whether you are just starting out as an entrepreneur; growing through expansion;
              restructuring your existing operation(s) or dealing with complicated business law issues.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5}
              className="text-gray-600 text-lg leading-relaxed mb-14"
            >
              By providing practical and comprehensive methods of resolution, we will assist you
              in moving forward with confidence. We work collaboratively with your company in
              developing structures, contracts and/or transactions that are in compliance with
              the laws governing each area of operation within your business and are consistent
              with your company's strategic objectives over time.
            </motion.p>

            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
            >
              Services Provided By Our Corporate &amp; Commercial Law Practice Include:
            </motion.h3>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-5 mb-16"
            >
              {services.map((item, i) => (
                <motion.div key={i} variants={fadeLeft} custom={i * 0.1}
                  whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
                  className="bg-[#f8f6f1] border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300"
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

            {/* ── FIX: corporatelaw.png — use relative wrapper with fixed height ── */}
            <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="rounded-xl overflow-hidden border border-gray-100 shadow-lg relative w-full h-[400px] md:h-[500px]"
            >
              <Image
                src="/corporatelaw.png"
                alt="Corporate Legal Advisory"
                fill
                className="object-cover"
                unoptimized
              />
            </motion.div>
          </div>
        </section>

        {/* ══════════════════ CONTRACT DRAFTING & NEGOTIATION ════════════════════ */}
        <section className="py-28 px-6 bg-[#f8f6f1] relative">
          <GoldDivider />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <div className="max-w-6xl mx-auto">
            <SectionHeading>
              Commercial Contract Drafting &amp; Negotiation
            </SectionHeading>

            <motion.h3
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-xl font-bold text-gray-900 uppercase tracking-widest mb-8 border-l-4 border-[#C9A24D] pl-4"
            >
              Forms of Business Drafting and Negotiation
            </motion.h3>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-lg leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                Properly prepared contracts are a vital means of safeguarding the rights of an
                organization. The Commercial Law Division of our business law firm will assist you
                with the preparation, negotiation, and review of a broad variety of agreements to
                ensure the most effective manner of addressing your needs, providing enforceable
                agreements, minimizing your risk exposures and clearly defining the rights,
                responsibilities, and obligations of all parties.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.5}>
                Some of the many different forms of agreements that we prepare include Vendor
                Agreements, Service Agreements, Partnership Agreements, Franchise Agreements,
                Employment Agreements and Non-Disclosure Agreements (NDAs). Our goal is to create
                an agreement that is clearly written and defines the expectations of the parties
                while reducing their exposure to liability and/or litigation.
              </motion.p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-wrap gap-3 mt-10"
            >
              {[
                "Vendor Agreements", "Service Agreements", "Partnership Agreements",
                "Franchise Agreements", "Employment Agreements", "Non-Disclosure Agreements (NDAs)",
              ].map((tag, i) => (
                <motion.span key={i} variants={scaleIn} custom={i * 0.1}
                  className="border border-[#C9A24D] text-[#8a6a20] bg-[#fdf9f3] px-5 py-2 text-sm font-medium rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════ BUSINESS LEGAL ADVISORY ════════════════════════ */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          <motion.div
            initial={{ height: 0 }} whileInView={{ height: "55%" }} viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-0 top-[22%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
          />

          <div className="max-w-6xl mx-auto">
            <SectionHeading>Legal Consulting for Businesses</SectionHeading>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="space-y-6 text-gray-600 text-lg leading-relaxed"
            >
              <motion.p variants={fadeUp}>
                In addition to providing transactional assistance, we also offer continuous legal
                consulting services to help businesses manage their operations and comply with applicable laws.
              </motion.p>
              <motion.p variants={fadeUp} custom={0.5}>
                Examples of our legal consulting service offerings include guidance on corporate
                restructuring, regulatory compliance evaluation, conducting legal audits, drafting
                and implementing internal policies, and developing strategies to minimize risk. We
                help our clients identify potential legal challenges before they occur so that they
                can make well-educated choices and have a solid legal base for long-term success.
              </motion.p>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-5 mt-12"
            >
              {[
                { t: "Corporate Restructuring", d: "Guidance through structural transitions and reorganisations." },
                { t: "Regulatory Compliance", d: "Evaluation and ongoing compliance advisory for all business activities." },
                { t: "Legal Audits", d: "Thorough review of legal standing, contracts, and obligations." },
                { t: "Policy Drafting", d: "Drafting and implementing clear internal company policies." },
                { t: "Risk Mitigation", d: "Identifying and minimising legal risks before they arise." },
                { t: "Long-Term Legal Base", d: "Building a solid legal foundation for sustained business success." },
              ].map((card, i) => (
                <motion.div key={i} variants={scaleIn} custom={i * 0.1}
                  whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.12)" }}
                  className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-6 relative group overflow-hidden transition-colors duration-300"
                >
                  <motion.span
                    initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
                    className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
                    style={{ transition: "transform 0.3s ease" }}
                  />
                  <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#8a6a20] transition-colors duration-200">{card.t}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════ OUR APPROACH ══════════════════════════════ */}
        <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

          <motion.div
            initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 0.04, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 1.2 }}
            className="absolute right-[-3rem] top-1/2 -translate-y-1/2 text-[22rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
          >
            4
          </motion.div>

          <div className="max-w-6xl mx-auto relative">
            <SectionHeading light>Our Approach – How We Work</SectionHeading>

            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-gray-400 text-lg leading-relaxed mb-14 max-w-3xl"
            >
              We believe that every business requires practical legal guidance that is clear,
              strategic, and aligned with its goals. Our approach focuses on understanding each
              client's business operations and providing legal solutions that support growth while
              minimizing risks.
            </motion.p>

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
                      <h3 className="text-xl font-bold text-white mb-3">Step {i + 1}: {step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ WHY CHOOSE US ════════════════════════════ */}
        <section className="py-28 px-6 bg-white relative overflow-hidden">
          <GoldDivider />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <div className="max-w-6xl mx-auto">
            <SectionHeading>
              Why You Should Choose Our Corporate &amp; Commercial Law Firm
            </SectionHeading>

            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-gray-600 text-lg leading-relaxed mb-14 max-w-3xl"
            >
              The right corporate law firm can make a big difference in the protection of your
              business interests as well as your long-term success. The attorneys at S Jain
              Attorneys have legal knowledge matched with a deep understanding of commercial
              realities which allows us to provide reliable, practical legal support to businesses.
            </motion.p>

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
                    activeIndex === index
                      ? "border-[#C9A24D] bg-[#fdf9f3] shadow-[0_4px_24px_rgba(201,162,77,0.15)]"
                      : "border-gray-200 bg-white hover:border-[#C9A24D]/60 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full flex justify-between items-start p-7 text-left gap-4 group"
                    aria-expanded={activeIndex === index}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <span className={`shrink-0 mt-1 w-1 self-stretch rounded-full transition-colors duration-300 ${
                        activeIndex === index ? "bg-[#C9A24D]" : "bg-gray-200 group-hover:bg-[#C9A24D]/50"
                      }`} />
                      <span className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
                        activeIndex === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"
                      }`}>
                        Q{index + 1}: {faq.q}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 mt-1"
                    >
                      <ChevronDown className={`w-5 h-5 ${activeIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
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

          {/* ── FIX: discussion.png needs relative positioned parent ── */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/discussion.png"
              alt="Legal Consultation"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="absolute inset-0 bg-black/80 z-0" />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />

          {[0, 1, 2].map((i) => (
            <motion.div key={i}
              initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
              className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none z-0"
              style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
            />
          ))}

          <motion.div
            variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="relative z-10 max-w-4xl mx-auto px-6"
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
                S Jain &amp; Attorneys · Corporate &amp; Commercial Law
              </motion.p>

              <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
                className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
              >
                Get Immediate Legal Help from a Corporate Lawyer in Bangalore
              </motion.h2>

              <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
                className="text-gray-400 text-lg mb-4"
              >
                Consult our experienced Corporate &amp; Commercial Law Firm today.
              </motion.p>

              <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2.5}
                className="text-[#C9A24D] text-sm font-medium mb-10"
              >
                Response within 24 hours guaranteed.
              </motion.p>

              {/* ── FINAL CTA BUTTONS — matching CTASection style ── */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
                className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto"
              >
                <Link href="/legal-consultation-in-bangalore" className="w-full sm:flex-1">
                  <button className="w-full py-3 text-center border border-[#C9A24D] text-[#C9A24D] font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition duration-300">
                    Request Callback
                  </button>
                </Link>
                <Link href="/legal-consultation-in-bangalore" className="w-full sm:flex-1">
                  <button className="w-full py-3 text-center bg-[#C9A24D] text-black font-semibold rounded-md hover:scale-105 transition duration-300 shadow-lg">
                    Book Confidential Consultation
                  </button>
                </Link>
              </motion.div>

              <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
                className="mt-8 text-gray-500 text-sm"
              >
                All matters handled with complete confidentiality and legal discretion.
              </motion.p>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  );
}