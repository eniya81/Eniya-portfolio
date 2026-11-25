import { profile } from '../data/portfolioData'
import { ext } from './ui'

const internal = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]
const external = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'LeetCode', href: profile.leetcode },
]

export default function Footer() {
  const go = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
  const linkCls = 'text-sm text-muted transition-colors hover:text-accent'

  return (
    <footer className="border-t border-white/10 bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold tracking-wider">
              ENIYA <span className="text-accent">K</span>
            </p>
            <p className="mt-1 text-sm text-ink/80">{profile.title}</p>
            <p className="mt-3 text-sm italic text-muted">“{profile.tagline}”</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {internal.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={(e) => go(e, l.id)} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
              {external.map((l) => (
                <li key={l.label}>
                  <a href={l.href} {...ext} className={linkCls}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-10 border-t border-white/5 pt-6 text-xs text-muted">
          © {new Date().getFullYear()} Eniya K. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
