'use client'

export const dynamic = 'force-dynamic'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import BookCard from '@/components/BookCard'
import Button from '@/components/Button'

export default function Home() {
  const books = [
    {
      id: 'letters-sand',
      title: 'Letter to Home from the Sandbox',
      subtitle: 'A Reflective Memoir',
      description:
        'A raw and intimate exploration of deployment experiences in Iraq, examining the psychological weight of combat and the bonds forged in the desert. Through personal correspondence, Scott captures the emotional landscape of a soldier preparing to return home.',
      image: 'https://imgur.com/OAJtzds.jpg',
      amazonUrl: 'https://www.amazon.com/Letter-Home-Sandbox-Scott-Metcalf-ebook/dp/B0G1D2Q2HP?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.UBSdf-GztWfLGUCavloXMF6MZWWs7hbeSKFBDXia9s-2AuAxBZ8T_lqnrE8l7r1bj-V0f35gOp2Qt9OBYv_gosf8Snu7DJ2cIGIvDvGSXUDDKbsBymJ2Xd2GNs3e3e9F.fd0XyMBWwTV7haQ2JTfCYLsXDH5sVCOxvBsrPmEABtU&dib_tag=AUTHOR',
    },
    {
      id: 'soldiers-sandbox',
      title: 'Soldiers in the Sandbox',
      subtitle: 'Continued Reflections',
      description:
        'An extension of the author\'s reflections, this memoir delves deeper into the brotherhood of soldiers, the moral complexities of war, and the lasting psychological impact. A testament to human resilience in the face of adversity.',
      image: 'https://imgur.com/R6qIVw3.jpg',
      amazonUrl: 'https://www.amazon.com/Soldiers-Sandbox-Scott-G-Metcalf-ebook/dp/B0GFFQ1P2P?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.UBSdf-GztWfLGUCavloXMF6MZWWs7hbeSKFBDXia9s-2AuAxBZ8T_lqnrE8l7r1bj-V0f35gOp2Qt9OBYv_gosf8Snu7DJ2cIGIvDvGSXUDDKbsBymJ2Xd2GNs3e3e9F.fd0XyMBWwTV7haQ2JTfCYLsXDH5sVCOxvBsrPmEABtU&dib_tag=AUTHOR',
    },
    {
      id: 'inside-walls',
      title: 'Inside The Walls',
      subtitle: 'A Correctional Officer Memoir',
      description:
        'A correctional officer memoir that takes away stereotypes and exposes the reality of life inside a modern prison. From the first disorienting day to the emotional toll of years maintaining order, this is a rare insider\'s view of prison life.',
      image: 'https://imgur.com/D8JMFN8.jpg',
      amazonUrl: 'https://www.amazon.com/Inside-Walls-Scott-G-Metcalf-ebook/dp/B0DP1WBSCF?ref_=ast_author_dp_rw&th=1&psc=1&dib=eyJ2IjoiMSJ9.UBSdf-GztWfLGUCavloXMF6MZWWs7hbeSKFBDXia9s-2AuAxBZ8T_lqnrE8l7r1bj-V0f35gOp2Qt9OBYv_gosf8Snu7DJ2cIGIvDvGSXUDDKbsBymJ2Xd2GNs3e3e9F.fd0XyMBWwTV7haQ2JTfCYLsXDH5sVCOxvBsrPmEABtU&dib_tag=AUTHOR',
    },
  ]

  const themes = [
    { title: 'War', description: 'The machinery of conflict and its human toll' },
    { title: 'Brotherhood', description: 'The bonds forged in shared struggle' },
    { title: 'Resilience', description: 'The human capacity to endure and heal' },
    { title: 'Memory', description: 'How we carry and process trauma' },
    { title: 'Identity', description: 'Becoming a soldier, remaining human' },
    { title: 'Home', description: 'Returning changed, searching for belonging' },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Elite Redesign */}
      <HeroSection />

      {/* About Author Section - Premium Spacing */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-sand-light dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center"
          >
            {/* Author Portrait */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="https://imgur.com/n6TvYYX.jpg"
                  alt="Scott G. A. Metcalf"
                  className="w-full h-auto object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/30 to-transparent dark:from-dark-bg/30" />
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 space-y-6"
            >
              <h2 className="font-serif text-5xl md:text-6xl font-light text-deep-brown dark:text-dark-text leading-tight">
                About the<br />
                <span className="text-muted-green dark:text-green-accent">Author</span>
              </h2>

              <div className="space-y-4 text-lg leading-relaxed text-charcoal/70 dark:text-dark-text-secondary">
                <p>
                  Scott G. A. Metcalf is a military memoir author writing from firsthand experience as a soldier during the Iraq War. His work explores the emotional and psychological realities of deployment, focusing on human connection, resilience, and the lasting impact of war.
                </p>
                <p>
                  Rather than glorifying combat or propagating patriotic narratives, Scott's writing centers on the human experience—the fear, camaraderie, moral weight, and the complex process of reintegration. His memoirs are grounded, reflective, and unapologetically honest.
                </p>
              </div>

              {/* Stats */}
              <div className="pt-8 border-t border-sand-dark/30 dark:border-dark-border grid grid-cols-2 gap-8">
                <div>
                  <p className="font-serif text-4xl md:text-5xl font-light text-deep-brown dark:text-green-accent">
                    {new Date().getFullYear() - 2003}
                  </p>
                  <p className="text-sm uppercase tracking-wide text-charcoal/60 dark:text-dark-text-secondary/60 mt-2">
                    Years of Reflection
                  </p>
                </div>
                <div>
                  <p className="font-serif text-4xl md:text-5xl font-light text-deep-brown dark:text-green-accent">
                    8
                  </p>
                  <p className="text-sm uppercase tracking-wide text-charcoal/60 dark:text-dark-text-secondary/60 mt-2">
                    Published Works
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Books Showcase Section - Premium Layout */}
      <section className="py-32 md:py-40 px-6 sm:px-8 bg-sand-dark/20 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-light text-deep-brown dark:text-dark-text mb-6">
              The Work
            </h2>
            <p className="text-lg md:text-xl text-charcoal/70 dark:text-dark-text-secondary max-w-3xl">
              Three interconnected memoirs exploring different facets of military experience and the journey toward healing. <strong>Plus 5 additional works</strong> including fiction, reinvention narratives, and international translations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book, idx) => (
              <BookCard key={book.id} {...book} index={idx} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <Button href="/books" variant="secondary">
              Explore Complete Bibliography →
            </Button>
            <p className="text-sm text-charcoal/60 dark:text-dark-text-secondary mt-6">
              8 published works including memoirs, fiction, and international editions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Themes Section - Premium Grid */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 bg-sand-light dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-deep-brown dark:text-dark-text mb-12 md:mb-16"
          >
            Themes & Motifs
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {themes.map((theme, idx) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-6 sm:p-8 rounded-xl border border-sand-dark/30 dark:border-dark-border/30 hover:border-muted-green/50 dark:hover:border-green-accent/30 transition-colors duration-300 space-y-4"
              >
                <h3 className="font-serif text-2xl font-light text-deep-brown dark:text-dark-text">
                  {theme.title}
                </h3>
                <p className="text-base leading-relaxed text-charcoal/70 dark:text-dark-text-secondary">
                  {theme.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Quote Section - Elite Dark Card */}
      <section className="relative py-24 md:py-32 px-6 sm:px-8 bg-deep-brown dark:bg-dark-surface text-sand dark:text-dark-text">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-muted-green/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto text-center space-y-6"
        >
          <blockquote>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed">
              "War is not static, it is dynamic. The men who fight it carry it home in their bones, their dreams, their silence. To truly honor them is to listen to their stories—not to simplify them, but to sit with their complexity."
            </p>
            <footer className="text-sm font-medium opacity-80 mt-6">
              — Scott G. A. Metcalf
            </footer>
          </blockquote>
        </motion.div>
      </section>

      {/* CTA Section - Connect */}
      <section className="py-32 md:py-40 px-6 sm:px-8 bg-sand-light dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
          >
            {/* Amazon CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-10 md:p-12 bg-sand-dark/10 dark:bg-dark-elevated rounded-xl border border-sand-dark/20 dark:border-dark-border/20 space-y-6"
            >
              <h3 className="font-serif text-3xl font-light text-deep-brown dark:text-dark-text">
                Read the Memoirs
              </h3>
              <p className="text-lg text-charcoal/70 dark:text-dark-text-secondary leading-relaxed">
                Available on Amazon. Dive into the complete stories or start with a preview.
              </p>
              <Button href="https://www.amazon.com/stores/author/B0GCLNGCF4/about" variant="primary">
                Browse on Amazon
              </Button>
            </motion.div>

            {/* Contact CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 md:p-12 bg-deep-brown dark:bg-dark-surface rounded-xl border border-deep-brown/20 dark:border-green-accent/20 space-y-6 text-sand dark:text-dark-text"
            >
              <h3 className="font-serif text-3xl font-light">
                Get in Touch
              </h3>
              <p className="text-lg text-sand/80 dark:text-dark-text-secondary leading-relaxed">
                Questions, speaking inquiries, or feedback? Reach out directly—I'd love to connect.
              </p>
              <Button href="/contact" variant="secondary">
                Send a Message
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
