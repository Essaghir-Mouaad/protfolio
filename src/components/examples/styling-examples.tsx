/**
 * STYLING & ANIMATION IMPLEMENTATION EXAMPLES
 * 
 * This file contains detailed code examples showing how to implement
 * the new animated components and styling system throughout your portfolio.
 */

// ═══════════════════════════════════════════════════════════════
// EXAMPLE 1: HERO SECTION WITH ANIMATIONS
// ═══════════════════════════════════════════════════════════════

import React from 'react'
import { PrimaryButton, SecondaryButton } from '@/components/ui/AnimatedButton'
import { AnimatedSection, ContentReveal, BlurDivider } from '@/components/ui/PageTransition'

export function HeroSectionExample() {
  return (
    <div className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decorative elements (AI theme) */}
      <div className="absolute inset-0 neural-bg -z-10" />

      <AnimatedSection className="max-w-4xl mx-auto px-4 text-center">
        {/* Tagline */}
        <ContentReveal delay={0}>
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-6 animate-bounce-small">
            🧠 AI & ML Engineer
          </div>
        </ContentReveal>

        {/* Main Headline */}
        <ContentReveal delay={100}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent">
              Building intelligent systems
            </span>
            <br />
            <span className="text-slate-300">from scratch</span>
          </h1>
        </ContentReveal>

        {/* Description */}
        <ContentReveal delay={200}>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            First-year engineering student at ENSA Safi specializing in AI, ML, and generative
            systems. I build models from scratch to truly understand how they work.
          </p>
        </ContentReveal>

        {/* CTA Buttons */}
        <ContentReveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton href="/data-ai/projects" size="lg">
              View AI Projects
            </PrimaryButton>
            <SecondaryButton href="/public/cv-ai.pdf" external size="lg">
              Download CV
            </SecondaryButton>
          </div>
        </ContentReveal>
      </AnimatedSection>

      {/* Scroll indicator */}
      <ContentReveal delay={600}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce text-cyan-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </ContentReveal>
    </div>
  )
}

// ═══════════════════════════════════════════════════════════════
// EXAMPLE 2: PROJECTS GRID WITH STAGGERED CARDS
// ═══════════════════════════════════════════════════════════════

import { ProjectCard, StatCard } from '@/components/ui/AnimatedCard'

interface Project {
  id: string
  title: string
  description: string
  date: string
  stack: string[]
  badge?: string
  image?: string
  github?: string
}

export function ProjectsGridExample({ projects }: { projects: Project[] }) {
  return (
    <AnimatedSection className="py-20">
      {/* Section Header */}
      <ContentReveal delay={0}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-100">
            Featured Projects
          </h2>
          <BlurDivider className="mt-4 mb-8" />
          <p className="text-slate-400 text-lg">
            Here are some of my best work showcasing different technologies
          </p>
        </div>
      </ContentReveal>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.stack}
            badge={project.badge}
            image={project.image}
            link={project.github}
            index={index}
          />
        ))}
      </div>
    </AnimatedSection>
  )
}

// ═══════════════════════════════════════════════════════════════
// EXAMPLE 3: STATS SECTION WITH ANIMATED CARDS
// ═══════════════════════════════════════════════════════════════

export function StatsSection() {
  const stats = [
    { value: '6+', label: 'AI Projects Built', icon: '🤖' },
    { value: '4+', label: 'From-Scratch Models', icon: '🧬' },
    { value: '3+', label: 'Frameworks Mastered', icon: '⚙️' },
    { value: '1', label: 'Internship Completed', icon: '💼' },
  ]

  return (
    <AnimatedSection className="py-16 border-t border-b border-cyan-500/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            icon={<span className="text-3xl">{stat.icon}</span>}
            index={index}
          />
        ))}
      </div>
    </AnimatedSection>
  )
}

// ═══════════════════════════════════════════════════════════════
// EXAMPLE 4: SKILLS SECTION WITH BADGES
// ═══════════════════════════════════════════════════════════════

import { SkillBadge } from '@/components/ui/AnimatedCard'
import { StaggeredList } from '@/components/ui/PageTransition'

interface SkillGroup {
  category: string
  skills: string[]
}

export function SkillsSection({ skillGroups }: { skillGroups: SkillGroup[] }) {
  return (
    <AnimatedSection className="py-20">
      {/* Section Header */}
      <ContentReveal delay={0}>
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-100">
          Technical Skills
        </h2>
      </ContentReveal>

      {/* Skill Groups */}
      <div className="space-y-12">
        {skillGroups.map((group, groupIndex) => (
          <div key={group.category}>
            {/* Group Title */}
            <h3 className="text-xl font-semibold text-cyan-300 mb-6 animate-stagger-1">
              {group.category}
            </h3>

            {/* Skills Grid with Stagger */}
            <StaggeredList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {group.skills.map((skill, skillIndex) => (
                <SkillBadge
                  key={skill}
                  name={skill}
                  level="intermediate"
                  index={groupIndex * 6 + skillIndex}
                />
              ))}
            </StaggeredList>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}

// ═══════════════════════════════════════════════════════════════
// EXAMPLE 5: NAVBAR WITH ACTIVE LINK ANIMATION
// ═══════════════════════════════════════════════════════════════

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavLink {
  href: string
  label: string
}

export function NavbarExample({ links }: { links: NavLink[] }) {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md border-b border-cyan-500/20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/data-ai" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center">
            <span className="text-white font-bold font-mono">ME</span>
          </div>
          <span className="text-cyan-300 font-mono font-bold hidden sm:inline">
            Mouaad
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8">
          {links.map(link => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-medium transition-all duration-200 group ${
                  isActive ? 'text-cyan-300' : 'text-slate-400 hover:text-cyan-400'
                }`}
              >
                {link.label}

                {/* Animated underline */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full animate-underline" />
                )}

                {/* Hover underline */}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Profile Switch Button */}
        <SecondaryButton size="sm">
          ⚡ Web Dev
        </SecondaryButton>
      </div>
    </nav>
  )
}

// ═══════════════════════════════════════════════════════════════
// EXAMPLE 6: TIMELINE (EDUCATION/EXPERIENCE)
// ═══════════════════════════════════════════════════════════════

interface TimelineItem {
  title: string
  subtitle: string
  date: string
  description: string
}

export function TimelineExample({ items }: { items: TimelineItem[] }) {
  return (
    <AnimatedSection className="py-20">
      <ContentReveal delay={0}>
        <h2 className="text-4xl font-bold mb-12 text-center">Education & Experience</h2>
      </ContentReveal>

      <div className="max-w-3xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative pb-12 animate-stagger-1"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline line */}
            {index !== items.length - 1 && (
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-transparent" />
            )}

            {/* Timeline dot */}
            <div className="relative z-10 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-sky-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                <div className="w-3 h-3 rounded-full bg-slate-900" />
              </div>
            </div>

            {/* Timeline content */}
            <div className="ml-20 glass-ai p-6">
              <h3 className="text-lg font-semibold text-cyan-300">{item.title}</h3>
              <p className="text-slate-400 text-sm font-medium mb-2">{item.subtitle}</p>
              <p className="text-slate-500 text-xs mb-3">{item.date}</p>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}

// ═══════════════════════════════════════════════════════════════
// EXAMPLE 7: CONTACT FORM WITH ANIMATION
// ═══════════════════════════════════════════════════════════════

'use client'

import { useState } from 'react'

export function ContactFormExample() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
  }

  return (
    <AnimatedSection className="py-20 max-w-2xl mx-auto">
      <ContentReveal delay={0}>
        <h2 className="text-4xl font-bold mb-8 text-center">Get in Touch</h2>
      </ContentReveal>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <ContentReveal delay={100}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Your Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg glass-ai focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Mouaad Essaghir"
              required
            />
          </div>
        </ContentReveal>

        {/* Email Field */}
        <ContentReveal delay={150}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg glass-ai focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="hello@example.com"
              required
            />
          </div>
        </ContentReveal>

        {/* Subject Field */}
        <ContentReveal delay={200}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg glass-ai focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              placeholder="Let's work together"
              required
            />
          </div>
        </ContentReveal>

        {/* Message Field */}
        <ContentReveal delay={250}>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Message
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 rounded-lg glass-ai focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
              placeholder="Tell me about your project..."
              required
            />
          </div>
        </ContentReveal>

        {/* Submit Button */}
        <ContentReveal delay={300}>
          <PrimaryButton
            type="submit"
            size="lg"
            isLoading={isSubmitting}
            className="w-full"
          >
            Send Message
          </PrimaryButton>
        </ContentReveal>
      </form>
    </AnimatedSection>
  )
}

// ═══════════════════════════════════════════════════════════════
// INTEGRATION NOTES
// ═══════════════════════════════════════════════════════════════

/**
 * To use these examples in your actual pages:
 *
 * 1. IMPORT AT THE TOP OF YOUR PAGE:
 *    import { HeroSectionExample } from '@/components/examples/styling-examples'
 *
 * 2. ADD TO YOUR PAGE JSX:
 *    <HeroSectionExample />
 *
 * 3. MAKE SURE YOUR PAGE IS A CLIENT COMPONENT:
 *    'use client'
 *
 * 4. TEST ANIMATIONS:
 *    - Check that animations play smoothly on page load
 *    - Verify theme colors match the profile (dark for AI, light for Web)
 *    - Test on mobile (animations may be disabled for performance)
 *    - Check accessibility (tab navigation, focus states)
 *
 * 5. CUSTOMIZE FOR YOUR CONTENT:
 *    - Replace placeholder text with actual content from lib/data.ts
 *    - Update colors/styling to match your brand
 *    - Adjust animation delays based on your preference
 *    - Test with your actual data to ensure responsive layout
 */

export default function StyleExamplesIndex() {
  return (
    <div className="space-y-20">
      <HeroSectionExample />
      <StatsSection />
      <div className="max-w-6xl mx-auto px-4">
        {/* <ProjectsGridExample projects={aiProjects} />
        <SkillsSection skillGroups={aiSkills} />
        <TimelineExample items={educationItems} />
        <ContactFormExample /> */}
      </div>
    </div>
  )
}
