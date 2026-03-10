// export const metadata = {
//   title: "Criminal Lawyer in Bangalore | S Jain & Attorneys",
//   description:
//     "Experienced criminal lawyer in Bangalore providing strategic defense and prosecution services including bail, trials, appeals, and strong courtroom representation.",
//   keywords: [
//     "Criminal Lawyer in Bangalore",
//     "Bail Lawyer Bangalore",
//     "Criminal Defense Lawyer Bangalore",
//     "Criminal Trial Advocate Bangalore",
//   ],
//   alternates: {
//     canonical: "/criminal-lawyer-in-bangalore",
//   },
// };

// export default function CriminalLawLayout({ children }) {
//   return children;
// }

// export const metadata = {
//   title: "Criminal Lawyer in Bangalore | S Jain & Attorneys",
//   description:
//     "Experienced criminal lawyer in Bangalore providing strategic defense and prosecution services including bail, trials, appeals, and strong courtroom representation.",
//   keywords: [
//     "Criminal Lawyer in Bangalore",
//     "Bail Lawyer Bangalore",
//     "Criminal Defense Lawyer Bangalore",
//     "Criminal Trial Advocate Bangalore",
//     "Anticipatory Bail Lawyer Bangalore",
//     "FIR Quashing Lawyer Bangalore",
//     "White Collar Crime Lawyer Bangalore",
//   ],
//   alternates: {
//     canonical: "https://yourdomain.com/criminal-lawyer-in-bangalore",
//   },
//   openGraph: {
//     title: "Criminal Lawyer in Bangalore | S Jain & Attorneys",
//     description:
//       "Experienced criminal lawyer in Bangalore providing strategic defense and prosecution services including bail, trials, appeals, and strong courtroom representation.",
//     url: "https://yourdomain.com/criminal-lawyer-in-bangalore",
//     siteName: "S Jain & Attorneys",
//     locale: "en_IN",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Criminal Lawyer in Bangalore | S Jain & Attorneys",
//     description:
//       "Experienced criminal lawyer in Bangalore providing strategic defense and prosecution services including bail, trials, appeals, and strong courtroom representation.",
//   },
//   robots: { index: true, follow: true },
// };

// export default function CriminalLawLayout({ children }) {
//   return children;
// }


"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CriminalLaw() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqData = [
    {
      question: "How soon should I contact a criminal lawyer?",
      answer: "Immediately after receiving notice, FIR, arrest, or police inquiry to protect your legal rights."
    },
    {
      question: "Can you help with bail matters?",
      answer: "Yes, we handle regular bail, anticipatory bail, and urgent bail applications before appropriate courts."
    },
    {
      question: "Do you handle both defense and prosecution cases?",
      answer: "Yes, we provide Criminal Defense & Prosecution services depending on the case requirements."
    },
    {
      question: "What documents should I bring for consultation?",
      answer: "FIR copy, notice, charge sheet, arrest memo, and any relevant communication or supporting evidence."
    },
    {
      question: "Can a criminal case be settled or withdrawn?",
      answer: "Some cases may be compoundable or resolved legally depending on the nature of the offence."
    },
    {
      question: "What happens after an FIR is filed?",
      answer: "Police investigation begins, followed by charge sheet filing and court proceedings if evidence supports prosecution."
    }
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* HERO */}

        <section className="relative bg-[#0B0F14] pt-8 md:pt-8 pb-32 md:pb-48 text-center">

          <div className="max-w-6xl mx-auto px-6">

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl md:text-6xl font-semibold text-white mb-6 leading-tight"
            >
              Criminal Defense & Prosecution Lawyers in Bangalore for Bail, Trial & Appeals
            </motion.h1>

            <p className="text-gray-400 text-base md:text-lg max-w-4xl mx-auto">
              Our firm provides strong and strategic representation as a
              <strong> Criminal Lawyer in Bangalore</strong>, handling serious allegations with precision and confidentiality.
              Our experienced attorneys manage Criminal Defense & Prosecution matters with a results-driven approach.
            </p>

            <p className="text-gray-400 text-base md:text-lg max-w-4xl mx-auto mt-4">
              Our goal is to protect your legal rights, minimize risk exposure, and build a strong defense strategy from the earliest stage of proceedings.
            </p>

            <p className="text-[#C9A24D] font-semibold mt-6">
              Response within 24 hours guaranteed.
            </p>

            <div className="flex justify-center gap-4 md:gap-6 mt-10 flex-wrap">

              <Link
href="/legal-consultation-in-bangalore"
className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition text-center"
>
Book Confidential Consultation
</Link>

<a
href="tel:+919000000000"
className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition text-center"
>
Call Now
</a>

            </div>

          </div>

          {/* HERO IMAGE */}

          <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6">

            <div className="rounded-xl overflow-hidden shadow-2xl mt-20 md:mt-52">

              <Image
                src="/criminal-law.png"
                alt="Criminal Lawyer in Bangalore"
                width={1400}
                height={800}
                className="w-full h-[260px] md:h-[450px] object-cover"
              />

            </div>

          </div>

        </section>

        <div className="h-24 md:h-40"></div>

        {/* CONTENT */}

        <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 mt-32">
            Strategic Criminal Defense & Prosecution Support
          </h2>

          <p className="text-gray-700 text-base md:text-lg mb-10">
            Criminal cases demand immediate legal action and careful planning. Our team represents clients in complex criminal matters, ensuring their rights are protected at every stage.
            With extensive courtroom experience, our attorneys handle investigations, bail proceedings, trials, and appeals with structured legal strategy and clear communication.
          </p>

          {/* SERVICES */}

          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            OUR CRIMINAL LAW SERVICES INCLUDE
          </h3>

          <ul className="grid md:grid-cols-2 gap-5 text-base md:text-lg text-gray-700 mb-16">

            <li>▪ Bail Applications (Regular & Anticipatory)</li>
            <li>▪ FIR registration, quashing, and complaint defense</li>
            <li>▪ Sessions court and magistrate court trials</li>
            <li>▪ White Collar Crimes</li>
            <li>▪ Cyber Crime Cases</li>
            <li>▪ Domestic Violence & Assault Cases</li>
            <li>▪ Criminal appeals and revision petitions</li>

          </ul>

          {/* APPROACH */}

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h2>

          <div className="space-y-4 text-base md:text-lg text-gray-700 mb-16">

            <p><strong>Step 1:</strong> Case Assessment & Legal Consultation — Detailed review of allegations and available evidence.</p>

            <p><strong>Step 2:</strong> Evidence Review & Defense Strategy — Developing a strong defense or prosecution strategy. We clearly explain legal risks, possible outcomes, and defense options before proceeding.</p>

            <p><strong>Step 3:</strong> Filing & Court Proceedings — Handling petitions, documentation, and hearings.</p>

            <p><strong>Step 4:</strong> Trial Representation & Resolution — Effective representation before courts to achieve fair outcomes.</p>

          </div>

          {/* WHY CHOOSE */}

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </h2>

          <ul className="space-y-4 text-base md:text-lg text-gray-700 mb-16">

            <li>✓ Experienced Criminal Law Attorneys</li>
            <li>✓ Strong courtroom advocacy</li>
            <li>✓ Confidential and strategic case handling</li>
            <li>✓ Transparent legal guidance throughout the process</li>

          </ul>

          {/* FAQ */}

          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-4xl mx-auto space-y-4">

            {faqData.map((faq, index) => (

              <div key={index} className="border border-[#C9A24D] rounded-lg overflow-hidden">

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-base md:text-lg bg-white hover:bg-[#C9A24D]/10 transition"
                >
                  {faq.question}

                  <span className="text-[#C9A24D] text-xl font-bold">
                    {openFAQ === index ? "−" : "+"}
                  </span>

                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6 text-gray-700 border-t border-[#C9A24D]/40 pt-4">
                    {faq.answer}
                  </div>
                )}

              </div>

            ))}

          </div>

        </section>

        {/* CTA */}

        <section className="relative py-20 md:py-28 overflow-hidden">

          <div className="absolute inset-0">
            <Image src="/discussion.png" alt="Consultation" fill className="object-cover"/>
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">

            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">
              Get expert criminal defense guidance from a leading Lawyer in Bangalore
            </h2>

            <Link href="/legal-consultation-in-bangalore">
              <button className="bg-[#C9A24D] text-black px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:scale-105 transition">
                Request Call Back
              </button>
            </Link>

            <p className="text-gray-400 text-sm mt-8">
              All matters handled with complete confidentiality and legal discretion.
            </p>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}