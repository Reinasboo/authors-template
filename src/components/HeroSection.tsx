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
      {/* Elite Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(60deg, #F5F1EA 0%, #E8E2D9 50%, rgba(74, 95, 74, 0.1) 100%)',
        }}
      />

      {/* Subtle Geometric Pattern Overlay */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#3D2817"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dark Mode Gradient Overlay */}
      <div className="absolute inset-0 -z-10 dark:opacity-100 opacity-0 transition-opacity">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(60deg, rgba(15, 15, 15, 1) 0%, rgba(26, 26, 26, 1) 50%, rgba(74, 95, 74, 0.05) 100%)',
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        {/* Hero Title - Character-by-Character Reveal */}
        <motion.h1
          className="font-serif font-light text-4xl sm:text-6xl md:text-8xl lg:text-9xl leading-tight mb-8 dark:text-dark-text text-deep-brown"
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

        {/* Elite CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full px-4 sm:px-0"
        >
          {/* Primary Button - Fill Animation */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="relative overflow-hidden"
          >
            <Link
              href="/books"
              className="relative px-6 sm:px-12 py-3 sm:py-4 text-sm font-medium tracking-wide text-sand bg-deep-brown rounded-lg transition-all duration-300 block w-full sm:w-auto text-center"
            >
              {/* Fill Animation Background */}
              <motion.div
                className="absolute inset-0 bg-muted-green"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
              <span className="relative z-10">Explore the Work</span>
            </Link>
          </motion.div>

          {/* Secondary Button - Glow Effect */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contact"
              className="px-12 py-4 text-sm font-medium tracking-wide text-deep-brown dark:text-dark-text border-2 border-deep-brown dark:border-green-accent rounded-lg hover:bg-deep-brown/5 dark:hover:bg-green-accent/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center"
          >
            <span className="text-xs font-medium tracking-widest text-deep-brown/60 dark:text-dark-text-secondary/60 mb-2 block">
              SCROLL TO EXPLORE
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-deep-brown/60 dark:text-dark-text-secondary/60"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
