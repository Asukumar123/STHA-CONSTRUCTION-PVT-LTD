import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative w-full aspect-square md:aspect-auto md:h-[400px] overflow-hidden rounded-md">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Conact.PNG-5hbw6ev7HEvRQxi6DEI729iP18CPOo.png"
            alt="Construction scaffolding against sunset sky"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Contact us</h2>
          <p className="text-lg text-gray-600">Let Build Something Great Together</p>
          <p className="text-base text-gray-700">
            Have a project in mind? Whether its architectural design, construction, or renovation/ restoration, our
            team is here to bring your vision to life. Get in touch with us for consultations, inquiries, or
            collaborations.
          </p>
          <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-md">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  )
}
