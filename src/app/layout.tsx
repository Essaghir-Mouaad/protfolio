import type { Metadata } from 'next'
import { ProfileProvider } from '@/contexts/ProfileContext'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Mouaad Essaghir — Portfolio',
  description: 'Dual-profile portfolio showcasing AI/ML and Full-Stack Web Dev projects.',
  keywords: ['AI', 'ML', 'Web Development', 'Engineering', 'Portfolio'],
  authors: [{ name: 'Mouaad Essaghir' }],
  creator: 'Mouaad Essaghir',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mouaad.dev',
    siteName: 'Mouaad Essaghir',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050a14" />
      </head>
      <body>
        <ProfileProvider>
          {children}
        </ProfileProvider>
      </body>
    </html>
  )
}
