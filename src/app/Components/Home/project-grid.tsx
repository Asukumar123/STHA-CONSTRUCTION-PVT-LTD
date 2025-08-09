"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"
import { projects } from "../../../../Data/Projects";

export default function ProjectsGrid() {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 bg-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-8 sm:mb-12">
        Our Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
            <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full"
            >
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
            </motion.div>
        ))}
      </div>
    </div>
  )
}