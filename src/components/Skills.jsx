import { skills } from '../data/portfolioData'
import { Icon, Reveal, SectionHeading } from './ui'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Tools and technologies I work with"
        subtitle="Grouped by category, from languages and frameworks to the core computer science concepts behind them."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <li key={group.category}>
            <Reveal delay={(i % 3) * 0.08} className="h-full">
              <div className="glass glass-hover h-full rounded-2xl p-6">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <Icon name={group.icon} size={18} />
                  </span>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">{group.category}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li key={s} className="badge">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  )
}
