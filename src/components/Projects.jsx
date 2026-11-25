import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../data/portfolioData'
import { ext, Icon, Reveal, SectionHeading } from './ui'

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 2) * 0.08} className="h-full">
      <article className="glass glass-hover flex h-full flex-col rounded-3xl p-6 sm:p-8">
        <header className="mb-5 flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
            <Icon name={project.icon} size={22} />
          </span>
          <div>
            <p className="font-mono text-xs text-accent/80">Project {String(index + 1).padStart(2, '0')}</p>
            <h3 className="mt-1 text-xl font-semibold leading-snug text-ink">{project.title}</h3>
          </div>
        </header>

        <p className="text-sm leading-relaxed text-muted">{project.overview}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.tech.map((t) => (
            <li key={t} className="badge">
              {t}
            </li>
          ))}
        </ul>

        {/* Repository button sits directly below description + technologies */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={project.github} {...ext} className="btn-primary" aria-label={`${project.title} – GitHub repository`}>
            <Github size={16} /> GitHub Repository
          </a>
          {project.demo && (
            <a href={project.demo} {...ext} className="btn-ghost">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>

        <div className="mt-7 border-t border-white/10 pt-6">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink">Key Features</h4>
          <ul className="space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        subtitle="Full-stack and machine learning projects, each with its source code on GitHub."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <div key={p.title} className={i === projects.length - 1 && projects.length % 2 === 1 ? 'lg:col-span-2' : ''}>
            <ProjectCard project={p} index={i} />
          </div>
        ))}
      </div>
    </section>
  )
}
