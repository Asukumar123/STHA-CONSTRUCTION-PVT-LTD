"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue} from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { slides } from "../../../../Data/Home" // Assuming you have a data file for slides



export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  // Create a motion value for parallax movement
  const y = useMotionValue(0)

  useEffect(() => {
    const moveBackground = () => {
      let start = 0
      const step = () => {
        start += 0.2 // Slow movement
        y.set(Math.sin(start) * 0) // Move up and down between -20px and +20px
        requestAnimationFrame(step)
      }
      step()
    }
    moveBackground()
  }, [y])

  return (
    <section className="relative h-[calc(100vh-72px)] overflow-hidden bg-blue-900">
      
      {/* Background Images (animated with parallax) */}
      <div className="absolute inset-0 z-0">
  {slides.map((slide, index) => (
    <AnimatePresence key={index}>
      {index === current && (
    <motion.div
    className="absolute inset-0"
    initial={{ opacity: 0, rotate: -2 }}
    animate={{ opacity: 1, rotate: 0 }}
    exit={{ opacity: 0, rotate: 2 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
  >
          <Image
            src={slide.imageUrl}
            alt="Background image"
            fill
            priority
            className="object-cover hidden lg:block"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        </motion.div>
      )}
    </AnimatePresence>
  ))}
</div>


      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 max-w-6xl text-white">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-[inter]">
              {slides[current].title}
            </h1>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].description}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl mb-10 max-w-3xl">
              {slides[current].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Contact Us Button */}
        <AnimatePresence mode="wait">
          <motion.div
            key={"contact-button-" + current}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full inline-block font-semibold text-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-red-400/40"
            >
              Contact Us
            </Link>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
