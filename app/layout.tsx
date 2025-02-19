import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "BlueSky Training & Development",
    template: "%s | BlueSky Training & Development",
  },
  description: "Empowering childcare providers with professional development and strategic consulting services.",
  keywords: ["childcare training", "professional development", "childcare consulting", "early childhood education"],
  generator: "v0.dev",
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
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'