/**
 * PAGE TRANSITION WRAPPER
 * Wraps pages with smooth enter/exit animations
 * Detects theme changes and applies appropriate animations
 */

'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

interface PageTransitionProps {
  children: React.ReactNode
  className?: string
}

export function PageTransition({ children, className = '' }: PageTransitionProps) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div
      className={`animate-in fade-in slide-in-from-bottom-4 duration-500 ${className}`}
      key={pathname}
    >
      {isLoading && <PageLoadingBar />}
      {children}
    </div>
  )
}

/**
 * PAGE LOADING BAR
 * Subtle loading indicator that appears during page transitions
 */

function PageLoadingBar() {
  const isDark =
    typeof window !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') === 'dark'
      : true

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-1 z-50 origin-left ${
        isDark ? 'bg-gradient-to-r from-cyan-500 to-sky-500' : 'bg-gradient-to-r from-emerald-500 to-teal-500'
      }`}
      style={{
        animation: 'loadingBar 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      }}
    >
      <style jsx>{`
        @keyframes loadingBar {
          0% {
            transform: scaleX(0);
          }
          50% {
            transform: scaleX(1);
          }
          100% {
            transform: scaleX(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}

/**
 * SECTION ENTRANCE ANIMATION
 * Wrapper for sections to apply staggered entrance animations
 */

interface SectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function AnimatedSection({ children, className = '', delay = 0 }: SectionProps) {
  return (
    <section
      className={`animate-in fade-in slide-in-from-bottom-8 duration-700 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </section>
  )
}

/**
 * STAGGERED LIST
 * Container that staggers animation of child elements
 */

interface StaggeredListProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggeredList({
  children,
  className = '',
  staggerDelay = 100,
}: StaggeredListProps) {
  const childArray = React.Children.toArray(children)

  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <div
          key={index}
          style={{
            animation: `slideInUp 0.5s ease-out ${index * staggerDelay}ms both`,
          }}
        >
          <style jsx>{`
            @keyframes slideInUp {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
          {child}
        </div>
      ))}
    </div>
  )
}

/**
 * BLUR DIVIDER
 * Animated divider between sections with optional glow
 */

interface BlurDividerProps {
  className?: string
  animated?: boolean
}

export function BlurDivider({ className = '', animated = true }: BlurDividerProps) {
  const isDark =
    typeof window !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') === 'dark'
      : true

  return (
    <div
      className={`section-divider ${animated ? 'animate-pulse' : ''} ${className}`}
      style={{
        height: 1,
        background: isDark
          ? 'linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.3) 50%, transparent 100%)'
          : 'linear-gradient(90deg, transparent 0%, rgba(16, 185, 129, 0.25) 50%, transparent 100%)',
      }}
    />
  )
}

/**
 * CONTENT REVEAL
 * Reveals content line by line with animation
 */

interface ContentRevealProps {
  children: React.ReactNode
  delay?: number
}

export function ContentReveal({ children, delay = 0 }: ContentRevealProps) {
  return (
    <div
      className="overflow-hidden"
      style={{ animation: `revealContent 0.8s ease-out ${delay}ms both` }}
    >
      <style jsx>{`
        @keyframes revealContent {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {children}
    </div>
  )
}
