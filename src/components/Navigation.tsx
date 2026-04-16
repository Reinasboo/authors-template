'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useThemeSafe } from '@/lib/useThemeSafe'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useThemeSafe()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Books', href: '/books' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Elite Floating Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-fixed backdrop-blur-xl"
        style={{
          backgroundColor:
            theme === 'dark' ? 'rgba(15, 15, 15, 0.85)' : 'rgba(245, 241, 234, 0.85)',
          borderBottom: `1px solid ${theme === 'dark' ? 'rgba(51, 51, 51, 0.5)' : 'rgba(232, 226, 217, 0.5)'}`,
        }}
      >
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          {/* Premium Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Link href="/" className="flex items-center">
              <motion.img
                src="https://imgur.com/g6qSRMs.png"
                alt="Scott G. A. Metcalf"
                className="h-12 object-contain"
                whileHover={{
                  filter: 'drop-shadow(0 0 20px rgba(107, 142, 107, 0.4))',
                }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-dark-text hover:text-green-accent'
                      : 'text-deep-brown hover:text-muted-green'
                  }`}
                >
                  {item.label}
                </Link>
                {/* Premium Underline Animation */}
                <motion.div
                  className={`h-0.5 rounded-full absolute -bottom-2 left-0 right-0 ${
                    theme === 'dark' ? 'bg-green-accent' : 'bg-muted-green'
                  }`}
                  initial={{ scaleX: 0, transformOrigin: 'left' }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Premium Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg transition-all ${
                theme === 'dark'
                  ? 'bg-dark-elevated text-green-accent'
                  : 'bg-sand-dark/20 text-deep-brown'
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </motion.div>
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2"
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={theme === 'dark' ? 'text-dark-text' : 'text-deep-brown'}
              >
                <motion.line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  animate={{ opacity: isOpen ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:hidden overflow-hidden"
        >
          <div
            className={`px-4 sm:px-6 py-4 space-y-2 border-t ${
              theme === 'dark'
                ? 'border-dark-border bg-dark-surface'
                : 'border-sand-dark bg-sand-light'
            }`}
          >
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: idx * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`block py-3 px-2 text-sm font-medium tracking-wide min-h-[44px] flex items-center ${
                    theme === 'dark'
                      ? 'text-dark-text hover:text-green-accent'
                      : 'text-deep-brown hover:text-muted-green'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  )
}
