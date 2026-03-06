import { Check, ArrowRight } from "lucide-react";

const features = [
  "Up to 4 pages",
  "Mobile responsive",
  "Contact form",
  "Basic SEO setup",
  "Professional custom design",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/30 mb-3">
              Pricing
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Simple Pricing
            </h2>
          </div>
          <p className="text-sm text-white/35 max-w-xs leading-relaxed sm:text-right">
            No hidden fees. No long-term contracts. Clear scope before we start.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — price & description */}
          <div>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-5xl sm:text-6xl font-bold text-white tracking-tight">$650</span>
              <span className="text-lg text-white/30 font-medium">starting</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed mb-8 max-w-sm">
              Business websites starting at $650. Final pricing depends on the
              number of pages, design complexity, and custom features needed.
            </p>

            {/* Availability */}
            <div className="flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm text-white/40">Currently accepting a few new projects.</span>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-indigo-600/20"
            >
              Request a Quote
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right — feature list */}
          <div className="rounded-2xl border border-white/8 bg-[#0d0d1b] p-7">
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-white/30 mb-5">
              What&apos;s included
            </p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-indigo-400" />
                  </div>
                  <span className="text-sm text-white/65">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
