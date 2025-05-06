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
    title: "Dream House - Residential Project",
    description: "A modern residential architectural design inspired by organic forms and natural aesthetics.",
    detailedDescription:
      "The Dream House project presents a contemporary residential structure inspired by the elegance of a flower petal. Its design integrates nature with modern living, offering a serene and artistic atmosphere. The project emphasizes organic curves, sustainable materials, and a minimalist yet luxurious feel, making it a perfect blend of beauty and functionality.",
    imageUrl: "/Assets/Projects/Dream House/4-min.png",
    gallery: [
      "/Assets/Projects/Dream House/4-min.png",
      "/Assets/Projects/Dream House/A1 DREAM_page-0001.jpg",
      "/Assets/Projects/Dream House/Dream House A2.jpg",
      "/Assets/Projects/Dream House/Dream house extra night.jpg"
    ]
  },
  {
    id: 2,
    title: "5 Star Hotel Project",
    description: "A luxurious 5-star hotel design integrating modern amenities with functional aesthetics.",
    detailedDescription:
      "This 5-star hotel project covers comprehensive architectural planning, including detailed site layouts, multi-level floor plans, elevations, and utility sections. The design incorporates luxury features such as swimming pools, banquet halls, recreational spaces, service areas, and efficient vertical circulation. The project balances opulence with operational efficiency, offering an exceptional guest experience.",
    imageUrl: "/Assets/Projects/5 Star Hotel/2A 5 star_pages-to-jpg-0001.jpg",
    gallery: [
      "/Assets/Projects/5 Star Hotel/2A 5 star_pages-to-jpg-0001.jpg",
      "/Assets/Projects/5 Star Hotel/2D 5 STAR_page-0001.jpg",
      "/Assets/Projects/5 Star Hotel/2E 5 STAR_page-0001.jpg",
      "/Assets/Projects/5 Star Hotel/2B 5 STAR_page-0001.jpg",
      "/Assets/Projects/5 Star Hotel/5 star 1.jpg",
      "/Assets/Projects/5 Star Hotel/5 star 2.jpg"
    ]
  },
  {
    id: 3,
    title: "Hostel Project",
    description: "Design of a student-friendly hostel with essential facilities and modern layout.",
    detailedDescription:
      "This hostel project focuses on functional living spaces designed for students. It includes well-structured site planning, elevation drawings, and section views, ensuring optimal room arrangements, ventilation, and shared amenities. The design promotes a comfortable, safe, and conducive environment for student life.",
    imageUrl: "/Assets/Projects/hostel building/WhatsApp Image 2025-03-18 at 22.36.40_99ec8244.jpg",
    gallery: [
      "/Assets/Projects/hostel building/WhatsApp Image 2025-03-18 at 22.36.40_99ec8244.jpg",
      "/Assets/Projects/hostel building/WhatsApp Image 2025-03-18 at 22.36.40_fe6bd5aa.jpg",
      "/Assets/Projects/hostel building/img00001.jpg",
      "/Assets/Projects/hostel building/img00002.jpg"
    ]
  },
  {
    id: 4,
    title: "Restaurant Project",
    description: "Architectural planning and design of a modern restaurant with multiple floors.",
    detailedDescription:
      "This project highlights the architectural and digital planning for a modern restaurant. It features detailed ground and first floor plans, emphasizing customer flow, seating arrangements, kitchen efficiency, and ambiance. The design also incorporates 3D visualizations and interior layout planning using architectural software for enhanced realism.",
    imageUrl: "/Assets/Projects/Restraurants/HALL RENDER 2_page-0001.jpg",
    gallery: [
      "/Assets/Projects/Restraurants/HALL RENDER 2_page-0001.jpg",
      "/Assets/Projects/Restraurants/HALL RENDER_page-0001.jpg",
      "/Assets/Projects/Restraurants/img00001.jpg",
      "/Assets/Projects/Restraurants/img9.jpg"
    ]
  },
  {
    id: 5,
    title: "Municipal Project",
    description: "Design and utility planning for a municipal building with mixed residential and office spaces.",
    detailedDescription:
      "This project includes the architectural and infrastructural design of a municipal building that serves both residential and commercial purposes. The detailed planning involves floor layouts, elevation views, and practical installations like water tanks, septic systems, and parking structures. The building reflects a multi-functional approach with proper zoning and space utilization.",
    imageUrl: "/Assets/Projects/office building/MUNICIPAL 2_page-0001.jpg",
    gallery: [
      "/Assets/Projects/office building/MUNICIPAL 2_page-0001.jpg",
      "/Assets/Projects/office building/MUNICIPAL 1_pages-to-jpg-0001.jpg",
      "/Assets/Projects/office building/img00002.jpg",
      "/Assets/Projects/office building/img00003.jpg"
    ]
  },
  {
    id: 6,
    title: "ISBT Project",
    description: "Inter State Bus Terminal (ISBT) project focusing on large-scale public transport infrastructure.",
    detailedDescription:
      "This ISBT design project showcases the layout and planning of a major public transport hub. It includes architectural diagrams for platforms, departure bays, waiting areas, and administrative sections. The project emphasizes accessibility, passenger flow, structural safety, and environmental considerations while accommodating high daily traffic efficiently.",
    imageUrl: "/Assets/Projects/ISBT BIHTA/A3 VIEW_page-0001.jpg",
    gallery: [
      "/Assets/Projects/ISBT BIHTA/A3 VIEW_page-0001.jpg",
      "/Assets/Projects/ISBT BIHTA/ISBT A6.png",
      "/Assets/Projects/ISBT BIHTA/ISBT A8.jpg",
      "/Assets/Projects/ISBT BIHTA/img00003.jpg",
      "/Assets/Projects/ISBT BIHTA/img00001.jpg"
    ]
  }
];
