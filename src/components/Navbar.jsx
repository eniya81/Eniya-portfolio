import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolioData'

export default function Navbar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        aria-label="Primary"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 sm:px-6 ${
          scrolled ? 'border-white/10 bg-bg/70 shadow-glowSm' : 'border-white/5 bg-bg/40'
        }`}
      >
        <a href="#home" onClick={(e) => go(e, 'home')} className="text-lg font-bold tracking-wider text-ink">
          ENIYA <span className="text-accent">K</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                aria-current={active === id ? 'page' : undefined}
                className={`relative rounded-full px-3 py-1.5 text-sm transition-colors duration-300 ${
                  active === id ? 'text-accent' : 'text-muted hover:text-ink'
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-accent/20 bg-accent/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" onClick={(e) => go(e, 'contact')} className="btn-primary hidden !py-2 sm:inline-flex">
            Contact Me
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-ink hover:bg-white/5 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl bg-bg/90 p-3 lg:hidden"
          >
            <ul className="flex flex-col">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => go(e, id)}
                    className={`block rounded-xl px-4 py-3 text-sm ${
                      active === id ? 'bg-accent/10 text-accent' : 'text-muted hover:bg-white/5 hover:text-ink'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="p-2 sm:hidden">
                <a href="#contact" onClick={(e) => go(e, 'contact')} className="btn-primary w-full">
                  Contact Me
                </a>
              </li>
            </ul>
            <span className="sr-only">{profile.shortName}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
