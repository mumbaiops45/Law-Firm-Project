// "use client";

// import { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// export default function FAQsSection() {
//   const faqs = [
//     {
//       question: "When should I consult a corporate lawyer?",
//       answer:
//         "You should consult a corporate lawyer before entering contracts, mergers, or business structuring to avoid legal complications.",
//     },
//     {
//       question: "Do you handle litigation?",
//       answer:
//         "Yes, our team handles civil, corporate, and criminal litigation with a client-first approach.",
//     },
//     {
//       question: "Is my information confidential?",
//       answer:
//         "Absolutely. We ensure complete confidentiality and secure handling of all client information.",
//     },
//     {
//       question: "What is the typical process for legal consultation?",
//       answer:
//         "We begin with an initial consultation, followed by assessment, strategy development, and execution.",
//     },
//     {
//       question: "Can NRIs access your services?",
//       answer:
//         "Yes, we provide India-focused legal services for NRIs, including property, corporate, and family law matters.",
//     },
//   ];

//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <section className="py-20 px-6 bg-[#F5F5F5] max-w-7xl mx-auto space-y-12 mt-5">
//       {/* Section Title */}
//       <h2 className="text-3xl font-serif font-semibold text-[#111111] text-center mb-2">
//         Frequently Asked Questions
//       </h2>
//       <div className="w-24 h-0.5 bg-[#C9A24D] mx-auto mb-12"></div>

//       {/* Accordion */}
//       <div className="space-y-2">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="bg-white border border-[#C9A24D] rounded-md shadow-sm overflow-hidden"
//           >
//             <button
//               onClick={() => toggleAccordion(index)}
//               className="w-full flex justify-between items-center px-6 py-4 text-left text-[#111111] font-medium hover:bg-[#F9F9F9] transition"
//             >
//               {faq.question}
//               {activeIndex === index ? (
//                 <FaChevronUp className="text-[#C9A24D]" />
//               ) : (
//                 <FaChevronDown className="text-[#C9A24D]" />
//               )}
//             </button>
//             <div
//               className={`px-6 pb-4 text-gray-700 transition-max-height duration-500 ease-in-out overflow-hidden ${
//                 activeIndex === index ? "max-h-96 pt-2" : "max-h-0"
//               }`}
//             >
//               {faq.answer}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Call to Action */}
//       <div className="mt-16 bg-[#111111] text-white rounded-lg p-10 text-center space-y-4">
//         <h3 className="text-2xl font-semibold">
//           Need Legal Assistance in Your Area of Concern?
//         </h3>
//         <p className="text-gray-200">
//           Schedule a confidential consultation with our legal team today.
//         </p>
//         <button className="mt-4 px-8 py-3 bg-[#C9A24D] text-[#111111] font-semibold rounded-md hover:bg-[#B08D3C] transition">
//           Request Consultation
//         </button>
//       </div>
//     </section>
//   );
// }


// "use client";

// import { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// export default function FAQsSection({ serviceName = "Corporate Law" }) {

//   // ================= FAQs =================

//   const faqs = [
//     {
//       question: "When should I consult a corporate lawyer?",
//       answer:
//         "You should consult a corporate lawyer before entering into contracts, business structuring, mergers, or regulatory matters to ensure compliance and prevent future legal risks.",
//     },
//     {
//       question: "Do you handle litigation?",
//       answer:
//         "Yes, we provide representation in civil, corporate, and commercial litigation, ensuring professional handling and protection of your legal interests.",
//     },
//     {
//       question: "Is my information confidential?",
//       answer:
//         "Absolutely. All client information and discussions are handled with strict confidentiality and in accordance with professional legal standards.",
//     },
//     {
//       question: "What is the typical process for legal consultation?",
//       answer:
//         "Our process includes an initial consultation, detailed case assessment, legal strategy planning, and professional execution or representation as required.",
//     },
//     {
//       question: "Can NRIs access your services?",
//       answer:
//         "Yes, we provide India-focused legal services for NRIs, including corporate, property, compliance, and advisory matters.",
//     },
//   ];


//   // ================= Accordion State =================

//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };


//   return (

//     // <section className="bg-[#F5F5F5] py-20 px-6">
//     <section
//   className="
//     bg-[#F5F5F5]
//     py-16 sm:py-20 md:py-24 lg:py-28
//     px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
//   "
// >


//       <div className="max-w-4xl mx-auto">


//         {/* ================= Section Title ================= */}

//         <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#111111] text-center mb-3">
//           Frequently Asked Questions
//         </h2>

//         <div className="w-20 h-2px bg-[#C9A24D] mx-auto mb-12"></div>



//         {/* ================= Accordion ================= */}

//         <div className="space-y-4">

//           {faqs.map((faq, index) => (

//             <div
//               key={index}
//               className="
//                 bg-white
//                 border border-gray-200
//                 rounded-md
//                 shadow-sm
//                 transition
//               "
//             >

//               {/* Question */}

//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="
//                   w-full
//                   flex
//                   justify-between
//                   items-center
//                   px-6
//                   py-5
//                   text-left
//                   font-medium
//                   text-[#111111]
//                   hover:bg-gray-50
//                   transition
//                 "
//               >

//                 <span>{faq.question}</span>

//                 {activeIndex === index ? (
//                   <FaChevronUp className="text-[#C9A24D]" />
//                 ) : (
//                   <FaChevronDown className="text-[#C9A24D]" />
//                 )}

//               </button>


//               {/* Answer */}

//               <div
//                 className={`
//                   overflow-hidden
//                   transition-all
//                   duration-300
//                   ${activeIndex === index
//                     ? "max-h-96 opacity-100 pb-5 px-6"
//                     : "max-h-0 opacity-0 px-6"}
//                 `}
//               >

//                 <p className="text-gray-700 leading-relaxed">
//                   {faq.answer}
//                 </p>

//               </div>

//             </div>

//           ))}

//         </div>



//         {/* ================= CTA Section ================= */}

//         <div className="
//           mt-16
//           bg-[#111111]
//           text-white
//           rounded-lg
//           p-10
//           text-center
//         ">

//           {/* Required Dynamic Headline */}

//           <h3 className="text-2xl md:text-3xl font-semibold mb-3">
//             Need Legal Assistance in {serviceName}?
//           </h3>


//           {/* Subtext */}

//           <p className="text-gray-300 mb-6">
//             Schedule a confidential consultation with our legal team.
//           </p>


//           {/* Gold CTA Button */}

//           <button
//             className="
//               px-8
//               py-3
//               bg-[#C9A24D]
//               text-[#111111]
//               font-semibold
//               rounded-md
//               hover:bg-[#B08D3C]
//               transition
//             "
//           >
//             Request Consultation
//           </button>

//         </div>


//       </div>

//     </section>

//   );

// }


// "use client";

// import { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// export default function FAQsSection({ serviceName = "Corporate Law" }) {

//   // ================= FAQs =================

//   const faqs = [
//     {
//       question: "When should I consult a corporate lawyer?",
//       answer:
//         "You should consult a corporate lawyer before entering into contracts, business structuring, mergers, or regulatory matters to ensure compliance and prevent future legal risks.",
//     },
//     {
//       question: "Do you handle litigation?",
//       answer:
//         "Yes, we provide representation in civil, corporate, and commercial litigation, ensuring professional handling and protection of your legal interests.",
//     },
//     {
//       question: "Is my information confidential?",
//       answer:
//         "Absolutely. All client information and discussions are handled with strict confidentiality and in accordance with professional legal standards.",
//     },
//     {
//       question: "What is the typical process for legal consultation?",
//       answer:
//         "Our process includes an initial consultation, detailed case assessment, legal strategy planning, and professional execution or representation as required.",
//     },
//     {
//       question: "Can NRIs access your services?",
//       answer:
//         "Yes, we provide India-focused legal services for NRIs, including corporate, property, compliance, and advisory matters.",
//     },
//   ];


//   // ================= Accordion State =================

//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };


//   return (

//     <section
//       className="
//         bg-[#F5F5F5]
//         py-16 sm:py-20 md:py-24 lg:py-28
//         px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20
//         font-sans
//       "
//     >

//       <div className="max-w-4xl mx-auto">

//         {/* ================= Section Title ================= */}

//         <h2 className="text-3xl md:text-4xl font-semibold text-[#111111] text-center mb-3">
//           Frequently Asked Questions
//         </h2>

//         <div className="w-20 h-[2px] bg-[#C9A24D] mx-auto mb-12"></div>


//         {/* ================= Accordion ================= */}

//         <div className="space-y-4">

//           {faqs.map((faq, index) => (

//             <div
//               key={index}
//               className="
//                 bg-white
//                 border border-gray-200
//                 rounded-md
//                 shadow-sm
//                 transition
//               "
//             >

//               {/* Question */}

//               <button
//                 onClick={() => toggleAccordion(index)}
//                 className="
//                   w-full
//                   flex
//                   justify-between
//                   items-center
//                   px-6
//                   py-5
//                   text-left
//                   font-medium
//                   text-[#111111]
//                   hover:bg-gray-50
//                   transition
//                 "
//               >

//                 <span>{faq.question}</span>

//                 {activeIndex === index ? (
//                   <FaChevronUp className="text-[#C9A24D]" />
//                 ) : (
//                   <FaChevronDown className="text-[#C9A24D]" />
//                 )}

//               </button>


//               {/* Answer */}

//               <div
//                 className={`
//                   overflow-hidden
//                   transition-all
//                   duration-300
//                   ${activeIndex === index
//                     ? "max-h-96 opacity-100 pb-5 px-6"
//                     : "max-h-0 opacity-0 px-6"}
//                 `}
//               >

//                 <p className="text-gray-700 leading-relaxed">
//                   {faq.answer}
//                 </p>

//               </div>

//             </div>

//           ))}

//         </div>



//         {/* ================= CTA Section ================= */}

//         <div className="
//           mt-16
//           bg-[#111111]
//           text-white
//           rounded-lg
//           p-10
//           text-center
//         ">

//           {/* Heading */}

//           <h3 className="text-2xl md:text-3xl font-semibold mb-3">
//             Need Legal Assistance in {serviceName}?
//           </h3>


//           {/* Text */}

//           <p className="text-gray-300 mb-6">
//             Schedule a confidential consultation with our legal team.
//           </p>


//           {/* Button */}

//           <button
//             className="
//               px-8
//               py-3
//               bg-[#C9A24D]
//               text-[#111111]
//               font-semibold
//               rounded-md
//               hover:bg-[#B08D3C]
//               transition
//             "
//           >
//             Request Consultation
//           </button>

//         </div>


//       </div>

//     </section>

//   );

// }


"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function FAQsSection({ serviceName = "Corporate Law" }) {

  const faqs = [
    {
      question: "When should I consult a corporate lawyer?",
      answer:
        "You should consult a corporate lawyer before entering into contracts, business structuring, mergers, or regulatory matters to ensure compliance and prevent future legal risks.",
    },
    {
      question: "Do you handle litigation?",
      answer:
        "Yes, we provide representation in civil, corporate, and commercial litigation, ensuring professional handling and protection of your legal interests.",
    },
    {
      question: "Is my information confidential?",
      answer:
        "Absolutely. All client information and discussions are handled with strict confidentiality and in accordance with professional legal standards.",
    },
    {
      question: "What is the typical process for legal consultation?",
      answer:
        "Our process includes an initial consultation, detailed case assessment, legal strategy planning, and professional execution or representation as required.",
    },
    {
      question: "Can NRIs access your services?",
      answer:
        "Yes, we provide India-focused legal services for NRIs, including corporate, property, compliance, and advisory matters.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  // ===== SAME GLOBAL STYLES =====

  const container =
    "max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 md:py-24 lg:py-28";

  const sectionTitle =
    "text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#111111] text-center";

  const underline =
    "w-24 h-[2px] bg-[#C9A24D] mx-auto mt-4 mb-14";


  return (

    <section className="bg-[#F5F5F5]">

      <div className={container}>

        {/* Section Title */}
        <div className="text-center">
          <h2 className={sectionTitle}>
            Frequently Asked Questions
          </h2>

          <div className={underline}></div>
        </div>


        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="
                bg-white
                border border-gray-200
                rounded-md
                shadow-sm
                transition
              "
            >

              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className="
                  w-full
                  flex
                  justify-between
                  items-center
                  px-6
                  py-5
                  text-left
                  font-medium
                  text-[#111111]
                  hover:bg-gray-50
                  transition
                "
              >

                <span className="text-base">
                  {faq.question}
                </span>

                {activeIndex === index ? (
                  <FaChevronUp className="text-[#C9A24D]" />
                ) : (
                  <FaChevronDown className="text-[#C9A24D]" />
                )}

              </button>


              {/* Answer */}
              <div
                className={`
                  overflow-hidden
                  transition-all duration-300
                  ${activeIndex === index
                    ? "max-h-96 opacity-100 pb-5 px-6"
                    : "max-h-0 opacity-0 px-6"}
                `}
              >

                <p className="text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </p>

              </div>

            </div>

          ))}

        </div>



        {/* CTA Section */}
        <div className="
          mt-20
          max-w-4xl
          mx-auto
          bg-[#111111]
          text-white
          rounded-lg
          p-10
          text-center
        ">

          <h3 className="text-2xl md:text-3xl font-semibold mb-3">
            Need Legal Assistance in {serviceName}?
          </h3>

          <p className="text-gray-300 mb-6 text-base">
            Schedule a confidential consultation with our legal team.
          </p>

          <button
            className="
              px-8
              py-3
              bg-[#C9A24D]
              text-[#111111]
              font-semibold
              rounded-md
              hover:bg-[#B08D3C]
              transition
            "
          >
            Request Consultation
          </button>

        </div>


      </div>

    </section>

  );
}
