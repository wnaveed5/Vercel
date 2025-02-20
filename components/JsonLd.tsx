"use client";

export default function JsonLd() {
  return (
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
                name: "Texas Workforce Commission",
              },
            },
          ],
        }),
      }}
    />
  );
}
