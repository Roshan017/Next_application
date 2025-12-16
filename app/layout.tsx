import type { Metadata } from "next";
import { Geist, Martian_Mono, Poppins } from "next/font/google";
import "./globals.css";
import DarkVeil from "@/components/DarkVeil";
import Navbar from "@/components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Envolv",
  description: "AI powered event manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${martianMono.variable} antialiased bg-black`}
      >
        <div className="relative min-h-screen overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DarkVeil />
          </div>

          <div className="relative z-10">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
