// // // // // // // // // // import Navbar from "../../components/Navbar";
// // // // // // // // // // import Footer from "../../components/Footer";
// // // // // // // // // // import Image from "next/image";
// // // // // // // // // // import Link from "next/link";
// // // // // // // // // // import { blogs } from "../blogs";

// // // // // // // // // // // Generate params for dynamic routing
// // // // // // // // // // export async function generateStaticParams() {
// // // // // // // // // //   return blogs.map((blog) => ({
// // // // // // // // // //     slug: blog.slug,
// // // // // // // // // //   }));
// // // // // // // // // // }

// // // // // // // // // // export default function BlogDetail({ params }) {
// // // // // // // // // //   const blog = blogs.find((b) => b.slug === params.slug);

// // // // // // // // // //   if (!blog) {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className="min-h-screen flex items-center justify-center text-gray-500">
// // // // // // // // // //         Blog not found.
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       <Navbar />
// // // // // // // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // // // // // // //         <div className="max-w-4xl mx-auto">
// // // // // // // // // //           <div className="relative w-full h-80 rounded-xl overflow-hidden mb-8">
// // // // // // // // // //             <Image
// // // // // // // // // //               src={blog.image}
// // // // // // // // // //               alt={blog.title}
// // // // // // // // // //               fill
// // // // // // // // // //               className="object-cover"
// // // // // // // // // //             />
// // // // // // // // // //           </div>

// // // // // // // // // //           <span className="text-xs bg-[#1f1f1f] px-3 py-1 rounded text-[#C9A24D]">
// // // // // // // // // //             {blog.category}
// // // // // // // // // //           </span>

// // // // // // // // // //           <h1 className="text-4xl md:text-5xl font-semibold mt-4">
// // // // // // // // // //             {blog.title}
// // // // // // // // // //           </h1>

// // // // // // // // // //           <p className="text-gray-400 mt-2 text-sm">
// // // // // // // // // //             By {blog.author} • {blog.date}
// // // // // // // // // //           </p>

// // // // // // // // // //           <div
// // // // // // // // // //             className="mt-8 text-gray-300 prose prose-invert"
// // // // // // // // // //             dangerouslySetInnerHTML={{ __html: blog.content }}
// // // // // // // // // //           ></div>

// // // // // // // // // //           <Link
// // // // // // // // // //             href="/legal-advice-bangalore"
// // // // // // // // // //             className="inline-block mt-8 text-[#C9A24D] font-semibold"
// // // // // // // // // //           >
// // // // // // // // // //             ← Back to Blogs
// // // // // // // // // //           </Link>
// // // // // // // // // //         </div>
// // // // // // // // // //       </section>
// // // // // // // // // //       <Footer />
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // }






// // // // // // // // // import Navbar from "../../components/Navbar";
// // // // // // // // // import Footer from "../../components/Footer";

// // // // // // // // // import Image from "next/image";
// // // // // // // // // import Link from "next/link";
// // // // // // // // // import { blogs } from "../blogs";

// // // // // // // // // export async function generateStaticParams() {
// // // // // // // // //   return blogs.map(blog => ({ slug: blog.slug }));
// // // // // // // // // }

// // // // // // // // // export default function BlogDetail({ params }) {
// // // // // // // // //   const blog = blogs.find(b => b.slug === params.slug);

// // // // // // // // //   if (!blog) {
// // // // // // // // //     return (
// // // // // // // // //       <div className="min-h-screen flex items-center justify-center text-gray-500">
// // // // // // // // //         Blog not found.
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       <Navbar />
// // // // // // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // // // // // //         <div className="max-w-4xl mx-auto">

// // // // // // // // //           <h1 className="text-4xl md:text-5xl font-semibold mb-4">
// // // // // // // // //             {blog.title}
// // // // // // // // //           </h1>

// // // // // // // // //           <p className="text-gray-400 text-sm mb-6">
// // // // // // // // //             By {blog.author} • {blog.date}
// // // // // // // // //           </p>

// // // // // // // // //           {/* Intro */}
// // // // // // // // //           {blog.intro && (
// // // // // // // // //             <div
// // // // // // // // //               className="text-gray-300 prose prose-invert mb-12"
// // // // // // // // //               dangerouslySetInnerHTML={{ __html: blog.intro }}
// // // // // // // // //             />
// // // // // // // // //           )}

// // // // // // // // //           {/* Sections */}
// // // // // // // // //           {blog.sections.map((section) => (
// // // // // // // // //             <div key={section.id} id={section.id} className="mb-16">

// // // // // // // // //               <h3 className="text-2xl font-semibold mb-4">
// // // // // // // // //                 {section.title}
// // // // // // // // //               </h3>

// // // // // // // // //               {section.image && (
// // // // // // // // //                 <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
// // // // // // // // //                   <Image
// // // // // // // // //                     src={section.image}
// // // // // // // // //                     alt={section.title}
// // // // // // // // //                     fill
// // // // // // // // //                     className="object-cover"
// // // // // // // // //                   />
// // // // // // // // //                 </div>
// // // // // // // // //               )}

// // // // // // // // //               {section.content && (
// // // // // // // // //                 <div
// // // // // // // // //                   className="text-gray-300 prose prose-invert"
// // // // // // // // //                   dangerouslySetInnerHTML={{ __html: section.content }}
// // // // // // // // //                 />
// // // // // // // // //               )}

// // // // // // // // //             </div>
// // // // // // // // //           ))}

// // // // // // // // //           <Link
// // // // // // // // //             href="/legal-advice-bangalore"
// // // // // // // // //             className="inline-block mt-8 text-[#C9A24D] font-semibold"
// // // // // // // // //           >
// // // // // // // // //             ← Back to Blogs
// // // // // // // // //           </Link>

// // // // // // // // //         </div>
// // // // // // // // //       </section>
// // // // // // // // //       <Footer />
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // import Navbar from "../../components/Navbar";
// // // // // // // // import Footer from "../../components/Footer";
// // // // // // // // import Image from "next/image";
// // // // // // // // import Link from "next/link";
// // // // // // // // import { blogs } from "../blogs";

// // // // // // // // export async function generateStaticParams() {
// // // // // // // //   return blogs.map(blog => ({ slug: blog.slug }));
// // // // // // // // }

// // // // // // // // export default function BlogDetail({ params }) {
// // // // // // // //   const blog = blogs.find(b => b.slug === params.slug);

// // // // // // // //   if (!blog) {
// // // // // // // //     return <div className="min-h-screen flex items-center justify-center">Blog not found.</div>;
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       <Navbar />
// // // // // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // // // // //         <div className="max-w-4xl mx-auto">

// // // // // // // //           <h1 className="text-4xl md:text-5xl font-semibold mb-4">
// // // // // // // //             {blog.title}
// // // // // // // //           </h1>

// // // // // // // //           <p className="text-gray-400 text-sm mb-6">
// // // // // // // //             By {blog.author} • {blog.date}
// // // // // // // //           </p>

// // // // // // // //           {blog.intro && (
// // // // // // // //             <div
// // // // // // // //               className="text-gray-300 prose prose-invert mb-12"
// // // // // // // //               dangerouslySetInnerHTML={{ __html: blog.intro }}
// // // // // // // //             />
// // // // // // // //           )}

// // // // // // // //           {blog.sections.map((section) => (
// // // // // // // //             <div key={section.id} className="mb-16">

// // // // // // // //               <h3 className="text-2xl font-semibold mb-4">
// // // // // // // //                 {section.title}
// // // // // // // //               </h3>

// // // // // // // //               {section.image && (
// // // // // // // //                 <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
// // // // // // // //                   <Image
// // // // // // // //                     src={section.image}
// // // // // // // //                     alt={section.title}
// // // // // // // //                     fill
// // // // // // // //                     className="object-cover"
// // // // // // // //                   />
// // // // // // // //                 </div>
// // // // // // // //               )}

// // // // // // // //               {section.content && (
// // // // // // // //                 <div
// // // // // // // //                   className="text-gray-300 prose prose-invert"
// // // // // // // //                   dangerouslySetInnerHTML={{ __html: section.content }}
// // // // // // // //                 />
// // // // // // // //               )}

// // // // // // // //             </div>
// // // // // // // //           ))}

// // // // // // // //           <Link
// // // // // // // //             href="/legal-advice-bangalore"
// // // // // // // //             className="inline-block mt-8 text-[#C9A24D] font-semibold"
// // // // // // // //           >
// // // // // // // //             ← Back to Blogs
// // // // // // // //           </Link>

// // // // // // // //         </div>
// // // // // // // //       </section>
// // // // // // // //       <Footer />
// // // // // // // //     </>

// // // // // // // //   );


// // // // // // // // }




// // // // // // // import Navbar from "../../components/Navbar";
// // // // // // // import Footer from "../../components/Footer";
// // // // // // // import Image from "next/image";
// // // // // // // import Link from "next/link";
// // // // // // // import { blogs } from "../blogs";

// // // // // // // export async function generateStaticParams() {
// // // // // // //   return blogs.map((blog) => ({
// // // // // // //     slug: blog.slug,
// // // // // // //   }));
// // // // // // // }

// // // // // // // export default async function BlogDetail({ params }) {
// // // // // // //   // ✅ FIX: unwrap params
// // // // // // //   const { slug } = await params;

// // // // // // //   const blog = blogs.find((b) => b.slug === slug);

// // // // // // //   if (!blog) {
// // // // // // //     return (
// // // // // // //       <div className="min-h-screen flex items-center justify-center text-gray-500">
// // // // // // //         Blog not found.
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       <Navbar />

// // // // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // // // //         <div className="max-w-4xl mx-auto">

// // // // // // //           <h1 className="text-4xl md:text-5xl font-semibold mb-4">
// // // // // // //             {blog.title}
// // // // // // //           </h1>

// // // // // // //           <p className="text-gray-400 text-sm mb-6">
// // // // // // //             By {blog.author} • {blog.date}
// // // // // // //           </p>

// // // // // // //           {/* Intro */}
// // // // // // //           {blog.intro && (
// // // // // // //             <div
// // // // // // //               className="text-gray-300 prose prose-invert mb-12"
// // // // // // //               dangerouslySetInnerHTML={{ __html: blog.intro }}
// // // // // // //             />
// // // // // // //           )}

// // // // // // //           {/* Sections */}
// // // // // // //           {blog.sections.map((section) => (
// // // // // // //             <div key={section.id} id={section.id} className="mb-16">

// // // // // // //               <h3 className="text-2xl font-semibold mb-4">
// // // // // // //                 {section.title}
// // // // // // //               </h3>

// // // // // // //               {section.image && (
// // // // // // //                 <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
// // // // // // //                   <Image
// // // // // // //                     src={section.image}
// // // // // // //                     alt={section.title}
// // // // // // //                     fill
// // // // // // //                     className="object-cover"
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               {section.content && (
// // // // // // //                 <div
// // // // // // //                   className="text-gray-300 prose prose-invert"
// // // // // // //                   dangerouslySetInnerHTML={{ __html: section.content }}
// // // // // // //                 />
// // // // // // //               )}

// // // // // // //             </div>
// // // // // // //           ))}

// // // // // // //           <Link
// // // // // // //             href="/legal-advice-bangalore"
// // // // // // //             className="inline-block mt-8 text-[#C9A24D] font-semibold"
// // // // // // //           >
// // // // // // //             ← Back to Blogs
// // // // // // //           </Link>

// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       <Footer />
// // // // // // //     </>
// // // // // // //   );
// // // // // // // }


// // // // // // import Navbar from "../../components/Navbar";
// // // // // // import Footer from "../../components/Footer";
// // // // // // import { blogs } from "../blogs";
// // // // // // import Image from "next/image";

// // // // // // export async function generateStaticParams() {
// // // // // //   return blogs.map((blog) => ({
// // // // // //     slug: blog.slug,
// // // // // //   }));
// // // // // // }

// // // // // // export async function generateMetadata({ params }) {
// // // // // //   const { slug } = await params;
// // // // // //   const blog = blogs.find((b) => b.slug === slug);

// // // // // //   if (!blog) return {};

// // // // // //   return {
// // // // // //     title: blog.metaTitle,
// // // // // //     description: blog.metaDescription,
// // // // // //   };
// // // // // // }

// // // // // // export default async function BlogDetail({ params }) {
// // // // // //   const { slug } = await params;
// // // // // //   const blog = blogs.find((b) => b.slug === slug);

// // // // // //   if (!blog) {
// // // // // //     return <div className="text-center py-40">Blog not found.</div>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Navbar />

// // // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // // //         <div className="max-w-4xl mx-auto">

// // // // // //           <h1 className="text-4xl font-semibold mb-6">
// // // // // //             {blog.title}
// // // // // //           </h1>

// // // // // //           <p className="text-gray-400 text-sm mb-8">
// // // // // //             By {blog.author} • {blog.date}
// // // // // //           </p>

// // // // // //           {blog.image && (
// // // // // //             <div className="relative w-full h-72 mb-10">
// // // // // //               <Image
// // // // // //                 src={blog.image}
// // // // // //                 alt={blog.title}
// // // // // //                 fill
// // // // // //                 className="object-cover rounded-xl"
// // // // // //               />
// // // // // //             </div>
// // // // // //           )}

// // // // // //           <div
// // // // // //             className="prose prose-invert"
// // // // // //             dangerouslySetInnerHTML={{ __html: blog.content }}
// // // // // //           />

// // // // // //         </div>
// // // // // //       </section>

// // // // // //       <Footer />
// // // // // //     </>
// // // // // //   );
// // // // // // }

// // // // // import { blogs } from "../blogs";
// // // // // import Navbar from "../../components/Navbar";
// // // // // import Footer from "../../components/Footer";
// // // // // import Image from "next/image";

// // // // // export async function generateStaticParams() {
// // // // //   return blogs.map((blog) => ({
// // // // //     slug: blog.slug,
// // // // //   }));
// // // // // }

// // // // // export async function generateMetadata({ params }) {
// // // // //   const { slug } = await params;
// // // // //   const blog = blogs.find((b) => b.slug === slug);

// // // // //   if (!blog) return {};

// // // // //   return {
// // // // //     title: blog.metaTitle,
// // // // //     description: blog.metaDescription,
// // // // //   };
// // // // // }

// // // // // export default async function BlogDetail({ params }) {
// // // // //   const { slug } = await params;   // ✅ VERY IMPORTANT (fix for your previous error)

// // // // //   const blog = blogs.find((b) => b.slug === slug);

// // // // //   if (!blog) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex items-center justify-center text-white bg-black">
// // // // //         Blog not found.
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />

// // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // //         <div className="max-w-4xl mx-auto">

// // // // //           <h1 className="text-4xl font-semibold mb-4">
// // // // //             {blog.title}
// // // // //           </h1>

// // // // //           <p className="text-gray-400 text-sm mb-8">
// // // // //             By {blog.author} • {blog.date}
// // // // //           </p>

// // // // //           {blog.image && (
// // // // //             <div className="relative w-full h-72 mb-10">
// // // // //               <Image
// // // // //                 src={blog.image}
// // // // //                 alt={blog.title}
// // // // //                 fill
// // // // //                 className="object-cover rounded-xl"
// // // // //               />
// // // // //             </div>
// // // // //           )}

// // // // //           <div
// // // // //             className="prose prose-invert"
// // // // //             dangerouslySetInnerHTML={{ __html: blog.content }}
// // // // //           />

// // // // //         </div>
// // // // //       </section>

// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }


// // // // import { blogs } from "../blogs";
// // // // import Navbar from "../../components/Navbar";
// // // // import Footer from "../../components/Footer";
// // // // import Image from "next/image";

// // // // export async function generateStaticParams() {
// // // //   return blogs.map((blog) => ({
// // // //     slug: blog.slug,
// // // //   }));
// // // // }

// // // // export async function generateMetadata({ params }) {
// // // //   const blog = blogs.find((b) => b.slug === params.slug);

// // // //   if (!blog) return {};

// // // //   return {
// // // //     title: blog.metaTitle,
// // // //     description: blog.metaDescription,
// // // //   };
// // // // }

// // // // export default function BlogDetail({ params }) {
// // // //   const blog = blogs.find((b) => b.slug === params.slug);

// // // //   if (!blog) {
// // // //     return (
// // // //       <div className="min-h-screen flex items-center justify-center text-white bg-black">
// // // //         Blog not found.
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <Navbar />

// // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // //         <div className="max-w-4xl mx-auto">

// // // //           <h1 className="text-4xl font-semibold mb-4">
// // // //             {blog.title}
// // // //           </h1>

// // // //           <p className="text-gray-400 text-sm mb-8">
// // // //             By {blog.author} • {blog.date}
// // // //           </p>

// // // //           <div className="relative w-full h-72 mb-10">
// // // //             <Image
// // // //               src={blog.image}
// // // //               alt={blog.title}
// // // //               fill
// // // //               className="object-cover rounded-xl"
// // // //             />
// // // //           </div>

// // // //           <div
// // // //             className="prose prose-invert max-w-none"
// // // //             dangerouslySetInnerHTML={{ __html: blog.content }}
// // // //           />
// // // //         </div>
// // // //       </section>

// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }

// // // import { blogs } from "../blogs";
// // // import Navbar from "../../components/Navbar";
// // // import Footer from "../../components/Footer";
// // // import Image from "next/image";

// // // export async function generateStaticParams() {
// // //   return blogs.map((blog) => ({
// // //     slug: blog.slug,
// // //   }));
// // // }

// // // export async function generateMetadata({ params }) {
// // //   const resolvedParams = await params;   // ✅ FIX
// // //   const blog = blogs.find((b) => b.slug === resolvedParams.slug);

// // //   if (!blog) return {};

// // //   return {
// // //     title: blog.metaTitle,
// // //     description: blog.metaDescription,
// // //   };
// // // }

// // // export default async function BlogDetail({ params }) {   // ✅ make async
// // //   const resolvedParams = await params;                  // ✅ await params

// // //   const blog = blogs.find((b) => b.slug === resolvedParams.slug);

// // // {/* ================= TABLE OF CONTENTS ================= */}

// // // {blog.toc && (
// // //   <div className="mt-16 bg-[#111] border border-gray-800 rounded-xl p-8">
// // //     <h2 className="text-2xl font-semibold mb-6 text-[#C9A24D]">
// // //       Table of Contents
// // //     </h2>

// // //     <ul className="space-y-3 text-gray-400">
// // //       {blog.toc.map((item, index) => (
// // //         <li key={index}>• {item}</li>
// // //       ))}
// // //     </ul>
// // //   </div>
// // // )}

// // // {/* ================= PRACTICAL STEPS ================= */}

// // // {blog.practicalSteps && (
// // //   <div className="mt-16">
// // //     <h2 className="text-3xl font-semibold mb-6">
// // //       Practical Steps
// // //     </h2>

// // //     <ul className="space-y-3 text-gray-400">
// // //       {blog.practicalSteps.map((step, index) => (
// // //         <li key={index}>✔ {step}</li>
// // //       ))}
// // //     </ul>
// // //   </div>
// // // )}

// // // {/* ================= COMMON MISTAKES ================= */}

// // // {blog.mistakes && (
// // //   <div className="mt-16">
// // //     <h2 className="text-3xl font-semibold mb-6">
// // //       Common Mistakes
// // //     </h2>

// // //     <ul className="space-y-3 text-gray-400">
// // //       {blog.mistakes.map((mistake, index) => (
// // //         <li key={index}>⚠ {mistake}</li>
// // //       ))}
// // //     </ul>
// // //   </div>
// // // )}

// // // {/* ================= FAQ ================= */}

// // // {blog.faqs && (
// // //   <div className="mt-16">
// // //     <h2 className="text-3xl font-semibold mb-6">
// // //       FAQs
// // //     </h2>

// // //     <div className="space-y-6 text-gray-400">
// // //       {blog.faqs.map((faq, index) => (
// // //         <div key={index}>
// // //           <h4 className="text-white font-semibold">
// // //             {faq.question}
// // //           </h4>
// // //           <p>{faq.answer}</p>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   </div>
// // // )}

// // // {/* ================= CONCLUSION ================= */}

// // // {blog.conclusion && (
// // //   <div className="mt-16 border-t border-gray-800 pt-10">
// // //     <h2 className="text-3xl font-semibold mb-4">
// // //       Conclusion
// // //     </h2>

// // //     <p className="text-gray-400">
// // //       {blog.conclusion}
// // //     </p>
// // //   </div>
// // // )}

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // //         <div className="max-w-4xl mx-auto">

// // //           <h1 className="text-4xl font-semibold mb-4">
// // //             {blog.title}
// // //           </h1>

// // //           <p className="text-gray-400 text-sm mb-8">
// // //             By {blog.author} • {blog.date}
// // //           </p>

// // //           <div className="relative w-full h-72 mb-10">
// // //             <Image
// // //               src={blog.image}
// // //               alt={blog.title}
// // //               fill
// // //               className="object-cover rounded-xl"
// // //             />
// // //           </div>

// // //           <div
// // //             className="prose prose-invert max-w-none"
// // //             dangerouslySetInnerHTML={{ __html: blog.content }}
// // //           />
// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </>
// // //   );
// // // }


// // import { blogs } from "../blogs";
// // import Navbar from "../../components/Navbar";
// // import Footer from "../../components/Footer";
// // import Image from "next/image";

// // export async function generateStaticParams() {
// //   return blogs.map((blog) => ({
// //     slug: blog.slug,
// //   }));
// // }

// // export async function generateMetadata({ params }) {
// //   const blog = blogs.find((b) => b.slug === params.slug);
// //   if (!blog) return {};

// //   return {
// //     title: blog.metaTitle,
// //     description: blog.metaDescription,
// //   };
// // }

// // export default function BlogDetail({ params }) {
// //   const blog = blogs.find((b) => b.slug === params.slug);

// //   if (!blog) return <div>Blog not found</div>;

// //   return (
// //     <>
// //       <Navbar />

// //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// //         <div className="max-w-4xl mx-auto">

// //           {/* Title */}
// //           <h1 className="text-4xl font-semibold mb-4">
// //             {blog.title}
// //           </h1>

// //           <p className="text-gray-400 text-sm mb-8">
// //             By {blog.author} • {blog.date}
// //           </p>

// //           {/* Image */}
// //           <div className="relative w-full h-72 mb-10">
// //             <Image
// //               src={blog.image}
// //               alt={blog.title}
// //               fill
// //               className="object-cover rounded-xl"
// //             />
// //           </div>

// //           {/* Blog Main Content */}
// //           <div
// //             className="prose prose-invert max-w-none"
// //             dangerouslySetInnerHTML={{ __html: blog.content }}
// //           />

// //           {/* ================= TABLE OF CONTENTS ================= */}
// //           {blog.toc && (
// //             <div className="mt-16 bg-[#111] border border-gray-800 rounded-xl p-8">
// //               <h2 className="text-2xl font-semibold mb-6 text-[#C9A24D]">
// //                 Table of Contents
// //               </h2>

// //               <ul className="space-y-3 text-gray-400">
// //                 {blog.toc.map((item, index) => (
// //                   <li key={index}>• {item}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           )}

// //           {/* ================= PRACTICAL STEPS ================= */}
// //           {blog.practicalSteps && (
// //             <div className="mt-16">
// //               <h2 className="text-3xl font-semibold mb-6">
// //                 Practical Steps
// //               </h2>

// //               <ul className="space-y-3 text-gray-400">
// //                 {blog.practicalSteps.map((step, index) => (
// //                   <li key={index}>✔ {step}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           )}

// //           {/* ================= COMMON MISTAKES ================= */}
// //           {blog.mistakes && (
// //             <div className="mt-16">
// //               <h2 className="text-3xl font-semibold mb-6">
// //                 Common Mistakes
// //               </h2>

// //               <ul className="space-y-3 text-gray-400">
// //                 {blog.mistakes.map((mistake, index) => (
// //                   <li key={index}>⚠ {mistake}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           )}

// //           {/* ================= FAQ ================= */}
// //           {blog.faqs && (
// //             <div className="mt-16">
// //               <h2 className="text-3xl font-semibold mb-6">
// //                 FAQs
// //               </h2>

// //               <div className="space-y-6 text-gray-400">
// //                 {blog.faqs.map((faq, index) => (
// //                   <div key={index}>
// //                     <h4 className="text-white font-semibold">
// //                       {faq.question}
// //                     </h4>
// //                     <p>{faq.answer}</p>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           )}

// //           {/* ================= CONCLUSION ================= */}
// //           {blog.conclusion && (
// //             <div className="mt-16 border-t border-gray-800 pt-10">
// //               <h2 className="text-3xl font-semibold mb-4">
// //                 Conclusion
// //               </h2>

// //               <p className="text-gray-400">
// //                 {blog.conclusion}
// //               </p>
// //             </div>
// //           )}

// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }


// import { blogs } from "../blogs";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Image from "next/image";

// export async function generateStaticParams() {
//   return blogs.map((blog) => ({
//     slug: blog.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;   // ✅ FIX
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) return {};

//   return {
//     title: blog.metaTitle,
//     description: blog.metaDescription,
//   };
// }

// export default async function BlogDetail({ params }) {
//   const { slug } = await params;   // ✅ FIX

//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) return <div>Blog not found</div>;

//   return (
//     <>
//       <Navbar />

//       <section className="bg-black text-white py-24 px-6 min-h-screen">
//         <div className="max-w-4xl mx-auto">

//           <h1 className="text-4xl font-semibold mb-4">
//             {blog.title}
//           </h1>

//           <p className="text-gray-400 text-sm mb-8">
//             By {blog.author} • {blog.date}
//           </p>

//           <div className="relative w-full h-72 mb-10">
//             <Image
//               src={blog.image}
//               alt={blog.title}
//               fill
//               className="object-cover rounded-xl"
//             />
//           </div>

//           <div
//             className="prose prose-invert max-w-none"
//             dangerouslySetInnerHTML={{ __html: blog.content }}
//           />

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { blogs } from "../blogs";

// ─── STATIC PARAMS ────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

// ─── DYNAMIC METADATA ─────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    alternates: {
      canonical: `https://www.sjainattorneys.com/legal-blogs-in-bangalore/${slug}`,
    },
  };
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default async function BlogDetail({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-gray-400 text-xl">Blog post not found.</p>
      </div>
    );
  }

  // related posts (same category, exclude current)
  const related = blogs
    .filter((b) => b.slug !== slug && b.category === blog.category)
    .slice(0, 2);

  return (
    <>
      <Navbar />

      {/* ══════════════════════════════ HERO ══════════════════════════════════ */}
      <section className="relative bg-[#0B0F14] overflow-hidden">
        {/* top gold border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

        {/* corner brackets */}
        {["top-8 left-8 border-t-2 border-l-2", "top-8 right-8 border-t-2 border-r-2"].map((cls, i) => (
          <div key={i} className={`absolute w-12 h-12 border-[#C9A24D] opacity-30 ${cls}`} />
        ))}

        {/* gold grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)," +
            "repeating-linear-gradient(90deg,#C9A24D,#C9A24D 1px,transparent 1px,transparent 80px)",
        }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-36 pb-16 text-center">
          {/* eyebrow — category */}
          <p className="text-[#C9A24D] text-xs tracking-[0.3em] uppercase mb-6 font-semibold flex items-center justify-center gap-3">
            <span className="inline-block w-6 h-px bg-[#C9A24D]" />
            {blog.category}
            <span className="inline-block w-6 h-px bg-[#C9A24D]" />
          </p>

          {/* H1 */}
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-[1.12] mb-8">
            {blog.title}
          </h1>

          {/* author + date */}
          <p className="text-gray-500 text-sm flex items-center justify-center gap-3">
            <span className="inline-block w-4 h-px bg-[#C9A24D]/40" />
            By {blog.author} &nbsp;·&nbsp; {blog.date}
            <span className="inline-block w-4 h-px bg-[#C9A24D]/40" />
          </p>
        </div>

        {/* hero image */}
        <div className="max-w-5xl mx-auto px-6 pb-16">
          <div className="rounded-xl overflow-hidden border border-[#C9A24D]/30 shadow-2xl">
            <div className="relative w-full h-[350px] md:h-[480px]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ CONTENT ═══════════════════════════════ */}
      <section className="py-20 px-6 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

        <div className="max-w-3xl mx-auto">
          {/* gold accent bar */}
          <div className="w-14 h-[3px] bg-[#C9A24D] mb-10" />

          {/* prose content */}
          <div
            className="
              prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-gray-900
              prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:text-gray-600 prose-ul:space-y-2
              prose-li:marker:text-[#C9A24D]
              prose-strong:text-gray-800
              prose-a:text-[#C9A24D] prose-a:no-underline hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* back link */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link href="/legal-blogs-in-bangalore"
              className="inline-flex items-center gap-2 text-[#C9A24D] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              ← Back to Legal Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════ RELATED POSTS ════════════════════════════ */}
      {related.length > 0 && (
        <section className="py-20 px-6 bg-[#f8f6f1] relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />

          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <span className="block h-[3px] w-14 bg-[#C9A24D] mb-5" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Related Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {related.map((post) => (
                <Link key={post.slug} href={`/legal-blogs-in-bangalore/${post.slug}`}
                  className="bg-white border border-gray-100 hover:border-[#C9A24D] rounded-xl overflow-hidden group transition-all duration-300 hover:shadow-lg flex flex-col"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1">
                    <p className="text-[#C9A24D] text-xs font-semibold uppercase tracking-wider mb-3">
                      {post.category}
                    </p>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-[#8a6a20] transition-colors duration-200 leading-snug mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-xs">{post.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════ FINAL CTA ════════════════════════════════ */}
      <section className="py-24 px-6 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#C9A24D]" />

        <div className="relative max-w-3xl mx-auto border border-[#C9A24D]/30 rounded-2xl px-10 py-16">
          {["top-4 left-4 border-t-2 border-l-2","top-4 right-4 border-t-2 border-r-2","bottom-4 left-4 border-b-2 border-l-2","bottom-4 right-4 border-b-2 border-r-2"].map((cls, i) => (
            <span key={i} className={`absolute ${cls} w-5 h-5 border-[#C9A24D]`} />
          ))}

          <p className="text-[#C9A24D] text-xs tracking-[0.25em] uppercase mb-4 font-semibold">
            S Jain &amp; Attorneys · Legal Consultation
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Have a Legal Question? We're Here to Help.
          </h2>

          <p className="text-gray-300 text-lg mb-10 leading-relaxed">
            Our experienced lawyers in Bangalore offer confidential consultations tailored
            to your specific legal needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/legal-consultation-in-bangalore"
              className="inline-block bg-[#C9A24D] hover:bg-[#b8913d] text-black px-10 py-4 font-bold text-sm tracking-widest uppercase transition-colors duration-200"
            >
              Book Consultation
            </Link>
            <Link href="/contact"
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