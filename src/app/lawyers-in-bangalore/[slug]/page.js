// // // // // // // // "use client";

// // // // // // // // import Image from "next/image";
// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // import Footer from "@/app/components/Footer";
// // // // // // // // // import Navbar from "@/app/components/Navbar";
// // // // // // // // import Footer from "../../../app/components/Footer";
// // // // // // // // import Navbar from "../../../app/components/Navbar";
// // // // // // // // import Head from "next/head";

// // // // // // // // export default function Page() {

// // // // // // // //   const fadeUp = {
// // // // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// // // // // // // //   };

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

// // // // // // // //       <section className="relative w-full h-[40vh] flex items-center justify-center">
// // // // // // // //         <Image
// // // // // // // //           src="/laws2.jpg"
// // // // // // // //           alt="Leading Law Firm in Bangalore"
// // // // // // // //           fill
// // // // // // // //           className="object-cover"
// // // // // // // //           priority
// // // // // // // //         />
// // // // // // // //         <div className="absolute inset-0 bg-black/70"></div>

// // // // // // // //         <motion.h1
// // // // // // // //           variants={fadeUp}
// // // // // // // //           initial="hidden"
// // // // // // // //           animate="visible"
// // // // // // // //           className="relative z-10 text-3xl md:text-5xl font-semibold text-[#C9A24D] text-center px-4"
// // // // // // // //         >
// // // // // // // //           Leading Law Firm in Bangalore – About S Jain & Attorneys
// // // // // // // //         </motion.h1>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= INTRO ================= */}

// // // // // // // //       <section className="py-16 px-6 bg-white">
// // // // // // // //         <div className="max-w-6xl mx-auto text-center">
// // // // // // // //           <p className="text-lg text-gray-700 leading-relaxed">
// // // // // // // //             A leading law firm in Bangalore providing full-service legal representation 
// // // // // // // //             across litigation, advisory, and regulatory matters.
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= ABOUT OUR FIRM ================= */}

// // // // // // // //       <section className="py-20 px-6 bg-[#f7f7f7]">
// // // // // // // //         <div className="max-w-6xl mx-auto">

// // // // // // // //           <h2 className="text-3xl font-semibold mb-8">
// // // // // // // //             About Our Firm
// // // // // // // //           </h2>

// // // // // // // //           <p className="mb-6 text-gray-700 leading-relaxed">
// // // // // // // //             S Jain & Attorneys is recognised as a leading law firm in Bangalore, 
// // // // // // // //             delivering strategic and result-oriented legal representation for individuals, 
// // // // // // // //             businesses, startups, multinational companies, and NRIs.
// // // // // // // //           </p>

// // // // // // // //           <p className="mb-6 text-gray-700 leading-relaxed">
// // // // // // // //             With a team of experienced attorneys and dedicated legal experts, we provide 
// // // // // // // //             structured legal counsel and courtroom advocacy that protects your rights, 
// // // // // // // //             business interests, and long-term objectives.
// // // // // // // //           </p>

// // // // // // // //           <p className="text-gray-700 leading-relaxed">
// // // // // // // //             Our firm advises across corporate, civil, criminal, family, regulatory, 
// // // // // // // //             and cross-border matters. As trusted corporate legal advisors, lawyers, 
// // // // // // // //             and advocates, we combine legal depth with practical insight to guide 
// // // // // // // //             clients confidently through complex legal environments.
// // // // // // // //           </p>

// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= WHY CHOOSE US ================= */}

// // // // // // // //       <section className="py-20 px-6 bg-white">
// // // // // // // //         <div className="max-w-6xl mx-auto">

// // // // // // // //           <h2 className="text-3xl font-semibold mb-8">
// // // // // // // //             Why Choose Our Legal Team
// // // // // // // //           </h2>

// // // // // // // //           <ul className="space-y-4 text-gray-700">
// // // // // // // //             <li>✓ Over a decade of legal practice by experienced attorneys in Bangalore</li>
// // // // // // // //             <li>✓ A trusted group of legal experts committed to ethical advocacy</li>
// // // // // // // //             <li>✓ Strategic, personalized legal solutions tailored to each matter</li>
// // // // // // // //             <li>✓ Corporate legal advisory services for business clients</li>
// // // // // // // //             <li>✓ Lawyers and advocates with courtroom experience across multiple jurisdictions</li>
// // // // // // // //             <li>✓ Transparent communication and structured case strategy</li>
// // // // // // // //           </ul>

// // // // // // // //           <p className="mt-6 font-semibold">Response within 24 hours guaranteed.</p>

// // // // // // // //           <div className="mt-8 flex flex-wrap gap-4">
// // // // // // // //             <button className="bg-black text-[#C9A24D] px-6 py-3 border border-[#C9A24D]">
// // // // // // // //               Book Confidential Consultation
// // // // // // // //             </button>
// // // // // // // //             <button className="bg-[#C9A24D] text-black px-6 py-3">
// // // // // // // //               Request Call Back
// // // // // // // //             </button>
// // // // // // // //           </div>

// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= FOUNDER ================= */}

// // // // // // // //       <section className="py-20 px-6 bg-[#f7f7f7]">
// // // // // // // //         <div className="max-w-6xl mx-auto">

// // // // // // // //           <h2 className="text-3xl font-semibold mb-8">Our Founder</h2>

// // // // // // // //           <h3 className="text-xl font-semibold mb-4">
// // // // // // // //             S Jain – Principal Attorney
// // // // // // // //           </h3>

// // // // // // // //           <p className="mb-6 text-gray-700 leading-relaxed">
// // // // // // // //             S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive 
// // // // // // // //             legal experience in representing clients before courts, tribunals, 
// // // // // // // //             and regulatory authorities.
// // // // // // // //           </p>

// // // // // // // //           <p className="text-gray-700 leading-relaxed">
// // // // // // // //             Committed to professionalism and precision, each case is handled with clarity, 
// // // // // // // //             discretion, and a client-first approach focused on achieving measurable legal outcomes.
// // // // // // // //           </p>

// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= LEGAL EXPERTISE ================= */}

// // // // // // // //       <section className="py-20 px-6 bg-white">
// // // // // // // //         <div className="max-w-6xl mx-auto">

// // // // // // // //           <h2 className="text-3xl font-semibold mb-8">Our Legal Expertise</h2>

// // // // // // // //           <div className="space-y-6 text-gray-700">

// // // // // // // //             <h3 className="font-semibold">1. Corporate & Commercial Law</h3>
// // // // // // // //             <p>Corporate advisory, regulatory compliance, contracts, and business strategy.</p>

// // // // // // // //             <h3 className="font-semibold">2. Civil & Property Litigation</h3>
// // // // // // // //             <p>Civil disputes, property and real estate matters, and contractual claims.</p>

// // // // // // // //             <h3 className="font-semibold">3. Criminal Defense & Prosecution</h3>
// // // // // // // //             <p>Representation before sessions courts, magistrate courts, and appellate forums.</p>

// // // // // // // //             <h3 className="font-semibold">4. Family & Divorce Law</h3>
// // // // // // // //             <p>Divorce, matrimonial property, custody, and mediation.</p>

// // // // // // // //             <h3 className="font-semibold">5. Employment & Labour Law</h3>
// // // // // // // //             <p>Labour court representation and HR compliance advisory.</p>

// // // // // // // //             <h3 className="font-semibold">6. Consumer Protection & Appellate Practice</h3>
// // // // // // // //             <p>Consumer disputes, High Court matters, and complex litigation cases.</p>

// // // // // // // //             <h3 className="font-semibold">7. Cross-Border & NRI Legal Services</h3>
// // // // // // // //             <p>NRI property matters and international disputes.</p>

// // // // // // // //           </div>

// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= FAQ ================= */}

// // // // // // // //       <section className="py-20 px-6 bg-[#f7f7f7]">
// // // // // // // //         <div className="max-w-6xl mx-auto">

// // // // // // // //           <h2 className="text-3xl font-semibold mb-8">
// // // // // // // //             Frequently Asked Questions (FAQs)
// // // // // // // //           </h2>

// // // // // // // //           <div className="space-y-6 text-gray-700">

// // // // // // // //             <div>
// // // // // // // //               <h3 className="font-semibold">
// // // // // // // //                 Why is S Jain & Attorneys considered a leading law firm in Bangalore?
// // // // // // // //               </h3>
// // // // // // // //               <p>The firm is recognised for its strategic legal approach and experienced attorneys across multiple practice areas.</p>
// // // // // // // //             </div>

// // // // // // // //             <div>
// // // // // // // //               <h3 className="font-semibold">
// // // // // // // //                 What areas of law does your firm specialize in?
// // // // // // // //               </h3>
// // // // // // // //               <p>Corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.</p>
// // // // // // // //             </div>

// // // // // // // //             <div>
// // // // // // // //               <h3 className="font-semibold">
// // // // // // // //                 Who leads S Jain & Attorneys?
// // // // // // // //               </h3>
// // // // // // // //               <p>The firm is led by S Jain, Principal Attorney, with extensive litigation and advisory experience.</p>
// // // // // // // //             </div>

// // // // // // // //             <div>
// // // // // // // //               <h3 className="font-semibold">
// // // // // // // //                 How can I schedule a consultation?
// // // // // // // //               </h3>
// // // // // // // //               <p>You can schedule a confidential consultation through our website or contact our office directly.</p>
// // // // // // // //             </div>

// // // // // // // //           </div>

// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= FINAL CTA ================= */}

// // // // // // // //       <section className="py-20 px-6 bg-black text-center text-white">
// // // // // // // //         <h2 className="text-3xl font-semibold mb-6">
// // // // // // // //           Get Trusted Legal Guidance Today
// // // // // // // //         </h2>

// // // // // // // //         <div className="flex justify-center gap-6 flex-wrap">
// // // // // // // //           <button className="bg-[#C9A24D] text-black px-6 py-3">
// // // // // // // //             Book Confidential Consultation
// // // // // // // //           </button>
// // // // // // // //           <button className="border border-[#C9A24D] px-6 py-3 text-[#C9A24D]">
// // // // // // // //             Request Call Back
// // // // // // // //           </button>
// // // // // // // //         </div>

// // // // // // // //         <p className="mt-8 text-sm text-gray-400">
// // // // // // // //           All matters handled with complete confidentiality and legal discretion.
// // // // // // // //         </p>
// // // // // // // //       </section>

// // // // // // // //       <Footer />
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import Link from "next/link";
// // // // // // // import Navbar from "../../components/Navbar";
// // // // // // // import Footer from "../../components/Footer";

// // // // // // // export default function LawyerProfile({ params }) {
// // // // // // //   const name = params.slug.replace("-", " ");

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Navbar />

// // // // // // //       <section className="bg-white py-24 px-6">
// // // // // // //         <div className="max-w-4xl mx-auto">

// // // // // // //           <h1 className="text-4xl font-serif capitalize">{name}</h1>
// // // // // // //           <p className="text-[#C9A24D] mt-2 font-medium">Senior Advocate / Managing Partner</p>

// // // // // // //           <h2 className="text-2xl font-serif mt-12">Professional Overview</h2>
// // // // // // //           <p className="mt-4 text-gray-700 leading-relaxed">
// // // // // // //             {name} is among the experienced advocates in Bangalore, with extensive expertise in litigation, corporate advisory, and dispute resolution. With significant courtroom experience, he/she has represented clients before the High Court, District Courts, and various tribunals.
// // // // // // //           </p>

// // // // // // //           <h2 className="text-2xl font-serif mt-12">Practice Areas</h2>
// // // // // // //           <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
// // // // // // //             <li>Corporate & Commercial Law</li>
// // // // // // //             <li>Civil Litigation</li>
// // // // // // //             <li>Criminal Defense & Prosecution</li>
// // // // // // //             <li>Property & Real Estate Law</li>
// // // // // // //             <li>Family & Divorce Law</li>
// // // // // // //             <li>Employment & Labour Law</li>
// // // // // // //             <li>Consumer Protection & Regulatory Matters</li>
// // // // // // //           </ul>

// // // // // // //           <h2 className="text-2xl font-serif mt-12">Experience & Qualifications</h2>
// // // // // // //           <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
// // // // // // //             <li>Enrolled with the Bar Council</li>
// // // // // // //             <li>Appearances before High Court & Trial Courts</li>
// // // // // // //             <li>Advisory services for startups and corporate clients</li>
// // // // // // //             <li>Regulatory compliance and strategic litigation representation</li>
// // // // // // //           </ul>

// // // // // // //           <h2 className="text-2xl font-serif mt-12">Professional Approach</h2>
// // // // // // //           <p className="mt-4 text-gray-700 leading-relaxed">
// // // // // // //             As one of the dedicated lawyers in Bangalore, {name} focuses on structured case preparation, risk assessment, and strategic legal planning. Clear communication, legal precision, and client-centric advocacy remain central to every matter handled.
// // // // // // //           </p>

// // // // // // //           <div className="mt-12 flex gap-6 flex-wrap">
// // // // // // //             <Link href="/legal-consultation-in-bangalore" className="bg-[#C9A24D] text-black px-8 py-3 font-semibold">
// // // // // // //               Book Confidential Consultation
// // // // // // //             </Link>
// // // // // // //             <Link href="/contact" className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // // // // //               Request Call Back
// // // // // // //             </Link>
// // // // // // //           </div>

// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       <Footer />
// // // // // // //     </>
// // // // // // //   );


// // // // // // // }


// // // // // // import Link from "next/link";
// // // // // // import Navbar from "../../components/Navbar";
// // // // // // import Footer from "../../components/Footer";

// // // // // // /* ================= STATIC PARAMS (Required for Static Export) ================= */

// // // // // // export function generateStaticParams() {
// // // // // //   return [
// // // // // //     { slug: "s-jain" },
// // // // // //     { slug: "a-mehta" },
// // // // // //     { slug: "r-verma" },
// // // // // //   ];
// // // // // // }

// // // // // // /* ================= PAGE ================= */

// // // // // // export default function LawyerProfile({ params }) {
// // // // // //   const formattedName = params.slug
// // // // // //     .split("-")
// // // // // //     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// // // // // //     .join(" ");

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Navbar />

// // // // // //       <section className="bg-white py-24 px-6">
// // // // // //         <div className="max-w-4xl mx-auto">

// // // // // //           <h1 className="text-4xl font-serif">
// // // // // //             {formattedName}
// // // // // //           </h1>

// // // // // //           <p className="text-[#C9A24D] mt-2 font-medium">
// // // // // //             Senior Advocate / Managing Partner
// // // // // //           </p>

// // // // // //           {/* ================= Professional Overview ================= */}

// // // // // //           <h2 className="text-2xl font-serif mt-12">
// // // // // //             Professional Overview
// // // // // //           </h2>

// // // // // //           <p className="mt-4 text-gray-700 leading-relaxed">
// // // // // //             {formattedName} is among the experienced advocates in Bangalore, with extensive expertise in litigation, corporate advisory, and dispute resolution. With significant courtroom experience, he/she has represented clients before the High Court, District Courts, and various tribunals.
// // // // // //           </p>

// // // // // //           {/* ================= Practice Areas ================= */}

// // // // // //           <h2 className="text-2xl font-serif mt-12">
// // // // // //             Practice Areas
// // // // // //           </h2>

// // // // // //           <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
// // // // // //             <li>Corporate & Commercial Law</li>
// // // // // //             <li>Civil Litigation</li>
// // // // // //             <li>Criminal Defense & Prosecution</li>
// // // // // //             <li>Property & Real Estate Law</li>
// // // // // //             <li>Family & Divorce Law</li>
// // // // // //             <li>Employment & Labour Law</li>
// // // // // //             <li>Consumer Protection & Regulatory Matters</li>
// // // // // //           </ul>

// // // // // //           {/* ================= Experience & Qualifications ================= */}

// // // // // //           <h2 className="text-2xl font-serif mt-12">
// // // // // //             Experience & Qualifications
// // // // // //           </h2>

// // // // // //           <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
// // // // // //             <li>Enrolled with the Bar Council</li>
// // // // // //             <li>Appearances before High Court & Trial Courts</li>
// // // // // //             <li>Advisory services for startups and corporate clients</li>
// // // // // //             <li>Regulatory compliance and strategic litigation representation</li>
// // // // // //           </ul>

// // // // // //           {/* ================= Professional Approach ================= */}

// // // // // //           <h2 className="text-2xl font-serif mt-12">
// // // // // //             Professional Approach
// // // // // //           </h2>

// // // // // //           <p className="mt-4 text-gray-700 leading-relaxed">
// // // // // //             As one of the dedicated lawyers in Bangalore, {formattedName} focuses on structured case preparation, risk assessment, and strategic legal planning. Clear communication, legal precision, and client-centric advocacy remain central to every matter handled.
// // // // // //           </p>

// // // // // //           {/* ================= CTA ================= */}

// // // // // //           <div className="mt-12 flex gap-6 flex-wrap">
// // // // // //             <Link
// // // // // //               href="/legal-consultation-in-bangalore"
// // // // // //               className="bg-[#C9A24D] text-black px-8 py-3 font-semibold"
// // // // // //             >
// // // // // //               Book Confidential Consultation
// // // // // //             </Link>

// // // // // //             <Link
// // // // // //               href="/contact"
// // // // // //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// // // // // //             >
// // // // // //               Request Call Back
// // // // // //             </Link>
// // // // // //           </div>

// // // // // //         </div>
// // // // // //       </section>

// // // // // //       <Footer />
// // // // // //     </>
// // // // // //   );
// // // // // // }


// // // // // import { notFound } from "next/navigation";

// // // // // /* ============================
// // // // //    STATIC DATA (Lawyers List)
// // // // // ============================ */



// // // // // const lawyers = [
// // // // //   {
// // // // //     slug: "criminal-lawyer-bangalore",
// // // // //     name: "Criminal Lawyer in Bangalore",
// // // // //     description:
// // // // //       "Experienced criminal lawyer handling bail, anticipatory bail, trial defence, and high court matters.",
// // // // //   },
// // // // //   {
// // // // //     slug: "divorce-lawyer-bangalore",
// // // // //     name: "Divorce Lawyer in Bangalore",
// // // // //     description:
// // // // //       "Expert divorce lawyer handling mutual divorce, contested divorce, child custody, and alimony cases.",
// // // // //   },
// // // // //   {
// // // // //     slug: "civil-lawyer-bangalore",
// // // // //     name: "Civil Lawyer in Bangalore",
// // // // //     description:
// // // // //       "Professional civil lawyer dealing with property disputes, recovery suits, injunctions, and contracts.",
// // // // //   },
// // // // // ];

// // // // // /* ============================
// // // // //    REQUIRED for output: "export"
// // // // // ============================ */


// // // // // export async function generateStaticParams() {
// // // // //   return [
// // // // //     { slug: "criminal-lawyer-bangalore" },
// // // // //     { slug: "divorce-lawyer-bangalore" },
// // // // //   ];
// // // // // }

// // // // // /* ============================
// // // // //    SEO Metadata (Dynamic)
// // // // // ============================ */

// // // // // export async function generateMetadata({ params }) {
// // // // //   const lawyer = lawyers.find((l) => l.slug === params.slug);

// // // // //   if (!lawyer) {
// // // // //     return {
// // // // //       title: "Lawyer Not Found",
// // // // //     };
// // // // //   }

// // // // //   return {
// // // // //     title: lawyer.name,
// // // // //     description: lawyer.description,
// // // // //   };
// // // // // }

// // // // // /* ============================
// // // // //    PAGE COMPONENT
// // // // // ============================ */

// // // // // export default function LawyerProfile({ params }) {
// // // // //   const lawyer = lawyers.find((l) => l.slug === params.slug);

// // // // //   if (!lawyer) {
// // // // //     notFound();
// // // // //   }

// // // // //   return (
// // // // //     <section className="max-w-5xl mx-auto px-6 py-20">
// // // // //       <h1 className="text-4xl font-bold mb-6">
// // // // //         {lawyer.name}
// // // // //       </h1>

// // // // //       <p className="text-lg text-gray-600 mb-8">
// // // // //         {lawyer.description}
// // // // //       </p>

// // // // //       <div className="bg-gray-100 p-8 rounded-xl">
// // // // //         <h2 className="text-2xl font-semibold mb-4">
// // // // //           Why Choose Us?
// // // // //         </h2>

// // // // //         <ul className="space-y-3 text-gray-700">
// // // // //           <li>✔ 10+ Years of Experience</li>
// // // // //           <li>✔ High Court & Trial Court Expertise</li>
// // // // //           <li>✔ Confidential Legal Consultation</li>
// // // // //           <li>✔ Strong Case Strategy & Representation</li>
// // // // //         </ul>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // import { notFound } from "next/navigation";

// // // // /* ================= TEAM DATA ================= */

// // // // const teamMembers = [
// // // //   {
// // // //     slug: "s-jain",
// // // //     name: "S. Jain",
// // // //     designation: "Managing Partner",
// // // //     description:
// // // //       "Experienced managing partner specializing in corporate, civil, and criminal litigation matters.",
// // // //   },
// // // //   {
// // // //     slug: "a-mehta",
// // // //     name: "A. Mehta",
// // // //     designation: "Senior Advocate",
// // // //     description:
// // // //       "Senior advocate with extensive courtroom experience in high-value disputes and regulatory matters.",
// // // //   },
// // // //   {
// // // //     slug: "r-verma",
// // // //     name: "R. Verma",
// // // //     designation: "Advocate",
// // // //     description:
// // // //       "Advocate handling civil, criminal, family and employment law cases.",
// // // //   },
// // // // ];

// // // // /* ================= REQUIRED for output: "export" ================= */

// // // // export async function generateStaticParams() {
// // // //   return teamMembers.map((member) => ({
// // // //     slug: member.slug,
// // // //   }));
// // // // }

// // // // /* ================= PAGE ================= */

// // // // export default function LawyerProfile({ params }) {
// // // //   const member = teamMembers.find((m) => m.slug === params.slug);

// // // //   if (!member) {
// // // //     notFound();
// // // //   }

// // // //   return (
// // // //     <section className="max-w-5xl mx-auto px-6 py-24">
// // // //       <h1 className="text-4xl font-serif mb-4">{member.name}</h1>

// // // //       <p className="text-[#C9A24D] font-medium mb-6">
// // // //         {member.designation}
// // // //       </p>

// // // //       <p className="text-gray-600 leading-relaxed mb-10">
// // // //         {member.description}
// // // //       </p>

// // // //       <div className="bg-gray-100 p-8 rounded-lg">
// // // //         <h2 className="text-2xl font-semibold mb-4">
// // // //           Practice Areas
// // // //         </h2>

// // // //         <ul className="space-y-2 text-gray-700">
// // // //           <li>✔ Corporate & Commercial Law</li>
// // // //           <li>✔ Civil Litigation</li>
// // // //           <li>✔ Criminal Defense</li>
// // // //           <li>✔ Family & Divorce Law</li>
// // // //           <li>✔ Employment & Labour Law</li>
// // // //         </ul>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // import Navbar from "../../components/Navbar";
// // // import Footer from "../../components/Footer";
// // // import Link from "next/link";

// // // /* ================= TEAM DATA ================= */

// // // const teamMembers = [
// // //   {
// // //     name: "S. Jain",
// // //     designation: "Managing Partner",
// // //     slug: "s-jain",
// // //     bio: "S. Jain is the Managing Partner at S Jain & Attorneys with extensive experience in corporate law, regulatory advisory, and complex litigation strategy.",
// // //   },
// // //   {
// // //     name: "A. Mehta",
// // //     designation: "Senior Advocate",
// // //     slug: "a-mehta",
// // //     bio: "A. Mehta specializes in civil and commercial litigation, representing clients before High Courts and tribunals with strategic advocacy.",
// // //   },
// // //   {
// // //     name: "R. Verma",
// // //     designation: "Advocate",
// // //     slug: "r-verma",
// // //     bio: "R. Verma handles criminal defense, family disputes, and property litigation with a client-focused and results-driven approach.",
// // //   },
// // // ];

// // // /* ================= REQUIRED FOR STATIC EXPORT ================= */

// // // export async function generateStaticParams() {
// // //   return teamMembers.map((member) => ({
// // //     slug: member.slug,
// // //   }));
// // // }

// // // /* ================= DYNAMIC PROFILE PAGE ================= */

// // // export default function LawyerProfile({ params }) {
// // //   const lawyer = teamMembers.find(
// // //     (member) => member.slug === params.slug
// // //   );

// // //   if (!lawyer) {
// // //     return <div className="p-20 text-center">Lawyer not found</div>;
// // //   }

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <section className="bg-black text-white py-24 px-6">
// // //         <div className="max-w-4xl mx-auto text-center">

// // //           <h1 className="text-4xl font-serif font-semibold">
// // //             {lawyer.name}
// // //           </h1>

// // //           <p className="text-[#C9A24D] mt-4 font-medium">
// // //             {lawyer.designation}
// // //           </p>

// // //         </div>
// // //       </section>

// // //       <section className="bg-white py-20 px-6">
// // //         <div className="max-w-4xl mx-auto">

// // //           <h2 className="text-2xl font-serif mb-6">
// // //             Professional Profile
// // //           </h2>

// // //           <p className="text-gray-700 leading-relaxed">
// // //             {lawyer.bio}
// // //           </p>

// // //           <p className="text-gray-700 mt-6 leading-relaxed">
// // //             Practice Areas: Corporate Law | Civil Litigation | Criminal Defense | Family Law | Employment Law
// // //           </p>

// // //           <Link
// // //             href="/lawyers-in-bangalore"
// // //             className="inline-block mt-10 text-[#C9A24D] font-semibold"
// // //           >
// // //             ← Back to Our Legal Team
// // //           </Link>

// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </>
// // //   );
// // // }

// // import Navbar from "../../components/Navbar";
// // import Footer from "../../components/Footer";
// // import Link from "next/link";

// // /* ================= TEAM DATA ================= */

// // const teamMembers = [
// //   {
// //     name: "S. Jain",
// //     designation: "Managing Partner",
// //     slug: "s-jain",
// //     bio: "S. Jain is the Managing Partner at S Jain & Attorneys with extensive experience in corporate law, regulatory advisory, and complex litigation strategy.",
// //   },
// //   {
// //     name: "A. Mehta",
// //     designation: "Senior Advocate",
// //     slug: "a-mehta",
// //     bio: "A. Mehta specializes in civil and commercial litigation, representing clients before High Courts and tribunals with strategic advocacy.",
// //   },
// //   {
// //     name: "R. Verma",
// //     designation: "Advocate",
// //     slug: "r-verma",
// //     bio: "R. Verma handles criminal defense, family disputes, and property litigation with a client-focused and results-driven approach.",
// //   },
// // ];

// // /* ================= REQUIRED FOR STATIC EXPORT ================= */

// // export async function generateStaticParams() {
// //   return teamMembers.map((member) => ({
// //     slug: member.slug,
// //   }));
// // }

// // /* ================= PROFILE PAGE ================= */

// // export default function LawyerProfile({ params }) {

// //   // Safety check
// //   if (!params || !params.slug) {
// //     return <div className="p-20 text-center">Invalid profile</div>;
// //   }

// //   const slug = params.slug.toString().trim().toLowerCase();

// //   const lawyer = teamMembers.find(
// //     (member) => member.slug.toLowerCase() === slug
// //   );

// //   if (!lawyer) {
// //     return <div className="p-20 text-center">Lawyer not found</div>;
// //   }

// //   return (
// //     <>
// //       <Navbar />

// //       <section className="bg-black text-white py-24 px-6">
// //         <div className="max-w-4xl mx-auto text-center">
// //           <h1 className="text-4xl font-serif font-semibold">
// //             {lawyer.name}
// //           </h1>

// //           <p className="text-[#C9A24D] mt-4 font-medium">
// //             {lawyer.designation}
// //           </p>
// //         </div>
// //       </section>

// //       <section className="bg-white py-20 px-6">
// //         <div className="max-w-4xl mx-auto">
// //           <h2 className="text-2xl font-serif mb-6">
// //             Professional Profile
// //           </h2>

// //           <p className="text-gray-700 leading-relaxed">
// //             {lawyer.bio}
// //           </p>

// //           <p className="text-gray-700 mt-6 leading-relaxed">
// //             Practice Areas: Corporate Law | Civil Litigation | Criminal Defense | Family Law | Employment Law
// //           </p>

// //           <Link
// //             href="/lawyers-in-bangalore"
// //             className="inline-block mt-10 text-[#C9A24D] font-semibold"
// //           >
// //             ← Back to Our Legal Team
// //           </Link>
// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }

// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Link from "next/link";

// /* ================= TEAM DATA ================= */

// const teamMembers = [
//   {
//     name: "S. Jain",
//     designation: "Managing Partner",
//     slug: "s-jain",
//     bio: "S. Jain is the Managing Partner at S Jain & Attorneys with extensive experience in corporate law, regulatory advisory, and complex litigation strategy.",
//   },
//   {
//     name: "A. Mehta",
//     designation: "Senior Advocate",
//     slug: "a-mehta",
//     bio: "A. Mehta specializes in civil and commercial litigation, representing clients before High Courts and tribunals with strategic advocacy.",
//   },
//   {
//     name: "R. Verma",
//     designation: "Advocate",
//     slug: "r-verma",
//     bio: "R. Verma handles criminal defense, family disputes, and property litigation with a client-focused and results-driven approach.",
//   },
// ];

// /* ================= STATIC EXPORT REQUIRED ================= */

// export async function generateStaticParams() {
//   return teamMembers.map((member) => ({
//     slug: member.slug,
//   }));
// }

// /* ================= PROFILE PAGE ================= */

// export default async function LawyerProfile({ params }) {

//   const { slug } = await params;   // ✅ THIS FIXES YOUR ERROR

//   const lawyer = teamMembers.find(
//     (member) => member.slug === slug
//   );

//   if (!lawyer) {
//     return <div className="p-20 text-center">Lawyer not found</div>;
//   }

//   return (
//     <>
//       <Navbar />

//       <section className="bg-black text-white py-24 px-6">
//         <div className="max-w-4xl mx-auto text-center">
//           <h1 className="text-4xl font-serif font-semibold">
//             {lawyer.name}
//           </h1>
//           <p className="text-[#C9A24D] mt-4 font-medium">
//             {lawyer.designation}
//           </p>
//         </div>
//       </section>

//       <section className="bg-white py-20 px-6">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="text-2xl font-serif mb-6">
//             Professional Profile
//           </h2>

//           <p className="text-gray-700 leading-relaxed">
//             {lawyer.bio}
//           </p>

//           <p className="text-gray-700 mt-6 leading-relaxed">
//             Practice Areas: Corporate Law | Civil Litigation | Criminal Defense | Family Law | Employment Law
//           </p>

//           <Link
//             href="/lawyers-in-bangalore"
//             className="inline-block mt-10 text-[#C9A24D] font-semibold"
//           >
//             ← Back to Our Legal Team
//           </Link>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

// ─── TEAM DATA ────────────────────────────────────────────────────────────────

const teamMembers = [
  {
    name: "S. Jain",
    designation: "Managing Partner",
    slug: "s-jain",
    overview:
      "S. Jain is among the experienced advocates in Bangalore, with extensive expertise in litigation, corporate advisory, and dispute resolution. With significant courtroom experience, he has represented clients before the High Court, District Courts, and various tribunals. As the Managing Partner of S Jain & Attorneys, he leads the firm's strategic legal direction and ensures every client receives structured, results-oriented representation.",
  },
  {
    name: "A. Mehta",
    designation: "Senior Advocate",
    slug: "a-mehta",
    overview:
      "A. Mehta is among the experienced advocates in Bangalore, with extensive expertise in civil and commercial litigation. With significant courtroom experience, she has represented clients before the High Court, District Courts, and various tribunals. Her approach combines rigorous case preparation with strategic advocacy to protect client interests across complex disputes.",
  },
  {
    name: "R. Verma",
    designation: "Advocate",
    slug: "r-verma",
    overview:
      "R. Verma is among the experienced advocates in Bangalore, with a strong focus on criminal defense, family disputes, and property litigation. With hands-on courtroom experience across trial courts and tribunals, he brings a client-focused and results-driven approach to every matter handled at S Jain & Attorneys.",
  },
];

const practiceAreas = [
  "Corporate & Commercial Law",
  "Civil Litigation",
  "Criminal Defense & Prosecution",
  "Property & Real Estate Law",
  "Family & Divorce Law",
  "Employment & Labour Law",
  "Consumer Protection & Regulatory Matters",
];

const experience = [
  "Enrolled with the Bar Council",
  "Appearances before High Court & Trial Courts",
  "Advisory services for startups and corporate clients",
  "Regulatory compliance and strategic litigation representation",
];

// ─── STATIC PARAMS ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

// ─── DYNAMIC METADATA ─────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const lawyer = teamMembers.find((m) => m.slug === slug);
  if (!lawyer) return {};
  return {
    title: `${lawyer.name} – ${lawyer.designation} | S Jain & Attorneys`,
    description: `${lawyer.name} is an experienced advocate in Bangalore at S Jain & Attorneys, handling litigation, corporate advisory, and dispute resolution matters.`,
  };
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default async function LawyerProfile({ params }) {
  const { slug } = await params;
  const lawyer = teamMembers.find((m) => m.slug === slug);

  if (!lawyer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Lawyer not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative bg-[#0B0F14] overflow-hidden">
        {/* top gold border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

        {/* corner brackets */}
        {["top-8 left-8 border-t-2 border-l-2", "top-8 right-8 border-t-2 border-r-2"].map((cls, i) => (
          <div key={i} className={`absolute w-12 h-12 border-[#C9A24D] opacity-30 ${cls}`} />
        ))}

        {/* gold grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
            "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
        }} />

        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-24 text-center">
          {/* eyebrow */}
          <p className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3">
            <span className="inline-block w-6 h-px bg-[#C9A24D]" />
            S Jain &amp; Attorneys · Bangalore
            <span className="inline-block w-6 h-px bg-[#C9A24D]" />
          </p>

          {/* avatar */}
          <div className="w-24 h-24 rounded-full bg-[#1a1f26] border-2 border-[#C9A24D] flex items-center justify-center mx-auto mb-8">
            <span className="text-[#C9A24D] font-black text-3xl">{lawyer.name.charAt(0)}</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.08] mb-4">
            {lawyer.name}
          </h1>

          <p className="text-[#C9A24D] font-semibold text-lg tracking-wide mb-8">
            {lawyer.designation}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/legal-consultation-in-bangalore"
              className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200"
            >
              Book Confidential Consultation
            </Link>
            <Link href="/contact"
              className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
            >
              Request Call Back
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ PROFESSIONAL OVERVIEW ════════════════════ */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute right-0 top-[20%] w-[3px] h-[60%] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent" />

        <div className="max-w-5xl mx-auto">
          {/* gold bar + H2 */}
          <div className="mb-10">
            <span className="block h-[3px] w-14 bg-[#C9A24D] mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Overview</h2>
          </div>

          {/* pull quote */}
          <blockquote className="border border-[#C9A24D] border-l-4 bg-[#fdf9f3] px-8 py-6 mb-10 rounded-r-lg">
            <p className="text-[#8a6a20] text-xl font-medium italic leading-relaxed">
              "As one of the dedicated lawyers in Bangalore, S Jain &amp; Attorneys focuses on
              structured case preparation, risk assessment, and strategic legal planning."
            </p>
          </blockquote>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">{lawyer.overview}</p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Clear communication, legal precision, and client-centric advocacy remain central to
            every matter handled.
          </p>
        </div>
      </section>

      {/* ════════════════════════════ PRACTICE AREAS ══════════════════════════ */}
      <section className="py-24 px-6 bg-[#f8f6f1] relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="block h-[3px] w-14 bg-[#C9A24D] mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Practice Areas</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {practiceAreas.map((area, i) => (
              <div key={i}
                className="bg-white border border-gray-100 hover:border-[#C9A24D] rounded-lg p-6 flex items-start gap-4 group transition-all duration-300 hover:shadow-md"
              >
                <span className="text-[#C9A24D] font-black text-lg shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
                  <p className="text-base font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200">
                    {area}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ EXPERIENCE & QUALIFICATIONS ═══════════════════ */}
      <section className="py-24 px-6 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

        {/* watermark */}
        <div className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-[20rem] font-black text-[#C9A24D] opacity-[0.04] select-none pointer-events-none leading-none">
          E
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="mb-10">
            <span className="block h-[3px] w-14 bg-[#C9A24D] mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Experience &amp; Qualifications</h2>
          </div>

          <div className="space-y-5">
            {experience.map((item, i) => (
              <div key={i}
                className="border border-[#C9A24D]/30 hover:border-[#C9A24D]/70 rounded-lg p-6 flex items-start gap-5 group transition-colors duration-300 relative"
              >
                <span className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#C9A24D]/30 group-hover:border-[#C9A24D] transition-colors duration-300" />
                <span className="text-[#C9A24D] font-black text-xl shrink-0 mt-0.5">✓</span>
                <p className="text-gray-300 text-base leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════ PROFESSIONAL APPROACH ═════════════════════ */}
      <section className="py-24 px-6 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <span className="block h-[3px] w-14 bg-[#C9A24D] mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Professional Approach</h2>
          </div>

          <div className="space-y-5 text-gray-600 text-lg leading-relaxed mb-12">
            <p>
              As one of the dedicated lawyers in Bangalore, S Jain &amp; Attorneys focuses on
              structured case preparation, risk assessment, and strategic legal planning.
            </p>
            <p>
              Clear communication, legal precision, and client-centric advocacy remain central to
              every matter handled.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/legal-consultation-in-bangalore"
              className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200"
            >
              Book Confidential Consultation
            </Link>
            <Link href="/contact"
              className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
            >
              Request Call Back
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════ BACK LINK ════════════════════════════════ */}
      <section className="py-12 px-6 bg-[#f8f6f1]">
        <div className="max-w-5xl mx-auto">
          <Link href="/lawyers-in-bangalore"
            className="inline-flex items-center gap-2 text-[#C9A24D] font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            ← Back to Our Legal Team
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}