// "use client";

// import Link from "next/link";

// export default function Footer() {
//   const practiceAreas = [
//     "Corporate & Commercial Law",
//     "Civil Litigation",
//     "Criminal Defense & Prosecution",
//     "Family & Divorce Law",
//     "Property & Real Estate Law",
//     "Legal Advisory & Regulatory Compliance",
//     "NRI Legal Services",
//     "Cheque Bounce & Negotiable Instruments Cases",
//     "High Court & Supreme Court Practice",
//     "Consumer Protection Law",
//     "Mediation, Counselling & ADR",
//     "International Private Law",
//   ];

//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/#about" },
//     { name: "Our Team", href: "/#team" },
//     { name: "Insights", href: "/#blog" },
//     { name: "Contact", href: "/#consultation" },
//   ];

//   return (
//     <footer className="bg-gradient-to-tr from-[#111111] to-[#1A1A1A] text-white">
//       <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-4 gap-8">

//         {/* Firm Overview */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">S Jain Attorneys</h3>
//           <p className="text-gray-300 text-sm">
//             Trusted legal counsel providing corporate, civil, and advisory services across India. Ethical, client-first approach with years of experience.
//           </p>
//         </div>

//         {/* Practice Areas */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">Practice Areas</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             {practiceAreas.slice(0, 6).map((area, i) => (
//               <li key={i}>
//                 <Link href="#" className="hover:text-[#C9A24D] transition-colors duration-300">{area}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">Quick Links</h3>
//           <ul className="space-y-2 text-gray-300 text-sm">
//             {quickLinks.map((link, i) => (
//               <li key={i}>
//                 <Link href={link.href} className="hover:text-[#C9A24D] transition-colors duration-300">{link.name}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">Contact Info</h3>
//           <p className="text-gray-300 text-sm mb-2">123 Legal Lane, Mumbai, Maharashtra, India</p>
//           <p className="text-gray-300 text-sm mb-2">Phone: +91 98765 43210</p>
//           <p className="text-gray-300 text-sm mb-2">Email: contact@sjainattorneys.com</p>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-[#111111] text-gray-400 text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
//         <p>© S Jain Attorneys – All Rights Reserved</p>
//         <div className="space-x-4 mt-2 md:mt-0">
//           <Link href="#" className="hover:text-[#C9A24D] transition-colors duration-300">Privacy Policy</Link>
//           <Link href="#" className="hover:text-[#C9A24D] transition-colors duration-300">Terms of Use</Link>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import Link from "next/link";
import laws5 from "../../../public/laws5.jpg"
import Image from "next/image";


export default function Footer() {
  const practiceAreas = [
    "Corporate & Commercial Law",
    "Civil Litigation",
    "Criminal Defense & Prosecution",
    "Family & Divorce Law",
    "Property & Real Estate Law",
    "Legal Advisory & Regulatory Compliance",
    "NRI Legal Services",
    "Cheque Bounce & Negotiable Instruments Cases",
    "High Court & Supreme Court Practice",
    "Consumer Protection Law",
    "Mediation, Counselling & ADR",
    "International Private Law",
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    { name: "Our Team", href: "/#team" },
    { name: "Insights", href: "/#blog" },
    { name: "Contact", href: "/#consultation" },
  ];

  return (
    <footer className="relative text-white">

      {/* Background Image */}
      {/* <div
        className="
          absolute inset-0
          bg-[url('/laws5.jpg')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      /> */}

      <div className="absolute inset-0 -z-10">
        <Image
          src={laws5}
          alt="Law Firm Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 " />

      {/* Content Wrapper */}
      <div className="relative z-10">

        <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-4 gap-8">

          {/* Firm Overview */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
              S Jain Attorneys
            </h3>
            <p className="text-gray-200 text-sm">
              Trusted legal counsel providing corporate, civil, and advisory
              services across India. Ethical, client-first approach with years
              of experience.
            </p>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
              Practice Areas
            </h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              {practiceAreas.slice(0, 6).map((area, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-[#C9A24D] transition-colors duration-300"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-200 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-[#C9A24D] transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
              Contact Info
            </h3>
            <p className="text-gray-300 text-sm mb-2">
              123 Legal Lane, Mumbai, Maharashtra, India
            </p>
            <p className="text-gray-200 text-sm mb-2">
              Phone: +91 98765 43210
            </p>
            <p className="text-gray-300 text-sm mb-2">
              Email: contact@sjainattorneys.com
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 text-gray-900 text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
          <p>© S Jain Attorneys – All Rights Reserved</p>
          <div className="space-x-4 mt-2 md:mt-0">
            <Link
              href="#"
              className="hover:text-[#C9A24D] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-[#C9A24D] transition-colors duration-300"
            >
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
