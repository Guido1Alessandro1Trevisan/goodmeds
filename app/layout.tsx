import type { Metadata } from "next";
import { Montserrat, Red_Hat_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Body — humanist sans, matches MEDVi's body text.
const redHatText = Red_Hat_Text({
  variable: "--font-red-hat-text",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Display — geometric sans, matches MEDVi's headlines.
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "goodmeds — GLP-1 weight loss, prescribed online",
  description:
    "Doctor-prescribed semaglutide and tirzepatide, delivered to your door. Transparent pricing from $149/month. No insurance required.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${redHatText.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
