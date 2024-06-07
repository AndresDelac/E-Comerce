import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/footer/Footer"
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech.Hub the most famous website to buy yor brand new tecnology gadgets.",
  description: "Hola",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className}`}>

      <Navbar/>
        {children}
      <Footer/>
      
        </body>

    </html>
  );
}

