import { Globe, Lock } from "lucide-react"

export default function InnovativeEngineeringSolutions() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl ml-12 md:text-4xl font-bold text-[#1a1a4b] mb-12 tracking-tight">
        INNOVATIVE ENGINEERING SOLUTIONS
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Advance Assessment */}
        <div className="flex flex-col">
          <Globe className="h-6 w-6 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Advance Assesment</h2>
          <p className="text-gray-600 text-sm">
            Body text for whatever you like to say. Add main takeaway points, quotes, anecdotes, or even a very short
            story.
          </p>
        </div>

        {/* Customize Innovative Solution */}
        <div className="flex flex-col">
          <Globe className="h-6 w-6 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Customize Innovative Solution</h2>
          <p className="text-gray-600 text-sm">
            Body text for whatever you like to say. Add main takeaway points, quotes, anecdotes, or even a very short
            story.
          </p>
        </div>

        {/* Precisely Execution */}
        <div className="flex flex-col">
          <Lock className="h-6 w-6 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Precisely Execution</h2>
          <p className="text-gray-600 text-sm">
            Body text for whatever you like to claim. Add main takeaway points, quotes, anecdotes, or even a very
            short story.
          </p>
        </div>

        {/* Sharpe monitoring */}
        <div className="flex flex-col">
          <Lock className="h-6 w-6 mb-4" />
          <h2 className="text-lg font-semibold mb-2">Sharpe monitoring</h2>
          <p className="text-gray-600 text-sm">
            Body text for whatever you like to claim. Add main takeaway points, quotes, anecdotes, or even a very
            short story.
          </p>
        </div>
      </div>
    </div>
  )
}
