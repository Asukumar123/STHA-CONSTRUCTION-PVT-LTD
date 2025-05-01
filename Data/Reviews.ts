export type Testimonial = {
    id: number;
    name: string;
    content: string;
    hasHyphen: boolean;
  };
  
  export const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John Doe",
      content: "This service completely exceeded my expectations!",
      hasHyphen: false,
    },
    {
      id: 2,
      name: "Alice Johnson",
      content: "Great support team and smooth experience.",
      hasHyphen: true,
    },
    {
      id: 3,
      name: "Jane Smith",
      content: "Professional, efficient, and friendly. Highly recommend!",
      hasHyphen: true,
    },
    {
      id: 4,
      name: "Mark Lee",
      content: "Super fast and reliable service.",
      hasHyphen: false,
    },
  ];
  