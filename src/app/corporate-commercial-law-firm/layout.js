// export const metadata = {
//   title: "Corporate Lawyer in Bangalore | S Jain & Attorneys",
//   description: "Corporate & Commercial Law Firm in Bangalore offering corporate law services, commercial contract drafting, M&A advisory, and business legal compliance support.",
//   alternates: {
//     canonical:
//       "https://yourdomain.com/civil-lawyer-in-bangalore",
//   },
// };

// export default function Layout({ children }) {
//   return <>{children}</>;
// }


export const metadata = {
  title: "Corporate Lawyer in Bangalore | S Jain & Attorneys",
  description:
    "Corporate & Commercial Law Firm in Bangalore offering corporate law services, commercial contract drafting, M&A advisory, and business legal compliance support.",
  keywords: [
    "Corporate & Commercial Law Firm",
    "Corporate Lawyer in Bangalore",
    "Corporate Law Services Bangalore",
    "Business Legal Advisory Bangalore",
    "Commercial Contract Lawyer Bangalore",
    "M&A Advisory Bangalore",
    "Company Incorporation Bangalore",
    "Startup Legal Services Bangalore",
  ],
  alternates: {
    canonical: "https://yourdomain.com/corporate-commercial-law-firm",
  },
  openGraph: {
    title: "Corporate Lawyer in Bangalore | S Jain & Attorneys",
    description:
      "Corporate & Commercial Law Firm in Bangalore offering corporate law services, commercial contract drafting, M&A advisory, and business legal compliance support.",
    url: "https://yourdomain.com/corporate-commercial-law-firm",
    siteName: "S Jain & Attorneys",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Lawyer in Bangalore | S Jain & Attorneys",
    description:
      "Corporate & Commercial Law Firm in Bangalore offering corporate law services, commercial contract drafting, M&A advisory, and business legal compliance support.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}