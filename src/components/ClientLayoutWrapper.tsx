'use client'

import { ReactNode } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ClientLayoutWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
