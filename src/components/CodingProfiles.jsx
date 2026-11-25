import { Github } from 'lucide-react'
import { profile } from '../data/portfolioData'
import { ext, LeetCodeIcon, Reveal } from './ui'

export default function CodingProfiles() {
  return (
    <section id="coding" className="section !py-16 md:!py-20">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 text-center shadow-glowSm sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-2/3 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
          />
          <span className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent">
            <LeetCodeIcon size={26} />
          </span>
          <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">Problem Solving &amp; Coding</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted">
            Continuously improving my problem-solving abilities through Data Structures and Algorithms practice.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={profile.leetcode} {...ext} className="btn-primary">
              <LeetCodeIcon size={16} /> View LeetCode Profile
            </a>
            <a href={profile.github} {...ext} className="btn-ghost">
              <Github size={16} /> Explore GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
