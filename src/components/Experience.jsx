import { Briefcase, CalendarDays, MapPin } from 'lucide-react'
import { experience } from '../data/portfolioData'
import { Reveal, SectionHeading } from './ui'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading eyebrow="Experience" title="Professional experience" />
      <ol className="relative ml-3 border-l border-white/10 sm:ml-4">
        {experience.map((job, i) => (
          <li key={job.company} className="relative pb-10 pl-8 last:pb-0 sm:pl-12">
            <span
              aria-hidden="true"
              className="absolute -left-[9px] top-7 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-accent/60 bg-bg shadow-glowSm"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <Reveal delay={i * 0.1}>
              <article className="glass glass-hover rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <Briefcase size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-ink">{job.role}</h3>
                      <p className="text-sm font-medium text-accent">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 text-sm text-muted sm:items-end">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={14} aria-hidden="true" /> {job.duration}
                    </span>
                    {job.location && (
                      <span className="inline-flex items-center gap-2">
                        <MapPin size={14} aria-hidden="true" /> {job.location}
                      </span>
                    )}
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
