import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Twin Cities Plumber | Twin Cities Plumbing Pro — 24/7 Emergency Service",
  description:
    "Expert plumbing services in Minneapolis-St. Paul. Drain cleaning, water heater installation, leak repair & emergency plumbing. Licensed, insured, same-day service. Call now.",
  keywords:
    "plumber Twin Cities, Minneapolis plumber, St Paul plumber, emergency plumber, drain cleaning, water heater repair, leak repair Minnesota",
  openGraph: {
    title: "Twin Cities Plumbing Pro — Licensed & Insured Plumbers",
    description:
      "Same-day plumbing service across the Twin Cities metro. 5-star rated, 500+ jobs completed, 24/7 emergency dispatch.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0a1628" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Plumber",
              name: "Twin Cities Plumbing Pro",
              description:
                "Licensed and insured plumbing services across Minneapolis-St. Paul metro area.",
              telephone: "+1-612-555-0190",
              url: "https://twincitiesplumbingpro.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Minneapolis",
                addressRegion: "MN",
                postalCode: "55401",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 44.9778,
                longitude: -93.265,
              },
              areaServed: [
                "Minneapolis",
                "St. Paul",
                "Bloomington",
                "Plymouth",
                "Edina",
                "Eden Prairie",
                "Minnetonka",
                "Burnsville",
                "Eagan",
                "Apple Valley",
              ],
              openingHours: "Mo-Su 00:00-24:00",
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
