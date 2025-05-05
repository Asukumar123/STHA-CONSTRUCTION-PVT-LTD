"use client"

import { useRef } from "react"
import { sendEmail, type FormState } from "./../../actions/send-email"
import { useActionState } from "react"

const initialState: FormState = {
  success: false,
  message: "",
}

export default function ContactFormSection() {
  const [state, formAction] = useActionState(sendEmail, initialState)
  const formRef = useRef<HTMLFormElement>(null)

  // Reset form on successful submission
  if (state.success && formRef.current) {
    formRef.current.reset()
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center text-[#0a1172]">Get in touch</h1>

      <form ref={formRef} action={formAction} className="space-y-4">
        {state.message && (
          <div
            className={`p-3 rounded text-sm ${state.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {state.message}
          </div>
        )}

        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name/ Company name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 bg-[#f5f0f5] rounded border border-gray-200"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Contact number (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-3 py-2 bg-[#f5f0f5] rounded border border-gray-200"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 bg-[#f5f0f5] rounded border border-gray-200"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your question or message"
            rows={4}
            required
            className="w-full px-3 py-2 bg-[#f5f0f5] rounded border border-gray-200"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#3030c0] text-white font-medium rounded hover:bg-[#2525a0] transition-colors flex items-center justify-center"
          formNoValidate
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  )
}
