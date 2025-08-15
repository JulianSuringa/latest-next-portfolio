import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/ThemeProvider"; // Adjust path as needed
import "../styles/globals.css"; // Your global styles
import Layout from "@/components/Layout";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(
    "NEXT_PUBLIC_RECAPTCHA_SITE_KEY",
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
  );
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
