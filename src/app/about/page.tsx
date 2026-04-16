'use client'

export const dynamic = 'force-dynamic'

import { motion } from 'framer-motion'
import { fadeInVariants, containerVariants, itemVariants } from '@/lib/animations'

export default function About() {
  return (
    <div className="min-h-screen pt-24 bg-sand-light dark:bg-dark-bg">
      {/* Page Header */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 border-b border-sand-dark dark:border-dark-border">
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          className="max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light text-deep-brown dark:text-dark-text mb-8">
            About Scott
          </h1>
          <p className="text-body-lg text-charcoal/70 dark:text-dark-text-secondary">
            A soldier's perspective on war, memory, and the journey toward understanding.
          </p>
        </motion.div>
        </div>
      </section>

      {/* Featured Author Image */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="max-w-2xl mx-auto"
        >
          <div className="relative rounded-lg overflow-hidden border-4 border-deep-brown dark:border-green-accent shadow-2xl">
            <img
              src="https://imgur.com/n6TvYYX.jpg"
              alt="Scott G. A. Metcalf"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-brown/40 to-transparent dark:from-dark-bg/40"></div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-serif text-deep-brown dark:text-dark-text mb-6">
                The Story
              </h2>
              <div className="prose prose-invert dark:prose dark:text-dark-text-secondary space-y-6">
                <p className="text-body leading-relaxed text-charcoal dark:text-dark-text-secondary">
                  Scott G. A. Metcalf served as a soldier during the Iraq War, an experience that fundamentally shaped his understanding of human resilience, brotherhood, and the complex aftermath of combat. His time in the sandbox became the foundation for his memoir work—a literary exploration of war not as a political or patriotic theme, but as a human experience.
                </p>
                <p className="text-body leading-relaxed text-charcoal dark:text-dark-text-secondary">
                  Unlike traditional military narratives that often focus on tactical operations or heroic narratives, Scott's writing centers on the interior landscape of soldiers. His memoirs examine the psychological weight of deployment, the bonds forged in shared adversity, and the often-quiet struggle of reintegration. He writes without glorification or propaganda—only honest reflection.
                </p>
                <p className="text-body leading-relaxed text-charcoal dark:text-dark-text-secondary">
                  Scott believes that to truly honor those who served is to listen to their stories in all their complexity. War changes people. It creates trauma but also profound connection. It demands moral reckoning but also survival instincts. His work sits with these tensions rather than resolving them neatly.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-deep-brown dark:text-dark-text mb-6">
                Writing Philosophy
              </h3>
              <div className="space-y-6 text-base text-charcoal dark:text-dark-text-secondary">
                <p>
                  Scott writes from the principle that veteran voices matter—not as sources of inspiration porn or motivational content, but as legitimate literary and cultural contributions. Military memoirs deserve the same editorial rigor and artistic care as any other genre.
                </p>
                <p>
                  His work is grounded in specificity: personal letters written in Iraq, actual conversations, real moments of fear and humor and exhaustion. The power lies not in large gestures but in the texture of lived experience.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1">
              <div className="sticky top-32 space-y-8">
              {/* Stats Card */}
              <div className="bg-sand-dark/20 dark:bg-dark-elevated p-8 rounded-lg border border-sand-dark dark:border-dark-border space-y-6">
                <h4 className="text-xl font-serif text-deep-brown dark:text-dark-text">
                  Quick Facts
                </h4>
                <ul className="space-y-4 text-sm text-charcoal dark:text-dark-text-secondary">
                  <li><strong>Genre:</strong> Military Memoir</li>
                  <li><strong>Focus:</strong> Psychology & Resilience</li>
                  <li><strong>Style:</strong> Intimate, Reflective</li>
                  <li><strong>Years Active:</strong> 2020–Present</li>
                  <li><strong>Works:</strong> 3 Interconnected Memoirs</li>
                </ul>
              </div>

              {/* Quote Card */}
              <div className="bg-deep-brown text-sand dark:bg-green-accent dark:text-dark-bg p-8 rounded-lg space-y-6">
                <p className="text-sm italic leading-relaxed">
                  "Memoirs aren't self-indulgence. They're acts of bearing witness to what happened to us, to what we learned, to how we stayed human."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto bg-sand-dark/10 dark:bg-dark-surface rounded-lg border border-sand-dark/50 dark:border-dark-border p-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="mb-spacing-2xl"
        >
          <h2 className="text-3xl font-serif text-deep-brown dark:text-dark-text">
            Journey
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {[
            {
              year: '2003–2007',
              title: 'Deployment & Service',
              description: 'Military service in Iraq. Experiences that would later form the foundation of his memoir work.',
            },
            {
              year: '2007–2015',
              title: 'Processing & Reflection',
              description: 'Years of internal work, attempting to understand the impact of deployment and the process of reintegration.',
            },
            {
              year: '2015–2020',
              title: 'Writing & Development',
              description: 'Beginning to translate experience into narrative. Developing voice and methodology for memoir composition.',
            },
            {
              year: '2020–Present',
              title: 'Publication & Advocacy',
              description: 'Publishing the trilogy and advocating for authentic veteran voices in literature and culture.',
            },
          ].map((milestone) => (
            <motion.div key={milestone.year} variants={itemVariants} className="flex gap-8">
              <div className="min-w-fit">
                <span className="font-serif font-bold text-xl text-deep-brown dark:text-green-accent">
                  {milestone.year}
                </span>
              </div>
              <div className="pb-8 border-b border-sand-dark/30 dark:border-dark-border flex-1">
                <h4 className="font-medium text-base text-deep-brown dark:text-dark-text mb-4">
                  {milestone.title}
                </h4>
                <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="mb-spacing-2xl"
        >
          <h2 className="text-heading-lg font-serif text-deep-brown dark:text-dark-text">
            Core Values
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {[
            {
              title: 'Honesty',
              description: 'No glossing over trauma or complexity. Raw, unfiltered truth.',
            },
            {
              title: 'Respect',
              description: 'For soldiers, for their stories, for the readers who seek understanding.',
            },
            {
              title: 'Artistry',
              description: 'Military memoirs deserve literary care and editorial excellence.',
            },
            {
              title: 'Humanity',
              description: 'Always centering the human experience over politics or ideology.',
            },
          ].map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="p-8 bg-sand-dark/10 dark:bg-dark-elevated rounded-lg border border-sand-dark dark:border-dark-border hover:border-deep-brown dark:hover:border-green-accent transition-colors"
            >
              <h3 className="text-2xl font-serif text-deep-brown dark:text-dark-text mb-6">
                {value.title}
              </h3>
              <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>
    </div>
  )
}
