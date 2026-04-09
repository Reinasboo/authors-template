'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/lib/ThemeContext'

export function useThemeSafe() {
  const context = useContext(ThemeContext)
  
  // Return default values if context is not available (during SSR)
  if (!context) {
    return {
      theme: 'light' as const,
      toggleTheme: () => {},
    }
  }
  
  return context
}
