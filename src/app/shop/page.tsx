import { Metadata } from 'next'
import ShopContent from './shop-content'

export const metadata: Metadata = {
  title: 'Shop | Scott G. A. Metcalf - Buy eBooks',
  description: 'Purchase ebooks by Scott G. A. Metcalf and download instantly. Military memoirs and inspiring narratives.',
  openGraph: {
    title: 'Shop | Scott G. A. Metcalf - Buy eBooks',
    description: 'Purchase ebooks by Scott G. A. Metcalf and download instantly.',
    url: 'https://scottmetcalf.com/shop',
    type: 'website',
    images: [
      {
        url: 'https://imgur.com/OAJtzds.jpg',
        width: 1200,
        height: 630,
        alt: 'Scott G. A. Metcalf Books',
      },
    ],
  },
}

export default function ShopPage() {
  return <ShopContent />
}
