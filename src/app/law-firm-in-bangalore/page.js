
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";
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
export default function page() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (

    <>
    <section
      className="
      relative
      w-full
      min-h-screen
      flex
      items-start
      overflow-hidden
      bg-gradient-to-br
      from-black
      via-black
      to-[#C9A24D]/20
      pt-[140px]
      pb-[110px]
      "
    >

      {/* GOLD GLOW */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A24D]/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >

            {/* BADGE */}
            <div className="
              inline-flex
              items-center
              gap-2
              border border-[#C9A24D]/40
              text-[#C9A24D]
              px-4 py-2
              rounded-full
              text-sm
              mb-6
              bg-[#C9A24D]/5
            ">
              <ShieldCheck size={16} />
              Advocates & Legal Consultants
            </div>

            {/* SEO H1 */}
            <h1 className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              text-white
              leading-tight
              mb-6
            ">
              Leading Law Firm in{" "}
              <span className="text-[#C9A24D]">Bangalore</span>{" "}
              for Corporate, Civil, Criminal & Property Legal Services
            </h1>

            {/* SUBTEXT */}
            <p className="
              text-gray-300
              text-lg
              max-w-xl
              leading-relaxed
              mb-8
            ">
              
              S Jain & Attorneys is a reputed law firm in Bangalore delivering expert legal representation in corporate law, civil litigation, criminal defense, property disputes, and NRI legal services. Our experienced attorneys and advocates provide strategic, result-oriented legal solutions for individuals, businesses, startups, and NRIs across India. We combine integrity, experience, and practical legal insight to protect your rights and advance your interests.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mb-4">

              {/* Book Confidential Consultation */}
              <Link href="/legal-consultation-in-bangalore">
                <button className="
                  whitespace-nowrap
                  bg-gradient-to-r
                  from-[#C9A24D]
                  to-[#E6C676]
                  text-black
                  px-7 py-3
                  font-semibold
                  rounded-md
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(201,162,77,0.5)]
                  transition
                ">
                  Book Confidential Consultation
                </button>
              </Link>

              {/* View Practice Areas */}
              <Link href="#practice-areas">
                <button className="
                  whitespace-nowrap
                  border border-[#C9A24D]
                  text-[#C9A24D]
                  px-7 py-3
                  font-semibold
                  rounded-md
                  hover:bg-gradient-to-r
                  hover:from-[#C9A24D]
                  hover:to-[#E6C676]
                  hover:text-black
                  transition
                ">
                  View Practice Areas
                </button>
              </Link>

              {/* Call Now */}
              <a
                href="tel:+919000000000"
                className="
                  flex-shrink-0
                  flex
                  items-center
                  justify-center
                  w-12 h-12
                  rounded-full
                  border border-[#C9A24D]
                  hover:bg-gradient-to-r
                  hover:from-[#C9A24D]
                  hover:to-[#E6C676]
                  transition
                "
              >
                <Phone size={20} className="text-white hover:text-black" />
              </a>

            </div>

            {/* RESPONSE ASSURANCE */}
            <p className="text-gray-400 text-sm mb-8">
              Response within 24 hours guaranteed.
            </p>

            {/* TRUST INDICATORS */}
            <div className="flex flex-wrap gap-8 text-gray-400 border-t border-gray-800 pt-6">

              <div className="flex items-center gap-2">
                <Award size={18} className="text-[#C9A24D]" />
                15+ Years Experience
              </div>

              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-[#C9A24D]" />
                1000+ Cases Successfully Handled
              </div>

              <div className="flex items-center gap-2">
                <Scale size={18} className="text-[#C9A24D]" />
                Karnataka High Court & District Courts
              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >

            <div className="relative w-full max-w-lg">

              {/* IMAGE GLOW */}
              <div className="absolute -inset-2 bg-[#C9A24D]/20 blur-2xl rounded-xl"></div>

              {/* IMAGE */}
              <Image
                src="/closeupjustice.jpg"
                alt="Law Firm in Bangalore - S Jain & Attorneys"
                width={550}
                height={650}
                priority
                className="
                  relative
                  rounded-xl
                  border border-[#C9A24D]/40
                  object-cover
                  w-full
                "
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
    <AboutFirm/>
    <ServiceOverview/>
    <PracticeAreas/>
    <WhyChooseUs/>
    <LegalServicesSections/>
    <Testimonials/>
    <CTASection/>
    <FAQsSection/>
    <Consultation/>
    <Footer/>

    </>
  );
}

