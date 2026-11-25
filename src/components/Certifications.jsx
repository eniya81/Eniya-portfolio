import { certifications } from '../data/portfolioData'
import { Icon, Reveal, SectionHeading } from './ui'

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <SectionHeading eyebrow="Certifications" title="Courses and certifications" />
      <ul className="grid gap-5 md:grid-cols-3">
        {certifications.map((c, i) => (
          <li key={c.title}>
            <Reveal delay={i * 0.08} className="h-full">
              <article className="glass glass-hover relative h-full overflow-hidden rounded-2xl p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl"
                />
                <span className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                  <Icon name={c.icon} size={22} />
                </span>
                <h3 className="relative text-base font-semibold leading-snug text-ink">{c.title}</h3>
                <p className="relative mt-2 text-sm text-muted">
                  Issued by <span className="font-medium text-accent">{c.issuer}</span>
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
