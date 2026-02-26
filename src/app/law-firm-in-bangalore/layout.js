// /* ================= SEO META ================= */

// export const metadata = {
//   title: "Law Firm in Bangalore | S Jain & Attorneys",
//   description:
//     "S Jain & Attorneys is a leading law firm in Bangalore offering corporate, civil, criminal, family, property & advisory legal services with integrity and experience.",

//   keywords: [
//     "Law Firm in Bangalore",
//     "Corporate Lawyer in Bangalore",
//     "Civil Lawyer Bangalore",
//     "Criminal Lawyer Bangalore",
//     "Property Lawyer Bangalore",
//     "High Court Lawyer Bangalore"
//   ],

//   alternates: {
//     canonical: "https://yourdomain.com/law-firm-in-bangalore",
//   },

//   openGraph: {
//     title: "Law Firm in Bangalore | S Jain & Attorneys",
//     description:
//       "Leading law firm in Bangalore providing corporate, civil, criminal, property & advisory legal services with integrity and strategic expertise.",
//     url: "https://yourdomain.com/law-firm-in-bangalore",
//     siteName: "S Jain & Attorneys",
//     type: "website",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };

// /* ================= LAYOUT ================= */

// export default function Page({ children }) {
//   return <>{children}</>;
// }

export const metadata = {
  title: "Law Firm in Bangalore | S Jain & Attorneys",
  description:
    "S Jain & Attorneys is a leading law firm in Bangalore offering corporate, civil, criminal, family, property & advisory legal services with integrity and experience.",
  keywords: [
    "Law Firm in Bangalore",
    "Corporate Lawyer in Bangalore",
    "Civil Lawyer Bangalore",
    "Criminal Lawyer Bangalore",
    "Property Lawyer Bangalore",
    "High Court Lawyer Bangalore"
  ],
  alternates: {
    canonical: "https://yourdomain.com/law-firm-in-bangalore",
  },
  openGraph: {
    title: "Law Firm in Bangalore | S Jain & Attorneys",
    description:
      "Leading law firm in Bangalore providing corporate, civil, criminal, property & advisory legal services with integrity and strategic expertise.",
    url: "https://yourdomain.com/law-firm-in-bangalore",
    siteName: "S Jain & Attorneys",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LawFirmLayout({ children }) {
  return <>{children}</>;
}