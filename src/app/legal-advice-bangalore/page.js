// // // // 
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { blogs } from "./blogs";

// // // export default function LegalAdviceBangalore() {
// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // //         <div className="max-w-4xl mx-auto">

// // //           <div className="text-center mb-16">
// // //             <h1 className="text-4xl md:text-5xl font-semibold">
// // //               Legal Insights & Articles
// // //             </h1>
// // //           </div>

// // //           <div className="grid md:grid-cols-2 gap-10">
// // //             {blogs.map((blog) => (
// // //               <div key={blog.slug} className="bg-[#111] rounded-xl overflow-hidden">

// // //                 <div className="relative w-full h-56">
// // //                   <Image
// // //                     src={blog.sections[0].image}
// // //                     alt={blog.title}
// // //                     fill
// // //                     className="object-cover"
// // //                   />
// // //                 </div>

// // //                 <div className="p-8">
// // //                   <h2 className="text-2xl font-semibold mt-6">
// // //                     {blog.title}
// // //                   </h2>

// // //                   <p className="text-gray-400 mt-4 text-sm">
// // //                     By {blog.author} • {blog.date}
// // //                   </p>

// // //                   <p className="text-gray-400 mt-6 text-sm">
// // //                     {blog.intro.replace(/<[^>]+>/g, "").slice(0, 160)}...
// // //                   </p>

// // //                   <Link
// // //                     href={`/legal-advice-bangalore/${blog.slug}`}
// // //                     className="inline-block mt-6 text-[#C9A24D] font-semibold"
// // //                   >
// // //                     READ MORE →
// // //                   </Link>
// // //                 </div>

// // //               </div>
// // //             ))}
// // //           </div>

// // //         </div>
// // //       </section>
// // //       <Footer />
// // //     </>
// // //   );
// // // }


// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";
// // import Link from "next/link";

// // export const metadata = {
// //   title: "Legal Advice in Bangalore",
// //   description:
// //     "Get expert Legal Advice in Bangalore with trusted legal blogs, Bangalore law updates, court case insights & practical legal articles from experienced lawyers.",
// // };

// // export default function LegalAdviceInBangalore() {
// //   return (
// //     <>
// //       <Navbar />

// //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// //         <div className="max-w-6xl mx-auto">

// //           {/* H1 */}
// //           <h1 className="text-4xl md:text-5xl font-semibold mb-8">
// //             Legal Advice in Bangalore – Expert Legal Blogs & Court Case Insights
// //           </h1>

// //           <div className="text-gray-300 text-lg leading-relaxed mb-16">
// //             <h2 className="text-3xl font-semibold mb-6">
// //               Legal Advice in Bangalore for Clarity, Protection & Confidence
// //             </h2>

// //             <p className="mb-4">
// //               When legal problems feel overwhelming, the right guidance can bring clarity and confidence.
// //             </p>

// //             <p>
// //               Explore our Legal Blogs, practical insights, and real-world solutions that help you protect your rights and move forward with strength.
// //             </p>
// //           </div>

// //           {/* BLOG LISTING SECTION */}
// //           <h2 className="text-3xl font-semibold mb-12 border-b border-gray-700 pb-4">
// //             Blog Listing Section
// //           </h2>

// //           <div className="space-y-16">

// //             {/* Blog 1 */}
// //             <div>
// //               <h3 className="text-2xl font-semibold">
// //                 Guide to Filing an FIR in India: Step-by-Step Legal Process & Tips
// //               </h3>

// //               <p className="text-gray-400 text-sm mt-2">
// //                 Category: Criminal Law | Author: By S Jain & Attorneys | Date: March 2026
// //               </p>

// //               <p className="text-gray-300 mt-4 leading-relaxed">
// //                 Learn the complete legal process for filing an FIR in India, required documents,
// //                 police procedures, and how to respond if your complaint is refused.
// //                 Practical Legal Advice in Bangalore for citizens facing criminal issues.
// //               </p>

// //               <Link
// //                 href="#"
// //                 className="inline-block mt-4 text-[#C9A24D] font-semibold"
// //               >
// //                 Read More →
// //               </Link>
// //             </div>

// //             {/* Blog 2 */}
// //             <div>
// //               <h3 className="text-2xl font-semibold">
// //                 What to Do When Arrested in India: Know Your Legal Rights & Defenses
// //               </h3>

// //               <p className="text-gray-400 text-sm mt-2">
// //                 Category: Criminal Defense | Author: By S Jain & Attorneys | Date: March 2026
// //               </p>

// //               <p className="text-gray-300 mt-4 leading-relaxed">
// //                 Arrested or received a police notice? Understand your constitutional rights,
// //                 bail procedures, and immediate legal remedies.
// //                 This guide explains key protections and important steps during criminal Court Cases.
// //               </p>

// //               <Link
// //                 href="#"
// //                 className="inline-block mt-4 text-[#C9A24D] font-semibold"
// //               >
// //                 Read More →
// //               </Link>
// //             </div>

// //             {/* Blog 3 */}
// //             <div>
// //               <h3 className="text-2xl font-semibold">
// //                 What You Need to Know About Alimony and Maintenance Laws in 2026
// //               </h3>

// //               <p className="text-gray-400 text-sm mt-2">
// //                 Category: Divorce & Family Law | Author: By S Jain & Attorneys | Date: March 2026
// //               </p>

// //               <p className="text-gray-300 mt-4 leading-relaxed">
// //                 Confused about alimony and maintenance calculations?
// //                 This detailed article explains eligibility, calculation factors,
// //                 and recent Bangalore Law Updates affecting family court proceedings.
// //               </p>

// //               <Link
// //                 href="#"
// //                 className="inline-block mt-4 text-[#C9A24D] font-semibold"
// //               >
// //                 Read More →
// //               </Link>
// //             </div>

// //             {/* Blog 4 */}
// //             <div>
// //               <h3 className="text-2xl font-semibold">
// //                 Common Misconceptions About Cyber Fraud & How to Protect Yourself
// //               </h3>

// //               <p className="text-gray-400 text-sm mt-2">
// //                 Category: Cyber Law | Author: By S Jain & Attorneys | Date: March 2026
// //               </p>

// //               <p className="text-gray-300 mt-4 leading-relaxed">
// //                 Cyber fraud cases are rising rapidly. Learn common legal myths,
// //                 reporting procedures, and prevention strategies.
// //                 Get practical Legal Advice on protecting your finances and digital identity.
// //               </p>

// //               <Link
// //                 href="#"
// //                 className="inline-block mt-4 text-[#C9A24D] font-semibold"
// //               >
// //                 Read More →
// //               </Link>
// //             </div>

// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Link from "next/link";

// export const metadata = {
//   title: "Legal Advice in Bangalore",
//   description:
//     "Get expert Legal Advice in Bangalore with trusted legal blogs, Bangalore law updates, court case insights & practical legal articles from experienced lawyers.",
// };

// const blogs = [
//   {
//     slug: "guide-to-filing-fir-in-india",
//     title:
//       "Guide to Filing an FIR in India: Step-by-Step Legal Process & Tips",
//     category: "Criminal Law",
//     author: "S Jain & Attorneys",
//     date: "March 2026",
//     description:
//       "Learn the complete legal process for filing an FIR in India, required documents, police procedures, and how to respond if your complaint is refused.",
//   },
//   {
//     slug: "what-to-do-when-arrested-in-india",
//     title:
//       "What to Do When Arrested in India: Know Your Legal Rights & Defenses",
//     category: "Criminal Defense",
//     author: "S Jain & Attorneys",
//     date: "March 2026",
//     description:
//       "Understand your constitutional rights, bail procedures, and immediate legal remedies during criminal court cases.",
//   },
//   {
//     slug: "alimony-maintenance-laws-2026",
//     title:
//       "What You Need to Know About Alimony and Maintenance Laws in 2026",
//     category: "Divorce & Family Law",
//     author: "S Jain & Attorneys",
//     date: "March 2026",
//     description:
//       "Detailed explanation of eligibility, calculation factors, and recent Bangalore law updates affecting family court proceedings.",
//   },
//   {
//     slug: "cyber-fraud-misconceptions",
//     title:
//       "Common Misconceptions About Cyber Fraud & How to Protect Yourself",
//     category: "Cyber Law",
//     author: "S Jain & Attorneys",
//     date: "March 2026",
//     description:
//       "Learn common cyber fraud myths, reporting procedures, and prevention strategies to protect your finances and digital identity.",
//   },
// ];

// export default function LegalAdviceInBangalore() {
//   return (
//     <>
//       <Navbar />

//       <section className="bg-black text-white py-24 px-6 min-h-screen">
//         <div className="max-w-7xl mx-auto">

//           {/* H1 */}
//           <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6">
//             Legal Advice in Bangalore – Expert Legal Blogs & Court Case Insights
//           </h1>

//           <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16">
//             When legal problems feel overwhelming, the right guidance can bring clarity and confidence.
//             Explore practical insights, Bangalore law updates, and expert legal articles
//             that help protect your rights.
//           </p>

//           {/* BLOG CARD SECTION */}
//           <h2 className="text-3xl font-semibold mb-12 text-center">
//             Blog Listing Section
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

//             {blogs.map((blog) => (
//               <div
//                 key={blog.slug}
//                 className="bg-[#111] rounded-xl p-8 hover:bg-[#161616] transition duration-300 border border-gray-800"
//               >
//                 <p className="text-sm text-[#C9A24D] mb-2">
//                   {blog.category}
//                 </p>

//                 <h3 className="text-2xl font-semibold mb-4">
//                   {blog.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm mb-4">
//                   By {blog.author} • {blog.date}
//                 </p>

//                 <p className="text-gray-300 text-sm leading-relaxed mb-6">
//                   {blog.description}
//                 </p>

//                 <Link
//                   href={`/legal-advice-in-bangalore/${blog.slug}`}
//                   className="text-[#C9A24D] font-semibold"
//                 >
//                   Read More →
//                 </Link>
//               </div>
//             ))}

//           </div>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// // }

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Link from "next/link";
// import { blogs } from "./blogs";

// export const metadata = {
//   title: "Legal Advice in Bangalore",
//   description:
//     "Get expert Legal Advice in Bangalore with trusted legal blogs, Bangalore law updates, court case insights & practical legal articles.",
// };

// export default function LegalAdviceInBangalore() {
//   return (
//     <>
//       <Navbar />

//       <section className="bg-black text-white py-24 px-6 min-h-screen">
//         <div className="max-w-7xl mx-auto">

//           <h1 className="text-4xl font-semibold text-center mb-16">
//             Legal Advice in Bangalore – Expert Legal Blogs & Court Case Insights
//           </h1>

//           <div className="grid md:grid-cols-2 gap-10">
//             {blogs.map((blog) => (
//               <div key={blog.slug} className="bg-[#111] p-8 rounded-xl border border-gray-800">

//                 <p className="text-sm text-[#C9A24D]">{blog.category}</p>
                

//                 <h3 className="text-2xl font-semibold mt-3 mb-3">
//                   {blog.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm mb-4">
//                   By {blog.author} • {blog.date}
//                 </p>

//                 <Link
//                   href={`/legal-advice-bangalore/${blog.slug}`}
//                   className="text-[#C9A24D] font-semibold"
//                 >
//                   Read More →
//                 </Link>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "./blogs";

export const metadata = {
  title: "Legal Advice in Bangalore",
  description:
    "Get expert Legal Advice in Bangalore with trusted legal blogs, Bangalore law updates, court case insights & practical legal articles.",
};

export default function LegalAdviceInBangalore() {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-24 px-6 min-h-screen">
        <div className="max-w-5xl mx-auto">

          <h1 className="text-4xl font-semibold text-center mb-16">
            Legal Advice in Bangalore – Expert Legal Blogs & Court Case Insights
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            {blogs.map((blog) => (
              <div
                key={blog.slug}
                className="bg-[#111] rounded-xl border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-[#C9A24D]/20 transition"
              >

                {/* Blog Image */}
                <div className="relative w-full h-60">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <p className="text-sm text-[#C9A24D]">{blog.category}</p>

                  <h3 className="text-2xl font-semibold mt-3 mb-3">
                    {blog.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">
                    By {blog.author} • {blog.date}
                  </p>

                  <Link
                    href={`/legal-advice-bangalore/${blog.slug}`}
                    className="text-[#C9A24D] font-semibold"
                  >
                    Read More →
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}