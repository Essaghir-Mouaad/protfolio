import type { Metadata } from 'next'
import { cookies } from 'next/headers'
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
  const profileCookie = cookies().get('mouaad_profile')?.value
  const initialProfile = profileCookie === 'web-dev' ? 'web-dev' : 'data-ai'
  const initialTheme = initialProfile === 'data-ai' ? 'dark' : 'light'

  return (
    <html lang="en" suppressHydrationWarning data-theme={initialTheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050a14" />
      </head>
      <body>
        <ProfileProvider initialProfile={initialProfile}>
          {children}
        </ProfileProvider>
      </body>
    </html>
  )
}
