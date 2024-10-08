import Link from "next/link";
import {getSEOTags} from "@/libs/seo";
import config from "@/config";

// CHATGPT PROMPT TO GENERATE YOUR TERMS & SERVICES — replace with your own data 👇

// 1. Go to https://chat.openai.com/
// 2. Copy paste bellow
// 3. Replace the data with your own (if needed)
// 4. Paste the answer from ChatGPT directly in the <pre> tag below

// You are an excellent lawyer.

// I need your help to write a simple Terms & Services for my website. Here is some context:
// - Website: https://shipfa.st
// - Name: ShipFast
// - Contact information: marc@shipfa.st
// - Description: A JavaScript code boilerplate to help entrepreneurs launch their startups faster
// - Ownership: when buying a package, users can download code to create apps. They own the code but they do not have the right to resell it. They can ask for a full refund within 7 day after the purchase.
// - User data collected: name, email and payment information
// - Non-personal data collection: web cookies
// - Link to privacy-policy: https://shipfa.st/privacy-policy
// - Governing Law: France
// - Updates to the Terms: users will be updated by email

// Please write a simple Terms & Services for my site. Add the current date. Do not add or explain your reasoning. Answer:

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
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
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold pb-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: 08.10.2024

Welcome to CloneFlesh! Please read these Terms of Service ("Terms") carefully before using our website, https://cloneflesh.com, operated by CloneFlesh ("we," "us," or "our"). By accessing or using CloneFlesh, you agree to be bound by these Terms. If you do not agree with any part of the Terms, please discontinue use of the website.

1. General Information

CloneFlesh provides unique, personalized products designed for influencers and their fans, offering a physical reflection of the influencer’s image for a personal connection. For questions or inquiries, please contact us at contact@cloneflesh.com.

2. User Data Collection

We collect personal data, including name, email, shipping address, and payment information, to process orders, fulfill shipments, and provide customer support. In compliance with the General Data Protection Regulation (GDPR), we ensure the lawful, transparent processing of all user data. Our Privacy Policy provides detailed information on how we process, store, and protect your data.

3. Intellectual Property & Ownership

All content on CloneFlesh, including text, images, trademarks, logos, and product designs, is the exclusive property of CloneFlesh and protected under intellectual property laws. You agree not to copy, distribute, modify, or exploit any content on our website without prior written consent.

4. Product Sales & Usage

Our products are exclusively offered to adult users. By placing an order, you confirm that you are at least 18 years old. CloneFlesh reserves the right to deny sales if this condition is not met.

5. Payment and Order Processing

Payments are processed through secure third-party providers, and your order will be processed only after successful payment. CloneFlesh is not responsible for delays caused by issues with third-party payment processors.

6. Privacy and Data Protection

CloneFlesh complies with the GDPR and relevant data protection laws in Poland. We maintain strict confidentiality of your personal data and use it only for order processing, customer service, and support. Please see our Privacy Policy for further details.

7. Updates to Terms

We may update these Terms from time to time. In the event of significant changes, we will notify users via the email address provided. Continued use of CloneFlesh following updates constitutes acceptance of the new Terms.

8. Governing Law

These Terms are governed by the laws of Poland, including relevant EU regulations. Any disputes arising from these Terms shall be handled in the jurisdiction of Poland.

9. Contact Us

For questions regarding these Terms of Service, please contact us at contact@cloneflesh.com.`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
