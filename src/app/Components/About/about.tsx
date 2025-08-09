import ContactFormSection from "../ContactUs/ContactFormSection"
import TeamPage from "./TeamPage"

export default function ContactAboutSection() {
  return (
    <div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col lg:flex-row gap-8">
        {/* Contact Form Section */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <ContactFormSection />
        </div>
        
        {/* About Section */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a1a4b] mb-4">About</h1>

          <p className="font-medium text-base sm:text-lg mb-4 sm:mb-6">We work for precision, quality and excellence</p>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base leading-relaxed">
            <p>
              STHA Group specializes in architectural and structural consultancy, as well as construction services,
              delivering innovative, sustainable, and high-quality solutions. Our team comprises architects, civil,
              mechanical, electrical, computer science engineers (All graduates from India s prestigious National
              Institute of Technology.) and construction professionals ensures seamless project execution, from concept to
              completion.
            </p>

            <p>
              More than just structures, we build trust and excellence. With a passion for precision and innovation, we
              are committed to shaping skylines and delivering projects that stand the test of time.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <TeamPage />
      </div>
    </div>
  )
}