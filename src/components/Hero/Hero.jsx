import { motion } from "framer-motion";
import { ArrowDown, Github, Mail } from "lucide-react";
import ProfileImage from "../ProfileImage/ProfileImage";
import { siteMeta } from "../../data/site";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import "./Hero.css";

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  const introVariants = reduced
    ? {}
    : {
        hidden: { opacity: 0, y: 24 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.15 + i * 0.12,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        }),
      };

  return (
    <section id="home" className="hero section" aria-labelledby="hero-heading">
      <div className="container hero__layout">
        <div className="hero__content">
          <motion.p
            className="hero__eyebrow"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={introVariants}
          >
          
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="hero__title"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={introVariants}
          >
            Hi, I&apos;m{" "}
            <span className="hero__name">{siteMeta.name}</span>
          </motion.h1>

          <motion.p
            className="hero__role"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={introVariants}
          >
            {siteMeta.title}
          </motion.p>

          <motion.p
            className="hero__summary"
            custom={3}
            initial="hidden"
            animate="visible"
            variants={introVariants}
          >
            {siteMeta.tagline}
          </motion.p>

          <motion.div
            className="hero__actions"
            custom={4}
            initial="hidden"
            animate="visible"
            variants={introVariants}
          >
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              <Mail size={18} aria-hidden="true" />
              Get in touch
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/mi11io0n-5agni"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
          </motion.div>

          <motion.a
            className="hero__scroll"
            href="#about"
            aria-label="Scroll to about section"
            custom={5}
            initial="hidden"
            animate="visible"
            variants={introVariants}
          >
            <ArrowDown size={20} aria-hidden="true" />
          </motion.a>
        </div>

        <motion.div
          className="hero__profile"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={introVariants}
        >
          <div className="hero__profile-frame">
            <ProfileImage size="lg" priority />
          </div>
          <p className="hero__profile-caption">{siteMeta.name}</p>
          <p className="hero__profile-sub">{siteMeta.title}</p>
        </motion.div>
      </div>
    </section>
  );
}
