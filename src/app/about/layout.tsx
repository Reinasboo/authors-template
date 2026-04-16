import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Scott G. A. Metcalf | Military Memoir Author',
  description: 'Learn about Scott G. A. Metcalf—a soldier, memoirist, and advocate for authentic veteran voices in literature.',
  openGraph: {
    title: 'About Scott G. A. Metcalf | Military Memoir Author',
    description: 'Learn about Scott G. A. Metcalf—a soldier, memoirist, and advocate for authentic veteran voices in literature.',
    url: 'https://scottmetcalf.com/about',
    type: 'website',
    images: [
      {
        url: 'https://imgur.com/n6TvYYX.jpg',
        width: 1200,
        height: 630,
        alt: 'Scott G. A. Metcalf',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Scott G. A. Metcalf | Military Memoir Author',
    description: 'Learn about Scott G. A. Metcalf—a soldier, memoirist, and advocate for authentic veteran voices in literature.',
    images: ['https://imgur.com/n6TvYYX.jpg'],
    creator: '@scottmetcalfwrites',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
