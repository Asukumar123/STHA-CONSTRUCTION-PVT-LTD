export interface SectionData {
    title: string
    description: string
    image: string
    alt: string
    linkText: string
    link: string
    reverse: boolean
  }
  
  export const sections: SectionData[] = [
    {
      title: "Architectural Design",
      description: "Transforming Ideas Into Iconic Structures",
      image: "/Assets/Architectural.png",
      alt: "Restaurant interior design",
      linkText: "For architectural consultancy",
      link: "/Architectural",
      reverse: false,
    },
    {
      title: "Structural Design",
      description: "Where Precision Meets Structural Excellence",
      image: "/Assets/Structural1.png",
      alt: "Structural design wireframe",
      linkText: "For structural consultancy",
      link: "/Structural",
      reverse: true,
    },
    {
      title: "Construction",
      description: "Precision, Quality, and Excellence",
      image: "/Assets/Construction2.png",
      alt: "Construction site with cranes",
      linkText: "For construction consultancy",
      link: "/Construction",
      reverse: false,
    },
  ]
  