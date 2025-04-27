"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, User } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side - Form */}
        <div>
          <h1 className="text-3xl font-bold text-[#1a237e] mb-4">Get in touch</h1>
          <p className="text-gray-600 mb-6">
            Have a question? Fill out the form below, and our team will get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name/ Company name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Kunal"
                className="w-full px-4 py-3 rounded bg-[#f8e8e8] border-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Contact number (Optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="7254065386"
                className="w-full px-4 py-3 rounded bg-[#f8e8e8] border-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@janesfakedomain.net"
                className="w-full px-4 py-3 rounded bg-[#f8e8e8] border-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description (Optional)
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter your question or message"
                rows={4}
                className="w-full px-4 py-3 rounded bg-[#f8e8e8] border-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#4338ca] hover:bg-[#3730a3] text-white font-medium py-3 px-4 rounded transition-colors"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right side - Contact Information */}
        <div className="space-y-6 mt-8 md:mt-16">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1 text-gray-700" />
            <div>
              <span className="font-bold">Address:</span> Incubation certre NIT Patna
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 mt-1 text-gray-700" />
            <div>
              <span className="font-bold">Phone :</span> 91+ 7254065386
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 mt-1 text-gray-700" />
            <div>
              <span className="font-bold">Email :</span> kunalraj7254gmail.com
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 mt-1 text-gray-700" />
            <div>
              <span className="font-bold">Office Hours :</span>
              <div>Monday -Saturday: 9:00AM-6:00PM</div>
              <div>Sunday:Closed</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <User className="w-5 h-5 mt-1 text-gray-700" />
            <div>
              <span className="font-bold">Visit Us:</span> ( add google map)
            </div>
          </div>

          <div className="mt-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cont.PNG-YqjvufGZwzbiM4eCxYfhTkHUdM2IuY.png"
              alt="Location map"
              width={300}
              height={150}
              className="rounded-md"
            />
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Follow us :</h3>
            <div className="flex gap-4">
              {/* LinkedIn */}
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="#" className="text-pink-600 hover:text-pink-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              {/* Twitter/X */}
              <Link href="#" className="text-black hover:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              {/* Facebook */}
              <Link href="#" className="text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
