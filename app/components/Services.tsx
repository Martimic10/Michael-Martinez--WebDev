import { Globe, Megaphone, RefreshCw, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description:
      "Full websites that are fast, modern, and built to represent your brand professionally from day one.",
    num: "01",
  },
  {
    icon: Megaphone,
    title: "Landing Pages",
    description:
      "High-converting single-page sites built for a product, service, or campaign — focused and effective.",
    num: "02",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    description:
      "Transform an outdated site into a polished presence that actually reflects your business today.",
    num: "03",
  },
  {
    icon: Wrench,
    title: "Ongoing Updates",
    description:
      "Need regular changes or new pages? I offer ongoing support so your site stays fresh and current.",
    num: "04",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10 sm:mb-14">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/30 mb-3">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What I Can Build
            </h2>
          </div>
          <p className="text-sm text-white/35 max-w-xs leading-relaxed sm:text-right">
            Everything from full business websites to targeted landing pages.
          </p>
        </div>

        <div className="flex flex-col divide-y divide-white/6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group py-6 sm:py-7 hover:bg-white/2 transition-colors duration-200 px-2 rounded-xl -mx-2"
              >
                {/* Mobile: icon + title in one row, description below */}
                {/* Desktop: number + icon + title + description + arrow in one row */}
                <div className="flex items-start sm:items-center gap-4">
                  {/* Number — hidden on mobile */}
                  <span className="hidden sm:block text-xs font-mono text-white/20 w-8 shrink-0 pt-0.5">
                    {service.num}
                  </span>

                  {/* Icon */}
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/15 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-indigo-400" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-base font-semibold text-white sm:w-52 shrink-0">
                        {service.title}
                      </h3>
                      {/* Description inline on desktop */}
                      <p className="hidden sm:block text-sm text-white/40 leading-relaxed flex-1">
                        {service.description}
                      </p>
                      {/* Arrow — desktop only */}
                      <div className="hidden sm:block text-white/20 group-hover:text-white/50 transition-colors duration-200 shrink-0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    {/* Description below on mobile */}
                    <p className="sm:hidden text-sm text-white/40 leading-relaxed mt-1.5">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
