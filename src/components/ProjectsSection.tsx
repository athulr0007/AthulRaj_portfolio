import ScrollReveal from "./ScrollReveal";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import projectAI from "@/assets/project-ai-interview.jpg";
import projectSocial from "@/assets/project-social-media.jpg";
import projectEvent from "@/assets/project-event-mgmt.jpg";
import projectCulinary from "@/assets/project-culinary.jpg";

const projects = [
  {
    number: "01",
    title: "AI-Powered Mock Interview System",
    description:
      "Simulates interview scenarios with AI APIs for dynamic question generation and automated answer evaluation.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "AI API"],
    liveLink: "#",
    githubLink: "https://github.com/athulr0007/Ai-mock-interview-system.git",
    image: projectAI,
  },
  {
    number: "02",
    title: "Social Media Platform",
    description:
      "Full-stack social app with JWT auth, posts, likes, comments, real-time features, and AI-based functionalities.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "AI"],
    liveLink: "https://spark-network.vercel.app",
    githubLink: "https://github.com/athulr0007/social-media-mini-platform.git",
    image: projectSocial,
  },
  {
    number: "03",
    title: "Event Management System",
    description:
      "Complete event management with responsive interfaces and API integration for event creation and management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    liveLink: "https://crowd-seven.vercel.app",
    githubLink: "https://github.com/athulr0007/Event-booking-website-2.0.git",
    image: projectEvent,
  },
  {
    number: "04",
    title: "Culinary Compass",
    description:
      "A dynamic recipe recommendation web application that helps users discover new dishes and cooking inspiration.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
    image: projectCulinary,
  },
];

const ProjectCard = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 0.4, 0.25, 1] }}
      className="group relative"
    >
      <div className="card-glass rounded-2xl sm:rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500">
        {/* Project image */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

          {/* Number overlay */}
          <span className="absolute top-4 right-4 sm:top-6 sm:right-6 font-mono text-4xl sm:text-6xl font-extrabold text-foreground/10">
            {project.number}
          </span>

          {/* Links overlay */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex gap-2">
            {/* TODO: Update with actual links */}
            <a href={project.githubLink} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background/60 backdrop-blur-md border border-border/50 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all" aria-label="GitHub">
              <Github size={14} />
            </a>
            <a href={project.liveLink} className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background/60 backdrop-blur-md border border-border/50 flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-all" aria-label="Live Demo">
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 md:p-10">
          <span className="font-mono text-[10px] sm:text-xs text-primary tracking-[0.2em]">PROJECT {project.number}</span>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-3 mb-3 sm:mb-4 group-hover:text-gradient transition-all duration-300 tracking-tight">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-lg">{project.description}</p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
            {project.tech.map((t) => (
              <span key={t} className="font-mono text-[9px] sm:text-[10px] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-secondary text-muted-foreground tracking-wider">
                {t}
              </span>
            ))}
          </div>

          <a
            href={project.liveLink}
            className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs text-primary hover:gap-3 transition-all duration-300 tracking-wider"
          >
            VIEW PROJECT <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="py-20 sm:py-36 relative" id="projects">
      <div className="section-container">
        <ScrollReveal>
          <span className="font-mono text-xs text-primary tracking-[0.3em]">03 — PROJECTS</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mt-8 sm:mt-10 mb-4 tracking-tight">
            Selected <span className="text-gradient">works</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-12 sm:mb-16 max-w-xl">
            A curated collection of projects showcasing full-stack development.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="card-glass rounded-2xl sm:rounded-3xl p-8 sm:p-10 border-dashed flex items-center justify-center min-h-[150px] sm:min-h-[200px] mt-6 sm:mt-8"
        >
          <div className="text-center">
            <span className="font-mono text-[10px] sm:text-xs text-muted-foreground tracking-[0.3em]">MORE COMING SOON</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
