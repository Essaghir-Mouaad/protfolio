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
