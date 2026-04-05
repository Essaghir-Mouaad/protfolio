'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { Profile } from '@/lib/types'

interface ProfileContextType {
  profile: Profile
  setProfile: (profile: Profile) => void
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined)

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfileState] = useState<Profile>('data-ai')

  useEffect(() => {
    try {
      const saved = document.cookie
        .split('; ')
        .find(row => row.startsWith('mouaad_profile='))
        ?.split('=')[1] as Profile | undefined
      
      if (saved === 'data-ai' || saved === 'web-dev') {
        setProfileState(saved)
      }
    } catch (err) {
      console.error('Error reading profile cookie:', err)
    }
  }, [])

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
