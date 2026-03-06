"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-white/6">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/30 mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-5">
              Need a website that actually looks professional?
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
              If your current site feels outdated — or you need a new one from
              scratch — I can help build something modern, clean, and made to impress.
            </p>

            <div className="space-y-3">
              <p className="text-xs text-white/25 font-medium uppercase tracking-widest">Direct email</p>
              <a
                href="mailto:Martinezmichael37@yahoo.com"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Martinezmichael37@yahoo.com
              </a>
            </div>

            <div className="mt-12 w-12 h-px bg-indigo-500/30" />
          </div>

          {/* Right — form */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-start py-10">
                <div className="w-12 h-12 rounded-full bg-green-500/12 border border-green-500/20 flex items-center justify-center mb-5">
                  <CheckCircle size={22} className="text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Message received</h3>
                <p className="text-sm text-white/40 max-w-xs leading-relaxed">
                  Thanks for reaching out. I&apos;ll review your details and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-white/35 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-white/20 text-base sm:text-sm focus:outline-none focus:border-indigo-500/40 focus:bg-white/5 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/35 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-white/20 text-base sm:text-sm focus:outline-none focus:border-indigo-500/40 focus:bg-white/5 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/35 mb-2">Business Name</label>
                  <input
                    type="text"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Your Business Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-white/20 text-base sm:text-sm focus:outline-none focus:border-indigo-500/40 focus:bg-white/5 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/35 mb-2">Tell me about your project</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What kind of website do you need? Any specific features or goals?"
                    className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-white/20 text-base sm:text-sm focus:outline-none focus:border-indigo-500/40 focus:bg-white/5 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-colors duration-200 shadow-lg shadow-indigo-600/20"
                >
                  Start a Project
                  <ArrowRight size={14} />
                </button>

                <p className="text-center text-xs text-white/20">I typically respond within 24 hours.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
