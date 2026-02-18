


// import Link from "next/link";

// export default function page() {
//   return (
//     <section className="min-h-screen bg-[#F9F9F9]">

//       <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16">

//         <h1 className="text-4xl font-semibold mb-10">
//           Our Services
//         </h1>
  
//         <div className="grid md:grid-cols-2 gap-6">

//           <Link href="/services/corporate-law"
//             className="p-6 bg-white rounded-lg border hover:border-[#C9A24D]">
//             Corporate Law
//           </Link>

//         </div>

//       </div>

//     </section>
//   );
// }


"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function page() {

  return (
    <>
      <Navbar />

      <main className="bg-white font-[Poppins]">

        {/* ================= HERO ================= */}

        <section className="bg-[#0B0F14] pt-32 pb-16">

          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

            <p className="text-gray-400 text-sm mb-4">
              Home <span className="mx-2">›</span>
              <span className="text-[#C9A24D]">Services</span>
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white">
              Our Services
            </h1>

            <div className="w-20 h-[2px] bg-[#C9A24D] mt-6"></div>

          </div>

        </section>


        {/* ================= SERVICES GRID ================= */}

        <section className="py-20">

          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Corporate Law Card */}
              <Link
                href="/services/corporate-law"
                className="
                  group
                  bg-white
                  p-8
                  rounded-xl
                  border
                  border-gray-200
                  hover:border-[#C9A24D]
                  hover:shadow-lg
                  transition
                  duration-300
                "
              >

                <h3 className="
                  text-xl
                  font-semibold
                  text-black
                  mb-3
                  group-hover:text-[#C9A24D]
                  transition
                ">
                  Corporate Law
                </h3>

                <div className="w-10 h-[2px] bg-[#C9A24D] mb-4"></div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Corporate structuring, mergers, acquisitions,
                  compliance, and commercial legal advisory services.
                </p>

              </Link>


              {/* Add more services like this */}

              <Link
                href="/services/litigation"
                className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-[#C9A24D] hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-[#C9A24D] transition">
                  Litigation
                </h3>

                <div className="w-10 h-[2px] bg-[#C9A24D] mb-4"></div>

                <p className="text-gray-600 text-sm">
                  Legal representation and dispute resolution services.
                </p>
              </Link>


              <Link
                href="/services/property-law"
                className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-[#C9A24D] hover:shadow-lg transition duration-300"
              >
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-[#C9A24D] transition">
                  Property Law
                </h3>

                <div className="w-10 h-[2px] bg-[#C9A24D] mb-4"></div>

                <p className="text-gray-600 text-sm">
                  Property transactions, verification, and legal advisory.
                </p>
              </Link>


            </div>

          </div>

        </section>

      </main>

      <Footer />

    </>
  );
}
