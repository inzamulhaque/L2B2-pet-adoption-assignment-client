import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/navbar";
import React from "react";

export default function NavbarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
