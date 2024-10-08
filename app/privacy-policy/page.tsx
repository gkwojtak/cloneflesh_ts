import Link from "next/link";
import {getSEOTags} from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR PRIVACY POLICY — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple privacy policy for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Purpose of Data Collection: Order processing
// - Data sharing: we do not share the data with any other parties
// - Children's Privacy: we do not collect any data from children
// - Updates to the Privacy Policy: users will be updated by email
// - Contact information: marc@shipfa.st

// Please write a simple privacy policy for my site. Add the current date.  Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Privacy Policy | ${config.appName}`,
  canonicalUrlRelative: "/privacy-policy",
});

const PrivacyPolicy = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>{" "}
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: 08.10.2024

CloneFlesh is committed to protecting your privacy and ensuring your data security in compliance with the General Data Protection Regulation (GDPR) and other applicable EU regulations. By using our website, https://cloneflesh.com, you agree to the collection and use of information in accordance with this Privacy Policy. For inquiries, contact us at contact@cloneflesh.com.

1. Information We Collect

Personal Data
We collect the following personal information from users:

Name
Email address
Shipping address
Payment information
Non-Personal Data
We collect non-personal data, including cookies and usage data, to enhance your browsing experience and analyze website performance.

2. Purpose of Data Collection

We collect and process personal data to:

Process and fulfill orders
Communicate with you regarding order status and customer support
Provide a secure and personalized experience
3. Legal Basis for Processing Personal Data

Our legal basis for collecting and processing personal data under GDPR includes:

Consent: When you voluntarily provide information.
Contractual Necessity: For order processing and delivery.
Legitimate Interest: For security, fraud prevention, and improving our services.
4. Data Sharing and Security

CloneFlesh does not share your personal data with third parties, except as required by law or with third-party service providers essential for order processing (e.g., payment processors). We implement technical and organizational measures to secure your data against unauthorized access and processing.

5. Cookies and Non-Personal Data

CloneFlesh uses cookies to enhance user experience and analyze website performance. You may manage cookie preferences through your browser settings.

6. Your Rights Under GDPR

As a data subject, you have the right to:

Access your personal data
Request correction or deletion of your data
Object to or restrict data processing
Withdraw consent at any time, where consent is the legal basis for processing
Lodge a complaint with a supervisory authority in the EU if you believe your data protection rights are violated
To exercise these rights, contact us at contact@cloneflesh.com.

7. Children's Privacy

CloneFlesh does not knowingly collect or process any data from individuals under 18 years old. Our products are intended exclusively for adults.

8. Updates to this Privacy Policy

We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes via email. Please review this policy periodically to stay informed.

9. Data Retention

We retain personal data only as long as necessary for order fulfillment, legal compliance, and legitimate business purposes. Non-personal data collected via cookies is retained for analytical purposes only.

10. Governing Law

This Privacy Policy is governed by the laws of Poland and relevant EU regulations. Any disputes shall be handled in the jurisdiction of Poland.

11. Contact Us

For questions regarding this Privacy Policy, please reach out to us at contact@cloneflesh.com.`}
        </pre>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
