'use client'

import { useProfile } from '@/contexts/ProfileContext'
import { AINavbar } from '@/components/ai/AINavbar'
import { WebNavbar } from '@/components/web/WebNavbar'

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { profile } = useProfile()
  const isAIProfile = profile === 'data-ai'

  return (
    <div
      className={isAIProfile ? 'min-h-screen bg-ai-bg text-ai-text' : 'min-h-screen bg-web-bg text-web-text'}
      data-theme={isAIProfile ? 'dark' : 'light'}
    >
      {isAIProfile ? <AINavbar /> : <WebNavbar />}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</main>
    </div>
  )
}
