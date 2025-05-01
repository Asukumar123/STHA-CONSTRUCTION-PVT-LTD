"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"
import { projects } from "../../Data/Projects";

// Sample project data


export default function ProjectsGrid() {
  return (
    <div className="px-[100px] py-12 bg-white">
      <h1 className="text-4xl font-bold text-center text-black mb-12">
        Our Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <ProjectCard
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
