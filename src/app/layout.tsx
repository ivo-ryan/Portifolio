import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800", "900"]
});


export const metadata: Metadata = {
  title: "Portifolio",
  description: "Created my portifolio ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
