'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useProfile } from '@/contexts/ProfileContext'
import { usePathname } from 'next/navigation'

export function WebNavbar() {
  const router = useRouter()
  const { setProfile } = useProfile()
  const pathname = usePathname()

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
            <Link
              href="/web-dev/skills"
              className={`text-sm transition-all ${
                isActive('/web-dev/skills')
                  ? 'text-web-primary border-b-2 border-web-primary pb-1'
                  : 'text-web-text-secondary hover:text-web-text'
              }`}
            >
              Skills
            </Link>
            <Link
              href="/web-dev/projects"
              className={`text-sm transition-all ${
                isActive('/web-dev/projects')
                  ? 'text-web-primary border-b-2 border-web-primary pb-1'
                  : 'text-web-text-secondary hover:text-web-text'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={`text-sm transition-all ${
                isActive('/about')
                  ? 'text-web-primary border-b-2 border-web-primary pb-1'
                  : 'text-web-text-secondary hover:text-web-text'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm transition-all ${
                isActive('/contact')
                  ? 'text-web-primary border-b-2 border-web-primary pb-1'
                  : 'text-web-text-secondary hover:text-web-text'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Profile Switch Button */}
          <button
            onClick={handleProfileSwitch}
            className="px-4 py-2 bg-web-primary hover:bg-web-secondary text-white font-semibold rounded-full text-sm transition-all duration-200 shadow-sm hover:shadow-md"
          >
            🧠 AI Profile
          </button>
        </div>
      </div>
    </nav>
  )
}
