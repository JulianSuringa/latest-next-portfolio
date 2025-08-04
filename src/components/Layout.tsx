import { Toaster } from "react-hot-toast";
import Footer from "./Footer";
import Header from "./Header";

import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Toaster containerStyle={{ bottom: "20rem", position: "fixed" }} />
      <Footer />
    </>
  );
}
