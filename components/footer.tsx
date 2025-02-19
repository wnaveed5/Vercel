import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/In-Line%20logo%20with%20Website-FULL%20COLOR-IXFiwVR6jRR3NID35rdncYpVY5yICM.png"
              alt="BlueSky Training & Development"
              width={500} // Increased width
              height={125} // Increased height
              className="h-02 w-auto md:h-40 lg:h-48"
              priority
            />
            <p className="text-gray-600">
              Empowering childcare providers with essential skills and strategic consulting services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-sky-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-600 hover:text-sky-600">
                  Our Classes
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-600 hover:text-sky-600">
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-sky-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-sky-600" />
                <span className="text-gray-600">281-980-8888</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-sky-600" />
                <a href="mailto:info@blueskytd.com" className="text-gray-600 hover:text-sky-600">
                  info@blueskytd.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-sky-600" />
                <span className="text-gray-600">9920 Hwy 90A, Suite 175D, Sugar Land, TX 77478</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-sky-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-sky-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-sky-600">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© {new Date().getFullYear()} BlueSky Training & Development. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

