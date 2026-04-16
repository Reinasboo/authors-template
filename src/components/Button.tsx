'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
  disabled?: boolean
  target?: string
  rel?: string
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  }

  const variantStyles = {
    primary:
      'bg-deep-brown dark:bg-muted-green text-sand dark:text-dark-bg font-medium tracking-wide rounded-lg transition-all duration-300',
    secondary:
      'border-2 border-deep-brown dark:border-green-accent text-deep-brown dark:text-dark-text font-medium tracking-wide rounded-lg transition-all duration-300 hover:bg-deep-brown/5 dark:hover:bg-green-accent/10',
    ghost: 'text-deep-brown dark:text-green-accent font-medium tracking-wide transition-all duration-300 hover:text-muted-green dark:hover:text-green-accent/80',
  }

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-block ${sizeStyles[size]} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
    >
      {/* Fill Animation Background (Primary Only) */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-muted-green rounded-lg"
          initial={{ x: '100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ zIndex: -1 }}
        />
      )}

      {/* Glow Effect (Primary & Secondary) */}
      {(variant === 'primary' || variant === 'secondary') && (
        <motion.div
          className="absolute inset-0 rounded-lg bg-muted-green/0"
          whileHover={{
            boxShadow: '0 0 24px rgba(107, 142, 107, 0.3)',
          }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: 'none' }}
        />
      )}

      <span className="relative z-10 inline-block">{children}</span>
    </motion.div>
  )

  if (href) {
    return (
      <Link href={href} target={target} rel={rel}>
        {buttonContent}
      </Link>
    )
  }

  return <button onClick={onClick} disabled={disabled}>{buttonContent}</button>
}
