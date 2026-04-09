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
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-300 inline-block text-center cursor-pointer'

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variantStyles = {
    primary: 'bg-deep-brown text-sand hover:bg-brown-light dark:bg-green-accent dark:text-dark-bg dark:hover:bg-muted-green',
    secondary: 'border-2 border-deep-brown text-deep-brown hover:bg-deep-brown hover:text-sand dark:border-green-accent dark:text-dark-text dark:hover:bg-green-accent dark:hover:text-dark-bg',
    ghost: 'text-deep-brown hover:text-brown-light dark:text-dark-text dark:hover:text-green-accent',
  }

  const content = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </motion.span>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return (
    <button onClick={onClick} disabled={disabled}>
      {content}
    </button>
  )
}
