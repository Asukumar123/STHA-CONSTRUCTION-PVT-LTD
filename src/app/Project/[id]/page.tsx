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
    return <div className="p-4 text-red-600 font-bold">Project not found</div>;
  }

  // Filter out the current project
  const moreProjects = projects.filter((p) => p.id !== projectId).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex   mb-12 max-w-7xl gap-6">
      {/* Current Project */}
      <div className="mb-8  w-full sm:w-1/2 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-blue-800">{project.title}</h1>
        <p className="text-sm text-gray-600">{project.description}</p>
        <p className="text-base text-gray-700 mt-2">{project.detailedDescription}</p>
      </div>
      <div>
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow"
        />
              <div className="w-[740px] h-20 bg-blue-600 flex items-center justify-center rounded-md mt-12">
          <span className="text-white text-4xl font-semibold">Contact Us</span>
          
        </div>
      </div>
      </div>
      {/* Gallery Images */}
      <div className="grid grid-cols-2 gap-4 mb-12">
        {project.gallery.map((img, index) => (
          <div key={index}>
            <Image
              src={img}
              alt={`Gallery ${index + 1}`}
              width={400}
              height={200}
              className="w-full h-auto object-cover rounded-lg shadow"
            />
          </div>
        ))}
      </div>

      {/* Explore More Projects */}
      <div className="px-4 py-8 ">
        <h2 className="text-4xl py-4 font-extrabold text-center bg-gradient-to-r from-purple-500 via-indigo-600 to-blue-500 text-transparent bg-clip-text drop-shadow-lg mb-12 animate-pulse">
          Explore More Projects
        </h2>

        <div className="flex   gap-6">
          {moreProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-[300px]"
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
