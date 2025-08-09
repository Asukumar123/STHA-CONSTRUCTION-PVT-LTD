import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#EDE2E4] py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Company Name Section */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-36 h-32 sm:w-44 sm:h-36 relative mb-3">
                <Image 
                  src="/Assets/Footer.png" 
                  alt="STHA Construction Logo" 
                  width={200} 
                  height={180} 
                  className="object-contain" 
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
                STHA Construction
              </h2>
              <div className="flex space-x-5 sm:space-x-6">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
                </Link>
                <Link href="#" aria-label="YouTube">
                  <Youtube className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
                </Link>
              </div>
            </div>
          </div>

          {/* Menu Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-black mb-4">Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Services" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/ContactUs" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link href="mailto:kunalraj7254@gmail.com" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  E-mail
                </Link>
              </li>
              <li>
                <Link href="tel:+917254065386" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Mobile
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/917254065386" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Whatsapp
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          {/* Career Section */}
          <div className="text-center sm:text-left ">
            <h3 className="text-lg font-semibold text-black mb-4">Career</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Job
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Part-time
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Internship
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-black mb-4">Business</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Collaboration
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Investment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="#" className="text-base text-gray-700 hover:text-gray-900 transition-colors">
                  Networking
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-300 text-center">
          <p className="text-sm sm:text-base text-gray-600">
            © {new Date().getFullYear()} STHA Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
