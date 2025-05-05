import { Globe, Lock } from "lucide-react";

export default function InnovativeEngineeringSolutions() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#1a1a4b] mb-18 tracking-tight">
        Innovative Engineering Solutions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Advanced Assessment */}
        <div className="flex items-start gap-4">
          <Globe className="h-8 w-8 text-[#1a1a4b]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1a1a4b] mb-2">Advanced Assessment</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Gain deep insights with our thorough evaluations. We blend innovation and precision to uncover hidden
              opportunities and potential.
            </p>
          </div>
        </div>

        {/* Customized Innovative Solution */}
        <div className="flex items-start gap-4">
          <Globe className="h-8 w-8 text-[#1a1a4b]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1a1a4b] mb-2">Customized Innovative Solution</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Tailored strategies engineered to meet your specific goals. We build solutions that are agile, scalable,
              and future-ready.
            </p>
          </div>
        </div>

        {/* Precise Execution */}
        <div className="flex items-start gap-4">
          <Lock className="h-8 w-8 text-[#1a1a4b]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1a1a4b] mb-2">Precise Execution</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              From plan to performance — we implement with accuracy and purpose, ensuring reliability every step of the
              way.
            </p>
          </div>
        </div>

        {/* Sharp Monitoring */}
        <div className="flex items-start gap-4">
          <Lock className="h-8 w-8 text-[#1a1a4b]" />
          <div>
            <h2 className="text-xl font-semibold text-[#1a1a4b] mb-2">Sharp Monitoring</h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Our vigilant systems keep a constant pulse on performance, enabling proactive adjustments and sustained
              excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
