'use client'

import { motion } from 'framer-motion'
import { fadeInVariants, slideUpVariants, containerVariants, itemVariants } from '@/lib/animations'
import Button from '@/components/Button'
import BookCard from '@/components/BookCard'
import { useState } from 'react'

export default function Books() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null)

  const books = [
    {
      id: 'letters-sand',
      title: 'Letters from the Sand',
      subtitle: 'A Reflective Memoir of Deployment',
      year: 2020,
      pages: 256,
      description:
        'Letters from the Sand is an intimate exploration of deployment experiences in Iraq. Through personal correspondence and reflective narratives, author Scott G. A. Metcalf examines the psychological and emotional realities of combat deployment. The work is not a war story in the traditional sense—rather, it is a reflection on the interior landscape of soldiers, the bonds forged in shared adversity, and the complexities of reintegration.',
      details: [
        'Personal letters written during deployment',
        'Exploration of military brotherhood',
        'Psychological impact of war',
        'Reflections on duty and identity',
        'Journey toward healing and understanding',
      ],
      amazonUrl: 'https://amazon.com/Letters-Sand-Scott-Metcalf/dp/XXXXXXXXXX',
    },
    {
      id: 'soldiers-sandbox',
      title: 'Soldiers in the Sandbox',
      subtitle: 'Continued Reflections from the Field',
      year: 2021,
      pages: 288,
      description:
        'Soldiers in the Sandbox deepens the exploration begun in the first memoir. This work examines the collective experience of soldiers in shared spaces—the barracks, the missions, the quiet moments of vulnerability. Scott explores themes of masculinity in military culture, the moral weight of command decisions, and the lasting bonds between soldiers who have seen combat together. A testament to the complexity of human connection under extreme circumstances.',
      details: [
        'Collective soldier narratives',
        'Military culture and identity',
        'Moral complexity in combat',
        'Brotherhood and loyalty',
        'The aftermath of deployment',
      ],
      amazonUrl: 'https://amazon.com/Soldiers-Sandbox-Scott-Metcalf/dp/XXXXXXXXXX',
    },
    {
      id: 'letter-home',
      title: 'Letter Home from the Sandbox',
      subtitle: 'Personal Correspondence from Deployment',
      year: 2022,
      pages: 224,
      description:
        'Letter Home from the Sandbox is a collection of actual personal letters written during deployment—unfiltered dispatches from the field. These intimate correspondences offer readers an unmediated window into the daily realities of military life: the fear, humor, homesickness, and profound human connections formed in the desert. The power lies in the authentic voice of soldiers writing in the moment, not retrospectively. A raw and moving testament to human resilience.',
      details: [
        'Actual letters from deployment',
        'Unfiltered soldier perspective',
        'Daily realities of military life',
        'Connection to home and family',
        'Authentic, in-the-moment voice',
      ],
      amazonUrl: 'https://amazon.com/Letter-Home-Sandbox-Scott-Metcalf/dp/XXXXXXXXXX',
    },
  ]

  const reviews = [
    {
      author: 'Military History Quarterly',
      text: 'Scott Metcalf writes with rare emotional honesty. His memoirs capture the human truth of war in ways that transcend the typical military narrative.',
    },
    {
      author: 'The Literary Review',
      text: 'A powerful trilogy that treats military memoir as serious literature. Metcalf\'s prose is careful, reflective, and deeply moving.',
    },
    {
      author: 'Veteran Voices Podcast',
      text: 'Finally, a veteran author willing to sit with complexity rather than resolve it. These memoirs matter.',
    },
  ]

  return (
    <div className="min-h-screen pt-24 bg-sand-light dark:bg-dark-bg">
      {/* Page Header */}
      <section className="section-container py-spacing-3xl border-b border-sand-dark dark:border-dark-border">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="max-w-3xl"
        >
          <h1 className="text-display-lg text-deep-brown dark:text-dark-text mb-spacing-lg">
            The Memoirs
          </h1>
          <p className="text-body-lg text-charcoal/70 dark:text-dark-text-secondary">
            Three interconnected works exploring military experience, psychological resilience, and the journey toward understanding.
          </p>
        </motion.div>
      </section>

      {/* Books Grid */}
      <section className="section-container py-spacing-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-spacing-lg mb-spacing-3xl">
          {books.map((book, idx) => (
            <motion.div
              key={book.id}
              initial="hidden"
              whileInView="visible"
              variants={slideUpVariants}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedBook(book.id)}
            >
              <BookCard {...book} index={idx} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expanded Book View */}
      {selectedBook && (
        <section className="section-container py-spacing-3xl bg-sand-dark/5 dark:bg-dark-surface rounded-lg border border-sand-dark dark:border-dark-border">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
          >
            {books.map((book) => {
              if (book.id !== selectedBook) return null

              return (
                <div key={book.id} className="space-y-spacing-2xl">
                  <div className="flex items-start justify-between gap-spacing-lg">
                    <div className="flex-1">
                      <h2 className="text-display-md text-deep-brown dark:text-dark-text mb-spacing-sm">
                        {book.title}
                      </h2>
                      <p className="text-body-lg text-charcoal/70 dark:text-dark-text-secondary mb-spacing-lg">
                        {book.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedBook(null)}
                      className="text-2xl text-deep-brown dark:text-dark-text hover:text-brown-light dark:hover:text-green-accent transition-colors"
                    >
                      ×
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-spacing-lg">
                    <div className="md:col-span-2 space-y-spacing-lg">
                      <div>
                        <h3 className="text-heading-md font-serif text-deep-brown dark:text-dark-text mb-spacing-md">
                          Overview
                        </h3>
                        <p className="text-body text-charcoal dark:text-dark-text-secondary leading-relaxed">
                          {book.description}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-heading-md font-serif text-deep-brown dark:text-dark-text mb-spacing-md">
                          Key Themes
                        </h3>
                        <ul className="space-y-spacing-sm">
                          {book.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial="hidden"
                              animate="visible"
                              variants={itemVariants}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-start gap-spacing-sm text-body text-charcoal dark:text-dark-text-secondary"
                            >
                              <span className="text-deep-brown dark:text-green-accent font-bold mt-1">
                                •
                              </span>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-spacing-lg">
                      <div className="bg-sand-dark/20 dark:bg-dark-elevated p-spacing-lg rounded-lg border border-sand-dark dark:border-dark-border">
                        <dl className="space-y-spacing-md text-sm">
                          <div>
                            <dt className="font-medium text-deep-brown dark:text-green-accent mb-1">
                              Published
                            </dt>
                            <dd className="text-charcoal/70 dark:text-dark-text-secondary">
                              {book.year}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-medium text-deep-brown dark:text-green-accent mb-1">
                              Pages
                            </dt>
                            <dd className="text-charcoal/70 dark:text-dark-text-secondary">
                              {book.pages}
                            </dd>
                          </div>
                          <div>
                            <dt className="font-medium text-deep-brown dark:text-green-accent mb-1">
                              Format
                            </dt>
                            <dd className="text-charcoal/70 dark:text-dark-text-secondary">
                              Hardcover, Paperback, eBook
                            </dd>
                          </div>
                        </dl>
                      </div>

                      <Button
                        href={book.amazonUrl}
                        variant="primary"
                        className="w-full text-center"
                      >
                        Read on Amazon
                      </Button>
                      <Button
                        variant="secondary"
                        className="w-full text-center"
                      >
                        Add to Wishlist
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </section>
      )}

      {/* Reviews Section */}
      <section className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="mb-spacing-2xl"
        >
          <h2 className="text-heading-lg font-serif text-deep-brown dark:text-dark-text">
            What Readers Are Saying
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-spacing-lg"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-spacing-lg bg-sand-dark/10 dark:bg-dark-elevated rounded-lg border border-sand-dark dark:border-dark-border space-y-spacing-md"
            >
              <p className="text-body italic text-charcoal dark:text-dark-text-secondary">
                "{review.text}"
              </p>
              <p className="text-sm font-medium text-deep-brown dark:text-green-accent">
                — {review.author}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Reading Order */}
      <section className="section-container bg-sand-dark/10 dark:bg-dark-surface rounded-lg border border-sand-dark dark:border-dark-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="space-y-spacing-lg"
        >
          <div>
            <h2 className="text-heading-lg font-serif text-deep-brown dark:text-dark-text mb-spacing-md">
              Recommended Reading Order
            </h2>
            <p className="text-body text-charcoal/70 dark:text-dark-text-secondary">
              While each memoir stands alone, reading them in sequence provides the deepest narrative arc and thematic development.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-spacing-lg"
          >
            {[
              {
                order: 1,
                title: 'Letters from the Sand',
                reason: 'Foundation. Introduction to Scott\'s voice and the core themes of deployment.',
              },
              {
                order: 2,
                title: 'Soldiers in the Sandbox',
                reason: 'Extension. Deepens exploration and introduces broader military narratives.',
              },
              {
                order: 3,
                title: 'Letter Home from the Sandbox',
                reason: 'Conclusion. Raw materials that provide textural depth to earlier narratives.',
              },
            ].map((item, idx) => (
              <motion.div
                key={item.order}
                variants={itemVariants}
                className="p-spacing-lg bg-white dark:bg-dark-elevated rounded-lg border-2 border-deep-brown dark:border-green-accent"
              >
                <span className="inline-block w-8 h-8 rounded-full bg-deep-brown dark:bg-green-accent text-sand dark:text-dark-bg font-medium text-center mb-spacing-md">
                  {item.order}
                </span>
                <h4 className="text-heading-sm font-serif text-deep-brown dark:text-dark-text mb-spacing-sm">
                  {item.title}
                </h4>
                <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                  {item.reason}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
