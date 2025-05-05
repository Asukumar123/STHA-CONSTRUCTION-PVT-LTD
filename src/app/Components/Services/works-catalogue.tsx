'use client';

import { motion } from 'framer-motion';

import { catalogueData } from '../../../../Data/WorkCards'; // Assuming you have a data file for catalogue items
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
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <h2 className="text-center text-4xl font-bold text-[#1a1a4b] mb-14 tracking-tight">
        Works Catalogue
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {catalogueData.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className={`rounded-lg p-6 flex flex-col shadow transition-transform duration-300 ${
              item.active
                ? 'bg-blue-600 text-white hover:scale-[1.02]'
                : 'bg-white text-gray-800 border hover:shadow-lg hover:scale-[1.02]'
            }`}
          >
            <h3 className="text-center text-xl font-semibold mb-4">{item.title}</h3>
            <div className="flex justify-center mb-4">
              <div className={`${item.iconBg} p-2 rounded-full`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
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
            <ul className="list-disc pl-6 space-y-2 mb-auto text-sm">
              {item.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
            <button
  className={`mt-6 w-full py-2 rounded text-center font-medium transition-colors ${
    item.active
      ? `${item.buttonColor} border border-white/30 text-white hover:opacity-90`
      : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
  }`}
>
              Explore Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
