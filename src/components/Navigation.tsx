'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/lib/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/books', label: 'Books' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-sand-light/80 dark:bg-dark-bg/80 border-b border-sand-dark dark:border-dark-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl font-bold text-deep-brown dark:text-dark-text hover:text-brown-light dark:hover:text-green-accent transition-colors">
          SCM
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-deep-brown dark:text-dark-text hover:text-brown-light dark:hover:text-green-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-sand-dark dark:hover:bg-dark-elevated transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-deep-brown dark:text-dark-text" />
            ) : (
              <Sun className="w-5 h-5 text-dark-text" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-sand-dark dark:hover:bg-dark-elevated"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-deep-brown dark:text-dark-text" />
            ) : (
              <Menu className="w-5 h-5 text-deep-brown dark:text-dark-text" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-sand-dark dark:border-dark-border bg-sand-light dark:bg-dark-surface"
          >
            <div className="px-4 py-4 space-y-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-medium text-deep-brown dark:text-dark-text hover:text-brown-light dark:hover:text-green-accent transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
