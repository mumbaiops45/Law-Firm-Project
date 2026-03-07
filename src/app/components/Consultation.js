// // // // // "use client";

// // // // // import { useState } from "react";
// // // // // import { motion } from "framer-motion";

// // // // // export default function Consultation() {
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     phone: "",
// // // // //     email: "",
// // // // //     practiceArea: "",
// // // // //     message: "",
// // // // //   });

// // // // //   const handleChange = (e) => {
// // // // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // // // //   };

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     console.log("Form submitted:", formData);
// // // // //     // Integrate API here
// // // // //   };

// // // // //   const practiceAreas = [
// // // // //     "Corporate & Commercial Law",
// // // // //     "Civil Litigation",
// // // // //     "Criminal Defense & Prosecution",
// // // // //     "Family & Divorce Law",
// // // // //     "Property & Real Estate Law",
// // // // //     "Legal Advisory & Regulatory Compliance",
// // // // //     "NRI Legal Services",
// // // // //     "Cheque Bounce & Negotiable Instruments Cases",
// // // // //     "High Court & Supreme Court Practice",
// // // // //     "Consumer Protection Law",
// // // // //     "Mediation, Counselling & ADR",
// // // // //     "International Private Law",
// // // // //   ];

// // // // //   const fadeInUp = {
// // // // //     hidden: { opacity: 0, y: 20 },
// // // // //     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// // // // //   };

// // // // //   return (
// // // // //     <section className="py-20 px-6 bg-[#F5F5F5] text-[#111111]">
// // // // //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
// // // // //         {/* Left: Consultation Form */}
// // // // //         <motion.div
// // // // //           className="bg-[#0B1C2D] p-8 rounded-md shadow-lg"
// // // // //           variants={fadeInUp}
// // // // //           initial="hidden"
// // // // //           whileInView="visible"
// // // // //           viewport={{ once: true }}
// // // // //         >
// // // // //           <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-6">
// // // // //             Request a Consultation
// // // // //           </h2>

// // // // //           <form onSubmit={handleSubmit} className="space-y-4">
// // // // //             <input
// // // // //               type="text"
// // // // //               name="name"
// // // // //               value={formData.name}
// // // // //               onChange={handleChange}
// // // // //               placeholder="Your Name"
// // // // //               className="w-full px-4 py-2 border border-[#C9A24D] rounded-md bg-[#111111] text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
// // // // //               required
// // // // //             />

// // // // //             <input
// // // // //               type="tel"
// // // // //               name="phone"
// // // // //               value={formData.phone}
// // // // //               onChange={handleChange}
// // // // //               placeholder="Phone Number"
// // // // //               className="w-full px-4 py-2 border border-[#C9A24D] rounded-md bg-[#111111] text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
// // // // //               required
// // // // //             />

// // // // //             <input
// // // // //               type="email"
// // // // //               name="email"
// // // // //               value={formData.email}
// // // // //               onChange={handleChange}
// // // // //               placeholder="Email Address"
// // // // //               className="w-full px-4 py-2 border border-[#C9A24D] rounded-md bg-[#111111] text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
// // // // //               required
// // // // //             />

// // // // //             <select
// // // // //               name="practiceArea"
// // // // //               value={formData.practiceArea}
// // // // //               onChange={handleChange}
// // // // //               className="w-full px-4 py-2 border border-[#C9A24D] rounded-md bg-[#111111] text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
// // // // //               required
// // // // //             >
// // // // //               <option value="">Select Practice Area</option>
// // // // //               {practiceAreas.map((area, index) => (
// // // // //                 <option key={index} value={area}>
// // // // //                   {area}
// // // // //                 </option>
// // // // //               ))}
// // // // //             </select>

// // // // //             <textarea
// // // // //               name="message"
// // // // //               value={formData.message}
// // // // //               onChange={handleChange}
// // // // //               placeholder="Your Message"
// // // // //               rows={4}
// // // // //               className="w-full px-4 py-2 border border-[#C9A24D] rounded-md bg-[#111111] text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
// // // // //               required
// // // // //             ></textarea>

// // // // //             <button
// // // // //               type="submit"
// // // // //               className="w-full px-6 py-3 bg-[#C9A24D] text-[#111111] font-semibold rounded-md hover:opacity-90 transition"
// // // // //             >
// // // // //               Request Consultation
// // // // //             </button>
// // // // //           </form>
// // // // //         </motion.div>

// // // // //         {/* Right: Office Details */}
// // // // //         <motion.div
// // // // //           className="space-y-6"
// // // // //           variants={fadeInUp}
// // // // //           initial="hidden"
// // // // //           whileInView="visible"
// // // // //           viewport={{ once: true }}
// // // // //         >
// // // // //           <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-4">
// // // // //             Office Details
// // // // //           </h2>

// // // // //           <div className="text-[#111111] space-y-2">
// // // // //             <p>
// // // // //               <span className="font-semibold">Address:</span> 123 Legal Lane, Mumbai, Maharashtra, India
// // // // //             </p>
// // // // //             <p>
// // // // //               <span className="font-semibold">Phone:</span> +91 98765 43210
// // // // //             </p>
// // // // //             <p>
// // // // //               <span className="font-semibold">Email:</span> contact@sjainattorneys.com
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Google Map Placeholder */}
// // // // //           <div className="w-full h-64 bg-[#0B1C2D] rounded-md flex items-center justify-center text-gray-400">
// // // // //             Google Map Placeholder
// // // // //           </div>
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // "use client";

// // // // import { useState } from "react";
// // // // import { motion } from "framer-motion";

// // // // export default function Consultation() {

// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     phone: "",
// // // //     email: "",
// // // //     practiceArea: "",
// // // //     message: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value,
// // // //     });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log(formData);
// // // //   };


// // // //   const practiceAreas = [
// // // //     "Corporate & Commercial Law",
// // // //     "Civil Litigation",
// // // //     "Criminal Defense & Prosecution",
// // // //     "Family & Divorce Law",
// // // //     "Property & Real Estate Law",
// // // //     "Legal Advisory & Compliance",
// // // //     "NRI Legal Services",
// // // //     "Consumer Protection Law",
// // // //   ];


// // // //   const fadeIn = {
// // // //     hidden: { opacity: 0, y: 25 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: { duration: 0.6 }
// // // //     },
// // // //   };


// // // //   return (
// // // //       <section className="py-20 px-6 bg-white">


// // // //       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

// // // //         {/* LEFT — CONSULTATION FORM */}
// // // //         <motion.div
// // // //           variants={fadeIn}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true }}
// // // //           className="bg-black p-10 rounded-md shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-[#C9A24D]/20"

// // // //         >

// // // //           <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-8">
// // // //             Request a Consultation
// // // //           </h2>


// // // //           <form onSubmit={handleSubmit} className="space-y-5">


// // // //             {/* Name */}
// // // //             <input
// // // //               type="text"
// // // //               name="name"
// // // //               placeholder="Full Name"
// // // //               value={formData.name}
// // // //               onChange={handleChange}
// // // //               required
// // // //               className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // //             />


// // // //             {/* Phone */}
// // // //             <input
// // // //               type="tel"
// // // //               name="phone"
// // // //               placeholder="Phone Number"
// // // //               value={formData.phone}
// // // //               onChange={handleChange}
// // // //               required
// // // //               className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // //             />


// // // //             {/* Email */}
// // // //             <input
// // // //               type="email"
// // // //               name="email"
// // // //               placeholder="Email Address"
// // // //               value={formData.email}
// // // //               onChange={handleChange}
// // // //               required
// // // //               className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // //             />


// // // //             {/* Practice Area */}
// // // //             <select
// // // //               name="practiceArea"
// // // //               value={formData.practiceArea}
// // // //               onChange={handleChange}
// // // //               required
// // // //               className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // //             >

// // // //               <option value="">Select Practice Area</option>

// // // //               {practiceAreas.map((area, index) => (
// // // //                 <option key={index} value={area}>
// // // //                   {area}
// // // //                 </option>
// // // //               ))}

// // // //             </select>


// // // //             {/* Message */}
// // // //             <textarea
// // // //               name="message"
// // // //               rows="4"
// // // //               placeholder="Your Message"
// // // //               value={formData.message}
// // // //               onChange={handleChange}
// // // //               required
// // // //               className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // // //             ></textarea>



// // // //             {/* CTA */}
// // // //             <button
// // // //               type="submit"
// // // //               className="
// // // //                 w-full
// // // //                 bg-[#C9A24D]
// // // //                 text-[#111111]
// // // //                 font-semibold
// // // //                 py-3
// // // //                 rounded-md
// // // //                 hover:opacity-90
// // // //                 transition
// // // //               "
// // // //             >
// // // //               Request Consultation
// // // //             </button>


// // // //           </form>

// // // //         </motion.div>



// // // //         {/* RIGHT — OFFICE DETAILS */}
// // // //         <motion.div
// // // //           variants={fadeIn}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true }}
// // // //         >

// // // //           <h2 className="text-3xl font-serif font-semibold text-[#0B1C2D] mb-6">
// // // //             Office Details
// // // //           </h2>


// // // //           <div className="space-y-3 text-gray-800 mb-8">

// // // //             <p>
// // // //               <span className="font-semibold">Address:</span><br />
// // // //               S Jain Attorneys<br />
// // // //               Mumbai, Maharashtra, India
// // // //             </p>


// // // //             <p>
// // // //               <span className="font-semibold">Phone:</span><br />
// // // //               +91 98765 43210
// // // //             </p>


// // // //             <p>
// // // //               <span className="font-semibold">Email:</span><br />
// // // //               contact@sjainattorneys.com
// // // //             </p>

// // // //           </div>



// // // //           {/* GOOGLE MAP EMBED */}
// // // //           <div className="w-full h-72 rounded-md overflow-hidden border border-gray-300">

// // // //             <iframe
// // // //               src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
// // // //               width="100%"
// // // //               height="100%"
// // // //               style={{ border: 0 }}
// // // //               loading="lazy"
// // // //             ></iframe>

// // // //           </div>


// // // //         </motion.div>


// // // //       </div>

// // // //     </section>
// // // //   );

// // // // }




// // // // "use client";

// // // // import { useState } from "react";
// // // // import { motion } from "framer-motion";

// // // // export default function Consultation() {

// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     phone: "",
// // // //     email: "",
// // // //     practiceArea: "",
// // // //     message: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value,
// // // //     });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log(formData);
// // // //   };

// // // //   const practiceAreas = [
// // // //     "Corporate & Commercial Law",
// // // //     "Civil Litigation",
// // // //     "Criminal Defense & Prosecution",
// // // //     "Family & Divorce Law",
// // // //     "Property & Real Estate Law",
// // // //     "Legal Advisory & Compliance",
// // // //     "NRI Legal Services",
// // // //     "Consumer Protection Law",
// // // //   ];

// // // //   const fadeIn = {
// // // //     hidden: { opacity: 0, y: 30 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: { duration: 0.7 }
// // // //     },
// // // //   };

// // // //   return (
// // // //     <section className="py-24 px-6 bg-white">

// // // //       {/* <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start"> */}
// // // //         <div className="
// // // //   relative z-20 max-w-7xl mx-auto w-full
// // // //   px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
// // // //   grid grid-cols-1 md:grid-cols-2 gap-12 items-center
// // // // ">

// // // //         {/* LEFT — CONSULTATION FORM */}
// // // //         <motion.div
// // // //           variants={fadeIn}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true }}
// // // //           className="
// // // //             bg-black
// // // //             p-10
// // // //             rounded-lg
// // // //             border border-[#C9A24D]/20
// // // //             hover:shadow-[0_0_60px_rgba(201,162,77,0.15)]
// // // //             transition duration-500
// // // //           "
// // // //         >

// // // //           <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-8">
// // // //             Request a Consultation
// // // //           </h2>

// // // //           <form onSubmit={handleSubmit} className="space-y-5">

// // // //             {/* Name */}
// // // //             <input
// // // //               type="text"
// // // //               name="name"
// // // //               placeholder="Full Name"
// // // //               value={formData.name}
// // // //               onChange={handleChange}
// // // //               required
// // // //               className="
// // // //                 w-full px-4 py-3
// // // //                 bg-black
// // // //                 border border-gray-800
// // // //                 rounded-md
// // // //                 text-white
// // // //                 placeholder-gray-500
// // // //                 focus:outline-none
// // // //                 focus:border-[#C9A24D]
// // // //                 focus:shadow-[0_0_12px_rgba(201,162,77,0.4)]
// // // //                 transition duration-300
// // // //               "
// // // //             />

// // // //             {/* Phone */}
// // // //             <input
// // // //               type="tel"
// // // //               name="phone"
// // // //               placeholder="Phone Number"
// // // //               value={formData.phone}
// // // //               onChange={handleChange}
// // // //               required
// // // //               className="
// // // //                 w-full px-4 py-3
// // // //                 bg-black
// // // //                 border border-gray-800
// // // //                 rounded-md
// // // //                 text-white
// // // //                 placeholder-gray-500
// // // //                 focus:outline-none
// // // //                 focus:border-[#C9A24D]
// // // //                 focus:shadow-[0_0_12px_rgba(201,162,77,0.4)]
// // // //                 transition duration-300
// // // //               "
// // // //             />

// // // //             {/* Email */}
// // // //             <input
// // // //               type="email"
// // // //               name="email"
// // // //               placeholder="Email Address"
// // // //               value={formData.email}
// // // //               onChange={handleChange}
// // // //               required
// // // //               className="
// // // //                 w-full px-4 py-3
// // // //                 bg-black
// // // //                 border border-gray-800
// // // //                 rounded-md
// // // //                 text-white
// // // //                 placeholder-gray-500
// // // //                 focus:outline-none
// // // //                 focus:border-[#C9A24D]
// // // //                 focus:shadow-[0_0_12px_rgba(201,162,77,0.4)]
// // // //                 transition duration-300
// // // //               "
// // // //             />

// // // //             {/* Practice Area */}
// // // //             <select
// // // //               name="practiceArea"
// // // //               value={formData.practiceArea}
// // // //               onChange={handleChange}
// // // //               required
// // // //               className="
// // // //                 w-full px-4 py-3
// // // //                 bg-black
// // // //                 border border-gray-800
// // // //                 rounded-md
// // // //                 text-white
// // // //                 focus:outline-none
// // // //                 focus:border-[#C9A24D]
// // // //                 focus:shadow-[0_0_12px_rgba(201,162,77,0.4)]
// // // //                 transition duration-300
// // // //               "
// // // //             >
// // // //               <option value="">Select Practice Area</option>

// // // //               {practiceAreas.map((area, index) => (
// // // //                 <option key={index} value={area}>
// // // //                   {area}
// // // //                 </option>
// // // //               ))}

// // // //             </select>

// // // //             {/* Message */}
// // // //             <textarea
// // // //               name="message"
// // // //               rows="4"
// // // //               placeholder="Your Message"
// // // //               value={formData.message}
// // // //               onChange={handleChange}
// // // //               required
// // // //               className="
// // // //                 w-full px-4 py-3
// // // //                 bg-black
// // // //                 border border-gray-800
// // // //                 rounded-md
// // // //                 text-white
// // // //                 placeholder-gray-500
// // // //                 focus:outline-none
// // // //                 focus:border-[#C9A24D]
// // // //                 focus:shadow-[0_0_12px_rgba(201,162,77,0.4)]
// // // //                 transition duration-300
// // // //               "
// // // //             ></textarea>


// // // //             {/* BUTTON */}
// // // //             <button
// // // //               type="submit"
// // // //               className="
// // // //                 relative
// // // //                 w-full
// // // //                 py-3
// // // //                 rounded-md
// // // //                 font-semibold
// // // //                 text-black
// // // //                 overflow-hidden
// // // //                 group
// // // //                 transition-all
// // // //                 duration-500
// // // //                 hover:-translate-y-1
// // // //                 hover:scale-[1.02]
// // // //               "
// // // //             >

// // // //               {/* Animated Gradient */}
// // // //               <span className="
// // // //                 absolute inset-0
// // // //                 bg-gradient-to-r
// // // //                 from-[#C9A24D]
// // // //                 via-[#E5C06B]
// // // //                 to-[#C9A24D]
// // // //                 bg-[length:200%_200%]
// // // //                 animate-[gradientMove_4s_linear_infinite]
// // // //               "></span>

// // // //               {/* Glow */}
// // // //               <span className="
// // // //                 absolute inset-0
// // // //                 opacity-0
// // // //                 group-hover:opacity-100
// // // //                 bg-white/20
// // // //                 blur-xl
// // // //                 transition duration-500
// // // //               "></span>

// // // //               <span className="relative z-10 tracking-wide">
// // // //                 Request Consultation
// // // //               </span>

// // // //             </button>

// // // //           </form>

// // // //         </motion.div>



// // // //         {/* RIGHT — OFFICE DETAILS */}
// // // //         <motion.div
// // // //           variants={fadeIn}
// // // //           initial="hidden"
// // // //           whileInView="visible"
// // // //           viewport={{ once: true }}
// // // //         >

// // // //           <h2 className="text-3xl font-serif font-semibold text-black mb-6">
// // // //             Office Details
// // // //           </h2>


// // // //           <div className="space-y-4 text-gray-700 mb-8">

// // // //             <p>
// // // //               <span className="font-semibold text-black">Address:</span><br />
// // // //               S Jain Attorneys<br />
// // // //               Mumbai, Maharashtra, India
// // // //             </p>

// // // //             <p>
// // // //               <span className="font-semibold text-black">Phone:</span><br />
// // // //               +91 98765 43210
// // // //             </p>

// // // //             <p>
// // // //               <span className="font-semibold text-black">Email:</span><br />
// // // //               contact@sjainattorneys.com
// // // //             </p>

// // // //           </div>


// // // //           {/* MAP */}
// // // //           <div className="
// // // //             w-full h-72
// // // //             rounded-lg
// // // //             overflow-hidden
// // // //             border border-[#C9A24D]/30
// // // //             shadow-md
// // // //             hover:shadow-[0_0_25px_rgba(201,162,77,0.3)]
// // // //             transition duration-500
// // // //           ">

// // // //             <iframe
// // // //               src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
// // // //               width="100%"
// // // //               height="100%"
// // // //               style={{ border: 0 }}
// // // //               loading="lazy"
// // // //             ></iframe>

// // // //           </div>

// // // //         </motion.div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }


// // // // "use client";

// // // // import { useState } from "react";
// // // // import { motion } from "framer-motion";

// // // // export default function Consultation() {

// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     phone: "",
// // // //     email: "",
// // // //     practiceArea: "",
// // // //     message: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value,
// // // //     });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log(formData);
// // // //   };

// // // //   const practiceAreas = [
// // // //     "Corporate & Commercial Law",
// // // //     "Civil Litigation",
// // // //     "Criminal Defense & Prosecution",
// // // //     "Family & Divorce Law",
// // // //     "Property & Real Estate Law",
// // // //     "Legal Advisory & Compliance",
// // // //     "NRI Legal Services",
// // // //     "Consumer Protection Law",
// // // //   ];

// // // //   const fadeIn = {
// // // //     hidden: { opacity: 0, y: 30 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: { duration: 0.7 }
// // // //     },
// // // //   };

// // // //   // ===== GLOBAL SAME STYLES =====

// // // //   const container =
// // // //     "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28";

// // // //   const sectionTitle =
// // // //     "text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight";

// // // //   return (
// // // //     <section className="bg-white">

// // // //       <div className={container}>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

// // // //           {/* LEFT — CONSULTATION FORM */}
// // // //           <motion.div
// // // //             variants={fadeIn}
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             className="
// // // //               bg-black
// // // //               p-10
// // // //               rounded-lg
// // // //               border border-[#C9A24D]/20
// // // //               hover:shadow-[0_0_60px_rgba(201,162,77,0.15)]
// // // //               transition duration-500
// // // //             "
// // // //           >

// // // //             <h2 className={`${sectionTitle} text-[#C9A24D] mb-8`}>
// // // //               Request a Consultation
// // // //             </h2>

// // // //             <form onSubmit={handleSubmit} className="space-y-5">

// // // //               <input
// // // //                 type="text"
// // // //                 name="name"
// // // //                 placeholder="Full Name"
// // // //                 value={formData.name}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="
// // // //                   w-full px-4 py-3
// // // //                   bg-black
// // // //                   border border-gray-800
// // // //                   rounded-md
// // // //                   text-white
// // // //                   placeholder-gray-500
// // // //                   focus:outline-none
// // // //                   focus:border-[#C9A24D]
// // // //                   focus:shadow-[0_0_12px_rgba(201,162,77,0.4)]
// // // //                   transition duration-300
// // // //                 "
// // // //               />

// // // //               <input
// // // //                 type="tel"
// // // //                 name="phone"
// // // //                 placeholder="Phone Number"
// // // //                 value={formData.phone}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="
// // // //                   w-full px-4 py-3
// // // //                   bg-black
// // // //                   border border-gray-800
// // // //                   rounded-md
// // // //                   text-white
// // // //                   placeholder-gray-500
// // // //                   focus:outline-none
// // // //                   focus:border-[#C9A24D]
// // // //                   focus:shadow-[0_0_12px_rgba(201,162,77,0.4)]
// // // //                   transition duration-300
// // // //                 "
// // // //               />

// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 placeholder="Email Address"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="
// // // //                   w-full px-4 py-3
// // // //                   bg-black
// // // //                   border border-gray-800
// // // //                   rounded-md
// // // //                   text-white
// // // //                   placeholder-gray-500
// // // //                   focus:outline-none
// // // //                   focus:border-[#C9A24D]
// // // //                   focus:shadow-[0_0_12px_rgba(201,162,77,0.4)]
// // // //                   transition duration-300
// // // //                 "
// // // //               />

// // // //               <select
// // // //                 name="practiceArea"
// // // //                 value={formData.practiceArea}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="
// // // //                   w-full px-4 py-3
// // // //                   bg-black
// // // //                   border border-gray-800
// // // //                   rounded-md
// // // //                   text-white
// // // //                   focus:outline-none
// // // //                   focus:border-[#C9A24D]
// // // //                   focus:shadow-[0_0_12px_rgba(201,162,77,0.4)]
// // // //                   transition duration-300
// // // //                 "
// // // //               >
// // // //                 <option value="">Select Practice Area</option>
// // // //                 {practiceAreas.map((area, index) => (
// // // //                   <option key={index} value={area}>
// // // //                     {area}
// // // //                   </option>
// // // //                 ))}
// // // //               </select>

// // // //               <textarea
// // // //                 name="message"
// // // //                 rows="4"
// // // //                 placeholder="Your Message"
// // // //                 value={formData.message}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="
// // // //                   w-full px-4 py-3
// // // //                   bg-black
// // // //                   border border-gray-800
// // // //                   rounded-md
// // // //                   text-white
// // // //                   placeholder-gray-500
// // // //                   focus:outline-none
// // // //                   focus:border-[#C9A24D]
// // // //                   focus:shadow-[0_0_12px_rgba(201,162,77,0.4)]
// // // //                   transition duration-300
// // // //                 "
// // // //               ></textarea>

// // // //               <button
// // // //                 type="submit"
// // // //                 className="
// // // //                   w-full py-3
// // // //                   rounded-md
// // // //                   font-semibold
// // // //                   text-black
// // // //                   bg-[#C9A24D]
// // // //                   hover:bg-[#B08D3C]
// // // //                   transition duration-300
// // // //                 "
// // // //               >
// // // //                 Request Consultation
// // // //               </button>

// // // //             </form>
// // // //           </motion.div>


// // // //           {/* RIGHT — OFFICE DETAILS */}
// // // //           <motion.div
// // // //             variants={fadeIn}
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //           >

// // // //             <h2 className={`${sectionTitle} text-black mb-6`}>
// // // //               Office Details
// // // //             </h2>

// // // //             <div className="space-y-4 text-gray-700 mb-8 text-base">

// // // //               <p>
// // // //                 <span className="font-semibold text-black">Address:</span><br />
// // // //                 S Jain Attorneys<br />
// // // //                 Mumbai, Maharashtra, India
// // // //               </p>

// // // //               <p>
// // // //                 <span className="font-semibold text-black">Phone:</span><br />
// // // //                 +91 98765 43210
// // // //               </p>

// // // //               <p>
// // // //                 <span className="font-semibold text-black">Email:</span><br />
// // // //                 contact@sjainattorneys.com
// // // //               </p>

// // // //             </div>

// // // //             {/* <div className="
// // // //               w-full h-72
// // // //               rounded-lg
// // // //               overflow-hidden
// // // //               border border-[#C9A24D]/30
// // // //               shadow-md
// // // //               transition duration-500
// // // //             "> */}

// // // //               {/* <iframe
// // // //                 src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
// // // //                 width="100%"
// // // //                 height="100%"
// // // //                 style={{ border: 0 }}
// // // //                 loading="lazy"
// // // //               ></iframe> */}

// // // //             {/* </div> */}

// // // //           </motion.div>

// // // //         </div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }













// // // // "use client";

// // // // import { useState } from "react";
// // // // import { motion } from "framer-motion";

// // // // export default function Consultation() {

// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     phone: "",
// // // //     email: "",
// // // //     practiceArea: "",
// // // //     message: "",
// // // //   });

// // // //   const handleChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value,
// // // //     });
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     console.log(formData);
// // // //   };

// // // //   const practiceAreas = [
// // // //     "Corporate & Commercial Law",
// // // //     "Civil Litigation",
// // // //     "Criminal Defense & Prosecution",
// // // //     "Family & Divorce Law",
// // // //     "Property & Real Estate Law",
// // // //     "Legal Advisory & Compliance",
// // // //     "NRI Legal Services",
// // // //     "Consumer Protection Law",
// // // //   ];

// // // //   const fadeIn = {
// // // //     hidden: { opacity: 0, y: 30 },
// // // //     visible: {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       transition: { duration: 0.7 }
// // // //     },
// // // //   };

// // // //   /* ===== SAME GLOBAL SYSTEM AS OTHER PAGES ===== */

// // // //   const container =
// // // //     "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20";

// // // //   const sectionPadding =
// // // //     "py-16 sm:py-20 md:py-24 lg:py-28";

// // // //   const sectionTitle =
// // // //     "text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight";

// // // //   const subHeading =
// // // //     "text-2xl sm:text-3xl md:text-4xl font-semibold";



// // // //   return (
// // // //     <section className={`bg-white ${sectionPadding}`}>
// // // //       <h2 className={`${sectionTitle} text-[#C9A24D] mb-8 text-center` }>
// // // //                Request a Consultation
// // // //              </h2>

// // // //       <div className={container}>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">

// // // //           {/* LEFT — CONSULTATION FORM */}

// // // //           <motion.div
// // // //             variants={fadeIn}
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //             className="
// // // //               bg-black
// // // //               p-8 sm:p-10
// // // //               rounded-md
// // // //               border border-[#C9A24D]/30
// // // //               shadow-[0_0_20px_rgba(201,162,77,0.15)]
// // // //               transition duration-500
// // // //             "
// // // //           >

// // // //             <h2 className={`${subHeading} text-[#C9A24D] mb-8`}>
// // // //               Request a Consultation
// // // //             </h2>


// // // //             <form onSubmit={handleSubmit} className="space-y-5">

// // // //               <input
// // // //                 type="text"
// // // //                 name="name"
// // // //                 placeholder="Full Name"
// // // //                 value={formData.name}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="
// // // //                   w-full px-4 py-3
// // // //                   bg-black
// // // //                   border border-gray-800
// // // //                   rounded-md
// // // //                   text-white
// // // //                   placeholder-gray-500
// // // //                   focus:outline-none
// // // //                   focus:border-[#C9A24D]
// // // //                   transition duration-300
// // // //                 "
// // // //               />


// // // //               <input
// // // //                 type="tel"
// // // //                 name="phone"
// // // //                 placeholder="Phone Number"
// // // //                 value={formData.phone}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="
// // // //                   w-full px-4 py-3
// // // //                   bg-black
// // // //                   border border-gray-800
// // // //                   rounded-md
// // // //                   text-white
// // // //                   placeholder-gray-500
// // // //                   focus:outline-none
// // // //                   focus:border-[#C9A24D]
// // // //                   transition duration-300
// // // //                 "
// // // //               />


// // // //               <input
// // // //                 type="email"
// // // //                 name="email"
// // // //                 placeholder="Email Address"
// // // //                 value={formData.email}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="
// // // //                   w-full px-4 py-3
// // // //                   bg-black
// // // //                   border border-gray-800
// // // //                   rounded-md
// // // //                   text-white
// // // //                   placeholder-gray-500
// // // //                   focus:outline-none
// // // //                   focus:border-[#C9A24D]
// // // //                   transition duration-300
// // // //                 "
// // // //               />


// // // //               <select
// // // //                 name="practiceArea"
// // // //                 value={formData.practiceArea}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="
// // // //                   w-full px-4 py-3
// // // //                   bg-black
// // // //                   border border-gray-800
// // // //                   rounded-md
// // // //                   text-white
// // // //                   focus:outline-none
// // // //                   focus:border-[#C9A24D]
// // // //                   transition duration-300
// // // //                 "
// // // //               >

// // // //                 <option value="">Select Practice Area</option>

// // // //                 {practiceAreas.map((area, index) => (
// // // //                   <option key={index} value={area}>
// // // //                     {area}
// // // //                   </option>
// // // //                 ))}

// // // //               </select>


// // // //               <textarea
// // // //                 name="message"
// // // //                 rows="4"
// // // //                 placeholder="Your Message"
// // // //                 value={formData.message}
// // // //                 onChange={handleChange}
// // // //                 required
// // // //                 className="
// // // //                   w-full px-4 py-3
// // // //                   bg-black
// // // //                   border border-gray-800
// // // //                   rounded-md
// // // //                   text-white
// // // //                   placeholder-gray-500
// // // //                   focus:outline-none
// // // //                   focus:border-[#C9A24D]
// // // //                   transition duration-300
// // // //                 "
// // // //               ></textarea>


// // // //               <button
// // // //                 type="submit"
// // // //                 className="
// // // //                   w-full py-3
// // // //                   rounded-md
// // // //                   font-semibold
// // // //                   text-black
// // // //                   bg-[#C9A24D]
// // // //                   hover:bg-[#B08D3C]
// // // //                   transition duration-300
// // // //                 "
// // // //               >
// // // //                 Request Consultation
// // // //               </button>


// // // //             </form>

// // // //           </motion.div>



// // // //           {/* RIGHT — OFFICE DETAILS */}

// // // //           <motion.div
// // // //             variants={fadeIn}
// // // //             initial="hidden"
// // // //             whileInView="visible"
// // // //             viewport={{ once: true }}
// // // //           >

// // // //             <h2 className={`${subHeading} text-black mb-6`}>
// // // //               Office Details
// // // //             </h2>


// // // //             <div className="space-y-6 text-gray-700 text-lg">

// // // //               <p>
// // // //                 <span className="font-semibold text-black">Office Name:</span><br />
// // // //                 S Jain Attorneys
// // // //               </p>

// // // //               <p>
// // // //                 <span className="font-semibold text-black">Address:</span><br />
// // // //                 #42, 2nd Floor,<br />
// // // //                 MG Road,<br />
// // // //                 Bengaluru, Karnataka 560001,<br />
// // // //                 India
// // // //               </p>

// // // //               <p>
// // // //                 <span className="font-semibold text-black">Phone:</span><br />
// // // //                 +91 98765 43210
// // // //               </p>

// // // //               <p>
// // // //                 <span className="font-semibold text-black">Email:</span><br />
// // // //                 contact@sjainattorneys.com
// // // //               </p>

// // // //               <p>
// // // //                 <span className="font-semibold text-black">Working Hours:</span><br />
// // // //                 Monday – Saturday<br />
// // // //                 9:30 AM – 7:00 PM
// // // //               </p>

// // // //             </div>


// // // //           </motion.div>


// // // //         </div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }


// // // "use client";

// // // import { useState } from "react";
// // // import { motion } from "framer-motion";

// // // export default function Consultation() {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     phone: "",
// // //     email: "",
// // //     practiceArea: "",
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

// // //   const practiceAreas = [
// // //     "Corporate & Commercial Law",
// // //     "Civil Litigation",
// // //     "Criminal Defense & Prosecution",
// // //     "Family & Divorce Law",
// // //     "Property & Real Estate Law",
// // //     "Legal Advisory & Compliance",
// // //     "NRI Legal Services",
// // //     "Consumer Protection Law",
// // //   ];

// // //   const fadeIn = {
// // //     hidden: { opacity: 0, y: 40 },
// // //     visible: {
// // //       opacity: 1,
// // //       y: 0,
// // //       transition: { duration: 0.8 },
// // //     },
// // //   };

// // //   return (
// // //     <section className="bg-white py-20 px-6">
// // //       <div className="max-w-7xl mx-auto">
        
// // //         {/* Section Heading */}
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl md:text-5xl font-semibold text-[#C9A24D]">
// // //             Request a Consultation
// // //           </h2>
// // //           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
// // //             Speak with experienced legal professionals and get expert advice
// // //             tailored to your situation.
// // //           </p>
// // //         </div>

// // //         {/* Grid Layout */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

// // //           {/* LEFT — FORM */}
// // //           <motion.div
// // //             variants={fadeIn}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             className="bg-black p-10 rounded-xl border border-[#C9A24D]/30 shadow-lg"
// // //           >
// // //             <form onSubmit={handleSubmit} className="space-y-5">

// // //               <input
// // //                 type="text"
// // //                 name="name"
// // //                 placeholder="Full Name"
// // //                 value={formData.name}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A24D]"
// // //               />

// // //               <input
// // //                 type="tel"
// // //                 name="phone"
// // //                 placeholder="Phone Number"
// // //                 value={formData.phone}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A24D]"
// // //               />

// // //               <input
// // //                 type="email"
// // //                 name="email"
// // //                 placeholder="Email Address"
// // //                 value={formData.email}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A24D]"
// // //               />

// // //               <select
// // //                 name="practiceArea"
// // //                 value={formData.practiceArea}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
// // //               >
// // //                 <option value="">Select Practice Area</option>
// // //                 {practiceAreas.map((area, index) => (
// // //                   <option key={index} value={area}>
// // //                     {area}
// // //                   </option>
// // //                 ))}
// // //               </select>

// // //               <textarea
// // //                 name="message"
// // //                 rows="4"
// // //                 placeholder="Your Message"
// // //                 value={formData.message}
// // //                 onChange={handleChange}
// // //                 required
// // //                 className="w-full px-4 py-3 bg-black border border-gray-800 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A24D]"
// // //               />

// // //               <button
// // //                 type="submit"
// // //                 className="w-full py-3 rounded-md font-semibold text-black bg-[#C9A24D] hover:bg-[#B08D3C] transition"
// // //               >
// // //                 Request Consultation
// // //               </button>

// // //             </form>
// // //           </motion.div>

// // //           {/* RIGHT — OFFICE DETAILS */}
// // //           <motion.div
// // //             variants={fadeIn}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true }}
// // //             className="space-y-6"
// // //           >
// // //             <h3 className="text-3xl font-semibold text-black">
// // //               Office Details
// // //             </h3>

// // //             <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
// // //               <p>
// // //                 <span className="font-semibold text-black">Office Name:</span><br />
// // //                 S Jain & Attorneys
// // //               </p>

// // //               <p>
// // //                 <span className="font-semibold text-black">Address:</span><br />
// // //                 #42, 2nd Floor,<br />
// // //                 MG Road,<br />
// // //                 Bengaluru, Karnataka 560001,<br />
// // //                 India
// // //               </p>

// // //               <p>
// // //                 <span className="font-semibold text-black">Phone:</span><br />
// // //                 +91 xxxxx xxxxx
// // //               </p>

// // //               <p>
// // //                 <span className="font-semibold text-black">Email:</span><br />
// // //                 contact@sjainattorneys.com
// // //               </p>

// // //               <p>
// // //                 <span className="font-semibold text-black">Working Hours:</span><br />
// // //                 Monday – Saturday<br />
// // //                 9:30 AM – 7:00 PM
// // //               </p>
// // //             </div>
// // //           </motion.div>

// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // export default function Consultation() {
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
// //     // Here you can add API call or form submission logic
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
// //     hidden: { opacity: 0, y: 40 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// //   };

// //   return (
// //     <section className="bg-gray-50 py-20 px-6">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Section Heading */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-bold text-[#C9A24D]">
// //             Request a Consultation
// //           </h2>
// //           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
// //             Speak with experienced legal professionals and get expert advice tailored to your situation.
// //           </p>
// //         </div>

// //         {/* Grid Layout */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

// //           {/* LEFT — FORM */}
// //           <motion.div
// //             variants={fadeIn}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="bg-white p-10 rounded-2xl border border-gray-200 shadow-xl"
// //           >
// //             <form onSubmit={handleSubmit} className="space-y-5">
// //               <input
// //                 type="text"
// //                 name="name"
// //                 placeholder="Full Name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition"
// //               />

// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="Phone Number"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition"
// //               />

// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Email Address"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition"
// //               />

// //               <select
// //                 name="practiceArea"
// //                 value={formData.practiceArea}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition"
// //               >
// //                 <option value="">Select Practice Area</option>
// //                 {practiceAreas.map((area, idx) => (
// //                   <option key={idx} value={area}>{area}</option>
// //                 ))}
// //               </select>

// //               <textarea
// //                 name="message"
// //                 rows="5"
// //                 placeholder="Your Message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 required
// //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:border-transparent transition"
// //               />

// //               <button
// //                 type="submit"
// //                 className="w-full py-3 rounded-lg font-semibold text-white bg-[#C9A24D] hover:bg-[#B08D3C] transition transform hover:-translate-y-1 shadow-lg"
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
// //             className="bg-white p-10 rounded-2xl border border-gray-200 shadow-xl space-y-6"
// //           >
// //             <h3 className="text-3xl font-bold text-gray-900">Office Details</h3>
// //             <div className="space-y-4 text-gray-700 text-lg">
// //               <p>
// //                 <span className="font-semibold text-gray-900">Office Name:</span> S Jain & Attorneys
// //               </p>
// //               <p>
// //                 <span className="font-semibold text-gray-900">Address:</span><br />
// //                 #42, 2nd Floor,<br />
// //                 MG Road,<br />
// //                 Bengaluru, Karnataka 560001,<br />
// //                 India
// //               </p>
// //               <p>
// //                 <span className="font-semibold text-gray-900">Phone:</span> +91 xxxxx xxxxx
// //               </p>
// //               <p>
// //                 <span className="font-semibold text-gray-900">Email:</span> contact@sjainattorneys.com
// //               </p>
// //               <p>
// //                 <span className="font-semibold text-gray-900">Working Hours:</span><br />
// //                 Monday – Saturday, 9:30 AM – 7:00 PM
// //               </p>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// // "use client";

// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // export default function Consultation() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     phone: "",
// //     email: "",
// //     practiceArea: "",
// //     message: "",
// //   });

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log(formData);
// //     // Add API call or form submission here
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
// //     hidden: { opacity: 0, y: 30 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// //   };

// //   return (
// //     <section className="bg-black py-20 px-6">
// //       <div className="max-w-7xl mx-auto">

// //         {/* Section Heading */}
// //         <motion.div
// //           variants={fadeIn}
// //           initial="hidden"
// //           whileInView="visible"
// //           viewport={{ once: true }}
// //           className="text-center mb-16"
// //         >
// //           <h2 className="text-4xl md:text-5xl font-extrabold text-[#C9A24D]">
// //             Schedule Your Consultation
// //           </h2>
// //           <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
// //             Get in touch with our experienced legal professionals for personalized advice.
// //           </p>
// //         </motion.div>

// //         {/* Grid Layout */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

// //           {/* LEFT — FORM */}
// //           <motion.div
// //             variants={fadeIn}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true }}
// //             className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-[#C9A24D]/30 shadow-2xl"
// //           >
// //             <form onSubmit={handleSubmit} className="space-y-6">

// //               {/* Floating input */}
// //               {["name", "phone", "email"].map((field, idx) => (
// //                 <div key={idx} className="relative">
// //                   <input
// //                     type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
// //                     name={field}
// //                     value={formData[field]}
// //                     onChange={handleChange}
// //                     required
// //                     placeholder=" "
// //                     className="peer w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
// //                   />
// //                   <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-[#C9A24D] peer-focus:text-sm">
// //                     {field === "name" ? "Full Name" : field === "phone" ? "Phone Number" : "Email Address"}
// //                   </label>
// //                 </div>
// //               ))}

// //               {/* Practice area */}
// //               <div className="relative">
// //                 <select
// //                   name="practiceArea"
// //                   value={formData.practiceArea}
// //                   onChange={handleChange}
// //                   required
// //                   className="peer w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
// //                 >
// //                   <option value="">Select Practice Area</option>
// //                   {practiceAreas.map((area, idx) => (
// //                     <option key={idx} value={area}>{area}</option>
// //                   ))}
// //                 </select>
// //                 <label className="absolute left-4 -top-2 text-gray-400 text-sm bg-black px-1">Practice Area</label>
// //               </div>

// //               {/* Message */}
// //               <div className="relative">
// //                 <textarea
// //                   name="message"
// //                   rows="4"
// //                   value={formData.message}
// //                   onChange={handleChange}
// //                   required
// //                   placeholder=" "
// //                   className="peer w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
// //                 />
// //                 <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-[#C9A24D] peer-focus:text-sm">
// //                   Your Message
// //                 </label>
// //               </div>

// //               {/* Submit Button */}
// //               <button
// //                 type="submit"
// //                 className="w-full py-3 font-bold text-black bg-gradient-to-r from-[#C9A24D] to-[#E6C676] rounded-2xl shadow-lg hover:scale-105 transition transform"
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
// //             className="space-y-6"
// //           >
// //             <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-[#C9A24D]/30 shadow-xl">
// //               <h3 className="text-3xl font-bold text-[#C9A24D]">Office Details</h3>
// //               <div className="mt-4 text-gray-200 space-y-3 text-lg">
// //                 <p><span className="font-semibold">Office Name:</span> S Jain & Attorneys</p>
// //                 <p><span className="font-semibold">Address:</span> #42, 2nd Floor, MG Road, Bengaluru, Karnataka 560001, India</p>
// //                 <p><span className="font-semibold">Phone:</span> +91 xxxxx xxxxx</p>
// //                 <p><span className="font-semibold">Email:</span> contact@sjainattorneys.com</p>
// //                 <p><span className="font-semibold">Working Hours:</span> Mon – Sat, 9:30 AM – 7:00 PM</p>
// //               </div>
// //             </div>
// //           </motion.div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { useState } from "react";

// export default function Consultation() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     city: "",
//     legalConcern: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const handleReset = () => {
//     setFormData({ name: "", email: "", phone: "", city: "", legalConcern: "" });
//     setSubmitted(false);
//   };

//   return (
//     <section className="bg-black py-20 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#C9A24D]">
//             Schedule Your Consultation
//           </h2>
//           <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
//             Get in touch with our experienced legal professionals for personalized advice.
//           </p>
//         </div>

//         {/* Grid Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

//           {/* LEFT — FORM / SUCCESS */}
//           <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-[#C9A24D]/30 shadow-2xl">

//             {submitted ? (
//               /* SUCCESS STATE */
//               <div className="flex flex-col items-center text-center gap-6 py-4">
//                 <div className="w-20 h-20 rounded-full border-2 border-[#C9A24D] flex items-center justify-center shadow-[0_0_30px_rgba(201,162,77,0.3)]">
//                   <svg className="w-10 h-10 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-bold text-[#C9A24D] mb-2">Request Submitted!</h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     Thank you, <strong className="text-white">{formData.name}</strong>. We've received your request and will contact you within{" "}
//                     <strong className="text-[#C9A24D]">24 hours</strong>.
//                   </p>
//                 </div>

//                 <div className="w-full bg-black/50 border border-gray-800 rounded-2xl p-5 text-left space-y-3 text-sm">
//                   {[
//                     { label: "Name", value: formData.name },
//                     { label: "Email", value: formData.email },
//                     { label: "Phone", value: formData.phone },
//                     { label: "City", value: formData.city },
//                     { label: "Legal Concern", value: formData.legalConcern },
//                   ].map(({ label, value }) =>
//                     value ? (
//                       <p key={label}>
//                         <span className="text-gray-500">{label}: </span>
//                         <span className="text-white">{value}</span>
//                       </p>
//                     ) : null
//                   )}
//                 </div>

//                 <button
//                   onClick={handleReset}
//                   className="text-sm text-[#C9A24D] underline underline-offset-4 hover:text-white transition"
//                 >
//                   Submit another request
//                 </button>
//               </div>

//             ) : (
//               /* FORM STATE */
//               <form onSubmit={handleSubmit} className="space-y-5">

//                 {/* Name */}
//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="name" className="text-sm text-gray-300">
//                     Name <span className="text-[#C9A24D]">*</span>
//                   </label>
//                   <input
//                     id="name"
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder="Enter your full name"
//                     className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="email" className="text-sm text-gray-300">
//                     Email <span className="text-[#C9A24D]">*</span>
//                   </label>
//                   <input
//                     id="email"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="Enter your email address"
//                     className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="phone" className="text-sm text-gray-300">
//                     Phone Number <span className="text-[#C9A24D]">*</span>
//                   </label>
//                   <input
//                     id="phone"
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     placeholder="Enter your phone number"
//                     className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
//                   />
//                 </div>

//                 {/* City */}
//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="city" className="text-sm text-gray-300">
//                     City
//                   </label>
//                   <input
//                     id="city"
//                     type="text"
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     placeholder="Enter your city"
//                     className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
//                   />
//                 </div>

//                 {/* Legal Concern */}
//                 <div className="flex flex-col gap-1">
//                   <label htmlFor="legalConcern" className="text-sm text-gray-300">
//                     Legal Concern <span className="text-[#C9A24D]">*</span>
//                   </label>
//                   <textarea
//                     id="legalConcern"
//                     name="legalConcern"
//                     rows={4}
//                     value={formData.legalConcern}
//                     onChange={handleChange}
//                     required
//                     placeholder="Briefly describe your legal concern..."
//                     className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition resize-none"
//                   />
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="w-full py-3 font-bold text-black bg-gradient-to-r from-[#C9A24D] to-[#E6C676] rounded-2xl shadow-lg hover:opacity-90 transition mt-2"
//                 >
//                   Request Consultation
//                 </button>

//               </form>
//             )}
//           </div>

//           {/* RIGHT — OFFICE DETAILS */}
//           <div className="space-y-6">
//             <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-[#C9A24D]/30 shadow-xl">
//               <h3 className="text-3xl font-bold text-[#C9A24D]">Office Details</h3>
//               <div className="mt-4 text-gray-200 space-y-3 text-lg">
//                 <p><span className="font-semibold">Office Name:</span> S Jain & Attorneys</p>
//                 <p><span className="font-semibold">Address:</span> #42, 2nd Floor, MG Road, Bengaluru, Karnataka 560001, India</p>
//                 <p><span className="font-semibold">Phone:</span> +91 xxxxx xxxxx</p>
//                 <p><span className="font-semibold">Email:</span> contact@sjainattorneys.com</p>
//                 <p><span className="font-semibold">Working Hours:</span> Mon – Sat, 9:30 AM – 7:00 PM</p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    legalConcern: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", city: "", legalConcern: "" });
    setSubmitted(false);
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#C9A24D]">
            Schedule Your Consultation
          </h2>
          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Get in touch with our experienced legal professionals for personalized advice.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* LEFT — FORM / SUCCESS — min-h locks the card so it never jumps */}
          <div className="bg-white/5 backdrop-blur-lg p-10 rounded-3xl border border-[#C9A24D]/30 shadow-2xl min-h-[640px] flex flex-col justify-center">

            {submitted ? (
              /* SUCCESS STATE */
              <div className="flex flex-col items-center text-center gap-6 py-4">
                <div className="w-20 h-20 rounded-full border-2 border-[#C9A24D] flex items-center justify-center shadow-[0_0_30px_rgba(201,162,77,0.3)]">
                  <svg className="w-10 h-10 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#C9A24D] mb-2">Request Submitted!</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. We've received your request and will contact you within{" "}
                    <strong className="text-[#C9A24D]">24 hours</strong>.
                  </p>
                </div>

                <div className="w-full bg-black/50 border border-gray-800 rounded-2xl p-5 text-left space-y-3 text-sm">
                  {[
                    { label: "Name", value: formData.name },
                    { label: "Email", value: formData.email },
                    { label: "Phone", value: formData.phone },
                    { label: "City", value: formData.city },
                    { label: "Legal Concern", value: formData.legalConcern },
                  ].map(({ label, value }) =>
                    value ? (
                      <p key={label}>
                        <span className="text-gray-500">{label}: </span>
                        <span className="text-white">{value}</span>
                      </p>
                    ) : null
                  )}
                </div>

                <button
                  onClick={handleReset}
                  className="text-sm text-[#C9A24D] underline underline-offset-4 hover:text-white transition"
                >
                  Submit another request
                </button>
              </div>

            ) : (
              /* FORM STATE */
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-sm text-gray-300">
                    Name <span className="text-[#C9A24D]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-sm text-gray-300">
                    Email <span className="text-[#C9A24D]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-sm text-gray-300">
                    Phone Number <span className="text-[#C9A24D]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
                  />
                </div>

                {/* City */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="city" className="text-sm text-gray-300">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter your city"
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition"
                  />
                </div>

                {/* Legal Concern */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="legalConcern" className="text-sm text-gray-300">
                    Legal Concern <span className="text-[#C9A24D]">*</span>
                  </label>
                  <textarea
                    id="legalConcern"
                    name="legalConcern"
                    rows={4}
                    value={formData.legalConcern}
                    onChange={handleChange}
                    required
                    placeholder="Briefly describe your legal concern..."
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 font-bold text-black bg-gradient-to-r from-[#C9A24D] to-[#E6C676] rounded-2xl shadow-lg hover:opacity-90 transition mt-2"
                >
                  Request Consultation
                </button>

              </form>
            )}
          </div>

          {/* RIGHT — OFFICE DETAILS */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-[#C9A24D]/30 shadow-xl">
              <h3 className="text-3xl font-bold text-[#C9A24D]">Office Details</h3>
              <div className="mt-4 text-gray-200 space-y-3 text-lg">
                <p><span className="font-semibold">Office Name:</span> S Jain & Attorneys</p>
                <p><span className="font-semibold">Address:</span> #42, 2nd Floor, MG Road, Bengaluru, Karnataka 560001, India</p>
                <p><span className="font-semibold">Phone:</span> +91 xxxxx xxxxx</p>
                <p><span className="font-semibold">Email:</span> contact@sjainattorneys.com</p>
                <p><span className="font-semibold">Working Hours:</span> Mon – Sat, 9:30 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}