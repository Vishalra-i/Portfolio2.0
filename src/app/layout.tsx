import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vishal Rai - Full Stack Developer",
  description: "Vishal Rai is a full stack web developer from Jashpur Nagar, Chhattisgarh. Expertise in HTML, CSS, JavaScript, React, Node.js, Express, and Next.js.",
  keywords: "Vishal Rai, Full Stack Developer, Web Developer, HTML, CSS, JavaScript, React, Node.js, Express, Next.js, Jashpur Nagar, Chhattisgarh",
  authors: [{name : "Vishal Rai"}],
  creator: "Vishal Rai",
  publisher: "Vishal Rai",
  robots: "index, follow",
  googlebot: "index, follow",
  googleSiteVerification: "googleSiteVerificationCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen w-full bg-gradient-to-tr from-[#f8fcff] to-[#2ecc71]">
          <div className="relative">
            <Header />
          </div>
          <main >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
