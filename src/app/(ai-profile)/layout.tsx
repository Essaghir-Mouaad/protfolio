import { AINavbar } from '@/components/ai/AINavbar'

export default function AIProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-ai-bg text-ai-text" data-theme="dark">
      <AINavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  )
}
