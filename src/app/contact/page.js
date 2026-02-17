// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // // ✅ IMPORT HEADER & FOOTER
// // import Navbar from "../components/Navbar";
// // import Footer from "../components/Footer";

// // export default function Page() {

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     phone: "",
// //     email: "",
// //     practiceArea: "",
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


// //   const practiceAreas = [
// //     "Corporate & Commercial Law",
// //     "Civil Litigation",
// //     "Criminal Defense & Prosecution",
// //     "Family & Divorce Law",
// //     "Property & Real Estate Law",
// //     "Legal Advisory & Compliance",
// //     "NRI Legal Services",
// //     "Consumer Protection Law",
// //   ];


// //   const fadeIn = {
// //     hidden: { opacity: 0, y: 25 },
// //     visible: {
// //       opacity: 1,
// //       y: 0,
// //       transition: { duration: 0.6 }
// //     },
// //   };


// //   return (
// //     <>
// //       {/* ✅ HEADER */}
// //       <Navbar />


// //       {/* ✅ MAIN CONTENT */}
// //       {/* <section className="py-32 px-6 bg-[#e3dede]"> */}
// //         <section className="py-32 px-6 bg-gradient-to-br from-[#0B1C2D] via-[#071521] to-black relative overflow-hidden">


// //         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

// //           {/* LEFT — CONSULTATION FORM */}
// //           <motion.div
// //             variants={fadeIn}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="bg-[#0B1C2D] p-10 rounded-md shadow-md"
// //           >

// //             <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-8">
// //               Request a Consultation
// //             </h2>


// //             <form onSubmit={handleSubmit} className="space-y-5">

// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// //               />

// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Phone Number"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// //               />

// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// //               />

// //               <select
// //                 name="practiceArea"
// //                 value={formData.practiceArea}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// //               >
// //                 <option value="">Select Practice Area</option>

// //                 {practiceAreas.map((area, index) => (
// //                   <option key={index} value={area}>
// //                     {area}
// //                   </option>
// //                 ))}

// //               </select>


// //               <textarea
// //                 name="message"
// //                 rows="4"
// //                 placeholder="Your Message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// //               ></textarea>


// //               <button
// //                 type="submit"
// //                 className="w-full bg-[#C9A24D] text-[#111111] font-semibold py-3 rounded-md hover:opacity-90 transition"
// //               >
// //                 Request Consultation
// //               </button>

// //             </form>

// //           </motion.div>



// //           {/* RIGHT — OFFICE DETAILS */}
// //           <motion.div
// //             variants={fadeIn}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //           >

// //             <h2 className="text-3xl font-serif font-semibold text-[#f3f3f4] mb-6">
// //               Office Details
// //             </h2>


// //             <div className="space-y-3 text-white mb-8">

// //               <p>
// //                 <span className="font-semibold">Address:</span><br />
// //                 S Jain Attorneys<br />
// //                 Mumbai, Maharashtra, India
// //               </p>

// //               <p>
// //                 <span className="font-semibold">Phone:</span><br />
// //                 +91 98765 43210
// //               </p>

// //               <p>
// //                 <span className="font-semibold">Email:</span><br />
// //                 contact@sjainattorneys.com
// //               </p>

// //             </div>


// //             <div className="w-full h-72 rounded-md overflow-hidden border border-gray-300">

// //               <iframe
// //                 src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
// //                 width="100%"
// //                 height="100%"
// //                 style={{ border: 0 }}
// //                 loading="lazy"
// //               ></iframe>

// //             </div>

// //           </motion.div>

// //         </div>

// //       </section>


// //       {/* ✅ FOOTER */}
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
//     phone: "",
//     email: "",
//     practiceArea: "",
//     message: "",
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

//   const practiceAreas = [
//     "Corporate & Commercial Law",
//     "Civil Litigation",
//     "Criminal Defense & Prosecution",
//     "Family & Divorce Law",
//     "Property & Real Estate Law",
//     "Legal Advisory & Compliance",
//     "NRI Legal Services",
//     "Consumer Protection Law",
//   ];

//   const fadeIn = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7 }
//     },
//   };

//   return (
//     <>
//       <Navbar />

//       {/* MAIN SECTION */}
//       <section className="py-32 px-6 bg-black relative overflow-hidden">

//         {/* subtle gold glow */}
//         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top,#C9A24D,transparent_60%)]" />

//         <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 relative z-10">

//           {/* LEFT FORM */}
//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="
//               bg-[#0A0A0A]
//               p-10
//               rounded-md
//               border border-[#C9A24D]/40
//               shadow-[0_0_20px_rgba(201,162,77,0.15)]
//             "
//           >

//             <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-8">
//               Request a Consultation
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-5">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="
//                   w-full px-4 py-3
//                   bg-black
//                   border border-gray-800
//                   rounded-md
//                   text-white
//                   focus:outline-none
//                   focus:border-[#C9A24D]
//                   transition
//                 "
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
//               />

//               <select
//                 name="practiceArea"
//                 value={formData.practiceArea}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
//               >
//                 <option value="">Select Practice Area</option>

//                 {practiceAreas.map((area, index) => (
//                   <option key={index} value={area}>
//                     {area}
//                   </option>
//                 ))}
//               </select>

//               <textarea
//                 name="message"
//                 rows="4"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="
//                   w-full
//                   bg-[#C9A24D]
//                   text-black
//                   font-semibold
//                   py-3
//                   rounded-md
//                   hover:shadow-[0_0_15px_rgba(201,162,77,0.5)]
//                   transition
//                 "
//               >
//                 Request Consultation
//               </button>

//             </form>

//           </motion.div>



//           {/* RIGHT SIDE */}
//           <motion.div
//             variants={fadeIn}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >

//             <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-6">
//               Office Details
//             </h2>

//             <div className="space-y-4 text-gray-300 mb-8">

//               <p>
//                 <span className="font-semibold text-white">Address:</span><br />
//                 S Jain Attorneys<br />
//                 Mumbai, Maharashtra, India
//               </p>

//               <p>
//                 <span className="font-semibold text-white">Phone:</span><br />
//                 +91 98765 43210
//               </p>

//               <p>
//                 <span className="font-semibold text-white">Email:</span><br />
//                 contact@sjainattorneys.com
//               </p>

//             </div>


//             {/* MAP */}
//             <div className="
//               w-full h-72 rounded-md overflow-hidden
//               border border-[#C9A24D]/40
//               shadow-[0_0_20px_rgba(201,162,77,0.15)]
//             ">

//               <iframe
//                 src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 loading="lazy"
//               ></iframe>

//             </div>

//           </motion.div>

//         </div>

//       </section>

//       <Footer />
//     </>
//   );
// }


// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";


// /* ================= GLOBAL LAYOUT SYSTEM ================= */

// const container =
//   "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

// const sectionPadding =
//   "py-16 sm:py-20 md:py-24 lg:py-28";

// const pageHeading =
//   "text-3xl sm:text-4xl md:text-5xl font-semibold text-[#C9A24D] text-center";

// const sectionHeading =
//   "text-2xl sm:text-3xl md:text-4xl font-semibold text-[#C9A24D]";



// export default function Page() {

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     practiceArea: "",
//     message: "",
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


//   const practiceAreas = [
//     "Corporate & Commercial Law",
//     "Civil Litigation",
//     "Criminal Defense & Prosecution",
//     "Family & Divorce Law",
//     "Property & Real Estate Law",
//     "Legal Advisory & Compliance",
//     "NRI Legal Services",
//     "Consumer Protection Law",
//   ];


//   const fadeIn = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7 }
//     },
//   };


//   return (
//     <>
//       <Navbar />



//       {/* ================= MAIN SECTION ================= */}

//       <section className={`bg-black relative overflow-hidden ${sectionPadding}`}>

//         {/* GOLD GLOW */}
//         <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top,#C9A24D,transparent_60%)]" />



//         <div className={`${container} relative z-10`}>

//           {/* PAGE HEADING */}

//           <motion.h1
//             variants={fadeIn}
//             initial="hidden"
//             animate="visible"
//             className={`${pageHeading} mb-16`}
//           >
//             Contact Us
//           </motion.h1>



//           {/* GRID */}

//           <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">



//             {/* LEFT FORM */}

//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               className="
//                 bg-[#0A0A0A]
//                 p-8 sm:p-10
//                 rounded-md
//                 border border-[#C9A24D]/40
//                 shadow-[0_0_20px_rgba(201,162,77,0.15)]
//               "
//             >

//               <h2 className={`${sectionHeading} mb-8`}>
//                 Request a Consultation
//               </h2>


//               <form onSubmit={handleSubmit} className="space-y-5">


//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="
//                     w-full px-4 py-3
//                     bg-black
//                     border border-gray-800
//                     rounded-md
//                     text-white
//                     focus:outline-none
//                     focus:border-[#C9A24D]
//                   "
//                 />


//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
//                 />


//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
//                 />


//                 <select
//                   name="practiceArea"
//                   value={formData.practiceArea}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
//                 >

//                   <option value="">Select Practice Area</option>

//                   {practiceAreas.map((area, index) => (
//                     <option key={index} value={area}>
//                       {area}
//                     </option>
//                   ))}

//                 </select>


//                 <textarea
//                   name="message"
//                   rows="4"
//                   placeholder="Your Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
//                 ></textarea>


//                 <button
//                   type="submit"
//                   className="
//                     w-full
//                     bg-[#C9A24D]
//                     text-black
//                     font-semibold
//                     py-3
//                     rounded-md
//                     hover:shadow-[0_0_15px_rgba(201,162,77,0.5)]
//                     transition
//                   "
//                 >
//                   Request Consultation
//                 </button>


//               </form>

//             </motion.div>




//             {/* RIGHT SIDE */}

//             <motion.div
//               variants={fadeIn}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//             >

//               <h2 className={`${sectionHeading} mb-6`}>
//                 Office Details
//               </h2>


//               <div className="space-y-4 text-gray-300 mb-8">

//                 <p>
//                   <span className="font-semibold text-white">Address:</span><br />
//                   S Jain Attorneys<br />
//                   Mumbai, Maharashtra, India
//                 </p>

//                 <p>
//                   <span className="font-semibold text-white">Phone:</span><br />
//                   +91 98765 43210
//                 </p>

//                 <p>
//                   <span className="font-semibold text-white">Email:</span><br />
//                   contact@sjainattorneys.com
//                 </p>

//               </div>



//               {/* MAP */}

//               <div className="
//                 w-full h-72 rounded-md overflow-hidden
//                 border border-[#C9A24D]/40
//                 shadow-[0_0_20px_rgba(201,162,77,0.15)]
//               ">

//                 <iframe
//                   src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   loading="lazy"
//                 ></iframe>

//               </div>

//             </motion.div>



//           </div>

//         </div>

//       </section>



//       <Footer />

//     </>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


/* ================= GLOBAL LAYOUT SYSTEM ================= */

const container =
  "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

const sectionPadding =
  "py-16 sm:py-20 md:py-24 lg:py-28";

const pageHeading =
  "text-3xl sm:text-4xl md:text-5xl font-semibold text-[#C9A24D] text-center";

const sectionHeading =
  "text-2xl sm:text-3xl md:text-4xl font-semibold text-[#C9A24D]";



export default function Page() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    practiceArea: "",
    message: "",
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  const practiceAreas = [
    "Corporate & Commercial Law",
    "Civil Litigation",
    "Criminal Defense & Prosecution",
    "Family & Divorce Law",
    "Property & Real Estate Law",
    "Legal Advisory & Compliance",
    "NRI Legal Services",
    "Consumer Protection Law",
  ];


  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 }
    },
  };


  return (
    <>
      <Navbar />


      {/* ================= MAIN SECTION ================= */}

      <section className={`bg-black relative overflow-hidden ${sectionPadding}`}>

        {/* GOLD GLOW */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top,#C9A24D,transparent_60%)]" />


        <div className={`${container} relative z-10`}>

          {/* PAGE HEADING */}

          <motion.h1
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className={`${pageHeading} mb-16`}
          >
            Contact Us
          </motion.h1>



          {/* GRID */}

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">



            {/* LEFT FORM */}

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                bg-[#0A0A0A]
                p-8 sm:p-10
                rounded-md
                border border-[#C9A24D]/40
                shadow-[0_0_20px_rgba(201,162,77,0.15)]
              "
            >

              <h2 className={`${sectionHeading} mb-8`}>
                Request a Consultation
              </h2>


              <form onSubmit={handleSubmit} className="space-y-5">


                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
                />


                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
                />


                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
                />


                <select
                  name="practiceArea"
                  value={formData.practiceArea}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
                >

                  <option value="">Select Practice Area</option>

                  {practiceAreas.map((area, index) => (
                    <option key={index} value={area}>
                      {area}
                    </option>
                  ))}

                </select>


                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
                ></textarea>


                <button
                  type="submit"
                  className="
                    w-full
                    bg-[#C9A24D]
                    text-black
                    font-semibold
                    py-3
                    rounded-md
                    hover:shadow-[0_0_15px_rgba(201,162,77,0.5)]
                    transition
                  "
                >
                  Request Consultation
                </button>


              </form>

            </motion.div>




            {/* RIGHT SIDE */}

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <h2 className={`${sectionHeading} mb-6`}>
                Office Details
              </h2>


              <div className="space-y-6 text-gray-300 text-lg">

                <p>
                  <span className="font-semibold text-white">Office Name:</span><br />
                  S Jain Attorneys
                </p>

                <p>
                  <span className="font-semibold text-white">Address:</span><br />
                  #42, 2nd Floor,<br />
                  MG Road,<br />
                  Bengaluru, Karnataka 560001,<br />
                  India
                </p>

                <p>
                  <span className="font-semibold text-white">Phone:</span><br />
                  +91 98765 43210
                </p>

                <p>
                  <span className="font-semibold text-white">Email:</span><br />
                  contact@sjainattorneys.com
                </p>

                <p>
                  <span className="font-semibold text-white">Working Hours:</span><br />
                  Monday – Saturday<br />
                  9:30 AM – 7:00 PM
                </p>

              </div>


            </motion.div>



          </div>

        </div>

      </section>



      <Footer />

    </>
  );
}
