'use client'

import { motion } from 'framer-motion'
import { fadeInVariants, containerVariants, itemVariants } from '@/lib/animations'

export default function About() {
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
            About Scott
          </h1>
          <p className="text-body-lg text-charcoal/70 dark:text-dark-text-secondary">
            A soldier's perspective on war, memory, and the journey toward understanding.
          </p>
        </motion.div>
      </section>

      {/* Biography */}
      <section className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-spacing-2xl"
        >
          <motion.div variants={itemVariants} className="md:col-span-2 space-y-spacing-lg">
            <div>
              <h2 className="text-heading-lg font-serif text-deep-brown dark:text-dark-text mb-spacing-md">
                The Story
              </h2>
              <div className="prose prose-invert dark:prose dark:text-dark-text-secondary space-y-spacing-md">
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
              <h3 className="text-heading-md font-serif text-deep-brown dark:text-dark-text mb-spacing-md">
                Writing Philosophy
              </h3>
              <div className="space-y-spacing-md text-body text-charcoal dark:text-dark-text-secondary">
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
            <div className="sticky top-32 space-y-spacing-lg">
              {/* Stats Card */}
              <div className="bg-sand-dark/20 dark:bg-dark-elevated p-spacing-lg rounded-lg border border-sand-dark dark:border-dark-border space-y-spacing-md">
                <h4 className="text-heading-sm font-serif text-deep-brown dark:text-dark-text">
                  Quick Facts
                </h4>
                <ul className="space-y-spacing-sm text-body-sm text-charcoal dark:text-dark-text-secondary">
                  <li><strong>Genre:</strong> Military Memoir</li>
                  <li><strong>Focus:</strong> Psychology & Resilience</li>
                  <li><strong>Style:</strong> Intimate, Reflective</li>
                  <li><strong>Years Active:</strong> 2020–Present</li>
                  <li><strong>Works:</strong> 3 Interconnected Memoirs</li>
                </ul>
              </div>

              {/* Quote Card */}
              <div className="bg-deep-brown text-sand dark:bg-green-accent dark:text-dark-bg p-spacing-lg rounded-lg space-y-spacing-md">
                <p className="text-sm italic leading-relaxed">
                  "Memoirs aren't self-indulgence. They're acts of bearing witness to what happened to us, to what we learned, to how we stayed human."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Journey Timeline */}
      <section className="section-container bg-sand-dark/10 dark:bg-dark-surface rounded-lg border border-sand-dark/50 dark:border-dark-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInVariants}
          className="mb-spacing-2xl"
        >
          <h2 className="text-heading-lg font-serif text-deep-brown dark:text-dark-text">
            Journey
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="space-y-spacing-lg"
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
            <motion.div key={milestone.year} variants={itemVariants} className="flex gap-spacing-lg">
              <div className="min-w-fit">
                <span className="font-serif font-bold text-heading-sm text-deep-brown dark:text-green-accent">
                  {milestone.year}
                </span>
              </div>
              <div className="pb-spacing-lg border-b border-sand-dark/30 dark:border-dark-border flex-1">
                <h4 className="font-medium text-body text-deep-brown dark:text-dark-text mb-spacing-sm">
                  {milestone.title}
                </h4>
                <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="section-container">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-spacing-lg"
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
              className="p-spacing-lg bg-sand-dark/10 dark:bg-dark-elevated rounded-lg border border-sand-dark dark:border-dark-border hover:border-deep-brown dark:hover:border-green-accent transition-colors"
            >
              <h3 className="text-heading-md font-serif text-deep-brown dark:text-dark-text mb-spacing-md">
                {value.title}
              </h3>
              <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
