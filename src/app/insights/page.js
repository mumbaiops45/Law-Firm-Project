// // "use client";

// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { motion } from "framer-motion";

// // export default function InsightsPage() {

// //   /* ================= ANIMATION ================= */

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.8 }
// //     }
// //   };

// //   const stagger = {
// //     hidden: {},
// //     visible: {
// //       transition: {
// //         staggerChildren: 0.2
// //       }
// //     }
// //   };

// //   /* ================= INSIGHTS DATA ================= */

// //   const insights = [
// //     {
// //       title: "Understanding Mediation in India",
// //       image: "/mediation1.jpg",
// //       category: "Mediation",
// //       description:
// //         "Mediation provides a faster, confidential, and cost-effective way to resolve disputes without lengthy court proceedings.",
// //       link: "/contact"
// //     },
// //     {
// //       title: "Civil Litigation Process Explained",
// //       image: "/civilLitigation1.jpg",
// //       category: "Civil Litigation",
// //       description:
// //         "Learn the key stages of civil litigation and how professional legal representation protects your rights and interests.",
// //       link: "/contact"
// //     },
// //     {
// //       title: "Importance of Legal Consultation",
// //       image: "/discussion.png",
// //       category: "Legal Advisory",
// //       description:
// //         "Early legal consultation helps prevent disputes, reduce risks, and ensure proper legal protection.",
// //       link: "/contact"
// //     },
// //     {
// //       title: "Property Dispute Resolution",
// //       image: "/property.png",
// //       category: "Property Law",
// //       description:
// //         "Professional legal support in resolving property disputes efficiently through mediation or litigation.",
// //       link: "/contact"
// //     },
// //     {
// //       title: "Arbitration vs Litigation",
// //       image: "/arbitration.jpg",
// //       category: "Arbitration",
// //       description:
// //         "Understand the difference between arbitration and litigation to choose the right dispute resolution method.",
// //       link: "/contact"
// //     },
// //     {
// //       title: "Legal Notice Guidance",
// //       image: "/legalNotice.png",
// //       category: "Legal Process",
// //       description:
// //         "Sending a legal notice is often the first step toward resolving disputes professionally.",
// //       link: "/contact"
// //     }
// //   ];

// //   return (
// //     <>
// //       <Navbar />

// //       <main className="bg-[#f7f8f9] min-h-screen">

// //         {/* ================= HERO ================= */}

// //         <section className="relative h-[40vh] flex items-center justify-center">

// //           <Image
// //             src="/laws2.jpg"
// //             alt="Legal Insights"
// //             fill
// //             className="object-cover"
// //           />

// //           <div className="absolute inset-0 bg-black/70"></div>

// //           <motion.div
// //             initial="hidden"
// //             animate="visible"
// //             variants={fadeUp}
// //             className="relative text-center"
// //           >
// //             <h1 className="text-4xl md:text-6xl font-semibold text-[#C9A24D] mb-4">
// //               Legal Insights
// //             </h1>

// //             <p className="text-gray-300 text-lg">
// //               Expert knowledge, legal updates, and professional guidance
// //             </p>
// //           </motion.div>

// //         </section>


// //         {/* ================= INSIGHTS GRID ================= */}

// //         <section className="py-24 px-6">

// //           <motion.div
// //             variants={stagger}
// //             initial="hidden"
// //             animate="visible"
// //             className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
// //           >

// //             {insights.map((item, index) => (

// //              <motion.div
// //   key={index}
// //   variants={fadeUp}
// //   className="
// //     group
// //     bg-white
// //     rounded-xl
// //     overflow-hidden
// //     shadow-lg
// //     hover:shadow-2xl
// //     hover:-translate-y-2
// //     transition duration-500
// //     flex flex-col
// //   "
// // >

// //   {/* IMAGE */}

// //   <div className="relative h-[240px] overflow-hidden">

// //     <Image
// //       src={item.image}
// //       alt={item.title}
// //       fill
// //       className="object-cover group-hover:scale-110 transition duration-700"
// //     />

// //   </div>


// //   {/* CONTENT */}

// //   <div className="p-6 flex flex-col flex-grow">

// //     <p className="text-[#C9A24D] text-sm mb-2 text-center font-medium">
// //       {item.category}
// //     </p>

// //     <h3 className="text-black text-xl font-semibold mb-3 text-center">
// //       {item.title}
// //     </h3>

// //     <p className="text-gray-600 text-sm leading-relaxed text-center flex-grow">
// //       {item.description}
// //     </p>

// //   </div>

// // </motion.div>

// //             ))}

// //           </motion.div>

// //         </section>


// //         {/* ================= CTA ================= */}

// //         <section className="relative py-28">

// //           <Image
// //             src="/discussion.png"
// //             alt="Consultation"
// //             fill
// //             className="object-cover"
// //           />

// //           <div className="absolute inset-0 bg-black/80"></div>

// //           <motion.div
// //             variants={fadeUp}
// //             initial="hidden"
// //             whileInView="visible"
// //             className="relative text-center max-w-3xl mx-auto px-6"
// //           >

// //             <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
// //               Need Legal Assistance?
// //             </h2>

// //             <p className="text-gray-300 mb-8">
// //               Contact our experienced legal team for professional guidance.
// //             </p>

// //             <Link href="/contact">
// //               <button className="
// //                 bg-[#C9A24D]
// //                 text-black
// //                 px-8 py-4
// //                 font-semibold
// //                 hover:scale-105
// //                 transition
// //               ">
// //                 Book Consultation
// //               </button>
// //             </Link>

// //           </motion.div>

// //         </section>

// //       </main>

// //       <Footer />

// //     </>
// //   );
// // }

// "use client";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function InsightsPage() {

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   const stagger = {
//     hidden: {},
//     visible: {
//       transition: { staggerChildren: 0.15 }
//     }
//   };

//  const blogs = [
//   {
//     slug: "mediation-arbitration",
//     title: "Benefits of Mediation and Arbitration in Legal Disputes",
//     image: "/mediation1.jpg",
//     category: "Resource",
//   },
//   {
//     slug: "risk-management",
//     title: "The Importance of Risk Management for Small Businesses",
//     image: "/discussion.png",
//     category: "Legal",
//   },
//   {
//     slug: "compliance-audit",
//     title: "How to Prepare for Internal Compliance Audits",
//     image: "/corporate.jpg",
//     category: "Corporate",
//   }
// ];

//   return (
//     <>
//       <Navbar />

//       <main className="bg-white min-h-screen">

//         {/* HERO */}

//         <section className="relative h-[38vh] flex items-center justify-center">

//           <Image
//             src="/laws2.jpg"
//             alt="Insights"
//             fill
//             className="object-cover"
//           />

//           <div className="absolute inset-0 bg-black/60"></div>

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//             className="relative text-center"
//           >
//             <h1 className="text-4xl md:text-5xl font-semibold text-white">
//               Expert Advice & Legal Insights
//             </h1>
//           </motion.div>

//         </section>


//         {/* BLOG GRID */}

//         <section className="py-20">

//           <motion.div
//             variants={stagger}
//             initial="hidden"
//             animate="visible"
//             className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12"
//           >

//             {blogs.map((blog, index) => (

//               <motion.div key={index} variants={fadeUp}>

//                 <Link href={blog.link}>

//                   <div className="group cursor-pointer">

//                     {/* IMAGE */}

//                     <div className="relative h-[240px] rounded-xl overflow-hidden mb-5">

//                       <Image
//                         src={blog.image}
//                         alt={blog.title}
//                         fill
//                         className="object-cover group-hover:scale-105 transition duration-500"
//                       />

//                     </div>


//                     {/* CATEGORY */}

//                     <span className="
//                       inline-block
//                       border
//                       border-gray-400
//                       text-gray-600
//                       text-xs
//                       px-4
//                       py-1
//                       rounded-full
//                       mb-4
//                     ">
//                       {blog.category}
//                     </span>


//                     {/* TITLE */}

//                     <h3 className="
//                       text-black
//                       text-2xl
//                       font-semibold
//                       uppercase
//                       leading-snug
//                       mb-3
//                       group-hover:text-[#C9A24D]
//                       transition
//                     ">
//                       {blog.title}
//                     </h3>


//                     {/* DATE */}

//                     {/* <p className="text-gray-500 text-sm">
//                       Posted on {blog.date}
//                     </p> */}

//                   </div>

//                 </Link>

//               </motion.div>

//             ))}

//           </motion.div>

//         </section>

//       </main>

//       <Footer />

//     </>
//   );
// }


"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InsightsPage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const blogs = [
    {
      slug: "mediation-arbitration",
      title: "Benefits of Mediation and Arbitration in Legal Disputes",
      image: "/resource.png",
      category: "Resource",
      // date: "August 12, 2024",
    },
    {
      slug: "risk-management",
      title: "The Importance of Risk Management for Small Businesses",
      image: "/legalblog.png",
      category: "Legal",
      // date: "September 02, 2024",
    },
    {
      slug: "compliance-audit",
      title: "How to Prepare for Internal Compliance Audits",
      image: "/corporatelegal.png",
      category: "Corporate",
      // date: "September 12, 2024",
    }
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">

        {/* HERO */}
        <section className="relative h-[38vh] flex items-center justify-center">

          <Image
            src="/laws2.jpg"
            alt="Insights"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="relative text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Expert Advice & Legal Insights
            </h1>
          </motion.div>

        </section>


        {/* BLOG GRID */}
        <section className="py-20">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12"
          >

            {blogs.map((blog, index) => (

              <motion.div key={index} variants={fadeUp}>

                {/* FIXED LINK */}
                <Link href={`/insights/${blog.slug}`}>

                  <div className="group cursor-pointer">

                    {/* IMAGE */}
                    <div className="relative h-[240px] rounded-xl overflow-hidden mb-5">

                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                      />

                    </div>


                    {/* CATEGORY */}
                    <span className="
                      inline-block
                      border
                      border-gray-400
                      text-gray-600
                      text-xs
                      px-4
                      py-1
                      rounded-full
                      mb-4
                    ">
                      {blog.category}
                    </span>


                    {/* TITLE */}
                    <h3 className="
                      text-black
                      text-xl
                      font-semibold
                      uppercase
                      leading-snug
                      mb-2
                      group-hover:text-[#C9A24D]
                      transition
                    ">
                      {blog.title}
                    </h3>


                    {/* DATE */}
                    {/* <p className="text-gray-500 text-sm">
                      Posted on {blog.date}
                    </p> */}

                  </div>

                </Link>

              </motion.div>

            ))}

          </motion.div>

        </section>

      </main>

      <Footer />
    </>
  );
}