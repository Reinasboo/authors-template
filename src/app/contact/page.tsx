'use client'

import { motion } from 'framer-motion'
import { fadeInVariants, slideUpVariants, containerVariants, itemVariants } from '@/lib/animations'
import { useState } from 'react'
import { Mail, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

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
            Get in Touch
          </h1>
          <p className="text-body-lg text-charcoal/70 dark:text-dark-text-secondary">
            Have a question, want to discuss the books, or interested in speaking engagements? Reach out.
          </p>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section className="section-container py-spacing-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-spacing-2xl">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            className="md:col-span-1 space-y-spacing-lg"
          >
            <motion.div variants={itemVariants} className="space-y-spacing-md">
              <h3 className="text-heading-md font-serif text-deep-brown dark:text-dark-text">
                Contact Information
              </h3>
              <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                Connect through your preferred channel. Response time varies but I read every message.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="space-y-spacing-lg p-spacing-lg bg-sand-dark/10 dark:bg-dark-elevated rounded-lg border border-sand-dark dark:border-dark-border"
            >
              <a
                href="mailto:scott@example.com"
                className="flex items-start gap-spacing-md hover:text-brown-light dark:hover:text-green-accent transition-colors"
              >
                <Mail className="w-5 h-5 mt-1 flex-shrink-0 text-deep-brown dark:text-green-accent" />
                <div>
                  <p className="font-medium text-deep-brown dark:text-dark-text">Email</p>
                  <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                    scott@example.com
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-start gap-spacing-md hover:text-brown-light dark:hover:text-green-accent transition-colors"
              >
                <Linkedin className="w-5 h-5 mt-1 flex-shrink-0 text-deep-brown dark:text-green-accent" />
                <div>
                  <p className="font-medium text-deep-brown dark:text-dark-text">LinkedIn</p>
                  <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                    linkedin.com/in/scottmetcalf
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-start gap-spacing-md hover:text-brown-light dark:hover:text-green-accent transition-colors"
              >
                <Twitter className="w-5 h-5 mt-1 flex-shrink-0 text-deep-brown dark:text-green-accent" />
                <div>
                  <p className="font-medium text-deep-brown dark:text-dark-text">Twitter</p>
                  <p className="text-body-sm text-charcoal/70 dark:text-dark-text-secondary">
                    @scottmetcalfwrites
                  </p>
                </div>
              </a>
            </motion.div>

            {/* Quick Response */}
            <motion.div
              variants={itemVariants}
              className="p-spacing-lg bg-deep-brown text-sand dark:bg-green-accent dark:text-dark-bg rounded-lg"
            >
              <p className="text-sm font-medium mb-spacing-sm">Response Time</p>
              <p className="text-body-sm opacity-90 dark:opacity-100">
                I aim to respond to all inquiries within 2-3 business days.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="md:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-spacing-lg">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-deep-brown dark:text-dark-text mb-spacing-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-spacing-md py-spacing-sm border-2 border-sand-dark dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface text-deep-brown dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-text-secondary focus:outline-none focus:border-deep-brown dark:focus:border-green-accent transition-colors"
                  placeholder="Scott"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-deep-brown dark:text-dark-text mb-spacing-sm">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-spacing-md py-spacing-sm border-2 border-sand-dark dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface text-deep-brown dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-text-secondary focus:outline-none focus:border-deep-brown dark:focus:border-green-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-deep-brown dark:text-dark-text mb-spacing-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-spacing-md py-spacing-sm border-2 border-sand-dark dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface text-deep-brown dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-text-secondary focus:outline-none focus:border-deep-brown dark:focus:border-green-accent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep-brown dark:text-dark-text mb-spacing-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-spacing-md py-spacing-sm border-2 border-sand-dark dark:border-dark-border rounded-lg bg-white dark:bg-dark-surface text-deep-brown dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-text-secondary focus:outline-none focus:border-deep-brown dark:focus:border-green-accent transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              {/* Submit Status */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-spacing-md bg-green-accent/10 dark:bg-green-accent/10 border border-green-accent rounded-lg text-green-accent dark:text-muted-green"
                >
                  <p className="font-medium text-sm">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="flex gap-spacing-md pt-spacing-md">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 px-spacing-lg py-spacing-md bg-deep-brown hover:bg-brown-light text-sand dark:bg-green-accent dark:text-dark-bg dark:hover:bg-muted-green rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
                <button
                  type="reset"
                  onClick={() => setFormState({ name: '', email: '', subject: '', message: '' })}
                  className="px-spacing-lg py-spacing-md border-2 border-sand-dark dark:border-dark-border text-deep-brown dark:text-dark-text rounded-lg font-medium hover:bg-sand-dark/10 dark:hover:bg-dark-elevated transition-colors"
                >
                  Clear
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-container bg-sand-dark/10 dark:bg-dark-surface rounded-lg border border-sand-dark dark:border-dark-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-spacing-2xl items-center"
        >
          <motion.div variants={itemVariants} className="space-y-spacing-md">
            <h2 className="text-heading-lg font-serif text-deep-brown dark:text-dark-text">
              Stay Updated
            </h2>
            <p className="text-body text-charcoal/70 dark:text-dark-text-secondary">
              Subscribe to receive updates on new publications, exclusive excerpts, and writing process insights.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-spacing-sm"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-spacing-md py-spacing-sm border-2 border-sand-dark dark:border-dark-border rounded-lg bg-white dark:bg-dark-elevated text-deep-brown dark:text-dark-text placeholder-charcoal/40 dark:placeholder-dark-text-secondary focus:outline-none focus:border-deep-brown dark:focus:border-green-accent transition-colors"
            />
            <button className="px-spacing-lg py-spacing-sm bg-deep-brown hover:bg-brown-light text-sand dark:bg-green-accent dark:text-dark-bg dark:hover:bg-muted-green rounded-lg font-medium transition-colors">
              Subscribe
            </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
