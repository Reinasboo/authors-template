'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  // Split hero text into characters for staggered animation
  const heroText = 'War Through Human Eyes'
  const heroChars = heroText.split('')

  const heroSubtitle = 'Military memoirs exploring the psychological realities of deployment, the bonds of brotherhood, and the long journey home'

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 sm:px-8 overflow-hidden">
      {/* Premium Light Mode Gradient Background */}
      <div
        className="absolute inset-0 -z-10 opacity-100 dark:opacity-0"
        style={{
          background:
            'linear-gradient(135deg, #F5F1EA 0%, #FAFAF8 35%, rgba(74, 95, 74, 0.08) 70%, #F5F1EA 100%)',
        }}
      />

      {/* Radial Accent Glow - Light Mode */}
      <div className="absolute top-1/2 right-0 -z-10 opacity-40 dark:opacity-0 w-96 h-96 bg-muted-green/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/2" />
      <div className="absolute top-0 left-0 -z-10 opacity-30 dark:opacity-0 w-80 h-80 bg-deep-brown/3 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4" />

      {/* Elegant Geometric Lines - Light Mode */}
      <div className="absolute inset-0 -z-10 opacity-100 dark:opacity-0 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-light" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#3D2817"
                strokeWidth="0.3"
                opacity="0.08"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-light)" />
          {/* Top accent line */}
          <line x1="0" y1="15%" x2="100%" y2="15%" stroke="#3D2817" strokeWidth="1" opacity="0.1" />
          {/* Bottom accent line */}
          <line x1="0" y1="85%" x2="100%" y2="85%" stroke="#3D2817" strokeWidth="1" opacity="0.1" />
        </svg>
      </div>

      {/* Dark Mode Gradient Background */}
      <div className="absolute inset-0 -z-10 opacity-0 dark:opacity-100 transition-opacity">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(15, 15, 15, 1) 0%, rgba(26, 26, 26, 1) 35%, rgba(74, 95, 74, 0.08) 70%, rgba(15, 15, 15, 1) 100%)',
          }}
        />
        {/* Radial Accent Glow - Dark Mode */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-green-accent/5 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/2" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-muted-green/5 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Decorative Top Accent */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-0.5 flex-1 max-w-xs dark:bg-gradient-to-r dark:from-green-accent/0 dark:to-green-accent/50 bg-gradient-to-r from-deep-brown/0 to-deep-brown/30" />
          <span className="text-xs font-medium tracking-widest dark:text-green-accent text-deep-brown">STORIES THAT MATTER</span>
          <div className="h-0.5 flex-1 max-w-xs dark:bg-gradient-to-l dark:from-green-accent/0 dark:to-green-accent/50 bg-gradient-to-l from-deep-brown/0 to-deep-brown/30" />
        </motion.div>

        {/* Hero Title - Character-by-Character Reveal */}
        <motion.h1
          className="font-serif font-light text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-tight mb-6 dark:text-dark-text text-deep-brown"
          style={{ letterSpacing: '0.5px' }}
        >
          {heroChars.map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.05,
                duration: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Decorative Bottom Accent with Animated Underline */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="h-1 w-20 mx-auto mb-12 bg-gradient-to-r from-deep-brown/40 dark:from-green-accent/40 via-deep-brown dark:via-green-accent to-deep-brown/40 dark:to-green-accent/40 rounded-full"
        />

        {/* Subtitle with Gradient Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto dark:text-dark-text-secondary text-charcoal/70 px-4 sm:px-0"
          style={{ letterSpacing: '-0.25px' }}
        >
          {heroSubtitle}
        </motion.p>

        {/* Elite CTA Buttons with Enhanced Visual Design */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center w-full px-4 sm:px-0 mb-16"
        >
          {/* Primary Button - Fill Animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden group w-full sm:w-auto"
          >
            <Link
              href="/books"
              className="relative px-8 sm:px-14 py-4 sm:py-5 text-sm font-medium tracking-wide text-sand bg-deep-brown rounded-lg transition-all duration-300 block w-full sm:w-auto text-center shadow-lg group-hover:shadow-xl dark:shadow-green-accent/20 dark:group-hover:shadow-green-accent/30"
            >
              {/* Fill Animation Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-muted-green to-green-accent dark:from-green-accent dark:to-muted-green rounded-lg"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore the Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </Link>
          </motion.div>

          {/* Secondary Button - Glow Effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/contact"
              className="px-14 py-5 text-sm font-medium tracking-wide text-deep-brown dark:text-dark-text border-2 border-deep-brown dark:border-green-accent rounded-lg hover:bg-deep-brown/5 dark:hover:bg-green-accent/10 transition-all duration-300 block text-center shadow-sm hover:shadow-md"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Divider Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="h-px w-32 mx-auto mb-12 bg-gradient-to-r from-deep-brown/0 via-deep-brown/40 dark:from-green-accent/0 dark:via-green-accent/40 to-deep-brown/0 dark:to-green-accent/0"
        />

        {/* Scroll Indicator with Elegant Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-3"
          >
            <span className="text-xs font-medium tracking-widest text-deep-brown/50 dark:text-dark-text-secondary/50">
              SCROLL
            </span>
            {/* Elegant scroll chevron */}
            <div className="relative h-6 w-1 bg-gradient-to-b from-deep-brown/40 dark:from-green-accent/40 to-transparent rounded-full" />
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-deep-brown/60 dark:text-green-accent/60"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path d="M19 14l-7 7-7-7" />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
