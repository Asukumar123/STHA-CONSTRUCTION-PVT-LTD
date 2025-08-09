"use client";
import { useParams } from "next/navigation";
import { projects } from "../../../../Data/Projects";
import Image from "next/image";
import ProjectCard from "../../Components/Home/project-card";
import { motion } from "framer-motion";

export default function ProjectShowcase() {
  const params = useParams();
  const projectId = Number(params?.id);

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="p-4 sm:p-6 md:p-8 text-red-600 font-bold text-center">
        Project not found
      </div>
    );
  }

  // Filter out the current project
  const moreProjects = projects.filter((p) => p.id !== projectId).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="flex flex-col lg:flex-row mb-8 sm:mb-12 gap-6 lg:gap-8">
        {/* Current Project Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 leading-tight">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {project.description}
          </p>
          <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>
        
        {/* Project Image */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="w-full h-16 sm:h-20 bg-blue-600 flex items-center justify-center rounded-md mt-6 sm:mt-8 lg:mt-12 hover:bg-blue-700 transition-colors cursor-pointer">
            <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold">
              Contact Us
            </span>
          </div>
        </div>
      </div>

      {/* Gallery Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {project.gallery.map((img, index) => (
          <div key={index} className="group">
            <Image
              src={img}
              alt={`Gallery ${index + 1}`}
              width={400}
              height={200}
              className="w-full h-auto object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
            />
          </div>
        ))}
      </div>

      {/* Explore More Projects */}
      <div className="px-2 sm:px-4 py-6 sm:py-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl py-4 font-extrabold text-center bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-transparent bg-clip-text drop-shadow-lg mb-8 sm:mb-12 animate-pulse">
          Explore More Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {moreProjects.map((project, index) => (
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
    </div>
  );
}