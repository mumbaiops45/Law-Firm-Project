// "use client";

// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function ConsumerProtectionLawPage() {

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut"
//       }
//     }
//   };

//   const fadeImage = {
//     hidden: { opacity: 0, scale: 1.05 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 1.2
//       }
//     }
//   };

//   const stagger = {
//     visible: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <main className="bg-white overflow-hidden">

//         {/* ================= HERO ================= */}

//         <section className="relative bg-[#0B0F14] pt-32 pb-40">

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//             className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center"
//           >

//             <motion.p
//               variants={fadeUp}
//               className="text-gray-400 text-sm mb-6"
//             >
//               Home <span className="mx-2">›</span>
//               <span className="text-[#C9A24D]">
//                 Consumer Protection Law
//               </span>
//             </motion.p>


//             <motion.h1
//               variants={fadeUp}
//               className="
//                 text-4xl sm:text-5xl md:text-6xl lg:text-7xl
//                 font-semibold
//                 text-white
//                 mb-6
//                 tracking-tight
//               "
//             >
//               Consumer Protection Law
//             </motion.h1>


//             <motion.p
//               variants={fadeUp}
//               className="
//                 text-gray-400
//                 text-base sm:text-lg md:text-xl
//                 max-w-3xl mx-auto
//                 leading-relaxed
//               "
//             >
//               Protecting consumers against unfair trade practices, defective
//               products, and service deficiencies through effective legal action
//               and professional representation.
//             </motion.p>

//           </motion.div>



//           {/* FLOATING IMAGE */}

//           <motion.div
//             variants={fadeImage}
//             initial="hidden"
//             animate="visible"
//             className="
//               absolute
//               left-1/2
//               -translate-x-1/2
//               translate-y-1/2
//               bottom-0
//               w-full
//               max-w-6xl
//               px-6
//               z-20
//             "
//           >

//             <div className="rounded-xl overflow-hidden shadow-2xl mt-52">

//               <Image
//                 src="/consumer-law.jpg"
//                 alt="Consumer Protection Law"
//                 width={1400}
//                 height={800}
//                 className="w-full h-[400px] md:h-[500px] object-cover"
//                 priority
//               />

//             </div>

//           </motion.div>

//         </section>



//         {/* SPACING */}

//         <div className="h-40 md:h-60"></div>



//         {/* ================= OVERVIEW ================= */}

//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={stagger}
//         >

//           <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 mt-24">


//             <motion.h2
//               variants={fadeUp}
//               className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight"
//             >
//               Overview
//             </motion.h2>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed mb-12"
//             >
//               Consumer protection law ensures that consumers are safeguarded
//               against unfair business practices, defective products, and
//               deficient services. We provide comprehensive legal assistance
//               to help consumers assert their rights and seek compensation.
//             </motion.p>



//             {/* ================= SERVICES ================= */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl font-semibold text-black mb-6"
//             >
//               Our Consumer Protection Services
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed mb-10"
//             >
//               We provide complete legal assistance to individuals and businesses
//               involved in consumer disputes.
//             </motion.p>



//             <motion.ul
//               variants={fadeUp}
//               className="list-disc pl-6 space-y-8 text-gray-700 mb-16"
//             >

//               <li>
//                 <span className="font-semibold text-black">
//                   Consumer Complaint Filing:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Filing complaints before District, State, and National Consumer Commissions.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Defective Product Claims:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Legal action against manufacturers and sellers for defective goods.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Service Deficiency Cases:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Representation in disputes involving poor or negligent services.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Refund & Compensation Claims:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Assisting clients in recovering refunds and compensation.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Real Estate Consumer Disputes:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Handling disputes with builders and real estate developers.
//                 </p>
//               </li>


//               <li>
//                 <span className="font-semibold text-black">
//                   Legal Representation:
//                 </span>
//                 <p className="mt-2 text-base md:text-lg leading-relaxed">
//                   Professional representation before consumer courts.
//                 </p>
//               </li>

//             </motion.ul>



//             {/* IMAGE */}

//             <motion.div variants={fadeUp} className="mb-16">

//               <Image
//                 src="/consumer.png"
//                 alt="Consumer Protection Consultation"
//                 width={1200}
//                 height={600}
//                 className="w-full rounded-xl shadow-lg"
//               />

//             </motion.div>



//             {/* WHY CHOOSE */}

//             <motion.h3
//               variants={fadeUp}
//               className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-6"
//             >
//               Why Choose Us for Consumer Protection Cases
//             </motion.h3>


//             <motion.p
//               variants={fadeUp}
//               className="text-gray-600 text-base md:text-lg leading-relaxed"
//             >
//               Our firm provides strategic legal solutions, strong representation,
//               and efficient case handling to ensure consumer rights are protected
//               and fair compensation is achieved.
//             </motion.p>

//           </div>

//         </motion.section>



//         {/* ================= CTA ================= */}

//         <motion.section
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="relative py-28 mt-20 overflow-hidden"
//         >

//           <div className="absolute inset-0">

//             <Image
//               src="/discussion.png"
//               alt="Consumer Legal Consultation"
//               fill
//               className="object-cover"
//             />

//             <div className="absolute inset-0 bg-black/70"></div>

//           </div>


//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative max-w-5xl mx-auto px-6 text-center"
//           >

//             <p className="text-[#C9A24D] uppercase tracking-widest text-sm mb-4">
//               Consumer Legal Support
//             </p>


//             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
//               Protect Your Consumer Rights Today
//             </h2>


//             <p className="text-gray-300 text-base md:text-lg mb-10">
//               Get trusted legal assistance for consumer disputes and claims.
//             </p>

//             <Link href="/contact">
//             <button className="
//               bg-[#C9A24D]
//               text-black
//               px-8 py-4
//               rounded-lg
//               font-semibold
//               hover:scale-105
//               transition
//             ">
//               Book Consultation
//             </button>
//             </Link>

//           </motion.div>

//         </motion.section>


//       </main>

//       <Footer />

//     </>
//   );
// }



"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConsumerCourtLawyerPage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
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
            className="relative z-30 max-w-7xl mx-auto px-6 text-center"
          >

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-semibold text-white mb-6"
            >
              Experienced Consumer Court Lawyer in Bangalore for Consumer Complaints & Compensation Claims
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 max-w-3xl mx-auto mb-6"
            >
              Our firm provides dedicated representation as a Consumer Court Lawyer in Bangalore, assisting individuals and businesses in resolving consumer disputes efficiently. Our experienced attorneys handle complaints related to defective products, deficiency of service, and unfair trade practices with strong legal strategy.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 max-w-3xl mx-auto mb-6"
            >
              Our goal is to secure fair compensation, enforce consumer rights, and ensure timely legal action before the appropriate Consumer Commission.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[#C9A24D] font-semibold mb-8"
            >
              Response within 24 hours guaranteed.
            </motion.p>

            <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap">

              <Link
                href="/legal-consultation-in-bangalore"
                className="bg-[#C9A24D] text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
              >
                Book Confidential Consultation
              </Link>

              <a
                href="tel:+919000000000"
                className="border border-[#C9A24D] text-[#C9A24D] px-6 py-3 rounded-lg font-semibold hover:bg-[#C9A24D] hover:text-black transition"
              >
                Call Now
              </a>

            </motion.div>

          </motion.div>

          {/* Floating Image */}
          <div className="absolute left-1/2 -translate-x-1/2 translate-y-1/2 bottom-0 w-full max-w-6xl px-6 z-0 pointer-events-none">
            <div className="rounded-xl overflow-hidden shadow-2xl mt-52">
              <Image
                src="/consumer-law.jpg"
                alt="Consumer Court Lawyer in Bangalore"
                width={1400}
                height={800}
                className="w-full h-[400px] md:h-[500px] object-cover"
                priority
              />
            </div>
          </div>

        </section>

        <div className="h-40 md:h-60"></div>

        {/* ================= CONTENT ================= */}

        <section className="max-w-6xl mx-auto px-6 py-16 mt-24">

          <h2 className="text-4xl font-semibold mb-6">
            Legal Support for Consumer Protection & Disputes
          </h2>

          <p className="text-gray-600 mb-10">
            Consumer rights are protected under law, and timely action is crucial. As an experienced Consumer Protection Lawyer and Consumer Forum Advocate, we guide clients through filing complaints and seeking compensation before appropriate consumer commissions.
            Whether you are facing service deficiencies, product issues, e-commerce fraud, or contractual disputes, our Consumer Dispute Lawyer team ensures structured legal support and effective representation.
          </p>

          <h3 className="text-2xl font-semibold mb-6">
            OUR CONSUMER LAW SERVICES INCLUDE
          </h3>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-700 mb-16">
            <li>▪ Filing Consumer Complaints</li>
            <li>▪ Deficiency of Service Cases</li>
            <li>▪ Product Liability Claims</li>
            <li>▪ E-commerce & Online Fraud Complaints</li>
            <li>▪ Builder & Real Estate Consumer Disputes</li>
            <li>▪ Appeals Before Consumer Commissions</li>
            <li>▪ Compensation & Refund Claims</li>
          </ul>

          <Image
            src="/consumer.png"
            alt="Consumer Court Consultation"
            width={1200}
            height={600}
            className="w-full rounded-xl shadow-lg mb-16"
          />

          <h3 className="text-3xl font-semibold mb-6">
            OUR APPROACH / HOW WE WORK
          </h3>

          <div className="space-y-6 text-gray-700 mb-16">
            <p><strong>Step 1:</strong> Case Assessment & Documentation Review – Evaluation of purchase records, agreements, invoices, and supporting evidence.</p>
            <p><strong>Step 2:</strong> Legal Notice & Complaint Drafting – Preparation of formal complaint and compliance with statutory requirements. We clearly explain legal options, possible compensation, and procedural steps before filing.</p>
            <p><strong>Step 3:</strong> Filing Before Consumer Forum – Submission before District, State, or National Consumer Commission.</p>
            <p><strong>Step 4:</strong> Hearing & Resolution – Representation during hearings and pursuit of fair compensation and corrective relief.</p>
          </div>

          <h3 className="text-3xl font-semibold mb-6">
            WHY CHOOSE OUR FIRM
          </h3>

          <ul className="space-y-3 text-gray-700 mb-16">
            <li>✓ Experienced Consumer Protection Lawyers</li>
            <li>✓ Skilled Consumer Complaint Lawyer representation</li>
            <li>✓ Strong advocacy before consumer forums</li>
            <li>✓ Strategic and time-sensitive case handling</li>
            <li>✓ Transparent and client-focused legal approach</li>
          </ul>

        </section>

        {/* ================= FAQ ================= */}

        <section className="pt-8 pb-20 -mt-10 bg-[#F4F4F4]">
          <div className="max-w-6xl mx-auto px-6">

            <h3 className="text-4xl font-bold mb-12">
              Frequently Asked Questions
            </h3>

            <div className="space-y-10">

              {/* Q1 */}
              <div>
                <h4 className="text-xl font-semibold text-black">
                  Q1: What cases can be filed in Consumer Court?
                </h4>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Cases involving defective goods, service deficiencies, unfair trade practices,
                  misleading advertisements, and e-commerce disputes.
                </p>
              </div>

              {/* Q2 */}
              <div>
                <h4 className="text-xl font-semibold text-black">
                  Q2: How long does a consumer complaint take?
                </h4>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Timelines vary depending on case complexity, documentation, and forum schedule.
                </p>
              </div>

              {/* Q3 */}
              <div>
                <h4 className="text-xl font-semibold text-black">
                  Q3: Can I claim compensation for mental harassment?
                </h4>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Yes, compensation can be sought for financial loss and mental agony,
                  subject to evaluation by the Consumer Commission.
                </p>
              </div>

              {/* Q4 */}
              <div>
                <h4 className="text-xl font-semibold text-black">
                  Q4: Can businesses also file consumer cases?
                </h4>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  In certain situations, small businesses may qualify as consumers
                  under applicable law.
                </p>
              </div>

              {/* Q5 */}
              <div>
                <h4 className="text-xl font-semibold text-black">
                  Q5: Is it mandatory to send a legal notice before filing a consumer complaint?
                </h4>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  While not always mandatory, sending a legal notice is advisable as it
                  gives the opposite party an opportunity to resolve the dispute and
                  strengthens your case.
                </p>
              </div>

              {/* Q6 */}
              <div>
                <h4 className="text-xl font-semibold text-black">
                  Q6: Can consumer court orders be appealed?
                </h4>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Yes, orders passed by the District Consumer Commission can be appealed
                  before the State Commission, and further appeals can be made before
                  the National Commission within statutory timelines.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ================= CTA ================= */}

        <section className="relative py-28 mt-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/discussion.png"
              alt="Consumer Court Legal Help"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Get Immediate Legal Help from a Consumer Court Lawyer in Bangalore
            </h2>

            <p className="text-gray-300 mb-10">
              Consult our experienced consumer protection attorneys today.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/legal-consultation-in-bangalore"
                className="bg-[#C9A24D] text-black px-8 py-4 rounded-lg font-semibold hover:scale-105 transition"
              >
                Book Confidential Consultation
              </Link>

              <Link
                href="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
              >
                Request Call Back
              </Link>
            </div>

            <p className="text-gray-400 mt-8 text-sm">
              All matters handled with complete confidentiality and legal discretion.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}