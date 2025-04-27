import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#f0ebe7] py-6 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Company Name Section */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-start">
              <div className="w-84 h-34 relative mb-2">
                <Image src="/Assets/Footer.png" alt="STHA Construction Logo" width={186} height={166} className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold text-black mb-4 ">STHA Construction</h2>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="YouTube">
                  <Youtube className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-gray-900" />
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-black mb-4">Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-black mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  E-mail
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Mobile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Whatsapp
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Career Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-black mb-4">Career</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Job
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Part-time
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Internship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium text-black mb-4">Business</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Collaboration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Investment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Networking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
