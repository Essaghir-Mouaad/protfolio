'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

// Note: Metadata must be exported separately from client components, but this file uses motion
// In a real setup, split into layout.tsx and client component

export default function LandingPage() {



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  }




  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        className="max-w-4xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-white to-emerald-400 bg-clip-text text-transparent">
              Two profiles.
            </span>
            <br />
            <span className="text-white">One engineer.</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Choose the experience you want to explore.
          </motion.p>
        </motion.div>

        {/* Profile Selection Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* AI Profile Card */}
          <motion.div variants={cardVariants} whileHover="hover">
            <Link href="/data-ai">
              <div className="group relative h-80 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 border border-cyan-500/30 rounded-3xl p-8 cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-shadow duration-300">
                {/* Animated border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      className="text-6xl mb-4 inline-block"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      🧠
                    </motion.div>
                    <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">Data / AI</h2>
                    <div className="space-y-3 text-slate-300">
                      <motion.p
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <span className="text-cyan-400 mr-2">→</span> ML · NLP · LLMs
                      </motion.p>
                      <motion.p
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <span className="text-cyan-400 mr-2">→</span> Deep Learning
                      </motion.p>
                      <motion.p
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <span className="text-cyan-400 mr-2">→</span> From-scratch models
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    className="inline-flex items-center text-cyan-400 font-bold text-lg group-hover:text-cyan-300 transition-colors"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Explore
                    <span className="ml-3 text-2xl">→</span>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Web Dev Profile Card */}
          <motion.div variants={cardVariants} whileHover="hover">
            <Link href="/web-dev">
              <div className="group relative h-80 bg-gradient-to-br from-slate-100 to-slate-50 border border-emerald-500/30 rounded-3xl p-8 cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-shadow duration-300">
                {/* Animated border glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <motion.div
                      className="text-6xl mb-4 inline-block"
                      animate={{ scale: [1, 1.1, 1], rotate: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                    >
                      ⚡
                    </motion.div>
                    <h2 className="text-4xl font-bold text-gray-700 mb-6 tracking-tight">Web Developer</h2>
                    <div className="space-y-3 text-slate-600">
                      <motion.p
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <span className="text-emerald-600 mr-2">→</span> Next.js · Node.js
                      </motion.p>
                      <motion.p
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <span className="text-emerald-600 mr-2">→</span> Full-Stack Apps
                      </motion.p>
                      <motion.p
                        className="flex items-center"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <span className="text-emerald-600 mr-2">→</span> SaaS · REST APIs
                      </motion.p>
                    </div>
                  </div>

                  <motion.div
                    className="inline-flex items-center text-emerald-600 font-bold text-lg group-hover:text-emerald-700 transition-colors"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                  >
                    Explore
                    <span className="ml-3 text-2xl">→</span>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer note */}
        <motion.div
          className="text-center text-slate-400 text-sm"
          variants={itemVariants}
        >
          You can switch profiles at any time from the nav bar.
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
