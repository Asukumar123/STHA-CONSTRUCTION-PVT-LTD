"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { sections } from "../../../../Data/Services";

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ArchitecturalDesign() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 space-y-16 sm:space-y-20 lg:space-y-24 bg-white">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          {/* Image section - shows first on mobile, respects reverse on desktop */}
          <div className={`order-1 ${section.reverse ? 'md:order-1' : 'md:order-2'}`}>
            <div className="flex justify-center">
              <Image
                src={section.image}
                alt={section.alt}
                width={500}
                height={400}
                className="rounded-md object-cover w-full max-w-md sm:max-w-lg h-auto"
              />
            </div>
          </div>
          
          {/* Content section */}
          <div className={`space-y-3 sm:space-y-4 order-2 ${section.reverse ? 'md:order-2' : 'md:order-1'} text-center md:text-left`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-900 tracking-tight leading-tight">
              {section.title}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              {section.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center md:justify-start mt-4 sm:mt-6">
              <Link
                href={section.link}
                className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 
                         transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                         shadow-md hover:shadow-lg active:scale-95 text-center"
              >
                Explore Now
              </Link>
              <span className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium bg-gray-100 text-gray-700 rounded-md
                              hover:bg-gray-200 transition duration-200 cursor-default
                              shadow-sm hover:shadow-md text-center">
                {section.linkText}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}