import { Github, Linkedin, Twitter } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Martimic10" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/michael-martinez-05010120b/"},
  { icon: Twitter, label: "Twitter", href: "https://x.com/Martimic10"},
];

export default function Footer() {
  return (
    <footer className="border-t border-white/6">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                M
              </div>
              <span className="text-sm font-semibold text-white/60">Michael Martinez</span>
            </div>
            <p className="text-xs text-white/25 max-w-xs leading-relaxed">
              Freelance web developer building modern, premium websites for businesses.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg border border-white/8 flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/15 transition-all duration-200"
                >
                  <Icon size={13} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="divider mt-8 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Michael Martinez. All rights reserved.
          </p>
          <p className="text-xs text-white/15">Designed & built by Michael Martinez</p>
        </div>
      </div>
    </footer>
  );
}
