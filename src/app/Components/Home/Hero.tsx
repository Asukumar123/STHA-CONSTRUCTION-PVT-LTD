"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue} from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { slides } from "../../../../Data/Home"

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const y = useMotionValue(0)

  useEffect(() => {
    const moveBackground = () => {
      let start = 0
      const step = () => {
        start += 0.2
        y.set(Math.sin(start) * 0)
        requestAnimationFrame(step)
      }
      step()
    }
    moveBackground()
  }, [y])

  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[calc(100vh-72px)] overflow-hidden bg-blue-900">
      
      {/* Background Images */}
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
                  className="object-cover"
                />
                {/* Enhanced gradient overlay for better text readability on mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 sm:from-black/70 sm:via-black/40 sm:to-transparent"></div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-4 sm:px-6 md:px-8 lg:px-16 max-w-6xl text-white">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].title}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 font-[inter] leading-tight">
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
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-full sm:max-w-2xl lg:max-w-3xl leading-relaxed">
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
              href="/ContactUs"
              className="bg-red-600 hover:bg-red-700 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full inline-block font-semibold text-white transition-all duration-300 hover:scale-105 sm:hover:scale-110 shadow-lg hover:shadow-red-400/40 text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}