import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import { Footer } from "@/components/footer";
import JsonLd from "@/components/JsonLd"; // Import the new Client Component

const inter = Inter({ subsets: ["latin"] });

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
  metadataBase: "https://blueskytd.com", // ✅ Fixed: Changed from `new URL(...)`
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Texas Childcare Training & Development | BlueSky TD Sugar Land",
    description:
      "State-approved Texas childcare training and professional development in Sugar Land.",
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
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <JsonLd /> {/* ✅ JSON-LD now handled in a Client Component */}
      </body>
    </html>
  );
}
