import { profile, projects, skills } from "./data";
import { Github, Linkedin, Mail, ExternalLink, Code2, Sparkles } from "lucide-react";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-100 selection:bg-emerald-400 selection:text-neutral-900">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12 md:px-10 md:pt-16">
        <header className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          <div className="space-y-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-700/80 bg-neutral-900/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <Sparkles size={14} />
              Senior-Level Engineering Portfolio
            </p>

            <div className="space-y-4">
              <h1 className="text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-xl">
                {profile.role}
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-200"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-400"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href={profile.socials.email}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-600 bg-neutral-900/30 px-4 py-2.5 text-sm font-semibold text-neutral-200 transition duration-300 hover:-translate-y-0.5 hover:border-white hover:text-white"
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/30 via-cyan-400/20 to-blue-500/30 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/90 p-4 shadow-2xl shadow-emerald-900/30">
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-neutral-800/60">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="aspect-[4/5] w-full object-cover object-center"
                />
              </div>
              <div className="mt-4 rounded-xl border border-white/10 bg-neutral-900/80 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">Available for</p>
                <p className="mt-1 text-sm font-semibold text-emerald-300">Backend, Full-Stack, and ML Engineering roles</p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-16">
          <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3.5 py-1.5 text-sm font-medium text-emerald-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h3 className="mb-8 text-sm font-bold uppercase tracking-[0.2em] text-neutral-400">Featured Engineering Systems</h3>

          <div className="grid gap-6">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.id}
                  className="group rounded-2xl border border-white/10 bg-neutral-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-neutral-900"
                >
                  <div className="grid gap-5 md:grid-cols-[0.9fr_2.1fr]">
                    <div className="space-y-3">
                      <Icon size={42} className={project.iconClassName} />
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">{project.category}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-200">{project.title}</h4>
                      <p className="mt-2 text-neutral-300">{project.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span key={tech} className="rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-xs text-neutral-200">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ul className="mt-5 space-y-1.5 text-sm text-neutral-300">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-4 text-sm">
                        {project.links.backend && (
                          <a
                            href={project.links.backend}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-neutral-200 transition hover:text-emerald-300"
                          >
                            <Code2 size={16} /> {project.linkLabels?.backend || "Backend Code"}
                          </a>
                        )}
                        {project.links.frontend && (
                          <a
                            href={project.links.frontend}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-neutral-200 transition hover:text-emerald-300"
                          >
                            <Code2 size={16} /> {project.linkLabels?.frontend || "Frontend Code"}
                          </a>
                        )}
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-neutral-200 transition hover:text-emerald-300"
                          >
                            <ExternalLink size={16} /> {project.linkLabels?.demo || "Live Demo"}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-neutral-500">
        <p>Built with React & Tailwind by Estifanos Besfat</p>
      </footer>
    </div>
  );
}

export default App;
