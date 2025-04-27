"use client"

import { motion } from "framer-motion"
import ProjectCard from "./project-card"

// Sample project data
const projects = [
  {
    id: 1,
    title: "Project-1",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    imageUrl: "/Assets/Home.png",
  },
  {
    id: 2,
    title: "Project-2",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    imageUrl: "/Assets/Project.png",
  },
  {
    id: 3,
    title: "Project-3",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    imageUrl: "/Assets/Home.png",
  },
  {
    id: 4,
    title: "Project-4",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    imageUrl: "/Assets/About.png",
  },
  {
    id: 5,
    title: "Project-5",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    imageUrl: "/Assets/Home.png",
  },
  {
    id: 6,
    title: "Project-6",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
    imageUrl: "/Assets/Services.png",
  },
]

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
