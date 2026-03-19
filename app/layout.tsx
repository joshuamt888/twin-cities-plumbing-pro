import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Twin Cities Plumbing Pro | Licensed Plumber Minneapolis & St. Paul MN",
  description:
    "Licensed, insured plumbers serving Minneapolis, St. Paul, and the Twin Cities metro. Drain cleaning, water heaters, leak repair, emergency plumbing — same-day service available.",
  keywords:
    "plumber Minneapolis, plumber St Paul, Twin Cities plumbing, drain cleaning, water heater repair, emergency plumber MN",
  metadataBase: new URL("https://twincitiesplumbingpro.com"),
  alternates: { canonical: "https://twincitiesplumbingpro.com" },
  openGraph: {
    title: "Twin Cities Plumbing Pro | Licensed Plumber Minneapolis & St. Paul",
    description:
      "Licensed, insured plumbers serving Minneapolis, St. Paul, and the Twin Cities metro. Same-day service available.",
    url: "https://twincitiesplumbingpro.com",
    siteName: "Twin Cities Plumbing Pro",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
