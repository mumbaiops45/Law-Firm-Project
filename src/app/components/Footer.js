// // "use client";

// // import Link from "next/link";

// // export default function Footer() {
// //   const practiceAreas = [
// //     "Corporate & Commercial Law",
// //     "Civil Litigation",
// //     "Criminal Defense & Prosecution",
// //     "Family & Divorce Law",
// //     "Property & Real Estate Law",
// //     "Legal Advisory & Regulatory Compliance",
// //     "NRI Legal Services",
// //     "Cheque Bounce & Negotiable Instruments Cases",
// //     "High Court & Supreme Court Practice",
// //     "Consumer Protection Law",
// //     "Mediation, Counselling & ADR",
// //     "International Private Law",
// //   ];

// //   const quickLinks = [
// //     { name: "Home", href: "/" },
// //     { name: "About Us", href: "/#about" },
// //     { name: "Our Team", href: "/#team" },
// //     { name: "Insights", href: "/#blog" },
// //     { name: "Contact", href: "/#consultation" },
// //   ];

// //   return (
// //     <footer className="bg-gradient-to-tr from-[#111111] to-[#1A1A1A] text-white">
// //       <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-4 gap-8">

// //         {/* Firm Overview */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">S Jain Attorneys</h3>
// //           <p className="text-gray-300 text-sm">
// //             Trusted legal counsel providing corporate, civil, and advisory services across India. Ethical, client-first approach with years of experience.
// //           </p>
// //         </div>

// //         {/* Practice Areas */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">Practice Areas</h3>
// //           <ul className="space-y-2 text-gray-300 text-sm">
// //             {practiceAreas.slice(0, 6).map((area, i) => (
// //               <li key={i}>
// //                 <Link href="#" className="hover:text-[#C9A24D] transition-colors duration-300">{area}</Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Quick Links */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">Quick Links</h3>
// //           <ul className="space-y-2 text-gray-300 text-sm">
// //             {quickLinks.map((link, i) => (
// //               <li key={i}>
// //                 <Link href={link.href} className="hover:text-[#C9A24D] transition-colors duration-300">{link.name}</Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Contact Info */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">Contact Info</h3>
// //           <p className="text-gray-300 text-sm mb-2">123 Legal Lane, Mumbai, Maharashtra, India</p>
// //           <p className="text-gray-300 text-sm mb-2">Phone: +91 98765 43210</p>
// //           <p className="text-gray-300 text-sm mb-2">Email: contact@sjainattorneys.com</p>
// //         </div>
// //       </div>

// //       {/* Bottom Bar */}
// //       <div className="bg-[#111111] text-gray-400 text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
// //         <p>© S Jain Attorneys – All Rights Reserved</p>
// //         <div className="space-x-4 mt-2 md:mt-0">
// //           <Link href="#" className="hover:text-[#C9A24D] transition-colors duration-300">Privacy Policy</Link>
// //           <Link href="#" className="hover:text-[#C9A24D] transition-colors duration-300">Terms of Use</Link>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }


// // "use client";

// // import Link from "next/link";
// // import laws5 from "../../../public/laws5.jpg"
// // import Image from "next/image";


// // export default function Footer() {
// //   const practiceAreas = [
// //     "Corporate & Commercial Law",
// //     "Civil Litigation",
// //     "Criminal Defense & Prosecution",
// //     "Family & Divorce Law",
// //     "Property & Real Estate Law",
// //     "Legal Advisory & Regulatory Compliance",
// //     "NRI Legal Services",
// //     "Cheque Bounce & Negotiable Instruments Cases",
// //     "High Court & Supreme Court Practice",
// //     "Consumer Protection Law",
// //     "Mediation, Counselling & ADR",
// //     "International Private Law",
// //   ];

// //   const quickLinks = [
// //     { name: "Home", href: "/" },
// //     { name: "About Us", href: "/#about" },
// //     { name: "Our Team", href: "/#team" },
// //     { name: "Insights", href: "/#blog" },
// //     { name: "Contact", href: "/#consultation" },
// //   ];

// //   return (
// //     <footer className="relative text-white">

// //       {/* Background Image */}
// //       {/* <div
// //         className="
// //           absolute inset-0
// //           bg-[url('/laws5.jpg')]
// //           bg-cover
// //           bg-center
// //           bg-no-repeat
// //         "
// //       /> */}

// //       <div className="absolute inset-0 -z-10">
// //         <Image
// //           src={laws5}
// //           alt="Law Firm Background"
// //           fill
// //           priority
// //           className="object-cover"
// //         />
// //       </div>

// //       {/* Dark Overlay */}
// //       <div className="absolute inset-0 " />

// //       {/* Content Wrapper */}
// //       <div className="relative z-10">

// //         <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-4 gap-8">

// //           {/* Firm Overview */}
// //           <div>
// //             <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
// //               S Jain Attorneys
// //             </h3>
// //             <p className="text-gray-200 text-sm">
// //               Trusted legal counsel providing corporate, civil, and advisory
// //               services across India. Ethical, client-first approach with years
// //               of experience.
// //             </p>
// //           </div>

// //           {/* Practice Areas */}
// //           <div>
// //             <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
// //               Practice Areas
// //             </h3>
// //             <ul className="space-y-2 text-gray-200 text-sm">
// //               {practiceAreas.slice(0, 6).map((area, i) => (
// //                 <li key={i}>
// //                   <Link
// //                     href="#"
// //                     className="hover:text-[#C9A24D] transition-colors duration-300"
// //                   >
// //                     {area}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
// //               Quick Links
// //             </h3>
// //             <ul className="space-y-2 text-gray-200 text-sm">
// //               {quickLinks.map((link, i) => (
// //                 <li key={i}>
// //                   <Link
// //                     href={link.href}
// //                     className="hover:text-[#C9A24D] transition-colors duration-300"
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact Info */}
// //           <div>
// //             <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
// //               Contact Info
// //             </h3>
// //             <p className="text-gray-300 text-sm mb-2">
// //               123 Legal Lane, Mumbai, Maharashtra, India
// //             </p>
// //             <p className="text-gray-200 text-sm mb-2">
// //               Phone: +91 98765 43210
// //             </p>
// //             <p className="text-gray-300 text-sm mb-2">
// //               Email: contact@sjainattorneys.com
// //             </p>
// //           </div>

// //         </div>

// //         {/* Bottom Bar */}
// //         <div className="border-t border-gray-700 text-gray-900 text-sm py-4 px-6 flex flex-col md:flex-row justify-between items-center">
// //           <p>© S Jain Attorneys – All Rights Reserved</p>
// //           <div className="space-x-4 mt-2 md:mt-0">
// //             <Link
// //               href="#"
// //               className="hover:text-[#C9A24D] transition-colors duration-300"
// //             >
// //               Privacy Policy
// //             </Link>
// //             <Link
// //               href="#"
// //               className="hover:text-[#C9A24D] transition-colors duration-300"
// //             >
// //               Terms of Use
// //             </Link>
// //           </div>
// //         </div>

// //       </div>
// //     </footer>
// //   );
// // }


// // "use client";

// // import Link from "next/link";

// // export default function Footer() {

// //   const practiceAreas = [
// //     "Corporate & Commercial Law",
// //     "Civil Litigation",
// //     "Criminal Defense & Prosecution",
// //     "Family & Divorce Law",
// //     "Property & Real Estate Law",
// //     "Legal Advisory & Regulatory Compliance",
// //   ];

// //   const quickLinks = [
// //     { name: "Home", href: "/" },
// //     { name: "About Us", href: "/about" },
// //     { name: "Our Team", href: "/team" },
// //     { name: "Insights", href: "/#blog" },
// //     { name: "Contact", href: "/contact" },
// //   ];

// //   return (
// //     <footer className="bg-[#0c0c0c] text-white">

// //       {/* Main Content */}
// //       <div className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-4 gap-10">

// //         {/* Firm Overview */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
// //             S Jain Attorneys
// //           </h3>

// //           <p className="text-gray-300 text-sm leading-relaxed">
// //             Trusted legal counsel providing corporate, civil, and advisory
// //             services across India. We deliver ethical, strategic, and
// //             result-driven legal solutions tailored to client needs.
// //           </p>
// //         </div>


// //         {/* Practice Areas */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
// //             Practice Areas
// //           </h3>

// //           <ul className="space-y-2 text-sm">
// //             {practiceAreas.map((area, i) => (
// //               <li key={i}>
// //                 <Link
// //                   href="#"
// //                   className="text-gray-300 hover:text-[#C9A24D] transition duration-300"
// //                 >
// //                   {area}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>


// //         {/* Quick Links */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
// //             Quick Links
// //           </h3>

// //           <ul className="space-y-2 text-sm">
// //             {quickLinks.map((link, i) => (
// //               <li key={i}>
// //                 <Link
// //                   href={link.href}
// //                   className="text-gray-300 hover:text-[#C9A24D] transition duration-300"
// //                 >
// //                   {link.name}
// //                 </Link>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>


// //         {/* Contact Info */}
// //         <div>
// //           <h3 className="text-xl font-semibold mb-4 text-[#C9A24D]">
// //             Contact Info
// //           </h3>

// //           <p className="text-gray-300 text-sm mb-2">
// //             Mumbai, Maharashtra, India
// //           </p>

// //           <p className="text-gray-300 text-sm mb-2">
// //             Phone: +91 98765 43210
// //           </p>

// //           <p className="text-gray-300 text-sm mb-2">
// //             Email: contact@sjainattorneys.com
// //           </p>

// //         </div>

// //       </div>


// //       {/* Bottom Bar */}
// //       <div className="border-t border-[#060606]">

// //         <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

// //           <p className="text-gray-400 text-sm">
// //             © 2026 S Jain Attorneys. All Rights Reserved.
// //           </p>

// //           <div className="flex gap-6 mt-3 md:mt-0">

// //             <Link
// //               href="#"
// //               className="text-gray-400 hover:text-[#C9A24D] text-sm transition"
// //             >
// //               Privacy Policy
// //             </Link>

// //             <Link
// //               href="#"
// //               className="text-gray-400 hover:text-[#C9A24D] text-sm transition"
// //             >
// //               Terms of Use
// //             </Link>

// //           </div>

// //         </div>

// //       </div>

// //     </footer>
// //   );
// // }

// // "use client";

// // import Link from "next/link";

// // export default function Footer() {

// //   const practiceAreas = [
// //     "Corporate & Commercial Law",
// //     "Civil Litigation",
// //     "Criminal Defense & Prosecution",
// //     "Family & Divorce Law",
// //     "Property & Real Estate Law",
// //     "Legal Advisory & Regulatory Compliance",
// //   ];

// //   const quickLinks = [
// //     { name: "Home", href: "/" },
// //     { name: "About Us", href: "/about" },
// //     { name: "Our Team", href: "/team" },
// //     { name: "Insights", href: "/#blog" },
// //     { name: "Contact", href: "/contact" },
// //   ];

// //   // SAME GLOBAL CONTAINER
// //   const container =
// //     "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

// //   // SAME HEADING STYLE (scaled for footer)
// //   const footerHeading =
// //     "text-lg font-semibold text-[#C9A24D] mb-5";

// //   return (
// //     <footer className="bg-[#0c0c0c] text-white">

// //       {/* Main Content */}
// //       <div className={`${container} py-16 sm:py-20`}>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

// //           {/* Firm Overview */}
// //           <div>

// //             <h3 className={footerHeading}>
// //               S Jain Attorneys
// //             </h3>

// //             <p className="text-gray-300 text-sm leading-relaxed">
// //               Trusted legal counsel providing corporate, civil, and advisory
// //               services across India. We deliver ethical, strategic, and
// //               result-driven legal solutions tailored to client needs.
// //             </p>

// //           </div>


// //           {/* Practice Areas */}
// //           <div>

// //             <h3 className={footerHeading}>
// //               Practice Areas
// //             </h3>

// //             <ul className="space-y-3 text-sm">

// //               {practiceAreas.map((area, i) => (
// //                 <li key={i}>
// //                   <Link
// //                     href="#"
// //                     className="text-gray-300 hover:text-[#C9A24D] transition duration-300"
// //                   >
// //                     {area}
// //                   </Link>
// //                 </li>
// //               ))}

// //             </ul>

// //           </div>


// //           {/* Quick Links */}
// //           <div>

// //             <h3 className={footerHeading}>
// //               Quick Links
// //             </h3>

// //             <ul className="space-y-3 text-sm">

// //               {quickLinks.map((link, i) => (
// //                 <li key={i}>
// //                   <Link
// //                     href={link.href}
// //                     className="text-gray-300 hover:text-[#C9A24D] transition duration-300"
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}

// //             </ul>

// //           </div>


// //           {/* Contact Info */}
// //           {/* Contact Info */}
// //           <div>

// //             <h3 className={footerHeading}>
// //               Contact Info
// //             </h3>

// //             <div className="space-y-3 text-gray-300 text-sm">

// //               <p>
// //                 S Jain Attorneys<br />
// //                 #42, 3rd Floor, Prestige Meridian II<br />
// //                 MG Road, Bengaluru, Karnataka 560001<br />
// //                 India
// //               </p>

// //               <p>
// //                 Phone: +91 98765 43210
// //               </p>

// //               <p>
// //                 Email: contact@sjainattorneys.com
// //               </p>

// //             </div>

// //           </div>


// //         </div>

// //       </div>


// //       {/* Bottom Bar */}
// //       <div className="border-t border-[#1a1a1a]">

// //         <div className={`${container} py-6`}>

// //           <div className="flex flex-col md:flex-row justify-center items-center gap-4">

// //             <p className="text-gray-200 text-sm text-center">
// //               © 2026 S Jain Attorneys. All Rights Reserved.
// //             </p>
// // {/* 
// //             <div className="flex gap-6">

// //               <Link
// //                 href="#"
// //                 className="text-gray-400 hover:text-[#C9A24D] text-sm transition"
// //               >
// //                 Privacy Policy
// //               </Link>

// //               <Link
// //                 href="#"
// //                 className="text-gray-400 hover:text-[#C9A24D] text-sm transition"
// //               >
// //                 Terms of Use
// //               </Link>

// //             </div> */}

// //           </div>

// //         </div>

// //       </div>

// //     </footer>
// //   );
// // }





// // "use client";

// // import Link from "next/link";

// // export default function Footer() {

// //   const practiceAreas = [
// //     { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
// //     { name: "Civil Litigation", href: "/services/civil-litigation" },
// //     { name: "Criminal Defense & Prosecution", href: "/services/criminal-defense" },
// //     { name: "Family & Divorce Law", href: "/services/family-divorce-law" },
// //     { name: "Property & Real Estate Law", href: "/services/property-real-estate-law" },
// //     { name: "Legal Advisory & Regulatory Compliance", href: "/services/legal-advisory-regulatory-compliance" },
// //   ];

// //   const quickLinks = [
// //     { name: "Home", href: "/" },
// //     { name: "About Us", href: "/about" },
// //     { name: "Our Team", href: "/team" },
// //     { name: "Insights", href: "/insights" },
// //     { name: "Contact", href: "/contact" },
// //   ];

// //   const container =
// //     "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

// //   const footerHeading =
// //     "text-lg font-semibold text-[#C9A24D] mb-5";

// //   return (
// //     <footer className="bg-[#0c0c0c] text-white">

// //       {/* ================= MAIN FOOTER ================= */}

// //       <div className={`${container} py-16 sm:py-20`}>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

// //           {/* Firm Overview */}
// //           <div>

// //             <h3 className={footerHeading}>
// //               S Jain Attorneys
// //             </h3>

// //             <p className="text-gray-300 text-sm leading-relaxed">
// //               Trusted legal counsel providing corporate, civil, criminal,
// //               and advisory legal services across India. We deliver ethical,
// //               strategic, and result-driven legal solutions tailored to client needs.
// //             </p>

// //           </div>


// //           {/* Practice Areas */}
// //           <div>

// //             <h3 className={footerHeading}>
// //               Practice Areas
// //             </h3>

// //             <ul className="space-y-3 text-sm">

// //               {practiceAreas.map((area, i) => (
// //                 <li key={i}>
// //                   <Link
// //                     href={area.href}
// //                     className="text-gray-300 hover:text-[#C9A24D] transition duration-300"
// //                   >
// //                     {area.name}
// //                   </Link>
// //                 </li>
// //               ))}

// //             </ul>

// //           </div>


// //           {/* Quick Links */}
// //           <div>

// //             <h3 className={footerHeading}>
// //               Quick Links
// //             </h3>

// //             <ul className="space-y-3 text-sm">

// //               {quickLinks.map((link, i) => (
// //                 <li key={i}>
// //                   <Link
// //                     href={link.href}
// //                     className="text-gray-300 hover:text-[#C9A24D] transition duration-300"
// //                   >
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}

// //             </ul>

// //           </div>


// //           {/* Contact Info */}
// //           <div>

// //             <h3 className={footerHeading}>
// //               Contact Info
// //             </h3>

// //             <div className="space-y-3 text-gray-300 text-sm">

// //               <p>
// //                 S Jain Attorneys<br />
// //                 #42, Prestige Meridian II<br />
// //                 MG Road, Bengaluru – 560001<br />
// //                 Karnataka, India
// //               </p>

// //               <p>
// //                 Phone: +91 98765 43210
// //               </p>

// //               <p>
// //                 Email: contact@sjainattorneys.com
// //               </p>

// //             </div>

// //           </div>

// //         </div>

// //       </div>
      
// //       {/* ================= SEO FOOTER EXTENSION ================= */}

// //       <div className="bg-[#0b0b0b]">

// //         <div className={`${container} py-12 space-y-10 text-sm`}>

// //           {/* INDIA */}
// //           <div>

// //             <h4 className="text-[#C9A24D] font-semibold mb-3">
// //               IN INDIA:
// //             </h4>

// //             <p className="text-[#f8f7f5] leading-7">

// //               Bangalore | Mumbai | Delhi | Hyderabad | Chennai |
// //               Pune | Kolkata | Ahmedabad

// //             </p>

// //           </div>


// //           {/* BANGALORE */}
// //           <div>

// //             <h4 className="text-[#C9A24D] font-semibold mb-3">
// //               IN BANGALORE:
// //             </h4>

// //             <p className="text-gray-300 leading-7">

// //               HSR Layout | Indiranagar | Whitefield | Koramangala |
// //               Jayanagar | Rajajinagar | Electronic City |
// //               Marathahalli | Yelahanka | Hebbal

// //             </p>

// //           </div>


// //           {/* LEGAL SERVICES */}
// //           <div>

// //             <h4 className="text-[#C9A24D] font-semibold mb-3">
// //               LEGAL SERVICES:
// //             </h4>

// //             <p className="text-gray-300 leading-7">

// //               Corporate Lawyer in Bangalore |
// //               Civil Litigation Lawyer |
// //               Criminal Lawyer |
// //               Divorce Lawyer |
// //               Property Lawyer |
// //               Consumer Court Lawyer |
// //               Cheque Bounce Lawyer |
// //               High Court Lawyer |
// //               Supreme Court Lawyer |
// //               Arbitration Lawyer |
// //               Legal Notice Lawyer |
// //               NRI Legal Services

// //             </p>

// //           </div>


// //           {/* CONSULTATION */}
// //           <div>

// //             <h4 className="text-[#C9A24D] font-semibold mb-3">
// //               LEGAL CONSULTATION:
// //             </h4>

// //             <p className="text-gray-300 leading-7">

// //               Legal Advice in Bangalore |
// //               Online Legal Consultation |
// //               Corporate Legal Advisory |
// //               Property Legal Advice |
// //               Family Legal Consultation |
// //               Criminal Legal Consultation |
// //               Court Case Consultation |
// //               Civil Case Legal Advice

// //             </p>

// //           </div>

// //         </div>

// //       </div>



// //       {/* ================= COPYRIGHT BAR ================= */}

// //       <div className="border-t border-[#1a1a1a]">

// //         <div className={`${container} py-6 text-center`}>

// //           <p className="text-gray-400 text-sm">
// //             © 2026 S Jain Attorneys. All Rights Reserved.
// //           </p>

// //         </div>

// //       </div>



// //     </footer>
// //   );
// // }


// "use client";

// import Link from "next/link";

// export default function Footer() {

//   const practiceAreas = [
//     { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
//     { name: "Civil Litigation", href: "/services/civil-litigation" },
//     { name: "Criminal Defense & Prosecution", href: "/services/criminal-defense" },
//     { name: "Family & Divorce Law", href: "/services/family-divorce-law" },
//     { name: "Property & Real Estate Law", href: "/services/property-real-estate-law" },
//     { name: "Legal Advisory & Regulatory Compliance", href: "/services/legal-advisory-regulatory-compliance" },
//   ];

//   const quickLinks = [
//     { name: "Home", href: "/" },
//     { name: "About Us", href: "/about" },
//     { name: "Our Team", href: "/team" },
//     { name: "Insights", href: "/insights" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const legalLinks = [
//     { name: "Privacy Policy", href: "/privacy-policy" },
//     { name: "Terms of Use", href: "/terms-of-use" },
//     { name: "Disclaimer", href: "/disclaimer" },
//   ];

//   const container =
//     "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

//   const footerHeading =
//     "text-lg font-semibold text-[#C9A24D] mb-5";


//   return (

//     <footer className="bg-[#0c0c0c] text-white">

//       {/* ================= MAIN FOOTER ================= */}

//       <div className={`${container} py-16`}>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* ABOUT */}
//           <div>

//             <img
//               src="/logo2.jpg"
//               className="h-12 mb-4"
//               alt="S Jain Attorneys"
//             />

//             <p className="text-gray-300 text-sm leading-relaxed mb-4">

//               Trusted legal counsel providing corporate, civil, criminal,
//               and advisory legal services with integrity, confidentiality,
//               and proven results.

//             </p>

//             <p className="text-gray-400 text-sm">

//               Serving clients across Karnataka, India, and globally.

//             </p>

//           </div>


//           {/* PRACTICE AREAS */}
//           <div>

//             <h3 className={footerHeading}>
//               Practice Areas
//             </h3>

//             <ul className="space-y-3 text-sm">

//               {practiceAreas.map((area, i) => (
//                 <li key={i}>
//                   <Link
//                     href={area.href}
//                     className="text-gray-300 hover:text-[#C9A24D] transition"
//                   >
//                     {area.name}
//                   </Link>
//                 </li>
//               ))}

//             </ul>

//           </div>


//           {/* QUICK LINKS */}
//           <div>

//             <h3 className={footerHeading}>
//               Quick Links
//             </h3>

//             <ul className="space-y-3 text-sm">

//               {quickLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     href={link.href}
//                     className="text-gray-300 hover:text-[#C9A24D] transition"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}

//             </ul>


//             {/* LEGAL LINKS */}
//             <h3 className={`${footerHeading} mt-8`}>
//               Legal
//             </h3>

//             <ul className="space-y-3 text-sm">

//               {legalLinks.map((link, i) => (
//                 <li key={i}>
//                   <Link
//                     href={link.href}
//                     className="text-gray-300 hover:text-[#C9A24D] transition"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}

//             </ul>

//           </div>


//           {/* CONTACT + MAP */}
//           <div>

//             <h3 className={footerHeading}>
//               Office Address
//             </h3>

//             <p className="text-gray-300 text-sm mb-4 leading-relaxed">

//               S Jain Attorneys<br />
//               Prestige Meridian II<br />
//               MG Road, Bengaluru – 560001<br />
//               Karnataka, India

//             </p>

//             <p className="text-gray-300 text-sm mb-2">
//               Phone: +91 98765 43210
//             </p>

//             <p className="text-gray-300 text-sm mb-4">
//               Email: contact@sjainattorneys.com
//             </p>


//             {/* GOOGLE MAP */}
//             <div className="rounded-lg overflow-hidden border border-gray-800">

//               <iframe
//                 src="https://maps.google.com/maps?q=Prestige%20Meridian%20II%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                 width="100%"
//                 height="180"
//                 loading="lazy"
//               />

//             </div>

//           </div>

//         </div>

//       </div>



//       {/* COPYRIGHT */}

//       <div className="border-t border-[#1a1a1a]">

//         <div className={`${container} py-6 text-center`}>

//           <p className="text-gray-400 text-sm">

//             © 2026 S Jain Attorneys. All Rights Reserved.

//           </p>

//         </div>

//       </div>

//     </footer>

//   );

// }



// "use client";

// import Link from "next/link";

// export default function Footer() {

//   /* ================= PRACTICE AREAS (SEO OPTIMIZED) ================= */
//   const practiceAreas = [
//     { name: "Family & Divorce Lawyer in Bangalore", href: "/services/family-divorce-law" },
//     { name: "Property & Real Estate Lawyer in Bangalore", href: "/services/property-real-estate-law" },
//     { name: "Criminal Lawyer in Bangalore", href: "/services/criminal-defense" },
//     { name: "Civil Lawyer in Bangalore", href: "/services/civil-litigation" },
//     { name: "Corporate Lawyer in Bangalore", href: "/services/corporate-law" },
//     { name: "Cheque Bounce Lawyer in Bangalore", href: "/services/cheque-bounce-lawyer" },
//     { name: "High Court Lawyer in Bangalore", href: "/services/high-court-lawyer" },
//     { name: "Consumer Court Lawyer in Bangalore", href: "/services/consumer-court-lawyer" },
//     { name: "Mediation Lawyer in Bangalore", href: "/services/mediation-lawyer" },
//     { name: "NRI Lawyer in Bangalore", href: "/services/nri-legal-services" },
//     { name: "International Legal Services", href: "/services/international-legal-services" },
//     { name: "Employment & Labour Law", href: "/services/employment-labour-law" },
//   ];


//   /* ================= LEGAL SERVICES ================= */
//   const legalServices = [
//     { name: "Legal Consultation in Bangalore", href: "/services/legal-consultation" },
//     { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
//     { name: "Civil Litigation Services", href: "/services/civil-litigation" },
//     { name: "Criminal Defense & Prosecution", href: "/services/criminal-defense" },
//     { name: "Regulatory Compliance & Legal Advisory", href: "/services/legal-advisory-regulatory-compliance" },
//     { name: "Alternative Dispute Resolution (ADR)", href: "/services/adr" },
//     { name: "Cross-Border Legal Services", href: "/services/cross-border-legal-services" },
//   ];


//   /* ================= QUICK LINKS ================= */
//   const quickLinks = [
//     { name: "About Us", href: "/about" },
//     { name: "Practice Areas", href: "/services" },
//     { name: "Our Team", href: "/team" },
//     { name: "Insights", href: "/insights" },
//     { name: "Contact", href: "/contact" },
//     { name: "Book Consultation", href: "/contact" },
//   ];


//   /* ================= LEGAL LINKS ================= */
//   const legalLinks = [
//     { name: "Privacy Policy", href: "/privacy-policy" },
//     { name: "Terms of Use", href: "/terms-of-use" },
//     { name: "Disclaimer", href: "/disclaimer" },
//   ];


//   const container =
//     "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

//   const footerHeading =
//     "text-lg font-semibold text-[#C9A24D] mb-5";


//   return (

//     <footer className="bg-[#0c0c0c] text-white">

//       {/* ================= MAIN FOOTER ================= */}

//       <div className={`${container} py-16`}>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">


//           {/* ================= ABOUT ================= */}
//           <div>

//             <img
//               src="/logo2.jpg"
//               className="h-12 mb-4"
//               alt="S Jain & Attorneys Law Firm Bangalore"
//             />

//             <p className="text-gray-300 text-sm leading-relaxed mb-4">

//               <strong>S Jain & Attorneys</strong> is a leading law firm in Bangalore providing strategic legal solutions across corporate, civil, criminal, family, property, NRI, and dispute resolution matters.

//             </p>

//             <p className="text-gray-400 text-sm leading-relaxed mb-4">

//               Our experienced lawyers deliver practical, result-oriented representation with integrity, confidentiality, and professionalism.

//             </p>

//             <p className="text-gray-400 text-sm">

//               📍 Bangalore, Karnataka, India  
//               <br />
//               Serving clients across Karnataka, India, and NRI clients globally.

//             </p>

//           </div>


//           {/* ================= PRACTICE AREAS ================= */}
//           <div>

//             <h3 className={footerHeading}>
//               Practice Areas
//             </h3>

//             <ul className="space-y-3 text-sm max-h-64 overflow-y-auto pr-2">

//               {practiceAreas.map((area, i) => (
//                 <li key={i}>
//                   <Link
//                     href={area.href}
//                     className="text-gray-300 hover:text-[#C9A24D] transition"
//                   >
//                     {area.name}
//                   </Link>
//                 </li>
//               ))}

//             </ul>

//           </div>


//           {/* ================= LEGAL SERVICES ================= */}
//           <div>

//             <h3 className={footerHeading}>
//               Legal Services
//             </h3>

//             <ul className="space-y-3 text-sm">

//               {legalServices.map((service, i) => (
//                 <li key={i}>
//                   <Link
//                     href={service.href}
//                     className="text-gray-300 hover:text-[#C9A24D] transition"
//                   >
//                     {service.name}
//                   </Link>
//                 </li>
//               ))}

//             </ul>

//           </div>


//           {/* ================= CONTACT ================= */}
//           <div>

//             <h3 className={footerHeading}>
//               Office Address
//             </h3>

//             <p className="text-gray-300 text-sm mb-4 leading-relaxed">

//               S Jain & Attorneys<br />
//               Prestige Meridian II<br />
//               MG Road, Bengaluru – 560001<br />
//               Karnataka, India

//             </p>

//             <p className="text-gray-300 text-sm mb-2">
//               📞 +91 XXXXX XXXXX
//             </p>

//             <p className="text-gray-300 text-sm mb-4">
//               📧 abc@gmail.com
//             </p>


//             {/* MAP */}
//             <div className="rounded-lg overflow-hidden border border-gray-800">

//               <iframe
//                 src="https://maps.google.com/maps?q=Prestige%20Meridian%20II%20Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                 width="100%"
//                 height="180"
//                 loading="lazy"
//               />

//             </div>

//           </div>


//         </div>

//       </div>


//       {/* ================= FOOTER BOTTOM ================= */}

//       <div className="border-t border-[#1a1a1a]">

//         <div className={`${container} py-6 flex flex-col md:flex-row justify-between items-center gap-4`}>

//           <p className="text-gray-400 text-sm text-center md:text-left">

//             © 2026 S Jain & Attorneys | Law Firm in Bangalore | All Rights Reserved

//           </p>


//           {/* QUICK + LEGAL LINKS */}

//           <div className="flex flex-wrap gap-6 text-sm justify-center">

            

//             {legalLinks.map((link, i) => (
//               <Link
//                 key={i}
//                 href={link.href}
//                 className="text-gray-400 hover:text-[#C9A24D]"
//               >
//                 {link.name}
//               </Link>
//             ))}

//           </div>

//         </div>

//       </div>

//     </footer>

//   );

// }



"use client";

import Link from "next/link";

export default function Footer() {

  /* ================= PRACTICE AREAS ================= */
  const practiceAreas = [
    { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
    { name: "Civil Litigation Services", href: "/services/civil-litigation" },
    { name: "Criminal Defense & Prosecution", href: "/services/criminal-defense" },
    { name: "Family & Divorce Law", href: "/services/family-divorce-law" },
    { name: "Property & Real Estate Law", href: "/services/property-real-estate-law" },
    { name: "Employment & Labour Law", href: "/services/employment-labour-law" },
    { name: "Cheque Bounce & NI Act Cases", href: "/services/cheque-bounce-lawyer" },
    { name: "High Court & Supreme Court Practice", href: "/services/high-court-lawyer" },
    { name: "Consumer Protection Law", href: "/services/consumer-court-lawyer" },
    { name: "Mediation & ADR", href: "/services/adr" },
    { name: "NRI Legal Services", href: "/services/nri-legal-services" },
    { name: "International & Cross-Border Legal Services", href: "/services/international-legal-services" },
  ];

  /* ================= LEGAL SERVICES ================= */
  const legalServices = [
    { name: "Legal Consultation in Bangalore", href: "/services/legal-consultation" },
    { name: "Corporate Legal Advisory & Compliance", href: "/services/corporate-law" },
    { name: "Civil & Commercial Dispute Resolution", href: "/services/civil-litigation" },
    { name: "Criminal Trial & Appellate Representation", href: "/services/criminal-defense" },
    { name: "Regulatory Compliance & Risk Advisory", href: "/services/legal-advisory-regulatory-compliance" },
    { name: "Arbitration & Mediation Services", href: "/services/adr" },
    { name: "Cross-Border & NRI Representation", href: "/services/cross-border-legal-services" },
  ];

  /* ================= QUICK LINKS ================= */
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Practice Areas", href: "/services" },
    { name: "Our Team", href: "/team" },
    { name: "Insights / Legal Articles", href: "/insights" },
    { name: "Contact", href: "/contact" },
    { name: "Book Consultation", href: "/contact" },
  ];

  /* ================= LEGAL LINKS ================= */
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "Disclaimer", href: "/disclaimer" },
  ];

  const container =
    "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

  const footerHeading =
    "text-lg font-semibold text-[#C9A24D] mb-5";

  return (
    <footer className="bg-[#0c0c0c] text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className={`${container} py-16`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ================= ABOUT ================= */}
          <div>
            <img
              src="/logo2.jpg"
              className="h-12 mb-4"
              alt="S Jain & Attorneys Law Firm Bangalore"
            />

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              <strong>S Jain & Attorneys</strong> is a leading law firm in Bangalore providing full-service legal representation across litigation, advisory, and regulatory matters.
            </p>

            {/* <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Our experienced lawyers deliver strategic, result-oriented legal solutions across corporate, civil, criminal, family, property, employment, NRI, and dispute resolution matters with integrity, confidentiality, and professionalism.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Serving clients across Bangalore, Karnataka, throughout India, and representing NRI clients globally with structured and professional legal representation.
            </p> */}
          </div>

          {/* ================= PRACTICE AREAS ================= */}
          <div>
            <h3 className={footerHeading}>Practice Areas</h3>
            <ul className="space-y-3 text-sm max-h-64  pr-2">
              {practiceAreas.map((area, i) => (
                <li key={i}>
                  <Link
                    href={area.href}
                    className="text-gray-300 hover:text-[#C9A24D] transition"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= LEGAL SERVICES ================= */}
          <div>
            <h3 className={footerHeading}>Legal Services</h3>
            <ul className="space-y-3 text-sm">
              {legalServices.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-[#C9A24D] transition"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h3 className={footerHeading}>Office Hours</h3>
              <p className="text-gray-300 text-sm">
                Monday – Saturday<br />
                9:30 AM – 6:30 PM
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Same-day consultation available.<br />
                Response within 24 hours guaranteed.
              </p>
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className={footerHeading}>Office Address</h3>

            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              S Jain & Attorneys<br />
              [Full Office Address Line 1]<br />
              [Full Office Address Line 2]<br />
              Bangalore – 5600XX<br />
              Karnataka, India
            </p>

            <p className="text-gray-300 text-sm mb-2">
              📞 +91 XXXXX XXXXX
            </p>

            <p className="text-gray-300 text-sm mb-4">
              📧 info@yourlawfirm.com
            </p>

            <div className="rounded-lg overflow-hidden border border-gray-800">
              <iframe
                src="https://maps.google.com/maps?q=Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="180"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="border-t border-[#1a1a1a]">
        <div className={`${container} py-6 flex flex-col md:flex-row justify-between items-center gap-4`}>

          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2026 S Jain & Attorneys | Law Firm in Bangalore | All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-6 text-sm justify-center">
            

            {legalLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="text-gray-400 hover:text-[#C9A24D]"
              >
                {link.name}
              </Link>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}