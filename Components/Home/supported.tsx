
"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { partners } from "../../Data/Partner"; // Assuming you have a data file for partners



export default function SupportedBy() {
  // Duplicate once for seamless loop
  const repeatedLogos = [...partners, ...partners,...partners, ...partners,...partners, ...partners];

  return (
    <div className="w-full bg-white py-10">
    <h2 className="text-5xl py-4 font-extrabold text-center bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-transparent bg-clip-text drop-shadow-lg mb-12 animate-pulse">
  Supported By
</h2>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {repeatedLogos.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 px-12"
            >
              <Image
                src={partner.logoUrl}
                alt={`${partner.name} logo`}
                width={150}
                height={400}
                className="object-contain h-34 w-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
