
// // // // // "use client";

// // // // // import Link from "next/link";
// // // // // import { useState } from "react";

// // // // // const Navbar = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // //   return (
// // // // //     <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1C2D] text-white shadow-md">
// // // // //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

// // // // //         {/* Logo */}
// // // // //         <Link href="/" className="text-2xl font-serif font-semibold tracking-wide">
// // // // //           <span className="text-white">S Jain</span>{" "}
// // // // //           <span className="text-[#C9A24D]">Attorneys</span>
// // // // //         </Link>

// // // // //         {/* Desktop Menu */}
// // // // //         <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
// // // // //           {[
// // // // //             "Home",
// // // // //             "About Us",
// // // // //             "Practice Areas",
// // // // //             "Our Team",
// // // // //             "Insights",
// // // // //             "Contact",
// // // // //           ].map((item, index) => (
// // // // //             <li key={index}>
// // // // //               <Link
// // // // //                 href="/"
// // // // //                 className="hover:text-[#C9A24D] transition duration-300"
// // // // //               >
// // // // //                 {item}
// // // // //               </Link>
// // // // //             </li>
// // // // //           ))}

// // // // //           {/* CTA Button */}
// // // // //           <li>
// // // // //             <Link
// // // // //               href="/"
// // // // //               className="ml-4 px-5 py-2 bg-[#C9A24D] text-[#0B1C2D] rounded-md font-semibold hover:opacity-90 transition"
// // // // //             >
// // // // //               Book Consultation
// // // // //             </Link>
// // // // //           </li>
// // // // //         </ul>

// // // // //         {/* Mobile Button */}
// // // // //         <button
// // // // //           className="md:hidden text-2xl"
// // // // //           onClick={() => setIsOpen(!isOpen)}
// // // // //         >
// // // // //           ☰
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Mobile Menu */}
// // // // //       {isOpen && (
// // // // //         <div className="md:hidden bg-[#0B1C2D] px-6 pb-6 space-y-4 text-center">
// // // // //           {[
// // // // //             "Home",
// // // // //             "About Us",
// // // // //             "Practice Areas",
// // // // //             "Our Team",
// // // // //             "Insights",
// // // // //             "Contact",
// // // // //           ].map((item, index) => (
// // // // //             <Link
// // // // //               key={index}
// // // // //               href="/"
// // // // //               className="block hover:text-[#C9A24D] transition"
// // // // //             >
// // // // //               {item}
// // // // //             </Link>
// // // // //           ))}

// // // // //           <Link
// // // // //             href="/"
// // // // //             className="inline-block mt-3 px-5 py-2 bg-[#C9A24D] text-[#0B1C2D] rounded-md font-semibold"
// // // // //           >
// // // // //             Book Consultation
// // // // //           </Link>
// // // // //         </div>
// // // // //       )}
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;

// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import Link from "next/link";

// // // // // const Navbar = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false);

// // // // //   return (
// // // // //     <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111] text-[#F5F5F5] shadow-md">
// // // // //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

// // // // //         {/* Logo */}
// // // // //         <Link href="/" className="text-2xl font-serif font-semibold tracking-wide">
// // // // //           <span className="text-[#F5F5F5]">S Jain</span>{" "}
// // // // //           <span className="text-[#C9A24D]">Attorneys</span>
// // // // //         </Link>

// // // // //         {/* Desktop Menu */}
// // // // //         <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
// // // // //           {["Home", "About Us", "Practice Areas", "Our Team", "Insights", "Contact"].map((item, index) => (
// // // // //             <li key={index}>
// // // // //               <Link href="/" className="hover:text-[#C9A24D] transition duration-300">{item}</Link>
// // // // //             </li>
// // // // //           ))}

// // // // //           {/* CTA Button */}
// // // // //           <li>
// // // // //             <Link
// // // // //               href="/"
// // // // //               className="ml-4 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold hover:opacity-90 transition"
// // // // //             >
// // // // //               Book Consultation
// // // // //             </Link>
// // // // //           </li>
// // // // //         </ul>

// // // // //         {/* Mobile Menu Button */}
// // // // //         <button
// // // // //           className="md:hidden text-3xl font-bold"
// // // // //           onClick={() => setIsOpen(!isOpen)}
// // // // //           aria-label="Toggle Menu"
// // // // //         >
// // // // //           {isOpen ? "×" : "☰"} {/* Cross when open, hamburger when closed */}
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Mobile Menu */}
// // // // //       {isOpen && (
// // // // //         <div className="md:hidden bg-[#111111] px-6 pb-6 space-y-4 text-center">
// // // // //           {["Home", "About Us", "Practice Areas", "Our Team", "Insights", "Contact"].map((item, index) => (
// // // // //             <Link
// // // // //               key={index}
// // // // //               href="/"
// // // // //               className="block hover:text-[#C9A24D] transition"
// // // // //               onClick={() => setIsOpen(false)} // close menu when link clicked
// // // // //             >
// // // // //               {item}
// // // // //             </Link>
// // // // //           ))}
// // // // //           <Link
// // // // //             href="/"
// // // // //             className="inline-block mt-3 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold"
// // // // //             onClick={() => setIsOpen(false)} // close menu when button clicked
// // // // //           >
// // // // //             Book Consultation
// // // // //           </Link>
// // // // //         </div>
// // // // //       )}
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;


// // // // "use client";

// // // // import { useState } from "react";
// // // // import Link from "next/link";

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false);

// // // //   const menuItems = [
// // // //     { name: "Home", href: "#hero" },
// // // //     { name: "About Us", href: "#about" },
// // // //     { name: "Practice Areas", href: "#practice" },
// // // //     { name: "Our Team", href: "#team" },
// // // //     { name: "Insights", href: "#blog" },
// // // //     { name: "Contact", href: "#contact" },
// // // //   ];

// // // //   const scrollToSection = (e, href) => {
// // // //     e.preventDefault();
// // // //     const id = href.replace("#", "");
// // // //     const element = document.getElementById(id);
// // // //     if (element) {
// // // //       element.scrollIntoView({ behavior: "smooth" });
// // // //     }
// // // //     setIsOpen(false); // close mobile menu
// // // //   };

// // // //   return (
// // // //     <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111] text-[#F5F5F5] shadow-md">
// // // //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
// // // //         {/* Logo */}
// // // //         <Link href="/" className="text-2xl font-serif font-semibold tracking-wide">
// // // //           <span className="text-[#F5F5F5]">S Jain</span>{" "}
// // // //           <span className="text-[#C9A24D]">Attorneys</span>
// // // //         </Link>

// // // //         {/* Desktop Menu */}
// // // //         <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
// // // //           {menuItems.map((item, index) => (
// // // //             <li key={index}>
// // // //               <a
// // // //                 href={item.href}
// // // //                 onClick={(e) => scrollToSection(e, item.href)}
// // // //                 className="hover:text-[#C9A24D] transition duration-300"
// // // //               >
// // // //                 {item.name}
// // // //               </a>
// // // //             </li>
// // // //           ))}

// // // //           {/* CTA Button */}
// // // //           <li>
// // // //             <a
// // // //               href="#consultation"
// // // //               onClick={(e) => scrollToSection(e, "#consultation")}
// // // //               className="ml-4 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold hover:opacity-90 transition"
// // // //             >
// // // //               Book Consultation
// // // //             </a>
// // // //           </li>
// // // //         </ul>

// // // //         {/* Mobile Menu Button */}
// // // //         <button
// // // //           className="md:hidden text-3xl font-bold"
// // // //           onClick={() => setIsOpen(!isOpen)}
// // // //           aria-label="Toggle Menu"
// // // //         >
// // // //           {isOpen ? "×" : "☰"}
// // // //         </button>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       {isOpen && (
// // // //         <div className="md:hidden bg-[#111111] px-6 pb-6 space-y-4 text-center">
// // // //           {menuItems.map((item, index) => (
// // // //             <a
// // // //               key={index}
// // // //               href={item.href}
// // // //               onClick={(e) => scrollToSection(e, item.href)}
// // // //               className="block hover:text-[#C9A24D] transition"
// // // //             >
// // // //               {item.name}
// // // //             </a>
// // // //           ))}

// // // //           <a
// // // //             href="#consultation"
// // // //             onClick={(e) => scrollToSection(e, "#consultation")}
// // // //             className="inline-block mt-3 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold"
// // // //           >
// // // //             Book Consultation
// // // //           </a>
// // // //         </div>
// // // //       )}
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;


// // // "use client";

// // // import { useState } from "react";
// // // import Link from "next/link";

// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   const links = [
// // //     { name: "Home", href: "#hero" },
// // //     { name: "About Us", href: "#about" },
// // //     { name: "Practice Areas", href: "#practice" },
// // //     { name: "Our Team", href: "#team" },
// // //     { name: "Insights", href: "#blog" },
// // //     { name: "Contact", href: "#consultation" },
// // //   ];

// // //   const handleScroll = (e, href) => {
// // //     e.preventDefault();
// // //     const id = href.replace("#", "");
// // //     const element = document.getElementById(id);
// // //     if (element) {
// // //       element.scrollIntoView({ behavior: "smooth" });
// // //     }
// // //     setIsOpen(false); // close mobile menu after click
// // //   };

// // //   return (
// // //     <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111] text-[#F5F5F5] shadow-md">
// // //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

// // //         {/* Logo */}
// // //         <Link href="/" className="text-2xl font-serif font-semibold tracking-wide">
// // //           <span className="text-[#F5F5F5]">S Jain</span>{" "}
// // //           <span className="text-[#C9A24D]">Attorneys</span>
// // //         </Link>

// // //         {/* Desktop Menu */}
// // //         <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
// // //           {links.map((link, index) => (
// // //             <li key={index}>
// // //               <a
// // //                 href={link.href}
// // //                 onClick={(e) => handleScroll(e, link.href)}
// // //                 className="hover:text-[#C9A24D] transition duration-300"
// // //               >
// // //                 {link.name}
// // //               </a>
// // //             </li>
// // //           ))}

// // //           {/* CTA Button */}
// // //           <li>
// // //             <Link
// // //               href="/"
// // //               className="ml-4 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold hover:opacity-90 transition"
// // //             >
// // //               Book Consultation
// // //             </Link>
// // //           </li>
// // //         </ul>

// // //         {/* Mobile Menu Button */}
// // //         <button
// // //           className="md:hidden text-3xl font-bold"
// // //           onClick={() => setIsOpen(!isOpen)}
// // //           aria-label="Toggle Menu"
// // //         >
// // //           {isOpen ? "×" : "☰"}
// // //         </button>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       {isOpen && (
// // //         <div className="md:hidden bg-[#111111] px-6 pb-6 space-y-4 text-center">
// // //           {links.map((link, index) => (
// // //             <a
// // //               key={index}
// // //               href={link.href}
// // //               onClick={(e) => handleScroll(e, link.href)}
// // //               className="block hover:text-[#C9A24D] transition"
// // //             >
// // //               {link.name}
// // //             </a>
// // //           ))}
// // //           <Link
// // //             href="/"
// // //             className="inline-block mt-3 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold"
// // //             onClick={() => setIsOpen(false)}
// // //           >
// // //             Book Consultation
// // //           </Link>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;


// // "use client";

// // import { useState } from "react";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const links = [
// //     { name: "Home", href: "#hero" },
// //     { name: "About Us", href: "#about" },
// //     { name: "Practice Areas", href: "#practice" },
// //     { name: "Our Team", href: "#team" },
// //     { name: "Insights", href: "#blog" },
// //     { name: "Contact", href: "#consultation" },
// //   ];

// //   const handleClick = (href) => {
// //     setIsOpen(false); // close mobile menu
// //     const element = document.querySelector(href);
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111] text-[#F5F5F5] shadow-md">
// //       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
// //         {/* Logo */}
// //         <div className="text-2xl font-serif font-semibold tracking-wide">
// //           <span className="text-[#F5F5F5]">S Jain</span>{" "}
// //           <span className="text-[#C9A24D]">Attorneys</span>
// //         </div>

// //         {/* Desktop Menu */}
// //         <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
// //           {links.map((link, i) => (
// //             <li key={i}>
// //               <button
// //                 onClick={() => handleClick(link.href)}
// //                 className="hover:text-[#C9A24D] transition duration-300"
// //               >
// //                 {link.name}
// //               </button>
// //             </li>
// //           ))}
// //           <li>
// //             <button className="ml-4 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold hover:opacity-90 transition">
// //               Book Consultation
// //             </button>
// //           </li>
// //         </ul>

// //         {/* Mobile Menu Button */}
// //         <button
// //           className="md:hidden text-3xl font-bold"
// //           onClick={() => setIsOpen(!isOpen)}
// //         >
// //           {isOpen ? "×" : "☰"}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isOpen && (
// //         <div className="md:hidden bg-[#111111] px-6 pb-6 space-y-4 text-center">
// //           {links.map((link, i) => (
// //             <button
// //               key={i}
// //               onClick={() => handleClick(link.href)}
// //               className="block hover:text-[#C9A24D] transition"
// //             >
// //               {link.name}
// //             </button>
// //           ))}
// //           <button className="inline-block mt-3 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold">
// //             Book Consultation
// //           </button>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }


// // "use client";

// // import { useState, useEffect } from "react";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [showDisclaimer, setShowDisclaimer] = useState(false);

// //   const links = [
// //     { name: "Home", href: "#hero" },
// //     { name: "About Us", href: "#about" },
// //     { name: "Practice Areas", href: "#practice" },
// //     { name: "Our Team", href: "#team" },
// //     { name: "Insights", href: "#blog" },
// //     { name: "Contact", href: "#consultation" },
// //   ];

// //   // Show disclaimer only once per session
// //   useEffect(() => {
// //     const accepted = sessionStorage.getItem("disclaimerAccepted");
// //     if (!accepted) {
// //       setShowDisclaimer(true);
// //     }
// //   }, []);

// //   const handleAccept = () => {
// //     sessionStorage.setItem("disclaimerAccepted", "true");
// //     setShowDisclaimer(false);
// //   };

// //   const handleClick = (href) => {
// //     setIsOpen(false);
// //     const element = document.querySelector(href);
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <>
// //       {/* ================= NAVBAR ================= */}
// //       <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111] text-[#F5F5F5] shadow-md">
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

// //           {/* Logo */}
// //           <div className="text-2xl font-serif font-semibold tracking-wide">
// //             <span className="text-[#F5F5F5]">S Jain</span>{" "}
// //             <span className="text-[#C9A24D]">Attorneys</span>
// //           </div>

// //           {/* Desktop Menu */}
// //           <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
// //             {links.map((link, i) => (
// //               <li key={i}>
// //                 <button
// //                   onClick={() => handleClick(link.href)}
// //                   className="hover:text-[#C9A24D] transition duration-300"
// //                 >
// //                   {link.name}
// //                 </button>
// //               </li>
// //             ))}
// //             <li>
// //               <button className="ml-4 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold hover:opacity-90 transition">
// //                 Book Consultation
// //               </button>
// //             </li>
// //           </ul>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="md:hidden text-3xl font-bold"
// //             onClick={() => setIsOpen(!isOpen)}
// //           >
// //             {isOpen ? "×" : "☰"}
// //           </button>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isOpen && (
// //           <div className="md:hidden bg-[#111111] px-6 pb-6 space-y-4 text-center">
// //             {links.map((link, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => handleClick(link.href)}
// //                 className="block hover:text-[#C9A24D] transition"
// //               >
// //                 {link.name}
// //               </button>
// //             ))}
// //             <button className="inline-block mt-3 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold">
// //               Book Consultation
// //             </button>
// //           </div>
// //         )}
// //       </nav>

// //       {/* ================= DISCLAIMER MODAL ================= */}
// //       {showDisclaimer && (
// //         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] px-4">
// //           <div className="bg-white max-w-lg w-full p-8 rounded-lg shadow-xl text-center">
// //             <h2 className="text-2xl font-semibold mb-4 text-[#C9A24D]">
// //               Disclaimer
// //             </h2>

// //             <p className="text-sm text-gray-700 leading-relaxed">
// //               As per the rules of the Bar Council of India, law firms are not
// //               permitted to solicit work or advertise. By clicking “I Accept”,
// //               you acknowledge that you are seeking information about S Jain
// //               Attorneys voluntarily.
// //             </p>

// //             <button
// //               onClick={handleAccept}
// //               className="mt-6 px-6 py-2 bg-[#111111] text-[#C9A24D] rounded-md font-semibold hover:opacity-90 transition"
// //             >
// //               I Accept
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }


// // "use client";

// // import { useState, useEffect } from "react";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [showDisclaimer, setShowDisclaimer] = useState(false);

// //   const links = [
// //     { name: "Home", href: "#hero" },
// //     { name: "About Us", href: "#about" },
// //     { name: "Practice Areas", href: "#practice" },
// //     { name: "Our Team", href: "#team" },
// //     { name: "Insights", href: "#blog" },
// //     { name: "Contact", href: "#consultation" },
// //   ];

// //   // Show popup every time page loads
// //   useEffect(() => {
// //     setShowDisclaimer(true);
// //   }, []);

// //   const handleAccept = () => {
// //     setShowDisclaimer(false);
// //   };

// //   const handleClick = (href) => {
// //     setIsOpen(false);
// //     const element = document.querySelector(href);
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <>
// //       {/* ================= NAVBAR ================= */}
// //       <nav className="fixed top-0 left-0 w-full z-50  text-[#F5F5F5] shadow-md">
// //         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

// //           {/* Logo */}
// //           <div className="text-2xl font-serif font-semibold tracking-wide">
// //             <span className="text-[#F5F5F5]">S Jain</span>{" "}
// //             <span className="text-[#C9A24D]">Attorneys</span>
// //           </div>

// //           {/* Desktop Menu */}
// //           <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
// //             {links.map((link, i) => (
// //               <li key={i}>
// //                 <button
// //                   onClick={() => handleClick(link.href)}
// //                   className="hover:text-[#C9A24D] transition duration-300"
// //                 >
// //                   {link.name}
// //                 </button>
// //               </li>
// //             ))}

// //             <li>
// //               <button className="ml-4 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold hover:opacity-90 transition">
// //                 Book Consultation
// //               </button>
// //             </li>
// //           </ul>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="md:hidden text-3xl font-bold"
// //             onClick={() => setIsOpen(!isOpen)}
// //           >
// //             {isOpen ? "×" : "☰"}
// //           </button>
// //         </div>

// //         {/* Mobile Menu */}
// //         {isOpen && (
// //           <div className="md:hidden bg-[#111111] px-6 pb-6 space-y-4 text-center">
// //             {links.map((link, i) => (
// //               <button
// //                 key={i}
// //                 onClick={() => handleClick(link.href)}
// //                 className="block hover:text-[#C9A24D] transition"
// //               >
// //                 {link.name}
// //               </button>
// //             ))}
// //             <button className="inline-block mt-3 px-5 py-2 bg-[#C9A24D] text-[#111111] rounded-md font-semibold">
// //               Book Consultation
// //             </button>
// //           </div>
// //         )}
// //       </nav>

// //       {/* ================= DISCLAIMER MODAL ================= */}
// //     {showDisclaimer && (
// //   <div className="fixed inset-0 bg-black/60  flex items-center justify-center z-[9999] px-4">
    
// //     <div className="bg-[#f1f1f1] max-w-4xl w-full p-10 rounded-2xl shadow-2xl text-center">
      
// //       <h2 className="text-3xl font-bold mb-6 text-gray-800">
// //         Disclaimer
// //       </h2>

// //       <p className="text-gray-700 leading-relaxed text-base">
// //         This website is not intended to be a source of advertising or
// //         solicitation of any client including you or anyone interested through
// //         you. None of the information contained on the website is like a legal
// //         opinion or otherwise, amounts to any legal advice. S Jain Attorneys
// //         wish to inform you that no Advocate-Client relationship is formed by
// //         entering the Website. S Jain Attorneys are not liable for any
// //         consequence of any action taken by the user relying on material /
// //         information provided under this website. Click below if You Agree to
// //         above Terms and Conditions.
// //       </p>

// //       <button
// //         onClick={handleAccept}
// //         className="mt-8 px-8 py-3 bg-[#E5A134] text-black font-semibold rounded-md hover:opacity-90 transition"
// //       >
// //         Agree
// //       </button>

// //     </div>
// //   </div>
// // )}


// //     </>
// //   );
// // }


// "use client";

// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDisclaimer, setShowDisclaimer] = useState(false);

//   const links = [
//     { name: "Home", href: "#hero" },
//     { name: "About Us", href: "#about" },
//     { name: "Practice Areas", href: "#practice" },
//     { name: "Our Team", href: "#team" },
//     { name: "Insights / Blog", href: "#blog" },
//     { name: "Contact", href: "#consultation" },
//   ];

//   // Show disclaimer on page load
//   useEffect(() => {
//     setShowDisclaimer(true);
//     document.body.style.overflow = "hidden";
//   }, []);

//   const handleAccept = () => {
//     setShowDisclaimer(false);
//     document.body.style.overflow = "auto";
//   };

//   const handleClick = (href) => {
//     setIsOpen(false);
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1C2D] text-white shadow-md">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//           {/* Logo */}
//           <div className="text-2xl font-serif font-semibold tracking-wide">
//             <span className="text-white">S Jain</span>{" "}
//             <span className="text-[#C9A24D]">Attorneys</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
//             {links.map((link, i) => (
//               <li key={i}>
//                 <button
//                   onClick={() => handleClick(link.href)}
//                   className="hover:text-[#C9A24D] transition duration-300"
//                 >
//                   {link.name}
//                 </button>
//               </li>
//             ))}

//             {/* CTA Button */}
//             <li>
//               <button className="ml-4 px-6 py-2 bg-[#C9A24D] text-[#0B1C2D] rounded-md font-semibold hover:opacity-90 transition">
//                 Book Consultation
//               </button>
//             </li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-3xl font-bold"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "×" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-[#0B1C2D] px-6 pb-6 space-y-4 text-center">
//             {links.map((link, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleClick(link.href)}
//                 className="block hover:text-[#C9A24D] transition"
//               >
//                 {link.name}
//               </button>
//             ))}
//             <button className="inline-block mt-3 px-6 py-2 bg-[#C9A24D] text-[#0B1C2D] rounded-md font-semibold">
//               Book Consultation
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* ================= DISCLAIMER MODAL ================= */}
//       {showDisclaimer && (
//         <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] px-4">
          
//           <div className="bg-[#F4F4F4] max-w-4xl w-full p-10 rounded-lg shadow-2xl text-center">

//             <h2 className="text-3xl font-bold mb-6 text-[#0B1C2D]">
//               Disclaimer
//             </h2>

//             <p className="text-gray-700 leading-relaxed text-base">
//               This website is not intended to be a source of advertising or
//               solicitation of any client including you or anyone interested
//               through you. None of the information contained on the website
//               amounts to legal advice. S Jain Attorneys wish to inform you
//               that no Advocate-Client relationship is formed by entering
//               the website. S Jain Attorneys are not liable for any
//               consequence of any action taken by the user relying on
//               material/information provided under this website.
//               Click below if you agree to the above Terms and Conditions.
//             </p>

//             <button
//               onClick={handleAccept}
//               className="mt-8 px-8 py-3 bg-[#C9A24D] text-[#0B1C2D] font-semibold rounded-md hover:opacity-90 transition"
//             >
//               Agree
//             </button>

//           </div>
//         </div>
//       )}
//     </>
//   );
// // }
// "use client";

// import { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showDisclaimer, setShowDisclaimer] = useState(false);

//   const links = [
//     { name: "Home", href: "#hero" },
//     { name: "About Us", href: "#about" },
//     { name: "Practice Areas / Our Services", href: "#practice" },
//     { name: "Our Team", href: "#team" },
//     { name: "Insights / Blog", href: "#blog" },
//     { name: "Contact", href: "#contact" },
//   ];

//   // Show disclaimer on first load
//   useEffect(() => {
//     setShowDisclaimer(true);
//     document.body.style.overflow = "hidden";
//   }, []);

//   const handleAccept = () => {
//     setShowDisclaimer(false);
//     document.body.style.overflow = "auto";
//   };

//   const handleClick = (href) => {
//     setIsOpen(false);
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1C2D] text-white shadow-md">
//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//           {/* Logo */}
//           <div className="text-2xl font-serif font-semibold tracking-wide">
//             <span className="text-white">S Jain</span>{" "}
//             <span className="text-[#C9A24D]">Attorneys</span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
//             {links.map((link, i) => (
//               <li key={i}>
//                 <button
//                   onClick={() => handleClick(link.href)}
//                   className="hover:text-[#C9A24D] transition duration-300"
//                 >
//                   {link.name}
//                 </button>
//               </li>
//             ))}

//             {/* CTA Button */}
//             <li>
//               <button className="ml-4 px-6 py-2 bg-[#C9A24D] text-[#0B1C2D] rounded-md font-semibold hover:bg-[#b8923f] transition duration-300">
//                 Book Consultation
//               </button>
//             </li>
//           </ul>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-3xl font-bold"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "×" : "☰"}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <div className="md:hidden bg-[#0B1C2D] px-6 pb-6 space-y-4 text-center">
//             {links.map((link, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleClick(link.href)}
//                 className="block w-full hover:text-[#C9A24D] transition"
//               >
//                 {link.name}
//               </button>
//             ))}
//             <button className="inline-block mt-3 px-6 py-2 bg-[#C9A24D] text-[#0B1C2D] rounded-md font-semibold hover:bg-[#b8923f] transition duration-300">
//               Book Consultation
//             </button>
//           </div>
//         )}
//       </nav>

//       {/* ================= DISCLAIMER MODAL ================= */}
//       {showDisclaimer && (
//         <div className="fixed inset-0 bg-black/60  flex items-center justify-center z-[9999] px-4">
          
//           <div className="bg-[#F4F4F4] max-w-4xl w-full p-10 rounded-md shadow-2xl text-center">

//             <h2 className="text-3xl font-bold mb-6 text-[#0B1C2D]">
//               Disclaimer
//             </h2>

//             <p className="text-gray-700 leading-relaxed text-base">
//               This website is not intended to be a source of advertising or
//               solicitation of any client including you or anyone interested
//               through you. None of the information contained on the website
//               amounts to legal advice. S Jain Attorneys wish to inform you
//               that no Advocate-Client relationship is formed by entering
//               the website. S Jain Attorneys are not liable for any
//               consequence of any action taken by the user relying on
//               material/information provided under this website.
//               Click below if you agree to the above Terms and Conditions.
//             </p>

//             <button
//               onClick={handleAccept}
//               className="mt-8 px-8 py-3 bg-[#C9A24D] text-[#0B1C2D] font-semibold rounded-md hover:bg-[#b8923f] transition duration-300"
//             >
//               Agree
//             </button>

//           </div>
//         </div>
//       )}
//     </>
//   );
// }



// "use client";

// import { useState, useEffect } from "react";

// export default function Navbar() {

//   const [isOpen, setIsOpen] = useState(false);
//   const [showDisclaimer, setShowDisclaimer] = useState(false);

//   const links = [
//     { name: "Home", href: "#hero" },
//     { name: "About Us", href: "#about" },
//     { name: "Practice Areas", href: "#practice" },
//     { name: "Our Team", href: "#team" },
//     { name: "Insights", href: "#blog" },
//     { name: "Contact", href: "#contact" },
//   ];

//   // Show disclaimer only on first visit
//   useEffect(() => {
//     const accepted = localStorage.getItem("disclaimerAccepted");

//     if (!accepted) {
//       setShowDisclaimer(true);
//       document.body.style.overflow = "hidden";
//     }
//   }, []);

//   const handleAccept = () => {
//     localStorage.setItem("disclaimerAccepted", "true");
//     setShowDisclaimer(false);
//     document.body.style.overflow = "auto";
//   };

//   const handleClick = (href) => {
//     setIsOpen(false);

//     const element = document.querySelector(href);

//     if (element) {
//       element.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}

//       <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1C2D] shadow-md">

//         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

//           {/* LOGO */}
//           <div className="text-2xl font-serif font-semibold tracking-wide cursor-pointer">

//             <span className="text-white">
//               S Jain
//             </span>

//             <span className="text-[#C9A24D] ml-1">
//               Attorneys
//             </span>

//           </div>


//           {/* DESKTOP MENU */}

//           <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">

//             {links.map((link, index) => (

//               <li key={index}>

//                 <button
//                   onClick={() => handleClick(link.href)}
//                   className="hover:text-[#C9A24D] transition duration-300"
//                 >
//                   {link.name}
//                 </button>

//               </li>

//             ))}

//             {/* CTA BUTTON */}

//             <li>

//               <button
//                 className="
//                 ml-6
//                 px-6
//                 py-2
//                 bg-[#C9A24D]
//                 text-[#0B1C2D]
//                 font-semibold
//                 rounded-md
//                 hover:bg-[#b8923f]
//                 transition duration-300
//                 shadow-sm
//                 "
//               >
//                 Book Consultation
//               </button>

//             </li>

//           </ul>


//           {/* MOBILE MENU BUTTON */}

//           <button
//             className="md:hidden text-white text-3xl"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "×" : "☰"}
//           </button>

//         </div>


//         {/* MOBILE MENU */}

//         {isOpen && (

//           <div className="md:hidden bg-[#0B1C2D] px-6 pb-6 text-center">

//             {links.map((link, index) => (

//               <button
//                 key={index}
//                 onClick={() => handleClick(link.href)}
//                 className="block w-full py-2 text-white hover:text-[#C9A24D]"
//               >
//                 {link.name}
//               </button>

//             ))}

//             <button
//               className="
//               mt-4
//               px-6
//               py-2
//               bg-[#C9A24D]
//               text-[#0B1C2D]
//               font-semibold
//               rounded-md
//               hover:bg-[#b8923f]
//               transition
//               "
//             >
//               Book Consultation
//             </button>

//           </div>

//         )}

//       </nav>



//       {/* ================= DISCLAIMER MODAL ================= */}

//       {showDisclaimer && (

//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] px-4">

//           <div className="
//             bg-[#F4F4F4]
//             max-w-3xl
//             w-full
//             p-10
//             rounded-md
//             shadow-2xl
//             text-center
//           ">

//             <h2 className="text-3xl font-bold mb-6 text-[#0B1C2D]">
//               Disclaimer
//             </h2>


//             <p className="text-gray-700 leading-relaxed text-base">

//               This website is not intended to be a source of advertising or solicitation.

//               The information contained herein is for informational purposes only and does not constitute legal advice.

//               Accessing this website does not create an Advocate-Client relationship.

//               S Jain Attorneys shall not be liable for any consequences arising from reliance on the information provided.

//               By clicking “Agree”, you acknowledge and accept this disclaimer.

//             </p>


//             <button
//               onClick={handleAccept}
//               className="
//               mt-8
//               px-8
//               py-3
//               bg-[#C9A24D]
//               text-[#0B1C2D]
//               font-semibold
//               rounded-md
//               hover:bg-[#b8923f]
//               transition duration-300
//               "
//             >
//               Agree
//             </button>

//           </div>

//         </div>

//       )}

//     </>
//   );
// }


"use client";

import { useState, useEffect } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Practice Areas", href: "#practice" },
    { name: "Our Team", href: "#team" },
    { name: "Insights", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  // Always show popup on refresh
  useEffect(() => {
    setShowDisclaimer(true);
    document.body.style.overflow = "hidden";
  }, []);

  const handleAccept = () => {
    setShowDisclaimer(false);
    document.body.style.overflow = "auto";
  };

  const handleDisagree = () => {
    window.location.href = "https://www.google.com";
  };

  const handleClick = (href) => {
    setIsOpen(false);

    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>

      {/* ================= NAVBAR ================= */}

     <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">

  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    {/* LOGO */}
    <div className="text-2xl font-serif font-semibold tracking-wide">
      <span className="text-white">S Jain</span>
      <span className="text-[#C9A24D] ml-1">Attorneys</span>
    </div>


    {/* DESKTOP MENU */}
    <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">

      {links.map((link, index) => (
        <li key={index}>
          <button
            onClick={() => handleClick(link.href)}
            className="hover:text-[#C9A24D] transition duration-300"
          >
            {link.name}
          </button>
        </li>
      ))}

      {/* CTA BUTTON */}
      <li>
        <button
          className="
          ml-6
          px-6
          py-2
          bg-[#C9A24D]
          hover:bg-[#A8641E]
          text-black
          font-semibold
          transition duration-300
          "
          style={{ borderRadius: "5px" }}
        >
          Book Consultation
        </button>
      </li>

    </ul>


    {/* MOBILE BUTTON */}
    <button
      className="md:hidden text-3xl text-white"
      onClick={() => setIsOpen(!isOpen)}
    >
      ☰
    </button>

  </div>

</nav>



      {/* ================= DISCLAIMER POPUP ================= */}

      {showDisclaimer && (

        <div className="fixed inset-0 bg-black/70  flex items-center justify-center z-9999 px-4">

          <div className="
            bg-[#F8F8F8]
            max-w-4xl
            w-full
            px-12
            py-10
            rounded-xl
            shadow-2xl
            text-center
          ">

            {/* LOGO */}
            <div className="mb-6">
              <div className="text-3xl font-bold tracking-wide text-[#0B1C2D]">
                S Jain <span className="text-[#C9A24D]">Attorneys</span>
              </div>
            </div>


            {/* TITLE */}
            <h2 className="text-xl tracking-[3px] font-semibold text-[#0B1C2D] mb-6">
              DISCLAIMER & CONFIRMATION
            </h2>


            {/* ===== YOUR ORIGINAL CONTENT (NOT CHANGED) ===== */}

            <div className="text-gray-600 text-sm leading-relaxed text-left space-y-3">

              <p>
                As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise.
                The user acknowledges the following:
              </p>

              <ul className="list-disc pl-6 space-y-2">

                <li>
                  There has been no advertisement, personal communication, solicitation,
                  invitation or inducement of any sort whatsoever from us or any of our members
                  to solicit any work through this website;
                </li>

                <li>
                  The user wishes to gain more information about us for his/her own information and use;
                </li>

                <li>
                  The information about us is provided to the user only on his/her specific request and
                  any information obtained or materials downloaded from this website is completely at the
                  user's volition and any transmission, receipt or use of this site would not create any
                  lawyer-client relationship.
                </li>

              </ul>

              <p>
                The information provided under this website is solely available at your request for informational
                purposes only and should not be interpreted as soliciting or advertisement.
              </p>

              <p>
                We are not liable for any consequence of any action taken by the user relying on material/information
                provided under this website.
              </p>

              <p>
                In cases where the user has any legal issues, he/she must seek independent legal advice.
              </p>

              <p>
                All disputes, if any, are subject to the exclusive jurisdiction of courts at New Delhi, India only.
              </p>

            </div>


            {/* BUTTONS */}
            <div className="mt-8 flex justify-center gap-6">

              <button
                onClick={handleAccept}
                className="
                px-10
                py-3
                bg-[#E9A63A]
                hover:bg-[#A8641E]
                text-white
                font-semibold
                transition
                "
                style={{ borderRadius: "5px" }}
              >
                Agree
              </button>


              <button
                onClick={handleDisagree}
                className="
                px-10
                py-3
                bg-[#E9A63A]
                hover:bg-[#A8641E]
                text-white
                font-semibold
                transition
                "
                style={{ borderRadius: "5px" }}
              >
                Disagree
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}
