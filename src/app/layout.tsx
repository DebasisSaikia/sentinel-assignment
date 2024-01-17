import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { METADATA } from "@/constant/metadata";
import { StyledRegister } from "@/components/helpers";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: METADATA.home?.title,
  description: METADATA.home?.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledRegister>
        <body className={rubik.className}>{children}</body>
      </StyledRegister>
    </html>
  );
}
