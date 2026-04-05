'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useProfile } from '@/contexts/ProfileContext'
import { usePathname } from 'next/navigation'

export function AINavbar() {
  const router = useRouter()
  const { setProfile } = useProfile()
  const pathname = usePathname()

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
            <Link
              href="/data-ai/skills"
              className={`text-sm transition-all ${
                isActive('/data-ai/skills')
                  ? 'text-ai-primary border-b-2 border-ai-primary pb-1'
                  : 'text-ai-text-secondary hover:text-ai-text'
              }`}
            >
              Skills
            </Link>
            <Link
              href="/data-ai/projects"
              className={`text-sm transition-all ${
                isActive('/data-ai/projects')
                  ? 'text-ai-primary border-b-2 border-ai-primary pb-1'
                  : 'text-ai-text-secondary hover:text-ai-text'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/data-ai/research"
              className={`text-sm transition-all ${
                isActive('/data-ai/research')
                  ? 'text-ai-primary border-b-2 border-ai-primary pb-1'
                  : 'text-ai-text-secondary hover:text-ai-text'
              }`}
            >
              Research
            </Link>
            <Link
              href="/about"
              className={`text-sm transition-all ${
                isActive('/about')
                  ? 'text-ai-primary border-b-2 border-ai-primary pb-1'
                  : 'text-ai-text-secondary hover:text-ai-text'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm transition-all ${
                isActive('/contact')
                  ? 'text-ai-primary border-b-2 border-ai-primary pb-1'
                  : 'text-ai-text-secondary hover:text-ai-text'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Profile Switch Button */}
          <button
            onClick={handleProfileSwitch}
            className="px-4 py-2 bg-ai-secondary hover:bg-ai-secondary/90 text-ai-bg font-semibold rounded-full text-sm transition-all duration-200 shadow-sm hover:shadow-md"
          >
            ⚡ Web Dev
          </button>
        </div>
      </div>
    </nav>
  )
}
