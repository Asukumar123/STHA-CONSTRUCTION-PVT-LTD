
import ContactFormSection from "../ContactUs/ContactFormSection"

import TeamPage from "./TeamPage"

export default function ContactAboutSection() {
  return (
    <div>
    <div className="container px-4 py-12 flex flex-col md:flex-row gap-8">
      {/* Contact Form Section */}
      <div className="w-full md:w-1/2">
      <ContactFormSection />

</div>
      {/* About Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-[#1a1a4b] mb-4">About</h1>

        <p className="font-medium text-lg mb-6">We work for precision, quality and excellence</p>

        <div className="space-y-4">
          <p>
            STHA Group specializes in architectural and structural consultancy, as well as construction services,
            delivering innovative, sustainable, and high-quality solutions. Our team comprises architects, civil,
            mechanical, electrical, computer science engineers (All graduates from Indias prestigious National
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
    <div className="container px-4 py-12">
< TeamPage />
    </div>
    </div>
  )
}
