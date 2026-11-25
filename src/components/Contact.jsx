import { useState } from 'react'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { ext, LeetCodeIcon, Reveal, SectionHeading } from './ui'

const cards = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: <Mail size={20} />, external: false },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/eniya-kasilingam-795b77327',
    href: profile.linkedin,
    icon: <Linkedin size={20} />,
    external: true,
  },
  { label: 'GitHub', value: 'github.com/eniya81', href: profile.github, icon: <Github size={20} />, external: true },
  {
    label: 'LeetCode',
    value: 'leetcode.com/u/Eniyaah_07',
    href: profile.leetcode,
    icon: <LeetCodeIcon size={20} />,
    external: true,
  },
]

const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition focus:border-accent/60 focus:bg-white/[0.05] focus:shadow-glowSm'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  /*
   * No backend / email service is configured, so this form does NOT pretend to send.
   * On submit it opens the visitor's own mail client with the fields pre-filled (mailto).
   * To send directly from the site instead, wire up EmailJS – see README.md ("Contact form").
   */
  const onSubmit = (e) => {
    e.preventDefault()
    const subject = form.subject || `Portfolio enquiry from ${form.name}`
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="Have an opportunity, exciting project, or collaboration in mind? I'd love to connect and discuss it."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <ul className="grid gap-4">
            {cards.map((c, i) => (
              <li key={c.label}>
                <Reveal delay={i * 0.06}>
                  <a
                    href={c.href}
                    {...(c.external ? ext : {})}
                    className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                      {c.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-wider text-muted">{c.label}</span>
                      <span className="block truncate text-sm font-medium text-ink">{c.value}</span>
                    </span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} /> Send an Email
            </a>
            <a href={profile.linkedin} {...ext} className="btn-ghost">
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
            <a href={profile.github} {...ext} className="btn-ghost">
              <Github size={16} /> View GitHub
            </a>
          </div>
        </div>

        <Reveal>
          <form onSubmit={onSubmit} className="glass rounded-3xl p-6 sm:p-8" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                  Full Name
                </label>
                <input id="name" name="name" required autoComplete="name" value={form.name} onChange={update} className={inputCls} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                  Email Address
                </label>
                <input id="email" name="email" type="email" required autoComplete="email" value={form.email} onChange={update} className={inputCls} placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                Subject
              </label>
              <input id="subject" name="subject" required value={form.subject} onChange={update} className={inputCls} placeholder="What's this about?" />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-muted">
                Message
              </label>
              <textarea id="message" name="message" required rows={5} value={form.message} onChange={update} className={`${inputCls} resize-none`} placeholder="Write your message…" />
            </div>
            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              <Send size={16} /> Send Message
            </button>
            <p className="mt-4 text-xs leading-relaxed text-muted">
              This opens your email app with the message pre-filled, addressed to {profile.email}.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
