'use client'

import { motion } from 'framer-motion'
import { hoverScale, slideUpVariants } from '@/lib/animations'
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
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={slideUpVariants}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <motion.div
        whileHover={hoverScale}
        className="relative group bg-sand-light dark:bg-dark-surface border-2 border-sand-dark dark:border-dark-border rounded-lg overflow-hidden h-full flex flex-col cursor-pointer transition-all duration-300"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Image Placeholder */}
        <div className="relative h-64 bg-gradient-to-br from-deep-brown/20 to-muted-green/20 dark:from-dark-elevated dark:to-dark-border overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-5xl font-serif font-bold text-deep-brown/30 dark:text-dark-text-secondary/30">
                {title.charAt(0)}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
        </div>

        {/* Content */}
        <div className="flex-1 p-spacing-lg flex flex-col">
          <h3 className="font-serif text-heading-md text-deep-brown dark:text-dark-text mb-2">
            {title}
          </h3>
          <p className="text-sm text-charcoal/70 dark:text-dark-text-secondary font-medium mb-spacing-md">
            {subtitle}
          </p>

          {/* Expandable Description */}
          <motion.div
            initial={false}
            animate={{
              opacity: isExpanded ? 1 : 0.7,
              height: isExpanded ? 'auto' : 'auto',
            }}
            className="text-body-sm text-charcoal dark:text-dark-text-secondary flex-1"
          >
            {isExpanded ? (
              description
            ) : (
              <p className="line-clamp-2">{description}</p>
            )}
          </motion.div>

          {/* Read More / Link */}
          <div className="mt-spacing-lg pt-spacing-md border-t border-sand-dark dark:border-dark-border">
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm font-medium text-deep-brown dark:text-green-accent hover:text-brown-light dark:hover:text-muted-green transition-colors"
            >
              Read on Amazon →
            </a>
          </div>
        </div>

        {/* Expand Indicator */}
        <div className="absolute top-spacing-md right-spacing-md">
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="w-6 h-6 flex items-center justify-center rounded-full bg-deep-brown/10 dark:bg-dark-elevated text-deep-brown dark:text-green-accent"
          >
            ▼
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
