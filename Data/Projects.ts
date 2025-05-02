export type Project = {
  id: number;
  title: string;
  description: string;
  detailedDescription: string;
  imageUrl: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Project-1",
    description: "Quick overview of Project-1.",
    detailedDescription: "This project demonstrates frontend integration with backend APIs using modern technologies like Next.js and Tailwind CSS. It features optimized image loading, dynamic routing, and modular architecture.",
    imageUrl: "/Assets/Home.png",
    gallery: ["/Assets/Home.png", "/Assets/Project.png", "/Assets/About.png", "/Assets/Services.png"],
  },
  {
    id: 2,
    title: "Project-2",
    description: "Quick overview of Project-2.",
    detailedDescription: "A full-stack eCommerce application using MongoDB, Express, React, and Node.js. Features include cart handling, payment integration, and admin dashboard.A full-stack eCommerce application using MongoDB, Express, React, and Node.js. Features include cart handling, payment integration, and admin dashboardA full-stack eCommerce application using MongoDB, Express, React, and Node.js. Features include cart handling, payment integration, and admin dashboard",
    imageUrl: "/Assets/Project.png",
    gallery: ["/Assets/Project.png", "/Assets/Services.png", "/Assets/About.png", "/Assets/Home.png"],
  },
  {
    id: 3,
    title: "Project-3",
    description: "Quick overview of Project-2.",
    detailedDescription: "A full-stack eCommerce application using MongoDB, Express, React, and Node.js. Features include cart handling, payment integration, and admin dashboard.",
    imageUrl: "/Assets/Project.png",
    gallery: ["/Assets/Project.png", "/Assets/Services.png", "/Assets/About.png", "/Assets/Home.png"],
  },
  {
    id: 4,
    title: "Project-4",
    description: "Quick overview of Project-2.",
    detailedDescription: "A full-stack eCommerce application using MongoDB, Express, React, and Node.js. Features include cart handling, payment integration, and admin dashboard.",
    imageUrl: "/Assets/Project.png",
    gallery: ["/Assets/Project.png", "/Assets/Services.png", "/Assets/About.png", "/Assets/Home.png"],
  },
  {
    id: 5,
    title: "Project-5",
    description: "Quick overview of Project-2.",
    detailedDescription: "A full-stack eCommerce application using MongoDB, Express, React, and Node.js. Features include cart handling, payment integration, and admin dashboard.",
    imageUrl: "/Assets/Project.png",
    gallery: ["/Assets/Project.png", "/Assets/Services.png", "/Assets/About.png", "/Assets/Home.png"],
  },
  {
    id: 6,
    title: "Project-6",
    description: "Quick overview of Project-2.",
    detailedDescription: "A full-stack eCommerce application using MongoDB, Express, React, and Node.js. Features include cart handling, payment integration, and admin dashboard.",
    imageUrl: "/Assets/Project.png",
    gallery: ["/Assets/Project.png", "/Assets/Services.png", "/Assets/About.png", "/Assets/Home.png"],
  },
  // Add more projects similarly...
];
