
// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";
// // // import { ChevronDown } from "lucide-react";


// // // export default function Navbar() {

// // //   const pathname = usePathname();

// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [showDisclaimer, setShowDisclaimer] = useState(false);
// // //   const [servicesOpen, setServicesOpen] = useState(false);
// // //   const [isScrolled, setIsScrolled] = useState(false);



// // //   // const links = [
// // //   //   { name: "Home", href: "/#hero" },
// // //   //   { name: "About Us", href: "/about" },
// // //   //   // { name: "Practice Areas", href: "/#practice" },
// // //   //   // { name: "Our Team", href: "/team" },
// // //   //   //     // { name: "Insights", href: "/#blog" },
// // //   //   { name: "Contact", href: "/contact" },
// // //   // ];
// // //   const links = [
// // //   { name: "Home", href: "/" },
// // //   { name: "About Us", href: "/about" },
// // //   { name: "Our Team", href: "/team" },
// // //   { name: "Insights", href: "/insights" },
// // //   { name: "Contact Us", href: "/contact" },
// // // ];

// // // const mobileMenu = [
// // //   { name: "Home", href: "/" },
// // //   { name: "About Us", href: "/about" },
// // //   { name: "Practice Areas", isDropdown: true },
// // //   { name: "Our Team", href: "/team" },
// // //   { name: "Insights", href: "/insights" },
// // //   { name: "Contact Us", href: "/contact" },
// // // ];

// // //   const practiceAreas = [  
// // //     { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
// // //     { name: "Civil Litigation", href: "/services/civil-litigation" },
// // //     { name: "Criminal Defense & Prosecution", href: "/services/criminal-defense" },
// // //     { name: "Family & Divorce Law", href: "/services/family-divorce-law" },
// // //     { name: "Property & Real Estate Law", href: "/services/property-real-estate-law" },
// // //     { name: "Legal Advisory & Regulatory Compliance", href: "/services/legal-advisory-regulatory-compliance" },
// // //     { name: "NRI Legal Services", href: "/services/nri-legal-services" },
// // //     { name: "Cheque Bounce & Negotiable Instruments Cases", href: "/services/cheque-bounce-ni-cases" },
// // //     { name: "High Court & Supreme Court Practice", href: "/services/highcourt-supremecourt-practice" },
// // //     { name: "Consumer Protection Law", href: "/services/consumer-protection-law" },
// // //     { name: "Mediation, Counselling & ADR", href: "/services/mediation-adr" },
// // //     { name: "International Private Law", href: "/services/international-private-law" },
// // //   ];



// // //   useEffect(() => {

// // //     if (pathname === "/") {

// // //       const alreadyShown = sessionStorage.getItem("disclaimerShown");

// // //       if (!alreadyShown) {
// // //         setShowDisclaimer(true);
// // //         document.body.style.overflow = "hidden";
// // //       } else {
// // //         setShowDisclaimer(false);
// // //         document.body.style.overflow = "auto";
// // //       }

// // //     } else {
// // //       setShowDisclaimer(false);
// // //       document.body.style.overflow = "auto";
// // //     }

// // //   }, [pathname]);

// // //   useEffect(() => {

// // //     const handleScroll = () => {
// // //       if (window.scrollY > 50) {
// // //         setIsScrolled(true);
// // //       } else {
// // //         setIsScrolled(false);
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);

// // //     return () => window.removeEventListener("scroll", handleScroll);

// // //   }, []);



// // //   const handleAccept = () => {
// // //     setShowDisclaimer(false);
// // //     document.body.style.overflow = "auto";

// // //     sessionStorage.setItem("disclaimerShown", "true");
// // //   };

// // //   // const handleAccept = () => {
// // //   //   setShowDisclaimer(false);
// // //   //   document.body.style.overflow = "auto";
// // //   // };

// // //   const handleDisagree = () => {
// // //     window.location.href = "https://www.google.com";
// // //   };

// // //   return (
// // //     <>

// // //       {/* ================= NAVBAR ================= */}

// // //       {/* <nav className="absolute top-0 left-0 w-full z-50 bg-transparent"> */}
// // //       <nav
// // //         className={`
// // //     fixed top-0 left-0 w-full z-50
// // //     transition-all duration-300

// // //     ${isScrolled
// // //             ? "bg-black backdrop-blur-md shadow-lg py-3"
// // //             : "bg-transparent py-5"
// // //           }

// // //   `}
// // //       >


// // //         {/* <div className="max-w-7xl mx-auto px-9 py-8 flex items-center justify-between"> */}
// // //         {/* <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between"> */}
// // //         <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">



// // //           {/* LOGO */}
// // //           {/* <div className="text-2xl font-serif font-semibold tracking-wide">
// // //             <span className="text-white">S Jain</span>
// // //             <span className="text-[#C9A24D] ml-1">Attorneys</span>
// // //           </div> */}
// // //           <div className="flex items-center gap-3">

// // //             {/* Logo Image */}
// // //             <img
// // //               src="/logo2.jpg"   // place logo inside public folder
// // //               alt="S Jain Attorneys Logo"
// // //               // className="h-20 w-24 object-contain"
// // //               className="h-14 w-auto object-contain"

// // //             />

// // //             {/* Brand Name */}
// // //             {/* <div className="text-2xl font-serif font-semibold tracking-wide"> */}
// // //             <div className="text-xl md:text-2xl  font-medium tracking-wide">

// // //               <span className="text-white">S Jain</span>
// // //               <span className="text-[#C9A24D] ml-1">Attorneys</span>
// // //             </div>

// // //           </div>

// // //           {/* DESKTOP MENU */}
// // //           {/* DESKTOP MENU */}
// // // <ul className="hidden md:flex items-center space-x-8 text-sm font-normal text-white">

// // //   {/* Home and About Us */}
// // //   {links.slice(0, 2).map((link, index) => (
// // //     <li key={index}>
// // //       <Link
// // //         href={link.href}
// // //         className="relative hover:text-[#C9A24D] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A24D] after:transition-all after:duration-300 hover:after:w-full"
// // //       >
// // //         {link.name}
// // //       </Link>
// // //     </li>
// // //   ))}

// // //   {/* Practice Areas Dropdown */}
// // //   <li
// // //     className="relative"
// // //     onMouseEnter={() => setServicesOpen(true)}
// // //     onMouseLeave={() => setServicesOpen(false)}
// // //   >
// // //     <button className="hover:text-[#C9A24D] transition duration-300 flex items-center gap-1">
// // //       Practice Areas
// // //       <ChevronDown
// // //         size={16}
// // //         className={`transition-transform duration-300 ${
// // //           servicesOpen ? "rotate-180 text-[#C9A24D]" : ""
// // //         }`}
// // //       />
// // //     </button>

// // //     <div
// // //       className={`absolute top-full left-0 mt-3 w-64 bg-black border border-[#C9A24D]/30 shadow-xl rounded-md transition-all duration-300 ${
// // //         servicesOpen
// // //           ? "opacity-100 visible translate-y-0"
// // //           : "opacity-0 invisible -translate-y-2"
// // //       }`}
// // //     >
// // //       {practiceAreas.map((service, index) => (
// // //         <Link
// // //           key={index}
// // //           href={service.href}
// // //           className="block px-5 py-3 text-sm text-white hover:bg-[#C9A24D] hover:text-black transition duration-300 border-b border-gray-800 last:border-none"
// // //         >
// // //           {service.name}
// // //         </Link>
// // //       ))}
// // //     </div>
// // //   </li>

// // //   {/* Our Team, Insights, Contact Us */}
// // //   {links.slice(2).map((link, index) => (
// // //     <li key={index}>
// // //       <Link
// // //         href={link.href}
// // //         className="relative hover:text-[#C9A24D] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A24D] after:transition-all after:duration-300 hover:after:w-full"
// // //       >
// // //         {link.name}
// // //       </Link>
// // //     </li>
// // //   ))}

// // // </ul>

// // //           {/* ✅ MOBILE BUTTON */}
// // //           <button
// // //             className="md:hidden text-3xl text-white z-[999]"
// // //             onClick={() => setIsOpen(!isOpen)}
// // //           >
// // //             {isOpen ? "✕" : "☰"}
// // //           </button>

// // //         </div>


// // //         {/* ✅ MOBILE MENU */}
// // //  {/* ✅ MOBILE MENU DRAWER */}
// // // <div
// // //   className={`
// // //     fixed top-0 right-0 h-full w-[85%] max-w-[380px]
// // //     bg-black
// // //     transform transition-transform duration-300 ease-in-out
// // //     z-[998]
// // //     ${isOpen ? "translate-x-0" : "translate-x-full"}
// // //   `}
// // // >

// // //   <div className="flex flex-col mt-24 space-y-6 px-6 text-white overflow-y-auto h-full pb-10">

// // //     {mobileMenu.map((item, index) => {

// // //       if (item.isDropdown) {
// // //         return (
// // //           <div key={index} className="border-b border-gray-700 pb-4">

// // //             <button
// // //               onClick={() => setServicesOpen(!servicesOpen)}
// // //               className="flex items-center justify-between w-full text-lg hover:text-[#C9A24D]"
// // //             >
// // //               Practice Areas
// // //               <ChevronDown
// // //                 size={18}
// // //                 className={`transition-transform duration-300 ${
// // //                   servicesOpen ? "rotate-180 text-[#C9A24D]" : ""
// // //                 }`}
// // //               />
// // //             </button>

// // //             <div
// // //               className={`overflow-hidden transition-all duration-300 ${
// // //                 servicesOpen ? "max-h-[1000px] mt-4" : "max-h-0"
// // //               }`}
// // //             >
// // //               <div className="flex flex-col gap-3 pl-4">

// // //                 {practiceAreas.map((service, i) => (
// // //                   <Link
// // //                     key={i}
// // //                     href={service.href}
// // //                     onClick={() => {
// // //                       setIsOpen(false);
// // //                       setServicesOpen(false);
// // //                     }}
// // //                     className="text-sm text-gray-300 hover:text-[#C9A24D]"
// // //                   >
// // //                     {service.name}
// // //                   </Link>
// // //                 ))}

// // //               </div>
// // //             </div>

// // //           </div>
// // //         );
// // //       }

// // //       return (
// // //         <Link
// // //           key={index}
// // //           href={item.href}
// // //           onClick={() => setIsOpen(false)}
// // //           className="text-lg border-b border-gray-700 pb-4 hover:text-[#C9A24D]"
// // //         >
// // //           {item.name}
// // //         </Link>
// // //       );

// // //     })}

// // //   </div>

// // // </div>


// // //         {/* OVERLAY */}
// // //         {isOpen && (
// // //           <div
// // //             className="fixed inset-0 bg-black/50 z-[997]"
// // //             onClick={() => setIsOpen(false)}
// // //           />
// // //         )}

// // //       </nav>



// // //       {/* ================= DISCLAIMER POPUP ================= */}

// // //       {showDisclaimer && pathname === "/" && (

// // //         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] px-4">

// // //           <div className="
// // //             bg-[#F8F8F8]
// // //             max-w-4xl
// // //             w-full
// // //             px-12
// // //             py-10
// // //             rounded-xl
// // //             shadow-2xl
// // //             text-center
// // //           ">

// // //             {/* LOGO */}
// // //             <div className="mb-6">
// // //               <div className="text-3xl font-bold  text-[#0B1C2D]">
// // //                 S Jain <span className="text-[#C9A24D]">Attorneys</span>
// // //               </div>
// // //             </div>


// // //             {/* TITLE */}
// // //             <h2 className="text-xl  font-semibold text-[#0B1C2D] mb-6">
// // //               DISCLAIMER & CONFIRMATION
// // //             </h2>


// // //             {/* CONTENT */}
// // //             <div className="text-gray-600 text-sm leading-relaxed text-left space-y-3">

// // //               <p>
// // //                 As per the rules of the Bar Council of India, we are not permitted to solicit work and advertise.
// // //                 The user acknowledges the following:
// // //               </p>

// // //               <ul className="list-disc pl-6 space-y-2">

// // //                 <li>
// // //                   There has been no advertisement, personal communication, solicitation,
// // //                   invitation or inducement of any sort whatsoever from us or any of our members
// // //                   to solicit any work through this website;
// // //                 </li>

// // //                 <li>
// // //                   The user wishes to gain more information about us for his/her own information and use;
// // //                 </li>

// // //                 <li>
// // //                   The information about us is provided to the user only on his/her specific request and
// // //                   any information obtained or materials downloaded from this website is completely at the
// // //                   user's volition and any transmission, receipt or use of this site would not create any
// // //                   lawyer-client relationship.                </li>

// // //               </ul>
// // //               <p>
// // //                 The information provided under this website is solely available at your request for informational
// // //                 purposes only and should not be interpreted as soliciting or advertisement.
// // //               </p>

// // //               <p>
// // //                 We are not liable for any consequence of any action taken by the user relying on material/information
// // //                 provided under this website.
// // //               </p>

// // //               <p>
// // //                 In cases where the user has any legal issues, he/she must seek independent legal advice.
// // //               </p>


// // //               <p>
// // //                 All disputes are subject to jurisdiction of courts at New Delhi, India.
// // //               </p>

// // //             </div>


// // //             {/* BUTTONS */}
// // //             <div className="mt-8 flex justify-center gap-6">

// // //               <button
// // //                 onClick={handleAccept}
// // //                 className="
// // //                   px-10
// // //                   py-3
// // //                   bg-[#E9A63A]
// // //                   hover:bg-[#A8641E]
// // //                   text-white
// // //                   font-semibold
// // //                   transition
// // //                 "
// // //                 style={{ borderRadius: "5px" }}
// // //               >
// // //                 Agree
// // //               </button>


// // //               <button
// // //                 onClick={handleDisagree}
// // //                 className="
// // //                   px-10
// // //                   py-3
// // //                   bg-[#E9A63A]
// // //                   hover:bg-[#A8641E]
// // //                   text-white
// // //                   font-semibold
// // //                   transition
// // //                 "
// // //                 style={{ borderRadius: "5px" }}
// // //               >
// // //                 Disagree
// // //               </button>

// // //             </div>

// // //           </div>

// // //         </div>


// // //       )}

// // //     </>
// // //   );
// // // }






// // // // "use client";

// // // // import { useState, useEffect } from "react";
// // // // import Link from "next/link";
// // // // import { usePathname } from "next/navigation";

// // // // export default function Navbar() {

// // // //   const pathname = usePathname();

// // // //   const [isOpen, setIsOpen] = useState(false);
// // // //   const [showDisclaimer, setShowDisclaimer] = useState(false);
// // // //   const [servicesOpen, setServicesOpen] = useState(false);

// // // //   const links = [
// // // //     { name: "Home", href: "/#hero" },
// // // //     { name: "About Us", href: "/about" },
// // // //     // { name: "Our Team", href: "/team" },
// // // //     { name: "Contact", href: "/contact" },
// // // //   ];

// // // //   const services = [
// // // //     "Corporate Law",
// // // //     "Civil Litigation",
// // // //     "Criminal Defense",
// // // //     "Family Law",
// // // //     "Property & Real Estate",
// // // //     "Legal Advisory & Compliance",
// // // //   ];

// // // //   useEffect(() => {

// // // //     if (pathname === "/") {
// // // //       setShowDisclaimer(true);
// // // //       document.body.style.overflow = "hidden";
// // // //     }

// // // //     else {
// // // //       setShowDisclaimer(false);
// // // //       document.body.style.overflow = "auto";
// // // //     }

// // // //   }, [pathname]);


// // // //   const handleAccept = () => {
// // // //     setShowDisclaimer(false);
// // // //     document.body.style.overflow = "auto";
// // // //     sessionStorage.setItem("disclaimerShown", "true");
// // // //   };

// // // //   const handleDisagree = () => {
// // // //     window.location.href = "https://www.google.com";
// // // //   };

// // // //   return (
// // // //     <>

// // // //       {/* ================= NAVBAR ================= */}

// // // //       <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">

// // // //         <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

// // // //           {/* LOGO */}
// // // //           <div className="text-2xl font-serif font-semibold tracking-wide">
// // // //             <span className="text-white">S Jain</span>
// // // //             <span className="text-[#C9A24D] ml-1">Attorneys</span>
// // // //           </div>


// // // //           {/* DESKTOP MENU */}
// // // //           <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">

// // // //             {/* Normal Links */}
// // // //             {links.map((link, index) => (
// // // //               <li key={index}>
// // // //                 <Link
// // // //                   href={link.href}
// // // //                   className="hover:text-[#C9A24D] transition duration-300"
// // // //                 >
// // // //                   {link.name}
// // // //                 </Link>
// // // //               </li>
// // // //             ))}

// // // //             {/* SERVICES DROPDOWN */}
// // // //             <li
// // // //               className="relative"
// // // //               onMouseEnter={() => setServicesOpen(true)}
// // // //               onMouseLeave={() => setServicesOpen(false)}
// // // //             >

// // // //               <button className="hover:text-[#C9A24D] transition duration-300 flex items-center gap-1">
// // // //                 Services
// // // //                 <span className="text-xs">▼</span>
// // // //               </button>

// // // //               {/* Dropdown */}
// // // //               <div
// // // //                 className={`
// // // //                   absolute top-full left-0 mt-3 w-64
// // // //                   bg-black border border-[#C9A24D]/30
// // // //                   shadow-xl rounded-md
// // // //                   transition-all duration-300
// // // //                   ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
// // // //                 `}
// // // //               >

// // // //                 {services.map((service, index) => (
// // // //                   <Link
// // // //                     key={index}
// // // //                     href="/#practice"
// // // //                     className="
// // // //                       block px-5 py-3 text-sm text-white
// // // //                       hover:bg-[#C9A24D] hover:text-black
// // // //                       transition duration-300
// // // //                       border-b border-gray-800 last:border-none
// // // //                     "
// // // //                   >
// // // //                     {service}
// // // //                   </Link>
// // // //                 ))}

// // // //               </div>

// // // //             </li>


// // // //             {/* CTA BUTTON */}
// // // //             <li>
// // // //               <button
// // // //                 className="
// // // //                   ml-6
// // // //                   px-6
// // // //                   py-2
// // // //                   bg-[#C9A24D]
// // // //                   hover:bg-[#A8641E]
// // // //                   text-black
// // // //                   font-semibold
// // // //                   transition duration-300
// // // //                   rounded-md
// // // //                 "
// // // //               >
// // // //                 Book Consultation
// // // //               </button>
// // // //             </li>

// // // //           </ul>


// // // //           {/* MOBILE MENU BUTTON */}
// // // //           <button
// // // //             className="md:hidden text-3xl text-white z-[999]"
// // // //             onClick={() => setIsOpen(!isOpen)}
// // // //           >
// // // //             {isOpen ? "✕" : "☰"}
// // // //           </button>

// // // //         </div>


// // // //         {/* MOBILE MENU */}
// // // //         <div
// // // //           className={`
// // // //             fixed top-0 right-0 h-full w-[75%] bg-black
// // // //             transform transition-transform duration-300 z-[998]
// // // //             ${isOpen ? "translate-x-0" : "translate-x-full"}
// // // //           `}
// // // //         >

// // // //           <div className="flex flex-col mt-24 space-y-6 px-8 text-white">

// // // //             {links.map((link, index) => (
// // // //               <Link
// // // //                 key={index}
// // // //                 href={link.href}
// // // //                 onClick={() => setIsOpen(false)}
// // // //                 className="text-lg border-b border-gray-700 pb-3 hover:text-[#C9A24D]"
// // // //               >
// // // //                 {link.name}
// // // //               </Link>
// // // //             ))}

// // // //             {/* Mobile Services */}
// // // //             <div className="border-b border-gray-700 pb-3">

// // // //               <div className="text-lg text-[#C9A24D] mb-2">
// // // //                 Services
// // // //               </div>

// // // //               <div className="flex flex-col gap-2 pl-3">

// // // //                 {services.map((service, index) => (
// // // //                   <Link
// // // //                     key={index}
// // // //                     href="/#practice"
// // // //                     onClick={() => setIsOpen(false)}
// // // //                     className="text-sm hover:text-[#C9A24D]"
// // // //                   >
// // // //                     {service}
// // // //                   </Link>
// // // //                 ))}

// // // //               </div>

// // // //             </div>


// // // //             <button
// // // //               className="
// // // //                 mt-6 px-6 py-3 bg-[#C9A24D]
// // // //                 text-black font-semibold rounded-md
// // // //               "
// // // //             >
// // // //               Book Consultation
// // // //             </button>

// // // //           </div>

// // // //         </div>


// // // //         {/* OVERLAY */}
// // // //         {isOpen && (
// // // //           <div
// // // //             className="fixed inset-0 bg-black/50 z-[997]"
// // // //             onClick={() => setIsOpen(false)}
// // // //           />
// // // //         )}

// // // //       </nav>


// // // //       {/* ================= DISCLAIMER (UNCHANGED) ================= */}

// // // //       {showDisclaimer && pathname === "/" && (
// // // //         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] px-4">

// // // //           <div className="bg-[#F8F8F8] max-w-4xl w-full px-12 py-10 rounded-xl shadow-2xl text-center">

// // // //             <div className="text-3xl font-bold text-[#0B1C2D] mb-6">
// // // //               S Jain <span className="text-[#C9A24D]">Attorneys</span>
// // // //             </div>

// // // //             <h2 className="text-xl font-semibold text-[#0B1C2D] mb-6">
// // // //               DISCLAIMER & CONFIRMATION
// // // //             </h2>

// // // //             {/* Keep your existing disclaimer content */}

// // // //             <div className="mt-8 flex justify-center gap-6">

// // // //               <button
// // // //                 onClick={handleAccept}
// // // //                 className="px-10 py-3 bg-[#C9A24D] hover:bg-[#A8641E] text-white font-semibold rounded-md"
// // // //               >
// // // //                 Agree
// // // //               </button>

// // // //               <button
// // // //                 onClick={handleDisagree}
// // // //                 className="px-10 py-3 bg-[#C9A24D] hover:bg-[#A8641E] text-white font-semibold rounded-md"
// // // //               >
// // // //                 Disagree
// // // //               </button>

// // // //             </div>

// // // //           </div>

// // // //         </div>
// // // //       )}

// // // //     </>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import Link from "next/link";
// // // import { usePathname } from "next/navigation";
// // // import { ChevronDown } from "lucide-react";

// // // export default function Navbar() {

// // //   const pathname = usePathname();

// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const [showDisclaimer, setShowDisclaimer] = useState(false);
// // //   const [servicesOpen, setServicesOpen] = useState(false);
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const [isChecked, setIsChecked] = useState(false);


// // //   // MAIN MENU LINKS
// // //   const links = [
// // //     { name: "Home", href: "/" },
// // //     { name: "About Us", href: "/about" },
// // //     { name: "Our Team", href: "/team" },
// // //     { name: "Case Studies", href: "/case-studies" },
// // //     { name: "Insights", href: "/insights" },
// // //     { name: "Contact Us", href: "/contact" },
// // //   ];

// // //   const mobileMenu = [
// // //     { name: "Home", href: "/" },
// // //     { name: "About Us", href: "/about" },
// // //     { name: "Practice Areas", isDropdown: true },
// // //     { name: "Our Team", href: "/team" },
// // //     { name: "Case Studies", href: "/case-studies" },
// // //     { name: "Insights", href: "/insights" },
// // //     { name: "Contact Us", href: "/contact" },
// // //   ];


// // //   // PRACTICE AREAS
// // //   const practiceAreas = [
// // //     { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
// // //     { name: "Civil Litigation", href: "/services/civil-litigation" },
// // //     { name: "Criminal Defense & Prosecution", href: "/services/criminal-defense" },
// // //     { name: "Family & Divorce Law", href: "/services/family-divorce-law" },
// // //     { name: "Property & Real Estate Law", href: "/services/property-real-estate-law" },
// // //     { name: "Employment & Labour Law", href: "/services/employment-labour-law" },
// // //     { name: "Legal Advisory & Regulatory Compliance", href: "/services/legal-advisory" },
// // //     { name: "NRI Legal Services", href: "/services/nri-legal-services" },
// // //     { name: "Cheque Bounce Cases", href: "/services/cheque-bounce" },
// // //     { name: "Consumer Protection Law", href: "/services/consumer-protection" },
// // //     { name: "ADR & Mediation", href: "/services/adr-mediation" },
// // //   ];


// // //   // SHOW DISCLAIMER
// // //   useEffect(() => {

// // //     if (pathname === "/") {

// // //       const shown = sessionStorage.getItem("disclaimerShown");

// // //       if (!shown) {
// // //         setShowDisclaimer(true);
// // //         document.body.style.overflow = "hidden";
// // //       }

// // //     }

// // //   }, [pathname]);


// // //   // SCROLL EFFECT
// // //   useEffect(() => {

// // //     const handleScroll = () => {
// // //       setIsScrolled(window.scrollY > 50);
// // //     };

// // //     window.addEventListener("scroll", handleScroll);

// // //     return () => window.removeEventListener("scroll", handleScroll);

// // //   }, []);



// // //   // ACCEPT DISCLAIMER
// // //   const handleAccept = () => {

// // //     if (!isChecked) return;

// // //     setShowDisclaimer(false);

// // //     document.body.style.overflow = "auto";

// // //     sessionStorage.setItem("disclaimerShown", "true");

// // //   };


// // //   const handleDisagree = () => {

// // //     window.location.href = "https://www.google.com";

// // //   };



// // //   return (
// // //     <>

// // //       {/* NAVBAR */}

// // //       <nav className={`fixed w-full z-50 transition-all duration-300
// // //       ${isScrolled ? "bg-black py-3 shadow-lg" : "bg-transparent py-5"}`}>

// // //         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">


// // //           {/* LOGO */}
// // //           <div className="flex items-center gap-3">

// // //             <img src="/logo2.jpg"
// // //               className="h-14"
// // //               alt="Law Firm Logo"
// // //             />

// // //             <div className="flex flex-col leading-tight">

// // //               <div className="text-xl font-semibold">
// // //                 <span className="text-white">S Jain</span>
// // //                 <span className="text-[#C9A24D] ml-1">Attorneys</span>
// // //               </div>

// // //               <div className="text-xs text-gray-400">
// // //                 Advocates & Legal Consultants
// // //               </div>

// // //             </div>

// // //           </div>


// // //           {/* DESKTOP MENU */}
// // //           <ul className="hidden md:flex items-center space-x-8 text-white">

// // //             {links.slice(0, 2).map((link, i) => (

// // //               <li key={i}>
// // //                 <Link href={link.href} className="hover:text-[#C9A24D]">
// // //                   {link.name}
// // //                 </Link>
// // //               </li>

// // //             ))}


// // //             {/* PRACTICE AREAS */}
// // //             <li
// // //               onMouseEnter={() => setServicesOpen(true)}
// // //               onMouseLeave={() => setServicesOpen(false)}
// // //               className="relative"
// // //             >

// // //               <button className="flex items-center gap-1 hover:text-[#C9A24D]">

// // //                 Practice Areas

// // //                 <ChevronDown size={16} />

// // //               </button>


// // //               <div className={`absolute bg-black mt-3 w-64 border border-gray-700
// // //               ${servicesOpen ? "block" : "hidden"}`}>

// // //                 {practiceAreas.map((area, i) => (

// // //                   <Link
// // //                     key={i}
// // //                     href={area.href}
// // //                     className="block px-4 py-3 hover:bg-[#C9A24D] hover:text-black"
// // //                   >
// // //                     {area.name}
// // //                   </Link>

// // //                 ))}

// // //               </div>

// // //             </li>


// // //             {links.slice(2).map((link, i) => (

// // //               <li key={i}>
// // //                 <Link href={link.href} className="hover:text-[#C9A24D]">
// // //                   {link.name}
// // //                 </Link>
// // //               </li>

// // //             ))}

// // //           </ul>



// // //           {/* CTA BUTTON */}
// // //           <Link
// // //             href="/contact"
// // //             className="hidden md:block bg-[#C9A24D] text-black px-5 py-2 rounded hover:bg-[#B08D3C]"
// // //           >
// // //             Book Confidential Consultation
// // //           </Link>



// // //           {/* MOBILE BUTTON */}

// // //           <button
// // //             className="md:hidden text-white text-2xl"
// // //             onClick={() => setIsOpen(!isOpen)}
// // //           >
// // //             ☰
// // //           </button>


// // //         </div>

// // //       </nav>



// // //       {/* DISCLAIMER POPUP */}

// // // {showDisclaimer && (

// // //   <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

// // //     {/* MODAL BOX */}
// // //     <div className="
// // //       bg-white
// // //       w-full
// // //       max-w-xl
// // //       shadow-2xl
// // //       border border-gray-200
// // //       flex flex-col
// // //       animate-fadeIn
// // //     ">

// // //       {/* HEADER */}
// // //       <div className="px-8 pt-8 pb-4 text-center border-b border-gray-200">

// // //         {/* LOGO */}
// // //         <img
// // //           src="/logo2.jpg"
// // //           alt="S Jain Attorneys"
// // //           className="h-12 mx-auto mb-3"
// // //         />

// // //         <h2 className="text-2xl font-semibold text-[#0B1C2D]">
// // //           Disclaimer & Confirmation
// // //         </h2>

// // //         <div className="w-16 h-[2px] bg-[#C9A24D] mx-auto mt-3"></div>

// // //       </div>


// // //       {/* CONTENT AREA */}
// // //       <div className="
// // //         px-8 py-6
// // //         text-gray-600
// // //         text-sm
// // //         leading-relaxed
// // //         max-h-[260px]
// // //         overflow-y-auto
// // //       ">

// // //         <p className="mb-4">
// // //           As per the rules of the Bar Council of India, this website is provided
// // //           solely for informational purposes and does not constitute solicitation,
// // //           advertisement, or legal advice.
// // //         </p>

// // //         <p className="mb-4">
// // //           By proceeding further and clicking on the "Accept & Enter" button,
// // //           you acknowledge that you are accessing this website voluntarily and
// // //           for your own information.
// // //         </p>

// // //         <p>
// // //           Viewing this website does not establish an attorney-client relationship.
// // //           Please confirm that you have read and understood this disclaimer.
// // //         </p>

// // //       </div>


// // //       {/* CHECKBOX */}
// // //       <div className="px-8 pb-4 flex justify-center">

// // //         <label className="flex items-center gap-3 cursor-pointer">

// // //           <input
// // //             type="checkbox"
// // //             checked={isChecked}
// // //             onChange={(e) => setIsChecked(e.target.checked)}
// // //             className="w-4 h-4 accent-[#C9A24D]"
// // //           />

// // //           <span className="text-sm text-gray-700">
// // //             I have read and understood the disclaimer.
// // //           </span>

// // //         </label>

// // //       </div>


// // //       {/* BUTTON AREA */}
// // //       <div className="px-8 pb-8 flex justify-center gap-4">

// // //         <button
// // //           onClick={handleAccept}
// // //           disabled={!isChecked}
// // //           className={`
// // //             px-8 py-3
// // //             font-medium
// // //             transition
// // //             ${isChecked
// // //               ? "bg-[#C9A24D] text-black hover:bg-[#B8963E]"
// // //               : "bg-gray-300 text-gray-500 cursor-not-allowed"}
// // //           `}
// // //         >
// // //           Accept & Enter
// // //         </button>


// // //         <button
// // //           onClick={handleDisagree}
// // //           className="
// // //             px-8 py-3
// // //             bg-black
// // //             text-white
// // //             hover:bg-gray-800
// // //             transition
// // //           "
// // //         >
// // //           Exit
// // //         </button>

// // //       </div>

// // //     </div>

// // //   </div>

// // // )}
// // //     </>
// // //   );

// // // }


// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation";
// // import { ChevronDown } from "lucide-react";

// // export default function Navbar() {

// //   const pathname = usePathname();

// //   const [isOpen, setIsOpen] = useState(false);
// //   const [servicesOpen, setServicesOpen] = useState(false);
// //   const [isScrolled, setIsScrolled] = useState(false);

// //   const [showDisclaimer, setShowDisclaimer] = useState(false);
// //   const [isChecked, setIsChecked] = useState(false);


// //   /* =========================
// //      MENU LINKS
// //   ========================= */

// //   const links = [
// //     { name: "Home", href: "/" },
// //     { name: "About Us", href: "/about" },
// //     { name: "Our Team", href: "/team" },
// //     { name: "Case Studies", href: "/case-studies" },
// //     { name: "Insights", href: "/insights" },
// //     { name: "Contact Us", href: "/contact" },
// //   ];


// //   /* =========================
// //      PRACTICE AREAS
// //   ========================= */

// //   const practiceAreas = [
// //     { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
// //     { name: "Civil Litigation", href: "/services/civil-litigation" },
// //     { name: "Criminal Defense & Prosecution", href: "/services/criminal-defense" },
// //     { name: "Family & Divorce Law", href: "/services/family-divorce-law" },
// //     { name: "Property & Real Estate Law", href: "/services/property-real-estate-law" },
// //     { name: "Employment & Labour Law", href: "/services/employment-labour-law" },
// //     { name: "Legal Advisory", href: "/services/legal-advisory" },
// //     { name: "NRI Legal Services", href: "/services/nri-legal-services" },
// //     { name: "Cheque Bounce Cases", href: "/services/cheque-bounce" },
// //     { name: "Consumer Protection", href: "/services/consumer-protection" },
// //     { name: "ADR & Mediation", href: "/services/adr-mediation" },
// //   ];


// //   /* =========================
// //      SCROLL EFFECT
// //   ========================= */

// //   useEffect(() => {

// //     const handleScroll = () => {
// //       setIsScrolled(window.scrollY > 20);
// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => window.removeEventListener("scroll", handleScroll);

// //   }, []);



// //   /* =========================
// //      DISCLAIMER SHOW
// //   ========================= */

// //   useEffect(() => {

// //     if (pathname === "/") {

// //       const shown = sessionStorage.getItem("disclaimerShown");

// //       if (!shown) {

// //         setShowDisclaimer(true);

// //         document.body.style.overflow = "hidden";

// //       }

// //     }

// //   }, [pathname]);



// //   /* =========================
// //      ACCEPT DISCLAIMER
// //   ========================= */

// //   const handleAccept = () => {

// //     if (!isChecked) return;

// //     sessionStorage.setItem("disclaimerShown", "true");

// //     setShowDisclaimer(false);

// //     document.body.style.overflow = "auto";

// //   };


// //   const handleExit = () => {

// //     window.location.href = "https://www.google.com";

// //   };



// //   return (
// //     <>

// //       {/* =========================
// //          NAVBAR
// //       ========================= */}

// //       <nav
// //         className={`
// //           fixed top-0 left-0 w-full z-50
// //           transition-all duration-300
// //           ${isScrolled
// //             ? "bg-black shadow-lg py-3"
// //             : "bg-black/40 backdrop-blur-md py-4"}
// //         `}
// //       >

// //         <div className="w-full px-8 flex items-center">


// //           {/* LOGO LEFT */}

// //           <div className="flex items-center gap-3 min-w-fit">

// //             <img
// //               src="/logo2.jpg"
// //               alt="S Jain Attorneys"
// //               className="h-12 w-auto"
// //             />

// //             <div className="leading-tight">

// //               <div className="text-lg font-semibold whitespace-nowrap">
// //                 <span className="text-white">S Jain</span>
// //                 <span className="text-[#C9A24D] ml-1">Attorneys</span>
// //               </div>

// //               <div className="text-xs text-gray-400 whitespace-nowrap">
// //                 Advocates & Legal Consultants
// //               </div>

// //             </div>

// //           </div>



// //           {/* CENTER MENU */}

// //           <div className="flex-1 flex justify-center">

// //             <ul className="
// //               hidden md:flex
// //               items-center
// //               gap-8
// //               text-white
// //               text-[15px]
// //               font-medium
// //               whitespace-nowrap
// //             ">

// //               {links.slice(0, 2).map((link, i) => (
// //                 <li key={i}>
// //                   <Link href={link.href} className="hover:text-[#C9A24D] transition">
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}



// //               {/* Practice Areas Dropdown */}

// //               <li
// //                 className="relative"
// //                 onMouseEnter={() => setServicesOpen(true)}
// //                 onMouseLeave={() => setServicesOpen(false)}
// //               >

// //                 <button className="flex items-center gap-1 hover:text-[#C9A24D] transition">

// //                   Practice Areas

// //                   <ChevronDown size={16} />

// //                 </button>


// //                 <div className={`
// //                   absolute top-full left-0 mt-3 w-64
// //                   bg-black border border-gray-700 shadow-xl
// //                   ${servicesOpen ? "block" : "hidden"}
// //                 `}>

// //                   {practiceAreas.map((area, i) => (

// //                     <Link
// //                       key={i}
// //                       href={area.href}
// //                       className="block px-4 py-3 hover:bg-[#C9A24D] hover:text-black"
// //                     >
// //                       {area.name}
// //                     </Link>

// //                   ))}

// //                 </div>

// //               </li>



// //               {links.slice(2).map((link, i) => (
// //                 <li key={i}>
// //                   <Link href={link.href} className="hover:text-[#C9A24D] transition">
// //                     {link.name}
// //                   </Link>
// //                 </li>
// //               ))}

// //             </ul>

// //           </div>



// //           {/* CTA RIGHT */}

// //           <div className="min-w-fit hidden md:block">

// //             <Link
// //               href="/contact"
// //               className="
// //                 bg-[#C9A24D]
// //                 text-black
// //                 px-6 py-2.5
// //                 rounded
// //                 font-medium
// //                 hover:bg-[#B8963E]
// //                 transition
// //                 whitespace-nowrap
// //               "
// //             >
// //               Book Confidential Consultation
// //             </Link>

// //           </div>



// //           {/* MOBILE BUTTON */}

// //           <button
// //             onClick={() => setIsOpen(!isOpen)}
// //             className="md:hidden text-white text-2xl ml-auto"
// //           >
// //             ☰
// //           </button>


// //         </div>

// //       </nav>



// //       {/* =========================
// //          DISCLAIMER POPUP
// //       ========================= */}

// //       {showDisclaimer && (

// //         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">

// //           <div className="bg-white w-full max-w-lg shadow-2xl">


// //             {/* Header */}

// //             <div className="text-center px-8 pt-8">

// //               <img src="/logo2.jpg" className="h-12 mx-auto mb-3" />

// //               <h2 className="text-2xl font-semibold">
// //                 Disclaimer & Confirmation
// //               </h2>

// //               <div className="w-16 h-[2px] bg-[#C9A24D] mx-auto mt-3"></div>

// //             </div>



// //             {/* Content */}

// //             <div className="px-8 py-6 text-gray-600 text-sm">

// //               As per Bar Council of India rules, this website is for informational purposes only and does not constitute legal advice or solicitation.

// //             </div>



// //             {/* Checkbox */}

// //             <div className="flex justify-center pb-4">

// //               <label className="flex items-center gap-2">

// //                 <input
// //                   type="checkbox"
// //                   checked={isChecked}
// //                   onChange={(e) => setIsChecked(e.target.checked)}
// //                   className="accent-[#C9A24D]"
// //                 />

// //                 I agree to the disclaimer

// //               </label>

// //             </div>



// //             {/* Buttons */}

// //             <div className="flex justify-center gap-4 pb-8">

// //               <button
// //                 onClick={handleAccept}
// //                 disabled={!isChecked}
// //                 className={`
// //                   px-6 py-3 font-medium transition
// //                   ${isChecked
// //                     ? "bg-[#C9A24D] text-black"
// //                     : "bg-gray-300 text-gray-500 cursor-not-allowed"}
// //                 `}
// //               >
// //                 Accept & Enter
// //               </button>


// //               <button
// //                 onClick={handleExit}
// //                 className="px-6 py-3 bg-black text-white"
// //               >
// //                 Exit
// //               </button>

// //             </div>

// //           </div>

// //         </div>

// //       )}

// //     </>
// //   );

// // } 


// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link";
// // import { ChevronDown } from "lucide-react";
// // import { usePathname } from "next/navigation";

// // export default function Navbar() {

// //   const pathname = usePathname();

// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [servicesOpen, setServicesOpen] = useState(false);

// //   const [showDisclaimer, setShowDisclaimer] = useState(false);
// //   const [isChecked, setIsChecked] = useState(false);


// //   /* NAVBAR SCROLL EFFECT */

// //   useEffect(() => {

// //     const handleScroll = () => setIsScrolled(window.scrollY > 20);

// //     window.addEventListener("scroll", handleScroll);

// //     return () => window.removeEventListener("scroll", handleScroll);

// //   }, []);



// //   /* SHOW DISCLAIMER ONLY ON HOME */

// //   useEffect(() => {

// //     if (pathname === "/") {

// //       const shown = sessionStorage.getItem("disclaimerShown");

// //       if (!shown) {

// //         setShowDisclaimer(true);

// //         document.body.style.overflow = "hidden";

// //       }

// //     }

// //   }, [pathname]);



// //   /* ACCEPT DISCLAIMER */

// //   const handleAccept = () => {

// //     if (!isChecked) return;

// //     sessionStorage.setItem("disclaimerShown", "true");

// //     setShowDisclaimer(false);

// //     document.body.style.overflow = "auto";

// //   };


// //   /* EXIT WEBSITE */

// //   const handleExit = () => {

// //     window.location.href = "https://www.google.com";

// //   };



// //   /* PRACTICE AREAS */

// //   const practiceAreas = [

// //     { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
// //     { name: "Civil Litigation", href: "/services/civil-litigation" },
// //     { name: "Criminal Defense", href: "/services/criminal-defense" },
// //     { name: "Property Law", href: "/services/property-law" },
// //     { name: "Family Law", href: "/services/family-law" },
// //     { name: "Employment Law", href: "/services/employment-law" },

// //   ];



// //   return (

// //     <>

// //       {/* NAVBAR */}

// //       <nav className={`fixed w-full z-50 transition-all duration-300 ${
// //         isScrolled ? "bg-black py-3 shadow-lg" : "bg-black/60 backdrop-blur-md py-4"
// //       }`}>

// //         <div className="max-w-7xl mx-auto px-6 flex items-center">


// //           {/* LOGO */}

// //           <Link href="/" className="flex items-center gap-3">

// //             <img src="/logo2.jpg" className="h-12" alt="S Jain Attorneys"/>

// //             <div>

// //               <div className="text-white font-semibold text-lg">
// //                 S Jain <span className="text-[#C9A24D]">Attorneys</span>
// //               </div>

// //               <div className="text-gray-400 text-xs">
// //                 Advocates & Legal Consultants
// //               </div>

// //             </div>

// //           </Link>



// //           {/* MENU */}

// //           <div className="flex-1 flex justify-center">

// //             <ul className="hidden md:flex gap-8 text-white text-sm">

// //               <li><Link href="/">Home</Link></li>

// //               <li><Link href="/about">About Us</Link></li>


// //               {/* DROPDOWN */}

// //               <li
// //                 className="relative"
// //                 onMouseEnter={() => setServicesOpen(true)}
// //                 onMouseLeave={() => setServicesOpen(false)}
// //               >

// //                 <div className="flex items-center gap-1 cursor-pointer hover:text-[#C9A24D]">
// //                   Practice Areas <ChevronDown size={16}/>
// //                 </div>


// //                 {servicesOpen && (

// //                   <div className="absolute top-full mt-3 w-64 bg-black border border-gray-800">

// //                     {practiceAreas.map((item, i) => (

// //                       <Link
// //                         key={i}
// //                         href={item.href}
// //                         className="block px-4 py-3 hover:bg-[#C9A24D] hover:text-black"
// //                       >

// //                         {item.name}

// //                       </Link>

// //                     ))}

// //                   </div>

// //                 )}

// //               </li>


// //               <li><Link href="/team">Our Team</Link></li>

// //               <li><Link href="/case-studies">Case Studies</Link></li>

// //               <li><Link href="/insights">Insights</Link></li>

// //               <li><Link href="/contact">Contact</Link></li>

// //             </ul>

// //           </div>



// //           {/* CTA */}

// //           <Link
// //             href="/contact"
// //             className="hidden md:block bg-[#C9A24D] text-black px-6 py-3 font-medium hover:bg-[#b8963e]"
// //           >

// //             Book Confidential Consultation

// //           </Link>


// //         </div>

// //       </nav>



// //       {/* DISCLAIMER POPUP */}

// //       {showDisclaimer && (

// //         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">


// //           <div className="bg-white max-w-xl w-full mx-4 shadow-2xl">


// //             {/* HEADER */}

// //             <div className="text-center p-6 border-b">

// //               <img src="/logo2.jpg" className="h-12 mx-auto mb-3"/>

// //               <h2 className="text-2xl font-semibold">

// //                 Disclaimer & Confirmation

// //               </h2>

// //               <div className="w-16 h-[2px] bg-[#C9A24D] mx-auto mt-3"></div>

// //             </div>



// //             {/* CONTENT */}

// //             <div className="p-6 text-gray-600 text-sm leading-relaxed max-h-[300px] overflow-y-auto">

// //               As per the rules of the Bar Council of India, advocates are not permitted
// //               to solicit work or advertise. By accessing this website, you acknowledge
// //               and confirm that you are seeking information relating to S Jain Attorneys
// //               voluntarily and that there has been no form of solicitation, advertisement,
// //               or inducement by the firm or its members.

// //               <br/><br/>

// //               The content provided on this website is for informational purposes only
// //               and should not be interpreted as legal advice. Accessing this website
// //               does not create an attorney-client relationship.

// //               <br/><br/>

// //               Any information obtained from this website should not be relied upon
// //               without seeking professional legal advice.

// //             </div>



// //             {/* CHECKBOX */}

// //             <div className="flex justify-center p-4">

// //               <label className="flex items-center gap-2 text-sm">

// //                 <input
// //                   type="checkbox"
// //                   checked={isChecked}
// //                   onChange={(e)=>setIsChecked(e.target.checked)}
// //                   className="accent-[#C9A24D]"
// //                 />

// //                 I have read and understood the disclaimer

// //               </label>

// //             </div>



// //             {/* BUTTONS */}

// //             <div className="flex justify-center gap-4 pb-6">

// //               <button
// //                 onClick={handleAccept}
// //                 disabled={!isChecked}
// //                 className={`px-6 py-3 font-medium ${
// //                   isChecked
// //                   ? "bg-[#C9A24D] text-black"
// //                   : "bg-gray-300 text-gray-500 cursor-not-allowed"
// //                 }`}
// //               >

// //                 Accept & Enter

// //               </button>


// //               <button
// //                 onClick={handleExit}
// //                 className="px-6 py-3 bg-black text-white"
// //               >

// //                 Exit

// //               </button>

// //             </div>


// //           </div>

// //         </div>

// //       )}

// //     </>

// //   );

// // }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { ChevronDown } from "lucide-react";
// import { usePathname } from "next/navigation";

// export default function Navbar() {

//   const pathname = usePathname();

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   const [showDisclaimer, setShowDisclaimer] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);


//   /* SCROLL EFFECT */
//   useEffect(() => {

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);

//   }, []);


//   /* SHOW DISCLAIMER ONLY ON HOME PAGE */
//   useEffect(() => {

//     if (pathname === "/") {

//       const shown = sessionStorage.getItem("disclaimerShown");

//       if (!shown) {
//         setShowDisclaimer(true);
//         document.body.style.overflow = "hidden";
//       }

//     }

//   }, [pathname]);


//   /* ACCEPT DISCLAIMER */
//   const handleAccept = () => {

//     if (!isChecked) return;

//     sessionStorage.setItem("disclaimerShown", "true");

//     setShowDisclaimer(false);

//     document.body.style.overflow = "auto";

//   };


//   /* EXIT WEBSITE */
//   const handleExit = () => {

//     window.location.href = "https://www.google.com";

//   };


//   /* PRACTICE AREAS */
//   const practiceAreas = [

//     { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
//     { name: "Civil Litigation", href: "/services/civil-litigation" },
//     { name: "Criminal Defense", href: "/services/criminal-defense" },
//     { name: "Property Law", href: "/services/property-law" },
//     { name: "Family Law", href: "/services/family-law" },
//     { name: "Employment & Labour Law", href: "/services/employment-law" },

//   ];


//   return (
//     <>

//       {/* NAVBAR */}
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//           isScrolled
//             ? "bg-black shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-3"
//             : "bg-black/70 backdrop-blur-xl py-5"
//         }`}
//       >

//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">


//           {/* LOGO */}
//           <Link href="/" className="flex items-center gap-3">

//             <img
//               src="/logo2.jpg"
//               alt="S Jain Attorneys"
//               className="h-12 w-auto object-contain"
//             />

//             <div className="leading-tight">

//               <div className="text-white font-semibold text-lg tracking-wide">
//                 S Jain <span className="text-[#C9A24D]">Attorneys</span>
//               </div>

//               <div className="text-gray-400 text-xs tracking-wider uppercase">
//                 Advocates & Legal Consultants
//               </div>

//             </div>

//           </Link>


//           {/* MENU */}
//           <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium text-gray-300">

//             <li>
//               <Link href="/" className="hover:text-[#C9A24D] transition">
//                 Home
//               </Link>
//             </li>

//             <li>
//               <Link href="/about" className="hover:text-[#C9A24D] transition">
//                 About Us
//               </Link>
//             </li>


//             {/* PRACTICE AREAS DROPDOWN */}
//             <li
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >

//               <div className="flex items-center gap-1 cursor-pointer hover:text-[#C9A24D] transition">
//                 Practice Areas <ChevronDown size={16}/>
//               </div>


//               {servicesOpen && (

//                 <div className="absolute top-full mt-4 w-64 bg-black border border-gray-800 shadow-2xl">

//                   {practiceAreas.map((item, i) => (

//                     <Link
//                       key={i}
//                       href={item.href}
//                       className="block px-5 py-3 text-gray-300 hover:bg-[#C9A24D] hover:text-black transition"
//                     >
//                       {item.name}
//                     </Link>

//                   ))}

//                 </div>

//               )}

//             </li>


//             <li>
//               <Link href="/team" className="hover:text-[#C9A24D] transition">
//                 Our Team
//               </Link>
//             </li>


//             <li>
//               <Link href="/case-studies" className="hover:text-[#C9A24D] transition">
//                 Case Studies
//               </Link>
//             </li>


//             <li>
//               <Link href="/insights" className="hover:text-[#C9A24D] transition">
//                 Insights
//               </Link>
//             </li>


//             <li>
//               <Link href="/contact" className="hover:text-[#C9A24D] transition">
//                 Contact
//               </Link>
//             </li>


//           </ul>


//           {/* CTA BUTTON */}
//           <Link
//             href="/contact"
//             className="hidden md:inline-flex items-end
//             bg-[#C9A24D]
//             text-black
//             px-2 py-2
//             font-semibold
//             tracking-wide
//             transition-all duration-300
//             hover:bg-[#b8963e]
//             hover:scale-[1.03]
//             shadow-[0_6px_20px_rgba(201,162,77,0.4)]"
//           >
//             Book Confidential Consultation
//           </Link>


//         </div>

//       </nav>



//       {/* DISCLAIMER POPUP */}
//       {showDisclaimer && (

//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">


//           <div className="bg-white max-w-xl w-full mx-4 shadow-2xl rounded-sm">


//             {/* HEADER */}
//             <div className="text-center p-6 border-b">

//               <img
//                 src="/logo2.jpg"
//                 className="h-12 mx-auto mb-3"
//                 alt="logo"
//               />

//               <h2 className="text-2xl font-semibold">
//                 Disclaimer & Confirmation
//               </h2>

//               <div className="w-16 h-[2px] bg-[#C9A24D] mx-auto mt-3"></div>

//             </div>



//             {/* CONTENT */}
//             <div className="p-6 text-gray-600 text-sm leading-relaxed max-h-[300px] overflow-y-auto">

//               As per the rules of the Bar Council of India, advocates are not permitted
//               to solicit work or advertise. By accessing this website, you acknowledge
//               and confirm that you are seeking information relating to S Jain Attorneys
//               voluntarily and that there has been no form of solicitation,
//               advertisement, or inducement.

//               <br/><br/>

//               The content provided on this website is for informational purposes only
//               and should not be interpreted as legal advice.

//               <br/><br/>

//               Accessing this website does not create an attorney-client relationship.

//               <br/><br/>

//               Any information should not be relied upon without seeking professional advice.

//             </div>



//             {/* CHECKBOX */}
//             <div className="flex justify-center p-4">

//               <label className="flex items-center gap-2 text-sm">

//                 <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={(e)=>setIsChecked(e.target.checked)}
//                   className="accent-[#C9A24D]"
//                 />

//                 I have read and understood the disclaimer

//               </label>

//             </div>



//             {/* BUTTONS */}
//             <div className="flex justify-center gap-4 pb-6">

//               <button
//                 onClick={handleAccept}
//                 disabled={!isChecked}
//                 className={`px-6 py-3 font-medium transition ${
//                   isChecked
//                     ? "bg-[#C9A24D] text-black hover:bg-[#b8963e]"
//                     : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 }`}
//               >
//                 Accept & Enter
//               </button>


//               <button
//                 onClick={handleExit}
//                 className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition"
//               >
//                 Exit
//               </button>

//             </div>


//           </div>

//         </div>

//       )}

//     </>
//   );

// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { ChevronDown } from "lucide-react";
// import { usePathname } from "next/navigation";

// export default function Navbar() {

//   const pathname = usePathname();

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   const [showDisclaimer, setShowDisclaimer] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);


//   /* SCROLL EFFECT */
//   useEffect(() => {

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);

//   }, []);


//   /* DISCLAIMER */
//   useEffect(() => {

//     if (pathname === "/") {

//       const shown = sessionStorage.getItem("disclaimerShown");

//       if (!shown) {

//         setShowDisclaimer(true);

//         document.body.style.overflow = "hidden";

//       }

//     }

//   }, [pathname]);


//   const handleAccept = () => {

//     if (!isChecked) return;

//     sessionStorage.setItem("disclaimerShown", "true");

//     setShowDisclaimer(false);

//     document.body.style.overflow = "auto";

//   };


//   const handleExit = () => {

//     window.location.href = "https://www.google.com";

//   };


//   /* PRACTICE AREAS */
//   const practiceAreas = [

//     { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
//     { name: "Civil Litigation", href: "/services/civil-litigation" },
//     { name: "Criminal Defense", href: "/services/criminal-defense" },
//     { name: "Property Law", href: "/services/property-law" },
//     { name: "Family Law", href: "/services/family-law" },
//     { name: "Employment & Labour Law", href: "/services/employment-law" },

//   ];


//   return (
//     <>

//       {/* NAVBAR */}
//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//           isScrolled
//             ? "bg-black shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-3"
//             : "bg-black/70 backdrop-blur-xl py-5"
//         }`}
//       >

//         {/* FULL WIDTH CONTAINER */}
//         <div className="w-full px-8 flex items-center justify-between">


//           {/* LOGO */}
//           <Link
//             href="/"
//             className="flex items-center gap-3 flex-shrink-0"
//           >

//             <img
//               src="/logo2.jpg"
//               alt="S Jain Attorneys"
//               className="h-12 w-auto object-contain"
//             />

//             <div className="leading-tight">

//               <div className="text-white font-semibold text-lg tracking-wide whitespace-nowrap">
//                 S Jain <span className="text-[#C9A24D]">& Attorneys</span>
//               </div>

//               <div className="text-gray-400 text-xs tracking-widest uppercase whitespace-nowrap">
//                 Advocates & Legal Consultants
//               </div>

//             </div>

//           </Link>


//           {/* CENTER MENU */}
//           <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-[15px] font-medium text-gray-300 whitespace-nowrap">


//             <li>
//               <Link href="/" className="hover:text-[#C9A24D] transition">
//                 Home
//               </Link>
//             </li>


//             <li>
//               <Link href="/about" className="hover:text-[#C9A24D] transition">
//                 About Us
//               </Link>
//             </li>


//             {/* PRACTICE AREAS */}
//             <li
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >

//               <div className="flex items-center gap-1 cursor-pointer hover:text-[#C9A24D] transition">

//                 Practice Areas

//                 <ChevronDown size={16}/>

//               </div>


//               {servicesOpen && (

//                 <div className="absolute top-full mt-4 w-64 bg-black border border-gray-800 shadow-2xl">

//                   {practiceAreas.map((item, i) => (

//                     <Link
//                       key={i}
//                       href={item.href}
//                       className="block px-5 py-3 text-gray-300 hover:bg-[#C9A24D] hover:text-black transition"
//                     >
//                       {item.name}
//                     </Link>

//                   ))}

//                 </div>

//               )}

//             </li>


//             <li>
//               <Link href="/team" className="hover:text-[#C9A24D] transition">
//                 Our Team
//               </Link>
//             </li>


//             <li>
//               <Link href="/case-studies" className="hover:text-[#C9A24D] transition">
//                 Case Studies
//               </Link>
//             </li>


//             <li>
//               <Link href="/insights" className="hover:text-[#C9A24D] transition">
//                 Insights
//               </Link>
//             </li>


//             <li>
//               <Link href="/contact" className="hover:text-[#C9A24D] transition">
//                 Contact
//               </Link>
//             </li>


//           </ul>


//           {/* CTA BUTTON */}
//           <Link
//             href="/contact"
//             className="
//             hidden lg:inline-flex
//             items-center
//             bg-[#C9A24D]
//             text-black
//             px-6 xl:px-7
//             py-3
//             font-semibold
//             tracking-wide
//             whitespace-nowrap
//             transition-all duration-300
//             hover:bg-[#b8963e]
//             hover:scale-[1.03]
//             shadow-[0_6px_20px_rgba(201,162,77,0.4)]"
//           >
//             Book Confidential Consultation
//           </Link>


//         </div>

//       </nav>



//       {/* DISCLAIMER POPUP */}
//       {showDisclaimer && (

//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">


//           <div className="bg-white max-w-xl w-full mx-4 shadow-2xl">


//             <div className="text-center p-6 border-b">

//               <img src="/logo2.jpg" className="h-12 mx-auto mb-3"/>

//               <h2 className="text-2xl font-semibold">
//                 Disclaimer & Confirmation
//               </h2>

//               <div className="w-16 h-[2px] bg-[#C9A24D] mx-auto mt-3"></div>

//             </div>



//             <div className="p-6 text-gray-600 text-sm leading-relaxed max-h-[300px] overflow-y-auto">

// <p>
// As per the rules of the Bar Council of India, advocates are prohibited from advertising or soliciting work.
// </p>

// <br/>

// <p>
// By accessing this website, you acknowledge and confirm that you are seeking information relating to S Jain Attorneys voluntarily and that there has been no form of solicitation, advertisement, or inducement by the firm or its members.
// </p>

// <br/>

// <p>
// The content of this website is for informational purposes only and should not be interpreted as legal advice. Transmission, receipt, or use of this website does not create an attorney-client relationship.
// </p>

// <br/>

// <p>
// Any information obtained or materials downloaded from this website is completely at your own discretion and risk.
// </p>

// <br/>

// <p>
// S Jain Attorneys shall not be liable for any consequence of any action taken by the user relying on material or information provided on this website.
// </p>

// <br/>

// <p>
// By proceeding further and clicking on the "Accept & Enter" button, you acknowledge that you have read and understood this disclaimer.
// </p>

// </div>



//             <div className="flex justify-center p-4">

//               <label className="flex items-center gap-2 text-sm">

//                 <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={(e)=>setIsChecked(e.target.checked)}
//                   className="accent-[#C9A24D]"
//                 />

//                 I have read and understood the disclaimer

//               </label>

//             </div>



//             <div className="flex justify-center gap-4 pb-6">

//               <button
//                 onClick={handleAccept}
//                 disabled={!isChecked}
//                 className={`px-6 py-3 font-medium ${
//                   isChecked
//                     ? "bg-[#C9A24D] text-black"
//                     : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                 }`}
//               >
//                 Accept & Enter
//               </button>


//               {/* <button
//                 onClick={handleExit}
//                 className="px-6 py-3 bg-black text-white"
//               >
//                 Exit
//               </button> */}

//             </div>


//           </div>

//         </div>

//       )}

//     </>
//   );

// }

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import {
//   ChevronDown,
//   Menu,
//   X
// } from "lucide-react";
// import { usePathname } from "next/navigation";

// export default function Navbar() {

//   const pathname = usePathname();

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   const [showDisclaimer, setShowDisclaimer] = useState(false);
//   const [isChecked, setIsChecked] = useState(false);


//   /* ================= SCROLL EFFECT ================= */

//   useEffect(() => {

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);

//   }, []);



//   /* ================= DISCLAIMER ================= */

//   useEffect(() => {

//     if (pathname === "/") {

//       const shown = sessionStorage.getItem("disclaimerShown");

//       if (!shown) {

//         setShowDisclaimer(true);
//         document.body.style.overflow = "hidden";

//       }

//     }

//   }, [pathname]);


//   const handleAccept = () => {

//     if (!isChecked) return;

//     sessionStorage.setItem("disclaimerShown", "true");

//     setShowDisclaimer(false);

//     document.body.style.overflow = "unset";

//   };



//   /* ================= PRACTICE AREAS ================= */

//   const practiceAreas = [

//     {
//       name: "Corporate & Commercial Law",
//       href: "/services/corporate-law"
//     },

//     {
//       name: "Civil Litigation",
//       href: "/services/civil-litigation"
//     },

//     {
//       name: "Criminal Defense",
//       href: "/services/criminal-defense"
//     },

//     {
//       name: "Property Law",
//       href: "/services/property-law"
//     },

//     {
//       name: "Family Law",
//       href: "/services/family-law"
//     },

//     {
//       name: "Employment & Labour Law",
//       href: "/services/employment-law"
//     },

//   ];


//   return (
//     <>

//       {/* ================= NAVBAR ================= */}

//       <nav
//         className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//           isScrolled
//             ? "bg-black shadow-[0_8px_30px_rgba(0,0,0,0.6)] py-3"
//             : "bg-black/70 backdrop-blur-xl py-5"
//         }`}
//       >

//         <div className="w-full px-6 lg:px-10 flex items-center justify-between">


//           {/* LOGO */}
//           <Link href="/" className="flex items-center gap-3">

//             <img
//               src="/logo2.jpg"
//               alt="S Jain Attorneys"
//               className="h-11"
//             />

//             <div>

//               <div className="text-white font-semibold text-lg">
//                 S Jain <span className="text-[#C9A24D]">& Attorneys</span>
//               </div>

//               <div className="text-gray-400 text-xs uppercase tracking-widest">
//                 Advocates & Legal Consultants
//               </div>

//             </div>

//           </Link>



//           {/* DESKTOP MENU */}

//           <ul className="hidden lg:flex items-center gap-8 text-gray-300 font-medium">


//             <li>
//               <Link href="/" className="hover:text-[#C9A24D]">
//                 Home
//               </Link>
//             </li>


//             <li>
//               <Link href="/about" className="hover:text-[#C9A24D]">
//                 About
//               </Link>
//             </li>



//             {/* DROPDOWN */}
//             <li
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >

//               <div className="flex items-center gap-1 cursor-pointer hover:text-[#C9A24D]">

//                 Practice Areas
//                 <ChevronDown size={16} />

//               </div>


//               {servicesOpen && (

//                 <div className="absolute top-full left-0 mt-4 w-64 bg-black border border-gray-800 shadow-xl">

//                   {practiceAreas.map((item, i) => (

//                     <Link
//                       key={i}
//                       href={item.href}
//                       className="block px-5 py-3 hover:bg-[#C9A24D] hover:text-black"
//                     >
//                       {item.name}
//                     </Link>

//                   ))}

//                 </div>

//               )}

//             </li>



//             <li>
//               <Link href="/team" className="hover:text-[#C9A24D]">
//                 Team
//               </Link>
//             </li>


//             <li>
//               <Link href="/case-studies" className="hover:text-[#C9A24D]">
//                 Case Studies
//               </Link>
//             </li>


//             <li>
//               <Link href="/insights" className="hover:text-[#C9A24D]">
//                 Insights
//               </Link>
//             </li>


//             <li>
//               <Link href="/contact" className="hover:text-[#C9A24D]">
//                 Contact
//               </Link>
//             </li>


//           </ul>



//           {/* CTA BUTTON */}

//           <Link
//             href="/contact"
//             className="hidden lg:block bg-[#C9A24D] text-black px-6 py-3 font-semibold hover:bg-[#b8963e]"
//           >
//             Book Consultation
//           </Link>



//           {/* MOBILE MENU BUTTON */}

//           <button
//             className="lg:hidden text-white"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >

//             {mobileMenuOpen ? <X size={28}/> : <Menu size={28}/>}

//           </button>


//         </div>



//         {/* MOBILE MENU */}

//         {mobileMenuOpen && (

//           <div className="lg:hidden bg-black border-t border-gray-800">

//             <Link href="/" className="block px-6 py-4 border-b border-gray-800">
//               Home
//             </Link>


//             <Link href="/about" className="block px-6 py-4 border-b border-gray-800">
//               About
//             </Link>



//             {/* MOBILE DROPDOWN */}

//             <div>

//               <button
//                 onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
//                 className="w-full flex justify-between px-6 py-4 border-b border-gray-800"
//               >
//                 Practice Areas
//                 <ChevronDown size={18}/>
//               </button>


//               {mobileServicesOpen && (

//                 <div>

//                   {practiceAreas.map((item, i) => (

//                     <Link
//                       key={i}
//                       href={item.href}
//                       className="block px-10 py-3 border-b border-gray-800"
//                     >
//                       {item.name}
//                     </Link>

//                   ))}

//                 </div>

//               )}

//             </div>



//             <Link href="/team" className="block px-6 py-4 border-b border-gray-800">
//               Team
//             </Link>


//             <Link href="/case-studies" className="block px-6 py-4 border-b border-gray-800">
//               Case Studies
//             </Link>


//             <Link href="/insights" className="block px-6 py-4 border-b border-gray-800">
//               Insights
//             </Link>


//             <Link href="/contact" className="block px-6 py-4">
//               Contact
//             </Link>

//           </div>

//         )}

//       </nav>



//       {/* ================= DISCLAIMER ================= */}

//       {showDisclaimer && (

//         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">

//           <div className="bg-white max-w-xl w-full mx-4 rounded-lg shadow-xl">

//             <div className="p-6 text-center border-b">

//               <img src="/logo2.jpg" className="h-12 mx-auto mb-3"/>

//               <h2 className="text-2xl font-semibold">
//                 Disclaimer & Confirmation
//               </h2>

//             </div>


//             <div className="p-6 text-sm text-gray-700 space-y-4 max-h-[300px] overflow-y-auto">

//               <p>
//                 Under the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise.
//               </p>

//               <p>
//                 By proceeding further, you acknowledge that you are accessing this website voluntarily.
//               </p>

//               <p>
//                 This website is for informational purposes only and does not create an attorney-client relationship.
//               </p>

//               <p className="font-medium">
//                 By clicking Accept & Continue, you confirm you have read and understood.
//               </p>

//             </div>


//             <div className="p-4 text-center">

//               <label className="flex items-center justify-center gap-2 mb-4">

//                 <input
//                   type="checkbox"
//                   checked={isChecked}
//                   onChange={(e)=>setIsChecked(e.target.checked)}
//                 />

//                 I have read and understood the disclaimer

//               </label>


//               <button
//                 onClick={handleAccept}
//                 disabled={!isChecked}
//                 className={`px-6 py-3 font-semibold ${
//                   isChecked
//                     ? "bg-[#C9A24D] text-black"
//                     : "bg-gray-300 text-gray-500"
//                 }`}
//               >
//                 Accept & Continue
//               </button>

//             </div>

//           </div>

//         </div>

//       )}

//     </>
//   );

// }



"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  // desktop dropdown
  const [servicesOpen, setServicesOpen] = useState(false);

  // mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  // disclaimer
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [isChecked, setIsChecked] = useState(false);


  /* ================= SCROLL EFFECT ================= */

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);



  /* ================= DISCLAIMER ================= */

  useEffect(() => {

    if (pathname === "/") {

      const shown = sessionStorage.getItem("disclaimerShown");

      if (!shown) {
        setShowDisclaimer(true);
        document.body.style.overflow = "hidden";
      }

    }

  }, [pathname]);


  const handleAccept = () => {

    if (!isChecked) return;

    sessionStorage.setItem("disclaimerShown", "true");

    setShowDisclaimer(false);

    document.body.style.overflow = "auto";

  };



  /* ================= PRACTICE AREAS ================= */
const practiceAreas = [
  {
    name: "Corporate & Commercial Law",
    href: "/corporate-commercial-law-firm",
  },
  {
    name: "Civil Litigation",
    href: "/civil-lawyer-in-bangalore",
  },
  {
    name: "Family Law",
    href: "/family-divorce-law",
  },
  {
    name: "Property & Real Estate Law",
    href: "/property-real-estate-law",
  },
  {
    name: "Criminal Defense & Prosecution",
    href: "/criminal-lawyer-in-bangalore",
  },
   {
    name: "Cheque Bounce",
    href: "/cheque-bounce-lawyer-in-bangalore",
  },
];
  // const practiceAreas = [

  //   {
  //     name: "Corporate & Commercial Law",
  //     href: "/corporate-commercial-law-firm"
  //   },

  //   {
  //     name: "Civil Litigation",
  //     href: "/civil-lawyer-in-bangalore"
  //   },

  //   {
  //     name: "Family Law",
  //     href: "family-divorce-law"
  //   },

  //   {
  //     name: "Property & Real Estate Law",
  //     href: "property-real-estate-law"
  //   },

  //   {
  //     name: "Criminal Defense & Prosecution",
  //     href: "criminal-lawyer-in-bangalore"
  //   },


  //   // {
  //   //   name: "Criminal Defense",
  //   //   href: "/services/criminal-defense"
  //   // },

  //   // {
  //   //   name: "Property Law",
  //   //   href: "/services/property-law"
  //   // },


  //   // {
  //   //   name: "Employment & Labour Law",
  //   //   href: "/services/employment-law"
  //   // },

  // ];



  return (
    <>

      {/* ================= NAVBAR ================= */}

      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
            ? "bg-black shadow-lg py-3"
            : "bg-black/70 backdrop-blur-xl py-5"
          }`}
      >

        <div className="w-full px-6 lg:px-10 flex items-center justify-between">


          {/* LOGO */}

          <Link href="/" className="flex items-center gap-3">

            <img
              src="/logo2.jpg"
              alt="S Jain Attorneys"
              className="h-11"
            />

            <div>

              <div className="text-white font-semibold text-lg">
                S Jain <span className="text-[#C9A24D]">& Attorneys</span>
              </div>

              <div className="text-gray-400 text-xs uppercase tracking-widest">
                Advocates & Legal Consultants
              </div>

            </div>

          </Link>



          {/* ================= DESKTOP MENU ================= */}

          <ul className="hidden lg:flex items-center gap-8 text-gray-300 font-medium">


            <li>
              <Link href="/" className="hover:text-[#C9A24D] transition">
                Home
              </Link>
            </li>


            <li>
              <Link href="/leading-law-firm-in-bangalore" className="hover:text-[#C9A24D] transition">
                About Us
              </Link>
            </li>



            {/* ================= DESKTOP DROPDOWN ================= */}

            <li className="relative">

              <button
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center gap-1 hover:text-[#C9A24D] transition"
              >
                Practice Areas
                <ChevronDown size={16} />
              </button>


              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className={`absolute left-0 top-full pt-3 transition-all duration-200 ${servicesOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                  }`}
              >

                <div className="w-64 bg-black border border-gray-800 shadow-xl rounded-md overflow-hidden">

                  {practiceAreas.map((item, i) => (

                    <Link
                      key={i}
                      href={item.href}
                      className="block px-5 py-3 text-gray-300 hover:bg-[#C9A24D] hover:text-black transition"
                    >
                      {item.name}
                    </Link>

                  ))}

                </div>

              </div>

            </li>



            <li>
              <Link href="/lawyers-in-bangalore" className="hover:text-[#C9A24D] transition">
                Our Team
              </Link>
            </li>


            <li>
              <Link href="/successful-case-results-in-bangalore" className="hover:text-[#C9A24D] transition">
                Success Stories
              </Link>
            </li>


            <li>
              <Link href="/legal-advice-bangalore" className="hover:text-[#C9A24D] transition">
                Insights
              </Link>
            </li>


            <li>
              <Link href="/legal-consultation-in-bangalore" className="hover:text-[#C9A24D] transition">
                Contact
              </Link>
            </li>


          </ul>



          {/* CTA BUTTON */}

          <Link
            href="/legal-consultation-in-bangalore"
            className="hidden lg:block bg-[#C9A24D] text-black px-6 py-3 font-semibold hover:bg-[#b8963e] transition"
          >
            Book Consultation
          </Link>



          {/* ================= MOBILE BUTTON ================= */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>


        </div>



        {/* ================= MOBILE MENU ================= */}

        {mobileMenuOpen && (

          <div className="lg:hidden bg-black border-t border-gray-800">


            <Link href="/law-firm-in-bangalore" className="block px-6 py-4 border-b border-gray-800">
              Home
            </Link>


            <Link href="/leading-law-firm-in-bangalore" className="block px-6 py-4 border-b border-gray-800">
              About
            </Link>



            {/* MOBILE DROPDOWN */}

            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex justify-between px-6 py-4 border-b border-gray-800"
            >
              Practice Areas
              <ChevronDown size={18} />
            </button>


            {mobileServicesOpen && (

              <div>

                {practiceAreas.map((item, i) => (

                  <Link
                    key={i}
                    href={item.href}
                    className="block px-10 py-3 border-b border-gray-800"
                  >
                    {item.name}
                  </Link>

                ))}

              </div>

            )}



            <Link href="/lawyers-in-bangalore" className="block px-6 py-4 border-b border-gray-800">
              Team
            </Link>


            <Link href="/case-studies" className="block px-6 py-4 border-b border-gray-800">
              Case Studies
            </Link>


            <Link href="/legal-advice-bangalore" className="block px-6 py-4 border-b border-gray-800">
              Insights
            </Link>


            <Link href="/contact" className="block px-6 py-4">
              Contact
            </Link>


          </div>

        )}

      </nav>



      {/* ================= DISCLAIMER ================= */}

      {/* ================= DISCLAIMER ================= */}

      {showDisclaimer && (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm">

          <div className="bg-white max-w-xl w-full mx-4 rounded-lg shadow-2xl overflow-hidden">


            {/* HEADER */}

            <div className="p-6 text-center border-b">

              <img
                src="/logo2.jpg"
                alt="S Jain Attorneys"
                className="h-12 mx-auto mb-3"
              />

              <h2 className="text-2xl font-semibold text-black">
                Disclaimer & Confirmation
              </h2>

              <div className="w-16 h-[2px] bg-[#C9A24D] mx-auto mt-3"></div>

            </div>



            {/* CONTENT */}

            <div className="p-6 text-sm text-gray-700 space-y-4 max-h-[350px] overflow-y-auto leading-relaxed">

              <p>
                Under the rules of the Bar Council of India, law firms are not permitted to solicit work or advertise.
              </p>

              <p>
                By proceeding further, you acknowledge that you are accessing this website of <strong>S Jain & Attorneys</strong> on your own accord and that there has been no solicitation, advertisement, or inducement by the firm or any of its members.
              </p>

              <p>
                The content provided on this website is for general informational purposes only and does not constitute legal advice. Viewing or using this website does not create an attorney-client relationship. <strong>S Jain Attorneys</strong> does not guarantee the accuracy, completeness, or outcome of any legal matter.
              </p>

              <p className="font-medium text-black">
                By clicking “Accept & Continue”, you confirm that you have read and understood this disclaimer and agree to the terms stated herein.
              </p>

            </div>



            {/* CHECKBOX */}

            <div className="px-6 pb-2">

              <label className="flex items-center gap-2 text-sm cursor-pointer">

                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="accent-[#C9A24D] w-4 h-4"
                />

                I have read and understood the disclaimer.

              </label>

            </div>



            {/* BUTTON */}

            <div className="p-6 pt-3 text-center">

              <button
                onClick={handleAccept}
                disabled={!isChecked}
                className={`px-8 py-3 font-semibold rounded transition-all duration-300 ${isChecked
                    ? "bg-[#C9A24D] text-black hover:bg-[#b8963e] cursor-pointer"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
              >
                Accept & Continue
              </button>

            </div>


          </div>

        </div>

      )}

    </>
  );

}