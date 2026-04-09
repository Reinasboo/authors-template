/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode palette
        sand: '#F5F1EA',
        'sand-light': '#FAFAF8',
        'sand-dark': '#E8E3D9',
        'deep-brown': '#3D2817',
        'brown-light': '#5C4033',
        'muted-green': '#4A5F4A',
        'green-accent': '#6B8E6B',
        charcoal: '#2C2C2C',
        'charcoal-light': '#4A4A4A',
        
        // Dark mode palette
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'dark-elevated': '#2E2E2E',
        'dark-border': '#383838',
        'dark-text': '#F5F1EA',
        'dark-text-secondary': '#B8B3A8',
      },
      fontFamily: {
        serif: ['Noto Serif', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-lg': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-md': ['1.5rem', { lineHeight: '1.35', letterSpacing: '0' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4', letterSpacing: '0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.02em' }],
      },
      spacing: {
        'spacing-xs': '0.5rem',
        'spacing-sm': '1rem',
        'spacing-md': '1.5rem',
        'spacing-lg': '2rem',
        'spacing-xl': '3rem',
        'spacing-2xl': '4rem',
        'spacing-3xl': '6rem',
        'spacing-4xl': '8rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-delay-1': 'fadeIn 0.6s ease-out 0.1s both',
        'fade-in-delay-2': 'fadeIn 0.6s ease-out 0.2s both',
        'fade-in-delay-3': 'fadeIn 0.6s ease-out 0.3s both',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-up-delay-1': 'slideUp 0.6s ease-out 0.1s both',
        'slide-up-delay-2': 'slideUp 0.6s ease-out 0.2s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
