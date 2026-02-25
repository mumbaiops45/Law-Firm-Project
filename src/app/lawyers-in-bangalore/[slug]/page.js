"use client";

import Image from "next/image";
import { motion } from "framer-motion";
// import Footer from "@/app/components/Footer";
// import Navbar from "@/app/components/Navbar";
import Footer from "../../../app/components/Footer";
import Navbar from "../../../app/components/Navbar";
import Head from "next/head";

export default function Page() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Head>
        <title>Leading Law Firm in Bangalore | S Jain & Attorneys</title>
        <meta
          name="description"
          content="S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters."
        />
      </Head>

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="relative w-full h-[40vh] flex items-center justify-center">
        <Image
          src="/laws2.jpg"
          alt="Leading Law Firm in Bangalore"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-3xl md:text-5xl font-semibold text-[#C9A24D] text-center px-4"
        >
          Leading Law Firm in Bangalore – About S Jain & Attorneys
        </motion.h1>
      </section>

      {/* ================= INTRO ================= */}

      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            A leading law firm in Bangalore providing full-service legal representation 
            across litigation, advisory, and regulatory matters.
          </p>
        </div>
      </section>

      {/* ================= ABOUT OUR FIRM ================= */}

      <section className="py-20 px-6 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-8">
            About Our Firm
          </h2>

          <p className="mb-6 text-gray-700 leading-relaxed">
            S Jain & Attorneys is recognised as a leading law firm in Bangalore, 
            delivering strategic and result-oriented legal representation for individuals, 
            businesses, startups, multinational companies, and NRIs.
          </p>

          <p className="mb-6 text-gray-700 leading-relaxed">
            With a team of experienced attorneys and dedicated legal experts, we provide 
            structured legal counsel and courtroom advocacy that protects your rights, 
            business interests, and long-term objectives.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our firm advises across corporate, civil, criminal, family, regulatory, 
            and cross-border matters. As trusted corporate legal advisors, lawyers, 
            and advocates, we combine legal depth with practical insight to guide 
            clients confidently through complex legal environments.
          </p>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-8">
            Why Choose Our Legal Team
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>✓ Over a decade of legal practice by experienced attorneys in Bangalore</li>
            <li>✓ A trusted group of legal experts committed to ethical advocacy</li>
            <li>✓ Strategic, personalized legal solutions tailored to each matter</li>
            <li>✓ Corporate legal advisory services for business clients</li>
            <li>✓ Lawyers and advocates with courtroom experience across multiple jurisdictions</li>
            <li>✓ Transparent communication and structured case strategy</li>
          </ul>

          <p className="mt-6 font-semibold">Response within 24 hours guaranteed.</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-black text-[#C9A24D] px-6 py-3 border border-[#C9A24D]">
              Book Confidential Consultation
            </button>
            <button className="bg-[#C9A24D] text-black px-6 py-3">
              Request Call Back
            </button>
          </div>

        </div>
      </section>

      {/* ================= FOUNDER ================= */}

      <section className="py-20 px-6 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-8">Our Founder</h2>

          <h3 className="text-xl font-semibold mb-4">
            S Jain – Principal Attorney
          </h3>

          <p className="mb-6 text-gray-700 leading-relaxed">
            S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive 
            legal experience in representing clients before courts, tribunals, 
            and regulatory authorities.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Committed to professionalism and precision, each case is handled with clarity, 
            discretion, and a client-first approach focused on achieving measurable legal outcomes.
          </p>

        </div>
      </section>

      {/* ================= LEGAL EXPERTISE ================= */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-8">Our Legal Expertise</h2>

          <div className="space-y-6 text-gray-700">

            <h3 className="font-semibold">1. Corporate & Commercial Law</h3>
            <p>Corporate advisory, regulatory compliance, contracts, and business strategy.</p>

            <h3 className="font-semibold">2. Civil & Property Litigation</h3>
            <p>Civil disputes, property and real estate matters, and contractual claims.</p>

            <h3 className="font-semibold">3. Criminal Defense & Prosecution</h3>
            <p>Representation before sessions courts, magistrate courts, and appellate forums.</p>

            <h3 className="font-semibold">4. Family & Divorce Law</h3>
            <p>Divorce, matrimonial property, custody, and mediation.</p>

            <h3 className="font-semibold">5. Employment & Labour Law</h3>
            <p>Labour court representation and HR compliance advisory.</p>

            <h3 className="font-semibold">6. Consumer Protection & Appellate Practice</h3>
            <p>Consumer disputes, High Court matters, and complex litigation cases.</p>

            <h3 className="font-semibold">7. Cross-Border & NRI Legal Services</h3>
            <p>NRI property matters and international disputes.</p>

          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section className="py-20 px-6 bg-[#f7f7f7]">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold mb-8">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-6 text-gray-700">

            <div>
              <h3 className="font-semibold">
                Why is S Jain & Attorneys considered a leading law firm in Bangalore?
              </h3>
              <p>The firm is recognised for its strategic legal approach and experienced attorneys across multiple practice areas.</p>
            </div>

            <div>
              <h3 className="font-semibold">
                What areas of law does your firm specialize in?
              </h3>
              <p>Corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.</p>
            </div>

            <div>
              <h3 className="font-semibold">
                Who leads S Jain & Attorneys?
              </h3>
              <p>The firm is led by S Jain, Principal Attorney, with extensive litigation and advisory experience.</p>
            </div>

            <div>
              <h3 className="font-semibold">
                How can I schedule a consultation?
              </h3>
              <p>You can schedule a confidential consultation through our website or contact our office directly.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}

      <section className="py-20 px-6 bg-black text-center text-white">
        <h2 className="text-3xl font-semibold mb-6">
          Get Trusted Legal Guidance Today
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-[#C9A24D] text-black px-6 py-3">
            Book Confidential Consultation
          </button>
          <button className="border border-[#C9A24D] px-6 py-3 text-[#C9A24D]">
            Request Call Back
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          All matters handled with complete confidentiality and legal discretion.
        </p>
      </section>

      <Footer />
    </>
  );
}