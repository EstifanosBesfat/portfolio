import { profile, projects, skills } from "./data";
import { Github, Linkedin, Mail, ExternalLink, Code2 } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-teal-500 selection:text-white">
      
      {/* HERO SECTION */}
      <header className="max-w-4xl mx-auto pt-20 pb-12 px-6">
        <div className="mb-8">
          <img
            src={profile.image}
            alt={profile.name}
            className="h-28 w-28 rounded-full object-cover ring-2 ring-teal-400/40"
          />
        </div>
        <h1 className="text-5xl font-bold text-slate-100 mb-4 tracking-tight">
          {profile.name}
        </h1>
        <h2 className="text-2xl text-teal-400 font-medium mb-6">
          {profile.role}
        </h2>
        <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
          {profile.bio}
        </p>
        
        <div className="flex gap-4">
          <a href={profile.socials.github} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition text-white">
            <Github size={20} /> GitHub
          </a>
          <a href={profile.socials.linkedin} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg transition text-white">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href={profile.socials.email} className="flex items-center gap-2 px-4 py-2 border border-slate-700 hover:border-teal-400 rounded-lg transition text-slate-300">
            <Mail size={20} /> Email
          </a>
        </div>
      </header>

      {/* SKILLS SECTION */}
      <section className="max-w-4xl mx-auto px-6 mb-20">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Technologies</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-teal-400/10 text-teal-300 rounded-full text-sm font-medium border border-teal-400/20">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-8">Featured Engineering Systems</h3>
        
        <div className="grid gap-12">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
            <div key={project.id} className="group relative grid md:grid-cols-8 gap-4 transition-all hover:bg-slate-800/50 p-6 rounded-xl border border-transparent hover:border-slate-700">
              
              {/* Icon/Date Column */}
              <div className="md:col-span-2 pt-1">
                <div className="mb-2"><Icon size={40} className={project.iconClassName} /></div>
                <div className="text-xs font-semibold uppercase text-slate-500">{project.category}</div>
              </div>

              {/* Content Column */}
              <div className="md:col-span-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack Mini-tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs text-slate-300 bg-slate-700 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Key Features List */}
                <ul className="list-disc list-inside text-sm text-slate-400 mb-6 space-y-1">
                  {project.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>

                {/* Links */}
                <div className="flex gap-4">
                  {project.links.backend && (
                    <a href={project.links.backend} target="_blank" className="text-sm flex items-center gap-1 text-slate-300 hover:text-teal-400 transition">
                      <Code2 size={16} /> {project.linkLabels?.backend || "Backend Code"}
                    </a>
                  )}
                  {project.links.frontend && (
                    <a href={project.links.frontend} target="_blank" className="text-sm flex items-center gap-1 text-slate-300 hover:text-teal-400 transition">
                      <Code2 size={16} /> {project.linkLabels?.frontend || "Frontend Code"}
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" className="text-sm flex items-center gap-1 text-slate-300 hover:text-teal-400 transition">
                      <ExternalLink size={16} /> {project.linkLabels?.demo || "Live Demo"}
                    </a>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </section>

      <footer className="text-center py-8 text-slate-600 text-sm">
        <p>Built with React & Tailwind by Estifanos Besfat</p>
      </footer>
    </div>
  );
}

export default App;
