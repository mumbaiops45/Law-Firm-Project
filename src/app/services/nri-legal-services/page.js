"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NRILegalServicesPage() {

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
                NRI Legal Services
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
              NRI Legal Services
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
              Comprehensive legal support for Non-Resident Indians in property,
              family, corporate, and litigation matters across India — managed
              efficiently without the need for frequent travel.
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
                src="/nri-legal.png"
                alt="NRI Legal Services"
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
              Our NRI legal services are designed to provide seamless legal
              assistance to clients residing abroad. From property management
              and dispute resolution to family law and corporate matters, we
              offer reliable representation and end-to-end legal support in India.
            </motion.p>



            {/* ================= SERVICES ================= */}

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl font-semibold text-black mb-6"
            >
              Our NRI Legal Services
            </motion.h3>


            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
            >
              We provide dedicated legal assistance tailored to the needs of
              NRIs handling legal matters in India.
            </motion.p>



            <motion.ul
              variants={fadeUp}
              className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
            >

              <li>
                <span className="font-semibold text-black">
                  Property Management & Disputes:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Handling property transactions, documentation, and disputes on behalf of NRIs.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Power of Attorney Assistance:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Drafting and managing power of attorney for smooth legal representation.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Family & Matrimonial Matters:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Legal assistance in divorce, custody, and family disputes.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Inheritance & Succession:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Assistance with wills, succession certificates, and inheritance claims.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Court Representation:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Representation in Indian courts without requiring frequent travel.
                </p>
              </li>


              <li>
                <span className="font-semibold text-black">
                  Corporate & Investment Advisory:
                </span>
                <p className="mt-2 text-base md:text-lg leading-relaxed">
                  Legal guidance for business investments and compliance in India.
                </p>
              </li>

            </motion.ul>



            {/* IMAGE */}

            <motion.div variants={fadeUp} className="mb-16">

              <Image
                src="/nri.png"
                alt="NRI Legal Consultation"
                width={1200}
                height={600}
                className="w-full rounded-xl shadow-lg"
              />

            </motion.div>



            {/* WHY CHOOSE */}

            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
            >
              Why Choose Us for NRI Legal Services
            </motion.h3>


            <motion.p
              variants={fadeUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              We provide transparent communication, efficient case handling,
              and trusted representation for NRIs across various legal matters.
              Our goal is to ensure peace of mind while protecting your legal
              rights and investments in India.
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
              alt="NRI Legal Consultation"
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
              Dedicated NRI Legal Support
            </p>


            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Manage Your Legal Matters in India with Confidence
            </h2>


            <p className="text-gray-300 text-base md:text-lg mb-10">
              Get professional and reliable legal assistance tailored for NRIs.
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
