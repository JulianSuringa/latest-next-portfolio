// components/ThemeProvider.tsx
'use client' // Important for client-side functionality

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import { type ThemeProviderProps } from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // Avoids hydration mismatch on initial render
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
