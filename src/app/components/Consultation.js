// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Consultation() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     practiceArea: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     // Integrate API here
//   };

//   const practiceAreas = [
//     "Corporate & Commercial Law",
//     "Civil Litigation",
//     "Criminal Defense & Prosecution",
//     "Family & Divorce Law",
//     "Property & Real Estate Law",
//     "Legal Advisory & Regulatory Compliance",
//     "NRI Legal Services",
//     "Cheque Bounce & Negotiable Instruments Cases",
//     "High Court & Supreme Court Practice",
//     "Consumer Protection Law",
//     "Mediation, Counselling & ADR",
//     "International Private Law",
//   ];

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
//   };

//   return (
//     <section className="py-20 px-6 bg-[#F5F5F5] text-[#111111]">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
//         {/* Left: Consultation Form */}
//         <motion.div
//           className="bg-[#0B1C2D] p-8 rounded-md shadow-lg"
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-6">
//             Request a Consultation
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border border-[#C9A24D] rounded-md bg-[#111111] text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
//               required
//             />

//             <input
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               placeholder="Phone Number"
//               className="w-full px-4 py-2 border border-[#C9A24D] rounded-md bg-[#111111] text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Email Address"
//               className="w-full px-4 py-2 border border-[#C9A24D] rounded-md bg-[#111111] text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
//               required
//             />

//             <select
//               name="practiceArea"
//               value={formData.practiceArea}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-[#C9A24D] rounded-md bg-[#111111] text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
//               required
//             >
//               <option value="">Select Practice Area</option>
//               {practiceAreas.map((area, index) => (
//                 <option key={index} value={area}>
//                   {area}
//                 </option>
//               ))}
//             </select>

//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               placeholder="Your Message"
//               rows={4}
//               className="w-full px-4 py-2 border border-[#C9A24D] rounded-md bg-[#111111] text-white focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
//               required
//             ></textarea>

//             <button
//               type="submit"
//               className="w-full px-6 py-3 bg-[#C9A24D] text-[#111111] font-semibold rounded-md hover:opacity-90 transition"
//             >
//               Request Consultation
//             </button>
//           </form>
//         </motion.div>

//         {/* Right: Office Details */}
//         <motion.div
//           className="space-y-6"
//           variants={fadeInUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-4">
//             Office Details
//           </h2>

//           <div className="text-[#111111] space-y-2">
//             <p>
//               <span className="font-semibold">Address:</span> 123 Legal Lane, Mumbai, Maharashtra, India
//             </p>
//             <p>
//               <span className="font-semibold">Phone:</span> +91 98765 43210
//             </p>
//             <p>
//               <span className="font-semibold">Email:</span> contact@sjainattorneys.com
//             </p>
//           </div>

//           {/* Google Map Placeholder */}
//           <div className="w-full h-64 bg-[#0B1C2D] rounded-md flex items-center justify-center text-gray-400">
//             Google Map Placeholder
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Consultation() {

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
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };


  return (
    <section className="py-20 px-6 bg-[#F5F5F5]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

        {/* LEFT — CONSULTATION FORM */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#0B1C2D] p-10 rounded-md shadow-md"
        >

          <h2 className="text-3xl font-serif font-semibold text-[#C9A24D] mb-8">
            Request a Consultation
          </h2>


          <form onSubmit={handleSubmit} className="space-y-5">


            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
            />


            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
            />


            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
            />


            {/* Practice Area */}
            <select
              name="practiceArea"
              value={formData.practiceArea}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
            >

              <option value="">Select Practice Area</option>

              {practiceAreas.map((area, index) => (
                <option key={index} value={area}>
                  {area}
                </option>
              ))}

            </select>


            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-[#111111] border border-gray-700 rounded-md text-white focus:outline-none focus:border-[#C9A24D]"
            ></textarea>



            {/* CTA */}
            <button
              type="submit"
              className="
                w-full
                bg-[#C9A24D]
                text-[#111111]
                font-semibold
                py-3
                rounded-md
                hover:opacity-90
                transition
              "
            >
              Request Consultation
            </button>


          </form>

        </motion.div>



        {/* RIGHT — OFFICE DETAILS */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <h2 className="text-3xl font-serif font-semibold text-[#0B1C2D] mb-6">
            Office Details
          </h2>


          <div className="space-y-3 text-gray-800 mb-8">

            <p>
              <span className="font-semibold">Address:</span><br />
              S Jain Attorneys<br />
              Mumbai, Maharashtra, India
            </p>


            <p>
              <span className="font-semibold">Phone:</span><br />
              +91 98765 43210
            </p>


            <p>
              <span className="font-semibold">Email:</span><br />
              contact@sjainattorneys.com
            </p>

          </div>



          {/* GOOGLE MAP EMBED */}
          <div className="w-full h-72 rounded-md overflow-hidden border border-gray-300">

            <iframe
              src="https://maps.google.com/maps?q=Mumbai%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

          </div>


        </motion.div>


      </div>

    </section>
  );

}

