// import Link from "next/link";
// import Image from "next/image";

// export default function EmploymentLawyerPage() {
//   return (
//     <div className="pt-32 bg-white">

//       {/* ================= HERO SECTION ================= */}

//       <section className="relative bg-black text-white py-20 px-6">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//           <div>
//             <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
//               Experienced Employment Lawyer in Bangalore for Workplace & Labour Disputes
//             </h1>

//             <p className="text-gray-300 leading-relaxed mb-6">
//               Our firm provides strategic representation as an Employment Lawyer in Bangalore,
//               assisting employers and employees in resolving workplace disputes and ensuring
//               regulatory compliance.
//             </p>

//             <p className="text-gray-300 leading-relaxed mb-6">
//               We focus on protecting employee rights while safeguarding business interests
//               through preventive compliance and strong dispute resolution strategy.
//             </p>

//             <p className="text-[#C9A24D] font-medium mb-8">
//               Response within 24 hours guaranteed.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               <Link
//                 href="/legal-consultation-in-bangalore"
//                 className="bg-[#C9A24D] text-black px-6 py-3 font-semibold hover:bg-[#b8963e] transition"
//               >
//                 Book Confidential Consultation
//               </Link>

//               <a
//                 href="tel:+919000000000"
//                 className="border border-[#C9A24D] px-6 py-3 hover:bg-[#C9A24D] hover:text-black transition"
//               >
//                 Call Now
//               </a>
//             </div>
//           </div>

//           <div>
//             <Image
//               src="/employment-law.jpg"
//               alt="Employment Lawyer in Bangalore"
//               width={600}
//               height={500}
//               className="rounded-lg shadow-xl"
//             />
//           </div>

//         </div>
//       </section>


//       {/* ================= SERVICES SECTION ================= */}

//       <section className="py-20 px-6">
//         <div className="max-w-6xl mx-auto">

//           <h2 className="text-3xl font-semibold mb-10 text-center">
//             Comprehensive Employment & Labour Law Services
//           </h2>

//           <div className="grid md:grid-cols-2 gap-8 text-gray-700">

//             {[
//               "Employment Contract Drafting & HR Policy Advisory",
//               "Wrongful Termination & Disciplinary Proceedings",
//               "Labour Court & Industrial Tribunal Representation",
//               "Workplace Harassment & POSH Compliance",
//               "Wage, Bonus & Salary Disputes",
//               "Retrenchment & Layoff Advisory",
//               "Employee Grievance & Settlement Negotiation",
//               "Labour Law Compliance & Risk Assessment",
//             ].map((service, i) => (
//               <div key={i} className="border p-6 rounded-md hover:shadow-lg transition">
//                 {service}
//               </div>
//             ))}

//           </div>

//         </div>
//       </section>


//       {/* ================= REPRESENTATION SECTION ================= */}

//       <section className="bg-gray-50 py-20 px-6">
//         <div className="max-w-6xl mx-auto space-y-10">

//           <div>
//             <h3 className="text-2xl font-semibold mb-4">
//               Labour Court & Industrial Representation
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               As a trusted Labour Court Lawyer in Bangalore, we represent clients
//               in employment disputes involving termination, unpaid wages, service
//               conditions, and industrial conflicts.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold mb-4">
//               Wrongful Termination & Employee Rights Protection
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               If you are facing unlawful dismissal, we help challenge illegal termination
//               and pursue appropriate remedies under applicable labour laws.
//             </p>
//           </div>

//           <div>
//             <h3 className="text-2xl font-semibold mb-4">
//               HR Compliance & Corporate Advisory
//             </h3>
//             <p className="text-gray-700 leading-relaxed">
//               We assist companies in drafting compliant employment agreements,
//               conducting legal audits, and ensuring adherence to statutory labour regulations.
//             </p>
//           </div>

//         </div>
//       </section>


//       {/* ================= FAQ SECTION ================= */}

//       <section className="py-20 px-6">
//         <div className="max-w-4xl mx-auto">

//           <h2 className="text-3xl font-semibold mb-10 text-center">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-6">

//             {[
//               {
//                 q: "What types of employment disputes do you handle?",
//                 a: "We handle wrongful termination, wage disputes, workplace harassment, disciplinary proceedings, and labour court litigation matters.",
//               },
//               {
//                 q: "Can an employee challenge unlawful termination?",
//                 a: "Yes, employees can challenge illegal dismissal before labour authorities.",
//               },
//               {
//                 q: "Do you represent clients in labour court proceedings?",
//                 a: "Yes, we represent both employers and employees in industrial disputes.",
//               },
//               {
//                 q: "Do companies need HR compliance advisory?",
//                 a: "Yes, structured compliance reduces penalties and litigation risks.",
//               },
//             ].map((item, i) => (
//               <div key={i} className="border p-6 rounded-md">
//                 <h4 className="font-semibold mb-2">{item.q}</h4>
//                 <p className="text-gray-600">{item.a}</p>
//               </div>
//             ))}

//           </div>

//         </div>
//       </section>


//       {/* ================= FINAL CTA ================= */}

//       <section className="bg-black text-white py-16 text-center px-6">
//         <h2 className="text-3xl font-semibold mb-6">
//           Get Trusted Legal Help for Employment & Labour Matters
//         </h2>

//         <div className="flex justify-center gap-6 flex-wrap">

//           <Link
//             href="/legal-consultation-in-bangalore"
//             className="bg-[#C9A24D] text-black px-8 py-3 font-semibold hover:bg-[#b8963e] transition"
//           >
//             Book Confidential Consultation
//           </Link>

//           <Link
//             href="/contact"
//             className="border border-[#C9A24D] px-8 py-3 hover:bg-[#C9A24D] hover:text-black transition"
//           >
//             Request Call Back
//           </Link>

//         </div>

//         <p className="mt-6 text-gray-400 text-sm">
//           All matters handled with strict confidentiality and professional discretion.
//         </p>
//       </section>

//     </div>
//   );
// }

"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


// /* ================= SEO META ================= */

// export const metadata = {
//   title: "Employment Lawyer in Bangalore | S Jain & Attorneys",
//   description:
//     "Experienced Employment Lawyer in Bangalore handling workplace disputes, labour court cases, wrongful termination, and HR compliance advisory services.",
//   alternates: {
//     canonical: "https://yourdomain.com/employment-lawyer-in-bangalore",
//   },
// };

export default function EmploymentLawyerPage() {
  const [openIndex, setOpenIndex] = useState(null);

const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
};
  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* ================= HERO SECTION ================= */}

        <section className="relative bg-[#0B0F14] pt-32 pb-28 text-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                Experienced Employment Lawyer in Bangalore for Workplace & Labour Disputes
              </h1>

              <p className="text-gray-300 leading-relaxed mb-6">
                Our firm provides strategic representation as an Employment Lawyer in Bangalore,
                assisting employers and employees in resolving workplace disputes and ensuring
                regulatory compliance. As an experienced Labour Lawyer in Bangalore, we handle
                complex service matters, disciplinary proceedings, and industrial disputes
                with structured legal solutions.
              </p>

              <p className="text-gray-300 leading-relaxed mb-6">
                We focus on protecting employee rights while safeguarding business interests
                through preventive compliance and strong dispute resolution strategy.
              </p>

              <p className="text-[#C9A24D] font-medium mb-8">
                Response within 24 hours guaranteed.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/legal-consultation-in-bangalore"
                  className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition inline-block"
                >
                  Book Confidential Consultation
                </Link>

                <a
                  href="tel:+919000000000"
                  className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative w-full h-[420px] md:h-[500px]">
              <Image
                src="/employment.jpg"
                alt="Employment Lawyer in Bangalore"
                fill
                className="object-cover rounded-xl shadow-2xl"
                priority
              />
            </div>

          </div>
        </section>

        {/* ================= SERVICES SECTION ================= */}

        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">

            <h2 className="text-4xl font-semibold mb-6 text-center">
              Comprehensive Employment & Labour Law Services
            </h2>

            <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
              Workplace disputes require timely intervention and strong legal strategy.
              Our team represents clients before labour authorities and industrial tribunals
              while providing preventive compliance advisory for businesses.
            </p>

            <h3 className="text-2xl font-semibold mb-8 text-center">
              OUR EMPLOYMENT & LABOUR LAW SERVICES INCLUDE
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-gray-700">

              {[
                "Employment Contract Drafting & HR Policy Advisory",
                "Wrongful Termination & Disciplinary Proceedings",
                "Labour Court & Industrial Tribunal Representation",
                "Workplace Harassment & POSH Compliance",
                "Wage, Bonus & Salary Disputes",
                "Retrenchment & Layoff Advisory",
                "Employee Grievance & Settlement Negotiation",
                "Labour Law Compliance & Risk Assessment",
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
                >
                  ▪ {service}
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= DETAIL SECTIONS ================= */}

        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-6xl mx-auto space-y-12 text-gray-700">

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Labour Court & Industrial Representation
              </h3>
              <p>
                As a trusted Labour Court Lawyer in Bangalore, we represent clients
                in employment disputes involving termination, unpaid wages, service
                conditions, and industrial conflicts. Our structured approach ensures
                strong documentation and effective advocacy before labour courts and tribunals.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Wrongful Termination & Employee Rights Protection
              </h3>
              <p>
                If you are facing unlawful dismissal, our team acts as a Wrongful
                Termination Lawyer in Bangalore, helping challenge illegal termination
                and pursue appropriate remedies under applicable labour laws.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                HR Compliance & Corporate Advisory
              </h3>
              <p>
                As an experienced HR Compliance Lawyer Bangalore businesses rely on,
                we assist companies in drafting compliant employment agreements,
                conducting legal audits, and ensuring adherence to statutory labour
                regulations to minimize litigation risk.
              </p>
            </div>

          </div>
        </section>

        {/* ================= OUR APPROACH ================= */}

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-gray-700 space-y-8">

            <h2 className="text-4xl font-semibold text-center mb-12">
              OUR APPROACH / HOW WE WORK
            </h2>

            <div>
              <strong>Step 1: Case Evaluation & Legal Consultation</strong>
              <p>Understanding employment terms, documentation, and applicable labour regulations.</p>
            </div>

            <div>
              <strong>Step 2: Compliance Review or Dispute Strategy Development</strong>
              <p>
                Designing a structured compliance advisory plan or dispute resolution strategy.
                We clearly explain legal risks, documentation requirements, and potential remedies
                before initiating proceedings.
              </p>
            </div>

            <div>
              <strong>Step 3: Documentation & Legal Action</strong>
              <p>Drafting notices, replies, complaints, and preparing required filings.</p>
            </div>

            <div>
              <strong>Step 4: Labour Court / Tribunal Representation & Resolution</strong>
              <p>
                Strong representation before labour courts, industrial tribunals, and authorities
                to pursue structured resolution.
              </p>
            </div>

          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}

        <section className="bg-gray-50 py-20 px-6">
          <div className="max-w-4xl mx-auto text-gray-700">

            <h2 className="text-4xl font-semibold text-center mb-10">
              WHY CHOOSE OUR EMPLOYMENT LAW TEAM
            </h2>

            <ul className="space-y-4">
              <li>✓ Experienced Employment Lawyer in Bangalore</li>
              <li>✓ Strong labour court litigation expertise</li>
              <li>✓ Strategic compliance-focused advisory</li>
              <li>✓ Practical and business-oriented solutions</li>
              <li>✓ Transparent legal guidance at every stage</li>
            </ul>

          </div>
        </section>

        {/* ================= FAQ ================= */}

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto space-y-6">

            <h2 className="text-4xl font-semibold text-center mb-12">
              Frequently Asked Questions
            </h2>

           {[
  ["What types of employment disputes do you handle?",
    "We handle wrongful termination, wage disputes, workplace harassment, disciplinary proceedings, industrial disputes, and labour court litigation matters."],
  ["Can an employee challenge unlawful termination?",
    "Yes, an employee can challenge illegal dismissal before appropriate labour authorities."],
  ["Do you represent clients in labour court proceedings?",
    "Yes, we represent both employers and employees in industrial and service-related disputes."],
  ["Do companies need HR compliance advisory?",
    "Yes, businesses benefit from structured guidance to avoid penalties and litigation risks."],
  ["What remedies are available in wrongful termination cases?",
    "Remedies may include reinstatement, compensation, back wages, or structured settlement depending on the facts."],
  ["Do you provide ongoing legal retainership services?",
    "Yes, we offer continuous employment law advisory, compliance audits, and dispute management support."],
].map(([q, a], i) => (
  <div
    key={i}
    className="bg-gray-50 rounded-xl shadow transition-all duration-300"
  >
    <button
      onClick={() => toggleFAQ(i)}
      className="w-full text-left p-6 font-semibold flex justify-between items-center"
    >
      {q}
      <span className="text-[#C9A24D] text-xl">
        {openIndex === i ? "−" : "+"}
      </span>
    </button>

    {openIndex === i && (
      <div className="px-6 pb-6 text-gray-700">
        {a}
      </div>
    )}
  </div>
))}

          </div>
        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="bg-[#0B0F14] py-24 text-center text-white px-6">
          <h2 className="text-4xl font-semibold mb-6">
            Get Trusted Legal Help for Employment & Labour Matters
          </h2>

          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Consult our experienced Employment Lawyer in Bangalore today for strategic
            and dependable legal support.
          </p>

          <div className="flex gap-6 justify-center flex-wrap">
            <Link
              href="/legal-consultation-in-bangalore"
              className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition inline-block"
            >
              Book Confidential Consultation
            </Link>

            <Link
              href="/contact"
              className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition inline-block"
            >
              Request Call Back
            </Link>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            All matters handled with strict confidentiality and professional discretion.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}