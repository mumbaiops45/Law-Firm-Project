// // // // // import Navbar from "../../components/Navbar";
// // // // // import Footer from "../../components/Footer";
// // // // // import Image from "next/image";
// // // // // import Link from "next/link";
// // // // // import { blogs } from "../blogs";

// // // // // // Generate params for dynamic routing
// // // // // export async function generateStaticParams() {
// // // // //   return blogs.map((blog) => ({
// // // // //     slug: blog.slug,
// // // // //   }));
// // // // // }

// // // // // export default function BlogDetail({ params }) {
// // // // //   const blog = blogs.find((b) => b.slug === params.slug);

// // // // //   if (!blog) {
// // // // //     return (
// // // // //       <div className="min-h-screen flex items-center justify-center text-gray-500">
// // // // //         Blog not found.
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />
// // // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // // //         <div className="max-w-4xl mx-auto">
// // // // //           <div className="relative w-full h-80 rounded-xl overflow-hidden mb-8">
// // // // //             <Image
// // // // //               src={blog.image}
// // // // //               alt={blog.title}
// // // // //               fill
// // // // //               className="object-cover"
// // // // //             />
// // // // //           </div>

// // // // //           <span className="text-xs bg-[#1f1f1f] px-3 py-1 rounded text-[#C9A24D]">
// // // // //             {blog.category}
// // // // //           </span>

// // // // //           <h1 className="text-4xl md:text-5xl font-semibold mt-4">
// // // // //             {blog.title}
// // // // //           </h1>

// // // // //           <p className="text-gray-400 mt-2 text-sm">
// // // // //             By {blog.author} • {blog.date}
// // // // //           </p>

// // // // //           <div
// // // // //             className="mt-8 text-gray-300 prose prose-invert"
// // // // //             dangerouslySetInnerHTML={{ __html: blog.content }}
// // // // //           ></div>

// // // // //           <Link
// // // // //             href="/legal-advice-bangalore"
// // // // //             className="inline-block mt-8 text-[#C9A24D] font-semibold"
// // // // //           >
// // // // //             ← Back to Blogs
// // // // //           </Link>
// // // // //         </div>
// // // // //       </section>
// // // // //       <Footer />
// // // // //     </>
// // // // //   );
// // // // // }






// // // // import Navbar from "../../components/Navbar";
// // // // import Footer from "../../components/Footer";

// // // // import Image from "next/image";
// // // // import Link from "next/link";
// // // // import { blogs } from "../blogs";

// // // // export async function generateStaticParams() {
// // // //   return blogs.map(blog => ({ slug: blog.slug }));
// // // // }

// // // // export default function BlogDetail({ params }) {
// // // //   const blog = blogs.find(b => b.slug === params.slug);

// // // //   if (!blog) {
// // // //     return (
// // // //       <div className="min-h-screen flex items-center justify-center text-gray-500">
// // // //         Blog not found.
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <>
// // // //       <Navbar />
// // // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // // //         <div className="max-w-4xl mx-auto">

// // // //           <h1 className="text-4xl md:text-5xl font-semibold mb-4">
// // // //             {blog.title}
// // // //           </h1>

// // // //           <p className="text-gray-400 text-sm mb-6">
// // // //             By {blog.author} • {blog.date}
// // // //           </p>

// // // //           {/* Intro */}
// // // //           {blog.intro && (
// // // //             <div
// // // //               className="text-gray-300 prose prose-invert mb-12"
// // // //               dangerouslySetInnerHTML={{ __html: blog.intro }}
// // // //             />
// // // //           )}

// // // //           {/* Sections */}
// // // //           {blog.sections.map((section) => (
// // // //             <div key={section.id} id={section.id} className="mb-16">

// // // //               <h3 className="text-2xl font-semibold mb-4">
// // // //                 {section.title}
// // // //               </h3>

// // // //               {section.image && (
// // // //                 <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
// // // //                   <Image
// // // //                     src={section.image}
// // // //                     alt={section.title}
// // // //                     fill
// // // //                     className="object-cover"
// // // //                   />
// // // //                 </div>
// // // //               )}

// // // //               {section.content && (
// // // //                 <div
// // // //                   className="text-gray-300 prose prose-invert"
// // // //                   dangerouslySetInnerHTML={{ __html: section.content }}
// // // //                 />
// // // //               )}

// // // //             </div>
// // // //           ))}

// // // //           <Link
// // // //             href="/legal-advice-bangalore"
// // // //             className="inline-block mt-8 text-[#C9A24D] font-semibold"
// // // //           >
// // // //             ← Back to Blogs
// // // //           </Link>

// // // //         </div>
// // // //       </section>
// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }

// // // import Navbar from "../../components/Navbar";
// // // import Footer from "../../components/Footer";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { blogs } from "../blogs";

// // // export async function generateStaticParams() {
// // //   return blogs.map(blog => ({ slug: blog.slug }));
// // // }

// // // export default function BlogDetail({ params }) {
// // //   const blog = blogs.find(b => b.slug === params.slug);

// // //   if (!blog) {
// // //     return <div className="min-h-screen flex items-center justify-center">Blog not found.</div>;
// // //   }

// // //   return (
// // //     <>
// // //       <Navbar />
// // //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// // //         <div className="max-w-4xl mx-auto">

// // //           <h1 className="text-4xl md:text-5xl font-semibold mb-4">
// // //             {blog.title}
// // //           </h1>

// // //           <p className="text-gray-400 text-sm mb-6">
// // //             By {blog.author} • {blog.date}
// // //           </p>

// // //           {blog.intro && (
// // //             <div
// // //               className="text-gray-300 prose prose-invert mb-12"
// // //               dangerouslySetInnerHTML={{ __html: blog.intro }}
// // //             />
// // //           )}

// // //           {blog.sections.map((section) => (
// // //             <div key={section.id} className="mb-16">

// // //               <h3 className="text-2xl font-semibold mb-4">
// // //                 {section.title}
// // //               </h3>

// // //               {section.image && (
// // //                 <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
// // //                   <Image
// // //                     src={section.image}
// // //                     alt={section.title}
// // //                     fill
// // //                     className="object-cover"
// // //                   />
// // //                 </div>
// // //               )}

// // //               {section.content && (
// // //                 <div
// // //                   className="text-gray-300 prose prose-invert"
// // //                   dangerouslySetInnerHTML={{ __html: section.content }}
// // //                 />
// // //               )}

// // //             </div>
// // //           ))}

// // //           <Link
// // //             href="/legal-advice-bangalore"
// // //             className="inline-block mt-8 text-[#C9A24D] font-semibold"
// // //           >
// // //             ← Back to Blogs
// // //           </Link>

// // //         </div>
// // //       </section>
// // //       <Footer />
// // //     </>

// // //   );


// // // }




// // import Navbar from "../../components/Navbar";
// // import Footer from "../../components/Footer";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { blogs } from "../blogs";

// // export async function generateStaticParams() {
// //   return blogs.map((blog) => ({
// //     slug: blog.slug,
// //   }));
// // }

// // export default async function BlogDetail({ params }) {
// //   // ✅ FIX: unwrap params
// //   const { slug } = await params;

// //   const blog = blogs.find((b) => b.slug === slug);

// //   if (!blog) {
// //     return (
// //       <div className="min-h-screen flex items-center justify-center text-gray-500">
// //         Blog not found.
// //       </div>
// //     );
// //   }

// //   return (
// //     <>
// //       <Navbar />

// //       <section className="bg-black text-white py-24 px-6 min-h-screen">
// //         <div className="max-w-4xl mx-auto">

// //           <h1 className="text-4xl md:text-5xl font-semibold mb-4">
// //             {blog.title}
// //           </h1>

// //           <p className="text-gray-400 text-sm mb-6">
// //             By {blog.author} • {blog.date}
// //           </p>

// //           {/* Intro */}
// //           {blog.intro && (
// //             <div
// //               className="text-gray-300 prose prose-invert mb-12"
// //               dangerouslySetInnerHTML={{ __html: blog.intro }}
// //             />
// //           )}

// //           {/* Sections */}
// //           {blog.sections.map((section) => (
// //             <div key={section.id} id={section.id} className="mb-16">

// //               <h3 className="text-2xl font-semibold mb-4">
// //                 {section.title}
// //               </h3>

// //               {section.image && (
// //                 <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
// //                   <Image
// //                     src={section.image}
// //                     alt={section.title}
// //                     fill
// //                     className="object-cover"
// //                   />
// //                 </div>
// //               )}

// //               {section.content && (
// //                 <div
// //                   className="text-gray-300 prose prose-invert"
// //                   dangerouslySetInnerHTML={{ __html: section.content }}
// //                 />
// //               )}

// //             </div>
// //           ))}

// //           <Link
// //             href="/legal-advice-bangalore"
// //             className="inline-block mt-8 text-[#C9A24D] font-semibold"
// //           >
// //             ← Back to Blogs
// //           </Link>

// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }


// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import { blogs } from "../blogs";
// import Image from "next/image";

// export async function generateStaticParams() {
//   return blogs.map((blog) => ({
//     slug: blog.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) return {};

//   return {
//     title: blog.metaTitle,
//     description: blog.metaDescription,
//   };
// }

// export default async function BlogDetail({ params }) {
//   const { slug } = await params;
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) {
//     return <div className="text-center py-40">Blog not found.</div>;
//   }

//   return (
//     <>
//       <Navbar />

//       <section className="bg-black text-white py-24 px-6 min-h-screen">
//         <div className="max-w-4xl mx-auto">

//           <h1 className="text-4xl font-semibold mb-6">
//             {blog.title}
//           </h1>

//           <p className="text-gray-400 text-sm mb-8">
//             By {blog.author} • {blog.date}
//           </p>

//           {blog.image && (
//             <div className="relative w-full h-72 mb-10">
//               <Image
//                 src={blog.image}
//                 alt={blog.title}
//                 fill
//                 className="object-cover rounded-xl"
//               />
//             </div>
//           )}

//           <div
//             className="prose prose-invert"
//             dangerouslySetInnerHTML={{ __html: blog.content }}
//           />

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }

import { blogs } from "../blogs";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Image from "next/image";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return {};

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  };
}

export default async function BlogDetail({ params }) {
  const { slug } = await params;   // ✅ VERY IMPORTANT (fix for your previous error)

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        Blog not found.
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-24 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-4xl font-semibold mb-4">
            {blog.title}
          </h1>

          <p className="text-gray-400 text-sm mb-8">
            By {blog.author} • {blog.date}
          </p>

          {blog.image && (
            <div className="relative w-full h-72 mb-10">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          )}

          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

        </div>
      </section>

      <Footer />
    </>
  );
}