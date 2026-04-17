import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Scott G. A. Metcalf | Get in Touch',
  description: 'Connect with Scott G. A. Metcalf. Have a question about his books? Interested in speaking engagements? Reach out.',
  openGraph: {
    title: 'Contact Scott G. A. Metcalf | Get in Touch',
    description: 'Connect with Scott G. A. Metcalf. Have a question about his books? Interested in speaking engagements? Reach out.',
    url: 'https://scottmetcalf.com/contact',
    type: 'website',
    images: [
      {
        url: 'https://imgur.com/g6qSRMs.png',
        width: 800,
        height: 800,
        alt: 'Scott G. A. Metcalf',
      },
    ],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
