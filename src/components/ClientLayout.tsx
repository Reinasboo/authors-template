'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

export default function ClientLayout({ children }: { children: ReactNode }) {
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
