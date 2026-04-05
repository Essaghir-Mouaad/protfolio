import type { Metadata } from 'next'
import { education, experience, clubs, owner } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About — Mouaad Essaghir',
  description: 'Background, education, and experience.',
}

export default function AboutPage() {
  // Note: In a real app, we'd use useProfile here, but it's in a Server Component
  // For now, we'll render both themes adaptively with CSS
  const textClass = 'text-base leading-relaxed'

  return (
    <div className="space-y-16 py-12">
      {/* Bio Section */}
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-web-text dark:text-ai-text">About Me</h1>
        <div className="max-w-3xl">
          <p className={`${textClass} text-web-text-secondary dark:text-ai-text-secondary mb-4`}>
            I&apos;m Mouaad Essaghir, a first-year engineering student at ENSA Safi (École Nationale des Sciences Appliquées, Université Cadi Ayyad), specializing in Computer Science and Artificial Intelligence.
          </p>
          <p className={`${textClass} text-web-text-secondary dark:text-ai-text-secondary mb-4`}>
            I&apos;m passionate about AI, LLMs, and generative AI — and I build things from scratch to truly understand them. Currently working on a large-scale SaaS product that brings together AI, web, desktop, and mobile into a single platform.
          </p>
          <p className={`${textClass} text-web-text-secondary dark:text-ai-text-secondary`}>
            I&apos;m looking for new challenges to grow my technical and professional skills.
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-web-text dark:text-ai-text">Education</h2>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div key={idx} className="border-l-2 border-web-primary/30 dark:border-ai-primary/30 pl-6 pb-6">
              <h3 className="text-xl font-bold text-web-text dark:text-ai-text">{edu.degree}</h3>
              <p className="text-web-primary dark:text-ai-primary font-semibold">{edu.school}</p>
              <p className="text-sm text-web-text-secondary dark:text-ai-text-secondary">{edu.period}</p>
              <p className="text-sm text-web-text-secondary dark:text-ai-text-secondary">{edu.location}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-web-text dark:text-ai-text">Experience</h2>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-web-text dark:text-ai-text">{exp.role}</h3>
                  <p className="text-web-primary dark:text-ai-primary font-semibold">{exp.company}</p>
                </div>
                <span className="text-xs font-semibold bg-green-50 dark:bg-ai-primary/20 text-web-primary dark:text-ai-primary px-2 py-1 rounded whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-web-text-secondary dark:text-ai-text-secondary flex items-start">
                    <span className="mr-3">•</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Clubs & Organizations */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-web-text dark:text-ai-text">Extracurricular</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {clubs.map((club, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 rounded-lg p-6 hover:shadow-md dark:hover:border-ai-secondary/40 transition-all"
            >
              <h3 className="text-lg font-bold text-web-text dark:text-ai-text mb-1">{club.name}</h3>
              <p className="text-web-primary dark:text-ai-primary font-semibold text-sm">{club.role}</p>
              <p className="text-web-text-secondary dark:text-ai-text-secondary text-sm">{club.org}</p>
            </div>
          ))}
          <div className="bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 rounded-lg p-6 hover:shadow-md dark:hover:border-ai-secondary/40 transition-all">
            <h3 className="text-lg font-bold text-web-text dark:text-ai-text mb-2">Interests</h3>
            <p className="text-web-text-secondary dark:text-ai-text-secondary text-sm">
              Hackathons, training programs, travel
            </p>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-web-text dark:text-ai-text">Languages</h2>
        <div className="flex flex-wrap gap-3">
          {owner.languages.map(lang => (
            <span
              key={lang}
              className="px-4 py-2 bg-gray-100 dark:bg-ai-surface text-web-text dark:text-ai-text border border-gray-200 dark:border-ai-secondary/20 rounded-lg text-sm font-semibold"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>
    </div>
  )
}
