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
        className={`${poppins.variable} ${martianMono.variable} min-h-screen antialiased bg-black`}
      >
        <Navbar />
        <div className="absolute inset-0 z-[-1] top-0 min-h-screen min-w-screen opacity-100 bg-repeat">
          <DarkVeil />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
