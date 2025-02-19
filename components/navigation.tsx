"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Home" },
    { href: "/team", label: "Meet The Team" },
    { href: "/seminars", label: "Seminars & Events" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-40">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In-Line%20logo%20with%20Website-FULL%20COLOR-IXFiwVR6jRR3NID35rdncYpVY5yICM.png"
              alt="BlueSky Training & Development"
              width={1000} // Increased width
              height={250} // Increased height
              className="h-40 w-auto md:h-52 lg:h-64"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-gray-600 hover:text-sky-600 transition-colors">
                {link.label}
              </Link>
            ))}
            <Button asChild>
              <Link href="/register">Register Now</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden p-2 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (Fixed and Working) */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center justify-center space-y-6 transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-600 text-2xl hover:text-sky-600 transition-colors"
            onClick={() => setIsOpen(false)} // Closes menu when clicking a link
          >
            {link.label}
          </Link>
        ))}
        <Button asChild className="w-48 text-lg">
          <Link href="/register" onClick={() => setIsOpen(false)}>Register Now</Link>
        </Button>
      </div>
    </nav>
  )
}

