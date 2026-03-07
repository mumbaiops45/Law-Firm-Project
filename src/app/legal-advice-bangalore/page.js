// // // // // // // // // 
// // // // // // // // import Navbar from "../components/Navbar";
// // // // // // // // import Footer from "../components/Footer";
// // // // // // // // import Link from "next/link";
// // // // // // // // import Image from "next/image";
// // // // // // // // import { blogs } from "./blogs";

// // // // // // // // export default function LegalAdviceBangalore() {
// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <Navbar />
// // // // // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // // // // //         <div className="max-w-4xl mx-auto">

// // // // // // // //           <div className="text-center mb-16">
// // // // // // // //             <h1 className="text-4xl md:text-5xl font-semibold">
// // // // // // // //               Legal Insights & Articles
// // // // // // // //             </h1>
// // // // // // // //           </div>

// // // // // // // //           <div className="grid md:grid-cols-2 gap-10">
// // // // // // // //             {blogs.map((blog) => (
// // // // // // // //               <div key={blog.slug} className="bg-[#111] rounded-xl overflow-hidden">

// // // // // // // //                 <div className="relative w-full h-56">
// // // // // // // //                   <Image
// // // // // // // //                     src={blog.sections[0].image}
// // // // // // // //                     alt={blog.title}
// // // // // // // //                     fill
// // // // // // // //                     className="object-cover"
// // // // // // // //                   />
// // // // // // // //                 </div>

// // // // // // // //                 <div className="p-8">
// // // // // // // //                   <h2 className="text-2xl font-semibold mt-6">
// // // // // // // //                     {blog.title}
// // // // // // // //                   </h2>

// // // // // // // //                   <p className="text-gray-400 mt-4 text-sm">
// // // // // // // //                     By {blog.author} • {blog.date}
// // // // // // // //                   </p>

// // // // // // // //                   <p className="text-gray-400 mt-6 text-sm">
// // // // // // // //                     {blog.intro.replace(/<[^>]+>/g, "").slice(0, 160)}...
// // // // // // // //                   </p>

// // // // // // // //                   <Link
// // // // // // // //                     href={`/legal-advice-bangalore/${blog.slug}`}
// // // // // // // //                     className="inline-block mt-6 text-[#C9A24D] font-semibold"
// // // // // // // //                   >
// // // // // // // //                     READ MORE →
// // // // // // // //                   </Link>
// // // // // // // //                 </div>

// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>

// // // // // // // //         </div>
// // // // // // // //       </section>
// // // // // // // //       <Footer />
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // import Navbar from "../components/Navbar";
// // // // // // // import Footer from "../components/Footer";
// // // // // // // import Link from "next/link";

// // // // // // // export const metadata = {
// // // // // // //   title: "Legal Advice in Bangalore",
// // // // // // //   description:
// // // // // // //     "Get expert Legal Advice in Bangalore with trusted legal blogs, Bangalore law updates, court case insights & practical legal articles from experienced lawyers.",
// // // // // // // };

// // // // // // // export default function LegalAdviceInBangalore() {
// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Navbar />

// // // // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // // // //         <div className="max-w-6xl mx-auto">

// // // // // // //           {/* H1 */}
// // // // // // //           <h1 className="text-4xl md:text-5xl font-semibold mb-8">
// // // // // // //             Legal Advice in Bangalore – Expert Legal Blogs & Court Case Insights
// // // // // // //           </h1>

// // // // // // //           <div className="text-gray-300 text-lg leading-relaxed mb-16">
// // // // // // //             <h2 className="text-3xl font-semibold mb-6">
// // // // // // //               Legal Advice in Bangalore for Clarity, Protection & Confidence
// // // // // // //             </h2>

// // // // // // //             <p className="mb-4">
// // // // // // //               When legal problems feel overwhelming, the right guidance can bring clarity and confidence.
// // // // // // //             </p>

// // // // // // //             <p>
// // // // // // //               Explore our Legal Blogs, practical insights, and real-world solutions that help you protect your rights and move forward with strength.
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           {/* BLOG LISTING SECTION */}
// // // // // // //           <h2 className="text-3xl font-semibold mb-12 border-b border-gray-700 pb-4">
// // // // // // //             Blog Listing Section
// // // // // // //           </h2>

// // // // // // //           <div className="space-y-16">

// // // // // // //             {/* Blog 1 */}
// // // // // // //             <div>
// // // // // // //               <h3 className="text-2xl font-semibold">
// // // // // // //                 Guide to Filing an FIR in India: Step-by-Step Legal Process & Tips
// // // // // // //               </h3>

// // // // // // //               <p className="text-gray-400 text-sm mt-2">
// // // // // // //                 Category: Criminal Law | Author: By S Jain & Attorneys | Date: March 2026
// // // // // // //               </p>

// // // // // // //               <p className="text-gray-300 mt-4 leading-relaxed">
// // // // // // //                 Learn the complete legal process for filing an FIR in India, required documents,
// // // // // // //                 police procedures, and how to respond if your complaint is refused.
// // // // // // //                 Practical Legal Advice in Bangalore for citizens facing criminal issues.
// // // // // // //               </p>

// // // // // // //               <Link
// // // // // // //                 href="#"
// // // // // // //                 className="inline-block mt-4 text-[#C9A24D] font-semibold"
// // // // // // //               >
// // // // // // //                 Read More →
// // // // // // //               </Link>
// // // // // // //             </div>

// // // // // // //             {/* Blog 2 */}
// // // // // // //             <div>
// // // // // // //               <h3 className="text-2xl font-semibold">
// // // // // // //                 What to Do When Arrested in India: Know Your Legal Rights & Defenses
// // // // // // //               </h3>

// // // // // // //               <p className="text-gray-400 text-sm mt-2">
// // // // // // //                 Category: Criminal Defense | Author: By S Jain & Attorneys | Date: March 2026
// // // // // // //               </p>

// // // // // // //               <p className="text-gray-300 mt-4 leading-relaxed">
// // // // // // //                 Arrested or received a police notice? Understand your constitutional rights,
// // // // // // //                 bail procedures, and immediate legal remedies.
// // // // // // //                 This guide explains key protections and important steps during criminal Court Cases.
// // // // // // //               </p>

// // // // // // //               <Link
// // // // // // //                 href="#"
// // // // // // //                 className="inline-block mt-4 text-[#C9A24D] font-semibold"
// // // // // // //               >
// // // // // // //                 Read More →
// // // // // // //               </Link>
// // // // // // //             </div>

// // // // // // //             {/* Blog 3 */}
// // // // // // //             <div>
// // // // // // //               <h3 className="text-2xl font-semibold">
// // // // // // //                 What You Need to Know About Alimony and Maintenance Laws in 2026
// // // // // // //               </h3>

// // // // // // //               <p className="text-gray-400 text-sm mt-2">
// // // // // // //                 Category: Divorce & Family Law | Author: By S Jain & Attorneys | Date: March 2026
// // // // // // //               </p>

// // // // // // //               <p className="text-gray-300 mt-4 leading-relaxed">
// // // // // // //                 Confused about alimony and maintenance calculations?
// // // // // // //                 This detailed article explains eligibility, calculation factors,
// // // // // // //                 and recent Bangalore Law Updates affecting family court proceedings.
// // // // // // //               </p>

// // // // // // //               <Link
// // // // // // //                 href="#"
// // // // // // //                 className="inline-block mt-4 text-[#C9A24D] font-semibold"
// // // // // // //               >
// // // // // // //                 Read More →
// // // // // // //               </Link>
// // // // // // //             </div>

// // // // // // //             {/* Blog 4 */}
// // // // // // //             <div>
// // // // // // //               <h3 className="text-2xl font-semibold">
// // // // // // //                 Common Misconceptions About Cyber Fraud & How to Protect Yourself
// // // // // // //               </h3>

// // // // // // //               <p className="text-gray-400 text-sm mt-2">
// // // // // // //                 Category: Cyber Law | Author: By S Jain & Attorneys | Date: March 2026
// // // // // // //               </p>

// // // // // // //               <p className="text-gray-300 mt-4 leading-relaxed">
// // // // // // //                 Cyber fraud cases are rising rapidly. Learn common legal myths,
// // // // // // //                 reporting procedures, and prevention strategies.
// // // // // // //                 Get practical Legal Advice on protecting your finances and digital identity.
// // // // // // //               </p>

// // // // // // //               <Link
// // // // // // //                 href="#"
// // // // // // //                 className="inline-block mt-4 text-[#C9A24D] font-semibold"
// // // // // // //               >
// // // // // // //                 Read More →
// // // // // // //               </Link>
// // // // // // //             </div>

// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       <Footer />
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }
// // // // // // import Navbar from "../components/Navbar";
// // // // // // import Footer from "../components/Footer";
// // // // // // import Link from "next/link";

// // // // // // export const metadata = {
// // // // // //   title: "Legal Advice in Bangalore",
// // // // // //   description:
// // // // // //     "Get expert Legal Advice in Bangalore with trusted legal blogs, Bangalore law updates, court case insights & practical legal articles from experienced lawyers.",
// // // // // // };

// // // // // // const blogs = [
// // // // // //   {
// // // // // //     slug: "guide-to-filing-fir-in-india",
// // // // // //     title:
// // // // // //       "Guide to Filing an FIR in India: Step-by-Step Legal Process & Tips",
// // // // // //     category: "Criminal Law",
// // // // // //     author: "S Jain & Attorneys",
// // // // // //     date: "March 2026",
// // // // // //     description:
// // // // // //       "Learn the complete legal process for filing an FIR in India, required documents, police procedures, and how to respond if your complaint is refused.",
// // // // // //   },
// // // // // //   {
// // // // // //     slug: "what-to-do-when-arrested-in-india",
// // // // // //     title:
// // // // // //       "What to Do When Arrested in India: Know Your Legal Rights & Defenses",
// // // // // //     category: "Criminal Defense",
// // // // // //     author: "S Jain & Attorneys",
// // // // // //     date: "March 2026",
// // // // // //     description:
// // // // // //       "Understand your constitutional rights, bail procedures, and immediate legal remedies during criminal court cases.",
// // // // // //   },
// // // // // //   {
// // // // // //     slug: "alimony-maintenance-laws-2026",
// // // // // //     title:
// // // // // //       "What You Need to Know About Alimony and Maintenance Laws in 2026",
// // // // // //     category: "Divorce & Family Law",
// // // // // //     author: "S Jain & Attorneys",
// // // // // //     date: "March 2026",
// // // // // //     description:
// // // // // //       "Detailed explanation of eligibility, calculation factors, and recent Bangalore law updates affecting family court proceedings.",
// // // // // //   },
// // // // // //   {
// // // // // //     slug: "cyber-fraud-misconceptions",
// // // // // //     title:
// // // // // //       "Common Misconceptions About Cyber Fraud & How to Protect Yourself",
// // // // // //     category: "Cyber Law",
// // // // // //     author: "S Jain & Attorneys",
// // // // // //     date: "March 2026",
// // // // // //     description:
// // // // // //       "Learn common cyber fraud myths, reporting procedures, and prevention strategies to protect your finances and digital identity.",
// // // // // //   },
// // // // // // ];

// // // // // // export default function LegalAdviceInBangalore() {
// // // // // //   return (
// // // // // //     <>
// // // // // //       <Navbar />

// // // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // // //         <div className="max-w-7xl mx-auto">

// // // // // //           {/* H1 */}
// // // // // //           <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6">
// // // // // //             Legal Advice in Bangalore – Expert Legal Blogs & Court Case Insights
// // // // // //           </h1>

// // // // // //           <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
// // // // // //             When legal problems feel overwhelming, the right guidance can bring clarity and confidence.
// // // // // //             Explore practical insights, Bangalore law updates, and expert legal articles
// // // // // //             that help protect your rights.
// // // // // //           </p>

// // // // // //           {/* BLOG CARD SECTION */}
// // // // // //           <h2 className="text-3xl font-semibold mb-12 text-center">
// // // // // //             Blog Listing Section
// // // // // //           </h2>

// // // // // //           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

// // // // // //             {blogs.map((blog) => (
// // // // // //               <div
// // // // // //                 key={blog.slug}
// // // // // //                 className="bg-[#111] rounded-xl p-8 hover:bg-[#161616] transition duration-300 border border-gray-800"
// // // // // //               >
// // // // // //                 <p className="text-sm text-[#C9A24D] mb-2">
// // // // // //                   {blog.category}
// // // // // //                 </p>

// // // // // //                 <h3 className="text-2xl font-semibold mb-4">
// // // // // //                   {blog.title}
// // // // // //                 </h3>

// // // // // //                 <p className="text-gray-400 text-sm mb-4">
// // // // // //                   By {blog.author} • {blog.date}
// // // // // //                 </p>

// // // // // //                 <p className="text-gray-300 text-sm leading-relaxed mb-6">
// // // // // //                   {blog.description}
// // // // // //                 </p>

// // // // // //                 <Link
// // // // // //                   href={`/legal-advice-in-bangalore/${blog.slug}`}
// // // // // //                   className="text-[#C9A24D] font-semibold"
// // // // // //                 >
// // // // // //                   Read More →
// // // // // //                 </Link>
// // // // // //               </div>
// // // // // //             ))}

// // // // // //           </div>

// // // // // //         </div>
// // // // // //       </section>

// // // // // //       <Footer />
// // // // // //     </>
// // // // // //   );
// // // // // // // }

// // // // // // import Navbar from "../components/Navbar";
// // // // // // import Footer from "../components/Footer";
// // // // // // import Link from "next/link";
// // // // // // import { blogs } from "./blogs";

// // // // // // export const metadata = {
// // // // // //   title: "Legal Advice in Bangalore",
// // // // // //   description:
// // // // // //     "Get expert Legal Advice in Bangalore with trusted legal blogs, Bangalore law updates, court case insights & practical legal articles.",
// // // // // // };

// // // // // // export default function LegalAdviceInBangalore() {
// // // // // //   return (
// // // // // //     <>
// // // // // //       <Navbar />

// // // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // // //         <div className="max-w-7xl mx-auto">

// // // // // //           <h1 className="text-4xl font-semibold text-center mb-16">
// // // // // //             Legal Advice in Bangalore – Expert Legal Blogs & Court Case Insights
// // // // // //           </h1>

// // // // // //           <div className="grid md:grid-cols-2 gap-10">
// // // // // //             {blogs.map((blog) => (
// // // // // //               <div key={blog.slug} className="bg-[#111] p-8 rounded-xl border border-gray-800">

// // // // // //                 <p className="text-sm text-[#C9A24D]">{blog.category}</p>
                

// // // // // //                 <h3 className="text-2xl font-semibold mt-3 mb-3">
// // // // // //                   {blog.title}
// // // // // //                 </h3>

// // // // // //                 <p className="text-gray-400 text-sm mb-4">
// // // // // //                   By {blog.author} • {blog.date}
// // // // // //                 </p>

// // // // // //                 <Link
// // // // // //                   href={`/legal-advice-bangalore/${blog.slug}`}
// // // // // //                   className="text-[#C9A24D] font-semibold"
// // // // // //                 >
// // // // // //                   Read More →
// // // // // //                 </Link>

// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>

// // // // // //         </div>
// // // // // //       </section>

// // // // // //       <Footer />
// // // // // //     </>
// // // // // //   );
// // // // // // }

// // // // // import Navbar from "../components/Navbar";
// // // // // import Footer from "../components/Footer";
// // // // // import Link from "next/link";
// // // // // import Image from "next/image";
// // // // // import { blogs } from "./blogs";

// // // // // export const metadata = {
// // // // //   title: "Legal Advice in Bangalore",
// // // // //   description:
// // // // //     "Get expert Legal Advice in Bangalore with trusted legal blogs, Bangalore law updates, court case insights & practical legal articles.",
// // // // // };

// // // // // export default function LegalAdviceInBangalore() {
// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />

// // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // //         <div className="max-w-5xl mx-auto">

// // // // //           <h1 className="text-4xl font-semibold text-center mb-16">
// // // // //             Legal Advice in Bangalore – Expert Legal Blogs & Court Case Insights
// // // // //           </h1>

// // // // //           <div className="grid md:grid-cols-2 gap-10">
// // // // //             {blogs.map((blog) => (
// // // // //               <div
// // // // //                 key={blog.slug}
// // // // //                 className="bg-[#111] rounded-xl border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-[#C9A24D]/20 transition"
// // // // //               >

// // // // //                 {/* Blog Image */}
// // // // //                 <div className="relative w-full h-60">
// // // // //                   <Image
// // // // //                     src={blog.image}
// // // // //                     alt={blog.title}
// // // // //                     fill
// // // // //                     className="object-cover"
// // // // //                   />
// // // // //                 </div>

// // // // //                 <div className="p-8">
// // // // //                   <p className="text-sm text-[#C9A24D]">{blog.category}</p>

// // // // //                   <h3 className="text-2xl font-semibold mt-3 mb-3">
// // // // //                     {blog.title}
// // // // //                   </h3>

// // // // //                   <p className="text-gray-400 text-sm mb-4">
// // // // //                     By {blog.author} • {blog.date}
// // // // //                   </p>

// // // // //                   <Link
// // // // //                     href={`/legal-advice-bangalore/${blog.slug}`}
// // // // //                     className="text-[#C9A24D] font-semibold"
// // // // //                   >
// // // // //                     Read More →
// // // // //                   </Link>
// // // // //                 </div>

// // // // //               </div>
// // // // //             ))}
// // // // //           </div>

// // // // //         </div>
// // // // //       </section>

// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }


// // // // import Navbar from "../components/Navbar";
// // // // import Footer from "../components/Footer";
// // // // import Link from "next/link";
// // // // import Image from "next/image";
// // // // import { blogs } from "./blogs";

// // // // export const metadata = {
// // // //   title: "Legal Blogs in Bangalore",
// // // //   description:
// // // //     "Explore Legal Blogs in Bangalore with expert insights, Bangalore law updates, case studies, and practical guidance through real-world legal scenarios.",
// // // // };

// // // // export default function LegalBlogsInBangalore() {
// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // //         <div className="max-w-6xl mx-auto">

// // // //           {/* H1 */}
// // // //           <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6 leading-tight">
// // // //             Case Studies & Blogs That Empower You Through Life’s Legal Challenges
// // // //           </h1>

// // // //           <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
// // // //             When legal problems feel overwhelming, the right knowledge can bring clarity and confidence. 
// // // //             Explore our case studies and blogs in Bangalore featuring practical insights, real-world 
// // // //             scenarios, and guidance to help you protect your rights and move forward with strength.
// // // //           </p>

// // // //           {/* BLOG LISTING SECTION */}
// // // //           <div className="grid md:grid-cols-2 gap-10">
// // // //             {blogs.map((blog) => (
// // // //               <div
// // // //                 key={blog.slug}
// // // //                 className="bg-[#111] rounded-xl border border-gray-800 overflow-hidden hover:shadow-xl hover:shadow-[#C9A24D]/20 transition duration-300"
// // // //               >
// // // //                 {/* Image */}
// // // //                 <div className="relative w-full h-60">
// // // //                   <Image
// // // //                     src={blog.image}
// // // //                     alt={blog.title}
// // // //                     fill
// // // //                     className="object-cover"
// // // //                   />
// // // //                 </div>

// // // //                 <div className="p-8">

// // // //                   {/* Category */}
// // // //                   <p className="text-sm text-[#C9A24D]">
// // // //                     {blog.category}
// // // //                   </p>

// // // //                   {/* H3 Title */}
// // // //                   <h3 className="text-2xl font-semibold mt-3 mb-3 leading-snug">
// // // //                     {blog.title}
// // // //                   </h3>

// // // //                   {/* Author + Date */}
// // // //                   <p className="text-gray-400 text-sm mb-4">
// // // //                     By {blog.author} • {blog.date}
// // // //                   </p>

// // // //                   {/* Excerpt */}
// // // //                   <p className="text-gray-400 text-sm mb-6">
// // // //                     {blog.excerpt}
// // // //                   </p>

// // // //                   {/* Read More */}
// // // //                   <Link
// // // //                     href={`/legal-advice-bangalore/${blog.slug}`}
// // // //                     className="text-[#C9A24D] font-semibold hover:underline"
// // // //                   >
// // // //                     Read More →
// // // //                   </Link>

// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //         </div>
// // // //       </section>

// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState, useRef } from "react";
// // // import { motion, useScroll, useTransform } from "framer-motion";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import { blogs } from "./blogs";

// // // // ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// // // const fadeUp = {
// // //   hidden: { opacity: 0, y: 40 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, y: 0,
// // //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const fadeLeft = {
// // //   hidden: { opacity: 0, x: -40 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, x: 0,
// // //     transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const scaleIn = {
// // //   hidden: { opacity: 0, scale: 0.93 },
// // //   show: (i = 0) => ({
// // //     opacity: 1, scale: 1,
// // //     transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
// // //   }),
// // // };

// // // const stagger = {
// // //   hidden: {},
// // //   show: { transition: { staggerChildren: 0.15 } },
// // // };

// // // // ─── PAGE ─────────────────────────────────────────────────────────────────────

// // // export default function LegalBlogsPage() {
// // //   const heroRef = useRef(null);
// // //   const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
// // //   const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
// // //   const heroOpa = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       {/* ══════════════════════════════════ HERO ═══════════════════════════════ */}
// // //       <section ref={heroRef}
// // //         className="relative bg-black text-white overflow-hidden min-h-[80vh] flex items-center"
// // //       >
// // //         {/* top gold border */}
// // //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // //         {/* animated corner brackets */}
// // //         {[
// // //           "top-8 left-8 border-t-2 border-l-2",
// // //           "top-8 right-8 border-t-2 border-r-2",
// // //           "bottom-8 left-8 border-b-2 border-l-2",
// // //           "bottom-8 right-8 border-b-2 border-r-2",
// // //         ].map((cls, i) => (
// // //           <motion.div key={i}
// // //             initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 0.35, scale: 1 }}
// // //             transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
// // //             className={`absolute w-12 h-12 border-[#C9A24D] ${cls}`}
// // //           />
// // //         ))}

// // //         {/* subtle gold grid */}
// // //         <div className="absolute inset-0 opacity-[0.04]" style={{
// // //           backgroundImage:
// // //             "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
// // //             "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
// // //         }} />

// // //         <motion.div style={{ y: heroY, opacity: heroOpa }}
// // //           className="relative max-w-5xl mx-auto px-6 py-32 md:py-40 w-full text-center"
// // //         >
// // //           {/* eyebrow */}
// // //           <motion.p variants={fadeUp} initial="hidden" animate="show" custom={0}
// // //             className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3"
// // //           >
// // //             <span className="inline-block w-8 h-px bg-[#C9A24D]" />
// // //             S Jain &amp; Attorneys · Legal Insights
// // //             <span className="inline-block w-8 h-px bg-[#C9A24D]" />
// // //           </motion.p>

// // //           {/* H1 */}
// // //           <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
// // //             className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white mb-8 max-w-5xl mx-auto"
// // //           >
// // //             Case Studies &amp; Blogs That{" "}
// // //             <span className="text-[#C9A24D]">Empower You Through Life's Legal Challenges</span>
// // //           </motion.h1>

// // //           {/* subtext */}
// // //           <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
// // //             className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed"
// // //           >
// // //             When legal problems feel overwhelming, the right guidance can bring clarity and
// // //             confidence. Explore our Legal Blogs in Bangalore — practical insights, real-world
// // //             solutions, and case studies that help you protect your rights and move forward
// // //             with strength.
// // //           </motion.p>
// // //         </motion.div>

// // //         {/* scroll indicator */}
// // //         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
// // //           className="absolute bottom-10 left-1/2 -translate-x-1/2"
// // //         >
// // //           <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}
// // //             className="w-px h-12 bg-gradient-to-b from-[#C9A24D] to-transparent"
// // //           />
// // //         </motion.div>
// // //       </section>

// // //       {/* ══════════════════════════════ BLOG LISTING ══════════════════════════ */}
// // //       <section className="py-28 px-6 bg-[#0B0F14] relative">
// // //         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// // //         <div className="max-w-6xl mx-auto">
// // //           {/* section heading */}
// // //           <motion.div
// // //             variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //             className="mb-16"
// // //           >
// // //             <motion.span
// // //               initial={{ width: 0 }} whileInView={{ width: 56 }} viewport={{ once: true }}
// // //               transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
// // //               className="block h-[3px] bg-[#C9A24D] mb-5"
// // //             />
// // //             <h2 className="text-3xl md:text-4xl font-bold text-white">Blog Listing</h2>
// // //           </motion.div>

// // //           <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //             className="grid md:grid-cols-2 gap-10"
// // //           >
// // //             {blogs.map((blog, i) => (
// // //               <motion.article key={blog.slug} variants={scaleIn} custom={i * 0.15}
// // //                 whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(201,162,77,0.15)" }}
// // //                 className="bg-[#111318] border border-[#C9A24D]/20 hover:border-[#C9A24D]/60 rounded-xl overflow-hidden group transition-all duration-300 flex flex-col"
// // //               >
// // //                 {/* image */}
// // //                 <div className="relative w-full h-60 overflow-hidden">
// // //                   <Image
// // //                     src={blog.image}
// // //                     alt={blog.title}
// // //                     fill
// // //                     className="object-cover group-hover:scale-105 transition-transform duration-500"
// // //                   />
// // //                   {/* category badge */}
// // //                   <div className="absolute top-4 left-4 bg-black/70 border border-[#C9A24D]/40 px-3 py-1 rounded-full">
// // //                     <p className="text-[#C9A24D] text-xs font-semibold tracking-wide">
// // //                       {blog.category}
// // //                     </p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="p-8 flex flex-col flex-1">
// // //                   {/* author + date */}
// // //                   <p className="text-gray-500 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
// // //                     <span className="inline-block w-4 h-px bg-[#C9A24D]/40" />
// // //                     By {blog.author} &nbsp;·&nbsp; {blog.date}
// // //                   </p>

// // //                   {/* H3 title */}
// // //                   <h3 className="text-xl font-bold text-white group-hover:text-[#C9A24D] transition-colors duration-200 mb-4 leading-snug">
// // //                     {blog.title}
// // //                   </h3>

// // //                   {/* divider */}
// // //                   <div className="w-8 h-[2px] bg-[#C9A24D]/30 group-hover:bg-[#C9A24D] transition-colors duration-300 mb-4" />

// // //                   {/* excerpt */}
// // //                   <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
// // //                     {blog.excerpt}
// // //                   </p>

// // //                   {/* read more */}
// // //                   <Link href={`/legal-advice-bangalore/${blog.slug}`}
// // //                     className="inline-flex items-center gap-2 text-[#C9A24D] font-semibold text-sm group-hover:gap-3 transition-all duration-200 self-start"
// // //                   >
// // //                     Read More
// // //                     <span className="text-base">→</span>
// // //                   </Link>
// // //                 </div>
// // //               </motion.article>
// // //             ))}
// // //           </motion.div>
// // //         </div>
// // //       </section>

// // //       {/* ══════════════════════════ FINAL CTA ═════════════════════════════════ */}
// // //       <section className="py-24 px-6 bg-black text-white text-center relative overflow-hidden">
// // //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
// // //         <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// // //         {[0, 1, 2].map((i) => (
// // //           <motion.div key={i}
// // //             initial={{ scale: 0.6, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
// // //             viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.2 }}
// // //             className="absolute rounded-full border border-[#C9A24D]/10 pointer-events-none"
// // //             style={{ width: `${40 + i * 30}%`, height: `${60 + i * 30}%`, top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
// // //           />
// // //         ))}

// // //         <motion.div variants={scaleIn} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //           className="relative max-w-3xl mx-auto border border-[#C9A24D]/30 rounded-2xl px-10 py-16"
// // //         >
// // //           {["top-4 left-4 border-t-2 border-l-2","top-4 right-4 border-t-2 border-r-2","bottom-4 left-4 border-b-2 border-l-2","bottom-4 right-4 border-b-2 border-r-2"].map((cls, i) => (
// // //             <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
// // //           ))}

// // //           <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
// // //             className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold"
// // //           >
// // //             S Jain &amp; Attorneys · Legal Blogs in Bangalore
// // //           </motion.p>

// // //           <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={1}
// // //             className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
// // //           >
// // //             Need Legal Guidance? Consult Our Expert Team.
// // //           </motion.h2>

// // //           <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={2}
// // //             className="text-gray-300 text-lg mb-10 leading-relaxed"
// // //           >
// // //             Our experienced lawyers in Bangalore are ready to assist with your legal concerns —
// // //             whether property, family, criminal, corporate, or cross-border matters.
// // //           </motion.p>

// // //           <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={3}
// // //             className="flex flex-col sm:flex-row gap-4 justify-center"
// // //           >
// // //             <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
// // //               <Link href="/legal-consultation-in-bangalore"
// // //                 className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
// // //               >
// // //                 Book Consultation
// // //               </Link>
// // //             </motion.div>
// // //             <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
// // //               <Link href="/contact"
// // //                 className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
// // //               >
// // //                 Request Call Back
// // //               </Link>
// // //             </motion.div>
// // //           </motion.div>

// // //           <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={4}
// // //             className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
// // //           >
// // //             <span className="inline-block w-4 h-px bg-gray-600" />
// // //             All matters handled with complete confidentiality and legal discretion.
// // //             <span className="inline-block w-4 h-px bg-gray-600" />
// // //           </motion.p>
// // //         </motion.div>
// // //       </section>

// // //       <Footer />
// // //     </>
// // //   );
// // // }




// // import Link from "next/link";
// // import Image from "next/image";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import { blogs } from "./blogs";



// // // ─── Only these 4 slugs are shown on the listing page ─────────────────────────

// // const FEATURED_SLUGS = [
// //   "property-disputes-verification-checklist",
// //   "domestic-violence-laws-in-india",
// //   "alimony-and-maintenance-laws-2026",
// //   "cyber-fraud-protection-guide",
// // ];

// // // ─── PAGE ─────────────────────────────────────────────────────────────────────

// // export default function LegalBlogsPage() {
// //   const featuredBlogs = FEATURED_SLUGS.map((slug) =>
// //     blogs.find((b) => b.slug === slug)
// //   ).filter(Boolean);

// //   return (
// //     <>
// //       <Navbar />

// //       {/* ══════════════════════════════ HERO ═══════════════════════════════════ */}
// //       <section className="relative bg-black text-white overflow-hidden min-h-[60vh] flex items-center">
// //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// //         {[
// //           "top-8 left-8 border-t-2 border-l-2",
// //           "top-8 right-8 border-t-2 border-r-2",
// //           "bottom-8 left-8 border-b-2 border-l-2",
// //           "bottom-8 right-8 border-b-2 border-r-2",
// //         ].map((cls, i) => (
// //           <div
// //             key={i}
// //             className={`absolute w-12 h-12 border-[#C9A24D] opacity-30 ${cls}`}
// //           />
// //         ))}

// //         <div
// //           className="absolute inset-0 opacity-[0.04]"
// //           style={{
// //             backgroundImage:
// //               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
// //               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
// //           }}
// //         />

// //         <div className="relative max-w-5xl mx-auto px-6 py-32 md:py-40 w-full text-center">
// //           <p className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3">
// //             <span className="inline-block w-8 h-px bg-[#C9A24D]" />
// //             S Jain &amp; Attorneys · Legal Insights
// //             <span className="inline-block w-8 h-px bg-[#C9A24D]" />
// //           </p>

// //           {/* H1 */}
// //           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white mb-8 max-w-5xl mx-auto">
// //             Case Studies &amp; Blogs That{" "}
// //             <span className="text-[#C9A24D]">
// //               Empower You Through Life&apos;s Legal Challenges
// //             </span>
// //           </h1>

// //           <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
// //             When legal problems feel overwhelming, the right guidance can bring clarity
// //             and confidence. Explore our{" "}
// //             <strong className="text-white">Legal Blogs in Bangalore</strong> — practical
// //             insights, and real-world solutions that help you protect your rights and move
// //             forward with strength.
// //           </p>
// //         </div>
// //       </section>

// //       {/* ══════════════════════════════ BLOG LISTING ══════════════════════════ */}
// //       <section className="py-28 px-6 bg-[#0B0F14] relative">
// //         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

// //         <div className="max-w-6xl mx-auto">

// //           {/* H2 */}
// //           <div className="mb-16">
// //             <span className="block h-[3px] w-14 bg-[#C9A24D] mb-5" />
// //             <h2 className="text-3xl md:text-4xl font-bold text-white">
// //               Blog Listing
// //             </h2>
// //           </div>

// //           {/* Row 1 — 3 cards */}
// //           <div className="grid md:grid-cols-3 gap-8 mb-8">
// //             {featuredBlogs.slice(0, 3).map((blog) => (
// //               <BlogCard key={blog.slug} blog={blog} />
// //             ))}
// //           </div>

// //           {/* Row 2 — 1 card left-aligned (or centred) */}
// //           <div className="grid md:grid-cols-3 gap-8">
// //             {featuredBlogs.slice(3).map((blog) => (
// //               <BlogCard key={blog.slug} blog={blog} />
// //             ))}
// //           </div>

// //         </div>
// //       </section>

// //       {/* ══════════════════════════ FINAL CTA ════════════════════════════════ */}
// //       <section className="py-24 px-6 bg-black text-white text-center relative overflow-hidden">
// //         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
// //         <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

// //         <div className="relative max-w-3xl mx-auto border border-[#C9A24D]/30 rounded-2xl px-10 py-16">
// //           {[
// //             "top-4 left-4 border-t-2 border-l-2",
// //             "top-4 right-4 border-t-2 border-r-2",
// //             "bottom-4 left-4 border-b-2 border-l-2",
// //             "bottom-4 right-4 border-b-2 border-r-2",
// //           ].map((cls, i) => (
// //             <span
// //               key={i}
// //               className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`}
// //             />
// //           ))}

// //           <p className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
// //             S Jain &amp; Attorneys · Legal Blogs in Bangalore
// //           </p>

// //           <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
// //             Need Legal Guidance? Consult Our Expert Team.
// //           </h2>

// //           <p className="text-gray-300 text-lg mb-10 leading-relaxed">
// //             Our experienced lawyers in Bangalore are ready to assist with your legal
// //             concerns — whether property, family, criminal, corporate, or cross-border
// //             matters.
// //           </p>

// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <Link
// //               href="/legal-consultation-in-bangalore"
// //               className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
// //             >
// //               Book Consultation
// //             </Link>
// //             <Link
// //               href="/contact"
// //               className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
// //             >
// //               Request Call Back
// //             </Link>
// //           </div>

// //           <p className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2">
// //             <span className="inline-block w-4 h-px bg-gray-600" />
// //             All matters handled with complete confidentiality and legal discretion.
// //             <span className="inline-block w-4 h-px bg-gray-600" />
// //           </p>
// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }

// // // ─── REUSABLE BLOG CARD ───────────────────────────────────────────────────────

// // function BlogCard({ blog }: { blog: (typeof blogs)[number] }) {
// //   return (
// //     <article className="bg-[#111318] border border-[#C9A24D]/20 hover:border-[#C9A24D]/60 rounded-xl overflow-hidden group transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(201,162,77,0.12)]">
// //       {/* Image */}
// //       <div className="relative w-full h-52 overflow-hidden flex-shrink-0">
// //         <Image
// //           src={blog.image}
// //           alt={blog.title}
// //           fill
// //           className="object-cover group-hover:scale-105 transition-transform duration-500"
// //           unoptimized
// //         />
// //         <div className="absolute top-3 left-3 bg-black/75 border border-[#C9A24D]/40 px-3 py-1 rounded-full">
// //           <p className="text-[#C9A24D] text-[11px] font-semibold tracking-wide">
// //             {blog.category}
// //           </p>
// //         </div>
// //       </div>

// //       {/* Content */}
// //       <div className="p-6 flex flex-col flex-1">
// //         <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
// //           <span className="inline-block w-4 h-px bg-[#C9A24D]/40" />
// //           By {blog.author}&nbsp;·&nbsp;{blog.date}
// //         </p>

// //         {/* H3 */}
// //         <h3 className="text-base font-bold text-white group-hover:text-[#C9A24D] transition-colors duration-200 mb-3 leading-snug">
// //           {blog.title}
// //         </h3>

// //         <div className="w-8 h-[2px] bg-[#C9A24D]/30 group-hover:bg-[#C9A24D] transition-colors duration-300 mb-3" />

// //         <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-4">
// //           {blog.excerpt}
// //         </p>

// //         <Link
// //           href={`/legal-blogs-in-bangalore/${blog.slug}`}
// //           className="inline-flex items-center gap-2 text-[#C9A24D] font-semibold text-sm group-hover:gap-3 transition-all duration-200 self-start"
// //         >
// //           Read More <span>→</span>
// //         </Link>
// //       </div>
// //     </article>
// //   );
// // }

// import Link from "next/link";
// import Image from "next/image";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { blogs } from "./blogs";

// // ─── Show ONLY these 3 blogs ──────────────────────────────────────────────────

// const FEATURED_SLUGS = [
//   "property-disputes-verification-checklist",
//   "domestic-violence-laws-in-india",
//   "alimony-and-maintenance-laws-2026",
// ];

// export default function LegalBlogsPage() {
//   const featuredBlogs = FEATURED_SLUGS.map((slug) =>
//     blogs.find((b) => b.slug === slug)
//   ).filter(Boolean);

//   return (
//     <>
//       <Navbar />

//       {/* ══════════════════════════ HERO ══════════════════════════════════════ */}
//       <section className="relative bg-black text-white overflow-hidden min-h-[60vh] flex items-center">
//         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//         {[
//           "top-8 left-8 border-t-2 border-l-2",
//           "top-8 right-8 border-t-2 border-r-2",
//           "bottom-8 left-8 border-b-2 border-l-2",
//           "bottom-8 right-8 border-b-2 border-r-2",
//         ].map((cls, i) => (
//           <div key={i} className={`absolute w-12 h-12 border-[#C9A24D] opacity-30 ${cls}`} />
//         ))}

//         <div
//           className="absolute inset-0 opacity-[0.04]"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
//               "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
//           }}
//         />

//         <div className="relative max-w-5xl mx-auto px-6 py-32 md:py-40 w-full text-center">
//           <p className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3">
//             <span className="inline-block w-8 h-px bg-[#C9A24D]" />
//             S Jain &amp; Attorneys · Legal Insights
//             <span className="inline-block w-8 h-px bg-[#C9A24D]" />
//           </p>

//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white mb-8 max-w-5xl mx-auto">
//             Case Studies &amp; Blogs That{" "}
//             <span className="text-[#C9A24D]">
//               Empower You Through Life&apos;s Legal Challenges
//             </span>
//           </h1>

//           <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
//             When legal problems feel overwhelming, the right guidance can bring clarity
//             and confidence. Explore our{" "}
//             <strong className="text-white">Legal Blogs in Bangalore</strong> — practical
//             insights, and real-world solutions that help you protect your rights and move
//             forward with strength.
//           </p>
//         </div>
//       </section>

//       {/* ══════════════════════════ BLOG LISTING ══════════════════════════════ */}
//       <section className="py-28 px-6 bg-[#0B0F14] relative">
//         <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

//         <div className="max-w-6xl mx-auto">

//           <div className="mb-16">
//             <span className="block h-[3px] w-14 bg-[#C9A24D] mb-5" />
//             <h2 className="text-3xl md:text-4xl font-bold text-white">Blog Listing</h2>
//           </div>

//           {/* Exactly 3 cards in one row */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {featuredBlogs.map((blog) => (
//               <BlogCard key={blog.slug} blog={blog} />
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* ══════════════════════════ FINAL CTA ════════════════════════════════ */}
//       <section className="py-24 px-6 bg-black text-white text-center relative overflow-hidden">
//         <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
//         <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

//         <div className="relative max-w-3xl mx-auto border border-[#C9A24D]/30 rounded-2xl px-10 py-16">
//           {[
//             "top-4 left-4 border-t-2 border-l-2",
//             "top-4 right-4 border-t-2 border-r-2",
//             "bottom-4 left-4 border-b-2 border-l-2",
//             "bottom-4 right-4 border-b-2 border-r-2",
//           ].map((cls, i) => (
//             <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
//           ))}

//           <p className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
//             S Jain &amp; Attorneys · Legal Blogs in Bangalore
//           </p>

//           <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
//             Need Legal Guidance? Consult Our Expert Team.
//           </h2>

//           <p className="text-gray-300 text-lg mb-10 leading-relaxed">
//             Our experienced lawyers in Bangalore are ready to assist with your legal
//             concerns — whether property, family, criminal, corporate, or cross-border matters.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/legal-consultation-in-bangalore"
//               className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
//             >
//               Book Consultation
//             </Link>
//             <Link
//               href="/contact"
//               className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
//             >
//               Request Call Back
//             </Link>
//           </div>

//           <p className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2">
//             <span className="inline-block w-4 h-px bg-gray-600" />
//             All matters handled with complete confidentiality and legal discretion.
//             <span className="inline-block w-4 h-px bg-gray-600" />
//           </p>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

// // ─── BLOG CARD ────────────────────────────────────────────────────────────────

// function BlogCard({ blog }) {
//   return (
//     <article className="bg-[#111318] border border-[#C9A24D]/20 hover:border-[#C9A24D]/60 rounded-xl overflow-hidden group transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(201,162,77,0.12)]">

//       <div className="relative w-full h-52 overflow-hidden flex-shrink-0">
//         <Image
//           src={blog.image}
//           alt={blog.title}
//           fill
//           className="object-cover group-hover:scale-105 transition-transform duration-500"
//           unoptimized
//         />
//         <div className="absolute top-3 left-3 bg-black/75 border border-[#C9A24D]/40 px-3 py-1 rounded-full">
//           <p className="text-[#C9A24D] text-[11px] font-semibold tracking-wide">
//             {blog.category}
//           </p>
//         </div>
//       </div>

//       <div className="p-6 flex flex-col flex-1">
//         <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
//           <span className="inline-block w-4 h-px bg-[#C9A24D]/40" />
//           By {blog.author}&nbsp;·&nbsp;{blog.date}
//         </p>

//         <h3 className="text-base font-bold text-white group-hover:text-[#C9A24D] transition-colors duration-200 mb-3 leading-snug">
//           {blog.title}
//         </h3>

//         <div className="w-8 h-[2px] bg-[#C9A24D]/30 group-hover:bg-[#C9A24D] transition-colors duration-300 mb-3" />

//         <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-4">
//           {blog.excerpt}
//         </p>

//         <Link
//           href={`/legal-advice-bangalore/${blog.slug}`}
//           className="inline-flex items-center gap-2 text-[#C9A24D] font-semibold text-sm group-hover:gap-3 transition-all duration-200 self-start"
//         >
//           Read More <span>→</span>
//         </Link>
//       </div>

//     </article>
//   );
// }



import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { blogs } from "./blogs";

// ─── Show ONLY these 3 blogs ──────────────────────────────────────────────────

const FEATURED_SLUGS = [
  "property-disputes-verification-checklist",
  "domestic-violence-laws-in-india",
  "alimony-and-maintenance-laws-2026",
];

export default function LegalBlogsPage() {
  const featuredBlogs = FEATURED_SLUGS.map((slug) =>
    blogs.find((b) => b.slug === slug)
  ).filter(Boolean);

  return (
    <>
      <Navbar />

      {/* ══════════════════════════ HERO ══════════════════════════════════════ */}
      <section className="relative bg-black text-white overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

        {[
          "top-8 left-8 border-t-2 border-l-2",
          "top-8 right-8 border-t-2 border-r-2",
          "bottom-8 left-8 border-b-2 border-l-2",
          "bottom-8 right-8 border-b-2 border-r-2",
        ].map((cls, i) => (
          <div key={i} className={`absolute w-12 h-12 border-[#C9A24D] opacity-30 ${cls}`} />
        ))}

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
              "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-32 md:py-40 w-full text-center">
          <p className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3">
            <span className="inline-block w-8 h-px bg-[#C9A24D]" />
            S Jain &amp; Attorneys · Legal Insights
            <span className="inline-block w-8 h-px bg-[#C9A24D]" />
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-white mb-8 max-w-5xl mx-auto">
            Case Studies &amp; Blogs That{" "}
            <span className="text-[#C9A24D]">
              Empower You Through Life&apos;s Legal Challenges
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            When legal problems feel overwhelming, the right guidance can bring clarity
            and confidence. Explore our{" "}
            <strong className="text-white">Legal Blogs in Bangalore</strong> — practical
            insights, and real-world solutions that help you protect your rights and move
            forward with strength.
          </p>
        </div>
      </section>

      {/* ══════════════════════════ BLOG LISTING ══════════════════════════════ */}
      <section className="py-28 px-6 bg-[#0B0F14] relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

        <div className="max-w-6xl mx-auto">

          <div className="mb-16">
            <span className="block h-[3px] w-14 bg-[#C9A24D] mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Blog Listing</h2>
          </div>

          {/* Exactly 3 cards in one row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════ FINAL CTA ════════════════════════════════ */}
      <section className="py-24 px-6 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

        <div className="relative max-w-3xl mx-auto border border-[#C9A24D]/30 rounded-2xl px-10 py-16">
          {[
            "top-4 left-4 border-t-2 border-l-2",
            "top-4 right-4 border-t-2 border-r-2",
            "bottom-4 left-4 border-b-2 border-l-2",
            "bottom-4 right-4 border-b-2 border-r-2",
          ].map((cls, i) => (
            <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
          ))}

          <p className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
            S Jain &amp; Attorneys · Legal Blogs in Bangalore
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Need Legal Guidance? Consult Our Expert Team.
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Our experienced lawyers in Bangalore are ready to assist with your legal
            concerns — whether property, family, criminal, corporate, or cross-border matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/legal-consultation-in-bangalore"
              className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Book Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Request Call Back
            </Link>
          </div>

          <p className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-px bg-gray-600" />
            All matters handled with complete confidentiality and legal discretion.
            <span className="inline-block w-4 h-px bg-gray-600" />
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

// ─── BLOG CARD ────────────────────────────────────────────────────────────────

function BlogCard({ blog }) {
  return (
    <article className="bg-[#111318] border border-[#C9A24D]/20 hover:border-[#C9A24D]/60 rounded-xl overflow-hidden group transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(201,162,77,0.12)]">

      <div className="relative w-full h-52 overflow-hidden flex-shrink-0">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute top-3 left-3 bg-black/75 border border-[#C9A24D]/40 px-3 py-1 rounded-full">
          <p className="text-[#C9A24D] text-[11px] font-semibold tracking-wide">
            {blog.category}
          </p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-[#C9A24D]/40" />
          By {blog.author}&nbsp;·&nbsp;{blog.date}
        </p>

        <h3 className="text-base font-bold text-white group-hover:text-[#C9A24D] transition-colors duration-200 mb-3 leading-snug">
          {blog.title}
        </h3>

        <div className="w-8 h-[2px] bg-[#C9A24D]/30 group-hover:bg-[#C9A24D] transition-colors duration-300 mb-3" />

        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1 line-clamp-4">
          {blog.excerpt}
        </p>

        <Link
          href={`/legal-advice-bangalore/${blog.slug}`}
          className="inline-flex items-center gap-2 text-[#C9A24D] font-semibold text-sm group-hover:gap-3 transition-all duration-200 self-start"
        >
          Read More <span>→</span>
        </Link>
      </div>

    </article>
  );
}