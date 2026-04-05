'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { aiProjects } from '@/lib/data'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { AnimatedCard } from '@/components/ui/AnimatedCard'

// Metadata export moved to layout
export const dynamic = 'force-dynamic'

export default function AIHomePage() {
  const featuredProjects = aiProjects.slice(0, 2)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      className="space-y-20 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.section
        className="space-y-8 py-12 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.p
            className="text-ai-primary text-sm font-mono uppercase tracking-widest"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            ✨ AI & Machine Learning Engineer
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-ai-text leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Building intelligent systems
            <span className="block text-ai-primary">— from scratch.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-ai-text-secondary max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            Engineering student at ENSA Safi specializing in AI. I build ML models, NLP pipelines, LLM-powered tools, and deploy them end-to-end. Currently building a large-scale SaaS merging AI, web, desktop, and mobile.
          </motion.p>
        </motion.div>

        <motion.div className="flex gap-4 pt-6" variants={itemVariants}>
          <AnimatedButton
            href="/data-ai/projects"
            variant="primary"
            size="lg"
          >
            View AI Projects
          </AnimatedButton>
          <AnimatedButton
            href="/cv-ai.pdf"
            external={true}
            variant="secondary"
            size="lg"
          >
            Download AI CV
          </AnimatedButton>
        </motion.div>
      </motion.section>

      {/* Quick Stats */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          { number: '4', label: 'From-scratch models built' },
          { number: '6', label: 'ML/AI projects deployed' },
          { number: '3+', label: 'AI frameworks mastered' },
          { number: '1', label: 'Internship at GTE Marrakech' },
        ].map((stat, idx) => (
          <AnimatedCard key={idx} className="p-6 text-center" hover="scale">
            <motion.p className="text-4xl font-bold text-ai-primary mb-3">
              {stat.number}
            </motion.p>
            <p className="text-ai-text-secondary text-sm">{stat.label}</p>
          </AnimatedCard>
        ))}
      </motion.section>

      {/* Featured Projects */}
      <motion.section
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-bold text-ai-text mb-3">Featured Projects</h2>
          <p className="text-ai-text-secondary text-lg">Showcase of recent AI and ML work</p>
        </motion.div>

        <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
          {featuredProjects.map(project => (
            <AnimatedCard key={project.id} className="p-8" hover="lift">
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-ai-text mb-2">{project.title}</h3>
                <p className="text-sm text-ai-primary font-mono mb-4">{project.date}</p>
                <p className="text-ai-text-secondary mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-ai-primary/10 text-ai-primary border border-ai-primary/20 rounded-md text-sm font-mono hover:bg-ai-primary/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </AnimatedCard>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link
            href="/data-ai/projects"
            className="inline-block text-ai-primary hover:text-ai-primary/80 font-semibold underline transition-colors"
          >
            View all projects →
          </Link>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
