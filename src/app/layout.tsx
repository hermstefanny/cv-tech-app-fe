import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Home from "@/components/home";

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
      >
        <Home >
          {children}
        </Home>
      </body>
    </html>
  );
}
