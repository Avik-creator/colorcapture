import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/utils/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ColorCapture",
  description: "Where you can capture colors from images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{`${inter.className} dark:bg-[#141417]`}">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
