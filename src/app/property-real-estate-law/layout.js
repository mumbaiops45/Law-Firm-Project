// export const metadata = {
//   title: "Property Lawyer in Bangalore | S Jain & Attorneys",
//   description:
//     "Trusted property and real estate legal services in Bangalore for transactions, disputes, due diligence, and documentation. Book a confidential consultation today.",
//   keywords: [
//     "Property & Real Estate Lawyer in Bangalore",
//     "Property Lawyer in Bangalore",
//     "Real Estate Lawyer Bangalore",
//     "Property Disputes Bangalore",
//   ],
//   alternates: {
//     canonical: "/property-real-estate-law",
//   },
// };

// export default function PropertyRealEstateLayout({ children }) {
//   return (
//     <>
//       {children}
//     </>
//   );
// }

export const metadata = {
  title: "Property Lawyer in Bangalore | S Jain & Attorneys",
  description:
    "Trusted property and real estate legal services in Bangalore for transactions, disputes, due diligence, and documentation. Book a confidential consultation today.",
  keywords: [
    "Property Lawyer in Bangalore",
    "Real Estate Lawyer Bangalore",
    "Property Due Diligence Bangalore",
    "Property Dispute Lawyer Bangalore",
    "Title Verification Lawyer Bangalore",
    "NRI Property Lawyer Bangalore",
    "Builder Dispute Lawyer Bangalore",
  ],
  alternates: {
    canonical: "https://yourdomain.com/property-real-estate-law",
  },
  openGraph: {
    title: "Property Lawyer in Bangalore | S Jain & Attorneys",
    description:
      "Trusted property and real estate legal services in Bangalore for transactions, disputes, due diligence, and documentation. Book a confidential consultation today.",
    url: "https://yourdomain.com/property-real-estate-law",
    siteName: "S Jain & Attorneys",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Property Lawyer in Bangalore | S Jain & Attorneys",
    description:
      "Trusted property and real estate legal services in Bangalore for transactions, disputes, due diligence, and documentation. Book a confidential consultation today.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}