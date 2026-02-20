
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";


export default function Navbar() {

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);



  // const links = [
  //   { name: "Home", href: "/#hero" },
  //   { name: "About Us", href: "/about" },
  //   // { name: "Practice Areas", href: "/#practice" },
  //   // { name: "Our Team", href: "/team" },
  //   //     // { name: "Insights", href: "/#blog" },
  //   { name: "Contact", href: "/contact" },
  // ];
  const links = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Team", href: "/team" },
  { name: "Insights", href: "/insights" },
  { name: "Contact Us", href: "/contact" },
];

const mobileMenu = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Practice Areas", isDropdown: true },
  { name: "Our Team", href: "/team" },
  { name: "Insights", href: "/insights" },
  { name: "Contact Us", href: "/contact" },
];

  const practiceAreas = [  
    { name: "Corporate & Commercial Law", href: "/services/corporate-law" },
    { name: "Civil Litigation", href: "/services/civil-litigation" },
    { name: "Criminal Defense & Prosecution", href: "/services/criminal-defense" },
    { name: "Family & Divorce Law", href: "/services/family-divorce-law" },
    { name: "Property & Real Estate Law", href: "/services/property-real-estate-law" },
    { name: "Legal Advisory & Regulatory Compliance", href: "/services/legal-advisory-regulatory-compliance" },
    { name: "NRI Legal Services", href: "/services/nri-legal-services" },
    { name: "Cheque Bounce & Negotiable Instruments Cases", href: "/services/cheque-bounce-ni-cases" },
    { name: "High Court & Supreme Court Practice", href: "/services/highcourt-supremecourt-practice" },
    { name: "Consumer Protection Law", href: "/services/consumer-protection-law" },
    { name: "Mediation, Counselling & ADR", href: "/services/mediation-adr" },
    { name: "International Private Law", href: "/services/international-private-law" },
  ];



  useEffect(() => {

    if (pathname === "/") {

      const alreadyShown = sessionStorage.getItem("disclaimerShown");

      if (!alreadyShown) {
        setShowDisclaimer(true);
        document.body.style.overflow = "hidden";
      } else {
        setShowDisclaimer(false);
        document.body.style.overflow = "auto";
      }

    } else {
      setShowDisclaimer(false);
      document.body.style.overflow = "auto";
    }

  }, [pathname]);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);



  const handleAccept = () => {
    setShowDisclaimer(false);
    document.body.style.overflow = "auto";

    sessionStorage.setItem("disclaimerShown", "true");
  };

  // const handleAccept = () => {
  //   setShowDisclaimer(false);
  //   document.body.style.overflow = "auto";
  // };

  const handleDisagree = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <>

      {/* ================= NAVBAR ================= */}

      {/* <nav className="absolute top-0 left-0 w-full z-50 bg-transparent"> */}
      <nav
        className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-300
   
    ${isScrolled
            ? "bg-black backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
          }

  `}
      >


        {/* <div className="max-w-7xl mx-auto px-9 py-8 flex items-center justify-between"> */}
        {/* <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between"> */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">



          {/* LOGO */}
          {/* <div className="text-2xl font-serif font-semibold tracking-wide">
            <span className="text-white">S Jain</span>
            <span className="text-[#C9A24D] ml-1">Attorneys</span>
          </div> */}
          <div className="flex items-center gap-3">

            {/* Logo Image */}
            <img
              src="/logo2.jpg"   // place logo inside public folder
              alt="S Jain Attorneys Logo"
              // className="h-20 w-24 object-contain"
              className="h-14 w-auto object-contain"

            />

            {/* Brand Name */}
            {/* <div className="text-2xl font-serif font-semibold tracking-wide"> */}
            <div className="text-xl md:text-2xl  font-medium tracking-wide">

              <span className="text-white">S Jain</span>
              <span className="text-[#C9A24D] ml-1">Attorneys</span>
            </div>

          </div>

          {/* DESKTOP MENU */}
          {/* DESKTOP MENU */}
<ul className="hidden md:flex items-center space-x-8 text-sm font-normal text-white">

  {/* Home and About Us */}
  {links.slice(0, 2).map((link, index) => (
    <li key={index}>
      <Link
        href={link.href}
        className="relative hover:text-[#C9A24D] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A24D] after:transition-all after:duration-300 hover:after:w-full"
      >
        {link.name}
      </Link>
    </li>
  ))}

  {/* Practice Areas Dropdown */}
  <li
    className="relative"
    onMouseEnter={() => setServicesOpen(true)}
    onMouseLeave={() => setServicesOpen(false)}
  >
    <button className="hover:text-[#C9A24D] transition duration-300 flex items-center gap-1">
      Practice Areas
      <ChevronDown
        size={16}
        className={`transition-transform duration-300 ${
          servicesOpen ? "rotate-180 text-[#C9A24D]" : ""
        }`}
      />
    </button>

    <div
      className={`absolute top-full left-0 mt-3 w-64 bg-black border border-[#C9A24D]/30 shadow-xl rounded-md transition-all duration-300 ${
        servicesOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-2"
      }`}
    >
      {practiceAreas.map((service, index) => (
        <Link
          key={index}
          href={service.href}
          className="block px-5 py-3 text-sm text-white hover:bg-[#C9A24D] hover:text-black transition duration-300 border-b border-gray-800 last:border-none"
        >
          {service.name}
        </Link>
      ))}
    </div>
  </li>

  {/* Our Team, Insights, Contact Us */}
  {links.slice(2).map((link, index) => (
    <li key={index}>
      <Link
        href={link.href}
        className="relative hover:text-[#C9A24D] transition duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1px] after:bg-[#C9A24D] after:transition-all after:duration-300 hover:after:w-full"
      >
        {link.name}
      </Link>
    </li>
  ))}

</ul>

          {/* ✅ MOBILE BUTTON */}
          <button
            className="md:hidden text-3xl text-white z-[999]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* ✅ MOBILE MENU */}
 {/* ✅ MOBILE MENU DRAWER */}
<div
  className={`
    fixed top-0 right-0 h-full w-[85%] max-w-[380px]
    bg-black
    transform transition-transform duration-300 ease-in-out
    z-[998]
    ${isOpen ? "translate-x-0" : "translate-x-full"}
  `}
>

  <div className="flex flex-col mt-24 space-y-6 px-6 text-white overflow-y-auto h-full pb-10">

    {mobileMenu.map((item, index) => {

      if (item.isDropdown) {
        return (
          <div key={index} className="border-b border-gray-700 pb-4">

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full text-lg hover:text-[#C9A24D]"
            >
              Practice Areas
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180 text-[#C9A24D]" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                servicesOpen ? "max-h-[1000px] mt-4" : "max-h-0"
              }`}
            >
              <div className="flex flex-col gap-3 pl-4">

                {practiceAreas.map((service, i) => (
                  <Link
                    key={i}
                    href={service.href}
                    onClick={() => {
                      setIsOpen(false);
                      setServicesOpen(false);
                    }}
                    className="text-sm text-gray-300 hover:text-[#C9A24D]"
                  >
                    {service.name}
                  </Link>
                ))}

              </div>
            </div>

          </div>
        );
      }

      return (
        <Link
          key={index}
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="text-lg border-b border-gray-700 pb-4 hover:text-[#C9A24D]"
        >
          {item.name}
        </Link>
      );

    })}

  </div>

</div>


        {/* OVERLAY */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-[997]"
            onClick={() => setIsOpen(false)}
          />
        )}

      </nav>



      {/* ================= DISCLAIMER POPUP ================= */}

      {showDisclaimer && pathname === "/" && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] px-4">

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
              <div className="text-3xl font-bold  text-[#0B1C2D]">
                S Jain <span className="text-[#C9A24D]">Attorneys</span>
              </div>
            </div>


            {/* TITLE */}
            <h2 className="text-xl  font-semibold text-[#0B1C2D] mb-6">
              DISCLAIMER & CONFIRMATION
            </h2>


            {/* CONTENT */}
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
                  lawyer-client relationship.                </li>

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
                All disputes are subject to jurisdiction of courts at New Delhi, India.
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






// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {

//   const pathname = usePathname();

//   const [isOpen, setIsOpen] = useState(false);
//   const [showDisclaimer, setShowDisclaimer] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   const links = [
//     { name: "Home", href: "/#hero" },
//     { name: "About Us", href: "/about" },
//     // { name: "Our Team", href: "/team" },
//     { name: "Contact", href: "/contact" },
//   ];

//   const services = [
//     "Corporate Law",
//     "Civil Litigation",
//     "Criminal Defense",
//     "Family Law",
//     "Property & Real Estate",
//     "Legal Advisory & Compliance",
//   ];

//   useEffect(() => {

//     if (pathname === "/") {
//       setShowDisclaimer(true);
//       document.body.style.overflow = "hidden";
//     }

//     else {
//       setShowDisclaimer(false);
//       document.body.style.overflow = "auto";
//     }

//   }, [pathname]);


//   const handleAccept = () => {
//     setShowDisclaimer(false);
//     document.body.style.overflow = "auto";
//     sessionStorage.setItem("disclaimerShown", "true");
//   };

//   const handleDisagree = () => {
//     window.location.href = "https://www.google.com";
//   };

//   return (
//     <>

//       {/* ================= NAVBAR ================= */}

//       <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">

//         <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

//           {/* LOGO */}
//           <div className="text-2xl font-serif font-semibold tracking-wide">
//             <span className="text-white">S Jain</span>
//             <span className="text-[#C9A24D] ml-1">Attorneys</span>
//           </div>


//           {/* DESKTOP MENU */}
//           <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">

//             {/* Normal Links */}
//             {links.map((link, index) => (
//               <li key={index}>
//                 <Link
//                   href={link.href}
//                   className="hover:text-[#C9A24D] transition duration-300"
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}

//             {/* SERVICES DROPDOWN */}
//             <li
//               className="relative"
//               onMouseEnter={() => setServicesOpen(true)}
//               onMouseLeave={() => setServicesOpen(false)}
//             >

//               <button className="hover:text-[#C9A24D] transition duration-300 flex items-center gap-1">
//                 Services
//                 <span className="text-xs">▼</span>
//               </button>

//               {/* Dropdown */}
//               <div
//                 className={`
//                   absolute top-full left-0 mt-3 w-64
//                   bg-black border border-[#C9A24D]/30
//                   shadow-xl rounded-md
//                   transition-all duration-300
//                   ${servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
//                 `}
//               >

//                 {services.map((service, index) => (
//                   <Link
//                     key={index}
//                     href="/#practice"
//                     className="
//                       block px-5 py-3 text-sm text-white
//                       hover:bg-[#C9A24D] hover:text-black
//                       transition duration-300
//                       border-b border-gray-800 last:border-none
//                     "
//                   >
//                     {service}
//                   </Link>
//                 ))}

//               </div>

//             </li>


//             {/* CTA BUTTON */}
//             <li>
//               <button
//                 className="
//                   ml-6
//                   px-6
//                   py-2
//                   bg-[#C9A24D]
//                   hover:bg-[#A8641E]
//                   text-black
//                   font-semibold
//                   transition duration-300
//                   rounded-md
//                 "
//               >
//                 Book Consultation
//               </button>
//             </li>

//           </ul>


//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="md:hidden text-3xl text-white z-[999]"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? "✕" : "☰"}
//           </button>

//         </div>


//         {/* MOBILE MENU */}
//         <div
//           className={`
//             fixed top-0 right-0 h-full w-[75%] bg-black
//             transform transition-transform duration-300 z-[998]
//             ${isOpen ? "translate-x-0" : "translate-x-full"}
//           `}
//         >

//           <div className="flex flex-col mt-24 space-y-6 px-8 text-white">

//             {links.map((link, index) => (
//               <Link
//                 key={index}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="text-lg border-b border-gray-700 pb-3 hover:text-[#C9A24D]"
//               >
//                 {link.name}
//               </Link>
//             ))}

//             {/* Mobile Services */}
//             <div className="border-b border-gray-700 pb-3">

//               <div className="text-lg text-[#C9A24D] mb-2">
//                 Services
//               </div>

//               <div className="flex flex-col gap-2 pl-3">

//                 {services.map((service, index) => (
//                   <Link
//                     key={index}
//                     href="/#practice"
//                     onClick={() => setIsOpen(false)}
//                     className="text-sm hover:text-[#C9A24D]"
//                   >
//                     {service}
//                   </Link>
//                 ))}

//               </div>

//             </div>


//             <button
//               className="
//                 mt-6 px-6 py-3 bg-[#C9A24D]
//                 text-black font-semibold rounded-md
//               "
//             >
//               Book Consultation
//             </button>

//           </div>

//         </div>


//         {/* OVERLAY */}
//         {isOpen && (
//           <div
//             className="fixed inset-0 bg-black/50 z-[997]"
//             onClick={() => setIsOpen(false)}
//           />
//         )}

//       </nav>


//       {/* ================= DISCLAIMER (UNCHANGED) ================= */}

//       {showDisclaimer && pathname === "/" && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] px-4">

//           <div className="bg-[#F8F8F8] max-w-4xl w-full px-12 py-10 rounded-xl shadow-2xl text-center">

//             <div className="text-3xl font-bold text-[#0B1C2D] mb-6">
//               S Jain <span className="text-[#C9A24D]">Attorneys</span>
//             </div>

//             <h2 className="text-xl font-semibold text-[#0B1C2D] mb-6">
//               DISCLAIMER & CONFIRMATION
//             </h2>

//             {/* Keep your existing disclaimer content */}

//             <div className="mt-8 flex justify-center gap-6">

//               <button
//                 onClick={handleAccept}
//                 className="px-10 py-3 bg-[#C9A24D] hover:bg-[#A8641E] text-white font-semibold rounded-md"
//               >
//                 Agree
//               </button>

//               <button
//                 onClick={handleDisagree}
//                 className="px-10 py-3 bg-[#C9A24D] hover:bg-[#A8641E] text-white font-semibold rounded-md"
//               >
//                 Disagree
//               </button>

//             </div>

//           </div>

//         </div>
//       )}

//     </>
//   );
// }
