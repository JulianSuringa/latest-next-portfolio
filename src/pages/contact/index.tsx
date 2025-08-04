import ContactForm from "@/components/ContactForm";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | JS</title>
        <meta
          name="description"
          content="Get in touch with me for any inquiries or collaborations."
        />
      </Head>

      <section className="md:min-h-screen p-4 md:p-10 bg-background text-foreground">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Me</h1>

        <ContactForm />
        <div className="flex mx-auto max-w-md mt-6 md:mt-8 border-t border-gray-200 p-2 pt-6  md:pt-8">
          <p className="text-center text-gray-600 mb-8">
            Feel free to reach out to me directly via email at{" "}
            <a
              href="mailto:juliansuringa@gmail.com"
              className="text-blue-600 hover:underline"
            >
              juliansuringa@gmail.com
            </a>{" "}
            or call/text me at{" "}
            <a
              href="tel:095625669842"
              className="text-blue-600 hover:underline"
            >
              0956 256 6984
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
