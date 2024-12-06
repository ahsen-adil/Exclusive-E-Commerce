import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Exclusive",
  description:
    "Exclusive is a cutting-edge e-commerce platform designed to revolutionize the way you shop online. Our mission is to provide a seamless and personalized shopping experience, connecting you with a vast array of products from top brands and local sellers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
