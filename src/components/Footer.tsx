'use client'

import Link from 'next/link'
import { Mail, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInVariants } from '@/lib/animations'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-sand dark:bg-dark-surface dark:text-dark-text border-t border-charcoal dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-spacing-3xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-spacing-2xl mb-spacing-2xl">
          {/* Brand */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInVariants} className="space-y-4">
            <h3 className="font-serif text-lg font-bold">Scott G. A. Metcalf</h3>
            <p className="text-sm text-sand/70 dark:text-dark-text-secondary">Military memoir author exploring the human cost of war.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInVariants} className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-widest">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-sand/70 dark:text-dark-text-secondary hover:text-sand dark:hover:text-dark-text transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sand/70 dark:text-dark-text-secondary hover:text-sand dark:hover:text-dark-text transition-colors">About</Link></li>
              <li><Link href="/books" className="text-sand/70 dark:text-dark-text-secondary hover:text-sand dark:hover:text-dark-text transition-colors">Books</Link></li>
              <li><Link href="/contact" className="text-sand/70 dark:text-dark-text-secondary hover:text-sand dark:hover:text-dark-text transition-colors">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInVariants} className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-widest">Connect</h4>
            <div className="flex gap-3">
              <a href="mailto:scott@example.com" className="p-2 rounded-lg hover:bg-sand/10 dark:hover:bg-dark-elevated transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-sand/10 dark:hover:bg-dark-elevated transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-sand/10 dark:hover:bg-dark-elevated transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial="hidden" whileInView="visible" variants={fadeInVariants} className="space-y-4">
            <h4 className="font-medium text-sm uppercase tracking-widest">Books</h4>
            <a href="https://www.amazon.com/stores/author/B0GCLNGCF4/about" className="btn btn-primary text-xs py-2 px-4 block text-center">
              Read on Amazon
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-sand/10 dark:bg-dark-border mb-spacing-lg"></div>

        {/* Bottom Footer */}
        <motion.div initial="hidden" whileInView="visible" variants={fadeInVariants} className="flex flex-col sm:flex-row items-center justify-between text-xs text-sand/60 dark:text-dark-text-secondary">
          <p>&copy; {currentYear} Scott G. A. Metcalf. All rights reserved.</p>
          <div className="flex gap-spacing-md mt-4 sm:mt-0">
            <a href="#" className="hover:text-sand dark:hover:text-dark-text transition-colors">Privacy</a>
            <span className="text-sand/30 dark:text-dark-border">•</span>
            <a href="#" className="hover:text-sand dark:hover:text-dark-text transition-colors">Terms</a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
