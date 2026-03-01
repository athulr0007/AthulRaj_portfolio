import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const socials = [
  { icon: Mail, label: "Email", href: "mailto:athulr1230@gmail.com", text: "athulr1230@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+919061529003", text: "+91 906 152 9003" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/athulr4j", text: "athulr4j" },
  { icon: Github, label: "GitHub", href: "https://github.com/athulr0007", text: "athulr0007" },
];

const ContactSection = () => {
  return (
    <section className="py-20 sm:py-36 relative overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-[6rem] sm:text-[12rem] md:text-[18rem] font-extrabold text-foreground/[0.02] tracking-tighter leading-none">
          HELLO
        </span>
      </div>

      <div className="section-container relative">
        <ScrollReveal>
          <span className="font-mono text-xs text-primary tracking-[0.3em]">05 — CONTACT</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mt-8 sm:mt-10 mb-4 sm:mb-6 tracking-tight">
            Let's build
            <br />
            something <span className="text-gradient">great</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md mb-10 sm:mb-14">
            I'm currently looking for Frontend, Backend, or Full Stack Developer roles. Let's connect!
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
          {socials.map((item, i) => (
            <ScrollReveal key={item.label} delay={0.25 + i * 0.08}>
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-glass rounded-xl sm:rounded-2xl p-4 sm:p-6 flex items-center gap-3 sm:gap-4 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 flex-shrink-0">
                  <item.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-[9px] sm:text-[10px] text-muted-foreground tracking-wider uppercase">{item.label}</div>
                  <div className="text-xs sm:text-sm text-foreground truncate">{item.text}</div>
                </div>
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </a>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.5}>
          <div className="mt-10 sm:mt-14">
            <a
              href="mailto:athulr1230@gmail.com"
              className="inline-block bg-primary text-primary-foreground px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider hover:shadow-[0_0_40px_hsl(24_98%_59%/0.4)] transition-all duration-300"
            >
              SAY HELLO →
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className="section-container mt-20 sm:mt-28 pt-6 sm:pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-2">
          <span className="font-mono text-xs">© 2025 Athul Raj</span>
          <span className="font-mono text-xs">Built with passion</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
