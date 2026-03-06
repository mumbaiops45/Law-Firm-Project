// /* ================= SEO META ================= */

// export const metadata = {
//   title: "Legal Advisor in Bangalore | S Jain & Attorneys",
//   description:
//     "Trusted Legal Advisor in Bangalore delivering corporate advisory, regulatory compliance, contract drafting, and risk mitigation solutions for businesses. Consult today.",
//   keywords:
//     "Legal Advisor in Bangalore, Corporate Compliance Lawyer, Regulatory Compliance Lawyer, Business Legal Advisor Bangalore",
// };

// export default function Layout({ children }) {
//   return children;
// }


export const metadata = {
  title: "Legal Advisor in Bangalore | S Jain & Attorneys",
  description:
    "Trusted Legal Advisor in Bangalore delivering corporate advisory, regulatory compliance, contract drafting, and risk mitigation solutions for businesses. Consult today.",
  keywords: [
    "Legal Advisor in Bangalore",
    "Corporate Compliance Lawyer Bangalore",
    "Regulatory Compliance Lawyer Bangalore",
    "Business Legal Advisor Bangalore",
    "Legal Compliance Consultant Bangalore",
    "Corporate Governance Lawyer Bangalore",
    "Legal Retainer Services Bangalore",
  ],
  alternates: {
    canonical: "https://yourdomain.com/legal-advisor-in-bangalore",
  },
  openGraph: {
    title: "Legal Advisor in Bangalore | S Jain & Attorneys",
    description:
      "Trusted Legal Advisor in Bangalore delivering corporate advisory, regulatory compliance, contract drafting, and risk mitigation solutions for businesses. Consult today.",
    url: "https://yourdomain.com/legal-advisor-in-bangalore",
    siteName: "S Jain & Attorneys",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Advisor in Bangalore | S Jain & Attorneys",
    description:
      "Trusted Legal Advisor in Bangalore delivering corporate advisory, regulatory compliance, contract drafting, and risk mitigation solutions for businesses. Consult today.",
  },
  robots: { index: true, follow: true },
};

export default function Layout({ children }) {
  return <>{children}</>;
}