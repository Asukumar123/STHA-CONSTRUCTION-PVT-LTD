'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { catalogueData } from '../../../../Data/WorkCards';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function WorksCatalogue() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 bg-white">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a4b] mb-10 sm:mb-14 tracking-tight">
        Works Catalogue
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {catalogueData.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className={`rounded-lg p-4 sm:p-6 flex flex-col shadow transition-transform duration-300 min-h-[400px] sm:min-h-[450px] ${
              item.active
                ? 'bg-blue-600 text-white hover:scale-[1.02]'
                : 'bg-white text-gray-800 border hover:shadow-lg hover:scale-[1.02]'
            }`}
          >
            <h3 className="text-center text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{item.title}</h3>
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className={`${item.iconBg} p-2 rounded-full`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={item.active ? 'white' : 'currentColor'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.svg}
                </svg>
              </div>
            </div>
            <ul className="list-disc pl-4 sm:pl-6 space-y-1.5 sm:space-y-2 mb-auto text-xs sm:text-sm leading-relaxed">
              {item.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <Link href="/not-found" className="mt-4 sm:mt-6">
              <button
                className={`w-full py-2 sm:py-3 rounded text-center font-medium transition-colors text-sm sm:text-base ${
                  item.active
                    ? `${item.buttonColor} border border-white/30 text-white hover:opacity-90`
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
                }`}
              >
                Explore Now
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}