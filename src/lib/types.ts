// lib/types.ts
export type Profile = 'data-ai' | 'web-dev'

export interface Project {
  id: string
  title: string
  date: string
  description: string
  stack: string[]
  badge?: string
  github?: string
  demo?: string
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Education {
  school: string
  degree: string
  period: string
  location: string
}

export interface Experience {
  company: string
  role: string
  period: string
  description: string[]
}

export interface Club {
  name: string
  role: string
  org: string
}

export interface Owner {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  languages: string[]
}
