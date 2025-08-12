import Image from "next/image"

export default function ContactSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column - Image */}
        <div className="relative w-full">
          <div className="relative w-full aspect-[4/3] max-w-lg mx-auto md:mx-0">
            <Image
              src="/Assets/contact.png"
              alt="Construction project visualization"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-6 sm:mb-8">
            Contact us
          </h2>
          <p className="text-gray-500 mb-6 sm:mb-8 text-base sm:text-lg">
            Let&apos;s Build Something Great Together
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-800 font-medium leading-relaxed">
            Have a project in mind? Whether it&apos;s architectural design, construction, or renovation restoration, our
            team is here to bring your vision to life. Get in touch with us for consultations, inquiries, or
            collaborations.
          </p>
        </div>
      </div>
    </div>
  )
}
