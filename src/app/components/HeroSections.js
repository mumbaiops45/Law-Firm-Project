// // // // // // // // "use client";

// // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // import Image from "next/image";

// // // // // // // // export default function HeroSection() {
// // // // // // // //   const images = ["/laws.jpg", "/laws2.jpg", "/laws3.jpg"];
// // // // // // // //   const [current, setCurrent] = useState(0);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const interval = setInterval(() => {
// // // // // // // //       setCurrent((prev) => (prev + 1) % images.length);
// // // // // // // //     }, 4000);
// // // // // // // //     return () => clearInterval(interval);
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#111111]">
// // // // // // // //       {/* Background images */}
// // // // // // // //       {images.map((img, index) => (
// // // // // // // //         <Image
// // // // // // // //           key={index}
// // // // // // // //           src={img}
// // // // // // // //           alt="Law Background"
// // // // // // // //           fill
// // // // // // // //           className={`object-cover absolute top-0 left-0 w-full h-full transition-opacity duration-1500 ease-in-out
// // // // // // // //             ${index === current ? "opacity-100 z-10" : "opacity-2 z-0"}
// // // // // // // //           `}
// // // // // // // //         />
// // // // // // // //       ))}

// // // // // // // //       {/* Dark overlay */}
// // // // // // // //       <div className="absolute inset-0 bg-[#111111]/80 z-20"></div>

// // // // // // // //       {/* Hero content */}
// // // // // // // //       <div className="relative z-30 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center text-white">
// // // // // // // //         {/* Left Column */}
// // // // // // // //         <div className="space-y-6">
// // // // // // // //           <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#F5F5F5]">
// // // // // // // //             Trusted Legal Counsel with Integrity & Experience
// // // // // // // //           </h1>
// // // // // // // //           <p className="text-[#F5F5F5] text-lg">
// // // // // // // //             Corporate, Civil & Advisory Legal Services
// // // // // // // //           </p>
// // // // // // // //           <p className="text-gray-300 text-lg">
// // // // // // // //             Tailored for Individuals & Businesses in India
// // // // // // // //           </p>

// // // // // // // //           <div className="flex flex-wrap gap-4 mt-4">
// // // // // // // //             <button className="px-8 py-3 bg-[#C9A24D] text-[#111111] rounded-md font-semibold hover:opacity-90 transition">
// // // // // // // //               Schedule a Consultation
// // // // // // // //             </button>
// // // // // // // //             <button className="px-8 py-3 border border-[#C9A24D] text-[#C9A24D] rounded-md font-medium hover:bg-[#C9A24D] hover:text-[#111111] transition">
// // // // // // // //               View Practice Areas
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Right Column */}
// // // // // // // //           <div className="relative w-full h-100 md:h-125 rounded-md overflow-hidden shadow-lg m-7">

// // // // // // // //           {/* <Image
// // // // // // // //             src="/closeupjustice.jpg"
// // // // // // // //             alt="Legal Services"
// // // // // // // //             fill
// // // // // // // //             className="object-cover"
// // // // // // // //           /> */}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </section>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // // "use client";

// // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // import Image from "next/image";

// // // // // // // // export default function HeroSection() {
// // // // // // // //   const images = ["/laws.jpg", "/laws2.jpg", "/laws3.jpg"];
// // // // // // // //   const [current, setCurrent] = useState(0);

// // // // // // // //   useEffect(() => {
// // // // // // // //     const interval = setInterval(() => {
// // // // // // // //       setCurrent((prev) => (prev + 1) % images.length);
// // // // // // // //     }, 5000);
// // // // // // // //     return () => clearInterval(interval);
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <section className="relative w-full min-h-screen flex items-center justify-center bg-[#f8f4f4] overflow-hidden">

// // // // // // // //   {/* Background slideshow */}
// // // // // // // //   {images.map((img, index) => (
// // // // // // // //     <Image
// // // // // // // //       key={index}
// // // // // // // //       src={img}
// // // // // // // //       alt="Legal Background"
// // // // // // // //       fill
// // // // // // // //       priority
// // // // // // // //       className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
// // // // // // // //         index === current ? "opacity-100" : "opacity-0"
// // // // // // // //       }`}
// // // // // // // //     />
// // // // // // // //   ))}

// // // // // // // //   {/* Overlay */}
// // // // // // // //   <div className="absolute inset-0 bg-white/10 z-10"></div>

// // // // // // // //   {/* Centered Content */}
// // // // // // // //   <div className="relative z-20 flex flex-col items-center justify-center text-center w-full min-h-screen px-6">

// // // // // // // //     <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight mb-6 max-w-3xl">
// // // // // // // //       You Deserve The Best Defence Lawyer
// // // // // // // //     </h1> 

// // // // // // // //     <button className="px-8 py-3 bg-[#C9A24D] hover:bg-[#A67C2E] text-black font-semibold rounded-md transition mb-6">
// // // // // // // //       Consult Now →
// // // // // // // //     </button>

// // // // // // // //     <div className="border border-white/40 rounded-full px-6 py-2 text-sm text-gray-300">
// // // // // // // //       Scroll to see more ↓
// // // // // // // //     </div>

// // // // // // // //   </div>

// // // // // // // // </section>

// // // // // // // //   );
// // // // // // // // }

// // // // // // // "use client";

// // // // // // // import { useState, useEffect } from "react";
// // // // // // // import Image from "next/image";
// // // // // // // import Link from "next/link";

// // // // // // // export default function HeroSection() {
// // // // // // //   const images = ["/laws.jpg", "/laws2.jpg", "/laws5.jpg"];
// // // // // // //   const [current, setCurrent] = useState(0);

// // // // // // //   useEffect(() => {
// // // // // // //     const interval = setInterval(() => {
// // // // // // //       setCurrent((prev) => (prev + 1) % images.length);
// // // // // // //     }, 5000);
// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //   <section className="relative w-full min-h-screen flex items-center overflow-hidden">

// // // // // // //   {/* Background slideshow */}
// // // // // // //   {images.map((img, index) => (
// // // // // // //     <Image
// // // // // // //       key={index}
// // // // // // //       src={img}
// // // // // // //       alt="Legal Background"
// // // // // // //       fill
// // // // // // //       sizes="100vw"
// // // // // // //       priority
// // // // // // //       className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
// // // // // // //         index === current ? "opacity-100" : "opacity-0"
// // // // // // //       }`}
// // // // // // //     />
// // // // // // //   ))}

// // // // // // //   {/* Professional dark overlay */}
// // // // // // //   <div className="absolute inset-0 bg-black/60 z-10"></div>

// // // // // // //   {/* Main container */}
// // // // // // //   <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">

// // // // // // //     {/* Left Column */}
// // // // // // //     <div>

// // // // // // //       <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6">
// // // // // // //         Trusted Legal Counsel with Integrity & Experience
// // // // // // //       </h1>

// // // // // // //       <p className="text-lg text-gray-300 mb-8 max-w-xl">
// // // // // // //         Corporate, Civil & Advisory Legal Services <br />
// // // // // // //         Tailored for Individuals & Businesses in India
// // // // // // //       </p>

// // // // // // //       <div className="flex flex-wrap gap-4">

// // // // // // //         <Link
// // // // // // //           href="/contact"
// // // // // // //           className="px-8 py-3 bg-[#C9A24D] hover:bg-[#A67C2E] text-black font-semibold rounded-md transition"
// // // // // // //         >
// // // // // // //           Schedule a Consultation
// // // // // // //         </Link>

// // // // // // //         <Link
// // // // // // //           href="/practice-areas"
// // // // // // //           className="px-8 py-3 border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black font-semibold rounded-md transition"
// // // // // // //         >
// // // // // // //           View Practice Areas
// // // // // // //         </Link>

// // // // // // //       </div>

// // // // // // //     </div>

// // // // // // //     {/* Right Column */}
// // // // // // //     <div className="relative w-full h-[500px] hidden md:block">

// // // // // // //       <Image
// // // // // // //         src="/closeupjustice.jpg"
// // // // // // //         alt="Legal books and courtroom"
// // // // // // //         fill
// // // // // // //         sizes="50vw"
// // // // // // //         className="object-cover rounded-lg shadow-xl"
// // // // // // //       />

// // // // // // //     </div>

// // // // // // //   </div>

// // // // // // // </section>

// // // // // // //   );
// // // // // // // }



// // // // // //   // "use client";

// // // // // //   // import { useState, useEffect } from "react";
// // // // // //   // import Image from "next/image";
// // // // // //   // import Link from "next/link";

// // // // // //   // export default function HeroSection() {
// // // // // //   //   const images = ["/laws1.jpg", "/laws2.jpg", "/laws4.jpg"];
// // // // // //   //   const [current, setCurrent] = useState(0);

// // // // // //   //   useEffect(() => {
// // // // // //   //     const interval = setInterval(() => {
// // // // // //   //       setCurrent((prev) => (prev + 1) % images.length);
// // // // // //   //     }, 5000);
// // // // // //   //     return () => clearInterval(interval);
// // // // // //   //   }, []);

// // // // // //   //   return (
// // // // // //   //     <section className="relative w-full min-h-screen flex items-center overflow-hidden">

// // // // // //   //       {/* Background slideshow */}
// // // // // //   //       {images.map((img, index) => (
// // // // // //   //         <Image
// // // // // //   //           key={index}
// // // // // //   //           src={img}
// // // // // //   //           alt="Legal Background"
// // // // // //   //           fill
// // // // // //   //           sizes="100vw"
// // // // // //   //           priority
// // // // // //   //           className={`object-cover absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
// // // // // //   //             }`}
// // // // // //   //         />
// // // // // //   //       ))}

// // // // // //   //       {/* Dark overlay */}
// // // // // //   //       <div className="absolute inset-0 bg-black/60 z-10"></div>

// // // // // //   //       {/* Main container */}
// // // // // //   //       {/* <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full"> */}
// // // // // //   //       <div className="
// // // // // //   //   relative z-20 max-w-7xl mx-auto w-full
// // // // // //   //   px-6 sm:px-8 md:px-12 lg:px-16 xl:px-15
// // // // // //   //   grid grid-cols-1 md:grid-cols-2 gap-12 items-center
// // // // // //   // ">

// // // // // //   //         {/* Left Column */}
// // // // // //   //         <div>

// // // // // //   //           {/* <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-white leading-tight mb-6">
// // // // // //   //             Trusted Legal Counsel with Integrity & Experience
// // // // // //   //           </h1> */}
// // // // // //   //           <h1 className="
// // // // // //   //   text-4xl sm:text-5xl md:text-6xl lg:text-[64px]
// // // // // //   //   font-medium
// // // // // //   //   leading-[1.1]
// // // // // //   //   tracking-tight
// // // // // //   //   text-white
// // // // // //   //   mb-6
// // // // // //   // ">
// // // // // //   //             Trusted Legal Counsel with Integrity & Experience
// // // // // //   //           </h1>

// // // // // //   //           <p className="text-base md:text-lg
// // // // // //   // text-gray-300
// // // // // //   // leading-relaxed
// // // // // //   // max-w-xl
// // // // // //   // mb-10
// // // // // //   // ">
// // // // // //   //             Corporate, Civil & Advisory Legal Services <br />
// // // // // //   //             Tailored for Individuals & Businesses in India
// // // // // //   //           </p>

// // // // // //   //           {/* <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"> */}
// // // // // //   //           <div className="flex flex-col sm:flex-row gap-5">

// // // // // //   //             {/* 
// // // // // //   //             <Link
// // // // // //   //               href="/contact"
// // // // // //   //               className="px-8 py-3 bg-[#C9A24D] hover:bg-[#A67C2E] text-black font-semibold rounded-md transition"
// // // // // //   //             >
// // // // // //   //               Schedule a Consultation
// // // // // //   //             </Link> */}
// // // // // //   //             <Link
// // // // // //   //               href="/contact"
// // // // // //   //               className="relative w-full sm:w-auto text-center px-6 py-3 sm:px-8 font-semibold text-black rounded-md overflow-hidden group transition-all duration-500 transform hover:-translate-y-1 hover:scale-105"
// // // // // //   //             >
// // // // // //   //               <span className="absolute inset-0 bg-gradient-to-r from-[#C9A24D] via-[#E5C06B] to-[#C9A24D] bg-[length:200%_200%] animate-[gradientMove_4s_ease_infinite]"></span>

// // // // // //   //               <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/20 blur-xl transition duration-500"></span>

// // // // // //   //               <span className="relative z-10 tracking-wide">
// // // // // //   //                 Schedule a Consultation
// // // // // //   //               </span>
// // // // // //   //             </Link>



// // // // // //   //             {/* <Link
// // // // // //   //               href="/#practice"
// // // // // //   //               className="px-8 py-3 border border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-black font-semibold rounded-md transition"
// // // // // //   //             >
// // // // // //   //               View Practice Areas
// // // // // //   //             </Link> */}
// // // // // //   //             <Link
// // // // // //   //               href="/#practice"
// // // // // //   //               className="relative w-full sm:w-auto text-center px-6 py-3 sm:px-8 font-semibold text-[#C9A24D] rounded-md border border-[#C9A24D] overflow-hidden group transition-all duration-500"
// // // // // //   //             >
// // // // // //   //               <span className="absolute inset-0 bg-[#C9A24D] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>

// // // // // //   //               <span className="relative z-10 group-hover:text-black transition duration-300 tracking-wide">
// // // // // //   //                 View Practice Areas
// // // // // //   //               </span>
// // // // // //   //             </Link>

// // // // // //   //           </div>

// // // // // //   //         </div>

// // // // // //   //         {/* Right Column */}
// // // // // //   //         {/* <div className="relative  w-full h-[500px] hidden md:block ">

// // // // // //   //           <Image
// // // // // //   //             src="/closeupjustice.jpg"
// // // // // //   //             alt="Legal books and courtroom"
// // // // // //   //             fill
// // // // // //   //             sizes="50vw"
// // // // // //   //             className="object-cover bject-center  rounded-lg shadow-xl"
// // // // // //   //           />

// // // // // //   //         </div> */}
// // // // // //   //         {/* <div className="hidden md:flex justify-center"> */}
// // // // // //   //         <div className="hidden md:flex justify-end">


// // // // // //   //           <div className="relative w-full max-w-lg aspect-[7/5]">

// // // // // //   //             <Image
// // // // // //   //               src="/closeupjustice.jpg"
// // // // // //   //               alt="Legal books and courtroom"
// // // // // //   //               fill
// // // // // //   //               sizes="(max-width: 768px) 100vw, 50vw"
// // // // // //   //               className="object-cover object-center rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.6)]
// // // // // //   // "
// // // // // //   //               priority
// // // // // //   //             />

// // // // // //   //           </div>

// // // // // //   //         </div>

// // // // // //   //       </div>

// // // // // //   //       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">

// // // // // //   //         <button
// // // // // //   //           onClick={() => {
// // // // // //   //             const section = document.getElementById("practice");
// // // // // //   //             if (section) {
// // // // // //   //               section.scrollIntoView({ behavior: "smooth" });
// // // // // //   //             }
// // // // // //   //           }}
// // // // // //   //           className="flex flex-col items-center cursor-pointer group animate-bounce"
// // // // // //   //         >

// // // // // //   //           <span className="text-white text-sm tracking-widest mb-2 opacity-80 group-hover:text-[#C9A24D] transition">
// // // // // //   //             SCROLL
// // // // // //   //           </span>

// // // // // //   //           <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center group-hover:border-[#C9A24D] transition">

// // // // // //   //             <svg
// // // // // //   //               xmlns="http://www.w3.org/2000/svg"
// // // // // //   //               className="w-5 h-5 text-white group-hover:text-[#C9A24D] transition"
// // // // // //   //               fill="none"
// // // // // //   //               viewBox="0 0 24 24"
// // // // // //   //               stroke="currentColor"
// // // // // //   //               strokeWidth={2}
// // // // // //   //             >
// // // // // //   //               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
// // // // // //   //             </svg>

// // // // // //   //           </div>

// // // // // //   //         </button>

// // // // // //   //       </div>


// // // // // //   //     </section>
// // // // // //   //   );
// // // // // //   // }


// // // // // // //   "use client";

// // // // // // // import { useState, useEffect } from "react";
// // // // // // // import Image from "next/image";
// // // // // // // import Link from "next/link";

// // // // // // // export default function HeroSection() {
// // // // // // //   const images = ["/laws1.jpg", "/laws2.jpg", "/laws4.jpg"];
// // // // // // //   const [current, setCurrent] = useState(0);

// // // // // // //   useEffect(() => {
// // // // // // //     const interval = setInterval(() => {
// // // // // // //       setCurrent((prev) => (prev + 1) % images.length);
// // // // // // //     }, 5000);
// // // // // // //     return () => clearInterval(interval);
// // // // // // //   }, []);

// // // // // // //   const container =
// // // // // // //     "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

// // // // // // //   return (
// // // // // // //     <section className="relative w-full min-h-screen flex items-center overflow-hidden">

// // // // // // //       {/* Background slideshow */}
// // // // // // //       {images.map((img, index) => (
// // // // // // //         <Image
// // // // // // //           key={index}
// // // // // // //           src={img}
// // // // // // //           alt="Legal Background"
// // // // // // //           fill
// // // // // // //           sizes="100vw"
// // // // // // //           priority
// // // // // // //           className={`object-cover absolute inset-0 transition-opacity duration-1000 ${
// // // // // // //             index === current ? "opacity-100" : "opacity-0"
// // // // // // //           }`}
// // // // // // //         />
// // // // // // //       ))}

// // // // // // //       {/* Dark overlay */}
// // // // // // //       <div className="absolute inset-0 bg-black/60 z-10"></div>

// // // // // // //       {/* Main Content */}
// // // // // // //       <div className={`relative z-20 w-full ${container}`}>
// // // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

// // // // // // //           {/* LEFT CONTENT */}
// // // // // // //           <div className="text-center md:text-left">

// // // // // // //             <h1
// // // // // // //               className="
// // // // // // //               text-3xl sm:text-4xl md:text-5xl lg:text-6xl
// // // // // // //               font-semibold
// // // // // // //               leading-[1.2]
// // // // // // //               text-white
// // // // // // //               mb-6
// // // // // // //             "
// // // // // // //             >
// // // // // // //               Trusted Legal Counsel with Integrity & Experience
// // // // // // //             </h1>

// // // // // // //             <p
// // // // // // //               className="
// // // // // // //               text-sm sm:text-base md:text-lg
// // // // // // //               text-gray-300
// // // // // // //               leading-relaxed
// // // // // // //               mb-10
// // // // // // //               max-w-xl
// // // // // // //               mx-auto md:mx-0
// // // // // // //             "
// // // // // // //             >
// // // // // // //               Corporate, Civil & Advisory Legal Services <br />
// // // // // // //               Tailored for Individuals & Businesses in India
// // // // // // //             </p>

// // // // // // //             {/* Buttons */}
// // // // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

// // // // // // //               <Link
// // // // // // //                 href="/contact"
// // // // // // //                 className="
// // // // // // //                 w-full sm:w-auto
// // // // // // //                 text-center
// // // // // // //                 px-6 sm:px-8
// // // // // // //                 py-3
// // // // // // //                 font-medium
// // // // // // //                 text-black
// // // // // // //                 rounded-md
// // // // // // //                 bg-[#C9A24D]
// // // // // // //                 hover:bg-[#B08D3C]
// // // // // // //                 transition
// // // // // // //               "
// // // // // // //               >
// // // // // // //                 Schedule a Consultation
// // // // // // //               </Link>

// // // // // // //               <Link
// // // // // // //                 href="/#practice"
// // // // // // //                 className="
// // // // // // //                 w-full sm:w-auto
// // // // // // //                 text-center
// // // // // // //                 px-6 sm:px-8
// // // // // // //                 py-3
// // // // // // //                 font-medium
// // // // // // //                 text-[#C9A24D]
// // // // // // //                 rounded-md
// // // // // // //                 border border-[#C9A24D]
// // // // // // //                 hover:bg-[#C9A24D]
// // // // // // //                 hover:text-black
// // // // // // //                 transition
// // // // // // //               "
// // // // // // //               >
// // // // // // //                 View Practice Areas
// // // // // // //               </Link>

// // // // // // //             </div>

// // // // // // //           </div>

// // // // // // //           {/* RIGHT IMAGE (Desktop Only) */}
// // // // // // //           <div className="hidden md:flex justify-end">
// // // // // // //             <div className="relative w-full max-w-lg aspect-[7/5]">
// // // // // // //               <Image
// // // // // // //                 src="/closeupjustice.jpg"
// // // // // // //                 alt="Legal books and courtroom"
// // // // // // //                 fill
// // // // // // //                 sizes="50vw"
// // // // // // //                 className="object-cover object-center rounded-xl shadow-2xl"
// // // // // // //                 priority
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //           </div>

// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Scroll Button */}
// // // // // // //       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">

// // // // // // //         <button
// // // // // // //           onClick={() => {
// // // // // // //             const section = document.getElementById("practice");
// // // // // // //             if (section) {
// // // // // // //               section.scrollIntoView({ behavior: "smooth" });
// // // // // // //             }
// // // // // // //           }}
// // // // // // //           className="flex flex-col items-center cursor-pointer group animate-bounce"
// // // // // // //         >

// // // // // // //           <span className="text-white text-xs tracking-widest mb-2 opacity-80 group-hover:text-[#C9A24D] transition">
// // // // // // //             SCROLL
// // // // // // //           </span>

// // // // // // //           <div className="w-9 h-9 border border-white rounded-full flex items-center justify-center group-hover:border-[#C9A24D] transition">
// // // // // // //             <svg
// // // // // // //               xmlns="http://www.w3.org/2000/svg"
// // // // // // //               className="w-4 h-4 text-white group-hover:text-[#C9A24D] transition"
// // // // // // //               fill="none"
// // // // // // //               viewBox="0 0 24 24"
// // // // // // //               stroke="currentColor"
// // // // // // //               strokeWidth={2}
// // // // // // //             >
// // // // // // //               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
// // // // // // //             </svg>
// // // // // // //           </div>

// // // // // // //         </button>

// // // // // // //       </div>

// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }







// // // // // // // "use client";

// // // // // // // import Image from "next/image";
// // // // // // // import Link from "next/link";

// // // // // // // export default function HeroSection() {

// // // // // // //   return (

// // // // // // //     <section className="
// // // // // // //       relative
// // // // // // //       w-full
// // // // // // //       min-h-screen
// // // // // // //       flex
// // // // // // //       items-center
// // // // // // //       justify-center
// // // // // // //       overflow-hidden
// // // // // // //     ">

// // // // // // //       {/* BACKGROUND IMAGE */}
// // // // // // //       <Image
// // // // // // //         src="/hero.jpg"   // put your hero image in public folder
// // // // // // //         alt="Law Firm Bangalore"
// // // // // // //         fill
// // // // // // //         priority
// // // // // // //         className="object-cover object-center"
// // // // // // //       />

// // // // // // //       {/* DARK OVERLAY */}
// // // // // // //       <div className="absolute inset-0 bg-black/70"></div>


// // // // // // //       {/* CONTENT CONTAINER */}
// // // // // // //       <div className="
// // // // // // //         relative
// // // // // // //         z-10
// // // // // // //         max-w-7xl
// // // // // // //         mx-auto
// // // // // // //         px-6
// // // // // // //         py-20
// // // // // // //         w-full
// // // // // // //       ">

// // // // // // //         <div className="
// // // // // // //           grid
// // // // // // //           md:grid-cols-2
// // // // // // //           gap-10
// // // // // // //           items-center
// // // // // // //         ">

// // // // // // //           {/* LEFT CONTENT */}
// // // // // // //           <div className="text-center md:text-left">

// // // // // // //             {/* HEADING */}
// // // // // // //             <h1 className="
// // // // // // //               text-3xl
// // // // // // //               sm:text-4xl
// // // // // // //               md:text-5xl
// // // // // // //               lg:text-6xl
// // // // // // //               font-semibold
// // // // // // //               leading-tight
// // // // // // //               text-white
// // // // // // //               mb-6
// // // // // // //             ">

// // // // // // //               Leading Law Firm in Bangalore for Corporate, Civil, Criminal & Property Legal Services

// // // // // // //             </h1>


// // // // // // //             {/* DESCRIPTION */}
// // // // // // //             <p className="
// // // // // // //               text-sm
// // // // // // //               sm:text-base
// // // // // // //               md:text-lg
// // // // // // //               text-gray-300
// // // // // // //               leading-relaxed
// // // // // // //               mb-10
// // // // // // //               max-w-xl
// // // // // // //               mx-auto
// // // // // // //               md:mx-0
// // // // // // //             ">

// // // // // // //               Expert Advocates providing Corporate Law, Civil Litigation,
// // // // // // //               Criminal Defense, Property Disputes, Arbitration, and NRI
// // // // // // //               Legal Services in Bangalore and across India.

// // // // // // //             </p>


// // // // // // //             {/* BUTTONS */}
// // // // // // //             <div className="
// // // // // // //               flex
// // // // // // //               flex-col
// // // // // // //               sm:flex-row
// // // // // // //               gap-4
// // // // // // //               justify-center
// // // // // // //               md:justify-start
// // // // // // //             ">

// // // // // // //               {/* PRIMARY BUTTON */}
// // // // // // //               <Link
// // // // // // //                 href="/contact"
// // // // // // //                 className="
// // // // // // //                   px-8
// // // // // // //                   py-3
// // // // // // //                   font-medium
// // // // // // //                   bg-[#C9A24D]
// // // // // // //                   text-black
// // // // // // //                   hover:bg-[#b8923f]
// // // // // // //                   transition
// // // // // // //                   duration-300
// // // // // // //                 "
// // // // // // //               >
// // // // // // //                 Book Confidential Consultation
// // // // // // //               </Link>


// // // // // // //               {/* SECONDARY BUTTON */}
// // // // // // //               <Link
// // // // // // //                 href="/#practice"
// // // // // // //                 className="
// // // // // // //                   px-8
// // // // // // //                   py-3
// // // // // // //                   border
// // // // // // //                   border-[#C9A24D]
// // // // // // //                   text-[#C9A24D]
// // // // // // //                   hover:bg-[#C9A24D]
// // // // // // //                   hover:text-black
// // // // // // //                   transition
// // // // // // //                   duration-300
// // // // // // //                 "
// // // // // // //               >
// // // // // // //                 View Practice Areas
// // // // // // //               </Link>

// // // // // // //             </div>



// // // // // // //             {/* TRUST INDICATORS */}
// // // // // // //             <div className="
// // // // // // //               flex
// // // // // // //               flex-wrap
// // // // // // //               gap-10
// // // // // // //               mt-12
// // // // // // //               justify-center
// // // // // // //               md:justify-start
// // // // // // //             ">

// // // // // // //               <div>
// // // // // // //                 <div className="text-[#C9A24D] text-2xl font-semibold">
// // // // // // //                   15+
// // // // // // //                 </div>
// // // // // // //                 <div className="text-gray-300 text-sm">
// // // // // // //                   Years Experience
// // // // // // //                 </div>
// // // // // // //               </div>


// // // // // // //               <div>
// // // // // // //                 <div className="text-[#C9A24D] text-2xl font-semibold">
// // // // // // //                   500+
// // // // // // //                 </div>
// // // // // // //                 <div className="text-gray-300 text-sm">
// // // // // // //                   Cases Successfully Handled
// // // // // // //                 </div>
// // // // // // //               </div>


// // // // // // //               <div>
// // // // // // //                 <div className="text-[#C9A24D] text-2xl font-semibold">
// // // // // // //                   All Major Courts
// // // // // // //                 </div>
// // // // // // //                 <div className="text-gray-300 text-sm">
// // // // // // //                   Karnataka & India
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //             </div>

// // // // // // //           </div>



// // // // // // //           {/* RIGHT SIDE IMAGE (OPTIONAL LAWYER IMAGE) */}
// // // // // // //           <div className="hidden md:block relative h-[500px]">

// // // // // // //             <Image
// // // // // // //               src="/lawyer.png"   // optional image
// // // // // // //               alt="Advocate"
// // // // // // //               fill
// // // // // // //               className="object-contain"
// // // // // // //             />

// // // // // // //           </div>

// // // // // // //         </div>

// // // // // // //       </div>

// // // // // // //     </section>

// // // // // // //   );

// // // // // // // }


// // // // // // "use client";

// // // // // // import Image from "next/image";
// // // // // // import Link from "next/link";

// // // // // // export default function HeroSection() {

// // // // // //   return (

// // // // // //     <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">


// // // // // //       {/* BACKGROUND IMAGE */}
// // // // // //       <Image
// // // // // //         src="/laws.jpg"
// // // // // //         alt="Law Firm"
// // // // // //         fill
// // // // // //         className="object-cover opacity-30"
// // // // // //         priority
// // // // // //       />


// // // // // //       {/* GRADIENT OVERLAY */}
// // // // // //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/40"></div>



// // // // // //       {/* MAIN CONTAINER */}
// // // // // //       <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-16">

// // // // // //         <div className="grid lg:grid-cols-2 items-center gap-16">


// // // // // //           {/* LEFT CONTENT */}
// // // // // //           <div>


// // // // // //             {/* SMALL TAG */}
// // // // // //             <div className="text-[#C9A24D] mb-4 tracking-widest uppercase text-sm">
// // // // // //               Trusted Legal Experts
// // // // // //             </div>



// // // // // //             {/* MAIN HEADING */}
// // // // // //             <h1 className="text-white text-5xl lg:text-6xl font-semibold leading-tight mb-6">

// // // // // //               Leading Law Firm in Bangalore Providing Expert Legal Solutions

// // // // // //             </h1>



// // // // // //             {/* DESCRIPTION */}
// // // // // //             <p className="text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">

// // // // // //               We deliver strategic legal representation in corporate law, civil litigation,
// // // // // //               criminal defense, and property matters with professionalism and integrity.

// // // // // //             </p>



// // // // // //             {/* BUTTONS */}
// // // // // //             <div className="flex flex-wrap gap-4">


// // // // // //               <Link
// // // // // //                 href="/contact"
// // // // // //                 className="bg-[#C9A24D] text-black px-8 py-4 font-medium hover:bg-[#b8963e] transition-all duration-300"
// // // // // //               >
// // // // // //                 Book Confidential Consultation
// // // // // //               </Link>



// // // // // //               <Link
// // // // // //                 href="/practice"
// // // // // //                 className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-medium hover:bg-[#C9A24D] hover:text-black transition-all duration-300"
// // // // // //               >
// // // // // //                 View Practice Areas
// // // // // //               </Link>


// // // // // //             </div>


// // // // // //           </div>



// // // // // //           {/* RIGHT IMAGE */}
// // // // // //           <div className="hidden lg:flex justify-end">

// // // // // //             <div className="relative">

// // // // // //               {/* GOLD BORDER EFFECT */}
// // // // // //               <div className="absolute -inset-4 border border-[#C9A24D]/30"></div>

// // // // // //               <Image
// // // // // //                 src="/closeupjustice.jpg"
// // // // // //                 alt="Experienced Lawyer"
// // // // // //                 width={450}
// // // // // //                 height={600}
// // // // // //                 className="relative z-10 object-contain"
// // // // // //                 priority
// // // // // //               />

// // // // // //             </div>

// // // // // //           </div>


// // // // // //         </div>

// // // // // //       </div>

// // // // // //     </section>

// // // // // //   );

// // // // // // }

// // // // // "use client";

// // // // // import Image from "next/image";
// // // // // import Link from "next/link";

// // // // // export default function HeroSection() {

// // // // //   return (

// // // // //     <section className="relative min-h-screen flex items-center bg-black overflow-hidden">


// // // // //       {/* BACKGROUND */}
// // // // //       <Image
// // // // //         src="/laws.jpg"
// // // // //         fill
// // // // //         className="object-cover opacity-30"
// // // // //         alt="Law Firm in Bangalore"
// // // // //         priority
// // // // //       />

// // // // //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>



// // // // //       {/* CONTENT */}
// // // // //       <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">

// // // // //         <div className="grid lg:grid-cols-2 gap-16 items-center">


// // // // //           {/* LEFT */}
// // // // //           <div>

// // // // //             {/* SEO TAG */}
// // // // //             <div className="text-[#C9A24D] uppercase tracking-widest mb-4 text-sm">

// // // // //               Law Firm in Bangalore

// // // // //             </div>


// // // // //             {/* SEO H1 */}
// // // // //             <h1 className="text-white text-5xl lg:text-6xl font-semibold leading-tight mb-6">

// // // // //               Leading Law Firm in Bangalore Offering Experienced Attorneys &
// // // // //               Personalized Legal Guidance

// // // // //             </h1>


// // // // //             {/* CLIENT CONTENT */}
// // // // //             <p className="text-gray-400 text-lg mb-8 max-w-xl">

// // // // //               S Jain Attorneys is a reputed law firm in Bangalore delivering expert
// // // // //               legal representation in corporate law, civil litigation, criminal defense,
// // // // //               property disputes, and NRI legal services.

// // // // //             </p>


// // // // //             {/* BUTTONS */}
// // // // //             <div className="flex gap-4 mb-12">

// // // // //               <Link href="/contact"
// // // // //                 className="bg-[#C9A24D] text-black px-8 py-4 font-medium hover:bg-[#b8963e]">

// // // // //                 Schedule a Consultation

// // // // //               </Link>

// // // // //               <Link href="/practice"
// // // // //                 className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 hover:bg-[#C9A24D] hover:text-black">

// // // // //                 View Practice Areas

// // // // //               </Link>

// // // // //             </div>


// // // // //             {/* TRUST INDICATORS */}
// // // // //             <div className="flex gap-12">

// // // // //               <div>
// // // // //                 <div className="text-[#C9A24D] text-3xl font-semibold">15+</div>
// // // // //                 <div className="text-gray-400 text-sm">Years Experience</div>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <div className="text-[#C9A24D] text-3xl font-semibold">500+</div>
// // // // //                 <div className="text-gray-400 text-sm">Cases Handled</div>
// // // // //               </div>

// // // // //               <div>
// // // // //                 <div className="text-[#C9A24D] text-3xl font-semibold">All Courts</div>
// // // // //                 <div className="text-gray-400 text-sm">Karnataka & India</div>
// // // // //               </div>

// // // // //             </div>

// // // // //           </div>


// // // // //           {/* RIGHT IMAGE */}
// // // // //           <div className="hidden lg:flex justify-end">

// // // // //             <Image
// // // // //               src="/closeupjustice.jpg"
// // // // //               width={450}
// // // // //               height={600}
// // // // //               alt="Lawyers Bangalore"
// // // // //               className="object-contain"
// // // // //             />

// // // // //           </div>

// // // // //         </div>

// // // // //       </div>

// // // // //     </section>

// // // // //   );

// // // // // }

// // // // // "use client";

// // // // // import Image from "next/image";
// // // // // import { motion } from "framer-motion";

// // // // // export default function Hero() {
// // // // //   return (
// // // // //     <section className="relative w-full min-h-screen bg-black text-white flex items-center overflow-hidden">

// // // // //       {/* Background Gradient */}
// // // // //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-[#1a1a1a] z-0"></div>

// // // // //       {/* Gold Glow Effect */}
// // // // //       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/10 blur-[140px] rounded-full z-0"></div>

// // // // //       {/* Container */}
// // // // //       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

// // // // //         {/* LEFT CONTENT */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, y: 60 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           transition={{ duration: 0.8 }}
// // // // //         >
// // // // //           {/* Small heading */}
// // // // //           <p className="text-yellow-500 uppercase tracking-[4px] text-sm mb-6">
// // // // //             Law Firm in Bangalore
// // // // //           </p>

// // // // //           {/* Main Heading */}
// // // // //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
// // // // //             Leading Law Firm <br />
// // // // //             Offering Experienced <br />
// // // // //             Attorneys & Personalized <br />
// // // // //             Legal Guidance
// // // // //           </h1>

// // // // //           {/* Description */}
// // // // //           <p className="text-gray-400 text-lg max-w-xl mb-10">
// // // // //             S Jain Attorneys provides expert legal representation in corporate law,
// // // // //             civil litigation, criminal defense, property disputes, and NRI legal services.
// // // // //           </p>

// // // // //           {/* Buttons */}
// // // // //           <div className="flex flex-wrap gap-4 mb-12">

// // // // //             <button className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-md transition">
// // // // //               Schedule Consultation
// // // // //             </button>

// // // // //             <button className="border border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-black font-semibold px-8 py-4 rounded-md transition">
// // // // //               View Practice Areas
// // // // //             </button>

// // // // //           </div>

// // // // //           {/* Stats */}
// // // // //           <div className="flex gap-12">

// // // // //             <div>
// // // // //               <h3 className="text-yellow-500 text-3xl font-bold">15+</h3>
// // // // //               <p className="text-gray-400">Years Experience</p>
// // // // //             </div>

// // // // //             <div>
// // // // //               <h3 className="text-yellow-500 text-3xl font-bold">500+</h3>
// // // // //               <p className="text-gray-400">Cases Handled</p>
// // // // //             </div>

// // // // //             <div>
// // // // //               <h3 className="text-yellow-500 text-3xl font-bold">All Courts</h3>
// // // // //               <p className="text-gray-400">Karnataka & India</p>
// // // // //             </div>

// // // // //           </div>

// // // // //         </motion.div>


// // // // //         {/* RIGHT IMAGE */}
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0, x: 80 }}
// // // // //           animate={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 1 }}
// // // // //           className="relative flex justify-center lg:justify-end"
// // // // //         >

// // // // //           {/* Image Glow */}
// // // // //           <div className="absolute w-[400px] h-[400px] bg-yellow-600/20 blur-[120px] rounded-full"></div>

// // // // //           {/* Image */}
// // // // //           <Image
// // // // //             src="/laws.jpg"
// // // // //             alt="Law Firm"
// // // // //             width={500}
// // // // //             height={600}
// // // // //             className="relative rounded-lg shadow-2xl object-cover"
// // // // //             priority
// // // // //           />

// // // // //         </motion.div>

// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import Image from "next/image";
// // // // import { motion } from "framer-motion";

// // // // export default function Hero() {
// // // //   return (
// // // //     <section className="relative w-full bg-black text-white overflow-hidden">

// // // //       {/* BACKGROUND */}
// // // //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-[#0f0f0f]"></div>

// // // //       {/* GOLD LIGHT */}
// // // //       <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-[#C9A24D]/10 blur-[160px] rounded-full"></div>


// // // //       <div className="relative w-full px-6 lg:px-16 py-8 grid lg:grid-cols-2 gap-16 items-center">

// // // //         {/* LEFT SIDE */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 60 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.9 }}
// // // //           className="max-w-2xl"
// // // //         >

// // // //           <p className="text-[#C9A24D] uppercase tracking-[5px] text-sm mb-6 font-medium">
// // // //             Law Firm in Bangalore
// // // //           </p>

// // // //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
// // // //             Leading Law Firm in Bangalore <br/>
// // // //             Offering Experienced Attorneys <br/>
// // // //             & Personalized Legal Guidance
// // // //           </h1>

// // // //           <p className="text-gray-400 text-lg leading-relaxed">
// // // //             S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal
// // // //             representation in corporate law, civil litigation, criminal defense,
// // // //             property disputes, and NRI legal services.

// // // //             <br/><br/>

// // // //             Our experienced attorneys provide strategic, result-oriented legal
// // // //             solutions for individuals, businesses, startups, and NRIs across India.
// // // //           </p>

// // // //         </motion.div>



// // // //         {/* RIGHT SIDE */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, x: 80 }}
// // // //           animate={{ opacity: 1, x: 0 }}
// // // //           transition={{ duration: 1 }}
// // // //           className="flex flex-col items-center lg:items-end"
// // // //         >

// // // //           {/* IMAGE */}
// // // //           <div className="relative mb-10">

// // // //             <div className="absolute w-[500px] h-[500px] bg-[#C9A24D]/20 blur-[140px] rounded-full"></div>

// // // //             <Image
// // // //               src="/laws.jpg"
// // // //               alt="Law Firm"
// // // //               width={550}
// // // //               height={700}
// // // //               priority
// // // //               className="relative rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
// // // //             />

// // // //           </div>


// // // //           {/* BUTTONS */}
// // // //           <div className="flex gap-5 mb-10">

// // // //             <button className="bg-[#C9A24D] text-black px-8 py-4 font-semibold hover:bg-[#b8963e] transition shadow-lg">
// // // //               Schedule Consultation
// // // //             </button>

// // // //             <button className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold hover:bg-[#C9A24D] hover:text-black transition">
// // // //               View Practice Areas
// // // //             </button>

// // // //           </div>



// // // //           {/* TRUST STATS */}
// // // //           <div className="grid grid-cols-3 gap-10 border-t border-gray-800 pt-8 w-full max-w-[550px]">

// // // //             <div className="text-center">
// // // //               <div className="text-[#C9A24D] text-3xl font-bold">
// // // //                 15+
// // // //               </div>
// // // //               <div className="text-gray-400 text-sm">
// // // //                 Years Experience
// // // //               </div>
// // // //             </div>


// // // //             <div className="text-center">
// // // //               <div className="text-[#C9A24D] text-3xl font-bold">
// // // //                 500+
// // // //               </div>
// // // //               <div className="text-gray-400 text-sm">
// // // //                 Cases Successfully Handled
// // // //               </div>
// // // //             </div>


// // // //             <div className="text-center">
// // // //               <div className="text-[#C9A24D] text-3xl font-bold">
// // // //                 High Court
// // // //               </div>
// // // //               <div className="text-gray-400 text-sm">
// // // //                 Karnataka & India
// // // //               </div>
// // // //             </div>

// // // //           </div>


// // // //         </motion.div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }



// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "framer-motion";

// // // export default function Hero() {
// // //   return (
// // //     <section className="relative w-full bg-black text-white overflow-hidden">

// // //       {/* BACKGROUND */}
// // //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-[#0f0f0f]" />

// // //       {/* GOLD GLOW */}
// // //       <div className="absolute right-0 top-0 w-[800px] h-[800px] bg-[#C9A24D]/10 blur-[180px] rounded-full" />



// // //       {/* MAIN CONTAINER */}
// // //       <div className="relative w-full px-6 lg:px-16 py-24 grid lg:grid-cols-2 gap-16 items-center">




// // //         {/* LEFT SIDE */}
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 60 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.9 }}
// // //           className="max-w-2xl"
// // //         >

// // //           {/* TOP TAG */}
// // //           <p className="text-[#C9A24D] uppercase tracking-[5px] text-sm mb-6 font-medium">
// // //             Law Firm in Bangalore
// // //           </p>


// // //           {/* MAIN HEADING */}
// // //           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">

// // //             Leading Law Firm in Bangalore <br/>

// // //             Offering Experienced Attorneys <br/>

// // //             & Personalized Legal Guidance

// // //           </h1>


// // //           {/* DESCRIPTION */}
// // //           <p className="text-gray-400 text-lg leading-relaxed">

// // //             S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal
// // //             representation in corporate law, civil litigation, criminal defense,
// // //             property disputes, and NRI legal services.

// // //             <br/><br/>

// // //             Our experienced attorneys provide strategic, result-oriented legal
// // //             solutions for individuals, businesses, startups, and NRIs across India.

// // //           </p>

// // //         </motion.div>





// // //         {/* RIGHT SIDE */}
// // //         <motion.div
// // //           initial={{ opacity: 0, x: 80 }}
// // //           animate={{ opacity: 1, x: 0 }}
// // //           transition={{ duration: 1 }}
// // //           className="flex flex-col items-center lg:items-end"
// // //         >


// // //           {/* IMAGE */}
// // //           <div className="relative mb-14">

// // //             <div className="absolute w-[600px] h-[600px] bg-[#C9A24D]/20 blur-[160px] rounded-full" />

// // //             <Image
// // //               src="/laws.jpg"
// // //               alt="Law Firm in Bangalore"
// // //               width={620}
// // //               height={780}
// // //               priority
// // //               className="relative rounded-lg shadow-[0_25px_70px_rgba(0,0,0,0.8)] object-cover"
// // //             />

// // //           </div>



// // //           {/* BUTTONS */}
// // //           <div className="flex flex-wrap gap-5 mb-12">

// // //             <button className="
// // //               bg-[#C9A24D]
// // //               text-black
// // //               px-8
// // //               py-4
// // //               font-semibold
// // //               tracking-wide
// // //               hover:bg-[#b8963e]
// // //               transition
// // //               shadow-[0_10px_30px_rgba(201,162,77,0.4)]
// // //             ">
// // //               Schedule Consultation
// // //             </button>


// // //             <button className="
// // //               border border-[#C9A24D]
// // //               text-[#C9A24D]
// // //               px-8
// // //               py-4
// // //               font-semibold
// // //               tracking-wide
// // //               hover:bg-[#C9A24D]
// // //               hover:text-black
// // //               transition
// // //             ">
// // //               View Practice Areas
// // //             </button>

// // //           </div>




// // //           {/* PREMIUM STATS CARD */}
// // //           <div className="
// // //             grid grid-cols-3 gap-10
// // //             border border-[#C9A24D]/20
// // //             bg-[#111]/60
// // //             backdrop-blur-sm
// // //             p-6
// // //             rounded-lg
// // //             w-full
// // //             max-w-[620px]
// // //           ">


// // //             <div className="text-center">
// // //               <div className="text-[#C9A24D] text-3xl font-bold mb-1">
// // //                 15+
// // //               </div>
// // //               <div className="text-gray-400 text-sm">
// // //                 Years Experience
// // //               </div>
// // //             </div>


// // //             <div className="text-center">
// // //               <div className="text-[#C9A24D] text-3xl font-bold mb-1">
// // //                 500+
// // //               </div>
// // //               <div className="text-gray-400 text-sm">
// // //                 Cases Successfully Handled
// // //               </div>
// // //             </div>


// // //             <div className="text-center">
// // //               <div className="text-[#C9A24D] text-3xl font-bold mb-1">
// // //                 High Court
// // //               </div>
// // //               <div className="text-gray-400 text-sm">
// // //                 Karnataka & India
// // //               </div>
// // //             </div>


// // //           </div>



// // //         </motion.div>



// // //       </div>



// // //     </section>
// // //   );
// // // }




// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "framer-motion";

// // // export default function Hero() {

// // //   /* TEXT ZOOM VARIANT */
// // //   const zoomText = {
// // //     hidden: {
// // //       opacity: 0,
// // //       scale: 0.8,
// // //       y: 40,
// // //     },
// // //     show: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.8,
// // //         ease: "easeOut",
// // //       },
// // //     },
// // //   };

// // //   /* STAGGER CONTAINER */
// // //   const staggerContainer = {
// // //     hidden: {},
// // //     show: {
// // //       transition: {
// // //         staggerChildren: 0.2,
// // //       },
// // //     },
// // //   };

// // //   /* IMAGE ANIMATION */
// // //   const imageAnim = {
// // //     hidden: {
// // //       opacity: 0,
// // //       scale: 0.9,
// // //       x: 80,
// // //     },
// // //     show: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       x: 0,
// // //       transition: {
// // //         duration: 1,
// // //         ease: "easeOut",
// // //       },
// // //     },
// // //   };

// // //   /* BUTTON ANIMATION */
// // //   const buttonAnim = {
// // //     hidden: {
// // //       opacity: 0,
// // //       y: 40,
// // //     },
// // //     show: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.7,
// // //       },
// // //     },
// // //   };

// // //   /* STATS ANIMATION */
// // //   const statsAnim = {
// // //     hidden: {
// // //       opacity: 0,
// // //       scale: 0.8,
// // //       y: 40,
// // //     },
// // //     show: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.8,
// // //       },
// // //     },
// // //   };


// // //   return (
// // //     <section className="relative w-full bg-black text-white overflow-hidden">

// // //       {/* BACKGROUND */}
// // //       <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-[#0f0f0f]" />

// // //       {/* GOLD GLOW */}
// // //       <motion.div
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 2 }}
// // //         className="absolute right-0 top-0 w-[800px] h-[800px] bg-[#C9A24D]/10 blur-[180px] rounded-full"
// // //       />


// // //       {/* MAIN */}
// // //       <div className="relative w-full px-6 lg:px-16 py-24 grid lg:grid-cols-2 gap-16 items-center">


// // //         {/* LEFT SIDE */}
// // //         <motion.div
// // //           variants={staggerContainer}
// // //           initial="hidden"
// // //           animate="show"
// // //           className="max-w-2xl"
// // //         >

// // //           {/* TAG */}
// // //           <motion.p
// // //             variants={zoomText}
// // //             className="text-[#C9A24D] uppercase tracking-[5px] text-sm mb-6 font-medium"
// // //           >
// // //             Law Firm in Bangalore
// // //           </motion.p>


// // //           {/* HEADING */}
// // //           <motion.h1
// // //             variants={zoomText}
// // //             className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8"
// // //           >
// // //             Leading Law Firm in Bangalore <br/>
// // //             Offering Experienced Attorneys <br/>
// // //             & Personalized Legal Guidance
// // //           </motion.h1>


// // //           {/* DESCRIPTION */}
// // //           <motion.p
// // //             variants={zoomText}
// // //             className="text-gray-400 text-lg leading-relaxed"
// // //           >
// // //             S Jain Attorneys is a reputed law firm in Bangalore delivering expert legal
// // //             representation in corporate law, civil litigation, criminal defense,
// // //             property disputes, and NRI legal services.

// // //             <br/><br/>

// // //             Our experienced attorneys provide strategic, result-oriented legal
// // //             solutions for individuals, businesses, startups, and NRIs across India.
// // //           </motion.p>

// // //         </motion.div>



// // //         {/* RIGHT SIDE */}
// // //         <motion.div
// // //           variants={staggerContainer}
// // //           initial="hidden"
// // //           animate="show"
// // //           className="flex flex-col items-center lg:items-end"
// // //         >


// // //           {/* IMAGE */}
// // //           <motion.div
// // //             variants={imageAnim}
// // //             className="relative mb-14"
// // //           >

// // //             <div className="absolute w-[600px] h-[600px] bg-[#C9A24D]/20 blur-[160px] rounded-full" />

// // //             <Image
// // //               src="/laws.jpg"
// // //               alt="Law Firm"
// // //               width={620}
// // //               height={780}
// // //               priority
// // //               className="relative rounded-lg shadow-[0_25px_70px_rgba(0,0,0,0.8)]"
// // //             />

// // //           </motion.div>



// // //           {/* BUTTONS */}
// // //           <motion.div
// // //             variants={buttonAnim}
// // //             className="flex flex-wrap gap-5 mb-12"
// // //           >

// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="bg-[#C9A24D] text-black px-8 py-4 font-semibold tracking-wide hover:bg-[#b8963e] transition shadow-[0_10px_30px_rgba(201,162,77,0.4)]"
// // //             >
// // //               Schedule Consultation
// // //             </motion.button>


// // //             <motion.button
// // //               whileHover={{ scale: 1.05 }}
// // //               whileTap={{ scale: 0.95 }}
// // //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-4 font-semibold tracking-wide hover:bg-[#C9A24D] hover:text-black transition"
// // //             >
// // //               View Practice Areas
// // //             </motion.button>

// // //           </motion.div>



// // //           {/* STATS */}
// // //           <motion.div
// // //             variants={statsAnim}
// // //             className="grid grid-cols-3 gap-10 border border-[#C9A24D]/20 bg-[#111]/60 backdrop-blur-sm p-6 rounded-lg w-full max-w-[620px]"
// // //           >

// // //             <motion.div whileHover={{ scale: 1.08 }} className="text-center">
// // //               <div className="text-[#C9A24D] text-3xl font-bold">15+</div>
// // //               <div className="text-gray-400 text-sm">Years Experience</div>
// // //             </motion.div>

// // //             <motion.div whileHover={{ scale: 1.08 }} className="text-center">
// // //               <div className="text-[#C9A24D] text-3xl font-bold">500+</div>
// // //               <div className="text-gray-400 text-sm">Cases Successfully Handled</div>
// // //             </motion.div>

// // //             <motion.div whileHover={{ scale: 1.08 }} className="text-center">
// // //               <div className="text-[#C9A24D] text-3xl font-bold">High Court</div>
// // //               <div className="text-gray-400 text-sm">Karnataka & India</div>
// // //             </motion.div>

// // //           </motion.div>


// // //         </motion.div>


// // //       </div>

// // //     </section>
// // //   );
// // // }



// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";

// // // export default function HeroSection() {

// // //   const container = {
// // //     hidden: {},
// // //     show: {
// // //       transition: {
// // //         staggerChildren: 0.18
// // //       }
// // //     }
// // //   };

// // //   const zoom = {
// // //     hidden: {
// // //       opacity: 0,
// // //       scale: 0.96,
// // //       y: 40
// // //     },
// // //     show: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.8,
// // //         ease: "easeOut"
// // //       }
// // //     }
// // //   };

// // //   const imageAnim = {
// // //     hidden: {
// // //       opacity: 0,
// // //       scale: 0.94,
// // //       x: 60
// // //     },
// // //     show: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       x: 0,
// // //       transition: {
// // //         duration: 1
// // //       }
// // //     }
// // //   };

// // //   return (

// // //     // <section className="relative bg-black text-white overflow-hidden pt-[110px] pb-[70px]">
// // //     <section className="relative bg-black text-white overflow-hidden pt-[140px] pb-[90px]">

// // //       {/* GOLD LIGHT EFFECT */}
// // //       <div className="absolute right-[-200px] top-[120px] w-[500px] h-[500px] bg-[#C9A24D]/10 blur-[140px] rounded-full" />

// // //       {/* CONTAINER */}
// // //       <div className="relative max-w-[1200px] mx-auto px-6">

// // //         {/* <div className="grid lg:grid-cols-2 gap-14 items-center"> */}
// // //           <div className="grid lg:grid-cols-2 gap-14 items-center lg:items-start">

// // //           {/* LEFT CONTENT */}
// // //           <motion.div
// // //             variants={container}
// // //             initial="hidden"
// // //             animate="show"
// // //             className="max-w-[580px]"
// // //           >

// // //             <motion.p
// // //               variants={zoom}
// // //               className="text-[#C9A24D] tracking-[4px] text-sm mb-6"
// // //             >
// // //               TRUSTED LEGAL EXPERTS IN BANGALORE
// // //             </motion.p>


// // //             <motion.h1
// // //               variants={zoom}
// // //               className="text-[38px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.15] mb-6"
// // //             >
// // //               Leading Law Firm in Bangalore Offering Corporate, Civil, Criminal & Property Legal Services
// // //             </motion.h1>


// // //             <motion.p
// // //               variants={zoom}
// // //               className="text-gray-400 text-[17px] leading-relaxed mb-8"
// // //             >
// // //               S Jain Attorneys provides expert legal representation with integrity,
// // //               confidentiality and proven success across corporate, civil,
// // //               criminal and property law matters.
// // //             </motion.p>


// // //             {/* BUTTONS */}
// // //             <motion.div
// // //               variants={zoom}
// // //               className="flex flex-wrap gap-4 mb-10"
// // //             >

// // //               <Link href="/contact">
// // //                 <button className="bg-[#C9A24D] text-black px-7 py-3 font-semibold hover:scale-105 transition duration-300">
// // //                   Schedule Consultation
// // //                 </button>
// // //               </Link>

// // //               <Link href="/practice">
// // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-7 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300">
// // //                   View Practice Areas
// // //                 </button>
// // //               </Link>

// // //             </motion.div>


// // //             {/* STATS */}
// // //             <motion.div
// // //               variants={zoom}
// // //               className="flex gap-10 border-t border-gray-800 pt-6"
// // //             >

// // //               <div>
// // //                 <div className="text-[#C9A24D] text-2xl font-bold">15+</div>
// // //                 <div className="text-gray-400 text-sm">Years Experience</div>
// // //               </div>

// // //               <div>
// // //                 <div className="text-[#C9A24D] text-2xl font-bold">500+</div>
// // //                 <div className="text-gray-400 text-sm">Cases Handled</div>
// // //               </div>

// // //               <div>
// // //                 <div className="text-[#C9A24D] text-2xl font-bold">High Court</div>
// // //                 <div className="text-gray-400 text-sm">Karnataka & India</div>
// // //               </div>

// // //             </motion.div>

// // //           </motion.div>


// // //           {/* RIGHT IMAGE */}
// // //         <motion.div
// // //   variants={imageAnim}
// // //   initial="hidden"
// // //   animate="show"
// // //   className="flex justify-center lg:justify-end lg:mt-[40px]"
// // // >
// // //   <div className="relative">

// // //     {/* glow */}
// // //     <div className="absolute inset-0 bg-[#C9A24D]/10 blur-[80px] rounded-xl" />

// // //     <Image
// // //       src="/laws.jpg"
// // //       alt="Law Firm"
// // //       width={520}
// // //       height={360}
// // //       priority
// // //       className="relative rounded-xl shadow-xl object-cover"
// // //     />

// // //   </div>
// // // </motion.div>

// // //         </div>

// // //       </div>

// // //     </section>

// // //   );
// // // }

// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";

// // // export default function HeroSection() {

// // //   /* ANIMATION CONTAINER */
// // //   const container = {
// // //     hidden: {},
// // //     show: {
// // //       transition: {
// // //         staggerChildren: 0.18
// // //       }
// // //     }
// // //   };

// // //   /* TEXT ANIMATION */
// // //   const zoom = {
// // //     hidden: {
// // //       opacity: 0,
// // //       scale: 0.96,
// // //       y: 40
// // //     },
// // //     show: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.8,
// // //         ease: "easeOut"
// // //       }
// // //     }
// // //   };

// // //   /* IMAGE ANIMATION */
// // //   const imageAnim = {
// // //     hidden: {
// // //       opacity: 0,
// // //       scale: 0.94,
// // //       x: 60
// // //     },
// // //     show: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       x: 0,
// // //       transition: {
// // //         duration: 1
// // //       }
// // //     }
// // //   };

// // //   return (

// // //     <section className="relative bg-black text-white overflow-hidden pt-[140px] pb-[90px]">

// // //       {/* GOLD GLOW EFFECT */}
// // //       <div className="absolute right-[-200px] top-[120px] w-[500px] h-[500px] bg-[#C9A24D]/10 blur-[140px] rounded-full" />


// // //       {/* MAIN CONTAINER */}
// // //       <div className="relative max-w-[1200px] mx-auto px-6">


// // //         <div className="grid lg:grid-cols-2 gap-14 items-center lg:items-start">


// // //           {/* LEFT CONTENT */}
// // //           <motion.div
// // //             variants={container}
// // //             initial="hidden"
// // //             animate="show"
// // //             className="max-w-[580px]"
// // //           >


// // //             {/* TOP LABEL */}
// // //             <motion.p
// // //               variants={zoom}
// // //               className="text-[#C9A24D] tracking-[4px] text-sm mb-6"
// // //             >
// // //               TRUSTED LEGAL EXPERTS IN BANGALORE
// // //             </motion.p>


// // //             {/* SEO H1 HEADING */}
// // //             <motion.h1
// // //               variants={zoom}
// // //               className="text-[38px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.15] mb-6"
// // //             >
// // //               Trusted Law Firm in Bangalore for Corporate, Civil, Family & Property Legal Services
// // //             </motion.h1>


// // //             {/* CLIENT PROVIDED SUBTEXT */}
// // //             <motion.p
// // //               variants={zoom}
// // //               className="text-gray-400 text-[17px] leading-relaxed mb-6"
// // //             >
// // //               S Jain & Attorneys delivers strategic, result-oriented legal representation across corporate, civil, criminal and regulatory matters. Our firm advises individuals, startups, multinational companies, and NRIs with precision, confidentiality, and deep legal expertise.
// // //             </motion.p>


// // //             {/* CTA BUTTONS */}
// // //             <motion.div
// // //               variants={zoom}
// // //               className="flex flex-wrap gap-4 mb-4"
// // //             >

// // //               <Link href="/contact">
// // //                 <button className="bg-[#C9A24D] text-black px-7 py-3 font-semibold hover:scale-105 transition duration-300 shadow-lg">
// // //                   Book Confidential Consultation
// // //                 </button>
// // //               </Link>


// // //               <Link href="/contact">
// // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-7 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300">
// // //                   Request Callback
// // //                 </button>
// // //               </Link>


// // //             </motion.div>


// // //             {/* TRUST ASSURANCE LINE */}
// // //             <motion.p
// // //               variants={zoom}
// // //               className="text-gray-500 text-sm mb-10"
// // //             >
// // //               Same-day consultation available. Response within 24 hours guaranteed.
// // //             </motion.p>


// // //             {/* TRUST STATS */}
// // //             <motion.div
// // //               variants={zoom}
// // //               className="flex gap-10 border-t border-gray-800 pt-6"
// // //             >

// // //               <div>
// // //                 <div className="text-[#C9A24D] text-2xl font-bold">15+</div>
// // //                 <div className="text-gray-400 text-sm">Years Experience</div>
// // //               </div>

// // //               <div>
// // //                 <div className="text-[#C9A24D] text-2xl font-bold">500+</div>
// // //                 <div className="text-gray-400 text-sm">Cases Successfully Handled</div>
// // //               </div>

// // //               <div>
// // //                 <div className="text-[#C9A24D] text-2xl font-bold">Courts</div>
// // //                 <div className="text-gray-400 text-sm">Across Karnataka & India</div>
// // //               </div>

// // //             </motion.div>


// // //           </motion.div>



// // //           {/* RIGHT IMAGE */}
// // //           <motion.div
// // //             variants={imageAnim}
// // //             initial="hidden"
// // //             animate="show"
// // //             className="flex justify-center lg:justify-end lg:mt-[40px]"
// // //           >

// // //             <div className="relative">


// // //               {/* IMAGE GLOW */}
// // //               <div className="absolute inset-0 bg-[#C9A24D]/10 blur-[80px] rounded-xl" />


// // //               <Image
// // //                 src="/laws.jpg"
// // //                 alt="Law Firm in Bangalore - S Jain & Attorneys"
// // //                 width={520}
// // //                 height={360}
// // //                 priority
// // //                 className="relative rounded-xl shadow-xl object-cover"
// // //               />


// // //             </div>


// // //           </motion.div>


// // //         </div>


// // //       </div>


// // //     </section>

// // //   );

// // // }

// // // "use client";

// // // import Image from "next/image";
// // // import { motion } from "framer-motion";
// // // import Link from "next/link";
// // // import { Phone } from "lucide-react";

// // // export default function HeroSection() {

// // //   /* ANIMATION CONTAINER */
// // //   const container = {
// // //     hidden: {},
// // //     show: {
// // //       transition: {
// // //         staggerChildren: 0.18
// // //       }
// // //     }
// // //   };

// // //   /* TEXT ANIMATION */
// // //   const zoom = {
// // //     hidden: {
// // //       opacity: 0,
// // //       scale: 0.96,
// // //       y: 40
// // //     },
// // //     show: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       y: 0,
// // //       transition: {
// // //         duration: 0.8,
// // //         ease: "easeOut"
// // //       }
// // //     }
// // //   };

// // //   /* IMAGE ANIMATION */
// // //   const imageAnim = {
// // //     hidden: {
// // //       opacity: 0,
// // //       scale: 0.94,
// // //       x: 60
// // //     },
// // //     show: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       x: 0,
// // //       transition: {
// // //         duration: 1
// // //       }
// // //     }
// // //   };

// // //   return (

// // //     <section className="relative bg-black text-white overflow-hidden pt-[40px] pb-[40px]">

// // //       {/* GOLD GLOW EFFECT */}
// // //       <div className="absolute right-[-200px] top-[120px] w-[500px] h-[500px] bg-[#C9A24D]/10 blur-[140px] rounded-full" />


// // //       {/* MAIN CONTAINER */}
// // //       <div className="relative max-w-[1200px] mx-auto px-6">

// // //         <div className="grid lg:grid-cols-2 gap-14 items-center lg:items-start">

// // //           {/* LEFT CONTENT */}
// // //           <motion.div
// // //             variants={container}
// // //             initial="hidden"
// // //             animate="show"
// // //             className="max-w-[580px]"
// // //           >

// // //             {/* TOP LABEL */}
// // //             <motion.p
// // //               variants={zoom}
// // //               className="text-[#C9A24D] tracking-[4px] text-sm mb-6"
// // //             >
// // //               TRUSTED LEGAL EXPERTS IN BANGALORE
// // //             </motion.p>


// // //             {/* SEO H1 HEADING */}
// // //             <motion.h1
// // //               variants={zoom}
// // //               className="text-[38px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.15] mb-6"
// // //             >
// // //               Trusted Law Firm in Bangalore for Corporate, Civil, Family & Property Legal Services
// // //             </motion.h1>


// // //             {/* CLIENT PROVIDED SUBTEXT */}
// // //             <motion.p
// // //               variants={zoom}
// // //               className="text-gray-400 text-[17px] leading-relaxed mb-6"
// // //             >
// // //               S Jain & Attorneys provides full-service legal representation across litigation, advisory, and regulatory matters. Our firm advises individuals, startups, multinational companies, and NRIs with precision, confidentiality, and deep legal expertise.
// // //             </motion.p>


// // //             {/* CTA BUTTONS + CALL ICON */}
// // //             <motion.div
// // //               variants={zoom}
// // //               className="flex flex-wrap items-center gap-4 mb-4"
// // //             >

// // //               {/* Book Consultation */}
// // //               <Link href="/contact">
// // //                 <button className="bg-[#C9A24D] text-black px-7 py-3 font-semibold hover:scale-105 transition duration-300 shadow-lg">
// // //                   Book Confidential Consultation
// // //                 </button>
// // //               </Link>


// // //               {/* Request Callback */}
// // //               <Link href="/contact">
// // //                 <button className="border border-[#C9A24D] text-[#C9A24D] px-7 py-3 font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300">
// // //                   Request Callback
// // //                 </button>
// // //               </Link>


// // //               {/* Call Icon */}
// // //               <a
// // //                 href="tel:+919000000000"
// // //                 className="group flex items-center justify-center w-12 h-12 border border-gray-600 rounded-full hover:bg-[#C9A24D] hover:border-[#C9A24D] transition duration-300"
// // //                 aria-label="Call Now"
// // //               >
// // //                 <Phone
// // //                   size={20}
// // //                   className="text-white group-hover:text-black transition duration-300"
// // //                 />
// // //               </a>

// // //             </motion.div>


// // //             {/* RESPONSE ASSURANCE */}
// // //             <motion.p
// // //               variants={zoom}
// // //               className="text-gray-500 text-sm mb-10"
// // //             >
// // //               Same-day consultation available. Response within 24 hours guaranteed.
// // //             </motion.p>


// // //             {/* TRUST INDICATORS */}
// // //             <motion.div
// // //               variants={zoom}
// // //               className="flex gap-10 border-t border-gray-800 pt-6"
// // //             >

// // //               <div>
// // //                 <div className="text-[#C9A24D] text-2xl font-bold">15+</div>
// // //                 <div className="text-gray-400 text-sm">Years Experience</div>
// // //               </div>

// // //               <div>
// // //                 <div className="text-[#C9A24D] text-2xl font-bold">500+</div>
// // //                 <div className="text-gray-400 text-sm">
// // //                   Cases Successfully Handled
// // //                 </div>
// // //               </div>

// // //               <div>
// // //                 <div className="text-[#C9A24D] text-2xl font-bold">Courts</div>
// // //                 <div className="text-gray-400 text-sm">
// // //                   Across Karnataka & India
// // //                 </div>
// // //               </div>

// // //             </motion.div>

// // //           </motion.div>



// // //           {/* RIGHT IMAGE */}
// // //           <motion.div
// // //             variants={imageAnim}
// // //             initial="hidden"
// // //             animate="show"
// // //             className="flex justify-center lg:justify-end lg:mt-[40px]"
// // //           >

// // //             <div className="relative">

// // //               {/* IMAGE GLOW */}
// // //               <div className="absolute inset-0 bg-[#C9A24D]/10 blur-[80px] rounded-xl" />

// // //               <Image
// // //                 src="/laws.jpg"
// // //                 alt="Law Firm in Bangalore - S Jain & Attorneys"
// // //                 width={520}
// // //                 height={360}
// // //                 priority
// // //                 className="relative rounded-xl shadow-xl object-cover"
// // //               />

// // //             </div>

// // //           </motion.div>


// // //         </div>

// // //       </div>

// // //     </section>

// // //   );

// // // }

// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";

// // export default function Hero() {

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 40 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.8 }
// //     }
// //   };

// //   return (

// //     <section
// //       className="
// //       relative
// //       w-full
// //       min-h-screen
// //       flex
// //       items-center
// //       overflow-hidden

// //       bg-gradient-to-br
// //       from-black
// //       via-black
// //       to-[#C9A24D]/20

// //       pt-[140px]
// //       pb-[110px]
// //       "
// //     >

// //       {/* Golden glow */}
// //       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A24D]/10 blur-[140px] rounded-full"></div>


// //       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

// //         <div className="grid lg:grid-cols-2 gap-14 items-center">


// //           {/* LEFT CONTENT */}
// //           <motion.div
// //             initial="hidden"
// //             animate="visible"
// //             variants={fadeUp}
// //           >

// //             {/* Badge */}
// //             <div className="
// //               inline-flex
// //               items-center
// //               gap-2
// //               border border-[#C9A24D]/40
// //               text-[#C9A24D]
// //               px-4 py-2
// //               rounded-full
// //               text-sm
// //               mb-6
// //               bg-[#C9A24D]/5
// //             ">
// //               <ShieldCheck size={16} />
// //               Advocates & Legal Consultants
// //             </div>



// //             {/* Heading */}
// //             <h1 className="
// //               text-4xl
// //               sm:text-5xl
// //               lg:text-6xl
// //               font-bold
// //               text-white
// //               leading-tight
// //               mb-6
// //             ">

// //               Trusted Law Firm in{" "}
// //               <span className="text-[#C9A24D]">Bangalore</span>{" "}
// //               for Corporate, Civil, Criminal, Family & Property Legal Services

// //             </h1>



// //             {/* Subtext */}
// //             <p className="
// //               text-gray-300
// //               text-lg
// //               max-w-xl
// //               leading-relaxed
// //               mb-8
// //             ">
// //               S Jain & Attorneys delivers strategic, result-oriented legal representation across corporate, civil, criminal and regulatory matters. Our firm advises individuals, startups, multinational companies, and NRIs with precision, confidentiality, and deep legal expertise.
// //             </p>



// //             {/* BUTTONS - ONE LINE */}
// //             <div className="
// //               flex
// //               flex-nowrap
// //               items-center
// //               gap-4
// //               mb-8
// //             ">


// //               {/* Button 1 */}
// //               <Link href="/contact">

// //                 <button className="
// //                   whitespace-nowrap
// //                   bg-gradient-to-r
// //                   from-[#C9A24D]
// //                   to-[#E6C676]
// //                   text-black
// //                   px-7 py-3
// //                   font-semibold
// //                   rounded-md
// //                   hover:scale-105
// //                   hover:shadow-[0_0_25px_rgba(201,162,77,0.5)]
// //                   transition
// //                 ">
// //                   Book Confidential Consultation
// //                 </button>

// //               </Link>



// //               {/* Button 2 */}
// //               <Link href="/contact">

// //                 <button className="
// //                   whitespace-nowrap
// //                   border border-[#C9A24D]
// //                   text-[#C9A24D]
// //                   px-7 py-3
// //                   font-semibold
// //                   rounded-md
// //                   hover:bg-gradient-to-r
// //                   hover:from-[#C9A24D]
// //                   hover:to-[#E6C676]
// //                   hover:text-black
// //                   transition
// //                 ">
// //                   Request Callback
// //                 </button>

// //               </Link>



// //               {/* Call Icon */}
// //               <a
// //                 href="tel:+919000000000"
// //                 className="
// //                   flex-shrink-0
// //                   flex
// //                   items-center
// //                   justify-center
// //                   w-12 h-12
// //                   rounded-full
// //                   border border-[#C9A24D]
// //                   hover:bg-gradient-to-r
// //                   hover:from-[#C9A24D]
// //                   hover:to-[#E6C676]
// //                   transition
// //                 "
// //               >
// //                 <Phone size={20} className="text-white hover:text-black" />
// //               </a>


// //             </div>



// //             {/* TRUST INDICATORS */}
// //             <div className="flex flex-wrap gap-6 text-gray-400">

// //               <div className="flex items-center gap-2">
// //                 <Award size={18} className="text-[#C9A24D]" />
// //                 15+ Years Experience
// //               </div>

// //               <div className="flex items-center gap-2">
// //                 <Briefcase size={18} className="text-[#C9A24D]" />
// //                 1000+ Cases Handled
// //               </div>

// //               <div className="flex items-center gap-2">
// //                 <Scale size={18} className="text-[#C9A24D]" />
// //                 Karnataka High Court & District Courts
// //               </div>

// //             </div>


// //           </motion.div>



// //           {/* RIGHT IMAGE */}
// //           <motion.div
// //             initial={{ opacity: 0, x: 80 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 1 }}
// //             className="relative flex justify-center lg:justify-end lg:-mt-10"
// //           >

// //             <div className="relative w-full max-w-lg">

// //               {/* glow */}
// //               <div className="absolute -inset-1 bg-[#C9A24D]/20 blur-xl rounded-xl"></div>

// //               <Image
// //                 src="/closeupjustice.jpg"
// //                 alt="S Jain & Attorneys Law Firm Bangalore"
// //                 width={550}
// //                 height={650}
// //                 priority
// //                 className="
// //                   relative
// //                   rounded-xl
// //                   border border-[#C9A24D]/40
// //                   object-cover
// //                   w-full
// //                 "
// //               />

// //             </div>

// //           </motion.div>



// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";

// export default function Hero() {

//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8 }
//     }
//   };

//   return (

//     <section
//       className="
//       relative
//       w-full
//       min-h-screen
//       flex
//       items-start
//       overflow-hidden

//       bg-gradient-to-br
//       from-black
//       via-black
//       to-[#C9A24D]/20

//       pt-[140px]
//       pb-[110px]
//       "
//     >

//       {/* GOLD GLOW TOP RIGHT */}
//       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A24D]/10 blur-[140px] rounded-full"></div>


//       <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">

//         {/* IMPORTANT: items-start FIX */}
//         <div className="grid lg:grid-cols-2 gap-14 items-start">


//           {/* LEFT CONTENT */}
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeUp}
//           >

//             {/* BADGE */}
//             <div className="
//               inline-flex
//               items-center
//               gap-2
//               border border-[#C9A24D]/40
//               text-[#C9A24D]
//               px-4 py-2
//               rounded-full
//               text-sm
//               mb-6
//               bg-[#C9A24D]/5
//             ">
//               <ShieldCheck size={16} />
//               Advocates & Legal Consultants
//             </div>



//             {/* HEADING */}
//             <h1 className="
//               text-4xl
//               sm:text-5xl
//               lg:text-6xl
//               font-bold
//               text-white
//               leading-tight
//               mb-6
//             ">

//               Trusted Law Firm in{" "}
//               <span className="text-[#C9A24D]">Bangalore</span>{" "}
//               for Corporate, Civil, Criminal, Family & Property Legal Services

//             </h1>



//             {/* SUBTEXT */}
//             <p className="
//               text-gray-300
//               text-lg
//               max-w-xl
//               leading-relaxed
//               mb-8
//             ">
//               S Jain & Attorneys delivers strategic, result-oriented legal
//               representation across corporate, civil, criminal and regulatory
//               matters. We advise individuals, startups, multinational companies,
//               and NRIs with precision, confidentiality, and deep legal expertise.
//             </p>



//             {/* BUTTONS IN ONE LINE */}
//             <div className="flex flex-nowrap items-center gap-4 mb-8">


//               {/* BUTTON 1 */}
//               <Link href="/contact">

//                 <button className="
//                   whitespace-nowrap
//                   bg-gradient-to-r
//                   from-[#C9A24D]
//                   to-[#E6C676]
//                   text-black
//                   px-7 py-3
//                   font-semibold
//                   rounded-md
//                   hover:scale-105
//                   hover:shadow-[0_0_25px_rgba(201,162,77,0.5)]
//                   transition
//                 ">
//                   Book Confidential Consultation
//                 </button>

//               </Link>



//               {/* BUTTON 2 */}
//               <Link href="/contact">

//                 <button className="
//                   whitespace-nowrap
//                   border border-[#C9A24D]
//                   text-[#C9A24D]
//                   px-7 py-3
//                   font-semibold
//                   rounded-md
//                   hover:bg-gradient-to-r
//                   hover:from-[#C9A24D]
//                   hover:to-[#E6C676]
//                   hover:text-black
//                   transition
//                 ">
//                   Request Callback
//                 </button>

//               </Link>



//               {/* CALL ICON */}
//               <a
//                 href="tel:+919000000000"
//                 className="
//                   flex-shrink-0
//                   flex
//                   items-center
//                   justify-center
//                   w-12 h-12
//                   rounded-full
//                   border border-[#C9A24D]
//                   hover:bg-gradient-to-r
//                   hover:from-[#C9A24D]
//                   hover:to-[#E6C676]
//                   transition
//                 "
//               >
//                 <Phone size={20} className="text-white hover:text-black" />
//               </a>


//             </div>



//             {/* TRUST INDICATORS */}
//             <div className="flex flex-wrap gap-6 text-gray-400">

//               <div className="flex items-center gap-2">
//                 <Award size={18} className="text-[#C9A24D]" />
//                 15+ Years Experience
//               </div>

//               <div className="flex items-center gap-2">
//                 <Briefcase size={18} className="text-[#C9A24D]" />
//                 1000+ Cases Handled
//               </div>

//               <div className="flex items-center gap-2">
//                 <Scale size={18} className="text-[#C9A24D]" />
//                 Karnataka High Court & District Courts
//               </div>

//             </div>


//           </motion.div>



//           {/* RIGHT IMAGE (FIXED POSITION) */}
//           <motion.div
//             initial={{ opacity: 0, x: 80 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="relative flex justify-center lg:justify-end"
//           >

//             <div className="relative w-full max-w-lg">

//               {/* IMAGE GLOW */}
//               <div className="absolute -inset-2 bg-[#C9A24D]/20 blur-2xl rounded-xl"></div>

//               {/* IMAGE */}
//               <Image
//                 src="/closeupjustice.jpg"
//                 alt="Law Firm Bangalore"
//                 width={550}
//                 height={650}
//                 priority
//                 className="
//                   relative
//                   rounded-xl
//                   border border-[#C9A24D]/40
//                   object-cover
//                   w-full
//                 "
//               />

//             </div>

//           </motion.div>


//         </div>

//       </div>

//     </section>

//   );

// }
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck, Scale, Briefcase, Award } from "lucide-react";

export default function Hero() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (

    <section
      className="
      relative
      w-full
      min-h-screen
      flex
      items-start
      overflow-hidden

      bg-gradient-to-br
      from-black
      via-black
      to-[#C9A24D]/20

      pt-[140px]
      pb-[110px]
      "
    >

      {/* GOLD GLOW */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C9A24D]/10 blur-[140px] rounded-full"></div>


      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">


        <div className="grid lg:grid-cols-2 gap-14 items-start">


          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >

            {/* BADGE */}
            <div className="
              inline-flex
              items-center
              gap-2
              border border-[#C9A24D]/40
              text-[#C9A24D]
              px-4 py-2
              rounded-full
              text-sm
              mb-6
              bg-[#C9A24D]/5
            ">
              <ShieldCheck size={16} />
              Advocates & Legal Consultants
            </div>



            {/* SEO HEADING */}
            <h1 className="
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              text-white
              leading-tight
              mb-6
            ">
              Trusted Law Firm in{" "}
              <span className="text-[#C9A24D]">Bangalore</span>{" "}
              for Corporate, Civil, Criminal, Family & Property Legal Services
            </h1>



            {/* CLIENT SUBTEXT */}
            <p className="
              text-gray-300
              text-lg
              max-w-xl
              leading-relaxed
              mb-8
            ">
              S Jain & Attorneys delivers strategic, result-oriented legal representation across corporate, civil, criminal and regulatory matters. Our firm advises individuals, startups, multinational companies, and NRIs with precision, confidentiality, and deep legal expertise.
            </p>



            {/* BUTTONS ROW */}
            <div className="flex flex-nowrap items-center gap-4 mb-4">

              {/* Book Consultation */}
              <Link href="/contact">
                <button className="
                  whitespace-nowrap
                  bg-gradient-to-r
                  from-[#C9A24D]
                  to-[#E6C676]
                  text-black
                  px-7 py-3
                  font-semibold
                  rounded-md
                  hover:scale-105
                  hover:shadow-[0_0_25px_rgba(201,162,77,0.5)]
                  transition
                ">
                  Book Confidential Consultation
                </button>
              </Link>



              {/* Request Callback */}
              <Link href="/contact">
                <button className="
                  whitespace-nowrap
                  border border-[#C9A24D]
                  text-[#C9A24D]
                  px-7 py-3
                  font-semibold
                  rounded-md
                  hover:bg-gradient-to-r
                  hover:from-[#C9A24D]
                  hover:to-[#E6C676]
                  hover:text-black
                  transition
                ">
                  Request Callback
                </button>
              </Link>



              {/* Call Icon */}
              <a
                href="tel:+919000000000"
                className="
                  flex-shrink-0
                  flex
                  items-center
                  justify-center
                  w-12 h-12
                  rounded-full
                  border border-[#C9A24D]
                  hover:bg-gradient-to-r
                  hover:from-[#C9A24D]
                  hover:to-[#E6C676]
                  transition
                "
              >
                <Phone size={20} className="text-white hover:text-black" />
              </a>

            </div>



            {/* RESPONSE ASSURANCE — CLIENT REQUIRED */}
            <p className="text-gray-400 text-sm mb-8">
              Same-day consultation available. Response within 24 hours guaranteed.
            </p>



            {/* TRUST INDICATORS */}
            <div className="flex flex-wrap gap-8 text-gray-400 border-t border-gray-800 pt-6">

              <div className="flex items-center gap-2">
                <Award size={18} className="text-[#C9A24D]" />
                15+ Years Experience
              </div>

              <div className="flex items-center gap-2">
                <Briefcase size={18} className="text-[#C9A24D]" />
                1000+ Cases Successfully Handled
              </div>

              <div className="flex items-center gap-2">
                <Scale size={18} className="text-[#C9A24D]" />
                Karnataka High Court & District Courts
              </div>

            </div>


          </motion.div>



          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center lg:justify-end"
          >

            <div className="relative w-full max-w-lg">

              {/* IMAGE GLOW */}
              <div className="absolute -inset-2 bg-[#C9A24D]/20 blur-2xl rounded-xl"></div>

              {/* IMAGE */}
              <Image
                src="/closeupjustice.jpg"
                alt="Law Firm in Bangalore - S Jain & Attorneys"
                width={550}
                height={650}
                priority
                className="
                  relative
                  rounded-xl
                  border border-[#C9A24D]/40
                  object-cover
                  w-full
                "
              />

            </div>

          </motion.div>


        </div>

      </div>

    </section>

  );

}