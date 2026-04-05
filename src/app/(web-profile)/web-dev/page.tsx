'use client'

export const dynamic = 'force-dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { webProjects } from '@/lib/data'
import { AnimatedButton } from '@/components/ui/AnimatedButton'
import { AnimatedCard } from '@/components/ui/AnimatedCard'

const techStack = [
  'Next.js',
  'React.js',
  'Node.js',
  'Express',
  'MongoDB',
  'SQL',
  'Prisma',
  'Tailwind CSS',
  'Bootstrap',
]

export default function WebDevHomePage() {
  const featuredProjects = webProjects.slice(0, 2)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
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
      <motion.div
        className="space-y-8 py-12 md:py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 text-xs font-semibold bg-gradient-to-r from-emerald-100 to-green-100 text-web-primary rounded-full border border-web-primary/20">
              ✨ Full-Stack Web Developer
            </span>
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-web-text leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Building complete products,
            <span className="block text-web-primary">end to end.</span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-lg text-web-text-secondary max-w-2xl leading-relaxed"
          variants={itemVariants}
        >
          Engineering student at ENSA Safi. I build full-stack applications using Next.js, React, Node.js, and MongoDB. From e-commerce to stock management systems. Currently building a large-scale SaaS merging AI, web, desktop, and mobile.
        </motion.p>

        <motion.div className="flex gap-4 pt-6" variants={itemVariants}>
          <AnimatedButton
            href="/web-dev/projects"
            variant="primary"
            size="lg"
          >
            View Web Projects
          </AnimatedButton>
          <AnimatedButton
            href="/cv-web.pdf"
            external={true}
            variant="secondary"
            size="lg"
          >
            Download Web CV
          </AnimatedButton>
        </motion.div>
      </motion.div>

      {/* Tech Stack */}
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 className="text-4xl font-bold text-web-text" variants={itemVariants}>
          Tech Stack
        </motion.h2>
        <motion.div
          className="flex flex-wrap gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {techStack.map(tech => (
            <AnimatedCard
              key={tech}
              className="px-5 py-3 bg-white/50 hover:bg-white text-web-text border border-gray-200 rounded-lg text-sm font-semibold"
              hover="scale"
            >
              {tech}
            </AnimatedCard>
          ))}
        </motion.div>
      </motion.div>

      {/* Featured Projects */}
      <motion.div
        className="space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-bold text-web-text mb-3">Featured Projects</h2>
          <p className="text-web-text-secondary text-lg">Latest full-stack applications</p>
        </motion.div>

        <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
          {featuredProjects.map(project => (
            <AnimatedCard
              key={project.id}
              className="p-8 bg-white hover:bg-gray-50"
              hover="lift"
            >
              <motion.div variants={itemVariants}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-web-text mb-1">{project.title}</h3>
                    {project.badge && (
                      <span className="inline-block text-xs font-semibold bg-emerald-100 text-web-primary px-3 py-1 rounded-full">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-web-text-secondary font-mono mb-4">{project.date}</p>
                <p className="text-web-text-secondary mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map(tech => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-emerald-100 to-green-100 text-web-primary border border-web-primary/20 rounded-md text-sm font-mono hover:from-emerald-200 hover:to-green-200 transition-colors"
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
            href="/web-dev/projects"
            className="inline-block text-web-primary hover:text-web-secondary font-semibold underline transition-colors"
          >
            View all projects →
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
