// export const metadata = {
//   title: "Successful Court Cases in Bangalore | S Jain & Attorneys",
//   description:
//     "Explore successful court case results in Bangalore by S Jain & Attorneys. Trusted lawyers delivering strategic, result-driven legal representation across practice areas.",
//   alternates: {
//     canonical:
//       "https://yourdomain.com/successful-case-results-in-bangalore",
//   },
// };

// export default function Layout({ children }) {
//   return <>{children}</>;
// }


export const metadata = {
  title: "Successful Court Cases in Bangalore | S Jain & Attorneys",
  description:
    "Explore successful court case results in Bangalore by S Jain & Attorneys. Trusted lawyers delivering strategic, result-driven legal representation across practice areas.",
  keywords: [
    "Successful Court Cases in Bangalore",
    "Court Case Results Bangalore",
    "Lawyer Case Results Bangalore",
    "Law Firm Success Stories Bangalore",
    "Successful Lawyer in Bangalore",
    "Litigation Lawyers in Bangalore",
  ],
  alternates: {
    canonical: "https://www.sjainattorneys.com/successful-case-results-in-bangalore",
  },
  openGraph: {
    title: "Successful Court Cases in Bangalore | S Jain & Attorneys",
    description:
      "Explore successful court case results in Bangalore by S Jain & Attorneys. Trusted lawyers delivering strategic, result-driven legal representation.",
    url: "https://www.sjainattorneys.com/successful-case-results-in-bangalore",
    siteName: "S Jain & Attorneys",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Successful Court Cases in Bangalore | S Jain & Attorneys",
    description:
      "Trusted lawyers in Bangalore with proven court case results across corporate, civil, criminal, family and property matters.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Layout({ children }) {
  return <>{children}</>;
}