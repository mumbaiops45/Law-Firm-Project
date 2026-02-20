"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FamilyDivorceLawPage() {

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
                Family & Divorce Law
              </span>
            </motion.p>


            <motion.h1
              variants={fadeUp}
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-semibold
                text-white
                mb-6
                tracking-tight
              "
            >
              Family & Divorce Law
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
              Compassionate and professional legal support for family disputes,
              divorce matters, child custody, and protection of your legal rights.
            </motion.p>

          </motion.div>



          {/* FLOATING IMAGE CARDS */}

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

            <div className="grid md:grid-cols-2 gap-6 mt-70">


              {/* FAMILY LAW CARD */}

              <motion.div
                variants={fadeUp}
                className="rounded-xl overflow-hidden shadow-2xl bg-white"
              >

                <Image
                  src="/family-law.jpg"
                  alt="Family Law"
                  width={700}
                  height={600}
                  className="w-full h-[400px] object-cover"
                  priority
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-black mb-2 text-center">
                    Family Law
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Legal assistance for family disputes, child custody,
                    maintenance, and protection of your legal rights with
                    professional and compassionate support.
                  </p>

                </div>

              </motion.div>



              {/* DIVORCE LAW CARD */}

              <motion.div
                variants={fadeUp}
                className="rounded-xl overflow-hidden shadow-2xl bg-white"
              >

                <Image
                  src="/divorce.png"
                  alt="Divorce Law"
                  width={700}
                  height={600}
                  className="w-full h-[400px] object-cover"
                  priority
                />

                <div className="p-6">

                  <h3 className="text-xl font-semibold text-black mb-2 text-center">
                    Divorce Law
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    Expert legal representation for mutual and contested divorce,
                    ensuring fair settlements, alimony, and protection of your future.
                  </p>

                </div>

              </motion.div>


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

          <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-24">


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
              Family and divorce law involves sensitive legal matters that impact
              your personal life and future. Our experienced lawyers provide strategic,
              confidential, and compassionate legal representation to ensure your
              rights and interests are fully protected.
            </motion.p>



            {/* SERVICES */}

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-black mb-6"
            >
              Our Family & Divorce Law Services
            </motion.h3>


            <motion.ul
              variants={fadeUp}
              className="list-disc pl-6 space-y-6 text-gray-700 mb-16"
            >

              <li>Mutual and Contested Divorce Cases</li>
              <li>Child Custody and Visitation Rights</li>
              <li>Maintenance and Alimony Claims</li>
              <li>Domestic Violence Protection</li>
              <li>Family Dispute Resolution</li>
              <li>Property and Asset Division</li>

            </motion.ul>



            {/* IMAGE */}

            <motion.div
              variants={fadeUp}
              className="mb-16 max-w-4xl mx-auto"
            >

              <Image
                src="/familylaw.png"
                alt="Family Law Consultation"
                width={900}
                height={500}
                className="
      w-full
      h-[480px] md:h-[540px]
      object-cover
      rounded-xl
      shadow-lg
    "
                sizes="(max-width: 768px) 100vw, 900px"
              />

            </motion.div>



            {/* WHY CHOOSE */}

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-black mb-6"
            >
              Why Choose Us for Family & Divorce Law
            </motion.h3>


            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              We provide professional, confidential, and result-oriented legal
              services. Our goal is to resolve family disputes efficiently while
              protecting your rights and ensuring the best possible outcome.
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
              alt="Family Consultation"
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
              Confidential Legal Support
            </p>


            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Speak With Our Family Law Experts
            </h2>


            <p className="text-gray-300 mb-10">
              Get professional legal support for family and divorce matters.
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
