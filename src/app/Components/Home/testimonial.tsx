"use client";
import { motion } from "framer-motion";
import { testimonials } from "../../../../Data/Reviews";

export default function Testimonials() {
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 max-w-7xl mx-auto overflow-hidden">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#1a1a4b] mb-12 sm:mb-16">
        💬 What Our Customers Say
      </h2>

      <div className="relative w-full">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {repeatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="relative pt-8 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] max-w-sm flex-shrink-0 bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-4 sm:p-5 md:p-6 pt-10 sm:pt-12 shadow-lg"
            >
              <div className="absolute -top-4 sm:-top-6 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-purple-400 to-purple-700 flex items-center justify-center shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21a8 8 0 0 0-16 0" />
                </svg>
              </div>

              <div className="mt-6 sm:mt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-purple-200 mb-2 sm:mb-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 15H4a1 1 0 01-1-1v-2c0-3.07 1.64-5.64 4.17-6.32A1 1 0 018 6v3a1 1 0 01-.76.97C6.48 10.27 6 11.06 6 12v1h1.17a1 1 0 011 1v1a1 1 0 01-1 1zm10 0h-3.17a1 1 0 01-1-1v-1a1 1 0 011-1H17v-1c0-.94-.48-1.73-1.24-2.03A1 1 0 0115 9V6a1 1 0 01.83-.99C18.36 5.36 20 7.93 20 11v2a1 1 0 01-1 1z" />
                </svg>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {testimonial.content}
                </p>

                <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg text-[#1a1a4b]">
                  {testimonial.hasHyphen
                    ? `${testimonial.name}-`
                    : testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile-friendly fallback for slower devices */}
     
    </div>
  );
}