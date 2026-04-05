/**
 * ANIMATED CARD COMPONENT
 * Reusable card with hover lift, glow, and stagger animations
 * Adapts to both AI (dark) and Web (light) themes
 */

'use client'

import React from 'react'
import Image from 'next/image'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hover?: 'lift' | 'glow' | 'scale' | 'tilt'
  delay?: number
  index?: number
  stagger?: boolean
}

export function AnimatedCard({
  children,
  className = '',
  hover = 'lift',
  delay = 0,
  index = 0,
  stagger = false,
}: AnimatedCardProps) {
  // Detect theme
  const isDark =
    typeof window !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') === 'dark'
      : true

  const baseClasses =
    'rounded-lg overflow-hidden transition-all duration-300 cursor-default'

  const hoverClasses = {
    lift: 'card-lift',
    glow: isDark ? 'glow-cyan-box' : 'glow-emerald-box',
    scale: 'hover:scale-105',
    tilt: 'hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(-5deg)]',
  }

  const staggerClass = stagger ? `animate-stagger-${Math.min(index + 1, 6)}` : ''

  const cardClasses = `${baseClasses} ${hoverClasses[hover]} ${staggerClass} ${className} border ${isDark ? 'bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/50' : 'bg-white border-emerald-500/20 hover:border-emerald-500/40'}`

  return (
    <div className={cardClasses} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/**
 * PROJECT CARD
 * Specialized card for displaying projects with image, title, description, tags, and link
 */

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
  link?: string
  badge?: string
  index?: number
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  badge,
  index = 0,
}: ProjectCardProps) {
  const isDark =
    typeof window !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') === 'dark'
      : true

  return (
    <AnimatedCard
      hover="lift"
      index={index}
      stagger={true}
      className={`overflow-hidden border transition-all duration-300 ${
        isDark
          ? 'bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/50'
          : 'bg-white border-emerald-500/20 hover:border-emerald-500/40'
      }`}
    >
      {/* Project Image */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
          <Image
            src={image}
            alt={title}
            width={800}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div
            className={`absolute inset-0 transition-opacity duration-300 ${
              isDark
                ? 'bg-gradient-to-t from-slate-900 to-transparent opacity-60'
                : 'bg-gradient-to-t from-white/20 to-transparent opacity-40'
            }`}
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3
            className={`text-lg font-semibold transition-colors ${
              isDark ? 'text-cyan-300' : 'text-emerald-700'
            }`}
          >
            {title}
          </h3>
          {badge && (
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                isDark
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'bg-emerald-500/15 text-emerald-700 border border-emerald-300'
              }`}
            >
              {badge}
            </span>
          )}
        </div>

        {/* Description */}
        <p
          className={`text-sm leading-relaxed mb-4 ${
            isDark ? 'text-slate-400' : 'text-gray-600'
          }`}
        >
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs font-medium px-2.5 py-1 rounded transition-colors ${
                isDark
                  ? 'bg-slate-800 text-cyan-300 border border-cyan-500/20 hover:border-cyan-500/40'
                  : 'bg-gray-100 text-emerald-700 border border-emerald-300 hover:border-emerald-400'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Link */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 mt-4 text-sm font-medium transition-colors group ${
              isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-emerald-600 hover:text-emerald-700'
            }`}
          >
            View Project
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        )}
      </div>
    </AnimatedCard>
  )
}

/**
 * SKILL BADGE CARD
 * Card for displaying individual skills with icon and label
 */

interface SkillBadgeProps {
  name: string
  icon?: React.ReactNode
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  index?: number
}

export function SkillBadge({ name, icon, level, index = 0 }: SkillBadgeProps) {
  const isDark =
    typeof window !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') === 'dark'
      : true

  const levelColors = {
    beginner: isDark ? 'from-cyan-500/40 to-sky-500/40' : 'from-emerald-500/20 to-teal-500/20',
    intermediate: isDark ? 'from-cyan-500/60 to-sky-500/60' : 'from-emerald-500/35 to-teal-500/35',
    advanced: isDark ? 'from-cyan-500/80 to-sky-500/80' : 'from-emerald-500/50 to-teal-500/50',
    expert: isDark ? 'from-cyan-500 to-sky-500' : 'from-emerald-500 to-teal-500',
  }

  return (
    <AnimatedCard
      hover="scale"
      index={index}
      stagger={true}
      className={`flex flex-col items-center justify-center p-4 border transition-all duration-300 ${
        isDark
          ? 'bg-slate-900/30 border-cyan-500/10 hover:border-cyan-500/30'
          : 'bg-white/50 border-emerald-500/10 hover:border-emerald-500/30'
      }`}
    >
      {/* Icon */}
      {icon && (
        <div
          className={`w-12 h-12 mb-3 flex items-center justify-center rounded-lg transition-all duration-300 ${
            isDark ? 'bg-slate-800/50' : 'bg-gray-100'
          } group-hover:shadow-lg`}
        >
          {icon}
        </div>
      )}

      {/* Name */}
      <h4
        className={`text-sm font-semibold text-center transition-colors ${
          isDark ? 'text-slate-100' : 'text-gray-900'
        }`}
      >
        {name}
      </h4>

      {/* Level indicator */}
      {level && (
        <div
          className={`mt-2 w-6 h-1 rounded-full bg-gradient-to-r ${levelColors[level]} transition-all duration-300`}
        />
      )}
    </AnimatedCard>
  )
}

/**
 * STAT CARD
 * Card for displaying statistics or quick facts
 */

interface StatCardProps {
  value: string | number
  label: string
  icon?: React.ReactNode
  index?: number
}

export function StatCard({ value, label, icon, index = 0 }: StatCardProps) {
  const isDark =
    typeof window !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') === 'dark'
      : true

  return (
    <AnimatedCard
      hover="lift"
      index={index}
      stagger={true}
      className={`p-6 border text-center transition-all duration-300 ${
        isDark
          ? 'bg-slate-900/50 border-cyan-500/20 hover:border-cyan-500/50'
          : 'bg-white border-emerald-500/20 hover:border-emerald-500/40'
      }`}
    >
      {icon && <div className="flex justify-center mb-3">{icon}</div>}

      <div
        className={`text-3xl font-bold mb-2 ${
          isDark ? 'text-cyan-300' : 'text-emerald-700'
        }`}
      >
        {value}
      </div>

      <p
        className={`text-sm font-medium ${isDark ? 'text-slate-400' : 'text-gray-600'}`}
      >
        {label}
      </p>
    </AnimatedCard>
  )
}
