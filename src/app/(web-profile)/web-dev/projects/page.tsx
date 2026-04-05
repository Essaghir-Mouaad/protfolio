export const dynamic = 'force-dynamic'
import type { Metadata } from 'next'
import { webProjects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Web Projects — Mouaad Essaghir',
  description: 'Full-stack web development projects by Mouaad Essaghir.',
}

export default function WebProjectsPage() {
  return (
    <div className="space-y-12 py-12">
      <section className="relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-bg-secondary)] p-6 md:p-8 shadow-sm">
        <div className="pointer-events-none absolute inset-0 opacity-20 [background:radial-gradient(circle_at_15%_20%,var(--color-accent-primary),transparent_40%),radial-gradient(circle_at_85%_75%,var(--color-accent-secondary),transparent_42%)]" />
        <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full border border-[color:var(--color-border)] bg-[var(--color-bg-tertiary)]/50 blur-2xl animate-float" />
        <div className="pointer-events-none absolute -bottom-12 right-0 h-40 w-40 rounded-full border border-[color:var(--color-border)] bg-[var(--color-bg-tertiary)]/40 blur-2xl animate-pulse" />

        <div className="relative z-10 flex flex-col gap-5">
          <span className="w-fit rounded-full border border-[color:var(--color-border)] bg-[var(--color-bg-tertiary)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent-primary)]">
            Upcoming Launch
          </span>

          <h3 className="text-2xl md:text-3xl font-bold leading-tight text-[color:var(--color-text-primary)]">
            A Next-Generation SaaS Is Coming Soon
          </h3>

          <p className="max-w-3xl text-base md:text-lg leading-relaxed text-[color:var(--color-text-secondary)]">
            We are crafting a modern product that unifies AI intelligence with web, desktop, and mobile experiences. Early architecture and product workflows are in progress, with showcase updates coming soon.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="rounded-lg border border-[color:var(--color-border)] bg-[var(--color-bg-tertiary)] px-3 py-1.5 text-sm font-semibold text-[color:var(--color-accent-primary)]">
              Full-Stack + AI
            </span>
            <span className="rounded-lg border border-[color:var(--color-border)] bg-[var(--color-bg-tertiary)] px-3 py-1.5 text-sm font-semibold text-[color:var(--color-accent-primary)]">
              Product Preview Soon
            </span>
          </div>
        </div>
      </section>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-web-text">Full-Stack Projects</h1>
        <p className="text-lg text-web-text-secondary max-w-2xl">
          A selection of full-stack web applications and SaaS products I&apos;ve built using modern web technologies.
        </p>
      </div>

      <div className="space-y-6">
        {webProjects.map(project => (
          <div
            key={project.id}
            className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-web-text mb-2">{project.title}</h2>
                <p className="text-sm text-web-text-secondary">{project.date}</p>
              </div>
              {project.badge && (
                <span className="ml-4 text-xs font-semibold bg-green-50 text-web-primary px-3 py-1 rounded-full whitespace-nowrap">
                  {project.badge}
                </span>
              )}
            </div>

            <p className="text-web-text-secondary mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 text-web-text border border-gray-200 rounded-md text-sm font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>

            {(project.github || project.demo) && (
              <div className="flex gap-4 mt-6">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-web-primary hover:text-web-secondary text-sm font-semibold underline"
                  >
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-web-primary hover:text-web-secondary text-sm font-semibold underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
