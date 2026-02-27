
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function CTASection() {

  /* ANIMATION */
  const container = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (

    <section className="relative bg-black text-white py-20 px-6 overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[-120px] w-[500px] h-[500px] bg-[#C9A24D]/10 blur-[140px] rounded-full" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center"
      >

        {/* HEADLINE */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Get Immediate Legal Help from Experienced Advocates
        </h2>


        {/* SUBTEXT */}
        <p className="text-gray-400 text-lg mb-4">
          Confidential legal consultation for corporate, civil, family, criminal, and property matters.
        </p>


        {/* RESPONSE LINE */}
        <p className="text-[#C9A24D] text-sm mb-10 font-medium">
          Response within 24 hours guaranteed.
        </p>


        {/* CTA BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">


          {/* CALL NOW ICON BUTTON */}
          {/* <a
            href="tel:+919000000000"
            className="flex items-center gap-3 border border-gray-700 px-6 py-3 rounded-md hover:border-[#C9A24D] hover:text-[#C9A24D] transition duration-300"
          >
            <FaPhoneAlt />
            Call Now
          </a> */}


          {/* REQUEST CALLBACK */}
          <Link href="/legal-consultation-in-bangalore">
            <button className="border border-[#C9A24D] text-[#C9A24D] px-7 py-3 font-semibold rounded-md hover:bg-[#C9A24D] hover:text-black transition duration-300">
              Request Callback
            </button>
          </Link>


          {/* BOOK CONSULTATION */}
          <Link href="/legal-consultation-in-bangalore">
            <button className="bg-[#C9A24D] text-black px-7 py-3 font-semibold rounded-md hover:scale-105 transition duration-300 shadow-lg">
              Book Confidential Consultation
            </button>
          </Link>


        </div>


        {/* TRUST LINE */}
        <p className="text-gray-500 text-sm mt-8">
          All matters handled with complete confidentiality and legal discretion.
        </p>


      </motion.div>

    </section>

  );

}