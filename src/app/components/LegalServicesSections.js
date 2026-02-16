// "use client";

// import { 
//   FaFileContract, FaCheckCircle, FaUsers, FaBuilding, FaGlobe 
// } from "react-icons/fa";
// import { useEffect, useState } from "react";

// export default function LegalServicesSections() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     setVisible(true); // triggers animation on mount
//   }, []);

//   // Scope of Services
//   const scopeServices = [
//     "Company incorporation & structuring",
//     "Contracts & agreements",
//     "Regulatory compliance",
//     "Legal due diligence",
//     "Corporate advisory",
//   ];

//   // Our Legal Process
//   const processSteps = [
//     { title: "Initial Consultation", icon: <FaFileContract size={28} className="text-[#C9A24D]" /> },
//     { title: "Case Assessment", icon: <FaCheckCircle size={28} className="text-[#C9A24D]" /> },
//     { title: "Legal Strategy", icon: <FaFileContract size={28} className="text-[#C9A24D]" /> },
//     { title: "Execution & Representation", icon: <FaCheckCircle size={28} className="text-[#C9A24D]" /> },
//     { title: "Resolution / Closure", icon: <FaFileContract size={28} className="text-[#C9A24D]" /> },
//   ];

//   // Who This Service Is For
//   const beneficiaries = [
//     { name: "Individuals", icon: <FaUsers size={28} className="text-[#C9A24D]" /> },
//     { name: "Business Owners", icon: <FaBuilding size={28} className="text-[#C9A24D]" /> },
//     { name: "Corporates / Startups", icon: <FaFileContract size={28} className="text-[#C9A24D]" /> },
//     { name: "NRIs", icon: <FaGlobe size={28} className="text-[#C9A24D]" /> },
//   ];

//   const fadeUp = "transform transition duration-700 ease-in-out opacity-0 translate-y-8";
//   const fadeUpVisible = "opacity-100 translate-y-0";

//   return (
//     <div className="space-y-20 px-6 py-20 bg-[#111111] max-w-7xl mx-auto">

//       {/* Scope of Legal Services */}
//       <section className={`${visible ? fadeUpVisible : fadeUp}`}>
//         <h2 className="text-3xl font-serif font-semibold text-white mb-2 text-center">Scope of Services</h2>
//         <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto mb-12"></div>

//         <div className="grid md:grid-cols-2 gap-6">
//           {scopeServices.map((service, index) => (
//             <div key={index} className="flex items-start space-x-3 bg-white border border-[#C9A24D] rounded-md p-4 shadow-sm hover:shadow-lg transition transform duration-500 hover:-translate-y-1">
//               <FaCheckCircle className="text-[#C9A24D] mt-1" />
//               <p className="text-[#111111]">{service}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Our Legal Process */}
//       <section className={`${visible ? fadeUpVisible : fadeUp}`}>
//         <h2 className="text-3xl font-serif font-semibold text-white mb-2 text-center">Our Approach</h2>
//         <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto mb-12"></div>

//         <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-between">
//           {processSteps.map((step, index) => (
//             <div key={index} className="flex flex-col items-center bg-white border border-[#C9A24D] rounded-md p-6 shadow-sm hover:shadow-lg transition transform duration-500 hover:-translate-y-2">
//               <div className="mb-3">{step.icon}</div>
//               <h3 className="text-lg font-semibold text-[#111111] text-center">{step.title}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Who This Service Is For */}
//       <section className={`${visible ? fadeUpVisible : fadeUp}`}>
//         <h2 className="text-3xl font-serif font-semibold text-white mb-2 text-center">Who Can Benefit</h2>
//         <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto mb-12"></div>

//         <div className="grid md:grid-cols-4 gap-6">
//           {beneficiaries.map((b, index) => (
//             <div key={index} className="flex flex-col items-center bg-white border border-[#C9A24D] rounded-md p-6 shadow-sm hover:shadow-lg transition transform duration-500 hover:-translate-y-2">
//               <div className="mb-3">{b.icon}</div>
//               <h3 className="text-lg font-semibold text-[#111111] text-center">{b.name}</h3>
//             </div>
//           ))}
//         </div>
//       </section>

//     </div>
//   );
// }


"use client";

import {
  FaFileContract,
  FaCheckCircle,
  FaUsers,
  FaBuilding,
  FaGlobe,
  FaBalanceScale
} from "react-icons/fa";

import { useEffect, useState } from "react";

export default function LegalServicesSections() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  // ================= Scope of Services =================

  const scopeServices = [
    "Company incorporation & structuring",
    "Contracts & agreements",
    "Regulatory compliance",
    "Legal due diligence",
    "Corporate advisory",
  ];


  // ================= Our Legal Process =================

  const processSteps = [
    {
      title: "Initial Consultation",
      icon: <FaUsers size={26} className="text-[#C9A24D]" />,
    },
    {
      title: "Case Assessment",
      icon: <FaCheckCircle size={26} className="text-[#C9A24D]" />,
    },
    {
      title: "Legal Strategy",
      icon: <FaBalanceScale size={26} className="text-[#C9A24D]" />,
    },
    {
      title: "Execution & Representation",
      icon: <FaFileContract size={26} className="text-[#C9A24D]" />,
    },
    {
      title: "Resolution / Closure",
      icon: <FaCheckCircle size={26} className="text-[#C9A24D]" />,
    },
  ];


  // ================= Who Can Benefit =================

  const beneficiaries = [
    {
      name: "Individuals",
      icon: <FaUsers size={26} className="text-[#C9A24D]" />,
    },
    {
      name: "Business Owners",
      icon: <FaBuilding size={26} className="text-[#C9A24D]" />,
    },
    {
      name: "Corporates / Startups",
      icon: <FaFileContract size={26} className="text-[#C9A24D]" />,
    },
    {
      name: "NRIs",
      icon: <FaGlobe size={26} className="text-[#C9A24D]" />,
    },
  ];


  // ================= Animation =================

  const fadeBase =
    "transform transition-all duration-700 ease-out";

  const fadeHidden =
    "opacity-0 translate-y-10";

  const fadeVisible =
    "opacity-100 translate-y-0";


  return (

    <div className="bg-[#111111]">

  <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28 ">


        {/* ================= Scope of Services ================= */}

        <section className={`${fadeBase} ${visible ? fadeVisible : fadeHidden}`}>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white text-center mb-3">
            Scope of Services
          </h2>

          <div className="w-20 h-2px bg-[#C9A24D] mx-auto mb-12"></div>


          {/* 2 Column Checklist Layout */}

          <div className="grid md:grid-cols-2 gap-5">

            {scopeServices.map((service, index) => (

              <div
                key={index}
                className="
                  flex items-start gap-3
                  bg-white
                  border border-gray-200
                  rounded-md
                  p-5
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >

                <FaCheckCircle className="text-[#C9A24D] mt-1" />

                <p className="text-gray-800 text-base">
                  {service}
                </p>

              </div>

            ))}

          </div>

        </section>



        {/* ================= Our Legal Process ================= */}

        <section className={`${fadeBase} ${visible ? fadeVisible : fadeHidden}`}>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white text-center mb-3 mt-5">
            Our Approach
          </h2>

          <div className="w-20 h-2px bg-[#C9A24D] mx-auto mb-12"></div>


          {/* Horizontal Process Cards */}

          <div className="
            grid
            md:grid-cols-5
            gap-6
          ">

            {processSteps.map((step, index) => (

              <div
                key={index}
                className="
                  bg-white
                  border border-gray-200
                  rounded-md
                  p-6
                  text-center
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >

                <div className="flex justify-center mb-3">
                  {step.icon}
                </div>

                <h3 className="text-sm md:text-base font-semibold text-gray-800">
                  {step.title}
                </h3>

              </div>

            ))}

          </div>

        </section>



        {/* ================= Who Can Benefit ================= */}

        <section className={`${fadeBase} ${visible ? fadeVisible : fadeHidden}`}>

          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-white text-center mb-3 mt-5">
            Who Can Benefit
          </h2>

          <div className="w-20 h-2px bg-[#C9A24D] mx-auto mb-12"></div>


          {/* Boxed Cards */}

          <div className="grid md:grid-cols-4 gap-6">

            {beneficiaries.map((item, index) => (

              <div
                key={index}
                className="
                  bg-white
                  border border-gray-200
                  rounded-md
                  p-7
                  text-center
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >

                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>

                <h3 className="text-base font-semibold text-gray-800">
                  {item.name}
                </h3>

              </div>

            ))}

          </div>

        </section>


      </div>

    </div>

  );

}
