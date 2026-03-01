import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TimelineItem = ({
  children,
  delay,
  isLast = false,
}: {
  children: React.ReactNode;
  delay: number;
  isLast?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className="relative pl-8 sm:pl-10 md:pl-14"
    >
      <div className="absolute left-0 top-2 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(24_98%_59%/0.5)]" />
      {!isLast && (
        <div className="absolute left-[4px] sm:left-[5px] top-5 bottom-0 w-px bg-gradient-to-b from-primary/30 to-transparent" />
      )}
      {children}
    </motion.div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="py-20 sm:py-36 relative" id="experience">
      <div className="section-container">
        <ScrollReveal>
          <span className="font-mono text-xs text-primary tracking-[0.3em]">04 — EXPERIENCE</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-8 sm:mt-10 mb-12 sm:mb-16 tracking-tight">
            Where I've <span className="text-gradient">worked</span>
          </h2>
        </ScrollReveal>

        <div className="space-y-10 sm:space-y-14 max-w-3xl">
          <TimelineItem delay={0.2}>
            <div className="card-glass rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">MERN Stack Developer Intern</h3>
                  <p className="text-primary font-medium mt-1 text-sm sm:text-base">Tech Maghi Pvt Ltd, Kochi</p>
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-wider whitespace-nowrap">6 MO · PRESENT</span>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                {[
                  "Developed RESTful APIs using Node.js and Express.js",
                  "Implemented JWT-based authentication and authorization",
                  "Built responsive React.js UI with Material UI & Bootstrap",
                  "Designed MongoDB schemas and performed CRUD operations",
                ].map((item) => (
                  <li key={item} className="flex gap-2 sm:gap-3 items-start">
                    <span className="text-primary mt-1.5 text-[10px]">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TimelineItem>

          <TimelineItem delay={0.35} isLast>
            <div className="card-glass rounded-xl sm:rounded-2xl p-5 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight">B.Tech in Computer Science</h3>
                  <p className="text-primary font-medium mt-1 text-sm sm:text-base">College of Engineering Trikaripur</p>
                </div>
                <span className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-wider whitespace-nowrap">2021 – 2025</span>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                {["🏆 YIP Ideathon — State Level", "📜 NPTEL — Python", "🤝 NSS Volunteer"].map((badge) => (
                  <span key={badge} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-border text-xs sm:text-sm text-muted-foreground">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </TimelineItem>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
