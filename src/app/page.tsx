'use client'

export const dynamic = 'force-dynamic'

import { motion } from 'framer-motion'
import { fadeInVariants, slideUpVariants, containerVariants, itemVariants } from '@/lib/animations'
import Button from '@/components/Button'
import BookCard from '@/components/BookCard'

export default function Home() {
  const books = [
    {
      id: 'letters-sand',
      title: 'Letters from the Sand',
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-sand-light dark:bg-dark-bg grain-overlay">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-muted-green/5 dark:bg-green-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-deep-brown/5 dark:bg-dark-elevated rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-spacing-4xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInVariants}>
            <h1 className="text-display-lg md:text-6xl lg:text-7xl font-serif font-bold text-deep-brown dark:text-dark-text mb-spacing-lg leading-tight">
              War Through<br />
              <span className="text-muted-green dark:text-green-accent">Human Eyes</span>
            </h1>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={slideUpVariants}
            className="text-body-lg text-charcoal/70 dark:text-dark-text-secondary max-w-2xl mx-auto mb-spacing-2xl"
          >
            Military memoirs exploring the psychological realities of deployment, the bonds of brotherhood, and the long journey home.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUpVariants}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-spacing-md justify-center"
          >
            <Button href="/books" variant="primary" size="lg">
              Explore the Work
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Narrative Intro Section */}
      <section className="section-container bg-sand-light dark:bg-dark-bg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-spacing-2xl items-center"
        >
          <motion.div variants={itemVariants} className="space-y-spacing-md">
            <h2 className="text-display-md text-deep-brown dark:text-dark-text">
              About the Author
            </h2>
            <div className="space-y-spacing-md text-body text-charcoal dark:text-dark-text-secondary">
              <p>
                Scott G. A. Metcalf is a military memoir author writing from firsthand experience as a soldier during the Iraq War. His work explores the emotional and psychological realities of deployment, focusing on human connection, resilience, and the lasting impact of war.
              </p>
              <p>
                Rather than glorifying combat or propagating patriotic narratives, Scott's writing centers on the human experience—the fear, camaraderie, moral weight, and the complex process of reintegration. His memoirs are grounded, reflective, and unapologetically honest.
              </p>
              <p>
                Through intimate storytelling and personal correspondence, Scott invites readers into the interior world of soldiers, offering insights that extend far beyond the battlefield.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-spacing-md h-full"
          >
            <div className="bg-gradient-to-br from-deep-brown/20 to-muted-green/20 dark:from-dark-elevated dark:to-dark-border rounded-lg h-64 flex items-center justify-center">
              <span className="text-6xl font-serif text-deep-brown/20 dark:text-dark-text-secondary/20">
                {new Date().getFullYear() - 2003}
              </span>
            </div>
            <div className="bg-gradient-to-br from-muted-green/20 to-charcoal/10 dark:from-dark-border dark:to-dark-elevated rounded-lg h-64 flex items-center justify-center">
              <span className="text-2xl font-serif font-bold text-deep-brown/40 dark:text-dark-text-secondary/40 text-center px-4">
                Years of Reflection
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Books Showcase Section */}
      <section className="section-container bg-sand-dark/30 dark:bg-dark-surface">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="mb-spacing-2xl"
        >
          <h2 className="text-display-md text-deep-brown dark:text-dark-text mb-spacing-md">
            The Work
          </h2>
          <p className="text-body-lg text-charcoal/70 dark:text-dark-text-secondary max-w-2xl">
            Three interconnected memoirs exploring different facets of military experience and the journey toward healing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-spacing-lg">
          {books.map((book, idx) => (
            <BookCard key={book.id} {...book} index={idx} />
          ))}
        </div>
      </section>

      {/* Themes Section */}
      <section className="section-container bg-sand-light dark:bg-dark-bg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="mb-spacing-2xl"
        >
          <h2 className="text-display-md text-deep-brown dark:text-dark-text">
            Themes & Motifs
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-spacing-lg"
        >
          {themes.map((theme) => (
            <motion.div
              key={theme.title}
              variants={itemVariants}
              className="space-y-spacing-md p-spacing-lg bg-sand-dark/20 dark:bg-dark-elevated rounded-lg border border-sand-dark/50 dark:border-dark-border hover:border-deep-brown dark:hover:border-green-accent transition-colors"
            >
              <h3 className="text-heading-md font-serif text-deep-brown dark:text-dark-text">
                {theme.title}
              </h3>
              <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured Quote Section */}
      <section className="relative py-spacing-4xl bg-deep-brown dark:bg-dark-surface text-sand dark:text-dark-text grain-overlay">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-muted-green/20 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <blockquote className="space-y-spacing-lg">
            <p className="text-3xl md:text-4xl font-serif italic leading-relaxed">
              "War is not static, it is dynamic. The men who fight it carry it home in their bones, their dreams, their silence. To truly honor them is to listen to their stories—not to simplify them, but to sit with their complexity."
            </p>
            <footer className="text-sm font-medium opacity-80">
              — Scott G. A. Metcalf
            </footer>
          </blockquote>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="section-container bg-sand-light dark:bg-dark-bg">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-spacing-2xl"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-spacing-md p-spacing-2xl bg-sand-dark/10 dark:bg-dark-elevated rounded-lg border border-sand-dark dark:border-dark-border"
          >
            <h3 className="text-heading-lg font-serif text-deep-brown dark:text-dark-text">
              Read the Memoirs
            </h3>
            <p className="text-body text-charcoal/70 dark:text-dark-text-secondary">
              Available on Amazon. Dive into the complete stories or start with a preview.
            </p>
            <Button href="https://www.amazon.com/stores/author/B0GCLNGCF4/about" variant="primary">
              Browse on Amazon
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-spacing-md p-spacing-2xl bg-deep-brown text-sand dark:bg-green-accent dark:text-dark-bg rounded-lg"
          >
            <h3 className="text-heading-lg font-serif">
              Stay Connected
            </h3>
            <p className="text-body opacity-90 dark:opacity-100">
              Subscribe for updates, exclusive excerpts, and insights into the writing process.
            </p>
            <Button href="/contact" variant="secondary">
              Get Updates
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
