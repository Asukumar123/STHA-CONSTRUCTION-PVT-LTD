"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { partners } from "../../../../Data/Partner";

export default function SupportedBy() {
  // Duplicate for seamless loop
  const repeatedLogos = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

  return (
    <div className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2 sm:py-4 font-extrabold text-center bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-transparent bg-clip-text drop-shadow-lg mb-8 sm:mb-10 lg:mb-12 animate-pulse px-4">
        Supported By
      </h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
        >
          {repeatedLogos.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center"
            >
              <Image
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                width={150}
                height={100}
                className="object-contain h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[180px] filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile-friendly fallback for slower devices */}
     
    </div>
  );
}