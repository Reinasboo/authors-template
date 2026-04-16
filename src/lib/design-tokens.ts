/**
 * Elite Design System Tokens
 * Premium Author Portfolio - Scott G. A. Metcalf
 * Color Psychology: Authority, Resilience, Growth, Sophistication
 */

export const designTokens = {
  // ============ SPACING (8px base grid) ============
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
    '5xl': '128px',
  },

  // ============ TYPOGRAPHY ============
  fonts: {
    serif: '"Noto Serif", serif',
    sans: '"Inter", sans-serif',
  },

  fontSize: {
    'hero-lg': {
      size: '128px',
      lineHeight: '1.1',
      letterSpacing: '0.5px',
    },
    'hero-md': {
      size: '96px',
      lineHeight: '1.15',
      letterSpacing: '0.5px',
    },
    'page-title': {
      size: '72px',
      lineHeight: '1.2',
      letterSpacing: '0px',
    },
    'section-header': {
      size: '48px',
      lineHeight: '1.2',
      letterSpacing: '0.25px',
    },
    'heading-lg': {
      size: '40px',
      lineHeight: '1.3',
      letterSpacing: '0px',
    },
    'heading-md': {
      size: '32px',
      lineHeight: '1.3',
      letterSpacing: '-0.25px',
    },
    'heading-sm': {
      size: '24px',
      lineHeight: '1.4',
      letterSpacing: '-0.25px',
    },
    'body-lg': {
      size: '18px',
      lineHeight: '1.7',
      letterSpacing: '-0.25px',
    },
    'body-md': {
      size: '16px',
      lineHeight: '1.7',
      letterSpacing: '-0.25px',
    },
    'caption': {
      size: '14px',
      lineHeight: '1.6',
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
  },

  // ============ COLORS ============
  colors: {
    // Primary Palette
    sand: '#F5F1EA',
    'sand-dark': '#E8E2D9',
    'deep-brown': '#3D2817',
    'brown-light': '#5A3A2E',
    charcoal: '#2C2C2C',
    'muted-green': '#4A5F4A',
    'green-accent': '#6B8E6B',
    'sage-light': '#7FA07F',

    // Dark Mode Palette
    'dark-bg': '#0F0F0F',
    'dark-surface': '#1A1A1A',
    'dark-elevated': '#252525',
    'dark-border': '#333333',
    'dark-text': '#F5F1EA',
    'dark-text-secondary': '#D1CCC3',
  },

  // ============ GRADIENTS ============
  gradients: {
    'hero-bg': 'linear-gradient(60deg, #3D2817, #2C2C2C)',
    'accent-primary': 'linear-gradient(135deg, #4A5F4A, #7FA07F)',
    'text-gradient': 'linear-gradient(90deg, #F5F1EA, #4A5F4A)',
    'card-overlay': 'linear-gradient(to bottom, transparent, rgba(61, 40, 23, 0.4))',
    'dark-surface-gradient': 'linear-gradient(135deg, #1A1A1A, #252525)',
  },

  // ============ SHADOWS ============
  shadows: {
    'layer-0': 'none',
    'layer-1': '0 8px 16px rgba(0, 0, 0, 0.08)',
    'layer-2': '0 12px 24px rgba(0, 0, 0, 0.12)',
    'layer-3': '0 20px 40px rgba(0, 0, 0, 0.16)',
    'layer-4': '0 30px 60px rgba(0, 0, 0, 0.2)',
    'glow-sm': '0 0 20px rgba(106, 142, 107, 0.2)',
    'glow-md': '0 0 40px rgba(106, 142, 107, 0.3)',
    'inset-light': 'inset 0 2px 4px rgba(255, 255, 255, 0.1)',
  },

  // ============ ANIMATIONS ============
  animations: {
    // Timing Functions
    timing: {
      'ease-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },

    // Durations
    duration: {
      'fast': '150ms',
      'normal': '300ms',
      'slow': '500ms',
      'slower': '800ms',
      'slowest': '1200ms',
    },
  },

  // ============ BORDERS & RADIUS ============
  borderRadius: {
    'none': '0px',
    'sm': '4px',
    'md': '8px',
    'lg': '12px',
    'xl': '16px',
    'full': '9999px',
  },

  // ============ Z-INDEX HIERARCHY ============
  zIndex: {
    'background': '-1',
    'base': '0',
    'dropdown': '10',
    'sticky': '20',
    'fixed': '30',
    'modal-backdrop': '40',
    'modal': '50',
    'toast': '60',
    'tooltip': '70',
    'nav': '100',
  },

  // ============ LAYOUT ============
  layout: {
    'container-max': '1280px',
    'container-padding': '40px',
    'section-padding-y': '120px',
    'section-padding-y-sm': '80px',
    'section-padding-y-mobile': '60px',
    'section-gap': '48px',
  },

  // ============ BREAKPOINTS ============
  breakpoints: {
    'mobile': '320px',
    'tablet': '768px',
    'desktop': '1024px',
    'wide': '1440px',
    'ultrawide': '1920px',
  },
};

export type DesignTokens = typeof designTokens;
