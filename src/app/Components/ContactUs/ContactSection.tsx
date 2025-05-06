import Image from "next/image"


export default function ContactSection() {
  return (
    <div className="container  mx-[50px]  px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="relative">
          <div className="mb-6">
          
            <div className="relative">
              <Image
                src="/Assets/contact.png"
                alt="Construction project visualization"
                width={605.99}
                height={508}
                className="rounded-lg"
              />
  
              {/* Blue decorative shape */}
              
            </div>
          </div>

          {/* Purple quote box */}
       
        </div>

        {/* Right Column */}
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-[#1e3a8a] mb-[30px]">Contact us</h2>
          <p className="text-gray-500 mb-[50px]">Let&apos;s Build Something Great Together</p>
          <p className="text-xl text-gray-800 font-bold leading-relaxed">
            Have a project in mind? Whether it&apos;s architectural design, construction, or renovation restoration, our
            team is here to bring your vision to life. Get in touch with us for consultations, inquiries, or
            collaborations.
          </p>
        </div>
      </div>
    </div>
  )
}
