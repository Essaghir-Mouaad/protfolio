export const dynamic = 'force-dynamic'
import type { Metadata } from 'next'
import { aiProjects } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Research — Mouaad Essaghir',
  description: 'From-scratch AI model implementations and academic research.',
}

export default function AIResearchPage() {
  const modelConcepts: Record<string, { concept: string; techniques: string[] }> = {
    'autocomplete-model': {
      concept: 'Predicting the next word in a sequence using statistical language models',
      techniques: ['N-gram models', 'Probability estimation', 'Smoothing'],
    },
    'autocorrect-model': {
      concept: 'Correcting misspelled words using edit distance and dynamic programming',
      techniques: ['Minimum Edit Distance', 'Dynamic Programming', 'String matching'],
    },
    'nmt-model': {
      concept: 'Translating text between languages using encoder-decoder architecture with attention',
      techniques: ['Sequence-to-Sequence', 'Attention Mechanism', 'Encoder-Decoder', 'RNNs'],
    },
    'qa-transformers': {
      concept: 'Understanding and answering questions based on context using transformer architectures',
      techniques: ['Self-attention', 'Cross-attention', 'Multi-head attention', 'Masked attention'],
    },
  }

  // Keep research list aligned with data even if project ordering changes.
  const researchModels = aiProjects.filter(
    project => project.title.toLowerCase().includes('from scratch') || Boolean(modelConcepts[project.id]),
  )

  return (
    <div className="space-y-12 py-12">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold text-ai-text">From-Scratch Implementations</h1>
        <p className="text-lg text-ai-text-secondary max-w-3xl leading-relaxed">
          I build foundational AI systems from the ground up — no black boxes. All models are built as part of the engineering curriculum at ENSA Safi, with focus on understanding internals: attention mechanisms, sequence models, edit distance algorithms, and transformer architecture.
        </p>
      </div>

      <div className="space-y-6">
        {researchModels.map(model => {
          const info = modelConcepts[model.id] ?? {
            concept: model.description,
            techniques: model.stack,
          }
          const year = model.date.split('–')[0].trim()

          return (
            <div
              key={model.id}
              className="bg-ai-surface border border-ai-primary/20 rounded-lg p-8 hover:border-ai-primary/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-ai-text mb-2">{model.title.replace(' (from scratch)', '')}</h2>
                  <p className="text-ai-primary text-sm font-mono">{year}</p>
                </div>
                <span className="ml-4 text-xs font-semibold bg-ai-primary/20 text-ai-primary px-3 py-1 rounded-full whitespace-nowrap">
                  From Scratch
                </span>
              </div>

              <div className="mb-6">
                <p className="text-ai-text-secondary font-semibold mb-3 text-sm uppercase tracking-wider">
                  Core Concept
                </p>
                <p className="text-ai-text text-lg leading-relaxed">{info.concept}</p>
              </div>

              <div>
                <p className="text-ai-text-secondary font-semibold mb-3 text-sm uppercase tracking-wider">
                  Key Techniques
                </p>
                <div className="flex flex-wrap gap-2">
                  {info.techniques.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-ai-secondary/10 text-ai-secondary border border-ai-secondary/30 rounded-md text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-ai-surface border border-ai-primary/20 rounded-lg p-8">
        <h3 className="text-xl font-bold text-ai-primary mb-4">Academic Context</h3>
        <p className="text-ai-text-secondary leading-relaxed">
          These implementations are part of rigorous coursework at ENSA Safi&apos;s engineering program in Computer Science and AI. Rather than relying on pre-built libraries, each project emphasizes understanding the mathematical foundations and algorithmic design of modern AI systems. This approach builds deep expertise in neural networks, natural language processing, and machine learning fundamentals.
        </p>
      </div>
    </div>
  )
}
