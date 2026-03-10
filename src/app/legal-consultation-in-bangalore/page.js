// // // // // // // "use client";

// // // // // // // import { useState } from "react";
// // // // // // // import { motion } from "framer-motion";

// // // // // // // // ✅ IMPORT HEADER & FOOTER
// // // // // // // import Navbar from "../components/Navbar";
// // // // // // // import Footer from "../components/Footer";

// // // // // // // export default function Page() {

// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     name: "",
// // // // // // //     phone: "",
// // // // // // //     email: "",
// // // // // // //     practiceArea: "",
// // // // // // //     message: "",
// // // // // // //   });

// // // // // // //   const handleChange = (e) => {
// // // // // // //     setFormData({
// // // // // // //       ...formData,
// // // // // // //       [e.target.name]: e.target.value,
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const handleSubmit = (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     console.log(formData);
// // // // // // //   };


// // // // // // //   const practiceAreas = [
// // // // // // //     "Corporate & Commercial Law",
// // // // // // //     "Civil Litigation",
// // // // // // //     "Criminal Defense & Prosecution",
// // // // // // //     "Family & Divorce Law",
// // // // // // //     "Property & Real Estate Law",
// // // // // // //     "Legal Advisory & Compliance",
// // // // // // //     "NRI Legal Services",
// // // // // // //     "Consumer Protection Law",
// // // // // // //   ];


// // // // // // //   const fadeIn = {
// // // // // // //     hidden: { opacity: 0, y: 25 },
// // // // // // //     visible: {
// // // // // // //       opacity: 1,
// // // // // // //       y: 0,
// // // // // // //       transition: { duration: 0.6 }
// // // // // // //     },
// // // // // // //   };


// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* ✅ HEADER */}
// // // // // // //       <Navbar />


// // // // // // //       {/* ✅ MAIN CONTENT */}
// // // // // // //       {/* <section className="py-32 px-6 bg-[#e3dede]"> */}
// // // // // // //         <section className="py-32 px-6 bg-gradient-to-br from-[#0B1C2D] via-[#071521] to-black relative overflow-hidden">


// // // // // // //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

// // // // // // //           {/* LEFT — CONSULTATION FORM */}
// // // // // // //           <motion.div
// // // // // // //             variants={fadeIn}
// // // // // // //             initial="hidden"
// // // // // // //             whileInView="visible"
// // // // // // //             viewport={{ once: true }}
// // // // // // //             className="bg-[#0B1C2D] p-10 rounded-md shadow-md"
// // // // // // //           >

// // // // // // //             <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-8">
// // // // // // //               Request a Consultation
// // // // // // //             </h2>


// // // // // // //             <form onSubmit={handleSubmit} className="space-y-5">

// // // // // // //               <input
// // // // // // //                 type="text"
// // // // // // //                 name="name"
// // // // // // //                 placeholder="Full Name"
// // // // // // //                 value={formData.name}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 required
// // // // // // //                 className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // // //               />

// // // // // // //               <input
// // // // // // //                 type="tel"
// // // // // // //                 name="phone"
// // // // // // //                 placeholder="Phone Number"
// // // // // // //                 value={formData.phone}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 required
// // // // // // //                 className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // // //               />

// // // // // // //               <input
// // // // // // //                 type="email"
// // // // // // //                 name="email"
// // // // // // //                 placeholder="Email Address"
// // // // // // //                 value={formData.email}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 required
// // // // // // //                 className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // // //               />

// // // // // // //               <select
// // // // // // //                 name="practiceArea"
// // // // // // //                 value={formData.practiceArea}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 required
// // // // // // //                 className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // // //               >
// // // // // // //                 <option value="">Select Practice Area</option>

// // // // // // //                 {practiceAreas.map((area, index) => (
// // // // // // //                   <option key={index} value={area}>
// // // // // // //                     {area}
// // // // // // //                   </option>
// // // // // // //                 ))}

// // // // // // //               </select>


// // // // // // //               <textarea
// // // // // // //                 name="message"
// // // // // // //                 rows="4"
// // // // // // //                 placeholder="Your Message"
// // // // // // //                 value={formData.message}
// // // // // // //                 onChange={handleChange}
// // // // // // //                 required
// // // // // // //                 className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // // //               ></textarea>


// // // // // // //               <button
// // // // // // //                 type="submit"
// // // // // // //                 className="w-full bg-[#C9A24D] text-[#111111] font-semibold py-3 rounded-md hover:opacity-90 transition"
// // // // // // //               >
// // // // // // //                 Request Consultation
// // // // // // //               </button>

// // // // // // //             </form>

// // // // // // //           </motion.div>



// // // // // // //           {/* RIGHT — OFFICE DETAILS */}
// // // // // // //           <motion.div
// // // // // // //             variants={fadeIn}
// // // // // // //             initial="hidden"
// // // // // // //             whileInView="visible"
// // // // // // //             viewport={{ once: true }}
// // // // // // //           >

// // // // // // //             <h2 className="text-3xl font-serif font-semibold text-[#f3f3f4] mb-6">
// // // // // // //               Office Details
// // // // // // //             </h2>


// // // // // // //             <div className="space-y-3 text-white mb-8">

// // // // // // //               <p>
// // // // // // //                 <span className="font-semibold">Address:</span><br />
// // // // // // //                 S Jain Attorneys<br />
// // // // // // //                 Mumbai, Maharashtra, India
// // // // // // //               </p>

// // // // // // //               <p>
// // // // // // //                 <span className="font-semibold">Phone:</span><br />
// // // // // // //                 +91 98765 43210
// // // // // // //               </p>

// // // // // // //               <p>
// // // // // // //                 <span className="font-semibold">Email:</span><br />
// // // // // // //                 contact@sjainattorneys.com
// // // // // // //               </p>

// // // // // // //             </div>


// // // // // // //             <div className="w-full h-72 rounded-md overflow-hidden border border-gray-300">

// // // // // // //               <iframe
// // // // // // //                 src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
// // // // // // //                 width="100%"
// // // // // // //                 height="100%"
// // // // // // //                 style={{ border: 0 }}
// // // // // // //                 loading="lazy"
// // // // // // //               ></iframe>

// // // // // // //             </div>

// // // // // // //           </motion.div>

// // // // // // //         </div>

// // // // // // //       </section>


// // // // // // //       {/* ✅ FOOTER */}
// // // // // // //       <Footer />

// // // // // // //     </>
// // // // // // //   );

// // // // // // // }


// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import { motion } from "framer-motion";

// // // // // // import Navbar from "../components/Navbar";
// // // // // // import Footer from "../components/Footer";

// // // // // // export default function Page() {

// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: "",
// // // // // //     phone: "",
// // // // // //     email: "",
// // // // // //     practiceArea: "",
// // // // // //     message: "",
// // // // // //   });

// // // // // //   const handleChange = (e) => {
// // // // // //     setFormData({
// // // // // //       ...formData,
// // // // // //       [e.target.name]: e.target.value,
// // // // // //     });
// // // // // //   };

// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     console.log(formData);
// // // // // //   };

// // // // // //   const practiceAreas = [
// // // // // //     "Corporate & Commercial Law",
// // // // // //     "Civil Litigation",
// // // // // //     "Criminal Defense & Prosecution",
// // // // // //     "Family & Divorce Law",
// // // // // //     "Property & Real Estate Law",
// // // // // //     "Legal Advisory & Compliance",
// // // // // //     "NRI Legal Services",
// // // // // //     "Consumer Protection Law",
// // // // // //   ];

// // // // // //   const fadeIn = {
// // // // // //     hidden: { opacity: 0, y: 30 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       y: 0,
// // // // // //       transition: { duration: 0.7 }
// // // // // //     },
// // // // // //   };

// // // // // //   return (
// // // // // //     <>
// // // // // //       <Navbar />

// // // // // //       {/* MAIN SECTION */}
// // // // // //       <section className="py-32 px-6 bg-black relative overflow-hidden">

// // // // // //         {/* subtle gold glow */}
// // // // // //         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top,#C9A24D,transparent_60%)]" />

// // // // // //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 relative z-10">

// // // // // //           {/* LEFT FORM */}
// // // // // //           <motion.div
// // // // // //             variants={fadeIn}
// // // // // //             initial="hidden"
// // // // // //             whileInView="visible"
// // // // // //             viewport={{ once: true }}
// // // // // //             className="
// // // // // //               bg-[#0A0A0A]
// // // // // //               p-10
// // // // // //               rounded-md
// // // // // //               border border-[#C9A24D]/40
// // // // // //               shadow-[0_0_20px_rgba(201,162,77,0.15)]
// // // // // //             "
// // // // // //           >

// // // // // //             <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-8">
// // // // // //               Request a Consultation
// // // // // //             </h2>

// // // // // //             <form onSubmit={handleSubmit} className="space-y-5">

// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 name="name"
// // // // // //                 placeholder="Full Name"
// // // // // //                 value={formData.name}
// // // // // //                 onChange={handleChange}
// // // // // //                 required
// // // // // //                 className="
// // // // // //                   w-full px-4 py-3
// // // // // //                   bg-black
// // // // // //                   border border-gray-800
// // // // // //                   rounded-md
// // // // // //                   text-white
// // // // // //                   focus:outline-none
// // // // // //                   focus:border-[#C9A24D]
// // // // // //                   transition
// // // // // //                 "
// // // // // //               />

// // // // // //               <input
// // // // // //                 type="tel"
// // // // // //                 name="phone"
// // // // // //                 placeholder="Phone Number"
// // // // // //                 value={formData.phone}
// // // // // //                 onChange={handleChange}
// // // // // //                 required
// // // // // //                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // //               />

// // // // // //               <input
// // // // // //                 type="email"
// // // // // //                 name="email"
// // // // // //                 placeholder="Email Address"
// // // // // //                 value={formData.email}
// // // // // //                 onChange={handleChange}
// // // // // //                 required
// // // // // //                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // //               />

// // // // // //               <select
// // // // // //                 name="practiceArea"
// // // // // //                 value={formData.practiceArea}
// // // // // //                 onChange={handleChange}
// // // // // //                 required
// // // // // //                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // //               >
// // // // // //                 <option value="">Select Practice Area</option>

// // // // // //                 {practiceAreas.map((area, index) => (
// // // // // //                   <option key={index} value={area}>
// // // // // //                     {area}
// // // // // //                   </option>
// // // // // //                 ))}
// // // // // //               </select>

// // // // // //               <textarea
// // // // // //                 name="message"
// // // // // //                 rows="4"
// // // // // //                 placeholder="Your Message"
// // // // // //                 value={formData.message}
// // // // // //                 onChange={handleChange}
// // // // // //                 required
// // // // // //                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // //               ></textarea>

// // // // // //               <button
// // // // // //                 type="submit"
// // // // // //                 className="
// // // // // //                   w-full
// // // // // //                   bg-[#C9A24D]
// // // // // //                   text-black
// // // // // //                   font-semibold
// // // // // //                   py-3
// // // // // //                   rounded-md
// // // // // //                   hover:shadow-[0_0_15px_rgba(201,162,77,0.5)]
// // // // // //                   transition
// // // // // //                 "
// // // // // //               >
// // // // // //                 Request Consultation
// // // // // //               </button>

// // // // // //             </form>

// // // // // //           </motion.div>



// // // // // //           {/* RIGHT SIDE */}
// // // // // //           <motion.div
// // // // // //             variants={fadeIn}
// // // // // //             initial="hidden"
// // // // // //             whileInView="visible"
// // // // // //             viewport={{ once: true }}
// // // // // //           >

// // // // // //             <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-6">
// // // // // //               Office Details
// // // // // //             </h2>

// // // // // //             <div className="space-y-4 text-gray-300 mb-8">

// // // // // //               <p>
// // // // // //                 <span className="font-semibold text-white">Address:</span><br />
// // // // // //                 S Jain Attorneys<br />
// // // // // //                 Mumbai, Maharashtra, India
// // // // // //               </p>

// // // // // //               <p>
// // // // // //                 <span className="font-semibold text-white">Phone:</span><br />
// // // // // //                 +91 98765 43210
// // // // // //               </p>

// // // // // //               <p>
// // // // // //                 <span className="font-semibold text-white">Email:</span><br />
// // // // // //                 contact@sjainattorneys.com
// // // // // //               </p>

// // // // // //             </div>


// // // // // //             {/* MAP */}
// // // // // //             <div className="
// // // // // //               w-full h-72 rounded-md overflow-hidden
// // // // // //               border border-[#C9A24D]/40
// // // // // //               shadow-[0_0_20px_rgba(201,162,77,0.15)]
// // // // // //             ">

// // // // // //               <iframe
// // // // // //                 src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
// // // // // //                 width="100%"
// // // // // //                 height="100%"
// // // // // //                 style={{ border: 0 }}
// // // // // //                 loading="lazy"
// // // // // //               ></iframe>

// // // // // //             </div>

// // // // // //           </motion.div>

// // // // // //         </div>

// // // // // //       </section>

// // // // // //       <Footer />
// // // // // //     </>
// // // // // //   );
// // // // // // }


// // // // // // "use client";

// // // // // // import { useState } from "react";
// // // // // // import { motion } from "framer-motion";

// // // // // // import Navbar from "../components/Navbar";
// // // // // // import Footer from "../components/Footer";


// // // // // // /* ================= GLOBAL LAYOUT SYSTEM ================= */

// // // // // // const container =
// // // // // //   "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

// // // // // // const sectionPadding =
// // // // // //   "py-16 sm:py-20 md:py-24 lg:py-28";

// // // // // // const pageHeading =
// // // // // //   "text-3xl sm:text-4xl md:text-5xl font-semibold text-[#C9A24D] text-center";

// // // // // // const sectionHeading =
// // // // // //   "text-2xl sm:text-3xl md:text-4xl font-semibold text-[#C9A24D]";



// // // // // // export default function Page() {

// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: "",
// // // // // //     phone: "",
// // // // // //     email: "",
// // // // // //     practiceArea: "",
// // // // // //     message: "",
// // // // // //   });


// // // // // //   const handleChange = (e) => {
// // // // // //     setFormData({
// // // // // //       ...formData,
// // // // // //       [e.target.name]: e.target.value,
// // // // // //     });
// // // // // //   };


// // // // // //   const handleSubmit = (e) => {
// // // // // //     e.preventDefault();
// // // // // //     console.log(formData);
// // // // // //   };


// // // // // //   const practiceAreas = [
// // // // // //     "Corporate & Commercial Law",
// // // // // //     "Civil Litigation",
// // // // // //     "Criminal Defense & Prosecution",
// // // // // //     "Family & Divorce Law",
// // // // // //     "Property & Real Estate Law",
// // // // // //     "Legal Advisory & Compliance",
// // // // // //     "NRI Legal Services",
// // // // // //     "Consumer Protection Law",
// // // // // //   ];


// // // // // //   const fadeIn = {
// // // // // //     hidden: { opacity: 0, y: 30 },
// // // // // //     visible: {
// // // // // //       opacity: 1,
// // // // // //       y: 0,
// // // // // //       transition: { duration: 0.7 }
// // // // // //     },
// // // // // //   };


// // // // // //   return (
// // // // // //     <>
// // // // // //       <Navbar />



// // // // // //       {/* ================= MAIN SECTION ================= */}

// // // // // //       <section className={`bg-black relative overflow-hidden ${sectionPadding}`}>

// // // // // //         {/* GOLD GLOW */}
// // // // // //         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top,#C9A24D,transparent_60%)]" />



// // // // // //         <div className={`${container} relative z-10`}>

// // // // // //           {/* PAGE HEADING */}

// // // // // //           <motion.h1
// // // // // //             variants={fadeIn}
// // // // // //             initial="hidden"
// // // // // //             animate="visible"
// // // // // //             className={`${pageHeading} mb-16`}
// // // // // //           >
// // // // // //             Contact Us
// // // // // //           </motion.h1>



// // // // // //           {/* GRID */}

// // // // // //           <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">



// // // // // //             {/* LEFT FORM */}

// // // // // //             <motion.div
// // // // // //               variants={fadeIn}
// // // // // //               initial="hidden"
// // // // // //               whileInView="visible"
// // // // // //               viewport={{ once: true }}
// // // // // //               className="
// // // // // //                 bg-[#0A0A0A]
// // // // // //                 p-8 sm:p-10
// // // // // //                 rounded-md
// // // // // //                 border border-[#C9A24D]/40
// // // // // //                 shadow-[0_0_20px_rgba(201,162,77,0.15)]
// // // // // //               "
// // // // // //             >

// // // // // //               <h2 className={`${sectionHeading} mb-8`}>
// // // // // //                 Request a Consultation
// // // // // //               </h2>


// // // // // //               <form onSubmit={handleSubmit} className="space-y-5">


// // // // // //                 <input
// // // // // //                   type="text"
// // // // // //                   name="name"
// // // // // //                   placeholder="Full Name"
// // // // // //                   value={formData.name}
// // // // // //                   onChange={handleChange}
// // // // // //                   required
// // // // // //                   className="
// // // // // //                     w-full px-4 py-3
// // // // // //                     bg-black
// // // // // //                     border border-gray-800
// // // // // //                     rounded-md
// // // // // //                     text-white
// // // // // //                     focus:outline-none
// // // // // //                     focus:border-[#C9A24D]
// // // // // //                   "
// // // // // //                 />


// // // // // //                 <input
// // // // // //                   type="tel"
// // // // // //                   name="phone"
// // // // // //                   placeholder="Phone Number"
// // // // // //                   value={formData.phone}
// // // // // //                   onChange={handleChange}
// // // // // //                   required
// // // // // //                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // //                 />


// // // // // //                 <input
// // // // // //                   type="email"
// // // // // //                   name="email"
// // // // // //                   placeholder="Email Address"
// // // // // //                   value={formData.email}
// // // // // //                   onChange={handleChange}
// // // // // //                   required
// // // // // //                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // //                 />


// // // // // //                 <select
// // // // // //                   name="practiceArea"
// // // // // //                   value={formData.practiceArea}
// // // // // //                   onChange={handleChange}
// // // // // //                   required
// // // // // //                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // //                 >

// // // // // //                   <option value="">Select Practice Area</option>

// // // // // //                   {practiceAreas.map((area, index) => (
// // // // // //                     <option key={index} value={area}>
// // // // // //                       {area}
// // // // // //                     </option>
// // // // // //                   ))}

// // // // // //                 </select>


// // // // // //                 <textarea
// // // // // //                   name="message"
// // // // // //                   rows="4"
// // // // // //                   placeholder="Your Message"
// // // // // //                   value={formData.message}
// // // // // //                   onChange={handleChange}
// // // // // //                   required
// // // // // //                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // // //                 ></textarea>


// // // // // //                 <button
// // // // // //                   type="submit"
// // // // // //                   className="
// // // // // //                     w-full
// // // // // //                     bg-[#C9A24D]
// // // // // //                     text-black
// // // // // //                     font-semibold
// // // // // //                     py-3
// // // // // //                     rounded-md
// // // // // //                     hover:shadow-[0_0_15px_rgba(201,162,77,0.5)]
// // // // // //                     transition
// // // // // //                   "
// // // // // //                 >
// // // // // //                   Request Consultation
// // // // // //                 </button>


// // // // // //               </form>

// // // // // //             </motion.div>




// // // // // //             {/* RIGHT SIDE */}

// // // // // //             <motion.div
// // // // // //               variants={fadeIn}
// // // // // //               initial="hidden"
// // // // // //               whileInView="visible"
// // // // // //               viewport={{ once: true }}
// // // // // //             >

// // // // // //               <h2 className={`${sectionHeading} mb-6`}>
// // // // // //                 Office Details
// // // // // //               </h2>


// // // // // //               <div className="space-y-4 text-gray-300 mb-8">

// // // // // //                 <p>
// // // // // //                   <span className="font-semibold text-white">Address:</span><br />
// // // // // //                   S Jain Attorneys<br />
// // // // // //                   Mumbai, Maharashtra, India
// // // // // //                 </p>

// // // // // //                 <p>
// // // // // //                   <span className="font-semibold text-white">Phone:</span><br />
// // // // // //                   +91 98765 43210
// // // // // //                 </p>

// // // // // //                 <p>
// // // // // //                   <span className="font-semibold text-white">Email:</span><br />
// // // // // //                   contact@sjainattorneys.com
// // // // // //                 </p>

// // // // // //               </div>



// // // // // //               {/* MAP */}

// // // // // //               <div className="
// // // // // //                 w-full h-72 rounded-md overflow-hidden
// // // // // //                 border border-[#C9A24D]/40
// // // // // //                 shadow-[0_0_20px_rgba(201,162,77,0.15)]
// // // // // //               ">

// // // // // //                 <iframe
// // // // // //                   src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
// // // // // //                   width="100%"
// // // // // //                   height="100%"
// // // // // //                   style={{ border: 0 }}
// // // // // //                   loading="lazy"
// // // // // //                 ></iframe>

// // // // // //               </div>

// // // // // //             </motion.div>



// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </section>



// // // // // //       <Footer />

// // // // // //     </>
// // // // // //   );
// // // // // // }


// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import { motion } from "framer-motion";

// // // // // import Navbar from "../components/Navbar";
// // // // // import Footer from "../components/Footer";


// // // // // /* ================= GLOBAL LAYOUT SYSTEM ================= */

// // // // // const container =
// // // // //   "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

// // // // // const sectionPadding =
// // // // //   "py-16 sm:py-20 md:py-24 lg:py-28";

// // // // // const pageHeading =
// // // // //   "text-3xl sm:text-4xl md:text-5xl font-semibold text-[#C9A24D] text-center";

// // // // // const sectionHeading =
// // // // //   "text-2xl sm:text-3xl md:text-4xl font-semibold text-[#C9A24D]";



// // // // // export default function Page() {

// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     phone: "",
// // // // //     email: "",
// // // // //     practiceArea: "",
// // // // //     message: "",
// // // // //   });


// // // // //   const handleChange = (e) => {
// // // // //     setFormData({
// // // // //       ...formData,
// // // // //       [e.target.name]: e.target.value,
// // // // //     });
// // // // //   };


// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     console.log(formData);
// // // // //   };


// // // // //   const practiceAreas = [
// // // // //     "Corporate & Commercial Law",
// // // // //     "Civil Litigation",
// // // // //     "Criminal Defense & Prosecution",
// // // // //     "Family & Divorce Law",
// // // // //     "Property & Real Estate Law",
// // // // //     "Legal Advisory & Compliance",
// // // // //     "NRI Legal Services",
// // // // //     "Consumer Protection Law",
// // // // //   ];


// // // // //   const fadeIn = {
// // // // //     hidden: { opacity: 0, y: 30 },
// // // // //     visible: {
// // // // //       opacity: 1,
// // // // //       y: 0,
// // // // //       transition: { duration: 0.7 }
// // // // //     },
// // // // //   };


// // // // //   return (
// // // // //     <>
// // // // //       <Navbar />


// // // // //       {/* ================= MAIN SECTION ================= */}

// // // // //       <section className={`bg-black relative overflow-hidden ${sectionPadding}`}>

// // // // //         {/* GOLD GLOW */}
// // // // //         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top,#C9A24D,transparent_60%)]" />


// // // // //         <div className={`${container} relative z-10`}>

// // // // //           {/* PAGE HEADING */}

// // // // //           <motion.h1
// // // // //             variants={fadeIn}
// // // // //             initial="hidden"
// // // // //             animate="visible"
// // // // //             className={`${pageHeading} mb-16`}
// // // // //           >
// // // // //             Contact Us
// // // // //           </motion.h1>



// // // // //           {/* GRID */}

// // // // //           <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">



// // // // //             {/* LEFT FORM */}

// // // // //             <motion.div
// // // // //               variants={fadeIn}
// // // // //               initial="hidden"
// // // // //               whileInView="visible"
// // // // //               viewport={{ once: true }}
// // // // //               className="
// // // // //                 bg-[#0A0A0A]
// // // // //                 p-8 sm:p-10
// // // // //                 rounded-md
// // // // //                 border border-[#C9A24D]/40
// // // // //                 shadow-[0_0_20px_rgba(201,162,77,0.15)]
// // // // //               "
// // // // //             >

// // // // //               <h2 className={`${sectionHeading} mb-8`}>
// // // // //                 Request a Consultation
// // // // //               </h2>


// // // // //               <form onSubmit={handleSubmit} className="space-y-5">


// // // // //                 <input
// // // // //                   type="text"
// // // // //                   name="name"
// // // // //                   placeholder="Full Name"
// // // // //                   value={formData.name}
// // // // //                   onChange={handleChange}
// // // // //                   required
// // // // //                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // //                 />


// // // // //                 <input
// // // // //                   type="tel"
// // // // //                   name="phone"
// // // // //                   placeholder="Phone Number"
// // // // //                   value={formData.phone}
// // // // //                   onChange={handleChange}
// // // // //                   required
// // // // //                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // //                 />


// // // // //                 <input
// // // // //                   type="email"
// // // // //                   name="email"
// // // // //                   placeholder="Email Address"
// // // // //                   value={formData.email}
// // // // //                   onChange={handleChange}
// // // // //                   required
// // // // //                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // //                 />


// // // // //                 <select
// // // // //                   name="practiceArea"
// // // // //                   value={formData.practiceArea}
// // // // //                   onChange={handleChange}
// // // // //                   required
// // // // //                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // //                 >

// // // // //                   <option value="">Select Practice Area</option>

// // // // //                   {practiceAreas.map((area, index) => (
// // // // //                     <option key={index} value={area}>
// // // // //                       {area}
// // // // //                     </option>
// // // // //                   ))}

// // // // //                 </select>


// // // // //                 <textarea
// // // // //                   name="message"
// // // // //                   rows="4"
// // // // //                   placeholder="Your Message"
// // // // //                   value={formData.message}
// // // // //                   onChange={handleChange}
// // // // //                   required
// // // // //                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // // //                 ></textarea>


// // // // //                 <button
// // // // //                   type="submit"
// // // // //                   className="
// // // // //                     w-full
// // // // //                     bg-[#C9A24D]
// // // // //                     text-black
// // // // //                     font-semibold
// // // // //                     py-3
// // // // //                     rounded-md
// // // // //                     hover:shadow-[0_0_15px_rgba(201,162,77,0.5)]
// // // // //                     transition
// // // // //                   "
// // // // //                 >
// // // // //                   Request Consultation
// // // // //                 </button>


// // // // //               </form>

// // // // //             </motion.div>




// // // // //             {/* RIGHT SIDE */}

// // // // //             <motion.div
// // // // //               variants={fadeIn}
// // // // //               initial="hidden"
// // // // //               whileInView="visible"
// // // // //               viewport={{ once: true }}
// // // // //             >

// // // // //               <h2 className={`${sectionHeading} mb-6`}>
// // // // //                 Office Details
// // // // //               </h2>


// // // // //               <div className="space-y-6 text-gray-300 text-lg">

// // // // //                 <p>
// // // // //                   <span className="font-semibold text-white">Office Name:</span><br />
// // // // //                   S Jain Attorneys
// // // // //                 </p>

// // // // //                 <p>
// // // // //                   <span className="font-semibold text-white">Address:</span><br />
// // // // //                   #42, 2nd Floor,<br />
// // // // //                   MG Road,<br />
// // // // //                   Bengaluru, Karnataka 560001,<br />
// // // // //                   India
// // // // //                 </p>

// // // // //                 <p>
// // // // //                   <span className="font-semibold text-white">Phone:</span><br />
// // // // //                   +91 98765 43210
// // // // //                 </p>

// // // // //                 <p>
// // // // //                   <span className="font-semibold text-white">Email:</span><br />
// // // // //                   contact@sjainattorneys.com
// // // // //                 </p>

// // // // //                 <p>
// // // // //                   <span className="font-semibold text-white">Working Hours:</span><br />
// // // // //                   Monday – Saturday<br />
// // // // //                   9:30 AM – 7:00 PM
// // // // //                 </p>

// // // // //               </div>


// // // // //             </motion.div>



// // // // //           </div>

// // // // //         </div>

// // // // //       </section>



// // // // //       <Footer />

// // // // //     </>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import Navbar from "../components/Navbar";
// // // // import Footer from "../components/Footer";
// // // // import { motion } from "framer-motion";

// // // // export default function ContactPage() {
// // // //   /* ================= ANIMATION ================= */

// // // //   const fadeUp = {
// // // //     hidden: { opacity: 0, y: 40 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: {
// // // //         duration: 0.7,
// // // //         ease: "easeOut",
// // // //       },
// // // //     },
// // // //   };

// // // //   return (
// // // //     <>
// // // //       {/* ================= NAVBAR ================= */}
// // // //       <Navbar />

// // // //       {/* ================= HERO / CONTACT SECTION ================= */}
// // // //       <section className="relative w-full py-20 lg:py-28 px-4 bg-black text-white overflow-hidden">

// // // //         <div className="max-w-6xl mx-auto">

// // // //           {/* ================= HEADING ================= */}
// // // //           <motion.h1
// // // //             variants={fadeUp}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             className="text-3xl md:text-5xl font-bold text-center mb-6"
// // // //           >
// // // //             Legal Consultation in Bangalore 
// // // //           </motion.h1>

// // // //           {/* ================= SUBTEXT ================= */}
// // // //           <motion.p
// // // //             variants={fadeUp}
// // // //             initial="hidden"
// // // //             animate="visible"
// // // //             transition={{ delay: 0.2 }}
// // // //             className="text-gray-300 text-center max-w-2xl mx-auto mb-14"
// // // //           >
// // // //             Speak with the experienced legal team at S Jain & Attorneys for
// // // //             clear, strategic, and confidential legal consultation in Bangalore.
// // // //             <br />
// // // //             <span className="text-[#C9A24D] font-semibold">
// // // //               Response within 24 hours guaranteed.
// // // //             </span>
// // // //           </motion.p>

// // // //           {/* ================= CONTACT GRID ================= */}
// // // //           <div className="grid lg:grid-cols-2 gap-12">

// // // //             {/* ================= CONTACT INFO ================= */}
// // // //             <motion.div
// // // //               variants={fadeUp}
// // // //               initial="hidden"
// // // //               animate="visible"
// // // //               transition={{ delay: 0.3 }}
// // // //               className="space-y-6"
// // // //             >

// // // //               <div>
// // // //                 <h3 className="text-xl font-semibold mb-2 text-[#C9A24D]">
// // // //                   Office Address
// // // //                 </h3>
// // // //                 <p className="text-gray-300">
// // // //                   S Jain & Attorneys<br />
// // // //                   Bangalore, Karnataka, India
// // // //                 </p>
// // // //               </div>

// // // //               <div>
// // // //                 <h3 className="text-xl font-semibold mb-2 text-[#C9A24D]">
// // // //                   Phone
// // // //                 </h3>
// // // //                 <p className="text-gray-300">
// // // //                   +91 XXXXX XXXXX
// // // //                 </p>
// // // //               </div>

// // // //               <div>
// // // //                 <h3 className="text-xl font-semibold mb-2 text-[#C9A24D]">
// // // //                   Email
// // // //                 </h3>
// // // //                 <p className="text-gray-300">
// // // //                   contact@sjainattorneys.com
// // // //                 </p>
// // // //               </div>

// // // //               <div>
// // // //                 <h3 className="text-xl font-semibold mb-2 text-[#C9A24D]">
// // // //                   Working Hours
// // // //                 </h3>
// // // //                 <p className="text-gray-300">
// // // //                   Monday – Saturday<br />
// // // //                   9:30 AM – 6:30 PM
// // // //                 </p>
// // // //               </div>

// // // //             </motion.div>

// // // //             {/* ================= CONTACT FORM ================= */}
// // // //             <motion.form
// // // //               variants={fadeUp}
// // // //               initial="hidden"
// // // //               animate="visible"
// // // //               transition={{ delay: 0.4 }}
// // // //               className="space-y-5"
// // // //             >

// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Full Name"
// // // //                 className="w-full p-3 bg-[#111] border border-gray-700 rounded-lg focus:outline-none focus:border-[#C9A24D]"
// // // //               />

// // // //               <input
// // // //                 type="email"
// // // //                 placeholder="Email Address"
// // // //                 className="w-full p-3 bg-[#111] border border-gray-700 rounded-lg focus:outline-none focus:border-[#C9A24D]"
// // // //               />

// // // //               <input
// // // //                 type="tel"
// // // //                 placeholder="Phone Number"
// // // //                 className="w-full p-3 bg-[#111] border border-gray-700 rounded-lg focus:outline-none focus:border-[#C9A24D]"
// // // //               />

// // // //               <textarea
// // // //                 rows="5"
// // // //                 placeholder="Your Legal Requirement"
// // // //                 className="w-full p-3 bg-[#111] border border-gray-700 rounded-lg focus:outline-none focus:border-[#C9A24D]"
// // // //               ></textarea>

// // // //               <button
// // // //                 type="submit"
// // // //                 className="w-full bg-[#C9A24D] text-black font-semibold py-3 rounded-lg hover:bg-[#b8913f] transition"
// // // //               >
// // // //                 Book Consultation
// // // //               </button>

// // // //             </motion.form>

// // // //           </div>

// // // //         </div>

// // // //       </section>

// // // //       {/* ================= FOOTER ================= */}
// // // //       <Footer />
// // // //     </>
// // // //   );
// // // // }



// // // "use client";

// // // import { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";

// // // export default function Page() {

// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     service: "",
// // //     message: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log(formData);
// // //   };

// // //   const services = [
// // //     "Corporate Law",
// // //     "Civil Litigation",
// // //     "Criminal Law",
// // //     "Family & Divorce Law",
// // //     "Property Law",
// // //     "NRI Legal Services",
// // //     "Employment & Labour Law",
// // //     "Other",
// // //   ];

// // //   const fadeUp = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { duration: 0.6 }
// // //     },
// // //   };

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       <section className="min-h-screen bg-black flex items-center justify-center px-6 py-20 relative overflow-hidden">

// // //         {/* background glow */}
// // //         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,#C9A24D,transparent_70%)]"></div>

// // //         <motion.div
// // //           variants={fadeUp}
// // //           initial="hidden"
// // //           animate="visible"
// // //           className="w-full max-w-2xl relative z-10"
// // //         >

// // //           {/* Heading */}
// // //           <h1 className="text-3xl md:text-4xl font-semibold text-[#C9A24D] text-center mb-4">
// // //             Legal Consultation in Bangalore | Speak to a Lawyer
// // //           </h1>

// // //           {/* Intro */}
// // //           <p className="text-gray-300 text-center mb-10 leading-relaxed">
// // //             Speak with the experienced legal team at S Jain & Attorneys for clear,
// // //             strategic, and confidential legal consultation in Bangalore.
// // //             We provide structured legal guidance tailored to your specific matter.
// // //             <br />
// // //             <span className="text-[#C9A24D] font-semibold">
// // //               Response within 24 hours guaranteed.
// // //             </span>
// // //           </p>

// // //           {/* Premium Card */}
// // //           <div className="bg-[#0A0A0A] border border-[#C9A24D]/30 rounded-lg p-8 md:p-10 shadow-[0_0_40px_rgba(201,162,77,0.15)]">

// // //             <h2 className="text-xl font-semibold text-white mb-6 text-center">
// // //               Book Confidential Consultation
// // //             </h2>

// // //             <form onSubmit={handleSubmit} className="space-y-5">

// // //               {/* Name */}
// // //               <input
// // //                 type="text"
// // //                 name="name"
// // //                 placeholder="Full Name"
// // //                 required
// // //                 onChange={handleChange}
// // //                 className="w-full bg-black border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// // //               />

// // //               {/* Email */}
// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Email Address"
// // //                 required
// // //                 onChange={handleChange}
// // //                 className="w-full bg-black border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// // //               />

// // //               {/* Phone */}
// // //               <input
// // //                 type="tel"
// // //                 name="phone"
// // //                 placeholder="Phone Number"
// // //                 required
// // //                 onChange={handleChange}
// // //                 className="w-full bg-black border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// // //               />

// // //               {/* Service */}
// // //               <select
// // //                 name="service"
// // //                 required
// // //                 onChange={handleChange}
// // //                 className="w-full bg-black border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// // //               >
// // //                 <option value="">Service Required</option>

// // //                 {services.map((service, index) => (
// // //                   <option key={index} value={service}>
// // //                     {service}
// // //                   </option>
// // //                 ))}

// // //               </select>

// // //               {/* Message */}
// // //               <textarea
// // //                 name="message"
// // //                 rows="4"
// // //                 placeholder="Your Message"
// // //                 required
// // //                 onChange={handleChange}
// // //                 className="w-full bg-black border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// // //               ></textarea>

// // //               {/* Buttons */}
// // //               <div className="flex flex-col md:flex-row gap-4 pt-2">

// // //                 <button
// // //                   type="submit"
// // //                   className="flex-1 bg-[#C9A24D] text-black font-semibold py-3 rounded-md hover:shadow-[0_0_20px_rgba(201,162,77,0.5)] transition"
// // //                 >
// // //                   Book Confidential Consultation
// // //                 </button>

// // //                 <a
// // //                   href="tel:+919876543210"
// // //                   className="flex-1 border border-[#C9A24D] text-[#C9A24D] text-center py-3 rounded-md hover:bg-[#C9A24D] hover:text-black transition"
// // //                 >
// // //                   Call Now
// // //                 </a>

// // //               </div>

// // //             </form>

// // //           </div>

// // //           {/* Contact Info */}
// // //           <div className="text-center mt-10 text-gray-400 text-sm space-y-2">

// // //             <p>
// // //               <span className="text-white font-medium">Office:</span>
// // //               {" "}S Jain & Attorneys, Bangalore
// // //             </p>

// // //             <p>
// // //               <span className="text-white font-medium">Phone:</span>
// // //               {" "}+91 XXXXX XXXXX
// // //             </p>

// // //             <p>
// // //               <span className="text-white font-medium">Email:</span>
// // //               {" "}info@yourlawfirm.com
// // //             </p>

// // //             <p>
// // //               <span className="text-white font-medium">Hours:</span>
// // //               {" "}Mon – Sat | 9:30 AM – 6:30 PM
// // //             </p>

// // //           </div>

// // //         </motion.div>

// // //       </section>

// // //       <Footer />
// // //     </>
// // //   );
// // // }


// // // "use client";

// // // import { useState } from "react";
// // // import { motion } from "framer-motion";
// // // import Navbar from "../components/Navbar";
// // // import Footer from "../components/Footer";

// // // export default function Page() {

// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     phone: "",
// // //     service: "",
// // //     message: "",
// // //   });

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     console.log(formData);
// // //   };

// // //   const services = [
// // //     "Corporate",
// // //     "Civil",
// // //     "Criminal",
// // //     "Family",
// // //     "Property",
// // //     "NRI",
// // //     "Employment",
// // //     "Other",
// // //   ];

// // //   return (
// // //     <>
// // //       <Navbar />

// // //       {/* ================= HERO SECTION ================= */}
// // //       <section className="bg-black text-white pt-24 pb-14 px-4 relative overflow-hidden">

// // //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#C9A24D,transparent_70%)]"></div>

// // //         <div className="max-w-6xl mx-auto relative z-10 text-center">

// // //           <h1 className="text-3xl md:text-5xl font-semibold text-[#C9A24D] mb-6">
// // //             Legal Consultation in Bangalore | Speak to a Lawyer
// // //           </h1>

// // //           <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg mb-6">
// // //             Speak with the experienced legal team at <strong>S Jain & Attorneys</strong> 
// // //             for clear, strategic, and confidential legal consultation in Bangalore. 
// // //             We provide structured legal guidance tailored to your specific matter 
// // //             with precision and professionalism.
// // //           </p>

// // //           <p className="text-[#C9A24D] font-semibold mb-8">
// // //             Response within 24 hours guaranteed.
// // //           </p>

// // //           {/* CTA Buttons */}
// // //           <div className="flex flex-col sm:flex-row justify-center gap-4">

// // //             <a
// // //               href="#consultation-form"
// // //               className="bg-[#C9A24D] text-black px-8 py-3 rounded-md font-semibold hover:shadow-[0_0_20px_rgba(201,162,77,0.5)] transition"
// // //             >
// // //               Book Confidential Consultation
// // //             </a>

// // //             <a
// // //               href="tel:+91XXXXXXXXXX"
// // //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 rounded-md font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// // //             >
// // //               Request Call Back
// // //             </a>

// // //           </div>

// // //         </div>
// // //       </section>

// // //       {/* ================= CONTACT + FORM SECTION ================= */}
// // //       <section
// // //         id="consultation-form"
// // //         className="bg-[#0A0A0A] text-white py-20 px-6"
// // //       >
// // //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

// // //           {/* LEFT SIDE - CONTACT DETAILS */}
// // //           <div>
// // //             <h2 className="text-2xl font-semibold text-[#C9A24D] mb-6">
// // //               Contact Details
// // //             </h2>

// // //             <div className="space-y-6 text-gray-300">

// // //               <div>
// // //                 <p className="font-semibold text-white">Office Address</p>
// // //                 <p>[Your Office Address], Bangalore</p>
// // //               </div>

// // //               <div>
// // //                 <p className="font-semibold text-white">Phone</p>
// // //                 <p>+91 XXXXX XXXXX</p>
// // //               </div>

// // //               <div>
// // //                 <p className="font-semibold text-white">Email</p>
// // //                 <p>info@yourlawfirm.com</p>
// // //               </div>

// // //               <div>
// // //                 <p className="font-semibold text-white">Working Hours</p>
// // //                 <p>Monday – Saturday | 9:30 AM – 6:30 PM</p>
// // //               </div>

// // //             </div>
// // //           </div>

// // //           {/* RIGHT SIDE - FORM */}
// // //           <div className="bg-black border border-[#C9A24D]/30 rounded-lg p-8 shadow-[0_0_40px_rgba(201,162,77,0.15)]">

// // //             <form onSubmit={handleSubmit} className="space-y-5">

// // //               <input
// // //                 type="text"
// // //                 name="name"
// // //                 placeholder="Full Name"
// // //                 required
// // //                 onChange={handleChange}
// // //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none"
// // //               />

// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Email Address"
// // //                 required
// // //                 onChange={handleChange}
// // //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none"
// // //               />

// // //               <input
// // //                 type="tel"
// // //                 name="phone"
// // //                 placeholder="Phone Number"
// // //                 required
// // //                 onChange={handleChange}
// // //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none"
// // //               />

// // //               <select
// // //                 name="service"
// // //                 required
// // //                 onChange={handleChange}
// // //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none"
// // //               >
// // //                 <option value="">Service Required</option>
// // //                 {services.map((service, index) => (
// // //                   <option key={index} value={service}>
// // //                     {service}
// // //                   </option>
// // //                 ))}
// // //               </select>

// // //               <textarea
// // //                 name="message"
// // //                 rows="4"
// // //                 placeholder="Message"
// // //                 required
// // //                 onChange={handleChange}
// // //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none"
// // //               />

// // //               <div className="flex flex-col sm:flex-row gap-4 pt-2">

// // //                 <button
// // //                   type="submit"
// // //                   className="flex-1 bg-[#C9A24D] text-black font-semibold py-3 rounded-md hover:shadow-[0_0_20px_rgba(201,162,77,0.5)] transition"
// // //                 >
// // //                   Book Confidential Consultation
// // //                 </button>

// // //                 <a
// // //                   href="tel:+91XXXXXXXXXX"
// // //                   className="flex-1 border border-[#C9A24D] text-[#C9A24D] text-center py-3 rounded-md hover:bg-[#C9A24D] hover:text-black transition"
// // //                 >
// // //                   Call Now
// // //                 </a>

// // //               </div>

// // //             </form>

// // //           </div>

// // //         </div>
// // //       </section>

// // //       <Footer />
// // //     </>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // export default function Page() {

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //   };

// //   const services = [
// //     "Corporate",
// //     "Civil",
// //     "Criminal",
// //     "Family",
// //     "Property",
// //     "NRI",
// //     "Employment",
// //     "Other",
// //   ];

// //   return (
// //     <>
// //       <Navbar />

// //       {/* ================= HERO SECTION ================= */}
// //       <section className="bg-black text-white relative overflow-hidden pt-40 md:pt-48 pb-24 px-6">

// //         {/* Gold Glow Background */}
// //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#C9A24D,transparent_70%)]"></div>

// //         <div className="max-w-6xl mx-auto relative z-10 text-center">

// //           <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#C9A24D] leading-tight mb-6">
// //             Legal Consultation in Bangalore <br className="hidden md:block" />
            
// //           </h1>

// //           <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg mb-6">
// //             Speak with the experienced legal team at{" "}
// //             <strong>S Jain & Attorneys</strong> for clear, strategic, and
// //             confidential legal consultation in Bangalore. We provide structured
// //             legal guidance tailored to your specific matter with precision and
// //             professionalism.
// //           </p>

// //           <p className="text-[#C9A24D] font-semibold mb-8">
// //             Response within 24 hours guaranteed.
// //           </p>

// //           {/* CTA Buttons */}
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">

// //             <a
// //               href="#consultation-form"
// //               className="bg-[#C9A24D] text-black px-8 py-3 rounded-md font-semibold hover:shadow-[0_0_20px_rgba(201,162,77,0.5)] transition"
// //             >
// //               Book Confidential Consultation
// //             </a>

// //             <a
// //               href="tel:+91XXXXXXXXXX"
// //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 rounded-md font-semibold hover:bg-[#C9A24D] hover:text-black transition"
// //             >
// //               Request Call Back
// //             </a>

// //           </div>

// //         </div>
// //       </section>

// //       {/* ================= CONTACT + FORM SECTION ================= */}
// //       <section
// //         id="consultation-form"
// //         className="bg-[#0A0A0A] text-white py-24 px-6"
// //       >
// //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

// //           {/* LEFT SIDE - CONTACT DETAILS */}
// //           <div>

// //             <h2 className="text-2xl md:text-3xl font-semibold text-[#C9A24D] mb-8">
// //               Contact Details
// //             </h2>

// //             <div className="space-y-8 text-gray-300">

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Office Address</p>
// //                 <p>[Your Office Address], Bangalore</p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Phone</p>
// //                 <p>+91 XXXXX XXXXX</p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Email</p>
// //                 <p>info@yourlawfirm.com</p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Working Hours</p>
// //                 <p>Monday – Saturday | 9:30 AM – 6:30 PM</p>
// //               </div>

// //             </div>

// //           </div>

// //           {/* RIGHT SIDE - FORM */}
// //           <div className="bg-black border border-[#C9A24D]/30 rounded-lg p-8 md:p-10 shadow-[0_0_40px_rgba(201,162,77,0.15)]">

// //             <h3 className="text-xl font-semibold text-white mb-6 text-center">
// //               Book Confidential Consultation
// //             </h3>

// //             <form onSubmit={handleSubmit} className="space-y-5">

// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Phone Number"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <select
// //                 name="service"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               >
// //                 <option value="">Service Required</option>
// //                 {services.map((service, index) => (
// //                   <option key={index} value={service}>
// //                     {service}
// //                   </option>
// //                 ))}
// //               </select>

// //               <textarea
// //                 name="message"
// //                 rows="4"
// //                 placeholder="Message"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <div className="flex flex-col sm:flex-row gap-4 pt-4">

// //                 <button
// //                   type="submit"
// //                   className="flex-1 bg-[#C9A24D] text-black font-semibold py-3 rounded-md hover:shadow-[0_0_20px_rgba(201,162,77,0.5)] transition"
// //                 >
// //                   Book Confidential Consultation
// //                 </button>

// //                 <a
// //                   href="tel:+91XXXXXXXXXX"
// //                   className="flex-1 border border-[#C9A24D] text-[#C9A24D] text-center py-3 rounded-md hover:bg-[#C9A24D] hover:text-black transition"
// //                 >
// //                   Call Now
// //                 </a>

// //               </div>

// //             </form>

// //           </div>

// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }

// // "use client";

// // import { useState } from "react";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // export default function Page() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //   };

// //   const services = [
// //     "Corporate",
// //     "Civil",
// //     "Criminal",
// //     "Family",
// //     "Property",
// //     "NRI",
// //     "Employment",
// //     "Other",
// //   ];

// //   return (
// //     <>
// //       <Navbar />

// //       {/* ================= HERO SECTION ================= */}
// //       <section className="bg-black text-white relative overflow-hidden pt-32 md:pt-24 pb-24 px-6">

// //         {/* Gold Glow Background */}
// //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#C9A24D,transparent_70%)]"></div>

// //         <div className="max-w-6xl mx-auto relative z-10 text-center">

// //           <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#C9A24D] leading-tight mb-6">
// //             Legal Consultation in Bangalore
// //           </h1>

// //           <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg mb-6">
// //             Speak with the experienced legal team at{" "}
// //             <strong>S Jain & Attorneys</strong> for clear, strategic, and
// //             confidential legal consultation in Bangalore. We provide structured
// //             legal guidance tailored to your specific matter with precision and
// //             professionalism.
// //           </p>

// //           <p className="text-[#C9A24D] font-semibold mb-8">
// //             Response within 24 hours guaranteed.
// //           </p>

// //           {/* CTA Buttons */}
// //           <div className="flex flex-col sm:flex-row justify-center gap-4">

// //             <a
// //               href="#consultation-form"
// //               className="bg-[#C9A24D] text-black px-8 py-3 rounded-md font-semibold hover:shadow-[0_0_25px_rgba(201,162,77,0.5)] transition duration-300"
// //             >
// //               Book Confidential Consultation
// //             </a>

// //             <a
// //               href="tel:+91XXXXXXXXXX"
// //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 rounded-md font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300 shadow-[0_0_15px_rgba(201,162,77,0.15)] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)]"
// //             >
// //               📞 Call Now
// //             </a>

// //           </div>
// //         </div>
// //       </section>

// //       {/* ================= CONTACT + FORM SECTION ================= */}
// //       <section
// //         id="consultation-form"
// //         className="bg-[#0A0A0A] text-white py-24 px-6"
// //       >
// //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

// //           {/* LEFT SIDE - CONTACT DETAILS */}
// //           <div>
// //             <h2 className="text-2xl md:text-3xl font-semibold text-[#C9A24D] mb-8">
// //               Contact Details
// //             </h2>

// //             <div className="space-y-8 text-gray-300">

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Office Address</p>
// //                 <p>[Your Office Address], Bangalore</p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Phone</p>
// //                 <p>+91 XXXXX XXXXX</p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Email</p>
// //                 <p>info@yourlawfirm.com</p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Working Hours</p>
// //                 <p>Monday – Saturday | 9:30 AM – 6:30 PM</p>
// //               </div>

// //             </div>
// //           </div>

// //           {/* RIGHT SIDE - FORM */}
// //           <div className="bg-black border border-[#C9A24D]/30 rounded-xl p-8 md:p-10 shadow-[0_0_40px_rgba(201,162,77,0.15)]">

// //             <h3 className="text-xl font-semibold text-white mb-6 text-center">
// //               Book Confidential Consultation
// //             </h3>

// //             <form onSubmit={handleSubmit} className="space-y-5">

// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Phone Number"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <select
// //                 name="service"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               >
// //                 <option value="">Service Required</option>
// //                 {services.map((service, index) => (
// //                   <option key={index} value={service}>
// //                     {service}
// //                   </option>
// //                 ))}
// //               </select>

// //               <textarea
// //                 name="message"
// //                 rows="4"
// //                 placeholder="Message"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <div className="flex flex-col sm:flex-row gap-4 pt-4">

// //                 <button
// //                   type="submit"
// //                   className="flex-1 bg-[#C9A24D] text-black font-semibold py-3 rounded-md hover:shadow-[0_0_25px_rgba(201,162,77,0.5)] transition duration-300"
// //                 >
// //                   Book Consultation
// //                 </button>

// //                 <a
// //                   href="tel:+91XXXXXXXXXX"
// //                   className="flex-1 bg-[#111] border border-[#C9A24D] text-[#C9A24D] font-semibold py-3 rounded-md text-center hover:bg-[#C9A24D] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(201,162,77,0.15)] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)]"
// //                 >
// //                   📞 Call Now
// //                 </a>

// //               </div>

// //             </form>
// //           </div>
// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }



// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // export default function Page() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value,
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //   };

// //   const services = [
// //     "Corporate",
// //     "Civil",
// //     "Criminal",
// //     "Family",
// //     "Property",
// //     "NRI",
// //     "Employment",
// //     "Other",
// //   ];

// //   /* ================= ANIMATION VARIANTS ================= */

// //   const containerVariant = {
// //     hidden: {},
// //     visible: {
// //       transition: {
// //         staggerChildren: 0.2,
// //       },
// //     },
// //   };

// //   const fadeUp = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.8, ease: "easeOut" },
// //     },
// //   };

// //   const fadeLeft = {
// //     hidden: { opacity: 0, x: -60 },
// //     visible: {
// //       opacity: 1,
// //       x: 0,
// //       transition: { duration: 0.8, ease: "easeOut" },
// //     },
// //   };

// //   const fadeRight = {
// //     hidden: { opacity: 0, x: 60 },
// //     visible: {
// //       opacity: 1,
// //       x: 0,
// //       transition: { duration: 0.8, ease: "easeOut" },
// //     },
// //   };

// //   return (
// //     <>
// //       <Navbar />

// //       {/* ================= HERO SECTION ================= */}
// //       <section className="bg-black text-white relative overflow-hidden pt-32 md:pt-24 pb-24 px-6">

// //         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#C9A24D,transparent_70%)]"></div>

// //         <motion.div
// //           variants={containerVariant}
// //           initial="hidden"
// //           animate="visible"
// //           className="max-w-6xl mx-auto relative z-10 text-center"
// //         >
// //           <motion.h1
// //             variants={fadeUp}
// //             className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#C9A24D] leading-tight mb-6"
// //           >
// //             Legal Consultation in Bangalore
// //           </motion.h1>

// //           <motion.p
// //             variants={fadeUp}
// //             className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg mb-6"
// //           >
// //             Speak with the experienced legal team at{" "}
// //             <strong>S Jain & Attorneys</strong> for clear, strategic, and
// //             confidential legal consultation in Bangalore. We provide structured
// //             legal guidance tailored to your specific matter with precision and
// //             professionalism.
// //           </motion.p>

// //           <motion.p
// //             variants={fadeUp}
// //             className="text-[#C9A24D] font-semibold mb-8"
// //           >
// //             Response within 24 hours guaranteed.
// //           </motion.p>

// //           <motion.div
// //             variants={fadeUp}
// //             className="flex flex-col sm:flex-row justify-center gap-4"
// //           >
// //             <a
// //               href="#consultation-form"
// //               className="bg-[#C9A24D] text-black px-8 py-3 rounded-md font-semibold hover:shadow-[0_0_25px_rgba(201,162,77,0.5)] transition duration-300"
// //             >
// //               Book Confidential Consultation
// //             </a>

// //             <a
// //               href="tel:+91XXXXXXXXXX"
// //               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 rounded-md font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300 shadow-[0_0_15px_rgba(201,162,77,0.15)] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)]"
// //             >
// //               📞 Call Now
// //             </a>
// //           </motion.div>
// //         </motion.div>
// //       </section>

// //       {/* ================= CONTACT + FORM SECTION ================= */}
// //       <section
// //         id="consultation-form"
// //         className="bg-[#0A0A0A] text-white py-24 px-6"
// //       >
// //         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

// //           {/* LEFT SIDE */}
// //           <motion.div
// //             variants={fadeLeft}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.3 }}
// //           >
// //             <h2 className="text-2xl md:text-3xl font-semibold text-[#C9A24D] mb-8">
// //               Contact Details
// //             </h2>

// //             <div className="space-y-8 text-gray-300">
// //               <div>
// //                 <p className="font-semibold text-white mb-1">Office Address</p>
// //                 <p>[Your Office Address], Bangalore</p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Phone</p>
// //                 <p>+91 XXXXX XXXXX</p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Email</p>
// //                 <p>info@yourlawfirm.com</p>
// //               </div>

// //               <div>
// //                 <p className="font-semibold text-white mb-1">Working Hours</p>
// //                 <p>Monday – Saturday | 9:30 AM – 6:30 PM</p>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* RIGHT SIDE - FORM */}
// //           <motion.div
// //             variants={fadeRight}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.3 }}
// //             className="bg-black border border-[#C9A24D]/30 rounded-xl p-8 md:p-10 shadow-[0_0_40px_rgba(201,162,77,0.15)]"
// //           >
// //             <h3 className="text-xl font-semibold text-white mb-6 text-center">
// //               Book Confidential Consultation
// //             </h3>

// //             <form onSubmit={handleSubmit} className="space-y-5">

// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Phone Number"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <select
// //                 name="service"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               >
// //                 <option value="">Service Required</option>
// //                 {services.map((service, index) => (
// //                   <option key={index} value={service}>
// //                     {service}
// //                   </option>
// //                 ))}
// //               </select>

// //               <textarea
// //                 name="message"
// //                 rows="4"
// //                 placeholder="Message"
// //                 required
// //                 onChange={handleChange}
// //                 className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white focus:border-[#C9A24D] outline-none transition"
// //               />

// //               <div className="flex flex-col sm:flex-row gap-4 pt-4">
// //                 <button
// //                   type="submit"
// //                   className="flex-1 bg-[#C9A24D] text-black font-semibold py-3 rounded-md hover:shadow-[0_0_25px_rgba(201,162,77,0.5)] transition duration-300"
// //                 >
// //                   Book Consultation
// //                 </button>

// //                 <a
// //                   href="tel:+91XXXXXXXXXX"
// //                   className="flex-1 bg-[#111] border border-[#C9A24D] text-[#C9A24D] font-semibold py-3 rounded-md text-center hover:bg-[#C9A24D] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(201,162,77,0.15)] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)]"
// //                 >
// //                   📞 Request Call Back
// //                 </a>
// //               </div>
// //             </form>
// //           </motion.div>

// //         </div>
// //       </section>

// //       <Footer />
// //     </>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// export default function Page() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     legalConcern: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   /* ================= ANIMATION VARIANTS ================= */

//   const containerVariant = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const fadeUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const fadeLeft = {
//     hidden: { opacity: 0, x: -60 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   const fadeRight = {
//     hidden: { opacity: 0, x: 60 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: "easeOut" },
//     },
//   };

//   return (
//     <>
//       <Navbar />

//       {/* ================= HERO SECTION ================= */}
//       <section className="bg-black text-white relative overflow-hidden pt-32 md:pt-24 pb-24 px-6">

//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#C9A24D,transparent_70%)]"></div>

//         <motion.div
//           variants={containerVariant}
//           initial="hidden"
//           animate="visible"
//           className="max-w-6xl mx-auto relative z-10 text-center"
//         >
//           <motion.h1
//             variants={fadeUp}
//             className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#C9A24D] leading-tight mb-6"
//           >
//             Legal Consultation in Bangalore
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg mb-6"
//           >
//             Speak with the experienced legal team at{" "}
//             <strong>S Jain & Attorneys</strong> for clear, strategic, and
//             confidential legal consultation in Bangalore. We provide structured
//             legal guidance tailored to your specific matter with precision and
//             professionalism.
//           </motion.p>

//           <motion.p
//             variants={fadeUp}
//             className="text-[#C9A24D] font-semibold mb-8"
//           >
//             Response within 24 hours guaranteed.
//           </motion.p>

//           <motion.div
//             variants={fadeUp}
//             className="flex flex-col sm:flex-row justify-center gap-4"
//           >
//             <a
//               href="#consultation-form"
//               className="bg-[#C9A24D] text-black px-8 py-3 rounded-md font-semibold hover:shadow-[0_0_25px_rgba(201,162,77,0.5)] transition duration-300"
//             >
//               Book Confidential Consultation
//             </a>

//             <a
//               href="tel:+91XXXXXXXXXX"
//               className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 rounded-md font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300 shadow-[0_0_15px_rgba(201,162,77,0.15)] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)]"
//             >
//               📞 Call Now
//             </a>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ================= CONTACT + FORM SECTION ================= */}
//       <section
//         id="consultation-form"
//         className="bg-[#0A0A0A] text-white py-24 px-6"
//       >
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

//           {/* LEFT SIDE */}
//           <motion.div
//             variants={fadeLeft}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-semibold text-[#C9A24D] mb-8">
//               Contact Details
//             </h2>

//             <div className="space-y-8 text-gray-300">
//               <div>
//                 <p className="font-semibold text-white mb-1">Office Address</p>
//                 <p>[Your Office Address], Bangalore</p>
//               </div>

//               <div>
//                 <p className="font-semibold text-white mb-1">Phone</p>
//                 <p>+91 XXXXX XXXXX</p>
//               </div>

//               <div>
//                 <p className="font-semibold text-white mb-1">Email</p>
//                 <p>info@yourlawfirm.com</p>
//               </div>

//               <div>
//                 <p className="font-semibold text-white mb-1">Working Hours</p>
//                 <p>Monday – Saturday | 9:30 AM – 6:30 PM</p>
//               </div>
//             </div>
//           </motion.div>

//           {/* RIGHT SIDE - FORM */}
//           <motion.div
//             variants={fadeRight}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             className="bg-black border border-[#C9A24D]/30 rounded-xl p-8 md:p-10 shadow-[0_0_40px_rgba(201,162,77,0.15)]"
//           >
//             <h3 className="text-xl font-semibold text-white mb-6 text-center">
//               Book Confidential Consultation
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-5">

//               {/* Name */}
//               <div>
//                 <label className="block text-sm text-gray-400 mb-1">
//                   Name <span className="text-[#C9A24D]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   required
//                   onChange={handleChange}
//                   className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white placeholder-gray-600 focus:border-[#C9A24D] outline-none transition"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-sm text-gray-400 mb-1">
//                   Email <span className="text-[#C9A24D]">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   required
//                   onChange={handleChange}
//                   className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white placeholder-gray-600 focus:border-[#C9A24D] outline-none transition"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="block text-sm text-gray-400 mb-1">
//                   Phone Number <span className="text-[#C9A24D]">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   required
//                   onChange={handleChange}
//                   className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white placeholder-gray-600 focus:border-[#C9A24D] outline-none transition"
//                 />
//               </div>

//               {/* City */}
//               <div>
//                 <label className="block text-sm text-gray-400 mb-1">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="Your City"
//                   onChange={handleChange}
//                   className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white placeholder-gray-600 focus:border-[#C9A24D] outline-none transition"
//                 />
//               </div>

//               {/* Legal Concern */}
//               <div>
//                 <label className="block text-sm text-gray-400 mb-1">
//                   Legal Concern <span className="text-[#C9A24D]">*</span>
//                 </label>
//                 <textarea
//                   name="legalConcern"
//                   rows={4}
//                   placeholder="Briefly describe your legal concern..."
//                   required
//                   onChange={handleChange}
//                   className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white placeholder-gray-600 focus:border-[#C9A24D] outline-none transition resize-none"
//                 />
//               </div>

//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <button
//                   type="submit"
//                   className="flex-1 bg-[#C9A24D] text-black font-semibold py-3 rounded-md hover:shadow-[0_0_25px_rgba(201,162,77,0.5)] transition duration-300"
//                 >
//                   Book Consultation
//                 </button>

//                 <a
//                   href="tel:+91XXXXXXXXXX"
//                   className="flex-1 bg-[#111] border border-[#C9A24D] text-[#C9A24D] font-semibold py-3 rounded-md text-center hover:bg-[#C9A24D] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(201,162,77,0.15)] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)]"
//                 >
//                   📞 Request Call Back
//                 </a>
//               </div>

//             </form>
//           </motion.div>

//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    legalConcern: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send formData to your backend / email service here
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", city: "", legalConcern: "" });
    setSubmitted(false);
  };

  /* ================= ANIMATION VARIANTS ================= */

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.85, transition: { duration: 0.3 } },
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-black text-white relative overflow-hidden pt-12 md:pt-8 pb-24 px-6">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,#C9A24D,transparent_70%)]" />

        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto relative z-10 text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#C9A24D] leading-tight mb-6"
          >
            Legal Consultation in Bangalore
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-lg mb-6"
          >
            Speak with the experienced legal team at{" "}
            <strong>S Jain & Attorneys</strong> for clear, strategic, and
            confidential legal consultation in Bangalore. We provide structured
            legal guidance tailored to your specific matter with precision and
            professionalism.
          </motion.p>

          <motion.p variants={fadeUp} className="text-[#C9A24D] font-semibold mb-8">
            Response within 24 hours guaranteed.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#consultation-form"
              className="bg-[#C9A24D] text-black px-8 py-3 rounded-md font-semibold hover:shadow-[0_0_25px_rgba(201,162,77,0.5)] transition duration-300"
            >
              Book Confidential Consultation
            </a>
            <a
              href="tel:+91XXXXXXXXXX"
              className="border border-[#C9A24D] text-[#C9A24D] px-8 py-3 rounded-md font-semibold hover:bg-[#C9A24D] hover:text-black transition duration-300 shadow-[0_0_15px_rgba(201,162,77,0.15)] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)]"
            >
              📞 Call Now
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CONTACT + FORM SECTION ================= */}
      <section id="consultation-form" className="bg-[#0A0A0A] text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#C9A24D] mb-8">
              Contact Details
            </h2>
            <div className="space-y-8 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-1">Office Address</p>
                <p>[Your Office Address], Bangalore</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Phone</p>
                <p>+91 XXXXX XXXXX</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <p>info@yourlawfirm.com</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Working Hours</p>
                <p>Monday – Saturday | 9:30 AM – 6:30 PM</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM / SUCCESS */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="bg-black border border-[#C9A24D]/30 rounded-xl p-8 md:p-10 shadow-[0_0_40px_rgba(201,162,77,0.15)]"
          >
            <AnimatePresence mode="wait">

              {/* ── SUCCESS STATE ── */}
              {submitted ? (
                <motion.div
                  key="success"
                  variants={popIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col items-center justify-center text-center py-6 gap-5"
                >
                  {/* Animated checkmark */}
                  <div className="w-20 h-20 rounded-full border-2 border-[#C9A24D] flex items-center justify-center shadow-[0_0_30px_rgba(201,162,77,0.3)]">
                    <svg
                      className="w-10 h-10 text-[#C9A24D]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#C9A24D] mb-2">
                      Request Submitted!
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Thank you, <strong className="text-white">{formData.name}</strong>. We've received your consultation request and will contact you within{" "}
                      <strong className="text-[#C9A24D]">24 hours</strong>.
                    </p>
                  </div>

                  {/* Submitted details summary */}
                  <div className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg p-5 text-left space-y-3 text-sm">
                    <p>
                      <span className="text-gray-500">Name: </span>
                      <span className="text-white">{formData.name}</span>
                    </p>
                    <p>
                      <span className="text-gray-500">Email: </span>
                      <span className="text-white">{formData.email}</span>
                    </p>
                    <p>
                      <span className="text-gray-500">Phone: </span>
                      <span className="text-white">{formData.phone}</span>
                    </p>
                    {formData.city && (
                      <p>
                        <span className="text-gray-500">City: </span>
                        <span className="text-white">{formData.city}</span>
                      </p>
                    )}
                    <p>
                      <span className="text-gray-500">Legal Concern: </span>
                      <span className="text-white">{formData.legalConcern}</span>
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="text-sm text-[#C9A24D] underline underline-offset-4 hover:text-white transition"
                  >
                    Submit another request
                  </button>
                </motion.div>

              ) : (

                /* ── FORM STATE ── */
                <motion.div
                  key="form"
                  variants={popIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <h3 className="text-xl font-semibold text-white mb-6 text-center">
                    Book Confidential Consultation
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name */}
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">
                        Name <span className="text-[#C9A24D]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white placeholder-gray-600 focus:border-[#C9A24D] outline-none transition"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">
                        Email <span className="text-[#C9A24D]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white placeholder-gray-600 focus:border-[#C9A24D] outline-none transition"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">
                        Phone Number <span className="text-[#C9A24D]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white placeholder-gray-600 focus:border-[#C9A24D] outline-none transition"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Your City"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white placeholder-gray-600 focus:border-[#C9A24D] outline-none transition"
                      />
                    </div>

                    {/* Legal Concern */}
                    <div>
                      <label className="block text-sm text-gray-400 mb-1">
                        Legal Concern <span className="text-[#C9A24D]">*</span>
                      </label>
                      <textarea
                        name="legalConcern"
                        rows={4}
                        placeholder="Briefly describe your legal concern..."
                        required
                        value={formData.legalConcern}
                        onChange={handleChange}
                        className="w-full bg-[#0A0A0A] border border-gray-800 px-4 py-3 rounded-md text-white placeholder-gray-600 focus:border-[#C9A24D] outline-none transition resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        type="submit"
                        className="flex-1 bg-[#C9A24D] text-black font-semibold py-3 rounded-md hover:shadow-[0_0_25px_rgba(201,162,77,0.5)] transition duration-300"
                      >
                        Book Consultation
                      </button>
                      <a
                        href="tel:+91XXXXXXXXXX"
                        className="flex-1 bg-[#111] border border-[#C9A24D] text-[#C9A24D] font-semibold py-3 rounded-md text-center hover:bg-[#C9A24D] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(201,162,77,0.15)] hover:shadow-[0_0_30px_rgba(201,162,77,0.4)]"
                      >
                        📞 Request Call Back
                      </a>
                    </div>

                  </form>
                </motion.div>
              )}

            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <Footer />
    </>
  );
}