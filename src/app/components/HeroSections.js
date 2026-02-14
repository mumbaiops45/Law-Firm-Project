// // "use client";

// // import { useState, useEffect } from "react";
// // import Image from "next/image";

// // export default function HeroSection() {
// //   const images = ["/laws.jpg", "/laws2.jpg", "/laws3.jpg"];
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % images.length);
// //     }, 4000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#111111]">
// //       {/* Background images */}
// //       {images.map((img, index) => (
// //         <Image
// //           key={index}
// //           src={img}
// //           alt="Law Background"
// //           fill
// //           className={`object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ease-in-out
// //             ${index === current ? "opacity-100 z-10" : "opacity-2 z-0"}
// //           `}
// //         />
// //       ))}

// //       {/* Dark overlay */}
// //       <div className="absolute inset-0 bg-[#111111]/80 z-20"></div>

// //       {/* Hero content */}
// //       <div className="relative z-30 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center text-white">
// //         {/* Left Column */}
// //         <div className="space-y-6">
// //           <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#F5F5F5]">
// //             Trusted Legal Counsel with Integrity & Experience
// //           </h1>
// //           <p className="text-[#F5F5F5] text-lg">
// //             Corporate, Civil & Advisory Legal Services
// //           </p>
// //           <p className="text-gray-300 text-lg">
// //             Tailored for Individuals & Businesses in India
// //           </p>

// //           <div className="flex flex-wrap gap-4 mt-4">
// //             <button className="px-8 py-3 bg-[#C9A24D] text-[#111111] rounded-md font-semibold hover:opacity-90 transition">
// //               Schedule a Consultation
// //             </button>
// //             <button className="px-8 py-3 border border-[#C9A24D] text-[#C9A24D] rounded-md font-medium hover:bg-[#C9A24D] hover:text-[#111111] transition">
// //               View Practice Areas
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right Column */}
// //           <div className="relative w-full h-100 md:h-125 rounded-md overflow-hidden shadow-lg m-7">

// //           {/* <Image
// //             src="/closeupjustice.jpg"
// //             alt="Legal Services"
// //             fill
// //             className="object-cover"
// //           /> */}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// // "use client";

// // import { useState, useEffect } from "react";
// // import Image from "next/image";

// // export default function HeroSection() {
// //   const images = ["/laws.jpg", "/laws2.jpg", "/laws3.jpg"];
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % images.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, []);

// //   return (
// //     <section className="relative w-full min-h-screen flex items-center justify-center bg-[#f8f4f4] overflow-hidden">

// //   {/* Background slideshow */}
// //   {images.map((img, index) => (
// //     <Image
// //       key={index}
// //       src={img}
// //       alt="Legal Background"
// //       fill
// //       priority
// //       className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
// //         index === current ? "opacity-100" : "opacity-0"
// //       }`}
// //     />
// //   ))}

// //   {/* Overlay */}
// //   <div className="absolute inset-0 bg-white/10 z-10"></div>

// //   {/* Centered Content */}
// //   <div className="relative z-20 flex flex-col items-center justify-center text-center w-full min-h-screen px-6">

// //     <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight mb-6 max-w-3xl">
// //       You Deserve The Best Defence Lawyer
// //     </h1> 

// //     <button className="px-8 py-3 bg-[#C9A24D] hover:bg-[#A67C2E] text-black font-semibold rounded-md transition mb-6">
// //       Consult Now →
// //     </button>

// //     <div className="border border-white/40 rounded-full px-6 py-2 text-sm text-gray-300">
// //       Scroll to see more ↓
// //     </div>

// //   </div>

// // </section>

// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection() {
//   const images = ["/laws.jpg", "/laws2.jpg", "/laws5.jpg"];
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//   <section className="relative w-full min-h-screen flex items-center overflow-hidden">

//   {/* Background slideshow */}
//   {images.map((img, index) => (
//     <Image
//       key={index}
//       src={img}
//       alt="Legal Background"
//       fill
//       sizes="100vw"
//       priority
//       className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
//         index === current ? "opacity-100" : "opacity-0"
//       }`}
//     />
//   ))}

//   {/* Professional dark overlay */}
//   <div className="absolute inset-0 bg-black/60 z-10"></div>

//   {/* Main container */}
//   <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

//     {/* Left Column */}
//     <div>

//       <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6">
//         Trusted Legal Counsel with Integrity & Experience
//       </h1>

//       <p className="text-lg text-gray-300 mb-8 max-w-xl">
//         Corporate, Civil & Advisory Legal Services <br />
//         Tailored for Individuals & Businesses in India
//       </p>

//       <div className="flex flex-wrap gap-4">

//         <Link
//           href="/contact"
//           className="px-8 py-3 bg-[#C9A24D] hover:bg-[#A67C2E] text-black font-semibold rounded-md transition"
//         >
//           Schedule a Consultation
//         </Link>

//         <Link
//           href="/practice-areas"
//           className="px-8 py-3 border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black font-semibold rounded-md transition"
//         >
//           View Practice Areas
//         </Link>

//       </div>

//     </div>

//     {/* Right Column */}
//     <div className="relative w-full h-[500px] hidden md:block">

//       <Image
//         src="/closeupjustice.jpg"
//         alt="Legal books and courtroom"
//         fill
//         sizes="50vw"
//         className="object-cover rounded-lg shadow-xl"
//       />

//     </div>

//   </div>

// </section>

//   );
// }



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const images = ["/laws.jpg", "/laws2.jpg", "/laws5.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* Background slideshow */}
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          alt="Legal Background"
          fill
          sizes="100vw"
          priority
          className={`object-cover absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
            }`}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Main container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

        {/* Left Column */}
        <div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6">
            Trusted Legal Counsel with Integrity & Experience
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-xl">
            Corporate, Civil & Advisory Legal Services <br />
            Tailored for Individuals & Businesses in India
          </p>

          <div className="flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="px-8 py-3 bg-[#C9A24D] hover:bg-[#A67C2E] text-black font-semibold rounded-md transition"
            >
              Schedule a Consultation
            </Link>


            <Link
              href="/#practice"
              className="px-8 py-3 border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black font-semibold rounded-md transition"
            >
              View Practice Areas
            </Link>

          </div>

        </div>

        {/* Right Column */}
        <div className="relative  w-full h-[500px] hidden md:block ">

          <Image
            src="/closeupjustice.jpg"
            alt="Legal books and courtroom"
            fill
            sizes="50vw"
            className="object-cover rounded-lg shadow-xl"
          />

        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">

        <button
          onClick={() => {
            const section = document.getElementById("practice");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex flex-col items-center cursor-pointer group animate-bounce"
        >

          <span className="text-white text-sm tracking-widest mb-2 opacity-80 group-hover:text-[#C9A24D] transition">
            SCROLL
          </span>

          <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center group-hover:border-[#C9A24D] transition">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white group-hover:text-[#C9A24D] transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>

          </div>

        </button>

      </div>


    </section>
  );
}
