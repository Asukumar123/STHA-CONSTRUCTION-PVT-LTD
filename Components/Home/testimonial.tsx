import React from "react"

type Testimonial = {
  id: number
  name: string
  content: string
  hasHyphen: boolean
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ravi",
    content: "Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    hasHyphen: true,
  },
  {
    id: 2,
    name: "Ramesh",
    content: "Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    hasHyphen: false,
  },
  {
    id: 3,
    name: "Raju",
    content: "Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    hasHyphen: true,
  },
  {
    id: 4,
    name: "Suresh",
    content: "Body text for whatever you'd like to suggest. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    hasHyphen: false,
  },
]

export default function Testimonials() {
  return (
    <div className="px-4 py-12 max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#1a1a4b] mb-10">Our Customer Says</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-[#f2e6ff] flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4b2e83"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="8" r="5" />
                <path d="M20 21a8 8 0 0 0-16 0" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-lg">
                {testimonial.hasHyphen ? `${testimonial.name}-` : testimonial.name}
              </h3>
              <p className="text-gray-700 mt-1">{testimonial.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
