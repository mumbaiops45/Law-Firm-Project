// export const metadata = {
//   title: "Civil Lawyer in Bangalore | S Jain & Attorneys",
//   description:
//     "Experienced Civil Lawyer in Bangalore handling property disputes, recovery suits, injunction matters, partition cases, and strong civil litigation representation.",
//   alternates: {
//     canonical: "https://yourdomain.com/civil-lawyer-in-bangalore",
//   },
// };

// export default function Layout({ children }) {
//   return <>{children}</>;
// }

export const metadata = {
  title: "Civil Lawyer in Bangalore | S Jain & Attorneys",
  description:
    "Experienced Civil Lawyer in Bangalore handling property disputes, recovery suits, injunction matters, partition cases, and strong civil litigation representation.",
  keywords: [
    "Civil Lawyer in Bangalore",
    "Civil Litigation Lawyer Bangalore",
    "Property Dispute Lawyer Bangalore",
    "Recovery Suit Lawyer Bangalore",
    "Injunction Lawyer Bangalore",
    "Civil Litigation Firm Bangalore",
  ],
  alternates: {
    canonical: "https://yourdomain.com/civil-lawyer-in-bangalore",
  },
  openGraph: {
    title: "Civil Lawyer in Bangalore | S Jain & Attorneys",
    description:
      "Experienced Civil Lawyer in Bangalore handling property disputes, recovery suits, injunction matters, partition cases, and strong civil litigation representation.",
    url: "https://yourdomain.com/civil-lawyer-in-bangalore",
    siteName: "S Jain & Attorneys",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil Lawyer in Bangalore | S Jain & Attorneys",
    description:
      "Experienced Civil Lawyer in Bangalore handling property disputes, recovery suits, injunction matters, partition cases, and strong civil litigation representation.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}