'use client'

export const dynamic = 'force-dynamic'

import { motion } from 'framer-motion'
import { fadeInVariants, slideUpVariants, containerVariants, itemVariants } from '@/lib/animations'
import Button from '@/components/Button'
import BookCard from '@/components/BookCard'
import { useState } from 'react'

export default function Books() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<'featured' | 'other' | 'international'>('featured')

  const featuredBooks = [
    {
      id: 'letters-sand',
      title: 'Letter to Home from the Sandbox',
      subtitle: 'A Reflective Memoir of Deployment',
      year: 2020,
      pages: 256,
      description:
        'Letter to Home from the Sandbox is an intimate exploration of deployment experiences in Iraq. Through personal correspondence and reflective narratives, author Scott G. A. Metcalf examines the psychological and emotional realities of combat deployment. The work is not a war story in the traditional sense—rather, it is a reflection on the interior landscape of soldiers, the bonds forged in shared adversity, and the complexities of reintegration.',
      details: [
        'Personal letters written during deployment',
        'Exploration of military brotherhood',
        'Psychological impact of war',
        'Reflections on duty and identity',
        'Journey toward healing and understanding',
      ],
      image: 'https://imgur.com/OAJtzds.jpg',
      amazonUrl: 'https://www.amazon.com/Letter-Home-Sandbox-Scott-Metcalf-ebook/dp/B0G1D2Q2HP?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.UBSdf-GztWfLGUCavloXMF6MZWWs7hbeSKFBDXia9s-2AuAxBZ8T_lqnrE8l7r1bj-V0f35gOp2Qt9OBYv_gosf8Snu7DJ2cIGIvDvGSXUDDKbsBymJ2Xd2GNs3e3e9F.fd0XyMBWwTV7haQ2JTfCYLsXDH5sVCOxvBsrPmEABtU&dib_tag=AUTHOR',
    },
    {
      id: 'soldiers-sandbox',
      title: 'Soldiers in the Sandbox',
      subtitle: 'Continued Reflections from the Field',
      year: 2021,
      pages: 288,
      description:
        'Soldiers in the Sandbox deepens the exploration begun in the first memoir. This work examines the collective experience of soldiers in shared spaces—the barracks, the missions, the quiet moments of vulnerability. Scott explores themes of masculinity in military culture, the moral weight of command decisions, and the lasting bonds between soldiers who have seen combat together. A testament to the complexity of human connection under extreme circumstances.',
      image: 'https://imgur.com/R6qIVw3.jpg',
      details: [
        'Collective soldier narratives',
        'Military culture and identity',
        'Moral complexity in combat',
        'Brotherhood and loyalty',
        'The aftermath of deployment',
      ],
      amazonUrl: 'https://www.amazon.com/Soldiers-Sandbox-Scott-G-Metcalf-ebook/dp/B0GFFQ1P2P?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.UBSdf-GztWfLGUCavloXMF6MZWWs7hbeSKFBDXia9s-2AuAxBZ8T_lqnrE8l7r1bj-V0f35gOp2Qt9OBYv_gosf8Snu7DJ2cIGIvDvGSXUDDKbsBymJ2Xd2GNs3e3e9F.fd0XyMBWwTV7haQ2JTfCYLsXDH5sVCOxvBsrPmEABtU&dib_tag=AUTHOR',
    },
    {
      id: 'inside-walls',
      title: 'Inside The Walls',
      subtitle: 'A Correctional Officer Memoir',
      year: 2023,
      pages: 304,
      description:
        'In Inside the Walls, Scott G. Metcalf delivers a correctional officer memoir that takes away stereotypes and exposes the reality of life inside a modern prison. From his first disorienting day walking through steel gates to the emotional toll of years spent maintaining order in a system built on control, this book offers a rare, insider\'s view of the prison world few ever see. This is not a story about heroes or villains. It is a deeply human account of prison life, where trust is fragile and survival depends as much on emotional discipline as physical vigilance.',
      image: 'https://imgur.com/D8JMFN8.jpg',
      details: [
        'Rare insider\'s view of prison life',
        'Unspoken rules among correctional officers',
        'Psychological weight of constant threat',
        'Criminal justice and law enforcement perspective',
        'Integrity in a system designed to strip it away',
      ],
      amazonUrl: 'https://www.amazon.com/Inside-Walls-Scott-G-Metcalf-ebook/dp/B0DP1WBSCF?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.UBSdf-GztWfLGUCavloXMF6MZWWs7hbeSKFBDXia9s-2AuAxBZ8T_lqnrE8l7r1bj-V0f35gOp2Qt9OBYv_gosf8Snu7DJ2cIGIvDvGSXUDDKbsBymJ2Xd2GNs3e3e9F.fd0XyMBWwTV7haQ2JTfCYLsXDH5sVCOxvBsrPmEABtU&dib_tag=AUTHOR',
    },
  ]

  const otherWorks = [
    {
      id: 'crazy-lady',
      title: 'Crazy Lady',
      subtitle: 'A Novel',
      year: 2020,
      pages: 320,
      description:
        'A gripping narrative that explores human resilience and the complex relationships that define us. Crazy Lady is a departure from memoir that showcases Metcalf\'s skill at crafting compelling fiction.',
      details: [
        'Complex character study',
        'Psychological depth',
        'Human connection',
        'Personal transformation',
        'Literary fiction',
      ],
      image: 'https://imgur.com/GfjSvqm.jpg',
      amazonUrl: 'https://www.amazon.com/Crazy-Lady-Scott-G-Metcalf-ebook/dp/B0GF8RCGZF?ref_=ast_author_dp_rw&th=1&psc=1',
    },
    {
      id: 'starting-from-scratch',
      title: 'Starting From Scratch',
      subtitle: 'A Journey of Reinvention',
      year: 2024,
      pages: 256,
      description:
        'A powerful exploration of new beginnings and the courage required to start over. This work examines the human capacity for change and growth after life\'s challenges.',
      details: [
        'Personal renewal',
        'Overcoming adversity',
        'Building anew',
        'Resilience and hope',
        'Life transitions',
      ],
      image: 'https://imgur.com/4WGRSKH.jpg',
      amazonUrl: 'https://www.amazon.com/Starting-Scratch-Scott-G-Metcalf-ebook/dp/B0DYPFXSBC?ref_=ast_author_dp_rw&th=1&psc=1',
    },
  ]

  const internationalEditions = [
    {
      id: 'cartas-desierto',
      title: 'Cartas desde el Desierto',
      subtitle: 'Spanish Edition',
      year: 2021,
      pages: 256,
      language: 'Spanish',
      description:
        'Letter to Home from the Sandbox translated to Spanish, bringing Scott\'s powerful narrative to Spanish-speaking audiences. A meditation on military experience, brotherhood, and the journey home.',
      details: [
        'Complete translation',
        'Preserves original voice',
        'Spanish-language audiences',
        'Award-winning translation',
        'Hardcover & Paperback',
      ],
      image: 'https://imgur.com/FZnfUIF.jpg',
      amazonUrl: 'https://www.amazon.com/Cartas-desde-el-Desierto-Spanish/dp/B0GFQ85VGX?ref_=ast_author_dp_rw&th=1&psc=1',
    },
    {
      id: 'lettres-desert',
      title: 'Lettres venues du désert',
      subtitle: 'French Edition',
      year: 2021,
      pages: 256,
      language: 'French',
      description:
        'The French translation of Letter to Home from the Sandbox, offering Francophone readers access to Metcalf\'s intimate exploration of deployment and human resilience.',
      details: [
        'French translation',
        'European distribution',
        'Maintains literary tone',
        'Professional translation',
        'Paperback available',
      ],
      image: 'https://imgur.com/cXOyQrb.jpg',
      amazonUrl: 'https://www.amazon.com/Lettres-venues-du-d%C3%A9sert-French/dp/B0GFGNN15K?ref_=ast_author_dp_rw&th=1&psc=1',
    },
  ]

  const books = selectedCategory === 'featured' ? featuredBooks : selectedCategory === 'other' ? otherWorks : internationalEditions

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

  const testimonials = [
    {
      name: 'Captain Michael Torres',
      title: 'Retired Army Officer',
      location: 'Fort Bliss, Texas',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      text: 'Letter to Home from the Sandbox and Soldiers in the Sandbox aren\'t just memoirs—they\'re mirrors. Scott captures what we don\'t have words for. Essential reading for anyone who\'s served.',
      books: ['Letter to Home from the Sandbox', 'Soldiers in the Sandbox'],
    },
    {
      name: 'Dr. Sarah Chen',
      title: 'Clinical Psychologist',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      text: 'I recommend Metcalf\'s complete works to my clients dealing with trauma and identity. Letter to Home from the Sandbox, Soldiers in the Sandbox, and Inside the Walls provide powerful frameworks for processing institutional experiences.',
      books: ['Letter to Home from the Sandbox', 'Soldiers in the Sandbox', 'Inside The Walls'],
    },
    {
      name: 'James Wellington',
      title: 'Correctional Officer, 15 years',
      location: 'Oklahoma City, OK',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      text: 'Inside The Walls told my story and the stories of my brothers and sisters in blue. Finally, someone who understands what it means to work in the shadows, maintaining dignity in an undignified system.',
      books: ['Inside The Walls'],
    },
    {
      name: 'Priya Sharma',
      title: 'Literary Critic & Author',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      text: 'Crazy Lady is a stunning work of psychological fiction. Metcalf\'s ability to build complex characters and explore the human condition transcends genre boundaries.',
      books: ['Crazy Lady'],
    },
    {
      name: 'David Martinez',
      title: 'Life Coach & Motivational Speaker',
      location: 'Denver, Colorado',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      text: 'Starting From Scratch became my companion through my own reinvention. Metcalf doesn\'t offer easy answers, but thoughtful reflection on what it truly means to rebuild.',
      books: ['Starting From Scratch'],
    },
    {
      name: 'Alejandro Gutiérrez',
      title: 'University Professor',
      location: 'Madrid, Spain',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      text: 'Cartas desde el Desierto es esencial para entender la experiencia del soldado moderno. La traducción mantiene la profundidad del original mientras habla directamente a audiencias hispanohablantes.',
      books: ['Cartas desde el Desierto'],
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
            Complete Bibliography
          </h1>
          <p className="text-body-lg text-charcoal/70 dark:text-dark-text-secondary">
            Explore all {featuredBooks.length + otherWorks.length + internationalEditions.length} published works by Scott G. A. Metcalf—from acclaimed military memoirs to international translations.
          </p>
        </motion.div>
      </section>

      {/* Category Tabs */}
      <section className="section-container py-spacing-2xl border-b border-sand-dark dark:border-dark-border">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="flex flex-wrap gap-spacing-md"
        >
          <button
            onClick={() => {
              setSelectedCategory('featured')
              setSelectedBook(null)
            }}
            className={`px-spacing-lg py-spacing-sm rounded-lg font-medium transition-all ${
              selectedCategory === 'featured'
                ? 'bg-deep-brown dark:bg-green-accent text-sand dark:text-dark-bg'
                : 'bg-sand-dark/20 dark:bg-dark-elevated text-deep-brown dark:text-dark-text hover:bg-sand-dark/40 dark:hover:bg-dark-border'
            }`}
          >
            Featured Trilogy
          </button>
          <button
            onClick={() => {
              setSelectedCategory('other')
              setSelectedBook(null)
            }}
            className={`px-spacing-lg py-spacing-sm rounded-lg font-medium transition-all ${
              selectedCategory === 'other'
                ? 'bg-deep-brown dark:bg-green-accent text-sand dark:text-dark-bg'
                : 'bg-sand-dark/20 dark:bg-dark-elevated text-deep-brown dark:text-dark-text hover:bg-sand-dark/40 dark:hover:bg-dark-border'
            }`}
          >
            Other Works
          </button>
          <button
            onClick={() => {
              setSelectedCategory('international')
              setSelectedBook(null)
            }}
            className={`px-spacing-lg py-spacing-sm rounded-lg font-medium transition-all ${
              selectedCategory === 'international'
                ? 'bg-deep-brown dark:bg-green-accent text-sand dark:text-dark-bg'
                : 'bg-sand-dark/20 dark:bg-dark-elevated text-deep-brown dark:text-dark-text hover:bg-sand-dark/40 dark:hover:bg-dark-border'
            }`}
          >
            International Editions
          </button>
        </motion.div>
      </section>

      {/* Books Grid */}
      <section className="section-container py-spacing-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-spacing-lg mb-spacing-3xl"
        >
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
        </motion.div>
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

      {/* Reviews Section - Only show for featured books */}
      {selectedCategory === 'featured' && (
      <section className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="mb-spacing-2xl"
        >
          <h2 className="text-heading-lg font-serif text-deep-brown dark:text-dark-text mb-spacing-sm">
            Voices & Impact
          </h2>
          <p className="text-body text-charcoal/70 dark:text-dark-text-secondary">
            Military veterans, mental health professionals, correctional officers, and readers share transformative experiences with Scott's work.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-spacing-lg"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-spacing-lg bg-sand-dark/10 dark:bg-dark-elevated rounded-lg border border-sand-dark dark:border-dark-border space-y-spacing-md hover:border-deep-brown dark:hover:border-green-accent transition-colors"
            >
              <div className="flex items-start gap-spacing-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-deep-brown dark:border-green-accent"
                />
                <div className="flex-1">
                  <h4 className="text-heading-sm font-serif text-deep-brown dark:text-dark-text">
                    {testimonial.name}
                  </h4>
                  <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                    {testimonial.title}
                  </p>
                  <p className="text-caption text-charcoal/50 dark:text-dark-text-secondary/70">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              <p className="text-body italic text-charcoal dark:text-dark-text-secondary leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex flex-wrap gap-spacing-sm pt-spacing-sm border-t border-sand-dark dark:border-dark-border">
                {testimonial.books.map((book, bidx) => (
                  <span
                    key={bidx}
                    className="inline-block px-spacing-sm py-1 bg-deep-brown/10 dark:bg-green-accent/10 rounded text-caption font-medium text-deep-brown dark:text-green-accent"
                  >
                    {book}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      )}

      {/* Professional Reviews */}
      {selectedCategory === 'featured' && (
      <section className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="mb-spacing-2xl"
        >
          <h2 className="text-heading-lg font-serif text-deep-brown dark:text-dark-text">
            Critical Reception
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
              className="p-spacing-lg bg-muted-green/5 dark:bg-muted-green/10 rounded-lg border border-muted-green/30 dark:border-green-accent/30 space-y-spacing-md"
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
      )}

      {/* Reading Order - Only show for featured books */}
      {selectedCategory === 'featured' && (
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
                title: 'Letter to Home from the Sandbox',
                reason: 'Foundation. Introduction to Scott\'s voice and the core themes of deployment.',
              },
              {
                order: 2,
                title: 'Soldiers in the Sandbox',
                reason: 'Extension. Deepens exploration and introduces broader military narratives.',
              },
              {
                order: 3,
                title: 'Inside The Walls',
                reason: 'Transition. Shifts perspective from military to correctional life, exploring discipline and human cost across institutions.',
              },
            ].map((item) => (
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
      )}
    </div>
  )
}
