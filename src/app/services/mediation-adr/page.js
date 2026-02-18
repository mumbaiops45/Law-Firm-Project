"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MediationADRPage() {

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
                Mediation & ADR
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
              Mediation & ADR
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
              Efficient and confidential dispute resolution through mediation,
              arbitration, and alternative dispute resolution mechanisms —
              helping clients resolve conflicts without prolonged litigation.
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
                src="/mediation-adr.jpg"
                alt="Mediation and ADR"
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
              Alternative Dispute Resolution (ADR) provides faster, cost-effective,
              and confidential solutions to legal disputes. Our firm assists clients
              in resolving commercial, civil, and family disputes through mediation,
              arbitration, and negotiation — reducing the need for lengthy court battles.
            </motion.p>



            {/* ================= SERVICES ================= */}

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-black mb-6"
            >
              Our Mediation & ADR Services
            </motion.h3>


            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
            >
              We offer strategic dispute resolution services tailored to each client’s needs.
            </motion.p>



            <motion.ul
              variants={fadeUp}
              className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
            >

              <li>
                <span className="font-semibold text-black">
                  Mediation Services:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Facilitating negotiations to achieve mutually acceptable settlements.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Arbitration Representation:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Representing clients in domestic and international arbitration proceedings.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Commercial Dispute Resolution:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Resolving business and contractual disputes efficiently.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Family Dispute Mediation:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Assisting in amicable settlements in matrimonial and family matters.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Settlement Negotiation:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Strategic negotiation to protect client interests and avoid litigation.
                </p>
              </li>

            </motion.ul>



            {/* IMAGE */}

            <motion.div variants={fadeUp} className="mb-16">

              <Image
                src="/mediation1.jpg"
                alt="ADR Consultation"
                width={1400}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />

            </motion.div>

            



            {/* WHY CHOOSE */}

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
            >
              Why Choose Us for Mediation & ADR
            </motion.h3>


            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              We focus on efficient, confidential, and result-oriented dispute resolution.
              Our strategic approach ensures minimal disruption, reduced costs, and
              faster settlements while protecting our clients' legal rights and business interests.
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
              alt="Mediation Consultation"
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
              Efficient Dispute Resolution
            </p>


            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Resolve Disputes Without Lengthy Litigation
            </h2>


            <p className="text-gray-300 text-base md:text-lg mb-10">
              Contact us today for strategic mediation and arbitration support.
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
