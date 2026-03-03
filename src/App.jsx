import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  ChevronRight,
  ArrowUpRight,
  Terminal,
  Activity,
  Smartphone,
  Layout,
  BarChart3,
} from "lucide-react";
import { profile, projects, skills } from "./data";

const skillLevels = {
  "Node.js & Express": { level: 95, category: "Backend" },
  "PostgreSQL (PostGIS)": { level: 92, category: "Backend" },
  "Redis & Caching": { level: 88, category: "Backend" },
  "Docker & CI/CD": { level: 90, category: "DevOps" },
  "React & Tailwind": { level: 85, category: "Frontend" },
  "Flutter (Mobile)": { level: 82, category: "Frontend" },
  "Python (Scikit-Learn)": { level: 84, category: "ML/Data" },
  "System Design": { level: 93, category: "Backend" },
};

const iconByCategory = {
  "System Design": Smartphone,
  "Full Stack": Layout,
  "Data Science": BarChart3,
};

function Nav() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-6 py-6 md:px-10 md:py-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl md:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/80">EB / Estifanos Besfat</p>
        <div className="hidden gap-6 md:flex">
          {[
            { label: "Work", id: "work" },
            { label: "Skills", id: "skills" },
            { label: "About", id: "about" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-emerald-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-36 md:px-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
          backgroundSize: "42px 42px",
        }}
      />
      <div className="pointer-events-none absolute -top-28 left-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-emerald-500" />
            <span className="text-xs uppercase tracking-[0.22em] text-emerald-300">Available for new challenges</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-[14vw] font-black leading-[0.85] tracking-tight text-white md:text-[7.6vw]"
          >
            CRAFTING
            <br />
            <span className="font-serif italic text-white/25">INTELLIGENT</span>
            <br />
            SYSTEMS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-white/70 md:text-xl"
          >
            I am {profile.name}, a {profile.role}. I build scalable backend systems, real-time applications, and machine
            learning products with production-grade architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-black transition-all hover:bg-emerald-500 hover:text-white"
            >
              View Projects <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center gap-3">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-3 hover:bg-white/5">
                <Github className="h-5 w-5" />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-3 hover:bg-white/5">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={profile.socials.email} className="rounded-full border border-white/15 p-3 hover:bg-white/5">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-500/30 via-cyan-500/15 to-blue-500/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur">
            <img src={profile.image} alt={profile.name} className="aspect-[4/5] w-full rounded-[1.4rem] object-cover object-center" />
            <div className="mt-4 rounded-xl border border-white/10 bg-black/40 px-4 py-3">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/45">Focus Areas</p>
              <p className="mt-1 text-sm text-emerald-300">Distributed Systems, API Architecture, ML Engineering</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 right-20 hidden opacity-20 lg:block"
      >
        <Terminal className="h-56 w-56 text-emerald-500" />
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const Icon = iconByCategory[project.category] || Layout;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
    >
      <div className="p-7 md:p-8">
        <div className="mb-6 flex items-start justify-between">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
            <Icon className="h-6 w-6" />
          </div>

          <div className="flex gap-2">
            {project.links.backend && (
              <a
                href={project.links.backend}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2 hover:bg-white/5"
                aria-label={`${project.title} backend code`}
              >
                <Code2 className="h-4 w-4" />
              </a>
            )}
            {project.links.frontend && (
              <a
                href={project.links.frontend}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2 hover:bg-white/5"
                aria-label={`${project.title} frontend code`}
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 p-2 hover:bg-white/5"
                aria-label={`${project.title} demo`}
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-emerald-300">{project.category}</p>
        <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-emerald-300">{project.title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-white/65">{project.description}</p>

        <ul className="mb-6 space-y-2 text-sm text-white/70">
          {project.features.slice(0, 3).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/55">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-emerald-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.article>
  );
}

function SkillsSection({ groupedSkills }) {
  const categories = ["Backend", "Frontend", "ML/Data", "DevOps"];

  return (
    <section id="skills" className="bg-[#060606] px-6 py-28 md:px-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-16">
          <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
            TECHNICAL
            <br />
            STACK.
          </h2>
          <p className="mt-5 max-w-xl text-white/55">A focused toolkit built for performance, reliability, and scale.</p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, columnIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: columnIndex * 0.08 }}
            >
              <h3 className="mb-7 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {category}
              </h3>
              <ul className="space-y-6">
                {(groupedSkills[category] || []).map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-2 flex items-end justify-between">
                      <span className="text-base text-white/90">{skill.name}</span>
                      <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] w-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="h-[2px] bg-emerald-400"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-[#060606] px-6 py-28 md:px-10">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <img src={profile.image} alt={profile.name} className="aspect-square w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-bl-3xl border-b-2 border-l-2 border-emerald-400" />
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-tr-3xl border-r-2 border-t-2 border-emerald-400" />
        </motion.div>

        <div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Engineering with
            <br />
            <span className="text-emerald-400">Purpose.</span>
          </h2>
          <div className="mt-8 space-y-5 text-white/65">
            <p>
              I design software that is resilient, scalable, and maintainable under real production pressure. My work combines
              backend architecture, geospatial data systems, and machine learning workflows.
            </p>
            <p>
              From transactional consistency to real-time tracking and model-driven analytics, I prioritize strong engineering
              fundamentals and measurable business impact.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <p className="text-3xl font-bold text-white">3+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35">Major Systems Shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">8+</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35">Core Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#060606] px-6 py-16 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-10 md:flex-row md:items-end">
        <div>
          <h3 className="text-3xl font-bold text-white md:text-4xl">
            Let&apos;s build something
            <br />
            extraordinary.
          </h3>
          <a href={profile.socials.email} className="mt-4 inline-block text-sm text-emerald-300 hover:text-emerald-200">
            estifanosbesfat@gmail.com
          </a>
        </div>

        <div className="flex gap-8 text-sm text-white/70">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="transition hover:text-emerald-300">
            GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-emerald-300">
            LinkedIn
          </a>
          <a href={profile.socials.email} className="transition hover:text-emerald-300">
            Email
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 w-full max-w-6xl border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/35">
        <p>© 2026 {profile.name}. Built with React, Tailwind, and Framer Motion.</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const groupedSkills = useMemo(() => {
    const groups = { Backend: [], Frontend: [], "ML/Data": [], DevOps: [] };

    skills.forEach((name) => {
      const meta = skillLevels[name] || { level: 75, category: "Backend" };
      groups[meta.category].push({ name, level: meta.level });
    });

    return groups;
  }, []);

  return (
    <div className="min-h-screen bg-[#060606] text-white selection:bg-emerald-500 selection:text-white">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-8 w-8 rounded-full border border-emerald-500/80 md:block"
        animate={{ x: mousePos.x - 16, y: mousePos.y - 16 }}
        transition={{ type: "spring", damping: 30, stiffness: 220, mass: 0.45 }}
      />

      <Nav />
      <main>
        <Hero />

        <section id="work" className="bg-[#060606] px-6 py-28 md:px-10">
          <div className="mx-auto w-full max-w-6xl">
            <div className="mb-14 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-5xl font-black tracking-tight text-white md:text-7xl">
                  SELECTED
                  <br />
                  PROJECTS.
                </h2>
                <p className="mt-4 max-w-md text-white/50">Real systems designed to solve high-impact problems at scale.</p>
              </div>

              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/35">
                <Activity className="h-4 w-4" />
                Portfolio Status: Live
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <SkillsSection groupedSkills={groupedSkills} />
        <About />
      </main>

      <Footer />
    </div>
  );
}
