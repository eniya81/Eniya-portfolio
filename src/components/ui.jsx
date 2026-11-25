import { motion } from 'framer-motion'
import {
  BarChart3,
  Binary,
  BrainCircuit,
  Circle,
  Cloud,
  Code2,
  Cpu,
  Database,
  GraduationCap,
  Layers,
  Library,
  LineChart,
  Server,
  ShieldAlert,
  Target,
  Users,
  Wrench,
} from 'lucide-react'

// Explicit map keeps the bundle small (no wildcard import of the whole icon set).
const Icons = {
  BarChart3, Binary, BrainCircuit, Cloud, Code2, Cpu, Database, GraduationCap,
  Layers, Library, LineChart, Server, ShieldAlert, Target, Users, Wrench,
}

export const ext = { target: '_blank', rel: 'noopener noreferrer' }

export function Icon({ name, ...props }) {
  const Cmp = Icons[name] || Circle
  return <Cmp aria-hidden="true" {...props} />
}

// Custom brand icon: lucide does not ship a LeetCode glyph.
export function LeetCodeIcon({ size = 20, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
    </svg>
  )
}

export function Reveal({ children, delay = 0, className = '', y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
        <span className="h-px w-8 bg-accent/60" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>}
    </Reveal>
  )
}

export function Divider() {
  return (
    <div aria-hidden="true" className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  )
}
