import type React from "react"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Texas Childcare Training & Development | BlueSky TD Sugar Land",
  description:
    "State-approved Texas childcare training and professional development in Sugar Land. Get certified with BlueSky TD's comprehensive childcare courses.",
  keywords: [
    "Texas childcare training",
    "Sugar Land childcare certification",
    "Texas childcare provider training",
    "Houston area childcare courses",
    "Texas CDA certification",
    "Texas childcare professional development",
    "Sugar Land early childhood education",
  ],
  authors: [{ name: "BlueSky Training & Development" }],
  creator: "BlueSky Training & Development",
  publisher: "BlueSky Training & Development",
  metadataBase: new URL("https://blueskytd.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Texas Childcare Training & Development | BlueSky TD Sugar Land",
    description: "State-approved Texas childcare training and professional development in Sugar Land.",
    url: "https://blueskytd.com",
    siteName: "BlueSky Training & Development Texas",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In-Line%20logo%20with%20Website-FULL%20COLOR-IXFiwVR6jRR3NID35rdncYpVY5yICM.png",
        width: 1200,
        height: 630,
        alt: "BlueSky Training & Development - Texas Childcare Training Provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Texas Childcare Training & Development | BlueSky TD Sugar Land",
    description: "State-approved Texas childcare training and professional development courses in Sugar Land.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In-Line%20logo%20with%20Website-FULL%20COLOR-IXFiwVR6jRR3NID35rdncYpVY5yICM.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://blueskytd.com",
              name: "BlueSky Training & Development",
              description:
                "State-approved Texas childcare training and professional development provider in Sugar Land, TX",
              url: "https://blueskytd.com",
              telephone: "281-980-8888",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9920 Hwy 90A, Suite 175D",
                addressLocality: "Sugar Land",
                addressRegion: "TX",
                postalCode: "77478",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 29.6196787,
                longitude: -95.6349463,
              },
              areaServed: {
                "@type": "State",
                name: "Texas",
              },
              hasMap: "https://www.google.com/maps?cid=your-google-business-id",
              sameAs: [
                "https://www.facebook.com/blueskytd",
                "https://www.instagram.com/blueskytd",
                "https://www.linkedin.com/company/blueskytd",
              ],
              openingHours: ["Mo-Fr 09:00-17:00", "Sa 10:00-14:00"],
              priceRange: "$$",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In-Line%20logo%20with%20Website-FULL%20COLOR-IXFiwVR6jRR3NID35rdncYpVY5yICM.png",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
              },
              offers: [
                {
                  "@type": "Offer",
                  category: "Texas Childcare Training Programs",
                  availability: "https://schema.org/InStock",
                },
              ],
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Texas State-Approved Childcare Training",
                  recognizedBy: {
                    "@type": "Organization",
                    name: "TECPDS",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}



import './globals.css'