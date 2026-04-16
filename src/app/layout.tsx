import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/ThemeContext'
import ClientLayoutWrapper from '@/components/ClientLayoutWrapper'

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
  icons: {
    icon: 'https://imgur.com/g6qSRMs.png',
    apple: 'https://imgur.com/g6qSRMs.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://scottmetcalf.com',
    title: 'Scott G. A. Metcalf | Military Memoir Author',
    description: 'Reflective memoirs from a soldier\'s perspective. Explore the stories of war, brotherhood, and resilience.',
    siteName: 'Scott G. A. Metcalf',
    images: [
      {
        url: 'https://imgur.com/n6TvYYX.jpg',
        width: 1200,
        height: 630,
        alt: 'Scott G. A. Metcalf - Military Memoir Author',
        type: 'image/jpeg',
      },
      {
        url: 'https://imgur.com/g6qSRMs.png',
        width: 800,
        height: 800,
        alt: 'Scott G. A. Metcalf Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scott G. A. Metcalf | Military Memoir Author',
    description: 'Reflective memoirs from a soldier\'s perspective. Explore the stories of war, brotherhood, and resilience.',
    images: ['https://imgur.com/n6TvYYX.jpg'],
    creator: '@scottmetcalfwrites',
    site: '@scottmetcalfwrites',
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
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
