

// // // // import React from 'react'

// // // // const page = () => {
// // // //   return (
// // // //     <div>page</div>
// // // //   )
// // // // }

// // // // export default page

// // // "use client";


// // // import HeroSection from "./components/HeroSections";
// // // import PracticeAreas from "./components/PracticeAreas";
// // // import AboutFirm from "./components/AboutFirm";
// // // import WhyChooseUs from "./components/WhyChooseUs";
// // // import Testimonials from "./components/Testimonials";
// // // import Consultation from "./components/Consultation";
// // // import ServiceOverview from "./components/ServiceOverview";
// // // import LegalServicesSections from "./components/LegalServicesSections";
// // // import FAQsSection from "./components/FAQsSection";
// // // import Footer from "./components/Footer";

// // // export default function Index() {
// // //   return (
// // //     <main className="overflow-x-hidden">
// // //       <HeroSection />
// // //       <PracticeAreas />
// // //       <AboutFirm />
// // //       <WhyChooseUs />
// // //       <Testimonials/>
// // //       <Consultation/>
// // //       <ServiceOverview/>
// // //       <LegalServicesSections/>
// // //       <FAQsSection/>
// // //       <Footer/>
// // //     </main>
// // //   );
// // // }


// "use client";

// import HeroSection from "./components/HeroSections";
// import PracticeAreas from "./components/PracticeAreas";
// import AboutFirm from "./components/AboutFirm";
// import WhyChooseUs from "./components/WhyChooseUs";
// import Testimonials from "./components/Testimonials";
// import Consultation from "./components/Consultation";
// import ServiceOverview from "./components/ServiceOverview";
// import LegalServicesSections from "./components/LegalServicesSections";
// import FAQsSection from "./components/FAQsSection";
// import Footer from "./components/Footer";

// export default function Index() {
//   return (
//     <main className="overflow-x-hidden">

//       <section id="hero">
//         <HeroSection />
//       </section>
//       <section id="about">
//         <AboutFirm />
//       </section>
//       <ServiceOverview />

//       <section id="practice">
//         <PracticeAreas />
//       </section>



//       <section id="team">
//         <WhyChooseUs />
//       </section>
//       <LegalServicesSections />




//       <Testimonials />

//       <FAQsSection />
//       <section id="contact">
//         <Consultation />
//       </section>
//       <Footer />

//     </main>
//   );
// }


"use client";

import HeroSection from "./components/HeroSections";
import PracticeAreas from "./components/PracticeAreas";
import AboutFirm from "./components/AboutFirm";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Consultation from "./components/Consultation";
import ServiceOverview from "./components/ServiceOverview";
import LegalServicesSections from "./components/LegalServicesSections";
import FAQsSection from "./components/FAQsSection";
import Footer from "./components/Footer";
import CTASection from "./components/CTASection";
export default function Index() {
  return (
    <main className="overflow-x-hidden">

      <section id="/law-firm-in-bangalore">
        <HeroSection />
      </section>

      <section id="about">
        <AboutFirm />
      </section>

      <ServiceOverview />

      <section id="practice">
        <PracticeAreas />
      </section>

      <section id="team">
        <WhyChooseUs />
      </section>

      <LegalServicesSections />

      <Testimonials />
       <CTASection />

      <FAQsSection />

      <section id="legal-consultation-in-bangalore">
        <Consultation />
      </section>

      <Footer />

    </main>
  );
}