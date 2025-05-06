// app/team/page.tsx or pages/team.tsx
'use client';

import TeamCard from "./TeamCard";
import { teamSections } from "../../../../Data/teamData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TeamPage() {
  return (
    <motion.div
      className="max-w-9xl mx-auto px-6 py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-100 min-h-screen"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-extrabold text-center text-indigo-800 mb-14 drop-shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Meet Our Amazing Team
      </motion.h1>

      {teamSections.map((section, idx) => (
        <div className="mb-16" key={idx}>
          <motion.div
            className="text-xl font-semibold text-indigo-700 mb-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {section.title}
          </motion.div>

          <motion.div
            className="text-gray-600 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {section.subtitle}
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {section.members.map((member, i) => (
              <motion.div key={i} variants={cardVariants}>
                <TeamCard {...member} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
