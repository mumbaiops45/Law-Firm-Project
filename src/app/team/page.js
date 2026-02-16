"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & AV Director",
    image: "/founder.jpg",
    description:
      "Rahul leads strategic audio-visual integrations for corporate and large-scale infrastructure projects across India.",
  },
  {
    name: "Ankit Verma",
    role: "Audio Engineer",
    image: "/founder.jpg",
    description:
      "Specialist in high-performance sound system architecture, acoustic optimization, and event installations.",
  },
  {
    name: "Priya Nair",
    role: "Visual Systems Specialist",
    image: "/founder.jpg",
    description:
      "Expert in LED walls, projection mapping, control systems, and enterprise-grade visual experiences.",
  },
];

export default function TeamPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* TEAM SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-[#0B1C2D] via-black to-[#071521] py-28 px-6">

        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Meet Our Team
          </h1>

          <div className="w-24 h-[2px] bg-[#C9A24D] mx-auto mb-6"></div>

          <p className="text-gray-400 max-w-2xl mx-auto mb-16">
            The professionals behind our premium audio-visual solutions,
            delivering innovation, reliability, and technical excellence.
          </p>

          {/* Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`
                  bg-white/5 
                  backdrop-blur-md
                  border border-white/10
                  rounded-2xl 
                  overflow-hidden 
                  shadow-xl 
                  transform transition-all duration-700
                  hover:-translate-y-4 hover:shadow-[0_20px_60px_rgba(201,162,77,0.25)]
                  hover:border-[#C9A24D]
                  ${visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
              >

                {/* Image */}
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-700 hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-left">

                  <h3 className="text-xl font-semibold text-white">
                    {member.name}
                  </h3>

                  <p className="text-[#C9A24D] text-sm font-medium mt-1">
                    {member.role}
                  </p>

                  <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                    {member.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <Footer />

    </>
  );
}
