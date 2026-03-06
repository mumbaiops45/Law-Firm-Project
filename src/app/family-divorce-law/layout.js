// export const metadata = {
//   title: "Divorce Lawyer in Bangalore | S Jain & Attorneys",
//   description: "Expert Family & Divorce Law services in Bangalore with experienced Divorce Lawyer and Family Court Lawyer support for custody, alimony, and matrimonial disputes.",
//   alternates: {
//     canonical: "https://yourdomain.com/family-divorce-law"
//   }
// };

// export default function Layout({ children }) {
//   return <>{children}</>;
// }


export const metadata = {
  title: "Divorce Lawyer in Bangalore | S Jain & Attorneys",
  description:
    "Expert Family & Divorce Law services in Bangalore with experienced Divorce Lawyer and Family Court Lawyer support for custody, alimony, and matrimonial disputes.",
  keywords: [
    "Family & Divorce Law Bangalore",
    "Divorce Lawyer in Bangalore",
    "Family Court Lawyer Bangalore",
    "Child Custody Lawyer Bangalore",
    "Alimony Lawyer Bangalore",
    "Matrimonial Dispute Lawyer Bangalore",
    "Mutual Consent Divorce Bangalore",
  ],
  alternates: {
    canonical: "https://yourdomain.com/family-divorce-law",
  },
  openGraph: {
    title: "Divorce Lawyer in Bangalore | S Jain & Attorneys",
    description:
      "Expert Family & Divorce Law services in Bangalore with experienced Divorce Lawyer and Family Court Lawyer support for custody, alimony, and matrimonial disputes.",
    url: "https://yourdomain.com/family-divorce-law",
    siteName: "S Jain & Attorneys",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divorce Lawyer in Bangalore | S Jain & Attorneys",
    description:
      "Expert Family & Divorce Law services in Bangalore with experienced Divorce Lawyer and Family Court Lawyer support for custody, alimony, and matrimonial disputes.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}