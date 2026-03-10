// // // // // // // // // // // import Link from "next/link";
// // // // // // // // // // // import Navbar from "../components/Navbar";
// // // // // // // // // // // import Footer from "../components/Footer";

// // // // // // // // // // // /* ================= SEO META ================= */

// // // // // // // // // // // export const metadata = {
// // // // // // // // // // //   title: "Leading Law Firm in Bangalore | S Jain & Attorneys",
// // // // // // // // // // //   description:
// // // // // // // // // // //     "S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters.",
// // // // // // // // // // //   alternates: {
// // // // // // // // // // //     canonical: "https://yourdomain.com/leading-law-firm-in-bangalore",
// // // // // // // // // // //   },
// // // // // // // // // // // };

// // // // // // // // // // // export default function LeadingLawFirmPage() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <>
// // // // // // // // // // //       <Navbar />

// // // // // // // // // // //       {/* ================= HERO SECTION ================= */}
// // // // // // // // // // //       <section className="relative bg-gradient-to-br from-black via-[#111] to-black text-[#C9A24D] py-32 px-6 overflow-hidden">
// // // // // // // // // // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_40%)]"></div>

// // // // // // // // // // //         <div className="relative max-w-6xl mx-auto text-center">
// // // // // // // // // // //           <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight">
// // // // // // // // // // //             Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // // // // // // // // //           </h1>

// // // // // // // // // // //           <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
// // // // // // // // // // //             A leading law firm in Bangalore providing full-service legal
// // // // // // // // // // //             representation across litigation, advisory, and regulatory matters.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* ================= ABOUT OUR FIRM ================= */}
// // // // // // // // // // //       <section className="py-28 px-6 bg-white">
// // // // // // // // // // //         <div className="max-w-5xl mx-auto">
// // // // // // // // // // //           <h2 className="text-4xl font-serif mb-8 text-black">
// // // // // // // // // // //             About Our Firm
// // // // // // // // // // //           </h2>

// // // // // // // // // // //           <p className="text-gray-700 leading-relaxed mb-6">
// // // // // // // // // // //             S Jain & Attorneys is recognised as a leading law firm in Bangalore,
// // // // // // // // // // //             delivering strategic and result-oriented legal representation for
// // // // // // // // // // //             individuals, businesses, startups, multinational companies, and NRIs.
// // // // // // // // // // //           </p>

// // // // // // // // // // //           <p className="text-gray-700 leading-relaxed mb-6">
// // // // // // // // // // //             With a team of experienced attorneys and dedicated legal experts,
// // // // // // // // // // //             we provide structured legal counsel and courtroom advocacy that
// // // // // // // // // // //             protects your rights, business interests, and long-term objectives.
// // // // // // // // // // //           </p>

// // // // // // // // // // //           <p className="text-gray-700 leading-relaxed">
// // // // // // // // // // //             Our firm advises across corporate, civil, criminal, family,
// // // // // // // // // // //             regulatory, and cross-border matters. As trusted corporate legal
// // // // // // // // // // //             advisors, lawyers, and advocates, we combine legal depth with
// // // // // // // // // // //             practical insight to guide clients confidently through complex legal
// // // // // // // // // // //             environments.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* ================= WHY CHOOSE US ================= */}
// // // // // // // // // // //       <section className="bg-gray-50 py-28 px-6">
// // // // // // // // // // //         <div className="max-w-5xl mx-auto">
// // // // // // // // // // //           <h2 className="text-4xl font-serif mb-12 text-black">
// // // // // // // // // // //             Why Choose Our Legal Team
// // // // // // // // // // //           </h2>

// // // // // // // // // // //           <ul className="space-y-4 text-gray-700 text-lg">
// // // // // // // // // // //             <li>✓ Over a decade of legal practice by experienced attorneys in Bangalore</li>
// // // // // // // // // // //             <li>✓ A trusted group of legal experts committed to ethical advocacy</li>
// // // // // // // // // // //             <li>✓ Strategic, personalized legal solutions tailored to each matter</li>
// // // // // // // // // // //             <li>✓ Corporate legal advisory services for business clients</li>
// // // // // // // // // // //             <li>✓ Lawyers and advocates with courtroom experience across multiple jurisdictions</li>
// // // // // // // // // // //             <li>✓ Transparent communication and structured case strategy</li>
// // // // // // // // // // //           </ul>

// // // // // // // // // // //           <p className="text-[#C9A24D] font-semibold mt-10 text-lg">
// // // // // // // // // // //             Response within 24 hours guaranteed.
// // // // // // // // // // //           </p>

// // // // // // // // // // //           <div className="flex flex-wrap gap-6 mt-10">
// // // // // // // // // // //             <Link
// // // // // // // // // // //               href="/legal-consultation-in-bangalore"
// // // // // // // // // // //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold hover:scale-105 transition rounded-md shadow-lg"
// // // // // // // // // // //             >
// // // // // // // // // // //               Book Confidential Consultation
// // // // // // // // // // //             </Link>

// // // // // // // // // // //             <Link
// // // // // // // // // // //               href="/contact"
// // // // // // // // // // //               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition rounded-md"
// // // // // // // // // // //             >
// // // // // // // // // // //               Request Call Back
// // // // // // // // // // //             </Link>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* ================= FOUNDER ================= */}
// // // // // // // // // // //       <section className="py-28 px-6 bg-white">
// // // // // // // // // // //         <div className="max-w-5xl mx-auto">
// // // // // // // // // // //           <h2 className="text-4xl font-serif mb-8 text-black">
// // // // // // // // // // //             Our Founder
// // // // // // // // // // //           </h2>

// // // // // // // // // // //           <h3 className="text-2xl text-[#C9A24D] font-semibold mb-6">
// // // // // // // // // // //             S Jain – Principal Attorney
// // // // // // // // // // //           </h3>

// // // // // // // // // // //           <p className="text-gray-700 leading-relaxed">
// // // // // // // // // // //             S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive
// // // // // // // // // // //             legal experience in representing clients before courts, tribunals,
// // // // // // // // // // //             and regulatory authorities. As a respected advocate and legal strategist,
// // // // // // // // // // //             S Jain blends practical understanding with deep legal insight to deliver
// // // // // // // // // // //             structured, results-oriented counsel across litigation and advisory matters.
// // // // // // // // // // //             Committed to professionalism and precision, each case is handled with clarity,
// // // // // // // // // // //             discretion, and a client-first approach focused on achieving measurable legal outcomes.
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* ================= CORE VALUES ================= */}
// // // // // // // // // // //       <section className="bg-gray-50 py-28 px-6">
// // // // // // // // // // //         <div className="max-w-5xl mx-auto space-y-12">
// // // // // // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // // // // // //             Our Core Values & Approach
// // // // // // // // // // //           </h2>

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <h3 className="text-[#C9A24D] font-semibold text-xl">Integrity</h3>
// // // // // // // // // // //             <p className="text-gray-700 mt-2">
// // // // // // // // // // //               We uphold honesty, discretion, and transparency in every legal engagement.
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <h3 className="text-[#C9A24D] font-semibold text-xl">Client-Centric Advocacy</h3>
// // // // // // // // // // //             <p className="text-gray-700 mt-2">
// // // // // // // // // // //               Clear communication and personalized legal strategy remain central to our practice.
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <h3 className="text-[#C9A24D] font-semibold text-xl">Commitment to Excellence</h3>
// // // // // // // // // // //             <p className="text-gray-700 mt-2">
// // // // // // // // // // //               Delivering premium legal services led by experienced attorneys.
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <h3 className="text-[#C9A24D] font-semibold text-xl">Strategic Legal Expertise</h3>
// // // // // // // // // // //             <p className="text-gray-700 mt-2">
// // // // // // // // // // //               Practical, business-oriented, and results-driven legal counsel.
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <h3 className="text-[#C9A24D] font-semibold text-xl">Our Approach</h3>
// // // // // // // // // // //             <p className="text-gray-700 mt-2">
// // // // // // // // // // //               We provide understandable, structured legal guidance at every stage —
// // // // // // // // // // //               prioritizing your objectives, protecting your rights, and securing long-term outcomes.
// // // // // // // // // // //             </p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* ================= LEGAL EXPERTISE ================= */}
// // // // // // // // // // //       <section className="bg-white py-28 px-6">
// // // // // // // // // // //         <div className="max-w-5xl mx-auto space-y-8">
// // // // // // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // // // // // //             Our Legal Expertise
// // // // // // // // // // //           </h2>

// // // // // // // // // // //           <div className="space-y-6 text-gray-700">
// // // // // // // // // // //             <div>
// // // // // // // // // // //               <h3 className="font-semibold">1. Corporate & Commercial Law</h3>
// // // // // // // // // // //               <p>Corporate advisory, regulatory compliance, contracts, and business strategy.</p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div>
// // // // // // // // // // //               <h3 className="font-semibold">2. Civil & Property Litigation</h3>
// // // // // // // // // // //               <p>Civil disputes, property and real estate matters, and contractual claims.</p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div>
// // // // // // // // // // //               <h3 className="font-semibold">3. Criminal Defense & Prosecution</h3>
// // // // // // // // // // //               <p>Representation before sessions courts, magistrate courts, and appellate forums.</p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div>
// // // // // // // // // // //               <h3 className="font-semibold">4. Family & Divorce Law</h3>
// // // // // // // // // // //               <p>Divorce, matrimonial property and financial settlements, custody, and mediation.</p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div>
// // // // // // // // // // //               <h3 className="font-semibold">5. Employment & Labour Law</h3>
// // // // // // // // // // //               <p>Labour court representation, wrongful termination, and HR compliance advisory.</p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div>
// // // // // // // // // // //               <h3 className="font-semibold">6. Consumer Protection & Appellate Practice</h3>
// // // // // // // // // // //               <p>Consumer disputes, High Court matters, and complex litigation cases.</p>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <div>
// // // // // // // // // // //               <h3 className="font-semibold">7. Cross-Border & NRI Legal Services</h3>
// // // // // // // // // // //               <p>NRI property matters, international disputes, and private international law advisory.</p>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* ================= FAQ ================= */}
// // // // // // // // // // //       <section className="bg-gray-50 py-28 px-6">
// // // // // // // // // // //         <div className="max-w-5xl mx-auto space-y-8">
// // // // // // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // // // // // //             Frequently Asked Questions (FAQs)
// // // // // // // // // // //           </h2>

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <p className="font-semibold">1. Why is S Jain & Attorneys considered a leading law firm in Bangalore?</p>
// // // // // // // // // // //             <p className="text-gray-700">The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.</p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <p className="font-semibold">2. What areas of law does your firm specialize in?</p>
// // // // // // // // // // //             <p className="text-gray-700">We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.</p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <p className="font-semibold">3. Who leads S Jain & Attorneys?</p>
// // // // // // // // // // //             <p className="text-gray-700">The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals.</p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <p className="font-semibold">4. What makes your legal team different?</p>
// // // // // // // // // // //             <p className="text-gray-700">We combine legal expertise with practical insight, focusing on transparency, tailored strategies, and long-term client protection.</p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div>
// // // // // // // // // // //             <p className="font-semibold">5. How can I schedule a consultation?</p>
// // // // // // // // // // //             <p className="text-gray-700">You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance.</p>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       {/* ================= FINAL CTA ================= */}
// // // // // // // // // // //       <section className="bg-black text-white py-28 px-6 text-center">
// // // // // // // // // // //         <h2 className="text-4xl font-serif mb-10">
// // // // // // // // // // //           Get Trusted Legal Guidance Today
// // // // // // // // // // //         </h2>

// // // // // // // // // // //         <div className="flex justify-center gap-6 flex-wrap">
// // // // // // // // // // //           <Link
// // // // // // // // // // //             href="/legal-consultation-in-bangalore"
// // // // // // // // // // //             className="bg-[#C9A24D] text-black px-10 py-4 font-semibold hover:scale-105 transition rounded-md shadow-lg"
// // // // // // // // // // //           >
// // // // // // // // // // //             Book Confidential Consultation
// // // // // // // // // // //           </Link>

// // // // // // // // // // //           <Link
// // // // // // // // // // //             href="/contact"
// // // // // // // // // // //             className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition rounded-md"
// // // // // // // // // // //           >
// // // // // // // // // // //             Request Call Back
// // // // // // // // // // //           </Link>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <p className="text-gray-400 text-sm mt-8">
// // // // // // // // // // //           All matters handled with complete confidentiality and legal discretion.
// // // // // // // // // // //         </p>
// // // // // // // // // // //       </section>

// // // // // // // // // // //       <Footer />
// // // // // // // // // // //     </>
// // // // // // // // // // //   );
// // // // // // // // // // // }



// // // // // // // // // // "use client";

// // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import Navbar from "../components/Navbar";
// // // // // // // // // // import Footer from "../components/Footer";

// // // // // // // // // // /* ================= SEO META ================= */

// // // // // // // // // // export const metadata = {
// // // // // // // // // //   title: "Leading Law Firm in Bangalore | S Jain & Attorneys",
// // // // // // // // // //   description:
// // // // // // // // // //     "S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters.",
// // // // // // // // // //   alternates: {
// // // // // // // // // //     canonical: "https://yourdomain.com/leading-law-firm-in-bangalore",
// // // // // // // // // //   },
// // // // // // // // // // };

// // // // // // // // // // /* ================= ANIMATION VARIANTS ================= */

// // // // // // // // // // const fadeUp = {
// // // // // // // // // //   hidden: { opacity: 0, y: 60 },
// // // // // // // // // //   visible: {
// // // // // // // // // //     opacity: 1,
// // // // // // // // // //     y: 0,
// // // // // // // // // //     transition: { duration: 0.8, ease: "easeOut" },
// // // // // // // // // //   },
// // // // // // // // // // };

// // // // // // // // // // const staggerContainer = {
// // // // // // // // // //   hidden: {},
// // // // // // // // // //   visible: {
// // // // // // // // // //     transition: {
// // // // // // // // // //       staggerChildren: 0.15,
// // // // // // // // // //     },
// // // // // // // // // //   },
// // // // // // // // // // };

// // // // // // // // // // export default function LeadingLawFirmPage() {
// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       <Navbar />

// // // // // // // // // //       {/* ================= HERO SECTION ================= */}
// // // // // // // // // //       <section className="relative bg-gradient-to-br from-black via-[#111] to-black text-[#C9A24D] py-36 px-6 overflow-hidden">
// // // // // // // // // //         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_50%)]"></div>

// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial="hidden"
// // // // // // // // // //           whileInView="visible"
// // // // // // // // // //           viewport={{ once: true }}
// // // // // // // // // //           variants={staggerContainer}
// // // // // // // // // //           className="relative max-w-6xl mx-auto text-center"
// // // // // // // // // //         >
// // // // // // // // // //           <motion.h1
// // // // // // // // // //             variants={fadeUp}
// // // // // // // // // //             className="text-4xl md:text-6xl font-serif font-semibold leading-tight"
// // // // // // // // // //           >
// // // // // // // // // //             Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // // // // // // // //           </motion.h1>

// // // // // // // // // //           <motion.p
// // // // // // // // // //             variants={fadeUp}
// // // // // // // // // //             className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed"
// // // // // // // // // //           >
// // // // // // // // // //             A leading law firm in Bangalore providing full-service legal
// // // // // // // // // //             representation across litigation, advisory, and regulatory matters.
// // // // // // // // // //           </motion.p>
// // // // // // // // // //         </motion.div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* ================= ABOUT SECTION ================= */}
// // // // // // // // // //       <section className="py-32 px-6 bg-white">
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial="hidden"
// // // // // // // // // //           whileInView="visible"
// // // // // // // // // //           viewport={{ once: true }}
// // // // // // // // // //           variants={staggerContainer}
// // // // // // // // // //           className="max-w-5xl mx-auto"
// // // // // // // // // //         >
// // // // // // // // // //           <motion.h2
// // // // // // // // // //             variants={fadeUp}
// // // // // // // // // //             className="text-4xl font-serif mb-10 text-black"
// // // // // // // // // //           >
// // // // // // // // // //             About Our Firm
// // // // // // // // // //           </motion.h2>

// // // // // // // // // //           <motion.div variants={fadeUp} className="space-y-6 text-gray-700 leading-relaxed text-lg">
// // // // // // // // // //             <p>
// // // // // // // // // //               S Jain & Attorneys is recognised as a leading law firm in Bangalore,
// // // // // // // // // //               delivering strategic and result-oriented legal representation.
// // // // // // // // // //             </p>
// // // // // // // // // //             <p>
// // // // // // // // // //               With a team of experienced attorneys and dedicated legal experts,
// // // // // // // // // //               we provide structured legal counsel and courtroom advocacy.
// // // // // // // // // //             </p>
// // // // // // // // // //             <p>
// // // // // // // // // //               Our firm advises across corporate, civil, criminal, family,
// // // // // // // // // //               regulatory, and cross-border matters.
// // // // // // // // // //             </p>
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </motion.div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* ================= WHY CHOOSE US ================= */}
// // // // // // // // // //       <section className="bg-gray-50 py-32 px-6">
// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial="hidden"
// // // // // // // // // //           whileInView="visible"
// // // // // // // // // //           viewport={{ once: true }}
// // // // // // // // // //           variants={staggerContainer}
// // // // // // // // // //           className="max-w-5xl mx-auto"
// // // // // // // // // //         >
// // // // // // // // // //           <motion.h2
// // // // // // // // // //             variants={fadeUp}
// // // // // // // // // //             className="text-4xl font-serif mb-12 text-black"
// // // // // // // // // //           >
// // // // // // // // // //             Why Choose Our Legal Team
// // // // // // // // // //           </motion.h2>

// // // // // // // // // //           <motion.ul
// // // // // // // // // //             variants={staggerContainer}
// // // // // // // // // //             className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg"
// // // // // // // // // //           >
// // // // // // // // // //             {[
// // // // // // // // // //               "Over a decade of legal practice",
// // // // // // // // // //               "Trusted group of legal experts",
// // // // // // // // // //               "Strategic, personalized solutions",
// // // // // // // // // //               "Corporate legal advisory services",
// // // // // // // // // //               "Strong courtroom advocacy",
// // // // // // // // // //               "Transparent communication",
// // // // // // // // // //             ].map((item, index) => (
// // // // // // // // // //               <motion.li
// // // // // // // // // //                 key={index}
// // // // // // // // // //                 variants={fadeUp}
// // // // // // // // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
// // // // // // // // // //               >
// // // // // // // // // //                 ✓ {item}
// // // // // // // // // //               </motion.li>
// // // // // // // // // //             ))}
// // // // // // // // // //           </motion.ul>

// // // // // // // // // //           <motion.p
// // // // // // // // // //             variants={fadeUp}
// // // // // // // // // //             className="text-[#C9A24D] font-semibold mt-12 text-lg"
// // // // // // // // // //           >
// // // // // // // // // //             Response within 24 hours guaranteed.
// // // // // // // // // //           </motion.p>

// // // // // // // // // //           <motion.div
// // // // // // // // // //             variants={fadeUp}
// // // // // // // // // //             className="flex flex-wrap gap-6 mt-10"
// // // // // // // // // //           >
// // // // // // // // // //             <Link
// // // // // // // // // //               href="/legal-consultation-in-bangalore"
// // // // // // // // // //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold hover:scale-105 transition rounded-md shadow-lg"
// // // // // // // // // //             >
// // // // // // // // // //               Book Confidential Consultation
// // // // // // // // // //             </Link>

// // // // // // // // // //             <Link
// // // // // // // // // //               href="/contact"
// // // // // // // // // //               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition rounded-md"
// // // // // // // // // //             >
// // // // // // // // // //               Request Call Back
// // // // // // // // // //             </Link>
// // // // // // // // // //           </motion.div>
// // // // // // // // // //         </motion.div>
// // // // // // // // // //       </section>

// // // // // // // // // //       {/* ================= FINAL CTA ================= */}
// // // // // // // // // //       <section className="bg-black text-white py-32 px-6 text-center relative overflow-hidden">
// // // // // // // // // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_#C9A24D,_transparent_60%)]"></div>

// // // // // // // // // //         <motion.div
// // // // // // // // // //           initial="hidden"
// // // // // // // // // //           whileInView="visible"
// // // // // // // // // //           viewport={{ once: true }}
// // // // // // // // // //           variants={staggerContainer}
// // // // // // // // // //           className="relative"
// // // // // // // // // //         >
// // // // // // // // // //           <motion.h2
// // // // // // // // // //             variants={fadeUp}
// // // // // // // // // //             className="text-4xl font-serif mb-10"
// // // // // // // // // //           >
// // // // // // // // // //             Get Trusted Legal Guidance Today
// // // // // // // // // //           </motion.h2>

// // // // // // // // // //           <motion.div
// // // // // // // // // //             variants={fadeUp}
// // // // // // // // // //             className="flex justify-center gap-6 flex-wrap"
// // // // // // // // // //           >
// // // // // // // // // //             <Link
// // // // // // // // // //               href="/legal-consultation-in-bangalore"
// // // // // // // // // //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold hover:scale-105 transition rounded-md shadow-lg"
// // // // // // // // // //             >
// // // // // // // // // //               Book Confidential Consultation
// // // // // // // // // //             </Link>

// // // // // // // // // //             <Link
// // // // // // // // // //               href="/contact"
// // // // // // // // // //               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition rounded-md"
// // // // // // // // // //             >
// // // // // // // // // //               Request Call Back
// // // // // // // // // //             </Link>
// // // // // // // // // //           </motion.div>

// // // // // // // // // //           <motion.p
// // // // // // // // // //             variants={fadeUp}
// // // // // // // // // //             className="text-gray-400 text-sm mt-8"
// // // // // // // // // //           >
// // // // // // // // // //             All matters handled with complete confidentiality and legal discretion.
// // // // // // // // // //           </motion.p>
// // // // // // // // // //         </motion.div>
// // // // // // // // // //       </section>

// // // // // // // // // //       <Footer />
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // "use client";

// // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import Navbar from "../components/Navbar";
// // // // // // // // // import Footer from "../components/Footer";

// // // // // // // // // /* ================= ANIMATION ================= */

// // // // // // // // // const fadeUp = {
// // // // // // // // //   hidden: { opacity: 0, y: 60 },
// // // // // // // // //   visible: {
// // // // // // // // //     opacity: 1,
// // // // // // // // //     y: 0,
// // // // // // // // //     transition: { duration: 0.8, ease: "easeOut" },
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // const stagger = {
// // // // // // // // //   hidden: {},
// // // // // // // // //   visible: {
// // // // // // // // //     transition: { staggerChildren: 0.15 },
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // export default function LeadingLawFirmPage() {
// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <Navbar />

// // // // // // // // //       {/* ================= HERO ================= */}
// // // // // // // // //       <section className="relative bg-gradient-to-br from-black via-[#111] to-black text-[#C9A24D] py-36 px-6">
// // // // // // // // //         <motion.div
// // // // // // // // //           initial="hidden"
// // // // // // // // //           animate="visible"
// // // // // // // // //           variants={stagger}
// // // // // // // // //           className="max-w-6xl mx-auto text-center"
// // // // // // // // //         >
// // // // // // // // //           <motion.h1
// // // // // // // // //             variants={fadeUp}
// // // // // // // // //             className="text-4xl md:text-6xl font-serif font-semibold leading-tight"
// // // // // // // // //           >
// // // // // // // // //             Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // // // // // // //           </motion.h1>

// // // // // // // // //           <motion.p
// // // // // // // // //             variants={fadeUp}
// // // // // // // // //             className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed"
// // // // // // // // //           >
// // // // // // // // //             A leading law firm in Bangalore providing full-service legal
// // // // // // // // //             representation across litigation, advisory, and regulatory matters.
// // // // // // // // //           </motion.p>
// // // // // // // // //         </motion.div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= ABOUT ================= */}
// // // // // // // // //       <section className="py-28 px-6 bg-white">
// // // // // // // // //         <motion.div
// // // // // // // // //           initial="hidden"
// // // // // // // // //           whileInView="visible"
// // // // // // // // //           viewport={{ once: true }}
// // // // // // // // //           variants={fadeUp}
// // // // // // // // //           className="max-w-5xl mx-auto"
// // // // // // // // //         >
// // // // // // // // //           <h2 className="text-4xl font-serif mb-8 text-black">
// // // // // // // // //             About Our Firm
// // // // // // // // //           </h2>

// // // // // // // // //           <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
// // // // // // // // //             <p>
// // // // // // // // //               S Jain & Attorneys is recognised as a leading law firm in Bangalore,
// // // // // // // // //               delivering strategic and result-oriented legal representation for
// // // // // // // // //               individuals, businesses, startups, multinational companies, and NRIs.
// // // // // // // // //             </p>

// // // // // // // // //             <p>
// // // // // // // // //               With a team of experienced attorneys and dedicated legal experts,
// // // // // // // // //               we provide structured legal counsel and courtroom advocacy that
// // // // // // // // //               protects your rights, business interests, and long-term objectives.
// // // // // // // // //             </p>

// // // // // // // // //             <p>
// // // // // // // // //               Our firm advises across corporate, civil, criminal, family,
// // // // // // // // //               regulatory, and cross-border matters. As trusted corporate legal
// // // // // // // // //               advisors, lawyers, and advocates, we combine legal depth with
// // // // // // // // //               practical insight to guide clients confidently through complex legal environments.
// // // // // // // // //             </p>
// // // // // // // // //           </div>
// // // // // // // // //         </motion.div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= WHY CHOOSE US ================= */}
// // // // // // // // //       <section className="bg-gray-50 py-28 px-6">
// // // // // // // // //         <div className="max-w-5xl mx-auto">
// // // // // // // // //           <h2 className="text-4xl font-serif mb-12 text-black">
// // // // // // // // //             Why Choose Our Legal Team
// // // // // // // // //           </h2>

// // // // // // // // //           <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
// // // // // // // // //             {[
// // // // // // // // //               "Over a decade of legal practice by experienced attorneys in Bangalore",
// // // // // // // // //               "A trusted group of legal experts committed to ethical advocacy",
// // // // // // // // //               "Strategic, personalized legal solutions tailored to each matter",
// // // // // // // // //               "Corporate legal advisory services for business clients",
// // // // // // // // //               "Lawyers and advocates with courtroom experience across multiple jurisdictions",
// // // // // // // // //               "Transparent communication and structured case strategy",
// // // // // // // // //             ].map((item, index) => (
// // // // // // // // //               <li
// // // // // // // // //                 key={index}
// // // // // // // // //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
// // // // // // // // //               >
// // // // // // // // //                 ✓ {item}
// // // // // // // // //               </li>
// // // // // // // // //             ))}
// // // // // // // // //           </ul>

// // // // // // // // //           <p className="text-[#C9A24D] font-semibold mt-10 text-lg">
// // // // // // // // //             Response within 24 hours guaranteed.
// // // // // // // // //           </p>

// // // // // // // // //           <div className="flex flex-wrap gap-6 mt-10">
// // // // // // // // //             <Link
// // // // // // // // //               href="/legal-consultation-in-bangalore"
// // // // // // // // //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-md shadow-lg hover:scale-105 transition"
// // // // // // // // //             >
// // // // // // // // //               Book Confidential Consultation
// // // // // // // // //             </Link>

// // // // // // // // //             <Link
// // // // // // // // //               href="/contact"
// // // // // // // // //               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition"
// // // // // // // // //             >
// // // // // // // // //               Request Call Back
// // // // // // // // //             </Link>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= FOUNDER ================= */}
// // // // // // // // //       <section className="py-28 px-6 bg-white">
// // // // // // // // //         <div className="max-w-5xl mx-auto">
// // // // // // // // //           <h2 className="text-4xl font-serif mb-8 text-black">
// // // // // // // // //             Our Founder
// // // // // // // // //           </h2>

// // // // // // // // //           <h3 className="text-2xl text-[#C9A24D] font-semibold mb-6">
// // // // // // // // //             S Jain – Principal Attorney
// // // // // // // // //           </h3>

// // // // // // // // //           <p className="text-gray-700 leading-relaxed text-lg">
// // // // // // // // //             S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive
// // // // // // // // //             legal experience in representing clients before courts, tribunals,
// // // // // // // // //             and regulatory authorities. As a respected advocate and legal strategist,
// // // // // // // // //             S Jain blends practical understanding with deep legal insight to deliver
// // // // // // // // //             structured, results-oriented counsel across litigation and advisory matters.
// // // // // // // // //             Committed to professionalism and precision, each case is handled with clarity,
// // // // // // // // //             discretion, and a client-first approach focused on achieving measurable legal outcomes.
// // // // // // // // //           </p>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= CORE VALUES ================= */}
// // // // // // // // //       <section className="bg-gray-50 py-28 px-6">
// // // // // // // // //         <div className="max-w-5xl mx-auto space-y-10">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // // // //             Our Core Values & Approach
// // // // // // // // //           </h2>

// // // // // // // // //           {[
// // // // // // // // //             ["Integrity", "We uphold honesty, discretion, and transparency in every legal engagement."],
// // // // // // // // //             ["Client-Centric Advocacy", "Clear communication and personalized legal strategy remain central to our practice."],
// // // // // // // // //             ["Commitment to Excellence", "Delivering premium legal services led by experienced attorneys."],
// // // // // // // // //             ["Strategic Legal Expertise", "Practical, business-oriented, and results-driven legal counsel."],
// // // // // // // // //             ["Our Approach", "We provide understandable, structured legal guidance at every stage — prioritizing your objectives, protecting your rights, and securing long-term outcomes."]
// // // // // // // // //           ].map(([title, desc], i) => (
// // // // // // // // //             <div key={i}>
// // // // // // // // //               <h3 className="text-[#C9A24D] font-semibold text-xl">{title}</h3>
// // // // // // // // //               <p className="text-gray-700 mt-2">{desc}</p>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= LEGAL EXPERTISE ================= */}
// // // // // // // // //       <section className="bg-white py-28 px-6">
// // // // // // // // //         <div className="max-w-5xl mx-auto space-y-8">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // // // //             Our Legal Expertise
// // // // // // // // //           </h2>

// // // // // // // // //           {[
// // // // // // // // //             ["1. Corporate & Commercial Law", "Corporate advisory, regulatory compliance, contracts, and business strategy."],
// // // // // // // // //             ["2. Civil & Property Litigation", "Civil disputes, property and real estate matters, and contractual claims."],
// // // // // // // // //             ["3. Criminal Defense & Prosecution", "Representation before sessions courts, magistrate courts, and appellate forums."],
// // // // // // // // //             ["4. Family & Divorce Law", "Divorce, matrimonial property and financial settlements, custody, and mediation."],
// // // // // // // // //             ["5. Employment & Labour Law", "Labour court representation, wrongful termination, and HR compliance advisory."],
// // // // // // // // //             ["6. Consumer Protection & Appellate Practice", "Consumer disputes, High Court matters, and complex litigation cases."],
// // // // // // // // //             ["7. Cross-Border & NRI Legal Services", "NRI property matters, international disputes, and private international law advisory."]
// // // // // // // // //           ].map(([title, desc], i) => (
// // // // // // // // //             <div key={i}>
// // // // // // // // //               <h3 className="font-semibold text-lg">{title}</h3>
// // // // // // // // //               <p className="text-gray-700">{desc}</p>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= FAQ ================= */}
// // // // // // // // //       <section className="bg-gray-50 py-28 px-6">
// // // // // // // // //         <div className="max-w-5xl mx-auto space-y-6">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // // // //             Frequently Asked Questions (FAQs)
// // // // // // // // //           </h2>

// // // // // // // // //           {[
// // // // // // // // //             ["Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
// // // // // // // // //               "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas."],
// // // // // // // // //             ["What areas of law does your firm specialize in?",
// // // // // // // // //               "We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters."],
// // // // // // // // //             ["Who leads S Jain & Attorneys?",
// // // // // // // // //               "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals."],
// // // // // // // // //             ["What makes your legal team different from other law firms in Bangalore?",
// // // // // // // // //               "We combine legal expertise with practical insight. Our focus remains on transparency, tailored legal strategies, and long-term client protection."],
// // // // // // // // //             ["How can I schedule a consultation with your firm?",
// // // // // // // // //               "You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance."]
// // // // // // // // //           ].map(([q, a], i) => (
// // // // // // // // //             <div key={i}>
// // // // // // // // //               <p className="font-semibold">{i + 1}. {q}</p>
// // // // // // // // //               <p className="text-gray-700">{a}</p>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= FINAL CTA ================= */}
// // // // // // // // //       <section className="bg-black text-white py-28 px-6 text-center">
// // // // // // // // //         <h2 className="text-4xl font-serif mb-10">
// // // // // // // // //           Get Trusted Legal Guidance Today
// // // // // // // // //         </h2>

// // // // // // // // //         <div className="flex justify-center gap-6 flex-wrap">
// // // // // // // // //           <Link
// // // // // // // // //             href="/legal-consultation-in-bangalore"
// // // // // // // // //             className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-md shadow-lg hover:scale-105 transition"
// // // // // // // // //           >
// // // // // // // // //             Book Confidential Consultation
// // // // // // // // //           </Link>

// // // // // // // // //           <Link
// // // // // // // // //             href="/contact"
// // // // // // // // //             className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition"
// // // // // // // // //           >
// // // // // // // // //             Request Call Back
// // // // // // // // //           </Link>
// // // // // // // // //         </div>

// // // // // // // // //         <p className="text-gray-400 text-sm mt-8">
// // // // // // // // //           All matters handled with complete confidentiality and legal discretion.
// // // // // // // // //         </p>
// // // // // // // // //       </section>

// // // // // // // // //       <Footer />
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // // "use client";

// // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import Navbar from "../components/Navbar";
// // // // // // // // // import Footer from "../components/Footer";
// // // // // // // // // import Head from "next/head";

// // // // // // // // // /* ================= ANIMATION ================= */

// // // // // // // // // const fadeUp = {
// // // // // // // // //   hidden: { opacity: 0, y: 50 },
// // // // // // // // //   visible: {
// // // // // // // // //     opacity: 1,
// // // // // // // // //     y: 0,
// // // // // // // // //     transition: { duration: 0.8, ease: "easeOut" },
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // const stagger = {
// // // // // // // // //   hidden: {},
// // // // // // // // //   visible: {
// // // // // // // // //     transition: { staggerChildren: 0.15 },
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // export default function LeadingLawFirmPage() {
// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <Head>
// // // // // // // // //         <title>Leading Law Firm in Bangalore | S Jain & Attorneys</title>
// // // // // // // // //         <meta
// // // // // // // // //           name="description"
// // // // // // // // //           content="S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters."
// // // // // // // // //         />
// // // // // // // // //         <link rel="canonical" href="https://yourdomain.com/leading-law-firm-in-bangalore" />
// // // // // // // // //       </Head>

// // // // // // // // //       <Navbar />

// // // // // // // // //       {/* ================= HERO ================= */}
// // // // // // // // //       <section className="relative bg-black text-white py-40 px-6 overflow-hidden">
// // // // // // // // //         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_50%)] animate-pulse"></div>

// // // // // // // // //         <motion.div
// // // // // // // // //           initial="hidden"
// // // // // // // // //           animate="visible"
// // // // // // // // //           variants={stagger}
// // // // // // // // //           className="relative max-w-6xl mx-auto text-center"
// // // // // // // // //         >
// // // // // // // // //           <motion.h1
// // // // // // // // //             variants={fadeUp}
// // // // // // // // //             className="text-4xl md:text-6xl font-serif font-semibold leading-tight text-[#C9A24D]"
// // // // // // // // //           >
// // // // // // // // //             Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // // // // // // //           </motion.h1>

// // // // // // // // //           <motion.div
// // // // // // // // //             variants={fadeUp}
// // // // // // // // //             className="w-24 h-[3px] bg-[#C9A24D] mx-auto my-8"
// // // // // // // // //           ></motion.div>

// // // // // // // // //           <motion.p
// // // // // // // // //             variants={fadeUp}
// // // // // // // // //             className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
// // // // // // // // //           >
// // // // // // // // //             A leading law firm in Bangalore providing full-service legal
// // // // // // // // //             representation across litigation, advisory, and regulatory matters.
// // // // // // // // //           </motion.p>
// // // // // // // // //         </motion.div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= ABOUT ================= */}
// // // // // // // // //       <section className="py-32 px-6 bg-white">
// // // // // // // // //         <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black mb-6">
// // // // // // // // //             About Our Firm
// // // // // // // // //           </h2>

// // // // // // // // //           <p>
// // // // // // // // //             S Jain & Attorneys is recognised as a leading law firm in Bangalore,
// // // // // // // // //             delivering strategic and result-oriented legal representation for
// // // // // // // // //             individuals, businesses, startups, multinational companies, and NRIs.
// // // // // // // // //           </p>

// // // // // // // // //           <p>
// // // // // // // // //             With a team of experienced attorneys and dedicated legal experts,
// // // // // // // // //             we provide structured legal counsel and courtroom advocacy that protects
// // // // // // // // //             your rights, business interests, and long-term objectives.
// // // // // // // // //           </p>

// // // // // // // // //           <p>
// // // // // // // // //             Our firm advises across corporate, civil, criminal, family, regulatory,
// // // // // // // // //             and cross-border matters. As trusted corporate legal advisors,
// // // // // // // // //             lawyers, and advocates, we combine legal depth with practical insight
// // // // // // // // //             to guide clients confidently through complex legal environments.
// // // // // // // // //           </p>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= WHY CHOOSE US ================= */}
// // // // // // // // //       <section className="bg-gradient-to-br from-gray-50 to-white py-32 px-6">
// // // // // // // // //         <div className="max-w-6xl mx-auto">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black mb-14 text-center">
// // // // // // // // //             Why Choose Our Legal Team
// // // // // // // // //           </h2>

// // // // // // // // //           <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // //             {[
// // // // // // // // //               "Over a decade of legal practice by experienced attorneys in Bangalore",
// // // // // // // // //               "Trusted legal experts committed to ethical advocacy",
// // // // // // // // //               "Strategic, personalized legal solutions tailored to each matter",
// // // // // // // // //               "Corporate legal advisory services for business clients",
// // // // // // // // //               "Lawyers and advocates with courtroom experience",
// // // // // // // // //               "Transparent communication and structured case strategy",
// // // // // // // // //             ].map((item, i) => (
// // // // // // // // //               <div
// // // // // // // // //                 key={i}
// // // // // // // // //                 className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition border"
// // // // // // // // //               >
// // // // // // // // //                 <p className="text-gray-800 text-lg font-medium">✓ {item}</p>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           <p className="text-center text-[#C9A24D] font-semibold mt-12 text-lg">
// // // // // // // // //             Response within 24 hours guaranteed.
// // // // // // // // //           </p>

// // // // // // // // //           <div className="flex justify-center gap-6 mt-10 flex-wrap">
// // // // // // // // //             <Link
// // // // // // // // //               href="/legal-consultation-in-bangalore"
// // // // // // // // //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-lg shadow-lg hover:scale-105 transition"
// // // // // // // // //             >
// // // // // // // // //               Book Confidential Consultation
// // // // // // // // //             </Link>

// // // // // // // // //             <Link
// // // // // // // // //               href="/contact"
// // // // // // // // //               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold rounded-lg hover:bg-[#C9A24D] hover:text-black transition"
// // // // // // // // //             >
// // // // // // // // //               Request Call Back
// // // // // // // // //             </Link>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= FOUNDER ================= */}
// // // // // // // // //       <section className="py-32 px-6 bg-white">
// // // // // // // // //         <div className="max-w-5xl mx-auto">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black mb-8">Our Founder</h2>
// // // // // // // // //           <h3 className="text-2xl font-semibold mb-6 text-[#C9A24D]">
// // // // // // // // //             S Jain – Principal Attorney
// // // // // // // // //           </h3>

// // // // // // // // //           <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // //             S Jain brings extensive legal experience representing clients
// // // // // // // // //             before courts, tribunals, and regulatory authorities.
// // // // // // // // //             As a respected advocate and legal strategist, he blends
// // // // // // // // //             practical understanding with deep legal insight to deliver
// // // // // // // // //             structured, results-oriented counsel across litigation and advisory matters.
// // // // // // // // //           </p>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= LEGAL EXPERTISE ================= */}
// // // // // // // // //       <section className="bg-black text-white py-32 px-6">
// // // // // // // // //         <div className="max-w-6xl mx-auto">
// // // // // // // // //           <h2 className="text-4xl font-serif text-[#C9A24D] mb-14 text-center">
// // // // // // // // //             Our Legal Expertise
// // // // // // // // //           </h2>

// // // // // // // // //           <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-300">
// // // // // // // // //             <div>1. Corporate & Commercial Law</div>
// // // // // // // // //             <div>2. Civil & Property Litigation</div>
// // // // // // // // //             <div>3. Criminal Defense & Prosecution</div>
// // // // // // // // //             <div>4. Family & Divorce Law</div>
// // // // // // // // //             <div>5. Employment & Labour Law</div>
// // // // // // // // //             <div>6. Consumer Protection & Appellate Practice</div>
// // // // // // // // //             <div>7. Cross-Border & NRI Legal Services</div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= FAQ ================= */}
// // // // // // // // //       <section className="py-32 px-6 bg-white">
// // // // // // // // //         <div className="max-w-5xl mx-auto space-y-8">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black mb-10">
// // // // // // // // //             Frequently Asked Questions (FAQs)
// // // // // // // // //           </h2>

// // // // // // // // //           <div>
// // // // // // // // //             <h3 className="font-semibold text-xl">
// // // // // // // // //               Why is S Jain & Attorneys considered a leading law firm in Bangalore?
// // // // // // // // //             </h3>
// // // // // // // // //             <p className="text-gray-700 mt-2">
// // // // // // // // //               The firm is recognised for its strategic legal approach,
// // // // // // // // //               experienced attorneys, and commitment to delivering personalised,
// // // // // // // // //               results-oriented legal representation.
// // // // // // // // //             </p>
// // // // // // // // //           </div>

// // // // // // // // //           <div>
// // // // // // // // //             <h3 className="font-semibold text-xl">
// // // // // // // // //               What areas of law does your firm specialize in?
// // // // // // // // //             </h3>
// // // // // // // // //             <p className="text-gray-700 mt-2">
// // // // // // // // //               Corporate law, civil litigation, criminal law, family law,
// // // // // // // // //               employment law, property disputes, regulatory compliance,
// // // // // // // // //               and cross-border matters.
// // // // // // // // //             </p>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= FINAL CTA ================= */}
// // // // // // // // //       <section className="relative bg-black text-white py-32 px-6 text-center">
// // // // // // // // //         <h2 className="text-4xl font-serif mb-10 text-[#C9A24D]">
// // // // // // // // //           Get Trusted Legal Guidance Today
// // // // // // // // //         </h2>

// // // // // // // // //         <div className="flex justify-center gap-6 flex-wrap">
// // // // // // // // //           <Link
// // // // // // // // //             href="/legal-consultation-in-bangalore"
// // // // // // // // //             className="bg-[#C9A24D] text-black px-12 py-5 font-semibold rounded-lg shadow-xl hover:scale-110 transition"
// // // // // // // // //           >
// // // // // // // // //             Book Confidential Consultation
// // // // // // // // //           </Link>

// // // // // // // // //           <Link
// // // // // // // // //             href="/contact"
// // // // // // // // //             className="border border-[#C9A24D] text-[#C9A24D] px-12 py-5 font-semibold rounded-lg hover:bg-[#C9A24D] hover:text-black transition"
// // // // // // // // //           >
// // // // // // // // //             Request Call Back
// // // // // // // // //           </Link>
// // // // // // // // //         </div>

// // // // // // // // //         <p className="text-gray-400 text-sm mt-10">
// // // // // // // // //           All matters handled with complete confidentiality and legal discretion.
// // // // // // // // //         </p>
// // // // // // // // //       </section>

// // // // // // // // //       <Footer />
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }


// // // // // // // // // "use client";

// // // // // // // // // import { motion, AnimatePresence } from "framer-motion";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import Navbar from "../components/Navbar";
// // // // // // // // // import Footer from "../components/Footer";
// // // // // // // // // import Head from "next/head";
// // // // // // // // // import { useState } from "react";


// // // // // // // // // /* ================= ANIMATION ================= */

// // // // // // // // // const fadeUp = {
// // // // // // // // //   hidden: { opacity: 0, y: 50 },
// // // // // // // // //   visible: {
// // // // // // // // //     opacity: 1,
// // // // // // // // //     y: 0,
// // // // // // // // //     transition: { duration: 0.8, ease: "easeOut" },
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // const stagger = {
// // // // // // // // //   hidden: {},
// // // // // // // // //   visible: {
// // // // // // // // //     transition: { staggerChildren: 0.15 },
// // // // // // // // //   },
// // // // // // // // // };

// // // // // // // // // export default function LeadingLawFirmPage() {
// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <Head>
// // // // // // // // //         <title>Leading Law Firm in Bangalore | S Jain & Attorneys</title>
// // // // // // // // //         <meta
// // // // // // // // //           name="description"
// // // // // // // // //           content="S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters."
// // // // // // // // //         />
// // // // // // // // //         <link
// // // // // // // // //           rel="canonical"
// // // // // // // // //           href="https://yourdomain.com/leading-law-firm-in-bangalore"
// // // // // // // // //         />
// // // // // // // // //       </Head>

// // // // // // // // //       <Navbar />

// // // // // // // // //       {/* ================= HERO ================= */}
// // // // // // // // //       <section className="relative bg-black text-white py-40 px-6 overflow-hidden">
// // // // // // // // //         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_50%)] animate-pulse"></div>

// // // // // // // // //         <motion.div
// // // // // // // // //           initial="hidden"
// // // // // // // // //           animate="visible"
// // // // // // // // //           variants={stagger}
// // // // // // // // //           className="relative max-w-6xl mx-auto text-center"
// // // // // // // // //         >
// // // // // // // // //           <motion.h1
// // // // // // // // //             variants={fadeUp}
// // // // // // // // //             className="text-4xl md:text-6xl font-serif font-semibold leading-tight text-[#C9A24D]"
// // // // // // // // //           >
// // // // // // // // //             Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // // // // // // //           </motion.h1>

// // // // // // // // //           <motion.div
// // // // // // // // //             variants={fadeUp}
// // // // // // // // //             className="w-24 h-[3px] bg-[#C9A24D] mx-auto my-8"
// // // // // // // // //           ></motion.div>

// // // // // // // // //           <motion.p
// // // // // // // // //             variants={fadeUp}
// // // // // // // // //             className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
// // // // // // // // //           >
// // // // // // // // //             A leading law firm in Bangalore providing full-service legal
// // // // // // // // //             representation across litigation, advisory, and regulatory matters.
// // // // // // // // //           </motion.p>
// // // // // // // // //         </motion.div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= ABOUT ================= */}
// // // // // // // // //       <section className="py-32 px-6 bg-white">
// // // // // // // // //         <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black mb-6">
// // // // // // // // //             About Our Firm
// // // // // // // // //           </h2>

// // // // // // // // //           <p>
// // // // // // // // //             S Jain & Attorneys is recognised as a leading law firm in Bangalore,
// // // // // // // // //             delivering strategic and result-oriented legal representation for
// // // // // // // // //             individuals, businesses, startups, multinational companies, and NRIs.
// // // // // // // // //           </p>

// // // // // // // // //           <p>
// // // // // // // // //             With a team of experienced attorneys and dedicated legal experts,
// // // // // // // // //             we provide structured legal counsel and courtroom advocacy that protects
// // // // // // // // //             your rights, business interests, and long-term objectives.
// // // // // // // // //           </p>

// // // // // // // // //           <p>
// // // // // // // // //             Our firm advises across corporate, civil, criminal, family, regulatory,
// // // // // // // // //             and cross-border matters. As trusted corporate legal advisors,
// // // // // // // // //             lawyers, and advocates, we combine legal depth with practical insight
// // // // // // // // //             to guide clients confidently through complex legal environments.
// // // // // // // // //           </p>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= WHY CHOOSE US ================= */}
// // // // // // // // //       <section className="bg-gradient-to-br from-gray-50 to-white py-32 px-6">
// // // // // // // // //         <div className="max-w-6xl mx-auto">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black mb-14 text-center">
// // // // // // // // //             Why Choose Our Legal Team
// // // // // // // // //           </h2>

// // // // // // // // //           <div className="grid md:grid-cols-2 gap-8">
// // // // // // // // //             {[
// // // // // // // // //               "Over a decade of legal practice by experienced attorneys in Bangalore",
// // // // // // // // //               "A trusted group of legal experts committed to ethical advocacy",
// // // // // // // // //               "Strategic, personalized legal solutions tailored to each matter",
// // // // // // // // //               "Corporate legal advisory services for business clients",
// // // // // // // // //               "Lawyers and advocates with courtroom experience across multiple jurisdictions",
// // // // // // // // //               "Transparent communication and structured case strategy",
// // // // // // // // //             ].map((item, i) => (
// // // // // // // // //               <div
// // // // // // // // //                 key={i}
// // // // // // // // //                 className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition border"
// // // // // // // // //               >
// // // // // // // // //                 <p className="text-gray-800 text-lg font-medium">✓ {item}</p>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>

// // // // // // // // //           <p className="text-center text-[#C9A24D] font-semibold mt-12 text-lg">
// // // // // // // // //             Response within 24 hours guaranteed.
// // // // // // // // //           </p>

// // // // // // // // //           <div className="flex justify-center gap-6 mt-10 flex-wrap">
// // // // // // // // //             <Link
// // // // // // // // //               href="/legal-consultation-in-bangalore"
// // // // // // // // //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-lg shadow-lg hover:scale-105 transition"
// // // // // // // // //             >
// // // // // // // // //               Book Confidential Consultation
// // // // // // // // //             </Link>

// // // // // // // // //             <Link
// // // // // // // // //               href="/contact"
// // // // // // // // //               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold rounded-lg hover:bg-[#C9A24D] hover:text-black transition"
// // // // // // // // //             >
// // // // // // // // //               Request Call Back
// // // // // // // // //             </Link>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= FOUNDER ================= */}
// // // // // // // // //       <section className="py-32 px-6 bg-white">
// // // // // // // // //         <div className="max-w-5xl mx-auto space-y-6">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black">Our Founder</h2>

// // // // // // // // //           <h3 className="text-2xl font-semibold text-[#C9A24D]">
// // // // // // // // //             S Jain – Principal Attorney
// // // // // // // // //           </h3>

// // // // // // // // //           <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // //             S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive
// // // // // // // // //             legal experience in representing clients before courts, tribunals,
// // // // // // // // //             and regulatory authorities.
// // // // // // // // //           </p>

// // // // // // // // //           <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // //             As a respected advocate and legal strategist, he blends practical
// // // // // // // // //             understanding with deep legal insight to deliver structured,
// // // // // // // // //             results-oriented counsel across litigation and advisory matters.
// // // // // // // // //           </p>

// // // // // // // // //           <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // // //             Committed to professionalism and precision, each case is handled with
// // // // // // // // //             clarity, discretion, and a client-first approach focused on achieving
// // // // // // // // //             measurable legal outcomes.
// // // // // // // // //           </p>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= CORE VALUES ================= */}
// // // // // // // // //       <section className="bg-gray-50 py-32 px-6">
// // // // // // // // //         <div className="max-w-5xl mx-auto space-y-8">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // // // //             Our Core Values & Approach
// // // // // // // // //           </h2>

// // // // // // // // //           <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-xl">Integrity</h3>
// // // // // // // // //               <p>We uphold honesty, discretion, and transparency in every legal engagement.</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-xl">Client-Centric Advocacy</h3>
// // // // // // // // //               <p>Clear communication and personalized legal strategy remain central to our practice.</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-xl">Commitment to Excellence</h3>
// // // // // // // // //               <p>Delivering premium legal services led by experienced attorneys.</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-xl">Strategic Legal Expertise</h3>
// // // // // // // // //               <p>Practical, business-oriented, and results-driven legal counsel.</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-xl">Our Approach</h3>
// // // // // // // // //               <p>
// // // // // // // // //                 We provide understandable, structured legal guidance at every stage —
// // // // // // // // //                 prioritizing your objectives, protecting your rights, and securing long-term outcomes.
// // // // // // // // //               </p>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= LEGAL EXPERTISE ================= */}
// // // // // // // // //       <section className="bg-black text-white py-32 px-6">
// // // // // // // // //         <div className="max-w-6xl mx-auto">
// // // // // // // // //           <h2 className="text-4xl font-serif text-[#C9A24D] mb-14 text-center">
// // // // // // // // //             Our Legal Expertise
// // // // // // // // //           </h2>

// // // // // // // // //           <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-300">
// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-white">1. Corporate & Commercial Law</h3>
// // // // // // // // //               <p>Corporate advisory, regulatory compliance, contracts, and business strategy.</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-white">2. Civil & Property Litigation</h3>
// // // // // // // // //               <p>Civil disputes, property matters, real estate litigation, and contractual claims.</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-white">3. Criminal Defense & Prosecution</h3>
// // // // // // // // //               <p>Representation before sessions courts, magistrate courts, and appellate forums.</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-white">4. Family & Divorce Law</h3>
// // // // // // // // //               <p>Divorce, custody, financial settlements, mediation, and matrimonial disputes.</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-white">5. Employment & Labour Law</h3>
// // // // // // // // //               <p>Labour court representation, wrongful termination, and HR compliance advisory.</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-white">6. Consumer Protection & Appellate Practice</h3>
// // // // // // // // //               <p>Consumer disputes, High Court matters, and complex litigation cases.</p>
// // // // // // // // //             </div>

// // // // // // // // //             <div>
// // // // // // // // //               <h3 className="font-semibold text-white">7. Cross-Border & NRI Legal Services</h3>
// // // // // // // // //               <p>NRI property matters, international disputes, and private international law advisory.</p>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= FAQ ================= */}
// // // // // // // // //       <section className="py-32 px-6 bg-white">
// // // // // // // // //         <div className="max-w-5xl mx-auto space-y-8">
// // // // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // // // //             Frequently Asked Questions (FAQs)
// // // // // // // // //           </h2>

// // // // // // // // //           {[
// // // // // // // // //             {
// // // // // // // // //               q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
// // // // // // // // //               a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //               q: "What areas of law does your firm specialize in?",
// // // // // // // // //               a: "We provide representation in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //               q: "Who leads S Jain & Attorneys?",
// // // // // // // // //               a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation and strategic representation.",
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //               q: "What makes your legal team different?",
// // // // // // // // //               a: "We combine legal expertise with practical insight, focusing on transparency, tailored legal strategies, and long-term client protection.",
// // // // // // // // //             },
// // // // // // // // //             {
// // // // // // // // //               q: "How can I schedule a consultation?",
// // // // // // // // //               a: "You can schedule a confidential consultation through our website or contact our office directly.",
// // // // // // // // //             },
// // // // // // // // //           ].map((item, i) => (
// // // // // // // // //             <div key={i}>
// // // // // // // // //               <h3 className="font-semibold text-xl">{item.q}</h3>
// // // // // // // // //               <p className="text-gray-700 mt-2">{item.a}</p>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= FINAL CTA ================= */}
// // // // // // // // //       <section className="relative bg-black text-white py-32 px-6 text-center">
// // // // // // // // //         <h2 className="text-4xl font-serif mb-10 text-[#C9A24D]">
// // // // // // // // //           Get Trusted Legal Guidance Today
// // // // // // // // //         </h2>

// // // // // // // // //         <div className="flex justify-center gap-6 flex-wrap">
// // // // // // // // //           <Link
// // // // // // // // //             href="/legal-consultation-in-bangalore"
// // // // // // // // //             className="bg-[#C9A24D] text-black px-12 py-5 font-semibold rounded-lg shadow-xl hover:scale-110 transition"
// // // // // // // // //           >
// // // // // // // // //             Book Confidential Consultation
// // // // // // // // //           </Link>

// // // // // // // // //           <Link
// // // // // // // // //             href="/contact"
// // // // // // // // //             className="border border-[#C9A24D] text-[#C9A24D] px-12 py-5 font-semibold rounded-lg hover:bg-[#C9A24D] hover:text-black transition"
// // // // // // // // //           >
// // // // // // // // //             Request Call Back
// // // // // // // // //           </Link>
// // // // // // // // //         </div>

// // // // // // // // //         <p className="text-gray-400 text-sm mt-10">
// // // // // // // // //           All matters handled with complete confidentiality and legal discretion.
// // // // // // // // //         </p>
// // // // // // // // //       </section>

// // // // // // // // //       <Footer />
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }



// // // // // // // // "use client";

// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import Link from "next/link";
// // // // // // // // import Navbar from "../components/Navbar";
// // // // // // // // import Footer from "../components/Footer";
// // // // // // // // import Head from "next/head";
// // // // // // // // import { useState } from "react";

// // // // // // // // /* ================= ANIMATION ================= */

// // // // // // // // const fadeUp = {
// // // // // // // //   hidden: { opacity: 0, y: 40 },
// // // // // // // //   visible: {
// // // // // // // //     opacity: 1,
// // // // // // // //     y: 0,
// // // // // // // //     transition: { duration: 0.8, ease: "easeOut" },
// // // // // // // //   },
// // // // // // // // };

// // // // // // // // export default function LeadingLawFirmPage() {
// // // // // // // //   const [activeFAQ, setActiveFAQ] = useState(null);

// // // // // // // //   const faqs = [
// // // // // // // //     {
// // // // // // // //       q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
// // // // // // // //       a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       q: "What areas of law does your firm specialize in?",
// // // // // // // //       a: "We provide representation in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       q: "Who leads S Jain & Attorneys?",
// // // // // // // //       a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation and strategic representation.",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       q: "What makes your legal team different?",
// // // // // // // //       a: "We combine legal expertise with practical insight, focusing on transparency, tailored legal strategies, and long-term client protection.",
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //       q: "How can I schedule a consultation?",
// // // // // // // //       a: "You can schedule a confidential consultation through our website or contact our office directly.",
// // // // // // // //     },
// // // // // // // //   ];

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <Head>
// // // // // // // //         <title>Leading Law Firm in Bangalore | S Jain & Attorneys</title>
// // // // // // // //         <meta
// // // // // // // //           name="description"
// // // // // // // //           content="S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters."
// // // // // // // //         />
// // // // // // // //       </Head>

// // // // // // // //       <Navbar />

// // // // // // // //       {/* ================= HERO ================= */}
// // // // // // // //       <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
// // // // // // // //         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_50%)]"></div>

// // // // // // // //         <motion.div
// // // // // // // //           initial="hidden"
// // // // // // // //           animate="visible"
// // // // // // // //           variants={fadeUp}
// // // // // // // //           className="relative max-w-4xl mx-auto text-center"
// // // // // // // //         >
// // // // // // // //           <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight text-[#C9A24D]">
// // // // // // // //             Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // // // // // //           </h1>

// // // // // // // //           <div className="w-24 h-[3px] bg-[#C9A24D] mx-auto my-8"></div>

// // // // // // // //           <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
// // // // // // // //             A leading law firm in Bangalore providing full-service legal
// // // // // // // //             representation across litigation, advisory, and regulatory matters.
// // // // // // // //           </p>
// // // // // // // //         </motion.div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= ABOUT ================= */}
// // // // // // // //       <section className="py-20 md:py-24 px-6 bg-white">
// // // // // // // //         <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
// // // // // // // //           <h2 className="text-4xl font-serif text-black mb-6">
// // // // // // // //             About Our Firm
// // // // // // // //           </h2>

// // // // // // // //           <p>
// // // // // // // //             S Jain & Attorneys is recognised as a leading law firm in Bangalore,
// // // // // // // //             delivering strategic and result-oriented legal representation for
// // // // // // // //             individuals, businesses, startups, multinational companies, and NRIs.
// // // // // // // //           </p>

// // // // // // // //           <p>
// // // // // // // //             With a team of experienced attorneys and dedicated legal experts,
// // // // // // // //             we provide structured legal counsel and courtroom advocacy that protects
// // // // // // // //             your rights, business interests, and long-term objectives.
// // // // // // // //           </p>

// // // // // // // //           <p>
// // // // // // // //             Our firm advises across corporate, civil, criminal, family, regulatory,
// // // // // // // //             and cross-border matters, combining legal depth with practical insight.
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= FOUNDER ================= */}
// // // // // // // //       <section className="py-20 md:py-24 px-6 bg-gray-50">
// // // // // // // //         <div className="max-w-4xl mx-auto space-y-6">
// // // // // // // //           <h2 className="text-4xl font-serif text-black mb-4 border-l-4 border-[#C9A24D] pl-4">
// // // // // // // //             Our Founder
// // // // // // // //           </h2>

// // // // // // // //           <h3 className="text-2xl font-semibold text-[#C9A24D]">
// // // // // // // //             S Jain – Principal Attorney
// // // // // // // //           </h3>

// // // // // // // //           <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // //             S Jain brings extensive legal experience in representing clients
// // // // // // // //             before courts, tribunals, and regulatory authorities.
// // // // // // // //           </p>

// // // // // // // //           <p className="text-gray-700 text-lg leading-relaxed">
// // // // // // // //             As a respected advocate and strategist, he blends practical
// // // // // // // //             understanding with deep legal insight to deliver structured,
// // // // // // // //             results-oriented counsel.
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= CORE VALUES ================= */}
// // // // // // // //       <section className="py-20 md:py-24 px-6 bg-white">
// // // // // // // //         <div className="max-w-4xl mx-auto space-y-8">
// // // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // // //             Our Core Values & Approach
// // // // // // // //           </h2>

// // // // // // // //           <div className="space-y-6 text-gray-700 text-lg">
// // // // // // // //             <div>
// // // // // // // //               <h3 className="font-semibold text-xl">Integrity</h3>
// // // // // // // //               <p>We uphold honesty, discretion, and transparency.</p>
// // // // // // // //             </div>

// // // // // // // //             <div>
// // // // // // // //               <h3 className="font-semibold text-xl">Client-Centric Advocacy</h3>
// // // // // // // //               <p>Clear communication and personalised strategy.</p>
// // // // // // // //             </div>

// // // // // // // //             <div>
// // // // // // // //               <h3 className="font-semibold text-xl">Commitment to Excellence</h3>
// // // // // // // //               <p>Delivering premium legal services with precision.</p>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= FAQ ================= */}
// // // // // // // //       <section className="py-20 md:py-24 px-6 bg-gray-50">
// // // // // // // //         <div className="max-w-4xl mx-auto space-y-8">
// // // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // // //             Frequently Asked Questions
// // // // // // // //           </h2>

// // // // // // // //           <div className="space-y-4">
// // // // // // // //             {faqs.map((item, i) => (
// // // // // // // //               <div
// // // // // // // //                 key={i}
// // // // // // // //                 className="border border-gray-200 rounded-xl overflow-hidden"
// // // // // // // //               >
// // // // // // // //                 <button
// // // // // // // //                   onClick={() =>
// // // // // // // //                     setActiveFAQ(activeFAQ === i ? null : i)
// // // // // // // //                   }
// // // // // // // //                   className="w-full text-left p-6 flex justify-between items-center bg-white hover:bg-[#C9A24D]/10 transition"
// // // // // // // //                 >
// // // // // // // //                   <span className="font-semibold text-lg">{item.q}</span>
// // // // // // // //                   <span className="text-[#C9A24D] text-2xl">
// // // // // // // //                     {activeFAQ === i ? "−" : "+"}
// // // // // // // //                   </span>
// // // // // // // //                 </button>

// // // // // // // //                 {activeFAQ === i && (
// // // // // // // //                   <div className="p-6 bg-white text-gray-700">
// // // // // // // //                     {item.a}
// // // // // // // //                   </div>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= CTA ================= */}
// // // // // // // //       <section className="py-20 md:py-24 px-6 bg-black text-center">
// // // // // // // //         <h2 className="text-4xl font-serif mb-8 text-[#C9A24D]">
// // // // // // // //           Get Trusted Legal Guidance Today
// // // // // // // //         </h2>

// // // // // // // //         <Link
// // // // // // // //           href="/legal-consultation-in-bangalore"
// // // // // // // //           className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-lg shadow-lg hover:scale-105 transition"
// // // // // // // //         >
// // // // // // // //           Book Confidential Consultation
// // // // // // // //         </Link>
// // // // // // // //       </section>

// // // // // // // //       <Footer />
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // "use client";

// // // // // // // import { motion } from "framer-motion";
// // // // // // // import Link from "next/link";
// // // // // // // import Navbar from "../components/Navbar";
// // // // // // // import Footer from "../components/Footer";
// // // // // // // import Head from "next/head";
// // // // // // // import { useState } from "react";

// // // // // // // const fadeUp = {
// // // // // // //   hidden: { opacity: 0, y: 40 },
// // // // // // //   visible: {
// // // // // // //     opacity: 1,
// // // // // // //     y: 0,
// // // // // // //     transition: { duration: 0.8, ease: "easeOut" },
// // // // // // //   },
// // // // // // // };

// // // // // // // export default function LeadingLawFirmPage() {
// // // // // // //   const [activeFAQ, setActiveFAQ] = useState(null);

// // // // // // //   const faqs = [
// // // // // // //     {
// // // // // // //       q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
// // // // // // //       a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       q: "What areas of law does your firm specialize in?",
// // // // // // //       a: "We provide representation in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       q: "Who leads S Jain & Attorneys?",
// // // // // // //       a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation and strategic representation.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       q: "What makes your legal team different?",
// // // // // // //       a: "We combine legal expertise with practical insight, focusing on transparency, tailored legal strategies, and long-term client protection.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       q: "How can I schedule a consultation?",
// // // // // // //       a: "You can schedule a confidential consultation through our website or contact our office directly.",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Head>
// // // // // // //         <title>Leading Law Firm in Bangalore | S Jain & Attorneys</title>
// // // // // // //         <meta
// // // // // // //           name="description"
// // // // // // //           content="S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation."
// // // // // // //         />
// // // // // // //       </Head>

// // // // // // //       <Navbar />

// // // // // // //       {/* ================= HERO ================= */}
// // // // // // //       <section className="relative bg-black text-white py-32 px-6 overflow-hidden">
// // // // // // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_50%)]"></div>

// // // // // // //         <motion.div
// // // // // // //           initial="hidden"
// // // // // // //           animate="visible"
// // // // // // //           variants={fadeUp}
// // // // // // //           className="relative max-w-4xl mx-auto text-center"
// // // // // // //         >
// // // // // // //           <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight text-[#C9A24D]">
// // // // // // //             Leading Law Firm in Bangalore
// // // // // // //           </h1>

// // // // // // //           <div className="w-24 h-[3px] bg-[#C9A24D] mx-auto my-8"></div>

// // // // // // //           <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
// // // // // // //             Strategic, confidential, and results-driven legal representation across
// // // // // // //             litigation, advisory, and regulatory matters.
// // // // // // //           </p>

// // // // // // //           <div className="mt-10">
// // // // // // //             <Link
// // // // // // //               href="/legal-consultation-in-bangalore"
// // // // // // //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-md shadow-lg hover:bg-[#b8963e] transition"
// // // // // // //             >
// // // // // // //               Book Confidential Consultation
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //         </motion.div>
// // // // // // //       </section>

// // // // // // //       {/* ================= ABOUT ================= */}
// // // // // // //       <section className="py-20 md:py-24 px-6 bg-white">
// // // // // // //         <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
// // // // // // //           <h2 className="text-4xl font-serif text-black border-l-4 border-[#C9A24D] pl-4">
// // // // // // //             About Our Firm
// // // // // // //           </h2>

// // // // // // //           <p>
// // // // // // //             S Jain & Attorneys is recognised as a leading law firm in Bangalore,
// // // // // // //             delivering structured and strategic legal solutions for individuals,
// // // // // // //             businesses, and multinational entities.
// // // // // // //           </p>

// // // // // // //           <p>
// // // // // // //             Our firm combines legal precision with commercial understanding to
// // // // // // //             protect client interests and achieve measurable legal outcomes.
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ================= FOUNDER ================= */}
// // // // // // //       <section className="py-20 md:py-24 px-6 bg-black text-white">
// // // // // // //         <div className="max-w-4xl mx-auto space-y-6">
// // // // // // //           <h2 className="text-4xl font-serif text-[#C9A24D]">
// // // // // // //             Our Founder
// // // // // // //           </h2>

// // // // // // //           <h3 className="text-2xl font-semibold">
// // // // // // //             S Jain – Principal Attorney
// // // // // // //           </h3>

// // // // // // //           <p className="text-gray-300 text-lg leading-relaxed">
// // // // // // //             With extensive experience before courts and tribunals, S Jain delivers
// // // // // // //             structured, precise, and strategic advocacy tailored to each case.
// // // // // // //           </p>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ================= CORE VALUES ================= */}
// // // // // // //       <section className="py-20 md:py-24 px-6 bg-white">
// // // // // // //         <div className="max-w-4xl mx-auto space-y-8">
// // // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // // //             Our Core Values & Approach
// // // // // // //           </h2>

// // // // // // //           <div className="grid md:grid-cols-2 gap-8">
// // // // // // //             {[
// // // // // // //               "Integrity & Transparency",
// // // // // // //               "Client-Centric Legal Strategy",
// // // // // // //               "Commitment to Excellence",
// // // // // // //               "Strategic Legal Expertise",
// // // // // // //             ].map((item, i) => (
// // // // // // //               <div
// // // // // // //                 key={i}
// // // // // // //                 className="border border-[#C9A24D] p-8 rounded-lg hover:bg-[#C9A24D] hover:text-black transition duration-300"
// // // // // // //               >
// // // // // // //                 <p className="text-lg font-semibold">{item}</p>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ================= FAQ ================= */}
// // // // // // //       <section className="py-20 md:py-24 px-6 bg-black text-white">
// // // // // // //         <div className="max-w-4xl mx-auto space-y-8">
// // // // // // //           <h2 className="text-4xl font-serif text-[#C9A24D]">
// // // // // // //             Frequently Asked Questions
// // // // // // //           </h2>

// // // // // // //           <div className="space-y-4">
// // // // // // //             {faqs.map((item, i) => (
// // // // // // //               <div
// // // // // // //                 key={i}
// // // // // // //                 className="border border-[#C9A24D]/40 rounded-lg overflow-hidden"
// // // // // // //               >
// // // // // // //                 <button
// // // // // // //                   onClick={() =>
// // // // // // //                     setActiveFAQ(activeFAQ === i ? null : i)
// // // // // // //                   }
// // // // // // //                   className="w-full text-left p-6 flex justify-between items-center bg-black hover:bg-[#C9A24D]/10 transition"
// // // // // // //                 >
// // // // // // //                   <span className="font-semibold text-lg">{item.q}</span>
// // // // // // //                   <span className="text-[#C9A24D] text-2xl">
// // // // // // //                     {activeFAQ === i ? "−" : "+"}
// // // // // // //                   </span>
// // // // // // //                 </button>

// // // // // // //                 {activeFAQ === i && (
// // // // // // //                   <div className="p-6 text-gray-300 border-t border-[#C9A24D]/30">
// // // // // // //                     {item.a}
// // // // // // //                   </div>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ================= FINAL CTA ================= */}
// // // // // // //       <section className="py-20 md:py-24 px-6 bg-white text-center">
// // // // // // //         <h2 className="text-4xl font-serif mb-8 text-black">
// // // // // // //           Get Trusted Legal Guidance Today
// // // // // // //         </h2>

// // // // // // //         <Link
// // // // // // //           href="/legal-consultation-in-bangalore"
// // // // // // //           className="bg-[#C9A24D] text-black px-12 py-5 font-semibold rounded-md shadow-lg hover:bg-[#b8963e] transition"
// // // // // // //         >
// // // // // // //           Book Confidential Consultation
// // // // // // //         </Link>
// // // // // // //       </section>

// // // // // // //       <Footer />
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }

// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";
// // // // // // import Link from "next/link";
// // // // // // import Navbar from "../components/Navbar";
// // // // // // import Footer from "../components/Footer";
// // // // // // import Head from "next/head";
// // // // // // import { useState } from "react";

// // // // // // const fadeUp = {
// // // // // //   hidden: { opacity: 0, y: 40 },
// // // // // //   visible: {
// // // // // //     opacity: 1,
// // // // // //     y: 0,
// // // // // //     transition: { duration: 0.8, ease: "easeOut" },
// // // // // //   },
// // // // // // };


// // // // // // export default function LeadingLawFirmPage() {
// // // // // //   const [activeFAQ, setActiveFAQ] = useState(null);

// // // // // //   const faqs = [
// // // // // //     {
// // // // // //       q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
// // // // // //       a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
// // // // // //     },
// // // // // //     {
// // // // // //       q: "What areas of law does your firm specialize in?",
// // // // // //       a: "We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
// // // // // //     },
// // // // // //     {
// // // // // //       q: "Who leads S Jain & Attorneys?",
// // // // // //       a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals.",
// // // // // //     },
// // // // // //     {
// // // // // //       q: "What makes your legal team different from other law firms in Bangalore?",
// // // // // //       a: "We combine legal expertise with practical insight. Our focus remains on transparency, tailored legal strategies, and long-term client protection.",
// // // // // //     },
// // // // // //     {
// // // // // //       q: "How can I schedule a consultation with your firm?",
// // // // // //       a: "You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance.",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Head>
// // // // // //         <title>Leading Law Firm in Bangalore | S Jain & Attorneys</title>
// // // // // //         <meta
// // // // // //           name="description"
// // // // // //           content="S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters."
// // // // // //         />
// // // // // //         <link
// // // // // //           rel="canonical"
// // // // // //           href="https://yourdomain.com/leading-law-firm-in-bangalore"
// // // // // //         />
// // // // // //       </Head>

// // // // // //       <Navbar />

// // // // // //       {/* ================= HERO ================= */}
// // // // // //       <section className="bg-black text-white py-28 px-6">
// // // // // //         <motion.div
// // // // // //           initial="hidden"
// // // // // //           animate="visible"
// // // // // //           variants={fadeUp}
// // // // // //           className="max-w-4xl mx-auto text-center"
// // // // // //         >
// // // // // //           <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[#C9A24D] leading-tight">
// // // // // //             Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // // // //           </h1>

// // // // // //           <div className="w-24 h-[3px] bg-[#C9A24D] mx-auto my-8"></div>

// // // // // //           <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
// // // // // //             A leading law firm in Bangalore providing full-service legal representation across litigation, advisory, and regulatory matters.
// // // // // //           </p>
// // // // // //         </motion.div>
// // // // // //       </section>

// // // // // //       {/* ================= ABOUT ================= */}
// // // // // //       <section className="py-20 px-6 bg-white">
// // // // // //         <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
// // // // // //           <h2 className="text-4xl font-serif text-black border-l-4 border-[#C9A24D] pl-4">
// // // // // //             About Our Firm
// // // // // //           </h2>

// // // // // //           <p>
// // // // // //             S Jain & Attorneys is recognised as a leading law firm in Bangalore, delivering strategic and result-oriented legal representation for individuals, businesses, startups, multinational companies, and NRIs.
// // // // // //           </p>

// // // // // //           <p>
// // // // // //             With a team of experienced attorneys and dedicated legal experts, we provide structured legal counsel and courtroom advocacy that protects your rights, business interests, and long-term objectives.
// // // // // //           </p>

// // // // // //           <p>
// // // // // //             Our firm advises across corporate, civil, criminal, family, regulatory, and cross-border matters. As trusted corporate legal advisors, lawyers, and advocates, we combine legal depth with practical insight to guide clients confidently through complex legal environments.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= WHY CHOOSE US ================= */}
// // // // // //       <section className="py-20 px-6 bg-gray-50">
// // // // // //         <div className="max-w-4xl mx-auto space-y-10">
// // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // //             Why Choose Our Legal Team
// // // // // //           </h2>

// // // // // //           <ul className="space-y-4 text-lg text-gray-700">
// // // // // //             <li>✓ Over a decade of legal practice by experienced attorneys in Bangalore</li>
// // // // // //             <li>✓ A trusted group of legal experts committed to ethical advocacy</li>
// // // // // //             <li>✓ Strategic, personalized legal solutions tailored to each matter</li>
// // // // // //             <li>✓ Corporate legal advisory services for business clients</li>
// // // // // //             <li>✓ Lawyers and advocates with courtroom experience across multiple jurisdictions</li>
// // // // // //             <li>✓ Transparent communication and structured case strategy</li>
// // // // // //           </ul>

// // // // // //           <p className="text-[#C9A24D] font-semibold text-lg">
// // // // // //             Response within 24 hours guaranteed.
// // // // // //           </p>

// // // // // //           <div className="flex flex-wrap gap-6">
// // // // // //             <Link
// // // // // //               href="/legal-consultation-in-bangalore"
// // // // // //               className="bg-[#C9A24D] text-black px-8 py-4 font-semibold rounded-md hover:bg-[#b8963e] transition"
// // // // // //             >
// // // // // //               Book Confidential Consultation
// // // // // //             </Link>

// // // // // //             <Link
// // // // // //               href="/contact"
// // // // // //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition"
// // // // // //             >
// // // // // //               Request Call Back
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= FOUNDER ================= */}
// // // // // //       <section className="py-20 px-6 bg-black text-white">
// // // // // //         <div className="max-w-4xl mx-auto space-y-6">
// // // // // //           <h2 className="text-4xl font-serif text-[#C9A24D]">
// // // // // //             Our Founder
// // // // // //           </h2>

// // // // // //           <h3 className="text-2xl font-semibold">
// // // // // //             S Jain – Principal Attorney
// // // // // //           </h3>

// // // // // //           <p className="text-gray-300 text-lg leading-relaxed">
// // // // // //             S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive legal experience in representing clients before courts, tribunals, and regulatory authorities.
// // // // // //           </p>

// // // // // //           <p className="text-gray-300 text-lg leading-relaxed">
// // // // // //             As a respected advocate and legal strategist, S Jain blends practical understanding with deep legal insight to deliver structured, results-oriented counsel across litigation and advisory matters.
// // // // // //           </p>

// // // // // //           <p className="text-gray-300 text-lg leading-relaxed">
// // // // // //             Committed to professionalism and precision, each case is handled with clarity, discretion, and a client-first approach focused on achieving measurable legal outcomes.
// // // // // //           </p>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= CORE VALUES ================= */}
// // // // // //       <section className="py-20 px-6 bg-white">
// // // // // //         <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-lg">
// // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // //             Our Core Values & Approach
// // // // // //           </h2>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">Integrity</h3>
// // // // // //             <p>We uphold honesty, discretion, and transparency in every legal engagement.</p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">Client-Centric Advocacy</h3>
// // // // // //             <p>Clear communication and personalized legal strategy remain central to our practice.</p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">Commitment to Excellence</h3>
// // // // // //             <p>Delivering premium legal services led by experienced attorneys.</p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">Strategic Legal Expertise</h3>
// // // // // //             <p>Practical, business-oriented, and results-driven legal counsel.</p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">Our Approach</h3>
// // // // // //             <p>
// // // // // //               We provide understandable, structured legal guidance at every stage — prioritizing your objectives, protecting your rights, and securing long-term outcomes.
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= LEGAL EXPERTISE ================= */}
// // // // // //       <section className="py-20 px-6 bg-gray-50">
// // // // // //         <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-lg">
// // // // // //           <h2 className="text-4xl font-serif text-black">
// // // // // //             Our Legal Expertise
// // // // // //           </h2>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">1. Corporate & Commercial Law</h3>
// // // // // //             <p>Corporate advisory, regulatory compliance, contracts, and business strategy.</p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">2. Civil & Property Litigation</h3>
// // // // // //             <p>Civil disputes, property and real estate matters, and contractual claims.</p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">3. Criminal Defense & Prosecution</h3>
// // // // // //             <p>Representation before sessions courts, magistrate courts, and appellate forums.</p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">4. Family & Divorce Law</h3>
// // // // // //             <p>Divorce, matrimonial property and financial settlements, custody, and mediation.</p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">5. Employment & Labour Law</h3>
// // // // // //             <p>Labour court representation, wrongful termination, and HR compliance advisory.</p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">6. Consumer Protection & Appellate Practice</h3>
// // // // // //             <p>Consumer disputes, High Court matters, and complex litigation cases.</p>
// // // // // //           </div>

// // // // // //           <div>
// // // // // //             <h3 className="font-semibold text-xl">7. Cross-Border & NRI Legal Services</h3>
// // // // // //             <p>NRI property matters, international disputes, and private international law advisory.</p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= FAQ ================= */}
// // // // // //       <section className="py-20 px-6 bg-black text-white">
// // // // // //         <div className="max-w-4xl mx-auto space-y-6">
// // // // // //           <h2 className="text-4xl font-serif text-[#C9A24D]">
// // // // // //             Frequently Asked Questions (FAQs)
// // // // // //           </h2>

// // // // // //           {faqs.map((item, i) => (
// // // // // //             <div key={i} className="border border-[#C9A24D]/40 rounded-md">
// // // // // //               <button
// // // // // //                 onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
// // // // // //                 className="w-full text-left p-5 flex justify-between items-center"
// // // // // //               >
// // // // // //                 <span>{item.q}</span>
// // // // // //                 <span className="text-[#C9A24D] text-xl">
// // // // // //                   {activeFAQ === i ? "−" : "+"}
// // // // // //                 </span>
// // // // // //               </button>

// // // // // //               {activeFAQ === i && (
// // // // // //                 <div className="p-5 text-gray-300 border-t border-[#C9A24D]/30">
// // // // // //                   {item.a}
// // // // // //                 </div>
// // // // // //               )}
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= FINAL CTA ================= */}
// // // // // //       <section className="py-20 px-6 bg-white text-center">
// // // // // //         <h2 className="text-4xl font-serif text-black mb-6">
// // // // // //           Get Trusted Legal Guidance Today
// // // // // //         </h2>

// // // // // //         <div className="flex justify-center gap-6 flex-wrap">
// // // // // //           <Link
// // // // // //             href="/legal-consultation-in-bangalore"
// // // // // //             className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-md hover:bg-[#b8963e] transition"
// // // // // //           >
// // // // // //             Book Confidential Consultation
// // // // // //           </Link>

// // // // // //           <Link
// // // // // //             href="/contact"
// // // // // //             className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition"
// // // // // //           >
// // // // // //             Request Call Back
// // // // // //           </Link>
// // // // // //         </div>

// // // // // //         <p className="text-gray-600 mt-8">
// // // // // //           All matters handled with complete confidentiality and legal discretion.
// // // // // //         </p>
// // // // // //       </section>

// // // // // //       <Footer />
// // // // // //     </>
// // // // // //   );
// // // // // // }.


// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";
// // // // // // import Link from "next/link";
// // // // // // import Navbar from "../components/Navbar";
// // // // // // import Footer from "../components/Footer";
// // // // // // import Head from "next/head";
// // // // // // import { useState } from "react";

// // // // // // const fadeUp = {
// // // // // //   hidden: { opacity: 0, y: 40 },
// // // // // //   visible: {
// // // // // //     opacity: 1,
// // // // // //     y: 0,
// // // // // //     transition: { duration: 0.8, ease: "easeOut" },
// // // // // //   },
// // // // // // };

// // // // // // const pageVariant = {
// // // // // //   hidden: { opacity: 0, y: 20 },
// // // // // //   enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// // // // // //   exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
// // // // // // };

// // // // // // export default function LeadingLawFirmPage() {
// // // // // //   const [activeFAQ, setActiveFAQ] = useState(null);

// // // // // //   const faqs = [
// // // // // //     {
// // // // // //       q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
// // // // // //       a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
// // // // // //     },
// // // // // //     {
// // // // // //       q: "What areas of law does your firm specialize in?",
// // // // // //       a: "We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
// // // // // //     },
// // // // // //     {
// // // // // //       q: "Who leads S Jain & Attorneys?",
// // // // // //       a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals.",
// // // // // //     },
// // // // // //     {
// // // // // //       q: "What makes your legal team different from other law firms in Bangalore?",
// // // // // //       a: "We combine legal expertise with practical insight. Our focus remains on transparency, tailored legal strategies, and long-term client protection.",
// // // // // //     },
// // // // // //     {
// // // // // //       q: "How can I schedule a consultation with your firm?",
// // // // // //       a: "You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance.",
// // // // // //     },
// // // // // //   ];

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Head>
// // // // // //         <title>Leading Law Firm in Bangalore | S Jain & Attorneys</title>
// // // // // //         <meta
// // // // // //           name="description"
// // // // // //           content="S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters."
// // // // // //         />
// // // // // //         <link
// // // // // //           rel="canonical"
// // // // // //           href="https://yourdomain.com/leading-law-firm-in-bangalore"
// // // // // //         />
// // // // // //       </Head>

// // // // // //       <motion.div variants={pageVariant} initial="hidden" animate="enter" exit="exit">
// // // // // //         <Navbar />

// // // // // //         {/* ================= HERO ================= */}
// // // // // //      {/* ================= HERO ================= */}
// // // // // // <section className="relative overflow-hidden bg-black text-white py-28 md:py-32 px-6">

// // // // // //   {/* Animated Golden Background Glow */}
// // // // // //   <motion.div
// // // // // //     className="absolute inset-0"
// // // // // //     animate={{
// // // // // //       background: [
// // // // // //         "radial-gradient(circle at 20% 20%, rgba(201,162,77,0.15), transparent 40%)",
// // // // // //         "radial-gradient(circle at 80% 80%, rgba(201,162,77,0.15), transparent 40%)",
// // // // // //         "radial-gradient(circle at 20% 20%, rgba(201,162,77,0.15), transparent 40%)",
// // // // // //       ],
// // // // // //     }}
// // // // // //     transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
// // // // // //   />

// // // // // //   <div className="relative max-w-4xl mx-auto text-center">

// // // // // //     {/* Animated H1 */}
// // // // // //     <motion.h1
// // // // // //       initial={{ opacity: 0, y: 60 }}
// // // // // //       animate={{ opacity: 1, y: 0 }}
// // // // // //       transition={{ duration: 1, ease: "easeOut" }}
// // // // // //       className="text-4xl md:text-6xl font-serif font-semibold text-[#C9A24D] leading-tight"
// // // // // //     >
// // // // // //       Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // // // //     </motion.h1>

// // // // // //     <motion.div
// // // // // //       initial={{ scaleX: 0 }}
// // // // // //       animate={{ scaleX: 1 }}
// // // // // //       transition={{ duration: 0.8, delay: 0.4 }}
// // // // // //       className="w-24 h-[3px] bg-[#C9A24D] mx-auto my-8 origin-left"
// // // // // //     />

// // // // // //     <motion.p
// // // // // //       initial={{ opacity: 0 }}
// // // // // //       animate={{ opacity: 1 }}
// // // // // //       transition={{ delay: 0.8, duration: 0.8 }}
// // // // // //       className="text-gray-300 text-lg md:text-xl leading-relaxed"
// // // // // //     >
// // // // // //       A leading law firm in Bangalore providing full-service legal representation across litigation, advisory, and regulatory matters.
// // // // // //     </motion.p>

// // // // // //   </div>
// // // // // // </section>

// // // // // //         {/* ================= ABOUT ================= */}
// // // // // //         <section className="py-20 px-6 bg-white">
// // // // // //           <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
// // // // // //             <h2 className="text-4xl font-serif text-black border-l-4 border-[#C9A24D] pl-4">
// // // // // //               About Our Firm
// // // // // //             </h2>

// // // // // //             <p>
// // // // // //               S Jain & Attorneys is recognised as a leading law firm in Bangalore, delivering strategic and result-oriented legal representation for individuals, businesses, startups, multinational companies, and NRIs.
// // // // // //             </p>

// // // // // //             <p>
// // // // // //               With a team of experienced attorneys and dedicated legal experts, we provide structured legal counsel and courtroom advocacy that protects your rights, business interests, and long-term objectives.
// // // // // //             </p>

// // // // // //             <p>
// // // // // //               Our firm advises across corporate, civil, criminal, family, regulatory, and cross-border matters. As trusted corporate legal advisors, lawyers, and advocates, we combine legal depth with practical insight to guide clients confidently through complex legal environments.
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </section>

// // // // // //         {/* ================= WHY CHOOSE US ================= */}
// // // // // //         <section className="py-20 px-6 bg-gray-50">
// // // // // //           <div className="max-w-4xl mx-auto space-y-10">
// // // // // //             <h2 className="text-4xl font-serif text-black">
// // // // // //               Why Choose Our Legal Team
// // // // // //             </h2>

// // // // // //             <ul className="space-y-4 text-lg text-gray-700">
// // // // // //               <li>✓ Over a decade of legal practice by experienced attorneys in Bangalore</li>
// // // // // //               <li>✓ A trusted group of legal experts committed to ethical advocacy</li>
// // // // // //               <li>✓ Strategic, personalized legal solutions tailored to each matter</li>
// // // // // //               <li>✓ Corporate legal advisory services for business clients</li>
// // // // // //               <li>✓ Lawyers and advocates with courtroom experience across multiple jurisdictions</li>
// // // // // //               <li>✓ Transparent communication and structured case strategy</li>
// // // // // //             </ul>

// // // // // //             <p className="text-[#C9A24D] font-semibold text-lg">
// // // // // //               Response within 24 hours guaranteed.
// // // // // //             </p>

// // // // // //             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
// // // // // //               <Link
// // // // // //   href="/legal-consultation-in-bangalore"
// // // // // //   className="w-full sm:w-auto text-center bg-[#C9A24D] text-black px-8 py-4 font-semibold rounded-md hover:bg-[#b8963e] transition"
// // // // // // >
// // // // // //   Book Confidential Consultation
// // // // // // </Link>

// // // // // // <Link
// // // // // //   href="/contact"
// // // // // //   className="w-full sm:w-auto text-center border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition"
// // // // // // >
// // // // // //   Request Call Back
// // // // // // </Link>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </section>

// // // // // //         {/* ================= FOUNDER ================= */}
// // // // // //         <section className="py-20 px-6 bg-black text-white">
// // // // // //           <div className="max-w-4xl mx-auto space-y-6">
// // // // // //             <h2 className="text-4xl font-serif text-[#C9A24D]">
// // // // // //               Our Founder
// // // // // //             </h2>

// // // // // //             <h3 className="text-2xl font-semibold">
// // // // // //               S Jain – Principal Attorney
// // // // // //             </h3>

// // // // // //             <p className="text-gray-300 text-lg leading-relaxed">
// // // // // //               S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive legal experience in representing clients before courts, tribunals, and regulatory authorities.
// // // // // //             </p>

// // // // // //             <p className="text-gray-300 text-lg leading-relaxed">
// // // // // //               As a respected advocate and legal strategist, S Jain blends practical understanding with deep legal insight to deliver structured, results-oriented counsel across litigation and advisory matters.
// // // // // //             </p>

// // // // // //             <p className="text-gray-300 text-lg leading-relaxed">
// // // // // //               Committed to professionalism and precision, each case is handled with clarity, discretion, and a client-first approach focused on achieving measurable legal outcomes.
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </section>

// // // // // //         {/* ================= CORE VALUES ================= */}
// // // // // //         <section className="py-20 px-6 bg-white">
// // // // // //           <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-lg">
// // // // // //             <h2 className="text-4xl font-serif text-black">
// // // // // //               Our Core Values & Approach
// // // // // //             </h2>

// // // // // //             <div>
// // // // // //               <h3 className="font-semibold text-xl">Integrity</h3>
// // // // // //               <p>We uphold honesty, discretion, and transparency in every legal engagement.</p>
// // // // // //             </div>

// // // // // //             <div>
// // // // // //               <h3 className="font-semibold text-xl">Client-Centric Advocacy</h3>
// // // // // //               <p>Clear communication and personalized legal strategy remain central to our practice.</p>
// // // // // //             </div>

// // // // // //             <div>
// // // // // //               <h3 className="font-semibold text-xl">Commitment to Excellence</h3>
// // // // // //               <p>Delivering premium legal services led by experienced attorneys.</p>
// // // // // //             </div>

// // // // // //             <div>
// // // // // //               <h3 className="font-semibold text-xl">Strategic Legal Expertise</h3>
// // // // // //               <p>Practical, business-oriented, and results-driven legal counsel.</p>
// // // // // //             </div>

// // // // // //             <div>
// // // // // //               <h3 className="font-semibold text-xl">Our Approach</h3>
// // // // // //               <p>
// // // // // //                 We provide understandable, structured legal guidance at every stage — prioritizing your objectives, protecting your rights, and securing long-term outcomes.
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </section>

// // // // // //         {/* ================= LEGAL EXPERTISE ================= */}
// // // // // //         <section className="py-20 px-6 bg-gray-50">
// // // // // //           <div className="max-w-4xl mx-auto space-y-8 text-gray-700 text-lg">
// // // // // //             <h2 className="text-4xl font-serif text-black">
// // // // // //               Our Legal Expertise
// // // // // //             </h2>

// // // // // //             <div><h3 className="font-semibold text-xl">1. Corporate & Commercial Law</h3><p>Corporate advisory, regulatory compliance, contracts, and business strategy.</p></div>
// // // // // //             <div><h3 className="font-semibold text-xl">2. Civil & Property Litigation</h3><p>Civil disputes, property and real estate matters, and contractual claims.</p></div>
// // // // // //             <div><h3 className="font-semibold text-xl">3. Criminal Defense & Prosecution</h3><p>Representation before sessions courts, magistrate courts, and appellate forums.</p></div>
// // // // // //             <div><h3 className="font-semibold text-xl">4. Family & Divorce Law</h3><p>Divorce, matrimonial property and financial settlements, custody, and mediation.</p></div>
// // // // // //             <div><h3 className="font-semibold text-xl">5. Employment & Labour Law</h3><p>Labour court representation, wrongful termination, and HR compliance advisory.</p></div>
// // // // // //             <div><h3 className="font-semibold text-xl">6. Consumer Protection & Appellate Practice</h3><p>Consumer disputes, High Court matters, and complex litigation cases.</p></div>
// // // // // //             <div><h3 className="font-semibold text-xl">7. Cross-Border & NRI Legal Services</h3><p>NRI property matters, international disputes, and private international law advisory.</p></div>
// // // // // //           </div>
// // // // // //         </section>

// // // // // //         {/* ================= FAQ ================= */}
// // // // // //         <section className="py-20 px-6 bg-black text-white">
// // // // // //           <div className="max-w-4xl mx-auto space-y-6">
// // // // // //             <h2 className="text-4xl font-serif text-[#C9A24D]">
// // // // // //               Frequently Asked Questions (FAQs)
// // // // // //             </h2>

// // // // // //             {faqs.map((item, i) => (
// // // // // //               <div key={i} className="border border-[#C9A24D]/40 rounded-md">
// // // // // //                 <button
// // // // // //                   onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
// // // // // //                   className="w-full text-left p-5 flex justify-between items-center">
// // // // // //                   <span>{item.q}</span>
// // // // // //                   <span className="text-[#C9A24D] text-xl">
// // // // // //                     {activeFAQ === i ? "−" : "+"}
// // // // // //                   </span>
// // // // // //                 </button>

// // // // // //                 {activeFAQ === i && (
// // // // // //                   <div className="p-5 text-gray-300 border-t border-[#C9A24D]/30">
// // // // // //                     {item.a}
// // // // // //                   </div>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </section>

// // // // // //         {/* ================= FINAL CTA ================= */}
// // // // // //         <section className="py-20 px-6 bg-white text-center">
// // // // // //           <h2 className="text-4xl font-serif text-black mb-6">
// // // // // //             Get Trusted Legal Guidance Today
// // // // // //           </h2>

// // // // // //           <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
// // // // // //             <Link href="/legal-consultation-in-bangalore"
// // // // // //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-md hover:bg-[#b8963e] transition">
// // // // // //               Book Confidential Consultation
// // // // // //             </Link>

// // // // // //             <Link href="/contact"
// // // // // //               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition">
// // // // // //               Request Call Back
// // // // // //             </Link>
// // // // // //           </div>

// // // // // //           <p className="text-gray-600 mt-8">
// // // // // //             All matters handled with complete confidentiality and legal discretion.
// // // // // //           </p>
// // // // // //         </section>

// // // // // //         <Footer />
// // // // // //       </motion.div>
// // // // // //     </>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import { motion } from "framer-motion";
// // // // // import Link from "next/link";
// // // // // import Navbar from "../components/Navbar";
// // // // // import Footer from "../components/Footer";
// // // // // import Head from "next/head";
// // // // // import { useState } from "react";

// // // // // const pageVariant = {
// // // // //   hidden: { opacity: 0, y: 20 },
// // // // //   enter: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// // // // //   exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
// // // // // };

// // // // // export default function LeadingLawFirmPage() {
// // // // //   const [activeFAQ, setActiveFAQ] = useState(null);

// // // // //   const faqs = [
// // // // //     {
// // // // //       q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
// // // // //       a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
// // // // //     },
// // // // //     {
// // // // //       q: "What areas of law does your firm specialize in?",
// // // // //       a: "We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
// // // // //     },
// // // // //     {
// // // // //       q: "Who leads S Jain & Attorneys?",
// // // // //       a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals.",
// // // // //     },
// // // // //     {
// // // // //       q: "What makes your legal team different from other law firms in Bangalore?",
// // // // //       a: "We combine legal expertise with practical insight. Our focus remains on transparency, tailored legal strategies, and long-term client protection.",
// // // // //     },
// // // // //     {
// // // // //       q: "How can I schedule a consultation with your firm?",
// // // // //       a: "You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance.",
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <>
// // // // //       <Head>
// // // // //         <title>Leading Law Firm in Bangalore | S Jain & Attorneys</title>
// // // // //         <meta
// // // // //           name="description"
// // // // //           content="S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters."
// // // // //         />
// // // // //         <link
// // // // //           rel="canonical"
// // // // //           href="https://yourdomain.com/leading-law-firm-in-bangalore"
// // // // //         />
// // // // //       </Head>

// // // // //       <motion.div
// // // // //         variants={pageVariant}
// // // // //         initial="hidden"
// // // // //         animate="enter"
// // // // //         exit="exit"
// // // // //       >
// // // // //         <Navbar />

// // // // //         {/* HERO */}
// // // // //         <section className="bg-black text-white py-28 px-6 text-center">
// // // // //           <h1 className="text-5xl font-serif text-[#C9A24D] mb-6">
// // // // //             Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // // //           </h1>

// // // // //           <p className="text-lg text-gray-300 max-w-3xl mx-auto">
// // // // //             A leading law firm in Bangalore providing full-service legal
// // // // //             representation across litigation, advisory, and regulatory matters.
// // // // //           </p>
// // // // //         </section>

// // // // //         {/* ABOUT */}
// // // // //         <section className="py-20 px-6 bg-white">
// // // // //           <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-lg">
// // // // //             <h2 className="text-4xl font-serif border-l-4 border-[#C9A24D] pl-4">
// // // // //               About Our Firm
// // // // //             </h2>

// // // // //             <p>
// // // // //               S Jain Attorneys is a well-established law firm in Bangalore
// // // // //               known for providing reliable legal guidance and strong
// // // // //               representation across a wide range of legal matters. Our firm
// // // // //               works closely with individuals, businesses, startups,
// // // // //               multinational companies, and Non-Resident Indians (NRIs) who
// // // // //               require professional legal support in India.
// // // // //             </p>

// // // // //             <p>
// // // // //               Our team consists of experienced lawyers, advocates, and legal
// // // // //               advisors in Bangalore who focus on delivering practical solutions
// // // // //               backed by sound legal strategy. We understand that every legal
// // // // //               matter is unique, which is why we carefully evaluate each case
// // // // //               and provide clear structured advice that protects our clients’
// // // // //               rights and long-term interests.
// // // // //             </p>

// // // // //             <p>
// // // // //               We provide legal services across several key practice areas,
// // // // //               including corporate and commercial law, civil litigation,
// // // // //               criminal defense, family and divorce matters, property disputes,
// // // // //               regulatory compliance, and cross-border legal issues.
// // // // //             </p>

// // // // //             <p>
// // // // //               As trusted corporate legal advisors and litigation lawyers in
// // // // //               Bangalore, we are committed to guiding our clients through
// // // // //               complex legal situations with professionalism, transparency,
// // // // //               and strong courtroom advocacy.
// // // // //             </p>
// // // // //           </div>
// // // // //         </section>

// // // // //         {/* WHY CHOOSE */}
// // // // //         <section className="py-20 px-6 bg-gray-50">
// // // // //           <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
// // // // //             <h2 className="text-4xl font-serif">
// // // // //               Why Choose Our Legal Team
// // // // //             </h2>

// // // // //             <p>
// // // // //               Choosing the right lawyer is essential when you face significant
// // // // //               decisions in your life. S Jain Attorneys provides reliable case
// // // // //               management solutions through practical legal experience and a
// // // // //               commitment to our clients.
// // // // //             </p>

// // // // //             <p>
// // // // //               Our lawyers and advocates practice law in Bangalore and have
// // // // //               extensive experience handling complex legal matters. We develop
// // // // //               strategic solutions and represent clients effectively both in and
// // // // //               out of court.
// // // // //             </p>

// // // // //             <p>
// // // // //               Working closely with each client allows us to focus on their
// // // // //               unique circumstances and provide tailored legal strategies that
// // // // //               comply with law and achieve desired outcomes.
// // // // //             </p>

// // // // //             <p>
// // // // //               Our firm also provides corporate legal advisory services
// // // // //               including compliance assistance, contract drafting, negotiation,
// // // // //               risk management, and dispute resolution.
// // // // //             </p>

// // // // //             <div className="flex gap-4 mt-8 flex-wrap">
// // // // //               <Link
// // // // //                 href="/legal-consultation-in-bangalore"
// // // // //                 className="bg-[#C9A24D] text-black px-8 py-4 font-semibold rounded-md hover:bg-[#b8963e]"
// // // // //               >
// // // // //                 Book Confidential Consultation
// // // // //               </Link>

// // // // //               <Link
// // // // //                 href="/contact"
// // // // //                 className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black"
// // // // //               >
// // // // //                 Request Call Back
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>
// // // // //         </section>

// // // // //         {/* FOUNDER */}
// // // // //         <section className="py-20 px-6 bg-black text-white">
// // // // //           <div className="max-w-4xl mx-auto space-y-6">
// // // // //             <h2 className="text-4xl font-serif text-[#C9A24D]">
// // // // //               Our Founder
// // // // //             </h2>

// // // // //             <h3 className="text-2xl font-semibold">
// // // // //               S Jain – Principal Attorney
// // // // //             </h3>

// // // // //             <p className="text-gray-300">
// // // // //               S Jain, the Principal Attorney of S Jain & Attorneys, brings
// // // // //               extensive legal experience in representing clients before
// // // // //               courts, tribunals, and regulatory authorities.
// // // // //             </p>

// // // // //             <p className="text-gray-300">
// // // // //               As a respected advocate and legal strategist, S Jain blends
// // // // //               practical understanding with deep legal insight to deliver
// // // // //               structured, results-oriented counsel.
// // // // //             </p>
// // // // //           </div>
// // // // //         </section>

// // // // //         {/* LEGAL EXPERTISE */}
// // // // //         <section className="py-20 px-6 bg-white">
// // // // //           <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
// // // // //             <h2 className="text-4xl font-serif">
// // // // //               Our Legal Expertise
// // // // //             </h2>

// // // // //             <p>1. Corporate & Commercial Law</p>
// // // // //             <p>2. Civil & Property Litigation</p>
// // // // //             <p>3. Criminal Defense & Prosecution</p>
// // // // //             <p>4. Family & Divorce Law</p>
// // // // //             <p>5. Employment & Labour Law</p>
// // // // //             <p>6. Consumer Protection & Appellate Practice</p>
// // // // //             <p>7. Cross-Border & NRI Legal Services</p>
// // // // //           </div>
// // // // //         </section>

// // // // //         {/* FAQ */}
// // // // //         <section className="py-20 px-6 bg-black text-white">
// // // // //           <div className="max-w-4xl mx-auto">
// // // // //             <h2 className="text-4xl font-serif text-[#C9A24D] mb-10">
// // // // //               Frequently Asked Questions
// // // // //             </h2>

// // // // //             {faqs.map((item, i) => (
// // // // //               <div key={i} className="border border-[#C9A24D]/40 mb-4">
// // // // //                 <button
// // // // //                   onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
// // // // //                   className="w-full text-left p-5 flex justify-between"
// // // // //                 >
// // // // //                   {item.q}
// // // // //                   <span>{activeFAQ === i ? "-" : "+"}</span>
// // // // //                 </button>

// // // // //                 {activeFAQ === i && (
// // // // //                   <div className="p-5 border-t border-[#C9A24D]/30 text-gray-300">
// // // // //                     {item.a}
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </section>

// // // // //         {/* FINAL CTA */}
// // // // //         <section className="py-20 px-6 text-center bg-white">
// // // // //           <h2 className="text-4xl font-serif mb-6">
// // // // //             Get trusted legal guidance from S Jain & Attorneys in Bangalore
// // // // //           </h2>

// // // // //           <div className="flex justify-center gap-6 flex-wrap">
// // // // //             <Link
// // // // //               href="/contact"
// // // // //               className="bg-[#C9A24D] text-black px-10 py-4 rounded-md font-semibold"
// // // // //             >
// // // // //               Request Call Back
// // // // //             </Link>
// // // // //           </div>

// // // // //           <p className="mt-6 text-gray-600">
// // // // //             All matters handled with complete confidentiality and legal
// // // // //             discretion.
// // // // //           </p>
// // // // //         </section>

// // // // //         <Footer />
// // // // //       </motion.div>
// // // // //     </>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import { useState } from "react";
// // // // import Link from "next/link";
// // // // import Navbar from "../components/Navbar";
// // // // import Footer from "../components/Footer";

// // // // export default function LeadingLawFirmPage() {
// // // //   const [activeFAQ, setActiveFAQ] = useState(null);

// // // //   const faqs = [
// // // //     {
// // // //       q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
// // // //       a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
// // // //     },
// // // //     {
// // // //       q: "What areas of law does your firm specialize in?",
// // // //       a: "We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
// // // //     },
// // // //     {
// // // //       q: "Who leads S Jain & Attorneys?",
// // // //       a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals.",
// // // //     },
// // // //     {
// // // //       q: "What makes your legal team different from other law firms in Bangalore?",
// // // //       a: "We combine legal expertise with practical insight, focusing on transparency, tailored legal strategies, and long-term client protection.",
// // // //     },
// // // //     {
// // // //       q: "How can I schedule a consultation?",
// // // //       a: "You can schedule a confidential consultation through our website or contact our office directly.",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       {/* HERO */}
// // // //       <section className="bg-black text-white py-28 px-6 text-center">
// // // //         <motion.h1
// // // //           initial={{ opacity: 0, y: 40 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           className="text-5xl font-bold text-[#C9A24D] mb-6"
// // // //         >
// // // //           Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // //         </motion.h1>

// // // //         <p className="max-w-3xl mx-auto text-lg text-gray-300">
// // // //           A leading law firm in Bangalore providing full-service legal
// // // //           representation across litigation, advisory and regulatory matters.
// // // //         </p>
// // // //       </section>

// // // //       {/* ABOUT FIRM */}
// // // //       <section className="py-20 px-6 bg-white">
// // // //         <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg">
// // // //           <h2 className="text-4xl font-semibold">
// // // //             About Our Firm
// // // //           </h2>

// // // //           <p>
// // // //             S Jain Attorneys is a well-established law firm in Bangalore known
// // // //             for providing reliable legal guidance and strong representation
// // // //             across a wide range of legal matters.
// // // //           </p>

// // // //           <p>
// // // //             Our firm works closely with individuals, businesses, startups,
// // // //             multinational companies, and Non-Resident Indians (NRIs) who require
// // // //             professional legal support in India.
// // // //           </p>

// // // //           <p>
// // // //             Our team consists of experienced lawyers, advocates, and legal
// // // //             advisors in Bangalore who focus on delivering practical solutions
// // // //             backed by sound legal strategy.
// // // //           </p>

// // // //           <p>
// // // //             We provide legal services across several key practice areas,
// // // //             including corporate and commercial law, civil litigation,
// // // //             criminal defence, family and divorce matters, property disputes,
// // // //             regulatory compliance, and cross-border legal issues.
// // // //           </p>

// // // //           <p>
// // // //             As trusted corporate legal advisors and litigation lawyers in
// // // //             Bangalore, we are committed to guiding our clients through complex
// // // //             legal situations with professionalism, transparency, and strong
// // // //             courtroom advocacy.
// // // //           </p>
// // // //         </div>
// // // //       </section>

// // // //       {/* WHY CHOOSE */}
// // // //       <section className="py-20 px-6 bg-gray-100">
// // // //         <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700">
// // // //           <h2 className="text-4xl font-semibold">
// // // //             Why Choose Our Legal Team
// // // //           </h2>

// // // //           <p>
// // // //             Choosing the right lawyer is essential when you face significant
// // // //             decisions. Our team provides reliable case management solutions
// // // //             through practical legal experience and a commitment to our clients.
// // // //           </p>

// // // //           <p>
// // // //             Our lawyers and advocates have extensive experience handling
// // // //             complex legal matters and developing strong legal strategies.
// // // //           </p>

// // // //           <p>
// // // //             Working closely with each client allows us to focus on their
// // // //             unique circumstances and provide tailored legal solutions.
// // // //           </p>

// // // //           <p>
// // // //             Our firm also provides corporate legal advisory services including
// // // //             compliance assistance, contract drafting, negotiation, risk
// // // //             management, and dispute resolution.
// // // //           </p>

// // // //           <div className="flex gap-4 flex-wrap pt-6">
// // // //             <Link
// // // //               href="/contact"
// // // //               className="bg-[#C9A24D] text-black px-8 py-4 rounded-md font-semibold"
// // // //             >
// // // //               Book Confidential Consultation
// // // //             </Link>

// // // //             <Link
// // // //               href="/contact"
// // // //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-md font-semibold"
// // // //             >
// // // //               Request Call Back
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* FOUNDER */}
// // // //       <section className="py-20 px-6 bg-black text-white">
// // // //         <div className="max-w-5xl mx-auto space-y-6">
// // // //           <h2 className="text-4xl text-[#C9A24D] font-semibold">
// // // //             Our Founder
// // // //           </h2>

// // // //           <h3 className="text-2xl font-semibold">
// // // //             S Jain – Principal Attorney
// // // //           </h3>

// // // //           <p className="text-gray-300">
// // // //             S Jain, the Principal Attorney of S Jain & Attorneys, brings
// // // //             extensive legal experience in representing clients before courts,
// // // //             tribunals, and regulatory authorities.
// // // //           </p>

// // // //           <p className="text-gray-300">
// // // //             As a respected advocate and legal strategist, S Jain blends
// // // //             practical understanding with deep legal insight to deliver
// // // //             structured legal counsel.
// // // //           </p>
// // // //         </div>
// // // //       </section>

// // // //       {/* LEGAL EXPERTISE */}
// // // //       <section className="py-20 px-6 bg-white">
// // // //         <div className="max-w-5xl mx-auto">
// // // //           <h2 className="text-4xl font-semibold mb-8">
// // // //             Our Legal Expertise
// // // //           </h2>

// // // //           <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-700">
// // // //             <li>Corporate & Commercial Law</li>
// // // //             <li>Civil & Property Litigation</li>
// // // //             <li>Criminal Defence</li>
// // // //             <li>Family & Divorce Law</li>
// // // //             <li>Employment & Labour Law</li>
// // // //             <li>Consumer Protection</li>
// // // //             <li>NRI Legal Services</li>
// // // //           </ul>
// // // //         </div>
// // // //       </section>

// // // //       {/* FAQ */}
// // // //       <section className="py-20 px-6 bg-gray-100">
// // // //         <div className="max-w-4xl mx-auto">
// // // //           <h2 className="text-4xl font-semibold mb-10">
// // // //             Frequently Asked Questions
// // // //           </h2>

// // // //           {faqs.map((faq, index) => (
// // // //             <div
// // // //               key={index}
// // // //               className="border-b py-4 cursor-pointer"
// // // //               onClick={() =>
// // // //                 setActiveFAQ(activeFAQ === index ? null : index)
// // // //               }
// // // //             >
// // // //               <h3 className="text-xl font-medium flex justify-between">
// // // //                 {faq.q}
// // // //                 <span>{activeFAQ === index ? "-" : "+"}</span>
// // // //               </h3>

// // // //               {activeFAQ === index && (
// // // //                 <p className="mt-3 text-gray-600">{faq.a}</p>
// // // //               )}
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //       {/* FINAL CTA */}
// // // //       <section className="py-20 text-center px-6 bg-black text-white">
// // // //         <h2 className="text-4xl mb-6">
// // // //           Get Trusted Legal Guidance
// // // //         </h2>

// // // //         <Link
// // // //           href="/contact"
// // // //           className="bg-[#C9A24D] text-black px-10 py-4 rounded-md font-semibold"
// // // //         >
// // // //           Request Call Back
// // // //         </Link>

// // // //         <p className="mt-6 text-gray-400">
// // // //           All matters handled with complete confidentiality.
// // // //         </p>
// // // //       </section>

// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }



// // // "use client";

// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { useState } from "react";
// // // import Link from "next/link";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";

// // // // ─── DATA ────────────────────────────────────────────────────────────────────

// // // const practiceAreas = [
// // //   {
// // //     number: "01",
// // //     title: "Corporate & Commercial Law",
// // //     description:
// // //       "Corporate advisory, regulatory compliance, contracts, and business strategy.",
// // //   },
// // //   {
// // //     number: "02",
// // //     title: "Civil & Property Litigation",
// // //     description:
// // //       "Civil disputes, property and real estate matters, and contractual claims.",
// // //   },
// // //   {
// // //     number: "03",
// // //     title: "Criminal Defense & Prosecution",
// // //     description:
// // //       "Representation before sessions courts, magistrate courts, and appellate forums.",
// // //   },
// // //   {
// // //     number: "04",
// // //     title: "Family & Divorce Law",
// // //     description:
// // //       "Divorce, matrimonial property and financial settlements, custody, and mediation.",
// // //   },
// // //   {
// // //     number: "05",
// // //     title: "Employment & Labour Law",
// // //     description:
// // //       "Labour court representation, wrongful termination, and HR compliance advisory.",
// // //   },
// // //   {
// // //     number: "06",
// // //     title: "Consumer Protection & Appellate Practice",
// // //     description:
// // //       "Consumer disputes, High Court matters, and complex litigation cases.",
// // //   },
// // //   {
// // //     number: "07",
// // //     title: "Cross-Border & NRI Legal Services",
// // //     description:
// // //       "NRI property matters, international disputes, and private international law advisory.",
// // //   },
// // // ];

// // // const coreValues = [
// // //   {
// // //     title: "Integrity",
// // //     description:
// // //       "We uphold honesty, discretion, and transparency in every legal engagement.",
// // //   },
// // //   {
// // //     title: "Client-Centric Advocacy",
// // //     description:
// // //       "Clear communication and personalized legal strategy remain central to our practice.",
// // //   },
// // //   {
// // //     title: "Commitment to Excellence",
// // //     description:
// // //       "Delivering premium legal services led by experienced attorneys.",
// // //   },
// // //   {
// // //     title: "Strategic Legal Expertise",
// // //     description:
// // //       "Practical, business-oriented, and results-driven legal counsel.",
// // //   },
// // // ];

// // // const faqs = [
// // //   {
// // //     q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
// // //     a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
// // //   },
// // //   {
// // //     q: "What areas of law does your firm specialize in?",
// // //     a: "We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
// // //   },
// // //   {
// // //     q: "Who leads S Jain & Attorneys?",
// // //     a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals.",
// // //   },
// // //   {
// // //     q: "What makes your legal team different from other law firms in Bangalore?",
// // //     a: "We combine legal expertise with practical insight. Our focus remains on transparency, tailored legal strategies, and long-term client protection.",
// // //   },
// // //   {
// // //     q: "How can I schedule a consultation with your firm?",
// // //     a: "You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance.",
// // //   },
// // // ];

// // // // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 32 },
// // //   show: (i = 0) => ({
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // // ─── PAGE COMPONENT ───────────────────────────────────────────────────────────

// // // export default function LeadingLawFirmPage() {
// // //   const [activeFAQ, setActiveFAQ] = useState(null);

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       {/* ── HERO ── */}
// // //       <section className="relative bg-black text-white overflow-hidden">
// // //         {/* decorative gold rule */}
// // //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // //         <div className="max-w-6xl mx-auto px-6 py-32 md:py-44">
// // //           <motion.p
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             animate="show"
// // //             custom={0}
// // //             className="text-[#C9A24D] text-sm tracking-[0.25em] uppercase mb-6 font-medium"
// // //           >
// // //             S Jain &amp; Attorneys · Bangalore, India
// // //           </motion.p>

// // //           <motion.h1
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             animate="show"
// // //             custom={1}
// // //             className="text-4xl md:text-6xl font-bold leading-tight text-white mb-8 max-w-4xl"
// // //           >
// // //             Leading Law Firm in Bangalore –{" "}
// // //             <span className="text-[#C9A24D]">About S Jain &amp; Attorneys</span>
// // //           </motion.h1>

// // //           <motion.p
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             animate="show"
// // //             custom={2}
// // //             className="text-gray-300 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed"
// // //           >
// // //             A leading law firm in Bangalore providing full-service legal
// // //             representation across litigation, advisory, and regulatory matters.
// // //           </motion.p>

// // //           <motion.div
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             animate="show"
// // //             custom={3}
// // //             className="flex flex-wrap gap-4"
// // //           >
// // //             <Link
// // //               href="/contact"
// // //               className="bg-[#C9A24D] hover:bg-[#b8913d] text-black px-8 py-4 rounded font-semibold transition-colors duration-200 text-sm tracking-wide"
// // //             >
// // //               Book Confidential Consultation
// // //             </Link>
// // //             <Link
// // //               href="/contact"
// // //               className="border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-8 py-4 rounded font-semibold transition-colors duration-200 text-sm tracking-wide"
// // //             >
// // //               Request Call Back
// // //             </Link>
// // //           </motion.div>
// // //         </div>

// // //         {/* bottom fade */}
// // //         <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
// // //       </section>

// // //       {/* ── ABOUT OUR FIRM ── */}
// // //       <section className="py-24 px-6 bg-white">
// // //         <div className="max-w-5xl mx-auto">
// // //           <motion.h2
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             whileInView="show"
// // //             viewport={{ once: true }}
// // //             className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 border-l-4 border-[#C9A24D] pl-5"
// // //           >
// // //             About Our Firm
// // //           </motion.h2>

// // //           <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
// // //             {[
// // //               "S Jain Attorneys is a well-established law firm in Bangalore known for providing reliable legal guidance and strong representation across a wide range of legal matters. Our firm works closely with individuals, businesses, startups, multinational companies, and Non-Resident Indians (NRIs) who require professional legal support in India.",
// // //               "Our team consists of experienced lawyers, advocates, and legal advisors in Bangalore who focus on delivering practical solutions backed by sound legal strategy. We understand that every legal matter is unique, which is why we take the time to carefully evaluate each case and provide clear, structured advice that protects our clients' rights and long-term interests.",
// // //               "We provide legal services across several key practice areas, including corporate and commercial law, civil litigation, criminal defense, family and divorce matters, property disputes, regulatory compliance, and cross-border legal issues. Our approach combines in-depth legal knowledge with a practical understanding of business and personal legal challenges.",
// // //               "As trusted corporate legal advisors and litigation lawyers in Bangalore, we are committed to guiding our clients through complex legal situations with professionalism, transparency, and strong courtroom advocacy. Whether it involves resolving disputes, structuring business transactions, or handling sensitive family matters, our goal is always to deliver dependable legal support and effective results.",
// // //             ].map((para, i) => (
// // //               <motion.p
// // //                 key={i}
// // //                 variants={fadeUp}
// // //                 initial="hidden"
// // //                 whileInView="show"
// // //                 viewport={{ once: true }}
// // //                 custom={i * 0.5}
// // //               >
// // //                 {para}
// // //               </motion.p>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── WHY CHOOSE US ── */}
// // //       <section className="py-24 px-6 bg-[#f8f6f1]">
// // //         <div className="max-w-5xl mx-auto">
// // //           <motion.h2
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             whileInView="show"
// // //             viewport={{ once: true }}
// // //             className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 border-l-4 border-[#C9A24D] pl-5"
// // //           >
// // //             Why Choose Our Legal Team
// // //           </motion.h2>

// // //           <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
// // //             {[
// // //               "Choosing the right lawyer is essential when you face significant decisions in your life. S Jain Attorneys provides reliable case management solutions through the application of practical legal experience and a commitment to our clients.",
// // //               "Our lawyers and advocates practice law in Bangalore and have extensive ways of understanding the challenges presented by today's complex legal issues. We have experience in several different areas of law — and many of our attorneys have practised law for more than a decade — developing creative strategies, planning for success, and representing clients effectively both in and out of court.",
// // //               "Working closely with each of our clients allows us to focus on each client's unique circumstances and goals so that we can provide individualised legal solutions that not only comply with laws but also achieve desired outcomes.",
// // //               "We also provide corporations with corporate legal advisory services such as compliance assistance, contract drafting and negotiation, and the management of risk, compliance, and dispute resolution by blending our expertise in law with a business-oriented approach to help clients operate confidently within the confines of available legal options.",
// // //               "Our lawyers have extensive courtroom experience across multiple jurisdictions, enabling us to represent clients effectively in litigation, negotiations, and complex legal proceedings.",
// // //               "At the core of our practice is a commitment to clear communication, transparency, and structured case management. We ensure that our clients remain informed at every stage of their matter, while our team works diligently to achieve the best possible outcome.",
// // //               "To maintain strong client support, our firm also ensures prompt communication and timely responses, typically within 24 hours, so that your legal concerns are addressed without unnecessary delay.",
// // //             ].map((para, i) => (
// // //               <motion.p
// // //                 key={i}
// // //                 variants={fadeUp}
// // //                 initial="hidden"
// // //                 whileInView="show"
// // //                 viewport={{ once: true }}
// // //                 custom={i * 0.4}
// // //               >
// // //                 {para}
// // //               </motion.p>
// // //             ))}
// // //           </div>

// // //           <motion.div
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             whileInView="show"
// // //             viewport={{ once: true }}
// // //             custom={4}
// // //             className="flex flex-wrap gap-4 mt-10"
// // //           >
// // //             <Link
// // //               href="/contact"
// // //               className="bg-[#C9A24D] hover:bg-[#b8913d] text-black px-8 py-4 rounded font-semibold transition-colors duration-200 text-sm tracking-wide"
// // //             >
// // //               Book Confidential Consultation
// // //             </Link>
// // //             <Link
// // //               href="/contact"
// // //               className="border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-8 py-4 rounded font-semibold transition-colors duration-200 text-sm tracking-wide"
// // //             >
// // //               Request Call Back
// // //             </Link>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ── FOUNDER ── */}
// // //       <section className="py-24 px-6 bg-black text-white">
// // //         <div className="max-w-5xl mx-auto">
// // //           <motion.h2
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             whileInView="show"
// // //             viewport={{ once: true }}
// // //             className="text-3xl md:text-4xl font-bold text-[#C9A24D] mb-4"
// // //           >
// // //             Our Founder
// // //           </motion.h2>

// // //           <motion.h3
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             whileInView="show"
// // //             viewport={{ once: true }}
// // //             custom={1}
// // //             className="text-2xl font-semibold text-white mb-8"
// // //           >
// // //             S Jain – Principal Attorney
// // //           </motion.h3>

// // //           <div className="space-y-5 text-gray-300 text-lg leading-relaxed max-w-3xl">
// // //             {[
// // //               "S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive legal experience in representing clients before courts, tribunals, and regulatory authorities.",
// // //               "As a respected advocate and legal strategist, S Jain blends practical understanding with deep legal insight to deliver structured, results-oriented counsel across litigation and advisory matters.",
// // //               "Committed to professionalism and precision, each case is handled with clarity, discretion, and a client-first approach focused on achieving measurable legal outcomes.",
// // //             ].map((para, i) => (
// // //               <motion.p
// // //                 key={i}
// // //                 variants={fadeUp}
// // //                 initial="hidden"
// // //                 whileInView="show"
// // //                 viewport={{ once: true }}
// // //                 custom={i + 2}
// // //               >
// // //                 {para}
// // //               </motion.p>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── CORE VALUES ── */}
// // //       <section className="py-24 px-6 bg-white">
// // //         <div className="max-w-5xl mx-auto">
// // //           <motion.h2
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             whileInView="show"
// // //             viewport={{ once: true }}
// // //             className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-l-4 border-[#C9A24D] pl-5"
// // //           >
// // //             Our Core Values &amp; Approach
// // //           </motion.h2>

// // //           <motion.p
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             whileInView="show"
// // //             viewport={{ once: true }}
// // //             custom={1}
// // //             className="text-gray-500 text-lg mb-12 pl-5"
// // //           >
// // //             We provide understandable, structured legal guidance at every stage — prioritizing your objectives, protecting your rights, and securing long-term outcomes.
// // //           </motion.p>

// // //           <div className="grid md:grid-cols-2 gap-8">
// // //             {coreValues.map((val, i) => (
// // //               <motion.div
// // //                 key={val.title}
// // //                 variants={fadeUp}
// // //                 initial="hidden"
// // //                 whileInView="show"
// // //                 viewport={{ once: true }}
// // //                 custom={i * 0.5}
// // //                 className="border border-gray-100 rounded-lg p-8 hover:border-[#C9A24D] hover:shadow-md transition-all duration-300"
// // //               >
// // //                 <h3 className="text-xl font-bold text-gray-900 mb-3">
// // //                   {val.title}
// // //                 </h3>
// // //                 <p className="text-gray-500 leading-relaxed">{val.description}</p>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── LEGAL EXPERTISE ── */}
// // //       <section className="py-24 px-6 bg-[#f8f6f1]">
// // //         <div className="max-w-5xl mx-auto">
// // //           <motion.h2
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             whileInView="show"
// // //             viewport={{ once: true }}
// // //             className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 border-l-4 border-[#C9A24D] pl-5"
// // //           >
// // //             Our Legal Expertise
// // //           </motion.h2>

// // //           <div className="grid md:grid-cols-2 gap-6">
// // //             {practiceAreas.map((area, i) => (
// // //               <motion.div
// // //                 key={area.number}
// // //                 variants={fadeUp}
// // //                 initial="hidden"
// // //                 whileInView="show"
// // //                 viewport={{ once: true }}
// // //                 custom={i * 0.3}
// // //                 className="flex gap-5 items-start bg-white rounded-lg p-6 shadow-sm hover:shadow-md hover:border-l-4 hover:border-[#C9A24D] transition-all duration-300 border-l-4 border-transparent"
// // //               >
// // //                 <span className="text-[#C9A24D] font-bold text-xl shrink-0 mt-0.5">
// // //                   {area.number}
// // //                 </span>
// // //                 <div>
// // //                   <h3 className="text-lg font-bold text-gray-900 mb-1">
// // //                     {area.title}
// // //                   </h3>
// // //                   <p className="text-gray-500 text-sm leading-relaxed">
// // //                     {area.description}
// // //                   </p>
// // //                 </div>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── FAQ ── */}
// // //       <section className="py-24 px-6 bg-white">
// // //         <div className="max-w-4xl mx-auto">
// // //           <motion.h2
// // //             variants={fadeUp}
// // //             initial="hidden"
// // //             whileInView="show"
// // //             viewport={{ once: true }}
// // //             className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 border-l-4 border-[#C9A24D] pl-5"
// // //           >
// // //             Frequently Asked Questions
// // //           </motion.h2>

// // //           <div className="divide-y divide-gray-100">
// // //             {faqs.map((faq, index) => (
// // //               <motion.div
// // //                 key={index}
// // //                 variants={fadeUp}
// // //                 initial="hidden"
// // //                 whileInView="show"
// // //                 viewport={{ once: true }}
// // //                 custom={index * 0.2}
// // //               >
// // //                 <button
// // //                   className="w-full text-left py-6 flex justify-between items-start gap-4 group"
// // //                   onClick={() =>
// // //                     setActiveFAQ(activeFAQ === index ? null : index)
// // //                   }
// // //                   aria-expanded={activeFAQ === index}
// // //                 >
// // //                   <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#C9A24D] transition-colors duration-200">
// // //                     {faq.q}
// // //                   </h3>
// // //                   <span className="text-[#C9A24D] text-2xl font-light shrink-0 leading-none mt-0.5">
// // //                     {activeFAQ === index ? "−" : "+"}
// // //                   </span>
// // //                 </button>

// // //                 <AnimatePresence>
// // //                   {activeFAQ === index && (
// // //                     <motion.div
// // //                       initial={{ height: 0, opacity: 0 }}
// // //                       animate={{ height: "auto", opacity: 1 }}
// // //                       exit={{ height: 0, opacity: 0 }}
// // //                       transition={{ duration: 0.3, ease: "easeInOut" }}
// // //                       className="overflow-hidden"
// // //                     >
// // //                       <p className="pb-6 text-gray-500 text-base leading-relaxed">
// // //                         {faq.a}
// // //                       </p>
// // //                     </motion.div>
// // //                   )}
// // //                 </AnimatePresence>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ── FINAL CTA ── */}
// // //       <section className="py-24 px-6 bg-black text-white text-center relative overflow-hidden">
// // //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // //         <motion.h2
// // //           variants={fadeUp}
// // //           initial="hidden"
// // //           whileInView="show"
// // //           viewport={{ once: true }}
// // //           className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl mx-auto leading-tight"
// // //         >
// // //           Get Trusted Legal Guidance from S Jain &amp; Attorneys in Bangalore
// // //         </motion.h2>

// // //         <motion.p
// // //           variants={fadeUp}
// // //           initial="hidden"
// // //           whileInView="show"
// // //           viewport={{ once: true }}
// // //           custom={1}
// // //           className="text-gray-400 text-lg mb-10"
// // //         >
// // //           Protecting your rights with confidence and clarity.
// // //         </motion.p>

// // //         <motion.div
// // //           variants={fadeUp}
// // //           initial="hidden"
// // //           whileInView="show"
// // //           viewport={{ once: true }}
// // //           custom={2}
// // //         >
// // //           <Link
// // //             href="/contact"
// // //             className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 rounded font-semibold transition-colors duration-200 tracking-wide text-sm"
// // //           >
// // //             Request Call Back
// // //           </Link>
// // //         </motion.div>

// // //         <motion.p
// // //           variants={fadeUp}
// // //           initial="hidden"
// // //           whileInView="show"
// // //           viewport={{ once: true }}
// // //           custom={3}
// // //           className="mt-8 text-gray-500 text-sm"
// // //         >
// // //           All matters handled with complete confidentiality and legal discretion.
// // //         </motion.p>
// // //       </section>

// // //       <Footer />
// // //     </>
// // //   );
// // // }


// // "use client";

// // import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// // import { useState, useRef } from "react";
// // import Link from "next/link";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // // ─── DATA ─────────────────────────────────────────────────────────────────────

// // const practiceAreas = [
// //   { number: "01", title: "Corporate & Commercial Law",               description: "Corporate advisory, regulatory compliance, contracts, and business strategy." },
// //   { number: "02", title: "Civil & Property Litigation",              description: "Civil disputes, property and real estate matters, and contractual claims." },
// //   { number: "03", title: "Criminal Defense & Prosecution",           description: "Representation before sessions courts, magistrate courts, and appellate forums." },
// //   { number: "04", title: "Family & Divorce Law",                     description: "Divorce, matrimonial property and financial settlements, custody, and mediation." },
// //   { number: "05", title: "Employment & Labour Law",                  description: "Labour court representation, wrongful termination, and HR compliance advisory." },
// //   { number: "06", title: "Consumer Protection & Appellate Practice", description: "Consumer disputes, High Court matters, and complex litigation cases." },
// //   { number: "07", title: "Cross-Border & NRI Legal Services",        description: "NRI property matters, international disputes, and private international law advisory." },
// // ];

// // const coreValues = [
// //   { icon: "⚖",  title: "Integrity",                description: "We uphold honesty, discretion, and transparency in every legal engagement." },
// //   { icon: "🤝", title: "Client-Centric Advocacy",   description: "Clear communication and personalized legal strategy remain central to our practice." },
// //   { icon: "★",  title: "Commitment to Excellence",  description: "Delivering premium legal services led by experienced attorneys." },
// //   { icon: "🎯", title: "Strategic Legal Expertise",  description: "Practical, business-oriented, and results-driven legal counsel." },
// // ];

// // const faqs = [
// //   { q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",      a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas." },
// //   { q: "What areas of law does your firm specialize in?",                             a: "We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters." },
// //   { q: "Who leads S Jain & Attorneys?",                                              a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals." },
// //   { q: "What makes your legal team different from other law firms in Bangalore?",     a: "We combine legal expertise with practical insight. Our focus remains on transparency, tailored legal strategies, and long-term client protection." },
// //   { q: "How can I schedule a consultation with your firm?",                           a: "You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance." },
// // ];

// // // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   show: (i = 0) => ({
// //     opacity: 1, y: 0,
// //     transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
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

// // const staggerContainer = {
// //   hidden: {},
// //   show: { transition: { staggerChildren: 0.12 } },
// // };

// // // ─── REUSABLE SECTION HEADING ─────────────────────────────────────────────────

// // function SectionHeading({ children, light = false }) {
// //   return (
// //     <motion.div
// //       variants={fadeLeft}
// //       initial="hidden"
// //       whileInView="show"
// //       viewport={{ once: true }}
// //       className="mb-12"
// //     >
// //       <motion.span
// //         initial={{ width: 0 }}
// //         whileInView={{ width: 56 }}
// //         viewport={{ once: true }}
// //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
// //         className="block h-[3px] bg-[#C9A24D] mb-5"
// //       />
// //       <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
// //         {children}
// //       </h2>
// //     </motion.div>
// //   );
// // }

// // // ─── PAGE ─────────────────────────────────────────────────────────────────────

// // export default function LeadingLawFirmPage() {
// //   const [activeFAQ, setActiveFAQ] = useState(null);
// //   const heroRef = useRef(null);
// //   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
// //   const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
// //   const heroOpa = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

// //   return (
// //     <>
// //       <Navbar />

// //       {/* ═══════════════════════════════ HERO ════════════════════════════════ */}
// //       <section
// //         ref={heroRef}
// //         className="relative bg-black text-white overflow-hidden min-h-[92vh] flex items-center"
// //       >
// //         {/* top gold border */}
// //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// //         {/* animated corner brackets */}
// //         {[
// //           "top-8 left-8 border-t-2 border-l-2",
// //           "top-8 right-8 border-t-2 border-r-2",
// //           "bottom-8 left-8 border-b-2 border-l-2",
// //           "bottom-8 right-8 border-b-2 border-r-2",
// //         ].map((cls, i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ opacity: 0, scale: 0.7 }}
// //             animate={{ opacity: 0.35, scale: 1 }}
// //             transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
// //             className={`absolute w-12 h-12 border-[#C9A24D] ${cls}`}
// //           />
// //         ))}

// //         {/* subtle gold grid overlay */}
// //         <div
// //           className="absolute inset-0 opacity-[0.04]"
// //           style={{
// //             backgroundImage:
// //               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
// //               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
// //           }}
// //         />

// //         <motion.div
// //           style={{ y: heroY, opacity: heroOpa }}
// //           className="relative max-w-6xl mx-auto px-6 py-32 md:py-44 w-full"
// //         >
// //           <motion.p
// //             variants={fadeUp} initial="hidden" animate="show" custom={0}
// //             className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center gap-3"
// //           >
// //             <span className="inline-block w-8 h-px bg-[#C9A24D]" />
// //             S Jain &amp; Attorneys · Bangalore, India
// //           </motion.p>

// //           <motion.h1
// //             variants={fadeUp} initial="hidden" animate="show" custom={1}
// //             className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white mb-8 max-w-5xl"
// //           >
// //             Leading Law Firm<br />
// //             <span className="text-[#C9A24D]">in Bangalore</span>
// //           </motion.h1>

// //           <motion.p
// //             variants={fadeUp} initial="hidden" animate="show" custom={2}
// //             className="text-gray-400 text-lg md:text-xl max-w-2xl mb-14 leading-relaxed"
// //           >
// //             Full-service legal representation across litigation, advisory, and regulatory
// //             matters — guided by precision, integrity, and results.
// //           </motion.p>

// //           <motion.div
// //             variants={fadeUp} initial="hidden" animate="show" custom={3}
// //             className="flex flex-wrap gap-4"
// //           >
// //             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// //               <Link href="/contact"
// //                 className="relative inline-flex items-center bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide overflow-hidden group"
// //               >
// //                 <span className="relative z-10">Book Confidential Consultation</span>
// //                 <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
// //               </Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// //               <Link href="/contact"
// //                 className="inline-flex items-center border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-8 py-4 font-semibold text-sm tracking-wide transition-colors duration-300"
// //               >
// //                 Request Call Back
// //               </Link>
// //             </motion.div>
// //           </motion.div>

// //           {/* scroll indicator */}
// //           <motion.div
// //             initial={{ opacity: 0 }} animate={{ opacity: 1 }}
// //             transition={{ delay: 1.5, duration: 1 }}
// //             className="absolute bottom-10 left-6 flex flex-col items-center gap-2"
// //           >
// //             <motion.div
// //               animate={{ y: [0, 8, 0] }}
// //               transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
// //               className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
// //             />
// //           </motion.div>
// //         </motion.div>

// //         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
// //       </section>

// //       {/* ══════════════════════════════ ABOUT ════════════════════════════════ */}
// //       <section className="py-28 px-6 bg-white relative overflow-hidden">
// //         {/* animated right-side vertical gold rule */}
// //         <motion.div
// //           initial={{ height: 0 }}
// //           whileInView={{ height: "60%" }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
// //           className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
// //         />

// //         <div className="max-w-5xl mx-auto">
// //           <SectionHeading>About Our Firm</SectionHeading>

// //           {/* bordered quote block */}
// //           <motion.blockquote
// //             variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// //             className="border border-[#C9A24D] border-l-4 bg-[#fdf9f3] px-8 py-6 mb-10 rounded-r-lg"
// //           >
// //             <p className="text-[#8a6a20] text-xl font-medium italic leading-relaxed">
// //               "Every legal matter is unique — which is why we take the time to carefully evaluate
// //               each case and deliver advice that protects your rights and long-term interests."
// //             </p>
// //           </motion.blockquote>

// //           <motion.div
// //             variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
// //             className="space-y-6 text-gray-600 text-lg leading-relaxed"
// //           >
// //             {[
// //               "S Jain Attorneys is a well-established law firm in Bangalore known for providing reliable legal guidance and strong representation across a wide range of legal matters. Our firm works closely with individuals, businesses, startups, multinational companies, and Non-Resident Indians (NRIs) who require professional legal support in India.",
// //               "Our team consists of experienced lawyers, advocates, and legal advisors in Bangalore who focus on delivering practical solutions backed by sound legal strategy. We understand that every legal matter is unique, which is why we take the time to carefully evaluate each case and provide clear, structured advice that protects our clients' rights and long-term interests.",
// //               "We provide legal services across several key practice areas, including corporate and commercial law, civil litigation, criminal defense, family and divorce matters, property disputes, regulatory compliance, and cross-border legal issues. Our approach combines in-depth legal knowledge with a practical understanding of business and personal legal challenges.",
// //               "As trusted corporate legal advisors and litigation lawyers in Bangalore, we are committed to guiding our clients through complex legal situations with professionalism, transparency, and strong courtroom advocacy.",
// //             ].map((para, i) => (
// //               <motion.p key={i} variants={fadeUp} custom={i * 0.4}>{para}</motion.p>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ═════════════════════════════ WHY CHOOSE ════════════════════════════ */}
// //       <section className="py-28 px-6 bg-[#f8f6f1] relative">
// //         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
// //         <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// //         <div className="max-w-5xl mx-auto">
// //           <SectionHeading>Why Choose Our Legal Team</SectionHeading>

// //           <motion.div
// //             variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
// //             className="space-y-6 text-gray-600 text-lg leading-relaxed"
// //           >
// //             {[
// //               "Choosing the right lawyer is essential when you face significant decisions in your life. S Jain Attorneys provides reliable case management solutions through the application of practical legal experience and a commitment to our clients.",
// //               "Our lawyers and advocates practice law in Bangalore and have extensive experience handling complex legal matters. Many of our attorneys have practised law for more than a decade, developing creative strategies, planning for success, and representing clients effectively both in and out of court.",
// //               "Working closely with each of our clients allows us to focus on their unique circumstances and goals — providing individualised legal solutions that not only comply with laws but also achieve desired outcomes.",
// //               "We also provide corporations with corporate legal advisory services such as compliance assistance, contract drafting and negotiation, and the management of risk, compliance, and dispute resolution — blending legal expertise with a business-oriented approach.",
// //               "Our lawyers have extensive courtroom experience across multiple jurisdictions, enabling us to represent clients effectively in litigation, negotiations, and complex legal proceedings.",
// //               "At the core of our practice is a commitment to clear communication, transparency, and structured case management. We ensure that our clients remain informed at every stage of their matter.",
// //               "To maintain strong client support, our firm ensures prompt communication and timely responses, typically within 24 hours, so that your legal concerns are addressed without unnecessary delay.",
// //             ].map((para, i) => (
// //               <motion.p key={i} variants={fadeUp} custom={i * 0.3}>{para}</motion.p>
// //             ))}
// //           </motion.div>

// //           <motion.div
// //             variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
// //             className="flex flex-wrap gap-4 mt-12"
// //           >
// //             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// //               <Link href="/contact"
// //                 className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-8 py-4 font-semibold text-sm tracking-wide transition-colors duration-200"
// //               >
// //                 Book Confidential Consultation
// //               </Link>
// //             </motion.div>
// //             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// //               <Link href="/contact"
// //                 className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-8 py-4 font-semibold text-sm tracking-wide transition-colors duration-200"
// //               >
// //                 Request Call Back
// //               </Link>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ══════════════════════════════ FOUNDER ══════════════════════════════ */}
// //       <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
// //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// //         {/* large decorative "S" watermark */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 80 }}
// //           whileInView={{ opacity: 0.04, x: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 1.2 }}
// //           className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[28rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
// //         >
// //           S
// //         </motion.div>

// //         <div className="max-w-5xl mx-auto relative">
// //           <SectionHeading light>Our Founder</SectionHeading>

// //           {/* bordered founder card with corner ornaments */}
// //           <motion.div
// //             variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// //             className="border border-[#C9A24D]/40 rounded-lg p-10 md:p-14 relative"
// //           >
// //             {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
// //               <span
// //                 key={i}
// //                 className={`absolute ${pos} w-5 h-5 border-[#C9A24D] ${
// //                   i === 0 ? "border-t border-l" :
// //                   i === 1 ? "border-t border-r" :
// //                   i === 2 ? "border-b border-l" : "border-b border-r"
// //                 }`}
// //               />
// //             ))}

// //             <motion.h3
// //               variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
// //               className="text-2xl md:text-3xl font-bold text-[#C9A24D] mb-8"
// //             >
// //               S Jain – Principal Attorney
// //             </motion.h3>

// //             <div className="space-y-5 text-gray-300 text-lg leading-relaxed max-w-3xl">
// //               {[
// //                 "S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive legal experience in representing clients before courts, tribunals, and regulatory authorities.",
// //                 "As a respected advocate and legal strategist, S Jain blends practical understanding with deep legal insight to deliver structured, results-oriented counsel across litigation and advisory matters.",
// //                 "Committed to professionalism and precision, each case is handled with clarity, discretion, and a client-first approach focused on achieving measurable legal outcomes.",
// //               ].map((para, i) => (
// //                 <motion.p key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i + 2}>
// //                   {para}
// //                 </motion.p>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ═════════════════════════════ CORE VALUES ═══════════════════════════ */}
// //       <section className="py-28 px-6 bg-white relative overflow-hidden">
// //         <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// //         <div className="max-w-5xl mx-auto">
// //           <SectionHeading>Our Core Values &amp; Approach</SectionHeading>

// //           <motion.p
// //             variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={0.5}
// //             className="text-gray-500 text-lg mb-14 max-w-2xl leading-relaxed"
// //           >
// //             We provide understandable, structured legal guidance at every stage — prioritizing
// //             your objectives, protecting your rights, and securing long-term outcomes.
// //           </motion.p>

// //           <motion.div
// //             variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
// //             className="grid md:grid-cols-2 gap-6"
// //           >
// //             {coreValues.map((val, i) => (
// //               <motion.div
// //                 key={val.title}
// //                 variants={scaleIn} custom={i * 0.2}
// //                 whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
// //                 className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 transition-colors duration-300 relative group overflow-hidden"
// //               >
// //                 {/* animated top gold fill bar on hover */}
// //                 <motion.span
// //                   initial={{ scaleX: 0 }}
// //                   whileHover={{ scaleX: 1 }}
// //                   className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
// //                   style={{ transition: "transform 0.3s ease" }}
// //                 />
// //                 <span className="text-3xl mb-4 block">{val.icon}</span>
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
// //                   {val.title}
// //                 </h3>
// //                 <p className="text-gray-500 leading-relaxed">{val.description}</p>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ═════════════════════════════ EXPERTISE ═════════════════════════════ */}
// //       <section className="py-28 px-6 bg-[#f8f6f1] relative">
// //         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// //         <div className="max-w-5xl mx-auto">
// //           <SectionHeading>Our Legal Expertise</SectionHeading>

// //           <motion.div
// //             variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
// //             className="grid md:grid-cols-2 gap-5"
// //           >
// //             {practiceAreas.map((area, i) => (
// //               <motion.div
// //                 key={area.number}
// //                 variants={fadeLeft} custom={i * 0.15}
// //                 whileHover={{ x: 6 }}
// //                 className="flex gap-5 items-start bg-white rounded-lg p-6 border border-gray-100 hover:border-[#C9A24D] shadow-sm hover:shadow-lg transition-all duration-300 group"
// //               >
// //                 <span className="text-[#C9A24D] font-black text-2xl shrink-0 mt-0.5 w-10">
// //                   {area.number}
// //                 </span>
// //                 <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-5 transition-colors duration-300">
// //                   <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#8a6a20] transition-colors duration-200">
// //                     {area.title}
// //                   </h3>
// //                   <p className="text-gray-500 text-sm leading-relaxed">{area.description}</p>
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>
// //         </div>
// //       </section>

// //       {/* ══════════════════════════════ FAQ ══════════════════════════════════ */}
// //       <section className="py-28 px-6 bg-white relative">
// //         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// //         <div className="max-w-4xl mx-auto">
// //           <SectionHeading>Frequently Asked Questions</SectionHeading>

// //           <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
// //             {faqs.map((faq, index) => (
// //               <motion.div
// //                 key={index}
// //                 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.15}
// //                 className={`transition-colors duration-300 ${activeFAQ === index ? "bg-[#fdf9f3]" : "bg-white hover:bg-gray-50"}`}
// //               >
// //                 <button
// //                   className="w-full text-left px-8 py-6 flex justify-between items-start gap-4 group"
// //                   onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
// //                   aria-expanded={activeFAQ === index}
// //                 >
// //                   <h3 className={`text-base md:text-lg font-semibold transition-colors duration-200 ${activeFAQ === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"}`}>
// //                     {faq.q}
// //                   </h3>
// //                   <motion.span
// //                     animate={{ rotate: activeFAQ === index ? 45 : 0 }}
// //                     transition={{ duration: 0.25 }}
// //                     className="text-[#C9A24D] text-2xl font-light shrink-0 leading-none mt-0.5"
// //                   >
// //                     +
// //                   </motion.span>
// //                 </button>

// //                 <AnimatePresence>
// //                   {activeFAQ === index && (
// //                     <motion.div
// //                       initial={{ height: 0, opacity: 0 }}
// //                       animate={{ height: "auto", opacity: 1 }}
// //                       exit={{ height: 0, opacity: 0 }}
// //                       transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
// //                       className="overflow-hidden"
// //                     >
// //                       <div className="px-8 pb-7 border-t border-[#C9A24D]/20">
// //                         <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
// //                       </div>
// //                     </motion.div>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ═══════════════════════════════ FINAL CTA ═══════════════════════════ */}
// //       <section className="py-28 px-6 bg-black text-white text-center relative overflow-hidden">
// //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
// //         <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// //         {/* animated background rings */}
// //         {[0, 1, 2].map((i) => (
// //           <motion.div
// //             key={i}
// //             initial={{ scale: 0.6, opacity: 0 }}
// //             whileInView={{ scale: 1, opacity: 1 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 1.2, delay: i * 0.2, ease: "easeOut" }}
// //             className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
// //             style={{
// //               width: `${40 + i * 30}%`,
// //               height: `${80 + i * 30}%`,
// //               top: "50%", left: "50%",
// //               transform: "translate(-50%, -50%)",
// //             }}
// //           />
// //         ))}

// //         {/* bordered inner content box with corner marks */}
// //         <motion.div
// //           variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// //           className="relative max-w-3xl mx-auto border border-[#C9A24D]/30 rounded-2xl px-10 py-16"
// //         >
// //           {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos, i) => (
// //             <span
// //               key={i}
// //               className={`absolute ${pos} w-5 h-5 border-[#C9A24D] ${
// //                 i === 0 ? "border-t-2 border-l-2" :
// //                 i === 1 ? "border-t-2 border-r-2" :
// //                 i === 2 ? "border-b-2 border-l-2" : "border-b-2 border-r-2"
// //               }`}
// //             />
// //           ))}

// //           <motion.p
// //             variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// //             className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
// //           >
// //             S Jain &amp; Attorneys
// //           </motion.p>

// //           <motion.h2
// //             variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
// //             className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
// //           >
// //             Get Trusted Legal Guidance in Bangalore
// //           </motion.h2>

// //           <motion.p
// //             variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
// //             className="text-gray-400 text-lg mb-10"
// //           >
// //             Protecting your rights with confidence and clarity.
// //           </motion.p>

// //           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}>
// //             <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
// //               <Link href="/contact"
// //                 className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
// //               >
// //                 Request Call Back
// //               </Link>
// //             </motion.div>
// //           </motion.div>

// //           <motion.p
// //             variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
// //             className="mt-8 text-gray-600 text-sm flex items-center justify-center gap-2"
// //           >
// //             <span className="inline-block w-4 h-px bg-gray-600" />
// //             All matters handled with complete confidentiality and legal discretion.
// //             <span className="inline-block w-4 h-px bg-gray-600" />
// //           </motion.p>
// //         </motion.div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }



// "use client";

// import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
// import { useState, useRef } from "react";
// import Link from "next/link";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// // ─── DATA ─────────────────────────────────────────────────────────────────────

// const practiceAreas = [
//   {
//     number: "01",
//     title: "Corporate & Commercial Law",
//     description: "Corporate advisory, regulatory compliance, contracts, and business strategy.",
//   },
//   {
//     number: "02",
//     title: "Civil & Property Litigation",
//     description: "Civil disputes, property and real estate matters, and contractual claims.",
//   },
//   {
//     number: "03",
//     title: "Criminal Defense & Prosecution",
//     description: "Representation before sessions courts, magistrate courts, and appellate forums.",
//   },
//   {
//     number: "04",
//     title: "Family & Divorce Law",
//     description:
//       "Divorce, matrimonial property and financial settlements, custody, and mediation.",
//   },
//   {
//     number: "05",
//     title: "Employment & Labour Law",
//     description:
//       "Labour court representation, wrongful termination, and HR compliance advisory.",
//   },
//   {
//     number: "06",
//     title: "Consumer Protection & Appellate Practice",
//     description: "Consumer disputes, High Court matters, and complex litigation cases.",
//   },
//   {
//     number: "07",
//     title: "Cross-Border & NRI Legal Services",
//     description:
//       "NRI property matters, international disputes, and private international law advisory.",
//   },
// ];

// const coreValues = [
//   {
//     icon: "⚖",
//     title: "Integrity",
//     description: "We uphold honesty, discretion, and transparency in every legal engagement.",
//   },
//   {
//     icon: "🤝",
//     title: "Client-Centric Advocacy",
//     description:
//       "Clear communication and personalized legal strategy remain central to our practice.",
//   },
//   {
//     icon: "★",
//     title: "Commitment to Excellence",
//     description: "Delivering premium legal services led by experienced attorneys.",
//   },
//   {
//     icon: "🎯",
//     title: "Strategic Legal Expertise",
//     description: "Practical, business-oriented, and results-driven legal counsel.",
//   },
// ];

// const faqs = [
//   {
//     q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
//     a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
//   },
//   {
//     q: "What areas of law does your firm specialize in?",
//     a: "We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
//   },
//   {
//     q: "Who leads S Jain & Attorneys?",
//     a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals.",
//   },
//   {
//     q: "What makes your legal team different from other law firms in Bangalore?",
//     a: "We combine legal expertise with practical insight. Our focus remains on transparency, tailored legal strategies, and long-term client protection.",
//   },
//   {
//     q: "How can I schedule a consultation with your firm?",
//     a: "You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance.",
//   },
// ];

// // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const fadeLeft = {
//   hidden: { opacity: 0, x: -40 },
//   show: (i = 0) => ({
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const scaleIn = {
//   hidden: { opacity: 0, scale: 0.93 },
//   show: (i = 0) => ({
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const staggerContainer = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.12 } },
// };

// // ─── REUSABLE: SECTION HEADING ────────────────────────────────────────────────

// function SectionHeading({ children, light = false }) {
//   return (
//     <motion.div
//       variants={fadeLeft}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       className="mb-12"
//     >
//       <motion.span
//         initial={{ width: 0 }}
//         whileInView={{ width: 56 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
//         className="block h-[3px] bg-[#C9A24D] mb-5"
//       />
//       <h2
//         className={`text-3xl md:text-4xl font-bold leading-tight ${
//           light ? "text-white" : "text-gray-900"
//         }`}
//       >
//         {children}
//       </h2>
//     </motion.div>
//   );
// }

// // ─── REUSABLE: CTA BUTTONS ────────────────────────────────────────────────────

// function CTAButtons() {
//   return (
//     <motion.div
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//       custom={4}
//       className="flex flex-wrap gap-4 mt-12"
//     >
//       <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//         <Link
//           href="/contact"
//           className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-8 py-4 font-semibold text-sm tracking-wide transition-colors duration-200"
//         >
//           Book Confidential Consultation
//         </Link>
//       </motion.div>
//       <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//         <Link
//           href="/contact"
//           className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-8 py-4 font-semibold text-sm tracking-wide transition-colors duration-200"
//         >
//           Request Call Back
//         </Link>
//       </motion.div>
//     </motion.div>
//   );
// }

// // ─── PAGE ─────────────────────────────────────────────────────────────────────

// export default function LeadingLawFirmPage() {
//   const [activeFAQ, setActiveFAQ] = useState(null);
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });
//   const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
//   const heroOpa = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

//   return (
//     <>
//       <Navbar />

//       {/* ══════════════════════════════════ HERO ═══════════════════════════════ */}
//       <section
//         ref={heroRef}
//         className="relative bg-black text-white overflow-hidden min-h-[92vh] flex items-center"
//       >
//         {/* top gold border */}
//         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//         {/* animated corner brackets */}
//         {[
//           "top-8 left-8 border-t-2 border-l-2",
//           "top-8 right-8 border-t-2 border-r-2",
//           "bottom-8 left-8 border-b-2 border-l-2",
//           "bottom-8 right-8 border-b-2 border-r-2",
//         ].map((cls, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, scale: 0.7 }}
//             animate={{ opacity: 0.35, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
//             className={`absolute w-12 h-12 border-[#C9A24D] ${cls}`}
//           />
//         ))}

//         {/* subtle gold grid overlay */}
//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
//               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
//           }}
//         />

//         <motion.div
//           style={{ y: heroY, opacity: heroOpa }}
//           className="relative max-w-6xl mx-auto px-6 py-32 md:py-44 w-full"
//         >
//           {/* eyebrow */}
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="show"
//             custom={0}
//             className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center gap-3"
//           >
//             <span className="inline-block w-8 h-px bg-[#C9A24D]" />
//             S Jain &amp; Attorneys · Bangalore, India
//           </motion.p>

//           {/* H1 */}
//           <motion.h1
//             variants={fadeUp}
//             initial="hidden"
//             animate="show"
//             custom={1}
//             className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white mb-8 max-w-5xl"
//           >
//             Leading Law Firm in Bangalore –{" "}
//             <span className="text-[#C9A24D]">About S Jain &amp; Attorneys</span>
//           </motion.h1>

//           {/* Intro paragraph (no H tag) */}
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             animate="show"
//             custom={2}
//             className="text-gray-400 text-lg md:text-xl max-w-2xl mb-14 leading-relaxed"
//           >
//             A leading law firm in Bangalore providing full-service legal representation
//             across litigation, advisory, and regulatory matters.
//           </motion.p>

//           {/* Hero CTAs */}
//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             animate="show"
//             custom={3}
//             className="flex flex-wrap gap-4"
//           >
//             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//               <Link
//                 href="/contact"
//                 className="relative inline-flex items-center bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide overflow-hidden group"
//               >
//                 <span className="relative z-10">Book Confidential Consultation</span>
//                 <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
//               </Link>
//             </motion.div>
//             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
//               <Link
//                 href="/contact"
//                 className="inline-flex items-center border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-8 py-4 font-semibold text-sm tracking-wide transition-colors duration-300"
//               >
//                 Request Call Back
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* scroll indicator */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5, duration: 1 }}
//             className="absolute bottom-10 left-6 flex flex-col items-center gap-2"
//           >
//             <motion.div
//               animate={{ y: [0, 8, 0] }}
//               transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
//               className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
//             />
//           </motion.div>
//         </motion.div>

//         <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
//       </section>

//       {/* ═══════════════════════════════ ABOUT OUR FIRM ════════════════════════ */}
//       <section className="py-28 px-6 bg-white relative overflow-hidden">
//         {/* animated right-side vertical rule */}
//         <motion.div
//           initial={{ height: 0 }}
//           whileInView={{ height: "60%" }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
//           className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
//         />

//         <div className="max-w-5xl mx-auto">
//           <SectionHeading>About Our Firm</SectionHeading>

//           {/* bordered pull-quote */}
//           <motion.blockquote
//             variants={scaleIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="border border-[#C9A24D] border-l-4 bg-[#fdf9f3] px-8 py-6 mb-10 rounded-r-lg"
//           >
//             <p className="text-[#8a6a20] text-xl font-medium italic leading-relaxed">
//               "Every legal matter is unique — which is why we take the time to carefully evaluate
//               each case and deliver advice that protects your rights and long-term interests."
//             </p>
//           </motion.blockquote>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="space-y-6 text-gray-600 text-lg leading-relaxed"
//           >
//             {[
//               "S Jain Attorneys is a well-established law firm in Bangalore known for providing reliable legal guidance and strong representation across a wide range of legal matters. Our firm works closely with individuals, businesses, startups, multinational companies, and Non-Resident Indians (NRIs) who require professional legal support in India.",
//               "Our team consists of experienced lawyers, advocates, and legal advisors in Bangalore who focus on delivering practical solutions backed by sound legal strategy. We understand that every legal matter is unique, which is why we take the time to carefully evaluate each case and provide clear, structured advice that protects our clients' rights and long-term interests.",
//               "We provide legal services across several key practice areas, including corporate and commercial law, civil litigation, criminal defense, family and divorce matters, property disputes, regulatory compliance, and cross-border legal issues. Our approach combines in-depth legal knowledge with a practical understanding of business and personal legal challenges.",
//               "As trusted corporate legal advisors and litigation lawyers in Bangalore, we are committed to guiding our clients through complex legal situations with professionalism, transparency, and strong courtroom advocacy. Whether it involves resolving disputes, structuring business transactions, or handling sensitive family matters, our goal is always to deliver dependable legal support and effective results.",
//             ].map((para, i) => (
//               <motion.p key={i} variants={fadeUp} custom={i * 0.4}>
//                 {para}
//               </motion.p>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ══════════════════════════ WHY CHOOSE OUR LEGAL TEAM ══════════════════ */}
//       <section className="py-28 px-6 bg-[#f8f6f1] relative">
//         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
//         <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//         <div className="max-w-5xl mx-auto">
//           <SectionHeading>Why Choose Our Legal Team</SectionHeading>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="space-y-6 text-gray-600 text-lg leading-relaxed"
//           >
//             {[
//               "Choosing the right lawyer is essential when you face significant decisions in your life. S Jain Attorneys provides reliable case management solutions through the application of practical legal experience and a commitment to our clients.",
//               "Our lawyers and advocates practice law in Bangalore and have extensive ways of understanding the challenges presented by today's complex legal issues. We have experience in several different areas of law (and many of our attorneys have practised law for more than a decade) and we develop creative strategies, plan for success, and represent clients effectively both in and out of court.",
//               "Working closely with each of our clients allows us to focus on each client's unique circumstances and goals so that we can provide individualised legal solutions that not only comply with laws but also achieve desired outcomes.",
//               "We also provide corporations with corporate legal advisory services such as compliance assistance, contract drafting and negotiation, and the management of risk, compliance, and dispute resolution by blending our expertise in law with a business-oriented approach to help clients operate confidently within the confines of available legal options.",
//               "Our lawyers have extensive courtroom experience across multiple jurisdictions, enabling us to represent clients effectively in litigation, negotiations, and complex legal proceedings.",
//               "At the core of our practice is a commitment to clear communication, transparency, and structured case management. We ensure that our clients remain informed at every stage of their matter, while our team works diligently to achieve the best possible outcome.",
//               "To maintain strong client support, our firm also ensures prompt communication and timely responses, typically within 24 hours, so that your legal concerns are addressed without unnecessary delay.",
//             ].map((para, i) => (
//               <motion.p key={i} variants={fadeUp} custom={i * 0.3}>
//                 {para}
//               </motion.p>
//             ))}
//           </motion.div>

//           <CTAButtons />
//         </div>
//       </section>

//       {/* ════════════════════════════════ OUR FOUNDER ══════════════════════════ */}
//       <section className="py-28 px-6 bg-black text-white relative overflow-hidden">
//         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//         {/* large decorative "S" watermark */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 0.04, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2 }}
//           className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[28rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
//         >
//           S
//         </motion.div>

//         <div className="max-w-5xl mx-auto relative">
//           <SectionHeading light>Our Founder</SectionHeading>

//           {/* bordered founder card */}
//           <motion.div
//             variants={scaleIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="border border-[#C9A24D]/40 rounded-lg p-10 md:p-14 relative"
//           >
//             {/* corner ornaments */}
//             {[
//               "top-3 left-3 border-t border-l",
//               "top-3 right-3 border-t border-r",
//               "bottom-3 left-3 border-b border-l",
//               "bottom-3 right-3 border-b border-r",
//             ].map((cls, i) => (
//               <span
//                 key={i}
//                 className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`}
//               />
//             ))}

//             {/* H3 */}
//             <motion.h3
//               variants={fadeUp}
//               initial="hidden"
//               whileInView="show"
//               viewport={{ once: true }}
//               custom={1}
//               className="text-2xl md:text-3xl font-bold text-[#C9A24D] mb-8"
//             >
//               S Jain – Principal Attorney
//             </motion.h3>

//             <div className="space-y-5 text-gray-300 text-lg leading-relaxed max-w-3xl">
//               {[
//                 "S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive legal experience in representing clients before courts, tribunals, and regulatory authorities.",
//                 "As a respected advocate and legal strategist, S Jain blends practical understanding with deep legal insight to deliver structured, results-oriented counsel across litigation and advisory matters.",
//                 "Committed to professionalism and precision, each case is handled with clarity, discretion, and a client-first approach focused on achieving measurable legal outcomes.",
//               ].map((para, i) => (
//                 <motion.p
//                   key={i}
//                   variants={fadeUp}
//                   initial="hidden"
//                   whileInView="show"
//                   viewport={{ once: true }}
//                   custom={i + 2}
//                 >
//                   {para}
//                 </motion.p>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ═══════════════════════════ CORE VALUES & APPROACH ════════════════════ */}
//       <section className="py-28 px-6 bg-white relative overflow-hidden">
//         <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//         <div className="max-w-5xl mx-auto">
//           <SectionHeading>Our Core Values &amp; Approach</SectionHeading>

//           {/* 4 value cards — H3 titles from brief */}
//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 gap-6 mb-14"
//           >
//             {coreValues.map((val, i) => (
//               <motion.div
//                 key={val.title}
//                 variants={scaleIn}
//                 custom={i * 0.2}
//                 whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
//                 className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 transition-colors duration-300 relative group overflow-hidden"
//               >
//                 <motion.span
//                   initial={{ scaleX: 0 }}
//                   whileHover={{ scaleX: 1 }}
//                   className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
//                   style={{ transition: "transform 0.3s ease" }}
//                 />
//                 <span className="text-3xl mb-4 block">{val.icon}</span>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
//                   {val.title}
//                 </h3>
//                 <p className="text-gray-500 leading-relaxed">{val.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* H3: Our Approach — from brief */}
//           <motion.div
//             variants={scaleIn}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="border-l-4 border-[#C9A24D] bg-[#fdf9f3] rounded-r-lg px-8 py-7"
//           >
//             <h3 className="text-xl font-bold text-gray-900 mb-3">Our Approach</h3>
//             <p className="text-gray-600 text-lg leading-relaxed">
//               We provide understandable, structured legal guidance at every stage — prioritizing
//               your objectives, protecting your rights, and securing long-term outcomes.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ════════════════════════════ OUR LEGAL EXPERTISE ══════════════════════ */}
//       <section className="py-28 px-6 bg-[#f8f6f1] relative">
//         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//         <div className="max-w-5xl mx-auto">
//           <SectionHeading>Our Legal Expertise</SectionHeading>

//           <motion.div
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="grid md:grid-cols-2 gap-5"
//           >
//             {practiceAreas.map((area, i) => (
//               <motion.div
//                 key={area.number}
//                 variants={fadeLeft}
//                 custom={i * 0.15}
//                 whileHover={{ x: 6 }}
//                 className="flex gap-5 items-start bg-white rounded-lg p-6 border border-gray-100 hover:border-[#C9A24D] shadow-sm hover:shadow-lg transition-all duration-300 group"
//               >
//                 <span className="text-[#C9A24D] font-black text-2xl shrink-0 mt-0.5 w-10">
//                   {area.number}
//                 </span>
//                 <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-5 transition-colors duration-300">
//                   <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#8a6a20] transition-colors duration-200">
//                     {area.title}
//                   </h3>
//                   <p className="text-gray-500 text-sm leading-relaxed">{area.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* ════════════════════════════════ FAQs ════════════════════════════════ */}
//       <section className="py-28 px-6 bg-white relative">
//         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//         <div className="max-w-4xl mx-auto">
//           <SectionHeading>Frequently Asked Questions (FAQs)</SectionHeading>

//           <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
//             {faqs.map((faq, index) => (
//               <motion.div
//                 key={index}
//                 variants={fadeUp}
//                 initial="hidden"
//                 whileInView="show"
//                 viewport={{ once: true }}
//                 custom={index * 0.15}
//                 className={`transition-colors duration-300 ${
//                   activeFAQ === index ? "bg-[#fdf9f3]" : "bg-white hover:bg-gray-50"
//                 }`}
//               >
//                 <button
//                   className="w-full text-left px-8 py-6 flex justify-between items-start gap-4 group"
//                   onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
//                   aria-expanded={activeFAQ === index}
//                 >
//                   <h3
//                     className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
//                       activeFAQ === index
//                         ? "text-[#8a6a20]"
//                         : "text-gray-800 group-hover:text-[#C9A24D]"
//                     }`}
//                   >
//                     {index + 1}. {faq.q}
//                   </h3>
//                   <motion.span
//                     animate={{ rotate: activeFAQ === index ? 45 : 0 }}
//                     transition={{ duration: 0.25 }}
//                     className="text-[#C9A24D] text-2xl font-light shrink-0 leading-none mt-0.5"
//                   >
//                     +
//                   </motion.span>
//                 </button>

//                 <AnimatePresence>
//                   {activeFAQ === index && (
//                     <motion.div
//                       initial={{ height: 0, opacity: 0 }}
//                       animate={{ height: "auto", opacity: 1 }}
//                       exit={{ height: 0, opacity: 0 }}
//                       transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
//                       className="overflow-hidden"
//                     >
//                       <div className="px-8 pb-7 border-t border-[#C9A24D]/20">
//                         <p className="pt-5 text-gray-500 text-base leading-relaxed">{faq.a}</p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ═══════════════════════════════ FINAL CTA ════════════════════════════ */}
//       <section className="py-28 px-6 bg-black text-white text-center relative overflow-hidden">
//         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
//         <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//         {/* animated concentric rings */}
//         {[0, 1, 2].map((i) => (
//           <motion.div
//             key={i}
//             initial={{ scale: 0.6, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1.2, delay: i * 0.2, ease: "easeOut" }}
//             className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
//             style={{
//               width: `${40 + i * 30}%`,
//               height: `${80 + i * 30}%`,
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//             }}
//           />
//         ))}

//         {/* bordered inner content box */}
//         <motion.div
//           variants={scaleIn}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="relative max-w-3xl mx-auto border border-[#C9A24D]/30 rounded-2xl px-10 py-16"
//         >
//           {/* corner marks */}
//           {[
//             "top-4 left-4 border-t-2 border-l-2",
//             "top-4 right-4 border-t-2 border-r-2",
//             "bottom-4 left-4 border-b-2 border-l-2",
//             "bottom-4 right-4 border-b-2 border-r-2",
//           ].map((cls, i) => (
//             <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
//           ))}

//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
//           >
//             S Jain &amp; Attorneys
//           </motion.p>

//           {/* H2 from brief */}
//           <motion.h2
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             custom={1}
//             className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
//           >
//             Get trusted legal guidance from S Jain &amp; Attorneys in Bangalore,
//             protecting your rights with confidence and clarity.
//           </motion.h2>

//           <motion.div
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             custom={2}
//           >
//             <motion.div
//               whileHover={{ scale: 1.04 }}
//               whileTap={{ scale: 0.97 }}
//               className="inline-block"
//             >
//               <Link
//                 href="/contact"
//                 className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
//               >
//                 Request Call Back
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* confidentiality note from brief */}
//           <motion.p
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true }}
//             custom={3}
//             className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
//           >
//             <span className="inline-block w-4 h-px bg-gray-600" />
//             All matters handled with complete confidentiality and legal discretion.
//             <span className="inline-block w-4 h-px bg-gray-600" />
//           </motion.p>
//         </motion.div>
//       </section>

//       <Footer />
//     </>
//   );
// }


"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const practiceAreas = [
  {
    number: "01",
    title: "Corporate & Commercial Law",
    description: "Corporate advisory, regulatory compliance, contracts, and business strategy.",
  },
  {
    number: "02",
    title: "Civil & Property Litigation",
    description: "Civil disputes, property and real estate matters, and contractual claims.",
  },
  {
    number: "03",
    title: "Criminal Defense & Prosecution",
    description: "Representation before sessions courts, magistrate courts, and appellate forums.",
  },
  {
    number: "04",
    title: "Family & Divorce Law",
    description: "Divorce, matrimonial property and financial settlements, custody, and mediation.",
  },
  {
    number: "05",
    title: "Employment & Labour Law",
    description: "Labour court representation, wrongful termination, and HR compliance advisory.",
  },
  {
    number: "06",
    title: "Consumer Protection & Appellate Practice",
    description: "Consumer disputes, High Court matters, and complex litigation cases.",
  },
  {
    number: "07",
    title: "Cross-Border & NRI Legal Services",
    description: "NRI property matters, international disputes, and private international law advisory.",
  },
];

const coreValues = [
  {
    icon: "⚖",
    title: "Integrity",
    description: "We uphold honesty, discretion, and transparency in every legal engagement.",
  },
  {
    icon: "🤝",
    title: "Client-Centric Advocacy",
    description: "Clear communication and personalized legal strategy remain central to our practice.",
  },
  {
    icon: "★",
    title: "Commitment to Excellence",
    description: "Delivering premium legal services led by experienced attorneys.",
  },
  {
    icon: "🎯",
    title: "Strategic Legal Expertise",
    description: "Practical, business-oriented, and results-driven legal counsel.",
  },
];

const faqs = [
  {
    q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
    a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
  },
  {
    q: "What areas of law does your firm specialize in?",
    a: "We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
  },
  {
    q: "Who leads S Jain & Attorneys?",
    a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals.",
  },
  {
    q: "What makes your legal team different from other law firms in Bangalore?",
    a: "We combine legal expertise with practical insight. Our focus remains on transparency, tailored legal strategies, and long-term client protection.",
  },
  {
    q: "How can I schedule a consultation with your firm?",
    a: "You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance.",
  },
];

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
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

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function SectionHeading({ children, light = false }) {
  return (
    <motion.div
      variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
      className="mb-4"
    >
      <motion.span
        initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="block h-[2px] bg-[#C9A24D] mb-5"
      />
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
        {children}
      </h2>
    </motion.div>
  );
}

function CTAButtons() {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
      className="flex flex-wrap gap-4 mt-12"
    >
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href="/contact"
          className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-8 py-4 font-semibold text-sm tracking-wide transition-colors duration-200"
        >
          Book Confidential Consultation
        </Link>
      </motion.div>
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href="/contact"
          className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-8 py-4 font-semibold text-sm tracking-wide transition-colors duration-200"
        >
          Request Call Back
        </Link>
      </motion.div>
    </motion.div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function LeadingLawFirmPage() {
  const [activeFAQ, setActiveFAQ] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpa = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════ HERO ═══════════════════════════════ */}
      <section ref={heroRef}
        className="relative bg-black text-white overflow-hidden min-h-[92vh] flex items-center "
      >
        {/* top gold border */}
        {/* <div className="absolute top-0 left-0 right-0 h-[px] bg-[#C9A24D]" /> */}

        {/* animated corner brackets — all four corners */}
        {/* {[
          "top-8 left-8 border-t-2 border-l-2",
          "top-8 right-8 border-t-2 border-r-2",
          "bottom-8 left-8 border-b-2 border-l-2",
          "bottom-8 right-8 border-b-2 border-r-2",
        ].map((cls, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
            className={`absolute w-12 h-12 border-[#C9A24D] ${cls}`}
          />
        ))} */}

        {/* subtle gold grid overlay */}
        {/* <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
            "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
        }} /> */}

        <motion.div
          className="relative max-w-6xl mx-auto px-6 py-10 md:py-8 w-full"
        >
          {/* eyebrow */}
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-[#C9A24D]" />
            S Jain &amp; Attorneys  Bangalore, India
          </motion.p>

          {/* H1 */}
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white mb-8 max-w-5xl"
          >
            Leading Law Firm in Bangalore –{" "}
            <span className="text-[#C9A24D]">About S Jain &amp; Attorneys</span>
          </motion.h1>

          {/* Intro paragraph (no H tag) */}
          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mb-14 leading-[1.6]"
          >
            A leading law firm in Bangalore providing full-service legal representation
            across litigation, advisory, and regulatory matters.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact"
                className="relative inline-flex items-center bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide overflow-hidden group"
              >
                <span className="relative z-10">Book Confidential Consultation</span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact"
                className="inline-flex items-center border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-8 py-4 font-semibold text-sm tracking-wide transition-colors duration-300"
              >
                Request Call Back
              </Link>
            </motion.div>
          </motion.div>

          {/* scroll indicator */}
          {/* <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-6 flex flex-col items-center gap-2"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
            />
          </motion.div> */}
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════════════════ ABOUT OUR FIRM ════════════════════════ */}
      <section className="py-12 md:py-14 px-6 bg-white relative overflow-hidden">
        {/* animated right-side vertical rule */}
        {/* <motion.div
          initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
        /> */}

        <div className="max-w-5xl mx-auto">
          <SectionHeading>About Our Firm</SectionHeading>



          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="space-y-6 text-gray-600 text-lg leading-[1.6]"
          >
            {[
              "S Jain Attorneys is a well-established law firm in Bangalore known for providing reliable legal guidance and strong representation across a wide range of legal matters. Our firm works closely with individuals, businesses, startups, multinational companies, and Non-Resident Indians (NRIs) who require professional legal support in India.",
              "Our team consists of experienced lawyers, advocates, and legal advisors in Bangalore who focus on delivering practical solutions backed by sound legal strategy. We understand that every legal matter is unique, which is why we take the time to carefully evaluate each case and provide clear, structured advice that protects our clients' rights and long-term interests.",
              "We provide legal services across several key practice areas, including corporate and commercial law, civil litigation, criminal defense, family and divorce matters, property disputes, regulatory compliance, and cross-border legal issues. Our approach combines in-depth legal knowledge with a practical understanding of business and personal legal challenges.",
              "As trusted corporate legal advisors and litigation lawyers in Bangalore, we are committed to guiding our clients through complex legal situations with professionalism, transparency, and strong courtroom advocacy. Whether it involves resolving disputes, structuring business transactions, or handling sensitive family matters, our goal is always to deliver dependable legal support and effective results.",
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} custom={i * 0.4}>{para}</motion.p>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════ WHY CHOOSE OUR LEGAL TEAM ══════════════════ */}
      <section className="py-12 md:py-14 px-6 bg-[#f8f6f1] relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

        <div className="max-w-5xl mx-auto">
          <SectionHeading>Why Choose Our Legal Team</SectionHeading>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="space-y-6 text-gray-600 text-lg leading-[1.6]"
          >
            {[
              "Choosing the right lawyer is essential when you face significant decisions in your life. S Jain Attorneys provides reliable case management solutions through the application of practical legal experience and a commitment to our clients.",
              "Our lawyers and advocates practice law in Bangalore and have extensive ways of understanding the challenges presented by today's complex legal issues. We have experience in several different areas of law (and many of our attorneys have practised law for more than a decade) and we develop creative strategies, plan for success, and represent clients effectively both in and out of court.",
              "Working closely with each of our clients allows us to focus on each client's unique circumstances and goals so that we can provide individualised legal solutions that not only comply with laws but also achieve desired outcomes.",
              "We also provide corporations with corporate legal advisory services such as compliance assistance, contract drafting and negotiation, and the management of risk, compliance, and dispute resolution by blending our expertise in law with a business-oriented approach to help clients operate confidently within the confines of available legal options.",
              "Our lawyers have extensive courtroom experience across multiple jurisdictions, enabling us to represent clients effectively in litigation, negotiations, and complex legal proceedings.",
              "At the core of our practice is a commitment to clear communication, transparency, and structured case management. We ensure that our clients remain informed at every stage of their matter, while our team works diligently to achieve the best possible outcome.",
              "To maintain strong client support, our firm also ensures prompt communication and timely responses, typically within 24 hours, so that your legal concerns are addressed without unnecessary delay.",
            ].map((para, i) => (
              <motion.p key={i} variants={fadeUp} custom={i * 0.3}>{para}</motion.p>
            ))}
          </motion.div>

          <CTAButtons />
        </div>
      </section>

      {/* ════════════════════════════════ OUR FOUNDER ══════════════════════════ */}
      <section className="py-12 md:py-14 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

        {/* large decorative "S" watermark */}
        <motion.div
          initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 0.04, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 1.2 }}
          className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[28rem] font-black text-[#C9A24D] select-none pointer-events-none leading-none"
        >
          S
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <SectionHeading light>Our Founder</SectionHeading>

          {/* bordered founder card */}
          <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="border border-[#C9A24D]/40 rounded-lg p-10 md:p-14 relative"
          >
            {/* corner ornaments */}
            {[
              "top-3 left-3 border-t border-l",
              "top-3 right-3 border-t border-r",
              "bottom-3 left-3 border-b border-l",
              "bottom-3 right-3 border-b border-r",
            ].map((cls, i) => (
              <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
            ))}

            {/* H3 */}
            <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
              className="text-2xl md:text-3xl font-bold text-[#C9A24D] mb-8"
            >
              S Jain – Principal Attorney
            </motion.h3>

            <div className="space-y-5 text-gray-300 text-lg leading-[1.6] max-w-3xl">
              {[
                "S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive legal experience in representing clients before courts, tribunals, and regulatory authorities.",
                "As a respected advocate and legal strategist, S Jain blends practical understanding with deep legal insight to deliver structured, results-oriented counsel across litigation and advisory matters.",
                "Committed to professionalism and precision, each case is handled with clarity, discretion, and a client-first approach focused on achieving measurable legal outcomes.",
              ].map((para, i) => (
                <motion.p key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i + 2}>
                  {para}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════ CORE VALUES & APPROACH ════════════════════ */}
      <section className="py-12 md:py-14 px-6 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

        <div className="max-w-5xl mx-auto">
          <SectionHeading>Our Core Values &amp; Approach</SectionHeading>

          {/* 4 value cards */}
          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-14"
          >
            {coreValues.map((val, i) => (
              <motion.div key={val.title} variants={scaleIn} custom={i * 0.2}
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(201,162,77,0.15)" }}
                className="border border-gray-200 hover:border-[#C9A24D] rounded-lg p-8 transition-colors duration-300 relative group overflow-hidden"
              >
                <motion.span
                  initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
                  className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left block"
                  style={{ transition: "transform 0.3s ease" }}
                />
                <span className="text-3xl mb-4 block">{val.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8a6a20] transition-colors duration-200">
                  {val.title}
                </h3>
                <p className="text-gray-500 leading-[1.6]">{val.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Our Approach callout */}
          <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="border-l-4 border-[#C9A24D] bg-[#fdf9f3] rounded-r-lg px-8 py-7"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">Our Approach</h3>
            <p className="text-gray-600 text-lg leading-[1.6]">
              We provide understandable, structured legal guidance at every stage — prioritizing
              your objectives, protecting your rights, and securing long-term outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════ OUR LEGAL EXPERTISE ══════════════════════ */}
      <section className="py-12 md:py-14 px-6 bg-[#f8f6f1] relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

        <div className="max-w-5xl mx-auto">
          <SectionHeading>Our Legal Expertise</SectionHeading>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-5"
          >
            {practiceAreas.map((area, i) => (
              <motion.div key={area.number} variants={fadeLeft} custom={i * 0.15}
                whileHover={{ x: 6 }}
                className="flex gap-5 items-start bg-white rounded-lg p-6 border border-gray-100 hover:border-[#C9A24D] shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-[#C9A24D] font-black text-2xl shrink-0 mt-0.5 w-10">
                  {area.number}
                </span>
                <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-5 transition-colors duration-300">
                  <h3 className="text-base font-bold text-gray-900 mb-1 group-hover:text-[#8a6a20] transition-colors duration-200">
                    {area.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-[1.6]">{area.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════ FAQs ════════════════════════════════ */}
      <section className="py-14 md:py-14 px-6 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

        <div className="max-w-4xl mx-auto">
          <SectionHeading>Frequently Asked Questions (FAQs)</SectionHeading>

          <div className="border border-gray-200 rounded-xl overflow-hidden divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <motion.div key={index}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={index * 0.15}
                className={`transition-colors duration-300 ${activeFAQ === index ? "bg-[#fdf9f3]" : "bg-white hover:bg-gray-50"
                  }`}
              >
                <button
                  className="w-full text-left px-8 py-6 flex justify-between items-start gap-4 group"
                  onClick={() => setActiveFAQ(activeFAQ === index ? null : index)}
                  aria-expanded={activeFAQ === index}
                >
                  <h3 className={`text-base md:text-lg font-semibold transition-colors duration-200 ${activeFAQ === index ? "text-[#8a6a20]" : "text-gray-800 group-hover:text-[#C9A24D]"
                    }`}>
                    {index + 1}. {faq.q}
                  </h3>
                  <motion.span
                    animate={{ rotate: activeFAQ === index ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[#C9A24D] text-2xl font-light shrink-0 leading-none mt-0.5"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-7 border-t border-[#C9A24D]/20">
                        <p className="pt-5 text-gray-500 text-base leading-[1.6]">{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ FINAL CTA ════════════════════════════ */}

      <section className="relative py-24 text-white text-center">

        <Image
          src="/discussion.png"
          alt="Legal consultation"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative max-w-4xl mx-auto px-6">

          <h2 className="text-2xl md:text-5xl font-semibold mb-6">
            Get trusted legal guidance from S Jain & Attorneys in Bangalore, protecting your rights with confidence and clarity.</h2>

          <Link
            href="/contact"
            className="inline-block bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
          >
            Request Call Back
          </Link>

          <p className="text-gray-400 mt-8 text-sm">
            All matters handled with complete confidentiality and legal discretion.
          </p>

        </div>

      </section>

      <Footer />
    </>
  );
}