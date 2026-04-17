'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { bookProducts, type BookId } from '@/lib/stripe'
import { StripeCheckout } from '@/components/StripeCheckout'

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function ShopContent() {
  const [selectedBook, setSelectedBook] = useState<BookId | null>(null)

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-sand-light dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-deep-brown dark:text-dark-text mb-6">
            Shop
          </h1>
          <p className="text-lg text-charcoal/70 dark:text-dark-text-secondary max-w-2xl mx-auto">
            Purchase any book and get instant access to download. Own your copy today.
          </p>
        </motion.div>

        {selectedBook ? (
          /* Checkout View */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-6"
          >
            <button
              onClick={() => setSelectedBook(null)}
              className="text-deep-brown dark:text-green-accent hover:underline flex items-center gap-2"
            >
              ← Back to Shop
            </button>
            <StripeCheckout bookId={selectedBook} />
          </motion.div>
        ) : (
          /* Books Grid */
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(Object.entries(bookProducts) as Array<[BookId, typeof bookProducts[BookId]]>).map(
              ([bookId, book]) => (
                <motion.div
                  key={bookId}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-dark-surface rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300 border border-sand-dark/30 dark:border-dark-border h-full flex flex-col"
                  >
                    {/* Placeholder for book cover */}
                    <div className="h-48 bg-gradient-to-br from-deep-brown/10 to-muted-green/10 dark:from-green-accent/10 dark:to-muted-green/10 flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="text-4xl font-serif font-light text-deep-brown dark:text-dark-text mb-2">
                          {book.name.split(' ').slice(0, 2).join(' ')}
                        </div>
                        <p className="text-sm text-charcoal/70 dark:text-dark-text-secondary">
                          {book.name}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-serif text-deep-brown dark:text-dark-text mb-2">
                        {book.name}
                      </h3>
                      <p className="text-sm text-charcoal/70 dark:text-dark-text-secondary mb-4 flex-grow">
                        {book.description}
                      </p>

                      {/* Price and Button */}
                      <div className="border-t border-sand-dark/30 dark:border-dark-border pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-3xl font-light text-deep-brown dark:text-dark-text">
                            ${(book.price / 100).toFixed(2)}
                          </span>
                          <span className="text-xs font-medium text-charcoal/60 dark:text-dark-text-secondary/60 uppercase tracking-wide">
                            eBook
                          </span>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedBook(bookId as BookId)}
                          className="w-full py-3 bg-deep-brown dark:bg-green-accent text-sand dark:text-dark-bg rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                          Buy Now
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 bg-sand-dark/10 dark:bg-dark-surface rounded-lg p-8 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-serif text-deep-brown dark:text-dark-text mb-4">
            Instant Download
          </h2>
          <ul className="space-y-3 text-charcoal dark:text-dark-text-secondary">
            <li className="flex gap-3">
              <span className="text-green-600 dark:text-green-accent">✓</span>
              <span>Get instant access to download after successful payment</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 dark:text-green-accent">✓</span>
              <span>Download link sent directly to your email</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 dark:text-green-accent">✓</span>
              <span>Secure Stripe payment processing</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 dark:text-green-accent">✓</span>
              <span>Available in PDF format for all devices</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}
