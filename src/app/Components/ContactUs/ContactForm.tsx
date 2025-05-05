import ContactImageSection from "./ContactImageSection"
import ContactFormSection from "./ContactFormSection"

export default function ContactForm() {
  return (
    <div className="max-w-8xl p-4 md:p-6">
      <div className="grid md:grid-cols-2 gap-[200px] items-start">
        <ContactImageSection />
        <ContactFormSection />
      </div>
    </div>
  )
}
