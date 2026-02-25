import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* ================= SEO META ================= */

export const metadata = {
  title: "Leading Law Firm in Bangalore | S Jain & Attorneys",
  description:
    "S Jain & Attorneys is a leading law firm in Bangalore providing full-service legal representation across corporate, civil, criminal, regulatory and NRI matters.",
  alternates: {
    canonical: "https://yourdomain.com/leading-law-firm-in-bangalore",
  },
};

export default function LeadingLawFirmPage() {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-br from-black via-[#111] to-black text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#C9A24D,_transparent_40%)]"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight">
            Leading Law Firm in Bangalore – About S Jain & Attorneys
          </h1>

          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            A leading law firm in Bangalore providing full-service legal
            representation across litigation, advisory, and regulatory matters.
          </p>
        </div>
      </section>

      {/* ================= ABOUT OUR FIRM ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-8 text-black">
            About Our Firm
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            S Jain & Attorneys is recognised as a leading law firm in Bangalore,
            delivering strategic and result-oriented legal representation for
            individuals, businesses, startups, multinational companies, and NRIs.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            With a team of experienced attorneys and dedicated legal experts,
            we provide structured legal counsel and courtroom advocacy that
            protects your rights, business interests, and long-term objectives.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our firm advises across corporate, civil, criminal, family,
            regulatory, and cross-border matters. As trusted corporate legal
            advisors, lawyers, and advocates, we combine legal depth with
            practical insight to guide clients confidently through complex legal
            environments.
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-gray-50 py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-12 text-black">
            Why Choose Our Legal Team
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg">
            <li>✓ Over a decade of legal practice by experienced attorneys in Bangalore</li>
            <li>✓ A trusted group of legal experts committed to ethical advocacy</li>
            <li>✓ Strategic, personalized legal solutions tailored to each matter</li>
            <li>✓ Corporate legal advisory services for business clients</li>
            <li>✓ Lawyers and advocates with courtroom experience across multiple jurisdictions</li>
            <li>✓ Transparent communication and structured case strategy</li>
          </ul>

          <p className="text-[#C9A24D] font-semibold mt-10 text-lg">
            Response within 24 hours guaranteed.
          </p>

          <div className="flex flex-wrap gap-6 mt-10">
            <Link
              href="/legal-consultation-in-bangalore"
              className="bg-[#C9A24D] text-black px-10 py-4 font-semibold hover:scale-105 transition rounded-md shadow-lg"
            >
              Book Confidential Consultation
            </Link>

            <Link
              href="/contact"
              className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition rounded-md"
            >
              Request Call Back
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif mb-8 text-black">
            Our Founder
          </h2>

          <h3 className="text-2xl text-[#C9A24D] font-semibold mb-6">
            S Jain – Principal Attorney
          </h3>

          <p className="text-gray-700 leading-relaxed">
            S Jain, the Principal Attorney of S Jain & Attorneys, brings extensive
            legal experience in representing clients before courts, tribunals,
            and regulatory authorities. As a respected advocate and legal strategist,
            S Jain blends practical understanding with deep legal insight to deliver
            structured, results-oriented counsel across litigation and advisory matters.
            Committed to professionalism and precision, each case is handled with clarity,
            discretion, and a client-first approach focused on achieving measurable legal outcomes.
          </p>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="bg-gray-50 py-28 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-4xl font-serif text-black">
            Our Core Values & Approach
          </h2>

          <div>
            <h3 className="text-[#C9A24D] font-semibold text-xl">Integrity</h3>
            <p className="text-gray-700 mt-2">
              We uphold honesty, discretion, and transparency in every legal engagement.
            </p>
          </div>

          <div>
            <h3 className="text-[#C9A24D] font-semibold text-xl">Client-Centric Advocacy</h3>
            <p className="text-gray-700 mt-2">
              Clear communication and personalized legal strategy remain central to our practice.
            </p>
          </div>

          <div>
            <h3 className="text-[#C9A24D] font-semibold text-xl">Commitment to Excellence</h3>
            <p className="text-gray-700 mt-2">
              Delivering premium legal services led by experienced attorneys.
            </p>
          </div>

          <div>
            <h3 className="text-[#C9A24D] font-semibold text-xl">Strategic Legal Expertise</h3>
            <p className="text-gray-700 mt-2">
              Practical, business-oriented, and results-driven legal counsel.
            </p>
          </div>

          <div>
            <h3 className="text-[#C9A24D] font-semibold text-xl">Our Approach</h3>
            <p className="text-gray-700 mt-2">
              We provide understandable, structured legal guidance at every stage —
              prioritizing your objectives, protecting your rights, and securing long-term outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEGAL EXPERTISE ================= */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl font-serif text-black">
            Our Legal Expertise
          </h2>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-semibold">1. Corporate & Commercial Law</h3>
              <p>Corporate advisory, regulatory compliance, contracts, and business strategy.</p>
            </div>

            <div>
              <h3 className="font-semibold">2. Civil & Property Litigation</h3>
              <p>Civil disputes, property and real estate matters, and contractual claims.</p>
            </div>

            <div>
              <h3 className="font-semibold">3. Criminal Defense & Prosecution</h3>
              <p>Representation before sessions courts, magistrate courts, and appellate forums.</p>
            </div>

            <div>
              <h3 className="font-semibold">4. Family & Divorce Law</h3>
              <p>Divorce, matrimonial property and financial settlements, custody, and mediation.</p>
            </div>

            <div>
              <h3 className="font-semibold">5. Employment & Labour Law</h3>
              <p>Labour court representation, wrongful termination, and HR compliance advisory.</p>
            </div>

            <div>
              <h3 className="font-semibold">6. Consumer Protection & Appellate Practice</h3>
              <p>Consumer disputes, High Court matters, and complex litigation cases.</p>
            </div>

            <div>
              <h3 className="font-semibold">7. Cross-Border & NRI Legal Services</h3>
              <p>NRI property matters, international disputes, and private international law advisory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="bg-gray-50 py-28 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-4xl font-serif text-black">
            Frequently Asked Questions (FAQs)
          </h2>

          <div>
            <p className="font-semibold">1. Why is S Jain & Attorneys considered a leading law firm in Bangalore?</p>
            <p className="text-gray-700">The firm is recognised for its strategic legal approach, experienced attorneys, and commitment to delivering personalised, results-oriented legal representation across multiple practice areas.</p>
          </div>

          <div>
            <p className="font-semibold">2. What areas of law does your firm specialize in?</p>
            <p className="text-gray-700">We provide representation and advisory services in corporate law, civil litigation, criminal law, family law, employment law, property disputes, regulatory compliance, and cross-border matters.</p>
          </div>

          <div>
            <p className="font-semibold">3. Who leads S Jain & Attorneys?</p>
            <p className="text-gray-700">The firm is led by S Jain, Principal Attorney, who brings extensive experience in litigation, legal advisory, and strategic representation before courts and tribunals.</p>
          </div>

          <div>
            <p className="font-semibold">4. What makes your legal team different?</p>
            <p className="text-gray-700">We combine legal expertise with practical insight, focusing on transparency, tailored strategies, and long-term client protection.</p>
          </div>

          <div>
            <p className="font-semibold">5. How can I schedule a consultation?</p>
            <p className="text-gray-700">You can schedule a confidential consultation through our website or contact our office directly for structured legal guidance.</p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-black text-white py-28 px-6 text-center">
        <h2 className="text-4xl font-serif mb-10">
          Get Trusted Legal Guidance Today
        </h2>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="/legal-consultation-in-bangalore"
            className="bg-[#C9A24D] text-black px-10 py-4 font-semibold hover:scale-105 transition rounded-md shadow-lg"
          >
            Book Confidential Consultation
          </Link>

          <Link
            href="/contact"
            className="border border-[#C9A24D] text-[#C9A24D] px-10 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition rounded-md"
          >
            Request Call Back
          </Link>
        </div>

        <p className="text-gray-400 text-sm mt-8">
          All matters handled with complete confidentiality and legal discretion.
        </p>
      </section>

      <Footer />
    </>
  );
}