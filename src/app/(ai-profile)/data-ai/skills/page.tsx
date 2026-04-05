export const dynamic = 'force-dynamic'

import type { Metadata } from 'next'
import { aiSkills } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Skills — Mouaad Essaghir',
  description: 'AI, ML, NLP, and programming skills.',
}

export default function AISkillsPage() {
  return (
    <div className="space-y-12 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-ai-text">Skills & Expertise</h1>
        <p className="text-lg text-ai-text-secondary">
          Technical competencies across machine learning, AI, and software development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {aiSkills.map(group => (
          <div key={group.category} className="bg-ai-surface border border-ai-secondary/20 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-ai-primary mb-6">{group.category}</h2>
            <div className="flex flex-wrap gap-3">
              {group.skills.map(skill => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-ai-primary/10 text-ai-primary border border-ai-primary/30 rounded-lg text-sm font-semibold hover:bg-ai-primary/20 transition-colors"
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
