import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import athulPhoto from "@/assets/my_image.png";
import Scene3D from "./Scene3D";

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D className="w-full h-full" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-[1]" />

      <motion.div
        style={{ y, opacity, scale }}
        className="section-container relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20 pt-20 lg:pt-0"
      >
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-primary uppercase">
              Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mt-6 leading-[0.85]"
          >
            ATHUL
            <br />
            <span className="text-gradient">RAJ</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hero-line w-24 sm:w-32 lg:w-48 my-6 sm:my-8 mx-auto lg:mx-0 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            I build scalable web apps with clean architecture & pixel-perfect interfaces that users love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
          >
            <a
              href="mailto:athulr1230@gmail.com"
              className="group relative bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider hover:shadow-[0_0_40px_hsl(24_98%_59%/0.4)] transition-all duration-300 text-center"
            >
              LET'S TALK
            </a>
            <a
              href="#projects"
              className="border border-border text-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider hover:border-primary hover:text-primary transition-all duration-300 text-center"
            >
              VIEW WORK
            </a>
          </motion.div>
        </div>

        {/* Right — Creative Photo Treatment */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative flex-shrink-0"
        >
<div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px]">
              {/* Animated orbiting rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 sm:-inset-8 rounded-full border border-primary/20"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(24_98%_59%/0.6)]" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-12 sm:-inset-16 rounded-full border border-primary/10"
            >
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/60 shadow-[0_0_8px_hsl(24_98%_59%/0.4)]" />
            </motion.div>

            {/* Hexagonal clip mask for photo */}
          <div className="relative w-full h-full">
  <img src={athulPhoto} alt="Athul Raj" className="w-full h-full object-contain object-top" />
  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)) 20%, transparent 39%)" }} />
</div>

            {/* Hex border glow */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
              <polygon
                points="50,2 98,26 98,74 50,98 2,74 2,26"
                fill="none"
                stroke="hsl(24 98% 59%)"
                strokeWidth="0.5"
                opacity="0.4"
              />
              <polygon
                points="50,2 98,26 98,74 50,98 2,74 2,26"
                fill="none"
                stroke="hsl(24 98% 59%)"
                strokeWidth="1.5"
                opacity="0.15"
                strokeDasharray="20 10"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="40s"
                  repeatCount="indefinite"
                />
              </polygon>
            </svg>

            {/* Status badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-card border border-border rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 shadow-lg"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs text-foreground">Open to work</span>
            </motion.div>

            {/* Floating tech tag */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-card border border-primary/30 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 shadow-lg"
            >
              <span className="font-mono text-[9px] sm:text-[10px] text-primary">MERN STACK</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <span className="font-mono text-[10px] text-muted-foreground tracking-[0.4em]">SCROLL</span>
          <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
