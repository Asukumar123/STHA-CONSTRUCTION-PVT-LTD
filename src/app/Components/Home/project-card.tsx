import { useState } from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  
}

export default function ProjectCard({
  id,
  title,
  description,
  imageUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative border border-gray-200 rounded-md overflow-hidden bg-white hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title and Description */}
      <div className="p-4">
        <h3 className="text-xl text-red-600 font-semibold mb-2">{title}</h3>
        <p className="text-blue-600 text-sm">{description}</p>
      </div>

      {/* Hover Overlay */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-[#EDE2E4] transition-all duration-500 ${
          isHovered ? "opacity-90 translate-y-0" : "opacity-0 translate-y-full"
        }`}
      >
        <Link href={`/project/${id}`}>
          <button className="px-4 py-2 text-white font-semibold rounded-md bg-blue-800 flex gap-1 hover:bg-blue-700 shadow-md transition-transform transform hover:scale-105">
            Click For Details
            <span className="mb-[0.3px]">
              <MoveRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
