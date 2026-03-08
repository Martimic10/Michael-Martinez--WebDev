import Image from "next/image";
import { ExternalLink, Hammer, UtensilsCrossed, Briefcase } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ProBuild Contractors",
    description:
      "A modern contractor website demo built to showcase premium design, trust, and lead generation for home service businesses.",
    tags: ["Next.js", "TailwindCSS", "Responsive Design"],
    icon: Hammer,
    accent: "#f59e0b",
    accentAlpha: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.2)",
    label: "Home Services",
    num: "01",
    image: "/probuild-demo.png",
    demoUrl: "https://pro-build-demo.vercel.app",
  },
  {
    id: 2,
    title: "Ember & Olive",
    description:
      "A stylish restaurant website concept focused on visual presentation, menu flow, and modern branding.",
    tags: ["Next.js", "TailwindCSS", "Responsive Design"],
    icon: UtensilsCrossed,
    accent: "#f43f5e",
    accentAlpha: "rgba(244,63,94,0.08)",
    accentBorder: "rgba(244,63,94,0.2)",
    label: "Food & Dining",
    num: "02",
    image: "/Ember&Olive.png",
    demoUrl: "https://ember-olive-site.vercel.app",
  },
  {
    id: 3,
    title: "Professional Services",
    description:
      "A polished service-business website concept designed for trust, clarity, and conversion.",
    tags: ["Next.js", "TailwindCSS", "Responsive Design"],
    icon: Briefcase,
    accent: "#818cf8",
    accentAlpha: "rgba(129,140,248,0.08)",
    accentBorder: "rgba(129,140,248,0.2)",
    label: "Professional Services",
    num: "03",
    image: null,
    demoUrl: null,
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="py-16 sm:py-24 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-12 sm:mb-16">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/30 mb-3">
              Featured Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Website Demos
            </h2>
          </div>
          <p className="text-sm text-white/35 max-w-xs leading-relaxed sm:text-right">
            Real-world demos showing what a modern, professional business website can look like.
          </p>
        </div>

        {/* Stacked horizontal project cards */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group rounded-2xl border bg-[#0d0d1b] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-white/12"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <div className="flex flex-col lg:flex-row">

                  {/* LEFT — content */}
                  <div className="flex flex-col justify-between p-7 sm:p-9 lg:w-95 lg:shrink-0">
                    <div>
                      {/* Number + label */}
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-xs font-mono text-white/20">{project.num}</span>
                        <span
                          className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md"
                          style={{ background: project.accentAlpha, color: project.accent, border: `1px solid ${project.accentBorder}` }}
                        >
                          {project.label}
                        </span>
                      </div>

                      {/* Icon + Title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: project.accentAlpha, border: `1px solid ${project.accentBorder}` }}
                        >
                          <Icon size={16} style={{ color: project.accent }} />
                        </div>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-white/45 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] font-medium text-white/30 border border-white/8 px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 hover:brightness-125 w-fit"
                        style={{
                          color: project.accent,
                          borderColor: project.accentBorder,
                          background: project.accentAlpha,
                        }}
                      >
                        View Live Demo
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border opacity-35 w-fit cursor-default"
                        style={{
                          color: project.accent,
                          borderColor: project.accentBorder,
                          background: project.accentAlpha,
                        }}
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>

                  {/* RIGHT — image / mockup */}
                  <div
                    className="relative flex-1 min-h-70 lg:min-h-95 overflow-hidden lg:border-l border-t lg:border-t-0 border-white/6"
                    style={{ background: `linear-gradient(135deg, ${project.accentAlpha} 0%, rgba(8,8,16,0.6) 100%)` }}
                  >
                    {/* Browser chrome */}
                    <div className="absolute inset-4 sm:inset-6 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                      {/* Top bar */}
                      <div className="h-8 bg-[#0d0d1f] border-b border-white/8 flex items-center px-3 gap-2 shrink-0">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ background: project.accent, opacity: 0.5 }} />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/12" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/12" />
                        </div>
                        <div className="flex-1 bg-white/6 rounded h-4 mx-3 flex items-center px-2.5">
                          <div className="w-28 h-1.5 rounded-full bg-white/15" />
                        </div>
                      </div>

                      {/* Content: real image or skeleton */}
                      {project.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 1024px) 100vw, 60vw"
                          />
                        </div>
                      ) : (
                        <div className="p-5 space-y-3 bg-[#09091a] h-full overflow-hidden">
                          <div
                            className="rounded-lg p-5 space-y-2.5"
                            style={{
                              background: `linear-gradient(120deg, ${project.accentAlpha}, rgba(8,8,16,0.3))`,
                              border: `1px solid ${project.accentBorder}`,
                            }}
                          >
                            <div className="w-24 h-2.5 rounded-full" style={{ background: project.accent, opacity: 0.2 }} />
                            <div className="w-48 h-4 rounded-full bg-white/15" />
                            <div className="w-36 h-3 rounded-full bg-white/10" />
                            <div className="w-44 h-2.5 rounded-full bg-white/6" />
                            <div className="flex gap-2 pt-1">
                              <div className="h-8 w-20 rounded-lg" style={{ background: project.accent, opacity: 0.45 }} />
                              <div className="h-8 w-20 rounded-lg border border-white/12" />
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            {[1, 2, 3].map((j) => (
                              <div key={j} className="rounded-xl bg-white/4 border border-white/6 p-3 space-y-2">
                                <div className="w-5 h-5 rounded-md" style={{ background: project.accentAlpha, border: `1px solid ${project.accentBorder}` }} />
                                <div className="w-full h-2 rounded-full bg-white/10" />
                                <div className="w-3/4 h-2 rounded-full bg-white/6" />
                              </div>
                            ))}
                          </div>
                          <div className="space-y-2 pt-1">
                            <div className="h-2 rounded-full bg-white/6 w-full" />
                            <div className="h-2 rounded-full bg-white/4 w-4/5" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Hover overlay — pointer-events-none so it never blocks clicks */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
