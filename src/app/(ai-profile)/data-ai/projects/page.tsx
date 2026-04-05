export const dynamic = 'force-dynamic'
import type { Metadata } from 'next'
import { aiProjects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'AI Projects — Mouaad Essaghir',
  description: 'Machine learning, NLP, and AI projects by Mouaad Essaghir.',
}

export default function AIProjectsPage() {
  return (
    <div className="space-y-12 py-12">
      <section className="relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-bg-secondary)] p-6 md:p-8 shadow-sm">
        <div className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_15%_20%,var(--color-accent-primary),transparent_40%),radial-gradient(circle_at_85%_75%,var(--color-accent-secondary),transparent_42%)]" />
        <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full border border-[color:var(--color-border)] bg-[var(--color-bg-tertiary)]/50 blur-2xl animate-float" />
        <div className="pointer-events-none absolute -bottom-12 right-0 h-40 w-40 rounded-full border border-[color:var(--color-border)] bg-[var(--color-bg-tertiary)]/40 blur-2xl animate-pulse" />

        <div className="relative z-10 flex flex-col gap-5">
          <span className="w-fit rounded-full border border-[color:var(--color-border)] bg-[var(--color-bg-tertiary)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent-primary)]">
            Upcoming Launch
          </span>

          <h3 className="text-2xl md:text-3xl font-bold leading-tight text-[color:var(--color-text-primary)]">
            A Real-World SaaS Is Coming Soon
          </h3>

          <p className="max-w-3xl text-base md:text-lg leading-relaxed text-[color:var(--color-text-secondary)]">
            We are building a platform that combines AI, web, desktop, and mobile into one connected product to solve a real operational problem. Early prototypes are in progress, and major updates are coming soon.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="rounded-lg border border-[color:var(--color-border)] bg-[var(--color-bg-tertiary)] px-3 py-1.5 text-sm font-semibold text-[color:var(--color-accent-primary)]">
              AI + Product Engineering
            </span>
            <span className="rounded-lg border border-[color:var(--color-border)] bg-[var(--color-bg-tertiary)] px-3 py-1.5 text-sm font-semibold text-[color:var(--color-accent-primary)]">
              Sneak Peeks Soon
            </span>
          </div>
        </div>
      </section>
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-ai-text">AI & ML Projects</h1>
        <p className="text-lg text-ai-text-secondary max-w-2xl">
          A selection of machine learning models, NLP pipelines, and AI systems I&apos;ve built, including several implemented from scratch.
        </p>
      </div>

      <div className="space-y-6">
        {aiProjects.map(project => (
          <div
            key={project.id}
            className="bg-ai-surface border border-ai-secondary/20 rounded-lg p-8 hover:border-ai-secondary/40 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-ai-text mb-2">{project.title}</h2>
                <p className="text-sm text-ai-text-secondary">{project.date}</p>
              </div>
              {project.badge && (
                <span className="ml-4 text-xs font-semibold bg-ai-primary/20 text-ai-primary px-3 py-1 rounded-full whitespace-nowrap">
                  {project.badge}
                </span>
              )}
            </div>

            <p className="text-ai-text-secondary mb-6 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-ai-primary/10 text-ai-primary border border-ai-primary/20 rounded-md text-sm font-mono"
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
                    className="text-ai-primary hover:text-ai-primary/80 text-sm font-semibold underline"
                  >
                    View on GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ai-secondary hover:text-ai-secondary/80 text-sm font-semibold underline"
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
