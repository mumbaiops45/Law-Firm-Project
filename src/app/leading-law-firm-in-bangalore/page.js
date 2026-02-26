// // // import Link from "next/link";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";

// // // /* ================= SEO META ================= */

// // // export const metadata = {
// // //   title: "Leading Law Firm in Bangalore | S Jain & Attorneys",
// // //   description:
// // //     "S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters.",
// // //   alternates: {
// // //     canonical: "https://yourdomain.com/leading-law-firm-in-bangalore",
// // //   },
// // // };

// // // export default function LeadingLawFirmPage() {
// // //   return (
// // //     <>
// // //       <Navbar />

// // //       {/* ================= HERO SECTION ================= */}
// // //       <section className="relative bg-gradient-to-br from-black via-[#111] to-black text-[#C9A24D] py-32 px-6 overflow-hidden">
// // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_40%)]"></div>

// // //         <div className="relative max-w-6xl mx-auto text-center">
// // //           <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight">
// // //             Leading Law Firm in Bangalore – About S Jain & Attorneys
// // //           </h1>

// // //           <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
// // //             A leading law firm in Bangalore providing full-service legal
// // //             representation across litigation, advisory, and regulatory matters.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* ================= ABOUT OUR FIRM ================= */}
// // //       <section className="py-28 px-6 bg-white">
// // //         <div className="max-w-5xl mx-auto">
// // //           <h2 className="text-4xl font-serif mb-8 text-black">
// // //             About Our Firm
// // //           </h2>

// // //           <p className="text-gray-700 leading-relaxed mb-6">
// // //             S Jain & Attorneys is recognised as a leading law firm in Bangalore,
// // //             delivering strategic and result-oriented legal representation for
// // //             individuals, businesses, startups, multinational companies, and NRIs.
// // //           </p>

// // //           <p className="text-gray-700 leading-relaxed mb-6">
// // //             With a team of experienced attorneys and dedicated legal experts,
// // //             we provide structured legal counsel and courtroom advocacy that
// // //             protects your rights, business interests, and long-term objectives.
// // //           </p>

// // //           <p className="text-gray-700 leading-relaxed">
// // //             Our firm advises across corporate, civil, criminal, family,
// // //             regulatory, and cross-border matters. As trusted corporate legal
// // //             advisors, lawyers, and advocates, we combine legal depth with
// // //             practical insight to guide clients confidently through complex legal
// // //             environments.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* ================= WHY CHOOSE US ================= */}
// // //       <section className="bg-gray-50 py-28 px-6">
// // //         <div className="max-w-5xl mx-auto">
// // //           <h2 className="text-4xl font-serif mb-12 text-black">
// // //             Why Choose Our Legal Team
// // //           </h2>

// // //           <ul className="space-y-4 text-gray-700 text-lg">
// // //             <li>✓ Over a decade of legal practice by experienced attorneys in Bangalore</li>
// // //             <li>✓ A trusted group of legal experts committed to ethical advocacy</li>
// // //             <li>✓ Strategic, personalized legal solutions tailored to each matter</li>
// // //             <li>✓ Corporate legal advisory services for business clients</li>
// // //             <li>✓ Lawyers and advocates with courtroom experience across multiple jurisdictions</li>
// // //             <li>✓ Transparent communication and structured case strategy</li>
// // //           </ul>

// // //           <p className="text-[#C9A24D] font-semibold mt-10 text-lg">
// // //             Response within 24 hours guaranteed.
// // //           </p>

// // //           <div className="flex flex-wrap gap-6 mt-10">
// // //             <Link
// // //               href="/legal-consultation-in-bangalore"
// // //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold hover:scale-105 transition rounded-md shadow-lg"
// // //             >
// // //               Book Confidential Consultation
// // //             </Link>

// // //             <Link
// // //               href="/contact"
// // //               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition rounded-md"
// // //             >
// // //               Request Call Back
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= FOUNDER ================= */}
// // //       <section className="py-28 px-6 bg-white">
// // //         <div className="max-w-5xl mx-auto">
// // //           <h2 className="text-4xl font-serif mb-8 text-black">
// // //             Our Founder
// // //           </h2>

// // //           <h3 className="text-2xl text-[#C9A24D] font-semibold mb-6">
// // //             S Jain – Principal Attorney
// // //           </h3>

// // //           <p className="text-gray-700 leading-relaxed">
// // //             S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive
// // //             legal experience in representing clients before courts, tribunals,
// // //             and regulatory authorities. As a respected advocate and legal strategist,
// // //             S Jain blends practical understanding with deep legal insight to deliver
// // //             structured, results-oriented counsel across litigation and advisory matters.
// // //             Committed to professionalism and precision, each case is handled with clarity,
// // //             discretion, and a client-first approach focused on achieving measurable legal outcomes.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* ================= CORE VALUES ================= */}
// // //       <section className="bg-gray-50 py-28 px-6">
// // //         <div className="max-w-5xl mx-auto space-y-12">
// // //           <h2 className="text-4xl font-serif text-black">
// // //             Our Core Values & Approach
// // //           </h2>

// // //           <div>
// // //             <h3 className="text-[#C9A24D] font-semibold text-xl">Integrity</h3>
// // //             <p className="text-gray-700 mt-2">
// // //               We uphold honesty, discretion, and transparency in every legal engagement.
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <h3 className="text-[#C9A24D] font-semibold text-xl">Client-Centric Advocacy</h3>
// // //             <p className="text-gray-700 mt-2">
// // //               Clear communication and personalized legal strategy remain central to our practice.
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <h3 className="text-[#C9A24D] font-semibold text-xl">Commitment to Excellence</h3>
// // //             <p className="text-gray-700 mt-2">
// // //               Delivering premium legal services led by experienced attorneys.
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <h3 className="text-[#C9A24D] font-semibold text-xl">Strategic Legal Expertise</h3>
// // //             <p className="text-gray-700 mt-2">
// // //               Practical, business-oriented, and results-driven legal counsel.
// // //             </p>
// // //           </div>

// // //           <div>
// // //             <h3 className="text-[#C9A24D] font-semibold text-xl">Our Approach</h3>
// // //             <p className="text-gray-700 mt-2">
// // //               We provide understandable, structured legal guidance at every stage —
// // //               prioritizing your objectives, protecting your rights, and securing long-term outcomes.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= LEGAL EXPERTISE ================= */}
// // //       <section className="bg-white py-28 px-6">
// // //         <div className="max-w-5xl mx-auto space-y-8">
// // //           <h2 className="text-4xl font-serif text-black">
// // //             Our Legal Expertise
// // //           </h2>

// // //           <div className="space-y-6 text-gray-700">
// // //             <div>
// // //               <h3 className="font-semibold">1. Corporate & Commercial Law</h3>
// // //               <p>Corporate advisory, regulatory compliance, contracts, and business strategy.</p>
// // //             </div>

// // //             <div>
// // //               <h3 className="font-semibold">2. Civil & Property Litigation</h3>
// // //               <p>Civil disputes, property and real estate matters, and contractual claims.</p>
// // //             </div>

// // //             <div>
// // //               <h3 className="font-semibold">3. Criminal Defense & Prosecution</h3>
// // //               <p>Representation before sessions courts, magistrate courts, and appellate forums.</p>
// // //             </div>

// // //             <div>
// // //               <h3 className="font-semibold">4. Family & Divorce Law</h3>
// // //               <p>Divorce, matrimonial property and financial settlements, custody, and mediation.</p>
// // //             </div>

// // //             <div>
// // //               <h3 className="font-semibold">5. Employment & Labour Law</h3>
// // //               <p>Labour court representation, wrongful termination, and HR compliance advisory.</p>
// // //             </div>

// // //             <div>
// // //               <h3 className="font-semibold">6. Consumer Protection & Appellate Practice</h3>
// // //               <p>Consumer disputes, High Court matters, and complex litigation cases.</p>
// // //             </div>

// // //             <div>
// // //               <h3 className="font-semibold">7. Cross-Border & NRI Legal Services</h3>
// // //               <p>NRI property matters, international disputes, and private international law advisory.</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= FAQ ================= */}
// // //       <section className="bg-gray-50 py-28 px-6">
// // //         <div className="max-w-5xl mx-auto space-y-8">
// // //           <h2 className="text-4xl font-serif text-black">
// // //             Frequently Asked Questions (FAQs)
// // //           </h2>

// // //           <div>
// // //             <p className="font-semibold">1. Why is S Jain & Attorneys considered a leading law firm in Bangalore?</p>
// // //             <p className="text-gray-700">The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.</p>
// // //           </div>

// // //           <div>
// // //             <p className="font-semibold">2. What areas of law does your firm specialize in?</p>
// // //             <p className="text-gray-700">We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.</p>
// // //           </div>

// // //           <div>
// // //             <p className="font-semibold">3. Who leads S Jain & Attorneys?</p>
// // //             <p className="text-gray-700">The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals.</p>
// // //           </div>

// // //           <div>
// // //             <p className="font-semibold">4. What makes your legal team different?</p>
// // //             <p className="text-gray-700">We combine legal expertise with practical insight, focusing on transparency, tailored strategies, and long-term client protection.</p>
// // //           </div>

// // //           <div>
// // //             <p className="font-semibold">5. How can I schedule a consultation?</p>
// // //             <p className="text-gray-700">You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance.</p>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= FINAL CTA ================= */}
// // //       <section className="bg-black text-white py-28 px-6 text-center">
// // //         <h2 className="text-4xl font-serif mb-10">
// // //           Get Trusted Legal Guidance Today
// // //         </h2>

// // //         <div className="flex justify-center gap-6 flex-wrap">
// // //           <Link
// // //             href="/legal-consultation-in-bangalore"
// // //             className="bg-[#C9A24D] text-black px-10 py-4 font-semibold hover:scale-105 transition rounded-md shadow-lg"
// // //           >
// // //             Book Confidential Consultation
// // //           </Link>

// // //           <Link
// // //             href="/contact"
// // //             className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition rounded-md"
// // //           >
// // //             Request Call Back
// // //           </Link>
// // //         </div>

// // //         <p className="text-gray-400 text-sm mt-8">
// // //           All matters handled with complete confidentiality and legal discretion.
// // //         </p>
// // //       </section>

// // //       <Footer />
// // //     </>
// // //   );
// // // }



// // "use client";

// // import { motion } from "framer-motion";
// // import Link from "next/link";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // /* ================= SEO META ================= */

// // export const metadata = {
// //   title: "Leading Law Firm in Bangalore | S Jain & Attorneys",
// //   description:
// //     "S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters.",
// //   alternates: {
// //     canonical: "https://yourdomain.com/leading-law-firm-in-bangalore",
// //   },
// // };

// // /* ================= ANIMATION VARIANTS ================= */

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 60 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.8, ease: "easeOut" },
// //   },
// // };

// // const staggerContainer = {
// //   hidden: {},
// //   visible: {
// //     transition: {
// //       staggerChildren: 0.15,
// //     },
// //   },
// // };

// // export default function LeadingLawFirmPage() {
// //   return (
// //     <>
// //       <Navbar />

// //       {/* ================= HERO SECTION ================= */}
// //       <section className="relative bg-gradient-to-br from-black via-[#111] to-black text-[#C9A24D] py-36 px-6 overflow-hidden">
// //         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_50%)]"></div>

// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={staggerContainer}
// //           className="relative max-w-6xl mx-auto text-center"
// //         >
// //           <motion.h1
// //             variants={fadeUp}
// //             className="text-4xl md:text-6xl font-serif font-semibold leading-tight"
// //           >
// //             Leading Law Firm in Bangalore – About S Jain & Attorneys
// //           </motion.h1>

// //           <motion.p
// //             variants={fadeUp}
// //             className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed"
// //           >
// //             A leading law firm in Bangalore providing full-service legal
// //             representation across litigation, advisory, and regulatory matters.
// //           </motion.p>
// //         </motion.div>
// //       </section>

// //       {/* ================= ABOUT SECTION ================= */}
// //       <section className="py-32 px-6 bg-white">
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={staggerContainer}
// //           className="max-w-5xl mx-auto"
// //         >
// //           <motion.h2
// //             variants={fadeUp}
// //             className="text-4xl font-serif mb-10 text-black"
// //           >
// //             About Our Firm
// //           </motion.h2>

// //           <motion.div variants={fadeUp} className="space-y-6 text-gray-700 leading-relaxed text-lg">
// //             <p>
// //               S Jain & Attorneys is recognised as a leading law firm in Bangalore,
// //               delivering strategic and result-oriented legal representation.
// //             </p>
// //             <p>
// //               With a team of experienced attorneys and dedicated legal experts,
// //               we provide structured legal counsel and courtroom advocacy.
// //             </p>
// //             <p>
// //               Our firm advises across corporate, civil, criminal, family,
// //               regulatory, and cross-border matters.
// //             </p>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* ================= WHY CHOOSE US ================= */}
// //       <section className="bg-gray-50 py-32 px-6">
// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={staggerContainer}
// //           className="max-w-5xl mx-auto"
// //         >
// //           <motion.h2
// //             variants={fadeUp}
// //             className="text-4xl font-serif mb-12 text-black"
// //           >
// //             Why Choose Our Legal Team
// //           </motion.h2>

// //           <motion.ul
// //             variants={staggerContainer}
// //             className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg"
// //           >
// //             {[
// //               "Over a decade of legal practice",
// //               "Trusted group of legal experts",
// //               "Strategic, personalized solutions",
// //               "Corporate legal advisory services",
// //               "Strong courtroom advocacy",
// //               "Transparent communication",
// //             ].map((item, index) => (
// //               <motion.li
// //                 key={index}
// //                 variants={fadeUp}
// //                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
// //               >
// //                 ✓ {item}
// //               </motion.li>
// //             ))}
// //           </motion.ul>

// //           <motion.p
// //             variants={fadeUp}
// //             className="text-[#C9A24D] font-semibold mt-12 text-lg"
// //           >
// //             Response within 24 hours guaranteed.
// //           </motion.p>

// //           <motion.div
// //             variants={fadeUp}
// //             className="flex flex-wrap gap-6 mt-10"
// //           >
// //             <Link
// //               href="/legal-consultation-in-bangalore"
// //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold hover:scale-105 transition rounded-md shadow-lg"
// //             >
// //               Book Confidential Consultation
// //             </Link>

// //             <Link
// //               href="/contact"
// //               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition rounded-md"
// //             >
// //               Request Call Back
// //             </Link>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* ================= FINAL CTA ================= */}
// //       <section className="bg-black text-white py-32 px-6 text-center relative overflow-hidden">
// //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_#C9A24D,_transparent_60%)]"></div>

// //         <motion.div
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           variants={staggerContainer}
// //           className="relative"
// //         >
// //           <motion.h2
// //             variants={fadeUp}
// //             className="text-4xl font-serif mb-10"
// //           >
// //             Get Trusted Legal Guidance Today
// //           </motion.h2>

// //           <motion.div
// //             variants={fadeUp}
// //             className="flex justify-center gap-6 flex-wrap"
// //           >
// //             <Link
// //               href="/legal-consultation-in-bangalore"
// //               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold hover:scale-105 transition rounded-md shadow-lg"
// //             >
// //               Book Confidential Consultation
// //             </Link>

// //             <Link
// //               href="/contact"
// //               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition rounded-md"
// //             >
// //               Request Call Back
// //             </Link>
// //           </motion.div>

// //           <motion.p
// //             variants={fadeUp}
// //             className="text-gray-400 text-sm mt-8"
// //           >
// //             All matters handled with complete confidentiality and legal discretion.
// //           </motion.p>
// //         </motion.div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// /* ================= ANIMATION ================= */

// const fadeUp = {
//   hidden: { opacity: 0, y: 60 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.15 },
//   },
// };

// export default function LeadingLawFirmPage() {
//   return (
//     <>
//       <Navbar />

//       {/* ================= HERO ================= */}
//       <section className="relative bg-gradient-to-br from-black via-[#111] to-black text-[#C9A24D] py-36 px-6">
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={stagger}
//           className="max-w-6xl mx-auto text-center"
//         >
//           <motion.h1
//             variants={fadeUp}
//             className="text-4xl md:text-6xl font-serif font-semibold leading-tight"
//           >
//             Leading Law Firm in Bangalore – About S Jain & Attorneys
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed"
//           >
//             A leading law firm in Bangalore providing full-service legal
//             representation across litigation, advisory, and regulatory matters.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section className="py-28 px-6 bg-white">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="max-w-5xl mx-auto"
//         >
//           <h2 className="text-4xl font-serif mb-8 text-black">
//             About Our Firm
//           </h2>

//           <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
//             <p>
//               S Jain & Attorneys is recognised as a leading law firm in Bangalore,
//               delivering strategic and result-oriented legal representation for
//               individuals, businesses, startups, multinational companies, and NRIs.
//             </p>

//             <p>
//               With a team of experienced attorneys and dedicated legal experts,
//               we provide structured legal counsel and courtroom advocacy that
//               protects your rights, business interests, and long-term objectives.
//             </p>

//             <p>
//               Our firm advises across corporate, civil, criminal, family,
//               regulatory, and cross-border matters. As trusted corporate legal
//               advisors, lawyers, and advocates, we combine legal depth with
//               practical insight to guide clients confidently through complex legal environments.
//             </p>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="bg-gray-50 py-28 px-6">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl font-serif mb-12 text-black">
//             Why Choose Our Legal Team
//           </h2>

//           <ul className="grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
//             {[
//               "Over a decade of legal practice by experienced attorneys in Bangalore",
//               "A trusted group of legal experts committed to ethical advocacy",
//               "Strategic, personalized legal solutions tailored to each matter",
//               "Corporate legal advisory services for business clients",
//               "Lawyers and advocates with courtroom experience across multiple jurisdictions",
//               "Transparent communication and structured case strategy",
//             ].map((item, index) => (
//               <li
//                 key={index}
//                 className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
//               >
//                 ✓ {item}
//               </li>
//             ))}
//           </ul>

//           <p className="text-[#C9A24D] font-semibold mt-10 text-lg">
//             Response within 24 hours guaranteed.
//           </p>

//           <div className="flex flex-wrap gap-6 mt-10">
//             <Link
//               href="/legal-consultation-in-bangalore"
//               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-md shadow-lg hover:scale-105 transition"
//             >
//               Book Confidential Consultation
//             </Link>

//             <Link
//               href="/contact"
//               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition"
//             >
//               Request Call Back
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================= FOUNDER ================= */}
//       <section className="py-28 px-6 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl font-serif mb-8 text-black">
//             Our Founder
//           </h2>

//           <h3 className="text-2xl text-[#C9A24D] font-semibold mb-6">
//             S Jain – Principal Attorney
//           </h3>

//           <p className="text-gray-700 leading-relaxed text-lg">
//             S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive
//             legal experience in representing clients before courts, tribunals,
//             and regulatory authorities. As a respected advocate and legal strategist,
//             S Jain blends practical understanding with deep legal insight to deliver
//             structured, results-oriented counsel across litigation and advisory matters.
//             Committed to professionalism and precision, each case is handled with clarity,
//             discretion, and a client-first approach focused on achieving measurable legal outcomes.
//           </p>
//         </div>
//       </section>

//       {/* ================= CORE VALUES ================= */}
//       <section className="bg-gray-50 py-28 px-6">
//         <div className="max-w-5xl mx-auto space-y-10">
//           <h2 className="text-4xl font-serif text-black">
//             Our Core Values & Approach
//           </h2>

//           {[
//             ["Integrity", "We uphold honesty, discretion, and transparency in every legal engagement."],
//             ["Client-Centric Advocacy", "Clear communication and personalized legal strategy remain central to our practice."],
//             ["Commitment to Excellence", "Delivering premium legal services led by experienced attorneys."],
//             ["Strategic Legal Expertise", "Practical, business-oriented, and results-driven legal counsel."],
//             ["Our Approach", "We provide understandable, structured legal guidance at every stage — prioritizing your objectives, protecting your rights, and securing long-term outcomes."]
//           ].map(([title, desc], i) => (
//             <div key={i}>
//               <h3 className="text-[#C9A24D] font-semibold text-xl">{title}</h3>
//               <p className="text-gray-700 mt-2">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= LEGAL EXPERTISE ================= */}
//       <section className="bg-white py-28 px-6">
//         <div className="max-w-5xl mx-auto space-y-8">
//           <h2 className="text-4xl font-serif text-black">
//             Our Legal Expertise
//           </h2>

//           {[
//             ["1. Corporate & Commercial Law", "Corporate advisory, regulatory compliance, contracts, and business strategy."],
//             ["2. Civil & Property Litigation", "Civil disputes, property and real estate matters, and contractual claims."],
//             ["3. Criminal Defense & Prosecution", "Representation before sessions courts, magistrate courts, and appellate forums."],
//             ["4. Family & Divorce Law", "Divorce, matrimonial property and financial settlements, custody, and mediation."],
//             ["5. Employment & Labour Law", "Labour court representation, wrongful termination, and HR compliance advisory."],
//             ["6. Consumer Protection & Appellate Practice", "Consumer disputes, High Court matters, and complex litigation cases."],
//             ["7. Cross-Border & NRI Legal Services", "NRI property matters, international disputes, and private international law advisory."]
//           ].map(([title, desc], i) => (
//             <div key={i}>
//               <h3 className="font-semibold text-lg">{title}</h3>
//               <p className="text-gray-700">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= FAQ ================= */}
//       <section className="bg-gray-50 py-28 px-6">
//         <div className="max-w-5xl mx-auto space-y-6">
//           <h2 className="text-4xl font-serif text-black">
//             Frequently Asked Questions (FAQs)
//           </h2>

//           {[
//             ["Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
//               "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas."],
//             ["What areas of law does your firm specialize in?",
//               "We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters."],
//             ["Who leads S Jain & Attorneys?",
//               "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals."],
//             ["What makes your legal team different from other law firms in Bangalore?",
//               "We combine legal expertise with practical insight. Our focus remains on transparency, tailored legal strategies, and long-term client protection."],
//             ["How can I schedule a consultation with your firm?",
//               "You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance."]
//           ].map(([q, a], i) => (
//             <div key={i}>
//               <p className="font-semibold">{i + 1}. {q}</p>
//               <p className="text-gray-700">{a}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= FINAL CTA ================= */}
//       <section className="bg-black text-white py-28 px-6 text-center">
//         <h2 className="text-4xl font-serif mb-10">
//           Get Trusted Legal Guidance Today
//         </h2>

//         <div className="flex justify-center gap-6 flex-wrap">
//           <Link
//             href="/legal-consultation-in-bangalore"
//             className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-md shadow-lg hover:scale-105 transition"
//           >
//             Book Confidential Consultation
//           </Link>

//           <Link
//             href="/contact"
//             className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition"
//           >
//             Request Call Back
//           </Link>
//         </div>

//         <p className="text-gray-400 text-sm mt-8">
//           All matters handled with complete confidentiality and legal discretion.
//         </p>
//       </section>

//       <Footer />
//     </>
//   );
// }


// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Head from "next/head";

// /* ================= ANIMATION ================= */

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const stagger = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.15 },
//   },
// };

// export default function LeadingLawFirmPage() {
//   return (
//     <>
//       <Head>
//         <title>Leading Law Firm in Bangalore | S Jain & Attorneys</title>
//         <meta
//           name="description"
//           content="S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters."
//         />
//         <link rel="canonical" href="https://yourdomain.com/leading-law-firm-in-bangalore" />
//       </Head>

//       <Navbar />

//       {/* ================= HERO ================= */}
//       <section className="relative bg-black text-white py-40 px-6 overflow-hidden">
//         <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_50%)] animate-pulse"></div>

//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={stagger}
//           className="relative max-w-6xl mx-auto text-center"
//         >
//           <motion.h1
//             variants={fadeUp}
//             className="text-4xl md:text-6xl font-serif font-semibold leading-tight text-[#C9A24D]"
//           >
//             Leading Law Firm in Bangalore – About S Jain & Attorneys
//           </motion.h1>

//           <motion.div
//             variants={fadeUp}
//             className="w-24 h-[3px] bg-[#C9A24D] mx-auto my-8"
//           ></motion.div>

//           <motion.p
//             variants={fadeUp}
//             className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
//           >
//             A leading law firm in Bangalore providing full-service legal
//             representation across litigation, advisory, and regulatory matters.
//           </motion.p>
//         </motion.div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section className="py-32 px-6 bg-white">
//         <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
//           <h2 className="text-4xl font-serif text-black mb-6">
//             About Our Firm
//           </h2>

//           <p>
//             S Jain & Attorneys is recognised as a leading law firm in Bangalore,
//             delivering strategic and result-oriented legal representation for
//             individuals, businesses, startups, multinational companies, and NRIs.
//           </p>

//           <p>
//             With a team of experienced attorneys and dedicated legal experts,
//             we provide structured legal counsel and courtroom advocacy that protects
//             your rights, business interests, and long-term objectives.
//           </p>

//           <p>
//             Our firm advises across corporate, civil, criminal, family, regulatory,
//             and cross-border matters. As trusted corporate legal advisors,
//             lawyers, and advocates, we combine legal depth with practical insight
//             to guide clients confidently through complex legal environments.
//           </p>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="bg-gradient-to-br from-gray-50 to-white py-32 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-black mb-14 text-center">
//             Why Choose Our Legal Team
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               "Over a decade of legal practice by experienced attorneys in Bangalore",
//               "Trusted legal experts committed to ethical advocacy",
//               "Strategic, personalized legal solutions tailored to each matter",
//               "Corporate legal advisory services for business clients",
//               "Lawyers and advocates with courtroom experience",
//               "Transparent communication and structured case strategy",
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition border"
//               >
//                 <p className="text-gray-800 text-lg font-medium">✓ {item}</p>
//               </div>
//             ))}
//           </div>

//           <p className="text-center text-[#C9A24D] font-semibold mt-12 text-lg">
//             Response within 24 hours guaranteed.
//           </p>

//           <div className="flex justify-center gap-6 mt-10 flex-wrap">
//             <Link
//               href="/legal-consultation-in-bangalore"
//               className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-lg shadow-lg hover:scale-105 transition"
//             >
//               Book Confidential Consultation
//             </Link>

//             <Link
//               href="/contact"
//               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold rounded-lg hover:bg-[#C9A24D] hover:text-black transition"
//             >
//               Request Call Back
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ================= FOUNDER ================= */}
//       <section className="py-32 px-6 bg-white">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-4xl font-serif text-black mb-8">Our Founder</h2>
//           <h3 className="text-2xl font-semibold mb-6 text-[#C9A24D]">
//             S Jain – Principal Attorney
//           </h3>

//           <p className="text-gray-700 text-lg leading-relaxed">
//             S Jain brings extensive legal experience representing clients
//             before courts, tribunals, and regulatory authorities.
//             As a respected advocate and legal strategist, he blends
//             practical understanding with deep legal insight to deliver
//             structured, results-oriented counsel across litigation and advisory matters.
//           </p>
//         </div>
//       </section>

//       {/* ================= LEGAL EXPERTISE ================= */}
//       <section className="bg-black text-white py-32 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-serif text-[#C9A24D] mb-14 text-center">
//             Our Legal Expertise
//           </h2>

//           <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-300">
//             <div>1. Corporate & Commercial Law</div>
//             <div>2. Civil & Property Litigation</div>
//             <div>3. Criminal Defense & Prosecution</div>
//             <div>4. Family & Divorce Law</div>
//             <div>5. Employment & Labour Law</div>
//             <div>6. Consumer Protection & Appellate Practice</div>
//             <div>7. Cross-Border & NRI Legal Services</div>
//           </div>
//         </div>
//       </section>

//       {/* ================= FAQ ================= */}
//       <section className="py-32 px-6 bg-white">
//         <div className="max-w-5xl mx-auto space-y-8">
//           <h2 className="text-4xl font-serif text-black mb-10">
//             Frequently Asked Questions (FAQs)
//           </h2>

//           <div>
//             <h3 className="font-semibold text-xl">
//               Why is S Jain & Attorneys considered a leading law firm in Bangalore?
//             </h3>
//             <p className="text-gray-700 mt-2">
//               The firm is recognised for its strategic legal approach,
//               experienced attorneys, and commitment to delivering personalised,
//               results-oriented legal representation.
//             </p>
//           </div>

//           <div>
//             <h3 className="font-semibold text-xl">
//               What areas of law does your firm specialize in?
//             </h3>
//             <p className="text-gray-700 mt-2">
//               Corporate law, civil litigation, criminal law, family law,
//               employment law, property disputes, regulatory compliance,
//               and cross-border matters.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= FINAL CTA ================= */}
//       <section className="relative bg-black text-white py-32 px-6 text-center">
//         <h2 className="text-4xl font-serif mb-10 text-[#C9A24D]">
//           Get Trusted Legal Guidance Today
//         </h2>

//         <div className="flex justify-center gap-6 flex-wrap">
//           <Link
//             href="/legal-consultation-in-bangalore"
//             className="bg-[#C9A24D] text-black px-12 py-5 font-semibold rounded-lg shadow-xl hover:scale-110 transition"
//           >
//             Book Confidential Consultation
//           </Link>

//           <Link
//             href="/contact"
//             className="border border-[#C9A24D] text-[#C9A24D] px-12 py-5 font-semibold rounded-lg hover:bg-[#C9A24D] hover:text-black transition"
//           >
//             Request Call Back
//           </Link>
//         </div>

//         <p className="text-gray-400 text-sm mt-10">
//           All matters handled with complete confidentiality and legal discretion.
//         </p>
//       </section>

//       <Footer />
//     </>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function LeadingLawFirmPage() {
  return (
    <>
      <Head>
        <title>Leading Law Firm in Bangalore | S Jain & Attorneys</title>
        <meta
          name="description"
          content="S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters."
        />
        <link
          rel="canonical"
          href="https://yourdomain.com/leading-law-firm-in-bangalore"
        />
      </Head>

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative bg-black text-white py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_50%)] animate-pulse"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative max-w-6xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-serif font-semibold leading-tight text-[#C9A24D]"
          >
            Leading Law Firm in Bangalore – About S Jain & Attorneys
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="w-24 h-[3px] bg-[#C9A24D] mx-auto my-8"
          ></motion.div>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            A leading law firm in Bangalore providing full-service legal
            representation across litigation, advisory, and regulatory matters.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 text-lg leading-relaxed">
          <h2 className="text-4xl font-serif text-black mb-6">
            About Our Firm
          </h2>

          <p>
            S Jain & Attorneys is recognised as a leading law firm in Bangalore,
            delivering strategic and result-oriented legal representation for
            individuals, businesses, startups, multinational companies, and NRIs.
          </p>

          <p>
            With a team of experienced attorneys and dedicated legal experts,
            we provide structured legal counsel and courtroom advocacy that protects
            your rights, business interests, and long-term objectives.
          </p>

          <p>
            Our firm advises across corporate, civil, criminal, family, regulatory,
            and cross-border matters. As trusted corporate legal advisors,
            lawyers, and advocates, we combine legal depth with practical insight
            to guide clients confidently through complex legal environments.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-black mb-14 text-center">
            Why Choose Our Legal Team
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Over a decade of legal practice by experienced attorneys in Bangalore",
              "A trusted group of legal experts committed to ethical advocacy",
              "Strategic, personalized legal solutions tailored to each matter",
              "Corporate legal advisory services for business clients",
              "Lawyers and advocates with courtroom experience across multiple jurisdictions",
              "Transparent communication and structured case strategy",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition border"
              >
                <p className="text-gray-800 text-lg font-medium">✓ {item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-[#C9A24D] font-semibold mt-12 text-lg">
            Response within 24 hours guaranteed.
          </p>

          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            <Link
              href="/legal-consultation-in-bangalore"
              className="bg-[#C9A24D] text-black px-10 py-4 font-semibold rounded-lg shadow-lg hover:scale-105 transition"
            >
              Book Confidential Consultation
            </Link>

            <Link
              href="/contact"
              className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold rounded-lg hover:bg-[#C9A24D] hover:text-black transition"
            >
              Request Call Back
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-4xl font-serif text-black">Our Founder</h2>

          <h3 className="text-2xl font-semibold text-[#C9A24D]">
            S Jain – Principal Attorney
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive
            legal experience in representing clients before courts, tribunals,
            and regulatory authorities.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            As a respected advocate and legal strategist, he blends practical
            understanding with deep legal insight to deliver structured,
            results-oriented counsel across litigation and advisory matters.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Committed to professionalism and precision, each case is handled with
            clarity, discretion, and a client-first approach focused on achieving
            measurable legal outcomes.
          </p>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="bg-gray-50 py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl font-serif text-black">
            Our Core Values & Approach
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <div>
              <h3 className="font-semibold text-xl">Integrity</h3>
              <p>We uphold honesty, discretion, and transparency in every legal engagement.</p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Client-Centric Advocacy</h3>
              <p>Clear communication and personalized legal strategy remain central to our practice.</p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Commitment to Excellence</h3>
              <p>Delivering premium legal services led by experienced attorneys.</p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Strategic Legal Expertise</h3>
              <p>Practical, business-oriented, and results-driven legal counsel.</p>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Our Approach</h3>
              <p>
                We provide understandable, structured legal guidance at every stage —
                prioritizing your objectives, protecting your rights, and securing long-term outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LEGAL EXPERTISE ================= */}
      <section className="bg-black text-white py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-[#C9A24D] mb-14 text-center">
            Our Legal Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-lg text-gray-300">
            <div>
              <h3 className="font-semibold text-white">1. Corporate & Commercial Law</h3>
              <p>Corporate advisory, regulatory compliance, contracts, and business strategy.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">2. Civil & Property Litigation</h3>
              <p>Civil disputes, property matters, real estate litigation, and contractual claims.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">3. Criminal Defense & Prosecution</h3>
              <p>Representation before sessions courts, magistrate courts, and appellate forums.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">4. Family & Divorce Law</h3>
              <p>Divorce, custody, financial settlements, mediation, and matrimonial disputes.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">5. Employment & Labour Law</h3>
              <p>Labour court representation, wrongful termination, and HR compliance advisory.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">6. Consumer Protection & Appellate Practice</h3>
              <p>Consumer disputes, High Court matters, and complex litigation cases.</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">7. Cross-Border & NRI Legal Services</h3>
              <p>NRI property matters, international disputes, and private international law advisory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl font-serif text-black">
            Frequently Asked Questions (FAQs)
          </h2>

          {[
            {
              q: "Why is S Jain & Attorneys considered a leading law firm in Bangalore?",
              a: "The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.",
            },
            {
              q: "What areas of law does your firm specialize in?",
              a: "We provide representation in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.",
            },
            {
              q: "Who leads S Jain & Attorneys?",
              a: "The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation and strategic representation.",
            },
            {
              q: "What makes your legal team different?",
              a: "We combine legal expertise with practical insight, focusing on transparency, tailored legal strategies, and long-term client protection.",
            },
            {
              q: "How can I schedule a consultation?",
              a: "You can schedule a confidential consultation through our website or contact our office directly.",
            },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="font-semibold text-xl">{item.q}</h3>
              <p className="text-gray-700 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative bg-black text-white py-32 px-6 text-center">
        <h2 className="text-4xl font-serif mb-10 text-[#C9A24D]">
          Get Trusted Legal Guidance Today
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/legal-consultation-in-bangalore"
            className="bg-[#C9A24D] text-black px-12 py-5 font-semibold rounded-lg shadow-xl hover:scale-110 transition"
          >
            Book Confidential Consultation
          </Link>

          <Link
            href="/contact"
            className="border border-[#C9A24D] text-[#C9A24D] px-12 py-5 font-semibold rounded-lg hover:bg-[#C9A24D] hover:text-black transition"
          >
            Request Call Back
          </Link>
        </div>

        <p className="text-gray-400 text-sm mt-10">
          All matters handled with complete confidentiality and legal discretion.
        </p>
      </section>

      <Footer />
    </>
  );
}