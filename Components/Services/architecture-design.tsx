"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Architectural Design",
    description: "Transforming Ideas Into Iconic Structures",
    image: "/Assets/Architure1.png",
    alt: "Restaurant interior design",
    linkText: "For architectural consultancy",
    reverse: false,
  },
  {
    title: "Structural Design",
    description: "Where Precision Meets Structural Excellence",
    image: "/Assets/Structural.png",
    alt: "Structural design wireframe",
    linkText: "For structural consultancy",
    reverse: true,
  },
  {
    title: "Construction",
    description: "Precision, Quality, and Excellence",
    image: "/Assets/Construction.png",
    alt: "Construction site with cranes",
    linkText: "For construction consultancy",
    reverse: false,
  },
];

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
                className="rounded-md object-cover w-full h-full"
              />
            </div>
          )}
          
          <div className="space-y-4 ml-16">
            <h2 className="text-3xl font-bold text-blue-800">{section.title}</h2>
            <p className="text-gray-600">{section.description}</p>
            <div className="flex gap-4 items-center mt-4">
              <Link
                href="#"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Click
              </Link>
              <span className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md">
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
                className="rounded-md object-cover w-full h-full"
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
