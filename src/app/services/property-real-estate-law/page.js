"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export default function PropertyRealEstateLawPage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeImage = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2
      }
    }
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };


  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">

        {/* ================= HERO ================= */}

        <section className="relative bg-[#0B0F14] pt-32 pb-40">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center"
          >

            <motion.p
              variants={fadeUp}
              className="text-gray-400 text-sm mb-6"
            >
              Home <span className="mx-2">›</span>
              <span className="text-[#C9A24D]">
                Property & Real Estate Law
              </span>
            </motion.p>


            <motion.h1
              variants={fadeUp}
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-semibold
                text-white
                mb-6
              "
            >
              Property & Real Estate Law
            </motion.h1>


            <motion.p
              variants={fadeUp}
              className="
                text-gray-400
                text-base sm:text-lg md:text-xl
                max-w-3xl mx-auto
                leading-relaxed
              "
            >
              Professional legal assistance for property disputes, real estate
              transactions, ownership issues, and protection of your property rights.
            </motion.p>

          </motion.div>



          {/* FLOATING IMAGE */}

          <motion.div
            variants={fadeImage}
            initial="hidden"
            animate="visible"
            className="
              absolute
              left-1/2
              -translate-x-1/2
              translate-y-1/2
              bottom-0
              w-full
              max-w-6xl
              px-6
              z-20
            "
          >

            <div className="rounded-xl overflow-hidden shadow-2xl bg-white mt-99">

              <Image
                src="/property.png"
                alt="Property Real Estate Law"
                width={1400}
                height={800}
                className="w-full h-[450px] md:h-[550px] object-cover"
                priority
              />

              

            </div>

          </motion.div>

        </section>



        {/* SPACING */}

        <div className="h-64 md:h-80"></div>



        {/* ================= OVERVIEW ================= */}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >

          <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-34">


            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-semibold text-black mb-6"
            >
              Overview
            </motion.h2>


            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
            >
              Property and real estate law involves legal matters related to property
              ownership, transactions, disputes, and legal documentation. Our experienced
              lawyers provide professional guidance to ensure secure and legally compliant
              property dealings.
            </motion.p>



            {/* SERVICES */}

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-black mb-6"
            >
              Our Property Law Services
            </motion.h3>


            <motion.ul
              variants={fadeUp}
              className="list-disc pl-6 space-y-6 text-gray-700 mb-16"
            >

              <li>Property Dispute Resolution</li>
              <li>Title Verification and Legal Due Diligence</li>
              <li>Sale Deed and Agreement Drafting</li>
              <li>Property Registration Support</li>
              <li>Real Estate Transaction Legal Support</li>
              <li>Ownership and Possession Disputes</li>

            </motion.ul>



            {/* IMAGE */}

            <motion.div variants={fadeUp} className="mb-16">

              <Image
                src="/property1.png"
                alt="Property Consultation"
                width={1200}
                height={600}
                className="w-full rounded-xl shadow-lg"
              />

            </motion.div>



            {/* WHY CHOOSE */}

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-black mb-6"
            >
              Why Choose Our Property Lawyers
            </motion.h3>


            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              We provide reliable, professional, and strategic legal support to protect
              your property rights and ensure safe real estate transactions with complete
              legal compliance.
            </motion.p>

          </div>

        </motion.section>



        {/* ================= CTA ================= */}

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative py-28 mt-20 overflow-hidden"
        >

          <div className="absolute inset-0">

            <Image
              src="/discussion.png"
              alt="Property Consultation"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/70"></div>

          </div>


          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto px-6 text-center"
          >

            <p className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4">
              Property Legal Assistance
            </p>


            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Protect Your Property Rights Today
            </h2>


            <p className="text-gray-300 mb-10">
              Get professional legal support for property disputes and real estate transactions.
            </p>

             <Link href="/contact">
            <button className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition">
              Book Consultation
            </button>
            </Link>

          </motion.div>

        </motion.section>


      </main>

      <Footer />

    </>
  );
}
