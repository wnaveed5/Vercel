"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Navigation() {
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
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In-Line%20logo%20with%20Website-FULL%20COLOR-IXFiwVR6jRR3NID35rdncYpVY5yICM.png"
              alt="BlueSky Training & Development"
              width={240}
              height={60}
              className="h-16 w-auto"
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
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-white transition-all duration-300 ease-in-out",
          isOpen ? "top-20 opacity-100" : "-top-full opacity-0",
        )}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-sky-600 transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="w-full">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}

