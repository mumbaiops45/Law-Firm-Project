"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";


/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};



export default function BlogSinglePage() {

  const { slug } = useParams();


  const blogData = {

    "mediation-arbitration": {
      title: "Benefits of Mediation and Arbitration in Legal Disputes",
      image: "/resource.png",

      content: (

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* INTRO */}
          <motion.p variants={fadeUp} className="mb-6">
            We will explore the benefits of incorporating dispute resolution provisions into agreements between parties in the entertainment industry. Alternative Dispute Resolution (ADR) methods like mediation and arbitration provide valuable alternatives to traditional litigation for resolving legal disputes. While both mediation and arbitration aim to resolve conflicts efficiently and with less formality than court processes, they differ significantly in terms of structure, finality, and control.
          </motion.p>



          {/* MEDIATION */}
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold mt-10 mb-4">
            Mediation
          </motion.h2>

          <motion.p variants={fadeUp} className="mb-4">
            Mediation is an informal, voluntary process where a neutral mediator facilitates communication between the disputing parties to reach a mutually satisfactory solution. It emphasizes collaboration and open discussion, allowing parties to maintain control over the outcome.
          </motion.p>


          <motion.p variants={fadeUp} className="mb-2 font-semibold">
            Preserves Relationships:
          </motion.p>

          <motion.p variants={fadeUp} className="mb-4">
            The collaborative nature of mediation encourages open communication, helping parties find common ground and preserve professional or personal relationships.
          </motion.p>


          <motion.p variants={fadeUp} className="mb-2 font-semibold">
            Flexibility and Control:
          </motion.p>

          <motion.p variants={fadeUp} className="mb-4">
            Unlike arbitration or litigation, mediation offers a flexible approach where parties can explore creative solutions and maintain full control over the process and outcome.
          </motion.p>


          <motion.p variants={fadeUp} className="mb-2 font-semibold">
            Cost and Time Efficiency:
          </motion.p>

          <motion.p variants={fadeUp} className="mb-6">
            Mediation is generally quicker and more affordable than litigation, making it ideal for parties looking to resolve disputes without extensive legal costs.
          </motion.p>



          {/* ARBITRATION */}
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold mt-10 mb-4">
            Arbitration
          </motion.h2>

          <motion.p variants={fadeUp} className="mb-4">
            Arbitration is a more formal ADR process where an arbitrator reviews evidence, hears arguments, and makes a binding decision. Depending on the agreement, the decision can be binding or non-binding.
          </motion.p>


          <motion.p variants={fadeUp} className="mb-2 font-semibold">
            Binding Decision:
          </motion.p>

          <motion.p variants={fadeUp} className="mb-4">
            Arbitration often results in a final, enforceable decision that brings closure to the dispute, making it more suitable for cases needing decisive outcomes.
          </motion.p>


          <motion.p variants={fadeUp} className="mb-2 font-semibold">
            Expertise in the Field:
          </motion.p>

          <motion.p variants={fadeUp} className="mb-6">
            Parties can select an arbitrator with specialized knowledge in the dispute's subject matter, providing a level of expertise that may be absent in a traditional court setting.
          </motion.p>



          {/* COST EFFECTIVENESS */}
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mt-12 mb-6 uppercase">
            Cost-Effectiveness
          </motion.h2>

          <motion.p variants={fadeUp} className="mb-6">
            One of the biggest advantages of ADR methods like mediation and arbitration is their cost-effectiveness. Legal battles in court can be financially draining, often requiring extensive fees for legal representation, court filings, and expert witnesses. In contrast, ADR can reduce costs significantly, as these processes are typically less formal and require fewer resources. Many businesses turn to ADR for this reason, as it enables them to allocate resources more efficiently.
          </motion.p>



          {/* IMAGE */}
          <motion.div
            variants={fadeUp}
            className="relative h-[400px] rounded-xl overflow-hidden mb-8"
          >
            <Image
              src="/resource1.png"
              alt="Mediation consultation"
              fill
              className="object-cover"
            />
          </motion.div>



          <motion.p variants={fadeUp} className="mb-6">
            Court cases, especially in complex disputes, can take months or even years to reach a resolution due to procedural delays, backlog, and appeals. ADR offers a faster alternative, often resolving disputes within weeks to a few months.
          </motion.p>



          {/* QUOTE */}
          <motion.div
            variants={fadeUp}
            className="border-l-4 border-green-500 pl-6 italic text-xl text-gray-800 mb-10"
          >
            “Mediation and arbitration allow disputing parties to control their outcomes, fostering agreements that satisfy both sides and sustain valuable relationships. Alternative dispute resolution allows businesses and individuals to settle disputes more efficiently, privately, and amicably, enabling them to avoid the challenges and high costs associated with traditional litigation.”
          </motion.div>



          {/* FINAL SECTION */}
          <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6 uppercase">
            Advocating for Sustainable Change
          </motion.h2>


          <motion.p variants={fadeUp} className="mb-6">
            Mediation is ideal for parties seeking a collaborative approach to maintain relationships and avoid formal court proceedings, while arbitration provides a more structured process with a definitive outcome. Parties should carefully consider the nature of their dispute, the level of control they desire, and the importance of a binding decision to determine the best ADR approach.
          </motion.p>


        </motion.div>
      )
    },



  /* =====================================================
     RISK MANAGEMENT BLOG (FULL CONTENT ADDED)
  ===================================================== */

  "risk-management": {
    title: "The Importance of Risk Management for Small Businesses",
    image: "/legalblog.png",

    content: (

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true}}>

        <motion.p variants={fadeUp} className="mb-6">
          Risk management is essential for small businesses to identify potential threats, protect financial stability, and ensure long-term success. Businesses face risks from legal disputes, financial uncertainty, regulatory compliance, and operational challenges.
        </motion.p>


        <motion.p variants={fadeUp} className="mb-6">
          Alternative Dispute Resolution (ADR) methods like mediation and arbitration provide valuable alternatives to traditional litigation. These approaches help businesses resolve disputes faster, reduce costs, and maintain professional relationships.
        </motion.p>


        <motion.div variants={fadeUp} className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/risk-management.png"
            alt="Risk management discussion"
            fill
            className="object-cover"
          />
        </motion.div>


        <motion.p variants={fadeUp} className="mb-6">
          Court cases, especially complex disputes, can take months or years due to procedural delays and appeals. ADR provides faster resolution, helping businesses focus on growth instead of legal conflicts.
        </motion.p>


        <motion.div variants={fadeUp} className="border-l-4 border-green-500 pl-6 italic text-xl mb-10">
          “Effective risk management allows businesses to prevent losses, maintain stability, and ensure operational continuity while avoiding costly legal disputes.”
        </motion.div>


        <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6 uppercase">
          Advocating for Sustainable Change
        </motion.h2>


        <motion.p variants={fadeUp} className="mb-6">
          By implementing proper risk management strategies and ADR methods, small businesses can protect assets, avoid litigation, and ensure sustainable growth and long-term success.
        </motion.p>

      </motion.div>

    )
  },


  /* =====================================================
     COMPLIANCE AUDIT BLOG (FULL CONTENT ADDED)
  ===================================================== */

  "compliance-audit": {

    title: "How to Prepare for Internal Compliance Audits",
    image: "/corporatelegal.png",

    content: (

      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>


        <motion.p variants={fadeUp} className="mb-6">
          Internal compliance audits ensure businesses follow regulations, maintain transparency, and avoid legal penalties. Proper preparation improves efficiency and reduces risks.
        </motion.p>


        <motion.h2 variants={fadeUp} className="text-3xl font-semibold mt-10 mb-4">
          Mediation
        </motion.h2>


        <motion.p variants={fadeUp} className="mb-4">
          Mediation allows businesses to resolve compliance disputes collaboratively while maintaining professional relationships.
        </motion.p>


        <motion.p variants={fadeUp} className="mb-2 font-semibold">
          Preserves Relationships:
        </motion.p>

        <motion.p variants={fadeUp} className="mb-4">
          Mediation encourages open communication and mutual understanding between parties.
        </motion.p>


        <motion.p variants={fadeUp} className="mb-2 font-semibold">
          Flexibility and Control:
        </motion.p>

        <motion.p variants={fadeUp} className="mb-4">
          Businesses maintain control over the resolution process and outcomes.
        </motion.p>


        <motion.h2 variants={fadeUp} className="text-3xl font-semibold mt-10 mb-4">
          Arbitration
        </motion.h2>


        <motion.p variants={fadeUp} className="mb-4">
          Arbitration provides structured resolution with binding decisions.
        </motion.p>


        <motion.div variants={fadeUp} className="relative h-[400px] rounded-xl overflow-hidden mb-8">
          <Image
            src="/indian-compliance.png"
            alt="Compliance audit meeting"
            fill
            className="object-cover"
          />
        </motion.div>


        <motion.h2 variants={fadeUp} className="text-4xl font-bold mt-12 mb-6 uppercase">
          Cost-Effectiveness
        </motion.h2>


        <motion.p variants={fadeUp} className="mb-6">
          ADR methods reduce legal costs and improve efficiency compared to traditional litigation.
        </motion.p>


        <motion.div variants={fadeUp} className="border-l-4 border-green-500 pl-6 italic text-xl mb-10">
          “Compliance preparation and ADR methods help businesses avoid penalties, maintain trust, and ensure smooth operations.”
        </motion.div>


        <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-6 uppercase">
          Advocating for Sustainable Change
        </motion.h2>


        <motion.p variants={fadeUp} className="mb-6">
          Proper audit preparation and dispute resolution strategies ensure compliance, protect business reputation, and support long-term growth.
        </motion.p>


      </motion.div>

    )
  }

};
 


  const blog = blogData[slug];


  if (!blog) {
    return (
      <div className="text-center py-40 text-xl">
        Blog not found
      </div>
    );
  }



  return (
    <>
      <Navbar />


      {/* HERO */}
      <section className="bg-black text-white py-32 text-center px-6">

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto"
        >
          {blog.title}
        </motion.h1>

      </section>



      {/* FEATURE IMAGE */}
      <div className="max-w-6xl mx-auto px-6 -mt-20 mb-16">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative h-[450px] rounded-xl overflow-hidden shadow-lg"
        >

          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
          />

        </motion.div>

      </div>



      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-20 text-gray-700 text-lg leading-relaxed">

        {blog.content}

      </section>



      <Footer />

    </>
  );

}
