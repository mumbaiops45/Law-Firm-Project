"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HighCourtSupremeCourtPracticePage() {

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
                High Court & Supreme Court Practice
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
              High Court & Supreme Court Practice
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
              Expert legal representation in High Courts and the Supreme Court
              of India, providing strong advocacy, strategic litigation, and
              effective legal solutions for complex matters.
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

            <div className="rounded-xl overflow-hidden shadow-2xl mt-52">

              <Image
                src="/highcourt-supreme.jpg"
                alt="High Court Supreme Court Practice"
                width={1400}
                height={800}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />

            </div>

          </motion.div>

        </section>



        {/* SPACING */}

        <div className="h-40 md:h-60"></div>



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
              className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight"
            >
              Overview
            </motion.h2>


            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
            >
              We provide professional legal representation in High Courts and
              the Supreme Court of India. Our experienced advocates handle complex
              litigation, appeals, writ petitions, and constitutional matters with
              strategic expertise and strong courtroom advocacy.
            </motion.p>



            {/* ================= SERVICES ================= */}

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-black mb-6"
            >
              Our Court Practice Services
            </motion.h3>


            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
            >
              We provide comprehensive legal support and representation at the
              highest levels of the judicial system.
            </motion.p>



            <motion.ul
              variants={fadeUp}
              className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
            >

              <li>
                <span className="font-semibold text-black">
                  Writ Petitions:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Filing and defending writ petitions for protection of legal and constitutional rights.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Civil & Criminal Appeals:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Representation in appeals before High Courts and the Supreme Court.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Special Leave Petitions (SLP):
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Filing and arguing SLPs before the Supreme Court of India.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Constitutional Matters:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Handling complex constitutional and fundamental rights cases.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Public Interest Litigation (PIL):
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Filing and defending PILs for public and social justice matters.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Legal Opinions & Case Strategy:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Providing expert legal opinions and strategic litigation advice.
                </p>
              </li>

            </motion.ul>



            {/* IMAGE */}

            <motion.div
  variants={fadeUp}
  className="mb-16 max-w-3xl mx-auto"
>
  <Image
    src="/high.png"
    alt="Court Legal Consultation"
    width={800}
    height={400}
    className="
      w-full
      h-[340px] md:h-[580px]
      object-cover
      rounded-xl
      shadow-lg
    "
    sizes="(max-width: 768px) 100vw, 700px"
  />
</motion.div>



            {/* WHY CHOOSE */}

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
            >
              Why Choose Us for Court Representation
            </motion.h3>


            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              Our experienced legal team provides professional advocacy and strategic
              representation in High Courts and the Supreme Court. We focus on achieving
              favorable outcomes through thorough preparation, strong legal arguments,
              and dedicated client support.
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
              alt="Court Legal Support"
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
              Supreme Court & High Court Experts
            </p>


            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Get Expert Representation in Higher Courts
            </h2>


            <p className="text-gray-300 text-base md:text-lg mb-10">
              Our experienced advocates are ready to represent you in High Courts
              and the Supreme Court of India.
            </p>

            <Link href="/contact">
            <button className="
              bg-[#C9A24D]
              text-black
              px-8 py-4
              rounded-lg
              font-semibold
              hover:scale-105
              transition
            ">
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
