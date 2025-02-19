import type React from "react"
import "@/styles/globals.css"
import { Inter, Crimson_Pro } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const crimson = Crimson_Pro({ subsets: ["latin"], variable: "--font-crimson" })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${crimson.variable} font-sans`}>{children}</body>
    </html>
  )
}

