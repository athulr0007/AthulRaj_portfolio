import ScrollReveal from "./ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "6+", label: "Months Exp" },
  { value: "4+", label: "Projects" },
  { value: "MERN", label: "Stack" },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={sectionRef} className="py-20 sm:py-36 relative overflow-hidden" id="about">
      <motion.div
        style={{ x: bgX }}
        className="absolute top-1/2 -translate-y-1/2 -left-20 w-[120%] h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
      />

      <div className="section-container relative">
        <ScrollReveal>
          <span className="font-mono text-xs text-primary tracking-[0.3em]">01 — ABOUT</span>
        </ScrollReveal>

        <div className="mt-8 sm:mt-10 grid lg:grid-cols-5 gap-10 sm:gap-16 items-start">
          <div className="lg:col-span-3">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Crafting digital
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>experiences with
                <br />
                <span className="text-gradient">purpose & precision</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mt-6 sm:mt-8 max-w-xl">
                B.Tech CS graduate with hands-on experience in full-stack web development
                using the MERN stack. I build responsive React interfaces and secure
                REST APIs with Node.js, Express.js, and MongoDB.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mt-4 max-w-xl">
                Currently a MERN Stack Developer Intern at Tech Maghi Pvt Ltd, Kochi —
                developing production-grade applications, implementing JWT authentication,
                and crafting beautiful UI components.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <ScrollReveal key={stat.label} delay={0.2 + i * 0.1}>
                  <div className="card-glass rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-6 group hover:border-primary/30 transition-all duration-500">
                    <span className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-gradient">{stat.value}</span>
                    <span className="font-mono text-[9px] sm:text-xs text-muted-foreground tracking-wider uppercase text-center sm:text-left">{stat.label}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
