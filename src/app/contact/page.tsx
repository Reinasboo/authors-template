'use client'

export const dynamic = 'force-dynamic'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { useForm, ValidationError } from '@formspree/react'

export default function Contact() {
  const [state, handleSubmit] = useForm('mjgjgkbg')

  return (
    <div className="min-h-screen bg-sand-light dark:bg-dark-bg">
      {/* Page Header - Premium Spacing */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 border-b border-sand-dark/30 dark:border-dark-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-light text-deep-brown dark:text-dark-text mb-6">
              Get in<br />
              <span className="text-muted-green dark:text-green-accent">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/70 dark:text-dark-text-secondary">
              Have a question, want to discuss the books, or interested in speaking engagements? Reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-1 space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-light text-deep-brown dark:text-dark-text">
                  Contact Information
                </h3>
                <p className="text-sm text-charcoal/70 dark:text-dark-text-secondary">
                  Connect through your preferred channel. Response time varies but I read every message.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 p-8 bg-sand-dark/10 dark:bg-dark-elevated rounded-xl border border-sand-dark/30 dark:border-dark-border"
              >
                <a
                  href="mailto:scottmetcalf69@yahoo.com"
                  className="flex items-start gap-4 hover:text-muted-green dark:hover:text-green-accent transition-colors"
                >
                  <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-deep-brown dark:text-green-accent" />
                  <div>
                    <p className="font-medium text-deep-brown dark:text-dark-text">Email</p>
                    <p className="text-sm text-charcoal/70 dark:text-dark-text-secondary">
                      scottmetcalf69@yahoo.com
                    </p>
                  </div>
                </a>
              </motion.div>

              {/* Quick Response */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 bg-deep-brown text-sand dark:bg-green-accent dark:text-dark-bg rounded-xl"
              >
                <p className="text-sm font-medium mb-2">Response Time</p>
                <p className="text-sm opacity-90 dark:opacity-100">
                  I aim to respond to all inquiries within 2-3 business days.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-deep-brown dark:text-dark-text mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 min-h-[44px] border-2 border-sand-dark/30 dark:border-dark-border rounded-xl bg-white dark:bg-dark-surface text-base sm:text-base text-deep-brown dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-text-secondary focus:outline-none focus:border-muted-green dark:focus:border-green-accent transition-colors"
                  placeholder="Scott"
                />
                <ValidationError field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-deep-brown dark:text-dark-text mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 min-h-[44px] border-2 border-sand-dark/30 dark:border-dark-border rounded-xl bg-white dark:bg-dark-surface text-base sm:text-base text-deep-brown dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-text-secondary focus:outline-none focus:border-muted-green dark:focus:border-green-accent transition-colors"
                  placeholder="you@example.com"
                />
                <ValidationError field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-deep-brown dark:text-dark-text mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 min-h-[44px] border-2 border-sand-dark/30 dark:border-dark-border rounded-xl bg-white dark:bg-dark-surface text-base sm:text-base text-deep-brown dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-text-secondary focus:outline-none focus:border-muted-green dark:focus:border-green-accent transition-colors"
                  placeholder="What's this about?"
                />
                <ValidationError field="subject" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep-brown dark:text-dark-text mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 min-h-[44px] border-2 border-sand-dark/30 dark:border-dark-border rounded-xl bg-white dark:bg-dark-surface text-base sm:text-base text-deep-brown dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-text-secondary focus:outline-none focus:border-muted-green dark:focus:border-green-accent transition-colors resize-none"
                  placeholder="Your message..."
                />
                <ValidationError field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
              </div>

              {/* Success Message */}
              {state.succeeded && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-accent/10 dark:bg-green-accent/10 border border-green-accent rounded-xl text-green-accent dark:text-muted-green"
                >
                  <p className="font-medium text-sm">
                    Thank you for reaching out! I'll get back to you within 2-3 business days.
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="flex-1 min-h-[44px] px-6 sm:px-8 py-3 sm:py-3 bg-deep-brown hover:bg-brown-light text-sand dark:bg-green-accent dark:text-dark-bg dark:hover:bg-muted-green rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="reset"
                  className="px-6 sm:px-8 py-3 sm:py-3 min-h-[44px] border-2 border-sand-dark/30 dark:border-dark-border text-deep-brown dark:text-dark-text rounded-xl font-medium hover:bg-sand-dark/10 dark:hover:bg-dark-elevated transition-colors text-sm sm:text-base"
                >
                  Clear
                </button>
              </div>
            </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Author Profile Section */}
      <section className="py-24 px-6 sm:px-8 bg-sand-dark/10 dark:bg-dark-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-xl overflow-hidden border-4 border-deep-brown dark:border-green-accent shadow-xl">
                <img
                  src="https://imgur.com/n6TvYYX.jpg"
                  alt="Scott G. A. Metcalf"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 space-y-8"
            >
              <div>
                <h2 className="font-serif text-4xl font-light text-deep-brown dark:text-dark-text mb-4">
                  About the Author
                </h2>
                <p className="text-lg text-charcoal dark:text-dark-text-secondary leading-relaxed mb-4">
                  Scott G. A. Metcalf is a military memoir author whose work explores the psychological and emotional realities of combat deployment, institutional life, and the human capacity for resilience.
                </p>
                <p className="text-lg text-charcoal dark:text-dark-text-secondary leading-relaxed">
                  His work has been praised for its emotional honesty, literary craftsmanship, and refusal to simplify complex experiences. When he's not writing, Scott believes in building genuine connections with readers who've found meaning in his stories.
                </p>
              </div>

              <div className="pt-6 border-t border-sand-dark/30 dark:border-dark-border">
                <p className="text-sm text-charcoal/70 dark:text-dark-text-secondary italic">
                  "I read every message. Your thoughts, questions, and stories matter."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


    </div>
  )
}
