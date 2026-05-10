import type { Metadata } from "next";
import { Geist, Geist_Mono,Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const inter = Inter({ subsets: ["latin"] })

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

 const metadata: Metadata = {
  title: "Studio Nine - From Idea to Infrastructure",
  description: "Studio Nine is a web and mobile studio that builds software that earns trust pixel by pixel. We handle both design and development, delivering fast, modern, and production-ready products for founders who know the difference between software that ships and software that sticks.",
  metadataBase : new URL("https://studio-nine-two.vercel.app/"),
  openGraph : {
    images : [{ url : "/og-image.png", width : 1200, height : 630, alt : "Studio Nine - From Idea to Infrastructure" }],
  },
  twitter : {
    card : "summary_large_image",
    images : ["@/public/og-image.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}   h-full antialiased`}
    >
      <body className="min-h-screen bg-zinc-50">
        <div className="dotted-frame mx-auto flex min-h-screen w-full max-w-none sm:max-w-6xl flex-col bg-white">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
