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

// //           <div className="w-24 h-[2px] bg-[#C9A24D] mx-auto my-6"></div>

// //           <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
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

// //           {/* CTA BUTTONS */}
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
// //       <section className="bg-white text-black py-24 px-6">
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

// //           {/* TEAM CARDS */}
// //           <div className="grid md:grid-cols-3 gap-10 mt-14">
// //             {teamMembers.map((member, index) => (
// //               <div
// //                 key={index}
// //                 className="border border-gray-200 p-8 hover:shadow-xl transition rounded-lg"
// //               >
// //                 <h3 className="text-xl font-semibold text-black">
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

// //       {/* ================= FINAL CTA ================= */}
// //       <section className="bg-white py-24 px-6 text-center">
// //         <div className="max-w-4xl mx-auto">

// //           <h2 className="text-3xl font-serif text-black">
// //             Consult With the Best Lawyers in Bangalore
// //           </h2>

// //           <p className="text-gray-600 mt-6 leading-relaxed">
// //             Whether you require corporate advisory, litigation support, criminal defense, employment law guidance, or family law assistance, our team of top legal consultants in Bangalore is ready to assist you with professionalism and discretion.
// //           </p>

// //           <p className="mt-4 font-medium text-black">
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

// import Link from "next/link";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// /* ================= SEO META ================= */

// export const metadata = {
//   title: "Lawyers in Bangalore | S Jain & Attorneys",
//   description:
//     "Meet experienced lawyers in Bangalore at S Jain & Attorneys providing strategic legal representation across corporate, civil, criminal, family and regulatory matters.",
//   alternates: {
//     canonical: "https://yourdomain.com/lawyers-in-bangalore",
//   },
// };

// /* ================= TEAM DATA ================= */

// const teamMembers = [
//   {
//     name: "S. Jain",
//     designation: "Managing Partner",
//     slug: "s-jain",
//   },
//   {
//     name: "A. Mehta",
//     designation: "Senior Advocate",
//     slug: "a-mehta",
//   },
//   {
//     name: "R. Verma",
//     designation: "Advocate",
//     slug: "r-verma",
//   },
// ];

// export default function LawyersPage() {
//   return (
//     <>
//       <Navbar />

//       {/* ================= HERO SECTION ================= */}
//       <section className="bg-black text-white py-24 px-6">
//         <div className="max-w-6xl mx-auto text-center">

//           <h1 className="text-4xl md:text-5xl font-serif font-semibold">
//             Meet Our Experienced Lawyers in Bangalore
//           </h1>

//           <p className="text-gray-300 max-w-4xl mx-auto mt-8 leading-relaxed">
//             S Jain & Attorneys provides full-service legal representation across litigation, advisory, and regulatory matters. 
//             Our team of experienced lawyers in Bangalore delivers strategic, result-oriented legal solutions for individuals, startups, multinational companies, and NRIs.
//           </p>

//           <p className="text-gray-400 mt-4 max-w-4xl mx-auto leading-relaxed">
//             Recognized among the best lawyers in Bangalore, our advocates combine courtroom expertise, structured legal strategy, and strict confidentiality to protect your rights and long-term interests.
//           </p>

//           <p className="text-[#C9A24D] font-medium mt-6">
//             Serving clients across Bangalore, across Karnataka, and representing NRI clients globally.
//           </p>

//           <p className="text-[#C9A24D] font-semibold mt-2">
//             Response within 24 hours guaranteed.
//           </p>

//           <div className="flex flex-wrap justify-center gap-6 mt-10">
//             <Link
//               href="/legal-consultation-in-bangalore"
//               className="bg-[#C9A24D] text-black px-8 py-3 font-semibold hover:opacity-90 transition"
//             >
//               Book Confidential Consultation
//             </Link>

//             <Link
//               href="/contact"
//               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition"
//             >
//               Request Call Back
//             </Link>
//           </div>

//         </div>
//       </section>

//       {/* ================= OUR LEGAL TEAM ================= */}
//       <section className="bg-white py-24 px-6">
//         <div className="max-w-6xl mx-auto">

//           <h2 className="text-3xl font-serif text-center">
//             Our Legal Team
//           </h2>

//           <h3 className="text-center text-[#C9A24D] mt-4 font-medium">
//             Trusted Legal Experts & Top Legal Consultants in Bangalore
//           </h3>

//           <p className="text-center text-gray-600 mt-6 max-w-4xl mx-auto leading-relaxed">
//             As a respected law firm in the city, our team includes experienced advocates and top legal consultants in Bangalore with expertise across litigation, corporate advisory, dispute resolution, and regulatory matters.
//             Each member of our legal team is committed to providing personalized strategy, transparent communication, and strong courtroom advocacy to achieve effective legal outcomes.
//           </p>

//           <div className="grid md:grid-cols-3 gap-10 mt-14">
//             {teamMembers.map((member, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-200 p-8 hover:shadow-xl transition rounded-lg"
//               >
//                 <h3 className="text-xl font-semibold">
//                   {member.name}
//                 </h3>

//                 <p className="text-[#C9A24D] mt-1 font-medium">
//                   Designation: {member.designation}
//                 </p>

//                 <p className="text-gray-600 text-sm mt-4">
//                   <strong>Practice Areas:</strong> Corporate & Commercial Law | Civil Litigation | Criminal Defense | Family & Divorce Law | Employment & Labour Law
//                 </p>

//                 <p className="text-gray-600 text-sm mt-4">
//                   An experienced legal professional with a strong record of representing clients before courts and tribunals. Known for strategic thinking, ethical practice, and effective advocacy in complex matters.
//                 </p>

//                 <Link
//                   href={`/lawyers-in-bangalore/${member.slug}`}
//                   className="inline-block mt-6 text-[#C9A24D] font-semibold"
//                 >
//                   View Full Profile →
//                 </Link>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ================= FAQ SECTION ================= */}
//       <section className="bg-black text-white py-24 px-6">
//         <div className="max-w-5xl mx-auto">

//           <h2 className="text-3xl font-serif text-center mb-12">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-8 text-gray-300">

//             <div>
//               <h3 className="text-[#C9A24D] font-semibold">
//                 1. Who are the lawyers in Bangalore at S Jain & Attorneys?
//               </h3>
//               <p className="mt-2">
//                 Our team consists of qualified and experienced lawyers in Bangalore specializing in corporate law, civil litigation, criminal defense, family law, property disputes, employment matters, and advisory services.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-[#C9A24D] font-semibold">
//                 2. What makes your team among the best lawyers in Bangalore?
//               </h3>
//               <p className="mt-2">
//                 We focus on strategic legal planning, thorough case preparation, ethical representation, and personalized legal guidance tailored to each client’s objectives.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-[#C9A24D] font-semibold">
//                 3. Do you have experienced advocates in Bangalore for litigation matters?
//               </h3>
//               <p className="mt-2">
//                 Yes. Our experienced advocates regularly represent clients before trial courts, tribunals, High Court benches, and regulatory forums.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-[#C9A24D] font-semibold">
//                 4. What practice areas do your top legal consultants in Bangalore handle?
//               </h3>
//               <p className="mt-2">
//                 We provide services in corporate and commercial law, civil disputes, criminal defense, matrimonial matters, property law, employment law, regulatory compliance, and dispute resolution.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-[#C9A24D] font-semibold">
//                 5. How can I book a consultation with your legal team?
//               </h3>
//               <p className="mt-2">
//                 You can schedule a confidential consultation through our website or contact our office directly for immediate assistance.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-[#C9A24D] font-semibold">
//                 6. Do you represent clients outside Bangalore?
//               </h3>
//               <p className="mt-2">
//                 Yes, we serve clients across Karnataka and represent NRI clients globally in litigation, advisory, and cross-border matters.
//               </p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= CALL TO ACTION ================= */}
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

//           <div className="mt-10 flex justify-center gap-6 flex-wrap">
//             <Link
//               href="/legal-consultation-in-bangalore"
//               className="bg-[#C9A24D] text-black px-8 py-3 font-semibold hover:opacity-90 transition"
//             >
//               Book Confidential Consultation
//             </Link>

//             <Link
//               href="/contact"
//               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition"
//             >
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
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ================= SEO META ================= */


/* ================= TEAM DATA ================= */

const teamMembers = [
  { name: "S. Jain", designation: "Managing Partner", slug: "s-jain" },
  { name: "A. Mehta", designation: "Senior Advocate", slug: "a-mehta" },
  { name: "R. Verma", designation: "Advocate", slug: "r-verma" },
];

export default function LawyersPage() {
  const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="bg-black text-[#C9A24D] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h1 className="text-4xl md:text-5xl font-serif font-semibold">
            Meet Our Experienced Lawyers in Bangalore
          </h1>

          <div className="mt-8 space-y-4 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            <p>
              S Jain & Attorneys provides full-service legal representation across litigation, advisory, and regulatory matters. Our team of experienced lawyers in Bangalore delivers strategic, result-oriented legal solutions for individuals, startups, multinational companies, and NRIs.
            </p>
            <p>
              Recognized among the best lawyers in Bangalore, our advocates combine courtroom expertise, structured legal strategy, and strict confidentiality to protect your rights and long-term interests.
            </p>
            <p>
              Serving clients across Bangalore, across Karnataka, and representing NRI clients globally.
            </p>
            <p className="text-[#C9A24D] font-semibold">
              Response within 24 hours guaranteed.
            </p>
          </div>

          {/* <div className="flex flex-wrap justify-center gap-6 mt-10"> */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10">
            
            <Link href="/legal-consultation-in-bangalore" className="bg-[#C9A24D] text-black px-8 py-3 font-semibold">
              Book Confidential Consultation
            </Link>
            <Link href="/contact" className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition">
              Request Call Back
            </Link>
          </div>

        </div>
      </section>

      {/* ================= OUR LEGAL TEAM ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-serif">Our Legal Team</h2>

          <h3 className="text-[#C9A24D] mt-4 font-medium">
            Trusted Legal Experts & Top Legal Consultants in Bangalore
          </h3>

          <p className="mt-6 text-gray-600 max-w-4xl mx-auto leading-relaxed">
            As a respected law firm in the city, our team includes experienced advocates and top legal consultants in Bangalore with expertise across litigation, corporate advisory, dispute resolution, and regulatory matters.
            Each member of our legal team is committed to providing personalized strategy, transparent communication, and strong courtroom advocacy to achieve effective legal outcomes.
          </p>

          <div className="grid md:grid-cols-3 gap-10 mt-14 text-left">
            {teamMembers.map((member, index) => (
              <div key={index} className="border p-8 rounded-lg hover:shadow-lg transition">

                <h3 className="text-xl font-semibold">{member.name}</h3>

                <p className="text-[#C9A24D] mt-2 font-medium">
                  Designation: {member.designation}
                </p>

                <p className="text-gray-600 text-sm mt-4">
                  <strong>Practice Areas:</strong> Corporate & Commercial Law | Civil Litigation | Criminal Defense | Family & Divorce Law | Employment & Labour Law
                </p>

                <p className="text-gray-600 text-sm mt-4">
                  An experienced legal professional with a strong record of representing clients before courts and tribunals. Known for strategic thinking, ethical practice, and effective advocacy in complex matters.
                </p>

                <Link href={`/lawyers-in-bangalore/${member.slug}`} className="inline-block mt-6 text-[#C9A24D] font-semibold">
                  View Full Profile →
                </Link>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-serif text-center mb-12">
            Frequently Asked Questions
          </h2>

        <div className="space-y-4">

  {[
    ["Who are the lawyers in Bangalore at S Jain & Attorneys?",
      "Our team consists of qualified and experienced lawyers in Bangalore specializing in corporate law, civil litigation, criminal defense, family law, property disputes, employment matters, and advisory services."],

    ["What makes your team among the best lawyers in Bangalore?",
      "We focus on strategic legal planning, thorough case preparation, ethical representation, and personalized legal guidance tailored to each client’s objectives."],

    ["Do you have experienced advocates in Bangalore for litigation matters?",
      "Yes. Our experienced advocates regularly represent clients before trial courts, tribunals, High Court benches, and regulatory forums."],

    ["What practice areas do your top legal consultants in Bangalore handle?",
      "We provide services in corporate and commercial law, civil disputes, criminal defense, matrimonial matters, property law, employment law, regulatory compliance, and dispute resolution."],

    ["How can I book a consultation with your legal team?",
      "You can schedule a confidential consultation through our website or contact our office directly for immediate assistance."],

    ["Do you represent clients outside Bangalore?",
      "Yes, we serve clients across Karnataka and represent NRI clients globally in litigation, advisory, and cross-border matters."]
  ].map(([question, answer], index) => (

    <div
      key={index}
      className="border border-[#C9A24D] rounded-lg transition-all duration-300"
    >

      <button
        onClick={() => toggleFAQ(index)}
        className="w-full text-left p-6 flex justify-between items-center font-semibold text-[#C9A24D]"
      >
        <span>{question}</span>
        <span className="text-xl">
          {openIndex === index ? "−" : "+"}
        </span>
      </button>

      {openIndex === index && (
        <div className="px-6 pb-6 text-gray-300">
          {answer}
        </div>
      )}

    </div>

  ))}

</div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-serif">
            Consult With the Best Lawyers in Bangalore
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            Whether you require corporate advisory, litigation support, criminal defense, employment law guidance, or family law assistance, our team of top legal consultants in Bangalore is ready to assist you with professionalism and discretion.
          </p>

          <p className="mt-4 font-medium">
            Confidential consultations. Strategic legal advice. Strong courtroom representation.
          </p>

          {/* <div className="mt-10 flex justify-center gap-6 flex-wrap"> */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-10">
            <Link href="/legal-consultation-in-bangalore" className="bg-[#C9A24D] text-black px-8 py-3 font-semibold">
              Book Confidential Consultation
            </Link>
            <Link href="/contact" className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition">
              Call Now
            </Link>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            All matters handled with complete confidentiality and legal discretion.
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}