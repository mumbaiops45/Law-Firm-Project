// "use client";

// import Image from "next/image";
// import laws2 from "../../../public/laws2.jpg";
// import { motion } from "framer-motion";

// export default function AboutFirm() {
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     <section className="py-20 px-6 bg-[#111111] text-white">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//         {/* Left: Text */}
//         <motion.div
//           className="space-y-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           variants={fadeInUp}
//         >
//           <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#C9A24D] mb-4">
//             About S Jain Attorneys
//           </h2>

//           <p className="text-gray-300 text-lg">
//             With years of experience, S Jain Attorneys provides professional legal guidance tailored to individuals and businesses across India.
//           </p>
//           <p className="text-gray-300 text-lg">
//             Our firm is committed to an ethical and client-first approach, ensuring confidentiality and transparency in every legal matter we handle.
//           </p>
//           <p className="text-gray-300 text-lg">
//             We focus exclusively on India-centric legal practices, offering practical solutions and strategic advice to meet your legal needs.
//           </p>

//           {/* Bullet highlights */}
//           <ul className="list-disc list-inside text-[#C9A24D] space-y-2 text-lg">
//             <li>Experienced legal professionals</li>
//             <li>Confidential & transparent handling</li>
//             <li>Practical legal solutions</li>
//           </ul>
//         </motion.div>

//         {/* Right: Image */}
//         <motion.div
//           className="w-full h-100 md:h-125 relative rounded-none overflow-hidden shadow-lg"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }}
//           viewport={{ once: true, amount: 0.2 }}
//           whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
//         >
//           <Image
//             src={laws2}
//             alt="Founder Image"
//             fill
//             className="object-cover"
//             style={{ borderRadius: 0 }}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import laws2 from "../../../public/laws2.jpg";
import founder from "../../../public/founder.jpg"
import { motion } from "framer-motion";

export default function AboutFirm() {

  /* Animation */
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (

    <section className="py-20 px-6 bg-[#111111] text-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#C9A24D]">
            About S Jain Attorneys
          </h2>


          {/* Paragraph 1 */}
          <p className="text-gray-300 text-lg leading-relaxed">
            With years of experience, S Jain Attorneys provides professional legal guidance tailored to individuals and businesses across India.
          </p>


          {/* Paragraph 2 */}
          <p className="text-gray-300 text-lg leading-relaxed">
            Our firm follows an ethical, client-first approach, ensuring confidentiality, transparency, and dedicated representation in every legal matter.
          </p>


          {/* Paragraph 3 */}
          <p className="text-gray-300 text-lg leading-relaxed">
            We focus exclusively on India-centric legal practice, offering practical legal solutions and strategic advice aligned with your specific needs.
          </p>


          {/* Bullet Highlights */}
          <ul className="space-y-3 pt-2">

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#C9A24D]"></span>
              <span className="text-gray-300 text-lg">
                Experienced legal professionals
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#C9A24D]"></span>
              <span className="text-gray-300 text-lg">
                Confidential & transparent handling
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#C9A24D]"></span>
              <span className="text-gray-300 text-lg">
                Practical legal solutions
              </span>
            </li>

          </ul>

        </motion.div>



        {/* RIGHT — IMAGE */}
        <motion.div
          className="relative w-full h-420px md:h-[500px] overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7 }
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          <Image
            src={founder}
            alt="S Jain Attorneys Founder"
            fill
            priority
            className="object-cover"
          />
        </motion.div>


      </div>

    </section>

  );

}
