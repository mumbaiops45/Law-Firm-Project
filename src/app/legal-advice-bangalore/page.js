// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// /* ================= SEO META ================= */
// export const metadata = {
//   title: "Legal Advice in Bangalore | S Jain & Attorneys",
//   description:
//     "Get reliable legal advice in Bangalore with latest court updates, expert legal insights, and practical guidance from experienced advocates at S Jain & Attorneys.",
//   alternates: {
//     canonical: "/legal-advice-bangalore/",
//   },
//   keywords: [
//     "Legal Advice in Bangalore",
//     "Legal Blog Bangalore",
//     "Bangalore Law Updates",
//     "Legal Articles Bangalore",
//     "Court Case Updates Bangalore",
//     "Advocate Legal Advice",
//   ],
// };

// export default function Page() {
//   return (
//     <>
//       <Navbar />

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative bg-black text-white pt-24 pb-28 px-6">
//         <div className="max-w-6xl mx-auto text-center">

//           <div className="w-20 h-[2px] bg-[#C9A24D] mx-auto mb-8"></div>

//           <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-10 text-[#C9A24D]">
//             Legal Advice in Bangalore – Law Updates & Expert Insights
//           </h1>

//           <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
//             Stay informed with reliable <strong>legal advice in Bangalore</strong>, practical Bangalore law updates, 
//             and expert insights from experienced advocates at <strong>S Jain & Attorneys</strong>. 
//             Our legal blog in Bangalore covers important developments from Bangalore courts and provides 
//             clear, structured guidance across corporate, civil, criminal, family, property, employment, 
//             and regulatory law matters.
//           </p>

//           <p className="text-gray-400 max-w-4xl mx-auto mt-6 leading-relaxed">
//             We aim to simplify complex legal developments and deliver actionable insights 
//             that help individuals, businesses, startups, and NRIs make informed legal decisions.
//             Serving clients across Bangalore, across Karnataka, and representing NRI clients globally.
//           </p>

//           <p className="text-[#C9A24D] font-semibold mt-6">
//             Response within 24 hours guaranteed.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
//             <a
//               href="#contact"
//               className="bg-[#C9A24D] text-black px-10 py-4 rounded-md font-semibold hover:scale-105 transition duration-300"
//             >
//               Book Confidential Consultation
//             </a>

//             <a
//               href="tel:+91XXXXXXXXXX"
//               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 rounded-md font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300"
//             >
//               Request Call Back
//             </a>
//           </div>

//         </div>
//       </section>

//       {/* ================= LATEST LEGAL UPDATES ================= */}
//       <section className="bg-[#0B0B0B] text-white py-24 px-6 border-t border-[#C9A24D]/20">
//         <div className="max-w-5xl mx-auto text-center">

//           <h2 className="text-3xl font-bold text-[#C9A24D] mb-8">
//             Latest Legal Updates from Bangalore Courts
//           </h2>

//           <p className="text-gray-300 leading-relaxed">
//             We regularly publish legal articles in Bangalore explaining recent court judgments, 
//             procedural changes, statutory amendments, and regulatory developments that impact individuals and businesses.
//           </p>

//           <p className="text-gray-400 mt-6">
//             Our focus is to break down complex judicial decisions into practical guidance so readers can understand 
//             their rights, obligations, and legal remedies.
//           </p>

//           <ul className="grid md:grid-cols-2 gap-6 mt-12 text-gray-300 text-left">
//             <li className="border border-[#C9A24D]/20 p-6 rounded-lg">
//               Court Case Updates Bangalore
//             </li>
//             <li className="border border-[#C9A24D]/20 p-6 rounded-lg">
//               Bail and Criminal Procedure Developments
//             </li>
//             <li className="border border-[#C9A24D]/20 p-6 rounded-lg">
//               Civil and Commercial Litigation Insights
//             </li>
//             <li className="border border-[#C9A24D]/20 p-6 rounded-lg">
//               High Court and Appellate Rulings
//             </li>
//             <li className="border border-[#C9A24D]/20 p-6 rounded-lg md:col-span-2">
//               Consumer and Regulatory Decisions
//             </li>
//           </ul>

//         </div>
//       </section>

//       {/* ================= PRACTICE AREAS ================= */}
//       <section className="bg-black text-white py-24 px-6 border-t border-[#C9A24D]/20">
//         <div className="max-w-6xl mx-auto text-center">

//           <h2 className="text-3xl font-bold text-[#C9A24D] mb-12">
//             Practical Legal Guidance Across Key Practice Areas
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8 text-gray-300">

//             <div className="border border-[#C9A24D]/20 p-6 rounded-lg">
//               Corporate & Commercial Law
//             </div>

//             <div className="border border-[#C9A24D]/20 p-6 rounded-lg">
//               Civil Litigation
//             </div>

//             <div className="border border-[#C9A24D]/20 p-6 rounded-lg">
//               Criminal Defense & Bail Procedures
//             </div>

//             <div className="border border-[#C9A24D]/20 p-6 rounded-lg">
//               Family & Divorce Law
//             </div>

//             <div className="border border-[#C9A24D]/20 p-6 rounded-lg">
//               Property & Real Estate Law
//             </div>

//             <div className="border border-[#C9A24D]/20 p-6 rounded-lg">
//               Employment & Labour Law
//             </div>

//             <div className="border border-[#C9A24D]/20 p-6 rounded-lg md:col-span-3">
//               Regulatory Compliance & Advisory
//             </div>

//           </div>

//           <p className="text-gray-400 mt-10">
//             Each legal article in Bangalore is written to provide clarity, risk awareness, 
//             and preventive legal guidance under applicable Indian law.
//           </p>

//         </div>
//       </section>

//       {/* ================= FEATURED LEGAL ARTICLE ================= */}
//       <section className="bg-[#0B0B0B] text-white py-24 px-6 border-t border-[#C9A24D]/20">
//         <div className="max-w-4xl mx-auto text-center">

//           <h2 className="text-3xl font-bold text-[#C9A24D] mb-10">
//             Featured Legal Article
//           </h2>

//           <div className="border border-[#C9A24D]/30 p-10 rounded-xl">

//             <h3 className="text-2xl font-semibold text-[#C9A24D] mb-6">
//               Understanding the Bail Procedure in Bangalore Courts
//             </h3>

//             <p className="text-gray-300 leading-relaxed">
//               A structured guide to the bail process, required documentation, anticipatory bail provisions, 
//               court timelines, and strategic considerations under criminal law in Bangalore.
//             </p>

//             <a
//               href="#"
//               className="inline-block mt-8 border border-[#C9A24D] text-[#C9A24D] px-8 py-3 rounded-md hover:bg-[#C9A24D] hover:text-black transition duration-300"
//             >
//               Read More
//             </a>

//           </div>

//         </div>
//       </section>

//       {/* ================= BANGALORE LEGAL UPDATES SECTION ================= */}
//       <section className="bg-black text-white py-24 px-6 border-t border-[#C9A24D]/20">
//         <div className="max-w-5xl mx-auto text-center">

//           <h2 className="text-3xl font-bold text-[#C9A24D] mb-8">
//             Bangalore Legal Updates & Practical Guidance
//           </h2>

//           <p className="text-gray-300 leading-relaxed">
//             Our legal blog serves as a knowledge resource for individuals, corporate clients, and NRIs 
//             seeking dependable legal advice in Bangalore.
//           </p>

//           <p className="text-gray-400 mt-6 leading-relaxed">
//             Whether you are facing a dispute, planning a business transaction, reviewing compliance obligations, 
//             or evaluating litigation strategy, staying informed allows you to minimize legal risks and make confident decisions.
//           </p>

//           <p className="text-gray-400 mt-6">
//             We clearly explain legal risks, possible outcomes, and preventive measures in relevant subject areas 
//             to enhance legal awareness.
//           </p>

//         </div>
//       </section>

//       {/* ================= FINAL CONSULTATION CTA ================= */}
//       <section
//         id="contact"
//         className="bg-black text-white py-28 px-6 text-center border-t border-[#C9A24D]/20"
//       >
//         <div className="max-w-3xl mx-auto">

//           <h2 className="text-3xl font-bold text-[#C9A24D] mb-6">
//             Consult Experienced Advocates for Clear, Strategic, and Confidential Legal Guidance Tailored to Your Situation
//           </h2>

//           <p className="text-gray-300 mb-8">
//             Confidential consultations. Strategic legal advice. Practical solutions.
//             All matters handled with complete confidentiality and legal discretion.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-6">
//             <a
//               href="#"
//               className="bg-[#C9A24D] text-black px-10 py-4 rounded-md font-semibold hover:scale-105 transition duration-300"
//             >
//               Book Confidential Consultation
//             </a>

//             <a
//               href="tel:+91XXXXXXXXXX"
//               className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 rounded-md font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300"
//             >
//               Request Call Back
//             </a>
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ================= SEO META ================= */
export const metadata = {
  title: "Legal Advice in Bangalore | S Jain & Attorneys",
  description:
    "Get reliable legal advice in Bangalore with latest court updates, expert legal insights, and practical guidance from experienced advocates at S Jain & Attorneys.",
  alternates: {
    canonical: "/legal-advice-bangalore/",
  },
  keywords: [
    "Legal Advice in Bangalore",
    "Legal Blog Bangalore",
    "Bangalore Law Updates",
    "Legal Articles Bangalore",
    "Court Case Updates Bangalore",
    "Advocate Legal Advice",
  ],
};

export default function Page() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-black text-white pt-24 pb-28 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <div className="w-20 h-[2px] bg-[#C9A24D] mx-auto mb-8"></div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-10 text-[#C9A24D]">
            Legal Advice in Bangalore – Law Updates & Expert Insights
          </h1>

          <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed">
            Stay informed with reliable <strong>Legal Advice in Bangalore</strong>, practical Bangalore Law Updates, 
            and expert insights from experienced advocates at <strong>S Jain & Attorneys</strong>. 
            Our Legal Blog Bangalore covers important developments from Bangalore courts and provides 
            clear, structured guidance across corporate, civil, criminal, family, property, employment, 
            and regulatory law matters.
          </p>

          <p className="text-gray-400 max-w-4xl mx-auto mt-6 leading-relaxed">
            We aim to simplify complex legal developments and deliver actionable insights that help 
            individuals, businesses, startups, and NRIs make informed legal decisions.
          </p>

          {/* Highlighted Service Area */}
          <div className="mt-8 inline-block bg-[#C9A24D]/10 border border-[#C9A24D] px-8 py-4 rounded-lg">
            <p className="text-[#C9A24D] font-semibold text-lg">
              Serving clients across Bangalore, across Karnataka, and representing NRI clients globally.
            </p>
          </div>

          <p className="text-[#C9A24D] font-semibold mt-6">
            Response within 24 hours guaranteed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <a
              href="/legal-consultation-in-bangalore/"
              className="bg-[#C9A24D] text-black px-10 py-4 rounded-md font-semibold hover:scale-105 transition duration-300"
            >
              Book Confidential Consultation
            </a>

            <a
              href="tel:+91XXXXXXXXXX"
              className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 rounded-md font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300"
            >
              Request Call Back
            </a>
          </div>

        </div>
      </section>

      {/* ================= LATEST LEGAL UPDATES ================= */}
      <section className="bg-[#0B0B0B] text-white py-24 px-6 border-t border-[#C9A24D]/20">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-[#C9A24D] mb-8 text-center">
            Latest Legal Updates from Bangalore Courts
          </h2>

          <p className="text-gray-300 leading-relaxed text-center">
            We regularly publish Legal Articles Bangalore explaining recent court judgments, procedural changes, 
            statutory amendments, and regulatory developments that impact individuals and businesses.
          </p>

          <p className="text-gray-400 mt-6 text-center">
            Our focus is to break down complex judicial decisions into practical guidance so readers can understand 
            their rights, obligations, and legal remedies.
          </p>

          <p className="text-gray-300 mt-10 font-semibold">
            Topics may include:
          </p>

          <ul className="grid md:grid-cols-2 gap-6 mt-6 text-gray-300">
            <li className="border border-[#C9A24D]/20 p-6 rounded-lg">
              Court Case Updates Bangalore
            </li>
            <li className="border border-[#C9A24D]/20 p-6 rounded-lg">
              Bail and criminal procedure developments
            </li>
            <li className="border border-[#C9A24D]/20 p-6 rounded-lg">
              Civil and commercial litigation insights
            </li>
            <li className="border border-[#C9A24D]/20 p-6 rounded-lg">
              High Court and appellate rulings
            </li>
            <li className="border border-[#C9A24D]/20 p-6 rounded-lg md:col-span-2">
              Consumer and regulatory decisions
            </li>
          </ul>

        </div>
      </section>

      {/* ================= PRACTICE AREAS ================= */}
      <section className="bg-black text-white py-24 px-6 border-t border-[#C9A24D]/20">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-[#C9A24D] mb-12">
            Practical Legal Guidance Across Key Practice Areas
          </h2>

          <p className="text-gray-300 mb-10">
            Explore informative and structured legal articles across:
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-gray-300">
            <div className="border border-[#C9A24D]/20 p-6 rounded-lg">Corporate & Commercial Law</div>
            <div className="border border-[#C9A24D]/20 p-6 rounded-lg">Civil Litigation</div>
            <div className="border border-[#C9A24D]/20 p-6 rounded-lg">Criminal Defense & Bail Procedures</div>
            <div className="border border-[#C9A24D]/20 p-6 rounded-lg">Family & Divorce Law</div>
            <div className="border border-[#C9A24D]/20 p-6 rounded-lg">Property & Real Estate Law</div>
            <div className="border border-[#C9A24D]/20 p-6 rounded-lg">Employment & Labour Law</div>
            <div className="border border-[#C9A24D]/20 p-6 rounded-lg md:col-span-3">
              Regulatory Compliance & Advisory
            </div>
          </div>

          <p className="text-gray-400 mt-10">
            Each article is written to provide clarity, risk awareness, and preventive legal guidance under applicable Indian law.
          </p>

        </div>
      </section>

      {/* ================= FEATURED ARTICLE ================= */}
      <section className="bg-[#0B0B0B] text-white py-24 px-6 border-t border-[#C9A24D]/20">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-[#C9A24D] mb-10">
            Featured Legal Article
          </h2>

          <div className="border border-[#C9A24D]/30 p-10 rounded-xl">

            <h3 className="text-2xl font-semibold text-[#C9A24D] mb-4">
              Understanding the Bail Procedure in Bangalore Courts
            </h3>

            <p className="text-[#C9A24D] font-semibold mb-4">
              Short Excerpt:
            </p>

            <p className="text-gray-300 leading-relaxed">
              A structured guide to the bail process, required documentation, anticipatory bail provisions, 
              court timelines, and strategic considerations under criminal law in Bangalore.
            </p>

            <a
              href="#"
              className="inline-block mt-8 border border-[#C9A24D] text-[#C9A24D] px-8 py-3 rounded-md hover:bg-[#C9A24D] hover:text-black transition duration-300"
            >
              Read More
            </a>

          </div>
        </div>
      </section>

      {/* ================= BANGALORE LEGAL UPDATES ================= */}
      <section className="bg-black text-white py-24 px-6 border-t border-[#C9A24D]/20">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold text-[#C9A24D] mb-8">
            Bangalore Legal Updates & Practical Guidance
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Our Legal Blog Bangalore serves as a knowledge resource for individuals, corporate clients, 
            and NRIs seeking dependable Legal Advice in Bangalore.
          </p>

          <p className="text-gray-400 mt-6 leading-relaxed">
            Whether you are facing a dispute, planning a business transaction, reviewing compliance obligations, 
            or evaluating litigation strategy, staying informed allows you to minimize legal risks and make confident decisions.
          </p>

          <p className="text-gray-400 mt-6">
            We clearly explain legal risks, possible outcomes, and preventive measures in relevant subject areas to enhance legal awareness.
          </p>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-black text-white py-28 px-6 text-center border-t border-[#C9A24D]/20">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-bold text-[#C9A24D] mb-6">
            Consult experienced advocates for clear, strategic, and confidential legal guidance tailored to your situation.
          </h2>

          <p className="text-gray-300 mb-6">
            Confidential consultations. Strategic legal advice. Practical solutions.
          </p>

          <p className="text-gray-400 mb-10">
            All matters handled with complete confidentiality and legal discretion.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="/legal-consultation-in-bangalore/"
              className="bg-[#C9A24D] text-black px-10 py-4 rounded-md font-semibold hover:scale-105 transition duration-300"
            >
              Book Confidential Consultation
            </a>

            <a
              href="tel:+91XXXXXXXXXX"
              className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 rounded-md font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300"
            >
              Request Call Back
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}