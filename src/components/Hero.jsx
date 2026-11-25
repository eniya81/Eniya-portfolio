import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, Send } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { ext, LeetCodeIcon } from './ui'

const socials = [
  { label: 'GitHub', href: profile.github, icon: <Github size={20} />, external: true },
  { label: 'LinkedIn', href: profile.linkedin, icon: <Linkedin size={20} />, external: true },
  { label: 'LeetCode', href: profile.leetcode, icon: <LeetCodeIcon size={20} />, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, icon: <Mail size={20} />, external: false },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Ambient background */}
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-accent2/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:min-h-[calc(100vh-8rem)] lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div variants={container} initial="hidden" animate="show" className="order-2 lg:order-1">
          <motion.p
            variants={item}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to SDE, Backend &amp; AI/ML opportunities
          </motion.p>

          <motion.h1 variants={item} className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            ENIYA <span className="text-accent">K</span>
          </motion.h1>
          <motion.p variants={item} className="mt-3 text-xl font-medium text-ink/90 sm:text-2xl">
            {profile.title}
          </motion.p>
          <motion.p variants={item} className="mt-2 font-mono text-sm text-accent/90 sm:text-base">
            {profile.roles}
          </motion.p>
          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {profile.intro}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" onClick={(e) => scrollTo(e, 'projects')} className="btn-primary">
              View My Projects <ArrowRight size={16} />
            </a>
            <a href={profile.resume} download="Eniya_K_Resume.pdf" className="btn-ghost">
              <Download size={16} /> Download Resume
            </a>
            <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="btn-ghost">
              <Send size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex items-center gap-3" aria-label="Social links">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.external ? ext : {})}
                  aria-label={s.label}
                  title={s.label}
                  className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent hover:shadow-glowSm"
                >
                  {s.icon}
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 mx-auto w-full max-w-[19rem] sm:max-w-sm lg:order-2"
        >
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-accent/20 blur-3xl" />
            <div className="glass relative rounded-[2rem] p-3 shadow-glow">
              <picture>
                <source srcSet={profile.photoWebp} type="image/webp" />
                <img
                  src={profile.photo}
                  alt="Portrait of Eniya K"
                  width="600"
                  height="750"
                  fetchpriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top"
                />
              </picture>
              <div className="glass absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-bg/80 px-4 py-2 text-xs font-medium text-ink">
                <span className="text-accent">B.E. CSE</span> · KPR Institute of Engineering and Technology
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
