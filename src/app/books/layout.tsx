import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Books by Scott G. A. Metcalf | Complete Bibliography',
  description: 'Explore all published works by Scott G. A. Metcalf—military memoirs, fiction, and international editions.',
  openGraph: {
    title: 'Books by Scott G. A. Metcalf | Complete Bibliography',
    description: 'Explore all published works by Scott G. A. Metcalf—military memoirs, fiction, and international editions.',
    url: 'https://scottmetcalf.com/books',
    type: 'website',
    images: [
      {
        url: 'https://imgur.com/OAJtzds.jpg',
        width: 1200,
        height: 630,
        alt: 'Letter to Home from the Sandbox',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Books by Scott G. A. Metcalf | Complete Bibliography',
    description: 'Explore all published works by Scott G. A. Metcalf—military memoirs, fiction, and international editions.',
    images: ['https://imgur.com/OAJtzds.jpg'],
    creator: '@scottmetcalfwrites',
  },
}

export default function BooksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
