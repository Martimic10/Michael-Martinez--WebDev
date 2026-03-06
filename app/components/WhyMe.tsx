import { Palette, Smartphone, Clock, Code2 } from "lucide-react";

const reasons = [
  {
    icon: Palette,
    title: "Modern Design",
    description:
      "Websites that feel current, polished, and built to stand out — not templates that blend in with everyone else.",
  },
  {
    icon: Smartphone,
    title: "Responsive Development",
    description:
      "Every site is designed to work smoothly across desktop, tablet, and mobile — because your clients are everywhere.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description:
      "Clear communication and efficient builds so projects move quickly. No waiting around for weeks.",
  },
  {
    icon: Code2,
    title: "Clean UI & Code",
    description:
      "Professional front-end execution with attention to detail. Every component is built thoughtfully.",
  },
];

export default function WhyMe() {
  return (
    <section className="py-16 sm:py-24 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/30 mb-3">
              Why Work With Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What you can expect
            </h2>
          </div>
          <p className="text-sm text-white/35 max-w-xs leading-relaxed sm:text-right">
            I care about the outcome — not just the deliverable.
          </p>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-px bg-white/6 rounded-2xl overflow-hidden border border-white/6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-[#080810] p-5 sm:p-7 hover:bg-[#0c0c18] transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center mb-5">
                  <Icon size={16} className="text-indigo-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
