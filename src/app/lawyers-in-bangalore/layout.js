// export const metadata = {
//   title: "Lawyers in Bangalore | S Jain & Attorneys",
//   description:
//     "Meet experienced lawyers in Bangalore at S Jain & Attorneys providing strategic legal representation across corporate, civil, criminal, family and regulatory matters.",
//   alternates: {
//     canonical: "https://yourdomain.com/lawyers-in-bangalore",
//   },
// };

// export default function LawyersLayout({ children }) {
//   return <>{children}</>;
// }

// ─── app/lawyers-in-bangalore/layout.js ──────────────────────────────────────

export const metadata = {
  title: "Lawyers in Bangalore | S Jain & Attorneys",
  description:
    "Meet experienced lawyers in Bangalore at S Jain & Attorneys providing strategic legal representation across corporate, civil, criminal, family and regulatory matters.",
  keywords: [
    "Lawyers in Bangalore",
    "Best Lawyers in Bangalore",
    "Experienced Advocates in Bangalore",
    "Top Legal Consultants in Bangalore",
    "Law Firm Bangalore",
  ],
  alternates: {
    canonical: "https://www.sjainattorneys.com/lawyers-in-bangalore",
  },
  openGraph: {
    title: "Lawyers in Bangalore | S Jain & Attorneys",
    description:
      "Meet experienced lawyers in Bangalore at S Jain & Attorneys providing strategic legal representation across corporate, civil, criminal, family and regulatory matters.",
    url: "https://www.sjainattorneys.com/lawyers-in-bangalore",
    siteName: "S Jain & Attorneys",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lawyers in Bangalore | S Jain & Attorneys",
    description:
      "Top lawyers in Bangalore providing expert legal solutions across corporate, litigation, family, criminal and NRI matters.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LawyersLayout({ children }) {
  return <>{children}</>;
}