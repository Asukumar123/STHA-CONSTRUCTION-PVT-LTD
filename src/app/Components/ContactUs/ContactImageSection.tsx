import Image from "next/image"

export default function ContactImageSection() {
  return (
    <div className="relative space-y-4">
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src="/Assets/contact.png"
          alt="Construction site"
          width={500}
          height={400}
          className="w-full object-cover"
        />
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#3030c0] rounded-bl-[100px]" />
      </div>
    </div>
  )
}
