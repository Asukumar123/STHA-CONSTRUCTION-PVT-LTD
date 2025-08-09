import ContactImageSection from "./ContactImageSection"
import ContactFormSection from "./ContactFormSection"

export default function ContactForm() {
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 items-start">
        <div className="order-2 md:order-1">
          <ContactImageSection />
        </div>
        <div className="order-1 md:order-2">
          <ContactFormSection />
        </div>
      </div>
    </div>
  )
}