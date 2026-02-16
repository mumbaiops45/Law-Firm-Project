
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const links = [
    { name: "Home", href: "/#hero" },
    { name: "About Us", href: "/about" },
    { name: "Practice Areas", href: "/#practice" },
    { name: "Our Team", href: "/team" },
    { name: "Insights", href: "/#blog" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {

    if (pathname === "/") {
      setShowDisclaimer(true);
      document.body.style.overflow = "hidden";
    }

    else {
      setShowDisclaimer(false);
      document.body.style.overflow = "auto";
    }

  }, [pathname]);


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
                <Link
                  href={link.href}
                  className="hover:text-[#C9A24D] transition duration-300"
                >
                  {link.name}
                </Link>
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

          {/* ✅ MOBILE BUTTON */}
          <button
            className="md:hidden text-3xl text-white z-[999]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>


        {/* ✅ MOBILE MENU */}
        <div
          className={`
      fixed top-0 right-0 h-full w-[75%] bg-[#0B1C2D]
      transform transition-transform duration-300 z-[998]
      ${isOpen ? "translate-x-0" : "translate-x-full"}
    `}
        >

          <div className="flex flex-col mt-24 space-y-6 px-8 text-white">

            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg border-b border-gray-700 pb-3 hover:text-[#C9A24D]"
              >
                {link.name}
              </Link>
            ))}

            <button
              className="mt-6 px-6 py-3 bg-[#C9A24D] text-black font-semibold rounded"
            >
              Book Consultation
            </button>

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
