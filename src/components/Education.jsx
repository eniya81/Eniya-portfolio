import { Award, CalendarDays, GraduationCap } from 'lucide-react'
import { education } from '../data/portfolioData'
import { Reveal, SectionHeading } from './ui'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading eyebrow="Education" title="Academic background" />
      <ol className="relative ml-3 border-l border-white/10 sm:ml-4">
        {education.map((e, i) => (
          <li key={e.school} className="relative pb-8 pl-8 last:pb-0 sm:pl-12">
            <span
              aria-hidden="true"
              className="absolute -left-[9px] top-7 flex h-[18px] w-[18px] items-center justify-center rounded-full border border-accent/60 bg-bg shadow-glowSm"
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
            </span>
            <Reveal delay={i * 0.08}>
              <article className="glass glass-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      <GraduationCap size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold uppercase leading-snug tracking-wide text-ink sm:text-lg">
                        {e.school}
                      </h3>
                      <p className="mt-1 text-sm text-accent">
                        {e.qualification}
                        {e.detail ? ` · ${e.detail}` : ''}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={14} aria-hidden="true" /> {e.duration}
                    </span>
                    <span className="badge inline-flex items-center gap-1.5">
                      <Award size={12} aria-hidden="true" /> {e.score}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}
