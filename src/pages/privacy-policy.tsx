// pages/privacy-policy.tsx
import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | My Portfolio</title>
        <meta
          name="description"
          content="Privacy Policy for the contact page of my portfolio website."
        />
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-10 text-foreground">
        <h1 className="text-2xl font-bold mb-6 mx-auto text-center">
          Privacy Policy
        </h1>
        <p className="mb-10 text-center">
          <strong>Effective Date:</strong> August 16, 2025
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            1. Information I Collect
          </h2>
          <p>
            When you use the contact form on this website, I collect the
            following information:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              <strong>Name</strong> — to know who is contacting me.
            </li>
            <li>
              <strong>Email Address</strong> — to reply to your inquiry.
            </li>
            <li>
              <strong>Message</strong> — the content of your inquiry or
              feedback.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. How I Use Your Information
          </h2>
          <p>
            I use the information you provide solely to read and respond to your
            messages and to maintain communication related to your inquiry. I do{" "}
            <strong>not</strong> sell, rent, or share your personal information
            with third parties for marketing purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            3. Data Storage and Security
          </h2>
          <p>
            Your information is stored securely and is only accessible to me.
            While I take reasonable measures to protect your data, I cannot
            guarantee absolute security due to the nature of the internet.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
          <p>
            I retain your information only as long as necessary to respond to
            your inquiry. Once it is no longer needed, I will delete your data.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            5. Third-Party Services
          </h2>
          <p>
            This website does not use third-party analytics or advertising tools
            on the contact page. However, standard web hosting logs (such as IP
            addresses) may be collected by my hosting provider for security and
            maintenance purposes.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Request a copy of the personal data I have about you.</li>
            <li>Request correction or deletion of your personal data.</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, please contact me at:{" "}
            <a
              href="mailto:juliansuringa@gmail.com"
              className="text-blue-600 underline transition-colors hover:text-orange-400"
            >
              juliansuringa@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            I may update this Privacy Policy from time to time. Any changes will
            be posted on this page with an updated “Effective Date.”
          </p>
        </section>

        <p>
          <strong>Contact:</strong> If you have any questions about this Privacy
          Policy, you can reach me at{" "}
          <a
            href="mailto:juliansuringa@gmail.com"
            className="text-blue-600 underline transition-colors hover:text-orange-400"
          >
            juliansuringa@gmail.com
          </a>
          .
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="text-blue-600 underline transition-colors hover:text-orange-400"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}
