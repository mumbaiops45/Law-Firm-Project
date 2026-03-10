// // // import Link from "next/link";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";

// // // /* ================= SEO META ================= */

// // // export const metadata = {
// // //   title: "Lawyers in Bangalore | S Jain & Attorneys",
// // //   description:
// // //     "Meet experienced lawyers in Bangalore at S Jain & Attorneys providing strategic legal representation across corporate, civil, criminal, family and regulatory matters.",
// // //   alternates: {
// // //     canonical: "https://yourdomain.com/lawyers-in-bangalore",
// // //   },
// // // };

// // // /* ================= TEAM DATA ================= */

// // // const teamMembers = [
// // //   {
// // //     name: "S. Jain",
// // //     designation: "Managing Partner",
// // //     slug: "s-jain",
// // //   },
// // //   {
// // //     name: "A. Mehta",
// // //     designation: "Senior Advocate",
// // //     slug: "a-mehta",
// // //   },
// // //   {
// // //     name: "R. Verma",
// // //     designation: "Advocate",
// // //     slug: "r-verma",
// // //   },
// // // ];

// // // export default function LawyersPage() {
// // //   return (
// // //     <>
// // //       <Navbar />

// // //       {/* ================= HERO SECTION ================= */}
// // //       <section className="bg-black text-white py-24 px-6">
// // //         <div className="max-w-6xl mx-auto text-center">

// // //           <h1 className="text-4xl md:text-5xl font-serif font-semibold">
// // //             Meet Our Experienced Lawyers in Bangalore
// // //           </h1>

// // //           <div className="w-24 h-[2px] bg-[#C9A24D] mx-auto my-6"></div>

// // //           <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
// // //             S Jain & Attorneys provides full-service legal representation across litigation, advisory, and regulatory matters. 
// // //             Our team of experienced lawyers in Bangalore delivers strategic, result-oriented legal solutions for individuals, startups, multinational companies, and NRIs.
// // //           </p>

// // //           <p className="text-gray-400 mt-4 max-w-4xl mx-auto leading-relaxed">
// // //             Recognized among the best lawyers in Bangalore, our advocates combine courtroom expertise, structured legal strategy, and strict confidentiality to protect your rights and long-term interests.
// // //           </p>

// // //           <p className="text-[#C9A24D] font-medium mt-6">
// // //             Serving clients across Bangalore, across Karnataka, and representing NRI clients globally.
// // //           </p>

// // //           <p className="text-[#C9A24D] font-semibold mt-2">
// // //             Response within 24 hours guaranteed.
// // //           </p>

// // //           {/* CTA BUTTONS */}
// // //           <div className="flex flex-wrap justify-center gap-6 mt-10">
// // //             <Link
// // //               href="/legal-consultation-in-bangalore"
// // //               className="bg-[#C9A24D] text-black px-8 py-3 font-semibold hover:opacity-90 transition"
// // //             >
// // //               Book Confidential Consultation
// // //             </Link>

// // //             <Link
// // //               href="/contact"
// // //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// // //             >
// // //               Request Call Back
// // //             </Link>
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* ================= OUR LEGAL TEAM ================= */}
// // //       <section className="bg-white text-black py-24 px-6">
// // //         <div className="max-w-6xl mx-auto">

// // //           <h2 className="text-3xl font-serif text-center">
// // //             Our Legal Team
// // //           </h2>

// // //           <h3 className="text-center text-[#C9A24D] mt-4 font-medium">
// // //             Trusted Legal Experts & Top Legal Consultants in Bangalore
// // //           </h3>

// // //           <p className="text-center text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
// // //             As a respected law firm in the city, our team includes experienced advocates and top legal consultants in Bangalore with expertise across litigation, corporate advisory, dispute resolution, and regulatory matters.
// // //             Each member of our legal team is committed to providing personalized strategy, transparent communication, and strong courtroom advocacy to achieve effective legal outcomes.
// // //           </p>

// // //           {/* TEAM CARDS */}
// // //           <div className="grid md:grid-cols-3 gap-10 mt-14">
// // //             {teamMembers.map((member, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="border border-gray-200 p-8 hover:shadow-xl transition rounded-lg"
// // //               >
// // //                 <h3 className="text-xl font-semibold text-black">
// // //                   {member.name}
// // //                 </h3>

// // //                 <p className="text-[#C9A24D] mt-1 font-medium">
// // //                   Designation: {member.designation}
// // //                 </p>

// // //                 <p className="text-gray-600 text-sm mt-4">
// // //                   <strong>Practice Areas:</strong> Corporate & Commercial Law | Civil Litigation | Criminal Defense | Family & Divorce Law | Employment & Labour Law
// // //                 </p>

// // //                 <p className="text-gray-600 text-sm mt-4">
// // //                   An experienced legal professional with a strong record of representing clients before courts and tribunals. Known for strategic thinking, ethical practice, and effective advocacy in complex matters.
// // //                 </p>

// // //                 <Link
// // //                   href={`/lawyers-in-bangalore/${member.slug}`}
// // //                   className="inline-block mt-6 text-[#C9A24D] font-semibold"
// // //                 >
// // //                   View Full Profile →
// // //                 </Link>
// // //               </div>
// // //             ))}
// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* ================= FAQ SECTION ================= */}
// // //       <section className="bg-black text-white py-24 px-6">
// // //         <div className="max-w-5xl mx-auto">

// // //           <h2 className="text-3xl font-serif text-center mb-12">
// // //             Frequently Asked Questions
// // //           </h2>

// // //           <div className="space-y-8 text-gray-300">

// // //             <div>
// // //               <h3 className="text-[#C9A24D] font-semibold">
// // //                 1. Who are the lawyers in Bangalore at S Jain & Attorneys?
// // //               </h3>
// // //               <p className="mt-2">
// // //                 Our team consists of qualified and experienced lawyers in Bangalore specializing in corporate law, civil litigation, criminal defense, family law, property disputes, employment matters, and advisory services.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h3 className="text-[#C9A24D] font-semibold">
// // //                 2. What makes your team among the best lawyers in Bangalore?
// // //               </h3>
// // //               <p className="mt-2">
// // //                 We focus on strategic legal planning, thorough case preparation, ethical representation, and personalized legal guidance tailored to each client’s objectives.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h3 className="text-[#C9A24D] font-semibold">
// // //                 3. Do you have experienced advocates in Bangalore for litigation matters?
// // //               </h3>
// // //               <p className="mt-2">
// // //                 Yes. Our experienced advocates regularly represent clients before trial courts, tribunals, High Court benches, and regulatory forums.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h3 className="text-[#C9A24D] font-semibold">
// // //                 4. What practice areas do your top legal consultants in Bangalore handle?
// // //               </h3>
// // //               <p className="mt-2">
// // //                 We provide services in corporate and commercial law, civil disputes, criminal defense, matrimonial matters, property law, employment law, regulatory compliance, and dispute resolution.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h3 className="text-[#C9A24D] font-semibold">
// // //                 5. How can I book a consultation with your legal team?
// // //               </h3>
// // //               <p className="mt-2">
// // //                 You can schedule a confidential consultation through our website or contact our office directly for immediate assistance.
// // //               </p>
// // //             </div>

// // //             <div>
// // //               <h3 className="text-[#C9A24D] font-semibold">
// // //                 6. Do you represent clients outside Bangalore?
// // //               </h3>
// // //               <p className="mt-2">
// // //                 Yes, we serve clients across Karnataka and represent NRI clients globally in litigation, advisory, and cross-border matters.
// // //               </p>
// // //             </div>

// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* ================= FINAL CTA ================= */}
// // //       <section className="bg-white py-24 px-6 text-center">
// // //         <div className="max-w-4xl mx-auto">

// // //           <h2 className="text-3xl font-serif text-black">
// // //             Consult With the Best Lawyers in Bangalore
// // //           </h2>

// // //           <p className="text-gray-600 mt-6 leading-relaxed">
// // //             Whether you require corporate advisory, litigation support, criminal defense, employment law guidance, or family law assistance, our team of top legal consultants in Bangalore is ready to assist you with professionalism and discretion.
// // //           </p>

// // //           <p className="mt-4 font-medium text-black">
// // //             Confidential consultations. Strategic legal advice. Strong courtroom representation.
// // //           </p>

// // //           <div className="mt-10 flex justify-center gap-6 flex-wrap">
// // //             <Link
// // //               href="/legal-consultation-in-bangalore"
// // //               className="bg-[#C9A24D] text-black px-8 py-3 font-semibold hover:opacity-90 transition"
// // //             >
// // //               Book Confidential Consultation
// // //             </Link>

// // //             <Link
// // //               href="/contact"
// // //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// // //             >
// // //               Call Now
// // //             </Link>
// // //           </div>

// // //           <p className="text-gray-500 text-sm mt-6">
// // //             All matters handled with complete confidentiality and legal discretion.
// // //           </p>

// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </>
// // //   );
// // // }

// // import Link from "next/link";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // /* ================= SEO META ================= */

// // export const metadata = {
// //   title: "Lawyers in Bangalore | S Jain & Attorneys",
// //   description:
// //     "Meet experienced lawyers in Bangalore at S Jain & Attorneys providing strategic legal representation across corporate, civil, criminal, family and regulatory matters.",
// //   alternates: {
// //     canonical: "https://yourdomain.com/lawyers-in-bangalore",
// //   },
// // };

// // /* ================= TEAM DATA ================= */

// // const teamMembers = [
// //   {
// //     name: "S. Jain",
// //     designation: "Managing Partner",
// //     slug: "s-jain",
// //   },
// //   {
// //     name: "A. Mehta",
// //     designation: "Senior Advocate",
// //     slug: "a-mehta",
// //   },
// //   {
// //     name: "R. Verma",
// //     designation: "Advocate",
// //     slug: "r-verma",
// //   },
// // ];

// // export default function LawyersPage() {
// //   return (
// //     <>
// //       <Navbar />

// //       {/* ================= HERO SECTION ================= */}
// //       <section className="bg-black text-white py-24 px-6">
// //         <div className="max-w-6xl mx-auto text-center">

// //           <h1 className="text-4xl md:text-5xl font-serif font-semibold">
// //             Meet Our Experienced Lawyers in Bangalore
// //           </h1>

// //           <p className="text-gray-300 max-w-4xl mx-auto mt-8 leading-relaxed">
// //             S Jain & Attorneys provides full-service legal representation across litigation, advisory, and regulatory matters. 
// //             Our team of experienced lawyers in Bangalore delivers strategic, result-oriented legal solutions for individuals, startups, multinational companies, and NRIs.
// //           </p>

// //           <p className="text-gray-400 mt-4 max-w-4xl mx-auto leading-relaxed">
// //             Recognized among the best lawyers in Bangalore, our advocates combine courtroom expertise, structured legal strategy, and strict confidentiality to protect your rights and long-term interests.
// //           </p>

// //           <p className="text-[#C9A24D] font-medium mt-6">
// //             Serving clients across Bangalore, across Karnataka, and representing NRI clients globally.
// //           </p>

// //           <p className="text-[#C9A24D] font-semibold mt-2">
// //             Response within 24 hours guaranteed.
// //           </p>

// //           <div className="flex flex-wrap justify-center gap-6 mt-10">
// //             <Link
// //               href="/legal-consultation-in-bangalore"
// //               className="bg-[#C9A24D] text-black px-8 py-3 font-semibold hover:opacity-90 transition"
// //             >
// //               Book Confidential Consultation
// //             </Link>

// //             <Link
// //               href="/contact"
// //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// //             >
// //               Request Call Back
// //             </Link>
// //           </div>

// //         </div>
// //       </section>

// //       {/* ================= OUR LEGAL TEAM ================= */}
// //       <section className="bg-white py-24 px-6">
// //         <div className="max-w-6xl mx-auto">

// //           <h2 className="text-3xl font-serif text-center">
// //             Our Legal Team
// //           </h2>

// //           <h3 className="text-center text-[#C9A24D] mt-4 font-medium">
// //             Trusted Legal Experts & Top Legal Consultants in Bangalore
// //           </h3>

// //           <p className="text-center text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
// //             As a respected law firm in the city, our team includes experienced advocates and top legal consultants in Bangalore with expertise across litigation, corporate advisory, dispute resolution, and regulatory matters.
// //             Each member of our legal team is committed to providing personalized strategy, transparent communication, and strong courtroom advocacy to achieve effective legal outcomes.
// //           </p>

// //           <div className="grid md:grid-cols-3 gap-10 mt-14">
// //             {teamMembers.map((member, index) => (
// //               <div
// //                 key={index}
// //                 className="border border-gray-200 p-8 hover:shadow-xl transition rounded-lg"
// //               >
// //                 <h3 className="text-xl font-semibold">
// //                   {member.name}
// //                 </h3>

// //                 <p className="text-[#C9A24D] mt-1 font-medium">
// //                   Designation: {member.designation}
// //                 </p>

// //                 <p className="text-gray-600 text-sm mt-4">
// //                   <strong>Practice Areas:</strong> Corporate & Commercial Law | Civil Litigation | Criminal Defense | Family & Divorce Law | Employment & Labour Law
// //                 </p>

// //                 <p className="text-gray-600 text-sm mt-4">
// //                   An experienced legal professional with a strong record of representing clients before courts and tribunals. Known for strategic thinking, ethical practice, and effective advocacy in complex matters.
// //                 </p>

// //                 <Link
// //                   href={`/lawyers-in-bangalore/${member.slug}`}
// //                   className="inline-block mt-6 text-[#C9A24D] font-semibold"
// //                 >
// //                   View Full Profile →
// //                 </Link>
// //               </div>
// //             ))}
// //           </div>

// //         </div>
// //       </section>

// //       {/* ================= FAQ SECTION ================= */}
// //       <section className="bg-black text-white py-24 px-6">
// //         <div className="max-w-5xl mx-auto">

// //           <h2 className="text-3xl font-serif text-center mb-12">
// //             Frequently Asked Questions
// //           </h2>

// //           <div className="space-y-8 text-gray-300">

// //             <div>
// //               <h3 className="text-[#C9A24D] font-semibold">
// //                 1. Who are the lawyers in Bangalore at S Jain & Attorneys?
// //               </h3>
// //               <p className="mt-2">
// //                 Our team consists of qualified and experienced lawyers in Bangalore specializing in corporate law, civil litigation, criminal defense, family law, property disputes, employment matters, and advisory services.
// //               </p>
// //             </div>

// //             <div>
// //               <h3 className="text-[#C9A24D] font-semibold">
// //                 2. What makes your team among the best lawyers in Bangalore?
// //               </h3>
// //               <p className="mt-2">
// //                 We focus on strategic legal planning, thorough case preparation, ethical representation, and personalized legal guidance tailored to each client’s objectives.
// //               </p>
// //             </div>

// //             <div>
// //               <h3 className="text-[#C9A24D] font-semibold">
// //                 3. Do you have experienced advocates in Bangalore for litigation matters?
// //               </h3>
// //               <p className="mt-2">
// //                 Yes. Our experienced advocates regularly represent clients before trial courts, tribunals, High Court benches, and regulatory forums.
// //               </p>
// //             </div>

// //             <div>
// //               <h3 className="text-[#C9A24D] font-semibold">
// //                 4. What practice areas do your top legal consultants in Bangalore handle?
// //               </h3>
// //               <p className="mt-2">
// //                 We provide services in corporate and commercial law, civil disputes, criminal defense, matrimonial matters, property law, employment law, regulatory compliance, and dispute resolution.
// //               </p>
// //             </div>

// //             <div>
// //               <h3 className="text-[#C9A24D] font-semibold">
// //                 5. How can I book a consultation with your legal team?
// //               </h3>
// //               <p className="mt-2">
// //                 You can schedule a confidential consultation through our website or contact our office directly for immediate assistance.
// //               </p>
// //             </div>

// //             <div>
// //               <h3 className="text-[#C9A24D] font-semibold">
// //                 6. Do you represent clients outside Bangalore?
// //               </h3>
// //               <p className="mt-2">
// //                 Yes, we serve clients across Karnataka and represent NRI clients globally in litigation, advisory, and cross-border matters.
// //               </p>
// //             </div>

// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= CALL TO ACTION ================= */}
// //       <section className="bg-white py-24 px-6 text-center">
// //         <div className="max-w-4xl mx-auto">

// //           <h2 className="text-3xl font-serif">
// //             Consult With the Best Lawyers in Bangalore
// //           </h2>

// //           <p className="text-gray-600 mt-6 leading-relaxed">
// //             Whether you require corporate advisory, litigation support, criminal defense, employment law guidance, or family law assistance, our team of top legal consultants in Bangalore is ready to assist you with professionalism and discretion.
// //           </p>

// //           <p className="mt-4 font-medium">
// //             Confidential consultations. Strategic legal advice. Strong courtroom representation.
// //           </p>

// //           <div className="mt-10 flex justify-center gap-6 flex-wrap">
// //             <Link
// //               href="/legal-consultation-in-bangalore"
// //               className="bg-[#C9A24D] text-black px-8 py-3 font-semibold hover:opacity-90 transition"
// //             >
// //               Book Confidential Consultation
// //             </Link>

// //             <Link
// //               href="/contact"
// //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// //             >
// //               Call Now
// //             </Link>
// //           </div>

// //           <p className="text-gray-500 text-sm mt-6">
// //             All matters handled with complete confidentiality and legal discretion.
// //           </p>

// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// /* ================= SEO META ================= */


// /* ================= TEAM DATA ================= */

// const teamMembers = [
//   { name: "S. Jain", designation: "Managing Partner", slug: "s-jain" },
//   { name: "A. Mehta", designation: "Senior Advocate", slug: "a-mehta" },
//   { name: "R. Verma", designation: "Advocate", slug: "r-verma" },
// ];

// export default function LawyersPage() {
//   const [openIndex, setOpenIndex] = useState(null);

// const toggleFAQ = (index) => {
//   setOpenIndex(openIndex === index ? null : index);
// };
//   return (
//     <>
//       <Navbar />

//       {/* ================= HERO ================= */}
//       <section className="bg-black text-[#C9A24D] py-24 px-6">
//         <div className="max-w-6xl mx-auto text-center">

//           <h1 className="text-4xl md:text-5xl font-serif font-semibold">
//             Meet Our Experienced Lawyers in Bangalore
//           </h1>

//           <div className="mt-8 space-y-4 max-w-4xl mx-auto text-gray-300 leading-relaxed">
//             <p>
//               S Jain & Attorneys provides full-service legal representation across litigation, advisory, and regulatory matters. Our team of experienced lawyers in Bangalore delivers strategic, result-oriented legal solutions for individuals, startups, multinational companies, and NRIs.
//             </p>
//             <p>
//               Recognized among the best lawyers in Bangalore, our advocates combine courtroom expertise, structured legal strategy, and strict confidentiality to protect your rights and long-term interests.
//             </p>
//             <p>
//               Serving clients across Bangalore, across Karnataka, and representing NRI clients globally.
//             </p>
//             <p className="text-[#C9A24D] font-semibold">
//               Response within 24 hours guaranteed.
//             </p>
//           </div>

//           {/* <div className="flex flex-wrap justify-center gap-6 mt-10"> */}
//           <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10">
            
//             <Link href="/legal-consultation-in-bangalore" className="bg-[#C9A24D] text-black px-8 py-3 font-semibold">
//               Book Confidential Consultation
//             </Link>
//             <Link href="/contact" className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition">
//               Request Call Back
//             </Link>
//           </div>

//         </div>
//       </section>

//       {/* ================= OUR LEGAL TEAM ================= */}
//       <section className="bg-white py-24 px-6">
//         <div className="max-w-6xl mx-auto text-center">

//           <h2 className="text-3xl font-serif">Our Legal Team</h2>

//           <h3 className="text-[#C9A24D] mt-4 font-medium">
//             Trusted Legal Experts & Top Legal Consultants in Bangalore
//           </h3>

//           <p className="mt-6 text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             As a respected law firm in the city, our team includes experienced advocates and top legal consultants in Bangalore with expertise across litigation, corporate advisory, dispute resolution, and regulatory matters.
//             Each member of our legal team is committed to providing personalized strategy, transparent communication, and strong courtroom advocacy to achieve effective legal outcomes.
//           </p>

//           <div className="grid md:grid-cols-3 gap-10 mt-14 text-left">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="border p-8 rounded-lg hover:shadow-lg transition">

//                 <h3 className="text-xl font-semibold">{member.name}</h3>

//                 <p className="text-[#C9A24D] mt-2 font-medium">
//                   Designation: {member.designation}
//                 </p>

//                 <p className="text-gray-600 text-sm mt-4">
//                   <strong>Practice Areas:</strong> Corporate & Commercial Law | Civil Litigation | Criminal Defense | Family & Divorce Law | Employment & Labour Law
//                 </p>

//                 <p className="text-gray-600 text-sm mt-4">
//                   An experienced legal professional with a strong record of representing clients before courts and tribunals. Known for strategic thinking, ethical practice, and effective advocacy in complex matters.
//                 </p>

//                 <Link href={`/lawyers-in-bangalore/${member.slug}`} className="inline-block mt-6 text-[#C9A24D] font-semibold">
//                   View Full Profile →
//                 </Link>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ================= FAQ ================= */}
//       <section className="bg-black text-white py-24 px-6">
//         <div className="max-w-5xl mx-auto">

//           <h2 className="text-3xl font-serif text-center mb-12">
//             Frequently Asked Questions
//           </h2>

//         <div className="space-y-4">

//   {[
//     ["Who are the lawyers in Bangalore at S Jain & Attorneys?",
//       "Our team consists of qualified and experienced lawyers in Bangalore specializing in corporate law, civil litigation, criminal defense, family law, property disputes, employment matters, and advisory services."],

//     ["What makes your team among the best lawyers in Bangalore?",
//       "We focus on strategic legal planning, thorough case preparation, ethical representation, and personalized legal guidance tailored to each client’s objectives."],

//     ["Do you have experienced advocates in Bangalore for litigation matters?",
//       "Yes. Our experienced advocates regularly represent clients before trial courts, tribunals, High Court benches, and regulatory forums."],

//     ["What practice areas do your top legal consultants in Bangalore handle?",
//       "We provide services in corporate and commercial law, civil disputes, criminal defense, matrimonial matters, property law, employment law, regulatory compliance, and dispute resolution."],

//     ["How can I book a consultation with your legal team?",
//       "You can schedule a confidential consultation through our website or contact our office directly for immediate assistance."],

//     ["Do you represent clients outside Bangalore?",
//       "Yes, we serve clients across Karnataka and represent NRI clients globally in litigation, advisory, and cross-border matters."]
//   ].map(([question, answer], index) => (

//     <div
//       key={index}
//       className="border border-[#C9A24D] rounded-lg transition-all duration-300"
//     >

//       <button
//         onClick={() => toggleFAQ(index)}
//         className="w-full text-left p-6 flex justify-between items-center font-semibold text-[#C9A24D]"
//       >
//         <span>{question}</span>
//         <span className="text-xl">
//           {openIndex === index ? "−" : "+"}
//         </span>
//       </button>

//       {openIndex === index && (
//         <div className="px-6 pb-6 text-gray-300">
//           {answer}
//         </div>
//       )}

//     </div>

//   ))}

// </div>

//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="bg-white py-24 px-6 text-center">
//         <div className="max-w-4xl mx-auto">

//           <h2 className="text-3xl font-serif">
//             Consult With the Best Lawyers in Bangalore
//           </h2>

//           <p className="text-gray-600 mt-6 leading-relaxed">
//             Whether you require corporate advisory, litigation support, criminal defense, employment law guidance, or family law assistance, our team of top legal consultants in Bangalore is ready to assist you with professionalism and discretion.
//           </p>

//           <p className="mt-4 font-medium">
//             Confidential consultations. Strategic legal advice. Strong courtroom representation.
//           </p>

//           {/* <div className="mt-10 flex justify-center gap-6 flex-wrap"> */}
//             <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10">
//             <Link href="/legal-consultation-in-bangalore" className="bg-[#C9A24D] text-black px-8 py-3 font-semibold">
//               Book Confidential Consultation
//             </Link>
//             <Link href="/contact" className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition">
//               Call Now
//             </Link>
//           </div>

//           <p className="text-gray-500 text-sm mt-6">
//             All matters handled with complete confidentiality and legal discretion.
//           </p>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }


"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const teamMembers = [
  {
    name: "S. Jain",
    designation: "Managing Partner",
    slug: "s-jain",
    practiceAreas: "Corporate & Commercial Law | Civil Litigation | Criminal Defense | Family & Divorce Law | Employment & Labour Law",
    bio: "An experienced legal professional with a strong record of representing clients before courts and tribunals. Known for strategic thinking, ethical practice, and effective advocacy in complex matters.",
  },
  {
    name: "A. Mehta",
    designation: "Senior Advocate",
    slug: "a-mehta",
    practiceAreas: "Corporate & Commercial Law | Civil Litigation | Criminal Defense | Family & Divorce Law | Employment & Labour Law",
    bio: "An experienced legal professional with a strong record of representing clients before courts and tribunals. Known for strategic thinking, ethical practice, and effective advocacy in complex matters.",
  },
  {
    name: "R. Verma",
    designation: "Advocate",
    slug: "r-verma",
    practiceAreas: "Corporate & Commercial Law | Civil Litigation | Criminal Defense | Family & Divorce Law | Employment & Labour Law",
    bio: "An experienced legal professional with a strong record of representing clients before courts and tribunals. Known for strategic thinking, ethical practice, and effective advocacy in complex matters.",
  },
];

const faqs = [
  {
    q: "Who are the lawyers in Bangalore at S Jain & Attorneys?",
    a: "Our team consists of qualified and experienced lawyers in Bangalore specializing in corporate law, civil litigation, criminal defense, family law, property disputes, employment matters, and advisory services.",
  },
  {
    q: "What makes your team among the best lawyers in Bangalore?",
    a: "We focus on strategic legal planning, thorough case preparation, ethical representation, and personalized legal guidance tailored to each client's objectives.",
  },
  {
    q: "Do you have experienced advocates in Bangalore for litigation matters?",
    a: "Yes. Our experienced advocates regularly represent clients before trial courts, tribunals, High Court benches, and regulatory forums.",
  },
  {
    q: "What practice areas do your top legal consultants in Bangalore handle?",
    a: "We provide services in corporate and commercial law, civil disputes, criminal defense, matrimonial matters, property law, employment law, regulatory compliance, and dispute resolution.",
  },
  {
    q: "How can I book a consultation with your legal team?",
    a: "You can schedule a confidential consultation through our website or contact our office directly for immediate assistance.",
  },
  {
    q: "Do you represent clients outside Bangalore?",
    a: "Yes, we serve clients across Karnataka and represent NRI clients globally in litigation, advisory, and cross-border matters.",
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
      className="mb-12"
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

export default function LawyersPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpa = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════ HERO ═══════════════════════════════ */}
      <section ref={heroRef}
        className="relative bg-black text-white overflow-hidden min-h-[90vh] flex items-center"
      >
        {/* top gold border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

        {/* animated corner brackets */}
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

        {/* subtle gold grid */}
        {/* <div className="absolute inset-0 opacity-[0.04]" style={{
          // backgroundImage:
            "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
            "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
        }} /> */}

        <motion.div 
          className="relative max-w-6xl mx-auto px-7 py-12 md:py-14 w-full text-center"
        >
          {/* eyebrow */}
          {/* <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
          >
            <span className="inline-block w-8 h-px bg-[#C9A24D]" />
            S Jain &amp; Attorneys · Bangalore, India
            <span className="inline-block w-8 h-px bg-[#C9A24D]" />
          </motion.p> */}

          {/* H1 */}
          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white mb-10 max-w-5xl mx-auto"
          >
            Meet Our Experienced{" "}
            <span className="text-[#C9A24D]">Lawyers in Bangalore</span>
          </motion.h1>

          {/* subtext paras */}
          <motion.div variants={stagger} initial="hidden" animate="show"
            className="max-w-3xl mx-auto space-y-4 mb-8"
          >
            <motion.p variants={fadeUp} custom={2} className="text-gray-300 text-lg leading-relaxed">
              S Jain &amp; Attorneys provides full-service legal representation across litigation,
              advisory, and regulatory matters. Our team of experienced lawyers in Bangalore
              delivers strategic, result-oriented legal solutions for individuals, startups,
              multinational companies, and NRIs.
            </motion.p>
            <motion.p variants={fadeUp} custom={3} className="text-gray-300 text-lg leading-relaxed">
              Recognized among the best lawyers in Bangalore, our advocates combine courtroom
              expertise, structured legal strategy, and strict confidentiality to protect your
              rights and long-term interests.
            </motion.p>
            <motion.p variants={fadeUp} custom={4} className="text-gray-400 text-base">
              Serving clients across Bangalore, across Karnataka, and representing NRI clients globally.
            </motion.p>
            <motion.p variants={fadeUp} custom={5}
              className="text-[#C9A24D] font-bold text-base tracking-wide"
            >
              Response within 24 hours guaranteed.
            </motion.p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={6}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/legal-consultation-in-bangalore"
                className="inline-block bg-[#C9A24D] text-black px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#b8913d] transition-colors duration-200"
              >
                Book Confidential Consultation
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/contact"
                className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold text-sm tracking-wide hover:bg-[#C9A24D] hover:text-black transition-colors duration-300"
              >
                Request Call Back
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
          />
        </motion.div> */}

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════════════════ OUR LEGAL TEAM ════════════════════════ */}
      <section className="py-14 px-6 bg-white relative overflow-hidden">
        <motion.div
          initial={{ height: 0 }} whileInView={{ height: "60%" }} viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute right-0 top-[20%] w-[3px] bg-gradient-to-b from-transparent via-[#C9A24D] to-transparent"
        />

        <div className="max-w-6xl mx-auto">
          <SectionHeading>Our Legal Team</SectionHeading>

          {/* H3 sub-heading */}
          <motion.h3 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-xl font-bold text-[#C9A24D] mb-6 tracking-wide"
          >
            Trusted Legal Experts &amp; Top Legal Consultants in Bangalore
          </motion.h3>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="space-y-4 text-gray-600 text-lg leading-relaxed mb-16"
          >
            <motion.p variants={fadeUp}>
              As a respected law firm in the city, our team includes experienced advocates and top
              legal consultants in Bangalore with expertise across litigation, corporate advisory,
              dispute resolution, and regulatory matters.
            </motion.p>
            <motion.p variants={fadeUp} custom={0.5}>
              Each member of our legal team is committed to providing personalized strategy,
              transparent communication, and strong courtroom advocacy to achieve effective
              legal outcomes.
            </motion.p>
          </motion.div>

          {/* Team member cards */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, i) => (
              <motion.div key={member.slug} variants={scaleIn} custom={i * 0.15}
                whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(201,162,77,0.15)" }}   
                className="bg-white border border-gray-100  rounded-xl p-8 group transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                {/* gold top bar on hover */}
                {/* <motion.span
                  initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
                  className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D] origin-left"
                  style={{ transition: "transform 0.3s ease" }}
                /> */}

                {/* avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-[#f8f6f1] border-2 border-[#C9A24D]/30 flex items-center justify-center mb-6 group-hover:border-[#C9A24D] transition-colors duration-300">
                  <span className="text-[#C9A24D] font-black text-xl">
                    {member.name.charAt(0)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#8a6a20] transition-colors duration-200 mb-1">
                  {member.name}
                </h3>

                <p className="text-[#C9A24D] font-semibold text-sm mb-4">
                  {member.designation}
                </p>

                <div className="border-t border-gray-100 group-hover:border-[#C9A24D]/30 pt-4 transition-colors duration-300 mb-4">
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-2">
                    Practice Areas
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.practiceAreas}
                  </p>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {member.bio}
                </p>

                <Link href={`/lawyers-in-bangalore/${member.slug}`}
                  className="inline-flex items-center gap-2 text-[#C9A24D] font-semibold text-sm group-hover:gap-3 transition-all duration-200"
                >
                  View Full Profile
                  <span className="text-base">→</span>
                </Link>

                {/* corner ornament */}
                <span className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#C9A24D]/20 group-hover:border-[#C9A24D]/60 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════ FAQ ═══════════════════════════════════ */}
      <section className="py-14 px-6 bg-[#f8f6f1] relative">
        <GoldDivider />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

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
                    <svg className={`w-5 h-5 ${openIndex === index ? "text-[#C9A24D]" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
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
      <section className="py-28 px-6 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

        {/* animated concentric rings */}
        {[0, 1, 2].map((i) => (
          <motion.div key={i}
            initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
            className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
            style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
          />
        ))}

        <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-4xl mx-auto border border-[#C9A24D]/30 rounded-2xl px-10 py-16"
        >
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
            S Jain &amp; Attorneys · Lawyers in Bangalore
          </motion.p>

          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Consult With the Best Lawyers in Bangalore
          </motion.h2>

          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
            className="text-gray-300 text-lg mb-4 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you require corporate advisory, litigation support, criminal defense, employment
            law guidance, or family law assistance, our team of top legal consultants in Bangalore is
            ready to assist you with professionalism and discretion.
          </motion.p>

          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
            className="text-[#C9A24D] font-semibold text-sm tracking-wide mb-10"
          >
            Confidential consultations. Strategic legal advice. Strong courtroom representation.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link href="tel:+919000000000"
                className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-12 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
              >
                Call Now
              </Link>
            </motion.div>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={5}
            className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
          >
            <span className="inline-block w-4 h-px bg-gray-600" />
            All matters handled with complete confidentiality and legal discretion.
            <span className="inline-block w-4 h-px bg-gray-600" />
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}