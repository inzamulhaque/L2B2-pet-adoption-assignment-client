"use client";

import theme from "@/lib/theme/theme";
import { ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={inter.className}>{children}</div>
      </ThemeProvider>
    </>
  );
}
