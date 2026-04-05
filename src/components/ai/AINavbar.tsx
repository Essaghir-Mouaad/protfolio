'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useProfile } from '@/contexts/ProfileContext'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronUp, MenuIcon } from 'lucide-react'

export function AINavbar() {
  const router = useRouter()
  const { setProfile } = useProfile()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const verticalNavLinks = [
    { href: '/data-ai/skills', label: 'Skills' },
    { href: '/data-ai/projects', label: 'Projects' },
    { href: '/data-ai/research', label: 'Research' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const handleProfileSwitch = () => {
    setProfile('web-dev')
    router.push('/web-dev')
  }

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 bg-ai-bg/80 backdrop-blur-md border-b border-ai-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/data-ai" className="text-xl font-mono font-bold text-ai-primary hover:text-ai-primary/80 transition-colors">
            ME
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {verticalNavLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-all ${
                  isActive(link.href)
                    ? 'text-ai-primary border-b-2 border-ai-primary pb-1'
                    : 'text-ai-text-secondary hover:text-ai-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              className="md:hidden py-2  rounded-lg text-ai-text-secondary hover:text-ai-text hover:border-ai-primary transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <ChevronUp/> : <MenuIcon className='w-6 h-5' />}
            </button>

            {/* Profile Switch Button */}
            <button
              onClick={handleProfileSwitch}
              className="px-3 sm:px-4 py-2 bg-ai-secondary hover:bg-blue-950 text-ai-bg font-semibold rounded-full text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              ⚡ Web Dev
            </button>
          </div>
        </div>

        {/* Mobile Vertical Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-2">
            {verticalNavLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                  isActive(link.href)
                    ? 'text-ai-primary bg-ai-primary/10 border border-ai-primary/30'
                    : 'text-ai-text-secondary hover:text-ai-text hover:bg-ai-primary/5'
                }`}
              >
                {link.label}
              </Link>
            ))
            }
          </div>
        )}
      </div>
    </nav>
  )
}
