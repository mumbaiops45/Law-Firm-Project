"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// ✅ IMPORT HEADER & FOOTER
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practiceArea: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const practiceAreas = [
    "Corporate & Commercial Law",
    "Civil Litigation",
    "Criminal Defense & Prosecution",
    "Family & Divorce Law",
    "Property & Real Estate Law",
    "Legal Advisory & Compliance",
    "NRI Legal Services",
    "Consumer Protection Law",
  ];


  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };


  return (
    <>
      {/* ✅ HEADER */}
      <Navbar />


      {/* ✅ MAIN CONTENT */}
      {/* <section className="py-32 px-6 bg-[#e3dede]"> */}
        <section className="py-32 px-6 bg-gradient-to-br from-[#0B1C2D] via-[#071521] to-black relative overflow-hidden">


        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

          {/* LEFT — CONSULTATION FORM */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[#0B1C2D] p-10 rounded-md shadow-md"
          >

            <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-8">
              Request a Consultation
            </h2>


            <form onSubmit={handleSubmit} className="space-y-5">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
              />

              <select
                name="practiceArea"
                value={formData.practiceArea}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
              >
                <option value="">Select Practice Area</option>

                {practiceAreas.map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}

              </select>


              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
              ></textarea>


              <button
                type="submit"
                className="w-full bg-[#C9A24D] text-[#111111] font-semibold py-3 rounded-md hover:opacity-90 transition"
              >
                Request Consultation
              </button>

            </form>

          </motion.div>



          {/* RIGHT — OFFICE DETAILS */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-serif font-semibold text-[#f3f3f4] mb-6">
              Office Details
            </h2>


            <div className="space-y-3 text-white mb-8">

              <p>
                <span className="font-semibold">Address:</span><br />
                S Jain Attorneys<br />
                Mumbai, Maharashtra, India
              </p>

              <p>
                <span className="font-semibold">Phone:</span><br />
                +91 98765 43210
              </p>

              <p>
                <span className="font-semibold">Email:</span><br />
                contact@sjainattorneys.com
              </p>

            </div>


            <div className="w-full h-72 rounded-md overflow-hidden border border-gray-300">

              <iframe
                src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ✅ FOOTER */}
      <Footer />

    </>
  );

}
