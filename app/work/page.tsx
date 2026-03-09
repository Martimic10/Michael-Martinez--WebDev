import Image from "next/image";
import { ExternalLink, ArrowRight, Hammer, UtensilsCrossed, Briefcase, Stethoscope } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const projects = [
  {
    id: 1,
    num: "01",
    title: "ProBuild Contractors",
    client: "Demo Project",
    label: "Home Services",
    description:
      "A modern contractor website built to showcase premium design, trust signals, and lead generation for home service businesses. Features a bold hero, service breakdowns, and a conversion-focused CTA flow.",
    tags: ["Next.js", "TailwindCSS", "Responsive Design", "Lead Gen"],
    icon: Hammer,
    accent: "#f59e0b",
    accentAlpha: "rgba(245,158,11,0.08)",
    accentBorder: "rgba(245,158,11,0.18)",
    image: "/probuild-demo.png",
    demoUrl: "https://pro-build-demo.vercel.app",
    year: "2025",
  },
  {
    id: 2,
    num: "02",
    title: "Ember & Olive",
    client: "Demo Project",
    label: "Food & Dining",
    description:
      "A stylish restaurant website concept built around visual storytelling, elegant menu presentation, and a warm brand identity. Focused on atmosphere-first design that turns visitors into guests.",
    tags: ["Next.js", "TailwindCSS", "Responsive Design", "Brand Identity"],
    icon: UtensilsCrossed,
    accent: "#C4963A",
    accentAlpha: "rgba(196,150,58,0.08)",
    accentBorder: "rgba(196,150,58,0.2)",
    image: "/Ember&Olive.png",
    demoUrl: "https://ember-olive-site.vercel.app",
    year: "2025",
  },
  {
    id: 3,
    num: "03",
    title: "BrightPath Dental",
    client: "Demo Project",
    label: "Professional Services",
    description:
      "A polished dental practice website designed to build patient trust from the first scroll. Clean layout, approachable tone, and a clear booking flow built to convert new visitors into scheduled appointments.",
    tags: ["Next.js", "TailwindCSS", "Responsive Design", "Trust Design"],
    icon: Briefcase,
    accent: "#0EA5E9",
    accentAlpha: "rgba(14,165,233,0.08)",
    accentBorder: "rgba(14,165,233,0.2)",
    image: "/BrightPath-Dental.png",
    demoUrl: "https://bright-path-dental.vercel.app/",
    year: "2025",
  },
  {
    id: 4,
    num: "04",
    title: "JP Buellesfeld Financial",
    client: "Client Project",
    label: "Finance & Wealth",
    description:
      "A polished financial advisory website built to establish credibility and trust. Clean navy branding, clear service breakdowns, and a professional layout designed to convert high-value prospects into consultations.",
    tags: ["Next.js", "TailwindCSS", "Responsive Design", "Finance"],
    icon: Stethoscope,
    accent: "#C9A84C",
    accentAlpha: "rgba(201,168,76,0.08)",
    accentBorder: "rgba(201,168,76,0.2)",
    image: "/JP-Project-Image.png",
    demoUrl: "https://jp-buellesfeld-financial-preview.vercel.app/",
    year: "2025",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#060610]">
        {/* Dot grid overlay */}
        <div className="fixed inset-0 dot-grid opacity-100 pointer-events-none" />

        {/* Page header */}
        <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/30 mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-5">
              Work I&apos;ve Built
            </h1>
            <p className="text-white/40 text-sm sm:text-base leading-relaxed max-w-lg">
              Modern websites for local businesses, demos, and real client projects — all built with Next.js and TailwindCSS.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/6">
              {[
                { value: "4+", label: "Projects Completed" },
                { value: "3", label: "Industries Covered" },
                { value: "100%", label: "Responsive Builds" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-xs text-white/30 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="relative px-5 sm:px-6 pb-24">
          <div className="max-w-6xl mx-auto flex flex-col gap-8">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.id}
                  className="group rounded-2xl border bg-[#0d0d1b] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:border-white/12"
                  style={{ borderColor: "rgba(255,255,255,0.07)" }}
                >
                  <div className="flex flex-col lg:flex-row">

                    {/* LEFT — content */}
                    <div className="flex flex-col justify-between p-7 sm:p-10 lg:w-[420px] lg:shrink-0">
                      <div>
                        {/* Number + label row */}
                        <div className="flex items-center justify-between mb-7">
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-mono text-white/20">{project.num}</span>
                            <span
                              className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-md"
                              style={{
                                background: project.accentAlpha,
                                color: project.accent,
                                border: `1px solid ${project.accentBorder}`,
                              }}
                            >
                              {project.label}
                            </span>
                          </div>
                          <span className="text-xs text-white/20 font-mono">{project.year}</span>
                        </div>

                        {/* Client badge */}
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/20 mb-3">
                          {project.client}
                        </p>

                        {/* Icon + Title */}
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                            style={{
                              background: project.accentAlpha,
                              border: `1px solid ${project.accentBorder}`,
                            }}
                          >
                            <Icon size={17} style={{ color: project.accent }} />
                          </div>
                          <h2 className="text-xl font-bold text-white">{project.title}</h2>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-white/45 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium text-white/30 border border-white/8 px-2.5 py-1 rounded-full"
                            >
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

                    {/* RIGHT — image */}
                    <div
                      className="relative flex-1 min-h-72 lg:min-h-[420px] overflow-hidden lg:border-l border-t lg:border-t-0 border-white/6"
                      style={{
                        background: `linear-gradient(135deg, ${project.accentAlpha} 0%, rgba(8,8,16,0.6) 100%)`,
                      }}
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

                        {/* Content */}
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
                            <div className="space-y-2 pt-1">
                              <p className="text-xs text-white/20 text-center pt-8">Screenshot coming soon</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative border-t border-white/6 px-5 sm:px-6 py-20">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Want something like this?
              </h2>
              <p className="text-white/40 text-sm max-w-sm leading-relaxed">
                I build clean, fast websites for local businesses starting at $750. Let&apos;s talk.
              </p>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-indigo-600/20 shrink-0"
            >
              Start a Project
              <ArrowRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
