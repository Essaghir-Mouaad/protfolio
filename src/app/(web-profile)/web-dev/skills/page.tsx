export const dynamic = 'force-dynamic'
import type { Metadata } from 'next'
import { webSkills } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Skills — Mouaad Essaghir',
  description: 'Web development, backend, and full-stack skills.',
}

export default function WebSkillsPage() {
  return (
    <div className="space-y-12 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-web-text dark:text-ai-text">Skills & Expertise</h1>
        <p className="text-lg text-web-text-secondary dark:text-ai-text-secondary">
          Technical competencies across frontend, backend, and full-stack web development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {webSkills.map(group => (
          <div key={group.category} className="bg-white dark:bg-ai-surface border border-gray-200 dark:border-ai-secondary/20 rounded-lg p-8 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-web-primary dark:text-ai-primary mb-6">{group.category}</h2>
            <div className="flex flex-wrap gap-3">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-green-50 dark:bg-ai-primary/10 text-web-primary dark:text-ai-primary border border-web-primary/20 dark:border-ai-primary/30 rounded-lg text-sm font-semibold hover:bg-green-100 dark:hover:bg-ai-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
