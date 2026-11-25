import { about } from '../data/portfolioData'
import { Icon, Reveal, SectionHeading } from './ui'

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow="About Me" title="Engineering with curiosity and rigour" />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="glass rounded-3xl p-7 sm:p-9">
            <p className="text-base leading-relaxed text-muted sm:text-lg">{about.summary}</p>
          </div>
        </Reveal>
        <ul className="grid gap-4 sm:grid-cols-2">
          {about.highlights.map((h, i) => (
            <li key={h.title} className={i === about.highlights.length - 1 ? 'sm:col-span-2' : ''}>
              <Reveal delay={i * 0.07} className="h-full">
                <div className="glass glass-hover flex h-full items-center gap-4 rounded-2xl p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <Icon name={h.icon} size={20} />
                  </span>
                  <span className="text-sm font-medium text-ink">{h.title}</span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
