import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "HTML5 / CSS3", level: 92 },
      { name: "Material UI", level: 75 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "REST API Design", level: 88 },
      { name: "JWT Authentication", level: 82 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", level: 83 },
      { name: "Git & GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
  {
    title: "Languages & Concepts",
    skills: [
      { name: "Python", level: 70 },
      { name: "C Programming", level: 65 },
      { name: "MVC Architecture", level: 80 },
      { name: "AI Integration", level: 72 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs sm:text-sm font-medium text-foreground">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.3, duration: 0.4 }}
          className="font-mono text-[10px] sm:text-xs text-primary"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1 sm:h-1.5 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ delay, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          className="h-full rounded-full relative"
          style={{
            background: "linear-gradient(90deg, hsl(24 98% 59%), hsl(35 100% 65%))",
          }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(24_98%_59%/0.6)]" />
        </motion.div>
      </div>
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-20 sm:py-36 relative" id="skills">
      <div className="section-container">
        <ScrollReveal>
          <span className="font-mono text-xs text-primary tracking-[0.3em]">02 — SKILLS</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-8 sm:mt-10 mb-4 sm:mb-6 tracking-tight">
            My <span className="text-gradient">tech arsenal</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mb-12 sm:mb-16">
            Tools and technologies I use to bring ideas to life.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {skillGroups.map((group, gi) => (
            <ScrollReveal key={group.title} delay={gi * 0.08}>
              <div className="card-glass rounded-xl sm:rounded-2xl p-5 sm:p-8 hover:border-primary/20 transition-all duration-500">
                <h3 className="font-mono text-[10px] sm:text-xs text-primary tracking-[0.2em] mb-5 sm:mb-8 uppercase">
                  {group.title}
                </h3>
                <div className="space-y-4 sm:space-y-5">
                  {group.skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={gi * 0.1 + i * 0.08}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
