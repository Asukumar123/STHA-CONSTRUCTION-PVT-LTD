import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <div className="max-w-4xl mx-auto p-4 mb-[400px] bg-white shadow-md rounded-lg">
      <h1 className="text-4xl font-bold text-[#0a0a5e] mb-8">Get in touch</h1>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-base font-medium">
              Name/ Company name
            </label>
            <Input id="name" placeholder="Kunal" className="bg-[#f2e6e6] border-none h-12" />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-base font-medium">
              Contact number (Optional)
            </label>
            <Input id="phone" placeholder="7254065386" className="bg-[#f2e6e6] border-none h-12" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-base font-medium">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="email@janesfakedomain.net"
            className="bg-[#f2e6e6] border-none h-12"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-base font-medium">
            Description (Optional)
          </label>
          <Textarea
            id="message"
            placeholder="Enter your question or message"
            className="bg-[#f2e6e6] border-none min-h-[200px]"
          />
        </div>

        <Button type="submit" className="w-full bg-[#3939f8] hover:bg-[#2e2ed3] text-white h-14 text-lg">
          Submit
        </Button>
      </form>
    </div>
  )
}
