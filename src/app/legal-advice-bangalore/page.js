import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Legal Blog | S Jain & Attorneys",
  description:
    "Read legal insights and expert guidance from experienced lawyers in Bangalore at S Jain & Attorneys.",
};

const blogs = [
  {
    title: "Maintenance Not Paid: Legal Remedies in Bengaluru",
    slug: "maintenance-not-paid",
    category: "Divorce Law",
    date: "February 22, 2026",
    author: "S Jain & Attorneys",
    excerpt:
      "Maintenance not paid? Learn about enforcement steps, court remedies, and legal actions available in Bengaluru.",
    image: "/divorce.png",
  },
  {
    title: "How to File a Divorce Case in Bangalore",
    slug: "how-to-file-divorce",
    category: "Family Law",
    date: "February 20, 2026",
    author: "S Jain & Attorneys",
    excerpt:
      "A step-by-step guide to filing divorce in Bangalore, including documents required and court procedures.",
    image: "/familylaw.png",
  },
];

export default function LegalAdviceBangalore() {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-24 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Page Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold">
              Legal Insights & Articles
            </h1>
            <p className="text-gray-400 mt-4">
              Expert legal guidance from experienced lawyers in Bangalore
            </p>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-[#111] rounded-xl overflow-hidden hover:bg-[#1a1a1a] transition duration-300 shadow-lg hover:shadow-2xl"
              >
                {/* Blog Image */}
                <div className="relative w-full h-56">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  {/* Category */}
                  <span className="text-xs bg-[#1f1f1f] px-3 py-1 rounded text-[#C9A24D]">
                    {blog.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-2xl font-semibold mt-6 leading-snug">
                    {blog.title}
                  </h2>

                  {/* Author & Date */}
                  <p className="text-gray-400 mt-4 text-sm">
                    By {blog.author} • {blog.date}
                  </p>

                  {/* Excerpt */}
                  <p className="text-gray-400 mt-6 text-sm leading-relaxed">
                    {blog.excerpt}
                  </p>

                  {/* Read More */}
                  <Link
                    href={`/legal-advice-bangalore/${blog.slug}`}
                    className="inline-block mt-6 text-[#C9A24D] font-semibold"
                  >
                    READ MORE →
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