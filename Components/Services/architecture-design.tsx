"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { sections } from "../../Data/Services"; // Adjust the import path as necessary



const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ArchitecturalDesign() {
  return (
    <div className="max-w-8xl mx-auto px-12 py-12 space-y-24 bg-white">
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className="grid md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          {/* If reverse is true, show image first */}
          {section.reverse && (
            <div>
              <Image
                src={section.image}
                alt={section.alt}
                width={500}
                height={400}
                className="rounded-md object-cover ml-[65px] "
              />
            </div>
          )}
          
          <div className="space-y-3 ml-16">
  <h2 className="text-5xl font-extrabold text-blue-900 tracking-tight">
    {section.title}
  </h2>
  <p className="text-lg text-gray-700 leading-relaxed">
    {section.description}
  </p>
  <div className="flex flex-wrap gap-4 items-center mt-6">
  <Link
  href={section.link}
  className="px-6 py-2 text-lg font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 
           transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
           shadow-md hover:shadow-lg active:scale-95"
>
  Explore Now
</Link>
  <span className="px-6 py-2 text-lg font-medium bg-gray-100 text-gray-700 rounded-md
                  hover:bg-gray-200 transition duration-200 cursor-default
                  shadow-sm hover:shadow-md">
    {section.linkText}
  </span>
</div>
</div>

          {/* If reverse is false, show image second */}
          {!section.reverse && (
            <div>
              <Image
                src={section.image}
                alt={section.alt}
                width={500}
                height={400}
                className="rounded-md object-cover ml-[50px]"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
