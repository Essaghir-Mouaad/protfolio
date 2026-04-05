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
