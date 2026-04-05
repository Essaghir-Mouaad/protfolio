/**
 * ANIMATED BUTTON COMPONENT
 * Reusable button with hover, click, and loading animations
 * Works on both AI (dark) and Web (light) themes
 */

'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface AnimatedButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  disabled?: boolean
  className?: string
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function AnimatedButton({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className = '',
  external = false,
  type = 'button',
}: AnimatedButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const baseClasses =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 ease-out rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2'

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm gap-2',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-7 py-3.5 text-lg gap-3',
  }

  // AI Theme (Dark)
  const darkVariants = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-sky-400 focus:ring-cyan-400',
    secondary:
      'bg-sky-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-sky-500/30 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/20 focus:ring-cyan-400',
    outline:
      'border-2 border-cyan-400/50 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/20 focus:ring-cyan-400',
  }

  // Web Theme (Light)
  const lightVariants = {
    primary:
      'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:from-emerald-600 hover:to-teal-600 focus:ring-emerald-400',
    secondary:
      'bg-emerald-500/15 text-emerald-700 border border-emerald-300 hover:bg-emerald-500/25 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 focus:ring-emerald-400',
    outline:
      'border-2 border-emerald-500/50 text-emerald-700 hover:border-emerald-500 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/20 focus:ring-emerald-400',
  }

  // Detect theme from data-theme attribute
  const isDark =
    typeof window !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') === 'dark'
      : true

  const variantClasses = isDark ? darkVariants[variant] : lightVariants[variant]

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses} ${disabledClasses} ${className}`

  // Ripple effect on click
  const handleMouseDown = () => {
    if (!disabled) setIsPressed(true)
  }

  const handleMouseUp = () => {
    setIsPressed(false)
  }

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      <span className="relative z-10">{children}</span>

      {/* Hover glow effect */}
      <div
        className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none ${
          isDark ? 'bg-cyan-400/10' : 'bg-emerald-400/10'
        }`}
      />
    </>
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={`group/btn ${buttonClasses}`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {content}
        </a>
      )
    }

    return (
      <Link
        href={href}
        className={`group/btn ${buttonClasses}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={`group/btn ${buttonClasses} ${isPressed ? 'animate-button-press' : ''}`}
      onClick={onClick}
      disabled={disabled || isLoading}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {content}
    </button>
  )
}

/**
 * Preset Button Variants
 */

export const PrimaryButton = (props: Omit<AnimatedButtonProps, 'variant'>) => (
  <AnimatedButton {...props} variant="primary" />
)

export const SecondaryButton = (props: Omit<AnimatedButtonProps, 'variant'>) => (
  <AnimatedButton {...props} variant="secondary" />
)

export const OutlineButton = (props: Omit<AnimatedButtonProps, 'variant'>) => (
  <AnimatedButton {...props} variant="outline" />
)
