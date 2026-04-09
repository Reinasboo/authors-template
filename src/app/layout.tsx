'use client'

import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/ThemeContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const dynamic = 'force-dynamic'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export const metadata: Metadata = {
  title: 'Scott G. A. Metcalf | Military Memoir Author',
  description: 'Reflective memoirs from a soldier\'s perspective. Explore the stories of war, brotherhood, and resilience.',
  creator: 'Scott G. A. Metcalf',
  generator: 'Next.js',
  keywords: ['memoir', 'military', 'iraq war', 'author', 'storytelling'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scottmetcalf.com',
    title: 'Scott G. A. Metcalf | Military Memoir Author',
    description: 'Reflective memoirs from a soldier\'s perspective.',
    siteName: 'Scott G. A. Metcalf',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navigation />
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
