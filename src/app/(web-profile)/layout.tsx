import { WebNavbar } from '@/components/web/WebNavbar'

export default function WebProfileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-web-bg text-web-text" data-theme="light">
      <WebNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {children}
      </main>
    </div>
  )
}
