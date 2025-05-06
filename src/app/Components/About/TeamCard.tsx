// components/TeamCard.tsx
import Image from "next/image";

type TeamCardProps = {
  name: string;
  description: string;
  imageSrc: string;
};

export default function TeamCard({ name, description, imageSrc }: TeamCardProps) {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-xl p-5 shadow-lg flex items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/30">
      <div className="w-20 h-20 mr-5 shrink-0 relative">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="rounded-xl object-cover"
        />
      </div>
      <div className="text-black">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-black">{description}</p>
      </div>
    </div>
  );
}
