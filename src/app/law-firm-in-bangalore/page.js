
// // // // // // // // // // "use client";

// // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // import Image from "next/image";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";
// // // // // // // // // // import AboutFirm from "../components/AboutFirm";
// // // // // // // // // // import ServiceOverview from "../components/ServiceOverview";
// // // // // // // // // // import PracticeAreas from "../components/PracticeAreas";
// // // // // // // // // // import WhyChooseUs from "../components/WhyChooseUs";
// // // // // // // // // // import LegalServicesSections from "../components/LegalServicesSections";
// // // // // // // // // // import Testimonials from "../components/Testimonials";
// // // // // // // // // // import CTASection from "../components/CTASection";
// // // // // // // // // // import FAQsSection from "../components/FAQsSection";
// // // // // // // // // // import Consultation from "../components/Consultation";
// // // // // // // // // // import Footer from "../components/Footer";
// // // // // // // // // // export default function page() {

// // // // // // // // // //   const fadeUp = {
// // // // // // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // // // // // //     visible: {
// // // // // // // // // //       opacity: 1,
// // // // // // // // // //       y: 0,
// // // // // // // // // //       transition: { duration: 0.8 }
// // // // // // // // // //     }
// // // // // // // // // //   };

// // // // // // // // // //   return (

// // // // // // // // // //     <>
// // // // // // // // // //       <section
// // // // // // // // // //         className="
// // // // // // // // // //       relative
// // // // // // // // // //       w-full
// // // // // // // // // //       min-h-screen
// // // // // // // // // //       flex
// // // // // // // // // //       items-start
// // // // // // // // // //       overflow-hidden
// // // // // // // // // //       bg-gradient-to-br
// // // // // // // // // //       from-black
// // // // // // // // // //       via-black
// // // // // // // // // //       to-[#C9A24D]/90
// // // // // // // // // //       pt-[140px]
// // // // // // // // // //       pb-[110px]
// // // // // // // // // //       "
// // // // // // // // // //       >

// // // // // // // // // //         {/* GOLD GLOW */}
// // // // // // // // // //         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A24D]/10 blur-[140px] rounded-full"></div>

// // // // // // // // // //         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

// // // // // // // // // //           <div className="grid lg:grid-cols-2 gap-14 items-start">

// // // // // // // // // //             {/* LEFT CONTENT */}
// // // // // // // // // //             <motion.div
// // // // // // // // // //               initial="hidden"
// // // // // // // // // //               animate="visible"
// // // // // // // // // //               variants={fadeUp}
// // // // // // // // // //             >

// // // // // // // // // //               {/* BADGE */}
// // // // // // // // // //               <div className="
// // // // // // // // // //               inline-flex
// // // // // // // // // //               items-center
// // // // // // // // // //               gap-2
// // // // // // // // // //               border border-[#C9A24D]/40
// // // // // // // // // //               text-[#C9A24D]
// // // // // // // // // //               px-4 py-2
// // // // // // // // // //               rounded-full
// // // // // // // // // //               text-sm
// // // // // // // // // //               mb-6
// // // // // // // // // //               bg-[#C9A24D]/5
// // // // // // // // // //             ">
// // // // // // // // // //                 <ShieldCheck size={16} />
// // // // // // // // // //                 Advocates & Legal Consultants
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* SEO H1 */}
// // // // // // // // // //               <h1 className="
// // // // // // // // // //               text-4xl
// // // // // // // // // //               sm:text-5xl
// // // // // // // // // //               lg:text-6xl
// // // // // // // // // //               font-bold
// // // // // // // // // //               text-white
// // // // // // // // // //               leading-tight
// // // // // // // // // //               mb-6
// // // // // // // // // //             ">
// // // // // // // // // //                 Leading Law Firm in{" "}
// // // // // // // // // //                 <span className="text-[#C9A24D]">Bangalore</span>{" "}
// // // // // // // // // //                 for Corporate, Civil, Criminal & Property Legal Services
// // // // // // // // // //               </h1>

// // // // // // // // // //               {/* SUBTEXT */}
// // // // // // // // // //               <p className="
// // // // // // // // // //               text-gray-300
// // // // // // // // // //               text-lg
// // // // // // // // // //               max-w-xl
// // // // // // // // // //               leading-relaxed
// // // // // // // // // //               mb-8
// // // // // // // // // //             ">

// // // // // // // // // //                 S Jain & Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services. Our experienced attorneys and advocates provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India. We combine integrity, experience, and practical legal insight to protect your rights and advance your interests.
// // // // // // // // // //               </p>

// // // // // // // // // //               {/* BUTTONS */}
// // // // // // // // // //               <div className="flex items-center gap-4 mb-4 whitespace-nowrap">

// // // // // // // // // //                 {/* Book Confidential Consultation */}
// // // // // // // // // //                 <Link href="/legal-consultation-in-bangalore">
// // // // // // // // // //                   <button
// // // // // // // // // //                     className="
// // // // // // // // // //         flex-shrink-0
// // // // // // // // // //         bg-gradient-to-r
// // // // // // // // // //         from-[#C9A24D]
// // // // // // // // // //         to-[#E6C676]
// // // // // // // // // //         text-black
// // // // // // // // // //         px-7 py-3
// // // // // // // // // //         font-semibold
// // // // // // // // // //         rounded-md
// // // // // // // // // //         hover:scale-105
// // // // // // // // // //         hover:shadow-[0_0_25px_rgba(201,162,77,0.5)]
// // // // // // // // // //         transition
// // // // // // // // // //       "
// // // // // // // // // //                   >
// // // // // // // // // //                     Book Confidential Consultation
// // // // // // // // // //                   </button>
// // // // // // // // // //                 </Link>

// // // // // // // // // //                 {/* View Practice Areas */}
// // // // // // // // // //                 <Link href="#practice-areas">
// // // // // // // // // //                   <button
// // // // // // // // // //                     className="
// // // // // // // // // //         flex-shrink-0
// // // // // // // // // //         border border-[#C9A24D]
// // // // // // // // // //         text-[#C9A24D]
// // // // // // // // // //         px-7 py-3
// // // // // // // // // //         font-semibold
// // // // // // // // // //         rounded-md
// // // // // // // // // //         hover:bg-gradient-to-r
// // // // // // // // // //         hover:from-[#C9A24D]
// // // // // // // // // //         hover:to-[#E6C676]
// // // // // // // // // //         hover:text-black
// // // // // // // // // //         transition
// // // // // // // // // //       "
// // // // // // // // // //                   >
// // // // // // // // // //                     View Practice Areas
// // // // // // // // // //                   </button>
// // // // // // // // // //                 </Link>

// // // // // // // // // //                 {/* Call Now */}
// // // // // // // // // //                 <a
// // // // // // // // // //                   href="tel:+919000000000"
// // // // // // // // // //                   className="
// // // // // // // // // //       flex-shrink-0
// // // // // // // // // //       flex
// // // // // // // // // //       items-center
// // // // // // // // // //       justify-center
// // // // // // // // // //       w-12 h-12
// // // // // // // // // //       rounded-full
// // // // // // // // // //       border border-[#C9A24D]
// // // // // // // // // //       hover:bg-gradient-to-r
// // // // // // // // // //       hover:from-[#C9A24D]
// // // // // // // // // //       hover:to-[#E6C676]
// // // // // // // // // //       transition
// // // // // // // // // //     "
// // // // // // // // // //                 >
// // // // // // // // // //                   <Phone size={20} className="text-white hover:text-black" />
// // // // // // // // // //                 </a>

// // // // // // // // // //               </div>

// // // // // // // // // //               {/* RESPONSE ASSURANCE */}
// // // // // // // // // //               <p className="text-gray-400 text-sm mb-8">
// // // // // // // // // //                 Response within 24 hours guaranteed.
// // // // // // // // // //               </p>

// // // // // // // // // //               {/* TRUST INDICATORS */}
// // // // // // // // // //               <div className="flex flex-wrap gap-8 text-gray-400 border-t border-gray-800 pt-6">

// // // // // // // // // //                 <div className="flex items-center gap-2">
// // // // // // // // // //                   <Award size={18} className="text-[#C9A24D]" />
// // // // // // // // // //                   15+ Years Experience
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <div className="flex items-center gap-2">
// // // // // // // // // //                   <Briefcase size={18} className="text-[#C9A24D]" />
// // // // // // // // // //                   1000+ Cases Successfully Handled
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <div className="flex items-center gap-2">
// // // // // // // // // //                   <Scale size={18} className="text-[#C9A24D]" />
// // // // // // // // // //                   Karnataka High Court & District Courts
// // // // // // // // // //                 </div>

// // // // // // // // // //               </div>

// // // // // // // // // //             </motion.div>

// // // // // // // // // //             {/* RIGHT IMAGE */}
// // // // // // // // // //             <motion.div
// // // // // // // // // //               initial={{ opacity: 0, x: 80 }}
// // // // // // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // // // // // //               transition={{ duration: 1 }}
// // // // // // // // // //               className="relative flex justify-center lg:justify-end"
// // // // // // // // // //             >

// // // // // // // // // //               <div className="relative w-full max-w-lg">

// // // // // // // // // //                 {/* IMAGE GLOW */}
// // // // // // // // // //                 <div className="absolute -inset-2 bg-[#C9A24D]/20 blur-2xl rounded-xl"></div>

// // // // // // // // // //                 {/* IMAGE */}
// // // // // // // // // //                 <Image
// // // // // // // // // //                   src="/closeupjustice.jpg"
// // // // // // // // // //                   alt="Law Firm in Bangalore - S Jain & Attorneys"
// // // // // // // // // //                   width={550}
// // // // // // // // // //                   height={650}
// // // // // // // // // //                   priority
// // // // // // // // // //                   className="
// // // // // // // // // //                   relative
// // // // // // // // // //                   rounded-xl
// // // // // // // // // //                   border border-[#C9A24D]/40
// // // // // // // // // //                   object-cover
// // // // // // // // // //                   w-full
// // // // // // // // // //                 "
// // // // // // // // // //                 />

// // // // // // // // // //               </div>

// // // // // // // // // //             </motion.div>

// // // // // // // // // //           </div>

// // // // // // // // // //         </div>

// // // // // // // // // //       </section>
// // // // // // // // // //       <AboutFirm />
// // // // // // // // // //       <ServiceOverview />
// // // // // // // // // //       <PracticeAreas />
// // // // // // // // // //       <WhyChooseUs />
// // // // // // // // // //       <LegalServicesSections />
// // // // // // // // // //       <Testimonials />
// // // // // // // // // //       <CTASection />
// // // // // // // // // //       <FAQsSection />
// // // // // // // // // //       <Consultation />
// // // // // // // // // //       <Footer />

// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // }



// // // // // // // // // // "use client";

// // // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // // import Image from "next/image";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";

// // // // // // // // // // import AboutFirm from "../components/AboutFirm";
// // // // // // // // // // import ServiceOverview from "../components/ServiceOverview";
// // // // // // // // // // import PracticeAreas from "../components/PracticeAreas";
// // // // // // // // // // import WhyChooseUs from "../components/WhyChooseUs";
// // // // // // // // // // import LegalServicesSections from "../components/LegalServicesSections";
// // // // // // // // // // import Testimonials from "../components/Testimonials";
// // // // // // // // // // import CTASection from "../components/CTASection";
// // // // // // // // // // import FAQsSection from "../components/FAQsSection";
// // // // // // // // // // import Consultation from "../components/Consultation";
// // // // // // // // // // import Footer from "../components/Footer";

// // // // // // // // // // export default function Page() {
// // // // // // // // // //   const fadeUp = {
// // // // // // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // // // // // //     visible: {
// // // // // // // // // //       opacity: 1,
// // // // // // // // // //       y: 0,
// // // // // // // // // //       transition: { duration: 0.8 },
// // // // // // // // // //     },
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //     {/* ================= HERO SECTION ================= */}
// // // // // // // // // // <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">

// // // // // // // // // //   {/* BACKGROUND IMAGE */}
// // // // // // // // // //   <div className="absolute inset-0">
// // // // // // // // // //     <Image
// // // // // // // // // //       src="/closeupjustice.jpg"
// // // // // // // // // //       alt="Law Firm in Bangalore - S Jain & Attorneys"
// // // // // // // // // //       fill
// // // // // // // // // //       priority
// // // // // // // // // //       className="object-cover object-right opacity-60"
// // // // // // // // // //     />
// // // // // // // // // //   </div>

// // // // // // // // // //   {/* DARK LEFT GRADIENT OVERLAY */}
// // // // // // // // // //   <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>

// // // // // // // // // //   {/* GOLD LIGHT GLOW */}
// // // // // // // // // //   <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // // // // // // // //   <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">

// // // // // // // // // //     <motion.div
// // // // // // // // // //       initial="hidden"
// // // // // // // // // //       animate="visible"
// // // // // // // // // //       variants={fadeUp}
// // // // // // // // // //       className="max-w-3xl"
// // // // // // // // // //     >
// // // // // // // // // //       {/* BADGE */}
// // // // // // // // // //       <div className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
// // // // // // // // // //         <ShieldCheck size={16} />
// // // // // // // // // //         Advocates & Legal Consultants
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* HEADING */}
// // // // // // // // // //       <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8">
// // // // // // // // // //         Leading Law Firm in <br />
// // // // // // // // // //         <span className="text-[#C9A24D]">Bangalore</span> for Corporate, <br />
// // // // // // // // // //         Civil, Criminal & <br /> Property Legal Services
// // // // // // // // // //       </h1>

// // // // // // // // // //       {/* SUBTEXT */}
// // // // // // // // // //       <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
// // // // // // // // // //         S Jain & Attorneys is a reputed law firm in Bangalore delivering
// // // // // // // // // //         expert legal representation in corporate law, civil litigation,
// // // // // // // // // //         criminal defense, property disputes, and NRI legal services. Our
// // // // // // // // // //         experienced attorneys provide strategic, result-oriented legal
// // // // // // // // // //         solutions for individuals and businesses.
// // // // // // // // // //       </p>

// // // // // // // // // //       {/* BUTTONS */}
// // // // // // // // // //       <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-6">

// // // // // // // // // //         <Link href="/legal-consultation-in-bangalore">
// // // // // // // // // //           <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // // // // // // // //             Book Confidential Consultation
// // // // // // // // // //           </button>
// // // // // // // // // //         </Link>

// // // // // // // // // //         <Link href="#practice-areas">
// // // // // // // // // //           <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // // // // // // // //             View Practice Areas
// // // // // // // // // //           </button>
// // // // // // // // // //         </Link>

// // // // // // // // // //         <a
// // // // // // // // // //           href="tel:+919000000000"
// // // // // // // // // //           className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // // // // // // // // //         >
// // // // // // // // // //           <Phone size={22} className="text-white hover:text-black" />
// // // // // // // // // //         </a>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* RESPONSE TEXT */}
// // // // // // // // // //       <p className="text-gray-400 text-sm mb-10">
// // // // // // // // // //         Response within 24 hours guaranteed.
// // // // // // // // // //       </p>

// // // // // // // // // //       {/* TRUST INDICATORS */}
// // // // // // // // // //       <div className="flex flex-col sm:flex-row gap-8 text-gray-400 border-t border-gray-800 pt-8">
// // // // // // // // // //         <div className="flex items-center gap-3">
// // // // // // // // // //           <Award size={18} className="text-[#C9A24D]" />
// // // // // // // // // //           15+ Years Experience
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="flex items-center gap-3">
// // // // // // // // // //           <Briefcase size={18} className="text-[#C9A24D]" />
// // // // // // // // // //           1000+ Cases Successfully Handled
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="flex items-center gap-3">
// // // // // // // // // //           <Scale size={18} className="text-[#C9A24D]" />
// // // // // // // // // //           Karnataka High Court & District Courts
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </motion.div>

// // // // // // // // // //   </div>
// // // // // // // // // // </section>

// // // // // // // // // //       {/* ================= OTHER SECTIONS ================= */}
// // // // // // // // // //       <AboutFirm />
// // // // // // // // // //       <ServiceOverview />
// // // // // // // // // //       <PracticeAreas />
// // // // // // // // // //       <WhyChooseUs />
// // // // // // // // // //       <LegalServicesSections />
// // // // // // // // // //       <Testimonials />
// // // // // // // // // //       <CTASection />
// // // // // // // // // //       <FAQsSection />
// // // // // // // // // //       <Consultation />
// // // // // // // // // //       <Footer />
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // }




// // // // // // // // // "use client";

// // // // // // // // // import { motion } from "framer-motion";
// // // // // // // // // import Image from "next/image";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";

// // // // // // // // // import AboutFirm from "../components/AboutFirm";
// // // // // // // // // import ServiceOverview from "../components/ServiceOverview";
// // // // // // // // // import PracticeAreas from "../components/PracticeAreas";
// // // // // // // // // import WhyChooseUs from "../components/WhyChooseUs";
// // // // // // // // // import LegalServicesSections from "../components/LegalServicesSections";
// // // // // // // // // import Testimonials from "../components/Testimonials";
// // // // // // // // // import CTASection from "../components/CTASection";
// // // // // // // // // import FAQsSection from "../components/FAQsSection";
// // // // // // // // // import Consultation from "../components/Consultation";
// // // // // // // // // import Footer from "../components/Footer";

// // // // // // // // // export default function Page() {
// // // // // // // // //   // Standard fade-up animation
// // // // // // // // //   const fadeUp = {
// // // // // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // // // // //   };

// // // // // // // // //   // Stagger container for multiple elements
// // // // // // // // //   const staggerContainer = {
// // // // // // // // //     hidden: {},
// // // // // // // // //     visible: { transition: { staggerChildren: 0.2 } },
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       {/* ================= HERO SECTION ================= */}
// // // // // // // // //       <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">

// // // // // // // // //         {/* BACKGROUND IMAGE */}
// // // // // // // // //         <div className="absolute inset-0">
// // // // // // // // //           <Image
// // // // // // // // //             src="/closeupjustice.jpg"
// // // // // // // // //             alt="Law Firm in Bangalore - S Jain & Attorneys"
// // // // // // // // //             fill
// // // // // // // // //             priority
// // // // // // // // //             className="object-cover object-right opacity-60"
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         {/* DARK LEFT GRADIENT OVERLAY */}
// // // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>

// // // // // // // // //         {/* GOLD LIGHT GLOW */}
// // // // // // // // //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // // // // // // //         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">

// // // // // // // // //           <motion.div
// // // // // // // // //             className="max-w-3xl"
// // // // // // // // //             variants={staggerContainer}
// // // // // // // // //             initial="hidden"
// // // // // // // // //             whileInView="visible"
// // // // // // // // //             viewport={{ once: true, amount: 0.3 }}
// // // // // // // // //           >

// // // // // // // // //             {/* BADGE */}
// // // // // // // // //             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
// // // // // // // // //               <ShieldCheck size={16} />
// // // // // // // // //               Advocates & Legal Consultants
// // // // // // // // //             </motion.div>

// // // // // // // // //             {/* HEADING */}
// // // // // // // // //             <motion.h1
// // // // // // // // //               variants={fadeUp}
// // // // // // // // //               className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8"
// // // // // // // // //             >
// // // // // // // // //               Leading Law Firm in <br />
// // // // // // // // //               <span className="text-[#C9A24D]">Bangalore</span> for Corporate, <br />
// // // // // // // // //               Civil, Criminal & <br /> Property Legal Services
// // // // // // // // //             </motion.h1>

// // // // // // // // //             {/* SUBTEXT */}
// // // // // // // // //             <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
// // // // // // // // //               S Jain & Attorneys is a reputed law firm in Bangalore delivering
// // // // // // // // //               expert legal representation in corporate law, civil litigation,
// // // // // // // // //               criminal defense, property disputes, and NRI legal services. Our
// // // // // // // // //               experienced attorneys provide strategic, result-oriented legal
// // // // // // // // //               solutions for individuals and businesses.
// // // // // // // // //             </motion.p>

// // // // // // // // //             {/* BUTTONS */}
// // // // // // // // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-6">
// // // // // // // // //               <Link href="/legal-consultation-in-bangalore">
// // // // // // // // //                 <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // // // // // // //                   Book Confidential Consultation
// // // // // // // // //                 </button>
// // // // // // // // //               </Link>

// // // // // // // // //               <Link href="#practice-areas">
// // // // // // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // // // // // // //                   View Practice Areas
// // // // // // // // //                 </button>
// // // // // // // // //               </Link>

// // // // // // // // //               <a
// // // // // // // // //                 href="tel:+919000000000"
// // // // // // // // //                 className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // // // // // // // //               >
// // // // // // // // //                 <Phone size={22} className="text-white hover:text-black" />
// // // // // // // // //               </a>
// // // // // // // // //             </motion.div>

// // // // // // // // //             {/* RESPONSE TEXT */}
// // // // // // // // //             <motion.p variants={fadeUp} className="text-gray-400 text-sm mb-10">
// // // // // // // // //               Response within 24 hours guaranteed.
// // // // // // // // //             </motion.p>

// // // // // // // // //             {/* TRUST INDICATORS */}
// // // // // // // // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 text-gray-400 border-t border-gray-800 pt-8">
// // // // // // // // //               <div className="flex items-center gap-3">
// // // // // // // // //                 <Award size={18} className="text-[#C9A24D]" />
// // // // // // // // //                 15+ Years Experience
// // // // // // // // //               </div>

// // // // // // // // //               <div className="flex items-center gap-3">
// // // // // // // // //                 <Briefcase size={18} className="text-[#C9A24D]" />
// // // // // // // // //                 1000+ Cases Successfully Handled
// // // // // // // // //               </div>

// // // // // // // // //               <div className="flex items-center gap-3">
// // // // // // // // //                 <Scale size={18} className="text-[#C9A24D]" />
// // // // // // // // //                 Karnataka High Court & District Courts
// // // // // // // // //               </div>
// // // // // // // // //             </motion.div>

// // // // // // // // //           </motion.div>

// // // // // // // // //         </div>
// // // // // // // // //       </section>

// // // // // // // // //       {/* ================= OTHER SECTIONS ================= */}
// // // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // // //         <AboutFirm />
// // // // // // // // //       </motion.div>
// // // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // // //         <ServiceOverview />
// // // // // // // // //       </motion.div>
// // // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // // //         <PracticeAreas />
// // // // // // // // //       </motion.div>
// // // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // // //         <WhyChooseUs />
// // // // // // // // //       </motion.div>
// // // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // // //         <LegalServicesSections />
// // // // // // // // //       </motion.div>
// // // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // // //         <Testimonials />
// // // // // // // // //       </motion.div>
// // // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // // //         <CTASection />
// // // // // // // // //       </motion.div>
// // // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // // //         <FAQsSection />
// // // // // // // // //       </motion.div>
// // // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // // //         <Consultation />
// // // // // // // // //       </motion.div>
// // // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // // //         <Footer />
// // // // // // // // //       </motion.div>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // "use client";

// // // // // // // // import { motion } from "framer-motion";
// // // // // // // // import Image from "next/image";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";

// // // // // // // // import AboutFirm from "../components/AboutFirm";
// // // // // // // // import ServiceOverview from "../components/ServiceOverview";
// // // // // // // // import PracticeAreas from "../components/PracticeAreas";
// // // // // // // // import WhyChooseUs from "../components/WhyChooseUs";
// // // // // // // // import LegalServicesSections from "../components/LegalServicesSections";
// // // // // // // // import Testimonials from "../components/Testimonials";
// // // // // // // // import CTASection from "../components/CTASection";
// // // // // // // // import FAQsSection from "../components/FAQsSection";
// // // // // // // // import Consultation from "../components/Consultation";
// // // // // // // // import Footer from "../components/Footer";

// // // // // // // // export default function Page() {
// // // // // // // //   // Word-by-word heading animation
// // // // // // // //   const headingWords = [
// // // // // // // //     "Leading", "Law", "Firm", "in",
// // // // // // // //     "Bangalore", "for", "Corporate,", "Civil,", "Criminal", "&", "Property", "Legal", "Services"
// // // // // // // //   ];

// // // // // // // //   const wordAnimation = {
// // // // // // // //     hidden: { opacity: 0, y: 50, scale: 0.95 },
// // // // // // // //     visible: (i) => ({
// // // // // // // //       opacity: 1,
// // // // // // // //       y: 0,
// // // // // // // //       scale: 1,
// // // // // // // //       transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
// // // // // // // //     }),
// // // // // // // //   };

// // // // // // // //   // Standard fade-up animation for other sections
// // // // // // // //   const fadeUp = {
// // // // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {/* ================= HERO SECTION ================= */}
// // // // // // // //       <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">

// // // // // // // //         {/* BACKGROUND IMAGE */}
// // // // // // // //         <div className="absolute inset-0">
// // // // // // // //           <Image
// // // // // // // //             src="/closeupjustice.jpg"
// // // // // // // //             alt="Law Firm in Bangalore - S Jain & Attorneys"
// // // // // // // //             fill
// // // // // // // //             priority
// // // // // // // //             className="object-cover object-right opacity-60"
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //         {/* DARK LEFT GRADIENT OVERLAY */}
// // // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>

// // // // // // // //         {/* GOLD LIGHT GLOW */}
// // // // // // // //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // // // // // //         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">

// // // // // // // //           <motion.div
// // // // // // // //             className="max-w-3xl"
// // // // // // // //             initial="hidden"
// // // // // // // //             whileInView="visible"
// // // // // // // //             viewport={{ once: true, amount: 0.3 }}
// // // // // // // //           >

// // // // // // // //             {/* BADGE */}
// // // // // // // //             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
// // // // // // // //               <ShieldCheck size={16} />
// // // // // // // //               Advocates & Legal Consultants
// // // // // // // //             </motion.div>

// // // // // // // //             {/* HERO HEADING – WORD BY WORD */}
// // // // // // // //             <motion.h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8 flex flex-wrap gap-2">
// // // // // // // //               {headingWords.map((word, i) => (
// // // // // // // //                 <motion.span
// // // // // // // //                   key={i}
// // // // // // // //                   custom={i}
// // // // // // // //                   variants={wordAnimation}
// // // // // // // //                   initial="hidden"
// // // // // // // //                   animate="visible"
// // // // // // // //                   className={word.includes("Bangalore") ? "text-[#C9A24D]" : ""}
// // // // // // // //                 >
// // // // // // // //                   {word}
// // // // // // // //                 </motion.span>
// // // // // // // //               ))}
// // // // // // // //             </motion.h1>

// // // // // // // //             {/* SUBTEXT */}
// // // // // // // //             <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
// // // // // // // //               S Jain & Attorneys is a reputed law firm in Bangalore delivering
// // // // // // // //               expert legal representation in corporate law, civil litigation,
// // // // // // // //               criminal defense, property disputes, and NRI legal services. Our
// // // // // // // //               experienced attorneys provide strategic, result-oriented legal
// // // // // // // //               solutions for individuals and businesses.
// // // // // // // //             </motion.p>

// // // // // // // //             {/* BUTTONS */}
// // // // // // // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-6">
// // // // // // // //               <Link href="/legal-consultation-in-bangalore">
// // // // // // // //                 <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // // // // // //                   Book Confidential Consultation
// // // // // // // //                 </button>
// // // // // // // //               </Link>

// // // // // // // //               <Link href="#practice-areas">
// // // // // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // // // // // //                   View Practice Areas
// // // // // // // //                 </button>
// // // // // // // //               </Link>

// // // // // // // //               <a
// // // // // // // //                 href="tel:+919000000000"
// // // // // // // //                 className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // // // // // // //               >
// // // // // // // //                 <Phone size={22} className="text-white hover:text-black" />
// // // // // // // //               </a>
// // // // // // // //             </motion.div>

// // // // // // // //             {/* RESPONSE TEXT */}
// // // // // // // //             <motion.p variants={fadeUp} className="text-gray-400 text-sm mb-10">
// // // // // // // //               Response within 24 hours guaranteed.
// // // // // // // //             </motion.p>

// // // // // // // //             {/* TRUST INDICATORS */}
// // // // // // // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 text-gray-400 border-t border-gray-800 pt-8">
// // // // // // // //               <div className="flex items-center gap-3">
// // // // // // // //                 <Award size={18} className="text-[#C9A24D]" />
// // // // // // // //                 15+ Years Experience
// // // // // // // //               </div>

// // // // // // // //               <div className="flex items-center gap-3">
// // // // // // // //                 <Briefcase size={18} className="text-[#C9A24D]" />
// // // // // // // //                 1000+ Cases Successfully Handled
// // // // // // // //               </div>

// // // // // // // //               <div className="flex items-center gap-3">
// // // // // // // //                 <Scale size={18} className="text-[#C9A24D]" />
// // // // // // // //                 Karnataka High Court & District Courts
// // // // // // // //               </div>
// // // // // // // //             </motion.div>

// // // // // // // //           </motion.div>

// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= OTHER SECTIONS ================= */}
// // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // //         <AboutFirm />
// // // // // // // //       </motion.div>
// // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // //         <ServiceOverview />
// // // // // // // //       </motion.div>
// // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // //         <PracticeAreas />
// // // // // // // //       </motion.div>
// // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // //         <WhyChooseUs />
// // // // // // // //       </motion.div>
// // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // //         <LegalServicesSections />
// // // // // // // //       </motion.div>
// // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // //         <Testimonials />
// // // // // // // //       </motion.div>
// // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // //         <CTASection />
// // // // // // // //       </motion.div>
// // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // //         <FAQsSection />
// // // // // // // //       </motion.div>
// // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // //         <Consultation />
// // // // // // // //       </motion.div>
// // // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // // //         <Footer />
// // // // // // // //       </motion.div>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // "use client";

// // // // // // // import { motion } from "framer-motion";
// // // // // // // import Image from "next/image";
// // // // // // // import Link from "next/link";
// // // // // // // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";
// // // // // // // import { useState, useEffect } from "react";

// // // // // // // import AboutFirm from "../components/AboutFirm";
// // // // // // // import ServiceOverview from "../components/ServiceOverview";
// // // // // // // import PracticeAreas from "../components/PracticeAreas";
// // // // // // // import WhyChooseUs from "../components/WhyChooseUs";
// // // // // // // import LegalServicesSections from "../components/LegalServicesSections";
// // // // // // // import Testimonials from "../components/Testimonials";
// // // // // // // import CTASection from "../components/CTASection";
// // // // // // // import FAQsSection from "../components/FAQsSection";
// // // // // // // import Consultation from "../components/Consultation";
// // // // // // // import Footer from "../components/Footer";

// // // // // // // // ==================== Typewriter Component ====================
// // // // // // // function Typewriter({ words = [], loop = true, typingSpeed = 150, deletingSpeed = 50, delay = 1500 }) {
// // // // // // //   const [text, setText] = useState("");
// // // // // // //   const [wordIndex, setWordIndex] = useState(0);
// // // // // // //   const [isDeleting, setIsDeleting] = useState(false);

// // // // // // //   useEffect(() => {
// // // // // // //     let timeout;

// // // // // // //     const handleTyping = () => {
// // // // // // //       const currentWord = words[wordIndex];
// // // // // // //       if (isDeleting) {
// // // // // // //         setText(currentWord.substring(0, text.length - 1));
// // // // // // //       } else {
// // // // // // //         setText(currentWord.substring(0, text.length + 1));
// // // // // // //       }

// // // // // // //       let speed = isDeleting ? deletingSpeed : typingSpeed;

// // // // // // //       if (!isDeleting && text === currentWord) {
// // // // // // //         speed = delay;
// // // // // // //         setIsDeleting(true);
// // // // // // //       } else if (isDeleting && text === "") {
// // // // // // //         setIsDeleting(false);
// // // // // // //         setWordIndex((prev) => (prev + 1) % words.length);
// // // // // // //         speed = typingSpeed;
// // // // // // //       }

// // // // // // //       timeout = setTimeout(handleTyping, speed);
// // // // // // //     };

// // // // // // //     timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

// // // // // // //     return () => clearTimeout(timeout);
// // // // // // //   }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delay]);

// // // // // // //   return <span className="text-[#C9A24D] font-extrabold">{text}</span>;
// // // // // // // }

// // // // // // // // ==================== Main Page ====================
// // // // // // // export default function Page() {
// // // // // // //   const fadeUp = {
// // // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* ================= HERO SECTION ================= */}
// // // // // // //       <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
// // // // // // //         {/* BACKGROUND IMAGE */}
// // // // // // //         <div className="absolute inset-0">
// // // // // // //           <Image
// // // // // // //             src="/closeupjustice.jpg"
// // // // // // //             alt="Law Firm in Bangalore - S Jain & Attorneys"
// // // // // // //             fill
// // // // // // //             priority
// // // // // // //             className="object-cover object-right opacity-60"
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* DARK LEFT GRADIENT */}
// // // // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>

// // // // // // //         {/* GOLD LIGHT GLOW */}
// // // // // // //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // // // // //         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
// // // // // // //           <motion.div
// // // // // // //             className="max-w-3xl"
// // // // // // //             initial="hidden"
// // // // // // //             whileInView="visible"
// // // // // // //             viewport={{ once: true, amount: 0.3 }}
// // // // // // //           >
// // // // // // //             {/* BADGE */}
// // // // // // //             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
// // // // // // //               <ShieldCheck size={16} />
// // // // // // //               Advocates & Legal Consultants
// // // // // // //             </motion.div>

// // // // // // //             {/* HERO HEADING */}
// // // // // // //             <motion.h1
// // // // // // //               variants={fadeUp}
// // // // // // //               className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8"
// // // // // // //             >
// // // // // // //               Leading Law Firm in <br />
// // // // // // //               <Typewriter
// // // // // // //                 words={[
// // // // // // //                   "Bangalore",
// // // // // // //                   "Corporate Law",
// // // // // // //                   "Civil Litigation",
// // // // // // //                   "Criminal Defense",
// // // // // // //                   "Property Disputes",
// // // // // // //                 ]}
// // // // // // //                 typingSpeed={150}
// // // // // // //                 deletingSpeed={80}
// // // // // // //                 delay={1500}
// // // // // // //               />
// // // // // // //             </motion.h1>

// // // // // // //             {/* SUBTEXT */}
// // // // // // //             <motion.p variants={fadeUp} className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-10">
// // // // // // //               S Jain & Attorneys is a reputed law firm in Bangalore delivering
// // // // // // //               expert legal representation in corporate law, civil litigation,
// // // // // // //               criminal defense, property disputes, and NRI legal services. Our
// // // // // // //               experienced attorneys provide strategic, result-oriented legal
// // // // // // //               solutions for individuals and businesses.
// // // // // // //             </motion.p>

// // // // // // //             {/* BUTTONS */}
// // // // // // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 mb-6">
// // // // // // //               <Link href="/legal-consultation-in-bangalore">
// // // // // // //                 <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // // // // //                   Book Confidential Consultation
// // // // // // //                 </button>
// // // // // // //               </Link>

// // // // // // //               <Link href="#practice-areas">
// // // // // // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // // // // //                   View Practice Areas
// // // // // // //                 </button>
// // // // // // //               </Link>

// // // // // // //               <a
// // // // // // //                 href="tel:+919000000000"
// // // // // // //                 className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // // // // // //               >
// // // // // // //                 <Phone size={22} className="text-white hover:text-black" />
// // // // // // //               </a>
// // // // // // //             </motion.div>

// // // // // // //             {/* RESPONSE TEXT */}
// // // // // // //             <motion.p variants={fadeUp} className="text-gray-400 text-sm mb-10">
// // // // // // //               Response within 24 hours guaranteed.
// // // // // // //             </motion.p>

// // // // // // //             {/* TRUST INDICATORS */}
// // // // // // //             <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-8 text-gray-400 border-t border-gray-800 pt-8">
// // // // // // //               <div className="flex items-center gap-3">
// // // // // // //                 <Award size={18} className="text-[#C9A24D]" />
// // // // // // //                 15+ Years Experience
// // // // // // //               </div>

// // // // // // //               <div className="flex items-center gap-3">
// // // // // // //                 <Briefcase size={18} className="text-[#C9A24D]" />
// // // // // // //                 1000+ Cases Successfully Handled
// // // // // // //               </div>

// // // // // // //               <div className="flex items-center gap-3">
// // // // // // //                 <Scale size={18} className="text-[#C9A24D]" />
// // // // // // //                 Karnataka High Court & District Courts
// // // // // // //               </div>
// // // // // // //             </motion.div>
// // // // // // //           </motion.div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ================= OTHER SECTIONS ================= */}
// // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // //         <AboutFirm />
// // // // // // //       </motion.div>
// // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // //         <ServiceOverview />
// // // // // // //       </motion.div>
// // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // //         <PracticeAreas />
// // // // // // //       </motion.div>
// // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // //         <WhyChooseUs />
// // // // // // //       </motion.div>
// // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // //         <LegalServicesSections />
// // // // // // //       </motion.div>
// // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // //         <Testimonials />
// // // // // // //       </motion.div>
// // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // //         <CTASection />
// // // // // // //       </motion.div>
// // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // //         <FAQsSection />
// // // // // // //       </motion.div>
// // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // //         <Consultation />
// // // // // // //       </motion.div>
// // // // // // //       <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // // // //         <Footer />
// // // // // // //       </motion.div>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }


// // // // // // "use client";

// // // // // // import { motion } from "framer-motion";
// // // // // // import Image from "next/image";
// // // // // // import Link from "next/link";
// // // // // // import { ShieldCheck, Phone } from "lucide-react";
// // // // // // import { useState, useEffect } from "react";

// // // // // // // ==================== Typewriter Component ====================
// // // // // // function Typewriter({ text = "", speed = 100 }) {
// // // // // //   const [displayedText, setDisplayedText] = useState("");
// // // // // //   const [index, setIndex] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     if (index <= text.length) {
// // // // // //       const timeout = setTimeout(() => {
// // // // // //         setDisplayedText(text.substring(0, index));
// // // // // //         setIndex(index + 1);
// // // // // //       }, speed);
// // // // // //       return () => clearTimeout(timeout);
// // // // // //     }
// // // // // //   }, [index, text, speed]);

// // // // // //   return <span>{displayedText}</span>;
// // // // // // }

// // // // // // // ==================== Hero Section Component ====================
// // // // // // export default function HeroSection() {
// // // // // //   const fadeUp = {
// // // // // //     hidden: { opacity: 0, y: 40 },
// // // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
// // // // // //       {/* BACKGROUND IMAGE */}
// // // // // //       <div className="absolute inset-0">
// // // // // //         <Image
// // // // // //           src="/closeupjustice.jpg"
// // // // // //           alt="Law Firm in Bangalore - S Jain Attorneys"
// // // // // //           fill
// // // // // //           priority
// // // // // //           className="object-cover object-right opacity-60"
// // // // // //         />
// // // // // //       </div>

// // // // // //       {/* DARK LEFT GRADIENT */}
// // // // // //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>

// // // // // //       {/* GOLD LIGHT GLOW */}
// // // // // //       <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // // // //       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
// // // // // //         <motion.div
// // // // // //           className="max-w-3xl"
// // // // // //           initial="hidden"
// // // // // //           whileInView="visible"
// // // // // //           viewport={{ once: true, amount: 0.3 }}
// // // // // //         >
// // // // // //           {/* Badge */}
// // // // // //           <motion.div
// // // // // //             variants={fadeUp}
// // // // // //             className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5"
// // // // // //           >
// // // // // //             <ShieldCheck size={16} />
// // // // // //             Advocates & Legal Consultants
// // // // // //           </motion.div>

// // // // // //           {/* HERO HEADING */}
// // // // // //           <motion.h1
// // // // // //             variants={fadeUp}
// // // // // //             className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8"
// // // // // //           >
// // // // // //             <Typewriter
// // // // // //               text="Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services"
// // // // // //               speed={30}
// // // // // //             />
// // // // // //           </motion.h1>

// // // // // //           {/* Subtext paragraphs */}
// // // // // //           <motion.div variants={fadeUp} className="space-y-4 text-gray-300 text-lg mb-10">
// // // // // //             <p>
// // // // // //               S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services.
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               Our experienced attorneys and advocates provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India.
// // // // // //             </p>
// // // // // //             <p>
// // // // // //               We combine integrity, experience, and practical legal insight to protect your rights and advance your interests.
// // // // // //             </p>
// // // // // //           </motion.div>

// // // // // //           {/* Buttons */}
// // // // // //           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
// // // // // //             <Link href="/legal-consultation-in-bangalore">
// // // // // //               <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // // // //                 Book Confidential Consultation
// // // // // //               </button>
// // // // // //             </Link>

// // // // // //             <Link href="#practice-areas">
// // // // // //               <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // // // //                 View Practice Areas
// // // // // //               </button>
// // // // // //             </Link>

// // // // // //             <a
// // // // // //               href="tel:+919000000000"
// // // // // //               className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // // // // //             >
// // // // // //               <Phone size={22} className="text-white hover:text-black" />
// // // // // //             </a>
// // // // // //           </motion.div>
// // // // // //         </motion.div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }


// // // // // "use client";

// // // // // import { motion } from "framer-motion";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import { ShieldCheck, Phone } from "lucide-react";
// // // // // import { useState, useEffect } from "react";

// // // // // // ==================== Looping Typewriter Component ====================
// // // // // function LoopingTypewriter({ sentences = [], typingSpeed = 50, deletingSpeed = 30, pause = 1500 }) {
// // // // //   const [text, setText] = useState("");
// // // // //   const [index, setIndex] = useState(0); // index in sentences array
// // // // //   const [isDeleting, setIsDeleting] = useState(false);

// // // // //   useEffect(() => {
// // // // //     let timeout;

// // // // //     const currentSentence = sentences[index];

// // // // //     if (!isDeleting && text.length < currentSentence.length) {
// // // // //       // Typing
// // // // //       timeout = setTimeout(() => {
// // // // //         setText(currentSentence.substring(0, text.length + 1));
// // // // //       }, typingSpeed);
// // // // //     } else if (!isDeleting && text.length === currentSentence.length) {
// // // // //       // Pause before deleting
// // // // //       timeout = setTimeout(() => setIsDeleting(true), pause);
// // // // //     } else if (isDeleting && text.length > 0) {
// // // // //       // Deleting
// // // // //       timeout = setTimeout(() => {
// // // // //         setText(currentSentence.substring(0, text.length - 1));
// // // // //       }, deletingSpeed);
// // // // //     } else if (isDeleting && text.length === 0) {
// // // // //       // Move to next sentence
// // // // //       setIsDeleting(false);
// // // // //       setIndex((prev) => (prev + 1) % sentences.length);
// // // // //     }

// // // // //     return () => clearTimeout(timeout);
// // // // //   }, [text, isDeleting, index, sentences, typingSpeed, deletingSpeed, pause]);

// // // // //   return <span className="text-[#C9A24D] font-extrabold">{text}</span>;
// // // // // }

// // // // // // ==================== Hero Section ====================
// // // // // export default function HeroSection() {
// // // // //   const fadeUp = {
// // // // //     hidden: { opacity: 0, y: 40 },
// // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // //   };

// // // // //   const sentences = [
// // // // //     "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services",
// // // // //     "Providing expert legal solutions for individuals, businesses, startups & NRIs",
// // // // //     "Integrity, experience, and practical legal insight to protect your rights"
// // // // //   ];

// // // // //   return (
// // // // //     <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
// // // // //       {/* Background */}
// // // // //       <div className="absolute inset-0">
// // // // //         <Image
// // // // //           src="/closeupjustice.jpg"
// // // // //           alt="Law Firm in Bangalore"
// // // // //           fill
// // // // //           priority
// // // // //           className="object-cover object-right opacity-60"
// // // // //         />
// // // // //       </div>

// // // // //       {/* Gradient overlay */}
// // // // //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>
// // // // //       <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // // //       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
// // // // //         <motion.div
// // // // //           className="max-w-3xl"
// // // // //           initial="hidden"
// // // // //           whileInView="visible"
// // // // //           viewport={{ once: true, amount: 0.3 }}
// // // // //         >
// // // // //           {/* Badge */}
// // // // //           <motion.div
// // // // //             variants={fadeUp}
// // // // //             className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5"
// // // // //           >
// // // // //             <ShieldCheck size={16} />
// // // // //             Advocates & Legal Consultants
// // // // //           </motion.div>

// // // // //           {/* HERO HEADING */}
// // // // //           <motion.h1
// // // // //             variants={fadeUp}
// // // // //             className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.1] mb-8"
// // // // //           >
// // // // //             <LoopingTypewriter sentences={sentences} typingSpeed={50} deletingSpeed={30} pause={1500} />
// // // // //           </motion.h1>

// // // // //           {/* Subtext */}
// // // // //           <motion.div variants={fadeUp} className="space-y-4 text-gray-300 text-lg mb-10">
// // // // //             <p>
// // // // //               S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services.
// // // // //             </p>
// // // // //             <p>
// // // // //               Our experienced attorneys and advocates provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India.
// // // // //             </p>
// // // // //             <p>
// // // // //               We combine integrity, experience, and practical legal insight to protect your rights and advance your interests.
// // // // //             </p>
// // // // //           </motion.div>

// // // // //           {/* Buttons */}
// // // // //           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
// // // // //             <Link href="/legal-consultation-in-bangalore">
// // // // //               <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // // //                 Book Confidential Consultation
// // // // //               </button>
// // // // //             </Link>

// // // // //             <Link href="#practice-areas">
// // // // //               <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // // //                 View Practice Areas
// // // // //               </button>
// // // // //             </Link>

// // // // //             <a
// // // // //               href="tel:+919000000000"
// // // // //               className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // // // //             >
// // // // //               <Phone size={22} className="text-white hover:text-black" />
// // // // //             </a>
// // // // //           </motion.div>
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // "use client";

// // // // // import { motion } from "framer-motion";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import { ShieldCheck, Phone, Scale, Briefcase, Award } from "lucide-react";
// // // // // import { useState, useEffect } from "react";
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

// // // // // // ==================== Looping Typewriter H1 ====================
// // // // // function LoopingH1({ sentence, typingSpeed = 50, deletingSpeed = 30, pause = 2000 }) {
// // // // //   const [text, setText] = useState("");
// // // // //   const [isDeleting, setIsDeleting] = useState(false);

// // // // //   useEffect(() => {
// // // // //     let timeout;

// // // // //     if (!isDeleting && text.length < sentence.length) {
// // // // //       // Typing
// // // // //       timeout = setTimeout(() => setText(sentence.substring(0, text.length + 1)), typingSpeed);
// // // // //     } else if (!isDeleting && text.length === sentence.length) {
// // // // //       // Pause before deleting
// // // // //       timeout = setTimeout(() => setIsDeleting(true), pause);
// // // // //     } else if (isDeleting && text.length > 0) {
// // // // //       // Deleting
// // // // //       timeout = setTimeout(() => setText(sentence.substring(0, text.length - 1)), deletingSpeed);
// // // // //     } else if (isDeleting && text.length === 0) {
// // // // //       // Restart typing
// // // // //       setIsDeleting(false);
// // // // //     }

// // // // //     return () => clearTimeout(timeout);
// // // // //   }, [text, isDeleting, sentence, typingSpeed, deletingSpeed, pause]);

// // // // //   return (
// // // // //     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C9A24D] leading-snug">
// // // // //       {text}
// // // // //       <span className="animate-pulse">|</span>
// // // // //     </h1>
// // // // //   );
// // // // // }

// // // // // // ==================== Hero Section ====================
// // // // // export default function HeroSection() {
// // // // //   const fadeUp = {
// // // // //     hidden: { opacity: 0, y: 40 },
// // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // //   };

// // // // //   const sentence =
// // // // //     "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services";

// // // // //   return (
// // // // //     <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-black">
// // // // //       {/* Background */}
// // // // //       <div className="absolute inset-0">
// // // // //         <Image
// // // // //           src="/closeupjustice.jpg"
// // // // //           alt="Law Firm in Bangalore"
// // // // //           fill
// // // // //           priority
// // // // //           className="object-cover object-right opacity-60"
// // // // //         />
// // // // //       </div>

// // // // //       {/* Gradient overlay */}
// // // // //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30"></div>
// // // // //       <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // // //       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
// // // // //         <motion.div
// // // // //           className="max-w-3xl"
// // // // //           initial="hidden"
// // // // //           whileInView="visible"
// // // // //           viewport={{ once: true, amount: 0.3 }}
// // // // //         >
// // // // //           {/* Badge */}
// // // // //           <motion.div
// // // // //             variants={fadeUp}
// // // // //             className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5"
// // // // //           >
// // // // //             <ShieldCheck size={16} />
// // // // //             Advocates & Legal Consultants
// // // // //           </motion.div>

// // // // //           {/* Animated H1 */}
// // // // //           <motion.div variants={fadeUp} className="mb-8">
// // // // //             <LoopingH1 sentence={sentence} />
// // // // //           </motion.div>

// // // // //           {/* Subtext */}
// // // // //           <motion.div variants={fadeUp} className="space-y-4 text-gray-300 text-lg mb-10">
// // // // //             <p>
// // // // //               S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal
// // // // //               representation in corporate law, civil litigation, criminal defense, property
// // // // //               disputes, and NRI legal services.
// // // // //             </p>
// // // // //             <p>
// // // // //               Our experienced attorneys and advocates provide strategic, result-oriented legal
// // // // //               solutions for individuals, businesses, startups, and NRIs across India.
// // // // //             </p>
// // // // //             <p>
// // // // //               We combine integrity, experience, and practical legal insight to protect your rights
// // // // //               and advance your interests.
// // // // //             </p>
// // // // //           </motion.div>

// // // // //           {/* Buttons */}
// // // // //           <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
// // // // //             <Link href="/legal-consultation-in-bangalore">
// // // // //               <button className="bg-[#C9A24D] hover:bg-[#E6C676] text-black px-8 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // // //                 Book Confidential Consultation
// // // // //               </button>
// // // // //             </Link>

// // // // //             <Link href="#practice-areas">
// // // // //               <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // // //                 View Practice Areas
// // // // //               </button>
// // // // //             </Link>

// // // // //             <a
// // // // //               href="tel:+919000000000"
// // // // //               className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] hover:bg-[#C9A24D] transition-all duration-300"
// // // // //             >
// // // // //               <Phone size={22} className="text-white hover:text-black" />
// // // // //             </a>
// // // // //              {/* RESPONSE TEXT */}
// // // // //              <p className="text-gray-400 text-sm mb-10">
// // // // //                Response within 24 hours guaranteed.
// // // // //              </p>
// // // // //              {/* TRUST INDICATORS */}
// // // // //              <div className="flex flex-col sm:flex-row gap-8 text-gray-400 border-t border-gray-800 pt-8">
// // // // //                <div className="flex items-center gap-3">
// // // // //                  <Award size={18} className="text-[#C9A24D]" />
// // // // //                  15+ Years Experience
// // // // //                </div>
// // // // //                <div className="flex items-center gap-3">
// // // // //                  <Briefcase size={18} className="text-[#C9A24D]" />
// // // // //                  1000+ Cases Successfully Handled
// // // // //                </div>
// // // // //                <div className="flex items-center gap-3">
// // // // //                  <Scale size={18} className="text-[#C9A24D]" />
// // // // //                  Karnataka High Court & District Courts
// // // // //                </div>
// // // // //              </div>
// // // // //           </motion.div>
// // // // //         </motion.div>
// // // // //          {/* ================= OTHER SECTIONS ================= */}
// // // // //             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //               <AboutFirm />
// // // // //             </motion.div>
// // // // //             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //               <ServiceOverview />
// // // // //             </motion.div>
// // // // //             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //               <PracticeAreas />
// // // // //             </motion.div>
// // // // //             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //               <WhyChooseUs />
// // // // //             </motion.div>
// // // // //             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //               <LegalServicesSections />
// // // // //             </motion.div>
// // // // //             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //               <Testimonials />
// // // // //             </motion.div>
// // // // //             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //               <CTASection />
// // // // //             </motion.div>
// // // // //             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //               <FAQsSection />
// // // // //             </motion.div>
// // // // //             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //               <Consultation />
// // // // //             </motion.div>
// // // // //             <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
// // // // //               <Footer />
// // // // //             </motion.div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }



// // // // // "use client";

// // // // // import { motion } from "framer-motion";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import { ShieldCheck, Phone, Scale, Briefcase, Award } from "lucide-react";
// // // // // import { useState, useEffect } from "react";

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

// // // // // // ------------------ Typewriter H1 ------------------
// // // // // function LoopingH1({ sentence, typingSpeed = 50, deletingSpeed = 30, pause = 2000 }) {
// // // // //   const [text, setText] = useState("");
// // // // //   const [isDeleting, setIsDeleting] = useState(false);

// // // // //   useEffect(() => {
// // // // //     let timeout;

// // // // //     if (!isDeleting && text.length < sentence.length) {
// // // // //       timeout = setTimeout(() => setText(sentence.substring(0, text.length + 1)), typingSpeed);
// // // // //     } else if (!isDeleting && text.length === sentence.length) {
// // // // //       timeout = setTimeout(() => setIsDeleting(true), pause);
// // // // //     } else if (isDeleting && text.length > 0) {
// // // // //       timeout = setTimeout(() => setText(sentence.substring(0, text.length - 1)), deletingSpeed);
// // // // //     } else if (isDeleting && text.length === 0) {
// // // // //       setIsDeleting(false);
// // // // //     }

// // // // //     return () => clearTimeout(timeout);
// // // // //   }, [text, isDeleting, sentence, typingSpeed, deletingSpeed, pause]);

// // // // //   return (
// // // // //     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C9A24D] leading-snug">
// // // // //       {text}
// // // // //       <span className="inline-block animate-pulse">|</span>
// // // // //     </h1>
// // // // //   );
// // // // // }

// // // // // // ------------------ Motion Wrapper ------------------
// // // // // const FadeInSection = ({ children }) => {
// // // // //   const fadeUp = {
// // // // //     hidden: { opacity: 0, y: 40 },
// // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // // //   };
// // // // //   return (
// // // // //     <motion.div
// // // // //       variants={fadeUp}
// // // // //       initial="hidden"
// // // // //       whileInView="visible"
// // // // //       viewport={{ once: true, amount: 0.3 }}
// // // // //     >
// // // // //       {children}
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // // ------------------ Hero Section ------------------
// // // // // export default function HeroSection() {
// // // // //   const sentence =
// // // // //     "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services";

// // // // //   return (
// // // // //     <>
// // // // //       <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
// // // // //         {/* Background */}
// // // // //         <div className="absolute inset-0">
// // // // //           <Image
// // // // //             src="/closeupjustice.jpg"
// // // // //             alt="Law Firm in Bangalore"
// // // // //             fill
// // // // //             priority
// // // // //             className="object-cover object-right opacity-60"
// // // // //           />
// // // // //         </div>

// // // // //         {/* Gradient overlay */}
// // // // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/30"></div>

// // // // //         {/* Golden glow */}
// // // // //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // // //         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
// // // // //           <FadeInSection>
// // // // //             {/* Badge */}
// // // // //             <div className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
// // // // //               <ShieldCheck size={16} />
// // // // //               Advocates & Legal Consultants
// // // // //             </div>

// // // // //             {/* Animated H1 */}
// // // // //             <div className="mb-8">
// // // // //               <LoopingH1 sentence={sentence} />
// // // // //             </div>

// // // // //             {/* Subtext */}
// // // // //             <div className="space-y-4 text-gray-300 text-lg mb-10">
// // // // //               <p>
// // // // //                 S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal
// // // // //                 representation in corporate law, civil litigation, criminal defense, property
// // // // //                 disputes, and NRI legal services.
// // // // //               </p>
// // // // //               <p>
// // // // //                 Our experienced attorneys and advocates provide strategic, result-oriented legal
// // // // //                 solutions for individuals, businesses, startups, and NRIs across India.
// // // // //               </p>
// // // // //               <p>
// // // // //                 We combine integrity, experience, and practical legal insight to protect your rights
// // // // //                 and advance your interests.
// // // // //               </p>
// // // // //             </div>

// // // // //             {/* Buttons */}
// // // // //             <div className="flex flex-col sm:flex-row gap-4 mb-6">
// // // // //               {/* Book Consultation */}
// // // // //               <Link href="/legal-consultation-in-bangalore" className="w-full sm:w-auto">
// // // // //                 <button className="w-full sm:w-auto bg-[#C9A24D] hover:bg-[#E6C676] text-black px-6 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // // //                   Book Confidential Consultation
// // // // //                 </button>
// // // // //               </Link>

// // // // //               {/* View Practice Areas */}
// // // // //               <Link href="#practice-areas" className="w-full sm:w-auto">
// // // // //                 <button className="w-full sm:w-auto border border-[#C9A24D] text-[#C9A24D] px-6 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // // //                   View Practice Areas
// // // // //                 </button>
// // // // //               </Link>


// // // // //             </div>
// // // // //             {/* Response Text */}
// // // // //             <p className="text-gray-300 text-sm mb-10">
// // // // //               Response within 24 hours guaranteed.
// // // // //             </p>

// // // // //             {/* Trust Indicators */}
// // // // //             <div className="flex flex-col sm:flex-row gap-8 text-gray-200 border-t border-gray-400 pt-8">
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
// // // // //             </div>
// // // // //           </FadeInSection>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ================= Other Sections ================= */}
// // // // //       <FadeInSection><AboutFirm /></FadeInSection>
// // // // //       <FadeInSection><ServiceOverview /></FadeInSection>
// // // // //       <FadeInSection><PracticeAreas /></FadeInSection>
// // // // //       <FadeInSection><WhyChooseUs /></FadeInSection>
// // // // //       <FadeInSection><LegalServicesSections /></FadeInSection>
// // // // //       <FadeInSection><Testimonials /></FadeInSection>
// // // // //       <FadeInSection><CTASection /></FadeInSection>
// // // // //       <FadeInSection><FAQsSection /></FadeInSection>
// // // // //       <FadeInSection><Consultation /></FadeInSection>
// // // // //       <FadeInSection><Footer /></FadeInSection>
// // // // //     </>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import { motion } from "framer-motion";
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { ShieldCheck, Phone, Scale, Briefcase, Award } from "lucide-react";
// // // // import { useState, useEffect } from "react";
// // // // import { FaWhatsapp } from "react-icons/fa";


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

// // // // // ------------------ Typewriter H1 ------------------
// // // // function LoopingH1({ sentence, typingSpeed = 50, deletingSpeed = 30, pause = 2000 }) {
// // // //   const [text, setText] = useState("");
// // // //   const [isDeleting, setIsDeleting] = useState(false);

// // // //   useEffect(() => {
// // // //     let timeout;

// // // //     if (!isDeleting && text.length < sentence.length) {
// // // //       timeout = setTimeout(() => setText(sentence.substring(0, text.length + 1)), typingSpeed);
// // // //     } else if (!isDeleting && text.length === sentence.length) {
// // // //       timeout = setTimeout(() => setIsDeleting(true), pause);
// // // //     } else if (isDeleting && text.length > 0) {
// // // //       timeout = setTimeout(() => setText(sentence.substring(0, text.length - 1)), deletingSpeed);
// // // //     } else if (isDeleting && text.length === 0) {
// // // //       setIsDeleting(false);
// // // //     }

// // // //     return () => clearTimeout(timeout);
// // // //   }, [text, isDeleting, sentence, typingSpeed, deletingSpeed, pause]);

// // // //   return (
// // // //     <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#C9A24D] leading-snug">
// // // //       {text}
// // // //       <span className="inline-block animate-pulse">|</span>
// // // //     </h1>
// // // //   );
// // // // }

// // // // // ------------------ Motion Wrapper ------------------
// // // // const FadeInSection = ({ children }) => {
// // // //   const fadeUp = {
// // // //     hidden: { opacity: 0, y: 40 },
// // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// // // //   };
// // // //   return (
// // // //     <motion.div
// // // //       variants={fadeUp}
// // // //       initial="hidden"
// // // //       whileInView="visible"
// // // //       viewport={{ once: true, amount: 0.3 }}
// // // //     >
// // // //       {children}
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // // ------------------ Hero Section ------------------
// // // // export default function HeroSection() {
// // // //   const sentence =
// // // //     "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services";

// // // //   // ------------------ Handle Phone Click ------------------
// // // //   // const handlePhoneClick = () => {
// // // //   //   if (typeof window !== "undefined") {
// // // //   //     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// // // //   //     const phoneNumber = "+91";

// // // //   //     if (isMobile) {
// // // //   //       window.location.href = `tel:${phoneNumber}`;
// // // //   //     } else {
// // // //   //       navigator.clipboard.writeText(phoneNumber);
// // // //   //       alert(`Phone number ${phoneNumber} copied to clipboard`);
// // // //   //     }
// // // //   //   }
// // // //   // };
// // // //   const handlePhoneClick = () => {
// // // //     const phoneNumber = "";
// // // //     window.location.href = `tel:${phoneNumber}`;
// // // //   };
// // // //   return (
// // // //     <>
// // // //       {/* ================= Hero Section ================= */}
// // // //       <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-white">
// // // //         {/* Background */}
// // // //         <div className="absolute inset-0">
// // // //           <Image
// // // //             src="/closeupjustice.jpg"
// // // //             alt="Law Firm in Bangalore"
// // // //             fill
// // // //             priority
// // // //             className="object-cover object-right opacity-60"
// // // //           />
// // // //         </div>

// // // //         {/* Gradient overlay */}
// // // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/30"></div>

// // // //         {/* Golden glow */}
// // // //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>

// // // //         <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[40px] pb-[120px]">
// // // //           <FadeInSection>
// // // //             {/* Badge */}
// // // //             <div className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 mt-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5">
// // // //               <ShieldCheck size={16} />
// // // //               Advocates & Legal Consultants
// // // //             </div>

// // // //             {/* Animated H1 */}
// // // //             <div className="mb-8">
// // // //               <LoopingH1 sentence={sentence} />
// // // //             </div>

// // // //             {/* Subtext */}
// // // //             <div className="space-y-4 text-gray-300 text-lg mb-10">
// // // //               <p>
// // // //                 S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal
// // // //                 representation in corporate law, civil litigation, criminal defense, property
// // // //                 disputes, and NRI legal services.
// // // //               </p>
// // // //               <p>
// // // //                 Our experienced attorneys and advocates provide strategic, result-oriented legal
// // // //                 solutions for individuals, businesses, startups, and NRIs across India.
// // // //               </p>
// // // //               <p>
// // // //                 We combine integrity, experience, and practical legal insight to protect your rights
// // // //                 and advance your interests.
// // // //               </p>
// // // //             </div>

// // // //             {/* Buttons */}
// // // //             <div className="flex flex-col sm:flex-row gap-4 mb-6">
// // // //               <Link href="/legal-consultation-in-bangalore" className="w-full sm:w-auto">
// // // //                 <button className="w-full sm:w-auto bg-[#C9A24D] hover:bg-[#E6C676] text-black px-6 py-4 font-semibold rounded-md transition-all duration-300 hover:scale-105 shadow-lg">
// // // //                   Book Confidential Consultation
// // // //                 </button>
// // // //               </Link>

// // // //               <Link href="#practice-areas" className="w-full sm:w-auto">
// // // //                 <button className="w-full sm:w-auto border border-[#C9A24D] text-[#C9A24D] px-6 py-4 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition-all duration-300">
// // // //                   View Practice Areas
// // // //                 </button>
// // // //               </Link>
// // // //             </div>

// // // //             {/* Response Text */}
// // // //             <p className="text-gray-300 text-sm mb-10">
// // // //               Response within 24 hours guaranteed.
// // // //             </p>

// // // //             {/* Trust Indicators */}
// // // //             <div className="flex flex-col sm:flex-row gap-8 text-gray-200 border-t border-gray-400 pt-8">
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
// // // //             </div>
// // // //           </FadeInSection>
// // // //         </div>

// // // //         {/* ================= Sticky Left Phone Button ================= */}
// // // //         {/* <div className="fixed left-4 bottom-12 z-50 flex items-center">
// // // //           <button
// // // //             onClick={handlePhoneClick}
// // // //             className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] bg-[#C9A24D]/80 hover:bg-[#C9A24D] transition-all duration-300 shadow-lg"
// // // //           >
// // // //             <Phone size={22} className="text-white hover:text-black" />
// // // //           </button>
// // // //         </div> */}
// // // //         <div className="fixed left-4 bottom-12 z-50 flex flex-col gap-4">

// // // //           {/* CALL BUTTON */}
// // // //           <button
// // // //             onClick={handlePhoneClick}
// // // //             className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C9A24D] bg-[#C9A24D]/80 hover:bg-[#C9A24D] transition-all duration-300 shadow-lg"
// // // //           >
// // // //             <Phone size={22} className="text-white hover:text-black" />
// // // //           </button>

// // // //           {/* WHATSAPP BUTTON */}
// // // //           <a href="https://wa.me/919XXXXXXXXX" target="_blank" rel="noopener noreferrer"
// // // //             className="flex items-center justify-center w-14 h-14 rounded-full border border-green-500 bg-green-500/80 hover:bg-green-500 transition-all duration-300 shadow-lg">
// // // //             <FaWhatsapp size={22} className="text-white hover:text-black" />
// // // //           </a>

// // // //         </div>
// // // //       </section>

// // // //       {/* ================= Other Sections ================= */}
// // // //       <FadeInSection><AboutFirm /></FadeInSection>
// // // //       <FadeInSection><ServiceOverview /></FadeInSection>
// // // //       <FadeInSection><PracticeAreas /></FadeInSection>
// // // //       <FadeInSection><WhyChooseUs /></FadeInSection>
// // // //       <FadeInSection><LegalServicesSections /></FadeInSection>
// // // //       <FadeInSection><Testimonials /></FadeInSection>
// // // //       <FadeInSection><CTASection /></FadeInSection>
// // // //       <FadeInSection><FAQsSection /></FadeInSection>
// // // //       <FadeInSection><Consultation /></FadeInSection>
// // // //       <FadeInSection><Footer /></FadeInSection>
// // // //     </>
// // // //   );
// // // // }

// // // // "use client";

// // // // import { useState, useEffect, useRef } from "react";
// // // // import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { ShieldCheck, Phone, Scale, Briefcase, Award, ChevronDown } from "lucide-react";
// // // // import { FaWhatsapp } from "react-icons/fa";

// // // // import Navbar from "../components/Navbar";
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

// // // // // ─── DATA ─────────────────────────────────────────────────────────────────────

// // // // const practiceAreasList = [
// // // //   { name: "Corporate & Commercial Law",              href: "/corporate-commercial-law-firm" },
// // // //   { name: "Civil Litigation",                        href: "/civil-lawyer-in-bangalore" },
// // // //   { name: "Family & Divorce Law",                    href: "/family-divorce-law" },
// // // //   { name: "Property & Real Estate Law",              href: "/property-real-estate-law" },
// // // //   { name: "Criminal Defense & Prosecution",          href: "/criminal-lawyer-in-bangalore" },
// // // //   { name: "Cheque Bounce & Negotiable Instruments",  href: "/cheque-bounce-lawyer-in-bangalore" },
// // // //   { name: "High Court & Supreme Court Practice",     href: "/high-court-lawyer-in-bangalore" },
// // // //   { name: "Consumer Protection Law",                 href: "/consumer-court-lawyer-in-bangalore" },
// // // //   { name: "Legal Advisory & Regulatory Compliance",  href: "/legal-advisor-in-bangalore" },
// // // //   { name: "Mediation & Alternative Dispute Resolution (ADR)", href: "/mediation-lawyer-in-bangalore" },
// // // //   { name: "NRI Legal Services",                      href: "/nri-lawyer-in-bangalore" },
// // // //   { name: "International Private Law",               href: "/international-lawyer-in-bangalore" },
// // // //   { name: "Employment & Labour Law",                 href: "/employment-lawyer-in-bangalore" },
// // // // ];

// // // // const trustIndicators = [
// // // //   { icon: Award,    text: "15+ Years Experience" },
// // // //   { icon: Briefcase, text: "1000+ Cases Successfully Handled" },
// // // //   { icon: Scale,    text: "Karnataka High Court & District Courts" },
// // // // ];

// // // // // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// // // // const fadeUp = {
// // // //   hidden: { opacity: 0, y: 40 },
// // // //   show:  (i = 0) => ({
// // // //     opacity: 1, y: 0,
// // // //     transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
// // // //   }),
// // // // };

// // // // const fadeLeft = {
// // // //   hidden: { opacity: 0, x: -40 },
// // // //   show:  (i = 0) => ({
// // // //     opacity: 1, x: 0,
// // // //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // // //   }),
// // // // };

// // // // const scaleIn = {
// // // //   hidden: { opacity: 0, scale: 0.93 },
// // // //   show:  (i = 0) => ({
// // // //     opacity: 1, scale: 1,
// // // //     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // // //   }),
// // // // };

// // // // const stagger = {
// // // //   hidden: {},
// // // //   show: { transition: { staggerChildren: 0.12 } },
// // // // };

// // // // // ─── TYPEWRITER H1 ────────────────────────────────────────────────────────────

// // // // function TypewriterH1({ sentence, typingSpeed = 50, deletingSpeed = 30, pause = 2500 }) {
// // // //   const [text, setText] = useState("");
// // // //   const [isDeleting, setIsDeleting] = useState(false);

// // // //   useEffect(() => {
// // // //     let timeout;
// // // //     if (!isDeleting && text.length < sentence.length) {
// // // //       timeout = setTimeout(() => setText(sentence.substring(0, text.length + 1)), typingSpeed);
// // // //     } else if (!isDeleting && text.length === sentence.length) {
// // // //       timeout = setTimeout(() => setIsDeleting(true), pause);
// // // //     } else if (isDeleting && text.length > 0) {
// // // //       timeout = setTimeout(() => setText(sentence.substring(0, text.length - 1)), deletingSpeed);
// // // //     } else if (isDeleting && text.length === 0) {
// // // //       setIsDeleting(false);
// // // //     }
// // // //     return () => clearTimeout(timeout);
// // // //   }, [text, isDeleting, sentence, typingSpeed, deletingSpeed, pause]);

// // // //   return (
// // // //     <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#C9A24D] leading-[1.1]">
// // // //       {text}
// // // //       <span className="inline-block w-[3px] h-[0.85em] bg-[#C9A24D] ml-1 align-middle animate-pulse" />
// // // //     </h1>
// // // //   );
// // // // }

// // // // // ─── SECTION HEADING ──────────────────────────────────────────────────────────

// // // // function SectionHeading({ children, light = false, centered = false }) {
// // // //   return (
// // // //     <motion.div
// // // //       variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // //       className={`mb-12 ${centered ? "flex flex-col items-center text-center" : ""}`}
// // // //     >
// // // //       <motion.span
// // // //         initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
// // // //         transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
// // // //         className="block h-[3px] bg-[#C9A24D] mb-5"
// // // //       />
// // // //       <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${light ? "text-white" : "text-gray-900"}`}>
// // // //         {children}
// // // //       </h2>
// // // //     </motion.div>
// // // //   );
// // // // }

// // // // // ─── PAGE ─────────────────────────────────────────────────────────────────────

// // // // export default function HeroSection() {
// // // //   const heroRef = useRef(null);
// // // //   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
// // // //   const bgY  = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
// // // //   const opa  = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

// // // //   const handlePhoneClick = () => {
// // // //     window.location.href = "tel:+919000000000";
// // // //   };

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       {/* ══════════════════════════════════ HERO ═══════════════════════════════ */}
// // // //       <section ref={heroRef}
// // // //         className="relative w-full min-h-screen flex items-center overflow-hidden bg-black"
// // // //       >
// // // //         {/* parallax background image */}
// // // //         <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
// // // //           <Image
// // // //             src="/closeupjustice.jpg"
// // // //             alt="Law Firm in Bangalore"
// // // //             fill priority
// // // //             className="object-cover object-right opacity-50"
// // // //           />
// // // //         </motion.div>

// // // //         {/* gradient overlays */}
// // // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />
// // // //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full pointer-events-none" />

// // // //         {/* top gold border */}
// // // //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />

// // // //         {/* subtle gold grid */}
// // // //         <div className="absolute inset-0 opacity-[0.03]" style={{
// // // //           backgroundImage:
// // // //             "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
// // // //             "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
// // // //         }} />

// // // //         {/* corner brackets */}
// // // //         {[
// // // //           "top-24 left-6 border-t-2 border-l-2",
// // // //           "top-24 right-6 border-t-2 border-r-2",
// // // //           "bottom-8 left-6 border-b-2 border-l-2",
// // // //           "bottom-8 right-6 border-b-2 border-r-2",
// // // //         ].map((cls, i) => (
// // // //           <motion.div key={i}
// // // //             initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.3, scale: 1 }}
// // // //             transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
// // // //             className={`absolute w-10 h-10 border-[#C9A24D] z-10 ${cls}`}
// // // //           />
// // // //         ))}

// // // //         <motion.div style={{ opacity: opa }}
// // // //           className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[80px] pb-[120px]"
// // // //         >
// // // //           <motion.div variants={stagger} initial="hidden" animate="show">

// // // //             {/* badge */}
// // // //             <motion.div variants={fadeUp} custom={0}
// // // //               className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5"
// // // //             >
// // // //               <ShieldCheck size={16} />
// // // //               Advocates &amp; Legal Consultants · Bangalore
// // // //             </motion.div>

// // // //             {/* typewriter H1 */}
// // // //             <motion.div variants={fadeUp} custom={1} className="mb-8 max-w-4xl">
// // // //               <TypewriterH1 sentence="Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services" />
// // // //             </motion.div>

// // // //             {/* subtext */}
// // // //             <motion.div variants={stagger} className="space-y-4 text-gray-300 text-lg mb-10 max-w-2xl">
// // // //               {[
// // // //                 "S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services.",
// // // //                 "Our experienced attorneys and advocates provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India.",
// // // //                 "We combine integrity, experience, and practical legal insight to protect your rights and advance your interests.",
// // // //               ].map((p, i) => (
// // // //                 <motion.p key={i} variants={fadeUp} custom={i + 2}>{p}</motion.p>
// // // //               ))}
// // // //             </motion.div>

// // // //             {/* CTA buttons */}
// // // //             <motion.div variants={fadeUp} custom={5}
// // // //               className="flex flex-col sm:flex-row gap-4 mb-6"
// // // //             >
// // // //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// // // //                 <Link href="/legal-consultation-in-bangalore"
// // // //                   className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-8 py-4 font-bold text-sm tracking-wide transition-colors duration-200 shadow-lg"
// // // //                 >
// // // //                   Book Confidential Consultation
// // // //                 </Link>
// // // //               </motion.div>
// // // //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// // // //                 <Link href="#practice-areas"
// // // //                   className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-bold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
// // // //                 >
// // // //                   View Practice Areas
// // // //                 </Link>
// // // //               </motion.div>
// // // //             </motion.div>

// // // //             {/* response note */}
// // // //             <motion.p variants={fadeUp} custom={6}
// // // //               className="text-[#C9A24D] text-sm font-semibold tracking-wide mb-10"
// // // //             >
// // // //               Response within 24 hours guaranteed.
// // // //             </motion.p>

// // // //             {/* trust indicators */}
// // // //             <motion.div variants={stagger}
// // // //               className="flex flex-col sm:flex-row gap-8 text-gray-200 border-t border-white/10 pt-8"
// // // //             >
// // // //               {trustIndicators.map(({ icon: Icon, text }, i) => (
// // // //                 <motion.div key={i} variants={fadeLeft} custom={i * 0.2}
// // // //                   className="flex items-center gap-3"
// // // //                 >
// // // //                   <Icon size={18} className="text-[#C9A24D] shrink-0" />
// // // //                   <span className="text-sm">{text}</span>
// // // //                 </motion.div>
// // // //               ))}
// // // //             </motion.div>

// // // //           </motion.div>
// // // //         </motion.div>

// // // //         {/* scroll indicator */}
// // // //         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
// // // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
// // // //         >
// // // //           <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
// // // //             className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
// // // //           />
// // // //         </motion.div>
// // // //       </section>

// // // //       {/* ════════════════════════════ PRACTICE AREAS ══════════════════════════ */}
// // // //       {/* <section id="practice-areas" className="py-28 px-6 bg-[#f8f6f1] relative">
// // // //         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
// // // //         <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// // // //         <div className="max-w-6xl mx-auto">
// // // //           <SectionHeading>Our Practice Areas</SectionHeading>

// // // //           <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // //             className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl"
// // // //           >
// // // //             As a full-service law firm in Bangalore, our attorneys provide comprehensive legal
// // // //             services across the following practice areas:
// // // //           </motion.p>

// // // //           <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // //             className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
// // // //           >
// // // //             {practiceAreasList.map((area, i) => (
// // // //               <motion.div key={i} variants={fadeLeft} custom={i * 0.08}
// // // //                 whileHover={{ x: 5, boxShadow: "0 8px 30px rgba(201,162,77,0.12)" }}
// // // //               >
// // // //                 <Link href={area.href}
// // // //                   className="flex items-start gap-4 bg-white border border-gray-100 hover:border-[#C9A24D] rounded-lg p-5 group transition-all duration-300 h-full"
// // // //                 >
// // // //                   <span className="text-[#C9A24D] font-black text-base shrink-0 mt-0.5">
// // // //                     {String(i + 1).padStart(2, "0")}
// // // //                   </span>
// // // //                   <div className="border-l border-gray-200 group-hover:border-[#C9A24D] pl-4 transition-colors duration-300">
// // // //                     <p className="text-sm font-semibold text-gray-800 group-hover:text-[#8a6a20] transition-colors duration-200 leading-snug">
// // // //                       {area.name}
// // // //                     </p>
// // // //                   </div>
// // // //                 </Link>
// // // //               </motion.div>
// // // //             ))}
// // // //           </motion.div>
// // // //         </div>
// // // //       </section> */}

// // // //       {/* ════════════════════════ CTA BANNER SECTION ══════════════════════════ */}
// // // //       {/* <section className="py-28 px-6 bg-black text-white text-center relative overflow-hidden">
// // // //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
// // // //         <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // // //         {[0, 1, 2].map((i) => (
// // // //           <motion.div key={i}
// // // //             initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
// // // //             viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
// // // //             className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
// // // //             style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
// // // //           />
// // // //         ))}

// // // //         <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // //           className="relative max-w-4xl mx-auto border border-[#C9A24D]/30 rounded-2xl px-10 py-16"
// // // //         >
// // // //           {["top-4 left-4 border-t-2 border-l-2","top-4 right-4 border-t-2 border-r-2","bottom-4 left-4 border-b-2 border-l-2","bottom-4 right-4 border-b-2 border-r-2"].map((cls, i) => (
// // // //             <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
// // // //           ))}

// // // //           <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // // //             className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
// // // //           >
// // // //             S Jain &amp; Attorneys · Bangalore
// // // //           </motion.p>

// // // //           <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
// // // //             className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
// // // //           >
// // // //             Speak With a Trusted Legal Expert Today
// // // //           </motion.h2>

// // // //           <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
// // // //             className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto leading-relaxed"
// // // //           >
// // // //             Whether you need experienced corporate lawyers, skilled litigation attorneys, or
// // // //             reliable legal advisors in Bangalore, S Jain Attorneys is here to guide you.
// // // //           </motion.p>

// // // //           <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
// // // //             className="text-[#C9A24D] font-semibold text-sm tracking-wide mb-10"
// // // //           >
// // // //             Confidential consultations. Strategic legal advice. Strong courtroom representation.
// // // //           </motion.p>

// // // //           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
// // // //             className="flex flex-col sm:flex-row gap-4 justify-center"
// // // //           >
// // // //             <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
// // // //               <Link href="/legal-consultation-in-bangalore"
// // // //                 className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
// // // //               >
// // // //                 Book Confidential Consultation
// // // //               </Link>
// // // //             </motion.div>
// // // //             <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
// // // //               <Link href="/contact"
// // // //                 className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
// // // //               >
// // // //                 Request Call Back
// // // //               </Link>
// // // //             </motion.div>
// // // //           </motion.div>

// // // //           <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={5}
// // // //             className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
// // // //           >
// // // //             <span className="inline-block w-4 h-px bg-gray-600" />
// // // //             All matters handled with complete confidentiality and legal discretion.
// // // //             <span className="inline-block w-4 h-px bg-gray-600" />
// // // //           </motion.p>
// // // //         </motion.div>
// // // //       </section> */}

// // // //       {/* ════════════════════════ REMAINING SECTIONS ══════════════════════════ */}
// // // //       <AboutFirm />
// // // //       <ServiceOverview />
// // // //       <WhyChooseUs />
// // // //       <LegalServicesSections />
// // // //       <Testimonials />
// // // //       <CTASection />
// // // //       <FAQsSection />
// // // //       <Consultation />
// // // //       <Footer />

// // // //       {/* ════════════════════════ STICKY FLOATING BUTTONS ═════════════════════ */}
// // // //       <div className="fixed left-4 bottom-12 z-50 flex flex-col gap-3">
// // // //         {/* Call */}
// // // //         <motion.button
// // // //           onClick={handlePhoneClick}
// // // //           whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
// // // //           className="flex items-center justify-center w-13 h-13 w-[52px] h-[52px] rounded-full border border-[#C9A24D] bg-[#C9A24D]/80 hover:bg-[#C9A24D] transition-all duration-300 shadow-lg"
// // // //         >
// // // //           <Phone size={20} className="text-white" />
// // // //         </motion.button>

// // // //         {/* WhatsApp */}
// // // //         <motion.a
// // // //           href="https://wa.me/919000000000" target="_blank" rel="noopener noreferrer"
// // // //           whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
// // // //           className="flex items-center justify-center w-[52px] h-[52px] rounded-full border border-green-500 bg-green-500/80 hover:bg-green-500 transition-all duration-300 shadow-lg"
// // // //         >
// // // //           <FaWhatsapp size={20} className="text-white" />
// // // //         </motion.a>
// // // //       </div>
// // // //     </>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState, useEffect, useRef } from "react";
// // // import { motion, useScroll, useTransform } from "framer-motion";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { ShieldCheck, Phone, Scale, Briefcase, Award } from "lucide-react";
// // // import { FaWhatsapp } from "react-icons/fa";

// // // import Navbar from "../components/Navbar";
// // // import AboutFirm from "../components/AboutFirm";
// // // import ServiceOverview from "../components/ServiceOverview";
// // // import WhyChooseUs from "../components/WhyChooseUs";
// // // import LegalServicesSections from "../components/LegalServicesSections";
// // // import Testimonials from "../components/Testimonials";
// // // import CTASection from "../components/CTASection";
// // // import FAQsSection from "../components/FAQsSection";
// // // import Consultation from "../components/Consultation";
// // // import Footer from "../components/Footer";

// // // // ─── DATA ─────────────────────────────────────────────────────────────────────

// // // const SENTENCE =
// // //   "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services";

// // // const trustIndicators = [
// // //   { icon: Award,     text: "15+ Years Experience" },
// // //   { icon: Briefcase, text: "1000+ Cases Successfully Handled" },
// // //   { icon: Scale,     text: "Karnataka High Court & District Courts" },
// // // ];

// // // // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 40 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, y: 0,
// // //     transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const fadeLeft = {
// // //   hidden: { opacity: 0, x: -40 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, x: 0,
// // //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const stagger = {
// // //   hidden: {},
// // //   show: { transition: { staggerChildren: 0.12 } },
// // // };

// // // // ─── TYPEWRITER H1 ────────────────────────────────────────────────────────────
// // // //
// // // // THE REAL FIX — "ghost text" technique:
// // // //
// // // // We render the FULL sentence as invisible text (opacity-0) inside a relative
// // // // container. This invisible text always occupies the full final height, so the
// // // // container NEVER changes size — zero reflow, zero page jump.
// // // //
// // // // The visible animated text is then layered on top using absolute positioning.
// // // // It types/deletes freely inside that fixed-size box with no layout impact.

// // // function TypewriterH1({ sentence = SENTENCE, typingSpeed = 50, deletingSpeed = 30, pause = 2500 }) {
// // //   const [text, setText] = useState("");
// // //   const [isDeleting, setIsDeleting] = useState(false);

// // //   useEffect(() => {
// // //     let timeout;
// // //     if (!isDeleting && text.length < sentence.length) {
// // //       timeout = setTimeout(() => setText(sentence.substring(0, text.length + 1)), typingSpeed);
// // //     } else if (!isDeleting && text.length === sentence.length) {
// // //       timeout = setTimeout(() => setIsDeleting(true), pause);
// // //     } else if (isDeleting && text.length > 0) {
// // //       timeout = setTimeout(() => setText(sentence.substring(0, text.length - 1)), deletingSpeed);
// // //     } else {
// // //       setIsDeleting(false);
// // //     }
// // //     return () => clearTimeout(timeout);
// // //   }, [text, isDeleting, sentence, typingSpeed, deletingSpeed, pause]);

// // //   return (
// // //     /*
// // //       Outer div — position:relative, holds the layout height.

// // //       1. Ghost span (aria-hidden): renders the full sentence in opacity-0.
// // //          This is what the browser uses to calculate the container height.
// // //          Height is ALWAYS the full sentence height → no reflow ever.

// // //       2. Animated span (absolute inset-0): overlaid on top, shows the
// // //          typed text. Because it's absolute it is removed from flow and
// // //          cannot affect the document layout.
// // //     */
// // //     <div className="relative">
// // //       {/* Ghost — invisible but takes up full space in the layout */}
// // //       <h1
// // //         aria-hidden="true"
// // //         className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#C9A24D] leading-[1.1] opacity-0 select-none pointer-events-none"
// // //       >
// // //         {sentence}
// // //         {/* cursor placeholder so width matches exactly */}
// // //         <span className="inline-block w-[3px] ml-1" />
// // //       </h1>

// // //       {/* Visible animated text — absolutely positioned, never affects layout */}
// // //       <h1
// // //         aria-live="polite"
// // //         className="absolute inset-0 text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#C9A24D] leading-[1.1]"
// // //       >
// // //         {text}
// // //         <span className="inline-block w-[3px] h-[0.85em] bg-[#C9A24D] ml-1 align-middle animate-pulse" />
// // //       </h1>
// // //     </div>
// // //   );
// // // }

// // // // ─── PAGE ─────────────────────────────────────────────────────────────────────

// // // export default function HeroSection() {
// // //   const heroRef = useRef(null);

// // //   const { scrollYProgress } = useScroll({
// // //     target: heroRef,
// // //     offset: ["start start", "end start"],
// // //   });

// // //   // Parallax only on the background image (position:absolute — no layout impact).
// // //   // willChange:transform puts it on its own GPU compositor layer.
// // //   const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

// // //   const handlePhoneClick = () => {
// // //     window.location.href = "tel:+919000000000";
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       {/* ══════════════════════════════════ HERO ═══════════════════════════════ */}
// // //       <section
// // //         ref={heroRef}
// // //         className="relative w-full min-h-screen flex items-center overflow-hidden bg-black"
// // //       >
// // //         {/* Parallax bg — absolute, never in flow */}
// // //         <motion.div
// // //           style={{ y: bgY, willChange: "transform" }}
// // //           className="absolute inset-0 scale-110"
// // //         >
// // //           <Image
// // //             src="/closeupjustice.jpg"
// // //             alt="Law Firm in Bangalore"
// // //             fill
// // //             priority
// // //             className="object-cover object-right opacity-50"
// // //           />
// // //         </motion.div>

// // //         {/* Gradient overlays */}
// // //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />
// // //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full pointer-events-none" />

// // //         {/* Top gold border */}
// // //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] z-10" />

// // //         {/* Gold grid */}
// // //         <div
// // //           className="absolute inset-0 opacity-[0.03]"
// // //           style={{
// // //             backgroundImage:
// // //               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
// // //               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
// // //           }}
// // //         />

// // //         {/* Corner brackets */}
// // //         {[
// // //           "top-24 left-6 border-t-2 border-l-2",
// // //           "top-24 right-6 border-t-2 border-r-2",
// // //           "bottom-8 left-6 border-b-2 border-l-2",
// // //           "bottom-8 right-6 border-b-2 border-r-2",
// // //         ].map((cls, i) => (
// // //           <motion.div
// // //             key={i}
// // //             initial={{ opacity: 0, scale: 0.7 }}
// // //             animate={{ opacity: 0.3, scale: 1 }}
// // //             transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
// // //             className={`absolute w-10 h-10 border-[#C9A24D] z-10 ${cls}`}
// // //           />
// // //         ))}

// // //         {/* ── Content — plain div, zero scroll-driven animation ── */}
// // //         <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[80px] pb-[120px]">
// // //           <motion.div variants={stagger} initial="hidden" animate="show">

// // //             {/* Badge */}
// // //             <motion.div
// // //               variants={fadeUp}
// // //               custom={0}
// // //               className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5"
// // //             >
// // //               <ShieldCheck size={16} />
// // //               Advocates &amp; Legal Consultants · Bangalore
// // //             </motion.div>

// // //             {/* Typewriter — ghost-text technique, zero layout shift */}
// // //             <motion.div variants={fadeUp} custom={1} className="mb-8 max-w-4xl">
// // //               <TypewriterH1 sentence={SENTENCE} />
// // //             </motion.div>

// // //             {/* Subtext */}
// // //             <motion.div variants={stagger} className="space-y-4 text-gray-300 text-lg mb-10 max-w-2xl">
// // //               {[
// // //                 "S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services.",
// // //                 "Our experienced attorneys and advocates provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India.",
// // //                 "We combine integrity, experience, and practical legal insight to protect your rights and advance your interests.",
// // //               ].map((p, i) => (
// // //                 <motion.p key={i} variants={fadeUp} custom={i + 2}>{p}</motion.p>
// // //               ))}
// // //             </motion.div>

// // //             {/* CTA buttons */}
// // //             <motion.div variants={fadeUp} custom={5} className="flex flex-col sm:flex-row gap-4 mb-6">
// // //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// // //                 <Link
// // //                   href="/legal-consultation-in-bangalore"
// // //                   className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-8 py-4 font-bold text-sm tracking-wide transition-colors duration-200 shadow-lg"
// // //                 >
// // //                   Book Confidential Consultation
// // //                 </Link>
// // //               </motion.div>
// // //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// // //                 <Link
// // //                   href="#practice-areas"
// // //                   className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-bold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
// // //                 >
// // //                   View Practice Areas
// // //                 </Link>
// // //               </motion.div>
// // //             </motion.div>

// // //             {/* Response note */}
// // //             <motion.p
// // //               variants={fadeUp}
// // //               custom={6}
// // //               className="text-[#C9A24D] text-sm font-semibold tracking-wide mb-10"
// // //             >
// // //               Response within 24 hours guaranteed.
// // //             </motion.p>

// // //             {/* Trust indicators */}
// // //             <motion.div
// // //               variants={stagger}
// // //               className="flex flex-col sm:flex-row gap-8 text-gray-200 border-t border-white/10 pt-8"
// // //             >
// // //               {trustIndicators.map(({ icon: Icon, text }, i) => (
// // //                 <motion.div key={i} variants={fadeLeft} custom={i * 0.2} className="flex items-center gap-3">
// // //                   <Icon size={18} className="text-[#C9A24D] shrink-0" />
// // //                   <span className="text-sm">{text}</span>
// // //                 </motion.div>
// // //               ))}
// // //             </motion.div>

// // //           </motion.div>
// // //         </div>

// // //         {/* Scroll indicator */}
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ delay: 2 }}
// // //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
// // //         >
// // //           <motion.div
// // //             animate={{ y: [0, 8, 0] }}
// // //             transition={{ repeat: Infinity, duration: 1.6 }}
// // //             className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
// // //           />
// // //         </motion.div>
// // //       </section>

// // //       {/* ════════════════════════ REMAINING SECTIONS ══════════════════════════ */}
// // //       <AboutFirm />
// // //       <ServiceOverview />
// // //       <WhyChooseUs />
// // //       <LegalServicesSections />
// // //       <Testimonials />
// // //       <CTASection />
// // //       <FAQsSection />
// // //       <Consultation />
// // //       <Footer />

// // //       {/* ════════════════════════ STICKY FLOATING BUTTONS ═════════════════════ */}
// // //       <div className="fixed left-4 bottom-12 z-50 flex flex-col gap-3">
// // //         <motion.button
// // //           onClick={handlePhoneClick}
// // //           whileHover={{ scale: 1.1 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           className="flex items-center justify-center w-[52px] h-[52px] rounded-full border border-[#C9A24D] bg-[#C9A24D]/80 hover:bg-[#C9A24D] transition-all duration-300 shadow-lg"
// // //         >
// // //           <Phone size={20} className="text-white" />
// // //         </motion.button>

// // //         <motion.a
// // //           href="https://wa.me/919000000000"
// // //           target="_blank"
// // //           rel="noopener noreferrer"
// // //           whileHover={{ scale: 1.1 }}
// // //           whileTap={{ scale: 0.95 }}
// // //           className="flex items-center justify-center w-[52px] h-[52px] rounded-full border border-green-500 bg-green-500/80 hover:bg-green-500 transition-all duration-300 shadow-lg"
// // //         >
// // //           <FaWhatsapp size={20} className="text-white" />
// // //         </motion.a>
// // //       </div>
// // //     </>
// // //   );
// // // }

// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { ShieldCheck, Phone, Scale, Briefcase, Award } from "lucide-react";
// // import { FaWhatsapp } from "react-icons/fa";

// // import Navbar from "../components/Navbar";
// // import AboutFirm from "../components/AboutFirm";
// // import ServiceOverview from "../components/ServiceOverview";
// // import WhyChooseUs from "../components/WhyChooseUs";
// // import LegalServicesSections from "../components/LegalServicesSections";
// // import Testimonials from "../components/Testimonials";
// // import CTASection from "../components/CTASection";
// // import FAQsSection from "../components/FAQsSection";
// // import Consultation from "../components/Consultation";
// // import Footer from "../components/Footer";

// // // ─── DATA ─────────────────────────────────────────────────────────────────────

// // const SENTENCE =
// //   "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services";

// // const trustIndicators = [
// //   { icon: Award,     text: "15+ Years Experience" },
// //   { icon: Briefcase, text: "1000+ Cases Successfully Handled" },
// //   { icon: Scale,     text: "Karnataka High Court & District Courts" },
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

// // const stagger = {
// //   hidden: {},
// //   show: { transition: { staggerChildren: 0.12 } },
// // };

// // // ─── TYPEWRITER H1 ────────────────────────────────────────────────────────────
// // // Ghost-text technique: invisible full sentence holds the container height
// // // permanently so the typewriter animation never causes any layout reflow.

// // function TypewriterH1({ sentence = SENTENCE, typingSpeed = 50, deletingSpeed = 30, pause = 2500 }) {
// //   const [text, setText] = useState("");
// //   const [isDeleting, setIsDeleting] = useState(false);

// //   useEffect(() => {
// //     let timeout;
// //     if (!isDeleting && text.length < sentence.length) {
// //       timeout = setTimeout(() => setText(sentence.substring(0, text.length + 1)), typingSpeed);
// //     } else if (!isDeleting && text.length === sentence.length) {
// //       timeout = setTimeout(() => setIsDeleting(true), pause);
// //     } else if (isDeleting && text.length > 0) {
// //       timeout = setTimeout(() => setText(sentence.substring(0, text.length - 1)), deletingSpeed);
// //     } else {
// //       setIsDeleting(false);
// //     }
// //     return () => clearTimeout(timeout);
// //   }, [text, isDeleting, sentence, typingSpeed, deletingSpeed, pause]);

// //   return (
// //     <div className="relative">
// //       {/* Ghost — invisible, holds full height so layout never shifts */}
// //       <h1
// //         aria-hidden="true"
// //         className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#C9A24D] leading-[1.1] opacity-0 select-none pointer-events-none"
// //       >
// //         {sentence}
// //         <span className="inline-block w-[3px] ml-1" />
// //       </h1>

// //       {/* Visible animated text — absolute, never affects layout */}
// //       <h1
// //         aria-live="polite"
// //         className="absolute inset-0 text-3xl sm:text-4xl lg:text-6xl font-extrabold text-[#C9A24D] leading-[1.1]"
// //       >
// //         {text}
// //         <span className="inline-block w-[3px] h-[0.85em] bg-[#C9A24D] ml-1 align-middle animate-pulse" />
// //       </h1>
// //     </div>
// //   );
// // }

// // // ─── PAGE ─────────────────────────────────────────────────────────────────────

// // export default function HeroSection() {
// //   const heroRef = useRef(null);

// //   const { scrollYProgress } = useScroll({
// //     target: heroRef,
// //     offset: ["start start", "end start"],
// //   });

// //   const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

// //   const handlePhoneClick = () => {
// //     window.location.href = "tel:+919000000000";
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       {/* ══════════════════════════════════ HERO ═══════════════════════════════ */}
// //       <section
// //         ref={heroRef}
// //         className="relative w-full min-h-screen flex items-center overflow-hidden bg-black"
// //       >
// //         {/* Parallax background */}
// //         <motion.div
// //           style={{ y: bgY, willChange: "transform" }}
// //           className="absolute inset-0 scale-110"
// //         >
// //           <Image
// //             src="/closeupjustice.jpg"
// //             alt="Law Firm in Bangalore"
// //             fill
// //             priority
// //             className="object-cover object-right opacity-50"
// //           />
// //         </motion.div>

// //         {/* Gradient overlays */}
// //         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/20" />
// //         <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full pointer-events-none" />

// //         {/* Gold grid */}
// //         <div
// //           className="absolute inset-0 opacity-[0.03]"
// //           style={{
// //             backgroundImage:
// //               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
// //               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
// //           }}
// //         />

// //         {/* Content */}
// //         <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-[80px] pb-[120px]">
// //           <motion.div variants={stagger} initial="hidden" animate="show">

// //             {/* Badge */}
// //             <motion.div
// //               variants={fadeUp}
// //               custom={0}
// //               className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-5 py-2 rounded-full text-sm mb-8 bg-[#C9A24D]/5"
// //             >
// //               <ShieldCheck size={16} />
// //               Advocates &amp; Legal Consultants · Bangalore
// //             </motion.div>

// //             {/* Typewriter H1 — ghost-text technique, zero layout shift */}
// //             <motion.div variants={fadeUp} custom={1} className="mb-8 max-w-4xl">
// //               <TypewriterH1 sentence={SENTENCE} />
// //             </motion.div>

// //             {/* Subtext */}
// //             <motion.div variants={stagger} className="space-y-4 text-gray-300 text-lg mb-10 max-w-2xl">
// //               {[
// //                 "S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services.",
// //                 "Our experienced attorneys and advocates provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India.",
// //                 "We combine integrity, experience, and practical legal insight to protect your rights and advance your interests.",
// //               ].map((p, i) => (
// //                 <motion.p key={i} variants={fadeUp} custom={i + 2}>{p}</motion.p>
// //               ))}
// //             </motion.div>

// //             {/* CTA buttons */}
// //             <motion.div variants={fadeUp} custom={5} className="flex flex-col sm:flex-row gap-4 mb-6">
// //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// //                 <Link
// //                   href="/legal-consultation-in-bangalore"
// //                   className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-8 py-4 font-bold text-sm tracking-wide transition-colors duration-200 shadow-lg"
// //                 >
// //                   Book Confidential Consultation
// //                 </Link>
// //               </motion.div>
// //               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
// //                 <Link
// //                   href="#practice-areas"
// //                   className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-bold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
// //                 >
// //                   View Practice Areas
// //                 </Link>
// //               </motion.div>
// //             </motion.div>

// //             {/* Response note */}
// //             <motion.p
// //               variants={fadeUp}
// //               custom={6}
// //               className="text-[#C9A24D] text-sm font-semibold tracking-wide mb-10"
// //             >
// //               Response within 24 hours guaranteed.
// //             </motion.p>

// //             {/* Trust indicators */}
// //             <motion.div
// //               variants={stagger}
// //               className="flex flex-col sm:flex-row gap-8 text-gray-200 border-t border-white/10 pt-8"
// //             >
// //               {trustIndicators.map(({ icon: Icon, text }, i) => (
// //                 <motion.div key={i} variants={fadeLeft} custom={i * 0.2} className="flex items-center gap-3">
// //                   <Icon size={18} className="text-[#C9A24D] shrink-0" />
// //                   <span className="text-sm">{text}</span>
// //                 </motion.div>
// //               ))}
// //             </motion.div>

// //           </motion.div>
// //         </div>

// //         {/* Scroll indicator */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 2 }}
// //           className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
// //         >
// //           {/* <motion.div
// //             animate={{ y: [0, 8, 0] }}
// //             transition={{ repeat: Infinity, duration: 1.6 }}
// //             className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
// //           /> */}
// //         </motion.div>
// //       </section>

// //       {/* ════════════════════════ REMAINING SECTIONS ══════════════════════════ */}
// //       <AboutFirm />
// //       <ServiceOverview />
// //       <WhyChooseUs />
// //       <LegalServicesSections />
// //       <Testimonials />
// //       <CTASection />
// //       <FAQsSection />
// //       <Consultation />
// //       <Footer />

// //       {/* ════════════════════════ STICKY FLOATING BUTTONS ═════════════════════ */}
// //       <div className="fixed left-4 bottom-12 z-50 flex flex-col gap-3">
// //         <motion.button
// //           onClick={handlePhoneClick}
// //           whileHover={{ scale: 1.1 }}
// //           whileTap={{ scale: 0.95 }}
// //           className="flex items-center justify-center w-[52px] h-[52px] rounded-full border border-[#C9A24D] bg-[#C9A24D]/80 hover:bg-[#C9A24D] transition-all duration-300 shadow-lg"
// //         >
// //           <Phone size={20} className="text-white" />
// //         </motion.button>

// //         <motion.a
// //           href="https://wa.me/919000000000"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           whileHover={{ scale: 1.1 }}
// //           whileTap={{ scale: 0.95 }}
// //           className="flex items-center justify-center w-[52px] h-[52px] rounded-full border border-green-500 bg-green-500/80 hover:bg-green-500 transition-all duration-300 shadow-lg"
// //         >
// //           <FaWhatsapp size={20} className="text-white" />
// //         </motion.a>
// //       </div>
// //     </>
// //   );
// // }




// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { ShieldCheck, Phone, Scale, Briefcase, Award } from "lucide-react";
// import { FaWhatsapp } from "react-icons/fa";

// import Navbar from "../components/Navbar";
// import AboutFirm from "../components/AboutFirm";
// import ServiceOverview from "../components/ServiceOverview";
// import WhyChooseUs from "../components/WhyChooseUs";
// import LegalServicesSections from "../components/LegalServicesSections";
// import Testimonials from "../components/Testimonials";
// import CTASection from "../components/CTASection";
// import FAQsSection from "../components/FAQsSection";
// import Consultation from "../components/Consultation";
// import Footer from "../components/Footer";

// // ─── DATA ─────────────────────────────────────────────────────────────────────

// const SENTENCE =
//   "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services";

// const trustIndicators = [
//   { icon: Award,     text: "15+ Years Experience" },
//   { icon: Briefcase, text: "1000+ Cases Successfully Handled" },
//   { icon: Scale,     text: "Karnataka High Court & District Courts" },
// ];

// // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: (i = 0) => ({
//     opacity: 1, y: 0,
//     transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const fadeLeft = {
//   hidden: { opacity: 0, x: -30 },
//   show: (i = 0) => ({
//     opacity: 1, x: 0,
//     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
//   }),
// };

// const stagger = {
//   hidden: {},
//   show: { transition: { staggerChildren: 0.1 } },
// };

// // ─── TYPEWRITER H1 ────────────────────────────────────────────────────────────
// // Ghost-text technique: invisible full sentence holds the container height
// // permanently so the typewriter never causes any layout reflow / page jump.

// function TypewriterH1({ sentence = SENTENCE, typingSpeed = 50, deletingSpeed = 30, pause = 2500 }) {
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
//     } else {
//       setIsDeleting(false);
//     }
//     return () => clearTimeout(timeout);
//   }, [text, isDeleting, sentence, typingSpeed, deletingSpeed, pause]);

//   return (
//     <div className="relative">
//       {/* Ghost — invisible, always full height, prevents layout shift */}
//       <h1
//         aria-hidden="true"
//         className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#C9A24D] leading-[1.15] opacity-0 select-none pointer-events-none"
//       >
//         {sentence}
//         <span className="inline-block w-[3px] ml-1" />
//       </h1>

//       {/* Visible animated text — absolute overlay, never in layout flow */}
//       <h1
//         aria-live="polite"
//         className="absolute inset-0 text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#C9A24D] leading-[1.15]"
//       >
//         {text}
//         <span className="inline-block w-[3px] h-[0.85em] bg-[#C9A24D] ml-1 align-middle animate-pulse" />
//       </h1>
//     </div>
//   );
// }

// // ─── PAGE ─────────────────────────────────────────────────────────────────────

// export default function HeroSection() {
//   const heroRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start start", "end start"],
//   });

//   const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

//   const handlePhoneClick = () => {
//     window.location.href = "tel:+919000000000";
//   };

//   return (
//     <>
//       <Navbar />

//       {/* ══════════════════════════════════ HERO ═══════════════════════════════ */}
//       <section
//         ref={heroRef}
//         className="relative w-full min-h-[100svh] flex items-center overflow-hidden bg-black"
//       >
//         {/* Parallax background — position:absolute, never affects layout */}
//         <motion.div
//           style={{ y: bgY, willChange: "transform" }}
//           className="absolute inset-0 scale-110"
//         >
//           <Image
//             src="/closeupjustice.jpg"
//             alt="Law Firm in Bangalore"
//             fill
//             priority
//             sizes="100vw"
//             className="object-cover object-center sm:object-right opacity-50"
//           />
//         </motion.div>

//         {/* Dark overlay — stronger on mobile so text is always readable */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40 sm:from-black sm:via-black/60 sm:to-black/20" />

//         {/* Ambient gold glow — hidden on small screens to reduce noise */}
//         <div className="hidden sm:block absolute right-0 top-0 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full pointer-events-none" />

//         {/* Subtle gold grid */}
//         <div
//           className="absolute inset-0 opacity-[0.025]"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
//               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
//           }}
//         />

//         {/* ── Main content ── */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-12 pb-16 sm:pt-28 sm:pb-20 lg:pt-[100px] lg:pb-[120px]">
//           <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col">

//             {/* Badge */}
//             <motion.div
//               variants={fadeUp}
//               custom={0}
//               className="inline-flex items-center gap-2 self-start border border-[#C9A24D]/40 text-[#C9A24D] px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm mb-5 sm:mb-8 bg-[#C9A24D]/5"
//             >
//               <ShieldCheck size={14} className="shrink-0" />
//               <span>Advocates &amp; Legal Consultants · Bangalore</span>
//             </motion.div>

//             {/* Typewriter H1 — ghost technique, zero layout shift */}
//             <motion.div variants={fadeUp} custom={1} className="mb-6 sm:mb-8 w-full max-w-full sm:max-w-xl lg:max-w-4xl">
//               <TypewriterH1 sentence={SENTENCE} />
//             </motion.div>

//             {/* Subtext — shorter on mobile */}
//             <motion.div
//               variants={stagger}
//               className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 max-w-full sm:max-w-lg lg:max-w-2xl"
//             >
//               {[
//                 "S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services.",
//                 "Our experienced attorneys provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India.",
//                 "We combine integrity, experience, and practical legal insight to protect your rights.",
//               ].map((p, i) => (
//                 <motion.p key={i} variants={fadeUp} custom={i + 2} className="leading-relaxed">
//                   {p}
//                 </motion.p>
//               ))}
//             </motion.div>

//             {/* CTA buttons — stack on mobile, row on sm+ */}
//             <motion.div
//               variants={fadeUp}
//               custom={5}
//               className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-5 sm:mb-6 w-full max-w-xs xs:max-w-none"
//             >
//               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full xs:w-auto">
//                 <Link
//                   href="/legal-consultation-in-bangalore"
//                   className="flex items-center justify-center bg-[#C9A24D] hover:bg-[#b8913d] text-black px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-wide transition-colors duration-200 shadow-lg w-full xs:w-auto"
//                 >
//                   Book Confidential Consultation
//                 </Link>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full xs:w-auto">
//                 <Link
//                   href="#practice-areas"
//                   className="flex items-center justify-center border-2 border-[#C9A24D] text-[#C9A24D] px-6 sm:px-8 py-3.5 sm:py-4 font-bold text-xs sm:text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300 w-full xs:w-auto"
//                 >
//                   View Practice Areas
//                 </Link>
//               </motion.div>
//             </motion.div>

//             {/* Response note */}
//             <motion.p
//               variants={fadeUp}
//               custom={6}
//               className="text-[#C9A24D] text-xs sm:text-sm font-semibold tracking-wide mb-8 sm:mb-10"
//             >
//               Response within 24 hours guaranteed.
//             </motion.p>

//             {/* Trust indicators — wrap on mobile */}
//             <motion.div
//               variants={stagger}
//               className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8 text-gray-200 border-t border-white/10 pt-6 sm:pt-8"
//             >
//               {trustIndicators.map(({ icon: Icon, text }, i) => (
//                 <motion.div
//                   key={i}
//                   variants={fadeLeft}
//                   custom={i * 0.2}
//                   className="flex items-center gap-2 sm:gap-3"
//                 >
//                   <Icon size={16} className="text-[#C9A24D] shrink-0" />
//                   <span className="text-xs sm:text-sm">{text}</span>
//                 </motion.div>
//               ))}
//             </motion.div>

//           </motion.div>
//         </div>
//       </section>

//       {/* ════════════════════════ REMAINING SECTIONS ══════════════════════════ */}
//       <AboutFirm />
//       <ServiceOverview />
//       <WhyChooseUs />
//       <LegalServicesSections />
//       <Testimonials />
//       <CTASection />
//       <FAQsSection />
//       <Consultation />
//       <Footer />

//       {/* ════════════════════════ STICKY FLOATING BUTTONS ═════════════════════ */}
//       <div className="fixed left-3 sm:left-4 bottom-8 sm:bottom-12 z-50 flex flex-col gap-3">
//         <motion.button
//           onClick={handlePhoneClick}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="flex items-center justify-center w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full border border-[#C9A24D] bg-[#C9A24D]/80 hover:bg-[#C9A24D] transition-all duration-300 shadow-lg"
//         >
//           <Phone size={18} className="text-white" />
//         </motion.button>

//         <motion.a
//           href="https://wa.me/919000000000"
//           target="_blank"
//           rel="noopener noreferrer"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="flex items-center justify-center w-11 h-11 sm:w-[52px] sm:h-[52px] rounded-full border border-green-500 bg-green-500/80 hover:bg-green-500 transition-all duration-300 shadow-lg"
//         >
//           <FaWhatsapp size={18} className="text-white" />
//         </motion.a>
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Phone, Scale, Briefcase, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "../components/Navbar";
import AboutFirm from "../components/AboutFirm";
import ServiceOverview from "../components/ServiceOverview";
import WhyChooseUs from "../components/WhyChooseUs";
import LegalServicesSections from "../components/LegalServicesSections";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";
import FAQsSection from "../components/FAQsSection";
import Consultation from "../components/Consultation";
import Footer from "../components/Footer";

const SENTENCE =
  "Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services";

const trustIndicators = [
  { icon: Award, text: "15+ Years Experience" },
  { icon: Briefcase, text: "1000+ Cases Successfully Handled" },
  { icon: Scale, text: "Karnataka High Court & District Courts" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, delay: i * 0.1 },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function TypewriterH1({
  sentence = SENTENCE,
  typingSpeed = 50,
  deletingSpeed = 30,
  pause = 2500,
}) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && text.length < sentence.length) {
      timeout = setTimeout(
        () => setText(sentence.substring(0, text.length + 1)),
        typingSpeed
      );
    } else if (!isDeleting && text.length === sentence.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(sentence.substring(0, text.length - 1)),
        deletingSpeed
      );
    } else {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <div className="relative min-h-[120px] sm:min-h-[160px] lg:min-h-[200px]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#C9A24D] leading-tight">
        {text}
        <span className="inline-block w-[3px] h-[0.9em] bg-[#C9A24D] ml-1 animate-pulse" />
      </h1>
    </div>
  );
}

export default function HeroSection() {
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handlePhoneClick = () => {
    window.location.href = "tel:+919000000000";
  };

  return (
    <>
      <Navbar />

      <section
        ref={heroRef}
        className="relative w-full min-h-[85svh] sm:min-h-[100svh] flex items-center overflow-hidden bg-black"
      >
        <motion.div
          style={{ y: bgY }}
          className="absolute inset-0 scale-110"
        >
          <Image
            src="/closeupjustice.jpg"
            alt="Law Firm in Bangalore"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-50"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 border border-[#C9A24D]/40 text-[#C9A24D] px-4 py-2 rounded-full text-xs sm:text-sm mb-6"
            >
              <ShieldCheck size={14} />
              Advocates & Legal Consultants · Bangalore
            </motion.div>

            {/* Title */}
            <motion.div variants={fadeUp} className="mb-6 max-w-full sm:max-w-xl lg:max-w-4xl">
              <TypewriterH1 />
            </motion.div>

            {/* Paragraph */}
            <motion.div
              className="space-y-4 text-gray-300 text-sm sm:text-base lg:text-lg mb-8 max-w-full sm:max-w-lg lg:max-w-2xl"
            >
              <p>
                S Jain Attorneys is a reputed law firm in Bangalore delivering
                expert legal representation in corporate law, civil litigation,
                criminal defense, property disputes, and NRI legal services.
              </p>

              <p>
                Our experienced attorneys provide strategic legal solutions for
                individuals, businesses, startups, and NRIs across India.
              </p>
              <p>
                We combine integrity, experience, and practical legal insight to
                 protect your rights and advance your interests.
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/legal-consultation-in-bangalore"
                className="flex items-center justify-center bg-[#C9A24D] text-black px-6 py-4 font-bold text-sm hover:bg-[#b8913d]"
              >
                Book Consultation
              </Link>

              <Link
                href="#practice-areas"
                className="flex items-center justify-center border-2 border-[#C9A24D] text-[#C9A24D] px-6 py-4 font-bold text-sm hover:bg-[#C9A24D] hover:text-black"
              >
                View Practice Areas
              </Link>
            </motion.div>

            <p className="text-[#C9A24D] text-sm font-semibold mb-8">
              Response within 24 hours guaranteed.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-6 border-t border-white/10 pt-6">
              {trustIndicators.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Icon size={18} className="text-[#C9A24D]" />
                  <span className="text-sm text-gray-200">{text}</span>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </section>

      <AboutFirm />
      <ServiceOverview />
      <WhyChooseUs />
      <LegalServicesSections />
      <Testimonials />
      <CTASection />
      <FAQsSection />
      <Consultation />
      <Footer />

      {/* Floating Buttons */}
      <div className="fixed left-4 bottom-10 z-50 flex flex-col gap-3">
        <button
          onClick={handlePhoneClick}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-[#C9A24D] shadow-lg"
        >
          <Phone size={20} className="text-white" />
        </button>

        <a
          href="https://wa.me/919000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 shadow-lg"
        >
          <FaWhatsapp size={20} className="text-white" />
        </a>
      </div>
    </>
  );
}