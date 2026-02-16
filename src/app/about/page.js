"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Page() {

  /* ================= ANIMATION VARIANTS ================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}

      <section className="relative w-full h-[35vh] flex items-center justify-center">
        

        <Image
          src="/laws2.jpg"
          alt="Law firm"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-4xl md:text-5xl font-sans text-[#C9A24D]"
        >
          About Us
        </motion.h1>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="bg-[#f5f5f5] py-20 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-sans text-[#C9A24D] mb-6">
              S Jain Attorneys
            </h2>

            <p className="text-gray-800 mb-5 leading-relaxed text-lg">
              S Jain Attorneys is a modern law firm committed to delivering
              reliable, ethical, and result-driven legal solutions.
            </p>

            <p className="text-gray-800 mb-5 leading-relaxed text-lg">
              Our team combines strong legal knowledge with practical experience
              to provide clear guidance and powerful representation.
            </p>

            <p className="text-gray-800 leading-relaxed text-lg">
              We build long-term relationships based on trust, integrity,
              and consistent legal excellence.
            </p>

          </motion.div>


          {/* RIGHT IMAGE */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >

            <div className="relative w-full h-[400px]">

              <Image
                src="/founder1.jpg"
                alt="Founder"
                fill
                className="object-cover rounded-lg shadow-xl"
              />

            </div>

            <h3 className="mt-6 text-2xl font-semibold">
              Adv. S Jain
            </h3>

            <p className="text-gray-600 text-sm">
              Founder & Managing Attorney
            </p>

          </motion.div>

        </div>

      </section>


      {/* ================= PHILOSOPHY ================= */}

      {/* ================= PHILOSOPHY ================= */}

      <section className="relative bg-[#f1ebeb] py-24 overflow-hidden">

        {/* GOLD GLOW BACKGROUND */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#C9A24D] blur-3xl rounded-full"
        />

        {/* FLOATING GOLD BOX */}
        <motion.div
          initial={{ opacity: 0, y: 60, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 12 }}
          animate={{
            y: [0, -25, 0],
            rotate: [12, 18, 12],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="absolute top-20 right-[10%] w-24 h-24 bg-[#C9A24D] z-0 hidden md:block shadow-[0_0_40px_rgba(201,162,77,0.6)]"
        />


        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">


          {/* PHILOSOPHY TEXT BOX */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              boxShadow: "0px 0px 40px rgba(201,162,77,0.4)"
            }}
            className="relative bg-black text-white p-14 shadow-2xl"
          >

            {/* ANIMATED GOLD BORDER */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute left-0 top-0 w-[4px] bg-[#C9A24D]"
            />

            {/* GOLD TOP LINE */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[3px] bg-[#C9A24D] mb-6"
            />

            <h2 className="text-[#C9A24D] text-4xl font-sans mb-6">
              Our Philosophy
            </h2>

            <motion.p
              whileHover={{ x: 8 }}
              className="text-gray-300 mb-4"
            >
              We believe law is not just about legal procedures, but about protecting
              our clients’ future with trust and dedication.
            </motion.p>

            <motion.p
              whileHover={{ x: 8 }}
              className="text-gray-300 mb-4"
            >
              Every client receives personalized attention, strategic planning,
              and powerful legal representation.
            </motion.p>

            <motion.p
              whileHover={{ x: 8 }}
              className="text-gray-300"
            >
              Integrity, precision, and excellence define everything we do.
            </motion.p>


            {/* GOLD CORNER DECOR */}
            <div className="absolute top-[-12px] right-[-12px] w-12 h-12 border-t-4 border-r-4 border-[#C9A24D]" />
            <div className="absolute bottom-[-12px] left-[-12px] w-12 h-12 border-b-4 border-l-4 border-[#C9A24D]" />

          </motion.div>


          {/* PHILOSOPHY IMAGE */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[500px]"
          >

            <Image
              src="/statue.jpg"
              alt="Statue"
              fill
              className="object-cover shadow-2xl"
            />

            {/* GOLD FRAME ANIMATION */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#C9A24D] z-[-1]"
            />

          </motion.div>


        </div>

      </section>



      {/* ================= STRATEGIC APPROACH ================= */}

      <section className="relative py-28">

        <Image
          src="/laws3.jpg"
          alt="Background"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/80"></div>


        <div className="relative z-10 max-w-7xl mx-auto px-6">


          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <h2 className="text-5xl font-sans text-[#C9A24D] mb-4">
              Our Strategic Approach
            </h2>

          </motion.div>


          {/* CARDS */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >


            <motion.div
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-md p-8 text-center rounded-lg"
            >
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-[#C9A24D] mb-2">Advisory</h3>
              <p className="text-gray-300 text-sm">
                Expert legal guidance and resolution strategies.
              </p>
            </motion.div>


            <motion.div
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-md p-8 text-center rounded-lg"
            >
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-[#C9A24D] mb-2">Negotiation</h3>
              <p className="text-gray-300 text-sm">
                Securing favorable settlements.
              </p>
            </motion.div>


            <motion.div
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-md p-8 text-center rounded-lg"
            >
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-[#C9A24D] mb-2">Enforcement</h3>
              <p className="text-gray-300 text-sm">
                Protecting client rights in court.
              </p>
            </motion.div>


            <motion.div
              variants={fadeUp}
              className="bg-white/10 backdrop-blur-md p-8 text-center rounded-lg"
            >
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-[#C9A24D] mb-2">Strategy</h3>
              <p className="text-gray-300 text-sm">
                Deep legal analysis and planning.
              </p>
            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* ================= SUCCESS SECTION ================= */}

      {/* <section className="bg-[#f5f5f5] py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">


          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[500px]"
          >

            <Image
              src="/key.png"
              alt="Key"
              fill
              className="object-cover shadow-xl"
            />

          </motion.div>


          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-black text-white p-16 shadow-xl"
          >

            <h2 className="text-[#C9A24D] text-4xl font-serif mb-6">
              Our Winning Principles
            </h2>

            <p className="text-gray-300 mb-3">
              Strategic thinking and precise execution.
            </p>

            <p className="text-gray-300 mb-3">
              Clear communication and transparency.
            </p>

            <p className="text-gray-300 mb-3">
              Strong advocacy and legal expertise.
            </p>

            <p className="text-gray-300">
              Consistent and reliable results.
            </p>

          </motion.div>

        </div>

      </section> */}
      {/* ================= SUCCESS SECTION ================= */}

      <section className="relative bg-[#f5f5f5] py-28 overflow-hidden">

        {/* GOLD GLOW BACKGROUND */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-[#C9A24D] blur-3xl rounded-full"
        />

        <motion.div
          initial={{ opacity: 0, y: 80, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 12 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          viewport={{ once: true }}
          className="absolute top-20 left-[45%] w-28 h-28 bg-[#C9A24D] hidden md:block z-0"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 z-10">


          {/* IMAGE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[500px]"
          >

            <Image
              src="/key.png"
              alt="Key"
              fill
              className="object-cover shadow-2xl"
            />

            {/* GOLD FRAME */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#C9A24D] z-[-1]"
            />

          </motion.div>


          {/* CONTENT CARD */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative bg-black text-white p-16 shadow-[0_25px_70px_rgba(0,0,0,0.5)]"
          >

            {/* GOLD TOP BAR ANIMATION */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-[3px] bg-[#C9A24D] mb-8"
            />

            <h2 className="text-[#C9A24D] text-4xl font-serif mb-6">
              Our Winning Principles
            </h2>

            <div className="space-y-4 text-gray-300">

              <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                Strategic thinking and precise execution.
              </motion.p>

              <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                Clear communication and transparency.
              </motion.p>

              <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                Strong advocacy and legal expertise.
              </motion.p>

              <motion.p whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
                Consistent and reliable results.
              </motion.p>

            </div>


            {/* GOLD CORNER DECOR */}
            <div className="absolute -top-6 -right-6 w-16 h-16 border-t-4 border-r-4 border-[#C9A24D]"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-4 border-l-4 border-[#C9A24D]"></div>

          </motion.div>

        </div>

      </section>
 {/* ================= TEAM SECTION ================= */}

      <section className="relative bg-black py-28 overflow-hidden">

        {/* GOLD GLOW */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.15 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#C9A24D] blur-3xl rounded-full"
        />

        {/* FLOATING GOLD ELEMENT */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-20 h-20 bg-[#C9A24D] hidden md:block"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >

            <div className="h-[3px] w-20 bg-[#C9A24D] mx-auto mb-6"></div>

            <h2 className="text-5xl font-sans text-[#C9A24D] mb-4">
              Meet Our Team
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Our legal professionals combine experience, strategy, and dedication
              to deliver exceptional legal representation.
            </p>

          </motion.div>


          {/* TEAM GRID */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-10"
          >

            {[
              {
                name: "Adv. S Jain",
                role: "Founder & Managing Attorney",
                image: "/founder.jpg",
                description:
                  "Expert in corporate, civil, and criminal litigation with a strong record of successful representation.",
              },
              {
                name: "Adv. Priya Sharma",
                role: "Senior Legal Associate",
                image: "/founder.jpg",
                description:
                  "Specialist in family law, legal advisory, and dispute resolution with client-focused legal strategies.",
              },
              {
                name: "Adv. Rahul Verma",
                role: "Litigation Specialist",
                image: "/founder.jpg",
                description:
                  "Focused on court litigation, legal enforcement, and protecting client rights effectively.",
              },
            ].map((member, index) => (

              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -12 }}
                className="
            group
            relative
            bg-white/5
            backdrop-blur-lg
            border border-white/10
            overflow-hidden
            shadow-2xl
            transition
            duration-500
            hover:border-[#C9A24D]
          "
              >

                {/* IMAGE */}
                <div className="relative h-80 overflow-hidden">

                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* GOLD OVERLAY */}
                  <div className="
              absolute inset-0
              bg-gradient-to-t
              from-black via-black/40 to-transparent
            "/>

                </div>


                {/* CONTENT */}
                <div className="p-8">

                  <h3 className="text-white text-xl font-semibold mb-1">
                    {member.name}
                  </h3>

                  <p className="text-[#C9A24D] text-sm mb-4">
                    {member.role}
                  </p>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {member.description}
                  </p>

                </div>


                {/* GOLD BORDER ANIMATION */}
                <div className="
            absolute inset-0
            border border-[#C9A24D]
            opacity-0
            group-hover:opacity-100
            transition duration-500
          "/>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      <Footer />
     

    </>
  );
}
