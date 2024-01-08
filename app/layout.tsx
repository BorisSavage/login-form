import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import BackgroundDots from "@/components/BackgroundDots";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zadanie Rekrutacyjne Idee",
  description: "Oprogramowanie front-end",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${inter.className} text-neutral-900 bg-neutral-100 dark:text-neutral-100 dark:bg-neutral-900 relative`}
      >
        <Providers attribute="class" defaultTheme="light">
          <BackgroundDots />
          <div className="relative">
            <Navbar />
            <BreadcrumbNav />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
