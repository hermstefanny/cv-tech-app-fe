import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const montserrat = localFont({
  src: "../fonts/Montserrat-VariableFont_wght.woff2",
  variable: "--font-montserrat",
  weight: "100 900",
  style: "normal",
});

const openSans = localFont({
  src: "../fonts/OpenSans-VariableFont_wdth_wght.woff2",
  variable: "--font-open-sans",
  weight: "100 900",
  style: "normal",
});

export const metadata: Metadata = {
  title: "CiviConecta",
  description: "Proyecto académico y ciudadano para la interpretación de datos abiertos del gobierno local",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
      > <div>
          <Header />
        </div>
        <div className="container mx-auto flex flex-col justify-center items-center min-h-screen px-12 pt-20 sm:pt-16">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
