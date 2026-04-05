'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useProfile } from '@/contexts/ProfileContext'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronUp, MenuIcon } from 'lucide-react'

export function WebNavbar() {
  const router = useRouter()
  const { setProfile } = useProfile()
  const pathname = usePathname()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const verticalNavLinks = [
    { href: '/web-dev/skills', label: 'Skills' },
    { href: '/web-dev/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const handleProfileSwitch = () => {
    setProfile('data-ai')
    router.push('/data-ai')
  }

  const isActive = (href: string) => pathname === href

  return (
    <nav className="sticky top-0 z-50 bg-web-surface border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/web-dev" className="text-xl font-bold text-web-primary hover:text-web-primary/80 transition-colors">
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
                    ? 'text-web-primary border-b-2 border-web-primary pb-1'
                    : 'text-web-text-secondary hover:text-web-text'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(prev => !prev)}
                className="md:hidden py-2 rounded-lg text-web-text-secondary hover:text-web-text transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <ChevronUp/> : <MenuIcon className='w-6 h-5' />}
            </button>

                {/* Profile Switch Button */}
              <button
                onClick={handleProfileSwitch}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-600 font-semibold rounded-full text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              >
                🧠 AI Profile
              </button>
            </div>
          
        </div>

        {/* Mobile Vertical Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-2">
            {verticalNavLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                  isActive(link.href)
                    ? 'text-web-primary bg-emerald-50 border border-emerald-200'
                    : 'text-web-text-secondary hover:text-web-text hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
