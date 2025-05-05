import ContactForm from '@/app/Components/ContactUs/ContactForm';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  const images = [
    { src: "/Assets/Architecutral/Copy.png", alt: "Residential Project 1" },
    { src: "/Assets/Architecutral/Copy (2).png", alt: "Hotel Project" },
    { src: "/Assets/Architecutral/Copy (3).png", alt: "Commercial Project 1" },
    { src: "/Assets/Architecutral/Copy (4).png", alt: "Public Project" },
    { src: "/Assets/Architecutral/Copy (5).png", alt: "Hostel Building" },
    { src: "/Assets/Architecutral/Copy (6).png", alt: "Commercial Project 2" },
  ];

  return (
    <div className="p-0 space-y-4">
      {images.map((img, index) => (
        <div key={index}>
          <Link href={`/project/${index}`}>
            <div className="relative w-full h-[800px] overflow-hidden cursor-pointer">
              <Image src={img.src} alt={img.alt} fill priority className="object-cover" />
            </div>
          </Link>
         
        </div>
        
      ))}
       <ContactForm />
    </div>
    
  );
}
