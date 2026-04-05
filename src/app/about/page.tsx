import type { Metadata } from 'next'
import { education, experience, clubs, owner } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About — Mouaad Essaghir',
  description: 'Background, education, and experience.',
}

export default function AboutPage() {
  const sectionTitleClass = 'text-2xl md:text-3xl font-bold text-web-text dark:text-ai-text'
  const cardClass =
    'bg-[var(--color-bg-secondary)] border border-[color:var(--color-border)] rounded-xl p-6 md:p-7 shadow-sm'
  const subtleTextClass = 'text-web-text-secondary dark:text-ai-text-secondary'

  return (
    <div className="space-y-12 md:space-y-14">
      <section className="space-y-5">
        <span className="inline-flex items-center rounded-full border border-web-primary/20 dark:border-ai-primary/30 bg-emerald-100 dark:bg-ai-primary px-4 py-1.5 text-xs font-semibold tracking-wide uppercase text-gray-700 dark:text-ai-primary">
          About
        </span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-web-text dark:text-ai-text">
          About Me
        </h1>
        <div className={`${cardClass} max-w-4xl space-y-4`}>
          <p className={`text-base leading-relaxed ${subtleTextClass}`}>
            I&apos;m Mouaad Essaghir, a fourth-year engineering student at ENSA Safi (École Nationale des Sciences Appliquées, Université Cadi Ayyad), specializing in Computer Science and Artificial Intelligence.
          </p>
          <p className={`text-base leading-relaxed ${subtleTextClass}`}>
            I&apos;m passionate about AI, LLMs, and generative AI — and I build things from scratch to truly understand them. Currently working on a large-scale SaaS product that brings together AI, web, desktop, and mobile into a single platform.
          </p>
          <p className={`text-base leading-relaxed ${subtleTextClass}`}>
            I&apos;m looking for new challenges to grow my technical and professional skills.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className={sectionTitleClass}>Education</h2>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div key={idx} className={`${cardClass} border-l-4 border-l-web-primary/40 dark:border-l-ai-primary/50`}>
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-xl font-bold text-web-text dark:text-ai-text">{edu.degree}</h3>
                  <p className="text-web-primary dark:text-ai-primary font-semibold">{edu.school}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-gray-700 w-fit">
                  {edu.period}
                </span>
              </div>
              <p className={`mt-2 text-sm ${subtleTextClass}`}>{edu.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className={sectionTitleClass}>Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className={`${cardClass} space-y-4`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-web-text dark:text-ai-text">{exp.role}</h3>
                  <p className="text-web-primary dark:text-ai-primary font-semibold">{exp.company}</p>
                </div>
                <span className="text-xs font-semibold bg-green-50 dark:bg-ai-primary/20 text-gray-700 px-2.5 py-1 rounded whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className={`flex items-start ${subtleTextClass}`}>
                    <span className="mr-3 mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-web-primary dark:bg-ai-primary" />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className={sectionTitleClass}>Extracurricular</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {clubs.map((club, idx) => (
            <div key={idx} className={`${cardClass} hover:shadow-md dark:hover:border-ai-secondary/40 transition-all`}>
              <h3 className="text-lg font-bold text-web-text dark:text-ai-text mb-1">{club.name}</h3>
              <p className="text-web-primary dark:text-ai-primary font-semibold text-sm">{club.role}</p>
              <p className={`text-sm ${subtleTextClass}`}>{club.org}</p>
            </div>
          ))}
          <div className={`${cardClass} hover:shadow-md dark:hover:border-ai-secondary/40 transition-all`}>
            <h3 className="text-lg font-bold text-web-text dark:text-ai-text mb-2">Interests</h3>
            <p className={`text-sm ${subtleTextClass}`}>
              Hackathons, training programs, travel
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className={sectionTitleClass}>Languages</h2>
        <div className="flex flex-wrap gap-3">
          {owner.languages.map(lang => (
            <span
              key={lang}
              className="px-4 py-2 bg-[var(--color-bg-secondary)] text-web-text dark:text-ai-text border border-gray-200 dark:border-ai-secondary/20 rounded-lg text-sm font-semibold"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
