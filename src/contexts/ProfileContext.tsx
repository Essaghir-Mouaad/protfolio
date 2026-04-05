'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { Profile } from '@/lib/types'

interface ProfileContextType {
  profile: Profile
  setProfile: (profile: Profile) => void
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

function parseProfileFromCookie(cookieValue?: string): Profile | undefined {
  if (!cookieValue) return undefined
  const saved = cookieValue
    .split('; ')
    .find(row => row.startsWith('mouaad_profile='))
    ?.split('=')[1]

  if (saved === 'data-ai' || saved === 'web-dev') {
    return saved
  }

  return undefined
}

export function ProfileProvider({
  children,
  initialProfile,
}: {
  children: React.ReactNode
  initialProfile?: Profile
}) {
  const [profile, setProfileState] = useState<Profile>(() => {
    if (initialProfile) return initialProfile
    if (typeof document !== 'undefined') {
      return parseProfileFromCookie(document.cookie) ?? 'data-ai'
    }
    return 'data-ai'
  })

  useEffect(() => {
    // Update data-theme attribute on html element
    const theme = profile === 'data-ai' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', theme)
  }, [profile])

  const setProfile = (p: Profile) => {
    setProfileState(p)
    document.cookie = `mouaad_profile=${p};path=/;max-age=31536000`
  }

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile(): ProfileContextType {
  const context = useContext(ProfileContext)
  if (!context) {
    throw new Error('useProfile must be used within ProfileProvider')
  }
  return context
}
