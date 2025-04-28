import Image from "next/image"
import React from "react"

type Partner = {
  id: number
  name: string
  logoUrl: string
}

const partners: Partner[] = [
  {
    id: 1,
    name: "Startup Bihar",
    logoUrl: "/Assets/logos/startup-bihar.png",
  },
  {
    id: 2,
    name: "Startup India",
    logoUrl: "/Assets/logos/startup-india.png",
  },
  {
    id: 3,
    name: "ICICI Foundation",
    logoUrl: "/Assets/logos/icici.png",
  },
  {
    id: 4,
    name: "IIM Bodh Gaya",
    logoUrl: "/Assets/logos/iimbg.png",
  },
]

export default function SupportedBy() {
  return (
    <div className="px-4 py-12 max-w-9xl ">
      <h2 className="text-3xl font-bold text-center text-[#1a1a4b] mb-10">Supported By</h2>

      <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12">
        {partners.map((partner) => (
          <Image
            key={partner.id}
            src={partner.logoUrl || "/placeholder.svg"}
            alt={`${partner.name} logo`}
            width={150}
            height={80}
            className="object-contain h-21"
          />
        ))}
      </div>
    </div>
  )
}
