import type { Metadata } from "next";
import { Montserrat, Permanent_Marker } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "700", "800", "900"],
});

const permanentMarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-permanent-marker",
});

export const metadata: Metadata = {
  title: "Spring Day | Electronic Music Pool Party",
  description: "Spring Day - Pool Party Experience (Edición 5). El mejor evento de la primavera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${permanentMarker.variable} font-sans antialiased bg-pool-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
