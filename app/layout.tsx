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
    <html lang="en">
      <body className={inter.className}>
        <div className="relative">
          <BackgroundDots />
          <div className="text-neutral-900 relative">
            <Providers>
              <Navbar />
              <BreadcrumbNav />
              {children}
            </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
