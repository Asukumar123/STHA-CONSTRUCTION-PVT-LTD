"use client";

import Link from "next/link";
import { Bot, MessageCircle, Sparkles } from "lucide-react";

const chatLinks = [
  {
    href: "https://wa.me/917254065386?text=Hi%20STHA%20team%2C%20I%20want%20to%20discuss%20my%20project.",
    title: "Site Support Bot",
    description: "Chat on WhatsApp",
    icon: MessageCircle,
    accent: "from-emerald-500 to-green-600",
  },
  {
    href: "https://wa.me/917254065386?text=Hi%20STHA%20AI%20Assistant%2C%20help%20me%20choose%20a%20service.",
    title: "Project Assistant Bot",
    description: "Get service recommendations",
    icon: Bot,
    accent: "from-sky-500 to-indigo-600",
  },
];

export default function FloatingChatbots() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {chatLinks.map(({ href, title, description, icon: Icon, accent }) => (
        <Link
          key={title}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-2xl border border-white/30 bg-white/80 px-4 py-3 shadow-xl shadow-black/15 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        >
          <span
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-white shadow-lg`}
          >
            <Icon size={20} />
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-semibold text-slate-900">{title}</span>
            <span className="block text-xs text-slate-600">{description}</span>
          </span>
        </Link>
      ))}

      <span className="rounded-full border border-white/40 bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur">
        <Sparkles size={12} className="mr-1 inline" /> Online 24/7
      </span>
    </div>
  );
}
