
// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";
// // // // // // import Image from "next/image";
// // // // // // import Link from "next/link";
// // // // // // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";
// // // // // // import AboutFirm from "../components/AboutFirm";
// // // // // // import ServiceOverview from "../components/ServiceOverview";
// // // // // // import PracticeAreas from "../components/PracticeAreas";
// // // // // // import WhyChooseUs from "../components/WhyChooseUs";
// // // // // // import LegalServicesSections from "../components/LegalServicesSections";
// // // // // // import Testimonials from "../components/Testimonials";
// // // // // // import CTASection from "../components/CTASection";
// // // // // // import FAQsSection from "../components/FAQsSection";
// // // // // // import Consultation from "../components/Consultation";
// // // // // // import Footer from "../components/Footer";
// // // // // // export default function page() {

// // // // // //   const fadeUp = {
// // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       y: 0,
// // // // // //       transition: { duration: 0.8 }
// // // // // //     }
// // // // // //   };

// // // // // //   return (

// // // // // //     <>
// // // // // //       <section
// // // // // //         className="
// // // // // //       relative
// // // // // //       w-full
// // // // // //       min-h-screen
// // // // // //       flex
// // // // // //       items-start
// // // // // //       overflow-hidden
// // // // // //       bg-gradient-to-br
// // // // // //       from-black
// // // // // //       via-black
// // // // // //       to-[#C9A24D]/90
// // // // // //       pt-[140px]
// // // // // //       pb-[110px]
// // // // // //       "
// // // // // //       >

// // // // // //         {/* GOLD GLOW */}
// // // // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A24D]/10 blur-[140px] rounded-full"></div>

// // // // // //         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

// // // // // //           <div className="grid lg:grid-cols-2 gap-14 items-start">

// // // // // //             {/* LEFT CONTENT */}
// // // // // //             <motion.div
// // // // // //               initial="hidden"
// // // // // //               animate="visible"
// // // // // //               variants={fadeUp}
// // // // // //             >

// // // // // //               {/* BADGE */}
// // // // // //               <div className="
// // // // // //               inline-flex
// // // // // //               items-center
// // // // // //               gap-2
// // // // // //               border border-[#C9A24D]/40
// // // // // //               text-[#C9A24D]
// // // // // //               px-4 py-2
// // // // // //               rounded-full
// // // // // //               text-sm
// // // // // //               mb-6
// // // // // //               bg-[#C9A24D]/5
// // // // // //             ">
// // // // // //                 <ShieldCheck size={16} />
// // // // // //                 Advocates & Legal Consultants
// // // // // //               </div>

// // // // // //               {/* SEO H1 */}
// // // // // //               <h1 className="
// // // // // //               text-4xl
// // // // // //               sm:text-5xl
// // // // // //               lg:text-6xl
// // // // // //               font-bold
// // // // // //               text-white
// // // // // //               leading-tight
// // // // // //               mb-6
// // // // // //             ">
// // // // // //                 Leading Law Firm in{" "}
// // // // // //                 <span className="text-[#C9A24D]">Bangalore</span>{" "}
// // // // // //                 for Corporate, Civil, Criminal & Property Legal Services
// // // // // //               </h1>

// // // // // //               {/* SUBTEXT */}
// // // // // //               <p className="
// // // // // //               text-gray-300
// // // // // //               text-lg
// // // // // //               max-w-xl
// // // // // //               leading-relaxed
// // // // // //               mb-8
// // // // // //             ">

// // // // // //                 S Jain & Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services. Our experienced attorneys and advocates provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India. We combine integrity, experience, and practical legal insight to protect your rights and advance your interests.
// // // // // //               </p>

// // // // // //               {/* BUTTONS */}
// // // // // //               <div className="flex items-center gap-4 mb-4 whitespace-nowrap">

// // // // // //                 {/* Book Confidential Consultation */}
// // // // // //                 <Link href="/legal-consultation-in-bangalore">
// // // // // //                   <button
// // // // // //                     className="
// // // // // //         flex-shrink-0
// // // // // //         bg-gradient-to-r
// // // // // //         from-[#C9A24D]
// // // // // //         to-[#E6C676]
// // // // // //         text-black
// // // // // //         px-7 py-3
// // // // // //         font-semibold
// // // // // //         rounded-md
// // // // // //         hover:scale-105
// // // // // //         hover:shadow-[0_0_25px_rgba(201,162,77,0.5)]
// // // // // //         transition
// // // // // //       "
// // // // // //                   >
// // // // // //                     Book Confidential Consultation
// // // // // //                   </button>
// // // // // //                 </Link>

// // // // // //                 {/* View Practice Areas */}
// // // // // //                 <Link href="#practice-areas">
// // // // // //                   <button
// // // // // //                     className="
// // // // // //         flex-shrink-0
// // // // // //         border border-[#C9A24D]
// // // // // //         text-[#C9A24D]
// // // // // //         px-7 py-3
// // // // // //         font-semibold
// // // // // //         rounded-md
// // // // // //         hover:bg-gradient-to-r
// // // // // //         hover:from-[#C9A24D]
// // // // // //         hover:to-[#E6C676]
// // // // // //         hover:text-black
// // // // // //         transition
// // // // // //       "
// // // // // //                   >
// // // // // //                     View Practice Areas
// // // // // //                   </button>
// // // // // //                 </Link>

// // // // // //                 {/* Call Now */}
// // // // // //                 <a
// // // // // //                   href="tel:+919000000000"
// // // // // //                   className="
// // // // // //       flex-shrink-0
// // // // // //       flex
// // // // // //       items-center
// // // // // //       justify-center
// // // // // //       w-12 h-12
// // // // // //       rounded-full
// // // // // //       border border-[#C9A24D]
// // // // // //       hover:bg-gradient-to-r
// // // // // //       hover:from-[#C9A24D]
// // // // // //       hover:to-[#E6C676]
// // // // // //       transition
// // // // // //     "
// // // // // //                 >
// // // // // //                   <Phone size={20} className="text-white hover:text-black" />
// // // // // //                 </a>

// // // // // //               </div>

// // // // // //               {/* RESPONSE ASSURANCE */}
// // // // // //               <p className="text-gray-400 text-sm mb-8">
// // // // // //                 Response within 24 hours guaranteed.
// // // // // //               </p>

// // // // // //               {/* TRUST INDICATORS */}
// // // // // //               <div className="flex flex-wrap gap-8 text-gray-400 border-t border-gray-800 pt-6">

// // // // // //                 <div className="flex items-center gap-2">
// // // // // //                   <Award size={18} className="text-[#C9A24D]" />
// // // // // //                   15+ Years Experience
// // // // // //                 </div>

// // // // // //                 <div className="flex items-center gap-2">
// // // // // //                   <Briefcase size={18} className="text-[#C9A24D]" />
// // // // // //                   1000+ Cases Successfully Handled
// // // // // //                 </div>

// // // // // //                 <div className="flex items-center gap-2">
// // // // // //                   <Scale size={18} className="text-[#C9A24D]" />
// // // // // //                   Karnataka High Court & District Courts
// // // // // //                 </div>

// // // // // //               </div>

// // // // // //             </motion.div>

// // // // // //             {/* RIGHT IMAGE */}
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: 80 }}
// // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 1 }}
// // // // // //               className="relative flex justify-center lg:justify-end"
// // // // // //             >

// // // // // //               <div className="relative w-full max-w-lg">

// // // // // //                 {/* IMAGE GLOW */}
// // // // // //                 <div className="absolute -inset-2 bg-[#C9A24D]/20 blur-2xl rounded-xl"></div>

// // // // // //                 {/* IMAGE */}
// // // // // //                 <Image
// // // // // //                   src="/closeupjustice.jpg"
// // // // // //                   alt="Law Firm in Bangalore - S Jain & Attorneys"
// // // // // //                   width={550}
// // // // // //                   height={650}
// // // // // //                   priority
// // // // // //                   className="
// // // // // //                   relative
// // // // // //                   rounded-xl
// // // // // //                   border border-[#C9A24D]/40
// // // // // //                   object-cover
// // // // // //                   w-full
// // // // // //                 "
// // // // // //                 />

// // // // // //               </div>

// // // // // //             </motion.div>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </section>
// // // // // //       <AboutFirm />
// // // // // //       <ServiceOverview />
// // // // // //       <PracticeAreas />
// // // // // //       <WhyChooseUs />
// // // // // //       <LegalServicesSections />
// // // // // //       <Testimonials />
// // // // // //       <CTASection />
// // // // // //       <FAQsSection />
// // // // // //       <Consultation />
// // // // // //       <Footer />

// // // // // //     </>
// // // // // //   );
// // // // // // }



// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";
// // // // // // import Image from "next/image";
// // // // // // import Link from "next/link";
// // // // // // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";

// // // // // // import AboutFirm from "../components/AboutFirm";
// // // // // // import ServiceOverview from "../components/ServiceOverview";
// // // // // // import PracticeAreas from "../components/PracticeAreas";
// // // // // // import WhyChooseUs from "../components/WhyChooseUs";
// // // // // // import LegalServicesSections from "../components/LegalServicesSections";
// // // // // // import Testimonials from "../components/Testimonials";
// // // // // // import CTASection from "../components/CTASection";
// // // // // // import FAQsSection from "../components/FAQsSection";
// // // // // // import Consultation from "../components/Consultation";
// // // // // // import Footer from "../components/Footer";

// // // // // // export default function Page() {
// // // // // //   const fadeUp = {
// // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       y: 0,
// // // // // //       transition: { duration: 0.8 },
// // // // // //     },
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //     {/* ================= HERO SECTION ================= */}
// // // // // // <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">

// // // // // //   {/* BACKGROUND IMAGE */}
// // // // // //   <div className="absolute inset-0">
// // // // // //     <Image
// // // // // //       src="/closeupjustice.jpg"
// // // // // //       alt="Law Firm in Bangalore - S Jain & Attorneys"
// // // // // //       fill
// // // // // //       priority
// // // // // //       className="object-cover object-right opacity-60"
// // // // // //     />
// // // // // //   </div>

// // // // // //   {/* DARK LEFT GRADIENT OVERLAY */}
// // // // // //   <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>

// // // // // //   {/* GOLD LIGHT GLOW */}
// // // // // //   <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // // // //   <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">

// // // // // //     <motion.div
// // // // // //       initial="hidden"
// // // // // //       animate="visible"
// // // // // //       variants={fadeUp}
// // // // // //       className="max-w-3xl"
// // // // // //     >
// // // // // //       {/* BADGE */}
// // // // // //       <div className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
// // // // // //         <ShieldCheck size={16} />
// // // // // //         Advocates & Legal Consultants
// // // // // //       </div>

// // // // // //       {/* HEADING */}
// // // // // //       <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8">
// // // // // //         Leading Law Firm in <br />
// // // // // //         <span className="text-[#C9A24D]">Bangalore</span> for Corporate, <br />
// // // // // //         Civil, Criminal & <br /> Property Legal Services
// // // // // //       </h1>

// // // // // //       {/* SUBTEXT */}
// // // // // //       <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
// // // // // //         S Jain & Attorneys is a reputed law firm in Bangalore delivering
// // // // // //         expert legal representation in corporate law, civil litigation,
// // // // // //         criminal defense, property disputes, and NRI legal services. Our
// // // // // //         experienced attorneys provide strategic, result-oriented legal
// // // // // //         solutions for individuals and businesses.
// // // // // //       </p>

// // // // // //       {/* BUTTONS */}
// // // // // //       <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-6">

// // // // // //         <Link href="/legal-consultation-in-bangalore">
// // // // // //           <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // // // //             Book Confidential Consultation
// // // // // //           </button>
// // // // // //         </Link>

// // // // // //         <Link href="#practice-areas">
// // // // // //           <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // // // //             View Practice Areas
// // // // // //           </button>
// // // // // //         </Link>

// // // // // //         <a
// // // // // //           href="tel:+919000000000"
// // // // // //           className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // // // // //         >
// // // // // //           <Phone size={22} className="text-white hover:text-black" />
// // // // // //         </a>
// // // // // //       </div>

// // // // // //       {/* RESPONSE TEXT */}
// // // // // //       <p className="text-gray-400 text-sm mb-10">
// // // // // //         Response within 24 hours guaranteed.
// // // // // //       </p>

// // // // // //       {/* TRUST INDICATORS */}
// // // // // //       <div className="flex flex-col sm:flex-row gap-8 text-gray-400 border-t border-gray-800 pt-8">
// // // // // //         <div className="flex items-center gap-3">
// // // // // //           <Award size={18} className="text-[#C9A24D]" />
// // // // // //           15+ Years Experience
// // // // // //         </div>

// // // // // //         <div className="flex items-center gap-3">
// // // // // //           <Briefcase size={18} className="text-[#C9A24D]" />
// // // // // //           1000+ Cases Successfully Handled
// // // // // //         </div>

// // // // // //         <div className="flex items-center gap-3">
// // // // // //           <Scale size={18} className="text-[#C9A24D]" />
// // // // // //           Karnataka High Court & District Courts
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </motion.div>

// // // // // //   </div>
// // // // // // </section>

// // // // // //       {/* ================= OTHER SECTIONS ================= */}
// // // // // //       <AboutFirm />
// // // // // //       <ServiceOverview />
// // // // // //       <PracticeAreas />
// // // // // //       <WhyChooseUs />
// // // // // //       <LegalServicesSections />
// // // // // //       <Testimonials />
// // // // // //       <CTASection />
// // // // // //       <FAQsSection />
// // // // // //       <Consultation />
// // // // // //       <Footer />
// // // // // //     </>
// // // // // //   );
// // // // // // }




// // // // // "use client";

// // // // // import { motion } from "framer-motion";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";

// // // // // import AboutFirm from "../components/AboutFirm";
// // // // // import ServiceOverview from "../components/ServiceOverview";
// // // // // import PracticeAreas from "../components/PracticeAreas";
// // // // // import WhyChooseUs from "../components/WhyChooseUs";
// // // // // import LegalServicesSections from "../components/LegalServicesSections";
// // // // // import Testimonials from "../components/Testimonials";
// // // // // import CTASection from "../components/CTASection";
// // // // // import FAQsSection from "../components/FAQsSection";
// // // // // import Consultation from "../components/Consultation";
// // // // // import Footer from "../components/Footer";

// // // // // export default function Page() {
// // // // //   // Standard fade-up animation
// // // // //   const fadeUp = {
// // // // //     hidden: { opacity: 0, y: 40 },
// // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // //   };

// // // // //   // Stagger container for multiple elements
// // // // //   const staggerContainer = {
// // // // //     hidden: {},
// // // // //     visible: { transition: { staggerChildren: 0.2 } },
// // // // //   };

// // // // //   return (
// // // // //     <>
// // // // //       {/* ================= HERO SECTION ================= */}
// // // // //       <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">

// // // // //         {/* BACKGROUND IMAGE */}
// // // // //         <div className="absolute inset-0">
// // // // //           <Image
// // // // //             src="/closeupjustice.jpg"
// // // // //             alt="Law Firm in Bangalore - S Jain & Attorneys"
// // // // //             fill
// // // // //             priority
// // // // //             className="object-cover object-right opacity-60"
// // // // //           />
// // // // //         </div>

// // // // //         {/* DARK LEFT GRADIENT OVERLAY */}
// // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>

// // // // //         {/* GOLD LIGHT GLOW */}
// // // // //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // // //         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">

// // // // //           <motion.div
// // // // //             className="max-w-3xl"
// // // // //             variants={staggerContainer}
// // // // //             initial="hidden"
// // // // //             whileInView="visible"
// // // // //             viewport={{ once: true, amount: 0.3 }}
// // // // //           >

// // // // //             {/* BADGE */}
// // // // //             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
// // // // //               <ShieldCheck size={16} />
// // // // //               Advocates & Legal Consultants
// // // // //             </motion.div>

// // // // //             {/* HEADING */}
// // // // //             <motion.h1
// // // // //               variants={fadeUp}
// // // // //               className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8"
// // // // //             >
// // // // //               Leading Law Firm in <br />
// // // // //               <span className="text-[#C9A24D]">Bangalore</span> for Corporate, <br />
// // // // //               Civil, Criminal & <br /> Property Legal Services
// // // // //             </motion.h1>

// // // // //             {/* SUBTEXT */}
// // // // //             <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
// // // // //               S Jain & Attorneys is a reputed law firm in Bangalore delivering
// // // // //               expert legal representation in corporate law, civil litigation,
// // // // //               criminal defense, property disputes, and NRI legal services. Our
// // // // //               experienced attorneys provide strategic, result-oriented legal
// // // // //               solutions for individuals and businesses.
// // // // //             </motion.p>

// // // // //             {/* BUTTONS */}
// // // // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-6">
// // // // //               <Link href="/legal-consultation-in-bangalore">
// // // // //                 <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // // //                   Book Confidential Consultation
// // // // //                 </button>
// // // // //               </Link>

// // // // //               <Link href="#practice-areas">
// // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // // //                   View Practice Areas
// // // // //                 </button>
// // // // //               </Link>

// // // // //               <a
// // // // //                 href="tel:+919000000000"
// // // // //                 className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // // // //               >
// // // // //                 <Phone size={22} className="text-white hover:text-black" />
// // // // //               </a>
// // // // //             </motion.div>

// // // // //             {/* RESPONSE TEXT */}
// // // // //             <motion.p variants={fadeUp} className="text-gray-400 text-sm mb-10">
// // // // //               Response within 24 hours guaranteed.
// // // // //             </motion.p>

// // // // //             {/* TRUST INDICATORS */}
// // // // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 text-gray-400 border-t border-gray-800 pt-8">
// // // // //               <div className="flex items-center gap-3">
// // // // //                 <Award size={18} className="text-[#C9A24D]" />
// // // // //                 15+ Years Experience
// // // // //               </div>

// // // // //               <div className="flex items-center gap-3">
// // // // //                 <Briefcase size={18} className="text-[#C9A24D]" />
// // // // //                 1000+ Cases Successfully Handled
// // // // //               </div>

// // // // //               <div className="flex items-center gap-3">
// // // // //                 <Scale size={18} className="text-[#C9A24D]" />
// // // // //                 Karnataka High Court & District Courts
// // // // //               </div>
// // // // //             </motion.div>

// // // // //           </motion.div>

// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ================= OTHER SECTIONS ================= */}
// // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //         <AboutFirm />
// // // // //       </motion.div>
// // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //         <ServiceOverview />
// // // // //       </motion.div>
// // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //         <PracticeAreas />
// // // // //       </motion.div>
// // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //         <WhyChooseUs />
// // // // //       </motion.div>
// // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //         <LegalServicesSections />
// // // // //       </motion.div>
// // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //         <Testimonials />
// // // // //       </motion.div>
// // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //         <CTASection />
// // // // //       </motion.div>
// // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //         <FAQsSection />
// // // // //       </motion.div>
// // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //         <Consultation />
// // // // //       </motion.div>
// // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //         <Footer />
// // // // //       </motion.div>
// // // // //     </>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";

// // // // import AboutFirm from "../components/AboutFirm";
// // // // import ServiceOverview from "../components/ServiceOverview";
// // // // import PracticeAreas from "../components/PracticeAreas";
// // // // import WhyChooseUs from "../components/WhyChooseUs";
// // // // import LegalServicesSections from "../components/LegalServicesSections";
// // // // import Testimonials from "../components/Testimonials";
// // // // import CTASection from "../components/CTASection";
// // // // import FAQsSection from "../components/FAQsSection";
// // // // import Consultation from "../components/Consultation";
// // // // import Footer from "../components/Footer";

// // // // export default function Page() {
// // // //   // Word-by-word heading animation
// // // //   const headingWords = [
// // // //     "Leading", "Law", "Firm", "in",
// // // //     "Bangalore", "for", "Corporate,", "Civil,", "Criminal", "&", "Property", "Legal", "Services"
// // // //   ];

// // // //   const wordAnimation = {
// // // //     hidden: { opacity: 0, y: 50, scale: 0.95 },
// // // //     visible: (i) => ({
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       scale: 1,
// // // //       transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
// // // //     }),
// // // //   };

// // // //   // Standard fade-up animation for other sections
// // // //   const fadeUp = {
// // // //     hidden: { opacity: 0, y: 40 },
// // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* ================= HERO SECTION ================= */}
// // // //       <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">

// // // //         {/* BACKGROUND IMAGE */}
// // // //         <div className="absolute inset-0">
// // // //           <Image
// // // //             src="/closeupjustice.jpg"
// // // //             alt="Law Firm in Bangalore - S Jain & Attorneys"
// // // //             fill
// // // //             priority
// // // //             className="object-cover object-right opacity-60"
// // // //           />
// // // //         </div>

// // // //         {/* DARK LEFT GRADIENT OVERLAY */}
// // // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>

// // // //         {/* GOLD LIGHT GLOW */}
// // // //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // //         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">

// // // //           <motion.div
// // // //             className="max-w-3xl"
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true, amount: 0.3 }}
// // // //           >

// // // //             {/* BADGE */}
// // // //             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
// // // //               <ShieldCheck size={16} />
// // // //               Advocates & Legal Consultants
// // // //             </motion.div>

// // // //             {/* HERO HEADING – WORD BY WORD */}
// // // //             <motion.h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8 flex flex-wrap gap-2">
// // // //               {headingWords.map((word, i) => (
// // // //                 <motion.span
// // // //                   key={i}
// // // //                   custom={i}
// // // //                   variants={wordAnimation}
// // // //                   initial="hidden"
// // // //                   animate="visible"
// // // //                   className={word.includes("Bangalore") ? "text-[#C9A24D]" : ""}
// // // //                 >
// // // //                   {word}
// // // //                 </motion.span>
// // // //               ))}
// // // //             </motion.h1>

// // // //             {/* SUBTEXT */}
// // // //             <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
// // // //               S Jain & Attorneys is a reputed law firm in Bangalore delivering
// // // //               expert legal representation in corporate law, civil litigation,
// // // //               criminal defense, property disputes, and NRI legal services. Our
// // // //               experienced attorneys provide strategic, result-oriented legal
// // // //               solutions for individuals and businesses.
// // // //             </motion.p>

// // // //             {/* BUTTONS */}
// // // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-6">
// // // //               <Link href="/legal-consultation-in-bangalore">
// // // //                 <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // //                   Book Confidential Consultation
// // // //                 </button>
// // // //               </Link>

// // // //               <Link href="#practice-areas">
// // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // //                   View Practice Areas
// // // //                 </button>
// // // //               </Link>

// // // //               <a
// // // //                 href="tel:+919000000000"
// // // //                 className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // // //               >
// // // //                 <Phone size={22} className="text-white hover:text-black" />
// // // //               </a>
// // // //             </motion.div>

// // // //             {/* RESPONSE TEXT */}
// // // //             <motion.p variants={fadeUp} className="text-gray-400 text-sm mb-10">
// // // //               Response within 24 hours guaranteed.
// // // //             </motion.p>

// // // //             {/* TRUST INDICATORS */}
// // // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 text-gray-400 border-t border-gray-800 pt-8">
// // // //               <div className="flex items-center gap-3">
// // // //                 <Award size={18} className="text-[#C9A24D]" />
// // // //                 15+ Years Experience
// // // //               </div>

// // // //               <div className="flex items-center gap-3">
// // // //                 <Briefcase size={18} className="text-[#C9A24D]" />
// // // //                 1000+ Cases Successfully Handled
// // // //               </div>

// // // //               <div className="flex items-center gap-3">
// // // //                 <Scale size={18} className="text-[#C9A24D]" />
// // // //                 Karnataka High Court & District Courts
// // // //               </div>
// // // //             </motion.div>

// // // //           </motion.div>

// // // //         </div>
// // // //       </section>

// // // //       {/* ================= OTHER SECTIONS ================= */}
// // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // //         <AboutFirm />
// // // //       </motion.div>
// // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // //         <ServiceOverview />
// // // //       </motion.div>
// // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // //         <PracticeAreas />
// // // //       </motion.div>
// // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // //         <WhyChooseUs />
// // // //       </motion.div>
// // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // //         <LegalServicesSections />
// // // //       </motion.div>
// // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // //         <Testimonials />
// // // //       </motion.div>
// // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // //         <CTASection />
// // // //       </motion.div>
// // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // //         <FAQsSection />
// // // //       </motion.div>
// // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // //         <Consultation />
// // // //       </motion.div>
// // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // //         <Footer />
// // // //       </motion.div>
// // // //     </>
// // // //   );
// // // // }



// // // "use client";

// // // import { motion } from "framer-motion";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";
// // // import { useState, useEffect } from "react";

// // // import AboutFirm from "../components/AboutFirm";
// // // import ServiceOverview from "../components/ServiceOverview";
// // // import PracticeAreas from "../components/PracticeAreas";
// // // import WhyChooseUs from "../components/WhyChooseUs";
// // // import LegalServicesSections from "../components/LegalServicesSections";
// // // import Testimonials from "../components/Testimonials";
// // // import CTASection from "../components/CTASection";
// // // import FAQsSection from "../components/FAQsSection";
// // // import Consultation from "../components/Consultation";
// // // import Footer from "../components/Footer";

// // // // ==================== Typewriter Component ====================
// // // function Typewriter({ words = [], loop = true, typingSpeed = 150, deletingSpeed = 50, delay = 1500 }) {
// // //   const [text, setText] = useState("");
// // //   const [wordIndex, setWordIndex] = useState(0);
// // //   const [isDeleting, setIsDeleting] = useState(false);

// // //   useEffect(() => {
// // //     let timeout;

// // //     const handleTyping = () => {
// // //       const currentWord = words[wordIndex];
// // //       if (isDeleting) {
// // //         setText(currentWord.substring(0, text.length - 1));
// // //       } else {
// // //         setText(currentWord.substring(0, text.length + 1));
// // //       }

// // //       let speed = isDeleting ? deletingSpeed : typingSpeed;

// // //       if (!isDeleting && text === currentWord) {
// // //         speed = delay;
// // //         setIsDeleting(true);
// // //       } else if (isDeleting && text === "") {
// // //         setIsDeleting(false);
// // //         setWordIndex((prev) => (prev + 1) % words.length);
// // //         speed = typingSpeed;
// // //       }

// // //       timeout = setTimeout(handleTyping, speed);
// // //     };

// // //     timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

// // //     return () => clearTimeout(timeout);
// // //   }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

// // //   return <span className="text-[#C9A24D] font-extrabold">{text}</span>;
// // // }

// // // // ==================== Main Page ====================
// // // export default function Page() {
// // //   const fadeUp = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // //   };

// // //   return (
// // //     <>
// // //       {/* ================= HERO SECTION ================= */}
// // //       <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
// // //         {/* BACKGROUND IMAGE */}
// // //         <div className="absolute inset-0">
// // //           <Image
// // //             src="/closeupjustice.jpg"
// // //             alt="Law Firm in Bangalore - S Jain & Attorneys"
// // //             fill
// // //             priority
// // //             className="object-cover object-right opacity-60"
// // //           />
// // //         </div>

// // //         {/* DARK LEFT GRADIENT */}
// // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>

// // //         {/* GOLD LIGHT GLOW */}
// // //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // //         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
// // //           <motion.div
// // //             className="max-w-3xl"
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, amount: 0.3 }}
// // //           >
// // //             {/* BADGE */}
// // //             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
// // //               <ShieldCheck size={16} />
// // //               Advocates & Legal Consultants
// // //             </motion.div>

// // //             {/* HERO HEADING */}
// // //             <motion.h1
// // //               variants={fadeUp}
// // //               className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8"
// // //             >
// // //               Leading Law Firm in <br />
// // //               <Typewriter
// // //                 words={[
// // //                   "Bangalore",
// // //                   "Corporate Law",
// // //                   "Civil Litigation",
// // //                   "Criminal Defense",
// // //                   "Property Disputes",
// // //                 ]}
// // //                 typingSpeed={150}
// // //                 deletingSpeed={80}
// // //                 delay={1500}
// // //               />
// // //             </motion.h1>

// // //             {/* SUBTEXT */}
// // //             <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
// // //               S Jain & Attorneys is a reputed law firm in Bangalore delivering
// // //               expert legal representation in corporate law, civil litigation,
// // //               criminal defense, property disputes, and NRI legal services. Our
// // //               experienced attorneys provide strategic, result-oriented legal
// // //               solutions for individuals and businesses.
// // //             </motion.p>

// // //             {/* BUTTONS */}
// // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-6">
// // //               <Link href="/legal-consultation-in-bangalore">
// // //                 <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // //                   Book Confidential Consultation
// // //                 </button>
// // //               </Link>

// // //               <Link href="#practice-areas">
// // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // //                   View Practice Areas
// // //                 </button>
// // //               </Link>

// // //               <a
// // //                 href="tel:+919000000000"
// // //                 className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // //               >
// // //                 <Phone size={22} className="text-white hover:text-black" />
// // //               </a>
// // //             </motion.div>

// // //             {/* RESPONSE TEXT */}
// // //             <motion.p variants={fadeUp} className="text-gray-400 text-sm mb-10">
// // //               Response within 24 hours guaranteed.
// // //             </motion.p>

// // //             {/* TRUST INDICATORS */}
// // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 text-gray-400 border-t border-gray-800 pt-8">
// // //               <div className="flex items-center gap-3">
// // //                 <Award size={18} className="text-[#C9A24D]" />
// // //                 15+ Years Experience
// // //               </div>

// // //               <div className="flex items-center gap-3">
// // //                 <Briefcase size={18} className="text-[#C9A24D]" />
// // //                 1000+ Cases Successfully Handled
// // //               </div>

// // //               <div className="flex items-center gap-3">
// // //                 <Scale size={18} className="text-[#C9A24D]" />
// // //                 Karnataka High Court & District Courts
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ================= OTHER SECTIONS ================= */}
// // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // //         <AboutFirm />
// // //       </motion.div>
// // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // //         <ServiceOverview />
// // //       </motion.div>
// // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // //         <PracticeAreas />
// // //       </motion.div>
// // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // //         <WhyChooseUs />
// // //       </motion.div>
// // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // //         <LegalServicesSections />
// // //       </motion.div>
// // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // //         <Testimonials />
// // //       </motion.div>
// // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // //         <CTASection />
// // //       </motion.div>
// // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // //         <FAQsSection />
// // //       </motion.div>
// // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // //         <Consultation />
// // //       </motion.div>
// // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // //         <Footer />
// // //       </motion.div>
// // //     </>
// // //   );
// // // }


// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { ShieldCheck, Phone } from "lucide-react";
// // import { useState, useEffect } from "react";

// // // ==================== Typewriter Component ====================
// // function Typewriter({ text = "", speed = 100 }) {
// //   const [displayedText, setDisplayedText] = useState("");
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     if (index <= text.length) {
// //       const timeout = setTimeout(() => {
// //         setDisplayedText(text.substring(0, index));
// //         setIndex(index + 1);
// //       }, speed);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [index, text, speed]);

// //   return <span>{displayedText}</span>;
// // }

// // // ==================== Hero Section Component ====================
// // export default function HeroSection() {
// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// //   };

// //   return (
// //     <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
// //       {/* BACKGROUND IMAGE */}
// //       <div className="absolute inset-0">
// //         <Image
// //           src="/closeupjustice.jpg"
// //           alt="Law Firm in Bangalore - S Jain Attorneys"
// //           fill
// //           priority
// //           className="object-cover object-right opacity-60"
// //         />
// //       </div>

// //       {/* DARK LEFT GRADIENT */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>

// //       {/* GOLD LIGHT GLOW */}
// //       <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// //       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
// //         <motion.div
// //           className="max-w-3xl"
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true, amount: 0.3 }}
// //         >
// //           {/* Badge */}
// //           <motion.div
// //             variants={fadeUp}
// //             className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5"
// //           >
// //             <ShieldCheck size={16} />
// //             Advocates & Legal Consultants
// //           </motion.div>

// //           {/* HERO HEADING */}
// //           <motion.h1
// //             variants={fadeUp}
// //             className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8"
// //           >
// //             <Typewriter
// //               text="Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services"
// //               speed={30}
// //             />
// //           </motion.h1>

// //           {/* Subtext paragraphs */}
// //           <motion.div variants={fadeUp} className="space-y-4 text-gray-300 text-lg mb-10">
// //             <p>
// //               S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services.
// //             </p>
// //             <p>
// //               Our experienced attorneys and advocates provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India.
// //             </p>
// //             <p>
// //               We combine integrity, experience, and practical legal insight to protect your rights and advance your interests.
// //             </p>
// //           </motion.div>

// //           {/* Buttons */}
// //           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
// //             <Link href="/legal-consultation-in-bangalore">
// //               <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// //                 Book Confidential Consultation
// //               </button>
// //             </Link>

// //             <Link href="#practice-areas">
// //               <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// //                 View Practice Areas
// //               </button>
// //             </Link>

// //             <a
// //               href="tel:+919000000000"
// //               className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// //             >
// //               <Phone size={22} className="text-white hover:text-black" />
// //             </a>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }


// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ShieldCheck, Phone } from "lucide-react";
// import { useState, useEffect } from "react";

// // ==================== Looping Typewriter Component ====================
// function LoopingTypewriter({ sentences = [], typingSpeed = 50, deletingSpeed = 30, pause = 1500 }) {
//   const [text, setText] = useState("");
//   const [index, setIndex] = useState(0); // index in sentences array
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     let timeout;

//     const currentSentence = sentences[index];

//     if (!isDeleting && text.length < currentSentence.length) {
//       // Typing
//       timeout = setTimeout(() => {
//         setText(currentSentence.substring(0, text.length + 1));
//       }, typingSpeed);
//     } else if (!isDeleting && text.length === currentSentence.length) {
//       // Pause before deleting
//       timeout = setTimeout(() => setIsDeleting(true), pause);
//     } else if (isDeleting && text.length > 0) {
//       // Deleting
//       timeout = setTimeout(() => {
//         setText(currentSentence.substring(0, text.length - 1));
//       }, deletingSpeed);
//     } else if (isDeleting && text.length === 0) {
//       // Move to next sentence
//       setIsDeleting(false);
//       setIndex((prev) => (prev + 1) % sentences.length);
//     }

//     return () => clearTimeout(timeout);
//   }, [text, isDeleting, index, sentences, typingSpeed, deletingSpeed, pause]);

//   return <span className="text-[#C9A24D] font-extrabold">{text}</span>;
// }

// // ==================== Hero Section ====================
// export default function HeroSection() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const sentences = [
//     "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services",
//     "Providing expert legal solutions for individuals, businesses, startups & NRIs",
//     "Integrity, experience, and practical legal insight to protect your rights"
//   ];

//   return (
//     <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <Image
//           src="/closeupjustice.jpg"
//           alt="Law Firm in Bangalore"
//           fill
//           priority
//           className="object-cover object-right opacity-60"
//         />
//       </div>

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>
//       <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

//       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
//         <motion.div
//           className="max-w-3xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Badge */}
//           <motion.div
//             variants={fadeUp}
//             className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5"
//           >
//             <ShieldCheck size={16} />
//             Advocates & Legal Consultants
//           </motion.div>

//           {/* HERO HEADING */}
//           <motion.h1
//             variants={fadeUp}
//             className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8"
//           >
//             <LoopingTypewriter sentences={sentences} typingSpeed={50} deletingSpeed={30} pause={1500} />
//           </motion.h1>

//           {/* Subtext */}
//           <motion.div variants={fadeUp} className="space-y-4 text-gray-300 text-lg mb-10">
//             <p>
//               S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services.
//             </p>
//             <p>
//               Our experienced attorneys and advocates provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India.
//             </p>
//             <p>
//               We combine integrity, experience, and practical legal insight to protect your rights and advance your interests.
//             </p>
//           </motion.div>

//           {/* Buttons */}
//           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
//             <Link href="/legal-consultation-in-bangalore">
//               <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
//                 Book Confidential Consultation
//               </button>
//             </Link>

//             <Link href="#practice-areas">
//               <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
//                 View Practice Areas
//               </button>
//             </Link>

//             <a
//               href="tel:+919000000000"
//               className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
//             >
//               <Phone size={22} className="text-white hover:text-black" />
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ShieldCheck, Phone, Scale, Briefcase, Award } from "lucide-react";
// import { useState, useEffect } from "react";
// import AboutFirm from "../components/AboutFirm";
// import ServiceOverview from "../components/ServiceOverview";
// import PracticeAreas from "../components/PracticeAreas";
// import WhyChooseUs from "../components/WhyChooseUs";
// import LegalServicesSections from "../components/LegalServicesSections";
// import Testimonials from "../components/Testimonials";
// import CTASection from "../components/CTASection";
// import FAQsSection from "../components/FAQsSection";
// import Consultation from "../components/Consultation";
// import Footer from "../components/Footer";

// // ==================== Looping Typewriter H1 ====================
// function LoopingH1({ sentence, typingSpeed = 50, deletingSpeed = 30, pause = 2000 }) {
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     let timeout;

//     if (!isDeleting && text.length < sentence.length) {
//       // Typing
//       timeout = setTimeout(() => setText(sentence.substring(0, text.length + 1)), typingSpeed);
//     } else if (!isDeleting && text.length === sentence.length) {
//       // Pause before deleting
//       timeout = setTimeout(() => setIsDeleting(true), pause);
//     } else if (isDeleting && text.length > 0) {
//       // Deleting
//       timeout = setTimeout(() => setText(sentence.substring(0, text.length - 1)), deletingSpeed);
//     } else if (isDeleting && text.length === 0) {
//       // Restart typing
//       setIsDeleting(false);
//     }

//     return () => clearTimeout(timeout);
//   }, [text, isDeleting, sentence, typingSpeed, deletingSpeed, pause]);

//   return (
//     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C9A24D] leading-snug">
//       {text}
//       <span className="animate-pulse">|</span>
//     </h1>
//   );
// }

// // ==================== Hero Section ====================
// export default function HeroSection() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };

//   const sentence =
//     "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services";

//   return (
//     <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <Image
//           src="/closeupjustice.jpg"
//           alt="Law Firm in Bangalore"
//           fill
//           priority
//           className="object-cover object-right opacity-60"
//         />
//       </div>

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>
//       <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

//       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
//         <motion.div
//           className="max-w-3xl"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Badge */}
//           <motion.div
//             variants={fadeUp}
//             className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5"
//           >
//             <ShieldCheck size={16} />
//             Advocates & Legal Consultants
//           </motion.div>

//           {/* Animated H1 */}
//           <motion.div variants={fadeUp} className="mb-8">
//             <LoopingH1 sentence={sentence} />
//           </motion.div>

//           {/* Subtext */}
//           <motion.div variants={fadeUp} className="space-y-4 text-gray-300 text-lg mb-10">
//             <p>
//               S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal
//               representation in corporate law, civil litigation, criminal defense, property
//               disputes, and NRI legal services.
//             </p>
//             <p>
//               Our experienced attorneys and advocates provide strategic, result-oriented legal
//               solutions for individuals, businesses, startups, and NRIs across India.
//             </p>
//             <p>
//               We combine integrity, experience, and practical legal insight to protect your rights
//               and advance your interests.
//             </p>
//           </motion.div>

//           {/* Buttons */}
//           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
//             <Link href="/legal-consultation-in-bangalore">
//               <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
//                 Book Confidential Consultation
//               </button>
//             </Link>

//             <Link href="#practice-areas">
//               <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
//                 View Practice Areas
//               </button>
//             </Link>

//             <a
//               href="tel:+919000000000"
//               className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
//             >
//               <Phone size={22} className="text-white hover:text-black" />
//             </a>
//              {/* RESPONSE TEXT */}
//              <p className="text-gray-400 text-sm mb-10">
//                Response within 24 hours guaranteed.
//              </p>
//              {/* TRUST INDICATORS */}
//              <div className="flex flex-col sm:flex-row gap-8 text-gray-400 border-t border-gray-800 pt-8">
//                <div className="flex items-center gap-3">
//                  <Award size={18} className="text-[#C9A24D]" />
//                  15+ Years Experience
//                </div>
//                <div className="flex items-center gap-3">
//                  <Briefcase size={18} className="text-[#C9A24D]" />
//                  1000+ Cases Successfully Handled
//                </div>
//                <div className="flex items-center gap-3">
//                  <Scale size={18} className="text-[#C9A24D]" />
//                  Karnataka High Court & District Courts
//                </div>
//              </div>
//           </motion.div>
//         </motion.div>
//          {/* ================= OTHER SECTIONS ================= */}
//             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//               <AboutFirm />
//             </motion.div>
//             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//               <ServiceOverview />
//             </motion.div>
//             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//               <PracticeAreas />
//             </motion.div>
//             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//               <WhyChooseUs />
//             </motion.div>
//             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//               <LegalServicesSections />
//             </motion.div>
//             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//               <Testimonials />
//             </motion.div>
//             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//               <CTASection />
//             </motion.div>
//             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//               <FAQsSection />
//             </motion.div>
//             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//               <Consultation />
//             </motion.div>
//             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
//               <Footer />
//             </motion.div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ShieldCheck, Phone, Scale, Briefcase, Award } from "lucide-react";
// import { useState, useEffect } from "react";

// import AboutFirm from "../components/AboutFirm";
// import ServiceOverview from "../components/ServiceOverview";
// import PracticeAreas from "../components/PracticeAreas";
// import WhyChooseUs from "../components/WhyChooseUs";
// import LegalServicesSections from "../components/LegalServicesSections";
// import Testimonials from "../components/Testimonials";
// import CTASection from "../components/CTASection";
// import FAQsSection from "../components/FAQsSection";
// import Consultation from "../components/Consultation";
// import Footer from "../components/Footer";

// // ------------------ Typewriter H1 ------------------
// function LoopingH1({ sentence, typingSpeed = 50, deletingSpeed = 30, pause = 2000 }) {
//   const [text, setText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     let timeout;

//     if (!isDeleting && text.length < sentence.length) {
//       timeout = setTimeout(() => setText(sentence.substring(0, text.length + 1)), typingSpeed);
//     } else if (!isDeleting && text.length === sentence.length) {
//       timeout = setTimeout(() => setIsDeleting(true), pause);
//     } else if (isDeleting && text.length > 0) {
//       timeout = setTimeout(() => setText(sentence.substring(0, text.length - 1)), deletingSpeed);
//     } else if (isDeleting && text.length === 0) {
//       setIsDeleting(false);
//     }

//     return () => clearTimeout(timeout);
//   }, [text, isDeleting, sentence, typingSpeed, deletingSpeed, pause]);

//   return (
//     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C9A24D] leading-snug">
//       {text}
//       <span className="inline-block animate-pulse">|</span>
//     </h1>
//   );
// }

// // ------------------ Motion Wrapper ------------------
// const FadeInSection = ({ children }) => {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
//   };
//   return (
//     <motion.div
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.3 }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// // ------------------ Hero Section ------------------
// export default function HeroSection() {
//   const sentence =
//     "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services";

//   return (
//     <>
//       <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
//         {/* Background */}
//         <div className="absolute inset-0">
//           <Image
//             src="/closeupjustice.jpg"
//             alt="Law Firm in Bangalore"
//             fill
//             priority
//             className="object-cover object-right opacity-60"
//           />
//         </div>

//         {/* Gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/30"></div>

//         {/* Golden glow */}
//         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

//         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
//           <FadeInSection>
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
//               <ShieldCheck size={16} />
//               Advocates & Legal Consultants
//             </div>

//             {/* Animated H1 */}
//             <div className="mb-8">
//               <LoopingH1 sentence={sentence} />
//             </div>

//             {/* Subtext */}
//             <div className="space-y-4 text-gray-300 text-lg mb-10">
//               <p>
//                 S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal
//                 representation in corporate law, civil litigation, criminal defense, property
//                 disputes, and NRI legal services.
//               </p>
//               <p>
//                 Our experienced attorneys and advocates provide strategic, result-oriented legal
//                 solutions for individuals, businesses, startups, and NRIs across India.
//               </p>
//               <p>
//                 We combine integrity, experience, and practical legal insight to protect your rights
//                 and advance your interests.
//               </p>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mb-6">
//               {/* Book Consultation */}
//               <Link href="/legal-consultation-in-bangalore" className="w-full sm:w-auto">
//                 <button className="w-full sm:w-auto bg-[#C9A24D] hover:bg-[#E6C676] text-black px-6 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
//                   Book Confidential Consultation
//                 </button>
//               </Link>

//               {/* View Practice Areas */}
//               <Link href="#practice-areas" className="w-full sm:w-auto">
//                 <button className="w-full sm:w-auto border border-[#C9A24D] text-[#C9A24D] px-6 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
//                   View Practice Areas
//                 </button>
//               </Link>

              
//             </div>
//             {/* Response Text */}
//             <p className="text-gray-300 text-sm mb-10">
//               Response within 24 hours guaranteed.
//             </p>

//             {/* Trust Indicators */}
//             <div className="flex flex-col sm:flex-row gap-8 text-gray-200 border-t border-gray-400 pt-8">
//               <div className="flex items-center gap-3">
//                 <Award size={18} className="text-[#C9A24D]" />
//                 15+ Years Experience
//               </div>
//               <div className="flex items-center gap-3">
//                 <Briefcase size={18} className="text-[#C9A24D]" />
//                 1000+ Cases Successfully Handled
//               </div>
//               <div className="flex items-center gap-3">
//                 <Scale size={18} className="text-[#C9A24D]" />
//                 Karnataka High Court & District Courts
//               </div>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* ================= Other Sections ================= */}
//       <FadeInSection><AboutFirm /></FadeInSection>
//       <FadeInSection><ServiceOverview /></FadeInSection>
//       <FadeInSection><PracticeAreas /></FadeInSection>
//       <FadeInSection><WhyChooseUs /></FadeInSection>
//       <FadeInSection><LegalServicesSections /></FadeInSection>
//       <FadeInSection><Testimonials /></FadeInSection>
//       <FadeInSection><CTASection /></FadeInSection>
//       <FadeInSection><FAQsSection /></FadeInSection>
//       <FadeInSection><Consultation /></FadeInSection>
//       <FadeInSection><Footer /></FadeInSection>
//     </>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Phone, Scale, Briefcase, Award } from "lucide-react";
import { useState, useEffect } from "react";

import AboutFirm from "../components/AboutFirm";
import ServiceOverview from "../components/ServiceOverview";
import PracticeAreas from "../components/PracticeAreas";
import WhyChooseUs from "../components/WhyChooseUs";
import LegalServicesSections from "../components/LegalServicesSections";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import FAQsSection from "../components/FAQsSection";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer";

// ------------------ Typewriter H1 ------------------
function LoopingH1({ sentence, typingSpeed = 50, deletingSpeed = 30, pause = 2000 }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && text.length < sentence.length) {
      timeout = setTimeout(() => setText(sentence.substring(0, text.length + 1)), typingSpeed);
    } else if (!isDeleting && text.length === sentence.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => setText(sentence.substring(0, text.length - 1)), deletingSpeed);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, sentence, typingSpeed, deletingSpeed, pause]);

  return (
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C9A24D] leading-snug">
      {text}
      <span className="inline-block animate-pulse">|</span>
    </h1>
  );
}

// ------------------ Motion Wrapper ------------------
const FadeInSection = ({ children }) => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// ------------------ Hero Section ------------------
export default function HeroSection() {
  const sentence =
    "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services";

  // ------------------ Handle Phone Click ------------------
  // const handlePhoneClick = () => {
  //   if (typeof window !== "undefined") {
  //     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  //     const phoneNumber = "+91";

  //     if (isMobile) {
  //       window.location.href = `tel:${phoneNumber}`;
  //     } else {
  //       navigator.clipboard.writeText(phoneNumber);
  //       alert(`Phone number ${phoneNumber} copied to clipboard`);
  //     }
  //   }
  // };
const handlePhoneClick = () => {
  const phoneNumber = "";
  window.location.href = `tel:${phoneNumber}`;
};
  return (
    <>
      {/* ================= Hero Section ================= */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/closeupjustice.jpg"
            alt="Law Firm in Bangalore"
            fill
            priority
            className="object-cover object-right opacity-60"
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/30"></div>

        {/* Golden glow */}
        <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
          <FadeInSection>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
              <ShieldCheck size={16} />
              Advocates & Legal Consultants
            </div>

            {/* Animated H1 */}
            <div className="mb-8">
              <LoopingH1 sentence={sentence} />
            </div>

            {/* Subtext */}
            <div className="space-y-4 text-gray-300 text-lg mb-10">
              <p>
                S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal
                representation in corporate law, civil litigation, criminal defense, property
                disputes, and NRI legal services.
              </p>
              <p>
                Our experienced attorneys and advocates provide strategic, result-oriented legal
                solutions for individuals, businesses, startups, and NRIs across India.
              </p>
              <p>
                We combine integrity, experience, and practical legal insight to protect your rights
                and advance your interests.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link href="/legal-consultation-in-bangalore" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-[#C9A24D] hover:bg-[#E6C676] text-black px-6 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
                  Book Confidential Consultation
                </button>
              </Link>

              <Link href="#practice-areas" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto border border-[#C9A24D] text-[#C9A24D] px-6 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
                  View Practice Areas
                </button>
              </Link>
            </div>

            {/* Response Text */}
            <p className="text-gray-300 text-sm mb-10">
              Response within 24 hours guaranteed.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row gap-8 text-gray-200 border-t border-gray-400 pt-8">
              <div className="flex items-center gap-3">
                <Award size={18} className="text-[#C9A24D]" />
                15+ Years Experience
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-[#C9A24D]" />
                1000+ Cases Successfully Handled
              </div>
              <div className="flex items-center gap-3">
                <Scale size={18} className="text-[#C9A24D]" />
                Karnataka High Court & District Courts
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* ================= Sticky Left Phone Button ================= */}
       <div className="fixed left-4 bottom-12 z-50 flex items-center">
  <button
    onClick={handlePhoneClick}
    className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] bg-[#C9A24D]/80 hover:bg-[#C9A24D] transition-all duration-300 shadow-lg"
  >
    <Phone size={22} className="text-white hover:text-black" />
  </button>
</div>
      </section>

      {/* ================= Other Sections ================= */}
      <FadeInSection><AboutFirm /></FadeInSection>
      <FadeInSection><ServiceOverview /></FadeInSection>
      <FadeInSection><PracticeAreas /></FadeInSection>
      <FadeInSection><WhyChooseUs /></FadeInSection>
      <FadeInSection><LegalServicesSections /></FadeInSection>
      <FadeInSection><Testimonials /></FadeInSection>
      <FadeInSection><CTASection /></FadeInSection>
      <FadeInSection><FAQsSection /></FadeInSection>
      <FadeInSection><Consultation /></FadeInSection>
      <FadeInSection><Footer /></FadeInSection>
    </>
  );
}