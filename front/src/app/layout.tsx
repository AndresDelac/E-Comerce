import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <nav>Este es el navbar</nav>
      </header>

      {/* Aqui se renderizan los componentes y demas elemntos */}
      <body className={inter.className}>{children}</body>

      <footer>
        <section>
          <h1>Aqui va el footer</h1>
        </section>
      </footer>
    </html>
  );
}