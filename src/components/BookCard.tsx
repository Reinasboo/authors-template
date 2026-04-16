'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface BookCardProps {
  id: string
  title: string
  subtitle: string
  description: string
  image?: string
  amazonUrl?: string
  index?: number
}

export default function BookCard({
  title,
  subtitle,
  description,
  image,
  amazonUrl = 'https://amazon.com',
  index = 0,
}: BookCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: (index || 0) * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: '-100px' }}
      className="h-full"
    >
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative h-full bg-sand-light dark:bg-dark-surface rounded-xl overflow-hidden group cursor-pointer"
        style={{
          boxShadow: isHovered
            ? '0 24px 48px rgba(61, 40, 23, 0.15), 0 8px 16px rgba(61, 40, 23, 0.1)'
            : '0 8px 24px rgba(61, 40, 23, 0.08)',
          transition: 'box-shadow 0.3s ease-out',
        }}
      >
        {/* Premium Layered Depth Shadows */}
        <div
          className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(107, 142, 107, 0.15) 0%, transparent 50%)',
          }}
        />

        {/* Book Cover Image Section */}
        <div className="relative overflow-hidden h-72 sm:h-80">
          {image ? (
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-deep-brown/20 to-muted-green/20 dark:from-dark-elevated dark:to-dark-border">
              <span className="text-6xl font-serif font-light text-deep-brown/30 dark:text-dark-text-secondary/30">
                {title.charAt(0)}
              </span>
            </div>
          )}

          {/* Premium Overlay Gradient - Bottom */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, transparent 0%, rgba(61, 40, 23, 0.3) 70%, rgba(61, 40, 23, 0.5) 100%)',
            }}
          />

          {/* Animated Accent Line */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-muted-green"
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 flex flex-col h-full flex-1">
          {/* Meta Information - Fade In on Scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: (index || 0) * 0.1 + 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <p className="text-xs uppercase tracking-widest font-medium text-muted-green dark:text-green-accent/70">
              {subtitle}
            </p>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="font-serif text-xl sm:text-2xl font-light text-deep-brown dark:text-dark-text mb-3 leading-tight"
            animate={{ color: isHovered ? '#4A5F4A' : '#3D2817' }}
            transition={{ duration: 0.3 }}
          >
            {title}
          </motion.h3>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: (index || 0) * 0.1 + 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm leading-relaxed text-charcoal/70 dark:text-dark-text-secondary flex-1 mb-6"
          >
            {description}
          </motion.p>

          {/* Divider */}
          <div className="h-px bg-sand-dark/30 dark:bg-dark-border/30 my-4" />

          {/* CTA Link - Premium Hover State */}
          <motion.a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-wide text-muted-green dark:text-green-accent hover:text-deep-brown dark:hover:text-green-accent/80 transition-colors inline-flex items-center gap-2"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
          >
            <span>Explore on Amazon</span>
            <motion.span
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.3 }}
            >
              →
            </motion.span>
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}
